---
title: "Shopify App Questions"
slug: "shopify-app-questions"
excerpt: "FAQ on OneSignal-Shopify App Integration and How it works"
hidden: false
createdAt: "2020-03-03T04:13:04.455Z"
updatedAt: "2021-08-25T01:12:38.350Z"
---
# Features & Functionality

## How often are the abandoned cart notifications sent?
Abandoned Cart notifications are sent between 60 and 90 minutes after a user leaves your site if they have item(s) still in their cart.
- Returning to your site will trigger another abandoned cart notification to be sent between 60 and 90 minutes after the visit started.
- Abandoned Cart notifications will no longer be sent to the customer if they:
1. Complete checkout and have an empty cart
2. Unsubscribe from push notifications from your site
3. Don't visit your site and so have no recent session

## How do In-Stock alerts work?
Whenever a product SKU has zero inventory count, OneSignal prompts the site visitors to opt-in to these alerts and get notified when the product is available again. Subscribers are tagged with the product and SKU details on OneSignal. 

As soon as the inventory count for a product SKU becomes greater than 0 on your Shopify store, we check for all the shoppers who have subscribed to the back-in-stock alerts for that product and send them the notifications. 
After receiving the in-stock alert, the shopper will be unsubscribed from back-in-stock alerts for that product. If the product is sold out again, shoppers will have to opt-in again to get these notifications.

## How do Shipping Updates work?

Shipping Updates are sent as soon as the order status changes to *fulfilled*. When a user makes a purchase, they are ["tagged"](#onesignal-shopify-app-tags) with `made_purchase = true` and a segment is created for all users that have made a purchase so you can send notifications to them anytime you need.

## How is "Revenue" calculated in the OneSignal dashboard?

Revenue tracked in OneSignal is all purchases from customers who received a push notification in the past 1 hour leading up to the purchase or clicked a notification leading to a purchase.

## How do I delay prompting my site's visitors to subscribe?

In your OneSignal-Shopify App under the **Settings** tab > **Advanced Settings** you can update the slide prompt to show after x page views and x seconds. In this example, the slide prompt will not show until the user has visited 3 page views and 30 seconds has passed. So on they are on the 3rd page for 30 seconds, they will get prompted.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1031059-Screen_Shot_2020-08-10_at_11.06.35_AM.png",
        "Screen Shot 2020-08-10 at 11.06.35 AM.png",
        800,
        748,
        "#eaebee"
      ]
    }
  ]
}
[/block]

## If I uninstall the OneSignal app, what happens to my subscribers?

Per Shopify's guidelines, if you uninstall the OneSignal app, we will delete all of the data we've stored on your behalf, and your customers will no longer receive notifications from OneSignal.

If you decide to re-install the OneSignal app at a later date, your users will need to clear their browser cookies and re-subscribe through the OneSignal prompt in order to receive notifications through OneSignal again.

## What are the differences between the OneSignal for Shopify App and the OneSignal Shopify Web Builder integration?

**OneSignal for Shopify App:**

- No code required
- Log in through your Shopify store owner account
- Ready-to-launch automated notifications for eCommerce
- Streamlined campaign creation
- Support for Web Push Notifications only
- 1 option for permission prompt (slide prompt)
- Revenue-focused analytics reports

**OneSignal Shopify Web Builder Integration:**

- Code required
- Log in through OneSignal.com
- Set up your own automated notifications
- Additional Push Notification platforms
- Multiple permission prompt options
- Marketing-focused analytics reports


## What if I have 2 different Shopify Websites?

Currently if you manage 2+ websites with the same shopify.com email login, you will only be able to setup OneSignal on a single website. You will need to login to shopify.com with a different email for each site to use OneSignal on both sites.

---

# Customizations

## Can I customize the OneSignal code on my site?

If you've installed the OneSignal for Shopify app in your store, you will not be able to modify the OneSignal code that runs on the pages. 

At this time, stores that are using our app must use the options that are available within the OneSignal for Shopify Dashboard.

## How can I customize the Automations (Abandoned Cart, Shipping Updates, etc)?

You can customize the message that OneSignal sends by clicking the "Customize" link next to the Message field on the message form.

OneSignal allows you to use Liquid syntax for customizing this type of message. The following template tags are allowed:

- `{{item_count}}`
- `{{item_name}}`

Below is an example of customizing the message with `{{item_name}}` and `{{item_count}}` to display different text in the notification based on how many items are in the cart:
[block:code]
{
  "codes": [
    {
      "code": "{% assign item_count = item_count | plus: 0 %}\n{% if item_count == 1 %}You left {{item_name}} in your cart.{% endif %}\n{% if item_count == 2 %}You left {{item_name}} and {{item_count | minus: 1}} more item in your cart.{% endif %}\n{% if item_count > 2 %}You left {{item_name}} and {{item_count | minus: 1}} more items in your cart.{% endif %}",
      "language": "liquid"
    }
  ]
}
[/block]

