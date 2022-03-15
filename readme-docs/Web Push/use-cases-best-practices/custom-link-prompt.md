---
title: "Custom Link prompt"
slug: "custom-link-prompt"
hidden: false
createdAt: "2018-07-30T23:39:32.998Z"
updatedAt: "2019-05-16T23:37:23.305Z"
---
The custom link prompt provides prompting for push notification permissions through a link or button you can place anywhere on your site. Simply add the `"onesignal-customlink-container"` CSS class to any div HTML tag on your site to use and enable the prompting option on the OneSignal dashboard or though OneSignal.init if you are using a custom setup. This provides more customization and a less intrusive user experience so this is recommend over other prompting options.

**Allows for the following customizations:**
* Size
* Explanation text (optional)
* Subscribe text (defaults to "Subscribe to push notifications")
* Flag to show/not to show unsubscribe button (defaults to show)
* Unsubscribe text (defaults to "Unsubscribe from push notifications")
* Colors
  * Button color (button mode only)
  * Text color
[block:api-header]
{
  "type": "basic",
  "title": "Best practices"
}
[/block]
This is the recommended way of prompting your users to subscribe. Auto-prompts could be too aggressive if not shown at the right time. Placing a custom link widget in a noticeable spot on your web site will serve its purpose but also will make your users feel like you care about them by not being obtrusive.

**A few examples of where it could be a good idea to have a prompt:**
* Adding a question right after an article: "Liked this article? Want to get more updates delivered to your desktop?"
* In the footer of your site.
* Having a sign up in a sticky pane at the top/bottom of your site.
* And many more...

And you can combine them as well. Please also note that the approaches may differ based on the device type a user is viewing from.



[block:callout]
{
  "type": "info",
  "title": "WordPress Users",
  "body": "Currently the Custom Link Prompt will only work on the [Typical Setup](doc:web-push-typical-setup) or [Custom Code Setup](doc:web-push-custom-code-setup).\n\nWordpress Users have 2 options:\n1 - Switch to the [Custom Code Setup](doc:web-push-custom-code-setup) and follow the [Custom Link Setup below](#section-custom-code-setup).\n\n2 - Create your own custom link with [code provided here](doc:web-push-custom-code-examples#section-custom-link-prompt)\n\nEither option will require adding code directly to your site."
}
[/block]

[block:api-header]
{
  "title": "Typical Site Setup"
}
[/block]
### Step 1. Choose Integration Type

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Typical Site** to continue.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/51856f4-Screen_Shot_2018-07-31_at_3.10.18_PM.png",
        "Screen Shot 2018-07-31 at 3.10.18 PM.png",
        2306,
        660,
        "#c2c4c5"
      ]
    }
  ]
}
[/block]
### Step 2. Add Prompts

Choose to add a custom link as one of the prompt actions, customize the appearance to fit your color schema and save
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/321fa5c-Screen_Shot_2018-07-24_at_11.28.20_AM.png",
        "Screen Shot 2018-07-24 at 11.28.20 AM.png",
        2404,
        1842,
        "#e2e2e2"
      ]
    }
  ]
}
[/block]
### Step 3. Add Markup

Add the container markup to your page(s). Our dashboard will give you guidance on every step.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb38caa-Screen_Shot_2018-07-24_at_11.38.11_AM.png",
        "Screen Shot 2018-07-24 at 11.38.11 AM.png",
        2392,
        1476,
        "#edeeee"
      ]
    }
  ]
}
[/block]
You can change the appearance later from the dashboard and the changes will automatically be applied without updating your code again.
[block:api-header]
{
  "title": "Custom Code Setup"
}
[/block]
### Step 1. Choose Integration Type

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Custom Code** to continue and save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a01a9a0-Screen_Shot_2018-07-31_at_3.10.28_PM.png",
        "Screen Shot 2018-07-31 at 3.10.28 PM.png",
        2298,
        702,
        "#c5c7c9"
      ]
    }
  ]
}
[/block]
### Step 2. Add Markup

Add the following markup on your page where you want the widget to render.
[block:code]
{
  "codes": [
    {
      "code": "<div class='onesignal-customlink-container'></div>",
      "language": "html"
    }
  ]
}
[/block]
### Step 3. Provide configuration

Use the **promptOptions** -> **customlink** parameter in your web SDK initialization options.
[block:code]
{
  "codes": [
    {
      "code": "// Your other init options here\npromptOptions: {\n  customlink: {\n    enabled: true, /* Required to use the Custom Link */\n    style: \"button\", /* Has value of 'button' or 'link' */\n    size: \"medium\", /* One of 'small', 'medium', or 'large' */\n    color: {\n      button: '#E12D30', /* Color of the button background if style = \"button\" */\n      text: '#FFFFFF', /* Color of the prompt's text */\n    },\n    text: {\n      subscribe: \"Subscribe to push notifications\", /* Prompt's text when not subscribed */\n      unsubscribe: \"Unsubscribe from push notifications\", /* Prompt's text when subscribed */\n      explanation: \"Get updates from all sorts of things that matter to you\", /* Optional text appearing before the prompt button */\n    },\n    unsubscribeEnabled: true, /* Controls whether the prompt is visible after subscription */\n  }\n}",
      "language": "javascript"
    }
  ]
}
[/block]
Provides fallback defaults in case some settings are missing.
[block:api-header]
{
  "title": "Styling"
}
[/block]
To keep things simple and to get the flexibility of changing the appearance of the widget at any time through dashboard all you have to add to your markup is a div container with our special class name. If for some reason you find our styling to configurable enough there are a way to customize it further.

All elements have a special class **onesignal-reset** that removes any prior styling from the element to make sure there are no conflict with our internal styles and that it looks exactly as you've defined it in the dashboard.

If you ever find yourself in need to redefine any OneSignal styles, here is a short reference of the classes used in the Custom Link widget
[block:parameters]
{
  "data": {
    "h-0": "Class Name",
    "0-0": "onesignal-customlink-container",
    "1-0": "onesignal-customlink-subscribe",
    "2-0": "onesignal-customlink-explanation",
    "0-1": "Main container",
    "1-1": "Action button",
    "2-1": "Paragraph with a custom explanation text",
    "3-0": "state-subscribed",
    "4-0": "state-unsubscribed",
    "5-0": "button",
    "6-0": "link",
    "7-0": "small",
    "8-0": "medium",
    "9-0": "large",
    "10-0": "hide",
    "3-1": "All components internal to the main container",
    "h-1": "Applies to",
    "4-1": "All components internal to the main container",
    "5-1": "Action button if in button mode",
    "6-1": "Action button if in link mode",
    "7-1": "All components internal to the main container",
    "8-1": "All components internal to the main container",
    "9-1": "All components internal to the main container",
    "10-1": "All components internal to the main container if unsubscribeEnabled is set to false"
  },
  "cols": 2,
  "rows": 11
}
[/block]
To override any of them you have to create a CSS rule with higher specificity, combining the class name with the parent element id should be enough. But beware of the conflicts, our internal styles may change.