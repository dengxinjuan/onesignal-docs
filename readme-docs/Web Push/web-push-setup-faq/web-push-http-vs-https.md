---
title: "Web Push HTTP vs. HTTPS"
slug: "web-push-http-vs-https"
excerpt: "Setting up features for HTTP and HTTPS sites for Web Push (Chrome, Firefox, Safari)"
hidden: false
createdAt: "2016-09-22T04:28:52.390Z"
updatedAt: "2020-03-04T21:25:36.423Z"
---
OneSignal supports two different underlying technologies for customers looking to integrate push notifications on their websites. These technologies are called the HTTPS SDK and the HTTP SDK.

Customers that have more control over the technology used to build their sites will typically support our HTTPS SDK, whereas customers that use website builder software such as Shopify and Blogger often must use our HTTP SDK.

## OneSignal's HTTPS SDK

**Recommendation**: We recommend new customers always use the HTTPS SDK if their website supports it.

Using push notifications with our HTTPS SDK has the following benefits that are not available when using our HTTP SDK:

1. **Clarity** - Push notifications are seen as officially coming from your domain name, rather than `yoursite.os.tc`. This may help reduce confusion with some users.
2. **More subscribers** - Users need to go through one less step to subscribe to notifications, meaning less friction to subscribe.
3. **More options** - You may directly trigger the Browser Permission Request on the page users are on.
4. **More flexibility** - Users may be migrated from one push provider to another.

## OneSignal's HTTP SDK

**Recommendation**: Before using the HTTP SDK, we recommend customers first determine if they can upgrade their site to meet the requirements for using the HTTPS SDK. We recommend using the HTTP SDK **only if you cannot use the HTTPS SDK**.

The following are some reasons why you may not be able to use our HTTPS SDK:

1. Some HTTPS website providers do not allow uploading files to the root directory, which is required to use the HTTPS SDK. These providers include (but are not limited to): Shopify, Blogger, Drupal, Squarespace, Weebly, OpenCart, and others. 
2. Not all sites use HTTPS exclusively. Some sites use a combination of HTTP and HTTPS (e.g. some shopping sites), and the OneSignal HTTPS SDK requires exclusive use of HTTPS.
3. Not all sites use HTTPS at all. Some sites only use HTTP. 

### Limitations of the HTTP SDK

The OneSignal HTTP SDK allows website operators to work around the limitations of their website technologies to offer push notifications when they otherwise could not. The capabilities of the OneSignal HTTP SDK are somewhat limited relative to our native HTTPS SDK, which is why we encourage people to use our HTTPS SDK when possible. The effects of these limitations are as follows:

1. **Less clarity** - Push notifications **do not** come from your own domain, and instead must come from the label you chose using the `.os.tc` subdomain. E.g. `yoursite.os.tc`
2. **Fewer subscribers** - Users must always go through an extra step to subscribe, clicking on a button in a pop-up window that is displayed after they opt-in to notifications in order to become subscribed.
3. **Less flexibility** - Users cannot be migrated away from OneSignal.

----

## Upgrading Sites to the HTTPS SDK

Some customers may wish to switch from the HTTP SDK to the HTTPS SDK to gain the user experience benefits of the HTTPS SDK. The only requirement to upgrade is that **your site must *only* support HTTPS** and must be able to upload files to the root directory of your website.
[block:callout]
{
  "type": "danger",
  "body": "**ALL CURRENT SUBSCRIBERS WILL BE LOST** when switching from our HTTP SDK to our HTTPS SDK. [Learn more.](#section-why-will-my-subscriber-base-start-over-from-zero-after-upgrading-to-the-https-sdk-)"
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "**DO NOT UPGRADE** if the HTTP version of your site is still accessible. If users visit your HTTP site after you upgrade to the HTTPS SDK, they will not be able to subscribe. [Learn how to redirect users to HTTPS](#section-how-do-i-redirect-users-to-my-https-site-)."
}
[/block]

### How to Upgrade (Typical Sites)

Just create a new app for your site following our [Typical Setup](doc:web-push-typical-setup) process, enter in your new HTTPS site URL, and be sure to leave the `My site is not fully HTTPS` option **disabled**.

