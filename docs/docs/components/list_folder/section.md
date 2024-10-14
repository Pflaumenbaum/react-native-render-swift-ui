# Section

Groups a List in different sections. If it is used outside of a list it will present a sticky element.

<a type="button" href="https://developer.apple.com/documentation/swiftui/section" 

 >
<svg xmlns="http://www.w3.org/2000/svg" style={{  marginBottom: "-3"  }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>
Official Docs
</a>

### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(242, 242, 247)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>

![preview](@site/static/img/docs/sections.png)


</div></div>



### Example Usage

```tsx
<RNSwiftUI.List>
    <RNSwiftUI.Section optionalSubviews={<RNSwiftUI.Label  systemIconName="macmini"  text="Devices"/>}>
          <RNSwiftUI.Label text="Apple Pencil" systemIconName="pencil"/>
          <RNSwiftUI.Label text="IPhone" systemIconName="iphone"/>
          <RNSwiftUI.Label text="MacBook" systemIconName="macbook"/>
          <RNSwiftUI.Label text="IPad" systemIconName="ipad"/>
  </RNSwiftUI.Section>
</RNSwiftUI.List>
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|optionalSubviews| `React.ReactNode`   |    ✓    |    The label of the section        |
|  children    |   `React.ReactNode`   |      ✓    |    The RNSwiftUI views that should be displayed in th section       |


> extends `SwiftUIViewProperties`