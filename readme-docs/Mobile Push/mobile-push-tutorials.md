---
title: "Mobile Push Tutorials"
slug: "mobile-push-tutorials"
excerpt: "A collection of common use cases and best practices you can achieve by combining OneSignal features"
hidden: false
createdAt: "2021-07-14T18:13:44.411Z"
updatedAt: "2021-08-10T18:41:57.732Z"
---
We highly recommend starting out by reading some of [our case studies](https://onesignal.com/case-studies) – this will give you a good overview of how some of our customers are innovating with our platform. 

If you have a mobile game, see [Everything Game Developers Need to Know about Push Notifications and Customer Messaging](https://onesignal.com/blog/push-notifications-messaging-for-game-developers/) written by George Deglin (OneSignal CEO) discussing best practices and experiences from our humble beginnings as a Hiptic Games.

# Recommended Features

##External User IDs
If your mobile app and website is connected to a database, we highly recommend associating the OneSignal User ID (`player_id`) with your own [External User Ids](doc:external-user-ids).

## Data Tags & Segments
OneSignal [Data Tags](doc:add-user-data-tags) unlock powerful event driven [Segmentation](doc:segmentation) and [Message Personalization](doc:personalization) capabilities. Common examples:
- [Segment Users Based on Notification Clicks](doc:segment-based-on-notification-clicks) - Group users based on how long since they clicked a push and what your push was about to know what works and what doesn't.
- [Abandoned Cart](doc:abandoned-cart) - An eCommerce dream! Not just limited to web – if your apps have time-sensitive events, this guide provides an overview of how to set that up and get those carts checked out!

## Notification Handlers
Handle notifications when they are received and clicked using the OneSignal [SDK Notification Event Handlers](doc:sdk-notification-event-handlers).
- [Links and Deep Linking Guide](https://documentation.onesignal.com/docs/links).
- [Android Customizations Guide](https://documentation.onesignal.com/docs/android-customizations)
- [iOS Customizations Guide](https://documentation.onesignal.com/docs/ios-customizations)

## Location-Triggered Notifications

If your app uses location tracking and you want to send notifications based on location data, see the [Location-Triggered Notifications](doc:location-triggered-event) guide for setup and options.

#Omni-Channel Capabilities

## In-App Messages
OneSignal supports In-App Messaging in order to display rich content to your users or to present permission prompts, surveys, promotions, announcements, and more. Learn more in our [In-App Messages Quickstart](doc:in-app-messages-quickstart).

##Email
OneSignal supports the delivery and automation of e-mail in addition to push notifications. Learn more in our [Email Quickstart](doc:email-quickstart).

##SMS
Send SMS and MMS messages. See [SMS Quickstart](doc:sms-quickstart).

# Integration & Analytics Setup
- [Integrations](doc:integrations) - All your favorite vendors from Analytics to Data Management to Location and Subscriptions work with OneSignal. If they currently don't let us know, we'll get you help!
- [Analytics Overview](doc:analytics-overview) - A guide on user and message tracking with OneSignal.