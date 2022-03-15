---
title: "App Clip Support"
slug: "app-clip-support"
hidden: false
createdAt: "2020-07-20T21:10:32.038Z"
updatedAt: "2020-07-23T22:16:33.722Z"
---
## **OneSignal support for App Clips**

**Create a new app for your App Clip in the OneSignal Dashboard**
To send notifications to App Clips via OneSignal you will need to create a new app in the dashboard for the App Clip. An App Clip requires a separate APNs certificate from its parent App since it has a different bundle identifier.

**Enabling push notifications in App Clips**
1. Setup OneSignal in your App Clip target in the same way as your full App, however App Clips do not support Notification Service Extensions so you can skip that part of the [iOS SDK setup guide](https://documentation.onesignal.com/docs/ios-sdk-setup).

2. In the info.plist for your App Clip make sure to add `NSAppClipRequestEphemeralUserNotification` to the `NSAppClip` dictionary and set its value to true. This will automatically enable the 8 hour push permission upon opening the App Clip. Note that users are able to disable this permission.
You can still request indefinite push permissions upon launch of the App Clip.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d22192-Screen_Shot_2020-07-23_at_3.05.41_PM.png",
        "Screen Shot 2020-07-23 at 3.05.41 PM.png",
        553,
        40,
        "#262729"
      ]
    }
  ]
}
[/block]
Apples documentation on this topic can be found [here](https://developer.apple.com/documentation/app_clips/enabling_notifications_in_app_clips).

**Advanced Experiences**
To send a notification to a particular App Clip experience you will want to use the "Target-Content-ID" field in the iOS platform settings. The value of this field will be the experience URL you created in AppStore Connect. Read Apple's guide for more information on Associated Domains and advanced App Clip experiences [here](https://developer.apple.com/documentation/app_clips/creating_an_app_clip).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/beeddff-targetcontentid.png",
        "targetcontentid.png",
        725,
        598,
        "#f0f2f4"
      ]
    }
  ]
}
[/block]
**Limitations of App Clips**
1. The Ephemeral push notification permission will only last 8 hours. Request indefinite push permissions like you would in the full application in order to send notifications past this 8 hour window.
2. Since App Clips do not support Notification Service Extensions we are not able to support images or other media in notifications.
3. Since App Clips do not support Notification Service Extensions we are not able to add additional action buttons that are not part of a pre-defined category in your app.
4. App Clips cannot request continuous location access, however they may request the When In Use authorization which lasts until the next day at 4:00 a.m.