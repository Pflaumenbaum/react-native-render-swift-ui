---
sidebar_position: 1
---




# Overview
![banner](../static/img/banner.PNG)
Welcome to the rn-render-swift-ui docs. Here you will find all important information about the GitHub package `react-native-render-swift-ui`



## What is it for?


With `rn-render-swift-ui` you can use native Swift UI components in your React Native applications. To use such components, either jsx or json can be used, which also allows rendering server returned json as swift ui. Currently over 20 Swift UI views are already integrated, but you can also create your own Swift UI views using our config plugin. React components can also be integrated into SwiftUI.






## Which components are available?


With this package we try to integrate as many Swift UI components as possible into react native from time to time. A list of all already integrated components can be found [here](./category/components). 




## Custom SwiftUI components?
`rn-render-swift-ui` also allows you to create your own native Swift UI views. All you have to do is use our config plugin provided for you. The config plugin will then search for Swift UI views in a folder you specify in the `APP.json` and extract certain data. These created swift ui views will be available in your App after a prebuild. All you have to do then, is to pass the view key you have specified earlyer to the RNSwiftUI.CustomView. You could use this view then like all other RNSwiftUI Components which are predefined.


## Which Plattforms are Supported?

:::warning
This package is *only* compatible with Apple operating systems. For other systems, please use a fallback, as the user would otherwise only see a *blank screen*. 
:::

This package is generally supported on all Apple operating systems that are also supported by expo. As the native part of this package is based on expo-modules-core, the installation of expo in the react native project is required. Further information can be found under [`Installation`](./installation.md). 


## Thanks 

The IOS implementation of this package was built on top of the github repository  [JSONDrivenUI](https://github.com/EnesKaraosman/JSONDrivenUI) from 
[Enes Karaosman](https://github.com/EnesKaraosman/). See the licence file linked below for more information.


:::info

This Package is licensed under the  **MIT**  License. Check it [here](https://github.com/Pflaumenbaum/react-native-render-swift-ui/blob/main/LICENSE).

:::

