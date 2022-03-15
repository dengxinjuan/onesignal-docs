---
title: "Xamarin SDK Setup"
slug: "xamarin-sdk-setup"
excerpt: "Instructions for adding the OneSignal Xamarin SDK to your Xamarin app for iOS, Android, and derivatives like Amazon"
hidden: false
createdAt: "2016-09-20T03:52:13.756Z"
updatedAt: "2021-11-19T05:15:57.194Z"
---
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
* Project using <a href="https://developer.android.com/jetpack/androidx/migrate" target="_blank">AndroidX</a>.

### Amazon & Huawei Requirements
Follow these instructions if your app is distributed on the Amazon AppStore and/or the Huawei AppGallery.
* <a href="doc:generate-an-amazon-api-key" target="_blank">Generate an Amazon API Key</a>.
* <a href="doc:huawei-unity-sdk-setup" target="_blank">Huawei Unity SDK Setup</a>.

The Xamarin OneSignal SDK works for both Xamarin Forms and Xamarin Single View projects.

#Step 2. Add NuGet Package

**2.1** Under your Android and/or iOS targets, right-click on `Packages`, then select `Add Packages...`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0603412-Xamarin_SDK_Setup_1.png",
        "Xamarin_SDK_Setup_1.png",
        340,
        374,
        "#eaeaef"
      ]
    }
  ]
}
[/block]
**2.2** Search for `OneSignalSDK` and click `Add Package`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8bbd585-Xamarin_SDK_Setup_2.png",
        "Xamarin_SDK_Setup_2.png",
        820,
        543,
        "#f0f0f1"
      ]
    }
  ]
}
[/block]
#Step 3. Add Code

## Xamarin Forms Project

** 3.1A ** Add the following to your `App.xaml.cs`.
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Abstractions;\n\npublic App()\n{\n  InitializeComponent();\n  MainPage = new OneSignalXamarinFormsExamplePage();\n  \n  //Remove this method to stop OneSignal Debugging  \n  OneSignal.Current.SetLogLevel(LOG_LEVEL.VERBOSE, LOG_LEVEL.NONE);\n  \n  OneSignal.Current.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n  .Settings(new Dictionary<string, bool>() {\n    { IOSSettings.kOSSettingsKeyAutoPrompt, false },\n    { IOSSettings.kOSSettingsKeyInAppLaunchURL, false } })\n  .InFocusDisplaying(OSInFocusDisplayOption.Notification)\n  .EndInit();\n    \n  // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 7)\n  OneSignal.Current.RegisterForPushNotifications();\n}",
      "language": "csharp"
    }
  ]
}
[/block]

## Xamarin Single View App

**3.1B Android** - Add OneSignal to your `MainActivity.cs` in your `OnCreate` method.
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Abstractions;\n\nprotected override void OnCreate(Bundle savedInstanceState)\n{\n  // ... Leave existing code here\n  \n  // Remove this method to stop OneSignal Debugging  \n  OneSignal.Current.SetLogLevel(LOG_LEVEL.VERBOSE, LOG_LEVEL.NONE);\n  \n  OneSignal.Current.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n   .InFocusDisplaying(OSInFocusDisplayOption.Notification)\n   .EndInit();\n}",
      "language": "csharp"
    }
  ]
}
[/block]
**3.1B iOS** - Add OneSignal to your `AppDelegate.cs` in your `FinishedLaunching` method.
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Abstractions;\n\npublic override bool FinishedLaunching(UIApplication application, NSDictionary launchOptions)\n{\n  // ... Leave existing code here\n\n  // Remove this method to stop OneSignal Debugging  \n  OneSignal.Current.SetLogLevel(LOG_LEVEL.VERBOSE, LOG_LEVEL.NONE);\n  \n  OneSignal.Current.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n  .Settings(new Dictionary<string, bool>() {\n    { IOSSettings.kOSSettingsKeyAutoPrompt, false },\n    { IOSSettings.kOSSettingsKeyInAppLaunchURL, false } })\n  .InFocusDisplaying(OSInFocusDisplayOption.Notification)\n  .EndInit();\n    \n  // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 7)\n  OneSignal.Current.RegisterForPushNotifications();\n\n  return true;\n}",
      "language": "csharp"
    }
  ]
}
[/block]
#Step 4. Android Setup

