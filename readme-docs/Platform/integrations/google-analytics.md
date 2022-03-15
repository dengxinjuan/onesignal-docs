---
title: "Google Analytics"
slug: "google-analytics"
excerpt: "OneSignal Features - Integrating OneSignal with Google Analytics"
hidden: false
createdAt: "2016-09-22T06:14:15.083Z"
updatedAt: "2021-09-14T00:03:38.528Z"
---
OneSignal supports tracking subscription and notification data when users subscribe and notifications are clicked on each platform, including sending this data to Google Analytics so that it can be analyzed in the context of your other user data.
[block:callout]
{
  "type": "info",
  "title": "Checkout Our Webinar!",
  "body": "See the recorded session going over Google Analytics: \n*[Google Analytics Webinar](https://www.youtube.com/watch?v=FtpKeIGY4dM)*"
}
[/block]
## Mobile GA Guide

See our [Google Analytics for Firebase](doc:google-analytics-for-firebase) guide for more details.

----
## Web Push GA Guide

Start with [Adding Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs).

### Tracking Web Push Notification Clicks

#### By UTM Parameters

You can [automatically add UTM parameters to push notification URLs](https://documentation.onesignal.com/docs/links#utm-parameters) through the OneSignal Dashboard.

The easiest way to track notification clicks is to add Google Analytics UTM parameters to the end of the URL for the notification. Here's an overview on UTM parameters: http://blog.rafflecopter.com/2014/04/utm-parameters-best-practices/

When sending a notification, please pick a `utm_source` (Such as "onesignal"), a `utm_medium` (Such as "web-push" or "api" vs "automated" vs "dashboard"), and a `utm_campaign` parameter (Such as "promotional-offer-template-123"). Next, add these parameters to your url, like so:

`https://yoursite.com/your-page?utm_source=onesignal&utm_medium=web-push&utm_campaign=promotional-offer-template-123`

After this, in Google analytics you can visit the Acquisition -> All Campaigns view to see all the campaigns you have sent and filter by day, browser, or campaign.

If you are having issues with UTM parameters, please see this article on common UTM parameter mistakes: https://penguininitiatives.com/common-utm-campaign-url-tracking-mistakes-to-avoid/

#### By Page JavaScript
You can use the [addListenerForNotificationOpened](doc:web-push-sdk#addlistenerfornotificationopened) event of the OneSignal Javascript SDK to detect when a user clicks a notification.

Add the Google Tracking code to the head tags of your site, then add this code to the body tags of the page you are directing users upon clicking the notification. This will track the notification ID and OneSignal player ID
[block:code]
{
  "codes": [
    {
      "code": "<script>\nOneSignal.push([\"addListenerForNotificationOpened\", function(payload) {\n  console.log(\"OneSignal Notification Clicked Payload:\");\n  console.log(payload);\n  OneSignal.getUserId( function(userId) {\n    console.log(\"OneSignal User ID:\", userId);\n    // Make a POST call to GA with the notification data and userId aka playerId\n    // https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#hitcallback\n    ga('send', {\n      hitType: 'event', \n      eventCategory: 'os_addListenerForNotificationOpened', \n      eventAction: 'u_id ' + userId, \n      eventLabel: 'n_id ' + payload.id,\n      hitCallback: function() {\n        console.log(\"ga os_addListenerForNotificationOpened callback\");\n      }\n    });\n  });\n}]);\n</script>",
      "language": "javascript"
    }
  ]
}
[/block]
## Tracking Subscriptions

### Permission Prompt Change Events
You can use the [notificationPermissionChange](doc:web-push-sdk#notificationpermissionchange) event of the OneSignal Javascript SDK to detect when a user subscribes to notifications or unsubscribes from notifications on your site.

Add the Google Tracking code to the head tags of your site, then add this code to the body tags of the pages users can subscribe. This will track the subscription change event and the OneSignal player ID.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n    // Occurs when the user's subscription changes to a new value.\n    OneSignal.on('notificationPermissionChange', function(permissionChange) {\n      var currentPermission = permissionChange.to;\n      console.log('New permission state:', currentPermission);\n      OneSignal.getUserId( function(userId) {\n        ga('send', {\n          hitType: 'event',\n          eventCategory: 'os_notificationPermissionChange',\n          eventAction: 'u_id ' + userId,\n          eventLabel: currentPermission, \n          hitCallback: function() {\n            console.log(\"ga os_notificationPermissionChange callback\");\n          }\n        });\n      });\n   });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
This will create several event actions in Google Analytics when users opt-in or opt-out.
You can then use filtering options in Google Analytics to track by day, week, month, landing pages and browsers.


### Tracking Impressions of the opt in request pop-up
You can use the [permissionPromptDisplay](doc:web-push-sdk#registering-push) method to send an event to Google Analytics from your page's code, like so: 
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  // Occurs when native browser prompt is shown\n  OneSignal.on('permissionPromptDisplay', function() {\n    console.log(\"The native prompt displayed\");\n    ga('send', {\n      hitType: 'event',\n      eventCategory: 'os_permissionPromptDisplay',\n      eventAction: 'displayed',\n      hitCallback: function() {\n        console.log(\"ga os_permissionPromptDisplay callback\");\n      }\n    });\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
This will create an event in Google Analytics that you can track and filter by day, week, month, landing pages and browsers.

### Tracking Actual Subscription Change
You can use the [subscriptionChange](doc:web-push-sdk#subscription-change) event to track when specific users subscribe or unsubscribe from web push.

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  // Occurs when the user's subscription changes to a new value.\n  OneSignal.on('subscriptionChange', function (isSubscribed) {\n    console.log(\"The user's subscription state is now:\", isSubscribed);\n    OneSignal.getUserId( function(userId) {\n      ga('send', {\n        hitType: 'event',\n        eventCategory: 'os_subscriptionChange',\n        eventAction: 'u_id ' + userId,\n        eventLabel: isSubscribed,\n        hitCallback: function() {\n          console.log(\"ga os_subscriptionChange callback\");\n        }\n      });\n    })\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
### Tracking Notification Receipts & Dismissals
 <span class="label-all label-advanced">Advanced Topic</span>

We recommend sending this data to Google Analytics as well (or another analytics tool). However since your website may not be open when notifications are received, dismissed, and opened by a user, this should be done by using our [Webhook support](doc:webhooks).

For example, you can construct a webhook on top of the Google Analytics Measurement Protocol feature (https://developers.google.com/analytics/devguides/collection/protocol/v1/), then provide that URL with the query parameters of your choice when initializing OneSignal. 

Filtering options like by day, week, month, browser, template will be available in Google analytics alongside the above event for your use.