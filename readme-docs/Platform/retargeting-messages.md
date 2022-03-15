---
title: "Retargeting Messages"
slug: "retargeting-messages"
excerpt: "Send messages to users based on previous interactions."
hidden: true
createdAt: "2021-09-01T18:25:04.628Z"
updatedAt: "2021-09-03T17:58:58.501Z"
---
Sending messages is just the first step in your customer engagement journey. How you follow up with users based on their interactions with those messages is the key to happy long-term relationships. 

OneSignal provides notification retargeting based on user interactions or lack thereof. When you send a notification through OneSignal, you can return to the OneSignal Dashboard and retarget the users that [performed any of the following actions based on that message](https://documentation.onesignal.com/docs/retargeting#selecting-the-users-for-retargeting).

Retargeting is a [Paid Plan Feature](https://onesignal.com/pricing) on the Pro and Enterprise plans.
[block:callout]
{
  "type": "warning",
  "title": "Retargeting Support for Email",
  "body": "Currently, Retargeting is supported on Push Notifications and SMS. \nCross-channel retargeting between these two channels is also supported. eg. send an SMS to all the users who did not click on the push notification.\n\n\n**Coming Soon**: Email and cross-channel retargeting between Email and other channels \ne.g send an email to users that did not click the push notification."
}
[/block]

# Retargeting Steps

## Selecting the main notification for retargeting
In **Messages** or **Delivery**, select a message for which you want to retarget the users.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc90250-Screen_Shot_2021-03-25_at_7.38.09_PM.png",
        "Screen Shot 2021-03-25 at 7.38.09 PM.png",
        2520,
        970,
        "#dbdee1"
      ]
    }
  ]
}
[/block]
In the top-right of the message, select **Retarget**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c296041-Screen_Shot_2021-05-05_at_6.08.09_PM.png",
        "Screen Shot 2021-05-05 at 6.08.09 PM.png",
        2376,
        490,
        "#cfd3d6"
      ]
    }
  ]
}
[/block]
Or scroll down to the *Audience Activity Panel* 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/31b199b-audience_panel.png",
        "audience panel.png",
        1164,
        907,
        "#e3e9eb"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
## Selecting the users for retargeting
Select the users you want to retarget based on their actions on the main notification. 

**Push Notification**: Following user actions are available for retargeting on the push notification.
[block:parameters]
{
  "data": {
    "h-0": "Action",
    "h-1": "Details",
    "0-0": "Clicked this message",
    "1-0": "Did not click this message",
    "0-1": "Pressed on the notification that opened the app or website",
    "1-1": "Did not press the notification resulting in opening the app or website",
    "2-0": "[Confirmed delivery](doc:confirmed-deliveries) of this message",
    "2-1": "The device confirmed receiving the notification.",
    "3-0": "Did not confirm delivery of this message",
    "3-1": "The device could not confirm receiving the notification.\nNote: There are [scenarios in which a device might not be able to send](https://documentation.onesignal.com/docs/confirmed-deliveries#how-can-i-increase-confirmed-deliveries) the confirmed delivery receipt. This doesn't mean the notification was not delivered or clicked.",
    "4-0": "Sent this message",
    "4-1": "The notification was sent to the device"
  },
  "cols": 2,
  "rows": 5
}
[/block]
**SMS**: Following user actions are available for retargeting on an SMS.

[block:parameters]
{
  "data": {
    "h-0": "Action",
    "h-1": "Details",
    "2-1": "Twilio tried to send the SMS to these subscribers.",
    "2-0": "Sent",
    "0-0": "Delivered",
    "1-0": "Not Delivered",
    "0-1": "Twilio received confirmation from the carrier that the message has been delivered.",
    "1-1": "Twilio could not send the message or sent these SMS but the message could not be delivered."
  },
  "cols": 2,
  "rows": 3
}
[/block]
## Creating the retargeting message
**Select the messaging channel for the retargeting message**. Currently, following channel options are available for retargeting: 
- Push to Push retargeting
- SMS to SMS retargeting
- Push to SMS retargeting
- SMS to Push retargeting
[block:callout]
{
  "type": "info",
  "body": "For cross-channel retargeting (Push to SMS or SMS to Push), you need to add [External_User_ID](https://documentation.onesignal.com/docs/external-user-ids) to connect players across channels.",
  "title": "External_User_ID required for cross-channel retargeting"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c81cd5-channel_selection.png",
        "channel selection.png",
        1170,
        514,
        "#eceef0"
      ]
    }
  ]
}
[/block]
**Create and send your new push (or SMS) notification retargeting those users.**

*Note*: You cannot select a non-retarget segment or combine another segment with the "Retarget Users" segment.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad8fe56-Screen_Shot_2021-04-01_at_12.30.55_PM.png",
        "Screen Shot 2021-04-01 at 12.30.55 PM.png",
        1752,
        1062,
        "#f8f9fa"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
## Scheduling the retargeting message
Since notification event data (clicks, deliveries, sent, etc) is only available for 30 days, you can only schedule the retarget notification *30 days from the date of the original notification*.


# Retargeting FAQ

## When will this be available for other messaging channels?
Great question! This feature is coming soon to all channels. Please contact support if you need it sooner.

## Why don't I see my previously sent notifications?
If you sent the push through our API or Automated Message, it will have been deleted after around 30 days.

## Why can't I retarget my previously sent messages?
Messages created 30 days or older will not be available for retargeting.

If you were originally on a plan that did not have retargeting access, then upgraded to a plan that does support retargeting, those previously created messages cannot be used for retargeting. We only store message data from when you convert to the upgraded plan, not historic data.