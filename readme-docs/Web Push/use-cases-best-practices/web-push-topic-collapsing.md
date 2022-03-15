---
title: "Web Push Topic & Collapsing"
slug: "web-push-topic-collapsing"
hidden: false
createdAt: "2022-01-31T22:57:04.162Z"
updatedAt: "2022-02-24T02:30:31.691Z"
---
The OneSignal Web SDK will automatically collapse notifications for Chrome and Firefox. This means older notifications that have not been clicked and which are stored on the device's Notification Center are replaced by the newer notifications received. Safari notifications do not collapse.

For example, Notification 1 is sent and received, the user does not click it. Notification 2 is sent and received. Notification 1 is removed and replaced with Notification 2.

You can set the "Web Push Topic" to display more than 1 web push notification at a time on web.

The Web Push Topic is any string value you can set when sending Push Messages from the dashboard or `web_push_topic` API parameter.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f563b8-Screen_Shot_2022-01-31_at_2.58.26_PM.png",
        "Screen Shot 2022-01-31 at 2.58.26 PM.png",
        500,
        387,
        "#f4f6f7"
      ]
    }
  ]
}
[/block]
If you do not specify the `web_push_topic` , each notification will be replaced by a newer notification. If you do specify `web_push_topic`, you can choose which notifications will be replaced and which notifications will stack.

For example:
- Notification 1 sent with `web_push_topic`:  "breaking-news"
- Notification 2 sent with `web_push_topic`:  "breaking-news"

Notification 2 will replace Notification 1.

- Notification 3 sent with `web_push_topic`:  "sports"
- Notification 4 sent with `web_push_topic`:  "weather"

Notification 2, 3 and 4 will all either be left on the screen or docked in the Notification Center.

#FAQ
##How many notifications can be stored in the Notification Center?

On Chrome, a maximum of 3 notifications are displayed at any time, even if the other notifications are not related to your site or from OneSignal. This means you can only show 3 categories of notifications to your user, not counting for other notifications that might be displayed at that time.

On Firefox on Windows, many more notifications can be shown at a time (6+).

On Firefox on Mac, and Safari on Mac, only one notification can be shown at a time, even if the other notifications are not related to your site or from OneSignal. Notifications also disappear quickly within 5 seconds and this time is not customizable.

On Chrome/Firefox on Android, multiple notifications can be shown at a time.

##Can you remove web push notifications without collapsing them?
There is not a way to remove web push notifications without collapsing.