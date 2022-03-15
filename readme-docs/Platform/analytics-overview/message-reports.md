---
title: "Delivery: Message Reports"
slug: "message-reports"
excerpt: "OneSignal Message delivery reports."
hidden: false
createdAt: "2021-09-21T21:06:40.313Z"
updatedAt: "2021-09-22T00:59:53.700Z"
---
Within Delivery you can view your previously Sent and Scheduled Messages along with [Outcomes](doc:outcomes). Here you can view individual message stats and export shown messages to csv.
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
#Filter Messages

You can sort the listed messages using the following filter options. Select **Advanced Filters** to see all available options. When ready to filter, select **Search**. 

Use **Clear** to remove all filter options.

Clicking **Export** will email you a csv of all current messages shown in the list.
[block:parameters]
{
  "data": {
    "h-0": "Filter",
    "h-1": "Description",
    "0-0": "Source",
    "0-1": "Filter by messages sent through the Dashboard, API, Automated, or Test Messages.",
    "1-0": "Device Type",
    "1-1": "Filter messages sent to different channels or platforms.",
    "2-0": "Text Search",
    "2-1": "Search by message Content, Heading and name. Currently only available with Source: Dashboard Messages.",
    "3-0": "Start Date & End Date",
    "3-1": "Select a start date and end date to filter messages by. Filters based on \"Sent At\" date based on your current timezone."
  },
  "cols": 2,
  "rows": 4
}
[/block]
#Column Data
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
    "0-1": "Shows the message channel.",
    "1-1": "Contents or main body of the message.",
    "2-1": "The [Delivery Status](#delivery-status) of the message",
    "3-1": "Date the message began sending. Timezone is based on your device's operating system.",
    "4-1": "Quick stats on the Message Report.",
    "5-1": "How many devices the message was sent to. \n\nNote: [Automated Messages](doc:automated-messages) are sent out in batches of 10,000 notifications. This means if you are sending automated notifications to 36,000 users, you would see four distinct notifications - three with 10,000 users, and the fourth with 6,000 users.",
    "6-1": "Percentage of users that clicked on the message sent over successfully delivered.",
    "7-0": "Created By",
    "7-1": "Hover mouse over to see the email of the administrator that sent the notification. If sent from the API we do not track who sent it.",
    "8-0": "Actions",
    "8-1": "Current Options:\n- View the message report.\n- Duplicate a push notification to update and re-send (Dashboard Notifications Only).\n- Delete the message record (cannot be undone)."
  },
  "cols": 2,
  "rows": 9
}
[/block]

## Delivery Status
Delivery status gives feedback on whether the message was successfully delivered, in the process of being delivered, or some issue with delivery to the push, email or sms servers.
[block:parameters]
{
  "data": {
    "h-0": "Status",
    "h-1": "Description",
    "0-0": "Delivered",
    "0-1": "OneSignal has completed delivering the message to the push, email or sms servers.",
    "4-0": "Canceled",
    "4-1": "You or a team member with access to your app has cancelled the delivery of this notification.",
    "2-0": "Sending",
    "2-1": "Messages are currently sending",
    "1-0": "Queued",
    "1-1": "Messages are queued up in OneSignal and will be sent shortly",
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

[block:callout]
{
  "type": "warning",
  "title": "API Notification Data Retention Limit",
  "body": "Notifications sent from the OneSignal API or Automated Messages are only saved for about 30 days.\nYou can export notification data for your records through our API or Dashboard. See [Exporting Data](doc:exporting-data) for more details."
}
[/block]

----

# Outcomes

A cumulative graph of Outcomes over the past 30 days, 24 hours or 1 hour. More details in the [Outcomes](doc:outcomes) guide.
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

# FAQ

## Why do the Outcomes Stats Appear to be behind?

Currently our Outcome data is bucketed in 24 hour increments in UTC time.
﻿
When converting the UTC timestamp for example 2021-01-02T00:00Z to local time, it gives us 2021-01-02T16:00 in local time.

﻿This is truncated to 2021-01-02.

﻿Our dashboard shows the graphs based on your timezone, so due to this truncation it will show behind (or ahead) based on how far behind (or ahead) your timezone is.