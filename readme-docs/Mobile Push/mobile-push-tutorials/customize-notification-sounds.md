---
title: "Notification Sounds"
slug: "customize-notification-sounds"
excerpt: "Adding custom sounds to mobile notifications."
hidden: false
createdAt: "2016-09-29T00:32:20.299Z"
updatedAt: "2021-07-19T23:06:07.495Z"
---
Custom sounds are a way to provide a more unique, branded experience for your app. You may add a custom sound with every notification you send, or you may add sounds to just certain types of notifications. For instance, a game like "Jewel Breaker" may wish to have a jewel-like sound always played when receiving notifications. Meanwhile, a social network may wish to only play sounds when the user receives a message from another user to differentiate those notifications from more generic system notifications. 

# How to Add Custom Sounds

**For Mobile Apps only.** 

Web Push does not support custom sounds at this time. Browsers have this "in development":
- Chrome Thread: https://bugs.chromium.org/p/chromium/issues/detail?id=442131
- Firefox Thread: https://bugzilla.mozilla.org/show_bug.cgi?id=1105222

## 1. Create Sound Files
Be sure to create sound files according to the following rules. If the device cannot find the file in question, or if the file is not in a supported format, it will fall back to the default system notification sound. 
[block:callout]
{
  "type": "info",
  "title": "Sound Filename Recommendation",
  "body": "Keep sound filenames lowercase since some platforms ignore upper case letters for sound files. Instead of `AwesomeSound.wav` use `awesomesound.wav` or `awesome_sound.wav`."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Extensions",
    "h-2": "Notes",
    "0-0": "iOS",
    "1-0": "Android",
    "2-0": "Amazon",
    "0-1": "`.wav` `.aiff` `.caf`",
    "1-1": "`.wav` `.mp3` `.ogg`",
    "2-1": "`.wav` `.mp3` `.ogg`",
    "3-0": "Windows",
    "0-2": "Apple is picky about file formats. Sounds must be encoded as Linear PCM, MA4 (IMA/ADPCM), µLaw, or aLaw. Must be less than 30 seconds.",
    "3-1": "`.wav` `.mp3` `.wma`",
    "3-2": "Must be less than 10 seconds",
    "1-2": ""
  },
  "cols": 3,
  "rows": 4
}
[/block]
## 2. Add Sound Files to App
To adds sounds to notifications, you must include the sound files as resources within your app. External URLs are not supported.

### iOS
Add sound files to the appropriate location in your Xcode project depending on your SDK.
[block:parameters]
{
  "data": {
    "1-0": "Cordova, Ionic, PhoneGap",
    "2-0": "PhoneGap Build (PGB)",
    "h-1": "Folder",
    "h-0": "SDK",
    "2-1": "Add file to `www`. File **must** be called `beep.wav`",
    "1-1": "Add files to `Resources` directory within the Xcode project in `<project-root>/platforms/ios/project-name.xcodeproj`, and  (<a href=\"https://files.readme.io/Zn35Nuk8SAeADiXyRaTA_Cordova%20iOS%20custom%20notifiction%20sound.png\" target=\"_new\">see here</a>)",
    "0-0": "iOS Native",
    "0-1": "Add files to the Xcode project root. Make sure **Add to targets** is selected when adding files so that they are automatically add to the bundle resources (<a href=\"https://files.readme.io/9997e49-iOS_Resources.png\" target=\"_new\">see here</a>)",
    "3-0": "Unity",
    "3-1": "Add sounds anywhere in your Unity project, build your project, and then move those sounds to the Xcode project root."
  },
  "cols": 2,
  "rows": 4
}
[/block]
### Android (and derivatives like Amazon)
Add sound files to the appropriate folder in your project depending on your SDK. **If the folder does not exist, create it.** 
[block:parameters]
{
  "data": {
    "h-1": "Folder",
    "h-0": "SDK",
    "h-2": "Notes",
    "0-0": "Android & Amazon Native",
    "0-1": "`res/raw`",
    "2-0": "Cordova",
    "4-0": "PhoneGap Build (PGB)",
    "2-1": "`<project-root>/platforms/android/res/raw/`",
    "4-1": "`<project-root>/locales/android/raw/`\n\nSee [this github link](https://github.com/phonegap/build/issues/472#issuecomment-172662620) for more details on the directory structure if you're having issues.",
    "4-2": "",
    "5-0": "Unity",
    "5-1": "`Assets/Plugins/Android/OneSignalConfig/res/raw`\n\n*NOTE: Your sound and icon file names must be lowercase and can't contain anything else except underscores and numbers.*",
    "1-0": "React Native",
    "1-1": "`<project-root>/android/app/res/raw`",
    "3-0": "Ionic",
    "3-1": "`/android/app/src/main/res/raw/`"
  },
  "cols": 2,
  "rows": 6
}
[/block]

## 3. Send Notifications With or Without Sounds

### Android & Amazon

