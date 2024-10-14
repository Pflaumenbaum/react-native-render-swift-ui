# MaskView

Masks two views



### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>


![button preview](@site/static/img/docs/mask.png)


</div></div>


### Example Usage

```tsx
<RNSwiftUI.MaskView
    optionalSubviews={
        <RNSwiftUI.Text font="largeTitle" fontWeight="black">
             Hello World
        </RNSwiftUI.Text>}
     >
    <RNSwiftUI.Image imageUrl="https://cdn.pixabay.com/photo/2016/04/22/13/03/path-1345721_1280.jpg" />
</RNSwiftUI.MaskView>
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|  children    |   `React.ReactNode`   |      ✓    |    The RNSwiftUI view which should be masked        |
|  optionalSubviews    |   `React.ReactNode`   |      ✓    |    The RNSwiftUI view that should be used as a mask       |

> extends `SwiftUIViewProperties`