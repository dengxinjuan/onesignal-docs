---
title: "Step-by-Step Flutter 2.x to 3.0.0 Upgrade Guide"
slug: "step-by-step-flutter-2x-to-300-upgrade-guide"
hidden: true
createdAt: "2020-11-16T20:18:21.092Z"
updatedAt: "2021-06-23T22:38:09.295Z"
---
# Step 1 - Requirements
This guide assumes you already have set up the [OneSignal-Flutter-SDK 2.x.x](https://documentation.onesignal.com/docs/flutter-sdk-setup) and are migrating your app to the 3.x Major version.
[block:callout]
{
  "type": "danger",
  "title": "Upgrade Flutter for AndroidX Support",
  "body": "AndroidX is a new requirement to use the new OneSignal-Flutter 3.x SDK.\nIf your project is not already migrated, please migrate it. [Learn more](https://flutter.dev/docs/development/androidx-migration)"
}
[/block]
# Step 2 - Upgrade to the major release
### In your `pubspec.yaml`, update the one signal flutter dependencies version
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
### In your `Podfile`, update the `OneSignalNotificationServiceExtension`
[block:code]
{
  "codes": [
    {
      "code": "target 'OneSignalNotificationServiceExtension' do\n  pod 'OneSignalXCFramework', '>= 3.4.3', '< 4.0'\nend",
      "language": "groovy",
      "name": "Podfile"
    }
  ]
}
[/block]
### Install
Make sure to run `flutter packages get` to install the SDK.

# Step 3 - Update initialization code
3.1 Open your main file (e.g: main.dart)
3.2 Replace the following
[block:code]
{
  "codes": [
    {
      "code": " // OneSignal Initialization\nvar settings = {\n  OSiOSSettings.autoPrompt: false,\n  OSiOSSettings.promptBeforeOpeningPushUrl: true\n};\nOneSignal.shared\n        .init(\"YOUR_ONESIGNAL_APP_ID\", iOSSettings: settings);",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
With the new initialization:
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\nOneSignal.shared.setAppId(\"YOUR_ONESIGNAL_APP_ID\");",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
For any iOS settings you had previously, note that:
   * `OSiOSSettings.autoPrompt` is deprecated. If you omitted this previously or set it to true, you will now need to prompt the user by calling [`promptForPushNotificationsWithUserResponse()`](sdk-reference#ios-push-prompting).
   * `OSiOSSettings.inAppLaunchUrl` is deprecated. There is currently no replacement for it.
   * `OSiOSSettings.inFocusDisplayOption` is replaced by adding a `NotificationWillShowInForegroundHandler` (see below).

3.3 Review your existing `inFocusDisplaying()` usage.
  - This was most likely set to `OSNotificationDisplayType.notification` which means no additional changes need as this is the default in 3.x. Simply remove the function call.
  - If you didn't have `inFocusDisplaying` at all in your code or this was set to `OSNotificationDisplayType.none` the replacement for this is adding a [`NotificationWillShowInForegroundHandler`](flutter-30-api-reference#setnotificationwillshowinforegroundhandler-function).

# Step 4 - Update Event Listeners
If you have event-listeners set up, you will need to switch to use the new handlers & observer setter functions.

See [handlers](flutter-30-api-reference#handlers) & [observers](flutter-30-api-reference#observers) reference for more details.
[block:parameters]
{
  "data": {
    "h-0": "version 2.0+ event string",
    "h-1": "version 3.0+ event handler / observer",
    "0-0": "setNotificationReceivedHandler",
    "0-1": "[`setNotificationWillShowInForegroundHandler()`](flutter-30-api-reference#setnotificationwillshowinforegroundhandler-function)\n\nThe equivalent of the \"received\" event listener is the new `NotificationWillShowInForegroundHandler`. You can use this to have better notification foreground control as well as get notification-specific data before it is displayed to the user while the app is in focus."
  },
  "cols": 2,
  "rows": 1
}
[/block]
# Step 5 - Review Full List
:white-check-mark: You're set up with the new SDK!
Please review the full [3.0 API Reference - Flutter](https://documentation.onesignal.com/docs/flutter-30-api-reference) for a full list of new and deprecated features as well as other advanced features you may need to migrate as well.