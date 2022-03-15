---
title: "Example: Create A Survey"
slug: "example-create-a-survey"
hidden: false
createdAt: "2021-12-23T19:09:05.500Z"
updatedAt: "2021-12-23T19:15:50.300Z"
---
Using the In-App Message Carousel and Button Click Actions, we can create a survey with up to 10 pages of questions and multiple choice answers. When users provide answers, we can collect the data as [Outcomes](doc:outcomes) and/or group them with [Data Tags](doc:add-user-data-tags) for targeting with messages.

#### Designing your Survey

- To get the carousel, select the **Full** Message Type.
- Add 3 Text Blocks, 1 Image Block, and 2 button blocks.

Upon duplicating cards for the carousel, all blocks will be duplicated as well to make setting up the survey much easier!

- Select "+ Create Carousel" to duplicate this card and go back to **Card 1**.

Our initial setup will look similar to this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3666fcb-Screen_Shot_2020-09-16_at_5.16.40_PM.png",
        "Screen Shot 2020-09-16 at 5.16.40 PM.png",
        1043,
        849,
        "#d8def2"
      ]
    }
  ]
}
[/block]
Inside your text and image blocks, you can add any messaging you like and catchy image to get the user's interest.

Users will read the question, select a button and swipe to the next question.

My initial question is going to ask the user if they have time to answer some questions. If they say "Yes" I am going to save that as an [Outcome](doc:outcomes) to mark how many people are interested in taking my survey and if they select "No" I will set an outcome that they are not interested at this time. If I get a lot of "No" responses, I might decide to show this prompt at a different time..

- Select **Add Click Action** to "Send Outcome"

Adding Outcomes will also add tags, so I can get both - analytics on my survey and create segments for re-targeting with tags.

Here is how the "Yes" button looks, notice that "Dismiss on click" is **unchecked**. This is found in the top right menu of each block > Show Advanced Settings
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ab478c-Screen_Shot_2020-09-16_at_5.52.40_PM.png",
        "Screen Shot 2020-09-16 at 5.52.40 PM.png",
        498,
        402,
        "#f1f3f5"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/569c28c-Screen_Shot_2020-09-16_at_5.51.56_PM.png",
        "Screen Shot 2020-09-16 at 5.51.56 PM.png",
        502,
        189,
        "#f0f1f3"
      ]
    }
  ]
}
[/block]
The "No" button will work in the exact same way, except we will check the "Dismiss on click" button to remove the In-App Message from view.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bb9e975-Screen_Shot_2020-09-16_at_5.31.42_PM.png",
        "Screen Shot 2020-09-16 at 5.31.42 PM.png",
        495,
        482,
        "#f3f3f5"
      ]
    }
  ]
}
[/block]
#### More Cards and Questions

Click **Card 2** or swipe the carousel to the next page. You will see all the blocks are duplicated.

Here, we can update the text and image but let's keep the question a simply Yes or No. We can do a multiple choice next.

Make sure "Dismiss on click" is not checked on your buttons.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/314db9a-Screen_Shot_2020-09-16_at_5.41.18_PM.png",
        "Screen Shot 2020-09-16 at 5.41.18 PM.png",
        918,
        823,
        "#d5dae9"
      ]
    }
  ]
}
[/block]
Press the **+ Add Card** button to add the next card and so forth. You can add up to 10 cards.

#### Final Survey Question

Let's setup a multiple choice question and end the survey.

To get the most space, I'll remove the image and add 2 more buttons. Remember: you can clone blocks to re-use them!
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cd1cd04-Screen_Shot_2020-09-16_at_5.55.25_PM.png",
        "Screen Shot 2020-09-16 at 5.55.25 PM.png",
        504,
        406,
        "#f1f2f5"
      ]
    }
  ]
}
[/block]
Since this is the end of my survey, I will have whatever button they select dismiss the In-App Message. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/14c36ad-Screen_Shot_2020-09-16_at_5.58.56_PM.png",
        "Screen Shot 2020-09-16 at 5.58.56 PM.png",
        949,
        822,
        "#d0d9ee"
      ]
    }
  ]
}
[/block]