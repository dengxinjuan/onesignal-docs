---
title: "Journeys"
slug: "journeys"
excerpt: "Automate Your Message Sequences"
hidden: false
metadata: 
  title: "Customer Journeys Workflow Builder"
  description: "An easy-to-use visual workflow builder to automate your messaging and guide your users."
createdAt: "2022-02-16T02:33:06.702Z"
updatedAt: "2022-03-14T18:50:31.759Z"
---
Our easy-to-use visual builder empowers you to craft personalized messaging journeys, all with no code.

Create Journeys for every situation:
* Onboarding sequences to guide your users to success
* Re-engagement campaigns to get your users back
* Abandoned cart workflows to drive sales and revenue
* Promo, upsells, post-action followups, and more
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3185706-Ab_Cart.jpg",
        "Ab Cart.jpg",
        2141,
        1992,
        "#edeff1"
      ]
    }
  ]
}
[/block]
#Requirements

Journeys are currently available to customers on our Professional and Enterprise plans (see [pricing](https://onesignal.com/pricing)). Support for other plans is coming soon.

To utilize Journeys you need to be identifying your users with [External User ID](https://documentation.onesignal.com/docs/external-user-ids). Only users with an External User ID can enter a Journey. This is important so we can track a user all the way through a Journey and make use of cross-channel messaging once that functionality is available. You can see if you are setting these IDs today by checking your All Users page and turning on the External User ID column to see if it is populated. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/964424f-204c576b565fd8683ac54c632bc9c0ee33b15f2a650e30809efda0012bbf2029b103e70467511b50334d237d3b5cc51f9d5e7a9e238d4a698603d0ebbccc943005b197bef7603818911d444fc9839f76e1d97c937d1b3bb1e0eb6a4466af329fd722574c.jpeg",
        "204c576b565fd8683ac54c632bc9c0ee33b15f2a650e30809efda0012bbf2029b103e70467511b50334d237d3b5cc51f9d5e7a9e238d4a698603d0ebbccc943005b197bef7603818911d444fc9839f76e1d97c937d1b3bb1e0eb6a4466af329fd722574c.jpeg",
        713,
        490,
        "#e5e9eb"
      ]
    }
  ]
}
[/block]
If you are not setting External User ID today and want to make use of Journeys, there are [multiple ways to set these](https://documentation.onesignal.com/docs/external-user-ids#linking-an-external-user-id-to-the-onesignal-player-id) including CSV upload or in our web and mobile SDKs.

Journeys is available today for mobile push and web push. Support for email, SMS and in-app messaging is coming soon.

#Creating a Journey
1. Configure your Journey, including entrance and exit rules
2. Configure the messages you want to send and when
3. Make the Journey live

##Journey Settings: Trigger
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c024d45-11b8897c9402e9015501779cb44ea5e97102af4d917c09c21bc1ed2ffb87b6abbdf222667abc291f6b01e543ee4c4b938a28aad0233f4b795a36cb7bf56a12ea2e52ec5274fcea3f2e8c999285a5c8621b6a39b07bd5119db2129a174346817a55758a7a.jpeg",
        "11b8897c9402e9015501779cb44ea5e97102af4d917c09c21bc1ed2ffb87b6abbdf222667abc291f6b01e543ee4c4b938a28aad0233f4b795a36cb7bf56a12ea2e52ec5274fcea3f2e8c999285a5c8621b6a39b07bd5119db2129a174346817a55758a7a.jpeg",
        756,
        511,
        "#f5f7f8"
      ]
    }
  ]
}
[/block]
This defines how users will enter your Journey and any filters you want to apply to that audience.

###User matches the audience segment criteria
Use this option to target specific segments. When a user enters a segment they will enter the Journey. 

Users will not automatically exit a Journey when they exit the segment, instead you need to define an exit rule.

###User is inactive for amount of time
Use this option to target users who have not been on your website or app for a specific time period. This is useful if you want your Journey to be a re-engagement or reactivation campaign.

The inactive option will only start counting from the moment you make the Journey live. It does not take into account previous inactivity.

##Audience
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ade3b26-5009dea9510c5137bbaa8ad86cf422199754754ec187e627bd74db298e6a7de688645849b0d41c41c628f2f9880351052c4b2c919aeb831f211c205160f727792bb75af96e95c2a2837066882cff32a5775dd5f3bf394600340492fec73d2a34b0c49703.jpeg",
        "5009dea9510c5137bbaa8ad86cf422199754754ec187e627bd74db298e6a7de688645849b0d41c41c628f2f9880351052c4b2c919aeb831f211c205160f727792bb75af96e95c2a2837066882cff32a5775dd5f3bf394600340492fec73d2a34b0c49703.jpeg",
        757,
        596,
        "#f6f8f8"
      ]
    }
  ]
}
[/block]
The segment(s) of devices that are eligible to enter the Journey. 

To enter a Journey a device must have an External User ID defined so the user is identified.

Users will not automatically exit a Journey when they exit the segment, instead you need to define an exit rule.

###Current and future additions
Segments are dynamic and have users entering and exiting them constantly. Use this option if you want to target every user that is in your selected segments or that will enter them in the future.

###Future additions only
Use this option if you only want users after the Journey goes live to enter. For example if you have an onboarding Journey with a welcome message you would only want future users to receive these messages and not any users who previously signed up.

