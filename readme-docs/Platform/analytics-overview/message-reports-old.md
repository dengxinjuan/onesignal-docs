---
title: "Message Reports-old"
slug: "message-reports-old"
excerpt: "OneSignal Notification delivery and statistics"
hidden: true
createdAt: "2021-09-21T23:04:49.885Z"
updatedAt: "2021-09-21T23:04:49.885Z"
---
Within Delivery you can view your previously Sent and Scheduled Messages. Here you can view individual message stats and export shown messages to csv.

You can sort this list by "Source" like all messages sent through the Dashboard, API, or Automated and even sort by "Device Type" like Android vs iOS vs Web browsers. Advanced Filtering allows you to filter by a time period and content.
[block:callout]
{
  "type": "warning",
  "title": "API Notification Data Retention Limit",
  "body": "Notifications sent from the OneSignal API or Automated Messages are only saved for about 30 days.\nYou can export notification data for your records through our API or Dashboard. See [Exporting Data](doc:exporting-data) for more details."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/defb869-Screen_Shot_2021-02-18_at_5.58.22_PM.png",
        "Screen Shot 2021-02-18 at 5.58.22 PM.png",
        2344,
        1490,
        "#e5e8e9"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
What each column means:
[block:parameters]
{
  "data": {
    "h-0": "Column",
    "h-1": "Description",
    "0-0": "Type",
    "1-0": "Message",
    "2-0": "Status",
    "3-0": "Sent At",
    "4-0": "Delivery",
    "5-0": "Sent",
    "6-0": "Clicked",
    "0-1": "Shows whether message was a push notification or email",
    "1-1": "Contents or main body of the message.",
    "2-1": "The [Delivery Status](#delivery-status) of the message",
    "3-1": "Date the message began sending. Timezone is based on your device's operating system.",
    "4-1": "Quick stats on the [Message Report](#message-report).",
    "5-1": "How many devices the message was sent to. \n\nNote: [Automated Messages](doc:automated-messages) are sent out in batches of 10,000 notifications. This means if you are sending automated notifications to 36,000 users, you would see four distinct notifications - three with 10,000 users, and the fourth with 6,000 users.",
    "6-1": "Percentage of users that clicked on the message sent over successfully delivered.",
    "7-0": "Created By",
    "7-1": "Hover mouse over to see the email of the administrator that sent the notification. If sent from the API we do not track who sent it.",
    "8-0": "Actions",
    "8-1": "Current Options:\n- View the notification\n- Duplicate a notification to update and re-send (Dashboard Notifications Only)\n- Delete the notification record (cannot be undone)"
  },
  "cols": 2,
  "rows": 9
}
[/block]

### Delivery Status
Delivery status gives you feedback on whether the message was successfully delivered to the Google, Apple, Microsoft, Mozilla, etc. servers or is in the process of being delivered or whether there were problems during delivery.

#### Push Notifications
[block:parameters]
{
  "data": {
    "h-0": "Status",
    "h-1": "Description",
    "0-0": "Delivered",
    "0-1": "OneSignal has completed sending notifications to Google, Apple, Microsoft, etc push servers.",
    "4-0": "Canceled",
    "4-1": "You or a team member with access to your app has cancelled the delivery of this notification.",
    "2-0": "Sending",
    "2-1": "Notifications are currently sending",
    "1-0": "Queued",
    "1-1": "Notifications are queued up in OneSignal and will be sent shortly",
    "3-0": "Scheduled",
    "3-1": "Notifications are scheduled to be delivered at the time based on Intelligent Delivery or Timezone option. They should be finished sending within 24 hours.",
    "5-0": "No Recipients",
    "5-1": "Recipients are no longer subscribed or no longer fit in the Segment when it was originally scheduled",
    "6-0": "Failed",
    "6-1": "Devices did not receive the notification. Details see [Failed Notifications](#what-does-failed-notifications-mean)"
  },
  "cols": 2,
  "rows": 7
}
[/block]

#### Email Messages
[block:parameters]
{
  "data": {
    "0-0": "Delivered",
    "6-0": "Spam",
    "5-0": "Bounce",
    "7-0": "Delay",
    "3-0": "Failed (Unsubscribed)",
    "8-0": "Drop",
    "0-1": "The user has received the email.",
    "3-1": "The user has unsubscribed after receiving your email.",
    "5-1": "The user's email server rejects the message, or sends the message back to your email service provider, due to an issue with the recipient address.",
    "6-1": "The user has marked your email as spam.",
    "7-1": "The delivery of the email has been delayed, it may successfully get delivered later.",
    "8-1": "The email service provider has dropped an email due to repeated bounces, spam reports, etc. Messages will no longer be sent to this address.",
    "h-0": "Status",
    "h-1": "Description",
    "1-0": "Clicks",
    "1-1": "Number of times an email click event is sent to OneSignal from the Email Service Provider.",
    "2-0": "Click-Through-Rate (unique)",
    "2-1": "Number of unique email click events sent to OS from the ESP.",
    "4-0": "Failed (errored)",
    "4-1": "Usually caused by emails sent to invalid email addresses. More details in your ESPs activity."
  },
  "cols": 2,
  "rows": 9
}
[/block]
#### SMS

OneSignal provides two categories of SMS delivery statistics for more transparency and a better understanding of where the SMS is in the delivery pipeline.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd9300f-Screen_Shot_2020-12-01_at_8.45.27_PM.png",
        "Screen Shot 2020-12-01 at 8.45.27 PM.png",
        2338,
        1228,
        "#e6f0ea"
      ],
      "border": true
    }
  ]
}
[/block]
**OneSignal Delivery Statistics:** (OneSignal to Twilio)
This includes 
  * total number of messages you tried to send from OneSignal
  * number of messages successfully sent from OneSignal to Twilio
  * messages that failed to be delivered to Twilio or Twilio rejected those messages for reasons that might include incorrect phone number format, unsubscribed phone number, etc.
  * remaining or still in the queue on OneSignal

