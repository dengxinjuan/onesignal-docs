---
title: "Shopify App Overview"
slug: "shopify-app-overview"
excerpt: "Overview of OneSignal Shopify App Features."
hidden: false
createdAt: "2021-07-10T11:32:54.052Z"
updatedAt: "2021-07-10T12:16:44.021Z"
---
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/D4vxZu4p_IA\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
This guide walks through all OneSignal Shopify App features and setup.
[block:callout]
{
  "type": "info",
  "title": "Setup OneSignal Shopify App",
  "body": "If you have not done so, visit [Shopify App Setup](doc:shopify) to get started!"
}
[/block]
#Permission Prompt

Your site visitors must give you permission to send them push notifications. This happens through a prompt which you can customize to ask them to subscribe to your messages.

You can always edit within your OneSignal Shopify App [settings](https://app.onesignal.com/store-dashboard/settings).
[block:callout]
{
  "type": "info",
  "title": "Set your Icon!",
  "body": "The icon image you set here for the icon field is used in some of the Automated Messages that don't include products.\n\nA square `256x256` pixels icon is recommended for best fit across all browsers."
}
[/block]
You can customize the message, your own icon, and the delay for when to show the prompt:
- pageviews controls how many pages or refreshes the user must perform to be prompted.
- seconds controls how long the user has to be on the page before the prompt shows.
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
#Welcome Message Setup

Welcome notifications are an optional way to thank users after subscribing to your site. Users will see a welcome notification as soon as they subscribe. 

Can be edited within [Messages > Automation > Welcome New Subscribers](https://app.onesignal.com/store-dashboard/automation/welcome-message) screen.

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
#Abandoned Cart Recovery Setup

Abandoned Cart notifications are a way to bring shoppers back to your site if they leave after reaching the Shipping step in the checkout process. If you click Skip at this step, the Abandoned Cart notifications will not be enabled.
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
##Testing Abandoned Cart Notifications

If the Abandoned Cart notifications are set to be active, simply add an item from your Shopify store to your cart

Abandon the checkout process either by navigating to another page or closing the cart's browser tab.

You should receive an abandoned cart notification within approximately 60 minutes from the time you navigated away from the cart.

##Changing Abandoned Cart Message

We generally don't recommend customizing this message since it includes a lot of information to help remind the user about the last item added to the cart. If you would like to customize the message and ok with adding some liquid syntax see the [FAQ - Customizing Abandoned Cart Notifications](https://documentation.onesignal.com/docs/shopify-app-questions#how-can-i-customize-the-automations-abandoned-cart-shipping-updates-etc).

#In-Stock Alerts
A big challenge in e-commerce is to bring visitors back to your website in order to convert these interested shoppers into buyers. But what if the product they are looking for on your website is sold out?

OneSignal’s in-stock automation allows your site visitors to get notified as soon as an item they were looking for is back in stock. Shoppers are asked for push notification permissions when they visit a product page that has zero inventory.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/451282f-permission.png",
        "permission.png",
        2344,
        1206,
        "#f8f9fa"
      ],
      "border": true
    }
  ]
}
[/block]
When they opt-in, they receive back-in-stock alerts prompting the shoppers to complete the purchase before the product is sold out again. These alerts will have a link to the product page and the product image added automatically, without any configuration.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa95816-notification.png",
        "notification.png",
        2558,
        1494,
        "#e9eaeb"
      ],
      "sizing": "full"
    }
  ]
}
[/block]
###Testing In-Stock Alerts
As the Shopify store admin:
* Activate in-stock alerts automation on OneSignal
* Change the inventory Quantity Available for any product SKU to 0 (SKU must be set)
* Uncheck "Continue selling when out of stock" if checked
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae5de3e-Screen_Shot_2020-10-12_at_4.16.36_PM.png",
        "Screen Shot 2020-10-12 at 4.16.36 PM.png",
        504,
        519,
        "#f9fafa"
      ]
    }
  ]
}
[/block]
As a shopper:
* Open another browser.
* Navigate to the product SKU that you set out-of-stock earlier on your store.
* Subscribe to the in-stock permission prompt.

As the Shopify store admin, change the inventory count for the product SKU to anything greater than 0, indicating the product is back in stock. You should receive the in-stock alert on the browser you subscribed to as a shopper.


#Send Shipping Updates
Shopper satisfaction is very critical in generating repeat business. Keep your customers informed and happy by sending “Shipping Notifications” for their orders. We will automatically send notifications when items in an order are partially or completely fulfilled.

Product Image and Shipment tracking URL (*if available, otherwise order status page*) will be automatically added to the shipping notification.

Shipping notifications are sent to shoppers who have opted-in to receiving push notifications on your store and have ordered items.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d688e60-shipping_updates.png",
        "shipping updates.png",
        2066,
        1446,
        "#e9ebec"
      ]
    }
  ]
}
[/block]
###Testing Shipping Notifications
Log in as a shopper:
* You must have subscribed to notifications from OneSignal in step #4
* Place a test order
* Navigate to another page or close the browser tab from which you have placed the test order

Log in as an admin:
* Activate Shipping Update notifications on OneSignal
* Fulfill the test order partially or completely on Shopify
* Test shopper should receive the shipping update with the tracking url (if available)

---

#Sending Notifications

Through the OneSignal-Shopify App Dashboard, you can send any message you want, anytime you need! Messages are also saved so you can duplicate and edit them to re-use for any purpose. Common examples we will demonstrate below include:
- Sending Discounts
- Ask Users to follow you on Social Media
- Cross Promotions with other sites


