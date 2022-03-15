---
title: "Auto-Segment By Notification Data"
slug: "segment-based-on-notification-clicks"
excerpt: "How to track and segment Mobile and Web Push users by clicked notification data"
hidden: false
createdAt: "2019-04-02T02:29:25.845Z"
updatedAt: "2021-03-25T02:25:01.796Z"
---
If you're a publisher that provides articles on different topics or an ecommerce site tracking product interest, there are 3 common things you will want to know about your notifications:

1. The last time they clicked a notification (steps 1 & 3)
2. What notification topics users click (steps 1, 2, & 3)
3. How many times they are clicking that topic (steps 1, 2, & 3)

With OneSignal, you can track this behavior using [Data Tags](doc:add-user-data-tags), adding some code to your site or app (provided below) and sending notifications with a topic.

Doing so, you can segment and reengage your users with content you already know they want.

Here's how it works:

### Step 1 Add the Code

Leverage the OneSignal SDKs [Notification Event Handlers](https://documentation.onesignal.com/docs/sdk-reference#onesignal-notification-events) to track when each device opened or received a notification.

Within these events, you will use the `sendTag` and `getTags` [SDK methods](doc:data-tag-implementation#sdk-tagging-methods) to add the received notification details to your user records.

In these examples, we will tag the user with 2 things:
1. A unix timestamp of the "last_notification_click" 
2. The "notification_topic" of the notification sent within the custom data of the push

Here is some easy example code to get you started:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push([\"addListenerForNotificationOpened\", function(payload) {\n  // Track last notification click time (paid feature only)\n  let timestamp = Math.floor(Date.now() / 1000);\n  OneSignal.sendTag(\"last_notification_click\", timestamp);\n\n  console.log(\"Received Payload Data: \", payload.data);\n  let notification_topic = payload.data.notification_topic; // set topic in notification\n  if (notification_topic) {\n    OneSignal.getTags().then(function(tags) {\n      var topicCount = parseInt(tags[topic], 10);\n      console.log(\"topicCount: \", topicCount);\n      if (!isNaN(topicCount)) {\n        topicCount += 1;\n      } else {\n        topicCount = 1;\n      }\n      OneSignal.sendTag(notification_topic, topicCount).then(function(tagsSent) {\n        console.log(\"tagsSent: \", JSON.stringify(tagsSent));\n      });\n    });\n  }\n}]);",
      "language": "javascript"
    },
    {
      "code": "class ExampleNotificationOpenedHandler implements OneSignal.NotificationOpenedHandler {\n  // This fires when a notification is opened by tapping on it.\n  @Override\n  public void notificationOpened(OSNotificationOpenResult result) {\n    JSONObject data = result.notification.payload.additionalData;\n    String topic;\n    long timestamp = System.currentTimeMillis() / 1000L;\n    OneSignal.sendTag(\"last_notification_click\", timestamp);\n\n    if (data != null) {\n      notification_topic = data.optString(\"notification_topic\", null);\n      if (notification_topic != null)\n        OneSignal.sendTag(\"notification_topic\", notification_topic);\n    }\n  }\n}",
      "language": "java"
    },
    {
      "code": "let notificationOpenedBlock: OSHandleNotificationActionBlock = { result in\n  let payload: OSNotificationPayload? = result?.notification.payload\n  let timestamp = Int(NSDate().timeIntervalSince1970)\n  OneSignal.sendTags([\"last_notification_click\": timestamp])\n  \n\tif let notification_topic = payload.additionalData?[\"notification_topic\"] {\n\t\tOneSignal.sendTag(\"notification_topic\", value: notification_topic)\n\t}\n}",
      "language": "swift"
    }
  ]
}
[/block]

### Step 2 Send The Notifications With Data

**Optional step if tracking notification topics**

When creating a notification you simply add some [Additional Data](doc:sending-notifications#advanced-settings) to the notification using our Dashboard or [API `data` parameter](https://documentation.onesignal.com/reference/create-notification#attachments).

This will be the topic of the notification and what you use to segment users. Common topics would be "news", "entertainment", "politics", "finance", "tech", etc.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46305ec-Screen_Shot_2020-10-28_at_2.46.34_PM.png",
        "Screen Shot 2020-10-28 at 2.46.34 PM.png",
        623,
        209,
        "#f7f8f9"
      ]
    }
  ]
}
[/block]
### Step 3 Segment

Now, whenever users click the notification, they will get automatically tagged with:
1. the date (unix timestamp) they clicked the notification 
2. the notification's topic and how many total times that topic has been clicked 

You can now [segment subscribers](doc:segmentation) based on this data.

**Example segment users that did not click a push in over 1 week:**

Set the **User Tag** data filter with key: `last_notification_click` **time elapsed greater than** `604800` seconds.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/564a5ed-Screen_Shot_2020-10-28_at_2.58.15_PM.png",
        "Screen Shot 2020-10-28 at 2.58.15 PM.png",
        804,
        466,
        "#eeeff1"
      ]
    }
  ]
}
[/block]
**Example segment users that did click a push within 1 day:**

Set the **User Tag** data filter with key: `last_notification_click` **time elapsed less than** `86400` seconds.

Simply switch to **time elapsed greater than** to target users that have not clicked a push in over x amount of time like `1209600` seconds (2 weeks = 60 seconds/min * 60 minutes/hour * 24 hours/day * 14 days).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec8cac0-Screen_Shot_2020-10-28_at_3.00.11_PM.png",
        "Screen Shot 2020-10-28 at 3.00.11 PM.png",
        804,
        466,
        "#eeeff1"
      ]
    }
  ]
}
[/block]
**Example segment users that clicked a push about politics 3 times or more**

Set the **User Tag** data filter with key: `politics` **greater than* `2`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7197341-Screen_Shot_2020-10-28_at_3.02.23_PM.png",
        "Screen Shot 2020-10-28 at 3.02.23 PM.png",
        804,
        466,
        "#eef0f2"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "Finish setting up any more segments you need and continue [Sending Push Messages](doc:sending-notifications) with the `notification_topic` data."
}
[/block]