---
title: "Android Mismatched Users"
slug: "mismatched-users"
excerpt: "Configuration Notice For Android Apps"
hidden: false
createdAt: "2016-09-20T08:01:34.167Z"
updatedAt: "2021-08-30T21:14:26.166Z"
---
**Mismatched Users** is thrown when Google returns a `MismatchSenderId` error. This is because some users' FCM registration tokens are tied to a Google Server API key that no longer matches their current project's Google Server API key.

This generally occurs if..
1. your Firebase project was deleted
2. you changed the Firebase Project Id and/or Firebase Server API key
3. you are still using the GCM keys and need to switch over to FCM, see [Updating GCM To FCM](#update-gcm-to-fcm)

#Steps to Resolve

**1.** Open your [project's Firebase Developer Console](doc:generate-a-google-server-api-key) and navigate to the Firebase Project Number (Sender Id) and the Server API Key.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/301e04e-Screen_Shot_2019-12-30_at_2.13.57_PM.png",
        "Screen Shot 2019-12-30 at 2.13.57 PM.png",
        3108,
        1152,
        "#ced1d6"
      ]
    }
  ]
}
[/block]
**2.** Make sure these keys match in your OneSignal **Settings > Platforms > Android configuration** **Firebase Server Key** and **Firebase Sender Id**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5ea278-Screen_Shot_2019-12-30_at_2.15.20_PM.png",
        "Screen Shot 2019-12-30 at 2.15.20 PM.png",
        2452,
        1490,
        "#a0a2a3"
      ]
    }
  ]
}
[/block]
**3.** If your keys match, then the listed devices are likely old test devices that can be [deleted](doc:delete-users) or open the app again on these devices to be moved to the new keys. Press **SAVE** on the OneSignal Android modal to clear the warning.

If you're using another SDK that uses push notifications, make sure the same Google Project Number is used both in our SDK and the other SDKs.

If your Firebase keys were deleted or have changed, you can use new keys and update the OneSignal configuration by following these steps:
[block:callout]
{
  "type": "warning",
  "title": "Android Messaging Warning",
  "body": "Keep in mind that changing your current setup will cause all devices that subscribed to the old project number to become invalid and will not be able to receive notifications until they re-open the app. Upon which, our SDK will update them to the new project number. No app update required."
}
[/block]
#Steps to change Android FCM Keys

<span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">Contact Support</a> with the following data:

1. Your OneSignal App Id. See [Keys & IDs](doc:accounts-and-keys) to find this.
2. Your new Firebase Sender ID
3. Your new Firebase Server API key

We will update it as soon as possible.

#Update GCM to FCM
If you are changing from GCM to FCM you can import the GCM keys into Firebase which will keep the same project number / sender ID but will make it FCM.

Within https://console.firebase.google.com press "Add project" and select your existing Google project to import it to FCM.

You will see your GCM projects listed when you click the down arrow like this: https://i.imgur.com/ztLmdYJ.png

Your Sender ID should stay the same. Your Server API key may change. Follow the [steps to change Android FCM Keys](#steps-to-change-android-fcm-keys).