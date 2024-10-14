import React from "react";
import { SwiftUIViewPropertieKeys, SwiftUIViewValueKeys } from "./CONSTS";

interface SerializedElement {
  type: string;
  properties: {
    [key: string]: any;
  };
  subviews: SerializedElement[];
  optionalSubviews: SerializedElement[];
  values: {
    [key: string]: any;
  };
}

const filterObjByKeysArray = (
  dictionary: { [key: string]: any },
  keysToKeep: string[]
): { [key: string]: any } => {
  return Object.fromEntries(
    Object.entries(dictionary).filter(([key]) => keysToKeep.includes(key))
  );
};

const serializeReactElement = (
  element: React.ReactNode
): SerializedElement | null => {
  if (!React.isValidElement(element)) {
    return null;
  }

  const { type, props, key } = element;
  const regexPattern = /\b\w+\b/g;
  const typeMatch = type.toString().match(regexPattern);
  const filteredProperties = filterObjByKeysArray(
    props,
    SwiftUIViewPropertieKeys
  );
  const filteredValues = filterObjByKeysArray(props, SwiftUIViewValueKeys);
  const serializedOptionalSubViews =
    (props.optionalSubviews &&
      React.Children.toArray(props.optionalSubviews).map((child) =>
        serializeReactElement(child)
      )) ||
    [];
  const serializedSubViews =
    (props.children &&
      React.Children.toArray(props.children).map((child) =>
        serializeReactElement(child)
      )) ||
    [];

  if (
    typeof element.props.children === "string" ||
    typeof element.props.children === "number"
  ) {
    return {
      type: typeMatch?.[1] || "",
      properties: filteredProperties || {},
      values: { ...filteredValues, text: element.props.children},
      subviews: [],
      optionalSubviews: [],
    };
  } else {
    return {
      type: typeMatch?.[1] || "",
      properties: filteredProperties,
      values: {...filteredValues, key: key},
      subviews: serializedSubViews || [],
      optionalSubviews: serializedOptionalSubViews || [],
    };
  }
};

export default serializeReactElement;
