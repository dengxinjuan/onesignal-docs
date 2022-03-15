---
title: "Web Push Notifications Guide"
slug: "push-notification-guide"
excerpt: "Overview of Push Notification Customizations."
hidden: false
createdAt: "2016-09-02T02:20:48.822Z"
updatedAt: "2021-08-09T20:10:16.586Z"
---
Push Notifications are "Rich Text" Format messages that get "pushed" from the FCM/APNS/WNS servers to your subscribers. Devices subscribe or "opt-in" to receive push notifications usually through [Prompting](doc:permission-requests) like on Web Browsers or iOS Mobile Apps. Android Mobile App subscriptions occur as soon as the device downloads and opens the app. 
[block:callout]
{
  "type": "info",
  "title": "Mobile Push Notifications Guide",
  "body": "For mobile apps, see the [Mobile Push Notifications Guide](https://documentation.onesignal.com/docs/mobile-push-notifications-guide)."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d579ce1-notification-types.png",
        "notification-types.png",
        1683,
        974,
        "#e3e5e8"
      ]
    }
  ]
}
[/block]
Here are common layout guides to follow for push notifications across all platforms:
[block:parameters]
{
  "data": {
    "h-0": "Notification Content",
    "h-1": "Details",
    "0-0": "[Character Limits](#character-limits)",
    "0-1": "How many characters are allowed and recommended per platform.\n[Emoji](#emojis) support is available across all platforms 👍",
    "1-0": "[Images](doc:web-push-notification-icons#image)",
    "1-1": "Large Images that appear with the notification. Supported by Chrome on Windows, macOS, and Android.",
    "2-0": "[Icons](doc:web-push-notification-icons#badge)",
    "2-1": "Supported on all platforms. Customizable for Chrome and Firefox.",
    "3-0": "Sounds",
    "3-1": "Not customizable on Web Push.",
    "4-0": "[Web Push badges](doc:web-push-notification-icons#badge)",
    "4-1": "Small icons on Chrome for Android that appear in top Notification Center when push is received.",
    "5-0": "[Action Buttons](doc:action-buttons)",
    "5-1": "Custom buttons that can support different actions or links."
  },
  "cols": 2,
  "rows": 6
}
[/block]
You can also control some aspects of the [Notification's Behavior & Payload](doc:how-notifications-work) such as how long the push will be held by FCM when the device is offline, collapsing, and persisting notifications.
[block:parameters]
{
  "data": {
    "h-0": "Notification Behavior",
    "h-1": "Details",
    "0-0": "[Linking](doc:links)",
    "0-1": "When clicked, send users to a custom url.",
    "1-0": "[Time To Live](doc:how-notifications-work#time-to-live)",
    "1-1": "How long the push is saved on the FCM/APNS/WNS servers if the user's device is offline.",
    "2-0": "[Notification Collapsing](doc:how-notifications-work#notification-collapsing)",
    "2-1": "Replaces Notifications already present on the user's device if current notification contains this same `collapse_id`.",
    "3-0": "[Notification Persistence](doc:web-push-options#notification-persistence)",
    "3-1": "Requiring Web Push Notifications to be interacted with to be removed. Only available on certain platform versions.",
    "4-0": "[Background and Data Notifications](doc:data-notifications)",
    "4-1": "Sending notifications without a visual appearance to the user. Mobile only.",
    "5-0": "[Additional Data](#additional-data)",
    "5-1": "Custom data sent within a push."
  },
  "cols": 2,
  "rows": 6
}
[/block]
----

# Character limits

Because each platform uses a different visual layout for messages, the amount of content that is visible varies. For mobile apps, see the [Mobile Push Notifications Guide](https://documentation.onesignal.com/docs/mobile-push-notifications-guide).

The following are approximations for how many characters in a notification based on platform. 

[Emojis](https://getemoji.com/) count as a single character. Simply copy-paste the emoji you want into the message or title. Some limitations on Windows 7 and older Operating Systems.
[block:parameters]
{
  "data": {
    "h-1": "Title",
    "0-0": "Windows: Chrome",
    "h-2": "Body",
    "0-1": "~60 (Chrome 68+)\n~40 (Chrome 67 and lower)",
    "1-0": "Windows: Firefox",
    "2-0": "Mac: Chrome, Firefox, Safari",
    "1-1": "~40",
    "2-1": "~20-40",
    "0-2": "~120 (Chrome 68+)\n~0 - 150 (Chrome 67 and lower)",
    "1-2": "~140-190",
    "2-2": "~20-80",
    "3-0": "**Best Fit Across All Platforms**\n(Including Mobile Apps)",
    "3-1": "~20",
    "3-2": "~60",
    "h-0": "Platform"
  },
  "cols": 3,
  "rows": 4
}
[/block]
## Windows

**Chrome 68+** do not have any restrictions with images added and show about the same title (~60 characters on screen and ~60-80 in Notification Center) and body (~126 characters on screen and ~120-160) count.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41b6d43-Windows_Notifications_2.png",
        "Windows Notifications (2).png",
        1702,
        1561,
        "#948980"
      ]
    }
  ]
}
[/block]
## Firefox
Titles support ~40 characters, and bodies support ~140-190 characters:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/60a7acc-concepts-apperance-limits-firefox.jpg",
        "concepts-apperance-limits-firefox.jpg",
        1520,
        412,
        "#2a2b2c"
      ]
    }
  ]
}
[/block]
## macOS

