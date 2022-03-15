---
title: "WordPress Setup"
slug: "wordpress"
excerpt: "How to set up OneSignal Web Push notifications on WordPress sites"
hidden: false
createdAt: "2016-09-02T03:13:28.240Z"
updatedAt: "2021-09-07T01:26:27.261Z"
---
This guide will walk you through how to set up web push on [WordPress](https://Wordpress.com) and [WordPress VIP](https://wpvip.com/partner/onesignal/). If you do not use WordPress, or wish to write custom code, please [go to Web Push Quickstart](doc:web-push-quickstart).
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/q1mH2kCK7LQ\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
---

#Step 1. Choose Integration

Head over to onesignal.com to create an account. If this is not your first app with OneSignal, select **New App/Website**, name your app, select **Web** and "Next".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d3f2f0-Screen_Shot_2021-07-05_at_11.40.52_AM.png",
        "Screen Shot 2021-07-05 at 11.40.52 AM.png",
        2140,
        1068,
        "#e4e7e9"
      ],
      "caption": "Image showing platform selection"
    }
  ]
}
[/block]
Select **WordPress Plugin or Website Builder** to continue:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ccf9939-Screen_Shot_2021-07-05_at_10.32.06_AM.png",
        "Screen Shot 2021-07-05 at 10.32.06 AM.png",
        2002,
        1188,
        "#e1e4e6"
      ],
      "caption": "Image showing web push selection"
    }
  ]
}
[/block]
#Step 2. Site Setup

Once you've selected WordPress as your integration, you must fill out information about your site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/662221c-site-setup.jpg",
        "site-setup.jpg",
        1379,
        1019,
        "#f5f7f8"
      ],
      "caption": "Image showing Site Setup step"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "SITE NAME",
    "0-1": "The default name to call your site used in push notifications.",
    "1-0": "SITE URL",
    "1-1": "Your website URL including:\n- `http://` or `https://`\n- `www` or non-www links (e.g. `https://example.com`, `https://www.example.com`)",
    "2-0": "AUTO RESUBSCRIBE (HTTPS ONLY)",
    "3-0": "DEFAULT ICON URL",
    "2-1": "**Recommended:** Allows push subscribers to automatically resubscribe upon returning to your site without being prompted if they clear their browser data or if you are transferring to OneSignal from another push provider.",
    "3-1": "Icon used for the [Slide Prompt](doc:slide-prompt) and default for push notifications.\n\nEnter an `https` icon URL or upload file that is square `256x256` pixels.\n\nThe file must be `.png`, `.jpg`, or `.gif`."
  },
  "cols": 2,
  "rows": 4
}
[/block]
##My site is not fully HTTPS

Select this checkbox if any apply:
- you have an `HTTP`  website
- your site is hosted by WordPress.com
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "CHOOSE A LABEL",
    "0-1": "The subdomain label used for push subscription. See [Web Push HTTP vs. HTTPS](doc:web-push-http-vs-https) for more details."
  },
  "cols": 2,
  "rows": 1
}
[/block]
#Step 3. Advanced Push Settings (optional)

OneSignal automatically provides the necessary certificates to work with Safari Browsers at no additional cost. If you already have your own Safari Web Push Certificates, you may upload it here.

####Optional: Upload your own .p12 certificate

If you would like to add your own Safari P12 Certificate turn on the settings in **Advanced Settings**. This enables you to update your own Private Key File and Private Key Password.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f21e43f-configure-3.jpg",
        "configure-3.jpg",
        1204,
        660,
        "#f5f5f6"
      ],
      "caption": "Advanced push settings in Wordpress Setup."
    }
  ]
}
[/block]
#Step 4. Configure WordPress Plugin

