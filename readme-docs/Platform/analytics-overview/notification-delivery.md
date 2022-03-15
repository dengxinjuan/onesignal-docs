---
title: "Push Notification Message Reports"
slug: "notification-delivery"
excerpt: "OneSignal Push Notification delivery and statistics"
hidden: false
createdAt: "2016-09-02T02:30:29.471Z"
updatedAt: "2022-03-05T01:49:08.496Z"
---
When clicking a push notification report, you will see the high-level stats like how the message was created, when it started sending, how long it took to fully send and any throttling limits set.

You can find Push Notification Delivery Stats within **Delivery > Sent Messages**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cacdebf-Screen_Shot_2021-09-21_at_2.13.49_PM.png",
        "Screen Shot 2021-09-21 at 2.13.49 PM.png",
        1800,
        540,
        "#ced2d6"
      ],
      "sizing": "full",
      "caption": "Image showing cards for push notification statistics"
    }
  ]
}
[/block]
##Delivery Status
[block:parameters]
{
  "data": {
    "h-0": "Delivery Status",
    "h-1": "Description",
    "0-0": "Delivered",
    "0-1": "OneSignal has completed sending the message.",
    "4-0": "Canceled",
    "4-1": "You or a team member with access to your app has cancelled the delivery of this message.",
    "2-0": "Sending",
    "2-1": "Messages are currently sending.",
    "1-0": "Queued",
    "1-1": "Messages are queued up in OneSignal and will be sent shortly.",
    "3-0": "Scheduled",
    "3-1": "Messages are scheduled to be delivered at the time based on Intelligent Delivery or Timezone option. They should be finished sending within 24 hours.",
    "5-0": "No Recipients",
    "5-1": "Recipients are no longer subscribed or no longer fit in the Segment when it was originally scheduled.",
    "6-0": "Failed",
    "6-1": "The message failed to send."
  },
  "cols": 2,
  "rows": 7
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "API Message Data Retention Limit",
  "body": "Messages sent from the OneSignal API or Automated Messages are only saved for about 30 days.\nYou can export message data for your records through our API or Dashboard. See [Exporting Data](doc:exporting-data) for more details."
}
[/block]
##High-level Stats
[block:parameters]
{
  "data": {
    "0-0": "Delivered",
    "0-1": "How many messages were sent from OneSignal to the Push Servers (Google (FCM), Apple (APNS), Huawei (HMS), etc.).",
    "h-0": "Statistic",
    "h-1": "Description",
    "1-0": "Click-Through Rate",
    "1-1": "Number of messages clicked divided by Delivered * 100%.",
    "2-0": "Influenced Opens",
    "2-1": "Number of notifications confirmed received that were not clicked, but the app/site was visited shortly after. Depends on the Influenced Opens time period set within Settings > Analytics."
  },
  "cols": 2,
  "rows": 3
}
[/block]

#Outcomes Statistics

Graph over the last 30 days of how many clicks, sessions and other Outcomes set. See <a href="doc:outcomes" target="_blank">Outcomes</a> for more details.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b0640a-Screen_Shot_2021-09-21_at_2.22.35_PM.png",
        "Screen Shot 2021-09-21 at 2.22.35 PM.png",
        1800,
        1502,
        "#fafafb"
      ],
      "caption": "Image showing Outcome graph along with custom outcomes"
    }
  ]
}
[/block]
#Delivery & Platform Statistics

