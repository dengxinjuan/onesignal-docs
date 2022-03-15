---
title: "Step-by-Step Cordova 2.x to 3.0.0 Upgrade Guide"
slug: "step-by-step-cordova-2x-to-300-upgrade-guide"
hidden: true
createdAt: "2021-04-06T17:20:13.230Z"
updatedAt: "2021-09-07T23:30:23.873Z"
---
#Step 1. Requirements
This guide assumes you already have set up the [OneSignal-Cordova-SDK 2.x.x](https://documentation.onesignal.com/docs/cordova-sdk-setup) and are migrating your app to the 3.x Major version.
[block:callout]
{
  "type": "danger",
  "title": "Upgrade Cordova for AndroidX Support",
  "body": "AndroidX is a new requirement to use the new OneSignal-Cordova 3.x SDK.\nIf your project is not already migrated, please migrate it. [Learn more](https://cordova.apache.org/announcements/2020/06/29/cordova-android-9.0.0.html)"
}
[/block]
#Step 2. Upgrade
2.1 Remove the OneSignal plugin and add it again to upgrade
[block:code]
{
  "codes": [
    {
      "code": "cordova plugin rm onesignal-cordova-plugin\n\ncordova plugin add onesignal-cordova-plugin --save",
      "language": "shell",
      "name": "Cordova"
    }
  ]
}
[/block]
2.2 *iOS Only* - Clear Xcode `DerivedData` to prevent any issues caused by cached build files.
[block:code]
{
  "codes": [
    {
      "code": "rm -rf ~/Library/Developer/Xcode/DerivedData/*",
      "language": "shell",
      "name": "Cordova"
    }
  ]
}
[/block]




# Step 3. Update initialization code
3.1 Open your main file (e.g: index.js)
3.2 Replace the following
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\n var iosSettings = {};\niosSettings[\"kOSSettingsKeyAutoPrompt\"] = false;\niosSettings[\"kOSSettingsKeyInAppLaunchURL\"] = false;\n               \nwindow.plugins.OneSignal\n  .startInit(\"YOUR_ONESIGNAL_APP_ID\")\n  .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)\n  .iOSSettings(iosSettings)\n  .endInit();",
      "language": "javascript",
      "name": "JavaScript"
    }
  ]
}
[/block]
With the new initialization:
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\nwindow.plugins.OneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\");",
      "language": "javascript",
      "name": "JavaScript"
    }
  ]
}
[/block]
For any iOS settings, you had previously, note that:
   * `OSiOSSettings.autoPrompt` is deprecated. If you omitted this previously or set it to true, you will now need to prompt the user by calling [`promptForPushNotificationsWithUserResponse()`](sdk-reference#ios-push-prompting).
   * `OSiOSSettings.inAppLaunchUrl` is deprecated. There is currently no replacement for it.
   * `OSiOSSettings.inFocusDisplayOption` is replaced by adding a `NotificationWillShowInForegroundHandler` (see below).

3.3 Review your existing `inFocusDisplaying()` usage.
  - This was most likely set to `OSNotificationDisplayType.notification` which means no additional changes need as this is the default in 3.x. Simply remove the function call.
  - If you didn't have `inFocusDisplaying` at all in your code or this was set to `OSNotificationDisplayType.none` the replacement for this is adding a [`NotificationWillShowInForegroundHandler`](cordova-30-api-reference#setnotificationwillshowinforegroundhandler-function).

#Step 4. Update Event Listeners
If you have event-listeners set up, you will need to switch to use the new handlers & observer setter functions.

See [handlers](cordova-30-api-reference#handlers) & [observers](cordova-30-api-reference#observers) reference for more details.
[block:parameters]
{
  "data": {
    "h-0": "version 2.0+ event string",
    "h-1": "version 3.0+ event handler / observer",
    "0-0": "setNotificationReceivedHandler",
    "0-1": "[`setNotificationWillShowInForegroundHandler()`](cordova-30-api-reference#setnotificationwillshowinforegroundhandler-function)\n\nThe equivalent of the \"received\" event listener is the new `NotificationWillShowInForegroundHandler`. You can use this to have better notification foreground control as well as get notification-specific data before it is displayed to the user while the app is in focus.",
    "1-0": "handleNotificationOpened",
    "1-1": "[`setNotificationOpenedHandler()`](cordova-30-api-reference#setnotificationopenedhandler-function)",
    "2-0": "handleInAppMessageClicked",
    "3-0": "setLogLevel",
    "3-1": "setLogLevel now accepts two params nsLogLevel: LogLevel, visualLogLevel: LogLevel",
    "2-1": "[`setInAppMessageClickHandler()`](cordova-30-api-reference#setinappmessageclickhandler-function)"
  },
  "cols": 2,
  "rows": 4
}
[/block]
# Step 5. Review Full List
:white-check-mark: You're set up with the new SDK!
Please review the full [3.0 API Reference - Cordova](doc:cordova-30-api-reference) for a full list of new and deprecated features as well as other advanced features you may need to migrate as well.