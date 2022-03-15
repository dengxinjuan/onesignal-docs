---
title: "Native Browser Prompt"
slug: "native-browser-prompt"
excerpt: "The Required Native Browser Prompt Details: Triggering and FAQ"
hidden: false
createdAt: "2019-03-04T06:16:57.972Z"
updatedAt: "2020-04-23T01:08:29.257Z"
---
The Native Browser Permission Prompt is required for web push subscription and is not customizable. It uses the language set in the user's browser settings. Only HTTPS websites can show the native browser prompt.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ecc8ba-494fb59-Browser_Push_Permission_Request.png",
        "494fb59-Browser_Push_Permission_Request.png",
        500,
        257,
        "#fafaf9"
      ],
      "caption": "*Desktop (Chrome) HTTPS site*"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Browsers Are Changing How Notification Permission Prompts Work.",
  "body": "Chrome, Firefox and Safari have changed how prompting works. If you trigger the Native Permission Prompt, you may see the following changes:\n[Chrome 80+](https://blog.chromium.org/2020/01/introducing-quieter-permission-ui-for.html?m=1) adds a quieter UI for prompting users who typically deny permissions and automatically for sites that get denied for push more frequently. \n[Safari 12.1+](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes) and [Firefox 72+](https://blog.mozilla.org/futurereleases/2019/11/04/restricting-notification-permission-prompts-in-firefox/) add the requirement for a \"user gesture\" (clicking a button) before the native prompt is shown.\n\nRead more about these changes and best practices in our blog post: [Browsers Are Changing How Notification Permission Prompts Work](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/).\n\nOneSignal already provides what you need to stay ahead of these changes with our [OneSignal Prompts](#section-one-signal-prompts) and the ability to show these prompts at relevant moments."
}
[/block]
**Quick Jump To Your Setup:**
- [Typical Setup - Native Prompt](#section-typical-setup-native-prompt) 
- [WordPress Setup - Native Prompt](#section-wordpress-native-prompt) 
- [Custom Code Setup - Native Prompt](#section-custom-code-native-prompt) 
- [Why is Slide Prompt Showing On Mobile?](#section-why-is-slide-prompt-showing-on-mobile)

----

## Typical Setup Native Prompt

Select the Native Prompt within **Settings** > **All Browsers** Configuration > Step 3 Permission Prompt Setup > **Slide Prompt**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9ee96a9-Screen_Shot_2020-04-22_at_5.47.41_PM.png",
        "Screen Shot 2020-04-22 at 5.47.41 PM.png",
        600,
        476,
        "#d1d2d1"
      ]
    }
  ]
}
[/block]
Customizable options for Native Browser Prompt.
[block:parameters]
{
  "data": {
    "0-0": "**Auto-prompt**",
    "h-0": "Option",
    "h-1": "Details",
    "0-1": "Show the prompt without additional code. Adds a delay on showing the prompt based on both time and/or number of page views.",
    "1-0": "**Page Views**",
    "1-1": "Amount of times the user visits a URL of your site with the OneSignal code. \n`0` or `1` page view is the first time they visit the site.",
    "2-0": "**Seconds**",
    "2-1": "Amount of time that needs to pass while the user is on the page of your site with the OneSignal code for the prompt to show. \n`0` seconds means show as soon as possible (after the site loads). \n`300` seconds means show after 5 minutes."
  },
  "cols": 2,
  "rows": 3
}
[/block]
You can combine **Page Views** and **Seconds** together. For example, if your common user visits your home page, another page and a 3rd page, you can set: `3` page views and `30` seconds. The prompt will show on the 3rd page and after `30` seconds has passed.

