# Image

Displays a  SwiftUI Image 



<a type="button" href="
https://developer.apple.com/documentation/swiftui/image" 
>
<svg xmlns="http://www.w3.org/2000/svg" style={{  marginBottom: "-3",   }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>
Official Docs
</a>


### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>



![preview](@site/static/img/docs/image.png)


</div></div>


### Example Usage

```tsx
<RNSwiftUI.HStack>
<RNSwiftUI.Image systemIconName="tree"  />
<RNSwiftUI.Image  imageUrl="https://{urltoimage}"  />
<RNSwiftUI.Image  localImageName="test" />
</RNSwiftUI.HStack>
  
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|imageUrl|  `string`  |    ✓ / ✕    |   The url for the image that should be shown (https)     |
|  systemIconName    |   `SFSymbol`   |     ✓ / ✕     |    The symbol to display (SF symbol)    |
|  localImageName    |   `string`   |      ✓ / ✕    |    The name of an xcode asset       |

> extends `SwiftUIViewProperties`