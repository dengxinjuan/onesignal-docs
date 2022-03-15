---
title: "Segments"
slug: "segmentation"
excerpt: "Cohorts or Groups of users based on data collected and sent to OneSignal."
hidden: false
createdAt: "2017-08-17T01:10:48.462Z"
updatedAt: "2021-12-13T19:53:32.687Z"
---
Segments give you the ability to group and target devices with more personalized and engaging messages. You can divide your subscriber base into specific audiences based on multiple [Filter Types](#filter-types) of data like activity, country, language, [Data Tags](doc:add-user-data-tags), etc. 

Segments are updated automatically once created. As users interact with your app or website, devices may be added-to or removed-from segments without any additional setup or tracking on your end.

#### Segments Quickview Video
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/xUmkYSJL1r0\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

----

## Creating Segments

Guide on creating segments through the OneSignal dashboard. For details on creating segments through the API see [Create Segments POST Call](ref:create-segments).

In **Audience > Segments** select **New Segment**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a30dd5-segment_screen.png",
        "segment screen.png",
        1596,
        738,
        "#e1e4e6"
      ]
    }
  ]
}
[/block]
### Adding a Filter
All possible [Filter Types](#filter-types) shown in your dashboard may be combined to create specific segments. Not all platforms support each Filter Type and not all filters have the same options. 

[block:callout]
{
  "type": "info",
  "title": "Segment for SMS Subscribers only",
  "body": "* If you have already imported phone numbers and added data tags to those numbers then \n\n  * Click on \"New Segment\"\n  * Add ***device type*** filter set to SMS to send to all phone numbers.  ***OR***\n  * Add ***User Tag*** filter and select Data Tags that are associated specifically with phone number records"
}
[/block]
Select the **Last Session** filter for the last time a device visited your app or website.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d691661-Screen_Shot_2020-10-17_at_10.40.26_AM.png",
        "Screen Shot 2020-10-17 at 10.40.26 AM.png",
        807,
        431,
        "#eaecee"
      ]
    }
  ]
}
[/block]
Set this to be "greater than" `240` hours. This will tell us how many subscribed devices have not returned to the site or app in over 10 days.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f93e610-Screen_Shot_2020-10-17_at_10.43.04_AM.png",
        "Screen Shot 2020-10-17 at 10.43.04 AM.png",
        807,
        431,
        "#f2f3f4"
      ]
    }
  ]
}
[/block]
### AND Clauses
After adding your first filter, the **Add filter** button will create an "AND clause" which requires all devices to fit into all filters combined with "AND clauses".

Under "Last Session" select **Add filter** and select **Last Session** again.

Set this to be "less than" `264` hours.

When a device has not visited the site in over 240 hours (10 days) they will enter into this segment AND after 264 hours (11 days) they will be moved out of this segment.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ae2848-Screen_Shot_2020-10-17_at_10.50.02_AM.png",
        "Screen Shot 2020-10-17 at 10.50.02 AM.png",
        807,
        431,
        "#f0f1f2"
      ]
    }
  ]
}
[/block]
### OR Clauses
To combine multiple filters that do not depend on each other, click **Add Or** to separate groups of filters.

Select **Add Or** and select **First Session** "greater than" `72` hours.

Now, the segment contains all devices that "First Subscribed" over 72 hours ago (3 days) OR devices that have not been back to the site in over exactly 10 days.

Name the segment something memorable like `10 Days Inactive Or Over 3 Days New` and select **Create Segment**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46fb0d9-Screen_Shot_2020-10-17_at_11.04.24_AM.png",
        "Screen Shot 2020-10-17 at 11.04.24 AM.png",
        805,
        649,
        "#eff0f2"
      ]
    }
  ]
}
[/block]
#### Deleting Filters
Simply click on the 'X' next to a filter to delete it from a segment. Note that any time a filter is added or deleted, the audience count is updated.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/G8otODVEjZ4\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
## Creating Advanced Segments 

Creating Segments with Tags and Location data.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/b57Y-tSjZrI\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

