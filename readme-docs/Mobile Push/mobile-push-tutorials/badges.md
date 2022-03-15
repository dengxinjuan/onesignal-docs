---
title: "Badges"
slug: "badges"
excerpt: "Notification Badges that show on app icons"
hidden: false
createdAt: "2019-04-23T00:21:39.180Z"
updatedAt: "2021-09-17T18:17:53.176Z"
---
Badges generally refer to the little numbered dots that show up on your mobile app icon and are meant to help capture a response from the user. 

[Web Push badges](doc:web-push-notification-icons#badge) are the small icon shown on android web notifications and can be customized. 

#Android Badges

The OneSignal SDK automatically sets the badge count on your app to the number of notifications that are currently in the notification shade. If you want to disable this you can do the following...

For **Android 8+** you can turn off the badges from showing using [Notification Categories](doc:android-notification-categories). The notification dot was added in Android Oreo (8.0) but a badge number may still be showing instead if the device is using an Android Launcher that uses the non-standardized badge number.

**Pre Android 8** will need to follow this guide below and set the badges manually.

###Disable Badges for Pre Android 8 Devices
This guide is only for Android 7 and lower. If you only want to support Android 8+ use [Notification Categories](doc:android-notification-categories).

Add the following to your `AndroidManifest.xml`
[block:code]
{
  "codes": [
    {
      "code": "<application ...>\n   <meta-data android:name=\"com.onesignal.BadgeCount\" android:value=\"DISABLE\" />\n</application>",
      "language": "xml"
    }
  ]
}
[/block]
You can remove the badge permissions with the following entries.
[block:code]
{
  "codes": [
    {
      "code": "<uses-permission android:name=\"com.sec.android.provider.badge.permission.READ\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.sec.android.provider.badge.permission.WRITE\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.htc.launcher.permission.READ_SETTINGS\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.htc.launcher.permission.UPDATE_SHORTCUT\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.sonyericsson.home.permission.BROADCAST_BADGE\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.sonymobile.home.permission.PROVIDER_INSERT_BADGE\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.anddoes.launcher.permission.UPDATE_COUNT\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.majeur.launcher.permission.UPDATE_BADGE\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.huawei.android.launcher.permission.CHANGE_BADGE\" tools:node=\"remove\"/>\n<uses-permission android:name=\"com.huawei.android.launcher.permission.READ_SETTINGS\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.huawei.android.launcher.permission.WRITE_SETTINGS\" tools:node=\"remove\" />\n<uses-permission android:name=\"android.permission.READ_APP_BADGE\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.oppo.launcher.permission.READ_SETTINGS\" tools:node=\"remove\" />\n<uses-permission android:name=\"com.oppo.launcher.permission.WRITE_SETTINGS\" tools:node=\"remove\" />",
      "language": "xml"
    }
  ]
}
[/block]
You will also need to add the the following to your manifest tag at the top of the file.
`xmlns:tools="http://schemas.android.com/tools"`

[block:code]
{
  "codes": [
    {
      "code": "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n          xmlns:tools=\"http://schemas.android.com/tools\"\n          package=\"com.onesignal.example\">\n          ...\n</manifest>",
      "language": "xml"
    }
  ]
}
[/block]
You can now set badges manually with a library like https://github.com/leolin310148/ShortcutBadger
[block:callout]
{
  "type": "warning",
  "body": "Note: Android badges are only supported by our latest SDK and only on the following Android Launchers: Sony, Samsung, LG, HTC, Xiaomi, Huawei, ASUS, ZUK, OPPO, ADW, APEX, and NOVA. More details [here](https://github.com/leolin310148/ShortcutBadger)."
}
[/block]
----

#iOS Badges

You must setup the [App Groups feature](https://documentation.onesignal.com/docs/ios-sdk-app-groups-setup) as outlined in our [Mobile Push setup guide](doc:mobile-sdk-setup) you used to add OneSignal to your app. 

##Send Push with Badges - iOS

[Sending from the API](ref:create-notification#appearance), use the `ios_badgeType` and `ios_badgeCount` properties.

When [Sending Push Messages](doc:sending-notifications) from the Dashboard, under Platform Settings > Send to Apple iOS, use either "Set to" or "Increase by" and enter a number.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70c28a3-Screen_Shot_2021-08-27_at_8.17.07_AM.png",
        "Screen Shot 2021-08-27 at 8.17.07 AM.png",
        870,
        624,
        "#f2f3f5"
      ]
    }
  ]
}
[/block]
##iOS Badge Behavior

The badge icon number is cleared automatically when the app is resumed or opened. Setting the count to 0 with a notification will also clear the value.

If you want to prevent our SDK from automatically clearing badges set `OneSignal_disable_badge_clearing` to `YES` as a `Boolean` type in your `.plist` in Xcode.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d646c5-Screen_Shot_2020-04-06_at_8.42.35_PM.png",
        "Screen Shot 2020-04-06 at 8.42.35 PM.png",
        2274,
        304,
        "#dddce2"
      ]
    }
  ]
}
[/block]
​Setting `YES` will stop badges from clearing when removing notifications from the notification center or clicking the app to open it. You can manually updated badges using the [Native iOS Badge Handling methods](https://developer.apple.com/documentation/uikit/uiapplication/1622918-applicationiconbadgenumber). Or the "Set to" property when sending notifications from the Dashboard or API.

Set `OneSignal_disable_badge_clearing` to `NO` as a Boolean type to enable OneSignal badge clearing.

##iOS Badges Troubleshooting

If you are seeing incorrect badge counts, see our [iOS SDK App Groups setup](doc:ios-sdk-app-groups-setup) to make sure you have this setup. For further troubleshooting, see [iOS App Group Troubleshooting](https://documentation.onesignal.com/docs/ios-sdk-app-groups-setup#ios-app-groups-troubleshooting).