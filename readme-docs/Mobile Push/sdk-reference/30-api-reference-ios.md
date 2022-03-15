---
title: "iOS Native - 3.0.0 API Changes"
slug: "30-api-reference-ios"
excerpt: "OneSignal iOS SDK Major Release Updates & Deprecations"
hidden: true
createdAt: "2020-09-02T20:26:23.698Z"
updatedAt: "2021-06-04T21:13:13.292Z"
---
### New & Changed Methods
[block:parameters]
{
  "data": {
    "h-0": "Reference",
    "3-0": "[`getDeviceState()`](#getdevicestate--method)",
    "3-1": "Gets information about the device.",
    "0-0": "[`initWithLaunchOptions()`](#initialization)",
    "0-1": "1/2 of initialization process. Now only takes `launchOptions` as an argument.",
    "1-0": "[`setAppId()`](#setappid-method)",
    "1-1": "1/2 of initialization process. Sets the OneSignal app id.",
    "2-0": "[`setLaunchURLsInApp()`](#setlaunchurlsinapp-method)",
    "2-1": "Set to `true` to launch all notifications with a URL in an In App WebView",
    "4-0": "[`disablePush()`](#disablepush-method)",
    "4-1": "Use this method to opt users out of receiving all notifications through OneSignal.\nReplaces: `setSubscription`",
    "h-1": "Details",
    "5-0": "[`setNotificationWillShowInForegroundHandler()` ](#setnotificationwillshowinforegroundhandler-method)",
    "5-1": "Use this method to handle notifications received in the foreground. For silent notifications use the Notification Service Extension. Replaces: `OSHandleNotificationReceivedBlock`",
    "6-0": "**Versions 3.5.0 and higher only** \n[`didReceiveNotificationExtensionRequest()`](#didreceivenotificationextensionrequest-method)",
    "6-1": "This method now takes the contentHandler completion block and calls it. You no longer need to call `contentHandler(bestAttemptContent)` after calling this method in `didReceiveNotificationRequest`. Any non-OneSignal changes to the notification content should be made before calling this method."
  },
  "cols": 2,
  "rows": 7
}
[/block]
---
#Initialization
In version 3, initialization is now a two step process requiring both `initWithLaunchOptions` and `setAppId` to be called. Note that you can call `setAppId` at any point in your app's flow. This allows full initialization to be delayed until say, a user logs in.
[block:code]
{
  "codes": [
    {
      "code": "func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n  // OneSignal initialization\n  OneSignal.initWithLaunchOptions(launchOptions)\n  OneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\")\n}",
      "language": "swift",
      "name": "AppDelegate.swift"
    },
    {
      "code": "- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions {\n    [OneSignal initWithLaunchOptions:launchOptions];\n    [OneSignal setAppId:@\"########-####-####-####-############\"];\n}",
      "language": "objectivec",
      "name": "AppDelegate.m"
    }
  ]
}
[/block]
### `initWithLaunchOptions` Method
[block:parameters]
{
  "data": {
    "h-0": "Parameter Type",
    "h-1": "Description",
    "0-0": "`NSDictionary`",
    "0-1": "Launch options from AppDelegate's `didFinishLaunchingWithOptions`",
    "h-2": "Description",
    "0-2": "Context used by the Application of the app."
  },
  "cols": 2,
  "rows": 1
}
[/block]
### `setAppId` Method
Sets the app id OneSignal should use in the application.
[block:parameters]
{
  "data": {
    "h-0": "Parameter Type",
    "h-1": "Description",
    "0-0": "`NSString`",
    "0-1": "String app id associated with the OneSignal dashboard app.",
    "0-2": "",
    "h-2": "Description"
  },
  "cols": 2,
  "rows": 1
}
[/block]
###`setLaunchURLsInApp` Method
This method can be used to set if launch URLs should be opened in safari or within the application
[block:parameters]
{
  "data": {
    "h-0": "Parameter Type",
    "h-1": "Description",
    "0-0": "`Bool`",
    "0-1": "Boolean indicating if launch URLs should be opened in safari or within the application."
  },
  "cols": 2,
  "rows": 1
}
[/block]
---
# Removed Methods
[block:callout]
{
  "type": "danger",
  "body": "",
  "title": "In version 3, there are several removed methods you should replace."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Removed Methods",
    "h-1": "Replacement",
    "0-0": "`idsAvailable`",
    "0-1": "Replaced by three observers:\n\n   - `addPermissionObserver`\n   - `addSubscriptionObserver`\n   - `addEmailSubscriptionObserver`",
    "2-0": "`presentAppSettings`",
    "2-1": "Replaced by `promptForPushNotificationsWithUserResponse:fallBackToSettings`",
    "3-0": "`syncHashedEmail`",
    "3-1": "No longer providing this functionality. Use `setEmail` instead.",
    "4-0": "`setNotificationDisplayType`",
    "4-1": "Notification foreground display is now controlled using notificationWillShowInForegroundHandler.\nNote that the `Alert` notification display type has been removed.",
    "6-0": "`kOSSettingsKeyAutoPrompt`",
    "6-1": "Replaced by `promptForPushNotificationsWithUserResponse:fallBackToSettings`",
    "5-0": "`setSubscription`",
    "5-1": "Replaced by `disablePush`",
    "7-0": "`kOSSettingsKeyInAppLaunchURL`",
    "7-1": "SDK version 3.2.1+\nReplaced by setting `OneSignal_suppress_launch_urls` in the Info.plist \n- YES will not show the launch url in an in-app browser.\n- NO will show the launch url in an in-app browser.\nExample Suppress Launch URLs",
    "1-0": "`getPermissionSubscriptionState`",
    "1-1": "Replaced by observers state observers:\n\n   - `addPermissionObserver`\n   - `addSubscriptionObserver`\n   - `addEmailSubscriptionObserver`\n\nAs well as `getDeviceState`",
    "8-0": "`OSHandleNotificationReceivedBlock`",
    "8-1": "Replaced by `OSNotificationWillShowInForegroundBlock` when notifications are received in the foreground and\n`OSNotificationOpenedBlock`\nwhen notifications are tapped"
  },
  "cols": 2,
  "rows": 9
}
[/block]
---
# New Methods
## Foreground Notification Control
In version 3, you can now specifically read notification data that will display while the app is in focus as well as change the display type dynamically. This allows developers to have even greater control over the notification experience.