##Journey Settings: Exit + Re-entry Rules 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ccb555-0b056927e06e4d1dc52b122242651555356c7d3ea7ad23be4b50c9771df55ba5c18d1f6067ca66d5ed742396df29d50bc3aed8e2689fce942166218b627ca85422dbd714bc5c94f7f5a9f4993c4694ade38aa67b8e6cc1e917ffcebb57f15bcfc502af6a.jpeg",
        "0b056927e06e4d1dc52b122242651555356c7d3ea7ad23be4b50c9771df55ba5c18d1f6067ca66d5ed742396df29d50bc3aed8e2689fce942166218b627ca85422dbd714bc5c94f7f5a9f4993c4694ade38aa67b8e6cc1e917ffcebb57f15bcfc502af6a.jpeg",
        756,
        629,
        "#f6f8f8"
      ]
    }
  ]
}
[/block]
Defines when a user should exit a Journey. If at any time the user falls into one of the selected Segments they will exit and not enter any more steps or be sent any more messages.

They can re-enter a Journey based on the re-entry rules you define.

###Exit when user becomes active
Use this option if you want users who visit your website or app to exit immediately. This is useful if your Journey is a re-engagement or reactivation campaign.

###Re-Entry Rules
Defines how often they can repeatedly enter a Journey. Some message sequences you want to send once, like a Black Friday promotion. Some messages you’ll want to send every time a user is eligible to receive, like an abandoned cart campaign every time a user abandons the card, or a reactivation campaign every time they are inactive. This helps you space out the time in between.
[block:callout]
{
  "type": "danger",
  "title": "Journey Settings: Scheduling",
  "body": "Scheduling is not currently supported. Once you make your Journey live it is live until you stop or delete it."
}
[/block]
#Journey Messages 

##Send a Push Notification
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a433cc5-94196c8025eed21ffdbc006134a8760bb5296a35ff177be51b1c901386cbe0cc5aa0a9ed93a0d4be9a4f93cc4ab923affe2f57dd29cb9d72e7b8866eb6c871954991b502a7fb3df061d2f9d7c9b8367145c59ad4216d910e979270dbd197999521986867.jpeg",
        "94196c8025eed21ffdbc006134a8760bb5296a35ff177be51b1c901386cbe0cc5aa0a9ed93a0d4be9a4f93cc4ab923affe2f57dd29cb9d72e7b8866eb6c871954991b502a7fb3df061d2f9d7c9b8367145c59ad4216d910e979270dbd197999521986867.jpeg",
        1068,
        846,
        "#cbccd2"
      ]
    }
  ]
}
[/block]
Select the Message Template you would like to send. We strongly encourage creating new templates specifically for your Journey to ensure analytics are accurate and not shared across instances of the template. Also, name the template something recognizable so you can easily find it in the dropdown.

Message scheduling is not currently supported. When a user reaches this step in your Journey they will be sent the message immediately.

**Support for email, SMS, in-app coming soon.**

#Journey Actions

##Wait
Use the wait action to space out your messages and steps. Define your wait time in seconds, minutes, hours, days or weeks. When a user enters these steps they will wait here the defined amount of time before leaving and going to the next step.

##Tag User
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/839fd4f-5c08b00b3ddbf90de535c616f409f01432c01d8fe904f14aa6a1642d278d3cfa1bd9e255dc42cab701d61eeb8a673c47c45b7ddf8b1e4309ab3ac482f69fdcc0efa9dae47a5fd082ffc667e2866e912e14a61953e29501985189309c170fd8c7fc36f44c.jpeg",
        "5c08b00b3ddbf90de535c616f409f01432c01d8fe904f14aa6a1642d278d3cfa1bd9e255dc42cab701d61eeb8a673c47c45b7ddf8b1e4309ab3ac482f69fdcc0efa9dae47a5fd082ffc667e2866e912e14a61953e29501985189309c170fd8c7fc36f44c.jpeg",
        1067,
        761,
        "#d0d5d9"
      ]
    }
  ]
}
[/block]
Use the tag user action to add tags to users. Examples of why you might add a tag include tagging them with the Journey and step they are on in case you want to creates a segment or target this group later. 

You can also use tags to make use of in-app messaging in Journeys. Tag users at a particular step in a Journey and then set up an in-app message that targets an audience with that tag.

##Yes/No Branch
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3854ac2-Branching.png",
        "Branching.png",
        1556,
        878,
        "#b3b8be"
      ],
      "caption": "Yes/No Branch based on previous message behavior"
    }
  ]
}
[/block]
Use the Yes/No Branch to personalize a users journey based on segment membership or message behavior.

###Segment Membership
Branches depending on what segment the user is in. For example, if you tag your users with a plan type (lets say “Free” and “Paid”) then you can create a branch for free users and paid users. The free branch may contain more messaging incentivizing users to upgrade, while the paid branch may introduce more paid features.

###Previous Message Behavior
Branch depending on what behavior the user had for other messages in the same Journey. For push those options are “**Clicked**” and “**Confirmed Delivery**”. For example, if a user did not click a previous notification, maybe you want to get more aggressive and send more messages, or send them a bigger incentive. 

Safari does not support Confirmed Delivery so keep this in mind when you create branched messages.

#Managing Journeys
* Delete — will delete a Journey. Once deleted you cannot retrieve it.
* Stop & Archive — stops the Journey and gives it an archive status. These can still be accessed and duplicated.
* Duplicate — creates a copy of that Journey which you can then edit and make live.

Editing and pausing are not currently supported. To make changes you will have to stop and archive then duplicate and exclude any previous users who have received the Journey.