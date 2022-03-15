---
title: "App Version Update"
slug: "app-version-update"
hidden: false
createdAt: "2021-07-27T20:44:38.202Z"
updatedAt: "2021-08-19T23:03:27.378Z"
---
In-App Messages are a great way to target devices on older versions of your app and let them know why they should upgrade your app to the latest version.

#Requirements

- You will need a way to programmatically detect the current version of your app.
- You will need to use the OneSignal SDK `addTrigger` method.

#Step 1. Setup Trigger Code

Within your code that checks the current app version, save the version as a `string` variable.

Then use the OneSignal `addTrigger` method. To pass in the app version as a value. See [In-App Message SDK Methods](doc:iam-sdk-methods).

For example:
[block:code]
{
  "codes": [
    {
      "code": "String appVersion\n  \nOneSignal.addTrigger(\"current_app_version\", appVersion);\n",
      "language": "java"
    }
  ]
}
[/block]
#Step 2. Setup In-App Message

In **Messages > In-App** you can use the default "New Feature Announcement" IAM or create your own.

## Audience

This should be "Show to all users".

## Message

Update the message and set a Button to use the URL click action. You can enter the store link as the URL. If you are unsure what your store link looks like, see these references:
- Android - https://developer.android.com/distribute/marketing-tools/linking-to-google-play.html
- iOS - https://developer.apple.com/library/archive/qa/qa1633/_index.html
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b9f558-Screen_Shot_2021-07-27_at_1.30.18_PM.png",
        "Screen Shot 2021-07-27 at 1.30.18 PM.png",
        1554,
        1176,
        "#e9eff5"
      ]
    }
  ]
}
[/block]
If you want to set for iOS and Android App stores separately, you can easily duplicate this IAM and target 2 Segments, one for Android and another for iOS using the "Device Type" data filter. Simply update this URL for the Android and iOS Segment targeted in each URL Action.

#Step 3. Triggers

Based on the Trigger code setup in Step 1. Set the **IN-APP TRIGGER** to be the `key` **is not** and set the `value` as the version of your app you want them to be on.

For example:

`current_app_version` **is not** `3.0.0`

Whatever version you detect from your app, if it is not the most recent version of your app, this will trigger.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/22b1f88-Screen_Shot_2021-08-19_at_4.02.20_PM.png",
        "Screen Shot 2021-08-19 at 4.02.20 PM.png",
        1754,
        462,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
#Step 4. Schedule and Re-Trigger

Depending on when the new release is available for download, you can set the "Start Showing" time to be that date.

Under **Advanced Settings** set "How often do you want to show this message?" to be how often you want to show the message. In this example, we will show it a total of 10 times with a gap of 3 days in between each show. This means we will only show it a total of 10 times, once every 3 days as long as the user still has the version less than the version we want them to be on.

Depending on how urgent the update is, you can set the number of times to be as many as you want and the gap to be how frequently you want.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c54383f-Screen_Shot_2021-07-27_at_1.41.32_PM.png",
        "Screen Shot 2021-07-27 at 1.41.32 PM.png",
        1746,
        966,
        "#fbfcfc"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Click Update Message",
  "body": "You are now done. Your users will get notified of your App Update based on their current version and frequency set in step 4."
}
[/block]