### How to Upgrade (Custom Code)

1. Create a new app for your HTTPS site following our [Custom Code Setup](doc:web-push-custom-code-setup) guide.

2. Update your site [with the new initialization code](doc:web-push-sdk-setup-https#section-3-include-and-initialize-the-sdk). There **should not** be a `subdomainName` parameter in your init code.

### How to Upgrade (WordPress)

1. Create a new app for your HTTPS site following our [Wordpress Setup](doc:wordpress) process, enter in your new HTTPS site URL, and be sure to leave the `My site is not fully HTTPS` option **disabled**. 

2. Visit your WordPress admin panel, visit our plugin admin page, select the Configuration tab, and at the top under Account Settings enable "My site uses an HTTPS connection (SSL)". 

3. Make sure the "App ID" textbox points to your new app's ID.
 
4. Make sure your "REST API Key" textbox points to your new app's REST API key.

5. **Important**: If your Configuration page shows a *Google Project Number* textbox, **be sure to clear this value** and then click Save.

### How to Upgrade (Magento, Joomla, Drupal)

Just create a new app for your site following the appropriate setup guide ([Magento](doc:magento-setup), [Joomla](doc:joomla-setup), [Drupal](doc:drupal)), enter in your new HTTPS site URL, and be sure to leave the `My site is not fully HTTPS` option **disabled**.

### After You Upgrade

Once you've upgraded to the HTTPS SDK, you should have two apps in OneSignal: one for your users that signed up on the legacy HTTP SDK, and one for any new users that have signed up on the HTTPS SDK. We recommend **only** sending notifications to users in your app that uses the HTTPS SDK. [Learn more](#section-can-i-still-use-my-old-http-app-after-upgrading-to-the-https-sdk-).

If your old app had Automated Messages, Segments, or Templates, you will have to recreate those in your new HTTPS SDK app.

---

## FAQ

#### What website technologies require the HTTP SDK?

See [Why does my site require a label?](doc:web-push-setup-faq#section-why-does-my-site-require-a-label-)

#### Why will my subscriber base start over from zero after upgrading to the HTTPS SDK?

Web push permissions and subscriptions are separated by domain/protocol, and the browser considers *http://site.com* and *https://site.com* to be two entirely different sites, and so there isn't a way to transfer the subscription.

#### Can I still use my old HTTP app after upgrading to the HTTPS SDK?

While your old users are still subscribed and can be reached, we **do not recommend sending notifications via your old app**. This is because once you switch to your HTTPS site, any users previously subscribed will see a prompt requesting them to subscribe again, meaning **users are likely to become double subscribed**. If you then send notifications from both your old HTTP app and your new HTTPS app, those users will receive two notifications. After setting up your HTTPS app, you can send one last message to your old subscribers letting them know you've switched over.

#### How does OneSignal support HTTP sites, if push notifications require HTTPS?

Web push notifications actually do not support HTTP sites at all. We work around the issue by sending notifications from a subdomain of our site, `.os.tc`, which *is* an HTTPS site. You choose a subdomain to represent your site, and push notifications are officially sent from `*subdomain*.os.tc`. Due to browser restrictions, our workaround requires a popup to be shown, since users are actually subscribing to `*subdomain*.os.tc`. **As long as you are using our HTTP integration, this is always true and a popup *will always be required*.**

#### Where can I get an HTTPS certificate?

If you're looking for a free and easy way to add SSL to your site, you can use [CloudFlare's Flexible SSL option](https://support.cloudflare.com/hc/en-us/articles/200170516-How-do-I-add-SSL-to-my-site-). You don't need to buy an SSL certificate, but if you'd like to be [more secure](https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-Off-Flexible-SSL-Full-SSL-Full-SSL-Strict-mean-) you can.

#### How do I redirect users to my HTTPS site?

If you're using CloudFlare, you can [forcefully redirect all HTTP visitors --> HTTPS](https://support.cloudflare.com/hc/en-us/articles/200170536-How-do-I-redirect-all-visitors-to-HTTPS-SSL-).