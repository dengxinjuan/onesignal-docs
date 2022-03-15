---
title: "React Native & Expo SDK Setup"
slug: "react-native-sdk-setup"
excerpt: "Instructions for adding the OneSignal React Native & Expo SDK to your app for iOS, Android, and derivatives like Amazon"
hidden: false
createdAt: "2016-09-20T03:49:10.910Z"
updatedAt: "2021-12-01T18:21:23.861Z"
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
  "body": "For your convenience, we created an example project, based on React Native 0.63.\nYou can run this project to test configurations, debug, and build upon it.\n\n * `git clone https://github.com/OneSignal/react-native-onesignal`\n * `cd react-native-onesignal && cd examples && cd RNOneSignal`\n * `yarn`\n * Running the Android example app: `react-native run-android`\n * Running the iOS example app:\n   - Open the `RNOneSignal` project in Xcode\n   - Change the **Signing Team** and **Bundle Identifier** for both the RNOneSignal target as well as the OneSignalNotificationServiceExtension\n      - The Service Extension **bundle id** should be <main-target-bunde-id>.OneSignalNotificationServiceExtension\n   - Build"
}
[/block]
#Step 2. Add the OneSignal package to your app
[block:callout]
{
  "type": "warning",
  "title": "Expo Setup",
  "body": "OneSignal is a native library and leverages the Google FCM and Apple APNS protocols. There are 2 options for adding OneSignal to your Expo Project:\n1. Try the <a href=\"https://github.com/OneSignal/onesignal-expo-plugin/releases\" target=\"_blank\">OneSignal Expo Plugin</a>. Recommended if you are using a Managed Expo Workflow. Follow the plugin's README for details.\n2. Use an <a href=\"https://docs.expo.io/introduction/managed-vs-bare/#bare-workflow\" target=\"_blank\">Expo Bare Workflow</a>. Follow Expo’s guide on <a href=\"https://docs.expo.io/workflow/customizing/\" target=\"_blank\">Ejecting from the Managed Workflow</a>."
}
[/block]
**2.1** Install the SDK using Yarn or NPM

   - Yarn: `yarn add react-native-onesignal`
   - NPM `npm install --save react-native-onesignal`

**2.2** Link OneSignal **(for RN versions < 0.60)**

**Skip if using React Native version of 0.60 or greater.** [Autolinking is now done automatically](https://reactnative.dev/blog/2019/07/03/version-60#native-modules-are-now-autolinked) so skip to step 3.

React Native: `react-native link react-native-onesignal`

#Step 3. Install for Android using Gradle (For Android apps)

At the very top of your Android project's `app/build.gradle`, add the following code so it begins at line 1 of the file:
[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.10, 0.99.99]'\n    }\n}\n\napply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
#Step 4. Install for iOS using Cocoapods (For iOS Apps)

**4.1** Run `cd ios && pod install`

**4.2** Add Required Capabilities

In your project's ios directory, open the `<your-project>.xcworkspace` file in Xcode. 

Select the root project and main app target. In **Signing & Capabilities**, select **All** and **+ Capability**. Add "Push Notifications".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/710b29e-Screen_Shot_2020-08-15_at_5.40.54_PM.png",
        "Screen Shot 2020-08-15 at 5.40.54 PM.png",
        2794,
        1916,
        "#2f2f32"
      ]
    }
  ]
}
[/block]
Click **+ Capability** to add **Background Modes** and check **Remote notifications**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/88761ee-Screen_Shot_2020-08-15_at_5.48.44_PM.png",
        "Screen Shot 2020-08-15 at 5.48.44 PM.png",
        3024,
        2144,
        "#292b2e"
      ]
    }
  ]
}
[/block]
**4.3**  Add a Notification Service Extension

The `OneSignalNotificationServiceExtension` allows your application to receive rich notifications with images and/or buttons, and to report analytics about which notifications users receive. 

**4.3.1** In Xcode Select `File` > `New` > `Target...`
**4.3.2** Select `Notification Service Extension` then press `Next`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e907af2-Screen_Shot_2020-08-15_at_5.53.20_PM.png",
        "Screen Shot 2020-08-15 at 5.53.20 PM.png",
        1482,
        1076,
        "#292b2f"
      ]
    }
  ]
}
[/block]
**4.3.3** Enter the product name as `OneSignalNotificationServiceExtension` and press `Finish`. Do not press "Activate" on the dialog shown after this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/151dd3f-Screen_Shot_2020-08-15_at_5.54.18_PM.png",
        "Screen Shot 2020-08-15 at 5.54.18 PM.png",
        1454,
        1056,
        "#363739"
      ]
    }
  ]
}
[/block]
**4.3.4** Press Cancel on the Activate scheme prompt.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb77dcb-Screen_Shot_2020-08-15_at_5.54.37_PM.png",
        "Screen Shot 2020-08-15 at 5.54.37 PM.png",
        840,
        462,
        "#3f4045"
      ]
    }
  ]
}
[/block]
By canceling, you are keeping Xcode debugging your app, instead of just the extension. If you activate by accident, you can always switch back to debug your app within Xcode (next to the play button).

