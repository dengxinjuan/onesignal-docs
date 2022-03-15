---
title: "iOS: Provisional Push Notifications"
slug: "ios-provisional-push-notifications"
excerpt: "Provisional Notifications can be sent to users without needing to first request notification permissions."
hidden: false
createdAt: "2021-08-10T16:35:12.037Z"
updatedAt: "2021-09-11T01:17:19.481Z"
---
iOS 12 introduced Provisional (Also known as Direct-To-History) push notification authorization. This means that instead of having to prompt the user for permission to send them push notifications, your app can request provisional authorization. 

As these are provisional there is some reduced functionality including

* No banner shown
* No corresponding sound
* No user alert alert
* Sent to the Notification Center
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df78c79-example-notification.png",
        "example-notification.png",
        2460,
        1278,
        "#e0ccd5"
      ],
      "caption": "Images shows provisional notification prompting user to keep notifications available from provider"
    }
  ]
}
[/block]
If the user selects **Keep**... in response notification, you have the options:

* Deliver Quietly: Subscribes the user to quiet push notifications without banners, badging, and sounds
* Turn Off: Keeps push notifications silent and have the same experience as this one. Additionally, it removes the options to "Keep..." or "Turn off..."


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e9db683-example-notification2_1.png",
        "example-notification2 (1).png",
        2460,
        2172,
        "#ddd8d9"
      ],
      "caption": "Image showing user ability to deliver notifications quietly, turn them off or go to settings"
    }
  ]
}
[/block]
You can still prompt the user to subscribe normally to push even with these turned on or turned off.

--- 

## How do I disable or enable provisional authorization?

To enable or disable provisional authorization for your app, go to your OneSignal dashboard **Settings > Apple iOS > Advanced Configuration > Enable iOS 12** direct to history option for your app (which currently requires using the OneSignal SDK 2.9.0 or newer).

To disable uncheck the box (this is unchecked by default).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c351640-APNs_Configuration.png",
        "APNs Configuration.png",
        3837,
        1941,
        "#f5f6f7"
      ]
    }
  ]
}
[/block]
--- 

## What is the difference between Provisional vs. Normal Authorization?
 
Once you enable provisional notifications for your app, iOS 12 users will automatically be authorized the next time they launch the app.

However, your application can still request push notification permissions traditionally, which will still cause the permission prompt to be shown to the user.

In addition, if your app does not set the *kOSSettingsKeyAutoPrompt* iOS setting to `false` during `init()`, the SDK will still show the normal permission prompt, and your app will not get provisional permission.

Once you've enabled direct to history in the Dashboard, our SDK will automatically request provisional authorization and you will be able to send push notifications to these users. 

However, if you only want to request provisional authorization in only some situations, you can also use a new method in our SDK:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.registerForProvisionalAuthorization({ accepted in\n    //handle authorization\n})",
      "language": "swift"
    },
    {
      "code": "[OneSignal registerForProvisionalAuthorization:^(BOOL accepted) {\n    //handle authorization\n}];",
      "language": "objectivec"
    }
  ]
}
[/block]
--- 

## How do I update the App Title?

If you changed your app name and/or would like to change the App Title, simply update the "Display Name" in Xcode for the main app target and release an app update. 

Devices will see a push containing the new App Title once the user restarts the device.