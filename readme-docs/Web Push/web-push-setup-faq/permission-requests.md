---
title: "Prompting"
slug: "permission-requests"
excerpt: "Prompts & Permission Requests to Subscribe Users to Push Notifications"
hidden: false
createdAt: "2016-09-20T08:30:47.624Z"
updatedAt: "2021-09-07T18:29:29.134Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d3cea2-desktop_chrome_slideprompt_categories.gif",
        "desktop_chrome_slideprompt_categories.gif",
        552,
        338,
        "#8baca1"
      ],
      "caption": "Example showing the Slide Prompt with Category Tags."
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d8e765-android_chrome_slideprompt.gif",
        "android_chrome_slideprompt.gif",
        240,
        533,
        "#97aea7"
      ],
      "caption": "Example Slide Prompt with Category Tags on Android."
    }
  ]
}
[/block]

# Web Prompting Overview

"Prompting" is asking user's permission to send them push notifications. Prompts are pop-up messages presented by the browser or mobile app and require the user to click "Allow" to be subscribed.

If you have a mobile app, see our [iOS Prompt Guide](doc:ios-push-opt-in-prompt). Android Mobile App devices don't need to be prompted, they get subscribed when opening your app for the first time.

Web Push works on Desktop and Android. [Apple does not support web push on iOS like iPhone and iPad](https://onesignal.com/blog/the-state-of-ios-web-push-in-2020/). Browsers provides their own [Native Permission Prompt](#native-permission-prompt) which is required to be both shown and clicked "Allow" for the user to subscribe to your website.

Browsers now [highly recommend websites be more selective](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting) when it comes to showing the Native Permission Prompt. This is why using [OneSignal Prompts](#onesignal-prompts) or your own custom "soft prompts" before the native prompt are encouraged.

----
# OneSignal Prompts

OneSignal provides "soft prompts" that are shown before the Native Permission Prompt and engage the user to select categories they are interested in getting messages about and provide phone or email. These prompts do not replace the native prompt and do not subscribe the user to web push. 

These prompts are beneficial because they increase the likelihood users will stay subscribed to your messages and are [highly recommended by the browsers](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/). Permission prompts do three things:

1. Inform a user of the value of subscribing to Push Notifications, Email and SMS
2. Prevent users from being blocked from subscribing.
3. Trigger a Native Prompt, if users indicate intent.

OneSignal Prompts are a 'soft request', meaning that they are not invoking the 'hard request' of the browser's Native Permission Prompt. This is important because if a user denies the native prompt, the developer **is unable to prompt the user again**, unless the user goes through a multi-step process to re-enable these permissions. On the other hand, if a user dismisses a Soft Prompt, the app or website can still present them the option later on.

## Slide Prompt

The Slide Prompt displays on top of your site, in the top center of the browser (bottom center on Android). 
[block:parameters]
{
  "data": {
    "0-0": "[Learn more about the Slide Prompt](doc:slide-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]
<img src="https://files.readme.io/94b280b-Slidedown_PrePermission_Message.png"/>

## Category Slidedown

The Category Slidedown works just like the regular Slide Prompt except it also allows subscribers to opt-in or out of notification categories. The Category Slidedown is configurable through the dashboard for Typical Site setup and can also be configured via custom code.

[block:parameters]
{
  "data": {
    "0-0": "Learn more about [Category Slidedown](doc:category-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e120f0e-Screen_Shot_2020-07-21_at_6.17.41_PM.png",
        "Screen Shot 2020-07-21 at 6.17.41 PM.png",
        741,
        573,
        "#efeff1"
      ]
    }
  ]
}
[/block]

## Email & Phone Number Web Prompt

The Email & Phone Number Slidedown adds optional text fields for users to add email, phone number or both. The Category Slidedown is configurable through the dashboard for Typical Site setup and can also be [configured via custom code](doc:email-phone-number-web-prompt#custom-code-setup).

[block:parameters]
{
  "data": {
    "0-0": "Learn more about [Email & Phone Number Slidedown](doc:email-phone-number-web-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6980284-Screen_Shot_2021-05-10_at_8.31.28_AM.png",
        "Screen Shot 2021-05-10 at 8.31.28 AM.png",
        1034,
        792,
        "#dcdddf"
      ]
    }
  ]
}
[/block]


## Subscription Bell

The subscription bell is a small widget that resides in the lower left or right corner of your site, which users can click to bring up the Native Permission Prompt for your site. It is designed to be small enough that you may keep it on your site at all times, and does not require users to dismiss it. 
[block:parameters]
{
  "data": {
    "0-0": "[Learn more about the Subscription Bell](doc:bell-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]
<img src="https://files.readme.io/70a7cb8-Subscription_Button.png"/>

## Custom Link

Simply add a snippet to your site's markup and it will be rendered as a button or link that triggers subscription flow when user chooses to subscribe. Provides good user experience. Can be customized through the dashboard at any time without changes to your site's code. 
[block:parameters]
{
  "data": {
    "0-0": "[Learn more about Custom Link](doc:custom-link-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f2af6d-Screen_Shot_2018-07-31_at_1.50.17_PM.png",
        "Screen Shot 2018-07-31 at 1.50.17 PM.png",
        1744,
        746,
        "#f9f6f7"
      ]
    }
  ]
}
[/block]
## HTTP Pop-Up Prompt

**HTTP only** - The HTTP Pop-Up Prompt is presented in a separate pop-up window for HTTP sites. It cannot be triggered alone and must follow the above prompts.

[block:parameters]
{
  "data": {
    "0-0": "[Learn more about HTTP Pop-Up Prompt](doc:http-popup-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]
<img src="https://i.imgur.com/KuQcvEV.png"/>

----

## Native Permission Prompt

HTTPS sites may choose not to use a soft prompt and instead trigger the browser's Native Permission Prompt. However, immediately prompting users to subscribe with the Native prompt is [being deprecated by the browsers](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/) and is not recommended.

[block:parameters]
{
  "data": {
    "0-0": "[Learn more about the Native Permission Prompt](doc:native-browser-prompt)"
  },
  "cols": 1,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7757068-Screen_Shot_2019-09-10_at_5.26.34_PM.png",
        "Screen Shot 2019-09-10 at 5.26.34 PM.png",
        493,
        238,
        "#f1f0f1"
      ]
    }
  ]
}
[/block]
----

