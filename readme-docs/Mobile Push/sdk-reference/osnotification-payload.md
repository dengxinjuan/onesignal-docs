---
title: "OSNotification Payload"
slug: "osnotification-payload"
hidden: false
createdAt: "2022-01-11T16:05:36.534Z"
updatedAt: "2022-01-11T16:05:36.534Z"
---
The OSNotification Class provides the Notification Payload data accessible within the [SDK Notification Event Handlers](doc:sdk-notification-event-handlers). This class require the [Major Release Versions](doc:mobile-2020-api-migration-guide) of the OneSignal SDK.

# `OSNotification` Class

The `OSNotification` class is composed of all **getters**. The class combines the original `OSNotification` with data previously on the `OSNotificationPayload` class into a single large `OSNotification` class.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method/Property",
    "h-2": "Description",
    "0-0": "`JSONObject`\n`NSDictionary`",
    "0-1": "`getAdditionalData` (Android)\n`additionalData` (iOS)",
    "0-2": "Gets custom additional data that was sent with the notification. Set on the dashboard under Options > Additional Data or with the `data` field on the REST API.",
    "1-0": "`int`",
    "1-1": "`getAndroidNotificationId` (Android)",
    "1-2": "Gets the unique Android Native API identifier.",
    "2-0": "`String`\n`NSString`",
    "2-1": "`getNotificationId` (Android)\n`notificationId` (iOS)",
    "2-2": "Gets the OneSignal notification UUID.",
    "3-0": "`String`\n`NSString`",
    "3-1": "`getBody` (Android)\n`body` (iOS)",
    "3-2": "Gets the body text of the notification.",
    "5-0": "`String`\n`NSString`",
    "5-1": "`getTitle` (Android)\n`title` (iOS)",
    "5-2": "Gets the title text of the notification.",
    "6-0": "`String`\n`NSString`",
    "6-1": "`getLaunchURL` (Android)\n`launchURL` (iOS)",
    "7-0": "`String`",
    "7-1": "`getLargeIcon` (Android)",
    "8-0": "`String`\n`NSDictionary`",
    "8-1": "`getBigPicture` (Android)\n`attachments` (iOS)",
    "13-0": "`String`",
    "13-1": "`getCollapseId` (Android)",
    "14-0": "`List<ActionButton>`\n`NSArray`",
    "14-1": "`getActionButtons` (Android)\n`actionButtons` (iOS)",
    "15-0": "`int`",
    "15-1": "`getPriority` (Android)",
    "9-0": "`String`",
    "9-1": "`getSmallIcon` (Android)",
    "10-0": "`String`",
    "10-1": "`getSmallIconAccentColor` (Android)",
    "12-0": "`String`",
    "12-1": "`getLedColor` (Android)",
    "17-0": "`List<OSNotification>`",
    "11-0": "`BackgroundImageLayout`",
    "11-1": "`getBackgroundImageLayout` (Android)",
    "11-2": "If a background image was set, this object will be available.\n\nThe following methods on this object return strings:\n   - `getBodyTextColor()`\n   - `getImage()`\n   - `getTitleTextColor()`",
    "17-1": "`getGroupedNotifications` (Android)",
    "18-0": "`String`",
    "16-0": "`String`",
    "16-1": "`getFromProjectNumber` (Android)",
    "18-1": "`getGroupKey` (Android)",
    "19-0": "`String`",
    "19-1": "`getGroupMessage` (Android)",
    "20-0": "`int`",
    "20-1": "`getLockScreenVisibility` (Android)",
    "25-0": "`Extender`",
    "25-1": "`getNotificationExtender` (Android)",
    "21-0": "`String`",
    "21-1": "`getSound` (Android)",
    "22-0": "`String`, `NSString`",
    "22-1": "`getTemplateId` (Android)\n`templateId` (iOS)",
    "23-0": "`String`, `NSString`",
    "23-1": "`getTemplateName` (Android)",
    "24-0": "`OSMutableNotification`",
    "24-1": "`mutableCopy` (Android)",
    "26-0": "`String`\n`NSDictionary`",
    "26-1": "`getRawPayload` (Android)\n`rawPayload` (iOS)",
    "14-2": "The list of action buttons on the notification.\n\nThe following methods on this object return strings:\n   - `getIcon()`\n   - `getId()`\n   - `getText()`",
    "24-2": "Extends `OSNotification`\n\n**Methods**\n   - `setAndroidNotificationId(int id)`\n   - `setExtender(Extender extender)`",
    "6-2": "Gets the URL opened when opening the notification.",
    "7-2": "Gets the large icon set on the notification.",
    "8-2": "Gets the big picture image set on the notification.\n\niOS 10+ only. Attachments sent as part of the rich notification",
    "9-2": "Gets the small icon resource name set on the notification.",
    "10-2": "Gets the accent color shown around small notification icon on Android 5+ devices. ARGB format.",
    "15-2": "The priority of the notification. Values range from -2 to 2 (see Android's [`NotificationCompat`](https://developer.android.com/reference/androidx/core/app/NotificationCompat) reference for more info.",
    "16-2": "Gets the Google project number the notification was sent under.",
    "17-2": "Gets the notification payloads a summary notification was created from.",
    "18-2": "Notifications with this same key will be grouped together as a single summary notification.",
    "19-2": "Gets the summary text displayed in the summary notification.",
    "20-2": "Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.\n\n`1` (Default) - Public (fully visible)\n`0` - Private (Contents are hidden)\n`-1` - Secret (not shown).",
    "21-2": "Gets the sound resource played when the notification is shown. [Read more here](https://documentation.onesignal.com/docs/customize-notification-sounds)",
    "22-2": "Unique Template Identifier from [Templates](doc:templates).",
    "26-2": "Gets raw JSON payload string received from OneSignal.\n\nHolds the raw APS payload received.",
    "12-2": "Get LED string. Devices that have a notification LED will blink in this color. ARGB format.",
    "13-2": "Gets the collapse id for the notfication.",
    "4-0": "`NSString`",
    "4-1": "`subtitle` (iOS)",
    "4-2": "Message Subtitle, iOS only.",
    "23-2": "Name of Template from [Templates](doc:templates).",
    "27-0": "`NSString`",
    "27-1": "`category` (iOS)",
    "27-2": "iOS Notification category key previously registered to display with.",
    "28-0": "`NSString`",
    "28-1": "`threadId` (iOS)",
    "28-2": "iOS 10+ only. Groups notifications into threads",
    "29-0": "`BOOL`",
    "30-0": "`BOOL`",
    "29-1": "`contentAvailable` (iOS)",
    "30-1": "`mutableContent` (iOS)",
    "29-2": "True when the key content-available is set to 1 in the APNS payload. Used to wake your app when the payload is received.\n\nSee Apple's [documenation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application) for more details.",
    "30-2": "True when the key mutable-content is set to 1 in the APNS payload.\n\nSee Apple's [documenation]( https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension\n) for more details.",
    "31-1": "`badge` (iOS)",
    "31-0": "`NSInteger`",
    "31-2": "The badge number assigned to the application icon.",
    "32-0": "`NSInteger`",
    "32-1": "`badgeIncrement` (iOS)",
    "32-2": "The amount to increment the badge icon number.",
    "33-0": "*Method*",
    "33-1": "`parseWithApns` (iOS)",
    "33-2": "Parses an APS push payload into a OSNotificationPayload object. Useful to call from your `NotificationServiceExtension` when the `didReceiveNotificationRequest:withContentHandler:` method fires."
  },
  "cols": 3,
  "rows": 34
}
[/block]
# `OSNotificationAction` Class
The action the user took on the notification.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method",
    "h-2": "Description",
    "0-1": "`getActionId()` (Android)\n`actionID` (iOS)",
    "0-0": "`String`\n`NSString`",
    "1-0": "`ActionType`",
    "1-1": "`getType()` (Android)\n`OSNotificationActionType` (iOS)",
    "0-2": "Notification button identifier",
    "1-2": "The action type.\n\n**Enum:**\n0) `Opened` - notification was clicked\n1) `ActionTaken` - button was clicked"
  },
  "cols": 3,
  "rows": 2
}
[/block]