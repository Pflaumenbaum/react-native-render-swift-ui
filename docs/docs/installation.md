---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




# Installation

#### 1. Package installation

<Tabs>
  <TabItem value="expo" label="expo cli" default>
   ```
npx expo install react-native-render-swift-ui
```

  </TabItem>
  <TabItem value="npm" label="npm">
      ```
npm install react-native-render-swift-ui
``` 

  </TabItem>
    <TabItem value="yarn" label="yarn">
      ```
yarn add react-native-render-swift-ui
```

  </TabItem>
 
</Tabs>


After installation you **need** to run `npx expo prebuild` or `pod install` because this package uses native code

> This package does not work with in Expo go. You need to create a Dev-Client using **expo eas** or **prebuild**. [Instructions Dev-Client](https://docs.expo.dev/develop/development-builds/create-a-build/)

<br />

#### 2. Config plugin

To create your **own components** it is necessary to set up the **config plugin** provided with this library.
To do this, add the following json to your project's `App.json` file within the plugins array.

```json
        ["react-native-render-swift-ui",
        {
          "noClean": false, 
          "srcDir": "./swiftui/"
        }]  
```

> The options **noClean** and **srcDir** are _optional_. If you dont set them, the default options will be used

