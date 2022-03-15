---
title: "Auto-Segment By Subscription Page"
slug: "auto-segment-users-by-subscription-page"
excerpt: "How to target Web Push users based on where they subscribed from"
hidden: false
createdAt: "2019-04-02T02:15:59.687Z"
updatedAt: "2021-03-25T02:24:01.706Z"
---
In this guide, we'll demonstrate how to use the the OneSignal [Subscription Change Event](doc:web-push-sdk#subscription-change) and [Send Tags](doc:data-tag-implementation#sdk-tagging-methods) methods to tag and segment Web Push users based on the page they subscribed from on your website.

### Tag Users with Subscription Change Event & Custom Tags

Once a user has subscribed to notifications, OneSignal data tags can help track the page topic they subscribed under. You can expand this tagging to include other metadata that are present on the page that you want to track for this user.

OneSignal's tagging functionality has many applications, and you can learn more in our [Adding Data Tags](doc:add-user-data-tags) guide.

In the following example code snippet, when the `subscriptionChange` event shows `isSubscribed === true`, that means the user subscribed on the current page, after which you can then tag them with the `sendTags` method.
[block:code]
{
  "codes": [
    {
      "code": "let page_topic = 'sports';\n\nOneSignal.push(function() {\n    OneSignal.on('subscriptionChange', function(isSubscribed) {\n        if (isSubscribed === true) {\n            console.log('The user subscription state is now:', isSubscribed);\n            var pathArray = window.location.pathname.split('/');\n            OneSignal.sendTags({\n                \"subscription_page\": pathArray[1],\n                \"subscription_page_topic\": page_topic,\n            }).then(function(tagsSent) {\n                // Callback called when tags have finished sending\n                console.log(tagsSent);\n            });\n        }\n    });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
In this example, "subscription_page" and "subscription_page_topic" are the tag keys, while `window.location.pathname` and `page_topic` are the tag values.

### Use Segments or API Filters to Target Users by Tags

As soon as this tag data is added, you can target those subscribers based on the associated tags by using [Segments](doc:segmentation) or [API Filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters).

### Automated Message Campaigns Based on Subscription Page

Using [Automated Messages](doc:automated-messages) you can setup campaigns to automatically target devices x amount of times after they have subscribed.

For example, if I subscribe to a "subscription_page" = "gaming". I want to be updated on all items related to this topic.

We can automate message campaigns by creating segments:
[block:parameters]
{
  "data": {
    "h-0": "Segment Name",
    "h-1": "Data Filters",
    "h-2": "Details",
    "0-0": "Gaming 1",
    "0-1": "Tag: `subscription_page` is `gaming`\nAND\nFirst Session greater than 2 hours\nAND \nFirst Session less than 24 hours",
    "0-2": "All devices that subscribed in the gaming section of my site and 2 hours has passed.",
    "1-0": "Gaming 2",
    "1-1": "Tag: `subscription_page` is `gaming`\nAND\nFirst Session greater than 24 hours\nAND \nFirst Session less than 48 hours",
    "2-0": "Gaming 3",
    "2-1": "Tag: `subscription_page` is `gaming`\nAND\nFirst Session greater than 72 hours\nAND \nFirst Session less than 96 hours",
    "1-2": "24 hours later, they will be added to this segment.",
    "2-2": "72 hours later, they will be added to this segment."
  },
  "cols": 3,
  "rows": 3
}
[/block]
In this sequence, all devices that subscribed to the "gaming" section of our site will be added to these segments after 2 hours, 24 hours and 72 hours. The upper limits are not required but will help remove subscribers after the time has passed.

Next we setup our [Templates](doc:templates) of what information we want to send to the users. Common examples would be:
1. Link to social media to get them involved deeper in the community.
2. Share popular blog posts or information.
3. Send a small discount or promo code to keep them engaged.

Last step is to combine the Segments and Templates into the [Automated Messages](doc:automated-messages).