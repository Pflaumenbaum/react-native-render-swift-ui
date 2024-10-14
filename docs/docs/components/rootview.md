---
sidebar_position: 1
---

# RootView


Creates a Swift UI View in which Swift UI Components defined as children can be used.





### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(242, 242, 247)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>


<p style={{  textAlign: "center", marginTop: 20, marginBottom: 20  }}>no preview available</p>




</div></div>


### Example Usage

```tsx
 <RNSwiftUI.RootView
        reactViews={[
          <Text>Hello World</Text>
        ]}>

  {"components of this libary here"}

 <RNSwiftUI.RootView/>
  
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|reactViews|  `React.ReactNode[]`  |    ✕    |   Array of react views that should be available in Swift UI     |
|onSwiftUIEvent|  `(event: { nativeEvent: SwiftUiEvent }) => void`  |    ✕    |  Is triggered on native SwiftUI event    | 
|style|  `ViewStyle`  |    ✕    |  Style the root view     | 
> extends `SwiftUIViewProperties`


