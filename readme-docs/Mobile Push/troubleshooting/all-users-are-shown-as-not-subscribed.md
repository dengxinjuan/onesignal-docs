---
title: "No Subscribers Troubleshooting"
slug: "all-users-are-shown-as-not-subscribed"
hidden: false
createdAt: "2021-03-18T21:58:14.401Z"
updatedAt: "2021-03-18T22:01:00.287Z"
---
The following are all reasons why you may not see users on the dashboard after installing your SDK:

#### Incorrect OneSignal AppID 
Double check you're passing the correct id to OneSignal init in your app's code. Your app id is shown in [Keys & IDs](doc:accounts-and-keys).

#### OneSignal Init isn't called
Add logging before and after you call OneSignal init. To make sure the code is running. See our [SetLogLevel Method](https://documentation.onesignal.com/docs/sdk-reference#section-set-log-level) for details on adding logging.

#### Device Logs show errors
Check the device log for any errors or warnings.

<span class="label-all label-android">Android</span> - Check the logcat in Android Studio or Eclipse. You can also run ddms found in `<android-sdk>/tools/ddms` or run `adb logical`

<span class="label-all label-ios">iOS</span> - Open Xcode and go to **Window -> Devices**. Select your device on the right then the log will show on the bottom. If you don't see the log click the small up arrow on the bottom of the window.


## iOS
**Required Capabilities** - Make sure "Push Notifications" are enabled in your Xcode project. To do this, select the root project and under the **Capabilities** tab enable "Push Notifications", and then enable "Background Modes" and check "Remote notifications".

<img src="https://files.readme.io/VflTGOPzRDu2YmhiRgiV_Xcode%20capabilities.png"/>


**App Permissions** - If you did not get a prompt asking for notification permissions make sure it is enabled for you app under System Settings > Notifications.

**Logs** - Check the Xcode log for any errors or warnings.

**Simulator** - You must run on a real device, the simulator can not subscribe for push notifications due to Apple's restrictions.

**Other Plugins / SDKs** - Other plugins or SDKs that also include push notifications can interfere with registering. Try temporarily removing them.

## Android
**Google Play services** - Make sure this is installed under Settings > App
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/uGXcaayvSk6SeoKzcCug_GooglePlayServices_Android.png",
        "GooglePlayServices_Android.png",
        "720",
        "548",
        "#ce374f",
        ""
      ]
    }
  ]
}
[/block]

**Emulator** - We recommend testing on a real device, over using an emulator. If you using AVD in the AndroidSDK make sure the "Target" has "Google APIs" in the name and is API Level 19 or greater.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7TsyvBwKQjGE0dPr34XG_Valid_Android_AVD_for_push.png",
        "Valid_Android_AVD_for_push.png",
        "535",
        "217",
        "#2b65ae",
        ""
      ]
    }
  ]
}
[/block]
**Log** - See the device's logcat for any errors or warnings.

**Enable OneSignal Logging** - Look for the SetLogLevel function in API Reference for the SDK you using to enable.