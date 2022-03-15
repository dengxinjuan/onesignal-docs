---
title: "Notifications Delayed"
slug: "notifications-delayed"
excerpt: "Possible reasons notifications can be delayed or not shown quickly."
hidden: false
createdAt: "2016-10-21T21:54:11.171Z"
updatedAt: "2020-08-04T00:19:04.135Z"
---
Normally push notifications arrive quite quickly. The most common reason for notifications being delayed is the device had unstable or no internet connection and the notification did not arrive until the connection was made (defaults to [3 days](doc:how-notifications-work#time-to-live)).

When notifications get sent from OneSignal, they go to Google (FCM), Apple (APNS), Windows (WNS), and other messaging servers. OneSignal is in charge of sending these requests to these Push Servers which then deliver it to your subscribers.

When looking at a notification in your [Message Reports](doc:notification-delivery) you can see how fast OneSignal sent the push when viewing the notification directly.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ecd43e-Screen_Shot_2020-02-04_at_1.55.46_PM.png",
        "Screen Shot 2020-02-04 at 1.55.46 PM.png",
        675,
        90,
        "#e6e8e8"
      ]
    }
  ]
}
[/block]
In the above case, we sent the push to the Google and/or Apple servers in 0.33 seconds.

If the device receiving the push does not get it right away, it could be an issue with the FCM, APNS servers (rare) or the device had unstable internet causing a delay (common).

Other issues can be as follows:

### Delays for notifications on Android Devices:

1. Some home and commercial wifi routers will cause the device's connection to Google's FCM servers to be closed. The device later re-opens the connection and receives the delayed notifications. (Discussed here: https://groups.google.com/forum/#!topic/android-gcm/Y33c9ib54jY) 

2. Some custom versions of the Android OS have a "power-saving" setting that can cause notifications to be delayed or ignored. For instance, Sony Xperia devices have a ["Stamina Mode"](https://talk.sonymobile.com/t5/Xperia-Z3-Compact/Notifications-not-Working-When-Phone-in-Sleep-Mode/td-p/879641) and other device's have similar modes discussed in our [Notification Not Shown Guide](doc:notifications-show-successful-but-are-not-being-shown#the-app-is-force-stopped)

3. Some Android devices can enter a low power mode when their battery is low that may cause slight delays in receiving notifications. This is more common on Android 9 devices with Power Management Restrictions:
    - Android docs: https://developer.android.com/topic/performance/power/power-details
    - Testing: https://developer.android.com/about/versions/pie/power#testing

Setting High [Notification Priority](doc:how-notifications-work#notification-priority) can assist with older Android device 7-. Android 8+ now use [Android Notification Categories](doc:android-notification-categories).

4. [Doze Mode](doc:how-notifications-work#doze-mode) can delay notifications even when sending with the highest priority. This depends on Android's [App Standby Buckets](https://developer.android.com/topic/performance/power/power-details) and are subject to change.

5. Remote images and icons, adding an image to your notification could cause the notification to be delayed as it has to wait to download the full image(s) first. Try omitting your image(s) temporarily to rule this factor out.

### Delays for notifications on iOS devices:

1. Mentioned above, some home and commercial wifi routers will cause the device's connection to Google's FCM servers to be closed. The device later re-opens the connection and receives the delayed notifications. (Discussed here: https://groups.google.com/forum/#!topic/android-gcm/Y33c9ib54jY) 

2. Notifications may be delayed if "Restrict background data" is checked for the app, if Wifi-Optimization is turned on in the advanced settings, or if priority mode is enabled.

3. "Low Power Mode" is enabled. If in your Settings > Battery > Low Power Mode is enabled, this will reduce the rate at which notifications can be received or turn them off completely.

4. Data only notifications, without a message body, are sent at a normal priority instead of high due to Apple's limitations. These can be delayed by a few minutes.

5. Development builds of your app with connect to Apple's Sandbox APN server which may be slower. We recommend testing with release mode such as with an ad-hoc or test flight build so your app will use Apple Production APN server to rule out any delays their Sandbox server could cause.

6. Notification media attachments, adding an image to your notification could delay it up to 30 seconds as it downloads it. Try omitting your image temporarily to rule this factor out.

WhatsApp has a good list of instructions on troubleshooting delayed Android and iOS notification at the bottom of their FAQ page here: https://www.whatsapp.com/faq/en/android/20887936

### Delays for notifications on Web:

1. Mentioned above, some home and commercial wifi routers will cause the device's connection to Google's FCM/GCM servers to be closed. The device later re-opens the connection and receives the delayed notifications. (Discussed here: https://groups.google.com/forum/#!topic/android-gcm/Y33c9ib54jY) 

2. Depending on the browser being used, there are a few [factors that determine if a notification can be received when the browser is not running](https://documentation.onesignal.com/docs/browser-behavior#can-users-receive-notifications-even-when-the-browser-is-closed).