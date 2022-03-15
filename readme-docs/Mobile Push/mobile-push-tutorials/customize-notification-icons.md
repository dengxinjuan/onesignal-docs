---
title: "Android: Notification Icons"
slug: "customize-notification-icons"
excerpt: "Adding custom icons to some or all of your notifications. Works with Android (and derivatives like Amazon)."
hidden: false
createdAt: "2016-10-13T21:52:18.936Z"
updatedAt: "2022-02-02T00:16:31.585Z"
---
Icons are a way to provide a more unique, branded experience for your Android and Amazon app.

You may add a default icon that appears with every notification you send, or you may add icons to just certain types of notifications. The below tutorial shows you how to do both.

# About Notification Icons
Android supports both Small and Large Notification Icons. 

## Small Notification Icons
The small icon is displayed on the top status bar as well as the notification itself. By default OneSignal will show a bell icon, however we recommend you customize this so users recognize it's a notification from your app. ***Note that Android only uses the alpha channel for the icon.*** It will display monochrome in the status bar but an [accent color](#small-icon-accent-color) can be applied to the left side the notification itself.

##Large Notification Icons
The large notification icon will show up to the left of the notification text on Android 4.0.3 - 6.0 devices, and shows on the right for Android 7.0+ devices. If you do not set a large icon, the small icon will be used instead. OneSignal will auto scale large notification icons for you to prevent the icon from being cropped. The recommended size of the large icon is `256x256` pixels.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c2fb44-android-notification-layouts.png",
        "android-notification-layouts.png",
        744,
        700,
        "#d2d2d1"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
# How to Add Default Icons
We strongly recommend adding default icons to every Android and Amazon app.

## Step 1. Generate Icons
[block:callout]
{
  "type": "info",
  "title": "REQUIRED: Add every icon size listed below",
  "body": "You must add each image with listed size and alpha transparency. \n\nFor help generating images with alpha transparency, see this [clipart link for examples in the Android Asset Studio](http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=clipart&source.clipart=account_balance_wallet&source.space.trim=1&source.space.pad=0&name=ic_stat_onesignal_default)."
}
[/block]
### Option A: Using Android Asset Studio
**Recommended**

To quickly and easily generate small icons with the correct settings, we recommend using the [Android Asset Studio](http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.space.trim=1&source.space.pad=0&name=ic_stat_onesignal_default). Use `ic_stat_onesignal_default` as the name. 

### Option B: Manually Create Icons

If you prefer to create your own icons, you must make your icons the following sizes and make the small ones in white with a transparent background.

You must be sure the icon filenames are correct for Native, Unity, PhoneGap, Cordova, Ionic, PhoneGap Build (PGB), Xamarin, React Native, Ionic Package (Cloud Build)

Note: If you used Android Asset Studio for your small icon then this step may have already been done for you.

## Default Icon Name, Density, Size

**Required**: Each name and pixel size must be present in the app.
[block:parameters]
{
  "data": {
    "h-1": "Density (dp)",
    "h-0": "Name",
    "h-2": "Size (px)",
    "0-0": "ic_stat_onesignal_default",
    "1-0": "ic_stat_onesignal_default",
    "2-0": "ic_stat_onesignal_default",
    "3-0": "ic_stat_onesignal_default",
    "0-1": "MDPI",
    "1-1": "HDPI",
    "2-1": "XHDPI",
    "3-1": "XXHDPI",
    "0-2": "24x24",
    "1-2": "36x36",
    "2-2": "48x48",
    "3-2": "72x72",
    "4-0": "ic_stat_onesignal_default",
    "4-1": "XXXHDPI",
    "5-0": "ic_onesignal_large_icon_default.png",
    "5-1": "XXXHDPI",
    "4-2": "96x96",
    "5-2": "256x256"
  },
  "cols": 3,
  "rows": 6
}
[/block]
If using Solar2D/Corona the file names and sizes are different, as follows:
[block:parameters]
{
  "data": {
    "h-1": "Density (dp)",
    "h-2": "Size (px)",
    "h-0": "Type",
    "0-0": "IconNotificationDefault-ldpi.png",
    "1-0": "IconNotificationDefault-mdpi.png",
    "2-0": "IconNotificationDefault-hdpi.png",
    "3-0": "IconNotificationDefault-xhdpi.png",
    "4-0": "IconNotificationDefault-xxhdpi.png",
    "5-0": "ic_onesignal_large_icon_default.png",
    "0-2": "16x16",
    "1-2": "24x24",
    "2-2": "36x36",
    "3-2": "48x48",
    "4-2": "72x72",
    "5-2": "256x256",
    "0-1": "LDPI",
    "1-1": "MDPI",
    "2-1": "HDPI",
    "3-1": "XHDPI",
    "4-1": "XXHDPI",
    "5-1": "N/A"
  },
  "cols": 3,
  "rows": 6
}
[/block]
## Step 2. Create project paths
Make sure the following paths exist, create any folders you are missing.

