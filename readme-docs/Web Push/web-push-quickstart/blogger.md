---
title: "Blogger Setup"
slug: "blogger"
excerpt: "How to set up OneSignal Web Push notifications on Blogger sites"
hidden: false
createdAt: "2016-09-07T23:53:13.705Z"
updatedAt: "2020-07-24T23:16:15.268Z"
---
This guide will walk you through how to set up web push on **[Blogger](https://blogger.com)**. If you do not use Blogger, or wish to write custom code, please [go to Web Push Quickstart](doc:web-push-quickstart).

At any time to get back to setup, go to App Settings and click **Configure** for the **Google Chrome** platform (instructions for Safari are [here](doc:safari-web-push-setup)).

----

## Step 1. Choose Integration

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Blogger** to continue:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0860356-Screen_Shot_2017-12-06_at_3.54.56_PM.png",
        "Screen Shot 2017-12-06 at 3.54.56 PM.png",
        2364,
        1378,
        "#f3f3f2"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Blogger as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa6e244-Screen_Shot_2017-12-06_at_4.09.11_PM.png",
        "Screen Shot 2017-12-06 at 4.09.11 PM.png",
        2366,
        810,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
#### Enter Site URL

This must be the exact URL you see in the browser when you visit the site.
Most users just enter their base site URL for this field (e.g. `https://example.com`). 

If your site is accessible from both www & non-www links (e.g. `hexample.com` AND `www.example.com`), please only *enter the URL that you wish to send push notifications from*. We recommend **redirect** traffic from one to the other (e.g. users that visit `example.com` are redirected to `www.example.com`), so that all your traffic only goes to one. 

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels. **Recommended** size is 192x192. The file must be `.png`, `.jpg`, or `.gif`.

#### Choose a Label

Blogger implementations must choose a unique label to be displayed in your notifications. For example, the below image shows notifications are coming from `mylabel.os.tc`:

<img src="https://files.readme.io/36100cb-subdomain.png" width="300"/>

Warning: You can only change your label if you have less than 100 web users. Once you have 100+ web users, this setting is disabled.

### FAQ

[How does OneSignal work differently with HTTP sites?](doc:web-push-http-vs-https)

[Why does my site require a label?](https://documentation.onesignal.com/docs/web-push-setup-faq#why-does-my-site-require-a-label)

[Why can't I change my label?](https://documentation.onesignal.com/docs/web-push-setup-faq#why-cant-i-change-my-sites-label)

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
[Subscription Bell](https://documentation.onesignal.com/docs/bell-prompt) - a small icon at the corner of your page that users can interact with to subscribe 

[Slide Prompt](https://documentation.onesignal.com/docs/slide-prompt) - a small modal that comes from the center of the page and asks if users are interested in signing up.

[HTTP Pop-Up Prompt](https://documentation.onesignal.com/docs/http-popup-prompt) - a pop-up window that appears after other prompts that is required for HTTP sites.

[Custom Link prompt](doc:custom-link-prompt) - create your own links or buttons as prompts.

## Step 4. Welcome Notification

Welcome notifications an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. You can edit or disable them here. 
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

Most sites will not have to edit anything in Advanced options. See [Web Push Advanced Options](doc:web-push-options) to learn more about each option.

## Step 6. Add Code to Site

To enable OneSignal on your Blogger site, you will need to copy the code from Web Push Settings.
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
Next, go to your Blogger Dashboard and click **Theme**. Then click **Edit HTML**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa37fed-Blogger.png",
        "Blogger.png",
        663,
        562,
        "#433e40"
      ]
    }
  ]
}
[/block]
Next, paste the code into your Blogger theme's `<head>` and click **Save theme**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab60db7-Blogger-Head.png",
        "Blogger-Head.png",
        1237,
        490,
        "#ece8e7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "You're Done!",
  "body": "Visit your site and subscribe! You should see your device show up in the [OneSignal Dashboard Audience]() page. If now, see [Troubleshooting Web Push](https://documentation.onesignal.com/docs/troubleshooting-web-push).\n\nOnce you are subscribed jump to [Send your first push notification](https://documentation.onesignal.com/docs/sending-notifications) via the OneSignal Dashboard."
}
[/block]