---
title: "Drupal Setup"
slug: "drupal"
excerpt: "How to set up OneSignal Web Push notifications on Drupal sites"
hidden: false
createdAt: "2016-10-07T19:43:20.915Z"
updatedAt: "2020-07-24T23:15:55.401Z"
---
This guide will walk you through how to set up web push on **[Drupal](https://Drupal.com)**. If you do not use Drupal, or wish to write custom code, please [go to Web Push Quickstart](doc:new-web-push-setup).

At any time to get back to setup, go to <a class="dash-link" href="/docs/platforms">App Settings</a> and click **Configure** for the **Google Chrome** platform (instructions for Safari are [here](doc:safari-web-push-setup)).

----

## Step 1. Choose Integration

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Drupal** to continue:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/177b309-Screen_Shot_2017-12-06_at_5.27.38_PM.png",
        "Screen Shot 2017-12-06 at 5.27.38 PM.png",
        2354,
        1364,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Drupal as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f1e75c-Screen_Shot_2017-12-06_at_5.27.53_PM.png",
        "Screen Shot 2017-12-06 at 5.27.53 PM.png",
        2360,
        802,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
#### Enter Site URL

Most users just enter their base site URL for this field (e.g. `yoursite.com`). 

If your site is accessible from both www & non-www links (e.g. `example.com` AND `www.example.com`), please only *enter the URL that you wish to send push notifications from*. We recommend **redirect** traffic from one to the other (e.g. users that visit `example.com` are redirected to `www.example.com`), so that all your traffic only goes to one. 

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels. **Recommended** size is 192x192. The file must be `.png`, `.jpg`, or `.gif`.

#### Choose a Label

##### If Drupal hosts your site

Drupal-hosted implementations must use a label to send push notifications. Select **My site is not fully HTTPS** and choose a unique label (e.g. `mylabel`), which will be displayed as `mylabel.os.tc`.

<img src="https://files.readme.io/9e44cfa-ChooseLabel.png" width="450"/>

##### If you self-host Drupal

If your site uses Drupal technology but is hosted on a hosting provider that is not Drupal, you will need to determine if your site fully supports <span class="label-all label-yes">HTTPS</span>.

Web Push works best with sites that fully support <span class="label-all label-yes">HTTPS</span>, and we recommend using <span class="label-all label-yes">HTTPS</span> for Web Push when possible. To determine if your site fully supports <span class="label-all label-yes">HTTPS</span>, look for the following:

- Your site URL must begin with `https://`, and display a green lock icon on the browser's address bar
- Your site must redirect all `http://` requests to `https://` requests. In other words, users accessing the site via HTTP will be redirected to the HTTPS version. 

If your site does not fully support <span class="label-all label-yes">HTTPS</span>, you should select 'My site is not fully HTTPS':

<img src="https://files.readme.io/9e44cfa-ChooseLabel.png" width="450"/>

Once you've selected this, you will need to choose a unique label to be displayed in your notifications. For example, the below image shows notifications are coming from `mylabel.os.tc`:

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

To enable OneSignal on your Drupal site, you will need to copy the code from Web Push Settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec0fb28-Screen_Shot_2019-09-29_at_6.27.41_PM.png",
        "Screen Shot 2019-09-29 at 6.27.41 PM.png",
        2348,
        994,
        "#e5e6e7"
      ]
    }
  ]
}
[/block]
Next, paste the code into your Drupal theme's `<head>`.

See [Managing JavaScript in Drupal 7](https://www.drupal.org/node/756722) for different ways to do this.

### FAQ 

[Troubleshooting: adding code in the right location](doc:web-push-setup-faq#section-troubleshooting-adding-code-in-the-right-location)
[block:callout]
{
  "type": "success",
  "title": "You're Done!",
  "body": "Next step: [Send your first push notification](doc:testing-web-push-notifications) via the OneSignal Dashboard"
}
[/block]