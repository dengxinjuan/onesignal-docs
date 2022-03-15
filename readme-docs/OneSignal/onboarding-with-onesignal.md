---
title: "Onboarding With OneSignal"
slug: "onboarding-with-onesignal"
excerpt: "Guide on moving to OneSignal: Migration steps, importing devices and getting started quickly."
hidden: false
createdAt: "2020-01-25T17:48:36.949Z"
updatedAt: "2021-11-24T16:50:42.028Z"
---
Moving to OneSignal? Good choice! We are happy to have you!

Whether you are moving millions of users or just getting started, this checklist walks through getting set up as fast as possible.
[block:parameters]
{
  "data": {
    "h-0": "Quick Reference",
    "h-1": "Details",
    "0-0": "[Step 1. Setup OneSignal SDK](#step-1-setup-onesignal-sdk)",
    "0-1": "**Recommended:** Use the SDK Integration.\n- Discussion of API-only integration",
    "1-0": "[Step 2. Migrating Current Users to OneSignal](#step-2-migrating-current-users-to-onesignal)",
    "1-1": "**Optional:** Import current users into OneSignal. Requires having previous subscribers.",
    "5-0": "[Step 6. Sending Messages](#step-6-sending-messages)",
    "4-0": "[Step 5. Outcomes](#step-5-outcomes)",
    "3-0": "[Step 4. Send OneSignal Event Data & User Attributes](#step-4-send-onesignal-event-data--user-attributes)",
    "2-0": "[Step 3. Identifying Users](#step-3-identifying-users)",
    "2-1": "**Recommended:** Understanding OneSignal Device Record data.\n- External User Ids\n- **Required** for integrations with your database or DMP (Mixpanel, Hubspot, Segment, Amplitude, etc).",
    "3-1": "**Optional:** Add Custom User Attributes and Event data to target users with push and customize push messages.",
    "4-1": "**Optional:** OneSignal's Advance Analytics to get more insight into your messaging campaigns.",
    "5-1": "Send messages to users!"
  },
  "cols": 2,
  "rows": 6
}
[/block]
#Step 1. Setup OneSignal SDK

If you haven't done so already, head to <a href="https://onesignal.com" target="_blank">onesignal.com</a> and setup an account. It's free!

###Push & In-App Messaging
**SDK Implementation is recommended for Push and required for In-App Messages.** 

