---
title: "Data & Background Notifications"
slug: "data-notifications"
excerpt: "How to send data/background/silent notifications. VoIP notifications using OneSignal. Works with iOS, Android and derivatives like Amazon."
hidden: false
createdAt: "2017-10-25T22:22:19.688Z"
updatedAt: "2020-11-11T21:28:16.730Z"
---
Background/Data notifications are "silent" meaning they do not display any message or play a sound when received by your app. They are designed to keep your app's data "up-to-date" by providing a way to "wake up" the app to refresh the data in the background.
[block:callout]
{
  "type": "warning",
  "title": "Background/Data Notification Limitations",
  "body": "**If you force close the app, it cannot receive background/data notifications.**\n\n- iOS Apps are force closed when you [swipe them away](https://support.apple.com/en-us/HT201330).\n\n- Android Apps can be force quit in the settings, but some device manufacturers force quit the app automatically when swiping them away. [More details](doc:notifications-show-successful-but-are-not-being-shown#android-mobile-app-notifications-not-showing)."
}
[/block]
#### Limitations of Non-native SDKs
[block:callout]
{
  "type": "warning",
  "body": "If you are using a non-native SDK like Unity, React Native, Cordova, or Flutter, you must use native Java/Kotlin or Swift/Objective-C to implement Data Push Notifications.\n\niOS will need to implement a special delegate. You can learn more at the bottom of [Handling Remote Notifications](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1).\n\nFor Android, you will need to implement the [NotificationExtenderService](doc:service-extensions#android-notification-extender-service).",
  "title": "Limited Support for Non-Native SDKs"
}
[/block]
## Setup and Send Silent Notifications

### iOS Background Notification Setup

Before getting started, we highly recommend getting familiar with Apple's [Pushing Background Updates to Your App](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app?language=objc) and [Apple's Guide on Creating Notification Payloads](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW1).

Setting up and sending background notifications in iOS requires 3 components:

#### 1. Notification Service Extension (NSE)

You must have the [Notification Service Extension](https://documentation.onesignal.com/docs/service-extensions#section-notification-service-extension) setup in your app. See Step 1 of our [iOS Native SDK setup guide](doc:ios-sdk-setup) to add one to your Xcode project if you have not done so already.

#### 2. Notification Payload Data

You must not send a message (no `contents`) and you must send `content_available` to wake the app if it is running in the background.

To add custom data, use the [Additional Data Field in the OneSignal Dashboard](https://documentation.onesignal.com/docs/sending-notifications#advanced-settings) or with the [API data parameter](doc:api-reference#attachments).

#### 3. Handle Notification Data

**Native iOS Apps:** Process the data within the [Notification Received Handler](doc:sdk-reference#onesignal-notification-events) while the app is running in the foreground or background.

**Non-Native iOS Apps:** Process data within the Native iOS API within the `AppDelegate` [`application(_:didReceiveRemoteNotification:fetchCompletionHandler:)` method](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application).

[block:callout]
{
  "type": "warning",
  "title": "iOS Force Quit Limitations",
  "body": "Apple does not allow the processing of background data if the App has been swiped away. \n\nIf the app has been swiped away, you will need to add `contents` (a message) to the push (cannot be a background message) and handle the data within the [UNNotificationServiceExtension.didReceive method](doc:service-extensions#ios-notification-service-extension). \n\n**There is no way to process a background notification when the app has been force quit.**"
}
[/block]
### Android Data Notification Setup

The OneSignal SDK is set up to only send data notifications to subscribed devices. If you want to target unsubscribed devices with data notifications, you will need to follow [this workaround](https://github.com/OneSignal/OneSignal-iOS-SDK/issues/302).

Data notifications are handled within the [NotificationExtenderService](doc:service-extensions#android-notification-extender-service) - This can be set up to receive data notifications when your app is not running, or to override how notifications are shown in the notification shade. 


### Background/Data Notifications with the REST API

OneSignal will automatically send the notification as a data notification under the following [notification parameter](ref:create-notification#content--language) conditions:

   - `content_available` : `true`
   - `alert` is omitted
   - `badge` is omitted
   - `sound` is omitted
   - `category` is omitted
   - `thread_id` is omitted
   - `subtitle` is omitted
   - `contents` is omitted
   - `headings` is omitted

---

## Sending VoIP Notifications

OneSignal supports VoIP notifications for iOS. Our SDKs do not support registration for a VoIP token at this time.

See our [VoIP Notifications Setup Guide](doc:voip-notifications) to get started.

## FAQ

### Do [Confirmed Deliveries](doc:confirmed-deliveries) work with Silent Push Notifications?

On iOS, unfortunately this is not possible right now.

While we use the NotificationServiceExtension to send the confirmed delivery, iOS will not trigger the NSE if you do not add a message to the body of the push. It is also not possible to work around this by setting a body then making it nil or blank in the NSE. If you try to do that iOS puts back the body and displays it. You can't prevent a notification from showing with the NSE either.