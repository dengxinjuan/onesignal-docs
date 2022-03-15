---
title: "Android Customizations"
slug: "android-customizations"
excerpt: "Customizing Android mobile app notifications with your app icons, colors, and style."
hidden: false
createdAt: "2016-09-17T06:01:07.453Z"
updatedAt: "2022-03-02T01:44:38.226Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Android Mobile App Notifications Only",
  "body": "This section is for Android Mobile app customizations only. If you have a website, please see our [Web Push Customizations](doc:web-push-notification-icons) guide."
}
[/block]
# Custom Notification Icons
Read more on the [Android Notification Icons](doc:customize-notification-icons) page.

----
# Notification Categories
Notification categories are a new Android Oreo (8.0) feature which gives users finer control over notifications. You can select a category from Android Options or [API `android_channel_id`](https://documentation.onesignal.com/reference#appearance) when [Sending Push Messages](doc:sending-notifications).  To learn more about how Android Categories see [Android Notification Categories](doc:android-notification-categories).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/acc9989-messages-new-options-category.jpg",
        "messages-new-options-category.jpg",
        2500,
        590,
        "#eff1f1"
      ]
    }
  ]
}
[/block]
----
# Action Buttons
Android 4.1 and newer devices support actions buttons. You can specify up to 3 buttons that will display below your notification content. See [Action Buttons](doc:action-buttons).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df6d81f-messages-new-action-buttons-iosandroid.jpg",
        "messages-new-action-buttons-iosandroid.jpg",
        2500,
        724,
        "#f3f4f4"
      ]
    }
  ]
}
[/block]
----
# Big Picture

See [Images & Rich Media](doc:rich-media).

----
# Background Images
Option to add a background image to your notifications.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4243d2d-ge1mfexQ0y8yCHSn5sag_CustomAndroid_Images_Blog.gif",
        "ge1mfexQ0y8yCHSn5sag_CustomAndroid_Images_Blog.gif",
        400,
        711,
        "#3f6068"
      ],
      "sizing": "original"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "1. Android 12+ is changing the \"Customizable Area\" within notifications. So background images will look different and we recommend creating your own custom layout to handle this. Please review [Android 12 Behavior Changes for details](https://developer.android.com/about/versions/12/behavior-changes-12#custom-notifications).\n\n2. The Android Background Layout does not support different [Android Themes](https://developer.android.com/guide/topics/ui/look-and-feel/themes).\n\n3. The small and large icons will be overridden by the background image. Include it as part of your image if you need it to show still.\n\n4. Big Pictures will not work with Background Images.\n\n5. Our SDK does not provide an expanded view that supports multiline text. However you can create your own by following [Google's Custom View Documentation](https://developer.android.com/training/notify-user/custom-notification).",
  "title": "Important limitations"
}
[/block]
You can add a background image to your Google Android Mobile App notifications by adding an image file named `onesignal_bgimage_default_image` to your `res/drawable-xxxhdpi` folder.

The size should be 2600x256 (91.4:9) to fit all devices including landscape mode.
*(Such as the Samsung Galaxy S7)*
In portrait mode the user may only see 1280x256 (5:1) on some devices so do design your image accordingly.

Use `onesignal_bgimage_notif_title_color` and `onesignal_bgimage_notif_body_color` in your `values/colors.xml` to set text colors to match your image.

Example `color.xml` file. Title is set to red and the body is set to green below.
[block:code]
{
  "codes": [
    {
      "code": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<resources>\n    <color name=\"onesignal_bgimage_notif_title_color\">#FFFF0000</color>\n    <color name=\"onesignal_bgimage_notif_body_color\">#FF00FF00</color>\n</resources>",
      "language": "xml"
    }
  ]
}
[/block]
The image by default will be top left aligned, you may change it to be right aligned by setting the key `onesignal_bgimage_notif_image_align` to `right` in your `strings.xml`.
Example:

[block:code]
{
  "codes": [
    {
      "code": "<resources>\n    <string name=\"onesignal_bgimage_notif_image_align\">right</string>\n</resources>",
      "language": "xml"
    }
  ]
}
[/block]
In additional to locally setting the image in your app, it can be with the `android_background_layout` field through the [Create notification](https://documentation.onesignal.com/reference#appearance) REST API call.

The image can be a resource set within the app or an external URL with direct link to the image resource.

----
# LED Color 
Certain Android hardware devices have LED notification lights built-in, allowing notifications to trigger a colored notification light on a device upon receipt. Notification colors may be set on a per-message basis in the OneSignal dashboard, or via the OneSignal SDK/API.

Notification colors are set using ARGB Hex values (e.g. a red LED notification light would be in the format `FF99000`). If LED Color is not set, the light uses the device's default color.

----
# Accent Color
Accent colors only apply to apps targeting Android API level 21+ running on Android 5.0+ devices.

Accent colors are the background color around your small icon, which appears to the left of the notification content in a notification. Like LED Colors, accent colors may be set with an ARGB Hex value in either the dashboard or SDK/API. If Accent Color is not set, the color is set to grey. Read more in [Android Notification Icons](doc:customize-notification-icons#small-icon-accent-color) 

----
#Notification Grouping

Android supports grouping or combining notifications together.

See [Notification Grouping](doc:notification-grouping) for more details.


----
# App Icon Badge Counts
The OneSignal SDK automatically sets the badge count on your app to the number of notifications that are currently in the notification shade. If you want to disable this you can add the following to your `AndroidManifest.xml`.

See our [Android Badges Guide](doc:badges#android-badges) for more details.

----
# Notification Sounds
Read more in [Customize Notification Sounds](doc:customize-notification-sounds) 

----
# Background Data and Notification Overriding
OneSignal supports sending additional data along with a notification as key value pairs. You can read this additional data when a notification is opened by adding a [setNotificationOpenedHandler](https://documentation.onesignal.com/docs/sdk-reference#onesignal-notification-events) instead.

However, if you want to one of the following... 

* Receive data in the background with or without displaying a notification.
* Override specific notification settings depending on client-side app logic such as custom accent color, vibration pattern, or other any other `NotificationCompat` options available. See [Android's documentation on the NotificationCompat options.](https://developer.android.com/reference/androidx/core/app/NotificationCompat)

...continue with the instructions in our [Service Extensions Setup](https://documentation.onesignal.com/docs/service-extensions#notification-extender-service).

----

# Right-to-Left (RTL) Notification Support
To support notifications with right-to-left languages correctly you must add `android:supportsRtl="true"` to your `<application>` tag in your `AndroidManifest.xml`.
[block:code]
{
  "codes": [
    {
      "code": "<application\n             android:supportsRtl=\"true\"\n             android:icon=\"@drawable/ic_launcher\"\n             android:theme=\"@style/AppTheme\"\n             android:label=\"OneSignal Example\"\n             android:name=\".OneSignalExampleApp\">\n     ...\n  </application>",
      "language": "xml"
    }
  ]
}
[/block]
*Note, make sure to test all your Activities as this effect all views in your app.*