---
title: "Xamarin - 4.0 API Reference"
slug: "xamarin-40-api-reference"
hidden: true
createdAt: "2022-03-07T22:07:23.966Z"
updatedAt: "2022-03-07T23:01:36.614Z"
---
---
---
#Initialization
In version 4, we simplified initialization. OneSignal initialization now only requires that you set the application ID.

The property to `OneSignal.Current` has been changed to `OneSignal.Default`.

You can call `Initialize` at any point in your app’s flow. This allows full initialization to be delayed until say, a user logs in.
[block:parameters]
{
  "data": {
    "h-0": "3+",
    "0-0": "`OneSignal.Current.StartInit(\"YOUR_ONESIGNAL_APP_ID\")` \n`.Settings(new Dictionary<string, bool>() {`  \n`{ IOSSettings.kOSSettingsKeyAutoPrompt,` \n`false },` `{IOSSettings.kOSSettingsKeyInAppLaunchURL,false }})` `.InFocusDisplaying(OSInFocusDisplayOption.Notification)`\n`.EndInit();`",
    "0-1": "OneSignal.Default.Initialize(\"YOUR_ONESIGNAL_APP_ID\")",
    "h-1": "4+"
  },
  "cols": 2,
  "rows": 1
}
[/block]
---
#New Methods
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "1-0": "`SetLanguage()`",
    "1-1": "Set the language override of the device",
    "0-0": "`PromptForPushNotificationsWithUserResponse()`(iOS)",
    "0-1": "Request the user for push notification services",
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
  "rows": 2
}
[/block]
---
#New Properties
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Property",
    "h-2": "Description",
    "0-0": "`LogType`",
    "0-1": "`LogLevel`",
    "0-2": "get and set the logging level to print Android logCat log or XCode log",
    "1-0": "`LogType`",
    "1-1": "`AlertLevel`",
    "1-2": "get and set the logging level to show as alert dialogs",
    "2-0": "`bool`",
    "2-1": "`RequiresPrivacyConsent`",
    "2-2": "For GDPR users, required to pass true before OneSignal SDK gets fully initialized",
    "3-0": "`bool`",
    "3-1": "`PrivacyConsent`",
    "3-2": "If `RequiresPrivacyConsent` is set `true`, this will need to be set `true`. Until then, the SDK will not fully initialize and will not send any date to OneSignal",
    "4-0": "`bool`",
    "4-1": "`InAppMessagesArePaused`",
    "4-2": "Temporarily pause and resume In-App messages",
    "5-0": "`bool`",
    "5-1": "`ShareLocation`",
    "5-2": "enable or disable location collection"
  },
  "cols": 3,
  "rows": 6
}
[/block]
---
#New Events and Listeners
###Notification events and listeners
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "h-1": "Description",
    "0-0": "`NotificationWasOpened`",
    "0-1": "Handle notifications when notifications are opened",
    "1-0": "`NotificationWillShow`",
    "1-1": "handle notifications when notifications are received in the foreground"
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "void Start() {\n    ...\n    OneSignal.Default.NotificationWasOpened += _notificationWasOpened;\n    OneSignal.Default.NotificationWillShow += _notificationReceived;\n}\n\nprivate void _notificationWasOpened(NotificationOpenedResult result) {\n    //Response to Notification Opened Result\n}\n\nprivate Notification _notificationReceived(Notification notification) {\n    //Response to Notification Received Event\n    return notification; // show the notification\n}",
      "language": "csharp",
      "name": "C#"
    }
  ]
}
[/block]

###State change listeners
[block:parameters]
{
  "data": {
    "0-0": "`PermissionStateChanged`",
    "1-0": "`PushSubscriptionStateChanged`",
    "2-0": "`EmailSubscriptionStateChanged`",
    "3-0": "`SMSSubscriptionStateChanged`",
    "0-1": "Handle native push permission changes",
    "1-1": "Handle OneSignal push subscription state changes",
    "2-1": "Handle OneSignal email subscription state changes",
    "3-1": "Handle OneSignal SMS subscription state changes",
    "h-0": "Reference",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 4
}
[/block]
###In App Message lifecycle events
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "h-1": "Description",
    "0-0": "`InAppMessageWillDisplay`",
    "1-0": "`InAppMessageDidDisplay`",
    "2-0": "`InAppMessageWillDismiss`",
    "3-0": "`InAppMessageDidDismiss`",
    "0-1": "Handle In-App message when it is about to display",
    "1-1": "Handle In-App message when it displays",
    "2-1": "Handle In-App message when it is about to dismiss",
    "3-1": "Handle In-App message when it dismisses"
  },
  "cols": 2,
  "rows": 4
}
[/block]
---
#Removed Methods
[block:callout]
{
  "type": "danger",
  "body": "",
  "title": "In version 4, there are several functions you should remove."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Deprecated Methods",
    "h-1": "Replacement",
    "0-0": "`StartInit().Settings().InFocusDisplaying().EndInit()`",
    "0-1": "Replaced by `Initialize()`",
    "1-0": "`RegisterForPushNotifications()`",
    "1-1": "Replaced by `PromptForPushNotificationsWithUserResponse()`",
    "2-0": "`IdsAvailable()`",
    "2-1": "Replaced by\n* `PermissionStateChanged`\n* `PushSubscriptionStateChanged`\n* `EmailSubscriptionStateChanged`",
    "3-0": "`SyncHashedEmail()`",
    "3-1": "No longer providing this functionality. Use `SetEmail()` instead",
    "4-0": "`SetLocationShared()`",
    "4-1": "Replaced by `ShareLocation`",
    "5-0": "`UserDidProvidePrivacyConsent()`",
    "5-1": "Replaced by `PrivacyConsent`",
    "6-0": "`RequiresUserPrivacyConsent()`",
    "6-1": "Replaced by `RequiresPrivacyConsent`",
    "7-0": "`SetRequiresUserPrivacyConsent()`",
    "7-1": "Replaced by `RequiresPrivacyConsent`",
    "8-0": "`AddTrigger()`",
    "9-0": "`AddTriggers()`",
    "10-0": "`GetTriggerValueForKey()`",
    "11-0": "`PauseInAppMessages()`",
    "8-1": "Replaced by `SetTrigger()`",
    "9-1": "Replaced by `SetTriggers()`",
    "10-1": "Replaced by `GetTrigger()`",
    "11-1": "Replaced by `InAppMessagesArePaused`"
  },
  "cols": 2,
  "rows": 12
}
[/block]