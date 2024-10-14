# ReactChildView

Integrates a React Native View into Swift UI. 


To display a react native view in SwiftUI, you must first pass it as an array to the property `reactViews`. To then display a view from this array in Swift UI, you must place a `<RNSwiftUI.ReactChildView/>`there and assign the index from the array to it. To do this, use the property `index`.



### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(242, 242, 247)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>


<p style={{  textAlign: "center", marginTop: 20, marginBottom: 20  }}>no preview available</p>




</div></div>


### Example Usage

```tsx
 <RNSwiftUI.RootView
        reactViews={[
          <Text>Hello World</Text>,
          <Button title="Trigger RNButton from Swift UI" onPress={() => alert()} />,
        ]}
      >

<RNSwiftUI.ReactChildView index={0} />

 <RNSwiftUI.RootView/>
  
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|index|  `string`  |    ✓    |   The index of the react view      |

> extends `SwiftUIViewProperties`