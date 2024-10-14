---
sidebar_position: 6
---

# Events

Events allow you to execute custom JS code on a native event. These events can also be triggered in custom components.

To use these events, you need to attach a function to the `onSwiftUIEvent={}`prop. All events triggered within the root view will be sent to this prop. So it is important to note that when you use the events function with your custom components, you need to use a unique key for the event. 

The event key under which the event is triggered can be found in the documentation or, in the case of a custom component, by checking out your code.


# Example

```js
      <RNSwiftUI.RootView onSwiftUIEvent={(e) => console.log(e.nativeEvent)}/>
      {components}
      <RNSwiftUI.RootView/>
```