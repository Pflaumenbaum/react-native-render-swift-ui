import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface VStackProps extends SwiftUIViewProperties {
  children: React.ReactNode;
}

/**
 * Displays a Swift UI VStack
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param children - The views to display in the VStack
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const VStack = (props: VStackProps) => {
  return null;
};

export default VStack;
