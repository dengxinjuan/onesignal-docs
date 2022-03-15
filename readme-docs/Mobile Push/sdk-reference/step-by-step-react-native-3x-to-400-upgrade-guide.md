---
title: "Step-by-Step React Native 3.x to 4.0.0 Upgrade Guide"
slug: "step-by-step-react-native-3x-to-400-upgrade-guide"
hidden: true
createdAt: "2020-10-22T19:48:50.625Z"
updatedAt: "2021-06-22T19:01:30.889Z"
---
# Step 1 - Requirements
This guide assumes you already have setup the [react-native-onesignal 3.x.x](https://documentation.onesignal.com/docs/react-native-sdk-setup) and are migrating your app to the 4.x Major version.
[block:callout]
{
  "type": "danger",
  "title": "Upgrade to min version React Native 0.60 for AndroidX Support",
  "body": "AndroidX is a now requirement to use the new react-native-onesignal 4.0+ SDK.\n\n[Learn more](https://reactnative.dev/blog/2019/07/03/version-60#androidx-support)"
}
[/block]
# Step 2 - Upgrade to Version 4
### In your `package.json`, update the npm package version
[block:code]
{
  "codes": [
    {
      "code": "\"dependencies\": {\n\t\"react-native-onesignal\": \"^4.0.6\"\n}",
      "language": "groovy",
      "name": "package.json"
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
Make sure to install the npm package as well as update the Pod used in the `ios` directory of your project.
[block:code]
{
  "codes": [
    {
      "code": "npm install # or yarn install\ncd ios\npod update OneSignal",
      "language": "shell"
    }
  ]
}
[/block]
# Step 3 - Update initialization code
3.1 Open your main file (e.g: App.js)
3.2 Replace the following
[block:code]
{
  "codes": [
    {
      "code": " // OneSignal Initialization\nOneSignal.init(\"YOUR_ONESIGNAL_APP_ID\", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});\n",
      "language": "javascript"
    }
  ]
}
[/block]
With the new initialization:
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\nOneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\");",
      "language": "javascript"
    }
  ]
}
[/block]
For any iOS settings you had previously, note that:
   * `kOSSettingsKeyAutoPrompt` is deprecated. If you omitted this previously or set it to true, you will now need to prompt the user by calling [`promptForPushNotificationsWithUserResponse()`](sdk-reference#ios-push-prompting).
   * `kOSSettingsKeyInAppLaunchURL` is deprecated. There is currently no replacement for it.
   * `kOSSettingsKeyInFocusDisplayOption` is replaced by adding a `NotificationWillShowInForegroundHandler` (see below).

3.3 Review your existing `inFocusDisplaying()` usage.
  - This was most likely set to `2` which means no additional changes need as this is the default in 4.x. Simply remove the function call.
 - If you didn't have `inFocusDisplaying` at all in your code or this was set to `0` the replacement for this is adding a [`NotificationWillShowInForegroundHandler`](react-native-40-api-reference#setnotificationwillshowinforegroundhandler-function).

# Step 4 - Update Event Listeners
If you have event-listeners set up, you will need to switch to use the new handlers & observer setter functions.

See [handlers](react-native-40-api-reference#handlers) & [observers](react-native-40-api-reference#observers) reference for more details.
[block:parameters]
{
  "data": {
    "h-0": "version 3.0+ event string",
    "h-1": "version 4.0+ event handler / observer",
    "0-0": "\"received\"",
    "1-0": "\"opened\"",
    "2-0": "\"ids\"",
    "3-0": "\"inAppMessageClicked\"",
    "0-1": "[`setNotificationWillShowInForegroundHandler()`](react-native-40-api-reference#setnotificationwillshowinforegroundhandler-function)\n\nThe equivalent of the \"received\" event listener is the new `NotificationWillShowInForegroundHandler`. You can use this to have better notification foreground control as well as get notification-specific data before it is displayed to the user while the app is in focus.",
    "1-1": "[`setNotificationOpenedHandler()`](react-native-40-api-reference#setnotificationopenedhandler-function)",
    "2-1": "[`getDeviceState()`](react-native-40-api-reference#getdevicestate--function)",
    "3-1": "[`setInAppMessageClickHandler()`](react-native-40-api-reference#setinappmessageclickhandler-function)"
  },
  "cols": 2,
  "rows": 4
}
[/block]
# Step 5 - Review Full List
:white-check-mark: You're setup with the new SDK!
Please review the full [4.0 API Reference - React Native](https://documentation.onesignal.com/docs/react-native-40-api-reference) for a full list of new and deprecated features as well as other advanced features you may need to migrate as well.