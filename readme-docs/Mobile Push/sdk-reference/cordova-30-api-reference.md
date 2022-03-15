---
title: "Cordova - 3.0 API Reference"
slug: "cordova-30-api-reference"
hidden: true
createdAt: "2021-04-06T17:32:34.030Z"
updatedAt: "2021-11-30T19:27:51.136Z"
---
---
#Initialization
### `setAppId` Function
In version 3, we are simplifying initialization. OneSignal initialization now only requires that you set the application ID.

You can call `setAppId` at any point in your app's flow. This allows full initialization to be delayed until say, a user logs in.
[block:parameters]
{
  "data": {
    "h-0": "2+",
    "0-0": "window.plugins.OneSignal\n    .startInit(appId)\n    .endInit();",
    "0-1": "window.plugins.OneSignal.setAppId(appId);",
    "h-1": "3+"
  },
  "cols": 2,
  "rows": 1
}
[/block]
#New Functions
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "1-0": "[`setNotificationWillShowInForegroundHandler()`](#setnotificationwillshowinforegroundhandler-function)",
    "1-1": "Set the callback to run just before displaying a notification while the app is in focus.",
    "0-0": "[`setAppId()`](#setappid-function)",
    "0-1": "**Required:**  Set the OneSignal app id.",
    "3-1": "Gets information about the device.",
    "3-0": "[`getDeviceState()`](#getdevicestate-function)",
    "2-0": "[`disablePush()`](#disablepush-function)",
    "2-1": "Disable the push notification subscription to OneSignal.",
    "6-0": "[`clearOneSignalNotifications()`](#clearonesignalnotifications-function)",
    "6-1": "Android Only, clear all One Signal notifications from the Notification Shade",
    "7-0": "[`removeNotification()`](#removenotification-function)",
    "7-1": "Android Only, manually cancel a single OneSignal notification based on its Android notification integer ID",
    "8-0": "[`unsubscribeWhenNotificationsAreDisabled()`](#unsubscribewhennotificationsaredisabled-function)",
    "8-1": "Android Only, If notifications are disabled for your app, unsubscribe the user from OneSignal",
    "4-0": "[`requiresUserPrivacyConsent()`](#requiresuserprivacyconsent-function)",
    "4-1": "Boolean that indicates if privacy consent is required",
    "5-0": "[`isLocationShared()`](#islocationshared-function)",
    "5-1": "Boolean that indicates if the location is being shared with OneSignal",
    "9-0": "[`registerForProvisionalAuthorization()`](#registerforprovisionalauthorization-function)",
    "9-1": "iOS Only, if the user-provided provisional authorization see [documentation](https://documentation.onesignal.com/docs/ios-customizations) for more details'"
  },
  "cols": 2,
  "rows": 10
}
[/block]

---
# Removed Functions
[block:callout]
{
  "type": "danger",
  "body": "",
  "title": "In version 3, there are several functions you should remove."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Deprecated Functions",
    "h-1": "Replacement",
    "1-0": "`getPermissionSubscriptionState()`",
    "1-1": "Replaced by `getDeviceState()`",
    "2-0": "`enableVibrate()`",
    "2-1": "No replacement.",
    "3-0": "`enableSound()`",
    "3-1": "No replacement.",
    "0-0": "`init()`",
    "0-1": "Half of the initialization process is now done for you automatically. Call `setAppId` to complete initialization.",
    "4-0": "`inFocusDisplaying()`",
    "4-1": "Replaced by `setNotificationWillShowInForegroundHandler()` functionality.",
    "5-0": "`setNotificationReceivedHandler()`",
    "5-1": "Replaced by `setNotificationWillShowInForegroundHandler()` functionality.",
    "6-0": "`setSubscription()`",
    "6-1": "Replaced by `disablePush()` functionality."
  },
  "cols": 2,
  "rows": 7
}
[/block]
---
# New Functions
## Foreground Notification Control
In version 3, you can now specifically read notification data that will display while the app is in focus as well as change the display type dynamically. This allows developers to have even greater control over the notification experience.

