---
title: "Android Native - 4.0.0 API Changes"
slug: "40-api-android-native"
hidden: true
createdAt: "2020-08-29T00:44:29.840Z"
updatedAt: "2021-01-22T20:44:15.136Z"
---
#New Methods
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "2-0": "[`setNotificationWillShowInForegroundHandler()`](#setnotificationwillshowinforegroundhandler-method)",
    "2-1": "Set the callback to run just before displaying a notification while the app is in focus.",
    "5-0": "[`unsubscribeWhenNotificationsAreDisabled()`](#unsubscribewhennotificationsaredisabled-method)",
    "3-0": "[`setInAppMessageClickHandler()`](#setinappmessageclickhandler-method)",
    "4-0": "[`setNotificationOpenedHandler()`](#setnotificationopenedhandler-method)",
    "1-0": "[`setAppId()`](#setappid-method)",
    "0-0": "[`initWithContext()`](#initwithcontext-method)",
    "5-1": "If notifications are disabled for your app, unsubscribe the user from OneSignal.",
    "3-1": "Set the callback to run on in-app message click.",
    "4-1": "Set the callback to run on notification open.",
    "1-1": "**Required:**  Set the OneSignal app id.",
    "0-1": "**Required:** Initializes OneSignal with an Android `Context`. Call from your `Application.onCreate`",
    "6-1": "Gets information about the device.",
    "6-0": "[`getDeviceState()`](#getdevicestate--method)",
    "7-0": "[`setExternalUserId()`](doc:sdk-reference#setexternaluserid-method)",
    "7-1": "`onComplete` is now `onSuccess`"
  },
  "cols": 2,
  "rows": 8
}
[/block]
---
#Initialization
In version 4, we are bringing the OneSignal `appId` configuration out of the `build.gradle` file and into the API via the `setAppId` method. The `init` method has been simplified and renamed.

Initialization is now a two step process requiring both `init` and `setAppId` to be called. One key thing to note is that you can call `setAppId` at any point in your app's flow. This allows full initialization to be delayed until say, a user logs in.
[block:parameters]
{
  "data": {
    "h-0": "3+",
    "0-0": "`OneSignal.startInit(this).init();`",
    "0-1": "`OneSignal.initWithContext(this);`\n`OneSignal.setAppId(appId);`",
    "h-1": "4+"
  },
  "cols": 2,
  "rows": 1
}
[/block]
### `initWithContext` Method
Sets the global shared `ApplicationContext` for OneSignal. This is should be set from the `Application.onCreate`
[block:parameters]
{
  "data": {
    "h-0": "Parameter Type",
    "h-1": "Parameter Name",
    "0-0": "`Context`",
    "0-1": "`context`",
    "h-2": "Description",
    "0-2": "Context used by the Application of the app."
  },
  "cols": 3,
  "rows": 1
}
[/block]
### `setAppId` Method
Sets the app id OneSignal should use in the application. 
[block:parameters]
{
  "data": {
    "h-0": "Parameter Type",
    "h-1": "Parameter Name",
    "0-0": "`String`",
    "0-1": "`newAppId`",
    "0-2": "String app id associated with the OneSignal dashboard app.",
    "h-2": "Description"
  },
  "cols": 3,
  "rows": 1
}
[/block]
### Example
[block:code]
{
  "codes": [
    {
      "code": "public class MainApplication extends Application {\n    private static final String ONESIGNAL_APP_ID = \"########-####-####-####-############\";\n  \n    @Override\n    public void onCreate() {\n        super.onCreate();\n        \n        // Uncomment to enable verbose OneSignal logging to debug issues if needed.\n        // OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);\n        \n        OneSignal.initWithContext(this);\n        OneSignal.setAppId(ONESIGNAL_APP_ID);\n    }\n}",
      "language": "java",
      "name": "MainApplication.java"
    }
  ]
}
[/block]
---
# Removed Methods
[block:callout]
{
  "type": "danger",
  "body": "",
  "title": "In version 4, there are several methods you should remove."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Deprecated Methods",
    "0-0": "`enableSound()`",
    "1-0": "`enableVibrate()`",
    "3-0": "`idsAvailable()`",
    "0-1": "Stopped working in Android 8+ due to a breaking change. To customize going forward, use [Notification Categories (Channels)](https://documentation.onesignal.com/docs/android-notification-categories).",
    "1-1": "Stopped working in Android 8+ due to a breaking change. To customize going forward, use [Notification Categories (Channels)](https://documentation.onesignal.com/docs/android-notification-categories).",
    "3-1": "Use [`getDeviceState`](#getdevicestate--method) or  [`addSubscriptionObserver`](android-native-sdk#addsubscriptionobserver) going forward.",
    "2-0": "`getPermissionSubscriptionState()`",
    "2-1": "Use [`getDeviceState()`](#getdevicestate--method) going forward.",
    "4-0": "`setInFocusDisplaying()`",
    "4-1": "Replaced by [`setNotificationWillShowInForegroundHandler`](#setnotificationwillshowinforegroundhandler-method).",
    "h-1": "Replacement",
    "5-0": "`removeNotificationOpenedHandler()`",
    "6-0": "`removeInAppMessageClickHandler()`",
    "7-0": "`removeNotificationReceivedHandler()`",
    "5-1": "Replaced by [`setNotificationOpenedHandler(null)`](#setnotificationopenedhandler-method).",
    "6-1": "Replaced by [`setInAppMessageClickHandler(null)`](#setInAppMessageClickHandler-method).",
    "7-1": "No replacement",
    "8-0": "`setSubscription()`",
    "8-1": "Replaced by [`disablePush()`](40-api-android-native#disablepush-method)",
    "9-0": "`onNotificationProcessing()`",
    "9-1": "Replaced by [`remoteNotificationReceived()`](#remotenotificationreceived-method)"
  },
  "cols": 2,
  "rows": 10
}
[/block]
---
# New Methods
## Foreground Notification Control
In version 4, you can now specifically read notification data that will display while the app is in focus as well as change the display type dynamically. This allows developers to have even greater control over the notification experience.

