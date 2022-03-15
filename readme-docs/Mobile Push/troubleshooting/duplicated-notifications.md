---
title: "Duplicated Notifications"
slug: "duplicated-notifications"
excerpt: "Troubleshooting Duplicate Notifications"
hidden: false
createdAt: "2016-09-20T07:14:32.850Z"
updatedAt: "2021-12-14T21:12:13.192Z"
---
Usually duplicate notifications occur due to sending the same push data multiple times. If you see multiple notifications sent in your Delivery Tab with the same message, check your server code that API requests are not repeated with retries or other code errors.

If you are moving to OneSignal and continue to send push from a previous messaging system, this can also cause duplicates and you should discontinue sending from the previous messaging system when you start sending from OneSignal.

**Android**: If using versions 4.4.1 - 4.6.2 of the Android Native SDK, update to 4.6.3 or higher.

Check to make sure you don't have another push notification plugin/SDK in your app as it could be trying to parse the OneSignal notification, showing it twice. Our Android SDKs prevent duplicate notifications by checking the notification payload for [OneSignal specific data](https://documentation.onesignal.com/docs/duplicated-notifications#section-what-happens-if-i-have-2-different-notification-sd-ks-in-my-app).

Android devices with 2 copies of the app installed on the device can also receive duplicate notifications. This could happen if you have a production and staging / dev app installed at the same time with different Android package names. This would result in two different player_ids and two different push tokens.

You can long press on each notification to ensure they are coming from the same app.

**iOS**: If there were 2 or more subscribed device records in our database with the same Push Token then the device would get 2 different notifications and each could be tapped on. We have checks to help prevent this from happening but can happen if you try importing the same token multiple times.
[block:callout]
{
  "type": "info",
  "body": "Make sure you are using the latest version of the OneSignal SDK and try to get a log from the device if you can reproduce it.\n\nInclude as much as you can of the following to help us find your issue quicker: \n\n- Version of our SDK \n- Version of the SDK\n- Device OS version\n- Building on Mac or Windows\n- Xcode log or logcat of the app starting and the problem point\n- Any other libraries or plugins in your app\n- Details on reproducing your problem.",
  "title": "Still having problems? We're happy to help!"
}
[/block]
**Web Push**: Duplicate notifications happen when you add the OneSignal App ID to 2+ different origins and subscribe to those origins.

An origin is defined as: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

Since Web Push subscriptions are tied to the user's browser profile and site origin, when you send a notification from the OneSignal App ID, it will show a notification per origin the user is subscribed under.

To fix this on your browser, [reset your browser data](doc:troubleshooting-web-push#section-clearing-your-cache-and-resetting-push-permissions) for each origin you used under this App ID.

If you suspect this is an issue for multiple users, you will need to create a brand new OneSignal App and add the new App ID to your site's OneSignal init code.

Users will need to return to the site and subscribe again.

You can also get duplicate notifications on web if you subscribe to the same site on multiple browsers and/or the same browser but multiple Browser Profiles. When you click the push, it should open the browser under the browser profile you are subscribed under. You can [reset your browser data](doc:troubleshooting-web-push#section-clearing-your-cache-and-resetting-push-permissions) to stop it from showing on either or both.

----

#FAQ

##What happens if I have 2 different Notification SDKs in my app?

On Android, our notification payload contains a “custom” key with a nested “i” value. If the notification payload received does not contain this, our SDK will not process the notification.

On iOS, we also have the same “custom” key with nested “i” value, however because Apple has a standard payload it will show all notification sent to the device. So if you send a push from your old platform to a device, do not send the same notification from OneSignal or the user will get it twice.

For iOS Click Handlers, depending on how you handle notification opens you might have to add a check for "custom": { "i": ""} as well. Or if you have your own format, we recommend checking for yours instead.

##How to send push from a previous provider and OneSignal?

On Android, you should remove your previous provider's notification handling code upon adding OneSignal and releasing the app. As users update the app, the previous push code will be removed and they will not get push sent from that provider.

On iOS, you should add OneSignal and release the app update, but continue to send from the previous provider until you are ready to move only to OneSignal. If you send from both OneSignal and your previous provider to iOS, you may send duplicate notifications.