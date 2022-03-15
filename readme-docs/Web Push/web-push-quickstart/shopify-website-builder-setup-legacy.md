---
title: "Legacy Shopify Setup"
slug: "shopify-website-builder-setup-legacy"
excerpt: "How to setup OneSignal Web Push notifications on Shopify sites using code."
hidden: false
createdAt: "2020-05-06T17:19:10.367Z"
updatedAt: "2021-03-10T19:30:02.929Z"
---
The 2 biggest solutions that the OneSignal Shopify App provides is:
1. a "no code" solution with powerful built-in features like abandoned cart and back-in-stock updates
2. implements the Web [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) Service Worker requirements within Shopify's [App Proxy Limitations](https://shopify.dev/tutorials/display-dynamic-store-data-with-app-proxies)

OneSignal provides the below Legacy setup instructions for developers that want more control over the code on their Shopify site, which includes:
- full access to the OneSignal [Web Push SDK](doc:web-push-sdk) methods
- customizing your [Automated Messages](doc:automated-messages)
- sending [In-App Messages](doc:in-app-quickstart), [Email](doc:email-overview), and [SMS](doc:sms-overview) 
- combining your Web and Mobile App users within a single OneSignal app.

If you are using `external_user_ids` or any [Database, DMP, & CRM Integrations](doc:internal-database-crm) it is recommended to use the Legacy Setup.

The "cons" of the Legacy setup are:
1. requires code
2. requires the use of the OneSignal `os.tc` subdomain. See [Web Push HTTP vs. HTTPS](doc:web-push-http-vs-https) for more details.

## Shopify App for Web & OneSignal Dashboard for Mobile

If you want to use the OneSignal Shopify App but also have your own Mobile Apps using OneSignal. It is recommended to setup a separate OneSignal.com App for mobile users.

You will need to setup a onesignal.com account with an email different from the email used to login to shopify.com.
[block:callout]
{
  "type": "warning",
  "title": "Important Setup Requirement for different apps",
  "body": "You will need to setup a onesignal.com account with an email different from the email used to login to shopify.com."
}
[/block]
----

## OneSignal Legacy Shopify Setup
[block:callout]
{
  "type": "danger",
  "title": "Legacy Setup Instructions",
  "body": "These instructions only apply if you want to setup the OneSignal SDK on your Shopify site directly with code and do not want to use the [OneSignal Shopify App](doc:shopify).\n\nSee the [OneSignal Shopify App Setup Guide](doc:shopify) if you setup or want to setup the OneSignal Shopify App without code."
}
[/block]
This guide will walk you through how to set up Web Push for your Shopify store by adding code to your site using the Website Builder setup process in the OneSignal Dashboard.

**Pre-requisites:**

- A free or paid OneSignal account
- A Shopify store with access to edit template files

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
        "https://files.readme.io/e36ac3f-Screenshot_2020-04-13_OneSignal_Mobile_Push_Notifications1.png",
        "Screenshot_2020-04-13 OneSignal Mobile Push Notifications(1).png",
        2228,
        1838,
        "#e9ebed"
      ]
    }
  ]
}
[/block]
On the screen that appears, select Website Builder > Shopify.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1660cf8-Screenshot_2020-04-13_OneSignal_Mobile_Push_Notifications2.png",
        "Screenshot_2020-04-13 OneSignal Mobile Push Notifications(2).png",
        2228,
        1838,
        "#ccced0"
      ]
    }
  ]
}
[/block]
## Step 2. Site Setup

Once you've selected Shopify as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed20779-Screenshot_2020-04-13_OneSignal_Mobile_Push_Notifications3.png",
        "Screenshot_2020-04-13 OneSignal Mobile Push Notifications(3).png",
        2222,
        1048,
        "#ebecec"
      ]
    }
  ]
}
[/block]
#### Enter Site URL

