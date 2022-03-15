---
title: "Mobile Push FAQ"
slug: "mobile-push-faq"
excerpt: "Common questions about OneSignal's Mobile Push Notifications"
hidden: false
createdAt: "2016-09-20T04:00:25.831Z"
updatedAt: "2022-03-02T22:53:52.085Z"
---
###Which Mobile devices support Mobile App Push?
OneSignal supports mobile app push notifications on iOS 9+ and Android 4+. This covers over 99% of active devices.

###How do I associate multiple devices to a single user?
See [External User Ids](doc:external-user-ids) guide.

###How do I send Background and Data Notifications?
See [Data & Background Notifications](doc:data-notifications).

###How do I add images and icons?
iOS Push Notifications use the icon of your app.
Android Push Notifications can be customized following [Android Notification Icons](doc:customize-notification-icons) guide.

###Why are my push notifications not showing?
See the [Notifications Not Shown](doc:notifications-show-successful-but-are-not-being-shown) guide.

###Why are push notification images not showing?
See [Notification Images Not Showing](doc:notification-images-not-showing) guide.

###How do I customize messages?
All messages can be personalized using [Data Tags](doc:add-user-data-tags). See [Message Personalization](doc:personalization) for details.

###How do I customize Android and iOS notifications?
[iOS Customizations](doc:ios-customizations) and [Android Customizations](doc:android-customizations) covers most scenarios you need. 

Android 8+ highly recommends adding your own [Android Notification Categories](doc:android-notification-categories).

###Can I setup custom Notification Sounds?
Yes and highly encouraged! Provide a more unique, branded experience for your app every time a notification is received with [Custom Notification Sounds](doc:customize-notification-sounds).

###How to setup Action Buttons?
[Action Buttons](doc:action-buttons) let users take action directly within a notification, streamlining the user experience.

###How do I generate an iOS Push Certificate?
See [Generate an iOS Push Certificate](doc:generate-an-ios-push-certificate).

###How do I generate a Firebase Server API Key?
See [Generate a Google Firebase Server API Key](doc:generate-a-google-server-api-key).

###How do I generate an Amazon API Key?
See [Generate an Amazon API Key](doc:generate-an-amazon-api-key).

### Can OneSignal send Push Notifications in an On-Premise Closed network?

This can work as long as the computers on your closed network have access to the push gateway servers that you  want to support:
- https://support.apple.com/en-us/HT203609
- https://firebase.google.com/docs/cloud-messaging/concept-options#messaging-ports-and-your-firewall

If the network is completely disconnected from the Internet, push notifications cannot be delivered via the standard OS/browser services, which is what we support.