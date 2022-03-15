---
title: "Windows App SDK Setup"
slug: "windows-app-sdk-setup"
excerpt: "Instructions for adding the OneSignal SDK to your Windows app"
hidden: false
createdAt: "2018-06-09T00:41:04.900Z"
updatedAt: "2021-07-20T00:19:48.259Z"
---
# Required For Setup

* [A OneSignal account](https://onesignal.com), if you do not already have one
* Your OneSignal App ID, available in Settings > Keys & IDs in the OneSignal dashboard

# Windows UWP

OneSignal does not currently have a dedicated Windows UWP SDK available; however, OneSignal can be used to send notifications to Windows apps. 

Please refer to [Microsoft's documentation](https://docs.microsoft.com/en-us/windows/uwp/design/shell/tiles-and-notifications/windows-push-notification-services--wns--overview) to learn how to obtain a push token.

Then, to register a Windows device with the Push Token, call OneSignal's [Add a device](ref:add-a-device) API with a `device_type` of `6` to represent the Windows WNS platform, and pass in the Push Token for the `identifier` parameter. You can include any other parameters within this endpoint.

It would be recommended to save the OneSignal Player Id generated in the Response or set the `external_user_id` parameter to track users within your own [Database, DMP, & CRM Integration](doc:internal-database-crm).