---
title: "Web Push Quickstart"
slug: "web-push-quickstart"
excerpt: "How to set up web push notifications on your website with OneSignal."
hidden: false
createdAt: "2017-12-02T02:28:33.504Z"
updatedAt: "2021-12-06T19:52:22.223Z"
---
Sending Web Push Notifications is easy with OneSignal. If you haven't already, sign up for a free account on [onesignal.com](https://onesignal.com).

If this is not your first app with OneSignal, click **New App/Website**. Otherwise, you will see the next page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f2869ef-f23ff71-create_an_app.jpeg",
        "f23ff71-create_an_app.jpeg",
        1066,
        548,
        "#d5d9de"
      ]
    }
  ]
}
[/block]
Simply name your app something similar to your site, then select **Web** from the platform list. Click "Next: Configure Your Platform".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4cb8ae7-Screen_Shot_2021-07-09_at_10.22.17_AM.png",
        "Screen Shot 2021-07-09 at 10.22.17 AM.png",
        1804,
        1056,
        "#e3e6e8"
      ]
    }
  ]
}
[/block]
#Step 1. Choose Integration

If you plan to add OneSignal to your site using code, continue with **Typical Site** setup or select [Custom Code Setup](doc:web-push-custom-code-setup).

If you use our [WordPress Plugin](doc:wordpress), [Shopify App](doc:shopify) or a custom Website Builder, see our [Website Builder Options]().
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/804f114-Screen_Shot_2021-07-09_at_10.36.10_AM.png",
        "Screen Shot 2021-07-09 at 10.36.10 AM.png",
        1780,
        750,
        "#d8dbde"
      ]
    }
  ]
}
[/block]
##Website Builder Options

OneSignal provides easy integration with the following 3rd party website builders:
[block:parameters]
{
  "data": {
    "h-0": "Official Plugins",
    "0-0": "[WordPress Guide](doc:wordpress)",
    "1-0": "[Shopify App Guide](doc:shopify)",
    "h-1": "Common Integrations",
    "0-1": "[Blogger Setup](doc:blogger)",
    "h-2": "",
    "0-2": "[Bubble Setup](doc:bubble)",
    "1-1": "[Squarespace Setup](doc:squarespace)",
    "1-2": "[Magento Setup](doc:magento-setup)",
    "2-1": "[Drupal Setup](doc:drupal)",
    "2-2": "[Joomla Setup](doc:joomla-setup)",
    "3-1": "[Wix Setup](doc:wix)",
    "3-2": "[Weebly Setup](doc:weebly)",
    "0-3": "[Webflow Setup](doc:webflow-setup)"
  },
  "cols": 4,
  "rows": 4
}
[/block]
#Step 2. Site Setup

Input your default site information.
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
    "1-1": "Your website URL including:\n- `http://` or `https://`\n- `www` or non-www links (e.g. `https://example.com`, `https://www.example.com`)\n\nTrying to test locally, see [Local Testing Setup](doc:web-push-options#local-testing)",
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
- you cannot upload files to your web host's servers
- your site is hosted by WordPress.com or HubSpot COS
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "CHOOSE A LABEL",
    "0-1": "The subdomain label used for push subscription.\n\nSet this to be something similar to your current domain.\n\nSee [Web Push HTTP vs. HTTPS](doc:web-push-http-vs-https) for more details."
  },
  "cols": 2,
  "rows": 1
}
[/block]
#Step 3. Permission Prompt Setup

By default, the [Push Slide Prompt](doc:slide-prompt) will show on the first page view after 10 seconds. You can skip this step for now and come back later to add new prompts or modify this one. See our [Web Prompting Guide](doc:permission-requests) for more details.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af9542c-Screen_Shot_2021-07-09_at_11.16.03_AM.png",
        "Screen Shot 2021-07-09 at 11.16.03 AM.png",
        1764,
        476,
        "#f7f8f9"
      ]
    }
  ]
}
[/block]
#Step 4. Welcome Notification (Optional)

