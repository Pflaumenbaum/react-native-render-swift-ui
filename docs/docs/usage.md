---
sidebar_position: 3
---

# Usage




#### 1. Import `RNSwiftUI` from the `react-native-render-swift-ui` package

````js
import { RNSwiftUI } from "react-native-render-swift-ui";
````

#### 2. Add an `RNSwiftUI.RootView` to your component

`````jsx
<RNSwiftUI.RootView>
     
</RNSwiftUI.RootView>
`````

#### 3. Add any component defined under the [components](category/components) section (without RootView) as child to the `RNSwiftUI.RootView` 

````jsx
<RNSwiftUI.RootView>
     <RNSwiftUI.Text>
     Hallo Welt
     <RNSwiftUI.Text/>
</RNSwiftUI.RootView>
````

#### 4. Integrate an React Native View using `RNSwiftUI.ReactChildView` to the `RNSwiftUI.RootView`. 

````jsx
  <RNSwiftUI.RootView
        reactViews={[
          <Text>Hello Text</Text>,
          <Button title="Hello Button" onPress={() => alert("Button clicked!")} />,
        ]}
      >
     // Text
     <RNSwiftUI.ReactChildView index={0}/>
     // Button
     <RNSwiftUI.ReactChildView index={1}/>
   </RNSwiftUI.RootView>
````
> For that you need to pass an array of react nodes to the RNSwiftUI.RootView. Then you can use the RNSwiftUI.ReactChildView to display the react node by passing the index of the React.ReactNode of the reactViews array to it.  