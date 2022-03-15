---
title: "Solar2D SDK Setup"
slug: "solar2d-sdk-setup"
excerpt: "Instructions for adding the OneSignal SDK to your Solar2D app for iOS, Android, and derivatives like Amazon"
hidden: false
createdAt: "2021-07-19T20:46:32.352Z"
updatedAt: "2021-11-05T17:34:40.751Z"
---
#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).

## iOS Requirements
* An iOS 9+ device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* [An iOS Push Certificate](doc:generate-an-ios-push-certificate).

## Android Requirements
* An Android 4.0.3+ device or emulator with "Google Play Store (Services)" installed.
* [A Google/Firebase Server API Key](doc:generate-a-google-server-api-key).

### Amazon Requirements
Follow these instructions if your app is distributed on the Amazon AppStore.
* [Generate an Amazon API Key](doc:generate-an-amazon-api-key).

#Step 2. Add OneSignal to your Account

**2.1** Login into your account on Solar2D's site and search for the OneSignal plugin on the Solar2D plugin directory.

**2.2** Click the "FREE" button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/yWjPepQRYuZp7tBdXHAw_Corona%20enable%20plugin.png",
        "Corona enable plugin.png",
        "723",
        "548",
        "#f18026",
        ""
      ]
    }
  ]
}
[/block]
**2.3** Click "Finish Checkout".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cHE0NfWORS6iDctafnvf_Corona%20enable%20plugin2.png",
        "Corona enable plugin2.png",
        "720",
        "543",
        "#404f6d",
        ""
      ]
    }
  ]
}
[/block]
#Step 3. Add OneSignal to Your Project

**3.1** Update the `build.settings` file in the Solar2D project folder to contain the following inside of `settings = {`.
[block:code]
{
  "codes": [
    {
      "code": "plugins =\n{\n    [\"plugin.OneSignal\"] =\n    {\n        publisherId = \"com.onesignal\",\n    }\n}",
      "language": "lua"
    }
  ]
}
[/block]
**3.2 iOS** - Add the following line inside of 'plist = {' in build.settings.
[block:code]
{
  "codes": [
    {
      "code": "UIBackgroundModes = {\"remote-notification\"},",
      "language": "lua"
    }
  ]
}
[/block]
#Step 4. Add Required Code

**4.1**  At the top of `main.lua`, place the following code.
[block:code]
{
  "codes": [
    {
      "code": "-- This function gets called when the user opens a notification or one is received when the app is open and active.\n-- Change the code below to fit your app's needs.\nfunction DidReceiveRemoteNotification(message, additionalData, isActive)\n    if (additionalData) then\n        if (additionalData.discount) then\n            native.showAlert( \"Discount!\", message, { \"OK\" } )\n            -- Take user to your app store\n        elseif (additionalData.actionSelected) then -- Interactive notification button pressed\n            native.showAlert(\"Button Pressed!\", \"ButtonID:\" .. additionalData.actionSelected, { \"OK\"} )\n        end\n    else\n        native.showAlert(\"OneSignal Message\", message, { \"OK\" } )\n    end\nend\n\nlocal OneSignal = require(\"plugin.OneSignal\")\n-- Uncomment SetLogLevel to debug issues.\n-- OneSignal.SetLogLevel(4, 4)\nOneSignal.Init(\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\", \"############\", DidReceiveRemoteNotification)",
      "language": "lua"
    }
  ]
}
[/block]
**4.2** Replace `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` with your Application Key, available in the OneSignal dashboard under Settings > Keys & IDs.

**4.3** **Android** - Replace `############` with your Google Project number.

**4.4** **Amazon** - Put your `app_key.txt` (from [Generate an Amazon API Key](doc:generate-an-amazon-api-key) instructions above) into the root of your Solar2D project folder. 

When you build your app, change the `Target App Store` setting to `Amazon`.

#Step 5. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "body": "If you get an error saying `\"Plugin_OneSignal not found\"`, make sure the plugin shows as active on your account on the Solar2D's plugin directory page. \n\nAlso, make sure the same account you used on the Solar2D plugin directory is the same account you signed into in the Solar2D Simulator. \n\nIf that is correct, you may need to wait 30 minutes to 1 hour for OneSignal to become active on your account. Feel free to contact us or Solar2D if the error persists.\n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-Solar2D-SDK/tree/main/samples).\n\nIf stuck, feel free to contact [support@onesignal.com](mailto:support@onesignal.com) for assistance.",
  "title": "Troubleshooting"
}
[/block]
----

# Setup SDK for Solar2D Native

