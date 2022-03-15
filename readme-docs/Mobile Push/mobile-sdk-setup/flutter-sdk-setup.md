---
title: "Flutter SDK Setup"
slug: "flutter-sdk-setup"
excerpt: "Instructions for adding the OneSignal Flutter SDK to your Flutter app for iOS and Android"
hidden: false
createdAt: "2018-07-23T19:55:33.249Z"
updatedAt: "2022-02-11T20:31:33.559Z"
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
[block:callout]
{
  "type": "info",
  "title": "Running Example Project",
  "body": "For your convenience, we've created an example project. You can run this project for iOS and Android. \n* `git clone https://github.com/OneSignal/OneSignal-Flutter-SDK.git`\n* `cd OneSignal-Flutter-SDK/example`\n* `flutter run`\n* `flutter run -d {your device ID}`"
}
[/block]
#Step 2. Add the OneSignal Flutter SDK

**2.1** To add the OneSignal Flutter SDK to your project, edit your project's `pubspec.yaml` file:

[block:code]
{
  "codes": [
    {
      "code": "dependencies:\n\tonesignal_flutter: ^3.0.0",
      "language": "yaml",
      "name": "pubspec.yaml"
    }
  ]
}
[/block]
**2.2** Run `flutter pub get` to install the SDK.

**2.3** Now, in your Dart code, you can use:
[block:code]
{
  "codes": [
    {
      "code": "import 'package:onesignal_flutter/onesignal_flutter.dart';",
      "language": "text",
      "name": "main.dart"
    }
  ]
}
[/block]
#Step 3. Add an iOS Service Extension (iOS Apps Only)

The OneSignalNotificationServiceExtension allows your application (in iOS) to receive rich notifications with images and buttons, along with Badges and [Confirmed Deliveries](doc:confirmed-deliveries).

**3.1** Within your project's ios folder, open the `.xcworkspace` file in Xcode.

**3.2** Select `File` > `New` > `Target`

**3.3** Select `Notification Service Extension` and press `Next`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/02606c3-Screen_Shot_2021-08-17_at_6.16.30_PM.png",
        "Screen Shot 2021-08-17 at 6.16.30 PM.png",
        1462,
        1050,
        "#2a2e32"
      ],
      "caption": ""
    }
  ]
}
[/block]
**3.4** Enter the Product Name as `OneSignalNotificationServiceExtension` and Language to **Objective-C** (if you need to use Swift that is ok). 

Then click **Finish**. Do not select "Activate" on the dialog shown after selecting "Finish".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c172285-Screen_Shot_2021-08-17_at_6.16.50_PM.png",
        "Screen Shot 2021-08-17 at 6.16.50 PM.png",
        1462,
        1050,
        "#2f3032"
      ]
    }
  ]
}
[/block]
**3.5** Press `Cancel` on the `Activate Scheme` prompt
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/56cd30d-Screen_Shot_2021-08-17_at_6.03.15_PM.png",
        "Screen Shot 2021-08-17 at 6.03.15 PM.png",
        538,
        756,
        "#373e47"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
By canceling, you are keeping Xcode set to debug your app instead of the extension. If you selected Activate by accident, you can simply switch back to debug your app in Xcode (next to the Play button).

**3.6** Open the Xcode project settings and select the OneSignalNotificationServiceExtension target. Unless you have a specific reason not to, you should set the **Deployment Info > Target** to be iOS 10.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ea79ce-Screen_Shot_2021-08-17_at_6.04.39_PM.png",
        "Screen Shot 2021-08-17 at 6.04.39 PM.png",
        3024,
        2024,
        "#323436"
      ]
    }
  ]
}
[/block]
**3.7** Close the Xcode project. In the `/ios` directory of your project, open the `Podfile` and add the following outside of the main target (should be at the same level as your main target):
[block:code]
{
  "codes": [
    {
      "code": "target 'OneSignalNotificationServiceExtension' do\n  use_frameworks!\n  pod 'OneSignalXCFramework', '>= 3.4.3', '< 4.0'\nend",
      "language": "ruby",
      "name": "Podfile"
    },
    {
      "code": "# Uncomment this line to define a global platform for your project\nplatform :ios, '9.0'\n\n# CocoaPods analytics sends network stats synchronously affecting flutter build latency.\nENV['COCOAPODS_DISABLE_STATS'] = 'true'\n\nproject 'Runner', {\n  'Debug' => :debug,\n  'Profile' => :release,\n  'Release' => :release,\n}\n\ndef flutter_root\n  generated_xcode_build_settings_path = File.expand_path(File.join('..', 'Flutter', 'Generated.xcconfig'), __FILE__)\n  unless File.exist?(generated_xcode_build_settings_path)\n    raise \"#{generated_xcode_build_settings_path} must exist. If you're running pod install manually, make sure flutter pub get is executed first\"\n  end\n\n  File.foreach(generated_xcode_build_settings_path) do |line|\n    matches = line.match(/FLUTTER_ROOT\\=(.*)/)\n    return matches[1].strip if matches\n  end\n  raise \"FLUTTER_ROOT not found in #{generated_xcode_build_settings_path}. Try deleting Generated.xcconfig, then run flutter pub get\"\nend\n\nrequire File.expand_path(File.join('packages', 'flutter_tools', 'bin', 'podhelper'), flutter_root)\n\nflutter_ios_podfile_setup\n\ntarget 'Runner' do\n  use_frameworks!\n  use_modular_headers!\n\n  flutter_install_all_ios_pods File.dirname(File.realpath(__FILE__))\nend\n\npost_install do |installer|\n  installer.pods_project.targets.each do |target|\n    flutter_additional_ios_build_settings(target)\n  end\nend\n\ntarget 'OneSignalNotificationServiceExtension' do\n  use_frameworks!\n  pod 'OneSignalXCFramework', '>= 3.4.3', '< 4.0'\nend",
      "language": "text",
      "name": "Example Podfile"
    }
  ]
}
[/block]
**3.8** At the top of your `Podfile` make sure you have `platform :ios, '9.0'`.
      - Or a newer iOS version if your app requires it.

