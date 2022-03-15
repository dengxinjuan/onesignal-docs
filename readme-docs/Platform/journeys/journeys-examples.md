---
title: "Journeys Examples"
slug: "journeys-examples"
excerpt: "Common examples to get your journey started."
hidden: false
createdAt: "2022-02-16T02:36:56.320Z"
updatedAt: "2022-02-17T05:16:08.683Z"
---
#Onboarding Welcome Sequence
Trigger: **Matches segment**
Audience: **Subscribed users, future additions only** (you only want people who subscribe going forward, you don't want existing users to receive this)
Exit: **Move through entire Journey**
Reentry: **No** (you only want users to receive onboarding once)
Content: Welcome new users to your app or website, encourage them to accomplish certain tasks over the first several days or weeks
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/06d7b1d-Onboarding.jpg",
        "Onboarding.jpg",
        2141,
        1847,
        "#eceef0"
      ],
      "caption": "Onboarding Welcome Journey Example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70b212e-Onboarding_Settings.jpg",
        "Onboarding Settings.jpg",
        2141,
        1932,
        "#b6bcc2"
      ],
      "caption": "Onboarding Welcome Journey Example"
    }
  ]
}
[/block]
#Re-engagement Campaign
Trigger: **Inactive for 1 week**
Audience: **Subscribed users** (you may want to **exclude certain segments** like paid customers if your goal is to get more free users coming back)
Exit: **Move through entire Journey OR becomes active**
Reentry: Yes, **every 7 days** (you're fine for reengagement to happen every time they haven't opened your app in a while)
Content: Remind users to come back to your app when they haven't opened it in a while, entice them with rewards or discounts
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fea2281-Reengagement.jpg",
        "Reengagement.jpg",
        2141,
        1992,
        "#eceef1"
      ],
      "caption": "Re-engagement Campaign Journey Example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a0e9323-Reengagement_Settings.jpg",
        "Reengagement Settings.jpg",
        2141,
        1992,
        "#b6bcc2"
      ],
      "caption": "Re-engagement Campaign Journey Example"
    }
  ]
}
[/block]
#Abandoned Cart
Trigger: **Matches segment**
Audience: **Segment with a tag “cart_item”**, and ensure to [tag your users](https://documentation.onesignal.com/docs/add-user-data-tags#activity) when they have items in their cart
Exit: **Moves through entire journey OR segment with “cart_item” empty** (when a user completes their purchase then remove this tag)
Reentry: **Yes, every day** (you're fine sending a user this campaign once daily, every time they abandon their cart)
Content: Remind users to come back and purchase the item they didn't complete checkout with. You might want to have different branches for different item categories or personas e.g. if they have purchased previously or not
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9399fae-Ab_Cart.jpg",
        "Ab Cart.jpg",
        2141,
        1992,
        "#edeff1"
      ],
      "caption": "Abandoned Cart Journey Example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c6d3e60-Ab_Cart_Settings.jpg",
        "Ab Cart Settings.jpg",
        2141,
        1992,
        "#afb7bd"
      ],
      "caption": "Abandoned Cart Journey Example"
    }
  ]
}
[/block]
#Promotional Campaign
Trigger: **Matches segment**
Audience: **Subscribed users** or target the segment your promotional campaign is relevant to
Exit: **Moves through entire journey OR enters a particular segment** which is the goal you want them to complete e.g. purchase
Reentry: **No** (if this is a one-off campaign then send it once)
Content: Prepare them for the event, remind them when it starts, offer a discount or reward as it gets close to ending
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2bbc9c8-Promo.jpg",
        "Promo.jpg",
        2231,
        1993,
        "#edeff1"
      ],
      "caption": "Promotional Campaign Journey Example"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15e8f9e-Promo_Settings.jpg",
        "Promo Settings.jpg",
        2231,
        1993,
        "#adb4ba"
      ],
      "caption": "Promotional Campaign Journey Example"
    }
  ]
}
[/block]