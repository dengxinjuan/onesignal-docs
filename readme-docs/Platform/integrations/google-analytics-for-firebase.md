---
title: "Google Analytics for Firebase"
slug: "google-analytics-for-firebase"
excerpt: "OneSignal will automatically send notification events to your analytics dashboard if Google Analytics for Firebase is correctly implemented. Works with iOS and Android."
hidden: false
createdAt: "2017-10-17T21:32:40.972Z"
updatedAt: "2021-09-22T22:18:23.067Z"
---
[Google Analytics for Firebase](https://firebase.google.com/products/analytics) is an event-tracking tool provided for free by Google Firebase. It allows you to easily track events within your app and analyze them later using various filters.

#Events

The OneSignal SDK tracks events that pertain to notification open & receive events. The following events are sent:
[block:parameters]
{
  "data": {
    "h-0": "Event Name",
    "h-1": "Purpose",
    "0-0": "`os_notification_opened`",
    "1-0": "`os_notification_received`",
    "2-0": "`os_notification_influence_open`",
    "0-1": "A OneSignal notification was opened",
    "1-1": "A OneSignal notification was received. (**Android Only**)",
    "2-1": "An application was opened within 2 minutes of a OneSignal notification being received.\n([iOS requires additional setup](doc:ios-sdk-app-groups-setup))"
  },
  "cols": 2,
  "rows": 3
}
[/block]
The OneSignal SDK also sends parameters which contain more info about the particular notification the event is attributed to:

[block:parameters]
{
  "data": {
    "h-0": "Parameter Name",
    "h-1": "Parameter Value",
    "h-2": "Purpose",
    "0-0": "`source`",
    "0-1": "\"OneSignal\"",
    "0-2": "To attribute this event's source to the OneSignal SDK",
    "1-0": "`medium`",
    "1-1": "\"notification\"",
    "1-2": "A formal indication that the medium for the event is a notification",
    "2-0": "`notification_id`",
    "2-1": "the `notification_id` from a particular OneSignal notification",
    "2-2": "You can attribute a notification ID to a particular \"sent\" notification on the dashboard",
    "3-0": "`campaign`",
    "3-1": "If using a template:\n`[template_name]-[template_id]`\nIf not:\nFirst 10 letters of the `title`",
    "3-2": "Campaigns are a way to group notifications that are similar, such as notifications using the same template or title."
  },
  "cols": 3,
  "rows": 4
}
[/block]
---

# Setup OneSignal events integration with Google Analytics for Firebase

##Step 1. Setup Firebase
Follow the [Firebase integration documentation](https://firebase.google.com/docs/android/setup) and verify that Firebase is correctly functioning inside your application.

##Step 2. Enable Firebase In OneSignal
Navigate to **Settings > Analytics** and **Enable** "Google Analytics for Firebase". 

This will begin sending event data to Firebase. If you wish to track influenced opens on iOS, you will need to perform some [additional setup](doc:ios-sdk-app-groups-setup) due to limitations in Firebase.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/363e29f-Screen_Shot_2021-09-08_at_11.44.59_AM.png",
        "Screen Shot 2021-09-08 at 11.44.59 AM.png",
        1790,
        1512,
        "#e9ebec"
      ]
    }
  ]
}
[/block]

##Step 3. Verify OneSignal Events

#### A. Verify that Firebase is attempting to send events related to OneSignal notifications

Check in your application's LogCat logs and look for Google Analytics for Firebase entries that indicate events corresponding to OneSignal are being sent. Look for `os_notification_opened`,`os_notification_received`, or `os_notification_influence_open`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0dc5c63-firebase_analytics_3.png",
        "firebase_analytics_3.png",
        1560,
        42,
        "#2d2d2e"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
#### B. Go to the [Firebase Console](https://console.firebase.google.com/) for your project
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/646c537-firebase_analytics_1.png",
        "firebase_analytics_1.png",
        2878,
        1078,
        "#0494db"
      ],
      "sizing": "smart",
      "border": false
    }
  ]
}
[/block]
#### C. Follow the [DebugView Setup Guide](https://firebase.google.com/docs/analytics/debugview)
The DebugView allows ADB to send Firebase events to your project when it's in `debug` mode.
Here is a great video on this for iOS: https://youtu.be/kpkW78OSbiw?t=289

Example Debug Logs
[block:code]
{
  "codes": [
    {
      "code": "2021-09-22 14:58:20.731918-0700 OneSignalDemo[33301:1350721] 7.0.0 - [Firebase/Analytics][I-ACS023073] Debug mode is enabled. Marking event as debug and real-time. Event name, parameters: os_notification_opened, {\n    campaign = Firebase t;\n    ga_debug (_dbg) = 1;\n    ga_event_origin (_o) = app;\n    ga_realtime (_r) = 1;\n    medium = notification;\n    notification_id = 2ecdd9bf-b2c0-443e-b5b2-7983d453c746;\n    source = OneSignal;\n}\n2021-09-22 14:58:20.749723-0700 OneSignalDemo[33301:1350721] 7.0.0 - [Firebase/Analytics][I-ACS023072] Event logged. Event name, event params: os_notification_opened, {\n    campaign = Firebase t;\n    ga_debug (_dbg) = 1;\n    ga_event_origin (_o) = app;\n    ga_realtime (_r) = 1;\n    medium = notification;\n    notification_id = 2ecdd9bf-b2c0-443e-b5b2-7983d453c746;\n    source = OneSignal;\n}",
      "language": "text",
      "name": "Xcode"
    }
  ]
}
[/block]
#### D. As OneSignal events propagate, they will appear in real-time on the DebugView
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39a888e-Screen_Shot_2021-09-22_at_3.16.55_PM.png",
        "Screen Shot 2021-09-22 at 3.16.55 PM.png",
        3376,
        1756,
        "#d7dbde"
      ]
    }
  ]
}
[/block]
#### E. Your application has been verified to track OneSignal notification events through Google Analytics for Firebase!
[block:callout]
{
  "type": "success",
  "title": "You're Done!",
  "body": "Google Analytics for Firebase is now set up to receive OneSignal events."
}
[/block]
---
#FAQ

## Why are the clicked and opened events not showing in Firebase?

The Firebase click event `os_notification_opened` and received event `os_notification_received` may not work if the Firebase library has not initialized in time so the Firebase library drops the event. More details on [this github issue](https://github.com/OneSignal/OneSignal-Android-SDK/issues/949).

[block:callout]
{
  "type": "info",
  "title": "Firebase Full Integration Guide",
  "body": "Link your Firebase Database and use Firebase Cloud Functions with OneSignal following our [Firebase Setup Tutorial](doc:firebase)."
}
[/block]