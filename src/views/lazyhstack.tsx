import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface LazyHStackProps extends SwiftUIViewProperties {
  children: React.ReactNode;
}

/**
 * Displays a Swift UI LazyHStack
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param children - The views to display in the LazyHStack
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const LazyHStack = (props: LazyHStackProps) => {
  return null;
};

export default LazyHStack;
