const { withDangerousMod } = require("@expo/config-plugins");
const { execSync } = require("child_process");
const readline = require("readline");

const withRNRenderSwiftUI = (config, { srcDir, noClean, dependencys }) => {
  return withDangerousMod(config, [
    "ios",
    (config) => {
      console.log("Running RNSwiftUI preperation");

      try {
        execSync(
          `cp ../ios/ReactNativeRenderSwiftUi.podspec.config ../ios/ReactNativeRenderSwiftUi.podspec`,
          { stdio: "inherit" }
        );
        dependencys &&
          dependencys.forEach((dependency) => {
            if (
              dependency !== "Kingfischer" &&
              dependency !== "ExpoModulesCore"
            )
              execSync(
                `sed -i '' -e '/# Custom Dependencys/p; s/# Custom Dependencys/s.dependency "${dependency}"/' ../ios/ReactNativeRenderSwiftUi.podspec
`,
                { stdio: "inherit" }
              );
          });
        execSync(
          `find ../ios/CustomViews -type f ! -name 'index.swift' -exec rm -f {} +`,
          { stdio: "inherit" }
        );
        execSync(
          `node ../custom.js ${srcDir !== null && srcDir} ${noClean && "--no-clean"} --example`,
          { stdio: "inherit" }
        );
        console.log(
          "\u001b[1;32m \n✓ The following dependencies have been added to your project:  \n" +
            "  " +
            JSON.stringify(dependencys || []) +
            "\n"
        );

        readline
          .createInterface({ input: process.stdin, output: process.stdout })
          .question(" Do you want to run pod install? (yes/no) ", (answer) => {
            answer.trim().toLowerCase() === "yes"
              ? require("child_process").execSync("cd ios && pod install", {
                  stdio: "inherit",
                })
              : console.log(`\u001b[1;33m \n⚠ Pod-Install skipped \n`);
            process.exit();
          });
        setTimeout(
          () =>
            console.log(
              "\nDo you want to run pod install in the ios directory? (yes/no) "
            ),
          1000
        );
      } catch (error) {
        console.error("Error running rn-render-swift-ui preparation:", error);
      }
      return config;
    },
  ]);
};

module.exports = withRNRenderSwiftUI;
