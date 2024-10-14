import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface ZStackProps extends SwiftUIViewProperties {
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

export const ZStack = (props: ZStackProps) => {
  return null;
};

export default ZStack;
