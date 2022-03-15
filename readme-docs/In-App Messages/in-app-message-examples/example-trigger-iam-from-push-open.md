---
title: "Example: Trigger IAM from Push Open"
slug: "example-trigger-iam-from-push-open"
hidden: false
createdAt: "2021-12-23T19:11:03.013Z"
updatedAt: "2021-12-23T19:11:47.487Z"
---
Sometimes you may want to trigger a specific IAM upon opening the app based on if a user clicked a related push.

Each push can be sent with [additional data](doc:sending-notifications#advanced-settings) which can be detected within the [notification opened event](https://documentation.onesignal.com/docs/sdk-notification-event-handlers). Once the push is clicked and the data is parsed out of the notification, it can be inserted into the `addTrigger` method to show the IAM.

For instance, if you send the push with additional data: {"iam": "congrats"} and set the In-App Message Trigger to be "iam is congrats". Then your App's Notification Opened Hander can detect the data and pass it into the `addTrigger` method to display the message.