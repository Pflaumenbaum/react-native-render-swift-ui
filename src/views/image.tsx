import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";
import { SFSymbol } from "sf-symbols-typescript";

export interface ImageProps extends SwiftUIViewProperties {
  systemIconName?: SFSymbol;
  localImageName?: string;
  imageUrl?: string;
}

/**
   * Displays a Swift UI Image
   *
   * @remarks
   * This Compoent must be used as a child of RNSwiftUI.RootView.
   
   * @param systemIconName - The symbol to display (SF symbol) [optional]
   * @param imageUrl - The url for the image that should be shown (https)[optional]
   * @param localImageName - The name of an asset [optional]
   * @extends SwiftUIViewProperties
   * 
   *
   * 
   */

export const Image = (props: ImageProps) => {
  return null;
};

export default Image;
