---
title: "iOS Customizations"
slug: "ios-customizations"
excerpt: "iOS features OneSignal SDK supports"
hidden: false
createdAt: "2019-04-03T00:42:37.330Z"
updatedAt: "2022-03-04T19:27:07.986Z"
---
#Provisional Push Notifications

iOS 12 introduced Provisional aka Direct-To-History push notification authorization. This means that instead of having to prompt the user for permission to send them push notifications, your app can request provisional authorization. Some details about these push notifications:
- they will not show a banner
- they will not play a sound
- they will not alert the user, they will be directly sent to the Notification Center.

See [iOS: Provisional Push Notifications](doc:ios-provisional-push-notifications) for details.

----

#Notification Grouping

See [Notification Grouping](doc:notification-grouping) for details.

----

#Customize iOS Push Payload

The OneSignal Push Payload contains a `"custom"` key with nested `"i"` value (which contains the OneSignal Notification Id) and `"a"` value which is the `data` or "additional data" sent in the push. More details on this in our <a href="https://documentation.onesignal.com/docs/service-extensions#ios-notification-service-extension" target="_blank">Service Extensions Guide</a>.

Here is how the notification payload should look through the NSE using our "custom" key for additional data:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"aps\": {\n    \"alert\":{\n      \"title\" : \"Note title\",\n      \"body\" : \"notification message\"\n    },\n    \"badge\" : 5\n  },\n  \"ios_data_key1\" : \"bar\",\n  \"ios_data_key2\" : [ \"bang\",  \"whiz\" ],\n  \"custom\": {\n    \"a\": {\"key\": \"value\"},\n    \"i\": \"xxxx\"\n  }\n}",
      "language": "json"
    }
  ]
}
[/block]
The `ios_data_keys` can be a used for your own additional data keys if you turn on `additional_data_is_root_payload` with our [Update an app](ref:update-an-app) API.

----

#Update App Title In Push

If you changed your app name and/or would like to change the App Title, simply update the "Display Name" in Xcode for the main app target and release an app update.

Devices will see push containing the new App Title once they restart the device.

----

#Image Carousel and Notification Content Extensions

iOS provides a [UNNotificationContentExtension](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension?language=objc) protocol as the entry point for a notification content app extension. This can be used to display a custom interface for your app’s notifications. See [iOS: Image Carousel Push Notifications](doc:ios-image-carousel-push-notifications) for an example guide on how to use this for creating a carousel within an iOS notification.

----

#Critical Alerts

See [iOS: Focus Modes and Interruption Levels](doc:ios-focus-modes-and-interruption-levels) for details.