**4.3.5** In the **Project Navigator**, select the top-level project directory and select the `OneSignalNotificationServiceExtension` target.

Ensure the `Deployment Target` is set to `iOS 10` for maximum platform compatibility. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7fd5a7-Screen_Shot_2020-08-15_at_5.57.37_PM.png",
        "Screen Shot 2020-08-15 at 5.57.37 PM.png",
        3024,
        2144,
        "#2a2b2e"
      ]
    }
  ]
}
[/block]
**4.3.6** In your Project Root > ios > `Podfile`, add the notification service extension outside the main target (should be at the same level as your main target):
[block:code]
{
  "codes": [
    {
      "code": "target 'OneSignalNotificationServiceExtension' do\n  pod 'OneSignalXCFramework', '>= 3.0', '< 4.0'\nend",
      "language": "ruby",
      "name": "Podfile"
    },
    {
      "code": "require_relative '../node_modules/react-native/scripts/react_native_pods'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\nplatform :ios, '10.0'\n\ntarget 'ReactNativeDemo' do\n  config = use_native_modules!\n\n  use_react_native!(\n    :path => config[:reactNativePath],\n    # to enable hermes on iOS, change `false` to `true` and then install pods\n    :hermes_enabled => false\n  )\n\n  target 'ReactNativeDemoTests' do\n    inherit! :complete\n    # Pods for testing\n  end\n\n  # Enables Flipper.\n  #\n  # Note that if you have use_frameworks! enabled, Flipper will not work and\n  # you should disable the next line.\n  use_flipper!()\n\n  post_install do |installer|\n    react_native_post_install(installer)\n  end\nend\n\ntarget 'OneSignalNotificationServiceExtension' do\n  pod 'OneSignalXCFramework', '>= 3.0', '< 4.0'\nend",
      "language": "text",
      "name": "Example Podfile"
    }
  ]
}
[/block]
Close Xcode. While still in the `ios` directory, run `pod install` again.

Re-Open the `. xcworkspace` file in Xcode. In the **OneSignalNotificationServiceExtension** directory > `NotificationService.m` or `NotificationService.swift` file, replace the whole file contents with the code below:
[block:code]
{
  "codes": [
    {
      "code": "#import <OneSignal/OneSignal.h>\n\n#import \"NotificationService.h\"\n\n@interface NotificationService ()\n\n@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);\n@property (nonatomic, strong) UNNotificationRequest *receivedRequest;\n@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;\n\n@end\n\n@implementation NotificationService\n\n- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    //If your SDK version is < 3.5.0 uncomment and use this code:\n    /*\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent];\n    self.contentHandler(self.bestAttemptContent);\n    */\n    \n    /* DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n                  Note, this extension only runs when mutable-content is set\n                  Setting an attachment or action buttons automatically adds this */\n    // NSLog(@\"Running NotificationServiceExtension\");\n    // self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n    \n  \t// Uncomment this line to set the default log level of NSE to VERBOSE so we get all logs from NSE logic\n    //[OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent\n                                   withContentHandler:self.contentHandler];\n}\n\n- (void)serviceExtensionTimeWillExpire {\n    // Called just before the extension will be terminated by the system.\n    // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n    \n    [OneSignal serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n@end",
      "language": "objectivec",
      "name": "Objective-C"
    },
    {
      "code": "import UserNotifications\n\nimport OneSignal\n\nclass NotificationService: UNNotificationServiceExtension {\n    \n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var receivedRequest: UNNotificationRequest!\n    var bestAttemptContent: UNMutableNotificationContent?\n    \n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.receivedRequest = request\n        self.contentHandler = contentHandler\n        self.bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        \n        if let bestAttemptContent = bestAttemptContent {\n            //If your SDK version is < 3.5.0 uncomment and use this code:\n            /*\n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n            */\n            \n            /* DEBUGGING: Uncomment the 2 lines below to check this extension is excuting\n                          Note, this extension only runs when mutable-content is set\n                          Setting an attachment or action buttons automatically adds this */\n            //OneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)\n            //bestAttemptContent.body = \"[Modified] \" + bestAttemptContent.body\n            \n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: bestAttemptContent, withContentHandler: self.contentHandler)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            OneSignal.serviceExtensionTimeWillExpireRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n        }\n    }\n    \n}",
      "language": "swift",
      "name": null
    }
  ]
}
[/block]
 _Ignore any build errors at this point, we will resolve these later by importing the OneSignal library._
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/042a20d-Screen_Shot_2020-08-15_at_6.07.41_PM.png",
        "Screen Shot 2020-08-15 at 6.07.41 PM.png",
        1128,
        800,
        "#313237"
      ]
    }
  ]
}
[/block]
**4.4** Add App Group

In order for your application to use [Confirmed Deliveries](doc:confirmed-deliveries) and increment/decrement [Badges](doc:badges) through push notifications, you need to set up an **App Group** for your application. 

