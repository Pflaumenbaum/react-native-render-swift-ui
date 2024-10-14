---
sidebar_position: 5
---

# View Properties

A list of all SwiftUI View properties that can be set for a view.

| Property Name           | Type                   | Description                                                                                       |
|-------------------------|------------------------|---------------------------------------------------------------------------------------------------|
| `font`                  | `FontStyle`            | Sets the style of the font used for text, such as italic or bold.                                 |
| `fontWeight`            | `FontWeight`           | Defines the thickness of the font characters.                  |
| `foregroundColor`       | `string`               | Specifies the color of the text or foreground elements using a color code or name (e.g., `#FFFFFF`). |
| `borderColor`           | `string`               | Defines the color of the border around a UI element using a color code or name.                   |
| `borderType`            | `string`               | Determines the style of the border.                         |
| `borderWidth`           | `number`               | Specifies the thickness of the border around a UI element.                                        |
| `padding`               | `number`               | Sets the space inside the element between the content and the border.                             |
| `spacing`               | `number`               | Defines the space between different UI elements.                                                  |
| `width`                 | `number`               | Specifies the width of a UI element.                                                              |
| `height`                | `number`               | Specifies the height of an UI element.                                                             |
| `minLength`             | `number`               | Sets the minimum length for an UI element.                             |
| `backgroundColor`       | `string`               | Defines the background color of a UI element using a hex code.                          |
| `tint`       | `string`               | Defines the `tint` color of a UI element using a hex code. In IOS 15 and older it uses `accentColor`                          |
| `overlayColor`          | `string`               | Specifies the color of an overlay that might appear over a UI element using a color code or name. |
| `horizontalAlignment`   | `HorizontalAlignment`  | Determines how content is aligned horizontally within a UI element. |
| `verticalAlignment`     | `VerticalAlignment`    | Determines how content is aligned vertically within a UI element.|
| `axis`                  | `ScrollViewAxis`       | Specifies the axis along which a scroll view can scroll (e.g., horizontal, vertical).             |
| `showsIndicators`       | `boolean`              | Indicates whether scroll indicators (like scrollbars) should be displayed.                        |
| `titleDisplayMode`      | `TitleDisplayMode`     | Controls how the title is displayed in the UI, such as always visible or only when scrolling.     |
| `navigationBarHidden`   | `boolean`              | Determines whether the navigation bar is hidden or visible.                                       |
| `ignoreSafeArea`        | `boolean`              | If true, the UI element can extend into the safe area of the screen, ignoring system insets.      |
| `listStyle`             | `ListStyle`            | Defines the appearance of lists (e.g., plain, grouped, inset).                                    |
| `hoverEffect`           | `HoverEffect`          | Specifies the visual effect when a user hovers over a UI element.                                 |
| `toolbarPlacement`      | `ToolbarPlacement`     | Determines where the toolbar is placed in the UI.
| `accessibilityHint`      | `string`     | IOS Accessibility Hint
| `accessibilityLabel`      | `string`     | IOS Accessibility Label
| `accessibilityIdentifier`      | `string`     | IOS Accessibility Identifer
| `accessibilityValue`      | `string`     | IOS Accessibility Value
| `enableMarkdown`      | `boolean`     | Enables Markdown interpretation for the Text.


> The types mentioned here refer to the types defined in Typescript for this package.