Add the [OneSignal WordPress Plugin](https://wordpress.org/plugins/onesignal-free-web-push-notifications/) to your WordPress website if you have not done so already.

Copy the following keys:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b4aa29-Screen_Shot_2021-07-05_at_11.01.07_AM.png",
        "Screen Shot 2021-07-05 at 11.01.07 AM.png",
        1748,
        862,
        "#f3f4f4"
      ],
      "caption": "Image dhowing your App ID and API Key"
    }
  ]
}
[/block]
Paste these keys into your WordPress plugin **Configure** tab in the appropriate inputs:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d3d86a-Screen_Shot_2021-07-05_at_11.05.05_AM.png",
        "Screen Shot 2021-07-05 at 11.05.05 AM.png",
        2008,
        1270,
        "#cececf"
      ]
    }
  ]
}
[/block]

##Turn on Push Prompts

Enable the Slide Prompt and Subscription Bell Prompt. These prompts allow you to ask site visitors permission to send them push notifications, making them push subscribers to your site.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edc7cb2-Screen_Shot_2021-07-05_at_11.16.22_AM.png",
        "Screen Shot 2021-07-05 at 11.16.22 AM.png",
        2382,
        1082,
        "#dbdbdc"
      ]
    }
  ]
}
[/block]
## Finish and Save Your Settings
Be sure to **Save** your configuration at the bottom of the plugin once you've added these keys.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/289d5d6-Screen_Shot_2021-07-05_at_11.11.18_AM.png",
        "Screen Shot 2021-07-05 at 11.11.18 AM.png",
        2008,
        660,
        "#d5d8d9"
      ]
    }
  ]
}
[/block]
#Step 5. Add your first user

Visit your website and you should see the OneSignal Slide and Subscription Bell on your site. You may need to clear any cache plugins you have and refresh the page.

Subscribe to push notifications and check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Make sure [push notifications are enabled in your device settings](https://documentation.onesignal.com/docs/notifications-not-shown-web-push#notifications-are-blocked-in-settings). Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal. 
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, checkout the [Troubleshooting WordPress](doc:troubleshooting-wordpress-web-push) for common fixes and plugin configurations.\n\nIf stuck, feel free to contact [support@onesignal.com](mailto:support@onesignal.com) for assistance."
}
[/block]
#Step 6. Add Prompts To Your WordPress Site

Setup your prompts in the OneSignal WordPress Plugin, so that users can subscribe to push notifications. You can do this in the **Configure** section of the plugin.

## Subscription Bell

A small icon at the corner of your page that users can interact with to subscribe 
[block:html]
{
  "html": "<div align=\"center\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/1jxH25-Du9k\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
}
[/block]
##Slide Prompt

A small modal that comes from the center of the page and asks if users are interested in signing up.
[block:html]
{
  "html": "<div align=\"center\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tUETfKExzT8\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "More Customizations",
  "body": "For more things you can do with prompting, see [WordPress Customizations](doc:web-push-wordpress-faq)."
}
[/block]
#Step 7. Send Push From Your WordPress Site

Notifications can be sent automatically when you publish a post from the WordPress "Posts" tab. You can send push anytime from the OneSignal.com Dashboard or API. See [Sending Push Messages](doc:sending-notifications).

Simply create your post as usual and under "OneSignal Push Notifications" check **Send notification on post publish**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/69f208a-Screen_Shot_2021-08-09_at_6.10.41_PM.png",
        "Screen Shot 2021-08-09 at 6.10.41 PM.png",
        1990,
        1248,
        "#ced0d1"
      ]
    }
  ]
}
[/block]
If your post is a different post type, you might see "Send notification on forum publish". If you are updating instead of creating, you might see "Send notification on post update". Each of these options should successfully send a notification on the described action.
[block:callout]
{
  "type": "info",
  "title": "More Customizations",
  "body": "For more things you can do with sending push, see [WordPress Customizations](doc:web-push-wordpress-faq)."
}
[/block]
##Welcome Notification

Welcome notifications are an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. You can edit or disable them in the **Configure** section of your plugin.
[block:html]
{
  "html": "<div align=\"center\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9IYvSj38iec\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
}
[/block]