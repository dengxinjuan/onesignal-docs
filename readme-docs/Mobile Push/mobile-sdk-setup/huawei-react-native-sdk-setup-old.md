---
title: "Huawei React Native SDK Setup - old"
slug: "huawei-react-native-sdk-setup-old"
hidden: true
createdAt: "2022-03-02T18:17:00.418Z"
updatedAt: "2022-03-02T18:17:00.418Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal React Native SDK
Follow the [OneSignal React Native SDK setup guide](doc:react-native-sdk-setup). Firebase / Google setup not required for app builds released to the Huawei AppGallery.

#Step 3. Huawei Setup
**3.1** [Device and Android SDK Setup](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/preparedevenv-0000001050155838-V1)
**3.2** [Configure app information in AppGallery Connect](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/Preparations#h1-1575707195634)
**3.3** [Integrating the HMS Core SDK](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/Preparations#h2-1584707362385)
**3.4** Add dependencies to React Native android project
     * In the case ReactNative plugin is going to be used (see step 3), then this step can be skipped.
     * Under project build.gradle add the following
[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        google()\n        jcenter()\n        maven { url 'http://developer.huawei.com/repo/' }\n    }\n\n    dependencies {\n        ...\n        classpath 'com.huawei.agconnect:agcp:1.2.1.301'\n    }\n}\n\nallprojects {\n    repositories {\n        google()\n        jcenter()\n        maven { url 'http://developer.huawei.com/repo/' }\n    }\n}\n",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]
* Under app build.gradle add the following
[block:code]
{
  "codes": [
    {
      "code": "apply plugin: \"com.android.application\"\napply plugin: \"com.huawei.agconnect\"\n\n...\n  \ndependencies {\n    ...\n    implementation 'com.huawei.hms:push:5.3.0.304'\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
#Step 4. React Native Huawei Plugin setup (Optional)
OneSignal does not require the React Native Huawei plugin and in most cases you can omit this. However, if you need specific Huawei features in React Native  see [Integrating React Native HMS Push Kit Module](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/integraternmodule-0000001050157791-V1)

**4.1** When following the plugin setup, after downloading the plugin remove the RNHmsMessageService from the downloaded plugin's  `AndroidManifest.xml` file under the android package.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f970dbf-huaweireactnative.png",
        "huaweireactnative.png",
        1392,
        552,
        "#262424"
      ]
    }
  ]
}
[/block]
#Step 5. Huawei Location Service (Optional)
**5.1** Add `implementation 'com.huawei.hms:location:<HUAWEI HMS VERSION #>` to your app build.gradle's dependencies section.
**5.2** Make sure to also add the location permission to your AndroidManifest.xml if you don't have this already
[block:code]
{
  "codes": [
    {
      "code": "dependencies {\n    ...\n    implementation 'com.huawei.hms:location:4.0.0.300'\n}",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]
## Notes/Resources
#### [Huawei React Native Sample](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/rn-sample-code-0000001050157811)
This is an example React Native project integrating the Huawei React Native Plugin.

#### [Huawei Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-error-code)
* HMS error code reference to help debug logs and successfully integrate HMS Core SDK with the OneSignal SDK.

####  Keystore Signature
* **[Huawei Signing Certificate Usage](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/Preparations#h2-1575707405416)**
  * You may need to create a debug or release keystore signature (choose the correct app build path, `debug` or `release`) so that a `6003` error is avoided when registering for Huawei `pushToken` with the OneSignal SDK.