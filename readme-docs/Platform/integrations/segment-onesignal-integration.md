---
title: "Segment.com Integration"
slug: "segment-onesignal-integration"
excerpt: "Integrating OneSignal as a Destination with Segment"
hidden: false
createdAt: "2020-09-10T18:30:35.799Z"
updatedAt: "2022-01-27T18:46:12.253Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b89fedb-onesignal-segment-integration.jpeg",
        "onesignal-segment-integration.jpeg",
        1400,
        758,
        "#fafaf9"
      ]
    }
  ]
}
[/block]
<a href="http://segment.com/" target="_blank">Segment.com</a> is a data platform used by businesses to collect user data from their web and mobile apps. Segment then sends the user data to destinations such as OneSignal to create more effective and  personalized marketing campaigns.
[block:callout]
{
  "type": "info",
  "body": "We currently only support sending data **from Segment to OneSignal**.\n\n*Coming Soon* - Sending OneSignal events to Segment"
}
[/block]
The current integration with Segment enables the use of OneSignal as a Destination. OneSignal accepts data from any Segment web, mobile, or server source in [cloud mode](https://segment.com/docs/connections/destinations/#connection-modes). 

#Requirements
* A Growth, Professional or Enterprise [OneSignal Account](https://onesignal.com/pricing). 
* The OneSignal [Mobile SDK](doc:mobile-sdk-setup) and/or [Web SDK](doc:web-push-quickstart) from which you want to send data. [Email](doc:email-quickstart) or [SMS](doc:sms-quickstart) only integrations do not require the SDK.
* The OneSignal Property: [External User Id](doc:external-user-ids) which maps to the Segment.com `userId`.

#Step 1. Setup the OneSignal SDKs
Use an existing app that has OneSignal setup OR Create a new one on OneSignal. Below are the detailed app setup instructions. 
- [Web Push Setup](https://documentation.onesignal.com/docs/web-push-quickstart)
- [Mobile Push Setup](https://documentation.onesignal.com/docs/mobile-sdk-setup)
- [SMS Setup](https://documentation.onesignal.com/docs/sms-quickstart)
- [Email Setup](https://documentation.onesignal.com/docs/email-quickstart)

Please make sure you have your [push, email, or SMS subscribers](https://documentation.onesignal.com/docs/users) in OneSignal as well. 

#Step 2. Connect to Segment.com in OneSignal

Within OneSignal Dashboard, navigate to **Settings > Analytics** and click **Active** within Segment.com card. Then continue with the setup options.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4177d88-Screen_Shot_2021-09-27_at_9.28.18_AM.png",
        "Screen Shot 2021-09-27 at 9.28.18 AM.png",
        1768,
        1514,
        "#e9ebed"
      ]
    }
  ]
}
[/block]
#Step 3. Setup OneSignal Destination in Segment.com

Within **Segment.com Dashboard > Destinations** you should see **OneSignal**. If not, add OneSignal as a new destination.

Enable the OneSignal Destination, you should also see your OneSignal API Key and App ID already
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b191d42-turn-on-configuration-in-segment.png",
        "turn-on-configuration-in-segment.png",
        2046,
        946,
        "#dcdde3"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
If the API key and App Id are not set, navigate to the [OneSignal dashboard](https://app.onesignal.com/apps/), select the App, and go to the **Settings > Keys & IDs**. Copy-Paste the “App ID” and the “API key” into Segment.com.

##Multiple Segment.com Sources
If you have multiple sources, you can utilize <a href="https://segment.com/docs/personas/#personas-spaces" target="_blank">Segment's **Personas > Spaces** feature </a> to bind multiple sources to a destination.

#Step 4. Sending Data from Segment to OneSignal

OneSignal stores channel-level records: Push/IAM, Email, and SMS. These records must already be created in OneSignal in the following ways:
- OneSignal SDK, Push/IAM created upon initialization. Email uses `setEmail` and SMS uses `setSMSNumber`
- [Add a device](ref:add-a-device) API
- [Email Address](doc:import-email-addresses) & [Phone Number](doc:import-phone-numbers) CSV Uploads

You must also set the [External User Id](doc:external-user-ids) property in OneSignal to match the `userID` field sent by Segment.com.
[block:callout]
{
  "type": "warning",
  "body": "Records that don't have a **Segment User ID <--> OneSignal External User ID** mapping will be dropped.",
  "title": "External User ID is mandatory!!"
}
[/block]

##User Traits or Properties
You can aggregate data across every customer touchpoint in Segment and then send these user properties in real-time to OneSignal as [Data Tags](https://documentation.onesignal.com/docs/add-user-data-tags).

**Note**: OneSignal can not accept nested objects or arrays as user properties. 

<a href="https://segment.com/docs/connections/spec/identify" target="_blank">Identify</a> - User traits or properties sent using *Segment's Identify call* are stored as data tags on OneSignal. For example:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setExternalUserId('109768518080488203109')\nanalytics.identify('109768518080488203109', {\n  first_name: 'John',\n  last_name: 'Doe'\n});",
      "language": "javascript",
      "name": "identify example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7ee9d1-Screen_Shot_2021-09-28_at_10.26.16_AM.png",
        "Screen Shot 2021-09-28 at 10.26.16 AM.png",
        2056,
        674,
        "#d5d9dd"
      ]
    }
  ]
}
[/block]
<a href="https://segment.com/docs/connections/spec/track/" target="_blank">Track</a> - For events and associated properties sent using *Segment's Track call*, OneSignal will store all the *event properties* as data tags, but *drop* the *event name* while storing the tags. If you want to keep the *event names* in the data tags, you can append the event name to the properties before sending them to OneSignal. For example:
[block:code]
{
  "codes": [
    {
      "code": "let timestampInSeconds = Int(NSDate().timeIntervalSince1970).toString()//convert to string since Segment adds decimals to end\n//name will be dropped and only properties will be sent to OneSignal as tag \"last opened: timestampInSeconds\"\nanalytics.track(\n  name: \"iOS App Last Opened\", \n  properties: [\"last opened\": timestampInSeconds]\n)",
      "language": "javascript",
      "name": "track example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/95e72bb-Screen_Shot_2021-09-28_at_10.42.21_AM.png",
        "Screen Shot 2021-09-28 at 10.42.21 AM.png",
        2056,
        674,
        "#d6dade"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/565e212-user-traits-or-properties.png",
        "user-traits-or-properties.png",
        1773,
        1209,
        "#eff0f0"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

##Personas Audience and Computed Traits
[Persona Audiences](https://segment.com/docs/personas/) automatically show up as a [segment in OneSignal](https://documentation.onesignal.com/docs/segmentation). 

Computed traits are updated as [Data Tags](https://documentation.onesignal.com/docs/add-user-data-tags) on the OneSignal user (player) records. 

**Audience**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c494a4b-persona-audience-or-computed-traits.png",
        "persona-audience-or-computed-traits.png",
        1773,
        1209,
        "#e9eaef"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
Audiences sent using Segment's [Track call](https://segment.com/docs/connections/spec/track/) will create a OneSignal segment with the *Audience Name*.

Audiences sent using Segment's [Identify call ](https://segment.com/docs/connections/spec/identify/) will

  * create a OneSignal segment with the *Audience Name* and
  * add data tags (if there are additional properties in the Identify call) on all the matching user records.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e5ad7f4-segments-in-onesignal.png",
        "segments-in-onesignal.png",
        1773,
        1209,
        "#f2f4f6"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
The Identify and Track calls are automatically sent to OneSignal whenever a user enters or exits the Audience.



**Computed Traits**
Personas Computed Traits are stored as [Data Tags](https://documentation.onesignal.com/docs/add-user-data-tags) on the OneSignal user (player) records whether passed to OneSignal as an Identify call or a Track call. You can then use these data tags to manually create OneSignal segments and automate your messaging workflows.

----
#FAQ
##How can we pass Subscription events?
Subscription events are not currently being sent automatically. This can be done with the OneSignal SDK Subscription Observer Methods. See <a href="https://documentation.onesignal.com/docs/analytics-overview#subscription-tracking" target="_blank">Subscription Tracking</a> for more details.

## Managing Segment’s Reserved and Custom User Properties in OneSignal
  * All the Segment’s user traits are sent to OneSignal as data tags. The number of data tags allowed on OneSignal depends on your OneSignal pricing plan. Tags over the entitled number will be dropped.
  * OneSignal always updates the firstName and the lastName properties for matching users. All other traits are added/updated on a first-come basis. *firstName* and *lastName* tags are stored as "first_name" and "last_name".
  * User properties sent to OneSignal with blank/null values are removed from the OneSignal user record. This is done to make sure you are within your data tag limits.
  * OneSignal doesn’t store email and phone properties as these key identifiers are stored as separate player records in OneSignal. To update user traits for these records in OneSignal, you must create a player record with the email address and/or a phone number and map those records with the External_User_ID.