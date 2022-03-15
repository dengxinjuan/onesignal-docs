---
title: "Rate Limits & Disabled Apps"
slug: "rate-limits"
excerpt: "Safety measures for end users"
hidden: false
createdAt: "2017-10-12T18:59:24.865Z"
updatedAt: "2021-10-08T02:56:34.528Z"
---
Our rate limits are extremely high and designed to trigger as a safety measure when using the OneSignal API to prevent the delivery of excessive messages. They should not affect the normal use of the OneSignal platform.

# What are the Rate Limits?

When sending push through our API, it is always recommended to include as many devices as possible within each request.

If you are using the `include_player_ids` or `include_external_user_ids` you can make these requests to individual users at rates of 50 requests per second.

If you use segments or filters, we recommend no more than 20 requests per second.

Feel free to reach out to support@onesignal.com with details and/or example code about how you plan to send messages, we would be happy to assist with best practices.
[block:parameters]
{
  "data": {
    "h-0": "Endpoint",
    "h-1": "Details",
    "0-0": "[Create notification](ref:create-notification)\n\n**Requests Per Second**",
    "1-0": "[Create notification](ref:create-notification)\n\n**Targeting Subscribed Users**",
    "0-1": "6,000 requests/second for all paid plans.\n150 requests/second for free plans.",
    "1-1": "In 15 minutes you may not send more messages than 10x your total subscribed user count.\n\nThis is an extremely high limit meant to protect customers from accidentally messaging all of their users in a loop, and should not affect the normal usage of OneSignal.",
    "2-0": "Updating Tags/Devices\n- [Edit device](ref:edit-device) \n- [Edit tags with external user id](ref:edit-tags-with-external-user-id)",
    "2-1": "No more than 1000 requests per second and 100 tags per request.",
    "4-0": "[Notification History](ref:notification-history)",
    "4-1": "Please keep number of parallel requests under 100 GB/file.",
    "3-0": "[View notifications](ref:view-notifications)",
    "3-1": "1 request per second with a 10/second burst.\n\n`RateLimit*` headers will indicate how much quota is left at the time of the request. For example:\n\n`ratelimit-limit: 10`\n`ratelimit-remaining: 9`\n`ratelimit-reset: 1633654403`"
  },
  "cols": 2,
  "rows": 5
}
[/block]
If you need help re-enabling your app, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com for assistance.

# How do I know if I reached a limit?

If you hit the **Requests Per Second** limit, our API will return an `HTTP 429` response. After about a minute, you will not get blocked on new API calls.

If you hit the **Targeting Subscribed Users** limit, we will inform you in 3 ways. In extremely rare cases, OneSignal may automatically disable an app due to a rate limit. 

- An email will be sent to all App Administrators associated with the app.
- An error will be shown in the API response:
[block:code]
{
  "codes": [
    {
      "code": "{\n  errors: ['API rate limit exceeded. See the RateLimit response headers for more details.']\n}",
      "language": "json"
    }
  ]
}
[/block]
- An alert banner will appear above the interface anywhere in the app's OneSignal dashboard, which also includes a button to re-enable the app.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49ad867-b8049fd-settings-reenable.jpg",
        "b8049fd-settings-reenable.jpg",
        2226,
        101,
        "#c13537"
      ]
    }
  ]
}
[/block]
If you need help re-enabling your app, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com for assistance.


## Scenarios where the Targeting Subscribed Users Limit Triggers

The following are scenarios where rate limiting may or may not be triggered, based on an app with exactly 1000 subscribed users:
[block:parameters]
{
  "data": {
    "h-0": "Scenario",
    "h-1": "Rate limit reached?",
    "0-0": "Sending 1 notification to 1,000 recipients?",
    "0-1": "No, rate limit not reached.\n\nIf your app has 1000 messageable users, you can send up to 9,999 notifications within a 15 minute period. However, sending to one more recipient would trigger the rate limit.",
    "3-0": "Sending 9 notifications to 1,000 recipients each in a 14-minute period, and then sending 1 notification to 1,000 recipients after 1 minute?",
    "1-0": "Sending 10 notifications to 1,000 recipient each ?",
    "1-1": "Yes, rate limit is reached.\n\nThe rate limit is 10 x messageable users within 15 minutes.\n\n10 x 1,000 = 10,000 you should not be sending 10 notifications per user within 15 minute periods.",
    "3-1": "No.\n\nThe last notification is counted using a new 15-minute window.",
    "2-0": "Sending 10,000 notifications to 1 recipient each in a 15-minute period?",
    "2-1": "Yes, rate limit is reached.\n\nTen times the number of messageable recipients have been delivered to.",
    "4-0": "Sending 9 notifications to 1,000 recipients each in a 14-minute period, and then sending another 9 notification to 1,000 recipients after 1 minute?",
    "4-1": "No.\n\nThe 15-minute window is static and does not roll over from minute to minute."
  },
  "cols": 2,
  "rows": 5
}
[/block]
# FAQ

## Do apps get disabled if the Requests Per Second limit is reached?

No, they will be allowed to send again after some time passes.

## Will I be notified when my app is disabled?

Yes, an email is sent to all app administrators any time an app is disabled or re-enabled with the date and time each event occurred. If you need help re-enabling your app, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com for assistance.

## When will my app be automatically re-enabled?

Apps are not automatically re-enabled. 

Instead, you can manually re-enable them from our dashboard. Be sure to check your app for any errors that caused it to exceed our rate limit.

If you need help re-enabling your app, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com for assistance.

## How can I manually re-enable my app?

First, please check your code to make sure there aren't any bugs that would cause a large increase in the number of sent notifications. 

When you've finished reviewing your code for bugs, re-enable the app by logging into our dashboard, visiting any page inside the app, and click the link on the top red notice.

If you need help re-enabling your app, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com for assistance.