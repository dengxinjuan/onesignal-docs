---
title: "Create an Activity Feed"
slug: "create-an-activity-feed"
excerpt: "How to build an activity feed of notifications using OneSignal"
hidden: false
createdAt: "2016-09-22T02:39:42.722Z"
updatedAt: "2020-10-06T17:24:43.639Z"
---
## What is an Activity Feed?
An activity feed lets users see the history of notifications they've received within your app. 

## How-To
OneSignal primarily focuses on delivery of messages, so at this current time OneSignal does not store notifications sent history of each individual user. However, you can implement this yourself by storing the data on your own server or on the device.

### Option 1: Saving to Server

**Recommended Approach**

Instead of using background processing in your app, you may choose to create all your notifications with our [Create notification](ref:create-notification) REST API and additionally save a copy of the contents on your server. Then each time your app is started check your server for updates.

Once the data is stored by your app or on your server, you can display it to the user when you choose.

### Option 2: Save the notification when received
This option may be less reliable for cases when the device is turned off for an extended period of time  (see [Notification Behavior & Payload Information](doc:how-notifications-work) for more details). Also, if the device or user removes the app from memory like app being force quit on Android it will not get the notification (see [Notifications Not Shown](doc:notifications-show-successful-but-are-not-being-shown) for more details). For iOS 9 and older, this option will not work unless the app is running in the background or foreground when receiving the push.

First, you must setup the required code to cause your application to be woken up in the background whenever a notification is received (even if it's not clicked).

**iOS** - This requires a [Notification Service Extension](https://developer.apple.com/reference/usernotifications/unnotificationserviceextension) which should already be setup when following our [Mobile SDK Setup Guide](doc:mobile-sdk-setup) to add one to your Xcode project.

For iOS 9 and older device support you will need to use the `content-available` flag. Read Apple's [content-available](https://developer.apple.com/reference/uikit/uiapplicationdelegate/1623013-application?language=objc) guide for details on receiving and processing the event.

Within the Notification Service Extension, you can capture the Notification Payload and process it within your Activity Feed. For details on how to capture the OneSignal Notification Payload see our [iOS Notification Service Extensions Feature Guide](https://documentation.onesignal.com/docs/service-extensions#notification-service-extension).

**Android** - Read our [Android Background Data](doc:android-customizations#section-background-data-and-notification-overriding) guide for details on receiving and processing the event.

When you process the event, you can save a copy of the notification to your app.


### Option 3: OneSignal View Notifications API

The [View notifications](ref:view-notifications) endpoint will allow you to pull the last 50 notifications in a paginated fashion. It will pull notifications that are still scheduled, so keep track of the `completed_at` parameter to know if the message finished sending.