[block:code]
{
  "codes": [
    {
      "code": "# Uncomment this line to define a global platform for your project\nplatform :ios, '9.0'",
      "language": "ruby",
      "name": "Podfile"
    }
  ]
}
[/block]
**3.9** Open terminal, `cd` to the `ios` directory, and run `pod install`.

If you see the error below, remove `#` from the above in front of `use_frameworks!` and try again.
```
- Runner (true) and OneSignalNotificationServiceExtension (false) do not both set use_frameworks!.
```

**3.10** Open the `<project-name>.xcworkspace` file.
** *Make sure to always open the workspace file.* **
In your project, in the `OneSignalNotificationServiceExtension/` folder, open `NotificationService.m` and replace the whole file contents with:
[block:code]
{
  "codes": [
    {
      "code": "#import <OneSignal/OneSignal.h>\n\n#import \"NotificationService.h\"\n\n@interface NotificationService ()\n\n@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);\n@property (nonatomic, strong) UNNotificationRequest *receivedRequest;\n@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;\n\n@end\n\n@implementation NotificationService\n\n- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    //If your SDK version is < 3.5.0 uncomment and use this code:\n    /*\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent];\n    self.contentHandler(self.bestAttemptContent);\n    */\n    \n    /* DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n                  Note, this extension only runs when mutable-content is set\n                  Setting an attachment or action buttons automatically adds this */\n    // NSLog(@\"Running NotificationServiceExtension\");\n    // self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n    \n    // Uncomment this line to set the default log level of NSE to VERBOSE so we get all logs from NSE logic\n    //[OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent\n                                   withContentHandler:self.contentHandler];\n}\n\n- (void)serviceExtensionTimeWillExpire {\n    // Called just before the extension will be terminated by the system.\n    // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n    \n    [OneSignal serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n@end\n",
      "language": "objectivec"
    },
    {
      "code": "import UserNotifications\n\nimport OneSignal\n\nclass NotificationService: UNNotificationServiceExtension {\n    \n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var receivedRequest: UNNotificationRequest!\n    var bestAttemptContent: UNMutableNotificationContent?\n    \n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.receivedRequest = request\n        self.contentHandler = contentHandler\n        self.bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        \n        if let bestAttemptContent = bestAttemptContent {\n            //If your SDK version is < 3.5.0 uncomment and use this code:\n            /*\n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n            */\n            \n            /* DEBUGGING: Uncomment the 2 lines below to check this extension is excuting\n                          Note, this extension only runs when mutable-content is set\n                          Setting an attachment or action buttons automatically adds this */\n            //OneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)\n            //bestAttemptContent.body = \"[Modified] \" + bestAttemptContent.body\n            \n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: bestAttemptContent, withContentHandler: self.contentHandler)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            OneSignal.serviceExtensionTimeWillExpireRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n        }\n    }\n    \n}\n",
      "language": "swift"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Ignore Any Build Errors",
  "body": "The build errors will disappear once you run the app."
}
[/block]
**3.11** Finally, you will need to enable an App Group to use [Confirmed Deliveries](doc:confirmed-deliveries) and increment/decrement [Badges](doc:badges) through push notifications.

Please follow the [iOS SDK App Groups setup guide](doc:ios-sdk-app-groups-setup) to add the OneSignal App Group in your app.

#Step 4. Enable iOS Push Capability in Xcode (iOS Apps Only)

**4.1** In the main app target, select **Signing & Capabilities** > **All** > **+ Capability**, enable **Push Notifications**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93b1ec9-Screen_Shot_2021-08-17_at_6.22.19_PM.png",
        "Screen Shot 2021-08-17 at 6.22.19 PM.png",
        2412,
        1548,
        "#303335"
      ]
    }
  ]
}
[/block]
**4.2** Next, enable **Background Modes** and check **Remote Notifications**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/974aa5c-Screen_Shot_2021-08-17_at_6.23.40_PM.png",
        "Screen Shot 2021-08-17 at 6.23.40 PM.png",
        2744,
        1870,
        "#333537"
      ]
    }
  ]
}
[/block]
#Step 5. Set up OneSignal for Android

