import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ReactNativeRenderSwiftUiViewProps } from "./ReactNativeRenderSwiftUi.types";

const NativeView: React.ComponentType<ReactNativeRenderSwiftUiViewProps> =
  requireNativeViewManager("ReactNativeRenderSwiftUi");

export function RNSwiftUIJsonView({
  data,
  ...props
}: ReactNativeRenderSwiftUiViewProps) {
  return <NativeView data={JSON.stringify(data)} {...props} />;
}
