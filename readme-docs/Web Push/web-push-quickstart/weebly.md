---
title: "Weebly Setup"
slug: "weebly"
excerpt: "How to set up OneSignal Web Push notifications on Weebly sites"
hidden: false
createdAt: "2017-03-03T03:15:57.571Z"
updatedAt: "2020-07-24T23:15:16.530Z"
---
This guide will walk you through how to set up web push on **[Weebly](https://Weebly.com)**. If you do not use Weebly, or wish to write custom code, please [go to Web Push Quickstart](doc:new-web-push-setup).

At any time to get back to setup, go to <a class="dash-link" href="/docs/platforms">App Settings</a> and click **Configure** for the **Google Chrome** platform (instructions for Safari are [here](doc:safari-web-push-setup)).

----

## Step 1. Choose Integration

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Weebly** to continue:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cedc608-Screen_Shot_2017-12-06_at_5.46.52_PM.png",
        "Screen Shot 2017-12-06 at 5.46.52 PM.png",
        2358,
        1366,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Weebly as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c82ea62-Screen_Shot_2017-12-06_at_5.47.00_PM.png",
        "Screen Shot 2017-12-06 at 5.47.00 PM.png",
        2352,
        800,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
#### Enter Site URL

Most users just enter their base site URL for this field (e.g. `yoursite.com` or `example.weebly.com`). 

If your site is accessible from both www & non-www links (e.g. `example.com` AND `www.example.com`), please only *enter the URL that you wish to send push notifications from*. We recommend **redirect** traffic from one to the other (e.g. users that visit `example.com` are redirected to `www.example.com`), so that all your traffic only goes to one. 

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels. **Recommended** size is 192x192. The file must be `.png`, `.jpg`, or `.gif`.

#### Choose a Label

Weebly implementations must choose a unique label to be displayed in your notifications. For example, the below image shows notifications are coming from `mylabel.os.tc`:

<img src="https://files.readme.io/36100cb-subdomain.png" width="300"/>

Warning: You can only change your label if you have less than 100 web users. Once you have 100+ web users, this setting is disabled.

### FAQ

[How does OneSignal work differently with HTTP sites?](doc:web-push-http-vs-https)

[What if my site is in a subfolder?](doc:web-push-setup-faq#section-what-if-my-site-is-in-a-subfolder-)

[Why does my site require a label?](doc:web-push-setup-faq#section-why-does-my-site-require-a-label-)

[Why can't I change my label?](doc:web-push-setup-faq#section-why-can-t-i-change-my-label-)

## Step 3. Permission Prompt Setup

To send push notifications to users, you first must ask them for permission using a *Prompt*. You must have at least one Prompt on your site for web push to work. Click **Add a Prompt** to open the permission prompt selector.

<img src="https://files.readme.io/1395bd7-Screen_Shot_2017-12-01_at_9.12.55_PM.png" width="450"/>

### Permission Prompt Editor

In the Permission Prompt Editor, you can select which prompts you wish to use, and style them as you like. Once you have edited the prompt to your liking, click **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e3f6bf0-Screen_Shot_2017-12-01_at_9.15.23_PM.png",
        "Screen Shot 2017-12-01 at 9.15.23 PM.png",
        2024,
        1194,
        "#ececec"
      ]
    }
  ]
}
[/block]
[Subscription Bell](doc:permission-requests#section-subscription-bell) - a small icon at the corner of your page that users can interact with to subscribe 

[Slide Prompt](doc:permission-requests#section-slide-prompt) - a small modal that comes from the center of the page and asks if users are interested in signing up.

[HTTP Pop-Up Prompt](doc:permission-requests#section-http-pop-up-prompt) (<span class="label-all label-no">HTTP-only</span>) - a pop-up window that appears after other prompts that is required for HTTP sites.

[Custom Prompts](doc:permission-requests#section-custom-prompts) - create your own links or buttons as prompts.

## Step 4. Welcome Notification

**Optional:** Welcome notifications an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. You can edit or disable them here. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93d5228-Screen_Shot_2017-12-04_at_4.49.59_PM.png",
        "Screen Shot 2017-12-04 at 4.49.59 PM.png",
        2116,
        1292,
        "#e3e3e3"
      ]
    }
  ]
}
[/block]
## Step 5. Advanced Options

**Optional:** Most sites will not have to edit anything in Advanced options. See [Web Push Advanced Options](doc:web-push-options) to learn more about each option.
[block:callout]
{
  "type": "success",
  "title": "Site Configured",
  "body": "Once you've completed steps 1-5, click 'Save' to save your configuration. \n\nNext, you'll need to add OneSignal to your site by following step 6."
}
[/block]
## Step 6. Add Code to Site

To enable OneSignal on your Weebly site, you will need to copy the code from Web Push Settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1e8e0d-Step6-copy-code.png",
        "Step6-copy-code.png",
        1182,
        513,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]

1. In your Weebly website editor, find your "Embed Code" element in your side panel under "BASIC". <img src="https://files.readme.io/18c3b86-Embed_Code.png" width="100"/>

2. Click and drag the element to an area of each page that you want to include OneSignal.

3. Click inside the element where it says "Click to set custom HTML" and "Edit Custom HTML".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2505f47-Screen_Shot_2017-03-02_at_9.02.08_PM.png",
        "Screen Shot 2017-03-02 at 9.02.08 PM.png",
        1456,
        428,
        "#387595"
      ]
    }
  ]
}
[/block]
4. Paste in the OneSignal code you copied above.

5. After clicking out of the "Embed Code" editor, you should see the OneSignal bell in the bottom right corner.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4bee3e9-Screen_Shot_2017-03-02_at_9.09.45_PM.png",
        "Screen Shot 2017-03-02 at 9.09.45 PM.png",
        754,
        376,
        "#ba9783"
      ]
    }
  ]
}
[/block]
6. Continue these steps on each page you would like OneSignal to be used.

7. Publish your site and you are good to go!

### FAQ 

[Troubleshooting: adding code in the right location](doc:web-push-setup-faq#section-troubleshooting-adding-code-in-the-right-location)
[block:callout]
{
  "type": "success",
  "body": "You're all set up! See our [Web Push Prompts](doc:web-push-prompts) page as well.",
  "title": "Setup Complete"
}
[/block]