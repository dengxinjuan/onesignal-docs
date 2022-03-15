---
title: "Notifications Not Shown - Mobile Push"
slug: "notifications-show-successful-but-are-not-being-shown"
excerpt: "Common reasons why Mobile Push notifications are not showing on your device."
hidden: false
createdAt: "2016-09-20T07:15:43.427Z"
updatedAt: "2022-02-21T22:17:59.131Z"
---
"Delivered" notifications in OneSignal means we have successfully sent the notification to the push servers (FCM/APNS/WNS etc..). These push servers then distribute the notifications to your subscribers. The "Confirmed" stat means our SDK received the notification which should have been shown on the device. See [Confirmed Deliveries](doc:confirmed-deliveries) for more details.

The following are reasons why notifications may show as "Delivered" on the OneSignal dashboard or API, but are not visible on your device.

#Network issues
##No Internet
Devices must be online to receive push notifications. If your device is turned off, in airplane mode, has unstable or no internet connection, the push will not show until a proper connection is made. You can set the timeframe Google and Apple Servers will wait for a connection with the [Time To Live (TTL) Parameter](doc:how-notifications-work#time-to-live) (the default is 3 days).

##Wifi-connection, Firewall or VPN
Check the network / WiFi you're connected as it may have closed your connection to Apple or Google servers'. Try disabling and re-enabling your internet connection. Also try without wifi using cellular data.

If you are restricting traffic to or from the Internet, you need to configure it to allow connectivity with FCM which requires open ports to: 5228, 5229, and 5230. More details: https://firebase.google.com/docs/cloud-messaging/concept-options

APNS devices must connect to: TCP port 5223 & TCP port 443 or 2197. More details: https://support.apple.com/en-us/HT203609

If you check the logs from the app, you may also see:

```
ERROR: Encountered error during push registration with OneSignal: 
Error Domain=OneSignalError Code=0 "(null)" UserInfo={error=Error Domain=NSURLErrorDomain Code=-1004 
"Could not connect to the server." 
UserInfo={NSUnderlyingError=0x2834051a0 {Error Domain=kCFErrorDomainCFNetwork Code=-1004 "(null)" 
UserInfo={_kCFStreamErrorCodeKey=61, _kCFStreamErrorDomainKey=1}}, NSErrorFailingURLStringKey=https://api.onesignal.com/players, NSErrorFailingURLKey=https://api.onesignal.com/players, _kCFStreamErrorDomainKey=1, _kCFStreamErrorCodeKey=61, 
NSLocalizedDescription=Could not connect to the server.}}
```

# Not Targeted In the Push
1. Check the segment you sent the push to and make sure it is setup correctly. This is under [Segments](doc:segmentation). Sometimes an incorrect filter is added to the segment removing certain devices.

2. Check the [Player ID](doc:users#player-id) record in the Audience > All Users section of the dashboard. Under the "Segments" column, you will see if that user is in the segment targeted for push.

# App Push Permissions Disabled - Device Not Subscribed

**Android**,**iOS:** In your Device Settings > Notifications > Your App, you can turn on and off push notifications. 

Make sure push permissions are enabled for your device:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/98b0a08-Screen_Shot_2021-03-02_at_9.28.43_AM.png",
        "Screen Shot 2021-03-02 at 9.28.43 AM.png",
        1038,
        870,
        "#595b5c"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#Android Categories Disabled

**Android Settings App > Notifications > Your App** you should see "Show notifications" enable and all categories underneath enabled. If you have a category disabled, you will not get notifications from that category. 

In this example, the "Abandoned Cart - Urgent" Category is turned off. If I set this category in the notification, the device will not get this notification.

If no category is set, OneSignal uses a default "Miscellaneous" category. Make sure that is enabled if not setting categories. See [Android Notification Categories](doc:android-notification-categories) for more details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a83479-Screen_Shot_2021-07-29_at_7.47.11_AM.png",
        "Screen Shot 2021-07-29 at 7.47.11 AM.png",
        800,
        650,
        "#adafb1"
      ]
    }
  ]
}
[/block]
# The app is currently In Focus
Keep the app running, but put it in the background/out of focus when testing.

