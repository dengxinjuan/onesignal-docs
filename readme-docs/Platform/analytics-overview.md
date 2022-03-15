---
title: "Analytics Overview"
slug: "analytics-overview"
excerpt: "Analytics Options with OneSignal for tracking Subscriptions, Devices, Notifications and Prompt Impressions."
hidden: false
createdAt: "2019-11-21T02:18:39.792Z"
updatedAt: "2022-02-24T19:15:34.717Z"
---
Here at OneSignal, we understand gaining analytics into your subscribers and messages are key to your messaging and campaign success.

This guide will explain how to get further analytics with OneSignal for:
- [Subscriptions Tracking](#subscription-tracking)
- [Notification Tracking Section](#notification-tracking)
- [Device Tracking](#device-tracking)
- [Prompt Impression-Tracking Section](#prompt-impression-tracking)
[block:html]
{
  "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/gIOSQGkAxzc\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n"
}
[/block]

#User Tracking
Using the OneSignal Dashboard, you can view the amount of **Total Users** (Subscribed and Unsubscribed) which can be broken down by day, month and year while also sorting by the different platforms (iOS, Android, Email and different Web Browsers). 

Total Users on Mobile Apps will be the amount of devices that have opened the app and initialized the SDK with a network connection. Android users get subscribed when they open the app for the first time. iOS users need to be prompted in most cases. If you only have a Website with OneSignal, then the increase in Total Users will reflect subscriber increases since only subscribed web users are tracked. 

The **Revoked Stat** counts how many devices were subscribed at one point, but then unsubscribed and continue to use the app or website.

----

#Subscription Tracking

When someone subscribes or unsubscribes from messages, OneSignal automatically detects this and updates the status. The OneSignal SDK provides <a href="https://documentation.onesignal.com/docs/sdk-reference#addsubscriptionobserver-method" target="_blank">Subscription Observer methods</a> to help you detect these events and send it to your database or analytics platform.

Using the OneSignal dashboard or API, you can <a href="doc:exporting-data" target="_blank">export your user data</a> for in-depth analytics tracking.

#####Track Subscription Status in a Given Period

[Segments](doc:segmentation) can be created with "First Session" filter for all devices that first subscribed within x amount of time. For example, setting "First Session less than 24 hours" will give you all devices that subscribed in the past 24 hours.

Exporting user data will contain the subscription status and `created_at` or `first_session` parameter indicating the first time the device was created in our system. This is the "subscription date" for Web and Android App device records because Web device records are only created when the user subscribes and Android App devices are created and subscribed upon opening the app. iOS devices generally need to opt-in to subscribe unless you enable <a href="https://documentation.onesignal.com/docs/ios-customizations" target="_blank">Provisional Push Notifications</a> in which case they are subscribed immediately like android users. 

Tracking the "unsubscribe date" or iOS subscription date can be done with the Subscription Observer methods and <a href="doc:time-operators" target="_blank">Time Operators</a>.

#####Track current total subscriber count

Export all the user data and sort by `subscribed = Yes` or `invalid_identifier = f` to see how many records are currently subscribed at the time of exporting the file. 

-----

#Notification Tracking

OneSignal provides notification analytics like clicked, received, sent on a per notification basis.

For tracking notification data on individual users, it is recommended to use a 3rd Party Analytics tool or the OneSignal SDK options listed below.
[block:callout]
{
  "type": "warning",
  "title": "Notification Data Limitations",
  "body": "Notifications sent from the API or automated messages are only kept for **30 days**. You will need to export notification data every 30 days if you plan to keep this data. See [Exporting Data](doc:exporting-data) or read below for more details on saving this data."
}
[/block]
##### 3rd Party Analytics Integrations and OneSignal SDK

Using 3rd Party <a href="doc:integrations" target="_blank">Analytics Integrations</a>, you can setup <a href="doc:links#utm-parameters" target="_blank">UTM parameters</a> and/or our SDK click/received notification event methods to capture the notification events. Common setups:
[block:parameters]
{
  "data": {
    "h-0": "Mobile Push",
    "h-1": "Web Push",
    "1-0": "<a href=\"doc:sdk-notification-event-handlers\" target=\"_blank\">SDK Notification Event Handlers</a>",
    "1-1": "<a href=\"doc:web-push-sdk#receiving-notifications\" target=\"_blank\">Web SDK Notification Events</a>\n\n<a href=\"doc:webhooks\" target=\"_blank\">Web Push Web Hooks</a>",
    "0-0": "<a href=\"doc:google-analytics-for-firebase\" target=\"_blank\">Google Analytics for Firebase</a>",
    "0-1": "<a href=\"doc:google-analytics\" target=\"_blank\">Google Analytics</a>"
  },
  "cols": 2,
  "rows": 2
}
[/block]

##### Dashboard Notification Tracking

In OneSignal's [Delivery Page](doc:notification-delivery) you can view notifications sent and click for individual notification details. You can also [export notification data](doc:exporting-data) directly from this page. For instance, the dashboard "Delivered" is how many notifications were successfully sent to the FCM/APNS/HMS/etc servers, while [Confirmed](doc:confirmed-deliveries) shows how many were delivered to individual devices.

[Outcomes](doc:outcomes) allow you to track any events or behavior you can think of like purchases, specific app functionality and even clicks by language that occur based on direct notification clicks or influenced notification sends. You can view this data in the dashboard or use the [View Outcomes API](ref:view-outcomes).

Another option is to [Add Data Tags](doc:add-user-data-tags) to users that click the notification. For more details on how to set this up, see [Auto-Segment By Notification Topic](doc:segment-based-on-notification-clicks).

##### API Notification Tracking

Using the API, the [View Notification](ref:view-notification) and [View Notifications](ref:view-notifications) endpoints will return all notification-level data like `"converted"`  (clicked), `"successful"` (how many delivered to FCM/APNS/HMS/etc), and `"received"` (received/[Confirmed Deliveries](doc:confirmed-deliveries)). This will also show the targeting parameters used like segments, filters or if you sent to specific devices. 

The [Notification History API](ref:notification-history) allows viewing the specific Player IDs that `"clicked"` and were `"sent"` the notification.


----

#Device Tracking

OneSignal provides device level tracking based on the following data:
[block:parameters]
{
  "data": {
    "h-0": "Device Data",
    "1-0": "Operating System Version",
    "2-0": "Operating System Type",
    "3-0": "Device Model",
    "h-1": "OneSignal Values",
    "1-1": "`device_os`",
    "2-1": "`device_type`",
    "0-0": "App Version",
    "0-1": "`game_version`",
    "h-2": "Details",
    "0-2": "Your app version from Android Studio `versionCode` in your App `build.gradle` and iOS uses `CFBundleShortVersionString` in Xcode.",
    "1-2": "Each device's Operating System Version. Example:\n80 = Chrome 80\n9 = Android 9",
    "2-2": "Device Operating System Type. See [API `device_type` Integer Value codes](https://documentation.onesignal.com/reference#add-a-device). \nExample:\n0 = iOS mobile app\n1 = Android mobile app\n5 = Chrome Web Push",
    "3-1": "`device_model`",
    "3-2": "Device Hardware String Code.\nExamples:\n- Mobile Web Subscribers will have `Linux armv`\n- iOS Device [Hardware String Values](https://iosref.com/hardware-strings/)"
  },
  "cols": 3,
  "rows": 4
}
[/block]
If you would like to [Segment](doc:segmentation) by this data, you can use our pre-set App Version and Device Type [data filters](doc:segmentation#filter-types).

For Operating System Version and Device Model would need to [Add Data Tags](doc:add-user-data-tags). For tracking Web Subscribers on Mobile Devices, this would require tags. See our [guide to detect and tag Web Subscribers by device](https://documentation.onesignal.com/docs/add-user-data-tags#tag-based-on-browser-and-operating-system).

----


## Prompt Impression Tracking

Prompting users to subscribe to push is required on Websites and recommended on iOS mobile apps. Android mobile apps automatically subscribe users when they download and open the app.

##### Web Prompt Tracking Methods

To track the [Slide Prompt](doc:slide-prompt) you can use [these SDK event methods](https://documentation.onesignal.com/docs/web-push-sdk#slide-prompt-events):
- `popoverShown` - Slide Prompt has just animated into view and is being shown to the user.
- `popoverAllowClick` - The "Continue" button on the Slide Prompt was clicked.
- `popoverCancelClick` - The "No Thanks" button on the Slide Prompt was clicked.
- `popoverClosed` - The Slide Prompt was just closed.

For the [Native Browser Prompt](doc:native-browser-prompt)  we have the [Notification Permission Change Event](https://documentation.onesignal.com/docs/web-push-sdk#notificationpermissionchange) which tells you what action the user took on the native prompt (clicked "Allow", "Deny" or "X") and the [`permissionPromptDisplay` event](https://documentation.onesignal.com/docs/web-push-sdk#permissionpromptdisplay) which fires whenever the native prompt is shown.

Example code for implementing these events in our [Google Analytics Guide](doc:google-analytics#tracking-impressions-of-the-opt-in-request-pop-up).

##### iOS Prompt Tracking Options

Using [In-App Messaging](doc:in-app-quickstart) you can setup your iOS app to trigger the iOS Subscription Prompt using our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) guide and the [In-App Message Click Handler Method](https://documentation.onesignal.com/docs/sdk-reference#setinappmessageclickhandler-method) to detect the option selected.

----
##FAQ
#### How to get per-user or per-segment notification stats?

If you are looking to save per-segment or per-user data for analytics purposes, the best option is to use the [Create notification REST API](ref:create-notification) and additionally save a copy of the notification id and targeting parameters on your server. Once the data is stored by your app or on your server, you can display it to the user when you choose.

If you are looking to save this data to create an "inbox" or "activity feed" for your site/app, see our [Create an Activity Feed guide](doc:create-an-activity-feed).

#### How to track clicks by language and localization?

Using [Outcomes](doc:outcomes) you can setup your app/site to send OneSignal any data detected about the user. See [Outcomes > Pushes Clicked By Language Example](doc:outcomes#pushes-clicked-by-language) for more details.

Another option is to use the [Notification History](ref:notification-history) API to get a list of all Player IDs that clicked the push, then use [View device](ref:view-device) or [CSV export](ref:csv-export) to see the data on each user like `language` and `country`.


#### How to get cumulative notification stats?

One option is to use [Templates](doc:templates). This will allow you to view clicked/opened and sent stats based on the template used.

Another option is to [Export Notification Data](doc:exporting-data) with the API or Dashboard and track the `"converted"` counts for clicks and `"successful"` counts for sends.

More details below in [How can I track campaigns or different notification types](#section-how-can-i-track-campaigns-or-different-notification-types-).

#### How can I track campaigns or different notification types?
There are a couple ways to achieve this:
1 - Using `utm_parameters` with an [Analytics Integration](doc:integrations) like [Google Analytics](doc:google-analytics) 
2 - Use OneSignal [Templates](doc:templates). Each time a template is sent from the dashboard or `"template_id"` specified in our API it will aggregate the data in our Templates section of the dashboard. You can also access the `"template_id"` parameter in the [View notifications](ref:view-notifications) API calls or [Notification Export](doc:exporting-data).
3 - Similar to using Templates above, you can specify a "campaign_id" for example using the "additional data" fields of the notification and access this data in the notification exports to gain aggregated data.