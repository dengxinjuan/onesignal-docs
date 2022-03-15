---
title: "Expo SDK Setup"
slug: "react-native-expo-sdk-setup"
excerpt: "Instructions for adding the OneSignal React Native & Expo SDK to your app for iOS, Android, and derivatives like Amazon."
hidden: false
createdAt: "2021-12-28T02:16:39.782Z"
updatedAt: "2022-01-28T17:32:34.443Z"
---
[block:callout]
{
  "type": "info",
  "body": "This documentation shows how to use our SDK with your Expo Managed Workflow application.\n\nIf you are using the Bare Workflow, please review the [React Native + Expo SDK Setup instead](https://documentation.onesignal.com/docs/react-native-sdk-setup).",
  "title": "Expo Managed Workflow"
}
[/block]
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.

## iOS Requirements
* An iOS 9+ or iPadOS device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">An iOS Push Certificate</a>.

## Android Requirements
* An Android 4.0.3+ device or emulator with "Google Play Store (Services)" installed.
* <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">A Google/Firebase Server API Key</a>.

### Amazon & Huawei Requirements
Follow these instructions if your app is distributed on the Amazon AppStore and/or the Huawei AppGallery.
* <a href="doc:generate-an-amazon-api-key" target="_blank">Generate an Amazon API Key</a>.
* <a href="doc:huawei-unity-sdk-setup" target="_blank">Huawei Unity SDK Setup</a>.

#Step 2. Add the OneSignal package to your app
[block:callout]
{
  "type": "info",
  "title": "OneSignal Expo Sample App",
  "body": "Sample [repo](https://github.com/OneSignalDevelopers/OneSignal-ReactNative-Expo-Sample) containing the sample app for running OneSignal with Expo."
}
[/block]
Make sure you have the Expo CLI installed on your computer.

**2.1** Install the OneSignal Expo plugin using the Expo CLI

`expo install onesignal-expo-plugin`

**2.2** Install the SDK using Yarn or NPM

 - Yarn: `yarn add react-native-onesignal`
 - NPM `npm install --save react-native-onesignal`

**2.3** Configure your app.json/app.config.js
Add the plugin to the [plugin array](https://docs.expo.dev/versions/latest/config/app/):

**app.json**
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"plugins\": [\n    [\n      \"onesignal-expo-plugin\",\n      {\n        \"mode\": \"development\",\n      }\n    ]\n  ]\n}",
      "language": "json"
    }
  ]
}
[/block]
or

**app.config.js**
[block:code]
{
  "codes": [
    {
      "code": "export default {\n  ...\n  plugins: [\n    [\n      \"onesignal-expo-plugin\",\n      {\n        mode: \"development\",\n      }\n    ]\n  ]\n};",
      "language": "javascript"
    }
  ]
}
[/block]
**Plugin Prop**
You can pass props to the plugin config object to configure:

| Plugin Prop              |          |                                                                                                                                                                                                                                                                                                                                |
|--------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mode`                   | **required** | Used to configure  [APNs environment](https://developer.apple.com/documentation/bundleresources/entitlements/aps-environment)  entitlement.  `"development"` or  `"production"`                                                                                                                                                |
| `devTeam`                | optional | Used to configure Apple Team ID. You can find your Apple Team ID by running `expo credentials:manager`  e.g: `"91SW8A37CR"`                                                                                                                                                                                                    |
| `iPhoneDeploymentTarget` | optional | Target `IPHONEOS_DEPLOYMENT_TARGET` value to be used when adding the iOS [NSE](https://documentation.onesignal.com/docs/service-extensions). A deployment target is nothing more than the minimum version of the operating system the application can run on. This value should match the value in your Podfile e.g: `"12.0"`. |

**
**2.4** Adding the OneSignal App ID

Add your OneSignal App ID to your [Expo constants via the extra param](https://docs.expo.dev/versions/latest/config/app/):
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"extra\": {\n    \"oneSignalAppId\": \"<YOUR APP ID HERE>\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
You can then access the value to pass to the *setAppId* function:
[block:code]
{
  "codes": [
    {
      "code": "import OneSignal from 'react-native-onesignal';\nimport Constants from \"expo-constants\";\nOneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);",
      "language": "javascript"
    }
  ]
}
[/block]
Alternatively, pass the OneSignal app ID directly to the function:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setAppId(\"YOUR-ONESIGNAL-APP-ID\");",
      "language": "javascript"
    }
  ]
}
[/block]
**2.5** Run your Expo app
[block:code]
{
  "codes": [
    {
      "code": "$ expo prebuild\n\n# Build your native iOS project\n$ expo run:ios\n\n# Build your native Android project\n$ expo run:android",
      "language": "shell"
    }
  ]
}
[/block]