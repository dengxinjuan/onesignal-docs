---
title: "Bell Prompt"
slug: "bell-prompt"
excerpt: "OneSignal Subscription Bell Prompt Details: Customization, Triggering, and FAQ"
hidden: false
createdAt: "2019-03-04T07:11:16.028Z"
updatedAt: "2020-12-10T00:44:37.879Z"
---
The subscription bell prompt is a small widget that resides in the bottom corner of your site, which users can click to bring up the [Native Browser Prompt](doc:native-browser-prompt) for your site. It is designed to be small enough that you may keep it on your site at all times, and does not require users to dismiss it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ead46c-70a7cb8-Subscription_Button.png",
        "70a7cb8-Subscription_Button.png",
        500,
        272,
        "#efeded"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
----
## Customizing the Bell Prompt

You can customize the OneSignal Bell Prompt's color, size, bottom position, text and more! Currently you cannot customize the icon or place the bell in the top corners.

### Typical Setup Bell Customizations

All customizations happen within the [Settings](doc:settings) > **All Browsers** Configuration > [Step 3 Permission Prompt Setup](doc:web-push-typical-setup#section--span-class-step-step-3-span-permission-prompt-setup). Select the **Subscription Bell**.

There are many ways to customize the bell. Our recommendation would be to use the default settings, but change the **Color** to fit your site's unique color scheme.

When finished, press **Save** and **Save** again on the next page to see this go into effect.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2593b21-Screen_Shot_2019-03-03_at_10.51.01_PM.png",
        "Screen Shot 2019-03-03 at 10.51.01 PM.png",
        2356,
        2046,
        "#e7e7e8"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
### WordPress Bell Customizations

The OneSignal WordPress Plugin handles all available visual customizations through the plugin.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/tUETfKExzT8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n</div>"
}
[/block]
Under **Prompt Settings & Subscription Bell** turn on **Enable the Subscription Bell** to start toggling the customizations.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c79982b-Screen_Shot_2020-01-23_at_2.46.23_PM.png",
        "Screen Shot 2020-01-23 at 2.46.23 PM.png",
        1003,
        1207,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]
### Custom Code Setup Bell Customizations

The <span class="label-all label-developers">Custom Code</span> Setup is for integrating OneSignal with your own custom Javascript. It is recommended to use the [Typical Setup](doc:web-push-typical-setup).

Use the `notifyButton` parameter in your web SDK initialization options. You may toggle between different examples for Bell Prompt customizations.

**Colors:** You can override the theme's colors by entering your own. Values are strings which are then interpreted by CSS, so any CSS-valid color works as each value. 
**Examples:** `white`, `#FFFFFF`, `#FFF`, `rgb(255, 255, 255)`, `rgba(255, 255, 255, 1.0)`, and `transparent` are all valid values.

