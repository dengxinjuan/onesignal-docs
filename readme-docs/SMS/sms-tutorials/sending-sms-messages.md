---
title: "Sending SMS Messages"
slug: "sending-sms-messages"
excerpt: "Sending SMS Messages with OneSignal"
hidden: false
createdAt: "2020-10-27T19:01:41.442Z"
updatedAt: "2021-09-24T01:08:36.280Z"
---
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/LsB8uiNW_xg\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Options for Sending SMS",
  "body": "This page explains how to send SMS from the OneSignal Dashboard. For other sending options:\n- [API Create Notification SMS Content](ref:create-notification#sms-content)\n- [Integrately Automation](https://integrately.com/store/onesignal)"
}
[/block]
The Messages page shows you recent messages you've sent or scheduled through the dashboard.

Just click on the "SMS" tab at the top or select the drop-down on the top right and click "New SMS".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d855d8-Screen_Shot_2020-11-20_at_2.05.08_PM.png",
        "Screen Shot 2020-11-20 at 2.05.08 PM.png",
        1538,
        319,
        "#cfd4d8"
      ]
    }
  ]
}
[/block]

OneSignal's Messaging works similarly for all channels where you select your audience, craft your message, and schedule it for delivery.

# Step 1. Audience
Select the target audience (users) for your SMS campaign. This is from the [User Segments](doc:segmentation) you have created from your SMS subscriber list. You can also exclude segments and OneSignal will filter out the excluded subscribers from the “To” list.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c2fba53-Screen_Shot_2020-11-20_at_2.39.27_PM.png",
        "Screen Shot 2020-11-20 at 2.39.27 PM.png",
        1176,
        513,
        "#f9fafb"
      ]
    }
  ]
}
[/block]
# Step 2. Message

## Set From Number
Select the phone number that will send the SMS message. We will auto-fetch the list of phone numbers registered with your Twilio account. 

*Note*: If you have registered your own phone number on Twilio and want to use that number to send SMS then Twilio only allows sending domestic messages.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f83ee69-send_sms.png",
        "send sms.png",
        1184,
        624,
        "#e9e7e9"
      ]
    }
  ]
}
[/block]

## Create Message

Enter the SMS text here. A normal text message character count is limited to 160 characters for [GSM-7](doc:sms-faq#what-is-gsm-7-and-ucs-2-encoding) encoding and 70 characters for [UCS-2](doc:sms-faq#what-is-gsm-7-and-ucs-2-encoding) encoding. 
[block:callout]
{
  "type": "info",
  "body": "Twilio (and carriers) charges for the number of segments that a single message gets split into. If the character count is greater than the above-stated counts, then carriers will split the message into multiple segments. A single \"message\" will then be charged based on the number of segments. See how SMS character count is calculated [here](https://documentation.onesignal.com/docs/sms-faq#what-is-the-sms-character-limit-and-message-segment).\n\nOneSignal's form will help estimate the number of characters used so you can measure the costs of your SMS.",
  "title": "SMS Costs"
}
[/block]
### Emojis
OneSignal supports emojis in your SMS content. However, emoji rendering and character count are not standard so *please test the SMS before sending* it to understand how they render and if they impact the character limit.

### URLs
You can send URLs within SMS messages. Shortening those URLs is also recommended. However, using public URL shorteners like TinyUrl or Bitly have been forbidden by many carriers due to bad actors. If you want to send shortened URLs, it is recommended to use your own dedicated short domain. [More details](https://support.twilio.com/hc/en-us/articles/1260804572090-How-can-I-send-shortened-URLs-links-in-my-messages-).

### Personalization
OneSignal supports tags to personalize your text messages. For example, you can personalize SMS to each user with the `{{ first_name | default: ‘default_value’ }}` tag if you have added that previously.  See [Message Personalization](doc:personalization) for more details.

**Note:** Tag substitution in the message content can result in the SMS exceeding the character count limit. This can result in additional cost to you. Please test your SMS content before sending it.

## Media 

Multimedia Message (MMS). You can add up to 10 media URLs in an SMS with a total message size of less than 5MB. The following media types are fully supported.
- image/jpeg
- image/gif
- image/png

Twilio also accepts [other media formats](https://www.twilio.com/docs/sms/accepted-mime-types#accepted-mime-types), but the content will not be modified for device compatibility.

**Note:** *Twilio only supports MMS in the US and Canada.*

## Test SMS before sending
To test how your SMS content looks on different devices or how the message is segmented, please use the "Send a Test SMS" functionality above the message preview. Simply enter your test phone number to receive the SMS content.
[block:callout]
{
  "type": "info",
  "body": "Test messages will be charged against your Twilio account balance.\n\nFor Twilio trial accounts, recipient phone numbers need to be registered on Twilio before they can receive SMS.",
  "title": "Key considerations"
}
[/block]
# Step 3. Delivery Schedule
Delivery Time: You can either send SMS immediately to all your users or choose a specific time to start sending the message. Schedule up to 30 days in advance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29a98e9-Screen_Shot_2020-11-20_at_4.05.49_PM.png",
        "Screen Shot 2020-11-20 at 4.05.49 PM.png",
        2362,
        466,
        "#fafbfb"
      ],
      "border": true
    }
  ]
}
[/block]
# Step 4. Confirm Message
After sending an SMS, you can check the message performance analytics under [Message Reports](https://documentation.onesignal.com/docs/notification-delivery#sms).