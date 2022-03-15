---
title: "Shopify App Setup"
slug: "shopify"
excerpt: "How to set up Web Push notifications on Shopify sites using the OneSignal Shopify App."
hidden: false
createdAt: "2016-09-20T08:50:23.515Z"
updatedAt: "2021-07-10T12:11:09.892Z"
---
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/5g3QSTBpK-w\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
This guide walks through Web Push Setup for your Shopify store using the OneSignal Shopify App. 

#Requirements

- A Shopify store.
- A unique email for shopify.com not associated with a OneSignal.com account, your Shopify Login email cannot be same as OneSignal.com email. If it is, login to onesignal.com and follow these [steps to easily reset your email](doc:manage-your-onesignal-account#reset-onesignal-account-email).
[block:callout]
{
  "type": "warning",
  "title": "Warning for Existing OneSignal Accounts",
  "body": "Installing the OneSignal Shopify App will not work if your email for onesignal.com and shopify.com are the same. \n\nTo easily change your onesignal.com email, login to onesignal.com and [follow these steps to reset your email.](doc:manage-your-onesignal-account#reset-onesignal-account-email)"
}
[/block]
#Download the OneSignal Shopify App

Within your Shopify Dashboard, go to your Apps and click **[Visit the Shopify App Store](https://apps.shopify.com/onesignal)**, search for OneSignal and click the Add app button. Review the permission request screen, and click to Install app located at the bottom.

On the confirmation screen that appears, click Let's Get Started.

#Step 1. Ask for permission

Your site visitors must give you permission to send them push notifications. This happens through a prompt which you can customize to ask them to subscribe to your messages.
[block:callout]
{
  "type": "info",
  "title": "Set your Icon!",
  "body": "The icon image you set here for the icon field is used in some of the Automated Messages that don't include products.\n\nA square `256x256` pixels icon is recommended for best fit across all browsers."
}
[/block]
You can customize the message, your own icon, and the delay for when to show the prompt:
- pageviews controls how many pages or refreshes the user must perform to be prompted
- seconds controls how long the user has to be on the page before the prompt shows
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8cd5281-Screen_Shot_2020-10-10_at_10.50.38_PM.png",
        "Screen Shot 2020-10-10 at 10.50.38 PM.png",
        1057,
        867,
        "#e8e9eb"
      ]
    }
  ]
}
[/block]
During setup, if you click Skip at this step, the prompt will not be enabled on your site, and visitors will be unable to subscribe to your notifications. You can always turn this prompt on or off within your OneSignal Shopify App [settings](https://app.onesignal.com/store-dashboard/settings).

#Step 2. Welcome Message Setup

Welcome notifications are an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. 

During setup, if you Skip this step, the welcome notification will not be enabled but can be turned back on within [Messages > Automation > Welcome New Subscribers](https://app.onesignal.com/store-dashboard/automation/welcome-message) screen.

**Note:** The image you select for the Icon field is shared with the Permission Prompt from Step 1.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/91673a8-Welcome_Message_Setup.png",
        "Welcome Message Setup.png",
        1728,
        1220,
        "#e6e9eb"
      ]
    }
  ]
}
[/block]
#Step 3. Recover abandoned carts

Abandoned Cart notifications are a way to bring shoppers back to your site if they leave after reaching the Shipping step in the checkout process. If you click Skip at this step, the Abandoned Cart notifications will not be enabled. You can always come back later.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/18257fb-Abandoned_Cart_Automated_Message_Setup.png",
        "Abandoned Cart Automated Message Setup.png",
        1728,
        1211,
        "#e6e9eb"
      ]
    }
  ]
}
[/block]
#Step 4. Subscribe & Send a Test Notification

Visit your site and you should see the prompt you setup from [step 2](#2-permission-prompt-setup), you may need to wait or click around the site based on the time and pageview delay you set.

Once you click the "OK" button on the slide prompt and "Allow" button the native prompt, you should see the welcome notifications setup from [step 3](#3-welcome-message-setup).

Within [Audience > All Users](https://app.onesignal.com/store-dashboard/users) you should see at least 1 device, select the 3-dot menu button under Actions and click **Add to Test Users** to set yourself as a test user.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c450a7-Screen_Shot_2020-10-10_at_10.59.54_PM.png",
        "Screen Shot 2020-10-10 at 10.59.54 PM.png",
        1547,
        458,
        "#d7d9dc"
      ]
    }
  ]
}
[/block]
Next, head to [Messages > Campaigns](https://app.onesignal.com/store-dashboard/campaigns) and select "New Campaign" to send a message. Simply fill out the form and within the "Message" screen, you will see a "Send Test" button. You can now send yourself a test anytime.
[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "If you are having difficulty contact [support@onesignal.com](mailto:support@onesignal.com) for assistance."
}
[/block]