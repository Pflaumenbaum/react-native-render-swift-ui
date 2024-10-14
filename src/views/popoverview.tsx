import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface PopoverViewProps extends SwiftUIViewProperties {
  children: React.ReactNode;
  optionalSubviews: React.ReactNode;
}

/**
 * Displays a Swift UI Popover
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param optionalSubviews - The view that should trigger the popover
 * @param children - The view to display in popover
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const PopoverView = (props: PopoverViewProps) => {
  return null;
};

export default PopoverView;
