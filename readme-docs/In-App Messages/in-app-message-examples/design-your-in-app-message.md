---
title: "Design Your In-App Message"
slug: "design-your-in-app-message"
excerpt: "How to Design an In-App Messages with the OneSignal Messaging composer"
hidden: false
createdAt: "2021-08-10T20:24:44.651Z"
updatedAt: "2021-12-03T19:12:18.670Z"
---
In order to design your In-App Message we provide a series of short simple blocks:

* Text: Allows you to add a series of text to your In-App
* Image: Add an image to your In-App Message along with a click action.
* Button: Customize your buttons to  get user 
* Close Button: Add, remove or customize the close button
* Background: Customize the background through size, image and opacity. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b52c058-inapp-design.gif",
        "inapp-design.gif",
        780,
        589,
        "#d7e2e3"
      ]
    }
  ]
}
[/block]
#Step 1. Creating an IAM

Navigate to **Messages > New In-App** to create, view, edit, pause/resume, duplicate, and delete your In-App Messages.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f781af-Templates_1.png",
        "Templates (1).png",
        389,
        405,
        "#e5eef5"
      ],
      "caption": "Image. Showing where button is to create a new In-App Message"
    }
  ]
}
[/block]
#Step 2. Message Placement
This is where the In-App Message will be located and how it appears on the screen.
[block:parameters]
{
  "data": {
    "h-0": "Message Type",
    "h-1": "Description",
    "0-0": "Top",
    "1-0": "Center",
    "2-0": "Bottom",
    "3-0": "Full",
    "0-1": "Drops down from the top of the screen.",
    "1-1": "Expands out from the center to partially fill screen.",
    "2-1": "Pops up from the bottom of the screen.",
    "3-1": "Expands out from the center to fill screen. You can choose with or without margins. To use this feature without margins, you’ll need to be using the following SDKs: iOS - 3.9.0, Android - 4.6.3. If the user does not have this SDK, they will see the in-app with margins by default.",
    "4-0": "Carousel",
    "4-1": "Add up to **10** screens (cards) with their own customizable content. Must have a [Paid Plan](doc:paid-plan-benefits) and select the **Full** Message Type for this feature."
  },
  "cols": 2,
  "rows": 5
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/747ddcc-Type.png",
        "Type.png",
        1055,
        728,
        "#f5f8fa"
      ],
      "caption": "Image showing types of In-App you can select"
    }
  ]
}
[/block]
#Step 3. Adding and Removing Blocks

Click **Add Block** to create a Button, Image, or Text element. You can drag, clone, delete, show/hide advanced settings of blocks using the Options at the top right of each block. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93e6082-Delete_Block.png",
        "Delete Block.png",
        606,
        274,
        "#f4f5f6"
      ],
      "caption": "Image. Showing action to add and delete a block"
    }
  ]
}
[/block]
#Step 4. Orientation of your IAM

In-App Messages work in Portrait and Landscape mode a mode to design your in-app message in. For this we suggest 

See [Test Sending The Message](#test-sending-the-message) below once you have finished setting up your IAM.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e2b95e5-IAM-portrait-landscape.png",
        "IAM-portrait-landscape.png",
        1279,
        564,
        "#f5f6f7"
      ],
      "caption": "Image. Shows the orientation of phone for portrait and landscape",
      "sizing": "smart"
    }
  ]
}
[/block]
#Step 5: Different Block Types

Click **Add Block** to create a Button, Image, or Text elements.

You can drag, clone, delete, show/hide advanced settings of blocks using the Options at the top right of each block.

[Tag substitution](doc:personalization) for In-App personalization is supported on the following fields:
  * Text Block - Content
  * Image and Background Image Block - URL to upload the image and Click Action URL
  * Button Block - Content and Click Action URL

You can check the In-App tag substitution [example here](doc:in-app-message-examples#in-app-message-tag-substitution).
*Note*: Tag Substitution will be supported only on iOS version 3.3.0+ and Android version 4.3.0+ SDKs.


## Text

The Text element allows you to add text to your In-App Messages. Here you can use these to add feature summaries, describe the purpose of your application, provide personalized messaging and much more.

* **Text:** Here set the width and height of the screen in the In-App message. We use percentages to ensure your In-App Message is responsive according to the device the user is on. 
* **Font Family (NEW):** Choose from some of the top fonts available from Google Fonts. 
* **Format (NEW):** Make your text bold, underlined, and/or italicized. 
* **Color (NEW):** Select the color of your background. Additionally, add an Alpha value in the Color picker to have some transparency 
* **Alignment (NEW):** Select if you want your font left aligned, center or right-aligned. 
* **Size (NEW)**: This allows you to select the size of the font. 

**Advanced Options**
* **Margins (NEW):** This allows you to select how much space you’d like your IAM to have around the background container. For example. If the width of the container is 80%, then you have a remaining 20% to use for margin. Then we can apply 10% for the Margin-Left and 10% for the Margin-Right. Similarly, we could also add more margin on the left-hand side than the right if needed. 

**Tips**
* **Changing Text with Languages:** If you’d like to send your users In-App messages with different languages, we suggest segmenting your users into different Audiences by Language. 
* **Personalize Content:** You can use data tags for the text blocks to personalize your content. Reference [example here](doc:in-app-message-examples#in-app-message-tag-substitution). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bfc6708-TEXT.png",
        "TEXT.png",
        672,
        500,
        "#f4f6f7"
      ],
      "caption": "Image. Shows the Text element"
    }
  ]
}
[/block]
## Close Button

The Close Button allows you to turn off the close icon for your In-App Message. This can be used if you need to ensure your user clicks on a button selection, or if you want them to go through a carousel of cards without clicking out of the experience. 