# Delayed Prompts

Best practice is to delay the Slide or Native Prompt from showing on screen. Giving visitors time to browse your content before prompting can improve engagement and ensure the browser doesn't penalize your site.

You can delay prompts based on:
- page views: the number of times a page is viewed/loaded on the screen
- seconds: amount of time passed in a single page to show the prompt
[block:callout]
{
  "type": "info",
  "title": "Programmatically show the prompt anytime!",
  "body": "Use our [SDK Prompting Methods](https://documentation.onesignal.com/docs/web-push-sdk#registering-push) to show the prompt with code.\n\n**Make sure to turn off the \"Auto-prompt\" option to call these methods.**"
}
[/block]
Using the [Typical Site Setup](doc:web-push-typical-setup) you can customize showing the Slide or Native prompt after X amount of seconds the user is on the site and/or after X amount of page views. For example, show the prompt 30 seconds after the user visits 3 pages.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1117c6c-Screen_Shot_2020-04-22_at_1.37.22_PM.png",
        "Screen Shot 2020-04-22 at 1.37.22 PM.png",
        373,
        173,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
If using Custom Code Setup, see examples for [configuring prompt delays through OneSignal `init`](https://documentation.onesignal.com/docs/web-push-custom-code-examples#delay-prompting-for-x-amount-of-seconds-or-x-page-views). 

**WordPress** requires some more steps shown in this [guide on adding a delay to your WordPress Site](https://documentation.onesignal.com/docs/web-push-wordpress-faq#how-do-i-delay-prompting-users).

----

# FAQ

## After dismissing a web push prompt, when is the prompt shown again?

If a user clicks "Block" (Chrome), "Don't Allow" (Safari), or "Never Allow" (Firefox) on the [Native Permission Prompt](doc:native-browser-prompt) they can never be prompted from the site again and must subscribe or reset permissions through a multi-step process through the browser settings. This is one reason it is recommended to use the [OneSignal Prompts](#onesignal-prompts).

If a user clicks "X" on the Native Permission Prompt or "No" on the OneSignal Prompts, then the following occurs:

#### Native Permission Prompt:

**Chrome** - You have 3 tries to get the user to subscribe, after the 3rd "X" click on the required native permission prompt, they will not get prompted again for a week. More on this [Chrome feature here](https://www.chromestatus.com/feature/6443143280984064). For Chrome on Android, see [Why is Slide Prompt Showing on Mobile](doc:native-browser-prompt#why-is-slide-prompt-showing-on-mobile).

**Firefox** - Beginning with [Firefox 70](https://blog.mozilla.org/futurereleases/2019/11/04/restricting-notification-permission-prompts-in-firefox/) once a user clicks "X" they will need to click the small notification icon in the browser to be prompted again. Also, with Firefox 72+ the Native Browser Prompt is prevented from showing, see below [Why do I see the Slide Prompt on Firefox when I want the Native Browser Prompt](#why-do-i-see-the-slide-prompt-on-firefox-when-i-want-the-native-browser-prompt) for more details.

#### OneSignal Soft Prompts:

The OneSignal Side Prompt will show after 3 days, 7 days, then 30 days if the user clicks "Allow" or "Cancel" on it and is still not subscribed.

For instance, if a user clicks "Allow" on the slide prompt, but "x" on the native prompt, it will not show again for 3 days the first time. After 3 days, it will show again and if the user clicks "Cancel" or "Allow" but "X" on the native prompt, it will not show again for 7 days. After 7 days if the user does this again, it will be every 30 days.

If the user clears cookies or browser data, the cycle resets. 

For testing purposes, please follow [Clearing your cache and resetting push permissions](doc:troubleshooting-web-push#clearing-your-cache-and-resetting-push-permissions) to access your site as a new first-time user.

## What are some best practices around Web Push Prompting?

It is best to ask visitors to subscribe after you have provided some value to them through the site. This could be after they have read your articles or in a "site settings"/"profile" page, and/or in your shopping-cart or check-out flow.

Common best practices include:
1. Using a [Delayed Slide Prompt](#delayed-prompts).
2. Embedding the [Custom Link Prompt](doc:custom-link-prompt) in the middle and/or at the end of the articles and within a "Subscription Page" or section of the user's Profile page if you have one.
3. Adding the [Bell Prompt](doc:bell-prompt) to allow users to easily subscribe/unsubscribe throughout the site.
4. If you add your own call-to-action buttons (like add to cart or subscription events) on the site or want to show the Native Browser Prompt anytime, use the `OneSignal.showNativePrompt();` [method](doc:web-push-sdk#shownativeprompt). Your site must be HTTPS and did not select "My site is not fully HTTPS" in the OneSignal Site configuration.

## How can I translate the OneSignal Prompts?

You can put any language you like into the prompt. If you are trying to dynamically change the prompt language based on the page, then switch to the [Custom Code Setup](doc:web-push-custom-code-setup) and initialize OneSignal based on the language of the page.

Currently OneSignal does not automatically translate the [Slide Prompt](doc:slide-prompt) , [Bell Prompt](doc:bell-prompt) , or [Custom Link prompt](doc:custom-link-prompt). They default to English, but you can put any language and message you want.

The [Native Browser Prompt](doc:native-browser-prompt) will automatically translate to the browser language settings.

## Can I AB Test Prompts?

Using the [Custom Code Setup](doc:web-push-custom-code-setup) you can initialize OneSignal with the different prompting options. You would need to setup your own way to trigger the A/B/C/D etc tests which initialize OneSignal. 

As a bonus, you can use the [Subscription Change](doc:web-push-sdk#subscription-change) method to detect when the user subscribed and add [Data Tags](doc:add-user-data-tags) based on which test won the subscription.  

## Why does my Prompt keep showing up?
Make sure you are not in incognito mode, private browser mode or guest browser mode.

### Can I segment users based on the page they subscribed?

Yes! Please see our guide [Auto-Segment By Subscription Page](doc:auto-segment-users-by-subscription-page).

## Why is my prompt not showing?

Apple still does not support Web Push on iOS like iPhone and iPad. This is an Apple limitation and no push provider can provide Web Push Notifications on iPhone and iPad. You need an iOS mobile app to send push on iPhone and iPad. [GoNative.io](doc:gonativeio) is a great way to turn your website into a mobile app.

The [Native Browser Prompt](doc:native-browser-prompt) will not show while in Incognito Mode, Private Browser mode or Guest Browser mode. It will also not show right away on Safari 12.1+ or Firefox 72+ ([more details](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/)). 

Also make sure you are [using a browser and device that supports web push](https://documentation.onesignal.com/docs/web-push-setup-faq#browser-support-by-operating-system).

Check your prompt setup to make sure **Auto-prompt** is turned on and the [Delayed Prompts](https://documentation.onesignal.com/docs/permission-requests#delayed-prompts) are not blocking you.

Last would be to [follow these steps to reset your cookie and browser cache](https://documentation.onesignal.com/docs/troubleshooting-web-push#clearing-your-cache-and-resetting-push-permissions) to visit your site like a first time user.


## How can I show the prompt on only certain pages?

If you use Typical Setup, make sure to [disable Auto-Prompt](doc:slide-prompt#typical-setup-slide-prompt) for both Slide and Native prompts. If you use the bell prompt, you will need to remove the OneSignal init call on pages you do not want the bell to show or switch to the [Custom Code Setup](doc:web-push-custom-code-setup).

You can now trigger the Native or Slide prompt with the SDK methods. See the prompt guide for details.

**WordPress Users:** there is currently not a way to disable the OneSignal subscription prompts on certain pages/posts through the plugin directly, this will require adding code to the site.

We provide 2 options on how to setup the prompts on different pages of your site:
https://documentation.onesignal.com/docs/web-push-wordpress-faq#how-do-i-enable-the-plugin-for-certain-pages-only

## Why do I see the Slide Prompt on Firefox when I want the Native Browser Prompt?

With [Firefox 72+](https://blog.mozilla.org/futurereleases/2019/11/04/restricting-notification-permission-prompts-in-firefox/) there is a change that requires a user to click a button to show the native browser prompt. If you try to automatically show the native browser prompt, you will see an icon within the browser like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/95acab9-Screen_Shot_2020-04-03_at_3.52.44_PM.png",
        "Screen Shot 2020-04-03 at 3.52.44 PM.png",
        831,
        84,
        "#cdcbcb"
      ]
    }
  ]
}
[/block]
The user must click this icon to view the Native Browser Prompt on Firefox. This is why we default to the [Slide Prompt](doc:slide-prompt) on Firefox because it is more "eye-catching" and requires the 2-step opt-in in either case.

If you do not want to show the Slide Prompt as default, you must turn off the "Auto-Prompt" switch in the Prompt Editor:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/913e5be-Screen_Shot_2020-04-03_at_3.57.23_PM.png",
        "Screen Shot 2020-04-03 at 3.57.23 PM.png",
        1178,
        699,
        "#c8c8c8"
      ]
    }
  ]
}
[/block]
Press "Save" and "Save" again on the next page. You can then use the `OneSignal.showNativePrompt()` SDK method to trigger the Native Prompt on any page you want. Example code:
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"3beb3078-e0f1-4629-af17-fde833b9f716\",\n    });\n    OneSignal.showNativePrompt();\n  });\n</script>",
      "language": "html"
    }
  ]
}
[/block]
## Why do I see the Slide Prompt on Mobile when I want the Native Browser Prompt?

The reason for this behavior is due to a change that Google made on December 5th 2017 to Chrome on Android. It is a very user unfriendly pop-up that we deliberately added the double prompt on android to avoid your users from having a bad experience on your site. 

For more details on this or if you really want to only show just the native prompt see [Why is Slide Prompt Showing on Mobile](doc:native-browser-prompt#why-is-slide-prompt-showing-on-mobile).