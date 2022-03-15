---
title: "User-User Messages"
slug: "user-user-messages"
excerpt: "How to use OneSignal for user-to-user messages."
hidden: false
createdAt: "2016-09-02T01:59:28.237Z"
updatedAt: "2020-09-18T16:57:00.370Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Push Notifications are Not designed for live chat.",
  "body": "Push Notifications are best used as a fallback when both users are not active on your app.\n\nTools dedicated to Live Chat functionality include:\n- [XMPP](https://xmpp.org/)\n- [Stream](https://getstream.io/chat/)"
}
[/block]
Push Notifications are not designed for sending live messages back and forth between users. They are designed to engage the user when they are outside of the app to let them know "You got a new message".

While you can add the chat message and image to the push, you should not rely on that data to be the only way for your app to send and process that data. There are many tools dedicated to handling live chat message data.

Instead, you should use push to alert the user that a new message is available after the message data has been sent to the device.

## Recommended Setup:

### 1. Set the User ID

When OneSignal is initialized in your application, we provide [User Status methods](doc:sdk-reference#user-status) to retrieve the user's OneSignal Player ID. Use these to save the users' OneSignal Player ID to your server. 

Another option is to send OneSignal your database User ID, we call this the External User ID and can be set with our [`setExternalUserId` method](doc:sdk-reference#external-user-ids).

Both options can be used target devices individually with push notifications.

### 2. Send the Message

To send a message to a user, call our API method [Create notification](ref:create-notification). Alternatively, your server can send the target users' OneSignal Player IDs to your app, which can then use our Client SDK to send the notification. 

Each of our mobile SDKs has a [`postNotification` method](doc:sdk-reference#sending-notifications) that can target users with the `include_player_ids` parameter only. If you set the External User ID, you should trigger requests from your server.