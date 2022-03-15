---
title: "Mobile SDK Update - Major Release"
slug: "mobile-2020-api-migration-guide"
hidden: false
createdAt: "2020-08-27T00:04:56.019Z"
updatedAt: "2021-12-03T22:08:52.615Z"
---
#Major SDK Versions Summary

We've refined our SDKs' API to be more straightforward for common use cases while providing more flexibility for advanced ones. Better defaults and removing deprecated APIs means less code is required to set up notifications and a more focused set of options to look through. 

Dependency changes including switching to AndroidX means better compatibility with projects.

Based on user feedback, we’ve added a new `notificationWillShowInForeground` API enabling you to decide if the specific notification you’re about to show should be when your app is in the foreground. It’s really useful to not interrupt your users while they are in the middle of an intense battle in your game, or for a chat app, to not display a notification when the user is a already in the chat. See ["Android - Foreground Notification Control"](https://documentation.onesignal.com/docs/40-api-android-native#foreground-notification-control) and ["iOS - Foreground Notification Control"](doc:30-api-reference-ios#foreground-notification-control) for more details on this new API.

----

#Released SDKs

## Step-by-Step Migration Guides
Just required changes to get upgraded to the major versions quickly!
* [Android Native 3.x to 4.0.0 Upgrade Guide](https://documentation.onesignal.com/docs/step-by-step-android-native-3x-to-400-upgrade-guide)
* [iOS Native 2.x to 3.0.0 Upgrade Guide](https://documentation.onesignal.com/docs/step-by-step-ios-native-2x-to-300-upgrade-guide)
* [React Native 3.x to 4.0.0 Upgrade Guide](step-by-step-react-native-3x-to-400-upgrade-guide)
* [Flutter 2.x to 3.0.0 Upgrade Guide](doc:step-by-step-flutter-2x-to-300-upgrade-guide) 
* [Cordova 2.x to 3.0.0 Upgrade Guide](doc:step-by-step-cordova-2x-to-300-upgrade-guide) 

## Full API Changes References
* [Android Native 3.x to 4.x API Changes](https://documentation.onesignal.com/docs/40-api-android-native)
* [iOS Native 2.x to 3.x Changes](https://documentation.onesignal.com/docs/30-api-reference-ios)
* [React Native - 4.0 API Reference](react-native-40-api-reference)
* [Flutter - 3.0 API Reference](doc:flutter-30-api-reference)
* [Cordova/Ionic - 3.0 API Reference](doc:cordova-30-api-reference)

----

# :hammer: Beta SDKs

Give them a try and provide feedback via our [Github repos](https://github.com/OneSignal) on the specific SDK you're trying out!

See our [Mobile Push Quickstart](https://documentation.onesignal.com/docs/mobile-sdk-setup) if you would like to use the main line SDKs.

## Step-by-Step Migration Guides
Just required changes to get upgraded to the major versions quickly!
* [Unity 2.x to 3.0.0 Beta Upgrade Guide](https://documentation.onesignal.com/docs/step-by-step-unity-2x-to-300-update-guide)
* [Xamarin 3.x to 4.0.0 Beta Upgrade Guide](https://documentation.onesignal.com/docs/step-by-step-xamarin-3x-to-400-upgrade-guide)

## Full API Changes References
* Unity and Xamarin others coming soon

## New App Setup guide
If you are adding the OneSignal SDK to the app for the first time.
* Unity and Xamarin others coming soon