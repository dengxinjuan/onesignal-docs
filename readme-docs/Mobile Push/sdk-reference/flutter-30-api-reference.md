---
title: "Flutter - 3.0 API Reference"
slug: "flutter-30-api-reference"
hidden: true
createdAt: "2020-11-16T20:18:01.860Z"
updatedAt: "2022-03-04T19:17:07.865Z"
---
[block:callout]
{
  "type": "info",
  "title": "Out of Beta",
  "body": "This reference includes changes from version 2 to version 3, including breaking changes. \n\nRead the following reference documentation carefully. If you are migrating from an older version, go through your existing code and cross-reference it with the changes listed in this reference to ensure a smooth migration. Make sure to make all the changes necessary and test them thoroughly.\n\n**Notable Changes**:\n   - Initialization is now done differently\n   - Foreground notification control\n   - New handlers and observer setters\n   - `getDeviceState` to get device info \n\nTo report a bug, open a new issue in our [public repo](https://github.com/OneSignal/OneSignal-Flutter-SDK/issues)."
}
[/block]
---
#Initialization
### `setAppId` Function
In version 3, we are simplifying initialization. OneSignal initialization now only requires that you set the application ID.

You can call `setAppId` at any point in your app's flow. This allows full initialization to be delayed until say, a user logs in.
[block:parameters]
{
  "data": {
    "h-0": "2+",
    "0-0": "`OneSignal.shared.init(appId, {OSiOSSettings.autoPrompt: true});`",
    "0-1": "`OneSignal.shared.setAppId(appId);`",
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
    "4-0": "[`clearOneSignalNotifications()`](#clearonesignalnotifications-function)",
    "4-1": "Android Only, clear all One Signal notifications from the Notification Shade",
    "5-0": "[`removeNotification()`](#removenotification-function)",
    "5-1": "Android Only, manually cancel a single OneSignal notification based on its Android notification integer ID",
    "6-0": "[`userProvidedPrivacyConsent()`](#userprovidedprivacyconsent-function)",
    "6-1": "Android Only, a boolean value indicating if the user provided privacy consent"
  },
  "cols": 2,
  "rows": 7
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
    "5-1": "Replaced by `setNotificationWillShowInForegroundHandler()` functionality."
  },
  "cols": 2,
  "rows": 6
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

