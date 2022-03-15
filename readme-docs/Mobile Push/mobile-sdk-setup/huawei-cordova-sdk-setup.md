---
title: "Huawei Cordova SDK Setup"
slug: "huawei-cordova-sdk-setup"
hidden: false
createdAt: "2020-07-08T21:56:59.204Z"
updatedAt: "2021-10-19T20:17:26.102Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal Cordova SDK
Follow the <a href="doc:cordova-sdk-setup" target="_blank">OneSignal Cordova SDK setup guide</a>. Firebase / Google setup not required for app builds released to the Huawei AppGallery.

#Step 3. Huawei Setup
Follow the <a href="https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/prepare-dev-env-0000001050133754-V1" target="_blank">Huawei Push Kit Cordova Getting Started</a> guide.

When following the <a href="https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/push-integrating-cordova-sdk-0000001050135717-V1" target="_blank">Integrating the Plugin</a> setup, after downloading the plugin, change the downloaded plugin's `plugin.xml` file to remove the CordovaHMSMessageService from the `AndroidManifest.xml`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f3866e-huaweicordova.png",
        "huaweicordova.png",
        1228,
        262,
        "#2c2a2f"
      ]
    }
  ]
}
[/block]
#Step 4. Huawei Location Service (Optional)
**4.1** Add `implementation 'com.huawei.hms:location:<HUAWEI HMS VERSION #>` to your app build.gradle's dependencies section.
**4.2** Make sure to also add the location permission to your AndroidManifest.xml if you don't have this already
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/658befd-huawei_location_dependency.png",
        "huawei_location_dependency.png",
        476,
        169,
        "#32302e"
      ]
    }
  ]
}
[/block]
## Notes/Resources
#### [Huawei Cordova Sample](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples-V1/cordova-sample-code-0000001050135749-V1)
This is an example Cordova project integrating the Huawei Cordova Plugin.

#### [Huawei Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-error-code)
HMS error code reference to help debug logs and successfully integrate HMS Core SDK with the OneSignal SDK.