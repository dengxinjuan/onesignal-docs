---
title: "Automated Messages"
slug: "automated-messages"
excerpt: "Send Automated Push and Email Message Campaigns"
hidden: false
createdAt: "2016-12-30T16:53:21.988Z"
updatedAt: "2021-12-14T17:20:30.398Z"
---
Automated Messages are push notifications and emails that get sent to users that enter into Segments. They are commonly used for drip campaigns like re-engaging inactive users or welcoming new users or events like congratulating players on reaching a certain level.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/XBFNOe84x74\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

#Creating automated message campaigns

Before creating an automated message, you need to setup a 2 things:
1. <a href="doc:templates" target="_blank">Templates</a> which are reusable messages to send
2. <a href="doc:segmentation" target="_blank">Segments</a> which are devices eligible to receive your automated message

When a device enters into the segment, it will be sent the template.

### Example Segment

The default segment **Inactive Users** has filter "Last Session greater than 168 hours". A device will enter this segment after 168 hours (1 week) has passed if they have not returned to your app or website. When they do return to your app/site, their "Last Session" will change to the current date and be automatically removed from the segment until 168 hours of inactivity passes again.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d9e52f-Screen_Shot_2020-10-20_at_7.46.45_PM.png",
        "Screen Shot 2020-10-20 at 7.46.45 PM.png",
        1155,
        746,
        "#e8e7e9"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
### Example Template

In **Messages > Templates** select **New Push Template**

Name the Template `Inactive Users`

Here we setup the message we want to send after the user has not been back after a week. Examples:
- small discounts $5 or 10% off goes a long way!
- popular articles that got many clicks/views
- "did you know you can do this..." feature information

Title: `10% off your next purchase :scream:`
Message: `Use REDEEM10 for 10% off your next purchase, why wouldn't you?!`
Images are highly recommended!
Launch URL: upon click, I add the discount through a query string in the URL

Press **Save** at the bottom
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2e690ed-Screen_Shot_2020-10-20_at_8.14.30_PM.png",
        "Screen Shot 2020-10-20 at 8.14.30 PM.png",
        900,
        944,
        "#e5e5e5"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#Setup the Automated Message

In **Messages > Automated** select **New Automated Push**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa22b1e-Screen_Shot_2020-10-20_at_8.19.17_PM.png",
        "Screen Shot 2020-10-20 at 8.19.17 PM.png",
        1175,
        338,
        "#d3d6da"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Name your Automated Message Campaign something recognizable. This lets you identify the automated message among others. **Pro tip**: name the segment, automated message and template the same thing to easily associate all 3.

To continue our previous example, let's use `Inactive Users`.

##Step 1. Audience

The segment(s) of devices that are eligible to receive the message. The number of devices is dynamic. Over time, as devices enter the selected segment(s) they will be able to get the Automated Message. 

If multiple segments used, devices will not get duplicate messages if in multiple segments.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1335fa2-Screen_Shot_2020-10-20_at_8.26.11_PM.png",
        "Screen Shot 2020-10-20 at 8.26.11 PM.png",
        1168,
        612,
        "#e6e8ea"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
##Step 2. Message

Select the Message Template you would like to send. We suggest dedicating one template per Automated Message. Also, name the template something recognizable for the automated message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1074832-Screen_Shot_2020-10-20_at_8.29.47_PM.png",
        "Screen Shot 2020-10-20 at 8.29.47 PM.png",
        1065,
        753,
        "#edeceb"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
##Step 3. Delivery Schedule

