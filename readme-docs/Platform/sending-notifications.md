---
title: "Sending Push Messages"
slug: "sending-notifications"
excerpt: "Send Push Notifications with OneSignal"
hidden: false
createdAt: "2016-09-24T03:59:59.981Z"
updatedAt: "2021-10-05T16:08:15.933Z"
---
This page explains how to send push notifications from the OneSignal Dashboard. For other options to send push see:
- [API Create Notification Reference](https://documentation.onesignal.com/reference/create-notification)
- [Automated Messages](doc:automated-messages) 
- [Zapier Integration](doc:zapier)
- Mobile SDK `PostNotification` method, see [Mobile SDK Reference](https://documentation.onesignal.com/docs/sdk-reference#push-notifications)

**Messages > New Push**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39b203d-Screen_Shot_2021-10-05_at_8.48.23_AM.png",
        "Screen Shot 2021-10-05 at 8.48.23 AM.png",
        2052,
        500,
        "#cdd2d6"
      ]
    }
  ]
}
[/block]
**Optional**: Input a Message Name for internal recognition of the message. See <a href="https://documentation.onesignal.com/docs/message-name" target="_blank">Message Name</a> for more details.

#Step 1. Audience

The <a href="https://documentation.onesignal.com/docs/segmentation" target="_blank">Segments</a> of devices in which you wish to include and exclude from receiving this notification.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ff5331-Screen_Shot_2021-03-31_at_4.18.34_PM.png",
        "Screen Shot 2021-03-31 at 4.18.34 PM.png",
        1210,
        850,
        "#f7f9fa"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
There are two options for selecting which devices are eligible to receive notifications.
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Description",
    "0-0": "**Send to Subscribed Users**",
    "1-0": "**Send to Particular Segment(s)**",
    "1-1": "You can both include and exclude devices within segments from receiving the message.\n\n- Targeting multiple segments, OneSignal will automatically filter out duplicate user records so the device only gets one push.",
    "0-1": "Sends to your <a href=\"https://documentation.onesignal.com/docs/segmentation#default-segment\" target=\"_blank\">default segment</a> which you can set. Otherwise, this defaults to all subscribed devices.",
    "2-0": "**Exclude Segments**",
    "2-1": "Any device in the excluded segment will not get the push notification."
  },
  "cols": 2,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Segments can be Edited",
  "body": "Any selected segments can be edited and new segments can be created on the fly."
}
[/block]
#Step 2. Message

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/196a1da-Screen_Shot_2021-03-31_at_4.27.21_PM.png",
        "Screen Shot 2021-03-31 at 4.27.21 PM.png",
        1748,
        1272,
        "#f2f2f1"
      ],
      "caption": "",
      "sizing": "80"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "0-0": "Add Languages",
    "0-1": "Select **Add Languages** to add multiple [Supported Languages](doc:language-localization).",
    "1-0": "Title",
    "1-1": "**Web:** Defaults to the Site Name set in Settings.\n**Android & iOS:** Not required.\n**Huawei:** required.",
    "2-0": "Subtitle",
    "2-1": "Supported on iOS mobile apps.",
    "5-0": "Launch URL",
    "5-1": "The URL a user will be directed when clicking the push. `https://` URLs will open the web page or an in-app browser on Mobile Apps.\n\nDetails on Deep Linking see [Links, Deep-links and URLs](doc:links).",
    "3-0": "Message",
    "3-1": "**Required for all platforms.** Larger text input field.",
    "4-0": "Image",
    "4-1": "This will populate the large image for all applicable platforms. The recommended image is a `jpg` filetype with 2:1 aspect ratio landscape, size `512x256px` or `1440x720px`.\n\nMore details on images see:\n- <a href=\"https://documentation.onesignal.com/docs/web-push-notification-icons#image\" target=\"_blank\">Web Push Images</a>\n- <a href=\"https://documentation.onesignal.com/docs/rich-media\" target=\"_blank\">Mobile App Push Images</a>\n\nYou can override images for specific platforms below in [platform settings](#platform-settings).",
    "h-0": "Option",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 6
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Notification Appearance Guide",
  "body": "Details on Character Limits, Emoji Support and more in the [Push Notification Guide](doc:push-notification-guide)."
}
[/block]