Our SDKs are [open source](https://github.com/OneSignal) and easy to setup. On average, customers get setup and send their first push in under 30 minutes. Follow the steps in our Quickstart guides to get started:

- [Mobile Push Quickstart](doc:mobile-sdk-setup)
- [Web Push Quickstart](doc:web-push-quickstart) 

### Email & SMS
Email and SMS integrations do not require the OneSignal SDK. However, the SDKs do provide methods for passing in emails and phone numbers into your OneSignal app.

###Add Team to OneSignal
If you have other team members that need access to your OneSiganl account, see our <a href="doc:manage-your-onesignal-account" target="_blank">Account Management page</a>.

##Server API Integrations
OneSignal provides APIs for creating and updating device records along with sending messages. For example, you can create and update device records with the [Add a device](ref:add-a-device) and [Edit device](ref:edit-device) APIs. Server API-only integrations are not recommended if you are using Push Notifications and unavailable for In-App Messaging. 

###Note on the OS Push Payload

Push notifications have several different requirements that our SDK handles for you. For example, the APNS push payload has a standardized format but Android does not. Setting up both would need additional dev work to handle notifications client side. OneSignal's Push Payload contains a `"custom"` key with a nested `"i"` value, which must be included for our SDK to handle the push notification. See [OneSignal's Custom Push Payload here](doc:how-notifications-work#onesignal-custom-push-payload) and our article on <a href="https://onesignal.com/blog/build-vs-buy-what-goes-into-building-a-push-notification-platform/" target="_blank">Build vs Buy</a> for more details.

----

#Step 2. Migrating Current Users to OneSignal
**Optional**

Once the OneSignal SDK is integrated, your users will automatically become available in your OneSignal dashboard when they update and open your mobile app or return to your website ([certain web requirements apply](#importing-web-push-subscribers)). Previously subscribed devices will stay subscribed and can be sent messages. Also, subscribed iOS and web users will not be shown the subscription prompt again.

The OneSignal SDK <a href="doc:data-collected-by-the-onesignal-sdk" target="_blank">collects certain user data automatically</a>. For custom user data/attributes/properties these can be stored as <a href="doc:add-user-data-tags" target="_blank">Data Tags</a> which are `Key: Value` pairs of string or number data. Data should be stored as arrays or objects in OneSignal.
[block:callout]
{
  "type": "warning",
  "title": "Data Required for Push Notifications",
  "body": "You cannot directly import push subscribers without a push token `identifier`. The push token is generated through the website or mobile app when the user subscribes.\n\nPhone number, email address, IP address are not enough information to target a user for push."
}
[/block]
##Importing Web Push Subscribers

Due to the way Browsers have setup Web Push, you cannot directly import subscriber data from a different push provider into OneSignal. However, if your site meets the below requirements, then current subscribers will be automatically moved into OneSignal when they return to the site. No prompt will be shown and they can get push immediately upon return. They should also stop getting push from the previous provider.

**Requirements:**
1. You must have an HTTPS website.
2. Your users must be subscribed to the same [origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) you are adding to OneSignal.
3. You must be able to add [Service Worker files](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to your server (cannot select "My site is not fully https" in the OneSignal dashboard).

If your site does not meet these requirements, users will need to resubscribe to the site. You can continue to send push from the old provider until you are ready to fully move to OneSignal.

##Importing Mobile App Subscribers

Before migrating, we recommend releasing your app with the OneSignal SDK. Any user that update and open the app with the OneSignal SDK active will automatically be added to OneSignal and will keep their current subscription status.

You can import your current subscribers using the <a href="https://documentation.onesignal.com/reference/add-a-device" target="_blank">API Add a device POST Endpoint</a>.

**iOS** subscribers can be imported using our API and start getting push immediately. However, features like monitoring notification click rate wont work for devices without the OneSignal SDK active.

**Android** subscribers can be imported using our API. However, they will not be able to receive notifications until they update to a version of your app with the OneSignal SDK. Therefore it's usually not beneficial to import them since they would get added to OneSignal automatically after they updated and opened your app anyway.

##Importing Emails & Phone Numbers
**Recommended**
You can import your current emails and phone numbers through the OneSignal Dashboard using a csv file or the API. More details see: 
- <a href="doc:import-email-addresses" target="_blank">Import Email Addresses</a>
- <a href="doc:import-phone-numbers" target="_blank">Import Phone Numbers</a>

----

#Step 3. Identifying Users
**Recommended**
**Required for Integrations**

OneSignal stores user data as a device record with a unique Player ID (OneSignal User ID) when the device:
- **Web Push**: Subscribes to Push Notifications
- **Mobile Apps**: Opens the Mobile App with OneSignal SDK
- **Email** shared with OneSignal. See <a href="doc:import-email-addresses" target="_blank">Import Email Addresses</a>
- **SMS** shared with OneSignal. See <a href="doc:import-phone-numbers" target="_blank">Import Phone Numbers</a>

For example, a User that subscribes to Push Notifications on your website and downloads your iOS mobile app will have 2 OneSignal Player ID records. If you incorporate Email, then that single User will have 3 records: 2 Push Records (web and iOS) + 1 Email Record.

To associate multiple Player ID records together, use an <a href="doc:external-user-ids" target="_blank">External User Id</a> to map your Database/DMP/CRM User ID to the current Player ID. The "external_user_id" can be anything like an email, username, or Database User ID.

If you are integrating with your own database or one of our partners like Mixpanel, Hubspot, Amplitude or Segment, please follow the setup guides listed in our <a href="https://documentation.onesignal.com/docs/integrations" target="_blank">Integrations Page</a>.

----

# Step 4. Send OneSignal Event Data & User Attributes
**Optional**

Custom User data can be stored in OneSignal as <a href="doc:add-user-data-tags" target="_blank">Data Tags</a> which are `key : value` pairs of string or number data. 

Tags can be used for <a href="doc:segmentation" target="_blank">Segmentation</a> and <a href="doc:personalization" target="_blank">Message Personalization</a>.

----

# Step 5. Outcomes
**Optional**

<a href="doc:outcomes" target="_blank">Outcomes</a> are OneSignal's advanced analytics that lets you track actions users take after clicking or receiving messages. 

For instance, tracking "clicks" is nice, but setting Outcomes can show you how much revenue was brought in from a push. Also track user behavior after entering the app/site, like did they read/share/update/interact with a post or another user. Other tracking includes click stats like country or language or app version.

---

# Step 6. Sending Messages

Now, you have likely subscribed users and are ready to start sending messages!

- <a href="doc:sending-notifications" target="_blank">Sending Push Messages</a> for all the details on sending push.
- <a href="doc:automated-messages" target="_blank">Automated Messages</a> which is how to setup drip campaigns to send messages automatically to users.
- <a href="doc:sending-email" target="_blank">Sending Email Messages</a>
- <a href="doc:in-app-quickstart" target="_blank">In-App Messaging Overview</a> to get the full spectrum of In-App Message Capabilities for Mobile Apps.
- <a href="https://documentation.onesignal.com/docs/sending-sms-messages" target="_blank">Sending SMS</a> - Learn about how to <a href="https://documentation.onesignal.com/docs/sms-quickstart" target="_blank">setup SMS</a> first.
[block:callout]
{
  "type": "success",
  "title": "Congrats 🎉",
  "body": "If you have come this far you have fully integrated OneSignal and are now a master!"
}
[/block]