---
title: "Huawei SDK Setup"
slug: "huawei-sdk-setup"
excerpt: "OneSignal Huawei SDK Setup Guide for Android Studio."
hidden: false
createdAt: "2020-05-08T19:56:15.567Z"
updatedAt: "2021-10-19T18:21:39.607Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Android Studio](https://developer.android.com/studio)
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal Android SDK
Follow the [OneSignal Android SDK setup guide](doc:android-sdk-setup). Firebase / Google setup not required for app builds released to the Huawei AppGallery.

#Step 3. Huawei Configuration File (agconnect-services.json)
*You can skip this step if you already have a Huawei `agconnect-services.json` in your Android Studio Project from setting up a different Huawei service.*
**3.1** From the [AppGallery Connect Project List](https://developer.huawei.com/consumer/en/service/josp/agc/index.html#/myProject) select your app.

**3.2** Click on the "agconnect-services.json" button to download this file.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4f866d-Huawei_AppGallery_Connect_ProjectSettings_Download_agconnect-services.json_file.png",
        "Huawei_AppGallery_Connect_ProjectSettings_Download_agconnect-services.json_file.png",
        1262,
        696,
        "#eef0f3"
      ]
    }
  ]
}
[/block]
**3.3** Place this file in your app directory in Android Studio.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a9ee3b-Huawei_AndroidStudio_agconnect-services.json_file.png",
        "Huawei_AndroidStudio_agconnect-services.json_file.png",
        362,
        326,
        "#43484d"
      ]
    }
  ]
}
[/block]

#Step 4. Generating a Signing Certificate Fingerprint

*You can skip this step if you already have added your SHA-256 certificate fingerprint to Huawei's dashboard for a different Huawei service.*

**4.1** From your Android Studio go to View > Tool Windows > Gradle
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/092273b-Huawei_AndroidStudio_Open_Gradle_Tasks_List.png",
        "Huawei_AndroidStudio_Open_Gradle_Tasks_List.png",
        595,
        358,
        "#3c3d40"
      ]
    }
  ]
}
[/block]
**4.2** From here select app > Tasks > android > signingReport
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db2ecdd-Huawei_AndroidStudio_Run_signingReport.png",
        "Huawei_AndroidStudio_Run_signingReport.png",
        294,
        216,
        "#47474f"
      ]
    }
  ]
}
[/block]
**4.3** Copy your `SHA-256` for your `release` variant.
   - Optional but recommended for quicker testing is the `SHA-256` for your `debug` variant too.
   - You may have other custom variants in your project, if you need push support for them copy these as well.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6b08a6-Huawei_AndroidStudio_signingReport_output.png",
        "Huawei_AndroidStudio_signingReport_output.png",
        798,
        346,
        "#3d3030"
      ]
    }
  ]
}
[/block]
**4.4** From the [AppGallery Connect Project List](https://developer.huawei.com/consumer/en/service/josp/agc/index.html#/myProject) select your app.

**4.5** Scroll to the bottom to find the "SHA-256 certificate fingerprint" field were you should enter your keys.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9bf59ea-Huawei_AppGallery_Connect_SHA256_cert_fingerprint.png",
        "Huawei_AppGallery_Connect_SHA256_cert_fingerprint.png",
        1292,
        622,
        "#f3f3f5"
      ]
    }
  ]
}
[/block]

#Step 5. Add Huawei Gradle Plugin and Dependencies

**5.1** Open your root `build.gradle` (Project: ) in Android Studio and add ` maven {url 'https://developer.huawei.com/repo/'}` under `buildscript { repositories }` and `allprojects { repositories  }`

**5.2** Under `buildscript { dependencies }` add  `classpath 'com.huawei.agconnect:agcp:1.3.1.300'`

