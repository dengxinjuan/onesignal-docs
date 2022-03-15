---
title: "Transactional Messages"
slug: "transactional-messages"
excerpt: "Sending transactional push notifications through OneSignal"
hidden: false
createdAt: "2018-11-30T18:45:32.090Z"
updatedAt: "2020-05-05T20:59:05.251Z"
---
Sending push notifications to individual or small groups of User IDs is a user-friendly and helpful way to keep lines of communication opened with your clients.

Transactional push notifications are great for letting users know that their action is completed, whether that is billing related or simply saying "Thanks for performing this action!" (whatever that action may be).

###Setup

The best practice for this use case is to set and target the device by the User ID. This can be done by sending OneSignal your Users IDs (`external_user_id`) or saving the OneSignal User ID ([Player ID](doc:player-id)) to your database.

Please see our [Internal Database & CRM integration guide](doc:internal-database-crm) for more details.

###Using External User ID

If you fetch your database User ID and set it to OneSignal with the `setExternalUserId` [method](https://documentation.onesignal.com/docs/sdk-reference#setexternaluserid-method) or add it via our [API Edit device](ref:edit-device), you can then use `include_external_user_ids` on our [Create notification REST API POST call](https://documentation.onesignal.com/reference#send-to-specific-devices) to send notifications to specific users.

Example:
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"include_external_user_ids\\\": [\\\"YOUR_USER_ID\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_external_user_ids\": [\"YOUR_USER_ID\"],\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}",
      "language": "json"
    }
  ]
}
[/block]
If the user is unsubscribed, our API returns all the External User IDs of devices that are not subscribed anymore that looks like this:

```
{
  "errors": {
    "invalid_external_user_ids" : ["YOUR_USER_ID"]
  }
}
```

If multiple devices have the same External User ID, it will count them multiple times in the callback but any devices still subscribed will not be counted.

For example, if you have 3 devices with External User ID "37" and 2 of those 3 unsubscribe, then the callback will show `"invalid_external_user_ids" : ["37", "37"]` but the 3rd External User ID will still be subscribed.



###Using OneSignal Player ID

To target the [OneSignal Player ID](doc:player-id), you can then use `include_player_ids` on our [Create notification REST API POST call](https://documentation.onesignal.com/reference#send-to-specific-devices) to send notifications to specific users. 

Example:
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"include_player_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}",
      "language": "json"
    }
  ]
}
[/block]



If the user is unsubscribed, our API returns all the Player IDs of devices that are not subscribed anymore that looks like this:
```
{
  "errors": {
    "invalid_player_ids" : ["6392d91a-b206-4b7b-a620-cd68e32c3a76"]
  }
}
```

You can then process these Player IDs on your server to remove them from your database.