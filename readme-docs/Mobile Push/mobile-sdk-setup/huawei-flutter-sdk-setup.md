---
title: "Huawei Flutter SDK Setup"
slug: "huawei-flutter-sdk-setup"
hidden: false
createdAt: "2020-07-10T19:54:49.200Z"
updatedAt: "2021-07-29T01:22:28.073Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal Flutter SDK
Follow the [OneSignal Flutter SDK setup guide](doc:flutter-sdk-setup). Firebase / Google setup not required for app builds released to the Huawei AppGallery.

#Step 3. Huawei Setup
**3.1** Configure App Information in AppGallery Connect
See Huawei's [Configure App Information in AppGallery Connect](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/config-agc-0000001050178043-V1)
 
**3.2** Add dependencies to Flutter android project
Under project build.gradle add the following
[block:callout]
{
  "type": "warning",
  "title": "Huawei Flutter Plugin",
  "body": "If using Flutter Huawei Plugin Skip to step 4"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        google()\n        maven { url 'http://developer.huawei.com/repo/' }\n    }\n\n    dependencies {\n        ...\n        classpath 'com.huawei.agconnect:agcp:1.2.1.301'\n    }\n}\n\nallprojects {\n    repositories {\n        google()\n        maven { url 'http://developer.huawei.com/repo/' }\n    }\n}\n",
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
      "code": "dependencies {\n    ...\n    implementation 'com.huawei.hms:push:5.3.0.304'\n}\n\napply plugin: 'com.huawei.agconnect'",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
#Step 4. Flutter Huawei Plugin setup (Optional)
OneSignal does not require the Flutter Huawei plugin and in most cases you can omit this. However, if you need specific Huawei features in Flutter see [Integrating Flutter HMS Push Kit Module](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Library-V1/flutter-sdk-download-0000001050186157-V1)
**4.1** When following the plugin setup, after downloading the plugin remove the FlutterHMSMessageService from the downloaded plugin's  `AndroidManifest.xml` file under the android package.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa505c4-huaweiflutter.png",
        "huaweiflutter.png",
        1450,
        552,
        "#252323"
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
#### [Huawei Flutter Sample](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/flutter-sample-code-0000001050185943)
This is an example Flutter project integrating the Huawei Flutter Plugin.

#### [Huawei Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-error-code)
* HMS error code reference to help debug logs and successfully integrate HMS Core SDK with the OneSignal SDK.

####  Keystore Signature
* **[Huawei Signing Certificate Usage](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/config-agc-0000001050178043-V1)**
  * You may need to create a debug or release keystore signature (choose the correct app build path, `debug` or `release`) so that a `6003` error is avoided when registering for Huawei `pushToken` with the OneSignal SDK.