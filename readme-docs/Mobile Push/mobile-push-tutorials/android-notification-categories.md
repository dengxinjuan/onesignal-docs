---
title: "Android: Notification Channel Categories"
slug: "android-notification-categories"
excerpt: "Categorizing notifications on Android  to improve the user's notification experience."
hidden: false
createdAt: "2017-08-16T22:04:42.402Z"
updatedAt: "2022-02-02T00:14:50.796Z"
---
Notification categories are an Android Oreo (8.0+) feature which gives users finer control over notifications.
When the user receives a notification with a category they can long press on it or go into the Notification Settings to change the category's settings. They will be presented with options to change Importance, Sound, Vibration, [Badges](doc:badges) and more or can opt out of future notifications in the category if they choose.

Refer to Android's <a href="https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels" target="_blank">Notification Channels Docs</a> but to the user, these are presented as Notification Categories on the device.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/abd709d-Screenshot_20220201-154501_Settings.jpg",
        "Screenshot_20220201-154501_Settings.jpg",
        500,
        1111,
        "#191a1b"
      ],
      "sizing": "smart",
      "caption": "Example of an app's notification categories on the device"
    }
  ]
}
[/block]
#Setting up Notification Channel Categories

1. In your OneSignal Dashboard, go to **Settings > Messaging > Android Notification Channels**

2. Press **Add Group** to group categories by type e.g. "News Alerts", "Social Activity", "Product Updates"

3. Press **Add Channel** under the newly created group. 

**These names will be visible to the user when they view the notification settings for your app on the device.**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1678519-Screen_Shot_2022-02-01_at_3.56.32_PM.png",
        "Screen Shot 2022-02-01 at 3.56.32 PM.png",
        1750,
        856,
        "#f9fbfc"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
4. Enter the category name, description, and any defaults the device will use for notifications sent with this category. When finished, click "Create Category".
[block:parameters]
{
  "data": {
    "0-0": "Name",
    "0-1": "What you call the category and describes what it is used for. **User-visible.**",
    "h-0": "Category Parameter",
    "h-1": "Detail",
    "1-0": "Description",
    "1-1": "More details on what the category is used for. **User-visible.**",
    "2-0": "Importance",
    "2-1": "**URGENT** - Makes sound and pops up on screen.\n**HIGH** - Makes sound or vibrates. Does not pop up on screen.\n**MEDIUM** - No sound and no vibration.\n**LOW** - No sound, no vibration and no visual interruption",
    "3-0": "Sound",
    "3-1": "Set the sound to be turned off, set as device default or use a custom sound you set within the app. See [Notification Sounds](doc:customize-notification-sounds) for more details.\n\nSet the sound name **without file extension**. Example: `explode_sound` **NOT** `explode_sound.wav`.",
    "4-0": "Vibration",
    "4-1": "Set the vibration to be turned off, phone's default settings, or a custom vibration pattern.\n\nFirst value is the time in milliseconds vibration will be off, followed by the time it will be on, followed by the time off again, etc.\n\nExample: `0, 300, 500, 300` means pause for 0ms, vibrate for 300ms, then pause for 500ms, then vibrate for 300ms again.",
    "5-0": "LED Color",
    "5-1": "Can turn off, set default or custom [LED Color](https://documentation.onesignal.com/docs/android-customizations#led-color).\n\nThis is the device’s LED that shows when a notification is received. Note: Only some Android devices have color LEDs.\n\nUses ARGB Hex format. Example: `FF0000FF` is full brightness and blue.",
    "6-0": "Badges",
    "6-1": "Can be enabled or disabled. If enabled it will increment based on how many notifications for your app are still in the device's Notification Center for your app. See [Badges](doc:badges) for more details.",
    "7-0": "Lockscreen",
    "7-1": "**PUBLIC** - Shows notification contents on lock screen.\n**PRIVATE** - Shows a notification was received for your app, but not the contents of the push.\n**SECRET**  - No notification message on the lock screen."
  },
  "cols": 2,
  "rows": 8
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c201247-Screen_Shot_2022-02-01_at_4.00.51_PM.png",
        "Screen Shot 2022-02-01 at 4.00.51 PM.png",
        1182,
        676,
        "#f0f2f3"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "You created your first category!",
  "body": "You can now use them when sending push notifications."
}
[/block]
# Changing or Deleting Categories
[block:callout]
{
  "type": "warning",
  "body": "Any changes made to your category settings **will not update for existing users**. \n\nThis is a designed limitation of Android as your users have the final say in their settings.\n\nYou will need to create a new category or test your current category by clearing app data under Settings or fully uninstall and reinstall your app.",
  "title": "Changing Existing Categories"
}
[/block]
You can however update the Category and Group name. Once the updated Category and/or Group is set and notification is received, it will be reflected in the App Notification Settings.

##Deleting Categories

Categories will be deleted once the user clears App Data inside the Settings > Internal Shared Storage > Your App > Click Clear Cache and Clear Storage.

If you delete a category from the OneSignal dashboard, it will be removed from the device's App Notification Settings once all notifications for your app are removed from the Notification Center and the app is opened again triggering the OneSignal SDK to initialize and pull down the updated Categories.

#Using the Notification Category

Created categories will be available under the **Android Platform Settings** in the "Category" field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db78c43-Screen_Shot_2021-02-18_at_8.30.20_AM.png",
        "Screen Shot 2021-02-18 at 8.30.20 AM.png",
        850,
        1384,
        "#dfe0e2"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
After selecting a category, the Sound, Lockscreen Visibility, and LED Color options will hide as these values will now be used from the category options you have set previously.

##From the REST API

Set `android_channel_id` on the [create notification REST API](ref:create-notification#appearance) to the channel id of your category. This can be found at the top of the Channel after it has been created. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/804f781-Screen_Shot_2022-02-01_at_4.12.34_PM.png",
        "Screen Shot 2022-02-01 at 4.12.34 PM.png",
        500,
        582,
        "#edeaec"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
If you created your own Android Channel, use the `existing_android_channel_id` in the [create notification REST API](ref:create-notification#appearance).

#FAQ

##Why Android Categories Not Working?

There are a couple reasons why an android category is not working:

1. The OneSignal init call is not in the right place. For instance, on our Android Native SDK, it should be in the Applications class as [outlined in our docs](doc:android-sdk-setup#section-2-add-required-code) and not in an Activity Class.

2. If you sent the device a notification with this channel id, then updated the settings of the channel id and sent the device again, the new settings will not get registered, you will need to create a new channel id to make changes. This is an android limitation.

##What are these Default Android Categories?

OneSignal creates 2 notification categories by default called "Restored" and "Miscellaneous".

The "Restored" category uses the Lowest Importance and is used for notifications that were not interacted with (not dismissed or opened), but app was force quit (which removes all the notifications) and then reopened (restores the notifications).

The "Miscellaneous" category uses the Highest Importance and is used by default when no Notification Category is set.

If you alway send a push with a Category, then the "Miscellaneous" category will never be on the device. "Restored" will always show due to notifications that get removed when force quitting the app and re-opening "restores" those notifications.

##Can I use Android Categories to Play a Sound when in Do Not Disturb Mode?

OneSignal does not add the `setBypassDnd` property on our Notification Channels. If you would like to play a sound while the app is in Do Not Disturb Mode, you would create your own Notification Channel and set this property. See [Android's Guide on NotificationChannel and `setBypassDnd`](https://developer.android.com/reference/android/app/NotificationChannel#setBypassDnd(boolean)).