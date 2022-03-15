---
title: "Users & Subscribers Guide"
slug: "users"
excerpt: "Managing your users in the OneSignal Dashboard."
hidden: false
createdAt: "2018-03-21T00:35:03.178Z"
updatedAt: "2022-03-14T18:58:28.788Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4e8bd0f-Screen_Shot_2021-07-27_at_9.33.51_PM.png",
        "Screen Shot 2021-07-27 at 9.33.51 PM.png",
        1746,
        660,
        "#d4d8dd"
      ]
    }
  ]
}
[/block]
OneSignal automatically creates a device-channel record with unique OneSignal User ID aka `player_id` when:
- a user opens your mobile app with the OneSignal SDK initialized for the first time.
- a user subscribes to your website with the OneSignal SDK initialized.
- an email address is provided to OneSignal.
- a phone number is provided OneSignal.

For example, if a user subscribes to your website and provides you their email, then downloads and opens your mobile app, they will have 3 `player_id` records within OneSignal: a web push record, an email record, and a mobile push record.

It is recommended to combine your OneSignal User Record `player_ids` through your own custom User ID called `external_user_id`. See our guide on <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User IDs</a> for more details.

----
# Subscription Process

OneSignal automatically tracks subscription and certain device data through the SDK. See: <a href="https://documentation.onesignal.com/docs/data-collected-by-the-onesignal-sdk" target="_blank">Data Collected by the OneSignal SDK</a>. You can view this data through the Dashboard and even <a href="https://documentation.onesignal.com/docs/exporting-data" target="_blank">Export User Data</a> through the dashboard or API.