----

## Deleting Segments

Deleting segments from **Audience > Segments** does not delete the users within the segment. It just deletes the segment from the view. To delete devices within a segment permanently, see [Delete Users](doc:delete-users).

Note: You cannot delete segments that are used in [Automated Messages](doc:automated-messages) or [In-App Messages](doc:in-app-quickstart) until you update or change this in the section.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e17ee0f-Screen_Shot_2020-10-17_at_11.09.51_AM.png",
        "Screen Shot 2020-10-17 at 11.09.51 AM.png",
        1050,
        669,
        "#e4e5e7"
      ]
    }
  ]
}
[/block]
### Default Segment

The OneSignal Dashboard defaults to the "Subscribed Users" segment when sending messages. This can be changed by setting a "default segment".

A "default segment" will be the first segment selected when creating a message within the OneSignal Dashboard. This is to help both quickly target certain segments used frequently and help prevent mistakes if the segment is not changed before sending the message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/78409b0-Screen_Shot_2020-10-17_at_11.16.07_AM.png",
        "Screen Shot 2020-10-17 at 11.16.07 AM.png",
        1050,
        669,
        "#e3e5e7"
      ]
    }
  ]
}
[/block]
----

## Paused and Active Segments

If a segment is paused when trying to target it, the notification will fail.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b308dbd-Screen_Shot_2020-10-17_at_11.34.12_AM.png",
        "Screen Shot 2020-10-17 at 11.34.12 AM.png",
        1054,
        624,
        "#e5e6e9"
      ]
    }
  ]
}
[/block]
You can **Pause** and **Resume** segments from the 3-dot Options button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cca67d8-Screen_Shot_2020-10-17_at_11.36.32_AM.png",
        "Screen Shot 2020-10-17 at 11.36.32 AM.png",
        1054,
        719,
        "#e4e6e8"
      ]
    }
  ]
}
[/block]
----
## Filter Types

Understanding the data used to create segments.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/tbWyEbHkY3M\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Filter Type",
    "h-1": "Description",
    "0-0": "**FIRST SESSION**",
    "1-0": "**LAST SESSION**",
    "2-0": "**SESSION COUNT**",
    "3-0": "**USAGE DURATION**",
    "4-0": "**AMOUNT SPENT**",
    "5-0": "**PURCHASED ITEM**",
    "6-0": "**LANGUAGE**",
    "7-0": "**APP VERSION**",
    "8-0": "**DEVICE TYPE**",
    "9-0": "**USER TAG**",
    "10-0": "**LOCATION**",
    "11-0": "**ROOTED**",
    "12-0": "**SUBSCRIPTIONS**",
    "14-0": "**COUNTRY**",
    "0-1": "**Mobile** - The first date/time the user's device opened the app with OneSignal SDK active and valid network connection.\n**Web Push** - The first date/time the user subscribed to your site.",
    "1-1": "The most recent date/time the user's device communicated with OneSignal servers. Updated when device opens the app on mobile or subscriber returns to the site and attempted to update again upon leaving the app / website. Does not update when app is in the background.",
    "2-1": "**Mobile**- The number of times the user's device has opened your app.\n**Web Push** - The number of times the user visited your website after not having the website open previously.",
    "3-1": "The total number of seconds the user's device has had your app open. Only accumulated for sessions that are longer than 60 seconds on mobile and 30 seconds on web. See [How is usage duration calculated](#how-is-usage-duration-calculated).",
    "4-1": "The amount the user has spent on \"Consumable\" In-App Purchases.\niOS, Android, Amazon - this data is available without additional work. See [What kind of in-app Purchases are tracked](#what-kind-of-in-app-purchases-are-tracked-and-how-can-i-import-historical-in-app-purchases).\nWeb Push - you must integrate in-app purchase as [Data Tags](doc:add-user-data-tags) and filter based on tag.",
    "5-1": "Filter by code of In-App Purchase item.\niOS, Android, Amazon - this data is available without additional work. See [What kind of in-app Purchases are tracked](#what-kind-of-in-app-purchases-are-tracked-and-how-can-i-import-historical-in-app-purchases).\nWeb Push - you must integrate in-app purchase as [Data Tags](doc:add-user-data-tags) and filter based on tag.",
    "6-1": "Language of user's device. See [Language & Localization](doc:language-localization) for possible codes.",
    "7-1": "Version of your app gathered from Android Studio `versionCode` in your App `build.gradle` and iOS uses Identity Version or `CFBundleShortVersionString` in Xcode.",
    "8-1": "Device operating system: Google Android, Huawei Android, iOS, Windows Phone, Chrome, Firefox, Safari, or [Email](doc:email-quickstart)",
    "9-1": "**Requires Data** - Tags you have added to the user's device. See [Data & Tags](doc:data-tags) for more details.",
    "10-1": "**Requires Data** - Radius in meters from a particular geocoordinate (lat, long).",
    "11-1": "**Android** - whether devices is rooted.",
    "14-1": "Country the user's device was in the last time it communicated with OneSignal servers.",
    "12-1": "**Deprecating** - iOS, Android, Windows Phone **ONLY** - Whether user is not subscribed to notifications from another app you have access to.",
    "15-0": "**TEST USERS**",
    "15-1": "Includes all test users that you have set up as a [Test User](doc:users-and-devices).",
    "13-0": "**EMAIL**",
    "13-1": "The push notification record tied to a specific email set with our SDK `setEmail` method."
  },
  "cols": 2,
  "rows": 16
}
[/block]

