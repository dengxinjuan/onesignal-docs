---
title: "Mobile Push Notifications Guide"
slug: "mobile-push-notifications-guide"
excerpt: "Overview of Push Notification Customizations."
hidden: false
createdAt: "2021-08-09T19:28:32.980Z"
updatedAt: "2022-03-02T22:53:34.763Z"
---
Push Notifications are "Rich Text" Format messages that get "pushed" from the FCM/APNS/WNS servers to your subscribers. Devices subscribe or "opt-in" to receive push notifications usually through a prompt on iOS Mobile Apps. Android Mobile App subscriptions occur as soon as the device downloads and opens the app. 
[block:callout]
{
  "type": "info",
  "title": "Web Push Notifications Guide",
  "body": "For websites, see the [Web Push Notifications Guide](https://documentation.onesignal.com/docs/push-notification-guide)."
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
    "0-0": "[Character Limits](#content)",
    "0-1": "How many characters are allowed and recommended per platform.\n[Emoji](#emojis) support is available across all platforms 👍",
    "2-0": "[Images & Rich Media](https://documentation.onesignal.com/docs/rich-media)",
    "2-1": "Large Images that appear with the notification. Supported by iOS, Android, Amazon and Huawei.",
    "3-0": "Icons",
    "3-1": "**iOS**: Uses the app's default icon.\n**Android**: See [Android: Notification Icons](doc:customize-notification-icons).",
    "4-0": "[Sounds](doc:customize-notification-sounds)",
    "4-1": "Supported on iOS and Android mobile apps. Not customizable on Web Push.",
    "5-0": "[Badges](doc:badges)",
    "5-1": "Red dots with numbers for iOS and Android mobile apps. [Web Push badges](doc:web-push-notification-icons#badge) are the small icons on Chrome for Android.",
    "6-0": "[Action Buttons](doc:action-buttons)",
    "6-1": "Custom buttons that can support different actions or links.",
    "1-0": "App Name",
    "1-1": "**iOS**: The Display Name in Xcode.\n**Android**: The `<application android:label=\"YOUR APP NAME\">` in the `AndroidManifest.xml`"
  },
  "cols": 2,
  "rows": 7
}
[/block]
You can also control some aspects of the [Notification's Behavior & Payload](doc:how-notifications-work) such as how long the push will be held by FCM/APNS when the device is offline, collapsing notifications
[block:parameters]
{
  "data": {
    "h-0": "Notification Behavior",
    "h-1": "Details",
    "0-0": "[Deep-links and URLs](doc:links)",
    "0-1": "When click, send users to a custom url or view within the app.",
    "1-0": "[Time To Live](doc:how-notifications-work#time-to-live)",
    "1-1": "How long the push is saved on the FCM/APNS/WNS servers if the user's device is offline.",
    "2-0": "[Collapse Id](doc:how-notifications-work#notification-collapsing)",
    "2-1": "Replaces Notifications already present on the user's device if current notification contains this same `collapse_id`.",
    "3-0": "[Background and Data Notifications](doc:data-notifications)",
    "3-1": "Sending notifications without a visual appearance to the user. Mobile only.",
    "4-0": "[Additional Data](#additional-data)",
    "4-1": "Custom data sent within a push."
  },
  "cols": 2,
  "rows": 5
}
[/block]
----

# Content
Because each platform uses a different visual layout for messages, the amount of content that is visible varies. For websites, see [Web Push Notifications Guide](https://documentation.onesignal.com/docs/push-notification-guide).

## Character limits
The following are approximations for how many characters in a notification based on platform. 

[Emojis](https://getemoji.com/) count as a single character. Simply copy-paste the emoji you want into the message or title.
[block:parameters]
{
  "data": {
    "h-1": "Title",
    "0-1": "~25-50 (same for Subtitle)",
    "h-2": "Body",
    "0-0": "iOS",
    "1-0": "Android",
    "1-1": "~50",
    "0-2": "~150",
    "1-2": "~150",
    "2-0": "**Best Fit Across All Platforms**\n(Including Web)",
    "2-1": "~20",
    "2-2": "~60",
    "h-0": "Platform"
  },
  "cols": 3,
  "rows": 3
}
[/block]
## Additional data
Additional content that is not visible may accompany a message payload. Each platform has different limits and is based on the body, title, and any images or custom data you add. 

**This is roughly `3500` characters for both Android and iOS.**

## Emojis

You can copy and paste emojis directly into the Title, Subtitle, and Message of the notification.
Any standard emoji will work and you can use http://getemoji.com/ for more.
[block:callout]
{
  "type": "warning",
  "title": "Emoji Limitations",
  "body": "Emojis are controlled by the operating system that is receiving the notification and must support the emoji for it to be seen."
}
[/block]