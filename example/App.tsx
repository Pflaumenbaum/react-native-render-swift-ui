import {
  ActivityIndicator,
  Text,
  Button,
  Share,
} from "react-native";
import { RNSwiftUI } from "react-native-render-swift-ui";

export default function App() {
  return (
    <>
      <RNSwiftUI.RootView
        reactViews={[
          <Text>Hello Text</Text>,
          <Button
            title="Hello Button"
            onPress={() => Share.share({ title: "Hallo", url: "hallo" })}
          />,
          <ActivityIndicator />,
        ]}
      >
        <RNSwiftUI.NavigationSplitView
          title="Example App"
          optionalSubviews={
            <RNSwiftUI.ContentUnavailableView
              title="Placheholder Page"
              systemIconName="placeholdertext.fill"
              description="Select a page from the side menu"
            />
          }
        >
          <RNSwiftUI.List>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="house" text="Home" />
              }
            >
              <RNSwiftUI.Label systemIconName="house" text="Home" />
            </RNSwiftUI.NavigationLink>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="text.append" text="Text" />
              }
            >
              <RNSwiftUI.VStack>
                <RNSwiftUI.Text enableMarkdown>
                  This is regular text.
                </RNSwiftUI.Text>
                <RNSwiftUI.Text enableMarkdown foregroundColor="#00aaaa">
                  This is a colored text.
                </RNSwiftUI.Text>
                <RNSwiftUI.Text enableMarkdown>
                  This is **bold** text, this is *italic* text, and this is
                  ***bold, italic*** text.
                </RNSwiftUI.Text>
                <RNSwiftUI.Text enableMarkdown>
                  ~~A strikethrough example~~
                </RNSwiftUI.Text>
                <RNSwiftUI.Text enableMarkdown>
                  `Monospaced works too`
                </RNSwiftUI.Text>
                <RNSwiftUI.Text enableMarkdown>
                  Visit our docs: [click
                  here](https://rn-render-swift-ui.netlify.app)
                </RNSwiftUI.Text>
              </RNSwiftUI.VStack>
            </RNSwiftUI.NavigationLink>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="square" text="Image" />
              }
            >
              <RNSwiftUI.HStack>
                <RNSwiftUI.Image systemIconName="tree" />
                <RNSwiftUI.Image imageUrl="{your url here}" />
                <RNSwiftUI.Image localImageName="test" />
              </RNSwiftUI.HStack>
            </RNSwiftUI.NavigationLink>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="list.bullet" text="List" />
              }
            >
              <RNSwiftUI.List listStyle="inset">
                <RNSwiftUI.Section
                  optionalSubviews={
                    <RNSwiftUI.Label systemIconName="macmini" text="Devices" />
                  }
                >
                  <RNSwiftUI.Label
                    text="Apple Pencil"
                    systemIconName="pencil"
                  />
                  <RNSwiftUI.Label text="IPhone" systemIconName="iphone" />
                  <RNSwiftUI.Label text="MacBook" systemIconName="macbook" />
                  <RNSwiftUI.Label text="IPad" systemIconName="ipad" />
                </RNSwiftUI.Section>
                <RNSwiftUI.Section
                  optionalSubviews={
                    <RNSwiftUI.Label
                      systemIconName="refrigerator.fill"
                      text="Systems"
                    />
                  }
                >
                  <RNSwiftUI.Label text="tvOS" systemIconName="tv" />
                  <RNSwiftUI.Label text="iOS" systemIconName="iphone" />
                  <RNSwiftUI.Label text="macOS" systemIconName="macbook" />
                  <RNSwiftUI.Label text="IPad OS" systemIconName="ipad" />
                </RNSwiftUI.Section>
              </RNSwiftUI.List>
            </RNSwiftUI.NavigationLink>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="gear" text="Popover" />
              }
            >
              <RNSwiftUI.PopoverView
                height={20}
                optionalSubviews={
                  <RNSwiftUI.ContentUnavailableView
                    height={200}
                    width={400}
                    title="Popover Content here"
                    systemIconName="questionmark.app"
                    description="On IOS a popover represents a sheet"
                  />
                }
              >
                <RNSwiftUI.VStack>
                  <RNSwiftUI.Text foregroundColor="#00aaaa">
                    Open Popover
                  </RNSwiftUI.Text>
                </RNSwiftUI.VStack>
              </RNSwiftUI.PopoverView>
            </RNSwiftUI.NavigationLink>
            <RNSwiftUI.NavigationLink
              optionalSubviews={
                <RNSwiftUI.Label systemIconName="swift" text="Custom View" />
              }
            >
              <RNSwiftUI.CustomView key="colorPicker" />
            </RNSwiftUI.NavigationLink>
          </RNSwiftUI.List>
        </RNSwiftUI.NavigationSplitView>
      </RNSwiftUI.RootView>
    </>
  );
}