##Sending to Test Devices

If you set [test devices](doc:users-and-devices#test-users) use the **Send To Test Device** button. Test Messages will be available in [Delivery](doc:notification-delivery) tab > **Source: Test Messages**.


##Platform Settings
Custom features available by platform. 
Each Platform can be disabled (no push sent to those devices) by toggling the platform switch on/off

###iOS Options
[block:parameters]
{
  "data": {
    "0-0": "[Badges](doc:badges)",
    "0-1": "Red Dots with numbers on the app icon.\n- **Don't set** - no badge set\n- **Set to** - specify exact badge count\n- **Increase by** - increment the badge count by your desired amount",
    "1-0": "[Sound](doc:customize-notification-sounds)",
    "1-1": "The sound that plays when this notification is received by the device. If no sound is specified, the device's default sound will play. Use `nil` to play no sound.",
    "2-0": "[Content Available](doc:data-notifications)",
    "2-1": "For native iOS apps only. Wakes your app when the notification is received so you can do work in the background. See also Apple's 'content-available' documentation for more details.",
    "3-0": "Category",
    "3-1": "The [UNNotificationCategory](https://developer.apple.com/documentation/usernotifications/unnotificationcategory). Used with the [UNNotificationContentExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) for action buttons.",
    "5-0": "<a href=\"doc:rich-media\" target=\"_blank\">Media</a>",
    "5-1": "Rich media attachment. Image, sound, or video to show when viewing the notification. Skip if set already unless you want a different image for iOS.",
    "6-0": "Mutable Content",
    "6-1": "Native only code. Allows you do modify the notification from your app before it is displayed. See Apple's 'mutable-content' documentation for more details",
    "h-0": "iOS Options",
    "h-1": "Description",
    "4-0": "Target Content ID",
    "4-1": "Use to target a specific experience in your App Clip, or to target your notification to a specific window in a multi-scene App. Details in [App Clip Support](doc:app-clip-support)."
  },
  "cols": 2,
  "rows": 7
}
[/block]
###Android/Huawei Options
[block:parameters]
{
  "data": {
    "0-0": "[Category](doc:android-notification-categories)",
    "0-1": "Highly recommended for Android 8+ devices. Settings will carry over to android 7 and lower.",
    "h-0": "Android Options",
    "h-1": "Description",
    "1-0": "[Sound](doc:customize-notification-sounds)",
    "1-1": "The sound that plays when this notification is received by the device. If no sound is specified, the device's default sound will play.\n\nRecommended: Use [Notification Categories](doc:android-notification-categories) instead.",
    "2-0": "[LED Color](doc:android-customizations#led-color)",
    "2-1": "Sets the device's LED notification light (if the user's device has one). If no LED Color is specified, the device's default color will show.\n\nRecommended: Use [Notification Categories](doc:android-notification-categories) instead.",
    "3-1": "Only applies to apps targeting Android API level 21+ running on Android 5.0+ devices.\n\nRecommended: Use [Notification Categories](doc:android-notification-categories) instead.",
    "3-0": "Lockscreen Visibility",
    "4-0": "[Small Icon](doc:customize-notification-icons)",
    "4-1": "Defaults to a bell unless specifically added. Icon shown in the status bar. Also show to the left of the notification text unless a large icon is set. Do not include a file extension.",
    "5-1": "Icon that shows to the left of the notification text. Include a file extension or upload your icon. Do not include a file extension.",
    "5-0": "[Large Icon](doc:customize-notification-icons)",
    "6-1": "Shows up in an expandable view below the notification text.",
    "6-0": "<a href=\"doc:rich-media\" target=\"_blank\">Big Picture</a>",
    "7-0": "[Group Key](doc:android-customizations#section-notification-stacking)",
    "7-1": "Notifications with the same Group Key will be stacked together as a single summary notification with the number of unopened notifications.",
    "8-1": "Only applies to Android 6.0 and older. By default '# new messages' will shown on the device when 2 or more notifications are received with the same group key. Enter a custom message with '$[notif_count]' in the message text so the count can be replaced.",
    "8-0": "[Group Message](doc:android-customizations#section-notification-stacking)",
    "9-1": "Legacy option for pre 3.0 versions of the OneSignal Android SDK. [Read our documentation for a new way to set this up.](doc:android-customizations#section-background-data-and-notification-overriding)",
    "9-0": "Background Data"
  },
  "cols": 2,
  "rows": 10
}
[/block]
###Web Options
Certain browsers have limited features. Most features are Chrome only.
[block:parameters]
{
  "data": {
    "0-0": "<a href=\"https://documentation.onesignal.com/docs/web-push-notification-icons\" target=\"_blank\">Web Push Icons</a>",
    "h-0": "Web Push Option",
    "h-1": "Description",
    "0-1": "Defaults to icon set in the [Web Push Settings](doc:web-push-quickstart)",
    "1-1": "Displays a large image on the notification content (Windows or ANDROID only).",
    "1-0": "<a href=\"https://documentation.onesignal.com/docs/web-push-notification-icons#image\" target=\"_blank\">Web Push Images</a>",
    "2-0": "<a href=\"https://documentation.onesignal.com/docs/web-push-notification-icons#badge\" target=\"_blank\">Badge</a>",
    "3-0": "<a href=\"doc:action-buttons\" target=\"_blank\">Action Buttons</a>",
    "2-1": "Replaces the Chrome browser icon with your monochrome badge icon. The minimum recommended size is 72x72 pixels.",
    "3-1": "Extra buttons that show on a push that can direct a user to a different URL."
  },
  "cols": 2,
  "rows": 4
}
[/block]
##Advanced Settings
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Description",
    "0-0": "Additional Data",
    "5-0": "[Action Buttons](doc:action-buttons)",
    "0-1": "Custom key : value data pairs sent to your app through the notification. Use `data` when sending from our [REST API](ref:create-notification).\n\nMore details on this below in our [FAQ How To Use Additional Data](#section-how-can-i-use-additional-data).",
    "5-1": "Android and iOS mobile apps only.\n\nButtons show on the notification itself. Works on iOS 8.0+, Android 4.1+.",
    "1-0": "[Collapse Key/ID](doc:how-notifications-work#notification-collapsing)",
    "1-1": "Current notifications with the same id/key will be replaced instead of showing a whole new notification on the device. Limit of 64 characters.",
    "4-0": "[Time To Live](doc:how-notifications-work#time-to-live)",
    "4-1": "The default time is 259,200 seconds (3 days) but can be any value from 0 to 2,419,200 seconds.\n\nThe notification will expire if the device remains offline for these number of seconds. \n\nAffects iOS, Android, and Chrome Web Push.",
    "3-0": "[Priority](doc:how-notifications-work#notification-priority)",
    "3-1": "Sets the Delivery Priority. Can override certain device and browser settings. Some devices de-prioritize notifications to show at a later time if the battery is low. This will attempt to show the notification even if the device has low power.\n\nFor **Android 8+** you must use `Importance` for Display Priority instead. This is set in the [Notification Categories](doc:android-notification-categories) and this will override the Priority flag for Android 7 and lower devices.",
    "2-0": "Web Push Topic",
    "2-1": "Set different values to show multiple web push notification at once to a user. If not set, then newer notifications will replace current notifications on device."
  },
  "cols": 2,
  "rows": 6
}
[/block]
#Step 3. Scheduling
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c15235-Screen_Shot_2021-03-31_at_4.32.58_PM.png",
        "Screen Shot 2021-03-31 at 4.32.58 PM.png",
        1748,
        590,
        "#f7f8f9"
      ]
    }
  ]
}
[/block]
You can schedule a notification up to 30 days in advance.

