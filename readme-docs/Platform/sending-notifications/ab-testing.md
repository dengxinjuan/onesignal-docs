---
title: "A/B Testing"
slug: "ab-testing"
excerpt: "OneSignal features - A/B Testing Messages"
hidden: false
createdAt: "2021-03-23T18:55:54.506Z"
updatedAt: "2021-07-13T01:38:47.866Z"
---
[block:callout]
{
  "type": "info",
  "title": "AB Testing has Updated!",
  "body": "If you are looking for the legacy AB Testing docs go [here](https://documentation.onesignal.com/v7.0/docs/ab-testing-legacy)"
}
[/block]
## What is A/B Testing?
A/B Testing is a way to compare **up to 10 message variants** on the same notifications to determine which one performs better. Marketers often use A/B testing to validate the effectiveness of a particular message content, for example, to understand whether a notification with an image performs better than a text-only notification.

OneSignal allows you to experiment with up to ten variants on [Pro and Enterprise plans](https://documentation.onesignal.com/docs/paid-plan-benefits). All other plans include testing two variants only for each notification.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5003e18-new_ab_test.png",
        "new ab test.png",
        2786,
        1708,
        "#ebedee"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "A/B tests are not yet available for our Email and SMS products.",
  "title": "Push Only"
}
[/block]
## Create A/B Test
To run an A/B test, you need to 
1. Create a New Push Message (**Dashboard --> Messages --> New Push**).
2. Select the target audience for the entire message. For example, players who completed level 10 of your game.
3. Add multiple variants for the same message by clicking on **A/B Test**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1c7771-Add_AB_Test.png",
        "Add AB Test.png",
        2384,
        850,
        "#f9fafb"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
4. Fill in the message content for each of the variants
5. Select the percentage of the target audience (out of the total from #2) that should receive the AB test messages. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c6ba2b-audience_selection_per_variant.png",
        "audience selection per variant.png",
        2458,
        422,
        "#f9fafa"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
6. Clicking on *Review and Send* will show you the preview panel with the key differences between the variants.
7. Messages that are sent as AB test will be marked as such under Dashboard --> Messages.



**Example**
Let's say the total count of players (Target Audience from point #2 above) who completed level 10 is 100 and you created an AB test message with two variants A and B (from point #3 above).

If you select 20% (point #5 above) as the AB test sample size (that is 20 players out of the total 100), then 10 players will get Message A and 10 players will get Message B.

## AB Test Report
Once you schedule an AB Test, you can view the performance details of the different variants under **Dashboard --> AB Tests**. The performance statistics on **Clicks, Clickthrough Rate, and Delivered** metrics are provided for all the variants. You could use these to determine the winner and send that winning message variant to the rest of your target audience. 

You can also access the delivery report for individual variants from the Delivery tab.

###Selecting A Winner
OneSignal provides three statistics for you to view the performance (Clicks, Clickthrough Rate, and Delivered) and choose a winner. Below screenshot describes how to view different stats and select a winning variant. We will send the winner variant to all the remaining members of your target audience.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a5105e5-selecting_the_winner.png",
        "selecting the winner.png",
        1944,
        1920,
        "#e2eae6"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
## What you can A/B test
The OneSignal dashboard allows testing of different push message contents as well as different notification options, such as images, sounds, action buttons, etc. 

OneSignal **does not** support testing different segments, nor does it support testing different delivery and scheduling options. These limitations exist because A/B testing requires random samples of users in target segments delivered at the same time.