To trigger the Native Browser Prompt programmatically, toggle off **Auto-prompt** switch. Then use the `OneSignal.showNativePrompt();` [method](doc:web-push-sdk#section-show-native-prompt) (recommended) when ready to prompt.
[block:callout]
{
  "type": "info",
  "title": "Best Practice!",
  "body": "Use the [Slide Prompt](doc:slide-prompt) with a delay to gauge user interest first. \nIf the user declines the Slide prompt, you can always trigger the Native Browser Prompt at another time with `OneSignal.showNativePrompt();` [method](doc:web-push-sdk#section-show-native-prompt)  after the user has more time to decide if they want to subscribe."
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "When finished, press **Save** and **Save** again on the next page to see this go into effect.",
  "title": "Save Settings!"
}
[/block]
----
## Wordpress Native Prompt

You must have an **HTTPS** site and selected "My site uses an HTTPS connection (SSL)" at the top of the WordPress Plugin. 

To enable the Native Prompt upon visiting the site, go to "Prompt Settings & Subscription Bell" and enable: 

**Attempt to automatically prompt new site visitors with Native Browser Prompt (not recommended)**

This is found under the "Subscription Bell" options and above the "Prompt Customizations" options. Then press "Save" at the bottom of the plugin.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/11067a1-Screen_Shot_2020-01-23_at_2.25.03_PM.png",
        "Screen Shot 2020-01-23 at 2.25.03 PM.png",
        1309,
        662,
        "#faf7f7"
      ]
    }
  ]
}
[/block]
If you would like to add a delay to this prompt, it will require adding some additional setup. Please see the [WordPress Prompt Delay Code](doc:web-push-wordpress-faq#section-how-do-i-delay-prompting-users) for more.

----
## Custom Code Native Prompt
Using the Custom Code Setup, this can be triggered any time via the [`OneSignal.showNativePrompt();` method](doc:web-push-sdk#section-show-native-prompt).

**RECOMMENDED:** See examples for [Adding a Prompt Delay](doc:web-push-custom-code-examples#section-prompt-behavior).

-----
## Native Prompt FAQ

### How do I add a delay to the prompt?
See above section based on your setup for more details.

### How many times does the prompt show?
Great questions! [More details here](doc:permission-requests#section-after-dismissing-a-web-push-prompt-when-is-the-prompt-shown-again).

### Why is the Native Prompt not showing up?
A browser's Native Permission Prompt may not show when triggered if one of these conditions is true:
- [The browser prevented the prompt from showing.](https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/)
- The user has already allowed notifications or already subscribed
- The user blocked notifications. If a user clicks "Block" (Chrome), "Don't Allow" (Safari), or "Never Allow" (Firefox) they can never be prompted again and must subscribe through a multi-step process in the browser settings. This is why it is recommended to use the [OneSignal Slide Prompt](doc:slide-prompt).
- [Auto-Prompt is turned off and no call to `showNativePrompt();`](#section-typical-setup-native-prompt)
- On mobile, OneSignal defaults to the slide prompt, see [Why is Slide Prompt Showing On Mobile](#section-why-is-slide-prompt-showing-on-mobile) for details on changing this.

###Why is Slide Prompt Showing On Mobile?

OneSignal defaults to the [Slide Prompt](doc:slide-prompt) on mobile devices for 2 reasons:
1. Google made a change to the Native Prompt on Chrome for Android that is a very user unfriendly pop-up and help prevent your users from having a bad experience on your site. We published a blog post that explains these changes here: https://onesignal.com/blog/web-push-changes-to-chrome-on-android/ 
2. Also due to further updates by the browsers, the native prompt alone may not work anymore if you call it right away, you can read more about these changes here: https://onesignal.com/blog/changes-to-chrome-and-firefox-permission-prompting/

We highly recommend using the Slide Prompt and you can customize it following our [Slide Prompt Guide](doc:slide-prompt).

If you really want to only show just the native prompt on your site, you can simply follow these directions:

#### Typical or Custom Sites

For Typical Setup, make sure Auto-Prompt is turned off ([see above](#section-typical-setup-native-prompt)).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/692ae20-Screen_Shot_2020-01-20_at_11.40.14_AM.png",
        "Screen Shot 2020-01-20 at 11.40.14 AM.png",
        846,
        200,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
Then for Typical Setup and Custom Code setup, you must call [`OneSignal.registerForPushNotifications()` method](doc:web-push-sdk#section-show-native-prompt) after the init call. We advise not to call this immediately upon user visiting the page.

#### WordPress Users
You will need to follow [this guide on adding a delay to your prompt](https://documentation.onesignal.com/docs/web-push-wordpress-faq#section-how-do-i-delay-prompting-users).

You can set the value for `var notificationPromptDelay` to whatever you like, `0` means no delay.