---
title: "Web Push Tutorials"
slug: "use-cases-best-practices"
excerpt: "A collection of common use cases and best practices you can achieve by combining OneSignal features"
hidden: false
createdAt: "2019-04-03T16:16:08.434Z"
updatedAt: "2021-10-20T17:14:13.787Z"
---
We highly recommend starting out by reading some of [our case studies](https://onesignal.com/case-studies) – this will give you a good overview of how some of our customers are innovating with our platform.

# Recommended Features

##External User IDs
If your mobile app and website is connected to a database, we highly recommend associating the OneSignal User ID (`player_id`) with your own [External User Ids](doc:external-user-ids).

## Data Tags & Segments
OneSignal [Data Tags](doc:add-user-data-tags) unlock powerful event driven [Segmentation](doc:segmentation) and [Message Personalization](doc:personalization) capabilities. Common examples:
- [Segment Users Based on Notification Clicks](doc:segment-based-on-notification-clicks) - Group users based on how long since they clicked a push and what your push was about to know what works and what doesn't.
- [Abandoned Cart](doc:abandoned-cart) - An eCommerce dream! Not just limited to web – if your apps have time-sensitive events, this guide provides an overview of how to set that up and get those carts checked out!
- [How-To Guides](https://onesignal.com/resources?type=guides) - Dedicated support guides (with working code if needed 😉 ) are available to address the common setups for [ecommerce](https://onesignal.com/guides/how-to-use-push-on-your-e-commerce-site) and [news/media](https://onesignal.com/guides/how-to-use-push-on-your-news-or-media-site) sites. **Check them out!** There is something for everyone here.

## Web Prompts

We highly recommend starting with our [Web Push Best Practices Guide](https://onesignal.com/blog/best-practices-to-master-web-notifications-a-7-step-guide/).

- [Add A Delay to your Prompts](doc:permission-requests#delayed-prompts)
- [Add Category Tags to your Slide Prompt](doc:category-prompt)
- [Email & Phone Number Web Prompt](doc:email-phone-number-web-prompt)

#Best Practices

## How to Increase Notification Click-Through Rate (CTR)

- [Category Prompt](doc:category-prompt) will allow your users to tell you what kind of push notifications they want to hear about.
- [News Push Notifications: 5 Best Practices](https://onesignal.com/blog/news-publishers-5-best-practices-for-sending-push-notifications/) - Here is a great read on increasing CTR for news sites. It is a must read for anyone sending notifications.
- [Increase Open Rates by 23% with Intelligent Delivery](https://onesignal.com/blog/increase-open-rates-by-up-to-23-percent-with-intelligent-delivery/) - Learn more about our [Intelligent Delivery](doc:sending-notifications#intelligent-delivery) option when sending push to help increase CTR
- [50% Higher Open Rates with Segments](https://onesignal.com/blog/best-practices-for-news-publications-push-notification-segmentation-testing/) - After conducting an internal audit, we found that apps that use [Segments](doc:segmentation) generally see 50% higher click rates than apps that do not.

# Integration & Analytics Setup
- [Integrations](doc:integrations) - All your favorite vendors from Analytics to Data Management to Location and Subscriptions work with OneSignal. If they currently don't let us know, we'll get you help!
- [Analytics Overview](doc:analytics-overview) - A guide on user and message tracking with OneSignal.

#Omni-Channel Capabilities

##Email
OneSignal supports the delivery and automation of e-mail in addition to push notifications. Learn more in our [Email Quickstart](doc:email-quickstart).

##SMS
Send SMS and MMS messages. See [SMS Quickstart](doc:sms-quickstart).