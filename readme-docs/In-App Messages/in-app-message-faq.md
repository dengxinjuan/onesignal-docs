---
title: "In-App Message FAQ"
slug: "in-app-message-faq"
hidden: false
createdAt: "2021-07-14T20:06:13.456Z"
updatedAt: "2021-08-14T03:35:27.169Z"
---
#Supported OneSignal SDKs

It is recommended to use the latest version of the OneSignal SDK to get all the latest features available.
[block:parameters]
{
  "data": {
    "0-0": "[Android Native SDK](doc:android-native-sdk)",
    "0-1": "[3.11.4](https://github.com/OneSignal/OneSignal-Android-SDK/releases)",
    "1-0": "[iOS Native SDK](doc:ios-native-sdk)",
    "2-0": "[React Native SDK](doc:react-native-sdk)",
    "3-0": "[Unity SDK](doc:unity-sdk)",
    "1-1": "[2.11.2](https://github.com/OneSignal/OneSignal-iOS-SDK/releases)",
    "2-1": "[3.4.2](https://github.com/geektimecoil/react-native-onesignal/releases)",
    "3-1": "[2.9.0](https://github.com/OneSignal/OneSignal-Unity-SDK/releases)",
    "4-0": "[Cordova/Ionic/PhoneGap SDK](doc:cordova-sdk)",
    "4-1": "[2.6.0](https://github.com/OneSignal/OneSignal-Cordova-SDK/releases)",
    "5-0": "[Xamarin SDK](doc:xamarin-sdk)",
    "5-1": "[3.5.0](https://github.com/OneSignal/OneSignal-Xamarin-SDK/releases)",
    "7-0": "[Web Push SDK](doc:web-push-sdk)",
    "7-1": "**NA**",
    "6-0": "[Flutter SDK](doc:flutter-sdk)",
    "6-1": "[2.1.0](https://github.com/OneSignal/OneSignal-Flutter-SDK/releases)",
    "h-0": "SDK",
    "h-1": "Minimum SDK Version",
    "h-2": "Details",
    "0-2": "**Supported**",
    "1-2": "**Supported**",
    "2-2": "**Supported**",
    "3-2": "**Supported**",
    "4-2": "**Supported**",
    "5-2": "**Supported**",
    "6-2": "**Supported** ",
    "7-2": "Not Supported"
  },
  "cols": 3,
  "rows": 8
}
[/block]

##What is the minimum Android and iOS Version that can receive in-app messages?
The minimum Android version that can receive in-app messages is 4.4
If a device is under this version the in-app message will not show.

The minimum iOS version that can receive in-app messages is 10.0
If a device is under this version the in-app message will not show.

# Is tag substitution or message personalization available?
Yes, Tag Substitution will be supported only on iOS version 2.16.4+ and Android version 3.16.0+ SDKs.

You can use data tags to personalize the content and click action behavior of your users. Here is the list of [In-App Message fields that support tag substitution](doc:in-app-message-examples#in-app-message-tag-substitution).

# What are the recommended image dimensions?

We show IAMs based on the dimensions of the phone currently being displayed on. There are a few common aspect ratios for devices and resolutions (especially for Android) which could all affect the viewing of the IAM.

A `16:9` aspect ratio is the most common for devices, but `4:3` and `3:2` aspect ratios are close compromises.

## Is the WYSIWYG preview accurate?
The WYSIWYG preview is very close to what your users will actually see. However, devices have a range of screen dimensions and so we have an easy-to-use preview on device option that will send the in-app message to any test device you'd like immediately to take a look at it on your own phone.

#When do IAM changes take effect?

Once you update an IAM from the dashboard. The changes will go into effect immediately and end-users will see the updated message after the app has been closed for 30 seconds before re-opened.

#Feature Requests
Common requests for In-App Message can be found here. If you would like any of these or have others, please contact support@onesignal.com with your use case and details of how you would like the feature implemented.

##In-Browser Messages
IAM for browsers is not currently supported. Please contact support@onesignal.com with your use case and details of how you would like the feature implemented.

##HTML Template
Currently not available. Please contact support@onesignal.com with your use case and details of how you would like the feature implemented.

##API Options
Currently all IAM need to be created through the OneSignal dashboard.

On each page of your app, you can set our `addTrigger` method and through your own API requests to your app, feed in the trigger `key:value` set within the dashboard to trigger the IAM based on your own network requests.

##Message Localization
Currently, you can set up different in-app messages for different languages and target a [Segment](doc:segmentation) based on the device language filter.