**4.1** Add the following permissions to `AndroidManifest.xml`.
[block:code]
{
  "codes": [
    {
      "code": "<permission android:name=\"${applicationId}.permission.C2D_MESSAGE\"\n            android:protectionLevel=\"signature\" />\n<uses-permission android:name=\"${applicationId}.permission.C2D_MESSAGE\" />",
      "language": "xml"
    }
  ]
}
[/block]
**4.2** In your application tag, add the following.
[block:code]
{
  "codes": [
    {
      "code": "<application ....>\n\n  <receiver android:name=\"com.onesignal.GcmBroadcastReceiver\"\n            android:permission=\"com.google.android.c2dm.permission.SEND\" >\n    <intent-filter>\n      <action android:name=\"com.google.android.c2dm.intent.RECEIVE\" />\n      <category android:name=\"${applicationId}\" />\n    </intent-filter>\n  </receiver>\n  \n</application>",
      "language": "xml"
    }
  ]
}
[/block]

#Step 5. iOS Setup

**5.1** In your application's `__Info.plist__`, verify that your `_Bundle Identifier_` matches your App Settings' Bundle ID, and that `_Enable Background Modes_` and allow `_Remote notifications_` are enabled.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/16e69af-Screen_Shot_2018-10-15_at_8.10.26_PM.png",
        "Screen Shot 2018-10-15 at 8.10.26 PM.png",
        840,
        783,
        "#3c3d40"
      ]
    }
  ]
}
[/block]
**5.2** Under `Entitlements.plist`, enable `Push Notifications`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9915444-Screen_Shot_2018-10-15_at_8.12.49_PM.png",
        "Screen Shot 2018-10-15 at 8.12.49 PM.png",
        776,
        784,
        "#3c3d41"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Set APS Environment key to Production",
  "body": "Make sure to set the entitlements plist APS Environment key to Production in the iOS app."
}
[/block]
#Step 6. iOS - Add the Notification Service Extension

To display Rich Media such as images and buttons on notifications, use [Confirmed Deliveries](doc:confirmed-deliveries) and increment/decrement [Badges](doc:badges) through push notifications, you'll first need to set up a **Notification Service Extension** and App Groups.
[block:callout]
{
  "type": "danger",
  "title": "Warning",
  "body": "Recent versions of Visual Studio have introduced a bug where the Notification Extension Service will only work correctly when you run in `Release` mode. If you follow the steps below and images/buttons still do not appear in your push notifications, please make sure you are running in `Release` mode."
}
[/block]
**6.1** Right-click on your project solution and click Add > Add New Project.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/86c55b4-Screen_Shot_2018-03-27_at_11.57.58_AM.png",
        "Screen Shot 2018-03-27 at 11.57.58 AM.png",
        1112,
        796,
        "#424852"
      ]
    }
  ]
}
[/block]
**6.2** Click iOS > Extension > Notification Service Extension and select Next.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7539dbc-Screen_Shot_2018-03-27_at_1.24.17_PM.png",
        "Screen Shot 2018-03-27 at 1.24.17 PM.png",
        1838,
        1348,
        "#4f5154"
      ]
    }
  ]
}
[/block]
**6.3** Enter the name `OneSignalNotificationServiceExtension` and click Next.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e41958f-Screen_Shot_2018-03-27_at_1.25.04_PM.png",
        "Screen Shot 2018-03-27 at 1.25.04 PM.png",
        1826,
        1348,
        "#454647"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Important",
  "body": "The Bundle ID for this extension should be the same as the Bundle ID for your main application with `.OneSignalNotificationServiceExtension` added to the end.\n\nFor example, if your primary application's Bundle ID is `com.example.test`, the Bundle ID for your extension should be `com.example.test.OneSignalNotificationServiceExtension`."
}
[/block]
**6.4** Click Create to add the extension service to your project.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/14744a7-Screen_Shot_2018-03-27_at_1.25.53_PM.png",
        "Screen Shot 2018-03-27 at 1.25.53 PM.png",
        1834,
        1338,
        "#474849"
      ]
    }
  ]
}
[/block]
**6.5** Right click on Packages for your new `OneSignalNotificationServiceExtension` and select Add Packages...
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d08161a-Screen_Shot_2018-10-15_at_8.15.06_PM.png",
        "Screen Shot 2018-10-15 at 8.15.06 PM.png",
        282,
        164,
        "#444f62"
      ]
    }
  ]
}
[/block]
**6.6** Enter `Com.OneSignal` and click Add Package.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a445059-Screen_Shot_2018-10-15_at_8.17.29_PM.png",
        "Screen Shot 2018-10-15 at 8.17.29 PM.png",
        798,
        541,
        "#41454e"
      ]
    }
  ]
}
[/block]
**6.7** Select the `NotificationService.cs` source file and replace the contents with this code:
[block:code]
{
  "codes": [
    {
      "code": "using System;\nusing Foundation;\nusing UIKit;\nusing UserNotifications;\nusing Com.OneSignal;\nusing Com.OneSignal.Abstractions;\n\nnamespace OneSignalNotificationServiceExtension\n{\n  [Register(\"NotificationService\")]\n  public class NotificationService : UNNotificationServiceExtension\n  {\n    Action<UNNotificationContent> ContentHandler { get; set; }\n    UNMutableNotificationContent BestAttemptContent { get; set; }\n    UNNotificationRequest ReceivedRequest { get; set; }\n\n    protected NotificationService(IntPtr handle) : base(handle)\n    {\n      // Note: this .ctor should not contain any initialization logic.\n    }\n\n    public override void DidReceiveNotificationRequest(UNNotificationRequest request, Action<UNNotificationContent> contentHandler)\n    {\n      ReceivedRequest = request;\n      ContentHandler = contentHandler;\n      BestAttemptContent = (UNMutableNotificationContent)request.Content.MutableCopy();\n\n      (OneSignal.Current as OneSignalImplementation).DidReceiveNotificationExtensionRequest(request, BestAttemptContent);\n\n      ContentHandler(BestAttemptContent);\n    }\n\n    public override void TimeWillExpire()\n    {\n      // Called just before the extension will be terminated by the system.\n      // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n\n      (OneSignal.Current as OneSignalImplementation).ServiceExtensionTimeWillExpireRequest(ReceivedRequest, BestAttemptContent);\n\n      ContentHandler(BestAttemptContent);\n    }\n  }\n}\n",
      "language": "csharp"
    }
  ]
}
[/block]
**6.8** Open your extension's `Info.plist` file, and make sure the deployment target is at least iOS 10 or higher. If your deployment target is higher than the device you attempt to run it on, rich push notifications will not work.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a7e2ab3-xamarin_dplmt_tgt.jpg",
        "xamarin_dplmt_tgt.jpg",
        1560,
        1666,
        "#383c3a"
      ]
    }
  ]
}
[/block]
**6.9** For your iOS app, select `Entitlements.plist` and enable App Groups as follows. Please add an app group using your Bundle Identifier - this will be something similar to `com.yourcompany.yourapp`. 