Select when the message should start being sent. 
[block:parameters]
{
  "data": {
    "h-0": "Delivery Options",
    "h-1": "Push Notifications",
    "h-2": "Email",
    "0-0": "**Immediately** sends the message soon after the user joins the segment.",
    "0-1": "On the free plan, this may take several hours.\n\n<a href=\"https://onesignal.com/pricing\" target=\"_blank\">App's on Paid Plan</a> get automated messages sent within a few minutes.",
    "0-2": "Only Option.",
    "1-0": "**Intelligent delivery (recommended)** sends the notification personalized based on each user's activity",
    "1-1": "May take 24 hours to send based on user's behavior.",
    "1-2": "Not available.",
    "2-0": "**Custom time per user time zone** sends the notification at the specified timezone.",
    "2-1": "Recommended for time-sensitive notifications.\n<a href=\"https://onesignal.com/pricing\" target=\"_blank\">Paid Plan Required</a>",
    "2-2": "Not available."
  },
  "cols": 3,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Intelligent Delivery May Take 24 Hours",
  "body": "Make sure the segment used will contain users for at least a 24 hour period when using \"First Session\" and \"Last Session\" filters.\n\nExamples: \n\"Last Session > 24 hours AND Last Session < 48 hours\"\n\"First Session < 24 hours\""
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Re-triggering Default Behavior",
  "body": "By default, Automated Messages will only be sent to a device 1 time. Even if the user leaves a segment and returns to it."
}
[/block]
## Deliver to users more than once?

Set how often you want to deliver this message to the same device if still within the segment.

If no option are selected, the device will only get the message 1 time. If a device is in the included segment and excluded segment, then leaves the excluded segment but is still in the included segment, they will get the message.

### If the user returns to the app
[block:parameters]
{
  "data": {
    "h-0": "Push Notifications",
    "h-1": "Email",
    "h-2": "",
    "0-0": "Device will get the notification again after returning to the app or website AND are still included within the segment.",
    "0-1": "The email will be sent again after the user's \"last active\" time is updated via the SDK `setEmail` method or Server API [Edit device](ref:edit-device) AND are still included within the segment.",
    "0-2": ""
  },
  "cols": 2,
  "rows": 1
}
[/block]
### After a certain amount of time
[block:parameters]
{
  "data": {
    "h-0": "Push Notifications",
    "h-1": "Email",
    "0-0": "Device will get the notification again after X hours/days/weeks have passed AND are still included within the segment.",
    "0-1": "The user will get the email again after X hours/days/weeks have passed AND are still within the segment."
  },
  "cols": 2,
  "rows": 1
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "OR Logic for Re-Delivery",
  "body": "These options are not dependent on each other.\nIf you select both, then the automated message will resend each time one of the options triggers and the user is still in the segment."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f0a5fd-Screen_Shot_2020-10-20_at_8.41.39_PM.png",
        "Screen Shot 2020-10-20 at 8.41.39 PM.png",
        1065,
        372,
        "#f8f9fb"
      ],
      "caption": "In this example, the push or email will be sent when the user is most likely going to be online to receive it and resent again IF:\n\nThe user returns to the site/app\nAND they are still in the segment\nOR\nAfter 4 weeks have passed AND they are still in the segment."
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Free Plan Limitations",
  "body": "Automated Messages get sent roughly every 4-6 hours and do not include timezone optimizations.\n\n[Paid Plan Users](https://onesignal.com/pricing) get automated messages sent within a few minutes and access to timezone delivery."
}
[/block]

# Testing Automated Messages

For testing the copy of your automated message, head over to your templates tab > click on the action bar for the selected message  > click new message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee09333-Screen_Shot_2021-07-23_at_12.52.59_PM.png",
        "Screen Shot 2021-07-23 at 12.52.59 PM.png",
        1442,
        548,
        "#ebeef1"
      ]
    }
  ]
}
[/block]
This will open up a message window with the selected template and allow you to send a one-time test to your test devices to check the copy on your device.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8432525-Screen_Shot_2021-07-23_at_12.55.11_PM.png",
        "Screen Shot 2021-07-23 at 12.55.11 PM.png",
        1882,
        936,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]



----

# FAQ

## Why are my Automated Messages not sending?

Push users who have not been active for over 3 months will be excluded from all automated notifications.