If your app is open while sending, you may be hiding the notification using the [Foreground Notification Received Event](https://documentation.onesignal.com/docs/sdk-notification-event-handlers) if on our updated Major release SDK or [In-Focus Displaying](https://documentation.onesignal.com/v7.0/docs/sdk-reference#app-in-focus-notification-display) is set to `None` or `0` if on an older version of OneSignal SDK.

# Low Power, Energy Saving
Some devices have a specific battery optimization that will stop or decrease rate of notifications showing.

**Android:**  In Settings, search for: 
- **Power Saving Mode** or **Energy Saving** - If "Power Saving Mode" and/or "Limit apps and Home Screen" is enabled, this will limit all background activity (push notifications) from being received.
- **Adaptive power saving mode** - If enabled, device will automatically turn on/off "Power Saving Mode" based on your usage patterns.
-  or **Battery Optimization** or **Background usage limits** - Battery optimized apps will have background functions (like push notifications) restricted. Make sure your app is Not Optimized.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/31971d1-Screen_Shot_2021-03-02_at_10.13.21_AM.png",
        "Screen Shot 2021-03-02 at 10.13.21 AM.png",
        1560,
        1100,
        "#373838"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
**iOS:** If the device has Low Power Mode enabled and has low power, it will reduce the rate at which notifications can be received. Check if enabled in **Settings > Battery > Low Power Mode**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bf91edd-Image_from_iOS.png",
        "Image from iOS.png",
        225,
        487,
        "#000000"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
# Do Not Disturb Mode
If **Do Not Disturb** is enabled, this prevents the notifications from "popping up" on the screen but still shows in the "Notification Center".

**iOS:** Disable within in **Settings > Do Not Disturb**.

**Android:** Disable within in **Settings > Notifications > Do Not Disturb**. Or search for "Do not Disturb" in Settings and disable.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/351162d-Screen_Shot_2021-03-02_at_9.44.49_AM.png",
        "Screen Shot 2021-03-02 at 9.44.49 AM.png",
        1512,
        1304,
        "#414242"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#Android App is Force Stopped

When an app is in a Force Stopped / Force Killed state most events including FCM messages for push notifications will not be received. An app can be placed in this state in the following ways.
   * From Settings > Apps, "Force Stop" is pressed.
   * Long pressing the back button on some devices.
   * Using a 3rd party task killer like Greenify.
   * Swiping away your app while remote debugging it. (Not the same as viewing the logcat but launching your app as a remote debug process.)
   * Automatically on some devices due to custom Android tweaks done by manufactures. This is a known issue affecting all push providers (not just OneSignal). We have [written a blog post about this](https://onesignal.com/blog/manufacturers-interfere-with-reliable-notifications/) and provide more details and discussion in [this Github Issue](https://github.com/OneSignal/OneSignal-Android-SDK/issues/956).

Based on your device manufacturer, you can follow these steps to enable push for your device. For your app users, if you want to help educate them on this issue, you can [send these specific devices In-App Messaging to enable proper settings](https://documentation.onesignal.com/docs/in-app-message-examples#target-certain-android-manufacturers-and-devices).
[block:parameters]
{
  "data": {
    "1-0": "**Huawei**",
    "1-1": "**Step 1:** Settings --> Advanced Settings or Power Saving --> Battery Manager or Protected Apps --> select the app to protect it. \n\n**Step 2:** Settings --> Apps or Notification Manager --> Advanced or Notify for your app --> Ignore Battery Optimizations, select the app and ignore it.\n\n**Step 3:** Settings --> Notification Panel & Status Bar --> Notification Center, select the app, then activate \"Allow Notifications\" and also \"Priority Display\".\n\n[Full Instructions](https://www.forbes.com/sites/bensin/2016/07/04/push-notifications-not-coming-through-to-your-huawei-phone-heres-how-to-fix-it/#3dd86e451ccc)\n\nPre-EMUI 5.0 / Android 7 - Go to Settings > \"Protected apps\", check your app. [Full Instructions](http://phandroid.com/2017/02/02/huawei-honor-emui-first-thing/)",
    "7-0": "**Sony**",
    "7-1": "Tap on the battery icon. Go to Power Management --> STAMINA mode --> Apps active in standby --> Add your app.",
    "8-0": "**Xiaomi**/\n**Redmi**",
    "8-1": "More details in [Android Central Post](https://www.androidcentral.com/how-fix-miui-push-notifications).\nAlso see the [Xiaomi Community Forum for more details](https://c.mi.com/thread-1545043-1-0.html#:~:text=Step%202%3A%20Go%20to%20settings,toggle%20for%20%E2%80%9CPriority%E2%80%9D%20on.).\n\nSettings > Installed Apps > Your App > Battery Saver > change option from \"Battery Saver\" to \"No restrictions\".\nOR\nSettings > Manage Apps' battery usage > choose your app > select \"No restrictions.\"\n\nProvide authorization to your app to run at startup by activating the AutoStart option in Settings > Installed Apps > Your App \nOR\nSecurity (App) --> Permissions --> Autostart - Enable your app\nOR\nSettings > Permissions > autostart > your app > toggle switch to turn on\n\nSettings > App Notifications > your app > toggle on \"Priority\"\n\nSettings > Notifications & status bar > Turn on \"Show Notification Icons\" (if you want to see icons) > App notifications > Your App > Show notifications\n\nSettings --> Developer Options. Disable \"memory optimization\". To enabled Developer Options go to Settings --> About. Tap on MIUI 8 times. [Full Instructions](https://www.forbes.com/sites/bensin/2016/11/17/how-to-fix-push-notifications-on-xiaomis-miui-8-for-real/#43a100107572)",
    "0-0": "**Asus**",
    "0-1": "Check your app in the [Auto-start Manager](https://edgeup.asus.com/2015/auto-start-manager-explained/).",
    "2-0": "**LeEco/LeTV**",
    "2-1": "**Step 1:** Settings --> Permissions --> Manage Auto Launch --> select the app to protect it. \n\n**Step 2:** Settings --> Battery --> Power Saving Management --> App Protection, select the app and ignore it.",
    "3-0": "**Lenovo**",
    "3-1": "Settings --> Power Manager --> Background App Management, select the app and ignore it.",
    "4-0": "**OnePlus**",
    "4-1": "Settings > Battery > Battery optimization > Top right 3-dot menu > Advanced optimization, turn off.\n\nSettings > Battery > Battery optimization > Your App > select Don’t optimize. \n\nSettings > Alert slider to make sure it’s set up the way you want.\n\nMake sure that Gaming mode is off or go to Settings > Advanced > Gaming mode and toggle Block notifications\n\nLook in Settings > Apps and check the Notifications settings for any problem apps.\n[More details](https://www.digitaltrends.com/mobile/common-oneplus-6-problems-and-how-to-fix-them/)",
    "5-0": "**Oppo**",
    "5-1": "Settings --> \"Security settings\" --> \"Data saving\" and enable your app.",
    "6-0": "**Samsung**",
    "6-1": "1 - Turn off Power Saving mode. This could be preventing notifications from displaying.\n2 - Turn off Do not disturb mode. This could also be blocking notifications.\n3 - Remove app from \"Sleeping\" mode in device's Settings > Battery and device care > Battery > Background usage limits > Sleeping apps > Touch and hold your app you don't want to sleep, and then tap remove.",
    "h-0": "Manufacturer",
    "h-1": "Description",
    "9-0": "**MIUI 10**",
    "9-1": "Settings > Battery & performance > Choose apps > Select the app that is not showing notifications > Select No restrictions\n\nSettings > Permissions > Autostart > Toggle slider next to the apps that are not getting push"
  },
  "cols": 2,
  "rows": 10
}
[/block]
More information on problematic devices can be found in our blog post: [Notifications are highly reliable, except when device manufacturers interfere](https://onesignal.com/blog/manufacturers-interfere-with-reliable-notifications/)

## Checking your app state
**1.** Run the following to check the current state of your app.
*Replace "com.company.appname" with your package name.*

```
adb shell dumpsys package com.company.appname | grep stopped
```
If you see `stopped=false` if everything is fine, otherwise you will see `stopped=true` then your app was force killed in some way.

**2.** Another way is to send a few notifications and check for the following GCM logcat entry.

```
W/GCM-DMM: broadcast intent callback: result=CANCELLED forIntent {
   act=com.google.android.c2dm.intent.RECEIVE pkg=com.onesignal.example (has extras)
}
```
If you seen this cancelled intent above then your app could not be started to process the notification.

Some device manufactures will white list apps from going into the force closed state. Example such as Gmail and Whatsapp.

## Additional Debugging

FCM provides a REST API to query the last time a device has been connected to FCM. See the following Google documentation on how to get this.
https://developers.google.com/instance-id/reference/server#get_information_about_app_instances

# iOS Mobile App Notifications Not Showing

The most common reason is an outdated version of the OneSignal SDK in the app. Make sure you updated to the latest version of the OneSignal SDK in your app. You should have [minimum version 2.10.1](https://github.com/OneSignal/OneSignal-iOS-SDK/releases).

## Xcode 11 change

If you are using Xcode 11, make sure you are using the latest version of the OneSignal SDK ([minimum version 2.10.1](https://github.com/OneSignal/OneSignal-iOS-SDK/releases)). You can open your [All Users](doc:users-and-devices) page and check the **SDK VERSION** column to see what version you are on. Xcode 11 made a breaking change that affects push token registration. More details here: https://onesignal.com/blog/ios-13-introduces-4-breaking-changes-to-notifications/