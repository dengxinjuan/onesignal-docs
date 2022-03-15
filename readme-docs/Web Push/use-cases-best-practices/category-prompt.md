---
title: "Category Prompt"
slug: "category-prompt"
excerpt: "Instructions for setting up and using the Category Slide Prompt"
hidden: false
createdAt: "2021-09-07T16:36:13.359Z"
updatedAt: "2021-09-07T18:02:04.419Z"
---
<img src="https://files.readme.io/6b6d047-Screen_Shot_2020-09-23_at_9.08.23_AM.png" width="600"/>

The Category Slide Prompt is a feature of the OneSignal Slide Prompt that allows you to add up to 10 categories that your users can check to opt-in and out of receiving certain notifications. You have full control over which categories are presented to the user.

Upon subscription, all categories will be set as Data Tags on the device with the tag key provided and a value of `1` for checked and `0` for unchecked. 

#Step 1. Setup

Follow the below instructions based on your setup:


<details>
<summary><b>Typical Setup</b> <i>(click to expand)</i></summary>
Navigate to **Settings > All Browsers > Permission Prompt** and select **Push Slide Prompt**. If you don't see it, select **Add Prompt > Push Prompt** to select it.

Toggle on the **Categories** section on the left.

**Add your categories:** 
- The "Tag Key" is the data tag key used for segmentation. Tags are case sensitive! Recommended to use lower case letters and underscore (`_`) instead of spaces but not required. This will have a value of `1` if selected and `0` if not selected by user.
- The "Label" is what the user will see when selecting the category.

**Update Instructions & Buttons**
You can change the message and buttons for the Slide Prompt when Categories are present.
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
Press **Done** and **Save** on the next page to update the settings.
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

###Step 1. Disable the Plugin Prompts
Open OneSignal WordPress Plugin and scroll to "Prompt Settings & Subscription Bell".

Toggle **off** the Slide and Native Prompt in the OneSignal Plugin. You can keep the Bell enabled if you want.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ff12526-Screen_Shot_2021-09-01_at_11.03.54_AM.png",
        "Screen Shot 2021-09-01 at 11.03.54 AM.png",
        2676,
        1054,
        "#e0dbdc"
      ]
    }
  ]
}
[/block]
###Step 2. Switch to a manual initialization of OneSignal

Scroll to the bottom of the plugin settings and **toggle on** "Disable OneSignal initialization". 

Press **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ba0ca1-Screen_Shot_2021-08-09_at_8.32.28_PM.png",
        "Screen Shot 2021-08-09 at 8.32.28 PM.png",
        1798,
        606,
        "#d2d5d7"
      ]
    }
  ]
}
[/block]
###Step 3. Add custom JavaScript code to your site. 

If you don't have a way to add JavaScript to your site, try the the [Insert Headers and Footers by WPBeginner](https://wordpress.org/plugins/insert-headers-and-footers/) plugin or [Custom CSS & JS](https://wordpress.org/plugins/custom-css-js/) WordPress plugin.

###Step 4. Code Examples 

Example code for adding Categories.

