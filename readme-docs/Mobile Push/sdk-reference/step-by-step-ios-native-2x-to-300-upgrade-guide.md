---
title: "Step-by-Step iOS Native 2.x to 3.0.0 Upgrade Guide"
slug: "step-by-step-ios-native-2x-to-300-upgrade-guide"
hidden: true
createdAt: "2020-09-24T02:20:33.709Z"
updatedAt: "2021-05-12T01:21:43.820Z"
---
# Step 1 - Requirements
This guide assumes you already have setup the [OneSignal-iOS-SDK 2.x.x](https://documentation.onesignal.com/docs/ios-sdk-setup-200) and are migrating your app to the 3.x Major version.


# Step 2 - Update the OneSignal SDK in your Xcode project
Depending on how you have OneSignal Imported today follow one of these sections
## Cocoapods
- Update your podfile version noted below.
[block:code]
{
  "codes": [
    {
      "code": "target 'your_project_name' do\n  #only copy below line\n  pod 'OneSignal', '>= 3.0.0', '< 4.0'\nend\n\ntarget 'OneSignalNotificationServiceExtension' do\n  #only copy below line\n  pod 'OneSignal', '>= 3.0.0', '< 4.0'\nend",
      "language": "ruby",
      "name": "Podfile"
    }
  ]
}
[/block]
 - Run `pod update OneSignal`

## SwiftPM
Switch to branch `3.0.0`

# Step 3 - Update OneSignal Initialization Code
3.1 Navigate to your AppDelegate file and add the OneSignal initialization code to `didFinishLaunchingWithOptions`. 
3.2 Replace the following
[block:code]
{
  "codes": [
    {
      "code": "  // START OneSignal initialization code\n  let onesignalInitSettings = [kOSSettingsKeyAutoPrompt: false, kOSSettingsKeyInAppLaunchURL: false]\n  \n  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.\n  OneSignal.initWithLaunchOptions(launchOptions,\n    appId: \"YOUR_ONESIGNAL_APP_ID\",\n    handleNotificationAction: nil,\n    settings: onesignalInitSettings)\n\n  OneSignal.inFocusDisplayType = OSNotificationDisplayType.notification;\n  //END OneSignal initializataion code",
      "language": "swift"
    },
    {
      "code": "  //START OneSignal initialization code\n  [OneSignal initWithLaunchOptions:launchOptions\n   appId:@\"YOUR_ONESIGNAL_APP_ID\"\n   handleNotificationAction:nil\n   settings:@{kOSSettingsKeyAutoPrompt: @false, kOSSettingsKeyInAppLaunchURL: @false}];\n  OneSignal.inFocusDisplayType = OSNotificationDisplayTypeNotification;",
      "language": "objectivec"
    }
  ]
}
[/block]
3.3 To the match the new initialization
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal initialization\nOneSignal.initWithLaunchOptions(launchOptions)\nOneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\")",
      "language": "swift"
    },
    {
      "code": "// OneSignal initialization\n[OneSignal initWithLaunchOptions:launchOptions];\n[OneSignal setAppId:@\"YOUR_ONESIGNAL_APP_ID\"];",
      "language": "objectivec"
    }
  ]
}
[/block]
3.4 Review your existing `.inFocusDisplayType` usage.

- This was most likely set to `OSNotificationDisplayType.notification` which means no changes need as this is the default in 3.x. 
- If you didn't have `inFocusDisplayType` at all in your code or this was `None` the replacement for this is adding a [`setNotificationWillShowInForegroundHandler`](doc:30-api-reference-ios#setnotificationwillshowinforegroundhandler-method).

#
3.5. `kOSSettingsKeyAutoPrompt` has been removed, OneSignal no longer automatically prompts for notification permission on initialization. 

- Call `OneSignal.promptForPushNotifications(userResponse:)` to prompt when you want to show this.
- Or See our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) for details prompting with an In-App Message.
#
3.6 `setAppSettings`has been removed. Since the only setting used by that method in the 3.0 release is for launch URL handling It has been replaced by [`setLaunchURLsInApp`](doc:30-api-reference-ios#setlaunchurlsinapp-method). This method is used to have launch URLs opened within the app or with safari
#
3.7. Nullability annotations have been added to the OneSignal API to make it easier to use for Swift applications. These nullability changes may cause build errors for your app. Xcode's recommended fix is typically correct for these issues.

# Step 4 - Review Full API Change List
:white-check-mark: You're setup with the new SDK!
Please review the full [3.0 API Reference - iOS Native](doc:30-api-reference-ios) for a full list of new features and other advanced features you may need to migrate as well.