**Required**: Each image must be present in the following paths.
[block:parameters]
{
  "data": {
    "h-0": "SDK",
    "h-1": "File path",
    "0-0": "Android Native",
    "2-0": "PhoneGap, Cordova, Ionic, Intel XDK",
    "2-1": "`<project-root>/platforms/android/app/src/main/res/drawable-mdpi/` (24x24)\n`<project-root>/platforms/android/app/src/main/res/drawable-hdpi/` (36x36)\n`<project-root>/platforms/android/app/src/main/res/drawable-xhdpi/` (48x48)\n`<project-root>/platforms/android/app/src/main/res/drawable-xxhdpi/` (72x72)\n`<project-root>/platforms/android/app/src/main/res/drawable-xxxhdpi/` (96x96)\n`<project-root>/platforms/android/app/src/main/res/drawable-xxxhdpi/` (256x256) (Large Icon)",
    "3-0": "PhoneGap Build (PGB), Ionic Package\n(Cloud Build)",
    "3-1": "`<project-root>/locales/android/drawable-mdpi/` (24x24)\n`<project-root>/locales/android/drawable-hdpi/` (36x36)\n`<project-root>/locales/android/drawable-xhdpi/` (48x48)\n`<project-root>/locales/android/drawable-xxhdpi/` (72x72)\n`<project-root>/locales/android/drawable-xxxhdpi/` (96x96)\n`<project-root>/locales/android/drawable-xxxhdpi/` (256x256) (Large Icon)\n\n\nSee [this github link](https://github.com/phonegap/build/issues/472#issuecomment-172662620) for more details on the directory structure if you're having issues.",
    "5-0": "Corona",
    "5-1": "Add files to root (all sizes)",
    "0-1": "`res/drawable-mdpi/` (24x24)\n`res/drawable-hdpi/` (36x36)\n`res/drawable-xhdpi/` (48x48)\n`res/drawable-xxhdpi/` (72x72)\n`res/drawable-xxxhdpi/` (96x96)\n`res/drawable-xxxhdpi/` (256x256) (Large Icon)",
    "1-1": "`Assets/Plugins/Android/OneSignalConfig/res/drawable-mdpi/` (24x24)\n`Assets/Plugins/Android/OneSignalConfig/res/drawable-hdpi/` (36x36)\n`Assets/Plugins/Android/OneSignalConfig/res/drawable-xhdpi/` (48x48)\n`Assets/Plugins/Android/OneSignalConfig/res/drawable-xxhdpi/` (72x72)\n`Assets/Plugins/Android/OneSignalConfig/res/drawable-xxxhdpi/` (96x96)\n`Assets/Plugins/Android/OneSignalConfig/res/drawable-xxxhdpi/` (256x256) (Large Icon)",
    "1-0": "Unity",
    "6-0": "Xamarin",
    "6-1": "`Resources/drawable-mdpi/` (24x24)\n`Resources/drawable-hdpi/` (36x36)\n`Resources/drawable-xhdpi/` (48x48)\n`Resources/drawable-xxhdpi/` (72x72)\n`Resources/drawable-xxxhdpi/` (96x96)\n`Resources/drawable-xxxhdpi/` (256x256) (Large Icon)\n[Screenshot](https://developer.xamarin.com/guides/android/application_fundamentals/resources_in_android/part_1_-_android_resource_basics/)",
    "4-1": "`android/app/src/main/res/drawable-mdpi/` (24x24)\n`android/app/src/main/res/drawable-hdpi/` (36x36)\n`android/app/src/main/res/drawable-xhdpi/` (48x48)\n`android/app/src/main/res/drawable-xxhdpi/` (72x72)\n`android/app/src/main/res/drawable-xxxhdpi/` (96x96)\n`android/app/src/main/res/drawable-xxxhdpi/` (256x256) (Large Icon)",
    "4-0": "React Native"
  },
  "cols": 2,
  "rows": 7
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Issue with Older Versions of Cordova",
  "body": "With versions of Cordova before 7.0, you will need to use \n`<project-root>/platforms/android/res/drawable-{size}/` \ninstead of the path shown above when adding the icon resource to `config.xml`"
}
[/block]
### Ionic Cloud Build or PhoneGap Build (PGB)
Add the following lines to your `config.xml` under the Android section.

