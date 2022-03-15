---
title: "Find Devices & Set Test Users"
slug: "users-and-devices"
excerpt: "OneSignal Dashboard - All Users Page: Finding Users, Setting Test Users, Sorting Devices and Deleting Users."
hidden: false
createdAt: "2016-09-02T02:14:24.934Z"
updatedAt: "2022-01-15T01:53:30.345Z"
---
**Audience > All Users** shows a list of every device in your OneSignal App, and [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk). 

You can show/hide the data attributes with the **columns** button (1), search by Player Id, External User Id or Email (2) and filter by [Segments](doc:segmentation) (3).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/426bbc1-Screen_Shot_2021-08-27_at_1.32.04_PM.png",
        "Screen Shot 2021-08-27 at 1.32.04 PM.png",
        2630,
        962,
        "#dde0e3"
      ]
    }
  ]
}
[/block]
#Test Users

Test Users are a special group of devices that you manage directly in order to test delivery of messages. To add your device as a test user:
1. First [find your device](#finding-users). There are several options listed below. 
2. Once you have your `player_id` or  `external_user_id`, you can search for it (1), then next to the device record select **Options** > **Add to Test Users** (2).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d6418f3-Screen_Shot_2021-08-27_at_1.38.32_PM.png",
        "Screen Shot 2021-08-27 at 1.38.32 PM.png",
        2190,
        792,
        "#d9dde0"
      ]
    }
  ]
}
[/block]
Next you can [Segment](doc:segmentation) devices by Test Users Filter and/or send messages using the **Send To Test Device Button** when [Sending Push Messages](doc:sending-notifications).

#Finding Users

There are a couple options for finding your device depending on the data you currently have.
If you know the device's `player_id` or `external_user_id` , jump to [Adding as Test User](#test-users). If you know specific `tags` see the below section on finding device by tag.

##Find your device for Web Desktop

1. Using the same browser profile you are subscribed to your site, open the site URL with the OneSignal code active.
2. Open the Debugger console (F12 or Right Click the site > Inspect).
3. Click  the "Console" section 
4. Add this code: `await OneSignal.getUserId();`
5. You will see your OneSignal Player Id logged to the console if you have a device record.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f5d52d-Screen_Shot_2020-04-03_at_10.13.15_AM.png",
        "Screen Shot 2020-04-03 at 10.13.15 AM.png",
        606,
        308,
        "#f4eeef"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Copy the Player Id without quotes and see above to add it as a [Test User](#test-users).",
  "title": "You found your Player Id on Web!"
}
[/block]

##Find your device for Web Mobile

1. Plug your Android device subscribed to the site into your computer and visit your site on the Android device.
2. On your desktop, open chrome to this url:  `chrome://inspect/#devices`
Your mobile device should prompt you to enable USB Debugging
3. Select the **inspect** button

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d107be1-Screen_Shot_2020-04-03_at_10.28.47_AM.png",
        "Screen Shot 2020-04-03 at 10.28.47 AM.png",
        900,
        362,
        "#f9f7f8"
      ]
    }
  ]
}
[/block]
4. A new window on desktop should open to your site seen on the mobile device.
5. Make sure the site URL is correct with the OneSignal code active.
6. Click  the "Console" section 
7. Add this code: `await OneSignal.getUserId();`
8. You will see your OneSignal player ID logged to the console if you have a device record.

Copy the Player Id without quotes and see [Adding as Test User](#test-users).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82c1cfc-Screen_Shot_2020-04-03_at_10.34.55_AM.png",
        "Screen Shot 2020-04-03 at 10.34.55 AM.png",
        869,
        566,
        "#efeeee"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Copy the Player Id without quotes and see above to add it as a [Test User](#test-users).",
  "title": "You found your player id on Web Mobile!"
}
[/block]
##Find your device for Mobile App

Using the OneSignal SDK [User Data Methods](https://documentation.onesignal.com/docs/sdk-reference#user-data), plugin your device to Xcode or Android Studio and log the player id of your device in the console.

Then copy the Player Id without quotes and see above to add it as a [Test User](#test-users).

##Find Device by Tag

If you added a specific tag to the user like a `user_name`, `email` tag, or other identifier, you can create a [Segment with the User Tag filter](doc:segmentation#section-creating-advanced-segments) to find your specific device.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c74d9b9-Screen_Shot_2022-01-14_at_5.46.11_PM.png",
        "Screen Shot 2022-01-14 at 5.46.11 PM.png",
        1378,
        196,
        "#ededee"
      ],
      "caption": "Updating the screenshot to the current UI"
    }
  ]
}
[/block]

## Find Device in Dashboard

Open your app or site with your subscribed device. Make sure you are visiting a page of your site/app with OneSignal initialized (code actively running). Then in  <a class="dash-link dash-users" href="/docs/users-and-devices#section-all-users-page">All Users</a> sort by "Last Active" so the arrow points up to see the latest active devices.