All mac browsers (except Safari) have the same limits due to the way macOS treats notifications. The features a notification is sent with (such as Icons and Notification Persistence) affect the amount of characters visible:
[block:parameters]
{
  "data": {
    "h-1": "Title",
    "h-2": "Body",
    "0-0": "Default",
    "2-0": "With `persistNotification`",
    "4-0": "Notification Center Default",
    "0-1": "~40",
    "0-2": "~44",
    "2-1": "~30",
    "2-2": "~33",
    "4-1": "~39",
    "4-2": "~80",
    "h-0": "",
    "1-0": "With Icon",
    "1-1": "~32",
    "1-2": "~35",
    "3-0": "With `persistNotification` + Icon",
    "3-1": "~21",
    "3-2": "~24",
    "5-0": "Notification Center + Icon",
    "5-1": "~30",
    "5-2": "~62"
  },
  "cols": 3,
  "rows": 6
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/11ad1c0-Screen_Shot_2018-11-09_at_10.54.11_AM.png",
        "Screen Shot 2018-11-09 at 10.54.11 AM.png",
        641,
        388,
        "#e8e8e9"
      ],
      "caption": ""
    }
  ]
}
[/block]
##Safari
There is not a way to remove or edit the site icon on Safari without changing the default icon set in your OneSignal Dashboard.
[block:parameters]
{
  "data": {
    "h-1": "Title",
    "h-2": "Body",
    "0-1": "~40",
    "0-2": "~90",
    "0-0": "Default"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/65e777f-Screen_Shot_2018-10-30_at_2.37.55_PM.png",
        "Screen Shot 2018-10-30 at 2.37.55 PM.png",
        764,
        202,
        "#d4d0d0"
      ]
    }
  ]
}
[/block]
## Emojis

You can copy and paste emojis directly into the Title and Message of the notification.
Any standard emoji will work and you can use http://getemoji.com/ for more.
[block:callout]
{
  "type": "warning",
  "title": "Emoji Limitations",
  "body": "Emojis are controlled by the operating system that is receiving the notification and must support the emoji for it to be seen."
}
[/block]
##Site URL
The websites URL cannot change on the push, it must always show the site origin the user subscribed under.

#Additional data
Additional content that is not visible may accompany a message payload. Each platform has different limits and is based on the body, title, and any images or custom data you add. 

**This is roughly `3500` characters for both Android and iOS.**

----
#FAQ

## Can OneSignal send Push Notifications in an On-Premise Closed network?

This can work as long as the computers on your closed network have access to the push gateway servers that you  want to support:
- https://support.apple.com/en-us/HT203609
- https://firebase.google.com/docs/cloud-messaging/concept-options#messaging-ports-and-your-firewall

If the network is completely disconnected from the Internet, push notifications cannot be delivered via the standard OS/browser services, which is what we support.