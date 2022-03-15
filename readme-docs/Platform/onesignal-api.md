---
title: "REST API Overview"
slug: "onesignal-api"
excerpt: "About the OneSignal Server REST API"
hidden: false
createdAt: "2016-09-02T02:14:31.227Z"
updatedAt: "2021-09-21T00:26:21.005Z"
---
[block:callout]
{
  "type": "info",
  "title": "Server API Reference",
  "body": "[Jump To OneSignal's Server API Reference](https://documentation.onesignal.com/reference/create-notification)"
}
[/block]
OneSignal's server API provides robust features that can be used to:

# Sending Messages

Programmatically deliver [push notifications](ref:create-notification), [emails](https://documentation.onesignal.com/reference/create-notification#email-content), and [sms](https://documentation.onesignal.com/reference/create-notification#sms-content) from your server.
- Messages can be sent to [segments](https://documentation.onesignal.com/reference/create-notification#send-to-segments), [data filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters) (which are similar to segments but without creating the reusable segment name), and [specific devices](https://documentation.onesignal.com/reference/create-notification#send-to-specific-devices) by a User ID.
- All available parameters are supported like [Content & Language](https://documentation.onesignal.com/reference/create-notification#content--language), custom [data & images](https://documentation.onesignal.com/reference/create-notification#attachments), and [scheduling options](https://documentation.onesignal.com/reference/create-notification#delivery).
- Plenty of [Example Code](https://documentation.onesignal.com/reference/create-notification#example-code---create-notification) in commonly used languages to get you started.
- If you scheduled a notification in the future and decide not to send anymore, you can also [Cancel notification](ref:cancel-notification) with the notification id available in the [response after sending](https://documentation.onesignal.com/reference/create-notification#results---create-notification).

# Export Data

**User Data** can be generated through a [CSV export](ref:csv-export) or individually with [View device](ref:view-device).

**Notification Data** can be generated in paginated groups of 50 using [View notifications](ref:view-notifications) or individually with [View notification](ref:view-notification) and having the notification id available in the [response after sending](https://documentation.onesignal.com/reference/create-notification#results---create-notification).

Our API also provides [Notification History](ref:notification-history) which shows which specific devices "clicked" or were "sent" a specific notification.

# Create and Delete Segments

OneSignal allows you to target devices directly by [data filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters) if you don't want to create segments or don't plan to send many notifications to these filter combinations.

If you are looking to create a lot of [Segments](doc:segmentation) and do not want to go through our Dashboard GUI, you can use our [Create Segments](ref:create-segments) to do this quickly and later [Delete Segments](ref:delete-segments) if you don't need them anymore.

# Add and Edit Devices

OneSignal's API provides the [Edit device](ref:edit-device) method to update user records server side. Common parameters that can be updated are `tags` and `external_user_id` if needing to stay updated with an [Internal Database, DMP, & CRM](doc:internal-database-crm). 

The [Add a device](ref:add-a-device) endpoint to upload your subscriber data. It is important to note that importing devices may not be enough to start sending them push. Each device must have a valid "push token"/`identifier` that authenticates the device with FCM/APNs. Further Android Devices must have our SDK active in the app to process our [Notification Payload Structure](https://documentation.onesignal.com/docs/onboarding-with-onesignal#handling-custom-notification-payloads) and Websites need our Service Workers downloaded on the subscriber's browser to get our notifications.

# Create and View Apps

OneSignal houses related Mobile Apps and Websites under a single OneSignal App. If you have many apps and/or websites that are not related, you can use the [Create an app](ref:create-an-app) endpoint to generate OneSignal App Ids for each platform quickly.

You can later [Update an app](ref:update-an-app) or [View an app](ref:view-an-app) / [View apps](ref:view-apps-apps).