---
title: "Data and Security Questions"
slug: "data-questions"
excerpt: "Common questions about OneSignal's data handling and security"
hidden: false
createdAt: "2016-09-02T03:08:34.038Z"
updatedAt: "2022-01-12T17:40:17.941Z"
---
#Data Questions
Common questions around data storage and collection.

##How long is data stored inside OneSignal?

Messages sent through OneSignal's API and Automation are kept for around 30 days before being removed from OneSignal's servers.

All User Data and Messages sent through the OneSignal Dashboard are kept for the lifetime of the OneSignal App or unless manually deleted.

<a href="ref:notification-history" target="_blank">Notification History</a> is the list of devices that were sent or clicked the push. This is available for 7 days.

##What data is collected by the OneSignal SDK?

See [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk).

##How do you recommend handling user data in OneSignal?

See [Handling Personal Data](doc:handling-personal-data).

##How do I export data from OneSignal?

See [Exporting Data](doc:exporting-data).

##Is OneSignal COPPA compliant?

OneSignal is certified with the Families Ads Program as of January 10th 2022.

COPPA is the responsibility of the publisher to maintain. However, OneSignal provides an easy solution for <a href="https://documentation.onesignal.com/docs/handling-personal-data#getting-user-consent" target="_blank">gathering User Consent</a> before collecting data and prompting for push. More details on how to properly handle this interaction can be found in this article: <a href="https://www.superawesome.com/blog/how-to-implement-coppa-compliant-push-notifications-in-kid-directed-apps/" target="_blank">How to Implement COPPA Compliant Push Notifications in Kid Directed Apps.</a>

##How can I or my users opt-out (unsubscribe) from Web Push Notifications?

See <a href="https://documentation.onesignal.com/docs/unsubscribe-from-notifications" target="_blank">Unsubscribe from Notifications</a>.

##How large are the OneSignal SDKs?

OneSignal's SDKs are [open source on Github](https://github.com/OneSignal).

####Native Android SDK

Our Native Android SDK is currently 190KB and, like most Android SDKs/Plugins, it depends on the Android Support Library v4 and Google Play services library which may add 1 to 2 MB if they are not in your project already. However, if you use Proguard on your project this size will be reduced.

#### Native iOS SDK

Our Native iOS SDK is a 3MB download. However, if you build your app with bit code turned on, it will only add around 500KB to your app's size.

#### Web SDK

Our Web SDK is 55 KB minified and gzipped. It is loaded asynchronously from our worldwide CDN with a long browser-expiry.

----

#Security Questions

##How secure is OneSignal? 

All OneSignal SDKs connect to our servers with HTTPS. Our REST API enforces a TLS 1.2+ connection and the need for a REST API Key where it is needed.

###iOS
OneSignal uses the TLS encryption for sending notifications as required by the [Apple APNS specifications](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1).

###Android
OneSignal uses Google's GCM/FCM service, which uses the HTTPS protocol.

##How to lock down or secure my OneSignal account?

Steps to secure your OneSignal Account:
1. Use <a href="https://documentation.onesignal.com/docs/2-step-authentication" target="_blank">Two-Step Authentication</a> and enable it for all users with access to your account.
2. Remove <a href="https://documentation.onesignal.com/docs/manage-your-onesignal-account#add-remove-or-update-user-access" target="_blank">Administrators</a> that do not need access to your account. Multiple people should also not share a single account. You should have 1 email associated for each person.
3. Do not publish your REST API Key or User Auth Key. These keys should not be placed anywhere publicly accessible like Github or within your app/site.
4. If you believe your account is already compromised follow [these steps to reset your account](#my-account-has-been-compromised-what-should-i-do).

##My account has been compromised, what should I do?

Make sure your OneSignal REST API Key and User Auth Key did not get published within your app/site or openly, like on Github.

Also, make sure your email and password used for OneSignal is not the same as another site being compromised. You can check if this occurred using a site like https://haveibeenpwned.com/

**Follow these steps to lockdown and reset your account:**

###1. Disable sending from your OneSignal app

While you are updating the password and keys, you can disable the app from sending using the ["Disable App" button in Settings > Keys & Ids in your OneSignal dashboard](doc:accounts-and-keys#rest-api-key).

###2. Reset your password

Access your Accounts & API Keys section (top right of OneSignal Dashboard) to [Reset Your Password](doc:manage-your-onesignal-account#reset-onesignal-account-password). This will reset your User Auth Key as well, which is different from your REST API key.

If you use WordPress, make sure the password is updated and keep both passwords unique.

####3. Reset your REST API key and keep in secret.

You can reset the REST key by going to you Dashboard > App Settings > Keys & Ids and click the link that says "Reset your REST API key?"

More details if needed in our [Reset Your REST API Key guide](doc:accounts-and-keys#rest-api-key).

####4. Remove old Admin Users
<a href="https://documentation.onesignal.com/docs/manage-your-onesignal-account#add-remove-or-update-user-access" target="_blank">Remove Administrators</a> on your account that are not part of the project anymore or who don't need access.

###5. Enable 2 factor Authentication
You can enable <a href="https://documentation.onesignal.com/docs/2-step-authentication" target="_blank">Two-Step Authentication</a> within your OneSignal dashboard and require it for all users.


[block:callout]
{
  "type": "success",
  "title": "Account Secure",
  "body": "Make sure everyone on your team that has access to your account does the above steps.\n\nOnce finished, make sure to [Re-enable your app in Settings > Keys & Ids](doc:accounts-and-keys#rest-api-key)."
}
[/block]
##What happens if a "bad actor" gains access to my OneSignal REST API Key?

If you believe that your REST API key has been compromised, please follow our guide to [Reset Your REST API Key](doc:accounts-and-keys#rest-api-key).

More details below on [Locking down your account](#my-account-has-been-compromised-what-should-i-do).

###What happens if a "bad actor" gains access to my OneSignal app_id?

If someone was to gain access to your `app_id` through your application or site, they could technically add a new device record. However, that record cannot receive notifications if the device wasn't subscribed through valid means.

###What happens if a "bad actor" gains access to a OneSignal player_id?
A user's own `player_id` is public to that user, and discovering it is generally harmless. It can be used to view and update tags and other data about the user's subscription. For this reason, tags should not be used for either authentication or the storage of sensitive data and personally-identifiable information.

Users of your application or service should not be given access to the `player_id`s of other users. This is because a `player_id` on its own is sufficient to send a notification to that user's device. So the `player_id`s belonging to other people should be kept secret.