The full name of the app group needs to be in the following format: `group.{your_bundle_id}.onesignal`:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ea3c6e-appgroup1.jpg",
        "appgroup1.jpg",
        2642,
        1620,
        "#414445"
      ]
    }
  ]
}
[/block]
**6.10** Using the exact same app group name you specified above, repeat the same procedure for your `OneSignalNotificationServiceExtension`, which will have its own `Entitlements.plist` file:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/12bb98d-appgroup2.jpg",
        "appgroup2.jpg",
        2080,
        820,
        "#484d4d"
      ]
    }
  ]
}
[/block]
That's it! Now, your application will be able to display push notification images, action buttons, and more. 

#Step 7. iOS (Optional) - only required for iOS Simulator builds

The following is required to prevent crashes when using the iOS Simulator.

**7.1** Right-click on your iOS project and select Options.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/457438b-Xamarin_SDK_Setup_IOS_SIM.png",
        "Xamarin_SDK_Setup_IOS_SIM.png",
        538,
        651,
        "#ededf0"
      ]
    }
  ]
}
[/block]

**7.2** Select Build > iOS Build, then make sure `iPhoneSimulator` is selected under Platform at the top.

**7.3** Under `Additional mtouch arguments:` enter `--registrar:static`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ab4b13-Xamarin_SDK_Setup_IOS_SIM_2.png",
        "Xamarin_SDK_Setup_IOS_SIM_2.png",
        950,
        546,
        "#f0f0f0"
      ]
    }
  ]
}
[/block]
#Step 8. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.

[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If you run into any issues please see our [Xamarin troubleshooting guide](doc:troubleshooting-xamarin).\n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-Xamarin-SDK/tree/main/Samples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Step 9. Prompt Your Users to Subscribe (Recommended for iOS)
**Optional**

Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/notifications/) recommend that apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.

See our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) for details on implementing this.
[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]