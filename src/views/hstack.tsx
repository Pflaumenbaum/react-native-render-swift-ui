import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface HStackProps extends SwiftUIViewProperties {
  children: React.ReactNode;
}

/**
 * Displays a Swift UI HStack
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param children - The views to display in the HStack
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const HStack = (props: HStackProps) => {
  return null;
};

export default HStack;