A push notification sent immediately to current user upon subscribing to your site for the first time. Enabled by default, it can be toggled-off to prevent showing and update message content at anytime. If you want to add a delay, toggle off this notification and use our [Automated Messages](doc:automated-messages).


#Step 5. Advanced Push Settings (Optional)

OneSignal provides several [Advanced Options](doc:web-push-options). For instance:

##Multiple Service Workers
If you are using or plan to use another service worker on your site, please follow the [OneSignal Service Worker Setup Guide](doc:onesignal-service-worker-faq).

##Safari - Custom Certificate (Optional)
OneSignal automatically provides the necessary certificates to work with Safari Browsers at no additional cost. If you already have your own Safari Web Push Certificates, toggle on this option to upload your `Safari Web .p12 Push Certificate` and password.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2699b13-Screen_Shot_2021-07-09_at_11.37.02_AM.png",
        "Screen Shot 2021-07-09 at 11.37.02 AM.png",
        1022,
        436,
        "#f0f1f2"
      ],
      "caption": "",
      "sizing": "80"
    }
  ]
}
[/block]
# Step 6. Upload Files

Next, you'll need to add the OneSignal SDK Service Worker file to your site.

### Option 1 - Create file and copy code

1. Create a new file `OneSignalSDKWorker.js` at the top-level root of your site (public).

2. Copy the following import statement: `importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');`

### Option 2 - Download zip folder and upload

1. Click Download OneSignal SDK files. (You can also [download the file here](https://github.com/OneSignal/OneSignal-Website-SDK/files/7585231/OneSignal-Web-SDK-HTTPS-Integration-Files.zip)). 

2. Unzip the download. There should be a single file you need to host:
  - `https://yoursite.com/OneSignalSDKWorker.js`

### Hosting the file

The OneSignal SDK files must be publicly accessible and can be placed at the top-level root of your site. **Note: ** If you want to place them in a subfolder you can! Please see our [OneSignal Service Worker Guide](doc:onesignal-service-worker-faq) for instructions.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d21b3b7-Screen_Shot_2021-07-09_at_11.41.32_AM.png",
        "Screen Shot 2021-07-09 at 11.41.32 AM.png",
        1724,
        406,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Note regarding Service Worker file(s)",
  "body": "If you are revisiting this page for an existing site set up prior to November 22, 2021, and are currently using two service worker files:\n   - `OneSignalSDKWorker.js`\n   - `OneSignalSDKUpdaterWorker.js`\n\nyou **should** continue hosting both files. This is to prevent the Service Worker from going stale if a user doesn't return to your site in some time.\n\nOn November 22, 2021 the OneSignal Web SDK was updated to require only a single service worker file. New setups will now only require a single file."
}
[/block]
#Step 7. Add Code to Site

To enable OneSignal on your site, you will need to paste the provided code into your website's `<head>`. If you do not have access to modify your site's code, you will need to contact a developer to help you.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0b0e9ca-Screen_Shot_2021-07-09_at_11.55.32_AM.png",
        "Screen Shot 2021-07-09 at 11.55.32 AM.png",
        1724,
        810,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
#Step 8. Subscribe and Send Yourself a Notification

Visit your website and you should be prompted to subscribe to push notifications based on the prompt settings you setup. See <a href="doc:permission-requests" target="_blank">Web Prompts Guide</a> for more details.

Check your OneSignal Dashboard **Audience > All Users** to see your Device Record and <a href="doc:users-and-devices" target="_blank">set yourself as a test user</a>.

Then head over to **Messages > New Push** to <a href="doc:sending-notifications" target="_blank">Send your first Push Notification</a>.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, checkout the [Web Push Troubleshooting Guide](doc:troubleshooting-web-push) for common fixes.\n\nIf stuck, feel free to contact [support@onesignal.com](mailto:support@onesignal.com) for assistance."
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Web Push Tutorials](doc:use-cases-best-practices) for next steps."
}
[/block]