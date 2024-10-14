import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface ReactChildViewProps extends SwiftUIViewProperties {
  index: number;
}

/**
   * Integrates a React Native View in SwiftUI
   *
   * @remarks
   * This Compoent must be used as a child of RNSwiftUI.RootView.
   
   * @param index - The index of the ReactViews array from RNSwiftUI.RootView
   * @extends SwiftUIViewProperties
   * 
   *
   * 
   */

export const ReactChildView = (props: ReactChildViewProps) => {
  return null;
};

export default ReactChildView;
