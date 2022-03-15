---
title: "iOS: Relevance Score"
slug: "ios-relevance-score"
excerpt: "How you can set a relevance score"
hidden: false
createdAt: "2021-08-10T17:34:41.609Z"
updatedAt: "2021-09-14T14:34:42.346Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b016c19-ios15-relevance-score--1.jpeg",
        "ios15-relevance-score--1.jpeg",
        1000,
        562,
        "#dadcde"
      ],
      "caption": "Image showing selection of relevance score into Morning Summary"
    }
  ]
}
[/block]

A **Relevance Score** is a score to be set per notification to indicate how it should be displayed when grouped. The system uses the relevance score, a value between 0 and 1, to sort the notifications from your app. The highest score gets featured in the notification summary. This was introduced in iOS15+.

Users can set when they see their daily summary on their iPhone. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7bb9b21-image_7.png",
        "image 7.png",
        4000,
        2000,
        "#dda6ab"
      ],
      "caption": "Image. Showing user settings on an iPhone for their Daily Summary"
    }
  ]
}
[/block]
## How to set a Relevance Score?

1. Setup the OneSignal iOS SDK with the Notification Service Extension
You will need to implement the Notification Service Extension as outlined in our [Mobile Push Quickstart](doc:mobile-sdk-setup) for the SDK you use.

2. Ensure you are set up to use the dashboard to send push notifications. Additionally, if you’re not familiar with sending a push message read [How to Send a Push](doc:sending-notifications)

3. Navigate to Create a Push Message. When selecting your platforms, you’ll see there is a section to toggle-on the Send to Apple iOS.

Here there is a section called Relevance Score. Select a value between 0 and 1. 


**Tips**
* **Choose Wisely:** We recommend only setting the most important notification you have as a 1. If you set all to a 1, they will be grouped without any ordering of your notifications.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/72426e2-Apple_iOS_Settings_Block_1.png",
        "Apple iOS Settings Block (1).png",
        1986,
        2643,
        "#f4f5f6"
      ],
      "caption": "Image. showing Apple iOS Settings to specify Relevance Score in"
    }
  ]
}
[/block]