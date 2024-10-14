import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface MaskViewProps extends SwiftUIViewProperties {
  children: React.ReactNode;
  optionalSubviews: React.ReactNode;
}

/**
 * Displays a Swift UI MaskView
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param optionalSubviews - The view to display as a mask
 * @param children - The view that should be under the mask
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const MaskView = (props: MaskViewProps) => {
  return null;
};

export default MaskView;
