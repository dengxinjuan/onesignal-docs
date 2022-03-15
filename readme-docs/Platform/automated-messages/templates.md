---
title: "Templates"
slug: "templates"
excerpt: "OneSignal Reusable Push Notification and Email Templates"
hidden: false
createdAt: "2016-09-02T02:19:42.518Z"
updatedAt: "2022-02-16T02:15:48.851Z"
---
Templates are reusable designs for push notifications and emails. They do support liquid syntax for [Message Personalization](doc:personalization).

The Templates page shows the list of templates you have created, and basic statistics on their performance (notifications opened and sent). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae4851c-Screen_Shot_2020-11-17_at_11.41.26_AM.png",
        "Screen Shot 2020-11-17 at 11.41.26 AM.png",
        1154,
        822,
        "#e5e7ea"
      ]
    }
  ]
}
[/block]
#Create Templates

To create a new template, click the **New Push Template** or **New Email Template** button. This brings you to a page identical to the Push or Email Creation page, but instead of sending a message, you are modifying options to create a template.

Templates may also be created by duplicating previous templates from the Templates page:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e06c6a8-Screen_Shot_2020-11-17_at_11.42.39_AM.png",
        "Screen Shot 2020-11-17 at 11.42.39 AM.png",
        824,
        350,
        "#ebedf2"
      ]
    }
  ]
}
[/block]
#Sending Messages using Templates
Once you've created a template, to send it using that template click the **Options** button and click **New Message**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d090dcc-Screen_Shot_2020-11-17_at_11.43.32_AM.png",
        "Screen Shot 2020-11-17 at 11.43.32 AM.png",
        191,
        173,
        "#e9ebee"
      ]
    }
  ]
}
[/block]
This will pre-populate the template options you've set into a new message. You can override these options (such as changing text, an icon, etc) when creating a message, by simply filling in different options. For details on these options, see:
- [Sending Push Messages](doc:sending-notifications) 
- [Sending Email Messages](doc:sending-email) 

#Using templates to track performance of recurring messages

Whenever you send a message with a template, its overall performance is tracked by OneSignal in the Templates page of your Dashboard.

Best practice is to have different templates for each use case so you can monitor how well your template campaigns are converting.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1214a97-Screen_Shot_2020-11-17_at_11.44.32_AM.png",
        "Screen Shot 2020-11-17 at 11.44.32 AM.png",
        825,
        277,
        "#f1f2f3"
      ]
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Column",
    "h-1": "Details",
    "0-0": "Type",
    "0-1": "Push or email.",
    "1-0": "Sent",
    "1-1": "The number of devices in which this template was delivered. For example, if you send the template once but target 793 devices, it will show 793.",
    "2-0": "Opened",
    "2-1": "The unique number of times the push or a link in the email was clicked.",
    "3-0": "Conversion",
    "3-1": "(Opened / Sent) x 100%"
  },
  "cols": 2,
  "rows": 4
}
[/block]
#FAQ
##Where is the template id?

The `template_id` used in the [Create notification](ref:create-notification) API is taken from the URL of the template when editing it. It is in the standard UUID format.

In this case, the template_id is `701205bc-0cbf-45c5-ac4c-a57ba966a7e0`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5fe68bd-Screen_Shot_2022-02-15_at_6.14.30_PM.png",
        "Screen Shot 2022-02-15 at 6.14.30 PM.png",
        2108,
        590,
        "#a8a8ab"
      ]
    }
  ]
}
[/block]