**5.3** You should have in total 3 new lines in your root `build.gradle`, highlighted below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d1791d3-Huawei_AndroidStudio_root_build.gradle_file_2.png",
        "Huawei_AndroidStudio_root_build.gradle_file_2.png",
        941,
        664,
        "#393738"
      ]
    }
  ]
}
[/block]
**5.4** Open your `app/build.gradle` file and add `implementation 'com.huawei.hms:push:5.3.0.304' under the `dependencies` section.

**5.5** Also to the `app/build.gradle` file add `apply plugin: 'com.huawei.agconnect'` to the very bottom of the file.

**5.6** You should have in total 2 new lines in your `app/build.gradle`, highlighted below.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Sync Gradle",
  "body": "Make sure to press \"Sync Now\" on the banner that pops up after saving!"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0b441ec-Huawei_AndroidStudio_sync_now.png",
        "Huawei_AndroidStudio_sync_now.png",
        1033,
        112,
        "#40474d"
      ]
    }
  ]
}
[/block]

#Step 6. Compatibility with other HMS push libraries or your own `HmsMessageService` class"

*This is only required if you must keep another 3rd-party HMS push SDK / Library in your app in-addition to OneSignal or you have your own `HmsMessageService`.*

**6.1** Create a class that extends from `HmsMessageService`, if you don't have one already and add the following methods.
[block:callout]
{
  "type": "warning",
  "title": "extends HmsMessageService",
  "body": "If you already had a class that extends `HmsMessageService` please add the two new `OneSignalHmsEventBridge` lines instead of creating another class."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "public class YourHmsMessageService extends HmsMessageService {    \n   public void onNewToken(String token) {\n        // ...\n        // Forward event on to OneSignal SDK\n        OneSignalHmsEventBridge.onNewToken(this, token);\n    }\n\n    @Override\n    public void onMessageReceived(RemoteMessage message) {\n        // ...\n        // Forward event on to OneSignal SDK\n        OneSignalHmsEventBridge.onMessageReceived(this, message);\n    }\n}",
      "language": "java"
    }
  ]
}
[/block]
This is to forward `onNewToken` and `onMessageReceived` to OneSignal via the `OneSignalHmsEventBridge`.

**6.2** If you didn't have a class that extended `HmsMessageService` before make sure to add it to your `AndroidManifest.xml` under the `<application>` tag.
[block:code]
{
  "codes": [
    {
      "code": "    <application>\n        ...\n       \n        <!--\n          Ensure you only have one intent-filter for \"com.huawei.push.action.MESSAGING_EVENT\".\n          HMS only supports one per app.\n        -->\n        <service\n            android:name=\".YourHmsMessageService\"\n            android:exported=\"false\">\n            <intent-filter>\n                <action android:name=\"com.huawei.push.action.MESSAGING_EVENT\" />\n            </intent-filter>\n        </service>\n\n        ...\n    </application>",
      "language": "xml"
    }
  ]
}
[/block]

#Step 7. Run and test your app
Run your app on real Huawei device to make sure your device is subscribed to notifications as a Huawei device and can receive notifications sent from the OneSignal dashboard.
[block:callout]
{
  "type": "info",
  "body": "If you run into any issues please see our [Android troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting-android)\n\nYou can see a fully implemented [example project on Github](https://github.com/OneSignal/OneSignal-Android-SDK/tree/master/Examples).",
  "title": "Troubleshooting"
}
[/block]

#Step 8. Omit Google Libraries for Huawei AppGallery builds (Optional)

#### Step 8 - Option 1
If your app will only be available on the Huawei AppGallery and you want to omit any Google related dependencies that OneSignal includes you can use `exclude` with `implementation` in your `app/build.gradle`.
[block:code]
{
  "codes": [
    {
      "code": "implementation('com.onesignal:OneSignal:3.15.1') {\n    exclude group: 'com.google.android.gms'\n    exclude group: 'com.google.firebase'\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
#### Step 8 - Option 2
If your app will be for both the Google Play Store and Huawei AppGallery and you want to be selective on which libraries you will include to make your APK smaller you can add dependencies based on buildTypes or variants. 
Example:
[block:code]
{
  "codes": [
    {
      "code": "android {\n  // ...\n   buildTypes {\n       debug {\n       }\n       release {\n       }\n       // **** Add your custom hauwei buildType here\n       huawei {\n       }\n   }\n}\n\ndependencies {\n    // **** Use the full OneSignal dependencies for Google Play Store builds\n    debugImplementation 'com.onesignal:OneSignal:3.15.1'\n    releaseImplementation 'com.onesignal:OneSignal:3.15.1'\n    \n    // **** Only include hms:push for your Huawei AppGallery builds.\n    huaweiImplementation 'com.huawei.hms:push:5.0.0.300'\n    // Omit Google / Firebase libraries for Huawei builds.\n    huaweiImplementation('com.onesignal:OneSignal:3.15.1') {\n        exclude group: 'com.google.android.gms'\n        exclude group: 'com.google.firebase'\n    }\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
## Common Troubleshooting issues.

While testing, make sure to keep the [OneSignal `setLogLevel` method](https://documentation.onesignal.com/docs/sdk-reference#setloglevel-method) set to VERBOSE.

Check the logs to see any errors being thrown and [Huawei Common Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-2-References/hmssdk_huaweipush_api_reference_errorcode).

#### Getting notification_types: -25

`"notification_types":-25`  means OneSignal timed out waiting for a response from Huawei's HMS to get a push token. This is most likely due to another 3rd-party HMS push SDK or your own HmsMessageService getting this event instead of OneSignal.

Please refer to the above [step on how to check this and forward the event if this is the case](#step-6---compatibility-with-other-hms-push-libraries-or-your-own-hmsmessageservice-class).

#### Getting notification_types: -28

This means there is a class HMS is missing from the app that is needed for push. Just having `com.huawei.hms:push` in the `build.gradle` will cause this specific error not to happen any more. However, if you have some aggressive Proguard or R8 settings, this might cause issues. We recommend turn off `minifyEnabled` temporary if you have it to see if that is the root of the issue.

Also, you shouldn't mix and match major release versions of other HMS libraries. Start with either 4 or 5. Make sure not to have a mixture from 3 to 5 which is going to create other errors

#### Error getting Huawei Push Token
```
E/OneSignal: HMS ApiException getting Huawei push token!
    com.huawei.hms.common.ApiException: -5: Core error
```

Check your Proguard or R8 rules to make sure they are setup properly. Possibly disable it temporarily to see if it is related. If it fixes the issue after disabling Proguard  or R8 then you can follow this guide and turn it back on:
4. Configuring Obfuscation Scripts:
https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/Preparations#h1-1575707474823