**Twilio Delivery Statistics: ** (Twilio to End-User )
A message can be in the following states once OneSignal successfully delivers messages to Twilio.
  * Delivered: Twilio received confirmation from the carrier that the message has been delivered.
  * Failed Undelivered: Twilio sent these SMS but the message could not be delivered. 
  * Failed Errored: Twilio could not send the message because of various reasons. 
  * Remaining: Twilio has received the message request from OneSignal and these messages are queued to be sent out.

You can check the specific error details on [Twilio SMS Logs](https://www.twilio.com/console/sms/logs).

SMS doesn’t have [Outcomes](doc:outcomes) data associated with it since we can not capture the opened, read, etc. states for SMS messages.

----

## Message Report

Clicking on a notification within the Sent Messages page opens the message report. This page shows the results of sending a notification. 

You can find the Notification Id in the URL of this page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbf75bc-Screen_Shot_2020-01-03_at_9.51.18_AM.png",
        "Screen Shot 2020-01-03 at 9.51.18 AM.png",
        947,
        1083,
        "#e7edef"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
### Message Report Definitions 
The following are what each term here means:
[block:parameters]
{
  "data": {
    "0-0": "**Total Users**",
    "1-0": "**Total Messages**",
    "1-1": "The number of messages that OneSignal attempted to send",
    "0-1": "The number of users that the message was sent to",
    "h-1": "Description",
    "h-0": "Metric"
  },
  "cols": 2,
  "rows": 2
}
[/block]
#### Push Notifications
[block:parameters]
{
  "data": {
    "h-0": "Status",
    "h-1": "Description",
    "0-0": "Delivered",
    "3-0": "Invalid",
    "0-1": "The number of notifications successfully sent to Google, Apple, Microsoft, etc server. *This does not necessarily mean the devices have received these notifications.*",
    "3-1": "These errors are typically caused due to one of the following reasons:\n<p>- Your OneSignal Application Settings are incorrect.\n- These tokens belong to an app that does not match your OneSignal settings.\n- Some other backend error occured.\n</p>",
    "2-0": "Clicked",
    "2-1": "The number of clicks / taps on the push notification or email sent",
    "1-0": "Pending",
    "1-1": "The number of notifications that are pending delivery, but not yet delivered"
  },
  "cols": 2,
  "rows": 4
}
[/block]
#### Email Messages
[block:parameters]
{
  "data": {
    "0-0": "Delivered",
    "3-0": "Spam",
    "2-0": "Bounce",
    "4-0": "Delay",
    "1-0": "Unsubscribe",
    "5-0": "Drop",
    "0-1": "The user has received the email.",
    "1-1": "The user has unsubscribed after receiving your email.",
    "2-1": "The user's email server rejects the message, or sends the message back to your email service provider, due to an issue with the recipient address.",
    "3-1": "The user has marked your email as spam.",
    "4-1": "The delivery of the email has been delayed, it may successfully get delivered later.",
    "5-1": "The email service provider has dropped an email due to repeated bounces, spam reports, etc. Messages will no longer be sent to this address.",
    "h-0": "Status",
    "h-1": "Description",
    "6-0": "Open Rate",
    "7-0": "Clickthrough Rate",
    "6-1": "The number of unique email open events reported by the ESP out of the total delivered.",
    "7-1": "The number of unique email click events reported by the ESP out of the total delivered."
  },
  "cols": 2,
  "rows": 8
}
[/block]

----

## Outcomes

A cumulative graph of all [Outcomes](doc:outcomes) over the past 30 days, 24 hours or 1 hour. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6dd5ef9-Screen_Recording_2019-11-21_at_06.49_PM.gif",
        "Screen Recording 2019-11-21 at 06.49 PM.gif",
        1251,
        662,
        "#e9ecec"
      ]
    }
  ]
}
[/block]
You can toggle the graph by **Platform** and **Attribution**.
[block:parameters]
{
  "data": {
    "0-0": "**DIRECT**",
    "0-1": "The Outcome happened during a session that was created due to a clicked push.",
    "h-0": "Attribution",
    "h-1": "Description",
    "1-0": "**INFLUENCED**",
    "1-1": "The Outcome was registered within the [Attribution Window (default 24 hours)](#section-influenced-opens) of the push but didn’t occur during a session directly initiated from a push.\n\n**Note:** Only the 10 most recently sent notifications (per device) get influenced attribution",
    "2-0": "**UNATTRIBUTED**",
    "2-1": "The Outcome did not occur within a session started from a push click and did not occur during within the [Attribution Window (default 24 hours)](#section-influenced-opens) of a push.",
    "3-0": "**TOTAL**",
    "3-1": "The Total (Direct + Influenced + Unattributed)"
  },
  "cols": 2,
  "rows": 4
}
[/block]

