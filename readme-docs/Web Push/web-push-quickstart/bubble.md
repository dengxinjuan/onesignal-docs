---
title: "Bubble Setup"
slug: "bubble"
excerpt: "How to set up OneSignal Web Push notifications on Bubble.io sites"
hidden: false
createdAt: "2020-07-24T21:49:15.534Z"
updatedAt: "2020-07-24T23:16:06.507Z"
---
This guide will walk you through how to set up Web Push for your Bubble site using the Website Builder setup process in the OneSignal Dashboard.

To jump back into the setup process at any point, go to App Settings and click Configure for the Google Chrome platform.

**Pre-requisites:**

- A Bubble site

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
        "https://files.readme.io/59ad487-Screen_Shot_2020-07-24_at_2.56.16_PM.png",
        "Screen Shot 2020-07-24 at 2.56.16 PM.png",
        2492,
        1358,
        "#e4e7e9"
      ]
    }
  ]
}
[/block]
On the screen that appears, select Website Builder > Bubble.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/721e258-Screen_Shot_2020-07-24_at_2.39.03_PM.png",
        "Screen Shot 2020-07-24 at 2.39.03 PM.png",
        2406,
        1370,
        "#dadbdc"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Bubble as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70652a8-Screen_Shot_2020-07-24_at_2.47.16_PM.png",
        "Screen Shot 2020-07-24 at 2.47.16 PM.png",
        2408,
        1052,
        "#e7e8e9"
      ]
    }
  ]
}
[/block]
#### Enter Site URL

You will need to enter in your primary domain that you have set up in Bubble.

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels. **Recommended** size is 192x192. The file must be `.png`, `.jpg`, or `.gif`.

#### Choose a Label

Select the “My site is not fully HTTPS” option.

Bubble implementations must choose a unique label that will be displayed as the originating subdomain in your notifications.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f7ae7f-Screen_Shot_2019-12-05_at_10.39.15_AM.png",
        "Screen Shot 2019-12-05 at 10.39.15 AM.png",
        1364,
        274,
        "#eeefef"
      ]
    }
  ]
}
[/block]
**Warning:** You can only change your label if you have less than 100 web push users. Once you have 100+ web push users, this setting is disabled.

## Step 3. Permission Prompt Setup

To send push notifications to users, you first must ask them for permission using a *Prompt*. You must have at least one Prompt on your site for web push to work. Click **Add a Prompt** to open the permission prompt selector.

<img src="https://files.readme.io/1395bd7-Screen_Shot_2017-12-01_at_9.12.55_PM.png" width="450"/>

### Permission Prompt Editor

Although the OneSignal dashboard gives you multiple options to ask users for permission to send them notifications, the best way to do this with the Bubble plugin is to choose the slide prompt and turn auto-prompt off. 

The plugin provides a workflow action that allows you to prompt the user whenever you want to, giving you more control over the flow of this feature. This action also automatically sends your Bubble user’s unique ID to OneSignal once they accept notifications. This allows you to send notifications directly to users in your Bubble database. You will not be able to use this feature unless auto-prompt is turned off.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/801254b-onesignal_3.png",
        "onesignal_3.png",
        842,
        1074,
        "#dcdede"
      ]
    }
  ]
}
[/block]
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
## Step 6. Enable OneSignal Plugin in Bubble

Retrieve your App ID and API Key from the OneSignal dashboard under Settings > Keys & IDs and enter them in the Bubble plugins tab.

**Optional:** If you would like to enable notifications for Safari users as well, navigate to Settings > Platforms in the OneSignal dashboard and click on Apple Safari. Enter and save your site information, then click on Apple Safari again. You should now see a new Web ID. Copy this ID and paste it in the Safari Web ID field in the Bubble plugins tab.

## Step 7. Subscribe & Send a Test Notification

Visit the site and subscribe through the OnesSignal permission prompt that you configured in Step 3.

Then, send a test notification to yourself through the OneSignal Dashboard to test your implementation.

---

## Frequently Asked Questions 

- [How does OneSignal work differently with HTTP sites?](doc:web-push-http-vs-https)
- [What if my site is in a subfolder?](doc:web-push-setup-faq#section-what-if-my-site-is-in-a-subfolder-)
- [Why does my site require a label?](doc:web-push-setup-faq#section-why-does-my-site-require-a-label-)
- [Why can't I change my label?](doc:web-push-setup-faq#section-why-can-t-i-change-my-label-)