Add the following to the very top (Line:1 ) of your `android/app/build.gradle`
[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        // ...\n        maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal\n    }\n    dependencies {\n        // ...\n        // OneSignal-Gradle-Plugin\n        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.10, 0.99.99]'\n    }\n}\n\napply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'",
      "language": "groovy",
      "name": "android/app/build.gradle"
    }
  ]
}
[/block]

#Step 6. Initialize the OneSignal SDK (All Platforms)

**6.1** You can now initialize OneSignal using the following code in your `main.dart` file:
[block:code]
{
  "codes": [
    {
      "code": "//Remove this method to stop OneSignal Debugging \nOneSignal.shared.setLogLevel(OSLogLevel.verbose, OSLogLevel.none);\n\nOneSignal.shared.setAppId(\"YOUR_ONESIGNAL_APP_ID\");\n\n// The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission\nOneSignal.shared.promptUserForPushNotificationPermission().then((accepted) {\n\tprint(\"Accepted permission: $accepted\");\n});\n",
      "language": "javascript",
      "name": "Flutter"
    }
  ]
}
[/block]
**6.2** You can also add observers for various events, such as a new notification being received or opened, or observe changes to the subscription status:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.shared.setNotificationWillShowInForegroundHandler((OSNotificationReceivedEvent event) {\n  // Will be called whenever a notification is received in foreground\n  // Display Notification, pass null param for not displaying the notification\n\t\tevent.complete(event.notification);                                 \n});\n\nOneSignal.shared.setNotificationOpenedHandler((OSNotificationOpenedResult result) {\n  // Will be called whenever a notification is opened/button pressed.\n});\n\nOneSignal.shared.setPermissionObserver((OSPermissionStateChanges changes) {\n\t// Will be called whenever the permission changes\n\t// (ie. user taps Allow on the permission prompt in iOS)\n});\n\nOneSignal.shared.setSubscriptionObserver((OSSubscriptionStateChanges changes) {\n\t// Will be called whenever the subscription changes \n\t// (ie. user gets registered with OneSignal and gets a user ID)\n});\n\nOneSignal.shared.setEmailSubscriptionObserver((OSEmailSubscriptionStateChanges emailChanges) {\n\t// Will be called whenever then user's email subscription changes\n\t// (ie. OneSignal.setEmail(email) is called and the user gets registered\n});",
      "language": "javascript",
      "name": "Flutter"
    }
  ]
}
[/block]

#Step 7. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If you run into any issues please see our [Flutter troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting-flutter).\n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-Flutter-SDK/tree/main/example).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Step 8. Set Custom User Properties
**Recommended**
After initialization, OneSignal will automatically collect <a href="doc:data-collected-by-the-onesignal-sdk" target="_blank">common user data</a> by default. Use the following methods to set your own custom userIds, emails, phone numbers, and other user-level properties.

##Set External User Id
**Required if using integrations.**
**Recommended for messaging across multiple channels (push, email, sms).** 

OneSignal creates channel-level device records under a unique Id called the `player_id`. A single user can have multiple `player_id` records based on how many devices, email addresses, and phone numbers they use to interact with your app.

If your app has its own login system to track users, call `setExternalUserId` at any time to link all channels to a single user. For more details, see <a href="doc:external-user-ids" target="_blank">External User Ids</a>. 
[block:code]
{
  "codes": [
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\nOneSignal.shared.setExternalUserId(externalUserId);",
      "language": "swift",
      "name": "Flutter(Dart)"
    }
  ]
}
[/block]
##Set Email and Phone Number
**Recommended if using Email and SMS messaging.** 
Use the provided SDK methods to capture email and phone number when provided. Follow the channel quickstart guides for setup:
- <a href="doc:email-quickstart" target="_blank">Email Quickstart</a>
- <a href="doc:sms-quickstart" target="_blank">SMS Quickstart</a>
[block:code]
{
  "codes": [
    {
      "code": "// Pass in email provided by customer\nOneSignal.setEmail(\"example@domain.com\");\n\n// Pass in phone number provided by customer\nOneSignal.shared.setSMSNumber(smsNumber: \"+11234567890\")",
      "language": "swift",
      "name": "Flutter (Dart)"
    }
  ]
}
[/block]
##Data Tags
**Optional** 
All other event and user properties can be set using <a href="doc:add-user-data-tags" target="_blank">Data Tags</a>. Setting this data is required for more complex segmentation and message personalization.
[block:code]
{
  "codes": [
    {
      "code": "await OneSignal.shared.sendTag(\"test\", \"value\");",
      "language": "swift",
      "name": "Flutter(Dart)"
    }
  ]
}
[/block]
#Step 9. Implement a Soft-Prompt In-App Message for iOS
**Optional**

Android devices are subscribed to notifications automatically when your app is installed, so this section only applies to your iOS release.

Apple's Human Interface Guidelines recommend that apps "Create an alert, modal view, or another interface that describes the types of information they want to send and gives people a clear way to opt-in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03af403-efcbff2-iam-design.jpg",
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