Replaces `inFocusDisplaying()` functionality.

### `setNotificationWillShowInForegroundHandler` Function
Runs before displaying a notification while the app is in focus. Use this handler to decide if the notification ***should*** show or not. 

Note: this runs ***after*** the [Notification Service Extension](doc:service-extensions#notification-extender-service) which can be used to modify the notification before showing it (native code).

The callback accepts the parameter `OSNotification`.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.setNotificationWillShowInForegroundHandler(function(notificationReceivedEvent) {\n  notificationReceivedEvent.complete(notificationReceivedEvent.notification);\n});",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]
**the callback argument object has two functions:** 
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "`complete()`",
    "1-0": "`notification`",
    "0-1": "**Show Notification:**\nPass the notification to this function in order to display it while the app is in the foreground.\n\n**Silence Notification:**\nIf you would like to silence the notification, call `complete(null)` with a null argument.",
    "1-1": "Retrieves the notification object.\n\nThis returned object is of class ([`OSNotification`](#osnotification-object))."
  },
  "cols": 2,
  "rows": 2
}
[/block]
## Handlers
### `setInAppMessageClickHandler` Function

Set the callback to run on an In-App Message click.
[block:code]
{
  "codes": [
    {
      "code": "var iamClickCallback = function(jsonData) {\n  var iamClickAction = JSON.stringify(jsonData);\n  console.log('iamClickCallback: ' + iamClickAction);\n};\nwindow.plugins.OneSignal.setInAppMessageClickHandler(iamClickCallback);",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "`click_name`",
    "0-1": "An optional click name entered defined by the app developer when creating the IAM.",
    "0-2": "An optional click name entered defined by the app developer when creating the IAM.",
    "1-0": "`click_url `",
    "2-0": "`closes_message `",
    "3-0": "`first_click `",
    "1-1": "An optional URL that opens when the action takes place.",
    "1-2": "An optional URL that opens when the action takes place.",
    "2-2": "Whether tapping on the element closed the In-App Message.",
    "2-1": "Whether tapping on the element closed the In-App Message.",
    "3-1": "Whether this was the first action taken on the in app message.",
    "3-2": "Whether this was the first action taken on the in app message.",
    "h-3": "V4 Getter",
    "0-3": "`getClickName()`",
    "1-3": "`getClickUrl()`",
    "2-3": "`doesCloseMessage()`",
    "3-3": "`isFirstClick()`"
  },
  "cols": 2,
  "rows": 4
}
[/block]
### `setNotificationOpenedHandler` Function

Set the callback to run on notification open/click.
[block:code]
{
  "codes": [
    {
      "code": "var notificationOpenedCallback = function(jsonData) {\n  var notificationData = JSON.stringify(jsonData)\n  console.log('notificationOpenedCallback: ' + notificationData);\n};\n\nwindow.plugins.OneSignal.setNotificationOpenedHandler(notificationOpenedCallback);",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]
**`openedEvent` fields:** 
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "`action`",
    "0-1": "The action the user took on the notification.\n\n**Parameter:**\n`type`:\n0) notification was clicked\n1) button was clicked\n\n`actionId`: The ID of the button on your notification that the user tapped",
    "1-1": "The notification the user received.\n\nOf class [OSNotification](#osnotification-object)",
    "1-0": "`notification`",
    "0-2": "The action the user took on the notification.\n\nString - **`getActionId()`**\nEnum - **`getType()`** [(\"Opened\", \"ActionTaken\")](#osnotificationaction-class)",
    "1-2": "The notification the user received.\nSee [`OSNotification`](#osnotification-class) for the full list of properties."
  },
  "cols": 2,
  "rows": 2
}
[/block]
---
## Observers

Each callback you pass to an observer adder function will receive a state change object when fired that contains two parameters: `to` and `from`. The parameters on *those* objects are the same between the two. This format allows for the detection of the previous state and the new state.

**Example:** a change in the subscription state of the device might see the `isSubscribed` parameter change from `false` to `true`. You can detect the change by the `event.from.isSubscribed` and `event.to.isSubscribed` objects.

### `addPermissionObserver` Function
Add a callback that fires when the native push permission changes.

**Change event parameters:**
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "0-0": "`hasPrompted` (iOS)",
    "1-0": "`provisional` (iOS)",
    "2-0": "`status`",
    "0-1": "Did the user answer the notification permission prompt.",
    "2-1": "0 - \"NotDetermined\" - The user hasn't yet made a choice about whether the app is allowed to schedule notifications.\n\n1 - \"Denied\" - The app isn't authorized to schedule or receive notifications.\n\n2 - \"Authorized\" - The app is authorized to schedule or receive notifications.\n\n3 - \"Provisional\" - The application is provisionally authorized to post noninterruptive user notifications. See [iOS Customizations](https://documentation.onesignal.com/docs/ios-customizations)\n\n4 - \"Ephemeral\" - For [App Clips](https://documentation.onesignal.com/docs/app-clip-support). The app is authorized to schedule or receive notifications for a limited amount of time.",
    "1-1": "Is provisional push authorization enabled."
  },
  "cols": 2,
  "rows": 3
}
[/block]
### `addSubscriptionObserver` Function
Add a callback that fires when the OneSignal subscription state changes.