## Push Notification and In-App Message Channel Opt-in
Web Push Subscribers must opt-in to push notifications. See our [Web Prompting Guide](https://documentation.onesignal.com/docs/permission-requests) for more details on getting permission.

iOS Mobile App Subscribers must [opt-in to push notifications](https://documentation.onesignal.com/docs/ios-push-opt-in-prompt), but starting in iOS 12, can receive [Provisional Push Notifications](doc:ios-provisional-push-notifications).

Android Mobile App Subscribers are opted-in when they open the app for the first time.

## Email Opt-in
Email records subscribe when added to OneSignal. See [Import Email Addresses](doc:import-email-addresses).

## SMS Opt-in
SMS Phone records subscribe when added to OneSignal. See [Import Phone Numbers](doc:import-phone-numbers).

----

# Detecting Unsubscribes

The OneSignal SDK and API provides methods to unsubscribe devices at the OneSignal level. See the [SDK method to disable push](doc:sdk-reference#disablepush-method) or [API Edit device](ref:edit-device) call, setting `notification_types` to `-2`.

## Push Notifications Opt-out
Web Push records get unsubscribed when they: 
- Clear Browser Data.
- Go into the Browser settings and unsubscribe (see [Unsubscribe from Notifications Guide](doc:unsubscribe-from-notifications)).

Mobile Push records get unsubscribed when they:
- Uninstall the app.
- Go into the device's Notification Settings and unsubscribe from the app.

Any subscribed device that unsubscribes will be detected and marked in OneSignal automatically when they:

1. Interact with the OneSignal SDK (increasing [Revoked Count](#revoked-count)). You can capture this event with our [Subscription Observer](doc:sdk-reference#subscription-observer-method) methods and send to your Database.

2. After you **send 2 notifications** to the unsubscribed device. For details on this, see [Push Notification Message Reports](https://documentation.onesignal.com/docs/notification-delivery#what-are-failed-notifications).

If you target devices directly via the API using [`include_player_ids` or `include_external_user_ids` parameters](https://documentation.onesignal.com/reference#send-to-specific-devices) we also provide the unsubscribed devices as [`"invalid_player_ids"` or `"invalid_external_user_ids"` callback results](https://documentation.onesignal.com/reference#results---create-notification) which you can process in your [Internal Database, DMP, & CRM](doc:internal-database-crm).

## Email Opt-out
Email records get unsubscribed when users click unsubscribe url.

## SMS Opt-out
SMS records get unsubscribed when users reply "STOP" or [your opt-out keyword](https://support.twilio.com/hc/en-us/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering-) to the sending number. Twilio then marks the device as unsubscribed. Upon the next SMS sent to the device, Twilio responds with an [Error Code 21610](https://www.twilio.com/docs/api/errors/21610) at which point we mark the device unsubscribed in our system.

It is a good practice to include an opt-out sentence in your SMS such as: "Reply STOP to unsubscribed" or "Reply STOP to stop future messages".

## Revoked Count

This tracks how many previously subscribed devices returned to your app after opting-out of push permissions and how many web push users opted-out of push using the SDK.

----

# Resubscribing Users
If a device was unsubscribed, how do they resubscribe?

## Push Notifications Resubscribe
Web Push Device Records will get prompted again if they unsubscribe through the browser settings and will be resubscribed when the following occurs:
- automatically if they clear browser cookies/history and return to the site with OneSignal code.
- re-enable push using the OneSignal [Bell Prompt](doc:bell-prompt) or [Custom Link prompt](doc:custom-link-prompt) 

Mobile App Push Device Records will get automatically resubscribed when they open after they enabled push in the App Settings.

## Email Resubscribe

If a user unsubscribes from email, they will get resubscribed if you manually click "Resubscribe to email" in the All Users tab for their record. If you use the `setEmail` SDK method or API Add/Edit Device calls, you will also need to remove that email from your ESP Suppression list.

## SMS Resubscribe

If the device texted back "STOP" to the sending number, then they will not get SMS again until they text back "START" to the same number. You can [set your own opt-out keywords in Twilio](https://support.twilio.com/hc/en-us/articles/223134027-Twilio-support-for-opt-out-keywords-SMS-STOP-filtering-).

Once they opt-back-in, you can detect this with [Twilio's Webhook for Incoming Messages](https://www.twilio.com/docs/usage/webhooks/sms-webhooks#type-1-incoming-message) and mark the device as subscribed in OneSignal using the [Edit Device API](https://documentation.onesignal.com/reference/edit-device) with `notification_types` set to `1`.

If you called the SDK `logoutSMS` method, you can resubscribe the SMS using the `setSMSPhoneNumber` method with the same phone number.

----
#Player Id

The OneSignal Player Id is a UUID ([Unique Universal Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)) that OneSignal creates per device per OneSignal App Id. 

The format is lowercase letters and numbers 8 characters-4 characters-4 characters-4 characters-12 characters like `b3aaabc2-9a47-4647-adda-3e4583a2d19e`.

A common practice is to tie the OneSignal Player Id with your User Id (we call External User Id). See our guide on <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User IDs</a> for more details.

##When does the OneSignal Player ID change?

**Web Push** - When the user clears their cookie data for your site.

**Mobile Apps** - If using version 3.4.1+ of our iOS SDK or 4.3.1+ of our Android SDK, the Player ID will always change when:
1. [Deleting Users](doc:delete-users)
2. Uninstalling and Re-installing the Mobile App or Installing the Mobile App on a new device

Earlier Versions of our Mobile SDKs, OneSignal makes a best effort to keep the same Player ID on all devices that are assigned. Some circumstances that may cause it to change:
- **Android:** If the user has opted out of the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en), uninstalls the app and re-installs. 
- **iOS:** If the user does not have any other apps installed that have your IFV ([identifierForVendor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor)), then uninstalling your app and re-installing it, will give them a new Player ID.

## Finding Player IDs

Please see [Finding Users](https://documentation.onesignal.com/docs/users-and-devices#finding-users)

----
#External User IDs

The `external_user_id` is an identifier you set which helps map your unique database User ID's to the OneSignal `player_id` device record. This could be any unique identifier like a database user ID, CRM user ID, or even an email or phone number if you choose.

To clarify:
- OneSignal creates the `player_id` for every device record
- You send OneSignal the `external_user_id` based on how you identify users.

Multiple device records in OneSignal can have the same `external_user_id` but will each have a unique `player_id`. For example, a user subscribed to your website, android mobile app and iOS mobile app will have 3 different `player_id` records, but you can map these devices to your database via the same `external_user_id`. 

Our SDKs support a <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">`setExternalUserId` method</a> which you can call as soon as the user logs into your website and/or mobile apps to set their User Id.

Also, see our [Internal Database, DMP, & CRM](doc:internal-database-crm) for more details.

----
#User Profile Page
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/169ee59-User_Profile_Option.jpg",
        "User Profile Option.jpg",
        1356,
        888,
        "#eaebed"
      ],
      "caption": "Options > View User Profile"
    }
  ]
}
[/block]
You can access a user profile page for your subscribers by selecting **Options > View User Profile** from the All Users page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/342c7f8-User_Profile.jpg",
        "User Profile.jpg",
        1356,
        968,
        "#edeeef"
      ],
      "caption": "User Profile Page"
    }
  ]
}
[/block]
The User Profile page contains information about your subscriber including:
* Device and subscription type (push, email, SMS)
* [External User ID](https://documentation.onesignal.com/docs/external-user-ids)
* Location
* Last and first seen
* Session count
* Usage duration
* Data tags
* Segments the user belongs to

The Activity Timeline will show recent message activity for Push, Email, SMS and In-App including if a message was sent or opened. The Activity Timeline shows activity for the **past 24 hours** and is currently available on our Professional and Enterprise plans. [See pricing](https://onesignal.com/pricing). 

----
#FAQ

## Managing Multiple Users On One Device

To manage multiple users that share a device, you will need to detect when User A is on the device and only send them their notifications when they are on the device, otherwise User B will get them.

The best way to handle this is with your own External User IDs.

Call the <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">`setExternalUserId` method</a> when each user signs in to the app, then you can target them by the `external_user_id` using the [API `include_external_user_ids` parameter](https://documentation.onesignal.com/reference/create-notification#send-to-specific-devices). 

Once they log out of the app, you can remove the `external_user_id` with the `removeExternalUserId` method. If you want to remove data tags, use the `deleteTags` [methods](https://documentation.onesignal.com/docs/data-tag-implementation).

This means if User A logs in and you call `setExternalUserId("user_a")` then any messages sent directly to `user_b` with `include_external_user_ids` will not be shown on the device until User A logs out, `removeExternalUserId` is called and User B logs in.

Upon removing external_user_id's the data tags associated with the device will persist. They can be deleted with the `deleteTags` method.

If you want to prevent push being sent to the device while logged out, use the <a href="https://documentation.onesignal.com/docs/sdk-reference#disablepush-method" target="_blank">`disablePush` method</a>. Set it to `true` upon logout and `false` upon login.

[block:callout]
{
  "type": "info",
  "title": "Email and/or SMS Subscribers",
  "body": "**IMPORTANT:** If using email and/or sms, you should also call `logoutEmail` and `logoutSMSNumber` methods upon the user logging out and `setEmail` and `setSMSNumber` upon login."
}
[/block]

## Managing One User On Multiple Devices

Use a custom User Id and set it with the <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">`setExternalUserId` method</a> whenever the user logs into the app.

## Can I track users that have uninstalled my app?
Yes and no. Mobile operating system providers make it intentionally difficult to reliably detect when a user has uninstalled an app.

OneSignal does not differentiate an Uninstall vs Unsubscribe And Never Opening the App Again.

OneSignal detects the last time a device opened the app with the "Last Session" parameter. You can [Export User Data](doc:exporting-data) to check the Subscription Status and Last Active time.