---
title: "Analytics Integrations"
slug: "analytics-integrations"
excerpt: "Integrating OneSignal with any Analytics vendor"
hidden: false
createdAt: "2016-12-30T16:38:25.976Z"
updatedAt: "2021-03-12T00:04:43.977Z"
---
Each OneSignal SDK provides methods for tracking [notifications](#notification-events), [subscriptions & permissions](#subscription--permission-events), and [prompting](#prompt-impressions) events. Data from these methods can be sent to your analytics tool.

OneSignal also provide [Default UTM Parameters](doc:links#utm-parameters) which can be appended to your Launch URLs automatically when sending push from the OneSignal Dashboard.

Also, see our [Analytics Overview](doc:analytics-overview) for more details on pulling analytics.
[block:callout]
{
  "type": "info",
  "title": "See these events in action!",
  "body": "See the recorded webinar going over [Google Analytics Setup](https://youtu.be/FtpKeIGY4dM)."
}
[/block]
## Notification Events

**Received:** Send an event to your analytics system from the SDKs Notification Received event handler when a notification is received.

**Clicked:** Send another event to your analytics system from the `NotificationOpened or Action` event handler when a notification is clicked.
[block:parameters]
{
  "data": {
    "0-0": "Track Notification Received",
    "0-1": "[Handle Notification Received Method](doc:sdk-reference#notification-received-handler)",
    "0-2": "**Android** - Method fired when the notifications is received. Doesn't work if App is Force Quit.\n\n**iOS** - Method fired when notification is received while app is in-focus.\n\n**Web** - Method fired when notification is received while site is in focus.",
    "1-0": "Track Notification Clicked",
    "1-1": "[Handle Notification Click/Opened Method](doc:sdk-reference#notification-opened-handler)",
    "1-2": "Method fired when the notification is clicked and opens the app or website.\n\nYou can [automatically add UTM parameters to push notification URLs](doc:links#utm-parameters) through the OneSignal Dashboard.",
    "h-1": "SDK Method",
    "h-2": "Details",
    "h-0": "Event"
  },
  "cols": 3,
  "rows": 2
}
[/block]
* OneSignal also provides [Webhook support](doc:webhooks) for websites only.

----

## Subscription & Permission Events

Send a subscription event to your analytics system from the SDKs `PermissionObserver` event handler when a user subscribes.
[block:parameters]
{
  "data": {
    "0-0": "Track Subscription Event",
    "0-1": "[Subscription Change Observer Event](doc:sdk-reference#subscription-observer-method)",
    "0-2": "Method fired when user changes subscription status.",
    "h-0": "Event",
    "h-1": "SDK Method",
    "h-2": "Details",
    "1-2": "Method fired when user changes permission status. Use to track:\n\n- Notification permission prompt shown (iOS)\n- The user accepting or declining the permission prompt \n- Enabling/disabling notifications for your app in the App Settings and after returning to your app.\n- Using `setSubscription` method to manually turn off push.",
    "1-0": "Track Permission Event",
    "1-1": "[Permission Change Observer Event](doc:sdk-reference#addpermissionobserver-method)"
  },
  "cols": 3,
  "rows": 2
}
[/block]
----

## Prompt Impressions

You can use the [permissionPromptDisplay](doc:web-push-sdk#section-registering-push) method to send an event to your analytics tool from your page's code, like so: 
[block:parameters]
{
  "data": {
    "h-0": "Event",
    "h-1": "SDK Method",
    "h-2": "Details",
    "0-0": "Track Native Prompt",
    "0-1": "**Web:** [Notification Permission Change](doc:web-push-sdk#notificationpermissionchange) & [Notification Permission Display](doc:web-push-sdk#permissionpromptdisplay)\n\n**iOS:** [Permission Change Observer](doc:sdk-reference#addpermissionobserver-method)",
    "0-2": "Methods fired when the required prompt by the Browser or Operating System shows to the user and the choice the user made.",
    "1-0": "Track OneSignal Slide Prompt",
    "1-1": "[Slide Prompt Events](doc:web-push-sdk#slide-prompt-events)",
    "1-2": "Multiple methods for tracking events triggered on the [Slide Prompt](doc:slide-prompt) including the Slide `shown`, `allowed`, `canceled`, and `closed`."
  },
  "cols": 3,
  "rows": 2
}
[/block]
This will create an event in your analytics tool that you can track and filter by day, week, month, landing pages and browsers.