----
## FAQ
### How do I add specific users to a Segment?
Because segments are created by filters, you will need to add [Data Tags](doc:add-user-data-tags) for each user you wish to be in a segment with the **User Tag** filter. See next question for options to add tags to users.

You can also target groups of devices by the User ID with our [Create notification](ref:create-notification) REST API.

### How can I create a segment based on Player ID or External User ID?
Segments require a filter to group users. Player ID and External User ID are not filters, but you can add [Data Tags](doc:add-user-data-tags) to select devices based on these IDs using the following:

- CSV List upload: [Importing User Attributes](doc:import-user-tags)
- [Edit device](ref:edit-device) API Endpoint with Player ID
- [Edit tags with external user id](ref:edit-tags-with-external-user-id) API Endpoint

You can also target groups of devices by the User ID with our [Create notification](ref:create-notification) REST API.

### How can I target Web Desktop vs Web Mobile Subscribers?

Unfortunately we do not provide a way to detect mobile-web subscribers vs desktop-web subscribers automatically at this time. However, you can set this up with [Adding Data Tags](doc:add-user-data-tags) and following [this example guide with code](doc:add-user-data-tags#tag-based-on-browser-and-operating-system).

### What kind of in-app purchases are tracked and how can I import historical in-app purchases?

The OneSignal mobile SDKs will automatically track "Consumable" in-app purchases made while the OneSignal SDK is active in the app. Subscription based in-app purchases are not tracked.

To update a device's previously bought in-app purchases, use the [Edit device API](ref:edit-device) to update the `amount_spent` parameter and [New purchase API](ref:new-purchase) to update items purchased.

### Are segment counts accurate?
Once you reach over 100,000 Total Users, segment counts begin to be estimated in order to keep the dashboard running quickly and smoothly. To get the most accurate numbers, see the [Delivery](doc:notification-delivery) stats for the message sent to that segment.

### How is Usage Duration Calculated?
For Android and iOS, if a user backgrounds the app, we don't call on_focus to update the usage time unless we have tracked 60+ seconds of the app being in focus. If it is under 60 seconds, the time caries over. For Web, usage duration is tracked after 30 seconds.
Example:
User opens the app
Uses app for 30 seconds
Backgrounds the app
We do our 60 sec check, only have 30 sec so skip network call
User reopens app
Uses app for 45 seconds
Backgrounds the app
We do our 60 sec check, have  75 sec of unreported time
Make on_focus call reporting 75 seconds of usage