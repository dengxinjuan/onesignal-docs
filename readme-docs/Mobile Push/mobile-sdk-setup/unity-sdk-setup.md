---
title: "Unity SDK Setup"
slug: "unity-sdk-setup"
excerpt: "Instructions for adding the OneSignal Unity SDK to your Unity app for iOS, Android, Amazon, and Huawei"
hidden: false
createdAt: "2016-09-20T03:50:04.983Z"
updatedAt: "2021-11-19T05:11:39.193Z"
---
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.
* Unity 2018.4 or newer.

## iOS Requirements
* An iOS 9+ or iPadOS device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">An iOS Push Certificate</a>.

## Android Requirements
* An Android 4.0.3+ device or emulator with "Google Play Store (Services)" installed.
* <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">A Google/Firebase Server API Key</a>.
* Project using <a href="https://developer.android.com/jetpack/androidx/migrate" target="_blank">AndroidX</a>.

### Amazon & Huawei Requirements
Follow these instructions if your app is distributed on the Amazon AppStore and/or the Huawei AppGallery.
* <a href="doc:generate-an-amazon-api-key" target="_blank">Generate an Amazon API Key</a>.
* <a href="doc:huawei-unity-sdk-setup" target="_blank">Huawei Unity SDK Setup</a>.

#Step 2. Import the OneSignal Unity Plugin
There are several methods available for installation of the OneSignal Unity SDK.
[block:callout]
{
  "type": "info",
  "body": "It is recommended to use the **Asset Store** path for installation if you are upgrading from a version of the OneSignal Unity SDK 2.13.4 or older.",
  "title": "Upgrading from 2.13.4 or older"
}
[/block]
<details>
<summary><b>Unity Asset Store</b> <i>(click to expand)</i></summary>

1. Add the OneSignal Unity SDK as an available asset to your account by clicking **Add to My Assets** from [our listing on the Unity Asset Store](https://assetstore.unity.com/packages/add-ons/services/billing/onesignal-sdk-193316).
2. Find the package waiting for you to download by clicking **Open in Unity** from that same page. This will open the Unity Editor and its Package Manager window.
3. On the SDK's listing in the Editor click the **Download** button. When it finishes click **Import**.

    ![onesignal unity sdk in my assets](https://github.com/OneSignal/OneSignal-Unity-SDK/raw/main/Documentation/asset_listing.png)

4. A prompt to import all of the files of the OneSignal Unity SDK will appear. Click **Import** to continue and compile the scripts into your project.
5. Navigate to **Window > OneSignal** (or follow the popup if upgrading) in the Unity Editor which will bring up a window with some final steps which need 
   to be completed in order to finalize the installation. The most important of these steps is **Import OneSignal packages**.
   
    > *Depending on your project configuration and if you are upgrading from a previous version, some of these steps may already be marked as "completed"*
   
    ![sdk setup steps window](https://github.com/OneSignal/OneSignal-Unity-SDK/raw/main/Documentation/setup_window.png)

6. After importing the packages Unity will notify you that a new registry has been added and the **OneSignal SDK Setup** window will have refreshed with a few additional 
   steps. Following these will finalize your installation of the OneSignal Unity SDK.
</details>

<details>
<summary><b>Unity Package Manager</b> <i>(click to expand)</i></summary>

1. From within the Unity Editor navigate to **Edit > Project Settings** and then to the **Package Manager** settings tab.
   
   ![unity registry manager](https://github.com/OneSignal/OneSignal-Unity-SDK/raw/main/Documentation/package_manager_tab.png)

2. Create a *New Scoped Registry* by entering 
    ```
    Name        npmjs
    URL         https://registry.npmjs.org
    Scope(s)    com.onesignal
    ```
   and click **Save**.
3. Open the **Window > Package Manager** and switch to **My Registries** via the **Packages:** dropdown menu. You will see all of the OneSignal Unity SDK packages available
   on which you can then click **Install** for the platforms you would like to include. Dependencies will be added automatically.
4. Once the packages have finished importing you will find a new menu under **Window > OneSignal**. Open it and you will find some final steps which need to be completed
   in order to finalize the installation.

   > *Depending on your project configuration and if you are upgrading from a previous version, some of these steps may already be marked as "completed"*

   ![my registries menu selection](https://github.com/OneSignal/OneSignal-Unity-SDK/raw/main/Documentation/registry_menu.png)
</details>

#Step 3. Initialize OneSignal in your Unity scene

**3.1** In the first scene that is loaded when your game is opened, add the following code to an object that is enabled in the scene.
      - _You can create a new Script file or add it to an existing Script like your own GameController or TitlescreenController that you may have already created._
[block:code]
{
  "codes": [
    {
      "code": "using System.Collections.Generic;\n\nvoid Start () {\n  // Uncomment this method to enable OneSignal Debugging log output \n  // OneSignal.SetLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);\n  \n  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.\n  OneSignal.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n    .HandleNotificationOpened(OneSignalHandleNotificationOpened)\n    .Settings(new Dictionary<string, bool>() {\n      { OneSignal.kOSSettingsAutoPrompt, false },\n      { OneSignal.kOSSettingsInAppLaunchURL, false } })\n    .EndInit();\n  \n  OneSignal.inFocusDisplayType = OneSignal.OSInFocusDisplayOption.Notification;\n  \n  // iOS - Shows the iOS native notification permission prompt.\n  //   - Instead we recomemnd using an In-App Message to prompt for notification \n  //     permission to explain how notifications are helpful to your users.\n  OneSignal.PromptForPushNotificationsWithUserResponse(OneSignalPromptForPushNotificationsReponse);\n}\n\n// Gets called when the player opens a OneSignal notification.\nprivate static void OneSignalHandleNotificationOpened(OSNotificationOpenedResult result) {\n  // Place your app specific notification opened logic here.\n}\n\n// iOS - Fires when the user anwser the notification permission prompt.\nprivate void OneSignalPromptForPushNotificationsReponse(bool accepted) {\n  // Optional callback if you need to know when the user accepts or declines notification permissions.\n}",
      "language": "csharp"
    }
  ]
}
[/block]
**3.2** Replace `"YOUR_ONESIGNAL_APP_ID"` with your OneSignal app id.
**3.3** Follow one or more of the platform specific guides below to support iOS, Android, and / or FireOS push

#Step 4. iOS Setup
After building in Unity open the Xcode Project and follow these setups.
**4.1.** **Click** on "Unity-iPhone" on the left and **select** the "Signing & Capabilities" tab.
**4.2** From here **check** "Automatically manage signing", on the prompt **click** "Enable Automatic", and **select your Team**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af2ac17-Unity2020.2_Xcode14.4_enable_auto_signing.png",
        "Unity2020.2_Xcode14.4_enable_auto_signing.png",
        1810,
        798,
        "#2a2828"
      ]
    }
  ]
}
[/block]
**4.3** Scroll down to "App Groups" and **click** on the refresh button.
    - _NOTE: You may have to press this a few times as it will ask you for each signing type._
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5f9055f-Unity2020.2_Xcode14.4_refresh_app_groups.png",
        "Unity2020.2_Xcode14.4_refresh_app_groups.png",
        1487,
        313,
        "#211f1f"
      ]
    }
  ]
}
[/block]
**4.4** Repeat the same steps above but for the "OneSignalNotificationServiceExtension" target this time.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac0a9fe-Unity2020.2_Xcode14.4_repeat_for_NSE.png",
        "Unity2020.2_Xcode14.4_repeat_for_NSE.png",
        1816,
        1130,
        "#272627"
      ]
    }
  ]
}
[/block]
**4.5** "App Groups" should now be provisioned for you going forward for your iOS bundle id, even on clean builds.

