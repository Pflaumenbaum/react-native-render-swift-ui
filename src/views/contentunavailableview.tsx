import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";
import { SFSymbol } from "sf-symbols-typescript";

export interface ContentUnavailableViewProps extends SwiftUIViewProperties {
  title: string;
  systemIconName?: SFSymbol;
  description?: string;
}

/**
 * Displays a Swift UI ContentUnavailableView
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param title - The title
 * @param systemIconName - The symbol to display (SF symbol) [optional]
 * @param description - The desctiption [optional]
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const ContentUnavailableView = (props: ContentUnavailableViewProps) => {
  return null;
};

export default ContentUnavailableView;
