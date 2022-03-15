---
title: "Adobe Analytics"
slug: "adobe-analytics"
excerpt: "OneSignal Features - Integrating OneSignal with Adobe Analytics"
hidden: true
createdAt: "2016-09-23T20:49:56.911Z"
updatedAt: "2021-09-13T23:52:25.239Z"
---
OneSignal supports tracking subscription and notification data when users subscribe and notifications are clicked on each platform, including sending this data to Adobe Analytics so that it can be analyzed in the context of your other user data.

## Mobile Guide

### Tracking Mobile Notification Received and Clicked Events

**Received:** Send an event to your analytics system from the SDKs `NotificationReceived` event handler when a notification is received. Keep in mind, this event only gets called if the app is open and in the foreground or background. It will not get called if the app has been swiped away.

**Clicked:** Send another event to your analytics system from the `NotificationOpened or Action` event handler when a notification is clicked.
[block:parameters]
{
  "data": {
    "0-0": "Track Notification Received",
    "0-1": "[Handle Notification Received Method](doc:sdk-reference#notification-received-handler)",
    "0-2": "Android - Method fired when the notifications is received.\n\niOS - Method fired when notification is received while app is in focus.",
    "1-0": "Track Notification Clicked",
    "1-1": "[Handle Notification Click/Opened Method](doc:sdk-reference#notification-opened-handler)",
    "1-2": "Method fired when the notification is clicked and opens the app.",
    "h-1": "SDK Method",
    "h-2": "Details",
    "h-0": "Event"
  },
  "cols": 3,
  "rows": 2
}
[/block]
### Tracking Mobile Subscription Events

Send a subscription event to your analytics system from the SDKs `PermissionObserver` event handler when a user subscribes.
[block:parameters]
{
  "data": {
    "0-0": "Track Subscription Event",
    "0-1": "[Permission Change Event](doc:sdk-reference#addpermissionobserver-method)",
    "0-2": "Method fired when user changes permission status. Use to track:\n\n- Notification permission prompt shown (iOS)\n- The user accepting or declining the permission prompt (iOS)\n- Enabling/disabling notifications for your app in the App Settings and after returning to your app.",
    "h-0": "Event",
    "h-1": "SDK Method",
    "h-2": "Details"
  },
  "cols": 3,
  "rows": 1
}
[/block]
----
## Web Push

Start with the [Adobe Analytics Setup Guide](https://www.adobe.com/analytics/adobe-analytics.html).

### Tracking Web Push Notification Clicks

#### By Page JavaScript
You can use the [addListenerForNotificationOpened](doc:web-push-sdk#addlistenerfornotificationopened) event of the OneSignal Javascript SDK to detect when a user clicks a notification.

Add the Adobe Analytics Tracking code to the head tags of your site, then add this code to the body tags of the page you are directing users upon clicking the notification. This will track the notification ID and OneSignal player ID
[block:code]
{
  "codes": [
    {
      "code": "<script>\nOneSignal.push([\"addListenerForNotificationOpened\", function(payload) {\n  console.log(\"OneSignal Notification Clicked Paylaod:\");\n  console.log(payload);\n  OneSignal.getUserId( function(userId) {\n    console.log(\"OneSignal User ID:\", userId);\n    //Make a POST call to Adobe Analytics with the notification data and userId aka playerId\n    \n  });\n}]);\n</script>",
      "language": "javascript"
    }
  ]
}
[/block]

## Tracking Subscriptions

### Permission Prompt Change Events
You can use the [notificationPermissionChange](doc:web-push-sdk#notificationpermissionchange) event of the OneSignal Javascript SDK to detect when a user subscribes to notifications or unsubscribes from notifications on your site.

Add the Adobe Analytics Tracking code to your site, then add this code to the body tags of the pages users can subscribe. This will track the subscription change event and the OneSignal Player ID.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n    // Occurs when the user's subscription changes to a new value.\n    OneSignal.on('notificationPermissionChange', function(permissionChange) {\n      var currentPermission = permissionChange.to;\n      console.log('New permission state:', currentPermission);\n      OneSignal.getUserId( function(userId) {\n        // Make a POST call to Adobe Analytics with the subscription data and userId aka playerId\n      });\n   });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
This will create several event actions in Adobe Analytics when users opt-in or opt-out.
You can then use filtering options in Adobe Analytics to track by day, week, month, landing pages and browsers.


### Tracking Impressions of the opt in request pop-up
You can use the [permissionPromptDisplay](doc:web-push-sdk#registering-push) method to send an event to Google Analytics from your page's code, like so: 
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  // Occurs when native browser prompt is shown\n  OneSignal.on('permissionPromptDisplay', function() {\n    console.log(\"The native prompt displayed\");\n    // Make a POST call to Adobe Analytics with the Prompt data\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
This will create an event in Adobe Analytics that you can track and filter by day, week, month, landing pages and browsers.

### Tracking Actual Subscription Change
You can use the [subscriptionChange](doc:web-push-sdk#subscription-change) event to track when specific users subscribe or unsubscribe from web push.

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  // Occurs when the user's subscription changes to a new value.\n  OneSignal.on('subscriptionChange', function (isSubscribed) {\n    console.log(\"The user's subscription state is now:\", isSubscribed);\n    OneSignal.getUserId( function(userId) {\n      // Make a POST call to Adobe Analytics with the subscription data and userId aka playerId\n    })\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
### Tracking Notification Receipts & Dismissals
 <span class="label-all label-advanced">Advanced Topic</span>

We recommend sending this data to Adobe Analytics as well (or another analytics tool). However since your website may not be open when notifications are received, dismissed, and opened by a user, this should be done by using our [Webhook support](doc:webhooks).

Filtering options like by day, week, month, browser, template will be available in Adobe Analytics alongside the above event for your use.