[block:code]
{
  "codes": [
    {
      "code": "<!-- Add to your existing android platform sction -->\n<platform name=\"android\">\n    ...\n    <resource-file src=\"locales/android/drawable-mdpi/ic_stat_onesignal_default.png\" target=\"res/drawable-mdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-hdpi/ic_stat_onesignal_default.png\" target=\"res/drawable-hdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xhdpi/ic_stat_onesignal_default.png\" target=\"res/drawable-xhdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xxhdpi/ic_stat_onesignal_default.png\" target=\"res/drawable-xxhdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xxxhdpi/ic_stat_onesignal_default.png\" target=\"res/drawable-xxxhdpi/ic_stat_onesignal_default.png\" />\n  \n  <!-- Uncomment if you have added a large icon. -->\n  <!--- <resource-file src=\"locales/android/drawable-xxxhdpi/ic_onesignal_large_icon_default.png\" target=\"res/drawable-xxxhdpi/ic_onesignal_large_icon_default.png\" /> --->\n</platform>",
      "language": "xml",
      "name": "Cordova 7.0"
    },
    {
      "code": "<!-- Add to your existing android platform sction -->\n<platform name=\"android\">\n    ...\n    <resource-file src=\"locales/android/drawable-mdpi/ic_stat_onesignal_default.png\" target=\"app/src/main/res/drawable-mdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-hdpi/ic_stat_onesignal_default.png\" target=\"app/src/main/res/drawable-hdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xhdpi/ic_stat_onesignal_default.png\" target=\"app/src/main/res/drawable-xhdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xxhdpi/ic_stat_onesignal_default.png\" target=\"app/src/main/res/drawable-xxhdpi/ic_stat_onesignal_default.png\" />\n    <resource-file src=\"locales/android/drawable-xxxhdpi/ic_stat_onesignal_default.png\" target=\"app/src/main/res/drawable-xxxhdpi/ic_stat_onesignal_default.png\" />\n  \n  <!-- Uncomment if you have added a large icon. -->\n  <!--- <resource-file src=\"locales/android/drawable-xxxhdpi/ic_onesignal_large_icon_default.png\" target=\"app/src/main/res/drawable-xxxhdpi/ic_onesignal_large_icon_default.png\" /> --->\n</platform>",
      "language": "xml",
      "name": "Cordova 8.0"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Troubleshooting Icons Not Showing",
  "body": "- If you see the default OneSignal bell icon, you did not add all icon sizes. Please add all icons sizes and correct paths.\n\n- If you see a solid square, you set the image to the correct path, but the image does not have alpha transparency. For more help, try using images from this [Android Asset Studio clipart](http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=clipart&source.clipart=account_balance_wallet&source.space.trim=1&source.space.pad=0&name=ic_stat_onesignal_default)."
}
[/block]
Your project should look similar to this depending on your SDK:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/42f16ed-Screen_Shot_2021-12-10_at_10.36.53_AM.png",
        "Screen Shot 2021-12-10 at 10.36.53 AM.png",
        982,
        1404,
        "#42464a"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "You should be all set with your new default icons.",
  "title": "Done!"
}
[/block]
----

# How to Add Non-Default Icons
**Optional**

After you've added your default icons, you may choose to add more non-default icons. These will let you show different icons depending on the types of notifications your app sends. For instance, a game with a title like "Jewel Breaker" may wish to have a different colored jewel icon for every notification sent that represents the player's level. Meanwhile, a social network may wish to show a chat bubble icon when the user receives a message from another user to differentiate those notifications from more generic system notifications.

OneSignal supports overriding default icons on a per-message basis. 

## Step 1. Generate Icons
Follow the steps above to generate icons and place them in the appropriate folder for your SDK.

## Step 2. Name Non-Default Icons
To add non-default icons, you must name them something other than the default names specified above. For instance, you may name one `message_icon`.

## Step 3. Send Notifications with Non-Default Icons
If you've followed the above steps for creating default icons, and have updated your app, you'll be able to reference those icons when you send a notification. To send a notification with a custom icon:

###Dashboard
Navigate to Messages > New Push > Platform Settings > Google Android Options > Set the icon name **without** the file extension. With Large Notification Icons, you can also supply a URL where the icon will be displayed from.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0dd9d4-Screen_Shot_2021-12-28_at_2.50.42_PM.png",
        "Screen Shot 2021-12-28 at 2.50.42 PM.png",
        860,
        462,
        "#eedfdf"
      ]
    }
  ]
}
[/block]
###REST API
Set notification icons with the `small_icon` and `large_icon` REST API properties. Set the icon name **without** the file extension. More details in <a href="https://documentation.onesignal.com/reference/create-notification#appearance" target="_blank">Create notification REST API docs</a>. 


