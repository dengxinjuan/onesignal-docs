---
title: "Xamarin SDK Setup New"
slug: "xamarin-sdk-setup-1"
excerpt: "Instructions for adding the OneSignal Xamarin SDK to your Xamarin app for iOS, Android, and derivatives like Amazon"
hidden: true
createdAt: "2022-03-07T22:03:06.149Z"
updatedAt: "2022-03-08T01:16:20.479Z"
---
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.

## iOS Requirements
* An iOS 9+ or iPadOS device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">An iOS Push Certificate</a>.
[block:callout]
{
  "type": "danger",
  "title": "Warning",
  "body": "Building for iOS using Xamarin.iOS 15.4 or below may cause release build issues. Either upgrade to Xamarin.iOS 15.4+ or change the iOS project's Linker Behavior to 'Don't Link'"
}
[/block]
## Android Requirements
* An Android 4.1+ device or emulator with "Google Play Store (Services)" installed.
* <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">A Google/Firebase Server API Key</a>.
* Project using <a href="https://docs.microsoft.com/en-us/xamarin/android/platform/androidx" target="_blank">AndroidX</a>.

### Amazon & Huawei Requirements
Follow these instructions if your app is distributed on the Amazon AppStore and/or the Huawei AppGallery.
* <a href="doc:generate-an-amazon-api-key" target="_blank">Generate an Amazon API Key</a>.
* <a href="doc:huawei-unity-sdk-setup" target="_blank">Huawei Unity SDK Setup</a>.

The Xamarin OneSignal SDK works for both Xamarin Forms and Xamarin Single View projects.

---
#Step 2. Add NuGet Package

**2.1** In your `Solution` window, under your Android/iOS/Shared projects, drop down the app project.
**2.2** Right-click the `Dependencies` folder and select Manage NuGet packages
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6beb7e8-1zhvmErA.png",
        "1zhvmErA.png",
        382,
        183,
        "#444e66"
      ]
    }
  ]
}
[/block]

**2.3** In the NuGet package window, ensure that the `Package Source` at the bottom bar of the window is set to `nuget.org`
**2.4** Search for `Com.OneSignal` under the `Browse` tab and select the `Com.OneSignal` package. Here you can select the version to be added. For pre-releases, ensure you have the `Include prereleases` option checked at the bottom tab.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/788b30d-RHPuFIFw.png",
        "RHPuFIFw.png",
        904,
        564,
        "#3e3e42"
      ]
    }
  ]
}
[/block]
**2.5** Click `Add Package` to add the OneSignal package to the app

---
#Step 3. Add Code

## Xamarin Forms Project

** 3.1A ** Add the OneSignal initialization code in the `App.xml.cs` file of your Xamarin Forms project as demonstrated below
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Core;\n\npublic App() {\n  InitializeComponent();\n  MainPage = new MainPage();\n  \n  OneSignal.Default.Initialize(\"YOUR_ONESIGNAL_APP_ID\");\n  OneSignal.Default.PromptForPushNotificationsWithUserResponse();\n}",
      "language": "csharp"
    }
  ]
}
[/block]

## Xamarin Single View App
###Android
**3.1B**  For your Android specific apps, ensure the `Com.OneSignal` package has been added to the Android app project
**3.2B** Add the OneSignal initialization code in `MainActivity.cs` in the OnCreate method of your Android app project
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Core;\n\nprotected override void OnCreate(Bundle savedInstanceState) {\n  base.OnCreate(savedInstanceState);\n\n  //... Leave exisiting code here\n\n  OneSignal.Default.Initialize(\"YOUR_ONESIGNAL_APP_ID\");\n}",
      "language": "csharp"
    }
  ]
}
[/block]
###iOS
**3.1B** For your iOS specific apps, ensure the `Com.OneSignal` package has been added to the iOS app project
**3.2B** Add the OneSignal initialization code in `AppDelegate.cs` in your `FinishedLaunching` method of your iOS app project
[block:code]
{
  "codes": [
    {
      "code": "using Com.OneSignal;\nusing Com.OneSignal.Core;\n\npublic override bool FinishedLaunching(UIApplication app, NSDictionary options) {\n  //... Leave existing code here\n\n  OneSignal.Default.Initialize(\"YOUR_ONESIGNAL_APP_ID\");\n  OneSignal.Default.PromptForPushNotificationsWithUserResponse();\n\n  return base.FinishedLaunching(app, options);\n}",
      "language": "csharp"
    }
  ]
}
[/block]
---
#Step 4. iOS - Add the Notification Service Extension