You will need to enter in your primary domain that you have set up in Shopify. See [managing your domain in Shopify](https://help.shopify.com/manual/domains/managing-domains) to learn how to find this domain.

#### Auto Resubscribe

**Recommended:** This feature is only for HTTPS sites and if you do not select "My site is not fully HTTPS". This allows users to automatically resubscribe upon returning to the site without being prompted if they clear their browser cache or if you are transferring to OneSignal from another push provider.

#### Default Notification Icon URL

Enter a link to an icon file that is at least 80x80 pixels (recommended size is 192x192). The file must be in `.png`, `.jpg`, or `.gif` format.

#### Choose a Label

Shopify implementations must choose a unique label that will be displayed as the originating subdomain in your notifications.

<img src="https://files.readme.io/36100cb-subdomain.png" width="300"/>

**Warning:** You can only change your label if you have less than 100 web push users. Once you have 100+ web push users, this setting is disabled.

## Step 3. Permission Prompt Setup

To send push notifications to your site's visitors, you first must ask them for permission using one of OneSignal's prompts.

You must have at least one prompt active on your site for users to be able to subscribe. Use the pre-configured Slide Prompt, or click Add a Prompt to open the permission prompt selector and choose another type.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30e8407-Screenshot_2020-04-13_OneSignal_Mobile_Push_Notifications4.png",
        "Screenshot_2020-04-13 OneSignal Mobile Push Notifications(4).png",
        2228,
        777,
        "#e4e6e6"
      ]
    }
  ]
}
[/block]
### Permission Prompt Editor

In the Permission Prompt Editor, you can select which prompts you wish to use, and style them as you like. Once you have edited the prompt to your liking, click Save.
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
#### Prompt Customization Guides

- [Subscription Bell](doc:permission-requests#section-subscription-bell) - a small icon at the corner of your page that users can interact with to subscribe 
- [Slide Prompt](doc:permission-requests#section-slide-prompt) - a small modal that comes from the center of the page and asks if users are interested in signing up.
- [HTTP Pop-Up Prompt](doc:permission-requests#section-http-pop-up-prompt) (HTTP-only) - a pop-up window that appears after other prompts and is required for HTTP (not HTTPS) sites.
- [Custom Prompts](doc:permission-requests#section-custom-prompts) - Create your own links or buttons as prompts.

## Step 4. Welcome Notification

Welcome notifications are an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. You can edit or disable them at this step.
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
## Step 5. Advanced Options (Optional)

Most Shopify store owners will not have to edit anything in Advanced Options. See [Web Push Advanced Options](doc:web-push-options) to learn more about each option.

## Step 6. Add Code to Site Template

To enable OneSignal on your Shopify site, you will need to copy the code from this step and add it to your site's theme code.
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
To add the code to your Shopify theme:

1. Open your <a href="https://www.shopify.com/admin" target="_new">Shopify admin</a>
2. From your Shopify admin, go to Online Store > Themes
3. Find the store's active theme, and then click Actions > Edit code
4. In the Layout folder, click on your `theme.liquid` file to open it in the online code editor
5. Locate the `</head>` tag in the code editor
6. Paste the OneSignal code you copied above on a blank line within the `</head>` tag
7. Click Save to confirm the change to your theme

## Step 7. Subscribe & Send a Test Notification

Visit the site and subscribe through the OnesSignal permission prompt that you configured in Step 3.

Then, send a test notification to yourself through the OneSignal Dashboard to test your implementation.

---

## Migrating to the Shopify App

If you used the below steps to add OneSignal to your Shopify site, unfortunately there is not a way to migrate your current users to the new Shopify App. This is due to how Shopify required users subscribe to the `os.tc` subdomain in this version whereas the Shopify App allows users to subscribe directly to your site.

However, all is not lost! You can continue to send push from the old OneSignal app to your current subscribers. It is recommended to send a couple notifications letting users know the site has moved and they should subscribe again.

While you may lose subscribers at first, they will come back overtime as the subscription process is much more streamlined and easier using the Shopify App instead of adding the code directly to the site.

### Migration Steps

1 - you need to use a different email for onesignal.com and your shopify account, you won't be able to access the shopify app from your onesignal.com account. It is all handled within the app directly, so you can send push from shopify. All in one place.

In your shopify.com Settings > General 

Make sure you do not use the Store Contact Email for an account at onesignal.com
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/07814cf-Screen_Shot_2020-07-06_at_8.38.28_PM.png",
        "Screen Shot 2020-07-06 at 8.38.28 PM.png",
        1101,
        522,
        "#dbdce5"
      ]
    }
  ]
}
[/block]
2 - you need to remove any code on your site used for OneSignal. This code basically looks like this:
```
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "abcdef12-1234-1234-1234-abcdf1234",
    });
  });
</script>
```

3 - Add the [OneSignal Shopify App](https://documentation.onesignal.com/docs/shopify).