Android 8+ introduced [Notification Categories](doc:android-notification-categories) which must be setup to customize notification sounds. OneSignal will use the sound set in the Notification Channel for all versions of Android.

In **Settings** > **Messaging** > **Android Categories** create the channel and set **IMPORTANCE** to "Urgent" or "High". 

For **Sound** do **not** add the file extension when referencing the sound resource. For instance, `cat_meow_sound`.

For **No Sound**, set **IMPORTANCE** to "Urgent" or "High" and Sound to "OFF". Or you can set **IMPORTANCE** to "Medium" or "Low" for no sound.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c537b4-Screen_Shot_2019-07-02_at_6.25.01_PM.png",
        "Screen Shot 2019-07-02 at 6.25.01 PM.png",
        633,
        221,
        "#f2f3f3"
      ]
    }
  ]
}
[/block]
**RECOMMENDED:** You can then set the category name in the [Dashboard Push Messages](doc:sending-notifications) or use the [API `android_channel_id` parameter](ref:create-notification#appearance). The sound set in the category will work for all android versions.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/345c27d-Screen_Shot_2019-11-07_at_4.43.43_PM.png",
        "Screen Shot 2019-11-07 at 4.43.43 PM.png",
        684,
        132,
        "#e8ecf0"
      ]
    }
  ]
}
[/block]
### iOS 

Add the file extension when referencing the sound resource. For instance, `explode_sound.wav`. If you're using **PhoneGap Build (PGB)**, set the sound filename to `www/beep.wav`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ef1af6-messages-new-options-ios-sound.jpg",
        "messages-new-options-ios-sound.jpg",
        2500,
        418,
        "#eef1f2"
      ]
    }
  ]
}
[/block]
For **No Sound**, on iOS, pass in `nil` to the Sound fields.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/983d00d-messages-new-options-ios-sound-nil.jpg",
        "messages-new-options-ios-sound-nil.jpg",
        2500,
        418,
        "#eef1f2"
      ]
    }
  ]
}
[/block]
**REST API** - Instead of sending via the dashboard, you can send notifications with sounds in the REST API by using the appropriate parameter and file extension depending on your platform (see more in [Create notification REST API docs](ref:create-notification#appearance)).
[block:parameters]
{
  "data": {
    "1-0": "Android",
    "1-1": "`android_channel_id ` - Use if you created channel in the OneSignal Dashboard [Notification Categories](doc:android-notification-categories).\n\n\n`existing_android_channel_id` - Use if you created the channel elsewhere",
    "1-2": "Highly recommended to use [Android Notification Categories](doc:android-notification-categories)",
    "2-0": "Amazon",
    "2-1": "`adm_sound`",
    "h-0": "Platform",
    "0-0": "iOS",
    "h-1": "API Parameter",
    "h-2": "Details",
    "0-1": "`ios_sound`",
    "0-2": "Include File Extension.\nExample:\n\n`ios_sound : expload_sound.wav`",
    "2-2": "Do Not Include File Extension.\nExample:\n\n`adm_sound : exploade_sound`"
  },
  "cols": 3,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "If you've very recently added a sound resource to your app, you may want to wait a few days before sending notifications using the sound. This is because it can take many days or even weeks for the majority of your users to update their apps to the latest version which contain your new sound resource. \n\nIf a user has an older version of your app without the sound resource and receives a notification that references it, they will hear only the default system notification sound.",
  "title": "New sounds take a while to propagate to all users"
}
[/block]





----
# FAQ
## Can I set a default sound?
OneSignal does not support default sounds directly. However, a workaround is to create a <a class="dash-link dash-messages" href="templates">Template</a> that references the sound, and use that that template for every message you send.

## Why is my notification not playing the custom sound file?
There are a few reasons why a sound may not play. 

- Sound file has an incorrect file extension
- Sound file is not encoded in a supported format
- Sound file is in the incorrect location
- Sound file is too long

Currently OneSignal does not log the resource incorrect issues, we're working on adding this to your logs.

**iOS** - Read more in [Apple's documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW6) for tips on how to encode files and test them.

**Android** - Make sure that it is getting built into your APK by extracting it and making sure it is located in `res/raw/`.

If shrinking resources is enabled, you can protect sound files from being removing by creating keep.xml in res/raw/ with following code
[block:code]
{
  "codes": [
    {
      "code": "<resources xmlns:tools=\"http://schemas.android.com/tools\"\ntools:keep=\"@raw/sound_file\"/>",
      "language": "xml"
    }
  ]
}
[/block]

## Why is my notification playing the default sound file?
Please make sure that you followed the setup instructions carefully and the sound file is in the correct location for the SDK.

## Why is the wrong sound playing?
On Android, notifications will get grouped together after a certain amount are received by the device without opening them. Grouped notifications play a default sound. You can set the sound with the [GROUPKEY](https://developer.android.com/training/notify-user/group) for all your notifications.