#Step 5. Android Setup

**5.1** Go to `Assets` > `External Dependency Manager` > `Android Resolver` > `Settings` and check the following:
   - **Use Jetifier**
   - **Patch gradleTemplate.properties**
   - **Use project settings**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/67d4e9e-Unity2020.2_external_depdencey_manager_android_settings.png",
        "Unity2020.2_external_depdencey_manager_android_settings.png",
        640,
        811,
        "#514d4b"
      ]
    }
  ]
}
[/block]
**5.2** Scroll down and press "OK" to save these settings.
**5.3** Go to `File` > `Build Settings...` then click on the "Player Settings..." button
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39bf1d9-Unity2020.2_build_settings.png",
        "Unity2020.2_build_settings.png",
        632,
        603,
        "#3f3f40"
      ]
    }
  ]
}
[/block]
**5.4** From here go to `Publishing Settings` and check "Custom Gradle Properties Template". 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8108c24-Unity2020.2_enable_custom_gradle_properties_template.png",
        "Unity2020.2_enable_custom_gradle_properties_template.png",
        850,
        787,
        "#464443"
      ]
    }
  ]
}
[/block]
**5.5** Replace the example icons located in `Assets/Plugins/Android/OneSignalConfig/res` with your own.
*The file names **must** be lowercase and cannot contain anything else except underscores and numbers.*
See our [Customize Notification Icons](doc:customize-notification-icons) page for more details.


#Step 6. Amazon FireOS (ADM) Setup
#### Only required if you plan to release your app on the Amazon App Store to support Kindle Fire devices.

**6.1** Open `Plugins/Android/AndroidManifest.xml`.