You can add and remove Outcomes from the graph/chart and export the data.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d4c439-Screen_Shot_2019-11-22_at_9.35.58_AM.png",
        "Screen Shot 2019-11-22 at 9.35.58 AM.png",
        1196,
        492,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
----

## FAQ

### What does Failed Notifications mean?

There are 2 types of Failed Notifications.

####1. Failed (Unsubscribed)

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
  "body": "Apple changed the way it reports unsubscribe events on iOS apps.\n\nIn the past, they would report the unsubscribed device upon the 2nd notification. They stopped doing this for privacy reasons. Apple intentionally does not want token invalidation to be used as a method to detect app uninstall.\n\nSome details provided by Apple can be found here: https://forums.developer.apple.com/thread/116445\n\nCurrently if a device unsubscribes and opens the app, we detect this right away through our SDK. However if the device uninstalls the app or unsubscribes and does not open the app, it may take several weeks for Apple to report the device unsubscribe event.\n\nIf you need to remove older devices, you can [delete them using our dashboard](https://documentation.onesignal.com/docs/delete-users) or you can use the API Delete Call."
}
[/block]
####2. Failed (Error)

**Web Push** - Failed (Error) generally happens when you change one of the following:
- the domain of your site or adding the same domain to another app ID
- the notification data exceeds 4kb
- there was a temporary issue with the Google Servers

**Mobile Apps** -  Failed (Error) means the FCM sender id on Android or the Bundle ID on iOS have changed from what these devices originally subscribed under. You will need to put the original version to what the users subscribed under to fix this.

Please contact [support@onesignal.com](emailto:support@onesignal.com) with your OneSignal App ID and all the major changes you made to your site.

#### Which Email Service Providers support which statistics?

Not all email service providers provide the full range of possible email statistics.
[block:parameters]
{
  "data": {
    "0-0": "Sendgrid",
    "h-0": "ESP",
    "h-1": "Unsubscribe",
    "h-2": "Bounce",
    "h-3": "Spam",
    "h-4": "Invalid",
    "h-5": "Drop",
    "0-1": "[Yes](https://sendgrid.com/docs/User_Guide/Suppressions/global_unsubscribes.html)",
    "0-2": "[Yes](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html)",
    "0-3": "[Yes](https://sendgrid.com/docs/User_Guide/Suppressions/spam_reports.html)",
    "0-4": "[Yes](https://sendgrid.com/docs/User_Guide/Suppressions/invalid_emails.html)",
    "0-5": "[Yes](https://sendgrid.com/docs/Glossary/drops.html)",
    "1-0": "Mailgun",
    "2-0": "Mandrill",
    "h-6": "Block",
    "0-6": "[Yes](https://sendgrid.com/docs/User_Guide/Suppressions/blocks.html)",
    "h-7": "",
    "0-7": "",
    "1-1": "[Yes](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-unsubscribes)",
    "2-1": "Yes",
    "1-2": "[Yes](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-bounces)",
    "1-3": "[Yes](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-spam-complaints)",
    "1-5": "[Yes](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-failures)",
    "1-7": "",
    "1-4": "Yes ([bounce](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-bounces))",
    "2-3": "Yes",
    "2-2": "Yes"
  },
  "cols": 7,
  "rows": 3
}
[/block]

### How do you handle suppressions like blocks, spam reports, etc?

Because OneSignal is just acting as a relay to your email service provider, we rely on the email service provider to handle communications with email servers to determine if emails are working. When an email is no longer considered working, it is **suppressed** by the email service provider, and will no longer send. Each email service provider has slightly different logic to determine suppressions - for instance, how many emails an email address must receive that bounce before being suppressed.

### Do users receive web push notifications when the browser isn't running?

More details in our [Browser Behavior Guide](doc:browser-behavior).

### Why do the Outcomes Stats Appear to be behind?

Currently our Outcome data is bucketed in 24 hour increments in UTC time.
﻿
When converting the UTC timestamp for example 2021-01-02T00:00Z to local time, it gives us 2021-01-02T16:00 in local time.

﻿This is truncated to 2021-01-02.

﻿Our dashboard shows the graphs based on your timezone, so due to this truncation it will show behind (or ahead) based on how far behind (or ahead) your timezone is.