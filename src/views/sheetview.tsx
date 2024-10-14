import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface SheetViewProps extends SwiftUIViewProperties {
  children: React.ReactNode;
  optionalSubviews: React.ReactNode;
}

/**
 * Displays a Swift UI Sheet
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param optionalSubviews - The view that should trigger the Sheet
 * @param children - The view to display in Sheet
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const SheetView = (props: SheetViewProps) => {
  return null;
};

export default SheetView;
