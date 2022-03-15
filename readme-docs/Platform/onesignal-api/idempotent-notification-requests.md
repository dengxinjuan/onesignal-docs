---
title: "Idempotent Notification Requests"
slug: "idempotent-notification-requests"
hidden: false
createdAt: "2018-09-14T19:54:09.165Z"
updatedAt: "2018-09-14T20:48:16.705Z"
---
The notifications create api supports idempotent operations to avoid sending the same notification twice. This can be useful when a request is interrupted mid request, or there is an error processing the response. 

For example consider the case of:
1. A `notifications#create` call is made
2. OneSignal processes the request and begins sending the notification
3. A network error occurs and no response is ever received by your client. 

Without some kind of correlation key, there is no way to verify the last notification did indeed send. If the notification did send and the request is sent again, your users will see duplicate notifications. If it did not send and the request is not retried, your users might miss important notifications. Fortunately, the `external_id` field exists on notifications for precisely this reason.

`external_id` is simply an optional parameter to the `notifications#create` request that can be used to correlate the notification to your system, and more importantly, ensure that duplicate notifications are not sent. 

In the example case above, the flow might look something like this:
1. A `notifications#create` call is made with `external_id`
2. OneSignal processes the request and begins sending the notification
3. A network error occurs and no response is ever received by your client. 
4. A `notifications#create` call is made again with the same `external_id` as the previous one.
5. OneSignal recognizes the notification has already begun sending, and returns the result of the previous operation.

The above can happen any number of times. As long as the `external_id` is the same in each request, only 1 notification will be delivered to your users regardless of the number of times the request is sent to our api.

Because the api will not send a notification if the `external_id` already exists in our database, it's important to use a good source of randomness when generating the uuid passed.

It's important to note this key is only idempotent for 30 days. After 30 days, the notification could be removed from our system and a notification with the same `external_id` will be sent again.