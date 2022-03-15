---
title: "SMS Quickstart"
slug: "sms-quickstart"
excerpt: "Setup instructions for SMS"
hidden: false
createdAt: "2020-11-20T21:09:44.144Z"
updatedAt: "2021-08-12T18:09:19.303Z"
---
OneSignal’s SMS feature allows you to create and send SMS easily to your users. To send SMS from OneSignal, you will need:
1. An account with [Twilio](https://www.twilio.com/) (SMS platform)
2. Twilio SID and Auth Token to setup OneSignal
3. Import Subscriber Phone numbers

# Supported Phone Numbers

## From/Sender Phone Numbers

Phone numbers to send SMS from are setup through Twilio or use your own phone numbers (but you can only send SMS within your country using your number).
[block:callout]
{
  "type": "info",
  "body": "OneSignal SMS supports sending messages from regular 10 digit Long Codes, Short Codes, Toll-Free numbers, and Twilio Messaging Service IDs.\nAlphaSender IDs are supported if pooled under a Twilio Messaging Service.\n\nDetails, see [SMS FAQ](doc:sms-faq#what-is-a-long-code-short-code-toll-free-alphanumeric-sender-id-and-messaging-service).",
  "title": "Supported \"From\" Phone Numbers"
}
[/block]
## To/Audience Phone Numbers

Twilio and OneSignal require all user phone numbers to be in the [E.164 format](https://documentation.onesignal.com/docs/sms-faq#what-is-the-e164-format). More details on the format can be found on [Wikipedia](https://en.wikipedia.org/wiki/E.164).

# Step 1. Platform Selection
For a new application, choose the SMS channel from the list of platforms.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/650cc6d-Screen_Shot_2020-11-20_at_12.07.07_PM.png",
        "Screen Shot 2020-11-20 at 12.07.07 PM.png",
        1200,
        923,
        "#f7f9fa"
      ],
      "border": true
    }
  ]
}
[/block]
To add SMS to an existing application, go to the Application Settings → Platform, choose the SMS channel from the list of platforms.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dee0f0e-Screen_Shot_2021-07-21_at_5.46.13_PM.png",
        "Screen Shot 2021-07-21 at 5.46.13 PM.png",
        2012,
        1358,
        "#e7e9ea"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
# Step 2. Twilio Account Setup

Enter the Twilio Account SID and Auth Token to allow OneSignal to fetch the *From* phone numbers and send SMS. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e361d3-twilio_account_details.png",
        "twilio account details.png",
        942,
        487,
        "#f3f4f6"
      ],
      "caption": "OneSignal Configuration Screen - Twilio Details"
    }
  ]
}
[/block]

You can get these account details from your Twilio Account Dashboard. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b0d016-Screen_Shot_2020-11-20_at_12.09.40_PM.png",
        "Screen Shot 2020-11-20 at 12.09.40 PM.png",
        1059,
        764,
        "#eae9ea"
      ],
      "border": true,
      "caption": "Twilio Console"
    }
  ]
}
[/block]
# Step 3. Select Default “From” Phone number

Once the Twilio account is successfully verified, OneSignal will automatically fetch all the *From* phone numbers associated with your Twilio account.

You can choose a “default” phone number from your registered numbers to send SMS. You can also choose a different *From* phone number on the [SMS creation](https://documentation.onesignal.com/docs/sending-sms-messages) page if you prefer to not use the default *From* Number.

**Test the Twilio-OneSignal configuration**
If you wish to first test if the Twilio-OneSignal integration is successful, you can use the *Send a Test SMS* step to verify. Simply enter a phone number and click on *Send Test Message* to get an automated test SMS on the phone number entered.
[block:callout]
{
  "type": "info",
  "body": "For Twilio trial accounts (that is, if you have not upgraded your Twilio account), recipient phone numbers need to be [registered on Twilio before they can receive SMS](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account).",
  "title": "Twilio Trial Accounts"
}
[/block]
# Step 4. Add Audience Phone Numbers

Before you send an SMS, you need to have phone number records within your OneSignal account. You can add SMS subscribers using the following methods:
- Bulk [Import Phone Numbers](doc:import-phone-numbers) with CSV upload
- [Add a device](ref:add-a-device) API
- Web [Email & Phone Number Web Prompt](doc:email-phone-number-web-prompt) 
- [SMS SDK Methods](doc:sms-sdk-methods)