* **Toggle On/Off (NEW): ** There is only one close button allowed per In-App Message, but if you don’t want it on your In-App Message, you can hide the button by toggling it off. 
* **Alternate Close Icon (NEW):** Choose your own close icon, to ensure your In-App Message looks the same as your App UI. If you don’t have one, don’t worry - by default, we provide an icon being an X. We recommend your image is square around 10px x 10px. Image formats we support are .jpg , .png a, .svg and .gif
* **Click Action (COMING SOON):** Add a click action to your close icon.

**Advanced Options**
* Margins (NEW): This allows you to select how much space you’d like your Close button to have with the container and other elements. 

**Tips**
* **Dismiss:** If you remove your Close Button, we recommend adding a dismiss action within one of your buttons to allow your users to exit the In-App Message. 
* **Ensuring your user interacts with a group of cards:** If you want to ensure your user see’s all of a group of In-App messages, then toggle off the close button. Then on the final screen add a dismiss action in one of the buttons. That way the user cannot exit the carousel/group of cards until completed.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e1db867-Close_1.png",
        "Close (1).png",
        675,
        538,
        "#f3f5f6"
      ],
      "caption": "Image. Shows the Close element"
    }
  ]
}
[/block]
## Images

Select an image for your users to see. Images are often used to ensure your In-App Message is visually appealing and leads to higher engagement rates. 

* **Image:**  We support `.jpg` , `.png`, and `.gif` image formats. 
* **Click Action**: Add a click action to your image.

**Advanced Options**
* **Margins (NEW): **This allows you to select how much space you’d like your images to have with other elements. 

**Tips**
* **Different Images for Users:** If you want to display different images and background images to your users, use tag substitution on the Image upload URL. Additionally, you can also use tag substitution on the Image Click Action URL and direct your users to different links. See a great example here.
* **Images with transparency:** We recommend you use png images if you’d like transparency in your image. This can allow images to fade into the background container and create a really unique effect. 
* **Changing Images with Languages:** If you’d like to send your users In-App messages with different images for different languages, we suggest segmenting your users into different Audiences by Language. This is the same approach recommending for Text with different languages. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/300fff5-image_1.png",
        "image (1).png",
        672,
        484,
        "#f2f4f5"
      ],
      "caption": "Image. Shows the Image element"
    }
  ]
}
[/block]
## Buttons

Button blocks allow you to add buttons to your In-App Message. Buttons can allow you to create call-to-actions for your users such as getting feedback and deep linking elsewhere.

* **Button Text:** Place your Call-to-Action (CTA) here. 
* **Font Family (NEW):** Choose from some of the top fonts available from Google Fonts. 
* **Color (NEW):** Select the color of your text. Additionally add an Alpha value in the Color picker to have 
* **Format (NEW):** Make you text bold, underlined and/or italicized. 
* **Size (NEW):** Allows you to select the size of the font. 
* **Alignment**: Select if you want your font left aligned, centre or right aligned. 
* **Image:**  Here you can add an image to your button. Image formats supported are: t .jpg , .png and .gif
* **Corner Radius (NEW):**  Allows you to determine how round you’d like the corners. 
* **Click Action:** Add a click action to your button. Buttons can provide some of the following functionality: 
  * Tag users
  * Send Outcomes
  * Prompt for Push or Location
  * Deep-Link to a page of the app

**Advanced Options**
* **Margins (NEW): **This allows you to select how much space you’d like your buttons to have with other elements. 
* **Border Weight (NEW):** Set the weight of the border outline. If you do not want an outline, set this to zero. 
* **Drop Shadow X and Y (NEW):** This allows you to determine what angle you want your shadow to be. 
* **Drop Shadow Color (NEW):** Select the color you want your shadow to begin with. This will fade out to a zero opacity, depending on the spread of the shadow and the amount of blur applied to the shadow. 
* **Drop Shadow Spread (NEW):** This allows you to select how large you want your drop shadow to be. 
* **Drop Shadow Blur (NEW):** This allows you to choose how blurry you’d like your shadow to be.

**Tips**
* **Personalize Button Text: **You can use data tags to personalize the button text and the click action URL. See the example here.
* **Image Contained vrs. Overflow:** If you want the image to be contained in the button, ensure the size matches the width and height sizes you provide. If you want the image to overflow the button, then add larger image and set the button background to have zero opacity through setting the Alpha (A) value to be 0. This way you can have buttons as full images, if needed. 
* **Soft shadows:** For a soft shadow set a low color opacity using Alpha (A) in the color selector, and increase the drop shadow blur.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b71044a-Button_Block_1.png",
        "Button Block (1).png",
        672,
        1026,
        "#f4f6f8"
      ],
      "caption": "Image. Shows the Button element"
    }
  ]
}
[/block]
## Background

Customize your background for your users to see, through color and images. 

* **Image:**  We support `.jpg` , `.png`, and `.gif` image formats. 
* **Click Action**: Add a click action to your background.
* **Background Color**: Add a color to customize your background.

**Advanced Options**
* **Margins (NEW): **This allows you to select how much space you’d like your background block to have with other elements. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93e695f-Body_Block_1.png",
        "Body Block (1).png",
        645,
        355,
        "#f1f3f5"
      ],
      "caption": "Image showing the background block"
    }
  ]
}
[/block]
--- 
# FAQ

### How can I make a Full-Screen In-App? What SDK version do I need?

A full-screen in-app, allows you to choose with and without margins. In order to create an in-app without margins, we recommend your apps to be on the following SDKs:

* iOS: 3.9.0
* Android: 4.6.3

If the user has not updated their application, so they are on an older SDK, they will still receive the in-app message, but it will have margins by default.