##Why do my abandoned cart images look incorrect?

Images in push look best with a `2:1` aspect ratio. OneSignal sets a data tag of the image url which defaults to the aspect ratio of the uploaded image. If your images are not a `2:1` aspect ratio when uploaded, they may look off in the push on Windows. Luckily, Shopify's CDN allows you to update images via simple URL changes.

If you need help fixing this, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact OneSignal Support</a> and ask us to change the Abandoned Cart Image to use `{{item_image_url | split: '.jpg' | first}}_500x250_crop_center.jpg`. We will be happy to update this for you.

## What language options do you provide?

You can send push notifications in multiple languages. The default is "Any/English" which means you can put any language you want into the push and all users will get it. You can add multiple languages by clicking the pencil button to add more:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cc8937a-Screen_Shot_2020-07-04_at_1.11.17_PM.png",
        "Screen Shot 2020-07-04 at 1.11.17 PM.png",
        620,
        400,
        "#c9caca"
      ]
    }
  ]
}
[/block]
To translate the Slide Prompt, there is currently not an option for this, you should put the main language of your site as the Slide Prompt Language:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e35b4c9-Screen_Shot_2020-07-04_at_1.19.12_PM.png",
        "Screen Shot 2020-07-04 at 1.19.12 PM.png",
        433,
        400,
        "#ebecee"
      ]
    }
  ]
}
[/block]
To translate the OneSignal Shopify App in your Shopify Dashboard, it is recommend to use the [Google Translate Extension for Chrome](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb/RK%3D2/RS%3DBBFW_pnWkPY0xPMYsAZI5xOgQEE-
) at this time. If you would like us to translate the plugin to your language, reach out to our support team and let us know which language you prefer!

## OneSignal Shopify App Tags

OneSignal will automatically add the following data tags to devices based on certain events performed by users like adding items to their cart and making purchases.

At this time tags cannot be added through client side code. However, it is possible to update tags server side with our [Edit device](ref:edit-device), we don't recommend adding additional tags at this time but please contact us with your Feature Requests!

### Abandoned Cart Tags
When a user adds an item to their cart OneSignal will add the following data tags to the device record:
- `item_name` = the name of the last item added to the cart
- `item_count` = the number of how many items are in the cart currently
- `item_image` = the url of the last image added to the cart

### Shipping Update Tags
When users make a purchase, we will add the permanent tag: `made_purchase` with a value of `true` to mark all users that have made a purchase at some point.

We will also add the following tags temporarily for notification personalization:
- `shipped_item_image_url` = the image url to be shown in the push
- `shipped_item_count` = the number of items that have been shipped

---

# Existing OneSignal Customers

## I already have OneSignal code on my site. Can I use this app in my store?

We do not recommend moving from the [Website Builder version of OneSignal's implementation](docs:shopify-website-builder-setup-legacy) to using the app because you will lose all of your current subscribers, and will also be unable to transfer any of your existing account data to the app.

## Will the existing OneSignal Shopify integration be deprecated?

Support for your existing Shopify integration of OneSignal isn't going away or changing. We recommend that you keep your existing integration in place, and only install the OneSignal Shopify app if you're starting a new store from scratch.

---

# General Web Push Notification Questions

## What happens when users clear their browser cache and cookies?

Browsers have implemented the Web Push Standard in a way that when users clear their browser cache and cookies, they get unsubscribed from notifications. This is because subscribed user data is stored in the browser. Removing that data makes the browser "forget" that subscriber.

However, clearing this data does not remove the permissions that have already been granted by the user to receive notifications in that browser. Users should be automatically re-subscribed when they return to your site, unless they change their Browser's Notification Permissions to "Ask" or "Block":
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b58b0d-82c7a5b-Screen_Shot_2019-11-21_at_2.42.50_PM.png",
        "82c7a5b-Screen_Shot_2019-11-21_at_2.42.50_PM.png",
        321,
        340,
        "#f2f2f3"
      ]
    }
  ]
}
[/block]
Users will also not be auto-resubscribed if they clear notifications from the Browser's Notification Settings:

- Chrome: chrome://settings/content/notifications
- Firefox: about:preferences#privacy > Permissions > Notifications
- Safari: Preferences > Websites > Notifications > Remove

---

# Billing & Pricing

## How much does OneSignal for Shopify cost, and how will I be charged?

The OneSignal for Shopify app is free.