The callback accepts a parameter `OSNotification`.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.shared.setNotificationWillShowInForegroundHandler((OSNotificationReceivedEvent event) {           \n      /// Display Notification, send null to not display, send notification to display           \n      event.complete(event.notification);      \n});",
      "language": "javascript",
      "name": "Dart"
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
      "code": "OneSignal.shared.setInAppMessageClickedHandler((OSInAppMessageAction action) {\n     print('OneSignal: IAM clicked action: ${action}');\n});",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
### `setOnWillDisplayInAppMessageHandler` Function

Set In-App message will display handler whenever the In-app message is about to be displayed
[block:code]
{
  "codes": [
    {
      "code": " OneSignal.shared.setOnWillDisplayInAppMessageHandler((message) {\n      print(\"OneSignal: On will display In-App message: ${message.messageId}\");\n });",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
### `setOnDidDisplayInAppMessageHandler` Function

Set In-App message did display handler whenever the In-app message is displayed

[block:code]
{
  "codes": [
    {
      "code": " OneSignal.shared.setOnDidDisplayInAppMessageHandler((message) {\n      print(\"OneSignal: On did display In-App message: ${message.messageId}\");\n });",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
### `setOnWillDismissInAppMessageHandler` Function

Set In-App message will dismiss handler whenever the In-app message is about to be dismissed

[block:code]
{
  "codes": [
    {
      "code": " OneSignal.shared.setOnWillDismissInAppMessageHandler((message) {\n      print(\"OneSignal: On will dismiss In-App message: ${message.messageId}\");\n });",
      "language": "javascript",
      "name": "Dart"
    }
  ]
}
[/block]
### `setOnDidDismissInAppMessageHandler` Function

Set In-App message did dismiss handler whenever the In-app message is dismissed
[block:code]
{
  "codes": [
    {
      "code": " OneSignal.shared.setOnDidDismissInAppMessageHandler((message) {\n      print(\"OneSignal: On did dismiss In-App message: ${message.messageId}\");\n });",
      "language": "javascript",
      "name": "Dart"
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
    "4-0": "`outcomes `",
    "4-1": "Outcome for action.\n\n*Mainly useful for debugging*",
    "4-2": "Outcome for action.\n\n*Mainly useful for debugging*",
    "5-0": "`prompts `",
    "5-1": "Permission prompts.\n\n*Mainly useful for debugging*",
    "5-2": "Permission prompts.\n\n*Mainly useful for debugging*",
    "6-0": "`tags `",
    "6-1": "Tags for action.\n\n*Mainly useful for debugging*",
    "6-2": "Tags for action.\n\n*Mainly useful for debugging*",
    "7-0": "`url_target `",
    "7-1": "Determines where the URL is opened, ie.\n\n*Mainly useful for debugging*",
    "7-2": "Determines where the URL is opened, ie.\n\n*Mainly useful for debugging*",
    "h-3": "V4 Getter",
    "0-3": "`getClickName()`",
    "1-3": "`getClickUrl()`",
    "2-3": "`doesCloseMessage()`",
    "3-3": "`isFirstClick()`",
    "4-3": "`getOutcomes()`",
    "5-3": "`getPrompts()`",
    "6-3": "`getTags()`",
    "7-3": "`getUrlTarget()`"
  },
  "cols": 2,
  "rows": 8
}
[/block]
### `setNotificationOpenedHandler` Function

Set the callback to run on notification open/click.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.shared\n        .setNotificationOpenedHandler((OSNotificationOpenedResult result) {\n    print('\"OneSignal: notification opened: ${result}');\n});",
      "language": "javascript",
      "name": "Dart"
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
    "0-1": "The action the user took on the notification.\n\n**Parameter:**\n`type`:\n0) notification was clicked\n1) button was clicked",
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

### `setPermissionObserver` Function
Add a callback that fires when the native push permission changes.

**Change event parameters:**
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Description",
    "0-0": "`areNotificationsEnabled` (Android)",
    "0-1": "Whether the device-level permission is granted or denied (boolean).",
    "1-0": "`hasPrompted` (iOS)",
    "2-0": "`provisional` (iOS)",
    "3-0": "`status` (iOS)",
    "1-1": "Did the user answer the notification permission prompt.",
    "3-1": "0 - \"NotDetermined\" - The user hasn't yet made a choice about whether the app is allowed to schedule notifications.\n\n1 - \"Denied\" - The app isn't authorized to schedule or receive notifications.\n\n2 - \"Authorized\" - The app is authorized to schedule or receive notifications.\n\n3 - \"Provisional\" - The application is provisionally authorized to post noninterruptive user notifications. See [iOS Customizations](https://documentation.onesignal.com/docs/ios-customizations)\n\n4 - \"Ephemeral\" - For [App Clips](https://documentation.onesignal.com/docs/app-clip-support). The app is authorized to schedule or receive notifications for a limited amount of time.",
    "2-1": "Is provisional push authorization enabled."
  },
  "cols": 2,
  "rows": 4
}
[/block]
### `setSubscriptionObserver` Function
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
### `setEmailSubscriptionObserver ` Function
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
      "code": "OneSignal.shared.setPermissionObserver((OSPermissionStateChanges changes) {\n      print(\"OneSignal: permission changed: ${changes.jsonRepresentation()}\");\n    });\n\nOneSignal.shared\n        .setSubscriptionObserver((OSSubscriptionStateChanges changes) {\n      print(\"OneSignal: subscription changed:: ${changes.jsonRepresentation()}\");\n    });\n\nOneSignal.shared.setEmailSubscriptionObserver(\n        (OSEmailSubscriptionStateChanges changes) {\n      print(\"OneSignal: email subscription changed: ${changes.jsonRepresentation()}\");\n});",
      "language": "javascript",
      "name": "Dart"
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
      "code": "OneSignal.shared.getDeviceState().then((deviceState) {\n     print(\"OneSignal: device state: ${deviceState.jsonRepresentation()}\");\n});",
      "language": "javascript",
      "name": "Dart"
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
    "2-0": "`isPushDisabled`",
    "2-1": "Was push disabled with `disablePush`.",
    "2-2": "Was push disabled with [`disablePush()`](#disablepush-method)",
    "3-0": "`userId`",
    "3-1": "Get the OneSignal user (player) id",
    "3-2": "Get the OneSignal user (player) id",
    "4-0": "`pushToken`",
    "4-1": "Get device's push token.\nThis can be one of the following depending on the device:\n  - Google FCM token\n  - Huawei HMS token\n  - FireOS token",
    "4-2": "Get device's push token.\nThis can be one of the following depending on the device:\n  - Google FCM token\n  - Huawei HMS token\n  - FireOS token",
    "5-0": "`emailUserId`",
    "5-1": "Get the OneSignal user email id.\nOnly available if `OneSignal.setEmail()` was called.",
    "5-2": "Get the OneSignal user email id.\nOnly available if `OneSignal.setEmail()` was called.",
    "6-0": "`emailAddress`",
    "6-1": "Get the user email address.\nOnly available if `OneSignal.setEmail()` was called.",
    "6-2": "Get the user email address.\nOnly available if `OneSignal.setEmail()` was called.",
    "7-0": "`isEmailSubscribed`",
    "7-1": "Is there an associated email record that is subscribed to OneSignal messaging."
  },
  "cols": 2,
  "rows": 8
}
[/block]
### `disablePush` Function
Use this function to opt users out of receiving all notifications through OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.shared.disablePush(true);",
      "language": "javascript",
      "name": "Dart"
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
      "code": "OneSignal.shared.clearOneSignalNotifications();",
      "language": "text",
      "name": "Dart"
    }
  ]
}
[/block]
### `removeNotification` Function
Android Only, use this function to manually cancel a single OneSignal notification based on its Android notification integer ID. The notification identifier can be found as part of the `OSNotification` object.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.shared.removeNotification(\"NOTIFICATION_ID\");",
      "language": "text",
      "name": "Dart"
    }
  ]
}
[/block]
### `userProvidedPrivacyConsent` Function
Android Only, use this function to get a boolean value indicating if the user-provided privacy consent.
[block:code]
{
  "codes": [
    {
      "code": "bool consent = await OneSignal.shared.userProvidedPrivacyConsent();",
      "language": "text",
      "name": "Dart"
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
    "9-0": "`largeIcon` (**Android**)",
    "9-1": "The large icon set on the notification.",
    "10-0": "`bigPicture` (**Android**)",
    "10-1": "The big picture image set on the notification.",
    "14-0": "`collapseId` (**Android**)",
    "14-1": "The collapse id for the notification.",
    "15-0": "`priority` (**Android**)",
    "15-1": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "11-0": "`smallIcon` (**Android**)",
    "11-1": "The small icon resource name set on the notification.",
    "12-0": "`smallIconAccentColor` (**Android**)",
    "12-1": "The accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "13-0": "`ledColor` (**Android**)",
    "13-1": "LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "17-0": "`groupKey` (**Android**)",
    "16-0": "`fromProjectNumber` (**Android**)",
    "16-1": "The Google project number the notification was sent under.",
    "17-1": "Notifications with this same key will be grouped together as a single summary notification.",
    "18-0": "`groupMessage` (**Android**)",
    "18-1": "The summary text displayed in the summary notification.",
    "19-0": "`lockScreenVisibility` (**Android**)",
    "19-1": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "4-2": "Gets the URL opened when opening the notification.",
    "9-2": "Gets the large icon set on the notification.",
    "10-2": "Gets the big picture image set on the notification.",
    "11-2": "Gets the small icon resource name set on the notification.",
    "12-2": "The accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "15-2": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "16-2": "Gets the Google project number the notification was sent under.",
    "17-2": "Notifications with this same key will be grouped together as a single summary notification.",
    "18-2": "Gets the summary text displayed in the summary notification.",
    "19-2": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "13-2": "Get LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "14-2": "Gets the collapse id for the notfication.",
    "5-0": "`actionButtons`",
    "5-1": "The list of action buttons on the notification.",
    "6-0": "`sound`",
    "6-1": "The sound resource played when the notification is shown.",
    "7-0": "`rawPayload`",
    "7-1": "The raw JSON payload string received from OneSignal.",
    "20-0": "`badge` (**iOS**)",
    "21-0": "`category` (**iOS**)",
    "22-0": "`threadId` (**iOS**)",
    "23-0": "`subtitle` (**iOS**)",
    "24-0": "`attachments` (**iOS**)",
    "25-0": "`templateId` (**iOS**)",
    "26-0": "`templateName` (**iOS**)",
    "27-0": "`mutableContent` (**iOS**)",
    "28-0": "`badgeIncrement` (**iOS**)",
    "29-0": "`contentAvailable` (**iOS**)",
    "20-1": "The badge number assigned to the application icon.",
    "21-1": "Notification category key previously registered to display with.",
    "22-1": "iOS 10+ only. Groups notifications into threads.",
    "23-1": "The message subtitle.",
    "25-1": "Unique Template Identifier.",
    "26-1": "Name of Template.",
    "24-1": "iOS 10+ only. Attachments sent as part of the rich notification.",
    "27-1": "True when the key mutable-content is set to 1 in the APNS payload.\n\nSee Apple's [documentation](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) for more details.",
    "28-1": "The amount to increment the badge icon number.",
    "29-1": "True when the key content-available is set to 1 in the APNS payload. Used to wake your app when the payload is received.\n\nSee Apple's [documentation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application) for more details.",
    "8-0": "`androidNotificationId` (**Android**)",
    "8-1": "The Android notification integer ID."
  },
  "cols": 2,
  "rows": 30
}
[/block]