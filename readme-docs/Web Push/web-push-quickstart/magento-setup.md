---
title: "Magento Setup"
slug: "magento-setup"
excerpt: "How to set up OneSignal Web Push notifications on Magento sites"
hidden: false
createdAt: "2017-12-07T02:05:30.713Z"
updatedAt: "2020-07-24T23:15:38.731Z"
---
This guide will walk you through how to set up web push on **[Magento](https://Magento.com)**. If you do not use Magento, or wish to write custom code, please [go to Web Push Quickstart](doc:new-web-push-setup).

At any time to get back to setup, go to <a class="dash-link" href="/docs/platforms">App Settings</a> and click **Configure** for the **Google Chrome** platform (instructions for Safari are [here](doc:safari-web-push-setup)).

----

## Step 1. Choose Integration

OneSignal supports sending web push notifications from a variety of different web technologies. Select **Magento** to continue:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8545cb3-Screen_Shot_2017-12-06_at_6.06.44_PM.png",
        "Screen Shot 2017-12-06 at 6.06.44 PM.png",
        2354,
        1366,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Magento as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a9c36fa-Screen_Shot_2017-12-06_at_6.13.36_PM.png",
        "Screen Shot 2017-12-06 at 6.13.36 PM.png",
        2360,
        796,
        "#f0f0f0"
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

##### If Magento hosts your site

Magento-hosted implementations must use a label to send push notifications. Select **My site is not fully HTTPS** and choose a unique label (e.g. `mylabel`), which will be displayed as `mylabel.os.tc`.

<img src="https://files.readme.io/9e44cfa-ChooseLabel.png" width="450"/>

##### If you self-host Magento

If your site uses Magento technology but is hosted on a hosting provider that is not Magento, you will need to determine if your site fully supports <span class="label-all label-yes">HTTPS</span>.

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
  "body": "Once you've completed steps 1-5, click 'Save' to save your configuration. \n\nNext, you'll need to add OneSignal to your site by following steps 6 and 7."
}
[/block]
## Step 6. Upload OneSignal SDK
[block:callout]
{
  "type": "warning",
  "body": "This option will not be available if you selected 'My Site is Not Fully HTTPS'. Skip to the next step.",
  "title": "Ignore if Magento hosts your site"
}
[/block]
### If you self-host Magento

Next, you'll need to add the OneSignal SDK files to your site. To do so, 

1. Download the OneSignal SDK files. (You can also [download the files here](https://github.com/OneSignal/OneSignal-Website-SDK/releases/download/https-integration-files/OneSignal-Web-SDK-HTTPS-Integration-Files.zip)). 

2. Unzip the OneSignal SDK files. There should be three files:
  - `https://yoursite.com/OneSignalSDKWorker.js`
  - `https://yoursite.com/OneSignalSDKUpdaterWorker.js`

3. Upload the OneSignal SDK files to the **top-level root** of your site directory, making them publicly accessible. 

### FAQ

#### How do I upload files?
There are three ways you can upload files to your site:

##### Option A: FTP

- Use an FTP Server like FileZilla to upload the files to your root directory
- Here is a great [step-by-step guide](http://www.wikihow.com/Use-FTP).

##### Option B: Control Panel

- Use your hosting provider's control panel like cPanel to upload files.

##### Option C: Contact your hosting provider

- Most hosting providers will be more than happy to assist you in uploading files to your site.
- Just send them the zip file above and ask them to unzip it in your site's root directory.

#### How can I tell if I've uploaded the files correctly?

Once you've uploaded the OneSignal SDK files, the following URLs should be publicly accessible *(replace yoursite.com with your site's domain)*:
- `https://yoursite.com/OneSignalSDKWorker.js`
- `https://yoursite.com/OneSignalSDKUpdaterWorker.js`

[Can I host the OneSignal SDK myself?](doc:web-push-setup-faq#section-can-i-host-the-onesignal-sdk-myself-) 

[Can these files be served from a subfolder of my site?](doc:web-push-setup-faq#section-can-onesignal-sdk-files-be-served-from-a-subfolder-of-my-site-)

## Step 7. Add Code to Site

*If Magento hosts your site, this will be called Step 6.*

To enable OneSignal on your Magento site, you will need to copy the code from Web Push Settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dcc91ce-Screen_Shot_2019-09-29_at_6.27.41_PM.png",
        "Screen Shot 2019-09-29 at 6.27.41 PM.png",
        2348,
        994,
        "#e5e6e7"
      ]
    }
  ]
}
[/block]
Next, paste the code into your site's `<head>`.

### FAQ 

[Troubleshooting: adding code in the right location](doc:web-push-setup-faq#section-troubleshooting-adding-code-in-the-right-location)
[block:callout]
{
  "type": "success",
  "title": "You're Done!",
  "body": "Next step: [Send your first push notification](doc:testing-web-push-notifications) via the OneSignal Dashboard"
}
[/block]