### `setNotificationWillShowInForegroundHandler` Method
Runs before displaying a notification while the app is in focus. Use this handler to decide if the notification ***should*** show or not. To silence the notification pass nil to the completion handler and to show the notification pass the notification to the completion handler. If the completion handler is not called within 25 seconds the notification will be shown.

Note: this runs ***after*** the [Notification Service Extension](doc:service-extensions) which can be used to modify the notification content before showing it.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSNotificationWillShowInForegroundBlock`",
    "0-1": "Block"
  },
  "cols": 2,
  "rows": 1
}
[/block]
The block replaces the `OSHandleNotificationReceivedBlock` and is provided with an `OSNotification` instance and a `completion` block. OSNotificationPayload has been removed and combined with OSNotification.
[block:code]
{
  "codes": [
    {
      "code": "let notifWillShowInForegroundHandler: OSNotificationWillShowInForegroundBlock = { notification, completion in\n    print(\"Received Notification: \", notification.notificationId ?? \"no id\")\n    print(\"launchURL: \", notification.launchURL ?? \"no launch url\")\n    print(\"content_available = \\(notification.contentAvailable)\")\n    if notification.notificationId == \"example_silent_notif\" {\n        completion(nil)\n    } else {\n        completion(notification)\n    }\n}\n\nOneSignal.setNotificationWillShowInForegroundHandler(notifWillShowInForegroundHandler)",
      "language": "swift"
    },
    {
      "code": "id notifWillShowInForegroundHandler = ^(OSNotification *notification, OSNotificationDisplayResponse completion) {\n        NSLog(@\"Received Notification - %@\", notification.notificationId);\n        if ([notification.notificationId isEqualToString:@\"silent_notif\"]) {\n            completion(nil);\n        } else {\n            completion(notification);\n        }\n    };\n\n[OneSignal setNotificationWillShowInForegroundHandler:notifWillShowInForegroundHandler];\n",
      "language": "objectivec"
    }
  ]
}
[/block]
**`OSNotification properties:`** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Property/Method",
    "h-2": "Description",
    "0-0": "`NSString`",
    "1-0": "`NSString`",
    "3-0": "`NSString`",
    "0-1": "`notificationId `",
    "1-1": "`title`",
    "3-1": "`body`",
    "0-2": "OneSignal notification UUID.",
    "1-2": "The message title.",
    "3-2": "The message body.",
    "2-0": "`NSString`",
    "2-1": "`subtitle`",
    "2-2": "The message subtitle.",
    "6-0": "`NSString`",
    "6-1": "`launchURL`",
    "6-2": "Web address to launch within the app via `WKWebView`",
    "10-0": "`NSDictionary`",
    "10-1": "`additionalData`",
    "10-2": "Additional key value properties set within the payload.",
    "11-0": "`BOOL`",
    "11-1": "`contentAvailable`",
    "11-2": "True when the key content-available is set to 1 in the APNS payload. Used to wake your app when the payload is received.\n\nSee Apple's [documenation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application) for more details.",
    "12-0": "`BOOL`",
    "12-1": "`mutableContent`",
    "12-2": "True when the key mutable-content is set to 1 in the APNS payload.\n\nSee Apple's [documenation]( https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension\n) for more details.",
    "13-0": "`NSInteger`",
    "13-1": "`badge`",
    "13-2": "The badge number assigned to the application icon.",
    "15-0": "`NSArray`",
    "15-1": "`actionButtons`",
    "15-2": "Action buttons set on the notification.",
    "16-1": "`rawPayload`",
    "16-0": "`NSDictionary`",
    "16-2": "Holds the raw APS payload received.",
    "17-0": "*Method*",
    "17-1": "`parseWithApns`",
    "17-2": "Parses an APS push payload into a OSNotificationPayload object. Useful to call from your `NotificationServiceExtension` when the `didReceiveNotificationRequest:withContentHandler:` method fires.",
    "4-0": "`NSString`",
    "4-1": "`templateId`",
    "4-2": "Unique Template Identifier",
    "5-0": "`NSString`",
    "5-1": "`templateName`",
    "5-2": "Name of Template",
    "7-2": "Notification category key previously registered to display with.",
    "7-0": "`NSString`",
    "7-1": "`category`",
    "8-0": "`NSString`",
    "8-1": "`threadId`",
    "8-2": "iOS 10+ only. Groups notifications into threads",
    "9-2": "iOS 10+ only. Attachments sent as part of the rich notification",
    "9-0": "`NSDictionary`",
    "9-1": "`attachments`",
    "14-1": "`badgeIncrement`",
    "14-0": "`NSInteger`",
    "14-2": "The amount to increment the badge icon number."
  },
  "cols": 3,
  "rows": 18
}
[/block]
## Click/Open Handlers

`OSHandleInAppMessageActionClickBlock` has been renamed to `OSInAppMessageClickBlock`. It still takes an `OSInAppMessageAction` parameter

**`OSInAppMessageAction` fields:**

[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Field",
    "h-2": "Description",
    "0-0": "`NSString `",
    "0-1": "`clickName`",
    "0-2": "An optional click name entered defined by the app developer when creating the IAM.",
    "1-0": "`NSURL `",
    "2-0": "`BOOL `",
    "3-0": "`BOOL `",
    "1-1": "`clickUrl`",
    "1-2": "An optional URL that opens when the action takes place.",
    "2-2": "Determines if tapping on the element should close the In-App Message.",
    "2-1": "`closesMessage`",
    "3-1": "`firstClick`",
    "3-2": "Determines if this was the first action taken on the in app message.",
    "4-0": "`NSArray<OSInAppMessageOutcome *>`",
    "4-1": "`outcomes`",
    "4-2": "Outcome for action.",
    "5-0": "`OSInAppMessagePrompt`",
    "5-1": "`prompts`",
    "5-2": "Prompts for action.",
    "6-0": "`OSInAppMessageTag`",
    "6-1": "`tags`",
    "6-2": "Tags for action.",
    "7-0": "`OSInAppMessageActionUrlType`",
    "7-1": "`urlTarget`",
    "7-2": "Determines where the URL is opened, ie."
  },
  "cols": 3,
  "rows": 8
}
[/block]
### `setNotificationOpenedHandler` Method
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`OSNotificationOpenedBlock `",
    "0-1": "Block"
  },
  "cols": 2,
  "rows": 1
}
[/block]
This block was renamed from `OSHandleNotificationActionBlock` to `OSNotificationOpenedBlock`. It is provided with a `result` object of type `OSNotificationOpenedResult`.
[block:code]
{
  "codes": [
    {
      "code": "let notificationOpenedBlock: OSNotificationOpenedBlock = { result in\n    // This block gets called when the user reacts to a notification received\n    let notification: OSNotification = result.notification\n    print(\"Message: \", notification.body ?? \"empty body\")\n    print(\"badge number: \", notification.badge)\n    print(\"notification sound: \", notification.sound ?? \"No sound\")\n            \n    if let additionalData = notification.additionalData {\n        print(\"additionalData: \", additionalData)\n        if let actionSelected = notification.actionButtons {\n            print(\"actionSelected: \", actionSelected)\n        }\n        if let actionID = result.action.actionId {\n            //handle the action\n        }\n    }\n}\n\nOneSignal.setNotificationOpenedHandler(notificationOpenedBlock)",
      "language": "swift"
    },
    {
      "code": "id notificationOpenedBlock = ^(OSNotificationOpenedResult *result) {\n  OSNotification* notification = result.notification;\n  if (notification.additionalData) {\n    if (result.action.actionId) {\n      fullMessage = [fullMessage stringByAppendingString:[NSString stringWithFormat:@\"\\nPressed ButtonId:%@\", result.action.actionId]];\n    }\n  }\n  \n[OneSignal setNotificationOpenedHandler:notificationOpenedBlock];",
      "language": "objectivec"
    }
  ]
}
[/block]
**`OSNotificationOpenResult` fields:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Field",
    "h-2": "Description",
    "0-0": "`OSNotificationAction`",
    "0-1": "`action`",
    "1-1": "`notification`",
    "1-0": "`OSNotification`",
    "0-2": "The action the user took on the notification.",
    "1-2": "The notification the user received.\n\nGo to `OSNotification` reference."
  },
  "cols": 3,
  "rows": 2
}
[/block]
**`OSNotificationActionType` Enum:**
The action type associated to an `OSNotificationAction` object.
[block:parameters]
{
  "data": {
    "0-0": "`OSNotificationActionTypeOpened`",
    "h-0": "Value",
    "1-0": "`OSNotificationActionTypeActionTaken`"
  },
  "cols": 1,
  "rows": 2
}
[/block]
**`OSNotificationAction` property `actionID` has been renamed to actionId.:** 

---
## Other Methods

### `getDeviceState ` Method
Returns an `OSDeviceState` object with device info. This method can be used in place of `getPermissionSubscriptionState` to get information on the current subscription statuses for all messaging channels on demand. To be notified of status changes use the `OSPermissionObserver`, `OSSubscriptionObserver`, `OSEmailSubscriptionObserver`, and `OSSMSSubscriptionObserver`.
[block:callout]
{
  "type": "warning",
  "title": "Do not cache `OSDeviceState` object",
  "body": "This method returns a \"snapshot\" of the device state for when it was called. To ensure fresh state, make sure to call `getDeviceState` each time you need to get one of the member fields."
}
[/block]
**OSDeviceState getters:** 
[block:code]
{
  "codes": [
    {
      "code": "if let deviceState = OneSignal.getDeviceState() {\n    let userId = deviceState.userId\n    print(\"OneSignal Push Player ID: \", userId ?? \"called too early, not set yet\")\n    let subscribed = deviceState.isSubscribed\n    print(\"Device is subscribed: \", subscribed)\n    let hasNotificationPermission = deviceState.hasNotificationPermission\n    print(\"Device has notification permissions enabled: \", hasNotificationPermission)\n    let notificationPermissionStatus = deviceState.notificationPermissionStatus\n    print(\"Device's notification permission status: \", notificationPermissionStatus.rawValue)\n    let pushToken = deviceState.pushToken\n    print(\"Device Push Token Identifier: \", pushToken ?? \"no push token, not subscribed\")\n}",
      "language": "swift"
    },
    {
      "code": "OSDeviceState *deviceState = [OneSignal getDeviceState];\nNSString *userId = deviceState.userId;\nNSString *pushToken = deviceState.pushToken;\nBOOL subscribed = deviceState.isSubscribed;",
      "language": "objectivec"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Property",
    "h-2": "Description",
    "5-0": "`NSString`",
    "6-0": "`NSString`",
    "7-0": "`BOOL`",
    "5-1": "`emailAddress`",
    "6-1": "`emailUserId`",
    "7-1": "`isPushDisabled`",
    "5-2": "The user's email.",
    "6-2": "The user's email id.",
    "7-2": "Returns the value of what was sent to OneSignal.disablePush(bool).\nFalse by default",
    "0-0": "`NSString`",
    "0-1": "`userId`",
    "0-2": "The Push Record Player ID. `Null` if called too early.",
    "1-0": "`BOOL`",
    "1-1": "`isSubscribed`",
    "1-2": "Is device subscribed to push notifications.",
    "2-0": "`BOOL`",
    "2-1": "`hasNotificationPermission`",
    "2-2": "Get the app's notification permission.",
    "3-1": "`notificationPermissionStatus`",
    "3-2": "Current notification permission status of the device.\n\n0 - \"NotDetermined\" - The user hasn't yet made a choice about whether the app is allowed to schedule notifications.\n\n1 - \"Denied\" - The app isn't authorized to schedule or receive notifications.\n\n2 - \"Authorized\" - The app is authorized to schedule or receive notifications.\n\n3 - \"Provisional\" - The application is provisionally authorized to post noninterruptive user notifications. See [iOS Customizations](https://documentation.onesignal.com/docs/ios-customizations)\n\n4 - \"Ephemeral\" - For [App Clips](https://documentation.onesignal.com/docs/app-clip-support). The app is authorized to schedule or receive notifications for a limited amount of time.",
    "4-0": "`NSString`",
    "4-1": "`pushToken`",
    "4-2": "The device push token identifier.",
    "3-0": "`Integer`"
  },
  "cols": 3,
  "rows": 8
}
[/block]
### `disablePush` Method
Use this method to opt users out of receiving all notifications through OneSignal.
Replaces: `setSubscription`
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`disabled`",
    "0-1": "BOOL"
  },
  "cols": 2,
  "rows": 1
}
[/block]
###`didReceiveNotificationExtensionRequest` Method 
**Versions 3.5.0 and higher only** 
This method now takes the contentHandler completion block and calls it. You no longer need to call `contentHandler(bestAttemptContent)` after calling this method in `didReceiveNotificationRequest`. Any non-OneSignal changes to the notification content should be made before calling this method.

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "0-0": "**request**",
    "h-2": "Description",
    "0-1": "`UNNotificationRequest`",
    "0-2": "The request that is passed into the native function",
    "1-0": "**replacementContent**",
    "1-1": "`UNMutableNotificationContent`",
    "1-2": "The content of the request retrieved through `[request.content mutableCopy]`. Any non-OneSignal changes that you want to make to the notification should be made to the content before passing the content to this method.",
    "2-0": "**contentHandler**",
    "2-1": "`contentHandler callback`",
    "2-2": "The contentHandler completion block that triggers the display of the notification. Prior to SDK 3.5.0 you should call `contentHandler(<UNMutableNotificationContent>)` with the new request content to trigger the notification's display. As of 3.5.0 this is handled automatically by passing the contentHandler to `didReceiveNotificationExtensionRequest`"
  },
  "cols": 3,
  "rows": 3
}
[/block]
---
# Other Changes
`app_id` has been renamed to `appId`
`sdk_version_raw` has been renamed to `sdkVersionRaw`
`sdk_semantic_version`  has been renamed to `sdkSemanticVersion`

##Nullability for Swift interface
Nullability annotations have been added to the OneSignal header to make the Swift interface easier to use.
Xcode will point these changes out as warning or errors to help you migrate however below outlines the changes.
[block:code]
{
  "codes": [
    {
      "code": "func onOSPermissionChanged(_ stateChanges: OSPermissionStateChanges)",
      "language": "swift",
      "name": "New Swift SDK usage"
    },
    {
      "code": " func onOSPermissionChanged(_ stateChanges: OSPermissionStateChanges!) ",
      "language": "swift",
      "name": "Old Swift SDK usage"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "New Nonnull Annotations",
    "0-0": "Methods",
    "0-1": "- `deleteTag`\n   - `deleteTags`\n   - `deleteTagsWithJsonString`\n   - `didReceiveNotificationExtensionRequest`\n   - `getTags`\n   - `handleMessageAction`\n   - `onOSEmailSubscriptionChanged`\n   - `onOSPermissionChanged`\n   - `onOSSubscriptionChanged`\n   - `onesignal_Log`\n   - `parseNSErrorAsJsonString`\n   - `postNotification`\n   - `postNotification`\n   - `postNotificationWithJsonString`\n   - `sdkSemanticVersion`\n   - `sdkVersionRaw`\n   - `stringify`\n   - `sendTag`\n   - `sendTags`\n   - `sendTagsWithJsonString`\n   - `serviceExtensionTimeWillExpireRequest`\n   - `setMSDKType`\n   - `toDictionary`",
    "1-0": "Properties",
    "1-1": "- `OSNotificationAction *action`\n   - `OSNotification* notification`\n   - `OSNotificationPayload* payload`"
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "New Nullable Annotations",
    "0-1": "- `didReceiveNotificationExtensionRequest`\n   - `serviceExtensionTimeWillExpireRequest`\n   - `setInAppMessageClickHandler`\n   - `setLaunchOptions`\n   - `setNotificationOpenedHandler`\n   - `setNotificationWillShowInForegroundHandler`",
    "0-0": "Methods",
    "2-0": "Properties",
    "2-1": "- `OSEmailSubscriptionState *emailSubscriptionStatus;`\n   - `OSEmailSubscriptionState* from;`\n   - `OSEmailSubscriptionState* to;`\n   - `OSPermissionState* from;`\n   - `OSPermissionState* permissionStatus;`\n   - `OSPermissionState* to;`\n   - `OSSubscriptionState* from;`\n   - `OSSubscriptionState* subscriptionStatus;`\n   - `OSSubscriptionState* to;`\n   - `NSDictionary* attachments;`\n   - `NSString *threadId;`\n   - `NSString* actionID;`\n   - `NSString* body;`\n   - `NSString* category;`\n   - `NSString* launchURL;`\n   - `NSString* notificationID;`\n   - `NSString* sound;`\n   - `NSString* subtitle;`\n   - `NSString* templateID;`\n   - `NSString* templateName;`\n   - `NSString *title;`\n   - `NSString *emailAddress;`\n   - `NSString* emailUserId;`\n   - `NSString* pushToken;`\n   - `NSString* userId;`",
    "1-0": "`onSuccess` & `onFailure` Block Parameters",
    "1-1": "- `deleteTag`\n   - `deleteTags`\n   - `getTag`\n   - `getTags`\n   - `sendTags`\n   - `postNotification`\n   - `postNotificationWithJsonString`\n   - `sendOutcomeWithValue`"
  },
  "cols": 2,
  "rows": 3
}
[/block]