### `setNotificationWillShowInForegroundHandler` Method
Runs before displaying a notification while the app is in focus. Use this handler to decide if the notification ***should*** show or not. 

Note: this runs ***after*** the [Notification Service Extension](doc:service-extensions#notification-extender-service) which can be used to modify the notification before showing it.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSNotificationWillShowInForegroundHandler`",
    "0-1": "Callback"
  },
  "cols": 2,
  "rows": 1
}
[/block]
The callback accepts a parameter `notificationJob` of type `NotificationWillShowInForegroundHandler`.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setNotificationWillShowInForegroundHandler(new NotificationWillShowInForegroundHandler() {\n  @Override\n  void notificationWillShowInForeground(OSNotificationReceivedEvent notificationReceivedEvent) {    \n    // Get custom additional data you sent with the notification\n    JSONObject data = notificationReceivedEvent.notification.getAdditionalData();\n\n    if (/* some condition */ ) {\n      // Complete with a notification means it will show\n     notificationReceivedEvent.complete(notification);\n    }\n    else {\n      // Complete with null means don't show a notification.\n     notificationReceivedEvent.complete(null);\n    }\n  }\n});",
      "language": "java"
    }
  ]
}
[/block]
**`OSNotificationReceivedEvent` methods:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Field",
    "h-2": "Description",
    "0-0": "`void`",
    "0-1": "`complete()`",
    "0-2": "**Required:**\nMethod controlling notification completion from the handler. If this is not called at the end of the `notificationWillShowInForeground` implementation, a runnable will fire after a 25 second timer and complete automatically.\n\n**Parameter:**\n   - Display: pass the `OSNotification` object\n   - Omit: pass `null` to omit displaying",
    "1-0": "`OSNotification`",
    "1-1": "`getNotification()`",
    "1-2": "*Method*\nThe notification the user received.\n\nSee [`OSNotification`](#osnotification-class) for more details."
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Background Notification Control
### `remoteNotificationReceived()` Method
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSRemoteNotificationReceivedHandler`",
    "0-1": "Callback"
  },
  "cols": 2,
  "rows": 1
}
[/block]
Create a class that extends `OSRemoteNotificationReceivedHandler` and implement the `remoteNotificationReceived` method.

The method `remoteNotificationReceived` parameters are `context` of type `Context` and `notificationReceivedEvent` of type `OSNotificationReceivedEvent`.
[block:code]
{
  "codes": [
    {
      "code": "import com.onesignal.OSNotification;\nimport com.onesignal.OSMutableNotification;\nimport com.onesignal.OSNotificationReceivedEvent;\nimport com.onesignal.OneSignal.OSRemoteNotificationReceivedHandler;\n\npublic class NotificationServiceExtension implements OSRemoteNotificationReceivedHandler {\n\n   @Override\n   public void remoteNotificationReceived(Context context, OSNotificationReceivedEvent notificationReceivedEvent) {\n      OSNotification notification = notificationReceivedEvent.getNotification();\n\n      // Example of modifying the notification's accent color\n      OSMutableNotification mutableNotification = notification.mutableCopy();\n      mutableNotification.setExtender(builder -> builder.setColor(context.getResources().getColor(R.color.colorPrimary)));\n\n      // If complete isn't call within a time period of 25 seconds, OneSignal internal logic will show the original notification\n      // To omit displaying a notifiation, pass `null` to complete()\n      notificationReceivedEvent.complete(mutableNotification);\n   }\n\n}",
      "language": "java"
    }
  ]
}
[/block]
Finally, add it as `meta-data` to your `AndroidManifest.xml` file under the `application` tag.
[block:code]
{
  "codes": [
    {
      "code": "<application ...> \n    <meta-data android:name=\"com.onesignal.NotificationServiceExtension\"\n               android:value=\"com.company.NotificationServiceExtension\" />\n</application>",
      "language": "xml",
      "name": "AndroidManifest.xml"
    }
  ]
}
[/block]
## Click/Open Handlers
### `setInAppMessageClickHandler` Method
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSInAppMessageClickHandler`",
    "0-1": "Callback"
  },
  "cols": 2,
  "rows": 1
}
[/block]
This method takes a callback that itself accepts a parameter `result` of type `OSInAppMessageAction`.
[block:code]
{
  "codes": [
    {
      "code": " OneSignal.setInAppMessageClickHandler(\n   new OneSignal.OSInAppMessageClickHandler() {\n       @Override\n       public void inAppMessageClicked(OSInAppMessageAction result) {\n         String clickName = result.getClickName();\n         String clickUrl = result.getClickUrl();\n              \n         boolean closesMessage = result.doesCloseMessage();\n         boolean firstClick = result.isFirstClick();\n});",
      "language": "java"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "**`OSInAppMessageAction` fields:**",
  "body": "Make sure to update your implementation of the In-App Click Handler. The following fields have now been converted to be returned via getter methods"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "V3 Field",
    "h-2": "Description",
    "0-0": "`String`",
    "0-1": "`clickName`",
    "0-2": "An optional click name entered defined by the app developer when creating the IAM.",
    "1-0": "`String`",
    "2-0": "`boolean`",
    "3-0": "`boolean`",
    "1-1": "`clickUrl`",
    "1-2": "An optional URL that opens when the action takes place.",
    "2-2": "Whether tapping on the element closed the In-App Message.",
    "2-1": "`closesMessage`",
    "3-1": "`firstClick`",
    "3-2": "Whether this was the first action taken on the in app message.",
    "4-0": "`List<OSInAppMessageOutcome>`",
    "4-1": "`outcomes`",
    "4-2": "Outcome for action.\n\n*Mainly useful for debugging*",
    "5-0": "`List<OSInAppMessagePrompt>`",
    "5-1": "`prompts`",
    "5-2": "Permission prompts.\n\n*Mainly useful for debugging*",
    "6-0": "`OSInAppMessageTag`",
    "6-1": "`tags`",
    "6-2": "Tags for action.\n\n*Mainly useful for debugging*",
    "7-0": "`OSInAppMessageActionUrlType`",
    "7-1": "`urlTarget`",
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
  "cols": 4,
  "rows": 8
}
[/block]
### `setNotificationOpenedHandler` Method
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSNotificationOpenedHandler `",
    "0-1": "Callback"
  },
  "cols": 2,
  "rows": 1
}
[/block]
This method takes a `OSNotificationOpenedHandler` callback that itself accepts a parameter `result` of type `OSNotificationOpenedResult`.
[block:code]
{
  "codes": [
    {
      "code": " OneSignal.setNotificationOpenedHandler(\n   new OneSignal.OSNotificationOpenedHandler() {\n     @Override\n     public void notificationOpened(OSNotificationOpenedResult result) {\n       String actionId = result.getAction().getActionId();\n       String type = result.getAction().getType(); // \"ActionTaken\" | \"Opened\"\n  \n       String title = result.getNotification().getTitle();\n     }\n});",
      "language": "java"
    }
  ]
}
[/block]
**`OSNotificationOpenResult` fields:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method",
    "h-2": "Description",
    "0-0": "[`OSNotificationAction`](#osnotificationaction-class)",
    "0-1": "`getAction()`",
    "1-1": "`getNotification()`",
    "1-0": "[`OSNotification`](#osnotification-class)",
    "0-2": "The action the user took on the notification.\n\nString - **`getActionId()`**\nEnum - **`getType()`** [(\"Opened\", \"ActionTaken\")](#osnotificationaction-class)",
    "1-2": "The notification the user received.\nSee [`OSNotification`](#osnotification-class) for the full list of properties."
  },
  "cols": 3,
  "rows": 2
}
[/block]
---
## Other Methods
### `unsubscribeWhenNotificationsAreDisabled` Method
If notifications are disabled for your app, unsubscribe the user from OneSignal.

Use case: if notifications are disabled for your app and you still want background notifications to work, pass in false.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.unsubscribeWhenNotificationsAreDisabled(false);",
      "language": "java"
    }
  ]
}
[/block]
### `getDeviceState ` Method
Returns an `OSDeviceState` object with device info.
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
      "code": "OSDeviceState device = OneSignal.getDeviceState();\n\nString email = device.getEmailAddress();\nString emailId = device.getEmailUserId();\nString pushToken = device.getPushToken();\nString userId = device.getUserId();\n\nboolean enabled = device.areNotificationsEnabled();\nboolean subscribed = device.isSubscribed();\nboolean subscribedToOneSignal = device.isUserSubscribed();",
      "language": "java"
    }
  ]
}
[/block]
**OSDeviceState getters:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method",
    "h-2": "Description",
    "0-0": "`boolean`",
    "0-1": "`isSubscribed()`",
    "0-2": "Get whether the device is subscribed to receive OneSignal push notifications.",
    "1-0": "`boolean`",
    "1-1": "`areNotificationsEnabled()`",
    "1-2": "Get whether notifications are enabled on the device at the Android app level.\nThis is the same value as Android's [`areNotificationsEnabled()`](https://developer.android.com/reference/androidx/core/app/NotificationManagerCompat) method.",
    "2-0": "`boolean`",
    "2-1": "`isPushDisabled()`",
    "2-2": "Was push disabled with [`disablePush()`](#disablepush-method)",
    "3-0": "`String`",
    "3-1": "`getUserId()`",
    "3-2": "Get the OneSignal user (player) id",
    "4-0": "`String`",
    "4-1": "`getPushToken()`",
    "4-2": "Get device's push token.\nThis can be one of the following depending on the device:\n  - Google FCM token\n  - Huawei HMS token\n  - FireOS token",
    "5-0": "`String`",
    "5-1": "`getEmailUserId()`",
    "5-2": "Get the OneSignal user email id.\nOnly available if `OneSignal.setEmail()` was called.",
    "6-0": "`String`",
    "6-1": "`getEmailAddress()`",
    "6-2": "Get the user email address.\nOnly available if `OneSignal.setEmail()` was called."
  },
  "cols": 3,
  "rows": 7
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
    "0-1": "Provides a getters for all notification properties such as title, body, additionalData, etc.\n*Changes:* This class replaces `OSNotificationPayload` as all properties have been merged into this.",
    "1-1": "The action the user took on the notification.",
    "0-0": "[`OSNotification`](40-api-android-native#osnotification-class)",
    "1-0": "[`OSNotificationAction`](40-api-android-native#osnotificationaction-class)",
    "2-0": "[`disablePush()`](40-api-android-native#disablepush-method)",
    "2-1": "Use this method to opt users out of receiving all notifications through OneSignal.\n*Replaces:* `setSubscription()`"
  },
  "cols": 2,
  "rows": 3
}
[/block]
### `OSNotification` Class
In version 4, the `OSNotification` class is composed of all **getters**. The class combines the original `OSNotification` with data previously on the `OSNotificationPayload` class into a single large `OSNotification` class.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method",
    "h-2": "Description",
    "0-0": "`JSONObject`",
    "0-1": "`getAdditionalData`",
    "0-2": "Gets custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data or with the `data` field on the REST API.",
    "1-0": "`int`",
    "1-1": "`getAndroidNotificationId`",
    "1-2": "Gets the unique Android Native API identifier.",
    "2-0": "`String`",
    "2-1": "`getNotificationId`",
    "2-2": "Gets the OneSignal notification UUID.",
    "3-0": "`String`",
    "3-1": "`getBody`",
    "3-2": "Gets the body text of the notification.",
    "4-0": "`String`",
    "4-1": "`getTitle`",
    "4-2": "Gets the title text of the notification.",
    "5-0": "`String`",
    "5-1": "`getLaunchURL`",
    "6-0": "`String`",
    "6-1": "`getLargeIcon`",
    "7-0": "`String`",
    "7-1": "`getBigPicture`",
    "12-0": "`String`",
    "12-1": "`getCollapseId`",
    "13-0": "`List<ActionButton>`",
    "13-1": "`getActionButtons`",
    "14-0": "`int`",
    "14-1": "`getPriority`",
    "8-0": "`String`",
    "8-1": "`getSmallIcon`",
    "9-0": "`String`",
    "9-1": "`getSmallIconAccentColor`",
    "11-0": "`String`",
    "11-1": "`getLedColor`",
    "16-0": "`List<OSNotification>`",
    "10-0": "`BackgroundImageLayout`",
    "10-1": "`getBackgroundImageLayout`",
    "10-2": "If a background image was set, this object will be available.\n\nThe following methods on this object return strings:\n   - `getBodyTextColor()`\n   - `getImage()`\n   - `getTitleTextColor()`",
    "16-1": "`getGroupedNotifications`",
    "17-0": "`String`",
    "15-0": "`String`",
    "15-1": "`getFromProjectNumber`",
    "17-1": "`getGroupKey`",
    "18-0": "`String`",
    "18-1": "`getGroupMessage`",
    "19-0": "`int`",
    "19-1": "`getLockScreenVisibility`",
    "24-0": "`Extender`",
    "24-1": "`getNotificationExtender`",
    "20-0": "`String`",
    "20-1": "`getSound`",
    "21-0": "`String`",
    "21-1": "`getTemplateId`",
    "22-0": "`String`",
    "22-1": "`getTemplateName`",
    "23-0": "`OSMutableNotification`",
    "23-1": "`mutableCopy`",
    "25-0": "`String`",
    "25-1": "`getRawPayload`",
    "13-2": "The list of action buttons on the notification.\n\nThe following methods on this object return strings:\n   - `getIcon()`\n   - `getId()`\n   - `getText()`",
    "23-2": "Extends `OSNotification`\n\n**Methods**\n   - `setAndroidNotificationId(int id)`\n   - `setExtender(Extender extender)`",
    "5-2": "Gets the URL opened when opening the notification.",
    "6-2": "Gets the large icon set on the notification.",
    "7-2": "Gets the big picture image set on the notification.",
    "8-2": "Gets the small icon resource name set on the notification.",
    "9-2": "Gets the accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "14-2": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "15-2": "Gets the Google project number the notification was sent under.",
    "16-2": "Gets the notification payloads a summary notification was created from.",
    "17-2": "Notifications with this same key will be grouped together as a single summary notification.",
    "18-2": "Gets the summary text displayed in the summary notification.",
    "19-2": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "20-2": "Gets the sound resource played when the notification is shown. [Read more here](https://documentation.onesignal.com/docs/customize-notification-sounds)",
    "21-2": "",
    "25-2": "Gets raw JSON payload string received from OneSignal",
    "11-2": "Get LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "12-2": "Gets the collapse id for the notfication."
  },
  "cols": 3,
  "rows": 26
}
[/block]
### `OSNotificationAction` Class
The action the user took on the notification.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method",
    "h-2": "Description",
    "0-1": "`getActionId()`",
    "0-0": "`String`",
    "1-0": "`ActionType`",
    "1-1": "`getType()`",
    "0-2": "Notification button identifier",
    "1-2": "The action type.\n\n**Enum:**\n0) `Opened` - notification was clicked\n1) `ActionTaken` - button was clicked"
  },
  "cols": 3,
  "rows": 2
}
[/block]
### `disablePush` Method
Use this method to opt users out of receiving all notifications through OneSignal.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Parameter",
    "0-0": "`boolean`",
    "0-1": "`disable`"
  },
  "cols": 2,
  "rows": 1
}
[/block]