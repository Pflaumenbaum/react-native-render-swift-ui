import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface TextProps extends SwiftUIViewProperties {
  children: string;
  enableMarkdown?: boolean
}

/**
 * Displays a Swift UI Text
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 * @param enableMarkdown - Enables Markdown interpretation for the Text. 
 * @param children - The Text as string
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const Text = (props: TextProps) => {
  return null;
};

export default Text;