**Add your categories:** 
- The `tag` is the data tag key used for segmentation. Tags are case sensitive! Recommended to use lower case letters and underscore (`_`) instead of spaces but not required. This will have a value of `1` if selected and `0` if not selected by user.
- The `label` is what the user will see when selecting the category.
[block:code]
{
  "codes": [
    {
      "code": "setTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window.addEventListener('load', function() {\n    window._oneSignalInitOptions.promptOptions = {\n      slidedown: {\n        prompts: [\n          {\n            type: \"category\",\n            autoPrompt: true,\n            text: {\n              /* actionMessage limited to 90 characters */\n              actionMessage: \"Your Custom Action Message\",\n              /* acceptButton limited to 15 characters */\n              acceptButtonText: \"Yes\",\n              /* cancelButton limited to 15 characters */\n              cancelButtonText: \"No\",\n              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */\n              negativeUpdateButton:\"Cancel\",\n              positiveUpdateButton:\"Save Preferences\",\n              updateMessage: \"Update your push notification subscription preferences.\",\n            },\n            delay: {\n              timeDelay: 1,//seconds to wait for display\n              pageViews: 1,//# pageviews for prompt to display\n            },\n            categories: [\n              {\n                tag: \"politics\",\n                label: \"Politics\",\n              },\n              {\n                tag: \"local_news\",\n                label: \"Local News\",\n              },\n              {\n                tag: \"world_news\",\n                label: \"World News\",\n              },\n              {\n                tag: \"culture\",\n                label: \"Culture\",\n              }\n            ]\n          }\n        ]\n      }\n    }\n    window.OneSignal = window.OneSignal || [];\n    window.OneSignal.push(function() {\n      window.OneSignal.init(window._oneSignalInitOptions);\n    });\n  });\n}, 3000);",
      "language": "javascript",
      "name": "Delay with Categories Example"
    }
  ]
}
[/block]
</details>

<details>
<summary><b>Custom Code Setup</b> <i>(click to expand)</i></summary>

You can activate the Category Slidedown via custom code by passing in a special parameter `categories` to the slidedown option object. This parameter should be an array of objects containing `tag` and `label` parameters. Note: make sure the prompt option type is set to `"category"`. 

**Add your categories:** 
- The `tag` is the data tag key used for segmentation. Tags are case sensitive! Recommended to use lower case letters and underscore (`_`) instead of spaces but not required. This will have a value of `1` if selected and `0` if not selected by user.
- The `label` is what the user will see when selecting the category.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.init({\n    // Your other init options here\n    promptOptions: {\n      slidedown: {\n        prompts: [\n          {\n            type: \"category\",\n            autoPrompt: true,\n            text: {\n              actionMessage: \"We'd like to show you notifications for the latest news and updates.\",\n              acceptButton: \"Allow\",\n              cancelButton: \"Cancel\",\n\n              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */\n              negativeUpdateButton:\"Cancel\",\n              positiveUpdateButton:\"Save Preferences\",\n              updateMessage: \"Update your push notification subscription preferences.\",\n            },\n            delay: {\n              pageViews: 1,\n              timeDelay: 20\n            },\n            categories: [\n              {\n                tag: \"politics\",\n                label: \"Politics\"\n              },\n              {\n                tag: \"local_news\",\n                label: \"Local News\"\n              },\n              {\n                tag: \"world_news\",\n                label: \"World News\",\n              },\n              {\n                tag: \"culture\",\n                label: \"Culture\"\n              },\n            ]\n          }\n        ]\n      }\n    }\n    // END promptOptions, continue with other init options\n}",
      "language": "javascript"
    }
  ]
}
[/block]

There are three special `text` parameters used solely with the Category Slidedown. These are used in the case that the Category Slidedown is reshown (e.g: to allow for the updating of preferences).

[block:parameters]
{
  "data": {
    "h-0": "`text` parameter",
    "h-1": "type",
    "h-2": "description",
    "0-0": "`updateMessage`",
    "0-1": "`string`",
    "0-2": "**Optional**\nThis is the message shown whenever the Category Slidedown is re-shown (the user is already subscribed).\n\nLimit: 90 chars\n\nDefault: \"Update your push notification subscription preferences.\"",
    "1-0": "`positiveUpdateButton`",
    "1-1": "`string`",
    "1-2": "**Optional**\nThis is the text that will be displayed on the positive button whenever the Category Slidedown is re-shown (the user is already subscribed).\n\nLimit: 15 chars\n\nDefault: \"Save Preferences\"",
    "2-0": "`negativeUpdateButton`",
    "2-1": "`string`",
    "2-2": "**Optional**\nThis is the text that will be displayed on the negative button whenever the Category Slidedown is re-shown (the user is already subscribed).\n\nLimit: 15 chars\n\nDefault: \"Cancel\""
  },
  "cols": 3,
  "rows": 3
}
[/block]

