---
title: "Notifications Not Shown - Web Push"
slug: "notifications-not-shown-web-push"
excerpt: "Common reasons why Web Push notifications are not showing on your device."
hidden: false
createdAt: "2021-07-28T19:21:08.719Z"
updatedAt: "2021-09-07T01:06:42.348Z"
---
When a notification shows as "Delivered" in OneSignal, it means we have successfully sent the notification to the FCM/APNS/WNS servers which then distribute the notifications to your subscribers.

The following are reasons why notifications may show as "Delivered" on the OneSignal dashboard or API, but are not visible on your device or website.

#Notifications are blocked in Settings
This is the most common reason. Check your browser settings on desktop or app settings on mobile:

## Windows Notification Settings

Turn off Focus Assist: https://support.microsoft.com/en-us/windows/turn-focus-assist-on-or-off-in-windows-10-5492a638-b5a3-1ee0-0c4f-5ae044450e09

Check **Settings** > **Notifications & Actions** > Turn on **Get notifications from apps and other senders**. Make sure your site and browser are also enabled. More details in this article: https://support.microsoft.com/en-us/windows/change-notification-and-action-settings-in-windows-10-8942c744-6198-fe56-4639-34320cf9444e
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb85585-f0eb72bb-313f-b80e-480c-46321fdb5ebd.png",
        "f0eb72bb-313f-b80e-480c-46321fdb5ebd.png",
        558,
        317,
        "#eeebeb"
      ]
    }
  ]
}
[/block]
## macOS Notification Settings

In the System Preferences > Notifications > Chrome or browser of choice, make sure "Allow Notifications" is turned on.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3259e81-Screen_Shot_2020-06-02_at_2.07.56_PM.png",
        "Screen Shot 2020-06-02 at 2.07.56 PM.png",
        484,
        400,
        "#dbdde1"
      ]
    }
  ]
}
[/block]
In System Preferences > Notifications > Do Not Disturb, make sure this is mode is not turned on. More details: https://www.imore.com/how-use-do-not-disturb-mac
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33138bf-Screen_Shot_2020-06-02_at_2.20.27_PM.png",
        "Screen Shot 2020-06-02 at 2.20.27 PM.png",
        485,
        400,
        "#dbdce0"
      ]
    }
  ]
}
[/block]
macOS also has temporary Do Not Disturb notification settings in the top right menu > scroll up. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a9aa29-Screen_Shot_2020-09-22_at_3.05.26_PM.png",
        "Screen Shot 2020-09-22 at 3.05.26 PM.png",
        338,
        176,
        "#343848"
      ]
    }
  ]
}
[/block]
## Android Notification Settings

