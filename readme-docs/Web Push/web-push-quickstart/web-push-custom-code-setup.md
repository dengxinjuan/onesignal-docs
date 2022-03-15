---
title: "Custom Code Setup"
slug: "web-push-custom-code-setup"
excerpt: "OneSignal Web Push Setup Guide for websites. Works with all Web Push Supported Browsers (Chrome, Firefox, Safari, and more!)"
hidden: false
createdAt: "2017-12-02T04:07:03.868Z"
updatedAt: "2021-07-19T22:33:51.559Z"
---
[block:callout]
{
  "type": "info",
  "body": "You should only use custom code if you absolutely need it. Otherwise, we recommend using the [Web Push Typical Setup](doc:web-push-quickstart) or if using WordPress, see our [WordPress Setup](doc:wordpress).",
  "title": "For Advanced Users Only"
}
[/block]
- ---
# Step 1. Choose Integration

Select **Custom Code** if you are adding our Javascript code to your site.

If you are using our WordPress plugin, see our [WordPress Setup Guide](doc:wordpress).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b179b43-custom-code.jpg",
        "custom-code.jpg",
        2204,
        974,
        "#dfe3e5"
      ],
      "caption": "Image shows Web Config options"
    }
  ]
}
[/block]

----

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
- ---
#Step 3. Advanced Push Settings

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
----
#Step 4. Upload Files

Next, you'll need to add the OneSignal SDK files to your site.

1. Click Download OneSignal SDK files. (You can also [download the files here](https://github.com/OneSignal/OneSignal-Website-SDK/releases/download/https-integration-files/OneSignal-Web-SDK-HTTPS-Integration-Files.zip)). 

2. Unzip the OneSignal SDK files. There should be two files:
  - `https://yoursite.com/OneSignalSDKWorker.js`
  - `https://yoursite.com/OneSignalSDKUpdaterWorker.js`

3. The OneSignal SDK files must be publicly accessible and can be placed at the top-level root of your site. If you want to place them in a subfolder you can! Please see our [OneSignal Service Worker Guide](doc:onesignal-service-worker-faq) for instructions.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f4a1b7-Screen_Shot_2021-07-19_at_3.31.15_PM.png",
        "Screen Shot 2021-07-19 at 3.31.15 PM.png",
        1748,
        390,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]

----

#Step 5. Add Code to Site

To enable OneSignal on your site, you will need to write code to **[initialize OneSignal](doc:web-push-sdk)** and [add web push prompts](doc:permission-requests). You may also have other code you wish to add. 

Initialization code must be placed inside your website's `<head>`. If you do not have access to modify your site's code, you will need to contact a developer to help you.

----

#Step 6. Add your first user

Go to your website and you should see the OneSignal Bell Prompt. Click it to see the native browser prompt and subscribe to push. Then [send yourself a Push Notification](doc:sending-notifications).
[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "If you are having difficulty, please check [Web Push Troubleshooting](doc:troubleshooting-web-push) or contact [support@onesignal.com](mailto:support@onesignal.com) for assistance."
}
[/block]