---
title: "Confirmed Deliveries"
slug: "confirmed-deliveries"
excerpt: "Tracking received rates on notifications."
hidden: false
createdAt: "2019-10-17T19:00:24.188Z"
updatedAt: "2021-11-16T20:11:05.385Z"
---
Confirmed Deliveries is an <a href="https://onesignal.com/pricing" target="_blank">upgraded feature</a> that tracks confirmations of successful receives of notification per device.

Every device that receives a notification sent through OneSignal will now acknowledge successful receipt back to OneSignal, data that is then available to all paying customers. In the Message Report for a notification, look for the Confirmed metric.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e65419-Screen_Shot_2021-03-09_at_2.10.36_PM.png",
        "Screen Shot 2021-03-09 at 2.10.36 PM.png",
        862,
        552,
        "#d7e9de"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]

#How do Confirmed Deliveries work?

To understand Confirmed Delivery, you must first understand what goes into delivering a notification to a device. In general, push providers must go through Apple and Google in order to deliver notifications. This means that there are multiple "hops" between OneSignal servers and the intended device.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f1e840-Untitled_Diagram.jpg",
        "Untitled Diagram.jpg",
        594,
        306,
        "#faf5f3"
      ]
    }
  ]
}
[/block]
Without device-level confirmation of notification delivery, OneSignal can only confirm the successful delivery to Apple Push Notification service and Firebase Cloud Messaging servers. However, our new Confirmed Deliveries feature now takes the form of an extra network request, from the device back to OneSignal servers acknowledging the notification:


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b6568c-Untitled-Diagram--1-.jpg",
        "Untitled-Diagram--1-.jpg",
        599,
        399,
        "#fbf7f5"
      ]
    }
  ]
}
[/block]
When the Android App receives the push, it sends a confirmation to our servers letting us know the app itself has received the push. On iOS Apps, you must have the [iOS Notification Service Extension](doc:service-extensions) setup for the confirmed delivery to be counted. Also make sure you are using a version of our SDK that supports this feature, see below [Supported SDKs Table](#supported-sdks) to make sure you have the minimum version or higher.

#Why are Confirmed Deliveries important?

Confirmed Deliveries provide a true understanding of what is happening with your messages and help you monitor the health of your messaging pipeline and use metrics to better debug your implementation.


##Click-Through Rate

Without Confirmed Deliveries, click-through rates are calculated by dividing the number of confirmed notification opens by the total number of subscriber devices targeted:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c400a27-Screen-Shot-2019-10-22-at-11.26.50-AM.png",
        "Screen-Shot-2019-10-22-at-11.26.50-AM.png",
        1882,
        966,
        "#fcfcfc"
      ],
      "caption": "Without Confirmed Deliveries"
    }
  ]
}
[/block]
However, "phantom subscribers" will result in less accurate CTR over time. These devices are ones that have never unsubscribed (e.g. by deleting your app), but are no longer used or are powered off.

For example, say someone who just upgraded to a new smartphone throws their old device in a drawer and never touches it again. Despite permanent inactivity, this device is technically still subscribed to your app. When calculated this way, CTRs become gradually less accurate due to these "phantom subscribers." This can be seen in the graph below:

This can be visualized in the graph below:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1e34cb0-Screen_Shot_2019-10-21_at_6.34.14_PM.png",
        "Screen Shot 2019-10-21 at 6.34.14 PM.png",
        1630,
        998,
        "#cfddf8"
      ],
      "caption": "This model assumes users upgrade their phones every 24 months and a 10% \"true\" CTR (CTR only of ACTIVE devices). You can see that on the 24th month, the click through rate was half of the initial percentage since there are twice as many subscribed devices."
    }
  ]
}
[/block]
A better way to calculate CTR is to divide the number of devices that clicked a notification by the number of devices that received a notification:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e416346-Screen-Shot-2019-10-22-at-11.25.48-AM.png",
        "Screen-Shot-2019-10-22-at-11.25.48-AM.png",
        1906,
        936,
        "#fcfcfc"
      ],
      "caption": "With Confirmed Deliveries"
    }
  ]
}
[/block]
Up until now, OneSignal didn't have a way to calculate how many devices actually received the notification. With Confirmed Deliveries, you will now be equipped with the power of near-perfect delivery statistics.

##Why isn't this offered by most push providers?