**Hiding:** To hide the subscription bell after a user subscribes or only show it on certain pages, be sure to return the value `false` *or* a `Promise` that resolves to the value `false` in the `displayPredicate` function during initialization. This function is evaluated before the subscription bell is shown. You may return any other value to show the subscription bell.
[block:code]
{
  "codes": [
    {
      "code": "// Your other init options here\nnotifyButton: {\n    enable: true, /* Required to use the Subscription Bell */\n    size: 'medium', /* One of 'small', 'medium', or 'large' */\n    theme: 'default', /* One of 'default' (red-white) or 'inverse\" (white-red) */\n    position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */\n    offset: {\n        bottom: '0px',\n        left: '0px', /* Only applied if bottom-left */\n        right: '0px' /* Only applied if bottom-right */\n    },\n    showCredit: false, /* Hide the OneSignal logo */\n    text: {\n        'tip.state.unsubscribed': 'Subscribe to notifications',\n        'tip.state.subscribed': \"You're subscribed to notifications\",\n        'tip.state.blocked': \"You've blocked notifications\",\n        'message.prenotify': 'Click to subscribe to notifications',\n        'message.action.subscribed': \"Thanks for subscribing!\",\n        'message.action.resubscribed': \"You're subscribed to notifications\",\n        'message.action.unsubscribed': \"You won't receive notifications again\",\n        'dialog.main.title': 'Manage Site Notifications',\n        'dialog.main.button.subscribe': 'SUBSCRIBE',\n        'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',\n        'dialog.blocked.title': 'Unblock Notifications',\n        'dialog.blocked.message': \"Follow these instructions to allow notifications:\"\n    }\n}",
      "language": "javascript",
      "name": "Text & Basic Options"
    },
    {
      "code": "// Your other init options here\nnotifyButton: {\n  enable: true, // Required to use the Subscription Bell\n  // Your other Subscription Bell settings here\n  colors: { // Customize the colors of the main button and dialog popup button\n    'circle.background': 'rgb(84,110,123)',\n    'circle.foreground': 'white',\n    'badge.background': 'rgb(84,110,123)',\n    'badge.foreground': 'white',\n    'badge.bordercolor': 'white',\n    'pulse.color': 'white',\n    'dialog.button.background.hovering': 'rgb(77, 101, 113)',\n    'dialog.button.background.active': 'rgb(70, 92, 103)',\n    'dialog.button.background': 'rgb(84,110,123)',\n    'dialog.button.foreground': 'white'\n  },\n}",
      "language": "javascript",
      "name": "Colors"
    },
    {
      "code": "// Your other init options here\nnotifyButton: {\n    /* Your other Subscription Bell settings here ... */\n    enable: true,\n     displayPredicate: function() {\n        return OneSignal.isPushNotificationsEnabled()\n            .then(function(isPushEnabled) {\n                /* The user is subscribed, so we want to return \"false\" to hide the Subscription Bell */\n                return !isPushEnabled;\n            });\n    },\n}",
      "language": "javascript",
      "name": "Hiding"
    },
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_APP_ID\",\n      notifyButton: {\n        enable: true, /* Required to use the Subscription Bell */\n      /* SUBSCRIPTION BELL CUSTOMIZATIONS START HERE */\n        size: 'medium', /* One of 'small', 'medium', or 'large' */\n        theme: 'default', /* One of 'default' (red-white) or 'inverse\" (white-red) */\n        position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */\n        offset: {\n            bottom: '0px',\n            left: '0px', /* Only applied if bottom-left */\n            right: '0px' /* Only applied if bottom-right */\n        },\n        showCredit: false, /* Hide the OneSignal logo */\n        text: {\n            'tip.state.unsubscribed': 'Subscribe to notifications',\n            'tip.state.subscribed': \"You're subscribed to notifications\",\n            'tip.state.blocked': \"You've blocked notifications\",\n            'message.prenotify': 'Click to subscribe to notifications',\n            'message.action.subscribed': \"Thanks for subscribing!\",\n            'message.action.resubscribed': \"You're subscribed to notifications\",\n            'message.action.unsubscribed': \"You won't receive notifications again\",\n            'dialog.main.title': 'Manage Site Notifications',\n            'dialog.main.button.subscribe': 'SUBSCRIBE',\n            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',\n            'dialog.blocked.title': 'Unblock Notifications',\n            'dialog.blocked.message': \"Follow these instructions to allow notifications:\"\n        },\n        colors: { // Customize the colors of the main button and dialog popup button\n           'circle.background': 'rgb(84,110,123)',\n           'circle.foreground': 'white',\n           'badge.background': 'rgb(84,110,123)',\n           'badge.foreground': 'white',\n           'badge.bordercolor': 'white',\n           'pulse.color': 'white',\n           'dialog.button.background.hovering': 'rgb(77, 101, 113)',\n           'dialog.button.background.active': 'rgb(70, 92, 103)',\n           'dialog.button.background': 'rgb(84,110,123)',\n           'dialog.button.foreground': 'white'\n         },\n        /* HIDE SUBSCRIPTION BELL WHEN USER SUBSCRIBED */\n        displayPredicate: function() {\n            return OneSignal.isPushNotificationsEnabled()\n                .then(function(isPushEnabled) {\n                    return !isPushEnabled;\n                });\n        }\n      }\n    });\n  });\n</script>",
      "language": "javascript",
      "name": "HTTPS Full Example Code"
    },
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_APP_ID\",\n      subdomainName: \"your_label\", /* The label for your site that you added in Site Setup mylabel.os.tc */\n      notifyButton: {\n        enable: true, /* Required to use the Subscription Bell */\n      /* SUBSCRIPTION BELL CUSTOMIZATIONS START HERE */\n        size: 'medium', /* One of 'small', 'medium', or 'large' */\n        theme: 'default', /* One of 'default' (red-white) or 'inverse\" (white-red) */\n        position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */\n        offset: {\n            bottom: '0px',\n            left: '0px', /* Only applied if bottom-left */\n            right: '0px' /* Only applied if bottom-right */\n        },\n        showCredit: false, /* Hide the OneSignal logo */\n        text: {\n            'tip.state.unsubscribed': 'Subscribe to notifications',\n            'tip.state.subscribed': \"You're subscribed to notifications\",\n            'tip.state.blocked': \"You've blocked notifications\",\n            'message.prenotify': 'Click to subscribe to notifications',\n            'message.action.subscribed': \"Thanks for subscribing!\",\n            'message.action.resubscribed': \"You're subscribed to notifications\",\n            'message.action.unsubscribed': \"You won't receive notifications again\",\n            'dialog.main.title': 'Manage Site Notifications',\n            'dialog.main.button.subscribe': 'SUBSCRIBE',\n            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',\n            'dialog.blocked.title': 'Unblock Notifications',\n            'dialog.blocked.message': \"Follow these instructions to allow notifications:\"\n        },\n        colors: { // Customize the colors of the main button and dialog popup button\n           'circle.background': 'rgb(84,110,123)',\n           'circle.foreground': 'white',\n           'badge.background': 'rgb(84,110,123)',\n           'badge.foreground': 'white',\n           'badge.bordercolor': 'white',\n           'pulse.color': 'white',\n           'dialog.button.background.hovering': 'rgb(77, 101, 113)',\n           'dialog.button.background.active': 'rgb(70, 92, 103)',\n           'dialog.button.background': 'rgb(84,110,123)',\n           'dialog.button.foreground': 'white'\n         },\n        /* HIDE SUBSCRIPTION BELL WHEN USER SUBSCRIBED */\n        displayPredicate: function() {\n            return OneSignal.isPushNotificationsEnabled()\n                .then(function(isPushEnabled) {\n                    return !isPushEnabled;\n                });\n        }\n      }\n    });\n  });\n</script>",
      "language": "javascript",
      "name": "HTTP Full Example Code"
    }
  ]
}
[/block]
----
## Triggering the Bell Prompt
Enabled through the Typical Setup Configuration or WordPress Plugin.

For [Custom Code Setup](doc:web-push-custom-code-setup). 
**Show:** `notifyButton: { enable: true }`
**Don't Show:** `notifyButton: { enable: false }`
[block:callout]
{
  "type": "info",
  "title": "Best Practice!",
  "body": "We recommend showing the bell prompt or [Custom Link prompt](doc:custom-link-prompt) on at least one page to allow users the ability to subscribe or unsubscribe anytime."
}
[/block]
-----
## Bell Prompt FAQ

### Can I change the bell icon?
You cannot change the bell image, but you can change the colors, text and put it on the bottom left of bottom right of the page.

### How many times does the prompt show?
If a user clicks "No" on the slide prompt, it waits 3 days before showing again. If they click "No" again, it takes 7 days to show again. If they click "No" a 3rd time, it will show again every 30 days.

### Why is the Native Prompt not showing up?
A browser's permission request may not show when triggered if one of the three conditions is true:
- The user has already allowed notifications
- The user is already subscribed
- The user blocked notifications