Check in your Settings > Notifications > Chrome (or browser of choice). Make sure "Show notifications" and your website are checked.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b75b427-Screenshot_20210816-174706_Settings.png",
        "Screenshot_20210816-174706_Settings.png",
        800,
        873,
        "#101418"
      ]
    }
  ]
}
[/block]
# Network issues - No Internet
Devices must be online to receive push notifications. If your device is turned off, in airplane mode, has unstable or no internet connection, the push will not show until a proper connection is made. You can set the timeframe Google and Apple Servers will wait for a connection with the [Time To Live (TTL) Parameter](doc:how-notifications-work#time-to-live) (the default is 3 days).

Also check the network / WiFi you're connected as it may have closed your connection to Apple or Google servers'. Try disabling and re-enabling your internet connection. See our [Notifications delayed](doc:notifications-delayed) troubleshooting guide for more details details.

# Not Subscribed
Make sure your device is still subscribed to push notifications. You can [find your player id with this guide](doc:users-and-devices#finding-users) to make sure your device is still subscribed.

# Not Targeted In the Push

1. Check the segment you sent the push to and make sure it is setup correctly. This is under [Segments](doc:segmentation). Sometimes an incorrect filter is added to the segment removing certain devices.

2. Check the [Player ID](doc:users#player-id) record in the Audience > All Users section of the dashboard. Under the "Segments" column, you will see if that user is in the segment targeted for push

# Service Worker or PWA
If you have another service worker or PWA on the site, this can cause issues with the OneSignal Service Worker required for push notifications.

Please see our [Service Worker guide on integrating multiple service workers](https://documentation.onesignal.com/docs/onesignal-service-worker-faq#integrating-multiple-service-workers)

# Browser is Closed

Some browsers will not receive push if it is not running. More details in our [Browser Behavior Guide](doc:browser-behavior).

# Clearing Browser Data

Clearing your browser cookies, data, and/or history will cause the browser to not get notifications any longer and will need to revisit the site to re-subscribe. See <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">Clearing your cache and resetting push permissions</a> for more details.

# Browser App Data Full

If your mobile browser app has reached its data limit or its data is full, you will need to clear the data on the app.

If your mobile browser app has many unread push notifications and/or many tabs open, this can cause notifications to now show.

# Unsupported Browser

Users must subscribe to notifications on their desktop or mobile device to receive notifications and it must be a browser that supports push notifications. Please see [Supported Web Platforms](doc:web-push-setup#section-platform-support).

## Full Screen

Full screen mode in some older browser versions prevent web push notifications from appearing. Make sure no windows are in full screen mode. Please see [Web Push Troubleshooting Docs](https://documentation.onesignal.com/docs/troubleshooting-web-push) for more.

# Debugging Web Push Notifications

Open Chrome and go to your website page with the OneSignal code. 
- **Do not use Incognito mode or Guest Browser mode.** 
- Do not have any other tabs or windows open to your site.

**Mobile Device Debugging**: 
- Do not use iOS (iPhone/iPad does not support web push).
- Use Android, plugin your android device into your desktop with a USB cable.
  - **Chrome**: Open this link on Chrome on Desktop: `chrome://inspect/#devices` then follow the below instructions using your mobile device.
  - **Firefox**: Follow this guide: https://developer.mozilla.org/en-US/docs/Tools/about:debugging

##1. Reset Browser Permissions

Follow these steps to reset browser permission to access site like a first time user.

1. Click the lock next to your URL
2. Next to Notification, select "Ask (default)"
3. Click Cookies

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5017442-Screen_Shot_2021-05-04_at_8.38.33_AM.png",
        "Screen Shot 2021-05-04 at 8.38.33 AM.png",
        1680,
        782,
        "#516565"
      ]
    }
  ]
}
[/block]
4. Select your site
5. Click Remove
6. Click Done

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5df2fd5-Screen_Shot_2021-05-04_at_8.42.12_AM.png",
        "Screen Shot 2021-05-04 at 8.42.12 AM.png",
        1680,
        1152,
        "#515a59"
      ]
    }
  ]
}
[/block]
7. Reload the page

You have successfully reset your browser data for your site and visiting it like a first time user.

##2. Subscribe to your site

Follow the steps you normally take to get prompted for push and subscribe to your site.

##3. Find your Player ID and send yourself a Push Notification

1. Using Chrome, go to your site url with the OneSignal code. Open the JavaScript debugging console in one of the following ways:
- press F12, or
- right click the site and press "Inspect", or
- in the Chrome Menu select View > Developer > JavaScript Console

2. Open the Console 
3. Use this code to get your new OneSignal Player ID:

`OneSignal.getUserId(function(id){console.log(id)});`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/23255e3-Screen_Shot_2021-05-04_at_8.52.04_AM.png",
        "Screen Shot 2021-05-04 at 8.52.04 AM.png",
        1680,
        854,
        "#526962"
      ]
    }
  ]
}
[/block]
If you do not get a Player ID, make sure you followed the steps and are subscribed to your site.

4. If you have a player id, use this code to send yourself a push notification:
`OneSignal.sendSelfNotification();`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f3eeabd-Screen_Shot_2021-05-04_at_8.58.46_AM.png",
        "Screen Shot 2021-05-04 at 8.58.46 AM.png",
        1680,
        824,
        "#536861"
      ]
    }
  ]
}
[/block]
5. If you do not get the notification, try [Debugging using Browser Developer Tools](https://documentation.onesignal.com/docs/troubleshooting-web-push#debugging-using-browser-developer-tools).