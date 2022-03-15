---
title: "Cordova SDK Setup"
slug: "cordova-sdk-setup"
excerpt: "Instructions for adding the OneSignal SDK to your Cordova app for iOS, Android, and derivatives like Amazon"
hidden: false
createdAt: "2016-09-20T03:47:48.173Z"
updatedAt: "2022-01-26T22:44:26.955Z"
---
[block:callout]
{
  "type": "info",
  "title": "Looking for Ionic setup?",
  "body": "See our [Ionic SDK Setup](doc:ionic-sdk-setup) guide instead. This includes Ionic Cordova."
}
[/block]
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.

## iOS Requirements
* An iOS 9+ or iPadOS device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">An iOS Push Certificate</a>.
* Cordova ios@5.0.0 or newer.
* [CocoaPods](https://cocoapods.org/) - Install with the following from the Terminal:
[block:code]
{
  "codes": [
    {
      "code": "sudo gem install cocoapods\npod repo update",
      "language": "shell"
    }
  ]
}
[/block]
## Android Requirements
* An Android 4.0.3+ device or emulator with "Google Play Store (Services)" installed.
* <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">A Google/Firebase Server API Key</a>.
* Project using <a href="https://developer.android.com/jetpack/androidx/migrate" target="_blank">AndroidX</a>.
* Cordova android@7.0.0 or newer.

### Amazon & Huawei Requirements
Follow these instructions if your app is distributed on the Amazon AppStore and/or the Huawei AppGallery.
* <a href="doc:generate-an-amazon-api-key" target="_blank">Generate an Amazon API Key</a>.
* <a href="doc:huawei-cordova-sdk-setup" target="_blank">Huawei Cordova SDK Setup</a>.

#Step 2. Import OneSignal Plugin
You should remove any other push SDKs that you are not using – otherwise, you may see duplicate notifications being sent to your users.

Run the following from your project directory:
[block:code]
{
  "codes": [
    {
      "code": "cordova plugin add onesignal-cordova-plugin --save",
      "language": "shell",
      "name": "Cordova"
    }
  ]
}
[/block]
#Step 3. Add Required Code

Add the following to the bottom of the first Javascript file that loads with your app. This is `<project-dir>/www/js/index.js` for most Cordova projects.
[block:code]
{
  "codes": [
    {
      "code": "// Add to index.js or the first page that loads with your app.\ndocument.addEventListener('deviceready', OneSignalInit, false);\nfunction OneSignalInit() {\n    // Uncomment to set OneSignal device logging to VERBOSE  \n    // window.plugins.OneSignal.setLogLevel(6, 0);\n    \n    // NOTE: Update the setAppId value below with your OneSignal AppId.\n    window.plugins.OneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\");\n    window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData) {\n        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));\n    });\n    \n    // iOS - Prompts the user for notification permissions.\n    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.\n    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {\n        console.log(\"User accepted notifications: \" + accepted);\n    });\n}",
      "language": "javascript",
      "name": "Cordova"
    }
  ]
}
[/block]
**3.1** Update initialization parameters. Replace `YOUR_ONESIGNAL_APP_ID` with your OneSignal App Id, available in the OneSignal dashboard under Settings > [Keys & IDs](doc:accounts-and-keys).

#Step 4. Configure your Xcode project (iOS Only)

**4.1** In `/platforms/ios` open the `.wcworkspace` project in Xcode.
 - Run `xed platforms/ios` from your project directory to do this.
**4.2** Select the root project, and under `Signing & Capabilities`, enable `Push Notifications`.
**4.3** Next, enable `Background Modes` and check `Remote Notifications`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8939f97-fg8Uc1FA.png",
        "fg8Uc1FA.png",
        1512,
        1072,
        "#2b2d30"
      ]
    }
  ]
}
[/block]
## iOS Service Extensions

**Highly recommended**: This step is optional but highly recommended. The `OneSignalNotificationServiceExtension` allows your application (in iOS) to receive rich notifications with images and/or buttons, along with Badges and advanced analytics like Outcomes.

