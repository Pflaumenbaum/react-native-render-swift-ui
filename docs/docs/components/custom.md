# Custom View


Integrates a custom Swift UI View into React Native. 


More information can be found under [Custom Views](../custom.md)



### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(242, 242, 247)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>


<p style={{  textAlign: "center", marginTop: 20, marginBottom: 20  }}>no preview available</p>




</div></div>


### Example Usage

```tsx
 <RNSwiftUI.RootView>

 <RNSwiftUI.CustomView key="some_Key" />

 <RNSwiftUI.RootView/>
  
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|key|  `string`  |    ✓    |   The key of the native view      |

> extends `SwiftUIViewProperties` && `SwiftUIViewValues`