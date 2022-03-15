---
title: "Auto-Segment By Page Visit"
slug: "auto-segment-users-by-page-visit"
excerpt: "Web Push common setup feature for targeting users based on the page topic and number of visits."
hidden: false
createdAt: "2019-05-04T07:39:16.117Z"
updatedAt: "2021-07-29T00:54:45.352Z"
---
Most websites provide a variety of different content. Users visit your site for a couple specific topics but may not want to know about every article you publish.

If you run an ecommerce site with men's and women's fashion, I may not want notifications that dresses are 30% off or slacks are BOGOHO. Similarly if you run a news site with entertainment, finance, politics, and sports articles, if I don't visit entertainment and politics pages, I likely don't want updates about those topics.

When users subscribe to a page or click a notification, it shows interest in that topic. We provide guides on how to [Auto-Segment Users By Subscription Page Topic](doc:auto-segment-users-by-subscription-page) and [Auto-Segment Users Based on Notification Topic](doc:segment-based-on-notification-clicks), but what about other topics your site provides that subscribers may have interest in?

By leveraging OneSignal's [Data Tags](doc:add-user-data-tags) and adding just a little bit of code, we can keep track of what page topics the user visits and how many times they visit. This way, you can send them updates and offers they care about.

Here’s how it works…

### 1. Understand user segments

If you are a publisher, think about the types of articles you provide and how they should be segmented. 

For example, main topics may be sports, business, politics, and entertainment, but consider what subcategories you specialize in like your prolific authors, different sports teams or world, national and local politics.

If you are an ecommerce store or tech blogger, segment by items you carry in and brands you cover. Mobile devices vs desktop and android vs iOS.
[block:callout]
{
  "type": "warning",
  "title": "Key Constraints",
  "body": "1. Recommended to start with 3-8 topics at first to stay manageable. \n2. Recommended to stay under 20 topics.\n3. Plan to keep topic identifiers short. For example, instead of \"Entertainment\" consider \"ent\". Instead of \"Breaking_News\" use \"bn\"."
}
[/block]
### 2. Add the code

Once the topics are decided, it is time to add the code to each page that contains that topic.

Here is an example of what you would add to your pages. The 2 variables:
- `numVisitsTrigger` is the number of times the user visits the page before the tag is added. You can set this to `0` to start tagging right away.
- `topic` is the category of the page. This could be part of the url path, a common page topic like "finance", "laptops", "gaming", "pro" vs "non-pro"
[block:code]
{
  "codes": [
    {
      "code": "// Replace sports with the topic of the page of your choice\nvar pathArray = window.location.pathname.split('/');\nvar topic = pathArray[2]; //or use any string you want like: \"sports\"\n// On 3rd visit to this topic tag user set\n// Change to any number you want. 0 or 1 will tag user on 1st visit\nvar numVisitsTrigger = 3; \n\nfunction tagUserWithPageTopic(key, value) {\n  OneSignal.push(function() {\n    OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n      console.log(\"isEnabled: \", isEnabled);\n      if (isEnabled) {        \n        OneSignal.sendTag(key, value, function(tagsSent) {\n            // Callback called when tags have finished sending\n            console.log('tags sent: ', tagsSent);\n        });      \n      }\n    });\n  });\n}\n\nif (typeof localStorage !== \"undefined\") {\n  var topicVisits = parseInt(localStorage.getItem(topic), 10);\n  if (!isNaN(topicVisits)) {\n    topicVisits += 1;\n  } else {\n    topicVisits = 0;\n  }    \n  localStorage.setItem(topic, topicVisits)\n\n  if (topicVisits >= numVisitsTrigger) {\n    tagUserWithPageTopic(topic, topicVisits);\n  }\n}",
      "language": "javascript",
      "name": "Single Topic Per Page Example"
    },
    {
      "code": "// replace the \"keys\" with any tag keys you want to use\n// keep the structure the same to make sure its a valid simple JSON object\nvar osTagsForPage = {\n  \"key1\": 0,\n  \"key2\": 0,\n  \"key3\": 0\n};\n\nfunction osUpdateTags(osTags) {\n  OneSignal.push(function() {\n    OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n      if (isEnabled) {\n        OneSignal.sendTags(osTags).then(function(tagsSent) {\n          console.log(\"tagsSent: \", tagsSent);\n        });\n      }\n    });\n  });\n}\n\nif (typeof localStorage !== \"undefined\") {\n  var osTags = {};\n  var localTags = getOSTags();\n  console.log(\"localTags: \", localTags);\n  var tagsUpdated = false\n\n  for (key in osTagsForPage) {\n    if (key in localTags) {\n      console.log(\"key in localTags: \", key);\n      if (!isNaN(localTags[key])) {\n        localTags[key] = (localTags[key] + 1 || 1);\n        osTags[key] = localTags[key];\n        console.log(\"osTags from localTags \", osTags);\n        tagsUpdated = true;\n      } else {\n        console.log(\"tag key's value not a number: \", localTags[key])\n      }\n    } else {\n      console.log(\"key not in localTags: \", key);\n      osTags[key] = 1;\n      console.log(\"osTags \", osTags)\n      tagsUpdated = true;\n    }\n  }\n  localStorage.setItem(\"osTags\", JSON.stringify(osTags));\n\n  if (tagsUpdated) {\n    osUpdateTags(osTags)\n  }\n}\n\nfunction getOSTags() {\n  return localStorage.getItem(\"osTags\") ?\n    JSON.parse(localStorage.getItem(\"osTags\")) : [];\n}",
      "language": "javascript",
      "name": "Multiple Topics Per Page Example"
    }
  ]
}
[/block]
In this example there are 2 variables to consider.

1. `numVisitsTrigger` is the number of times a user visits a page on a certain topic before a tag is added. Here, the 3rd time a user visits a page with the decided topic, they will get tagged with that topic.

2. `topic` is the actual topic of the page and tag key that will be added to the user.

See our Web SDK docs for more on the `sendTag` [method](doc:data-tag-implementation#sdk-tagging-methods).

###3. Target and send your messages

As soon as this data gets added to your users, you can now group them with [Segments](doc:segmentation) or [Api Filters](ref:section-send-to-users-based-on-filters).

You are now ready to start sending relevant messages and engaging users based on what they want!