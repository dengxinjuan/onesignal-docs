---
title: "SDK Notification Event Handlers"
slug: "sdk-notification-event-handlers"
excerpt: "Handling Notification Events within OneSignal"
hidden: false
createdAt: "2021-01-16T01:41:32.275Z"
updatedAt: "2022-01-11T16:09:47.333Z"
---
The Notification Events on this page require the [Major Release Versions](doc:mobile-2020-api-migration-guide) of the OneSignal SDK.
[block:parameters]
{
  "data": {
    "h-0": "Notification Events",
    "h-1": "Details",
    "0-0": "[**Foreground Notification Received Event**](#foreground-notification-received-event)",
    "h-2": "",
    "0-1": "OneSignal SDK `setNotificationWillShowInForegroundHandler` method runs before displaying a notification while the app is in focus. Use this handler to decide if the notification should show or not.",
    "0-2": "",
    "1-0": "[**Notification Opened Event**](#notification-opened-event)",
    "1-1": "OneSignal SDK `setNotificationOpenedHandler` method runs upon opening the app after a notification is clicked.",
    "2-0": "[**Background Notification Received Event**](#background-notification-received-event)",
    "3-0": "**Force-quit Notification Received Event**",
    "2-1": "Native Methods that run while a notification is received while app is in the background. These methods require using Native Code like Java/Kotlin or Swift/Objective-C.",
    "3-1": "**iOS** - Force-quit state is when the app has been \"swiped away\" and not running in the foreground or background. Apple still keeps an open connection to your app but requires the [Service Extensions](doc:service-extensions) for notification data detection.\n\n**Android** - Force-quit generally happens manually through the App Settings and prevents any communication to your app. Further, some OEMs will put your app into this force-quit state when swiping the app away. See [Notifications Not Shown](doc:notifications-show-successful-but-are-not-being-shown#android-mobile-app-notifications-not-showing) for more details."
  },
  "cols": 2,
  "rows": 4
}
[/block]
#Foreground Notification Received Event

##`setNotificationWillShowInForegroundHandler` Method

Runs before displaying a notification while the app is in focus. Use this handler to read notification data and change it or decide if the notification ***should*** show or not. 

