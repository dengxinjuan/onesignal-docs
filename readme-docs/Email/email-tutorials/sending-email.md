---
title: "Sending Email Messages"
slug: "sending-email"
excerpt: "OneSignal features - Sending Email Messages with the new OneSignal Email Messaging composer"
hidden: false
createdAt: "2018-02-20T19:38:48.255Z"
updatedAt: "2022-01-31T23:41:11.640Z"
---
[block:callout]
{
  "type": "info",
  "body": "This page explains how to send ad hoc emails from the OneSignal Dashboard. These messages are not automatic or recurring. For other options see:\n- [API Create Notification Email Content](https://documentation.onesignal.com/reference/create-notification#email-content)\n- [Automated Messages](doc:automated-messages) \n- [Integrately Integration](https://integrately.com/store/onesignal)",
  "title": "Options for Sending Emails"
}
[/block]
**Messages > New Email**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d3b405-Screen_Shot_2021-10-04_at_3.01.14_PM.png",
        "Screen Shot 2021-10-04 at 3.01.14 PM.png",
        1302,
        330,
        "#d1d5da"
      ]
    }
  ]
}
[/block]
OneSignal's Messaging works similarly for all channels where you select your audience, craft your message, and schedule it for delivery.

#Step 1. Audience
Select your [User Segments](doc:segmentation). For instance, you may wish to send an email only to users who have not logged in in the past week.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a046300-segments.png",
        "segments.png",
        1300,
        368,
        "#f9fbfb"
      ],
      "caption": "Image shows being able to select a segment for your users"
    }
  ]
}
[/block]
#Step 2. Email Details
Enter the **email subject** you want users to see in their inbox. By default, the name and email address your email is from are taken from Settings > Email, but you can override them in individual emails here.

**Track link clicks** is enabled by default. The URLs used in emails are changed to support link tracking. It is how the ESP communicates back to OneSignal that the link was clicked so it can be tracked. More details in <a href="https://documentation.onesignal.com/docs/email-links-and-click-tracking" target="_blank">Email Links and Click Tracking</a>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/36c4c5b-Screen_Shot_2021-10-19_at_5.53.41_PM.png",
        "Screen Shot 2021-10-19 at 5.53.41 PM.png",
        1556,
        534,
        "#fbfcfc"
      ],
      "caption": "Image shows setting up your user details"
    }
  ]
}
[/block]
#Step 3. Create Message

See our <a href="https://documentation.onesignal.com/docs/designing-emails" target="_blank">Email Design Guide</a> for more details using the Email Composer, Saving Templates, Unsubscribe Links and Message Personalization!

#Step 4. Schedule

Emails can be sent immediately or scheduled up to 1 month in advance.

## Test Messages
At any time you can test your emails by scrolling to the bottom and clicking **Send Test Message**. All test messages are sent immediately, regardless of what is set up in Schedule.
[block:callout]
{
  "type": "warning",
  "title": "Tag Substitution Limitation",
  "body": "Tag Substitution will not work with **Send Test Message**. You will need to setup a segment to send to yourself to test or use the API."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f08d58-schedule.png",
        "schedule.png",
        1300,
        286,
        "#fafafb"
      ],
      "caption": "Image shows ability to scheduling of emails"
    }
  ]
}
[/block]
#Step 5. Confirm Message
Once you've decided on an email you like, click **Confirm Message** and make sure everything checks out. If it does, click **Send Message** in confirmation modal, and your email will start sending. 

[block:callout]
{
  "type": "success",
  "body": "You have successfully created and sent an email using OneSignal!",
  "title": "Done!"
}
[/block]