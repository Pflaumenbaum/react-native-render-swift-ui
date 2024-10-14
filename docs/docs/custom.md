# Custom Views

:::warning 
You can't define non-optional properties inside views that have the key comment. Views that are not exported to React Native (without the key comment) can use required props.
:::


## Preparation

Make sure you've added the rn-render-swift-ui config plugin to your `app.json`. More information about that could be found under [installation](./installation.md#2-config-plugin).

## Usage

1. In order to create a custom view, you will need to add a .swift file to the src path that is specified in the `app.json` file under our config plugin. The default path, which is used if you do not set the option in the app json, is `app/swiftui`. 

2. After that you could start writing swift code.

3. To export a Swift UI view to React Native, you need to add a comment to the line directly above the view. This comment must contain the following text: `key: The key to invoke the view from React Native`. 

#### Example:
```swift
// key:EmailAdressView
struct EmailAddress: View {
    var body: some View {
        HStack {
            Image(systemName: "envelope")
            Text("example@example.org")
        }
    }
}
``` 

### Call the view from React Native

In order to call the view from React Native, you will need to add a custom view to the root view and pass the param key to it

#### Example

```swift
 <RNSwiftUI.CustomView key="some_Key" />
```



## Get data from React Native

To get properties from React Native inside your own native view, declare material as shown below inside your views struct.

```swift
var material: ViewMaterial
```
From the material object you could extract the following informations:
##### Definition View Material
1. id: Swift UUID
2. type: SwiftUIViewType
3. values: SwiftUIViewValues?
4. properties: SwiftUIViewProperties?
5. subviews: [ViewMaterial]?
6. optionalSubviews: [ViewMaterial]?

> All types declared here are listed in the typescript types. The view Material represents the whole structure as described above, which is made up of these types.

### Custom properties
You could extract and parse `material.properties.json' to pass custom properties to your custom view.
### Display subviews

In order to display a sub-view or an optional sub-view, you could place the following line anywhere in your code where you want the sub-view to be displayed.

``` swift
ForEach(material.subviews or material.optionalSubviews) {
    ViewFactory(material: $0, children: children, onEvent: onEvent).toPresentable()
}
```

## Send Events to react native

To send an event to react native you need to follow these steps:

1. Add this line at the beginning of the  `.swift` file

> `import ExpoModulesCore`

2. Add the following parameter to the view to which you want to add the ability to send events for native response:

> 
```swift
var onEvent: EventDispatcher
```
3. To call the event, execute onEvent as shown below:
```swift
onEvent(["eventKey": value])
```


## Custom native dependencys 

To add a custom native dependency to your project, update the `dependencies` property in your config plugin configuration within `app.json`. This property should be an array of strings, each representing the name of a native dependency. The dependencies will be included after the next prebuild. Ensure that the package names match the native pod package names.

#### Example

```js
[
  "../withCustomPrebuildScript",
  {
    [...],
    "dependencies": ["some-pod-name", ...]
  }
]
```