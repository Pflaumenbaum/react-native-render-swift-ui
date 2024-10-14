import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface NavigationViewProps extends SwiftUIViewProperties {
  children: React.ReactNode;
  title?: string
}

/**
 * Displays a Swift UI LazyHStack
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 * @param title - The navigation title
 * @param children - The views to display in the NavigationView
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const NavigationView = (props: NavigationViewProps) => {
  return null;
};

export default NavigationView;
