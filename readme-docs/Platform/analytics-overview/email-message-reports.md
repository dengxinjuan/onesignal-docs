---
title: "Email Message Reports"
slug: "email-message-reports"
excerpt: "OneSignal Email delivery and statistics"
hidden: false
createdAt: "2021-09-21T21:05:40.985Z"
updatedAt: "2021-12-14T01:11:33.729Z"
---
When clicking an email report, you will see the high-level stats like how the message was created, when it started sending, how long it took to fully send and any throttling limits set.

Find Email Message Delivery Stats within **Delivery > Sent Messages**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edad52c-Screen_Shot_2021-09-21_at_3.42.18_PM.png",
        "Screen Shot 2021-09-21 at 3.42.18 PM.png",
        1800,
        510,
        "#cdd1d4"
      ],
      "sizing": "80",
      "caption": "Image showing snapshot view of realtime message data"
    }
  ]
}
[/block]
#Delivery Status
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
    "0-1": "How many messages were sent from OneSignal to the Email Service Provider.",
    "h-0": "Statistic",
    "h-1": "Description",
    "1-0": "Click-Through Rate",
    "1-1": "The rate of unique recipients to whom an email was delivered and who clicked through any link. \n\n**N/A** means link tracking was disabled for that message. More details in <a href=\"https://documentation.onesignal.com/docs/email-links-and-click-tracking\" target=\"_blank\">Email Links and Click Tracking</a>.",
    "2-0": "Open Rate",
    "2-1": "The rate of unique recipients who opened or looked at the email contents."
  },
  "cols": 2,
  "rows": 3
}
[/block]

#Delivery & Platform Statistics

Delivery & Platform statistics gives you feedback on how the message performed. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e86c65-Screen_Shot_2021-09-21_at_3.56.49_PM.png",
        "Screen Shot 2021-09-21 at 3.56.49 PM.png",
        1760,
        568,
        "#d5dfe2"
      ],
      "caption": "Image showing piecharts indicating delivery and platform statistics"
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
    "1-1": "The number of messages successfully sent to your Email Service Provider. *This does not necessarily mean the devices have received these messages.*",
    "3-0": "Failed (Unsubscribed)",
    "3-1": "The number of devices that unsubscribed from email.",
    "2-0": "Confirmed",
    "2-1": "The number of devices that successfully received the message. **Coming soon to email.** See <a href=\"doc:confirmed-deliveries\" target=\"_blank\">Confirmed Deliveries</a> for more details.",
    "4-0": "Failed (Errored)",
    "4-1": "The number of devices that did not get email due to an error.",
    "5-0": "Remaining",
    "5-1": "The number of devices that have not received the message yet.",
    "0-0": "Total Sent",
    "0-1": "The number of emails targeted to be sent the message."
  },
  "cols": 2,
  "rows": 6
}
[/block]
#Message Settings

The Message Settings is a visual of all data sent within the message including which segment or filters used to target and total number of recipients (number of users targeted).

----

#FAQ

## Which Email Service Providers support which statistics?

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

## How do you handle suppressions like blocks, spam reports, etc?

Because OneSignal is just acting as a relay to your email service provider, we rely on the email service provider to handle communications with email servers to determine if emails are working. When an email is no longer considered working, it is **suppressed** by the email service provider, and will no longer send. Each email service provider has slightly different logic to determine suppressions - for instance, how many emails an email address must receive that bounce before being suppressed.

##If an email is forwarded, do the click and open events get tracked?
No, anyone that forwards your emails to someone else whom opens and clicks a link does not get counted in the message report stats.