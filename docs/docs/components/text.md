# Text

Displays a string using the SwiftUI Text element

<a type="button" href="https://developer.apple.com/documentation/swiftui/text" 



>
<svg xmlns="http://www.w3.org/2000/svg" style={{  marginBottom: "-3"  }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>
Official Docs
</a>

### Preview
<div style={{  width: "80%", minHeight: "20%", backgroundColor: "rgb(242, 242, 247)", border: "1px solid rgb(204, 204, 204)", borderRadius: 12, overflow: "hidden"  }}><div style={{  height: 30, backgroundColor: "rgb(240, 240, 240)", display: "flex", alignItems: "center", padding: "0px 10"  }}><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 95, 87)", marginRight: 5, display: "inline-block", marginLeft: 10 }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(255, 189, 46)", marginRight: 5, display: "inline-block"  }}></div><div style={{  width: 12, height: 12, borderRadius: "50%", backgroundColor: "rgb(40, 201, 64)", marginRight: 5, display: "inline-block"  }}></div></div><div>




<p style={{  textAlign: "center", marginTop: 20, marginBottom: 20  }}>no preview available</p>


</div></div>


### Example Usage

```tsx
   <RNSwiftUI.VStack>

            <RNSwiftUI.Text enableMarkdown >This is regular text.</RNSwiftUI.Text>
            <RNSwiftUI.Text enableMarkdown foregroundColor="#00aaaa" >This is a colored text.</RNSwiftUI.Text>
            <RNSwiftUI.Text enableMarkdown  >This is **bold** text, this is *italic* text, and this is ***bold, italic*** text.</RNSwiftUI.Text>
            <RNSwiftUI.Text enableMarkdown  >~~A strikethrough example~~</RNSwiftUI.Text>
            <RNSwiftUI.Text enableMarkdown  >`Monospaced works too`</RNSwiftUI.Text>
            <RNSwiftUI.Text enableMarkdown >Visit our docs: [click here](https://rn-render-swift-ui.netlify.app)</RNSwiftUI.Text>
         
   </RNSwiftUI.VStack>
```


### Props

| name | type | required | description | 
|------|------|----------|-------------|
|  children    |   `React.ReactNode`   |      ✓    |    The string that should be displayed as text        |
|  enableMarkdown    |   `React.ReactNode`   |      ✕    |    Enables Markdown interpretation for the Text. Default is `false`      |


> extends `SwiftUIViewProperties`