**Change event parameters:**
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "0-0": "`userId`",
    "1-0": "`pushToken`",
    "2-0": "`isPushDisabled`",
    "3-0": "`isSubscribed` (Android)",
    "2-1": "Is push disabled (`disablePush` was called).",
    "0-1": "The OneSignal player identifier.",
    "1-1": "The native push token identifier used by FCM / HMS / FireOS / APNs.",
    "3-1": "Whether the player is subscribed to OneSignal."
  },
  "cols": 2,
  "rows": 4
}
[/block]
### `addEmailSubscriptionObserver` Function
Add a callback that fires when the OneSignal email subscription changes.

**Change event parameters:**
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "0-0": "`emailAddress`",
    "1-0": "`emailUserId`",
    "2-0": "`isSubscribed`",
    "2-1": "Whether the associated email record is subscribed to OneSignal messaging.",
    "1-1": "The UUID associated with the email record.",
    "0-1": "The email address associated with this player record."
  },
  "cols": 2,
  "rows": 3
}
[/block]
### Example
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.addEmailSubscriptionObserver(function(stateChanges) {\n  console.log(\"Email subscription state changed: \\n\" + JSON.stringify(stateChanges, null, 2));\n});\n\nwindow.plugins.OneSignal.addSubscriptionObserver(function(stateChanges) {\n  console.log(\"Push subscription state changed: \" + JSON.stringify(stateChanges, null, 2));\n});\n\nwindow.plugins.OneSignal.addPermissionObserver(function(stateChanges) {\n  console.log(\"Push permission state changed: \" + JSON.stringify(stateChanges, null, 2));\n});",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]
## Other Functions
### `getDeviceState` Function
(Async method) Returns an `OSDeviceState` object with device info.
[block:callout]
{
  "type": "warning",
  "title": "Do not cache `OSDeviceState` object",
  "body": "This method returns a \"snapshot\" of the device state for when it was called. Make sure to call `getDeviceState` again to get the latest state."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.getDeviceState(function(stateChanges) {\n  console.log('OneSignal getDeviceState: ' + JSON.stringify(stateChanges));\n});",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]
**`deviceState` parameters:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "`isSubscribed`",
    "0-1": "Get whether the device is subscribed to receive OneSignal push notifications.",
    "0-2": "Get whether the device is subscribed to receive OneSignal push notifications.",
    "1-0": "`hasNotificationPermission`",
    "1-1": "Get whether notifications are enabled on the device at the app level.\nThis is the same value as Android's.",
    "1-2": "Get whether notifications are enabled on the device at the Android app level.\nThis is the same value as Android's [`areNotificationsEnabled()`](https://developer.android.com/reference/androidx/core/app/NotificationManagerCompat) method.",
    "3-0": "`isPushDisabled`",
    "3-1": "Was push disabled with `disablePush`.",
    "3-2": "Was push disabled with [`disablePush()`](#disablepush-method)",
    "4-0": "`userId`",
    "4-1": "Get the OneSignal user (player) id",
    "4-2": "Get the OneSignal user (player) id",
    "5-0": "`pushToken`",
    "5-1": "Get device's push token.\nThis can be one of the following depending on the device:\n  - Google FCM token\n  - Huawei HMS token\n  - FireOS token",
    "5-2": "Get device's push token.\nThis can be one of the following depending on the device:\n  - Google FCM token\n  - Huawei HMS token\n  - FireOS token",
    "6-0": "`emailUserId`",
    "6-1": "Get the OneSignal user email id.\nOnly available if `OneSignal.setEmail()` was called.",
    "6-2": "Get the OneSignal user email id.\nOnly available if `OneSignal.setEmail()` was called.",
    "7-0": "`emailAddress`",
    "7-1": "Get the user email address.\nOnly available if `OneSignal.setEmail()` was called.",
    "7-2": "Get the user email address.\nOnly available if `OneSignal.setEmail()` was called.",
    "8-0": "`isEmailSubscribed`",
    "8-1": "Is there an associated email record that is subscribed to OneSignal messaging.",
    "2-0": "`notificationPermissionStatus` (iOS)",
    "2-1": "Get  the user notification permission status"
  },
  "cols": 2,
  "rows": 9
}
[/block]
### `requiresUserPrivacyConsent` Function
Use this function to retrieve a boolean that indicates the application requires privacy consent.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.requiresUserPrivacyConsent(function(require) {   \n});",
      "language": "javascript",
      "name": "index.js"
    }
  ]
}
[/block]
### `isLocationShared` Function
Use this function to retrieve a boolean that indicates the application is sharing the location with OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.isLocationShared(function(shared) {   \n});",
      "language": "javascript",
      "name": "index.js"
    }
  ]
}
[/block]
### `disablePush` Function
Use this function to opt users out of receiving all notifications through OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.disablePush(true);",
      "language": "javascript",
      "name": "indes.js"
    }
  ]
}
[/block]
### `clearOneSignalNotifications` Function
Android Only, use this function to manually remove all OneSignal notifications from the Notification Shade.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.clearOneSignalNotifications();",
      "language": "text",
      "name": "indes.js"
    }
  ]
}
[/block]
### `removeNotification` Function
Android Only, use this function to manually cancel a single OneSignal notification based on its Android notification integer ID.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.removeNotification(\"NOTIFICATION_ID\");",
      "language": "text",
      "name": "indes.js"
    }
  ]
}
[/block]
### `unsubscribeWhenNotificationsAreDisabled` Function
Android Only, use this function to unsubscribe the user from OneSignal when notifications are disabled.
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.unsubscribeWhenNotificationsAreDisabled(true);",
      "language": "text",
      "name": "indes.js"
    }
  ]
}
[/block]
###`registerForProvisionalAuthorization` Function
iOS Only, use this function to retrieve a boolean that indicates if the user-provided provisional authorization see [documentation](https://documentation.onesignal.com/docs/ios-customizations) for more details'
[block:code]
{
  "codes": [
    {
      "code": "window.plugins.OneSignal.registerForProvisionalAuthorization(function(accepted) {   \n});",
      "language": "text"
    }
  ]
}
[/block]
---
# Other Additions / Changes
[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "h-2": "Change Description",
    "0-1": "Contains all notification properties such as title, body, additionalData, etc...",
    "0-0": "[`OSNotification`](#osnotification-object)"
  },
  "cols": 2,
  "rows": 1
}
[/block]
### `OSNotification` Object
In version 4, the `OSNotification` class is composed of all notification properties in a single object. This is the object passed into the `notificationWillShowInForeground` *handler*. 
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "`additionalData`",
    "0-1": "Custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data or with the `data` field on the REST API.",
    "0-2": "Gets custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data or with the `data` field on the REST API.",
    "1-0": "`notificationId`",
    "1-1": "The OneSignal notification UUID.",
    "1-2": "Gets the OneSignal notification UUID.",
    "2-0": "`body`",
    "2-1": "The body text of the notification.",
    "2-2": "Gets the body text of the notification.",
    "3-0": "`title`",
    "3-1": "The title text of the notification.",
    "3-2": "Gets the title text of the notification.",
    "4-0": "`launchUrl`",
    "4-1": "The URL opened when opening the notification.",
    "8-0": "`largeIcon` (**Android**)",
    "8-1": "The large icon set on the notification.",
    "9-0": "`bigPicture` (**Android**)",
    "9-1": "The big picture image set on the notification.",
    "13-0": "`collapseId` (**Android**)",
    "13-1": "The collapse id for the notification.",
    "14-0": "`priority` (**Android**)",
    "14-1": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "10-0": "`smallIcon` (**Android**)",
    "10-1": "The small icon resource name set on the notification.",
    "11-0": "`smallIconAccentColor` (**Android**)",
    "11-1": "The accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "12-0": "`ledColor` (**Android**)",
    "12-1": "LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "16-0": "`groupKey` (**Android**)",
    "15-0": "`fromProjectNumber` (**Android**)",
    "15-1": "The Google project number the notification was sent under.",
    "16-1": "Notifications with this same key will be grouped together as a single summary notification.",
    "17-0": "`groupMessage` (**Android**)",
    "17-1": "The summary text displayed in the summary notification.",
    "18-0": "`lockScreenVisibility` (**Android**)",
    "18-1": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "4-2": "Gets the URL opened when opening the notification.",
    "8-2": "Gets the large icon set on the notification.",
    "9-2": "Gets the big picture image set on the notification.",
    "10-2": "Gets the small icon resource name set on the notification.",
    "11-2": "The accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "14-2": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "15-2": "Gets the Google project number the notification was sent under.",
    "16-2": "Notifications with this same key will be grouped together as a single summary notification.",
    "17-2": "Gets the summary text displayed in the summary notification.",
    "18-2": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "12-2": "Get LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "13-2": "Gets the collapse id for the notfication.",
    "5-0": "`actionButtons`",
    "5-1": "The list of action buttons on the notification.",
    "6-0": "`sound`",
    "6-1": "The sound resource played when the notification is shown.",
    "7-0": "`rawPayload`",
    "7-1": "The raw JSON payload string received from OneSignal.",
    "19-0": "`badge` (**iOS**)",
    "20-0": "`category` (**iOS**)",
    "21-0": "`threadId` (**iOS**)",
    "22-0": "`subtitle` (**iOS**)",
    "23-0": "`attachments` (**iOS**)",
    "24-0": "`templateId` (**iOS**)",
    "25-0": "`templateName` (**iOS**)",
    "26-0": "`mutableContent` (**iOS**)",
    "27-0": "`badgeIncrement` (**iOS**)",
    "28-0": "`contentAvailable` (**iOS**)",
    "19-1": "The badge number assigned to the application icon.",
    "20-1": "Notification category key previously registered to display with.",
    "21-1": "iOS 10+ only. Groups notifications into threads.",
    "22-1": "The message subtitle.",
    "24-1": "Unique Template Identifier.",
    "25-1": "Name of Template.",
    "23-1": "iOS 10+ only. Attachments sent as part of the rich notification.",
    "26-1": "True when the key mutable-content is set to 1 in the APNS payload.\n\nSee Apple's [documentation](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) for more details.",
    "27-1": "The amount to increment the badge icon number.",
    "28-1": "True when the key content-available is set to 1 in the APNS payload. Used to wake your app when the payload is received.\n\nSee Apple's [documentation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application) for more details."
  },
  "cols": 2,
  "rows": 29
}
[/block]
###`setLogLevel`
`setLogLevel` now accepts two params logLevel, visualLogLevel, instead of an `object`.
Example:
`window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});` becomes `window.plugins.OneSignal.setLogLevel(6, 0);`.