[Step 1. Requirements](#step-1-requirements).

**1.** Add OneSignal to Your Project

**1.1** Update the `build.settings` file in the Solar2D project folder to contain the following inside of `settings = {`.

[block:code]
{
  "codes": [
    {
      "code": "plugins =\n{\n    [\"plugin.OneSignal\"] =\n    {\n        publisherId = \"com.onesignal\",\n    }\n}",
      "language": "lua"
    }
  ]
}
[/block]
**2.** Add Required Code
**2A Android** - Run `android/download_plugins.sh` located in your app folder. You can find more details about this step in [Solar2D's blog post](https://coronalabs.com/blog/2017/10/19/using-plugins-with-native-android-builds/).

**2B iOS** - 1. Open your project in Xcode. 2. In the Xcode toolbar, click on the active scheme button, and select Download Plugins. You can find more details about this step in [Solar2D's Blog post](
https://coronalabs.com/blog/2017/07/06/using-plugins-in-corona-native-projects-ios/).

**2.1**  At the top of `main.lua`, place the following code.
[block:code]
{
  "codes": [
    {
      "code": "-- This function gets called when the user opens a notification or one is received when the app is open and active.\n-- Change the code below to fit your app's needs.\nfunction DidReceiveRemoteNotification(message, additionalData, isActive)\n    if (additionalData) then\n        if (additionalData.discount) then\n            native.showAlert( \"Discount!\", message, { \"OK\" } )\n            -- Take user to your app store\n        elseif (additionalData.actionSelected) then -- Interactive notification button pressed\n            native.showAlert(\"Button Pressed!\", \"ButtonID:\" .. additionalData.actionSelected, { \"OK\"} )\n        end\n    else\n        native.showAlert(\"OneSignal Message\", message, { \"OK\" } )\n    end\nend\n\nlocal OneSignal = require(\"plugin.OneSignal\")\nOneSignal.Init(\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\", \"############\", DidReceiveRemoteNotification)",
      "language": "lua"
    }
  ]
}
[/block]
**2.2** Replace `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` with your Application Key, which you can find in the OneSignal dashboard under Settings > Keys & IDs.

**2.3** Replace `############` with your Google Project number if your app is for Android.

**3.** Add Plugin to iOS

**3.1** **Add Required Capabilities**
**3.1A** Select the root project, and Under Capabilities, enable "Push Notifications"
**3.1B** Next, enable "Background Modes" and check "Remote Notifications"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1925cbf-Xcode_capabilities.png",
        "Xcode capabilities.png",
        961,
        774,
        "#f0f0f0"
      ]
    }
  ]
}
[/block]
**3.2** Open your `-Info.p` file add the key `CoronaDelegates` as an Array type. Add an entry as `OneSignalCoronaDelegate`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/zp1NUJ9LSDCsKWDJsihd_CoronaEnterpriseAddPlist.png",
        "CoronaEnterpriseAddPlist.png",
        "679",
        "96",
        "#264077",
        ""
      ]
    }
  ]
}
[/block]
**4.** Add Plugin to Android or Amazon