</details>

# Triggering the Prompt

The Category Prompt can be shown to users automatically with [Delayed Prompts](doc:permission-requests#delayed-prompts).

You can also trigger these prompts programmatically if you want more control of when they are shown. Toggle off the **Auto-prompt** switch in Typical Setup or remove the delay code from Custom Code Setup. Then use the following functions to show the prompts:
[block:parameters]
{
  "data": {
    "h-0": "Prompt",
    "h-1": "Function",
    "0-1": "`OneSignal.showCategorySlidedown()`",
    "0-0": "[Show Category Slidedown method](doc:web-push-sdk#showcategoryslidedown)"
  },
  "cols": 2,
  "rows": 1
}
[/block]
## How to show the category slidedown to users already subscribed?

The category slide prompt, will tag the user with a `key` you of your choice and value of `1` if user checks or `0` if unchecked.

For example, if you set `breaking_news` as a tag and the user selects it, the tag will be `breaking_news`: `1`. If they uncheck it, they will have `breaking_news`: `0`.

In either case, if the user is subscribed and selects or does not select this category/tag, it will be active on the device.

Using this knowledge with the OneSignal `getTags` method, we can detect if the device has any of these categories and present the prompt if not. Using the `breaking_news` tag for example:
[block:code]
{
  "codes": [
    {
      "code": "// set how many page visits till show prompt again\nvar numVisitsTrigger = 3;\n\nif (typeof localStorage !== \"undefined\") {\n    var visitNumber = parseInt(localStorage.getItem(\"visitNumber\"), 10);\n    if (!isNaN(visitNumber)) {\n        visitNumber += 1;\n    } else {\n        visitNumber = 0;\n    }\n    localStorage.setItem(\"visitNumber\", visitNumber)\n\n    if ((numVisitsTrigger % visitNumber) === 0) {\n        console.log(\"visitNumber is a multiple of number of visits\")\n        OneSignal.push(function() {\n            OneSignal.getTags(function(tags) {\n                console.log(tags.breaking_news)\n                if (!tags.breaking_news) {\n                    OneSignal.showCategorySlidedown();\n                }\n            })\n        });\n    }\n}\n",
      "language": "javascript"
    }
  ]
}
[/block]

----

#Step 2. Segments Setup

Navigate to **Audience > Segments** and select **New Segment**.

Select the **User Tag** filter and set the `key` field to the name of one of your categories. Then set the `value` field to `1`.

**Note**: Tags are case sensitive. You need to use the same tag key you setup in the prompt.

Name your segment and click **Create Segment**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/849ac4c-Screen_Shot_2021-09-07_at_10.44.30_AM.png",
        "Screen Shot 2021-09-07 at 10.44.30 AM.png",
        1342,
        798,
        "#ebedef"
      ]
    }
  ]
}
[/block]
Now, any subscriber that selects the "Breaking News" category will be automatically put inside this segment.

To quickly create your other segments, select **Options > Duplicate** and update the Segment name and tag key accordingly.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aeec53f-Screen_Shot_2021-09-07_at_10.47.45_AM.png",
        "Screen Shot 2021-09-07 at 10.47.45 AM.png",
        1720,
        440,
        "#f1f3f4"
      ]
    }
  ]
}
[/block]

----

#Step 3. Send Messages

Now, whenever you send messages, you can target the users within these segments.

If you are using [Create notification](ref:create-notification) API, you can also use `filters` and target: `filters: [{"field": "tag", "key": "breaking_news", "relation": "=", "value": "1"}]`.


----

#FAQ

##Can I change the categories based on page?

Yes! This will require using the [Custom Code Setup](doc:web-push-custom-code-setup) and adding the categories through code based on the above setup configurations.