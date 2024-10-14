const fs = require("fs");
const path = require("path");

const defaultConf = `
import ExpoModulesCore
import SwiftUI

struct CustomView: View {
    let viewKey: String
    let material: ViewMaterial
    let onEvent: EventDispatcher
    
    @ViewBuilder
    var body: some View {
        switch viewKey {
        default:
            ErrorMessage(message: "Native View not found")
        }
    }
}

`;

// Function to extract key, material, and struct name information from content
function extractKeyAndMaterial(content) {
  const result = [];
  const lines = content.split("\n");
  const eventImport = content.includes("import ExpoModulesCore") ? true : false;

  let inStruct = false;
  let material = false;
  let event = false;

  let structName = "";

  lines.forEach((line) => {
    if (/\/\/\s*key:/.test(line)) {
      const key = line.split(":").pop().trim();
      material = false;
      inStruct = false;
      event = false;
      structName = "";

      // Process the next lines to find the struct and material
      for (let i = lines.indexOf(line) + 1; i < lines.length; i++) {
        const currentLine = lines[i];
        if (/struct\s+(\w+)\s*:\s*View\s*{/.test(currentLine)) {
          inStruct = true;
          structName = currentLine.match(/struct\s+(\w+)\s*:/)[1];
          material = false;
          event = false;
        }
        if (inStruct) {
          if (/var\s+material:\s*ViewMaterial/.test(currentLine)) {
            material = true;
          }
          if (
            /var\s+onEvent:\s*EventDispatcher/.test(currentLine) &&
            eventImport
          ) {
            event = true;
          }
          if (/}/.test(currentLine)) {
            inStruct = false;
          }
        }
        if (!inStruct && /}/.test(currentLine)) {
          break;
        }
      }
      console.log(
        `\u001b[1;32m \n Extracted informations: \n key: ${key}, material: ${material}, name: ${structName}; event: ${event} \n`
      );
      result.push({
        key: key,
        material: material,
        structName: structName,
        event: event,
      });
    }
  });

  return result;
}

// Function to insert a new case into the switch statement
function insertConfig(content, newCase) {
  const switchPattern = /switch viewKey {[^}]*default:/;
  if (switchPattern.test(content)) {
    return content.replace(switchPattern, (match) => {
      return match.replace(/default:/, `${newCase};\ndefault:`);
    });
  }
  return content;
}

// Function to prepare the file content
function prepareFile(content, destDir) {
  const views = extractKeyAndMaterial(content);
  const indexFile = path.join(destDir, "index.swift");

  let config = fs.readFileSync(indexFile, "utf8");

  views.forEach((view) => {
    const key = view.key;
    const material = view.material ? "material: material" : "";
    const event = view.event ? "onEvent: onEvent" : "";

    const structName = view.structName || key;
    const newCase = `case ".$${key}": ${structName}(${material} ${(event && material) !== "" ? "," : ""} ${event})`;

    config = insertConfig(config, newCase);
  });

  fs.writeFileSync(indexFile, config, "utf8");
  console.log("\u001b[1;32m \n ✓ Prepared file");
}

// Function to clean the destination directory except index.swift
async function cleanDirectory(destDir) {
  const indexFile = await path.join(destDir, "index.swift");

  if (fs.existsSync(destDir) && fs.existsSync(indexFile)) {
    await console.log("\u001b[1;32m \n \n  Cleaning directory...");
    await fs.writeFileSync(indexFile, defaultConf, "utf8");
    await fs.readdir(destDir, (err, files) => {
      if (err) {
        return;
      }
    });
    console.log("\u001b[1;32m \n ✓ Directory cleaned");
  } else {
    console.error("\u001b[1;31m \n ✕ Destination directory does not exist");
  }

  await console.log("\u001b[1;32m \n Searching files");
  await copyFiles(srcDir, destDir);
}

// Function to copy files from source to destination
function copyFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }
  if (!fs.existsSync(destDir)) {
    console.error("\u001b[1;31m ✕ \n Cannot locate destination directory");
    return;
  }

  fs.readdirSync(srcDir).forEach((file) => {
    console.log("\u001b[1;32m Found file " + file);
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);

    if (fs.statSync(srcFile).isFile() && file.endsWith(".swift")) {
      const data = fs.readFileSync(srcFile, "utf8");
      prepareFile(data, destDir);
      fs.copyFileSync(srcFile, destFile);
    } else {
      console.log(`\u001b[1;33m \n⚠ Skipping non-swift-file: ${srcFile} \n`);
    }
  });
}

const args = process.argv.slice(2);
const customPath =
  args[0] !== "--no-clean" && args[0] !== undefined ? args[0] : null;
const srcDir =
  customPath !== null && customPath !== "undefined"
    ? path.resolve(customPath)
    : path.resolve("./swiftui");
const destDir = path.resolve("../ios/CustomViews");

if (args.includes("--no-clean")) {
  console.log(`\u001b[1;33m \n⚠ Cleaning  skipped \n`);
  console.log("\u001b[1;32m \n Searching files... \n");
  copyFiles(srcDir, destDir);
} else {
  cleanDirectory(destDir);
}
