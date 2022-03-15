---
title: "SMS FAQ"
slug: "sms-faq"
hidden: false
createdAt: "2020-11-20T21:11:12.093Z"
updatedAt: "2021-08-12T18:09:29.859Z"
---
#What is the E.164 format?
OneSignal (and Twilio) requires all user phone numbers to be in the [E.164 format](https://en.wikipedia.org/wiki/E.164). 
E.164 is an international standard that defines the numbering format for phone numbers. The format requires only digits with country code (1 to 3 digits) and subscriber phone number (max 12 digits). Typically, it looks like this:
  * +(plus sign)
  * international country code
  * area code without leading 0
  * local phone number

Here is an example of a US phone number:
  * Phone number: 999 999 9999
  * E.164 format: +19999999999

And in London, UK:
  * Phone Number: 020 9999 9999
  * E.164 format: +442099999999

#Which SMS providers are supported? 
Currently, OneSignal only supports [Twilio](https://www.twilio.com). Please connect with OneSignal support to let us know if you want to use other SMS providers.

#Do I need to have an SMS platform (Twilio) account and pay them separately?
Yes, you need to create an account with Twilio and make sure you have sufficient balance to send SMS. OneSignal provides a single integrated platform for your Push, Email, and SMS subscribers and a simple to use SMS creation and sending experience, along with detailed delivery analytics. Sending an SMS is handled by SMS providers such as Twilio.

[block:callout]
{
  "type": "info",
  "title": "Separate Twilio Pricing",
  "body": "Customers need to pay Twilio for sending SMS. This is on top of the OneSignal pricing."
}
[/block]
#Can I send multimedia messages (MMS) as well?
Yes, you can add up to 10 media URLs in your SMS along with your text message. The message size shall not exceed 5MB though. Twilio fully supports the following media types and formats them for delivery on destination devices.
  * image/jpeg
  * image/gif
  * image/png

Twilio also accepts [other media formats](https://www.twilio.com/docs/sms/accepted-mime-types#accepted-mime-types), but the content will not be modified for device compatibility.
[block:callout]
{
  "type": "info",
  "title": "Countries with MMS Support",
  "body": "  * Twilio only supports MMS in the US and Canada.\n  * MMS messages sent to other countries will be converted to SMS text messages with a URL link to the media. "
}
[/block]
#How can I add SMS subscribers to OneSignal?
See [Import Phone Numbers](doc:import-phone-numbers) for details on all options for adding SMS Subscribers.

#How can users STOP/ Unsubscribe from SMS?
Whenever users respond with “STOP/CANCEL” etc messages to stop the SMS subscription, [Twilio records such requests](https://support.twilio.com/hc/en-us/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering-) and sends the appropriate error code to OneSignal. 

OneSignal then marks such subscribers (phone numbers) as "Unsubscribed" in our database.

# How can users resubscribe if they previously requested to unsubscribe (STOP) from SMS?
If the device texted back "STOP" to the sending number, then they will not get SMS again until they text back "START" to the same number. 
Once they opt-back-in, you can detect this with [Twilio's Webhook for Incoming Messages](https://www.twilio.com/docs/usage/webhooks/sms-webhooks#type-1-incoming-message) and mark the device as subscribed in OneSignal using the [Edit Device API](https://documentation.onesignal.com/reference/edit-device) with `notification_types` set to `1`.

If you called the SDK `logoutSMS` method, you can resubscribe the SMS using the `setSMSPhoneNumber` method with the same phone number.

#Does OneSignal support two-way SMS or incoming SMS from the subscribers?
No, currently we can not handle incoming message responses from your subscribers. Please reach out to *support@onesignal.com* if this is a key requirement for your business and we will prioritize it.


#What is GSM-7 and UCS-2 encoding?
SMS messages are encoded in either [GSM-7](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) or [UCS-2](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding). GSM-7 encoding is more commonly used and supports numbers, English alphabets, some Greek characters, and also special characters. A list of GSM-7 supported characters can be found on [Wikipedia](https://en.wikipedia.org/wiki/GSM_03.38#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_.2F_GSM_03.38) or on [Twilio](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding). 

For other languages or characters such as emojis, SMS messages are sent via UCS-2 encoding.

#What is the SMS character limit and Message Segment?
The character limit for a single SMS message is 160 characters for messages using GSM-7 encoding and 70 characters if sent via UCS-2 encoding. However, most modern phones and networks support message segmenting, concatenation, and then rebuilding messages up to 1600 characters.

When you send an SMS message longer than 160 GSM-7 characters or 70 UCS-2 characters, the message will be split into multiple segments. Twilio then uses six bytes for the Data Header for re-assemble instructions. This leaves each message segment with 153 GSM-7 characters or 67 UCS-2 characters. Additional details on how Twilio handles the SMS character limit can be found [here](https://www.twilio.com/docs/glossary/what-sms-character-limit).

You can also use the [Twilio provided message length calculator](https://twiliodeved.github.io/message-segment-calculator/) to verify the segment count.

###How do you calculate character count for emojis?
Unfortunately, emojis don’t have a standard character count and therefore, it is difficult to estimate the effect on the message character count. Our recommendation is to test your SMS with emojis before sending out the message to your users.

#How many SMS can I send?
OneSignal hasn’t put any cap on SMS sending. However, Twilio has set certain limits when you send multiple messages from a single *From* number (regular long code number or Alphanumeric Sender ID).
With US or Canada [long code numbers](https://documentation.onesignal.com/docs/sms-faq#what-is-a-long-code-short-code-alphanumeric-sender-id-and-messaging-service), you can only send one [SMS segment](https://documentation.onesignal.com/docs/sms-faq#what-is-the-sms-character-limit-and-message-segment) per second per sender phone number. For non-US, non-Canada long code numbers or [Alphanumeric Sender ID](https://documentation.onesignal.com/docs/sms-faq#what-is-a-long-code-short-code-alphanumeric-sender-id-and-messaging-service), you can send up to 10 SMS segments per second per sender phone number.
Twilio will queue up messages for 4 hours for messages exceeding the above limits. For example, for a US long phone number with one message segment per second per sender phone number limit, Twilio will queue up 14,400 (4 hrs x 60 minutes x 60 seconds) message segments and throw an error for other messages. 
For higher sending limits, you can use Twilio [Messaging Service](https://documentation.onesignal.com/docs/sms-faq#what-is-a-long-code-short-code-alphanumeric-sender-id-and-messaging-service) or apply for [Short Codes](https://documentation.onesignal.com/docs/sms-faq#what-is-a-long-code-short-code-alphanumeric-sender-id-and-messaging-service) where the limit is 100 messages per second.

#How do I send international SMS?
You need to enable International texting on Twilio. On OneSignal, it is the [same process](https://documentation.onesignal.com/docs/sending-sms-messages) to send SMS to users in your country or to international users. 


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c278f00-1.png",
        "1.png",
        803,
        446,
        "#959395"
      ],
      "border": true
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e356024-3.png",
        "3.png",
        748,
        684,
        "#dcd7d8"
      ],
      "border": true
    }
  ]
}
[/block]
#What is a long code, short code, toll-free, alphanumeric sender ID, and messaging service?
[block:callout]
{
  "type": "info",
  "body": "You need to register for these numbers on Twilio. Phone number registration service is not provided by OneSignal."
}
[/block]
##Long codes
A long code is a standard 10-digit phone number (in most countries) used for voice calls and SMS. Here is an example of a US long code phone number: 999-999-9999

##Short Code
A [short code](https://www.twilio.com/docs/glossary/what-is-a-short-code) is a 5-6 digit phone number that can also be used for SMS and MMS messages to and from mobile phones. Short codes require approval from the carriers and the process typically takes 8-12 weeks. Short Codes are preferred for high-volume messages as they are carrier-approved and will not be marked as spam.
[Twilio currently offers short codes](https://www.twilio.com/guidelines/short-code) in select countries, including the US, Canada, and the UK. An example of a short code:
Number: 894546
Short Code spells TWILIO

##Toll-Free Number
A toll-free number is a 10 digit phone number that begins with 8XX. You also have the option to choose a vanity toll-free number.

Toll-free numbers can be submitted for carrier verification which then helps avoid any message filtering by the carriers. This is a huge benefit over a regular long code. 
Toll-free numbers also have a higher throughput rate (three message segments per second) compared to regular long code phone numbers. You can also pay more to increase the throughput for toll-free numbers.

##Alphanumeric sender IDs
Alphanumeric sender IDs are custom strings used in the *From* field of a message, instead of an E.164 formatted phone number. These are preferred for branded one-way messaging where you can use the custom string as per your business branding. 
**Note**: Alphanumeric sender IDs are currently not supported in the USA and Canada. Here is the list of [countries that support this feature](https://support.twilio.com/hc/en-us/articles/223133767-International-support-for-Alphanumeric-Sender-ID). 

### How do I get an AlphaSender ID? 
For many countries where there is no registration required for AlphaSender IDs, you can begin using Alpha Sender ID immediately. Please check the [full list of countries that support Alpha Sender ID, as well as which countries require pre-registration](https://support.twilio.com/hc/en-us/articles/223133767-International-support-for-Alphanumeric-Sender-ID).

- If a country supports Alpha Sender ID and **does not** list pre-registration as "Required", you can start using Alpha Sender ID right away: just create and add your Alpha Sender ID to a Messaging Service. Selecting that Messaging Service in your “from” parameter on the dashboard or the API call.
Please note, a valid Alpha Sender ID must be up to 11 alphanumeric characters including A-z, 0-9 and space (" "). No special characters are allowed.

- If a country you want to send SMS to has Alpha Sender ID registration listed as "Required," you need to follow the country-specific process. Refer to [Twilio's getting started with Alpha Sender ID guide](https://support.twilio.com/hc/en-us/articles/223181348-Getting-started-with-Alphanumeric-Sender-ID).


###Does the AlphaSender ID need to be associated with a messaging service?
To use an AlphaSender ID to send SMS, you need to create one and add it to a Messaging Service on Twilio. You can use that Messaging Service to then send SMS to your users from OneSignal.

Additional details found in [Using Alpha Sender ID with Messaging Services](https://support.twilio.com/hc/en-us/articles/223133867-Using-Alphanumeric-Sender-ID-with-Messaging-Services).

##Twilio Messaging Service
Twilio offers functionality called [*Messaging Service*](https://www.twilio.com/docs/sms/services) that allows “bundling” of different types of senders (long code numbers, short codes, toll-free numbers, etc.) in a single pool based around a common set of senders, features, and configuration. The same settings and feature configuration applies to all of the phone numbers in the pool.
Sending a high volume of messages has a lot of complexity in terms of organizing the account, message logs, delivery planning. etc. Messaging Service helps solves a lot of these concerns such as:
- Scaler feature - distributes your outbound messaging traffic evenly across the phone numbers in your Messaging Service so that you can handle higher volumes of messages, basically load balancing across multiple numbers in the service.
- Country Code Geomatch - for Intelligent routing (uses local phone numbers to send SMS or re-route in case of failures)
- Short Code Reroute - prioritizes message delivery using a short code, if available
- MMS converter - changing the SMS to a link if the device or the carrier doesn’t support media.

Messaging Service is also required to be compliant with the new 10DLC regulation which will soon be enforced by all major US carriers. Businesses are required to register their company and campaigns and then associate their phone numbers with specific campaigns. Message delivery speed or throughput will be determined based on the brand’s trust score and campaign use cases. This will help improve the delivery speeds and reduce carrier filtering when you use regular 10digit long codes to send SMS. 

Customers can create and register Messaging Services for these campaign registrations and pool different types of sender numbers to serve their needs. Even though the regulation doesn’t require sending messages using Messaging Service, the sender (or from) phone numbers would need to be linked to a Messaging Service.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/97bb520-Screen_Shot_2021-08-09_at_12.52.35_PM.png",
        "Screen Shot 2021-08-09 at 12.52.35 PM.png",
        2194,
        964,
        "#9f9fa1"
      ],
      "caption": ""
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c50fa99-Screen_Shot_2021-08-09_at_12.52.50_PM.png",
        "Screen Shot 2021-08-09 at 12.52.50 PM.png",
        2118,
        1372,
        "#e5e6e7"
      ]
    }
  ]
}
[/block]
## What is A2P 10DLC?
A2P 10DLC refers to a system in the United States that allows businesses to send Application-to-Person (A2P) type messaging via standard 10-digit long code (10DLC) phone numbers. Carriers in the US consider all Twilio traffic to be A2P.

### Benefits of A2P 10DLC
10-digit long codes have traditionally been designed for Person-to-Person (P2P) traffic only, causing businesses to be constrained by limited throughput and heightened filtering.
- For businesses, 10DLC regulation provides better delivery quality and lower filtering risk than long code SMS of the past, using the same phone numbers.
- For end users, it will help reduce the spam content.

### Who does it NOT apply to?
- Hobbyists, independent developers or very small businesses may not need to register RIGHT NOW.
  - The registration process for individuals and small businesses sending small volumes of message traffic is still being worked out. Small volume is currently described as <3k message segments per day across all carriers.
  - As of today, Twilio doesn't have specific thresholds from carriers to determine this.
- Canada (or any other country) -  Carriers in other countries are not affected by these regulations.
- This regulation applies ONLY to the SMS and MMS sent using 10-digit Long Codes (regular phone numbers).

### Short Code or Toll-Free Numbers or WhatsApp
The regulation does not affect Short Code or Toll-free numbers or WhatsApp sending to US, except for officially prohibiting shared short codes for all use cases.

### When does it launch?
Twilio and carriers have partnered on a phased onboarding approach for all customers who send long code traffic to the US, rather than setting a hard start date and deadline for registration.
As of April 28, 2021, there is no hard deadline for all customers to complete registration. Follow [this link for the updated notice](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).


#SMS Regulations
[block:callout]
{
  "type": "danger",
  "body": "*Warning*: This section shall not be considered legal advice. You should seek the advice of your legal counsel for more detailed information on rules and regulations."
}
[/block]
Here are a few basic guidelines you should follow for SMS:
  * Send SMS to subscribers only and honor opt-outs
  * Communicate clearly what users are subscribing to
  * Maintain subscriber opt-in details including type of SMS they opted-in to, subscription time and current status, frequency, etc

Please also refer to Twilio's [Messaging Policy](https://www.twilio.com/legal/messaging-policy) and [Acceptable Use Policy](https://www.twilio.com/legal/aup) to make sure your SMS are not getting filtered by Twilio or the carriers. 

**Additional Resources for regulations in the US:**
  * [Twilio](https://www.twilio.com/learn/call-and-text-marketing/guide-to-us-sms-compliance)
  * [CTIA](https://api.ctia.org/wp-content/uploads/2019/07/190719-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf) (the trade association representing the wireless communications industry in the USA)

*Note*: Countries have different legal requirements for sending SMS. Twilio has shared [country-wise guidelines here](https://www.twilio.com/guidelines/sms). However, for international messages, please research the rules and regulations in the receiver’s country before sending messages.