Within [Messages > Campaigns](https://app.onesignal.com/store-dashboard/campaigns) select **New Campaign** 

Add the **Campaign Name** which will help identify the message to reuse again later. For example:
- `10% Discount Engaged Users`
- `Follow Us on Twitter over 1 week new`
- `Cross-Promote Brand X`

#Audience

Next we select our **Audience** which is the [Segments](doc:segmentation) of users eligible to receive the message. This defaults to All Subscribed Users, but you can **Send to Particular Segment(s)** to add more or different segments.

For "Discount Example", the default segment "Engaged Users" contains subscribers that have been back to the site in 1 week and have been on the site 5 times or more, these are users that are very active on the site and we can reward them with a discount.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f417c00-Screen_Shot_2020-10-11_at_5.11.51_PM.png",
        "Screen Shot 2020-10-11 at 5.11.51 PM.png",
        1184,
        531,
        "#fafbfc"
      ]
    }
  ]
}
[/block]
For "Follow Us on Twitter over 1 week new" campaign, we are going to create a message we can send once a month or every 3 weeks. After a week of subscribing, uses will be in this segment for 2 more weeks, then leave. This gives us the opportunity to reach out every couple weeks to new users.
- Click **Add Segment** > **Create Segment**. 
- Name this segment `First Session 7-21 days`
- Set "First Session" greater than 168 hours
- Click **Add filter**
- Set "First Session" less than 504 hours
- Click **Create Segment**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e9b855-Screen_Shot_2020-10-11_at_5.26.19_PM.png",
        "Screen Shot 2020-10-11 at 5.26.19 PM.png",
        888,
        799,
        "#f2f3f5"
      ]
    }
  ]
}
[/block]
##Segment with User Tag

With the **User Tag** filter, you can segment users with the "Tags" OneSignal adds when actions are made. A couple examples:

`made_purchase` - set to `true` to target users that have made a purchase at some time in the past.

`item_count` - how many items in their cart currently. You can set "greater than" or "less than" to target subscribers with x number of items in their carts.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cfdb917-Screen_Shot_2020-11-24_at_10.00.18_AM.png",
        "Screen Shot 2020-11-24 at 10.00.18 AM.png",
        886,
        504,
        "#eef0f2"
      ]
    }
  ]
}
[/block]
Example for subscribers that "made a purchase".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7fbee3-Screen_Shot_2020-11-24_at_10.01.19_AM.png",
        "Screen Shot 2020-11-24 at 10.01.19 AM.png",
        853,
        79,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]
 


#Message

You can add a the following customizations to your message. Browsers do not support custom font, italics, bold, or other text decorations.
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Details",
    "0-0": "Title",
    "0-1": "Top Bold part of the message. Multiple Languages & [Emojis](https://getemoji.com/) Supported. Just copy-paste the desired emoji into the message.",
    "1-0": "Message",
    "1-1": "The main text of your message. Multiple Languages & [Emojis](https://getemoji.com/) Supported. Just copy-paste the desired emoji into the message.",
    "2-0": "Icon",
    "2-1": "Upload or use a direct URL to the image. Defaults to your \"Permission Prompt\" icon from [step 2](#2-permission-prompt-setup) if not set",
    "3-0": "Link",
    "3-1": "The URL you want the user to visit when clicking the push notification. Can be any URL, does not need to be your site."
  },
  "cols": 2,
  "rows": 4
}
[/block]
For a "Social Media Example" copy-paste the URL to your social media account into the link, for instance: `https://twitter.com/onesignal`

For a "Discount Example", head over to your shopify.com **Discounts** tab to create your discount. After saving your discount, you will see the "Promote" button with option to "Get a shareable link". 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7509af-Screen_Shot_2020-10-11_at_5.33.30_PM.png",
        "Screen Shot 2020-10-11 at 5.33.30 PM.png",
        1373,
        385,
        "#d3d5dd"
      ]
    }
  ]
}
[/block]
Copy-Paste the provided URL into the "Link" field and your message may look something like this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fd9660-Screen_Shot_2020-10-11_at_5.49.53_PM.png",
        "Screen Shot 2020-10-11 at 5.49.53 PM.png",
        1182,
        694,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]
##Schedule

You can schedule the message up to 30 days in advance and choose to send the message immediately to each user or at a specific time in the user's own local timezone.

For example, if you set "Send immediately" and "Deliver per subscriber's timezone" at 7:15 pm, each user will get it the next time it is 7:15 pm in their timezone. If that time is passed, they will get it the next day.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/255760d-Screen_Shot_2020-10-11_at_5.53.56_PM.png",
        "Screen Shot 2020-10-11 at 5.53.56 PM.png",
        1182,
        489,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Campaign Created!",
  "body": "Click **Review & Send** to send the message or **Save as Draft** to come back to it later to send."
}
[/block]
----

# Frequently Asked Questions

- [How often are abandoned cart notifications sent?](doc:shopify-app-questions#section-how-often-are-abandoned-cart-notifications-sent)
- [I already have OneSignal code on my site. Can I use this app in my store?](doc:shopify-app-questions#section-i-already-have-one-signal-code-on-my-site-can-i-use-this-app-in-my-store)
- [Can I customize the OneSignal code on my site?](doc:shopify-app-questions#section-can-i-customize-the-one-signal-code-on-my-site)