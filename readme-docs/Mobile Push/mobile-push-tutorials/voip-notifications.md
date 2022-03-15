---
title: "VoIP Notifications"
slug: "voip-notifications"
excerpt: "Sending VoIP Notifications with OneSignal."
hidden: false
createdAt: "2018-03-17T01:19:38.154Z"
updatedAt: "2020-08-12T22:11:53.122Z"
---
OneSignal does allow sending VoIP notifications for Android and iOS. However, our SDK does not support registration of a VoIP token at this time. This guide will share exact steps you need to take to get setup.

## Android VoIP Setup

Android does not have the concept of "VoIP Push" the same as iOS. Notifications will just work, including data-only messages where you can start an Activity instead of showing a push.

If you need to call custom class for showing native UI for example, you would use the Android `NotificationExtenderService` so you can override the notification and show your custom UI or start your custom Activity.

Visit our [Service Extensions](doc:service-extensions#notification-extender-service) docs for more on setting up the `NotificationExtenderService`.

Also, see [Android's documentation for setting up a calling app](https://developer.android.com/guide/topics/connectivity/telecom/selfManaged).

## iOS VoIP Setup
[block:callout]
{
  "type": "warning",
  "title": "iOS 13 Update!",
  "body": "Please review this thread by an Apple Employee which talks about the iOS 13 requirements for VoIP needed to be implement in your app.\nhttps://forums.developer.apple.com/thread/117939#thread-message-373438"
}
[/block]
###1. Add PushKit into your app.

Implement Apple's [PushKit API](https://developer.apple.com/documentation/pushkit) directly into your app to get a VoIP token. 

See [Apple's VoIP Best Practices](https://developer.apple.com/library/content/documentation/Performance/Conceptual/EnergyGuide-iOS/OptimizeVoIP.html) for more help on getting setup.

###2. Create a new OneSignal App for your VoIP device subscribers

We recommend using a 2nd OneSignal App with a different `app_id` specifically for your VoIP notifications. This way you can still send normal notifications and use all our features on your main OneSignal `app_id`.

Your OneSignal `app_id` for regular push notifications goes into your OneSignal `Init` method in your app.

Your OneSignal VoIP Notification `app_id` is used for sending VoIP notifications.

The certificate uploaded for the VoIP app must be a VoIP Services Certificate. You must use the same bundle id for the VoIP cert as you do for your main app.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6101554-Screen_Shot_2020-04-26_at_1.07.52_PM.png",
        "Screen Shot 2020-04-26 at 1.07.52 PM.png",
        1868,
        1624,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
###3. Add the device with a VOIP token

Once you have a VoIP token use the [OneSignal API Add a Device POST call](ref:add-a-device) to add the device to your 2nd VoIP Notification App ID.
[block:callout]
{
  "type": "warning",
  "title": "IMPORTANT: Common errors occur here",
  "body": "Include the `test_type: 1` [API parameter](https://documentation.onesignal.com/reference#body-parameters---add-a-device) if you are testing the new device in a non-production environment. \nThis is the reason for seeing \"Failed\" or \"Errored\" notifications and a \"Mismatched User Environment\" error in your app's settings page, see [details here here](https://documentation.onesignal.com/docs/mismatched-user-environment)."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json\" \\\n     --data-binary \"{\\\"app_id\\\" : \\\"YOUR_APP_ID\\\",\n\\\"identifier\\\":\\\"DEVICE_VOIP_TOKEN\\\",\n\\\"device_type\\\":0,\n\\\"test_type\\\":1\n}\"\nhttps://onesignal.com/api/v1/players",
      "language": "curl"
    }
  ]
}
[/block]
###4. Send VoIP Notifications

You can then start using [OneSignal create notification REST API POST call](ref:create-notification) to send notifications.

Make sure you use the parameter `apns_push_type_override` with the value `voip`

Make sure to use the VoIP Notification `app_id` in your Notification POST call.
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_VOIP_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"apns_push_type_override\\\": \\\"voip\\\",\n\\\"include_player_ids\\\": [\\\"YOUR_PLAYER_ID\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl"
    }
  ]
}
[/block]
## FAQ

### Do [Confirmed Deliveries](doc:confirmed-deliveries) work with VOIP?

Since VoIP notifications work much differently than regular push, [Confirmed Deliveries](doc:confirmed-deliveries) will not be tracked for them. Confirmed Deliveries requires the Notification Service Extension which may not start with VoIP.

The recommended option is to setup the iOS VoIP event: `pushRegistry(_:didReceiveIncomingPushWith:for:completion:)` which is simpler as it is part of your main app target instead of having to bridge to the Notification Service Extension.

More details on this event in [Apple's VoIP docs](https://developer.apple.com/documentation/pushkit/responding_to_voip_notifications_from_pushkit#3377587).