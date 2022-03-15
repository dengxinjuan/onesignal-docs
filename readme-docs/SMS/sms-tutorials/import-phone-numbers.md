---
title: "Import Phone Numbers"
slug: "import-phone-numbers"
excerpt: "How to add Phone Numbers to use OneSignal SMS feature"
hidden: false
createdAt: "2020-11-21T01:21:32.420Z"
updatedAt: "2021-07-22T01:28:42.444Z"
---
OneSignal provides the following ways to add phone number records into your account:
[block:parameters]
{
  "data": {
    "h-0": "Import Option",
    "h-1": "Details",
    "0-0": "[Dashboard Upload](#import-phone-numbers-through-dashboard)",
    "0-1": "Best if you have a CSV list of phone numbers and want to upload through the dashboard without code.",
    "1-0": "API [Add a device](ref:add-a-device)",
    "1-1": "Use the [Add a device](ref:add-a-device) endpoint to set the `device_type = 14` and the `identifier` as the phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). Any other data you want to add is optional.",
    "2-0": "[SMS SDK Methods](doc:sms-sdk-methods)",
    "2-1": "Can be used for long-term implementation on the client side.",
    "3-0": "[Email & Phone Number Web Prompt](doc:email-phone-number-web-prompt)",
    "3-1": "A web prompt that allows user to include their own phone number and email address."
  },
  "cols": 2,
  "rows": 4
}
[/block]

#Import Phone Numbers through Dashboard

Navigate to **Audience > All Users > Update/Import Users**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/26f08dd-Frame_1.png",
        "Frame 1.png",
        7475,
        3125,
        "#dbdfe3"
      ],
      "border": true
    }
  ]
}
[/block]

Select **Upload CSV** next to "Import phone_number(s)".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edda70d-Frame_2_2.png",
        "Frame 2 (2).png",
        7475,
        3125,
        "#f4f5f6"
      ]
    }
  ]
}
[/block]
## Import Phone Number CSV columns
[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Details",
    "0-0": "`phone_number`",
    "0-1": "**Required**: must be in the [E.164 format](https://documentation.onesignal.com/docs/sms-faq#what-is-the-e164-format)",
    "1-0": "`external_user_id`",
    "1-1": "**Required**: identifier that can be used to uniquely identify a user. See [External User Ids](doc:external-user-ids) for more details."
  },
  "cols": 2,
  "rows": 2
}
[/block]
If you need help ensuring your CSV is in the correct format, download our template using **CSV Template** download button.

*Note: The first row should have the column labels exactly matching the above Property names. The order does not matter.*
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b73dd3f-Screen_Shot_2020-11-20_at_5.31.01_PM.png",
        "Screen Shot 2020-11-20 at 5.31.01 PM.png",
        271,
        113,
        "#e7e7e8"
      ],
      "border": true,
      "caption": "Example CSV"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/28e3c44-Screen_Shot_2020-12-01_at_4.32.06_PM.png",
        "Screen Shot 2020-12-01 at 4.32.06 PM.png",
        932,
        870,
        "#edeff1"
      ]
    }
  ]
}
[/block]
You can automatically create a new segment for the imported list. This adds a tag to the newly imported list and auto-creates a segment based on the input value. For example, "*SMS_Subscriber_Test_List*" in the above image. 

Once you *Confirm and Import*, you will get an email with the results from the CSV Import.

[block:callout]
{
  "type": "info",
  "body": "You cannot have multiple phone numbers associated with an external_user_id. If the external_user_id exists, then we will replace the old phone number with the new one.\n\nYou cannot have the same phone number associated with multiple external_user_id. Only the last provided external_user_id will be linked with the phone number.\n\nPlease reach out to OneSignal support if you prefer to have multiple phone numbers for a given external_user_id."
}
[/block]
#Update User Records
To add or update custom attributes for the Phone Number records, keep the current CSV and add additional columns for tags. See [Importing User Attributes or Tags](doc:import-user-tags) for more details.