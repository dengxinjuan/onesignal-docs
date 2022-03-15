---
title: "Slide Prompt"
slug: "slide-prompt"
excerpt: "OneSignal Slide Prompt Details: Customizations, Triggering, and FAQ"
hidden: false
createdAt: "2019-03-03T01:59:55.760Z"
updatedAt: "2021-12-03T01:49:30.533Z"
---
The OneSignal Slide Prompt displays top-down center of the browser on desktop and bottom-up center on mobile. This is the most attention-grabbing prompt offered by OneSignal and is shown before the required Native Browser Prompt.

This prompt is used to gauge user interest and add [Data Tags](doc:add-user-data-tags). It cannot replace the [Native Browser Prompt](doc:native-browser-prompt). 
<br>
<img src="https://files.readme.io/326a605-Slidedown-DesktopMobile.jpg" width="800"/>
* *Desktop (Firefox/Chrome) and Android Chrome versions of Slide Prompt*

----

#Slide Prompt Customizations
[block:parameters]
{
  "data": {
    "h-0": "Customization",
    "h-1": "Details",
    "0-0": "[Icon](#add-slide-prompt-icon)",
    "0-1": "Recommended size `256 x 256` pixels",
    "1-0": "Text",
    "1-1": "Character Count:\n- Action Message: 90 characters\n- Buttons: 15 characters\nText color, size, font and links currently not available.",
    "2-0": "[Category Tags](#category-tags)",
    "2-1": "10 Max Categories/Tags. Can be triggered anytime.",
    "4-0": "Color, Size, Font, Add Links, Localization",
    "4-1": "Coming Soon",
    "3-0": "[Delayed Prompts](doc:permission-requests#delayed-prompts)",
    "3-1": "Set Delay for:\n- Total Page Views\n- Time on page\nPrompts can be [triggered](#triggering-the-prompt) programmatically as well for more control."
  },
  "cols": 2,
  "rows": 5
}
[/block]
##Add Slide Prompt Icon

Set the icon in your OneSignal Dashboard > Settings > All Browsers configuration > Default Icon URL. You can upload an image or paste a URL to the icon file.

Icon file must be `.png` or `.jpg` and at least `80x80` pixels (**Recommended** size is `256x256` pixels for Safari's requirements).

If you do not have a Default Notification Icon URL set, OneSignal will show a generic bell icon. This can always be changed later
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/320e511-Screen_Shot_2021-08-09_at_9.08.50_PM.png",
        "Screen Shot 2021-08-09 at 9.08.50 PM.png",
        1752,
        694,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
##Category Tags

The Category Slidedown works just like the regular Slide Prompt except it also allows subscribers to opt-in or out of notification categories set as [Data Tags](doc:add-user-data-tags). 

There is a maximum 10 categories/tags that can be set within the prompt. Users will be opted-in to all categories by default unless they uncheck the appropriate boxes. Unchecking certain boxes by default is not currently supported.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b6d047-Screen_Shot_2020-09-23_at_9.08.23_AM.png",
        "Screen Shot 2020-09-23 at 9.08.23 AM.png",
        509,
        488,
        "#efeff3"
      ]
    }
  ]
}
[/block]
See <a href="doc:category-prompt" target="_blank">Category Prompt</a> for more details.

#Setup Slide Prompt

<details>
<summary><b>Typical Setup</b> <i>(click to expand)</i></summary>
Navigate to **Settings > All Browsers > Permission Prompt** and select **Push Slide Prompt**. If you don't see it, select **Add Prompt > Push Prompt** to select it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af62049-Screen_Shot_2021-09-07_at_10.13.34_AM.png",
        "Screen Shot 2021-09-07 at 10.13.34 AM.png",
        1792,
        1710,
        "#f0f1f2"
      ]
    }
  ]
}
[/block]

Customizable options for Slide Prompt.
[block:parameters]
{
  "data": {
    "0-0": "**Customize slide prompt text**",
    "h-0": "Option",
    "h-1": "Details",
    "0-1": "Allows editing the message and button text. Not currently supported: Changing Font, Bold, Italicize, Color, adding links.",
    "1-0": "**Auto-prompt**",
    "1-1": "Show the prompt without additional code. Adds a delay on showing the prompt based on both time and/or number of page views.",
    "2-0": "**Page Views**",
    "2-1": "Amount of times the user visits a URL of your site with the OneSignal code. \n`0` or `1` page view is the first time they visit the site.",
    "3-0": "**Seconds**",
    "3-1": "Amount of time that needs to pass while the user is on the page of your site with the OneSignal code for the prompt to show. \n`0` seconds means show as soon as possible (after the site loads). \n`300` seconds means show after 5 minutes.",
    "4-0": "**Categories**",
    "4-1": "Turns on Category Slidedown feature. See <a href=\"doc:category-prompt\" target=\"_blank\">Category Prompt</a> for more details."
  },
  "cols": 2,
  "rows": 5
}
[/block]
You can combine **Page Views** and **Seconds** together. For example, if your common user visits your home page, another page and a 3rd page, you can set: `3` page views and `30` seconds. The prompt will show on the 3rd page and after `30` seconds has passed.