Delivery & Platform statistics gives you feedback on how the message performed. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/651bf79-Screen_Shot_2021-09-21_at_2.24.33_PM.png",
        "Screen Shot 2021-09-21 at 2.24.33 PM.png",
        1800,
        634,
        "#dae8ea"
      ],
      "caption": "Image showing delivery and platform statistics"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Statistic",
    "h-1": "Description",
    "1-0": "Delivered",
    "1-1": "The number of notifications successfully sent to Google, Apple, Microsoft, etc server. *This does not necessarily mean the devices have received these notifications.*",
    "3-0": "Failed (Unsubscribed)",
    "3-1": "The number of devices that unsubscribed from push notifications. See below [What are Failed Notifications?](#what-are-failed-notifications) for more details.",
    "6-0": "Capped",
    "6-1": "The number of notifications that were not sent due to your frequency capping settings. See <a href=\"doc:frequency-capping\" target=\"_blank\">Frequency Capping</a> for more details.",
    "2-0": "Confirmed",
    "2-1": "The number of devices that successfully received the notification. See <a href=\"doc:confirmed-deliveries\" target=\"_blank\">Confirmed Deliveries</a> for more details.",
    "4-0": "Failed (Errored)",
    "4-1": "The number of devices that did not get notifications due to an error. See below [What are Failed Notifications?](#what-are-failed-notifications) for more details.",
    "5-0": "Remaining",
    "5-1": "The number of devices that have not received the notification yet. These would be for notifications sent using Intelligent Delivery or Timezone optimizations.",
    "0-0": "Total Sent",
    "0-1": "The number of devices targeted to be sent the message."
  },
  "cols": 2,
  "rows": 7
}
[/block]

#Audience Activity

Audience Activity is the ability to send push or sms to devices based on interaction (or lack thereof) with the notification. See [Retargeting Messages](doc:retargeting) for more details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d8b04f2-Screen_Shot_2021-09-21_at_3.07.19_PM.png",
        "Screen Shot 2021-09-21 at 3.07.19 PM.png",
        1800,
        794,
        "#eceff1"
      ],
      "caption": "Image showing audience activity"
    }
  ]
}
[/block]
# Message Settings

The Message Settings is a visual of all data sent within the message including which segment or filters used to target and total number of recipients (number of users targeted).

----

# FAQ

## What are Failed Notifications?

There are 2 types of Failed Notifications.

###1. Failed (Unsubscribed)

This means the device has unsubscribed from receiving push notifications. 

For **Web Push** this can happen when the user has cleared their browser cookies or has opted-out of notifications from the browser settings.

For **Mobile Apps** this can happen when a subscribed device has either uninstalled your application or opted-out of notifications from the device settings.

For Android Mobile apps and Web, a device must receive at least two notifications to be detected as Failed (Unsubscribed). The first notification will appear to have been successfully delivered. The device must be turned on and have a network connection to silently reject this first notification. 

After this, future notifications will then return as Failed (Unsubscribed) .

Once a device has been detected as unsubscribed, it will be marked as unsubscribed and future notifications will not be sent to it unless it re-subscribes to notifications again.

Example:

- Notification 1 sent and user receives on device, then user unsubscribes.
- Notification 2 sent, the OneSignal Dashboard shows "Delivered" but the user does not actually receive it.
- Notification 3 sent, the OneSignal Dashboard shows Failed (Unsubscribed)
- Notification 4 will not be sent to that device.
[block:callout]
{
  "type": "warning",
  "title": "iOS Unsubscribe Detection",
  "body": "To protect user privacy, Apple doesn't want developers to know when a user removes the app. Some details provided by Apple can be found here: https://developer.apple.com/forums/thread/670868\n\nIf a device unsubscribes and opens the app, OneSignal detects this unsubscribe event right away and updates the record through our SDK. However if the device uninstalls the app or unsubscribes and does not open the app, it may take several weeks for Apple to report the unsubscribe event.\n\nApple will wait a random amount of time, typically over 14 days, before saying a device is unsubscribed. The unsubscribed detection requires at least two notifications to be sent to the app, after the app is uninstalled. This is in addition to the device being turned on and the required random number of days elapsing after the first notification.\n\nIf you need to remove older devices, you can [delete them using our dashboard or API](https://documentation.onesignal.com/docs/delete-users)."
}
[/block]
###2. Failed (Error)

**Web Push** - Failed (Error) generally happens when you change one of the following:
- the domain of your site or adding the same domain to another app ID
- the notification data exceeds 4kb
- there was a temporary issue with the Google Servers

**Mobile Apps** -  Failed (Error) means the FCM sender id on Android or the Bundle ID on iOS have changed from what these devices originally subscribed under. You will need to put the original version to what the users subscribed under to fix this.

Please contact [support@onesignal.com](emailto:support@onesignal.com) with your OneSignal App ID and all the major changes you made to your site.