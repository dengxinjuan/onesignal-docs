---
title: "Zapier"
slug: "zapier"
excerpt: "Integrating OneSignal with Zapier"
hidden: false
createdAt: "2016-09-02T02:22:46.728Z"
updatedAt: "2021-03-16T20:40:09.730Z"
---
OneSignal integrates with [Zapier](https://zapier.com/zapbook/onesignal/) to automate manual tasks like sending out notifications or sharing sent notifications with the team—without any code. Connect OneSignal to 3,000+ other apps with workflows called Zaps and you can fire off notifications when you tweet, post on your blog, add a row to your spreadsheet, and more. 
[block:html]
{
  "html": "<script src=\"https://zapier.com/apps/embed/widget.js?services=onesignal\"></script>\n"
}
[/block]


You can create automations from scratch on [Zapier](https://zapier.com/zapbook/onesignal/), or try one of these examples to get started right now:

## Trigger a Scheduled Recurring Notification

### 1. Select the Zap Trigger

This example uses the Schedule by Zapier Trigger. Select how often you would like to send this message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d435e8c-Screen_Shot_2021-02-12_at_11.02.16_AM.png",
        "Screen Shot 2021-02-12 at 11.02.16 AM.png",
        1810,
        1454,
        "#f4f5f6"
      ]
    }
  ]
}
[/block]
### 2. Select the Trigger Options Associated

The Schedule by Zapier Trigger allows setting "Day Of the Week" and "Time of Day".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7946ed9-Screen_Shot_2021-02-12_at_11.06.58_AM.png",
        "Screen Shot 2021-02-12 at 11.06.58 AM.png",
        1810,
        1392,
        "#e9eef6"
      ]
    }
  ]
}
[/block]
### 3. Select the OneSignal Action

You get the choice to do 2 types of notifications:



[block:parameters]
{
  "data": {
    "h-0": "Action Event",
    "h-1": "Description",
    "0-0": "Send Push Notification",
    "0-1": "Limited/Easier Push Data: \nMessage, Title, Launch URL, Send Time",
    "1-0": "Send Advanced Push Notification",
    "1-1": "All push notification options available."
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a74e58-Screen_Shot_2021-02-12_at_11.10.06_AM.png",
        "Screen Shot 2021-02-12 at 11.10.06 AM.png",
        1810,
        1114,
        "#f5f6f7"
      ]
    }
  ]
}
[/block]
### 4. Select your OneSignal Account

Select **Connect a new account** if you have not done so.

You will need your [OneSignal App ID and REST API Key](doc:accounts-and-keys) 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc0e68f-Screen_Shot_2021-02-12_at_11.13.25_AM.png",
        "Screen Shot 2021-02-12 at 11.13.25 AM.png",
        1810,
        1130,
        "#f4f5f7"
      ]
    }
  ]
}
[/block]
### 5. Setup OneSignal Notification

There are a log of settings depending on the push type selected. Details on all of them in [Sending Push Messages](doc:sending-notifications).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/334b841-Screen_Shot_2021-02-12_at_11.16.44_AM.png",
        "Screen Shot 2021-02-12 at 11.16.44 AM.png",
        1810,
        1468,
        "#e8edf5"
      ]
    }
  ]
}
[/block]
### 6. Test the message

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/943b29c-Screen_Shot_2021-02-12_at_11.18.17_AM.png",
        "Screen Shot 2021-02-12 at 11.18.17 AM.png",
        1810,
        1442,
        "#f7f6f4"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Your Done!",
  "body": "You can add more zaps as you need!"
}
[/block]

----

# FAQ

## Can I add a template to a Zap?

Yes you can! 

First create a template in your OneSignal Dashboard. See our [Templates](doc:templates) section for more details on templates.

Inside Zapier on your OneSignal Action. Under "Send Push Notification" choose "Send Advanced Push Notification"

Continue to "Set Up Template" step and find the "Template ID" section.

You can find the Template ID inside your OneSignal.com Dashboard > Templates > Click the Template you want to use and the ID is the last set of numbers after the last / in the URL.

For example: 

When you are viewing your template, your URL will look like this:

`https://onesignal.com/apps/3beb3078-e0f1-4629-af17-fde833b9f716/templates/589b29b0-e107-4c6b-a60d-951416eb3b9a`

In this case, the Template ID is: `589b29b0-e107-4c6b-a60d-951416eb3b9a`

## Can I override the template if I add other data to the fields in my Zap?

Yes you will. All data that you enter into the Zap will override any data you added to your Template.
So if you added a message to your template and to your Zap. The Zap message will override the Template message, meaning you will not see the message on your Template.

## How do I set Timezone and Intelligent Delivery options in Zapier?

First make sure you selected "Send Advanced Push Notification" on [step 2 above](docs:zapier#section-2-set-up-this-step)

Then on the "Edit Template" section of Zapier, find "Scheduling Per-User Delay Option"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/941d4da-Screen_Shot_2018-02-28_at_11.35.51_AM.png",
        "Screen Shot 2018-02-28 at 11.35.51 AM.png",
        765,
        305,
        "#f5f4f3"
      ]
    }
  ]
}
[/block]
 - Immediate means at the time you specify to everyone
 - Timezone will only send during each device's timezone
 - Last-Active is the same as [Intelligent Delivery](doc:intelligent-delivery)