If the segment for the automated message uses "First Session" or "Last Session" filters, make sure the timeframe is:
1. longer than 24 hours if using "Intelligent delivery"
2. longer than 8 hours if using "Immediate" delivery on a Free Account 

## How to track performance of Automated Messages?

You can [track the message's lifetime performance](doc:templates#using-templates-to-track-performance-of-recurring-messages) from [Templates](doc:templates). The [Delivery](doc:notification-delivery) page tracks individual Automated Message stats and are only saved for around 30 days.

## How are automated messages sent out?

Automated messages are sent out in batches of 10,000 messages. This means if you are sending automated messages to 36,000 users, you would see four distinct notifications in [Message Reports](doc:notification-delivery) - three with 10,000 users, and the fourth with 6,000 users.

If you want to schedule recurring notifications for an exact time, please see our [Zapier integration docs](doc:zapier).

----

# Example Automated Message Campaigns

Please see our [Abandoned Cart](doc:abandoned-cart) guide for more details and examples on how to set that up.

In all examples, make sure to setup a template with emojis and/or bright and catchy images and icons to help entice the user to click and come back.

## Re-engagement Campaigns

Continuing the first example re-engagement campaigns, let's setup 2 more to help further get the user back to the site:
[block:parameters]
{
  "data": {
    "0-0": "Inactive 10 days",
    "1-0": "Inactive 20 days",
    "0-1": "Last Session is greater than 240 hours ago\nAND\nLast Session is less than 264 hours ago",
    "h-0": "Automated Message",
    "h-1": "Segment Filters",
    "1-1": "Last Session is greater than 480 hours ago\nAND\nLast Session is less than 504 hours ago"
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Upper Segment Limits",
  "body": "Adding the upper segment limits help transition the user in and out of the segment."
}
[/block]

For "Inactive 10 days" and "Inactive 20 days" automated messages, use the "Intelligent Delivery" option and select the option under "Deliver to users more than once?" to be **If the user returns to the app**.
This will make sure to repeat the flow if the user becomes inactive for 10 days or 20 days again in the future.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5e96ad4-Screen_Shot_2020-10-02_at_8.32.34_AM.png",
        "Screen Shot 2020-10-02 at 8.32.34 AM.png",
        1057,
        338,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]
## Welcome Campaign
OneSignal does provide [Web Push Welcome Notifications](doc:web-push-custom-code-examples#welcome-notifications) but these are limited in that they don't work for mobile apps and you cannot add different languages or customize the push notification beyond title and message.

If you want to send a welcome notification along with a stream of notifications to get users introduced to your app or site, you can follow this guide to get started:

#### Welcome Campaign Planning
Think about the main points you want your users to know about your app or site. For example, if you are an ecommerce site, think about what type of product categories you want to introduce to your users or neat things you can do on that may not be obvious.

Once you decide how many welcome notifications you want to send in a row, you can decide how you want to space them. We suggest sending 3 total welcome notifications spaced out on days 1, 2 and 4 (skipping day 3).

Setup your segments as follows:
[block:parameters]
{
  "data": {
    "h-0": "Automated Message",
    "h-1": "Segment Used",
    "0-0": "Welcome 1 Day 1",
    "0-1": "First Session is less than 24 hours\nAND\nFirst Session is greater than 2 hours",
    "1-0": "Welcome 2 Day 3",
    "1-1": "First Session is less than 96 hours \nAND\nFirst Session is greater than 72 hours",
    "2-0": "Welcome 3 Day 5",
    "2-1": "First Session is less than 144 hours\nAND\nFirst Session is greater than 120 hours"
  },
  "cols": 2,
  "rows": 3
}
[/block]
On all 3 campaigns, your "Delivery" and "Deliver only once to a user, unless" options should be blank or not selected since you don't want to re-send these notifications.

### Example Welcome Campaign Ideas
1. Discount Codes. Even 5% will be a great way to hook users into coming back and keeping an eye out for your notifications.
2. Educational pieces on common or helpful features customers may not be aware of. 
3. Blog posts or documentation links.