---
title: "Notification Grouping"
slug: "notification-grouping"
hidden: false
createdAt: "2021-09-17T17:59:35.512Z"
updatedAt: "2021-09-17T18:01:30.936Z"
---
#iOS Notification Grouping

In iOS 12 and newer, Apple supports grouping notifications with specific "thread ids" along with adding a summary and how many notifications are within that summary.

These parameters can be set directly into the notification payload from the [OneSignal API](https://documentation.onesignal.com/reference/create-notification#grouping--collapsing) using the `thread_id`, `summary_arg`, and `summary_arg_count` parameters.

#Android Notification Grouping

[block:callout]
{
  "type": "warning",
  "title": "Behavior changes",
  "body": "- Manually setting the group only works on Android 6 and lower.\n- Android 7.0+ will automatically group your notifications after the device has 4 or more visible notifications for your app, even if you don't set a group key.\n- Android 7.0+ automatically generates the text for the summary notification for the grouped notifications.\nThe custom group message only shows on Android 6.0 (Marshmallow) devices and older."
}
[/block]
For **Android 7+** you can setup your [Android `NotificationExtenderService`](doc:service-extensions#android-notification-extender-service) to group messages and add another `NotificationExtenderService` to update the summary notification. See [Android's Group Notify Guide](https://developer.android.com/training/notify-user/group) for more details.

Note there are some limitations that **Android 7+** has for these summary notifications. You can only modify the text, accent color and small icon (not large icon). However, you can still modify the children. 

For **Android 6 and lower**. Simply enter any value in the “Group Key” field under the Android Options when [Sending Push Messages](doc:sending-notifications). This is the [`android_group` parameter on the REST API](ref:create-notification#grouping--collapsing). Notifications with the same group key will automatically group on the device.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/GnEw4PmmSVWWfgX5Uc3W_stacked_notification.png",
        "stacked_notification.png",
        "900",
        "460",
        "#886865",
        ""
      ]
    }
  ]
}
[/block]
- Also works on Amazon devices, set the group key listed under the amazon settings as well.