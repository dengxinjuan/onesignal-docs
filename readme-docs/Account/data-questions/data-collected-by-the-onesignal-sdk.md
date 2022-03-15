---
title: "Data Collected by the OneSignal SDK"
slug: "data-collected-by-the-onesignal-sdk"
excerpt: "List of data collected by OneSignal SDK"
hidden: false
createdAt: "2017-06-23T00:27:36.890Z"
updatedAt: "2022-03-08T00:21:41.097Z"
---
The following are data fields that the OneSignal SDK collects automatically, manually, and/or through user permission. To customize which data is collected and how to manage user consent for data collection, please read our guide on [Handling Personal Data](doc:handling-personal-data). Most data can be [exported from the Dashboard or API](doc:exporting-data).

---

Data that can be used to target audiences by [Segments](doc:segmentation):
[block:parameters]
{
  "data": {
    "h-0": "Data",
    "h-1": "Description",
    "0-0": "First Session Time",
    "1-0": "Last Session Time",
    "2-0": "Session Count",
    "3-0": "Total Usage Duration",
    "4-0": "Device OS",
    "5-0": "Device Rooted",
    "6-0": "Device Language",
    "7-0": "Time Zone",
    "8-0": "Country",
    "9-0": "Push Status",
    "10-0": "App Version",
    "0-1": "The date & time the user first used the app / visited the website.",
    "1-1": "The date & time the user most recently used the app / visited the website.",
    "2-1": "The number of times the user has used the app / visited the website.",
    "3-1": "The number of seconds the user has ever interacted with the app, as recorded whenever the app is in the foreground.",
    "4-1": "The operating system of the device / browser.",
    "5-1": "**ANDROID** - Whether the user has a rooted device.\n**iOS** - Whether the user has a jailbroken device.",
    "6-1": "The language the device / browser reports.",
    "7-1": "The most recent time zone the device / browser was in. Timezone is tracked based on [IANA TZ](https://en.wikipedia.org/wiki/Tz_database) format.",
    "8-1": "The most recent country the device / browser was in ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format).",
    "9-1": "Whether the device / browser has push notifications enabled or disabled.",
    "10-1": "**MOBILE** - The version of the app the most recent session reported the user running.",
    "11-0": "In App Purchases",
    "11-1": "**MOBILE** - Consumable Purchases made by the user in the app while our SDK was active."
  },
  "cols": 2,
  "rows": 12
}
[/block]

The following data the OneSignal SDK collects that is not able to be segmented:
[block:parameters]
{
  "data": {
    "0-0": "Google Advertising ID and Apple's IDFA & IDFV",
    "0-1": "Not collected in OneSignal Android Native SDK 4.0+, iOS Native SDK 3.0+, Flutter SDK 3.0+, React Native SDK 4.0+, Cordova/Ionic SDK 3.0+, Unity SDK 3.0+, Xamarin SDK 4.0+.\n\n**MOBILE** - The Google Ad Id and Apple IFV are used for device matching. See [Users & Subscribers Guide](doc:users) for more details.",
    "1-0": "Your Application Identifier",
    "1-1": "**MOBILE** - The package name of your mobile application.",
    "2-0": "Cellular Carrier",
    "2-1": "**MOBILE** - The name of the cellular carrier used by the device.",
    "3-0": "Device Model",
    "3-1": "The model name of the device / browser.",
    "4-0": "IP Address",
    "4-1": "The IP address the device / browser is visiting from. See [handing IP Address Tracking](doc:handling-personal-data#ip-address-collection) for more details.",
    "5-0": "web_auth and web_p256",
    "5-1": "Web Push Subscription Tokens available for export from our [API CSV export](ref:csv-export).",
    "6-0": "Push Tokens",
    "6-1": "Mobile App and Web Push Tokens added to the device by FCM or APNs.",
    "h-0": "Data",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 7
}
[/block]
# Data OneSignal Automatically Collects that can be disabled client side

The following data the OneSignal SDK collects if your app asks for and receives permission from users:
[block:parameters]
{
  "data": {
    "0-0": "Location",
    "0-1": "**MOBILE** - GPS coordinates of the device. Location tracking must be turned on and accepted by the user. [Sending location to OneSignal can be disabled](doc:handling-personal-data#location-sharing).",
    "h-0": "Data",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 1
}
[/block]
# Data Manually Sent to OneSignal

The following data you may manually send to OneSignal. See [Handling Personal Data](doc:handling-personal-data) for more details.
[block:parameters]
{
  "data": {
    "0-0": "Email",
    "0-1": "Our SDKs support sending us the user's email address if you wish to use OneSignal to deliver emails to users.",
    "h-0": "Data",
    "h-1": "Description",
    "1-0": "Phone Number",
    "1-1": "Our SDKs support sending us the user's phone number if you wish to use OneSignal to deliver SMS to users.",
    "2-0": "Tags",
    "2-1": "You can send any additional data to us about a user as a tag."
  },
  "cols": 2,
  "rows": 3
}
[/block]
# Web SDK Browser Storage

The following are the type, purpose and lifetime of each cookie (create a new row for each):
[block:parameters]
{
  "data": {
    "h-0": "Identifier Name",
    "h-1": "Primary Purpose",
    "h-2": "Other Purpose",
    "h-3": "Type",
    "h-4": "Lifetime of ID",
    "h-5": "",
    "0-0": "ONE_SIGNAL_SDK_DB",
    "0-1": "Storing user preferences in connection with notification permission status.",
    "0-2": "N/A",
    "0-3": "IndexedDB dictionary, on customer’s domain.",
    "0-4": "Until cleared",
    "1-1": "Prompting and subscription tracking",
    "1-0": "`os_pageViews`,\n`isOptedOut`,\n`isPushNotificationsEnabled`",
    "1-2": "N/A",
    "1-3": "Local Storage",
    "2-0": "`onesignal-pageview-count`,\n`ONESIGNAL_HTTP_PROMPT_SHOWN`",
    "2-1": "Prompting",
    "2-2": "N/A",
    "2-3": "Session Storage"
  },
  "cols": 5,
  "rows": 3
}
[/block]