You may need to confirm it is your device by making some data visible. Click the **Displayed Columns List** filter at the top-right. Some helpful data to check is:
[block:parameters]
{
  "data": {
    "h-0": "Column",
    "h-1": "Details",
    "0-0": "**Last Active**",
    "0-1": "The most recent time the user visited the site/app. You may want to refresh the page to get updated values.",
    "1-0": "**First Session**",
    "1-1": "The first time you subscribed to the website or opened the app with OneSignal code.\n\nCheck if this is the first time you subscribed to the site/app.",
    "2-0": "**IP Address**",
    "2-1": "If enabled, visit https://whatismyipaddress.com/ to see if the IPs match. \nMore details in [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk)",
    "3-0": "**Tags**, **Country**, **External User Id**",
    "3-1": "This is additional information that can be used to check if you know this data.",
    "4-0": "**Device**",
    "4-1": "- Mobile Website subscribers will show \"Linux Arm...\" with the Browser icon and Browser version. \n\n- Desktop Website subscribers will show Mac or Win with Browser icon and Browser version.\n\n- Android Mobile Apps - will have the device model and corresponding icons.\n\n- iOS Mobile Apps - the model is based on the [Hardware String](https://www.theiphonewiki.com/wiki/Models). For example \"iPhone9,3 (12.3.1)\" means \"iPhone 7 with operating system version 12.3.1\"."
  },
  "cols": 2,
  "rows": 5
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4469647-Frame_6.png",
        "Frame 6.png",
        1523,
        739,
        "#e2e5e8"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "If you found your device, jump to [Adding as Test User](#test-users).",
  "title": "You found your device!"
}
[/block]

----

# All Users Data Columns
The provided columns contain a variety of data attributes about your users, as follows:
[block:parameters]
{
  "data": {
    "h-0": "Column",
    "h-1": "Description",
    "0-0": "**Actions**",
    "2-0": "**Subscribed**",
    "3-0": "**Last Active**",
    "4-0": "**First Session**",
    "5-0": "**Device**",
    "6-0": "**Sessions**",
    "15-0": "**Player ID**",
    "17-0": "**Segments**",
    "19-0": "**Email**",
    "20-0": "**Push Token**",
    "0-1": "Allows you to [Add to Test Users](doc:#section-test-users) or [Delete the current user](#section-deleting-users)",
    "2-1": "Whether the user's device is currently subscribed to push or email.",
    "3-1": "The last date & time the user most recently used the app / visited the website.\n\n\nFor Web Push: This value is updated anytime a user visits any OneSignal-enabled page of your site in a *new tab* or *new window*. Clicking links in the same page or refreshing the same page does not cause the value to be updated for performance reasons. If a user clicks a notification and the notification brings them back to a OneSignal-enabled page of your site in a new tab, the Last Active time will be updated.",
    "4-1": "The first date/time the user's device communicated with OneSignal servers.",
    "5-1": "Platform and specific model of the user's device, including operating system version or browser version.",
    "6-1": "Number of unique times the user's device has communicated with OneSignal servers.",
    "15-1": "The unique identifier of the user's device. More info on the [OneSignal Player ID](doc:users#section-player-id)",
    "17-1": "Segments the user's device belongs to.",
    "18-0": "**Tags**",
    "18-1": "The JSON output of any tags your app has added to the user. More details in [Add Data Tags](doc:add-user-data-tags).",
    "19-1": "<span class=\"label-all label-email\">Email Records Only</span> - The email address of the device. More in [Email Overview](doc:email-overview).",
    "20-1": "The identifier of the device that facilitates push notifications. Must be available to receive push.",
    "1-0": "**Channel**",
    "1-1": "Push or Email Record",
    "7-0": "**App Version**",
    "7-1": "Xcode build number or Android Studio versionCode in your App build.gradle",
    "8-0": "**Country**",
    "8-1": "Country based on IP Address the user's device was in the last time it communicated with OneSignal servers.",
    "9-0": "**IP Address**",
    "9-1": "By default this is not collected for EU Users. More details in [Handling Personal Data](doc:handling-personal-data).",
    "10-0": "**SDK Version**",
    "10-1": "OneSignal SDK Version based on the [Native SDK Platform](https://github.com/OneSignal)",
    "11-0": "**Rooted**",
    "11-1": "<span class=\"label-all label-android\">Android</span> - whether the device is rooted.",
    "12-0": "**Location Point**",
    "12-1": "<span class=\"label-all label-mobile\">Mobile Only</span> - Geolocation (lat, long) of the user's device, sent if the user has granted location permissions to your app. **Must be turned on to be tracked** More details in [Handling Personal Data](doc:handling-personal-data).",
    "16-0": "**External User ID**",
    "16-1": "Your unique user id. See [Internal Database, DMP, & CRM](doc:internal-database-crm).",
    "13-0": "**Usage Duration**",
    "13-1": "<span class=\"label-all label-mobile\">Mobile Only</span> - Number of seconds the user's device has had your app open.",
    "14-0": "**Language Code**",
    "14-1": "The language set in the device or browser settings."
  },
  "cols": 2,
  "rows": 21
}
[/block]