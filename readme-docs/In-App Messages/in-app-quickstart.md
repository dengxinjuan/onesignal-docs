---
title: "In-App Messages Quickstart"
slug: "in-app-quickstart"
excerpt: "In-App messages allow you to target your users when using your applications."
hidden: false
createdAt: "2021-07-28T16:11:35.610Z"
updatedAt: "2022-01-21T23:40:20.634Z"
---
In-App Messages are highly customizable pop-up modals that Mobile App user can receive when they are inside your App. This guide will go over how to set them up and all features available.

[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/pQW93iaEki8\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]

In-App messages do not require a subscription, and they only show when the users are actively using your application. This enables In-App messages to be highly effective in some of the following scenarios:

1. Onboarding: Guide your users through getting started with your application. Provide them with an onboarding process, introducing them to key application features
2. Product and Feature Announcements: Inform your users when you have added new products and features to the application, to capture their attention to begin using them.
3. Push and Location Access: Get users to subscribe to push or grant location access needed for your application.
4. Refer a Friend: Allow your users to invite their friends into your application with a single click. 

#Getting Started
1.  Sign up for a free [OneSignal Account](https://onesignal.com).
2. Setup your SDK, with our handy [Mobile Push Quickstart](doc:mobile-sdk-setup) guides.
3. Add your users and ensure they are present in **Audience > [All Users](doc:users)**.
4. Send an In-App Message using our creator tool. You can find this under **Messages > In-App**. Feel free to use our  In-App Message Templates to delight your users by quickly sending visually-appealing messages.
5. Learn how to set up an In-App Message Triggers to show your message and In-App Message Click handler to perform custom events when messages are clicked. 


#Templates
OneSignal has five out-of-the-box In-App templates for you to quickly get started. These templates are professionally designed with rich-media content to help you deliver a quality experience to your app users. These include: Welcome Message, Push Permission Prompt, Promotions, New Feature Announcements, and App Store Rating request.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4056e28-Screen_Shot_2020-06-17_at_10.40.55_PM.png",
        "Screen Shot 2020-06-17 at 10.40.55 PM.png",
        2842,
        1052,
        "#b7ccdb"
      ],
      "sizing": "smart",
      "border": false,
      "caption": ""
    }
  ]
}
[/block]
You can customize these templates with your own branding and set them to an *active* state in a few minutes.

## Step 1: Find your Templates

In order to begin using your In-App Message Templates, navigate to Messages > In-App. Here you’ll see a collection of default templates. 

In Summary we have provided the following templates:

* **Welcome**: Allows you to welcome your user into your application as part of their onboarding. 
* **Promotional**: Allows you to offer your user a discount. Here we use a trigger which gives you the ability to specify when the user should see this promotion.
* **Allow Notifications**: Encourages your user to sign up for notifications

## Step 2: Edit a Template
In order to edit a template, click onto the template you’d like to view. Then navigate to Actions at the top of the screen and select Edit. 

Now you’ll see our In-App Message creator tool to begin editing your message. To find out more about our content blocks, read more on [Design your In-App Message](doc:design-your-in-app-message).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/734ff8d-Screen_Shot_2021-07-28_at_9.27.21_AM.png",
        "Screen Shot 2021-07-28 at 9.27.21 AM.png",
        1770,
        884,
        "#dbdee1"
      ]
    }
  ]
}
[/block]
#Testing In-App Messages

Make any changes and when ready to test, click **Send to Test Device**. This will send your device a push notification that you can click to open your app and preview the IAM updates.
- Push Notifications are **not** sent when in production. Push is only sent when clicking **Send to Test Device**.
- Testing In-App Messages requires Push Subscription. Push Subscription is **not** required in production.
- If you are not a test user, see [Find Devices & Set Test Users](doc:users-and-devices).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dbda8b8-Screen_Shot_2021-07-28_at_9.28.57_AM.png",
        "Screen Shot 2021-07-28 at 9.28.57 AM.png",
        1770,
        352,
        "#f5f7f9"
      ]
    }
  ]
}
[/block]