---
title: "SMS Message Reports"
slug: "sms-message-reports"
excerpt: "OneSignal SMS delivery and statistics"
hidden: false
createdAt: "2021-09-21T23:08:09.305Z"
updatedAt: "2021-09-22T17:26:06.053Z"
---
When clicking an SMS report, you will see the high-level stats like how the message was created, when it started sending, how long it took to fully send and any throttling limits set.

Find SMS Message Delivery Stats within **Messages > SMS**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39ef56c-Screen_Shot_2021-09-21_at_4.17.57_PM.png",
        "Screen Shot 2021-09-21 at 4.17.57 PM.png",
        1760,
        594,
        "#d6d9db"
      ],
      "sizing": "80",
      "caption": "Image showing SMS delivery stat cards"
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
    "0-0": "Twilio Sent",
    "0-1": "Twilio has confirmed they have accepted the request and sent the message.",
    "h-0": "Statistic",
    "h-1": "Description",
    "1-0": "Twilio Delivered",
    "1-1": "Twilio has received confirmation of message delivery from the carrier.",
    "2-0": "Twilio Delivery Failed",
    "2-1": "Message could not be delivered by Twilio. This can happen for a number of reasons.\n\nFor Twilio trial accounts, recipient phone numbers need to be registered on Twilio before they can receive SMS."
  },
  "cols": 2,
  "rows": 3
}
[/block]

#OneSignal Delivery Statistics & Twilio Delivery Statistics
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b6c96f3-Screen_Shot_2021-09-21_at_4.24.28_PM.png",
        "Screen Shot 2021-09-21 at 4.24.28 PM.png",
        1760,
        548,
        "#d8e8de"
      ]
    }
  ]
}
[/block]
##OneSignal Delivery Statistics

Message stats based on sending through OneSignal to Twilio.
[block:parameters]
{
  "data": {
    "h-0": "Statistic",
    "h-1": "Description",
    "1-0": "Sent",
    "1-1": "Twilio has confirmed they have accepted the request and sent the message. *This does not necessarily mean the devices have received these messages.*",
    "2-0": "Failed to Send",
    "2-1": "Failed messages are typically caused by your Twilio settings being incorrect or some other backend error occurred.",
    "3-0": "Remaining",
    "3-1": "Typically the number of messages that are queued to be sent, or there was no response from the carrier.",
    "0-0": "Total Sent",
    "0-1": "The number of phone numbers targeted to be sent the message."
  },
  "cols": 2,
  "rows": 4
}
[/block]

##Twilio Delivery Statistics

Twilio's message stats.
[block:parameters]
{
  "data": {
    "h-0": "Statistic",
    "h-1": "Description",
    "0-0": "Total Sent",
    "0-1": "The number of phone numbers targeted to be sent the message.",
    "1-0": "Delivered",
    "1-1": "Twilio has received confirmation of message delivery from the carrier. *This does not necessarily mean the devices have received these messages.*",
    "2-0": "Failed (Undelivered)",
    "2-1": "Twilio could not deliver the message. <a href=\"https://twilio.com/console/sms/logs?from=17253003276&pageSize=50&status=UNDELIVERED\" target=\"_blank\">Check Twilio logs</a> for more details.",
    "3-0": "Failed (Errored)",
    "3-1": "Twilio encountered an error while trying to send the message. <a href=\"https://twilio.com/console/sms/logs?from=17253003276&pageSize=50&status=UNDELIVERED\" target=\"_blank\">Check Twilio logs</a> for more details.",
    "4-0": "Remaining",
    "4-1": "Typically the number of messages that are queued to be sent, or there was no response from the carrier."
  },
  "cols": 2,
  "rows": 5
}
[/block]
#Audience Activity

Audience Activity is the ability to send push or sms to devices based on interaction (or lack thereof) with the selected message. See [Retargeting Messages](doc:retargeting) for more details.

#Message Settings

The Message Settings is a visual of all data sent within the message including which segment or filters used to target and total number of recipients (number of users targeted).