----

# Small Icon Accent Color
Android 5.0+ enforces your icon to only be white and transparent however it still allows tinting on the notification shown in the shade, known as the "accent color". (The status bar icon color will still be unaffected). These may be adjusted in **Messages > New Push > Platform Settings > Google Android Options** or as defaults in your manifest.

### Set default Small Icon and Accent Colors

To set a default color add the following line to your `res/values/strings.xml` file in your project.
   - If you want a different color for dark mode add the key to your `res/values-night/strings.xml` as well.
[block:code]
{
  "codes": [
    {
      "code": "<resources>\n    <!-- Example: Sets all OneSignal notification's accent color to Green by default.  -->\n    <!-- Color format is in ARGB. -->\n    <string name=\"onesignal_notification_accent_color\">FF00FF00</string>\n</resources>",
      "language": "xml"
    }
  ]
}
[/block]
To set the color on per notification bases set `android_accent_color` on our [Create notification](ref:create-notification) API call, or enter a value in the Accent color field under Messages > New Push > Platform Settings > Google Android Options.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bad959b-Screen_Shot_2021-07-27_at_12.00.37_PM_copy.png",
        "Screen Shot 2021-07-27 at 12.00.37 PM copy.png",
        838,
        1378,
        "#f2eff0"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "New icons take a while to propagate to all users",
  "body": "If you've very recently added an icon resource to your app, you may want to wait a few days before sending notifications using the icon. This is because it can take many days or even weeks for the majority of your users to update their apps to the latest version which contain your new icons."
}
[/block]
##Custom Non-Alpha Channel Small Icon Images

Some device manufactures display the image as-is (basically ignoring the alpha channel rule). You can setup a [custom notification layout based on Android's documentation](https://developer.android.com/training/notify-user/custom-notification) if you wish to use non-alpha channel images across all devices.

We highly recommend following the alpha rule as the icons may not look consistent on all devices. Google designed it this way as the icon is small enough you can't see any meaningful detail, so enforcing a single color helps enforce an easier to recognize icon at a glance.