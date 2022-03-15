---
title: "Advanced Notification Settings"
slug: "how-notifications-work"
excerpt: "Notification options affection behavior & Payload Information"
hidden: false
createdAt: "2017-12-22T03:19:34.814Z"
updatedAt: "2022-03-02T22:01:08.664Z"
---
When sending Push Notifications from OneSignal, we gather these requests and send them to Google and/or Apple whom distribute them to your users. These notifications are "held" by their servers until the device becomes online.

OneSignal uses a [Custom Payload](doc:how-notifications-work#onesignal-custom-push-payload) on our Mobile SDK to differentiate it from other push notifications.

Below are common Advanced Settings for Push Notifications:

# Notification Collapsing 

If sending frequent notifications, especially on something that is changing like "breaking news", you may want to consider **notification collapsing**. Collapsing is replacing older or irrelevant notifications with newer ones; solving the problem of notifications piling up and overwhelming users whenever they are not actively checking their new notifications.

## Mobile Notification Collapsing - Collapse ID

Collapsing works by only showing the latest notification of a given type, 'collapsing' all the other unread notifications of the same type that come before it. For instance, if you have a weather app and want to update users on the latest weather, you probably want to replace those notifications with whatever is the latest one. 

The way notification collapsing works is by adding a [`collapse_id`](doc:sending-notifications#advanced-settings) to particular types of notifications you are sending that you want collapsed together (E.g. the id is `weather_update` or `breaking news`). Then, every time you wish to have a future notification override previous ones, you add the same `collapse_id` to it. If your app sends three notifications, the following would happen:

1. Sent 1:41pm: "A storm looks like it's approaching. Better grab an umbrella!"

2. Sent 2:20pm: "The storm in your area seems to be clearing up. Expect sunshine soon."

3. Sent 2:44pm: "The storm has moved north and the sun will shine the rest of today!"

If a user does not open their device until 4pm, they would only see the third notification. If the user opened their device at 2pm and 4pm, they would see the first notification, and then at 4pm see the third notification.

`collapse_id` does not work with [Data Notifications](doc:data-notifications) on iOS, the notification must show data in this case to remove it from view.

## Web Notification Collapsing - Web Push Topic

See [Web Push Topic & Collapsing](https://documentation.onesignal.com/docs/web-push-topic-collapsing).

## Removing Notifications Without Replacing Them

In some cases, you may want notifications to "self-destruct" or be removed from the device without replacing them with others. There are a couple options for this:

**Android**: Within the Notification [Service Extension](doc:service-extensions#android-notification-service-extension), use the native Android API [`setTimeoutAfter` method](https://developer.android.com/reference/android/app/Notification.Builder#setTimeoutAfter(long)) to remove the notification after a certain amount of time.

**iOS**: Apple provides the native [`removeDeliveredNotifications(withIdentifiers:)` method](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/1649500-removedeliverednotifications) and [`getDeliveredNotifications(completionHandler:)` method](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/1649520-getdeliverednotifications) to target the expired notifications and remove them.

**Android** & **iOS**: You can send [Data & Background Notifications](doc:data-notifications) which do not display any content to the user but can remove notifications.
- Android: run code in [Service Extensions](doc:service-extensions) to remove the notification.
- iOS: the notifications in the Notification Center are tied to the Badge Count. As long as you have at least 1 badge set, you can send a notification setting the badge count to 0 to remove all notifications for your app.

**Web**: There is not a way to remove web push notifications without collapsing.

## Notification Grouping

For Mobile Apps, see [Notification Grouping](doc:notification-grouping).
For Web Push, see [Web Push Topic & Collapsing](doc:web-push-topic-collapsing) 

----

# Notification Priority

Android Notifications can be assigned **normal** or **high** priority. 

For Android 7.1 and lower, `priority` handles both "Delivery Priority" and "Display Priority"

For Android 8+, `priority` handles "Delivery Priority" and [Android Notification Categories](doc:android-notification-categories) handles the "Display Priority"

**Normal Priority**: If the app is in the foreground, normal priority notifications are delivered immediately (except in Doze mode). Choose this setting for things such as new message notifications, syncing your UI, and syncing data in the background.

**High Priority**: These notifications are delivered immediately, though fall subject to the standby bucket policy on the device. 
- Set a high priority 10 if you need it to go through any doze mode / other power saving modes. But only use priority 10 when you really need to as there is a daily limit where it might fallback to normal priority.

----

# Time To Live 

This is the number of seconds a notification will be held by the Google (FCM) and Apple (APNs) servers before being delivered to your users if their device is not online by the time of sending.

By default, notifications will be held by the Google and Apple servers for 3 days. This means if the device does not come online within 3 days, the message will not be sent to that device.

If the value is 0, APNs/FMC treats the notification as if it expires immediately and does not store the notification or attempt to redeliver it if the device is not connected to a network.

For example, if you set TTL to 3 hours (10800 seconds) and my device does not have internet connection for 3 hours and 1 second or longer, I will not get the notification.

**TTL does not remove the notification from the device once it has been received.** You can use the `collapse_id` to achieve this. See below [Notification Collapsing](#notification-collapsing).

For more on setting the TTL parameter, please see [Sending Push Messages](doc:sending-notifications#advanced-settings)

**iOS Limitation** - Apple will only store the most recent notification sent to a device on the APNs servers. If you send multiple notifications to an iOS device while it is offline, only the most recent notification will show when the device comes back online. More information on this in [Apple's APNs Overview](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW5).

----

# OneSignal Custom Push Payload

Each OneSignal SDK has a [Notification Event Observer](https://documentation.onesignal.com/docs/sdk-reference#onesignal-notification-events) that gets triggered when a push is clicked or received.

Details on the [OneSignal Notification Object](https://documentation.onesignal.com/docs/sdk-reference#osnotification-class) and [OneSignal Notification Payload](https://documentation.onesignal.com/docs/sdk-reference#osnotificationpayload-class).

On Android, our notification payload contains a “custom” key with a nested “i” value. If the notification payload received does not contain this, our SDK will not process the notification.

On iOS, we also have the same “custom” key with nested “i” value, however because Apple has a standard payload it will show all notification sent to the device. So if you send a push from your old platform to a device, do not send the same notification from OneSignal or the user will get it twice.

For iOS Click Handlers, depending on how you handle notification opens you might have to add a check for "custom": { "i": ""} as well. Or if you have your own format, we recommend checking for yours instead.

## Adding Notification Data to iOS Root Payload

If you are needing to customize iOS payload, you can set your OneSignal app to include this custom data in the payload using our [Update an app](ref:update-an-app) method and set `additional_data_is_root_payload` equal to `true`

Then any push you send with the `data` or Additional Data from the dashboard will be available in the APNS payload. For example:
[block:code]
{
  "codes": [
    {
      "code": "... OneSignal Notification Data\n\"data\": {\n   \"your-custom-data\": \"1\"\n} \n\nwill result in the following sent to the device:\n\n{\n    \"aps\" : {\n        \"alert\" : {\n            \"title\" : \"Notification Title\",\n            \"body\" : \"Notification Body\",\n        }\n    },\n    \"your-custom-data\": \"1\"\n}",
      "language": "json",
      "name": "APNS Payload"
    }
  ]
}
[/block]
Resulting in any additional code checking and handling this `your-custom-data` key at this location to work.

----

## Categories

Android 8+ notifications can be assigned a category. Read our [Android Notification Categories](doc:android-notification-categories) guide.

## Doze Mode

Android devices have a doze mode, where messages will be delayed until the device is out of doze mode. High priority messages are delivered but will nevertheless fall subject to the standby bucket policy on the device.

### App Standby Buckets

Devices running Android P and newer implement [app standby buckets](https://developer.android.com/topic/performance/power/power-details) which may lead to notifications being delayed. 

*The following values may change. See the [Android docs](https://developer.android.com/topic/performance/power/power-details) for most updated values*

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "\"Jobs\" = Normal",
    "h-2": "\"Alarms\" = High",
    "0-0": "Active",
    "0-1": "No restriction",
    "0-2": "No restriction",
    "1-0": "Working set:",
    "1-1": "Deferred up to 2 hours",
    "1-2": "Deferred up to 6 mins",
    "2-0": "Frequent:",
    "2-1": "Deferred up to 8 hours",
    "2-2": "Deferred up to 30 mins",
    "3-0": "Rare:",
    "3-1": "Deferred up to 24 hours",
    "3-2": "Deferred up to 2 hours"
  },
  "cols": 3,
  "rows": 4
}
[/block]
### Notifications when app is closed

iOS devices will always receive notifications. They may be delayed, however, if the app is in [Low Power Mode](https://documentation.onesignal.com/docs/notifications-show-successful-but-are-not-being-shown#low-power-energy-saving-do-not-disturb-mode). 

**Android**

A **normal close** such as swiping your app away is a normal close and won't be an issue on most devices. However, force-closing it through the app settings, task killer, or through Android Studio would result in most **Intents** (including pushes) preventing services from starting.

Also some Xiaomi and Huawei devices will put your app in a force-closed state after swiping it away or after some time. See the [following documentation](https://documentation.onesignal.com/docs/notifications-show-successful-but-are-not-being-shown) for more details on this and the logcat message to confirm this.