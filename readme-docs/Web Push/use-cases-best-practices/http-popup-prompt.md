---
title: "HTTP PopUp Prompt"
slug: "http-popup-prompt"
excerpt: "OneSignal HTTP Pop-Up Prompt Details: Customizations, Triggering, and FAQ"
hidden: false
createdAt: "2019-03-07T06:55:51.364Z"
updatedAt: "2021-05-20T16:45:06.893Z"
---
[block:callout]
{
  "type": "warning",
  "body": "The HTTP Pop-Up Prompt is required for **HTTP** sites.",
  "title": "Requirement"
}
[/block]
**HTTP ONLY** - The HTTP Pop-Up Prompt comes up after a user clicks on another prompt like our Subscription Bell, Slide Prompt, or Custom Link. 

This shows an example notification in the middle to help give users the understanding they are about to subscribe to push notifications.

The HTTP Pop-Up Prompt is presented in a separate pop-up window:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/91f0739-KuQcvEV.png",
        "KuQcvEV.png",
        2910,
        1697,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]

----

## Customizing the HTTP Pop-Up Prompt

You can customize most text on the HTTP Pop-Up Prompt except the URL on the notification image (yourlabel.os.tc). You may enter text in your own language, but please note all fields are limited in length (usually to one line of text). Any fields you do not define will use their defaults.

Currently you cannot customize the color, size, or font.

You edit the icon in [Step 2 Default Icon URL](doc:web-push-typical-setup#step-2-site-setup).

*If you do not have a Default Notification Icon URL set, OneSignal will show a generic icon.*

### Typical Setup HTTP Pop-Up Customizations

Text customizations happen within **Settings > All Browsers Configuration > Step 3 Permission Prompt Setup**. Select the **HTTP Pop-Up** and toggle the **Customize HTTP Pop-Up Prompt text** to begin editing the message and button text.

When finished, press **Save** and **Save** again on the next page to see this go into effect.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/80c1dce-Screen_Shot_2019-03-06_at_11.05.45_PM.png",
        "Screen Shot 2019-03-06 at 11.05.45 PM.png",
        2372,
        2060,
        "#e7e7e8"
      ]
    }
  ]
}
[/block]
### WordPress HTTP Pop-Up Customizations

The OneSignal WordPress Plugin handles all available visual customizations through the plugin.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/tUETfKExzT8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n</div>"
}
[/block]
### Custom Code Setup HTTP Pop-Up Customizations

The **Custom Code** Setup is for integrating OneSignal with your own custom Javascript. It is recommended to use the [Typical Setup](doc:web-push-typical-setup).

You may customize the text in the HTTP Pop-Up Prompt by using the `promptOptions` parameter in your [init()](web-push-sdk#init) options.
[block:code]
{
  "codes": [
    {
      "code": "// Your other init options here\npromptOptions: {\n    /* Change bold title, limited to 30 characters */\n    siteName: 'OneSignal Documentation',\n    /* Subtitle, limited to 90 characters */\n    actionMessage: \"We'd like to show you notifications for the latest news and updates.\",\n    /* Example notification title */\n    exampleNotificationTitle: 'Example notification',\n    /* Example notification message */\n    exampleNotificationMessage: 'This is an example notification',\n    /* Text below example notification, limited to 50 characters */\n    exampleNotificationCaption: 'You can unsubscribe anytime',\n    /* Accept button text, limited to 15 characters */\n    acceptButtonText: \"ALLOW\",\n    /* Cancel button text, limited to 15 characters */\n    cancelButtonText: \"NO THANKS\",\n    autoAcceptTitle: 'Click Allow'\n}",
      "language": "javascript",
      "name": "HTTP Pop-Up Parameters Example"
    },
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_APP_ID\",\n      subdomainName: \"your_label\", /* The label for your site that you added in Site Setup mylabel.os.tc */\n      promptOptions: {\n        /* Change bold title, limited to 30 characters */\n        siteName: 'OneSignal Documentation',\n        /* Subtitle, limited to 90 characters */\n        actionMessage: \"We'd like to show you notifications for the latest news and updates.\",\n        /* Example notification title */\n        exampleNotificationTitle: 'Example notification',\n        /* Example notification message */\n        exampleNotificationMessage: 'This is an example notification',\n        /* Text below example notification, limited to 50 characters */\n        exampleNotificationCaption: 'You can unsubscribe anytime',\n        /* Accept button text, limited to 15 characters */\n        acceptButtonText: \"ALLOW\",\n        /* Cancel button text, limited to 15 characters */\n        cancelButtonText: \"NO THANKS\",\n        autoAcceptTitle: 'Click Allow'\n    }\n    });\n    OneSignal.showHttpPrompt();\n  });\n</script>",
      "language": "javascript",
      "name": "HTTP Full Example Code"
    }
  ]
}
[/block]

----
## Triggering the HTTP Pop-Up  Prompt

You can trigger the HTTP Pop-Up Prompt programmatically within the init code or use the `OneSignal.showHttpPrompt();` to show at your leisure. Example below checks if user is subscribed first, then triggers the prompt.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n    if (isEnabled)\n      console.log(\"Push notifications are already enabled!\");\n    else\n      console.log(\"Push notifications are not enabled yet.\");\n      OneSignal.showHttpPrompt();\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
The HTTP Pop-Up Prompt gets triggered immediately after a user clicks the OneSignal Slide Prompt, Bell Prompt, or Custom Link Prompt.

-----

## HTTP Pop-Up Prompt FAQ

### How do I show the prompt in different languages?
This will require the [Custom Code Setup](doc:web-push-custom-code-setup). When you detect the browser language with your own setup code, you can initialize OneSignal with the language you want to show.