If you don't have one, create this file with the following contents and then skip to step 7.5.
[block:code]
{
  "codes": [
    {
      "code": "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"no\"?>\n<manifest xmlns:amazon=\"http://schemas.amazon.com/apk/res/android\" xmlns:android=\"http://schemas.android.com/apk/res/android\" android:installLocation=\"auto\" package=\"COM.YOUR.PACKAGE_NAME\" platformBuildVersionCode=\"23\" >\n    <supports-screens android:anyDensity=\"true\" android:largeScreens=\"true\" android:normalScreens=\"true\" android:smallScreens=\"true\" android:xlargeScreens=\"true\"/>\n    <application android:debuggable=\"false\" android:icon=\"@drawable/app_icon\" android:isGame=\"true\" android:label=\"@string/app_name\" android:theme=\"@style/UnityThemeSelector\">\n        <activity android:configChanges=\"locale|fontScale|keyboard|keyboardHidden|mcc|mnc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|touchscreen|uiMode\" android:label=\"@string/app_name\" android:launchMode=\"singleTask\" android:name=\"com.unity3d.player.UnityPlayerActivity\" android:screenOrientation=\"fullSensor\">\n            <intent-filter>\n                <action android:name=\"android.intent.action.MAIN\"/>\n                <category android:name=\"android.intent.category.LAUNCHER\"/>\n                <category android:name=\"android.intent.category.LEANBACK_LAUNCHER\"/>\n            </intent-filter>\n            <meta-data android:name=\"unityplayer.UnityActivity\" android:value=\"true\"/>\n        </activity>\n        \n        <amazon:enable-feature android:name=\"com.amazon.device.messaging\" android:required=\"false\"/>\n        <service android:name=\"com.onesignal.ADMMessageHandler\" android:exported=\"false\" />\n        <receiver android:name=\"com.onesignal.ADMMessageHandler$Receiver\"\n                  android:permission=\"com.amazon.device.messaging.permission.SEND\" >\n          <intent-filter>\n            <action android:name=\"com.amazon.device.messaging.intent.REGISTRATION\" />\n            <action android:name=\"com.amazon.device.messaging.intent.RECEIVE\" />\n            <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n          </intent-filter>\n        </receiver>\n    </application>\n    <uses-feature android:glEsVersion=\"0x20000\"/>\n    <uses-feature android:name=\"android.hardware.touchscreen\" android:required=\"false\"/>\n    <uses-feature android:name=\"android.hardware.touchscreen.multitouch\" android:required=\"false\"/>\n    <uses-feature android:name=\"android.hardware.touchscreen.multitouch.distinct\" android:required=\"false\"/>\n    \n    <uses-permission android:name=\"com.amazon.device.messaging.permission.RECEIVE\" />\n    <permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" android:protectionLevel=\"signature\" />\n    <uses-permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" />\n</manifest>",
      "language": "xml"
    }
  ]
}
[/block]
**6.2** Add `xmlns:amazon="http://schemas.amazon.com/apk/res/android"` in the manifest tag right after the `xmlns:android` property.
[block:code]
{
  "codes": [
    {
      "code": "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:amazon=\"http://schemas.amazon.com/apk/res/android\"\n    package=\"COM.YOUR.PACKAGE_NAME\"\n    android:versionCode=\"1\"\n    android:versionName=\"1.0\" >",
      "language": "xml"
    }
  ]
}
[/block]
**6.3** Add the following permissions.
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
**6.4** In the application tag add the following.
[block:code]
{
  "codes": [
    {
      "code": "<application>\n  <amazon:enable-feature android:name=\"com.amazon.device.messaging\" android:required=\"false\"/>\n\n  <service android:name=\"com.onesignal.ADMMessageHandler\" android:exported=\"false\" />\n  <receiver android:name=\"com.onesignal.ADMMessageHandler$Receiver\"\n            android:permission=\"com.amazon.device.messaging.permission.SEND\" >\n    <intent-filter>\n      <action android:name=\"com.amazon.device.messaging.intent.REGISTRATION\" />\n      <action android:name=\"com.amazon.device.messaging.intent.RECEIVE\" />\n      <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n    </intent-filter>\n  </receiver>\n</application>",
      "language": "xml"
    }
  ]
}
[/block]
**6.5** Replace all 3 of instances of `COM.YOUR.PACKAGE_NAME` with your package name in AndroidManifest.xml.

**6.6** Place your `api_key.txt` in a new folder named `assets` under `Assets/Plugins/Android/`

*To create an `api_key.txt` for your app follow our [Generate an Amazon API Key Guide](doc:generate-an-amazon-api-key).*

#Step 7. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "body": "If you run into any issues please see our [Unity troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting-unity).\n\nTry the [example project on our Github repository](https://github.com/OneSignalDevelopers/OneSignal-Unity-Sample).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce",
  "title": "Troubleshooting"
}
[/block]
#Step 8. Implement a Soft-Prompt In-App Message for iOS
**Optional**

Android devices are subscribed to notifications automatically when your app is installed, so this section only applies to your iOS release.

Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/notifications/) recommend that apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0793470-efcbff2-iam-design.jpg",
        "efcbff2-iam-design.jpg",
        1200,
        861,
        "#f1f2f6"
      ]
    }
  ]
}
[/block]
See our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) for details on implementing this.
[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]