The OneSignal Dashboard detects timezone according to your Operating Systems time. 

Selecting **Begin sending at a particular time** will allow you to set when the notifications will start to be sent. That time is displayed on the bottom right circled in red in the image.

Notifications will be delivered to users based on the **Per-User Optimization** selection.
[block:callout]
{
  "type": "warning",
  "title": "Per-User Optimization Limitation with Throttling",
  "body": "If you selected the [Throttling](doc:throttling) option, then Intelligent Delivery and Timezone sending will be ignored.\n\nMessage Throttling takes precedence over Intelligent Delivery and Timezone sending."
}
[/block]
##Intelligent Delivery

Intelligent Delivery is a unique feature of OneSignal that optimizes notification delivery time **based on when each user most frequently access your app or website** and is the best way to optimize **notification open rates**.

Each time a device accesses your website or mobile app with our SDK active, our SDK tracks their [Last Session](doc:segmentation#section-filter-types) and notes the hours in which these devices most commonly return. This is based on up to a 3 month rolling average of a user's past actions. 

With Intelligent Delivery, each user will receive your notification within 24 hours of you initiating delivery. For example, you sent a message at 7 PM and the user is most likely to open the app/site at 1 PM, the notification will be delivered 18 hours later (at 1 PM the following day). If your notification is **very time-sensitive** we instead recommend either Sending Immediately (which initiates delivery right away to all users, regardless of their activity or timezone) or Time Zone optimization (to deliver at the same time across user timezones). 

##Optimize by the user time zone 

Once you schedule the notification to go out, you can set the delivery based on each device's set timezone. This is based on the device's settings.

So if you want a notification to be delivered to all your users in different timezones at 1PM for example, you can do this with OneSignal!

Keep in mind that if a timezone has already passed when you start sending this notification, they will get the notification at the set timezone, the next day. So it is important to make sure you start sending 24 hours before



----

#FAQ

### How do I send a notification to a single user?

If you're looking to send notifications to a specific user device:

**1. Get the user's userId/playerId with the `getUserIds` method on the [Web Push SDK](doc:web-push-sdk) or `getPermissionSubscriptionState` method on the [Mobile SDK](doc:mobile-sdk-reference) you are using. **
**You can also send OneSignal your own unique user ids as "external_user_ids" using our `setExternalUserId` method on all our SDKs.**
 - For testing you can use the 'Player ID' shown in **Audience > All Users** (*you can force kill your app and open it again to bring your device to the top of the list.*)

**2. You can use this user id while in the app to send with our `postNotification` method and/or we recommend saving this id to your database. More in our [Internal Database, DMP, & CRM](doc:internal-database-crm) guide.**

**3. Set `include_player_ids` (or `include_external_user_ids`) to the userId on the PostNotification SDK method or on the [Create notification](ref:create-notification) POST REST API call.**

More details can be found in our [User-User Messages](doc:user-user-messages) or [Transactional Messages](doc:transactional-messages) guides.


### How long can notifications be?
See [Concepts: Appearance](doc:appearance#content).

### How to schedule recurring notifications?

Using the above steps, you can setup recurring notifications ahead of time. One at a time.
It is better to use our [OneSignal API](doc:onesignal-api) for this, but this is still only one at a time.

You can also setup [Automated Messages](doc:automated-messages) but there is no guarantee on when exactly the user will receive them.

Another option you have is to use the [Zapier | OneSignal integration](doc:zapier).

### Can notifications get re-ordered with the Intelligent Delivery Option?

Yes, if you send multiple notifications with Intelligent Delivery that should be delivered on the same day, then users may get the notifications in different orders.

This is due to how our SDK interprets the rolling average of a user's predicted-active time on your site or app.

For example, if my current predicted-active time is 3:00pm and you send notification1 to me with Intelligent delivery. Our system will set this notification to be received by me around 3:00 pm.

If I visit your site or app at 2:00 pm. My predicted-active time may now change to an earlier time, so notification2 may be received before notification1.

### How can I use Additional Data?
OneSignal allows up to `2048 bytes` of data to be passed within the Additional Data or [API `data` parameter](https://documentation.onesignal.com/reference#section-attachments) of a notification.

This is generally used for [Deep Linking](https://documentation.onesignal.com/docs/links#section-deep-linking) or passing data into the push to run code upon receipt using our SDK Handle Notification Methods.

When using the Dashboard to send the push, this can only take `key: value` pairs of data. To send nested JSON object as a value, you would need to use our [API Create Notification POST call](https://documentation.onesignal.com/reference#create-notification).