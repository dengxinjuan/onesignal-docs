---
title: "macOS App Setup"
slug: "macos-app-sdk-setup"
excerpt: "Instructions for adding OneSignal to your macOS app"
hidden: false
createdAt: "2016-09-22T05:41:59.630Z"
updatedAt: "2021-03-19T00:51:50.676Z"
---
## Required For Setup

* [A OneSignal account](https://onesignal.com) if you do not already have one
* Your OneSignal App ID, available in [Keys & IDs](doc:accounts-and-keys) 

## macOS Setup

### Option 1: Mac Catalyst

If you built your app with Mac Catalyst, you can setup [OneSignal's XCFramework SDK](doc:using-onesignals-xcframework-for-mac-catalyst).

More details in this [guide on our blog](https://onesignal.com/blog/onesignal-supports-mac-catalyst-build/).

### Option 2: API

OneSignal does not currently have a dedicated macOS SDK. However, OneSignal can be used to send notifications to macOS apps. Please refer to [Apple's documentation](https://developer.apple.com/notifications/) to learn how to obtain a push token.

To register a macOS device, call OneSignal's [Add a Device POST /players] (https://documentation.onesignal.com/reference/add-a-device) with a `device_type` of `9` to represent the macOS platform, and pass in the push token for the `identifier` parameter.

### Updating User Events

With the [Add a Device POST /players] (https://documentation.onesignal.com/reference/add-a-device) you can set your own custom `external_user_id` and update custom data (called [Data Tags](doc:add-user-data-tags) with the [Edit tags with external user id](ref:edit-tags-with-external-user-id).

Otherwise, you can save the OneSignal `player_id` provided in the response to update device data with [Edit device](ref:edit-device) or [New session](ref:new-session).