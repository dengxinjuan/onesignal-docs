---
title: "GoNative.io"
slug: "gonativeio"
excerpt: "Turn your website into a mobile app using GoNative.io and OneSignal"
hidden: false
createdAt: "2020-06-05T18:42:11.849Z"
updatedAt: "2020-11-13T16:20:41.275Z"
---
If you have a mobile-friendly website and want to turn it into a mobile app downloadable from the Apple or Google App Stores, then [GoNative.io](https://gonative.io/) is a great solution and [integrates with OneSignal](https://docs.gonative.io/push-notifications/onesignal-push-configuration).

Simply follow their [Getting Started Guide](https://docs.gonative.io/). 

Once setup, create an account at onesignal.com and create a **New App/Website**

You will need Google Android FCM keys and Apple iOS Push Certificates for Push. Follow these guides to create them:

- [Generate a Firebase Server Key](doc:generate-a-google-server-api-key) - Required for sending Push to Google Android (free).
- [Generate an iOS Push Certificate](doc:generate-an-ios-push-certificate) - Required for sending Push to Apple iOS (Apple requires a paid Developer Account).

Once these keys and certs are uploaded to OneSignal, copy the [OneSignal App ID](doc:accounts-and-keys) and head back into your gonative.io account to paste the OneSignal App ID.
[block:callout]
{
  "type": "success",
  "title": "Basic Integration Complete!",
  "body": "Run your app and you should be prompted to subscribe to push on iOS and already subscribed to push on Android."
}
[/block]
## OneSignal GoNative FAQ

### How to access OneSignal Data Client Side?

Using GoNative's Native Javascript Bridge method `gonative_onesignal_info` you can capture the OneSignal Player ID (`oneSignalUserId`) and send it to your 3rd party database.
[block:code]
{
  "codes": [
    {
      "code": "var osPlayerId = \"the OneSignal Player ID string\";\nvar isSubscribedToPushNotifications;\n\nfunction gonative_onesignal_info(info) {\n  console.log(info);\n  osPlayerId = info.oneSignalUserId;\n  isSubscribedToPushNotifications = info.oneSignalSubscribed;\n}",
      "language": "javascript"
    }
  ]
}
[/block]
More details in [GoNative's Docs](https://docs.gonative.io/native-js-bridge/nativejs-onesignal-info).

Once you collect the OneSignal Player ID, you can send it to your DMP, CRM or Database. See [Database, DMP, & CRM Integration](doc:internal-database-crm) for more details.

### How do I send links in push to my mobile app?

GoNative has integrated the OneSignal SDK in a smart way where they leverage deep linking instead of the pop-up browser OneSignal provides by default.

When you send push to mobile app users, do not use the "Launch URL" field. Instead use the "Additional Data" field or `data` parameter from our [REST API](doc:api-reference). The Key should be **`targetUrl`** (the "U" is capitalized) and the Value should be the url to the page you want to send users:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e3e62fe-Screen_Shot_2020-06-05_at_12.01.05_PM.png",
        "Screen Shot 2020-06-05 at 12.01.05 PM.png",
        1145,
        231,
        "#e4e5e7"
      ]
    }
  ]
}
[/block]
If you send to web and mobile at the same time, in the "Launch URL" area select "Different URL for web/app" and leave the "APP URL" blank.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/25042cb-Screen_Shot_2020-06-05_at_12.02.33_PM.png",
        "Screen Shot 2020-06-05 at 12.02.33 PM.png",
        423,
        265,
        "#edf0f3"
      ]
    }
  ]
}
[/block]