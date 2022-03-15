---
title: "Wix Setup"
slug: "wix"
excerpt: "How to set up OneSignal Web Push notifications on Wix sites"
hidden: false
createdAt: "2018-02-09T01:12:51.260Z"
updatedAt: "2020-07-24T23:15:07.480Z"
---
This guide will walk you through how to set up Web Push for your Wix site using the Website Builder setup process in the OneSignal Dashboard.

To jump back into the setup process at any point, go to App Settings and click Configure for the Google Chrome platform. Instructions for Safari are [here](doc:safari-web-push-setup).

**Pre-requisites:**

- A Wix site on a premium plan with a custom domain

----

## Step 1. Choose Integration

In the OneSignal Dashboard, click New App/Website from the All Applications page. 

On the screen that appears, fill in the name of the app.

If your account is part of an Organization, select the name of the organization that the app should belong to from the list. 

Select Web Push from the list of platforms, then click Next: Configure Your Platform.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e3a7a8-Screenshot_2020-04-27_OneSignal_Mobile_Push_Notifications1.png",
        "Screenshot_2020-04-27 OneSignal Mobile Push Notifications(1).png",
        2951,
        1831,
        "#e8eaec"
      ]
    }
  ]
}
[/block]
On the screen that appears, select Website Builder > Wix.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2fbd2a7-mFzcgQI.png",
        "mFzcgQI.png",
        2352,
        1448,
        "#dbdcdc"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Wix as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5c4158a-Screen_Shot_2020-07-24_at_3.16.37_PM.png",
        "Screen Shot 2020-07-24 at 3.16.37 PM.png",
        2402,
        926,
        "#e9eaeb"
      ]
    }
  ]
}
[/block]
### Site URL

You will need to enter in your primary domain that you have set up in Wix. See [managing your domain in Wix](https://support.wix.com/en/article/wix-domain-assistant-3777632) to learn how to find this domain.

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels. **Recommended** size is 192x192. The file must be `.png`, `.jpg`, or `.gif`.

### Choose a Label

Wix implementations must choose a unique label that will be displayed as the originating subdomain in your notifications.

<img src="https://files.readme.io/36100cb-subdomain.png" width="300"/>

**Warning:** You can only change your label if you have less than 100 web push users. Once you have 100+ web push users, this setting is disabled.

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
[block:callout]
{
  "type": "success",
  "title": "Site Configured",
  "body": "Once you've completed steps 1-5, click 'Save' to save your configuration. \n\nNext, you'll need to add OneSignal to your site by following step 6."
}
[/block]
## Step 6. Add Code to Site

To enable OneSignal on your Wix site, you will need to copy the code from Web Push Settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/199d240-Screen_Shot_2019-09-29_at_6.27.41_PM.png",
        "Screen Shot 2019-09-29 at 6.27.41 PM.png",
        2348,
        994,
        "#e5e6e7"
      ]
    }
  ]
}
[/block]
## Step 7. Subscribe & Send a Test Notification

Visit the site and subscribe through the OnesSignal permission prompt that you configured in Step 3.

Then, send a test notification to yourself through the OneSignal Dashboard to test your implementation.

## Step 8. Add Google Tag Manager Plugin

Next, add the Google Tag Manager plugin to your site and follow the tutorial OneSignal [Google Tag Manager](doc:google-tag-manager) guide.

---

## Frequently Asked Questions 

- [How does OneSignal work differently with HTTP sites?](doc:web-push-http-vs-https)
- [What if my site is in a subfolder?](doc:web-push-setup-faq#section-what-if-my-site-is-in-a-subfolder-)
- [Why does my site require a label?](doc:web-push-setup-faq#section-why-does-my-site-require-a-label-)
- [Why can't I change my label?](doc:web-push-setup-faq#section-why-can-t-i-change-my-label-)