To confirm device-level delivery of a notification, push-providers must process an extra inbound request for each push. This leads to a large burst in traffic to their servers, which requires heavy infrastructure. Processing inbound requests requires more than simply sending requests. When OneSignal's infrastructure sends out pushes at a sustained speed of one million pushes per second, it must then be able to handle over one million incoming confirmed deliveries at the same rate.

#How can I increase Confirmed Deliveries?

Correctly tracking Confirmed Deliveries requires devices to have the [minimum version of the OneSignal SDK that supports this feature](#supported-sdks) and setup the OneSignal SDK according to our setup guides. This includes using the iOS Notification Service Extension and App Groups for iOS mobile apps. Using our API only to add devices or omitting steps from our setup will cause Confirmed Deliveries to be unaccounted for that platform.

##Supported SDKs

Make sure you have the minimum SDK version **or higher** installed. We recommend using the latest version of the OneSignal SDK.
[block:parameters]
{
  "data": {
    "0-0": "[Android Native SDK](doc:android-native-sdk)",
    "0-1": "[3.12.0](https://github.com/OneSignal/OneSignal-Android-SDK/releases)",
    "1-0": "[iOS Native SDK](doc:ios-native-sdk)",
    "2-0": "[React Native SDK](doc:react-native-sdk)",
    "3-0": "[Unity SDK](doc:unity-sdk)",
    "1-1": "[2.12.2](https://github.com/OneSignal/OneSignal-iOS-SDK/releases)",
    "2-1": "[3.6.0](https://github.com/geektimecoil/react-native-onesignal/releases)",
    "3-1": "[2.11.0](https://github.com/OneSignal/OneSignal-Unity-SDK/releases)",
    "4-0": "[Cordova/Ionic/PhoneGap SDK](doc:cordova-sdk)",
    "4-1": "[2.8.0](https://github.com/OneSignal/OneSignal-Cordova-SDK/releases)",
    "5-0": "[Xamarin SDK](doc:xamarin-sdk)",
    "5-1": "[3.7.0](https://github.com/OneSignal/OneSignal-Xamarin-SDK/releases)",
    "7-0": "[Web Push SDK](doc:web-push-sdk)",
    "7-1": "[151105](https://github.com/OneSignal/OneSignal-Website-SDK)",
    "6-0": "[Flutter SDK](doc:flutter-sdk)",
    "6-1": "[2.3.1](https://github.com/OneSignal/OneSignal-Flutter-SDK/releases)",
    "h-0": "SDK",
    "h-1": "Minimum SDK Version",
    "h-2": "Details",
    "0-2": "Supported",
    "1-2": "Supported",
    "2-2": "Supported",
    "3-2": "Supported",
    "4-2": "Supported",
    "5-2": "Supported",
    "6-2": "Supported",
    "7-2": "Supported"
  },
  "cols": 3,
  "rows": 8
}
[/block]

#Confirmed Delivery Troubleshooting

Confirmed Deliveries cannot be triggered if a device is turned off. If a device is offline when the push is sent, it has 3 days default time to come back online to get the push. You can increase or decrease this time with the [Time To Live parameter](https://documentation.onesignal.com/docs/how-notifications-work#time-to-live).

Also, a Confirmed Delivery may be missed if the device has unstable network connection at the time of receiving the push. The push may get received and clicked, generating a click response, but the network may not have been strong enough to send the received event.

Other possible reasons for inaccurate Confirmed Deliveries:

###Missing or Incorrect iOS Notification Service Extension Implementation

The [iOS Notification Service Extension](doc:service-extensions) and [iOS SDK App Groups setup](doc:ios-sdk-app-groups-setup) must be included in your iOS mobile app for Confirmed Deliveries to be counted. If you [send a test message](doc:sending-notifications#sending-to-test-devices) to your iOS mobile app and the Confirmed Delivery is not counted, please update the OneSignal SDK and check the [Mobile Setup Guide](doc:mobile-sdk-setup).

###Android Devices Force Quitting the App

Some android device manufacturers put apps into a "force quit state" when you swipe the app away which causes the device to not get notifications for your app when it is not running. **Unfortunately this is a manufacturer issue that affects all push providers.**

We have a list of common devices and fixes for this in our [Notification Not Shown Guide](doc:notifications-show-successful-but-are-not-being-shown#section-the-app-is-force-stopped). We also wrote a [blog post about this](https://onesignal.com/blog/manufacturers-interfere-with-reliable-notifications/) and many 3rd party sites discuss this as well, like: https://dontkillmyapp.com/

To try educating your users about this, you could setup [In-App Messages](doc:in-app-quickstart ) to target users on Android and make sure they have battery optimizations for your app turned off or they are setting keeping your app running when swiped away.

###Inactive Devices

As described above in the section [Why Are Confirmed Deliveries Important](#why-are-confirmed-deliveries-important), users do not normally unsubscribe from all their apps or websites when they get new devices or retire their old ones. In fact you may have some devices at home that are subscribed to apps you have not visited in years!

Using [Segments](doc:segmentation) you can check all device record's that have not opened your app or website in over x amount (1 year, 6 months, event 1 hour) of time using the "Last Session" filter.

If you have devices that have not returned back to the app or site you can [delete these devices](doc:delete-users). However, make sure you do not accidentally delete active users.

###Mutable Content (iOS)
All push notifications sent to iOS devices automatically include the `mutable-content` parameter set to `1`. This allows for the notification to be processed by the [Service Extension](https://documentation.onesignal.com/docs/service-extensions) which is required in order to make Confirmed Deliveries work correctly.

###Safari Not Supported

Confirmed Deliveries on web requires the use of Service Workers. Safari does not use Service Workers in the same way as Chromium based browsers and therefore does not support Confirmed Deliveries at this time.

##How to track which devices confirmed delivery?

Currently Confirmed Deliveries only tracks how many devices confirmed. It does not track which devices confirmed yet.

In order to track which specific devices confirmed receiving the push, (for example you want to send an email, In-App Message or SMS if they did not confirm) you would need to target devices individually either with the `include_player_ids` or `include_external_user_ids` targeting parameters on our [Create notification](ref:create-notification) REST API.

You will want to save the device ids targeted and notification "id" provided in the [API Response](https://documentation.onesignal.com/reference/create-notification#results---create-notification). Further if the device is unsubscribed, you will get the unsubscribed device id in the `invalid_player_ids` or `invalid_external_user_ids` response.

After x amount of time has passed that you want to wait for checking if confirmed, you can use the [View notification](ref:view-notification) API endpoint with the notification "id" saved from the response.

If `received` is 0, then they device has not received the push yet. Depending on how long you want to wait, you can set the `ttl` parameter to discard the push if x time as passed. See [Notification Behavior & Payload Information](doc:how-notifications-work) for more details.

#Confirmed Delivery Limitations

###Displayed but NOT Confirmed
[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Details",
    "0-0": "Android & iOS & Web",
    "0-1": "- Networking issue where device couldn’t finish a network call to onesignal.com\n- App or NSE crash after displaying",
    "1-0": "iOS",
    "1-1": "- Network took over 30 seconds (iOS kills the NSE after this timeout) to response."
  },
  "cols": 2,
  "rows": 2
}
[/block]
###Confirmed but NOT Displayed

[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Details",
    "0-0": "Android & iOS",
    "0-1": "- Notification does display BUT user doesn’t notice it due to low visibility; such as no sound, vibration, or grouped within to many other notifications.\n\n- Too many apps open on the device taking up too much memory - Possible but not likely. iOS NSE uses very little RAM. Android, possible on some low RAM devices under rare cases.",
    "1-0": "iOS",
    "1-1": "- App is foreground AND one of the following:\n    - OneSignal’s InFocus displaying is set to NONE\n    - Another SDK or library suppressed the notification",
    "2-0": "Android",
    "2-1": "- User turns off notifications at the device level and does not open app yet\n- User turns off notification category / channel for the notification that we tried to display\n- OneSignal NES is not displaying our notification we may be miss reporting it"
  },
  "cols": 2,
  "rows": 3
}
[/block]
###Delivered status but NOT Displayed AND NOT Confirmed
Not really a “Confirmed Delivered” issue but covering here for completeness.
[block:parameters]
{
  "data": {
    "h-0": "Plataform",
    "h-1": "Details",
    "0-0": "iOS",
    "0-1": "- Device is offline and two or more notifications are sent\n    - Apple’s APNs server only stores-and-forwards 1 (the most recent) notification per app.",
    "1-0": "Android",
    "1-1": "- Device is offline and two or more notifications are sent with the same `collapse_id`\n    - By design `collapse_id` replaces the stores-and-forward push on FCM’s server"
  },
  "cols": 2,
  "rows": 2
}
[/block]