**4.1** Add the following permissions to your `AndroidManifest.xml` file.
[block:code]
{
  "codes": [
    {
      "code": "<permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.C2D_MESSAGE\"\n            android:protectionLevel=\"signature\"/>\n<uses-permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.C2D_MESSAGE\"/>\n\n<uses-permission android:name=\"android.permission.INTERNET\"/>\n<uses-permission android:name=\"android.permission.VIBRATE\"/>\n\n<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />\n\n<!-- Keeps the processor from sleeping when a message is received. -->\n<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>\n\n<!-- This app has permission to register and receive data message. -->\n<uses-permission android:name=\"com.google.android.c2dm.permission.RECEIVE\"/>\n\n <!-- Use to restore notifications the user hasn't interacted with.\n         They could be missed notifications if the user reboots their device if this isn't in place.\n    -->\n<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
      "language": "xml"
    }
  ]
}
[/block]
**4.2**  In the application tag, add the following.
[block:code]
{
  "codes": [
    {
      "code": "<application ...>\n  <receiver android:name=\"com.onesignal.NotificationOpenedReceiver\" />\n\n  <service android:name=\"com.onesignal.GcmIntentService\" />\n  <service android:name=\"com.onesignal.GcmIntentJobService\"\n           android:permission=\"android.permission.BIND_JOB_SERVICE\" />\n\n  <service android:name=\"com.onesignal.RestoreJobService\"\n           android:permission=\"android.permission.BIND_JOB_SERVICE\" />\n\n  <service android:name=\"com.onesignal.RestoreKickoffJobService\"\n           android:permission=\"android.permission.BIND_JOB_SERVICE\" />\n\n  <service android:name=\"com.onesignal.SyncService\" android:stopWithTask=\"true\" />\n  <service android:name=\"com.onesignal.SyncJobService\"\n           android:permission=\"android.permission.BIND_JOB_SERVICE\" />\n\n  <activity android:name=\"com.onesignal.PermissionsActivity\"\n            android:theme=\"@android:style/Theme.Translucent.NoTitleBar\" />\n\n  <service android:name=\"com.onesignal.NotificationRestoreService\" />\n\n  <receiver android:name=\"com.onesignal.BootUpReceiver\">\n    <intent-filter>\n      <action android:name=\"android.intent.action.BOOT_COMPLETED\" />\n      <action android:name=\"android.intent.action.QUICKBOOT_POWERON\" />\n    </intent-filter>\n  </receiver>\n  <receiver android:name=\"com.onesignal.UpgradeReceiver\" >\n    <intent-filter>\n      <action android:name=\"android.intent.action.MY_PACKAGE_REPLACED\" />\n    </intent-filter>\n  </receiver>\n</application>",
      "language": "xml"
    }
  ]
}
[/block]
**4.3** *Optional* If you need receive other GCM messages through Solar2D (like Helpshift), then add the following to your `AndroidManifest.xml`.
[block:code]
{
  "codes": [
    {
      "code": "<receiver\n  android:name=\"com.onesignal.CoronaGCMFilterProxyReceiver\"\n  android:permission=\"com.google.android.c2dm.permission.SEND\" >\n    <intent-filter>\n        <action android:name=\"com.google.android.c2dm.intent.RECEIVE\" />\n        <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n    </intent-filter>\n</receiver>",
      "language": "xml"
    }
  ]
}
[/block]
**4.4** Replace `COM.YOUR.PACKAGE_NAME` with your full package name from the last 2 steps.

**4.5** In Eclipse, open your `android/project.properties` and add the following.
[block:code]
{
  "codes": [
    {
      "code": "android.library.reference.2=relative_path/google-play-services_lib",
      "language": "text"
    }
  ]
}
[/block]
The path you add MUST be relative and not absolute, and should look something like this:

`../../../android-sdks/extras/google/google_play_services/libproject/google-play-services_lib`

**4.6** In Eclipse, build your app. If you get an error about `build.xml` missing, then `cd` to the `google-play-services_lib` folder in the Android SDK and run:
[block:code]
{
  "codes": [
    {
      "code": "android update lib-project --path . --target android-10",
      "language": "shell"
    }
  ]
}
[/block]
**Proguard**

If you have Proguard enabled on your project, you must add the following lines to your Proguard config file. The default filename is `proguard-project.txt`.

```
-dontwarn com.onesignal.**
-dontwarn com.gamethrive.**
```

**5.** Add Plugin to Amazon

**5.1** Follow all the steps from [Add Plugin to Android](#4-add-plugin-to-android-or-amazon)

**5.2** Add the following permission to your `AndroidManifest.xml`
[block:code]
{
  "codes": [
    {
      "code": "<uses-permission android:name=\"com.amazon.device.messaging.permission.RECEIVE\" />\n<permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" android:protectionLevel=\"signature\" />\n<uses-permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" />",
      "language": "xml"
    }
  ]
}
[/block]

**5.3**  In the `application` tag, add the following:
[block:code]
{
  "codes": [
    {
      "code": "<application ...>\n  <amazon:enable-feature android:name=\"com.amazon.device.messaging\" android:required=\"false\" xmlns:amazon=\"http://schemas.amazon.com/apk/res/android\" />\n\n  <service android:name=\"com.onesignal.ADMMessageHandler\" android:exported=\"false\" />\n  <receiver\n            android:name=\"com.onesignal.ADMMessageHandler$Receiver\"\n            android:permission=\"com.amazon.device.messaging.permission.SEND\" >\n\n    <intent-filter>\n      <action android:name=\"com.amazon.device.messaging.intent.REGISTRATION\" />\n      <action android:name=\"com.amazon.device.messaging.intent.RECEIVE\" />\n      <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n    </intent-filter>\n\n  </receiver>\n</application>",
      "language": "xml"
    }
  ]
}
[/block]

**5.4** Replace `COM.YOUR.PACKAGE_NAME` with your full package name from the last 2 steps.

**5.5.** Put your `app_key.txt` into the root of your Solar2D project folder. To get this file, follow our [Generate an Amazon API Key](doc:generate-an-amazon-api-key) instructions.

[Run Your App and Send Yourself a Notification](#step-5-run-your-app-and-send-yourself-a-notification)