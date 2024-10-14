import React from "react";
import { SwiftUIViewProperties } from "../ReactNativeRenderSwiftUi.types";

export interface ListProps extends SwiftUIViewProperties {
  children: React.ReactNode;
}

/**
 * Displays a Swift UI List
 *
 * @remarks
 * This Compoent must be used as a child of RNSwiftUI.RootView.
 *
 * @param children - The views to display in the List
 * @extends SwiftUIViewProperties
 *
 *
 *
 */

export const List = (props: ListProps) => {
  return null;
};

export default List;