**4.4.1** In your main app target go back to **Signing & Capabilities** > **All** > **+ Capability** and add **App Groups**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b72690-Screen_Shot_2020-08-15_at_6.10.59_PM.png",
        "Screen Shot 2020-08-15 at 6.10.59 PM.png",
        2796,
        1912,
        "#303134"
      ]
    }
  ]
}
[/block]
**4.4.2** Under the newly added “App Groups” capability click the **+** button.

Set the “App Groups” container to be `group.YOUR_BUNDLE_IDENTIFIER.onesignal` where `YOUR_BUNDLE_IDENTIFIER` is the same as shown in "Bundle Identifier" then press OK.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f271ce-Screen_Shot_2020-08-15_at_6.15.25_PM.png",
        "Screen Shot 2020-08-15 at 6.15.25 PM.png",
        1438,
        910,
        "#2c2d30"
      ]
    }
  ]
}
[/block]
**4.4.3** Repeat this process for the **OneSignalNotificationServiceExtension**

Make sure the "App Groups" container is the same for both targets! **Do not include** `OneSignalNotificationServiceExtension`. Then press OK.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/230100f-c51bffb-Screen_Shot_2020-08-15_at_6.21.25_PM.png",
        "c51bffb-Screen_Shot_2020-08-15_at_6.21.25_PM.png",
        1352,
        808,
        "#29292c"
      ]
    }
  ]
}
[/block]
If you require more details or troubleshooting help, see the [iOS SDK App Groups setup guide](doc:ios-sdk-app-groups-setup).

#Step 5. Initialize the OneSignal SDK

In your `App.js` or `index.js` initialize OneSignal and try the example methods below:
[block:code]
{
  "codes": [
    {
      "code": "import OneSignal from 'react-native-onesignal';\n\n//OneSignal Init Code\nOneSignal.setLogLevel(6, 0);\nOneSignal.setAppId(\"YOUR-ONESIGNAL-APP-ID\");\n//END OneSignal Init Code\n\n//Prompt for push on iOS\nOneSignal.promptForPushNotificationsWithUserResponse(response => {\n  console.log(\"Prompt response:\", response);\n});\n\n//Method for handling notifications received while app in foreground\nOneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {\n  console.log(\"OneSignal: notification will show in foreground:\", notificationReceivedEvent);\n  let notification = notificationReceivedEvent.getNotification();\n  console.log(\"notification: \", notification);\n  const data = notification.additionalData\n  console.log(\"additionalData: \", data);\n  // Complete with null means don't show a notification.\n  notificationReceivedEvent.complete(notification);\n});\n\n//Method for handling notifications opened\nOneSignal.setNotificationOpenedHandler(notification => {\n  console.log(\"OneSignal: notification opened:\", notification);\n});",
      "language": "javascript",
      "name": "index.js"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Event Listeners & Components",
  "body": "We suggest using a base/root component to add as an event listener. If you choose a sub-component that is only shown in some situations (such as using a homepage as an event listener), the component may unmount later on as the user navigates elsewhere in your app.\n\nIf you encounter problems with one or more of the events listeners, please see our troubleshooting documentation [here](https://documentation.onesignal.com/docs/troubleshooting-react-native)."
}
[/block]

### Manually updating iOS OneSignalNativeSDK
When you install `react-native-onesignal` it will automatically include a specific version of the OneSignal iOS native SDK that is known to work with it. Only follow the instructions below if there is a native OneSignal SDK fix you need that isn't included already in the latest `react-native-onesignal` update.

1. Download the [latest OneSignal iOS native](https://github.com/OneSignal/OneSignal-iOS-SDK/releases) release.
2. Delete `libOneSignal.a` and `OneSignal.h` from `node_modules/react-native-onesignal/ios/`
3. From `/iOS_SDK/OneSignalSDK/Framework/OneSignal.framework/Versions/A/`, copy `OneSignal` to `/node_modules/react-native-onesignal/ios/` and rename it `libOneSignal.a`
4. Copy `OneSignal.h` from `/iOS_SDK/OneSignalSDK/Framework/OneSignal.framework/Versions/A/Headers` to `/node_modules/react-native-onesignal/ios/`

#Step 6. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "body": "If you run into any issues please see our [React Native troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting-react-native).\n\nTry the [example project on our Github repository](https://github.com/OneSignal/react-native-onesignal/tree/main/examples/RNOneSignalTS).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce",
  "title": "Troubleshooting"
}
[/block]
#Step 7. Set Custom User Properties
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
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\nOneSignal.setExternalUserId(externalUserId);",
      "language": "javascript"
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
      "code": "// Pass in email provided by customer\nOneSignal.setEmail(\"example@domain.com\");\n\n// Pass in phone number provided by customer\nOneSignal.setSMSNumber(\"+11234567890\");",
      "language": "javascript",
      "name": null
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
      "code": "OneSignal.sendTag(\"key\", \"value\");",
      "language": "javascript"
    }
  ]
}
[/block]
#Step 8. Implement a Soft-Prompt In-App Message for iOS
**Optional**

Android devices are subscribed to notifications automatically when your app is installed, so this section only applies to your iOS release.

Apple's Human Interface Guidelines recommend that apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/efcc630-efcbff2-iam-design.jpg",
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
  "title": "Done!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]