**4.4** Please follow the [Notification Service Extension](doc:ios-sdk-setup#step-2-add-a-notification-service-extension) guide (only Steps 2). 
- Use **Objective-C** in this step, then come back to this page and continue following the steps below.

**4.5** Select the new `OneSignalNotificationServiceExtension` Target, select `Build Settings`, then search for `Code Signing Entitlements`.

**4.6** Delete both `Debug` and `Release` entries so they are blank.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9418cd8-Screen_Shot_2020-07-14_at_6.48.42_PM.png",
        "Screen Shot 2020-07-14 at 6.48.42 PM.png",
        1139,
        417,
        "#373333"
      ]
    }
  ]
}
[/block]
**4.7** Go to the Notification Service Extension's General Xcode project settings, and set the `Deployment Target` to be iOS 10 if you have not done so already.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ef7372-Screen_Shot_2020-07-14_at_7.18.55_PM.png",
        "Screen Shot 2020-07-14 at 7.18.55 PM.png",
        878,
        672,
        "#222224"
      ]
    }
  ]
}
[/block]
**4.8** Close Xcode and open `platform/ios/Podfile`
**4.9** Add the following to the bottom of the file.
[block:code]
{
  "codes": [
    {
      "code": "target 'OneSignalNotificationServiceExtension' do\n  pod 'OneSignalXCFramework', '>= 3.0.0', '< 4.0'\nend",
      "language": "text",
      "name": "Podfile"
    }
  ]
}
[/block]
**4.10** Open you terminal to `platform/ios` and run `pod install`

## iOS - Add App Groups (Recommended)

In order for your application to use [Confirmed Deliveries](doc:confirmed-deliveries) and increment/decrement [Badges](doc:badges) through push notifications, you need to setup an **App Group** for your application. 

Please follow the [iOS SDK App Groups setup guide](doc:ios-sdk-app-groups-setup) to add the OneSignal App Group in your app.

### iOS Automatic Builds (Optional)

If you are using an automated build system, you may run into issues where the Push Notification capability is not enabled for your project. In order to resolve this problem, you can follow these steps:

**4.11** In your Xcode project, make sure the Push Notifications capability (as well as any other capabilities your app needs).

**4.12** Close the Xcode project. In the `/platforms/ios` folder you will see a `{yourProjectName}.entitlements` file. Copy this file to the root of your Cordova project.

**4.13** Edit your `config.xml` file to include the following. Make sure to replace `[yourProjectName]` with the name of your project.
[block:code]
{
  "codes": [
    {
      "code": "<platform name=\"ios\">\n    <resource-file src=\"[yourProjectName].entitlements\" />\n</platform>",
      "language": "xml"
    }
  ]
}
[/block]
#Step 5. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

- Android devices should be subscribed to push notifications immediately upon opening the app. 
- iOS devices should be prompted to subscribe to push notifications if you used the example setup code provided.

Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If you run into any issues please see our [Cordova Variants troubleshooting guide](doc:troubleshooting-cordova-variants).\n\nTry the [example project on our Github repository](https://github.com/OneSignalDevelopers/OneSignal-Cordova-Example).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Step 6. Set Custom User Properties
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
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\nwindow.plugins.OneSignal.setExternalUserId(externalUserId);",
      "language": "swift",
      "name": "Cordova/Ionic"
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
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setEmail(\"example@domain.com\");\n\n// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setSMSNumber(\"+11234567890\");",
      "language": "swift",
      "name": "Cordova/Ionic"
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
      "code": "window.plugins.OneSignal.sendTags({key: \"value\", key2: \"value2\"});",
      "language": "swift",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
#Step 7. Prompt Your Users to Subscribe (Recommended for iOS)
**Optional**

Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/notifications/) recommend that apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.

See our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) for details on implementing this.

#Step 8. Add Android Icons (Android Only)
Follow the [Android Notification Icons](doc:customize-notification-icons) instructions to create small notification icons.

#Step 9. Add Amazon ADM Support (Kindle Fire Apps Only)
Place your `api_key.txt` file into your `<project-dir>/platforms/android/assets/` folder.
To create an `api_key.txt` for your app, follow our **[Generate an Amazon API Key](doc:generate-an-amazon-api-key).**
[block:callout]
{
  "type": "success",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps.",
  "title": "Setup Complete!"
}
[/block]