Note: this runs ***after*** the [Notification Service Extension](doc:service-extensions) which can be used to modify the notification before showing it.
[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "0-0": "Android",
    "h-1": "Parameter",
    "h-2": "Type",
    "0-1": "`OSNotificationWillShowInForegroundHandler`",
    "0-2": "Callback",
    "1-0": "iOS",
    "1-1": "`OSNotificationWillShowInForegroundBlock`",
    "1-2": "Block"
  },
  "cols": 3,
  "rows": 2
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSiganl.setNotificationWillShowInForegroundHandler(new NotificationWillShowInForegroundHandler() {\n   @Override\n   void notificationWillShowInForeground(OSNotificationReceivedEvent notificationReceivedEvent) {\n     OSNotification notification = notificationReceivedEvent.getNotification();\n     // Get custom additional data you sent with the notification\n     JSONObject data = notification.getAdditionalData();\n\n     if (/* some condition */ ) {\n        // Complete with a notification means it will show\n        notificationReceivedEvent.complete(notification);\n     }\n     else {\n       // Complete with null means don't show a notification\n       notificationReceivedEvent.complete(null);\n    }\n  }\n});",
      "language": "java"
    },
    {
      "code": "let notificationWillShowInForegroundBlock: OSNotificationWillShowInForegroundBlock = { notification, completion in\n  print(\"Received Notification: \", notification.notificationId ?? \"no id\")\n  print(\"launchURL: \", notification.launchURL ?? \"no launch url\")\n  print(\"content_available = \\(notification.contentAvailable)\")\n\n  if notification.notificationId == \"example_silent_notif\" {\n    // Complete with null means don't show a notification  \n    completion(nil)\n  } else {\n    // Complete with a notification means it will show\n    completion(notification)\n  }\n}\nOneSignal.setNotificationWillShowInForegroundHandler(notificationWillShowInForegroundBlock)",
      "language": "swift"
    },
    {
      "code": "id notificationWillShowInForegroundBlock = ^(OSNotification *notification, OSNotificationDisplayResponse completion) {\n        NSLog(@\"Received Notification - %@\", notification.notificationId);\n        if ([notification.notificationId isEqualToString:@\"silent_notif\"]) {\n            completion(nil);\n        } else {\n            completion(notification);\n        }\n    };\n\n[OneSignal setNotificationWillShowInForegroundHandler:notificationWillShowInForegroundBlock];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {\n  console.log(\"OneSignal: notification will show in foreground:\", notificationReceivedEvent);\n  let notification = notificationReceivedEvent.getNotification();\n  console.log(\"notification: \", notification);\n  const data = notification.additionalData\n  console.log(\"additionalData: \", data);\n  //Silence notification by calling complete() with no argument\n  notificationReceivedEvent.complete(notification);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setNotificationWillShowInForegroundHandler((OSNotificationReceivedEvent event) {\n  // Display Notification, send null to not display, send notification to display           \n  event.complete(event.notification);      \n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "window.plugins.OneSignal.setNotificationWillShowInForegroundHandler(function(notificationReceivedEvent) {\n  notificationReceivedEvent.complete(notificationReceivedEvent.getNotification());\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
###`OSNotificationReceivedEvent` methods:
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Field",
    "h-2": "Description",
    "0-0": "`void` (Android)\n`OSNotificationDisplayResponse` (iOS)",
    "0-1": "`complete()`\n`completion()` (iOS Native)",
    "0-2": "**Required:**\nMethod controlling notification completion from the handler. If this is not called at the end of the `notificationWillShowInForeground` implementation, a runnable will fire after a 25 second timer and complete automatically.\n\n**Parameter:**\n- Display: pass the OSNotification object\n- Omit: pass null to omit displaying",
    "1-0": "`OSNotification`",
    "1-1": "`getNotification()`\n`notification` (iOS Native)",
    "1-2": "*Method*\nThe notification the device received.\n\nSee [OSNotification](#osnotification-class) for more details."
  },
  "cols": 3,
  "rows": 2
}
[/block]

#Notification Opened Event

## `setNotificationOpenedHandler` Method

This method takes a `OSNotificationOpenedHandler` callback that itself accepts a parameter `result` of type `OSNotificationOpenedResult`.
[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Parameter",
    "h-2": "Type",
    "0-0": "Android",
    "0-1": "`OSNotificationOpenedHandler`",
    "0-2": "Callback",
    "1-0": "iOS",
    "1-1": "`OSNotificationOpenedBlock`",
    "1-2": "Block"
  },
  "cols": 3,
  "rows": 2
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": " OneSignal.setNotificationOpenedHandler(\n   new OneSignal.OSNotificationOpenedHandler() {\n     @Override\n     public void notificationOpened(OSNotificationOpenedResult result) {\n       String actionId = result.getAction().getActionId();\n       String type = result.getAction().getType(); // \"ActionTaken\" | \"Opened\"\n  \n       String title = result.getNotification().getTitle();\n     }\n});",
      "language": "java"
    },
    {
      "code": "let notificationOpenedBlock: OSNotificationOpenedBlock = { result in\n    // This block gets called when the user reacts to a notification received\n    let notification: OSNotification = result.notification\n    print(\"Message: \", notification.body ?? \"empty body\")\n    print(\"badge number: \", notification.badge)\n    print(\"notification sound: \", notification.sound ?? \"No sound\")\n            \n    if let additionalData = notification.additionalData {\n        print(\"additionalData: \", additionalData)\n        if let actionSelected = notification.actionButtons {\n            print(\"actionSelected: \", actionSelected)\n        }\n        if let actionID = result.action.actionId {\n            //handle the action\n        }\n    }\n}\n\nOneSignal.setNotificationOpenedHandler(notificationOpenedBlock)",
      "language": "swift"
    },
    {
      "code": "id notificationOpenedBlock = ^(OSNotificationOpenedResult *result) {\n  OSNotification* notification = result.notification;\n  if (notification.additionalData) {\n    if (result.action.actionId) {\n      fullMessage = [fullMessage stringByAppendingString:[NSString stringWithFormat:@\"\\nPressed ButtonId:%@\", result.action.actionId]];\n    }\n  }\n  \n[OneSignal setNotificationOpenedHandler:notificationOpenedBlock];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.setNotificationOpenedHandler(openedEvent => {\n  console.log(\"OneSignal: notification opened:\", openedEvent);\n  const { action, notification } = openedEvent;\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setNotificationOpenedHandler((OSNotificationOpenedResult result) {\n    print('\"OneSignal: notification opened: ${result}');\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "var notificationOpenedCallback = function(jsonData) {\n  var notificationData = JSON.stringify(jsonData)\n  console.log('notificationOpenedCallback: ' + notificationData);\n};\n\nwindow.plugins.OneSignal.setNotificationOpenedHandler(notificationOpenedCallback);",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
**`OSNotificationOpenResult` fields:** 
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method/Property",
    "h-2": "Description",
    "1-0": "[`OSNotificationAction`](#osnotification-payload#osnotificationaction-class)",
    "1-1": "`getAction()` (Android)\n`action` (iOS)",
    "1-2": "The action the user took on the notification.\n\nString - **`getActionId()`**\nEnum - **`getType()`** [(\"Opened\", \"ActionTaken\")](#osnotification-payload#osnotificationaction-class)",
    "0-0": "[`OSNotification`](#osnotification-payload#osnotification-class)",
    "0-1": "`getNotification()` (Android)\n`notification` (iOS)",
    "0-2": "The notification the user received.\nSee [`OSNotification`](#osnotification-payload#osnotification-class) for the full list of properties."
  },
  "cols": 3,
  "rows": 2
}
[/block]
# `OSNotification` Class

The `OSNotification` class is composed of all **getters**. The class combines the original `OSNotification` with data previously on the `OSNotificationPayload` class into a single large `OSNotification` class.

More details in [OSNotification Payload](doc:osnotification-payload).

# `OSNotificationAction` Class
The action the user took on the notification.

More details in [OSNotification Payload](doc:osnotification-payload).

----

#Background Notification Received Event

## Android Background Notification Received Event

Requires native code. See [Android Notification Service Extension](https://documentation.onesignal.com/v8.0/docs/service-extensions#android-notification-service-extension) for more details.

## iOS Background Notification Received Event

#### `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)` method

Apple provides this method to indicate a notification was received when your app is running in the foreground or background. This method allows data to be fetched while the app is running in the background. See details and discussion for requirements in [Apple's Developer Documentation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application).

If your app is force-quite, this method will not run and requires the [Service Extensions](doc:service-extensions) for detection.

Must have background mode enabled and send the push with `content_available` in the [iOS Message Settings](https://documentation.onesignal.com/docs/sending-notifications#ios-options) for method to be called while app is in background.
[block:code]
{
  "codes": [
    {
      "code": "func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {\n    print(\"iOS Native didReceiveRemoteNotification: \", userInfo.debugDescription)\n    \n    if let customOSPayload = userInfo[\"custom\"] as? NSDictionary {\n        if let additionalData = customOSPayload[\"a\"] as? NSDictionary {\n            print(\"additionalData: \", additionalData)\n            if let foo = additionalData[\"foo\"] {\n                print(\"foo: \", foo)\n            }\n        }\n        if let notificationId = customOSPayload[\"i\"] {\n            print(\"notificationId: \", notificationId)\n        }\n        if let launchUrl = customOSPayload[\"u\"] {\n            print(\"launchUrl: \", launchUrl)\n        }\n    }\n    if let aps = userInfo[\"aps\"] as? NSDictionary {\n        if let alert = aps[\"alert\"] as? NSDictionary {\n            if let messageBody = alert[\"body\"] {\n                print(\"messageBody: \", messageBody)\n            }\n            if let messageTitle = alert[\"title\"] {\n                print(\"messageTitle: \", messageTitle)\n            }\n        }\n    }\n    // This block gets called when the user reacts to a notification received\n    let timeInterval = Int(NSDate().timeIntervalSince1970)\n    OneSignal.sendTags([\"last_push_received\": timeInterval])\n    \n    print(\"badge number: \", UIApplication.shared.applicationIconBadgeNumber.description)\n}",
      "language": "swift"
    }
  ]
}
[/block]