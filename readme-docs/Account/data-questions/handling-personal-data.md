---
title: "Handling Personal Data"
slug: "handling-personal-data"
excerpt: "Common questions about GDPR and handling data with OneSignal"
hidden: false
createdAt: "2018-05-10T16:54:47.527Z"
updatedAt: "2022-01-10T05:34:57.891Z"
---
OneSignal was built to be compliant with GDPR, CCPA and all your data privacy needs, even on our Free Plan! This guide will walk through all the options for handling user data.

If you need a DPA and Model Clauses for compliance purposes, please see our <a href="https://onesignal.com/pricing" target="_blank">Paid Plans</a> for details.

----

#Data Handling Guide

The OneSignal SDK collects data once it is initialized on your app or website. See [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk) for more information.

The data collected is generally not PII (Personally Identifiable Information), with the exception of any sensitive user information you pass to us as [Data Tags](doc:add-user-data-tags). Keep in mind that data that is linkable (such as first name or birthday) is still considered PII, even though it is non-sensitive. Clients dealing with PII need to have a Privacy Policy in place that states what they store.

This guide will go over how to use OneSignal without sending Personal User Data.

##IP Address Collection

IP Addresses is typically not considered to be private, but in the EU and UK, it is considered personal data in some cases. For this reason, OneSignal will automatically not collect IP Addresses from all EU and UK Users.

If you wish to additionally prevent the storage of IP addresses from non-EU or UK users, you will need to contact [support@onesignal.com](mailto:support@onesignal.com) with each of your app's OneSignal [App ID and first 5 digits of your REST API key](doc:accounts-and-keys#app-id) for verification. 

##Personal Information Sent As Data Tags

OneSignal requires that you have appropriate consent for any data you send to us, including any personal data you may send to us as data tags or other fields. 

For example, if you send us the user's email using the `sendEmail` method, or if you send us the user's phone number using `sendTags`, you must make sure you have all necessary consent to do so.

Some data is automatically collected by the OneSignal SDK. For example, on mobile devices, this typically includes the device's advertising id, purchases they have made in your app, the timezone setting of the device, and location data (if your app has location permission). A complete list of automatically-collected information is available here: [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk).

Each of these fields can be customized by modifying our SDK code to exclude the field, or using helper methods such as `setLocationShared(false)`. Instructions and examples on each of these methods is available below.

##Getting User Consent

To assist with any compliance requirements, OneSignal has optional methods to delay initialization and prevent any data from being sent to OneSignal until the user has provided consent. 

Your application can call this method before the initialization of the SDK. If you pass in `true`, your application will need to call `provideConsent(true)` before the OneSignal SDK gets fully initialized. 

Until this happens, you can continue to call methods (such as `sendTags()`), but nothing will happen.

The consent setting is persisted between sessions. This means that your application only ever needs to call `provideConsent` a single time, and the setting will be persisted (remembered) by the SDK.
[block:parameters]
{
  "data": {
    "0-0": "**Android Native**",
    "0-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "3-0": "**Cordova/Ionic/PhoneGap/Intel XDK**",
    "3-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "1-0": "**iOS Native**",
    "1-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "2-0": "**Unity**",
    "2-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "4-0": "**Xamarin**",
    "4-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "5-0": "**React Native**",
    "5-1": "[setRequiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "6-0": "**Web Push**",
    "6-1": "[requiresUserPrivacyConsent](doc:sdk-reference#privacy)",
    "h-0": "SDK",
    "h-1": "Method"
  },
  "cols": 2,
  "rows": 7
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "A note for Wordpress clients",
  "body": "By default, the OneSignal WordPress plugin ***does not*** handle Personally Identifiable Information (PII) or EU and UK personal data."
}
[/block]
##Location Sharing

OneSignal provides a method to disable Location sharing within each mobile SDK.
[block:parameters]
{
  "data": {
    "0-0": "**iOS Native**",
    "0-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "2-0": "**Unity**",
    "2-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "3-0": "**Xamarin**",
    "3-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "1-0": "**Android Native**",
    "1-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "4-0": "**Cordova**",
    "4-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "5-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "6-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "5-0": "**Ionic**",
    "6-0": "**Phonegap**",
    "7-0": "**Intel XDK**",
    "7-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "8-0": "**React Native**",
    "8-1": "[setLocationShared](doc:sdk-reference#location-data)",
    "9-0": "**Web Push**",
    "9-1": "*Never sends Location*",
    "h-0": "SDK",
    "h-1": "Method"
  },
  "cols": 2,
  "rows": 10
}
[/block]
##Push Tokens
Push Tokens are generally not considered PII data because you can't share a push token with someone else and have it be used to reach that person or to determine anything about that person. We do however recommend disclosing to users in a privacy policy that data is shared with a 3rd party for the purposes of sending personalized or targeted notifications. But this would be true no matter what service you use.

#Deleting User Data

See the [Delete Users](doc:delete-users) guide for more details on deleting user data.

#Deleting Notification Data

Records of notifications that have been sent through OneSignal's dashboard can be deleted via the dashboard, but will otherwise be stored indefinitely unless you delete your OneSignal app.

Records of notifications sent through OneSignal's API will be deleted around 30 days of delivery.

#Deleting Other Data

All other data is typically stored until your app is deleted. See [Managing your Account](doc:manage-your-onesignal-account#deleting-apps-subscribers-and-accounts) for more information.