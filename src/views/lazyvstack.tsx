import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface LazyVStackProps extends SwiftUIViewProperties {
  children: React.ReactNode;
}

/**
 * Displays a Swift UI LazyVStack
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param children - The views to display in the LazyVStack
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const LazyVStack = (props: LazyVStackProps) => {
  return null;
};

export default LazyVStack;