**4.1** To display Rich Media such as images and buttons on notifications, use <a href="https://documentation.onesignal.com/docs/confirmed-deliveries" target="_blank">Confirmed Deliveries</a> and increment/decrement <a href="https://documentation.onesignal.com/docs/badges" target="_blank">Badges</a> through push notifications, you'll first need to set up a Notification Service Extension and App Groups.

**4.1** Right-click your project solution and click Add>Add New Project

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33ecb7a-edN4yvBg.png",
        "edN4yvBg.png",
        446,
        346,
        "#3c4354"
      ]
    }
  ]
}
[/block]
**4.2** Click iOS>Extension>Notification Service Extension and select Next
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/acd0d48-_2myanEQ.png",
        "_2myanEQ.png",
        901,
        660,
        "#4d4e51"
      ]
    }
  ]
}
[/block]
**4.3** Enter the name `OneSignalNotificationServiceExtension` and click Next

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5f97ff0-3x-d_4Tw.png",
        "3x-d_4Tw.png",
        903,
        669,
        "#424242"
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
**4.4** Click `Create` to add the Notification Service Extension to your project

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4f66d49-Ar8ii4oQ.png",
        "Ar8ii4oQ.png",
        904,
        663,
        "#454545"
      ]
    }
  ]
}
[/block]
**4.5** Under the `OneSignalNotificationServiceExtension` project, right-click on `Manage NuGet Packages`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a02ec2c-FdsldyJA.png",
        "FdsldyJA.png",
        326,
        127,
        "#414f6c"
      ]
    }
  ]
}
[/block]
**4.6** Search for `Com.OneSignal` under the `Browse` tab and select the `Com.OneSignal` package. Here you can select the version to be added. For pre-releases, ensure you have the `Include prereleases` option checked at the bottom tab.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/18d6a2a-Fv-mcxkA.png",
        "Fv-mcxkA.png",
        904,
        564,
        "#3e3e42"
      ]
    }
  ]
}
[/block]
**4.7** Select the `NotificationService.cs` source file under your `OneSignalNotificationServiceExtension` and replace it with the following
[block:code]
{
  "codes": [
    {
      "code": "using System;\nusing Foundation;\nusing UserNotifications;\nusing Com.OneSignal;\n\nnamespace OneSignalNotificationServiceExtension\n{\n  [Register(\"NotificationService\")]\n  public class NotificationService : UNNotificationServiceExtension\n  {\n    Action<UNNotificationContent> ContentHandler { get; set; }\n    UNMutableNotificationContent BestAttemptContent { get; set; }\n    UNNotificationRequest ReceivedRequest { get; set; }\n\n    protected NotificationService(IntPtr handle) : base(handle)\n    {\n      // Note: this .ctor should not contain any initialization logic.\n    }\n\n    public override void DidReceiveNotificationRequest(UNNotificationRequest request, Action<UNNotificationContent> contentHandler)\n    {\n      ReceivedRequest = request;\n      ContentHandler = contentHandler;\n      BestAttemptContent = (UNMutableNotificationContent)request.Content.MutableCopy();\n\n      (OneSignal.Default as OneSignalImplementation).DidReceiveNotificationExtensionRequest(request, BestAttemptContent, contentHandler);\n    }\n\n    public override void TimeWillExpire()\n    {\n      // Called just before the extension will be terminated by the system.\n      // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n\n      (OneSignal.Default as OneSignalImplementation).ServiceExtensionTimeWillExpireRequest(ReceivedRequest, BestAttemptContent);\n\n      ContentHandler(BestAttemptContent);\n    }\n  }\n}",
      "language": "csharp"
    }
  ]
}
[/block]
**4.8** Open the `OneSignalNotificationServiceExtension` project’s `Info.plist` file and make sure the deployment target is at least iOS 10 or higher
**4.9** Open the iOS app project’s `Entitlements.plist` file and enable App Groups. Please add an app group using your Bundle Identifier - this will be something similar to `com.yourcompany.yourapp`. The full name of the app group needs to be in the following format: `group.{your_bundle_id}.onesignal`:
**4.10** Using the exact same app group name you specified above, repeat the same procedure for your `OneSignalNotificationServiceExtension` project, which will have its own `Entitlements.plist` file

That's it! Now, your application will be able to display push notification images, action buttons, and more. 

---
#Step 8. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

* Android devices should be subscribed to push notifications immediately upon opening the app. 
* iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

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