When ready, press **Done** and **Save** on the next page to update the settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbfac3b-Screen_Shot_2021-09-07_at_10.13.55_AM.png",
        "Screen Shot 2021-09-07 at 10.13.55 AM.png",
        1772,
        1148,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]
</details>

<details>
<summary><b>WordPress Setup</b> <i>(click to expand)</i></summary>

Currently you will need to add some Javascript to the site to customize the prompts.

See <a href="https://documentation.onesignal.com/docs/web-push-wordpress-faq#customizing-subscription-prompts" target="_blank">WordPress Customizations</a> for details.

</details>

<details>
<summary><b>Custom Code Setup</b> <i>(click to expand)</i></summary>
[block:callout]
{
  "type": "warning",
  "title": "The Custom Code Slidedown option schema change",
  "body": "As we add new slidedown types, we want you to be able to customize each prompt individually. Moving forward, you will have the ability to set text and delays for each specific prompt.\n\nNote that previous schemas will always remain backwards compatible.\n\nSlidedown configuration is now passed in via an array of options named `prompts`. Each element in the array corresponds to a specific slidedown type:\n\n```\n\n\"slidedown\": {\n  \"prompts\": [{...}, {...}, {...}]\n}\n```\n\nIf you list multiple options of the same type, the first one in the array of that type will be used."
}
[/block]
Slide Prompt Options:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.init({\n    // Your other init options here\n    promptOptions: {\n      slidedown: {\n        prompts: [\n          {\n            type: \"push\", // current types are \"push\" & \"category\"\n            autoPrompt: true,\n            text: {\n              /* limited to 90 characters */\n              actionMessage: \"We'd like to show you notifications for the latest news and updates.\",\n              /* acceptButton limited to 15 characters */\n              acceptButton: \"Allow\",\n              /* cancelButton limited to 15 characters */\n              cancelButton: \"Cancel\"\n            },\n            delay: {\n              pageViews: 1,\n              timeDelay: 20\n            }\n          }\n        ]\n      }\n    }\n    // END promptOptions, continue with other init options\n}",
      "language": "javascript",
      "name": "Example"
    }
  ]
}
[/block]
### Category Slidedown with Custom Code

See <a href="doc:category-prompt" target="_blank">Category Prompt</a> for more details.

</details>

-----

# Triggering the Prompt

The Slide Prompt can be shown to users automatically with [Delayed Prompts](doc:permission-requests#delayed-prompts).

You can also trigger these prompts programmatically if you want more control of when they are shown. Toggle off the **Auto-prompt** switch in Typical Setup or remove the delay code from Custom Code Setup. Then use the following functions to show the prompts:
[block:parameters]
{
  "data": {
    "0-0": "[Show Slidedown Prompt method](https://documentation.onesignal.com/docs/web-push-sdk#showslidedownprompt-method)",
    "0-1": "`OneSignal.showSlidedownPrompt()`",
    "h-0": "Prompt",
    "h-1": "Function"
  },
  "cols": 2,
  "rows": 1
}
[/block]
-----
# Slide Prompt FAQ

## How many times does the slide prompt show?
Please [follow this link for more details](doc:permission-requests#after-dismissing-a-web-push-prompt-when-is-the-prompt-shown-again).

## How do I show the prompt in different languages?
This will require the [Custom Code Setup](doc:web-push-custom-code-setup). When you detect the browser language with your own setup code, you can initialize OneSignal with the language you want to show.

## Why isn't my Slide Prompt showing up?
Even if you trigger `showSlidedownPrompt()`, it may not always show the message. The message will not be shown if any of the following are true:
- The user previously dismissed the message by clicking the "No Thanks" button
- HTTP sites: The user has blocked notifications for your-label.os.tc
- The user is already successfully subscribed to notifications
- You have manually opted out the user via our `setSubscription(false)` method
  - If you've intentionally disabled a user's permissions by calling setSubscription(false), you must manually opt the user back in by calling `setSubscription(true)` our drop-down prompt will not show.

If the prompt is not shown, the `showSlidedownPrompt()` method returns a Promise that resolves to a string value briefly describing the reason the prompt was not shown. You may also enable debug logging for the SDK via `OneSignal.log.setLevel('trace');` to see explanations of why the prompt is not shown.

## How to track Slide Prompt Events?

The OneSignal Web SDK has the [Slide Prompt Event Methods](doc:web-push-sdk#slide-prompt-events) to detect when it shows on the screen, when it is closed, and the "Allow" or "Cancel" action.