---
title: "Mobile Troubleshooting"
slug: "troubleshooting"
excerpt: "Troubleshooting common issues setting up and running OneSignal."
hidden: false
createdAt: "2016-09-02T04:27:19.695Z"
updatedAt: "2020-12-12T03:12:28.304Z"
---
[block:callout]
{
  "type": "info",
  "title": "Looking for website help?",
  "body": "If you only have a website and no mobile apps, see our [Web Push Troubleshooting guide](doc:troubleshooting-web-push)."
}
[/block]
## Troubleshooting Steps

###1. Make sure you have the latest version of our SDK.
OneSignal regularly makes updates. If you are using our Mobile SDKs in your app and having an issue, chances are it was fixed in the most recent update. 

You can find the most recent versions on [Github > the SDK using > Releases](https://github.com/OneSignal).

###2. Check Our Error Logs
If you see an error or warning you are unable to resolve, start by checking our known issues and solutions in the [OneSignal ErrorLog](https://docs.google.com/spreadsheets/d/1sLgW9q5INC_lKN0rd7pRMYP9DfF95MhETr0DI4oOGw4/edit?usp=sharing).

###3. See our Troubleshooting Guides

Here is a quick reference table of our SDK's Troubleshooting Docs:
[block:parameters]
{
  "data": {
    "0-0": "[Web Push](doc:troubleshooting-web-push)",
    "0-1": "[React-Native](doc:troubleshooting-react-native)",
    "0-2": "[Cordova Variants](doc:troubleshooting-cordova-variants)",
    "0-3": "[Flutter](https://documentation.onesignal.com/docs/troubleshooting-flutter)",
    "1-0": "[Android](doc:troubleshooting-android)",
    "1-1": "[Unity](doc:troubleshooting-unity)",
    "1-2": "[Xamarin](doc:troubleshooting-xamarin)",
    "1-3": "",
    "h-0": "Platform",
    "h-1": "SDK",
    "h-2": "",
    "h-3": "",
    "2-0": "[iOS](doc:troubleshooting-ios)"
  },
  "cols": 4,
  "rows": 3
}
[/block]

[block:parameters]
{
  "data": {
    "0-0": "[Notifications not shown on device](doc:notifications-show-successful-but-are-not-being-shown)",
    "0-1": "[Notification Images Not Showing](doc:notification-images-not-showing)",
    "0-2": "[Notifications delayed](doc:notifications-delayed)",
    "0-3": "[Duplicated notifications](doc:duplicated-notifications)",
    "1-0": "[Notification CTR](doc:notification-ctr)",
    "1-1": "",
    "1-2": "",
    "h-0": "Notification Issues",
    "h-1": "",
    "h-2": "",
    "h-3": ""
  },
  "cols": 4,
  "rows": 2
}
[/block]

[block:parameters]
{
  "data": {
    "0-0": "[Mismatched Push Certificate](doc:mismatched-push-certificate)",
    "0-1": "[Mismatched User Environment](doc:mismatched-user-environment)",
    "0-2": "[Mismatched Bundle ID](doc:mismatched-bundle-id)",
    "0-3": "[Mismatched Users](doc:mismatched-users)",
    "1-0": "[Possible Bundle / Certificate Mismatch](doc:possible-bundle-certificate-mismatch)",
    "1-2": "[Invalid Google Credentials](doc:invalid-google-credentials)",
    "1-1": "[Invalid Push Certificate](doc:invalid-push-certificate)",
    "h-0": "Users and Configuration Notices",
    "h-1": "",
    "h-2": "",
    "h-3": ""
  },
  "cols": 4,
  "rows": 2
}
[/block]
###4. Getting Mobile Crash Logs
If you could send these logs through a `.txt` file or [Pastebin](https://pastebin.com/) that would be much appreciated and help us better see what is happening in the app.

- [How to get a crash log or error log from an Android device](doc:troubleshooting-android#how-to-get-a-crash-or-error-log-from-an-android-device)
- [How to get a crash log from an iOS device](doc:troubleshooting-ios#how-to-get-a-crash-log-from-an-ios-device)