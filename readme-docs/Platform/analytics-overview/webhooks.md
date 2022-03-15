---
title: "Web Push Webhooks"
slug: "webhooks"
excerpt: "Use web hooks to get notified when a notification is displayed or clicked."
hidden: false
createdAt: "2016-09-22T03:09:29.669Z"
updatedAt: "2020-12-11T02:40:56.786Z"
---
## Introduction

Webhooks are HTTP `POST` calls to a URL you choose when a certain event occurs. You provide the base URL which will be POSTed to, and we will POST the notification data (title, message, icon, url, etc...) along with all custom data you sent with the notification.

----
## Browser Support

Webhooks are available on Chrome and Firefox for macOS, Windows, and Android.

Webhooks are not available on Safari at this time.

----
## Which events can I listen to?

- `notification.displayed`
  This event occurs after a notification is displayed.

- `notification.clicked`
  This event occurs after a notification is clicked.

- `notification.dismissed`
  This event occurs after a notification is intentionally dismissed by the user (clicking the notification body or one of the notification action buttons *does not trigger* the dismissed webhook), after a group of notifications are all dismissed (with this notification as part of that group), or after a notification expires on its own time and disappears. This event is supported on Chrome only.

----
## How do I enable webhooks?

In your `OneSignal.init()` method, add the following parameter:
[block:code]
{
  "codes": [
    {
      "code": "// Do NOT call init twice, use existing init\nOneSignal.push([\"init\", {\n  // Your other settings\n  webhooks: {\n    cors: false, // Defaults to false if omitted\n    'notification.displayed': 'YOUR_WEBHOOK_URL', // e.g. https://site.com/hook\n    'notification.clicked': 'YOUR_WEBHOOK_URL',\n    // ... follow the same format for any event in the list above\n  }\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
`cors`: Defaults to `false`. Enable this setting only if your server has CORS enabled and supports non-simple CORS requests. If this setting is disabled, your webhook will not need CORS to receive data, but it will not receive the custom headers. See below. The simplest option is to leave it disabled.
[block:callout]
{
  "type": "info",
  "title": "What is CORS?",
  "body": "​Cross-origin resource sharing (CORS) is a standard for accessing web resources on different domains. CORS allows web scripts to interact more openly with content outside of the original domain, leading to better integration between web services."
}
[/block]
----
## How many webhooks can I set per event?
At the current time, you may only set one webhook URL per event.

----
## Do my webhook URLs have to be HTTPS?
Yes, your webhook URLs must be HTTPS. Chrome blocks insecure requests from inside our service worker, and so HTTP webhook URLs will not be called.

----
## What requests do my webhooks receive?
Regardless of which event your webhook subscribes to, each request is formatted identically. The request your webhook receives depends on whether you enabled `cors`.

----
### Request with CORS Disabled

If `cors` is set to `false`, your server *will not receive any custom headers*, and **will not receive** the header `Content-Type: application/json`. Your server will only receive our request payload, which is similar to the following:

**Example Request Payload:**
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"event\": \"notification.clicked\",\n  \"id\": \"ed46884e-0e3f-4373-9e11-e28f27746d3d\",\n  \"userId\": \"8086231d-97fc-4065-999e-1c7ea5e540b9\",\n  \"heading\": \"Notification title\",\n  \"content\": \"Notification message\",\n  \"url\": \"https://site.com/notification_url_to_launch\",\n  \"icon\": \"https://onesignal.com/images/notification_logo.png\",\n  \"data\": {\n    \"key1\": \"value1\",\n    \"key2\": \"value2\"\n  },\n  \"action\": \"\"\n}",
      "language": "json"
    }
  ]
}
[/block]
If, when initially sending the notification, a certain field is not provided (e.g. you don't include an icon, or you don't send specific data, or you don't specify a launch URL), then the corresponding field will not be included in the request payload.

`event`: The string event type you subscribed to.
`id`: The OneSignal notification ID of the notification.
`userId`: The OneSignal user ID the notification was sent to.
`url`: The URL to launch when the notification is clicked.
`data`: Custom data you included when you sent the notification. In the REST API, this is the `data` field when creating the notification. On the online dashboard, this is also the `data` field under Options.
`action`: This field is only included for the notification clicked webhook. An empty string indicates that the notification body was clicked. Any other string with a value corresponds to the ID of the action button that was clicked. The ID is a string you define (e.g. 'top-button', 'like-button') either using our dashboard or API when sending.

----
### Request with CORS Enabled

If `cors` is set to `true`, your server will receive the following custom headers in addition to those set by the browser:

**Request Headers**:
[block:code]
{
  "codes": [
    {
      "code": "Content-Type: application/json\nX-OneSignal-Event: EVENT_NAME",
      "language": "http"
    }
  ]
}
[/block]
**Example Request Payload:**
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"event\": \"notification.clicked\",\n  \"id\": \"ed46884e-0e3f-4373-9e11-e28f27746d3d\",\n  \"userId\": \"8086231d-97fc-4065-999e-1c7ea5e540b9\",\n  \"heading\": \"Notification title\",\n  \"content\": \"Notification message\",\n  \"url\": \"https://site.com/notification_url_to_launch\",\n  \"icon\": \"https://onesignal.com/images/notification_logo.png\",\n  \"data\": {\n    \"key1\": \"value1\",\n    \"key2\": \"value2\"\n  },\n  \"action\": \"\"\n}",
      "language": "json"
    }
  ]
}
[/block]
If, when initially sending the notification, a certain field is not provided (e.g. you don't include an icon, or you don't send specific data, or you don't specify a launch URL), then the corresponding field will not be included in the request payload.

`event`: The string event type you subscribed to.
`id`: The OneSignal notification ID of the notification.
`userId`: The OneSignal user ID the notification was sent to.
`url`: The URL to launch when the notification is clicked.
`data`: Custom data you included when you sent the notification. In the REST API, this is the `data` field when creating the notification. On the online dashboard, this is also the `data` field under Options.
`action`: This field is only included for the notification clicked webhook. An empty string indicates that the notification body was clicked. Any other string with a value corresponds to the ID of the action button that was clicked. The ID is a string you define (e.g. 'top-button', 'like-button') either using our dashboard or API when sending.

----
## Do I receive different payloads with CORS disabled?
No -- your server will receive the same payload whether the `cors` flag is enabled or disabled. The only additional benefit enabling `cors` gives you is two extra HTTP headers that tell you the correct content type (the payload you receive should be JSON or text/plain) and the webhook event type without having to parse the body.

----
## Why are my webhooks data different from the dashboard data?

Webhooks require the user to visit a page of the site with the webhook active to get updated. If the webhook code was added later or not on all pages with the OneSignal init code, this data will not be tracked for that user.