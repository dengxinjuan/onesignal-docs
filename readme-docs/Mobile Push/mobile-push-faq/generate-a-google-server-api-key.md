---
title: "Generate a Firebase Server Key"
slug: "generate-a-google-server-api-key"
excerpt: "Directions on how to generate a Firebase Server API key for sending Android App Notifications"
hidden: false
createdAt: "2016-09-20T04:01:10.418Z"
updatedAt: "2021-10-06T22:24:20.934Z"
---
[block:callout]
{
  "type": "info",
  "title": "For Android Apps, not websites",
  "body": "This guide is for developers implementing OneSignal in an Android application for distribution on the Google Play App Store. **This guide should not be used for Web Push.** "
}
[/block]
A Google Firebase Server Key is required for all **Android** mobile apps and **Chrome app extensions**. It is optional for **Amazon** apps.

### What is a Firebase Server Key?

A Firebase Server Key and Firebase Sender ID are required in order to send push notifications to Android mobile app devices.

The goal of this section is to provision your Firebase Server Key and Firebase Sender ID for use in OneSignal.

# Requirements

- An Android mobile app, Chrome app or extension, or an Amazon app.
- A [Firebase account](https://firebase.google.com/)
- A [OneSignal Account](https://onesignal.com/), if you do not already have one.

# Step 1. Create A Firebase Project

Push Notifications require a Firebase Project. If you don't have one setup yet, click **Add project** and follow the directions to setup your project.

If you already have an FCM project, skip to Step 2.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5f6520c-Screen_Shot_2020-12-14_at_5.19.28_PM.png",
        "Screen Shot 2020-12-14 at 5.19.28 PM.png",
        1230,
        708,
        "#aab4d7"
      ]
    }
  ]
}
[/block]

# Step 2. Getting Your Firebase Cloud Messaging Token And Sender ID

Click the **gear icon** in the top left and select **Project settings**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/16ae99f-Screen_Shot_2020-12-14_at_5.24.47_PM.png",
        "Screen Shot 2020-12-14 at 5.24.47 PM.png",
        1230,
        245,
        "#556495"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
Select the **Cloud Messaging** tab.

Save the **Server key** and **Sender ID**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6817f60-Screen_Shot_2020-12-14_at_5.25.25_PM.png",
        "Screen Shot 2020-12-14 at 5.25.25 PM.png",
        1088,
        562,
        "#aca7ac"
      ]
    }
  ]
}
[/block]
# Step 3. Configure Your OneSignal App's Android Platform Settings

In the [OneSignal dashboard](https://app.onesignal.com/), select your app, then go to:

**Settings > Platforms > Google Android**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1fc82d0-Screen_Shot_2020-12-14_at_5.28.47_PM.png",
        "Screen Shot 2020-12-14 at 5.28.47 PM.png",
        1088,
        596,
        "#cbc9ca"
      ]
    }
  ]
}
[/block]
Paste your Firebase Server Key and Firebase Sender ID into the fields and click **Next** all the way to **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2c5c0df-Screen_Shot_2021-04-08_at_3.18.32_PM.png",
        "Screen Shot 2021-04-08 at 3.18.32 PM.png",
        1772,
        710,
        "#f3f5f7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "You now have a key to send push notifications from your app. 🥳\n\nReturn to [Mobile Push Quickstart](doc:mobile-sdk-setup)"
}
[/block]
----

# FAQ

## Can I use the same Firebase Keys for multiple apps?

Yes, you can use the same Sender ID and Firebase Server API key for multiple apps created in OneSignal. If you plan to export this data or sell the app or use [Google Analytics for Firebase](doc:google-analytics-for-firebase) you should create unique Firebase Projects in these cases.

## How can I change my Firebase Keys if I have over 100 users?

If possible, never change these keys. If you did change or accidentally deleted your Firebase project, you must contact support@onesignal.com with the OneSignal App ID, new FCM Sender ID and new FCM Server API key for us to update it.