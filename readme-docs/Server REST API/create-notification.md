---
title: "Create notification"
slug: "create-notification"
excerpt: "Sends notifications to your users"
hidden: false
createdAt: "2016-09-02T04:51:52.133Z"
updatedAt: "2022-02-23T22:57:02.654Z"
---
[block:callout]
{
  "type": "warning",
  "title": "OneSignal's Hiring!",
  "body": "If you love OneSignal and would like to work here, let us know! Feel free to browse our open positions and apply on our careers page: https://onesignal.com/careers"
}
[/block]
The Create Notification method is used when you want your server to programmatically send messages. You may target users in one of three ways using this method: by **Segment**, by **Filter**, or by **User ID**. At least one targeting parameter must be specified. 
[block:callout]
{
  "type": "warning",
  "title": "You may only use one method of targeting users",
  "body": "If a targeting parameter of one type is used, then targeting parameters from other types may not be used. For instance, you cannot use the `include_external_user_ids` parameter with `filters`. You must use one or the other."
}
[/block]
## Send to Segments
[Segments](doc:segmentation) are the most common way to target large groups of devices. Sending to segments is easy: you simply specify which segments you want to target and, optionally, which ones you don't.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "0-0": "`included_segments`",
    "1-0": "`excluded_segments`",
    "1-1": "array_string",
    "0-1": "array_string",
    "h-2": "Description",
    "0-2": "The segment names you want to target. Users in these segments *will* receive a notification. This targeting parameter is *only compatible with* `excluded_segments`.\n\nExample: `[\"Active Users\", \"Inactive Users\"]`",
    "1-2": "Segment that will be excluded when sending. Users in these segments *will not* receive a notification, even if they were included in `included_segments`. This targeting parameter is *only compatible with* `included_segments`.\n\nExample: `[\"Active Users\", \"Inactive Users\"]`"
  },
  "cols": 3,
  "rows": 2
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](https://documentation.onesignal.com/docs/accounts-and-keys)."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Example Code",
  "body": "[See below for example code](#example-code---create-notification)."
}
[/block]
## Send to Users Based on Filters
[Filters](doc:segmentation#filter-types) work the same as segments without needing to create the segment first. Filters can be combined to form advanced, highly precise user targeting. 

The `filters` parameter targets notification recipients using an array of JSON objects containing field conditions to check. The following are filter field options:
[block:parameters]
{
  "data": {
    "h-0": "field",
    "h-1": "Description",
    "0-0": "`last_session`",
    "0-1": "`relation` = `\">\"` or `\"<\"`\n`hours_ago` = number of hours before or after the users last session. Example: `\"1.1\"`",
    "1-0": "`first_session`",
    "1-1": "`relation` = `\">\"` or `\"<\"`\n`hours_ago` = number of hours before or after the users first session. Example: `\"1.1\"`",
    "2-0": "`session_count`",
    "2-1": "`relation` = `\">\"`, `\"<\"`, `\"=\"` or `\"!=\"`\n`value` = number sessions. Example: `\"1\"`",
    "3-0": "`session_time`",
    "3-1": "`relation` = `\">\"` or `\"<\"` \n`value` = Time in seconds the user has been in your app. Example: `\"3600\"`",
    "4-0": "`amount_spent`",
    "4-1": "`relation` = `\">\"`, `\"<\"`, or `\"=\"`\n`value` = Amount in USD a user has spent on IAP (In App Purchases). Example: `\"0.99\"`",
    "5-0": "`bought_sku`",
    "5-1": "`relation` = `\">\"`, `\"<\"` or `\"=\"`\n`key` = SKU purchased in your app as an IAP (In App Purchases). Example: `\"com.domain.100coinpack\"`\n`value` = value of SKU to compare to. Example: `\"0.99\"`",
    "6-0": "`tag`",
    "6-1": "`relation` = `\">\"`, `\"<\"`, `\"=\"`, `\"!=\"`, `\"exists\"`, `\"not_exists\"`, `\"time_elapsed_gt\"` (**paid plan only**) or `\"time_elapsed_lt\"` (**paid plan only**) See [Time Operators](doc:time-operators) \n`key` = Tag key to compare.\n`value` = Tag value to compare. Not required for `\"exists\"` or `\"not_exists\"`. Example: See [Formatting Filters](#formatting-filters)\n\n**Do not use tags for targeting individual users via a \"user id\".** Instead use [External User Ids](doc:external-user-ids) and the `include_external_user_id` targeting property.",
    "7-0": "`language`",
    "7-1": "`relation` = `\"=\"` or `\"!=\"`\n`value` = 2 character language code. Example: `\"en\"`. For a list of all language codes see [Language & Localization](doc:language-localization).",
    "8-0": "`app_version`",
    "8-1": "`relation` = `\">\"`, `\"<\"`, `\"=\"` or `\"!=\"`\n`value` = app version. Example: `\"1.0.0\"`",
    "9-0": "`location`",
    "9-1": "`radius` = in meters\n`lat` = latitude\n`long` = longitude",
    "10-0": "`email`",
    "10-1": "`value` = email address <p>**Only for sending Push Notifications**</p><p>Use this for targeting push subscribers associated with an email set with all [SDK `setEmail` methods](doc:sdk-reference#setemail-method)</p><p>To send emails to specific email addresses use [`include_email_tokens` parameter](#send-to-specific-devices)</p>",
    "11-0": "`country`",
    "11-1": "`relation` = `\"=\"` or `\"!=\"` \n`value` = 2-digit Country code\nExample: \"field\": \"country\", \"relation\": \"=\", \"value\": \"US\""
  },
  "cols": 2,
  "rows": 12
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](https://documentation.onesignal.com/docs/accounts-and-keys)."
}
[/block]
### Filter Usage
- Filter entries use `AND` by default; insert `{"operator": "OR"}` between entries to `OR` the parameters together.
- `AND`s have priority over `OR`s.
- For performance reasons, a *maximum of 200 entries* can be used at a time. The 200 entries limit includes the "field" entry and "OR" entries -- each would count towards the 200 limit.
Below, "Formatting Example 1" would be 2 entries and "Formatting Example 2" would be 3 entries.
- This filter targeting parameter cannot be combined with any other targeting parameters.

### Formatting Filters
The power of filters comes from combining several fields and operators to precisely target your users. The following are examples of filters and how to format them:

1. A user *is* level 10 *and* purchased an item

2. A user *is* level 10 *or* 20

3. A user *is not* VIP *or* is admin

4. User's tags include key username *and* the user is not banned.
[block:code]
{
  "codes": [
    {
      "code": "[\n  {\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"},\n  {\"field\": \"amount_spent\", \"relation\": \">\",\"value\": \"0\"}\n]",
      "language": "json",
      "name": "Formatting Example 1"
    },
    {
      "code": "[\n  {\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n  {\"operator\": \"OR\"}, {\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"20\"}\n]",
      "language": "json",
      "name": "Formatting Example 2"
    },
    {
      "code": "[\n  {\"field\": \"tag\", \"key\": \"is_vip\", \"relation\": \"!=\", \"value\": \"true\"},\n  {\"operator\": \"OR\"}, {\"field\": \"tag\",\"key\": \"is_admin\", \"relation\": \"=\", \"value\": \"true\"}\n]",
      "language": "json",
      "name": "Formatting Example 3"
    },
    {
      "code": "[\n  {\"field\": \"tag\", \"key\": \"username\", \"relation\": \"exists\"},\n  {\"field\": \"tag\", \"key\": \"banned\", \"relation\": \"!=\", \"value\": \"true\"}\n]",
      "language": "json",
      "name": "Formatting Example 4"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Example Code",
  "body": "[See below for example code](#example-code---create-notification)."
}
[/block]

## Send to Specific Devices
You may also target specific devices. Targeting devices is typically used in two ways:

1. For transactional notifications that target individual users. 

2. For apps that wish to manage their own segments, such as tracking a user's followers and sending notifications to them when that user posts.

When targeting specific devices, you may use any of the following parameters together:
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "0-0": "`include_player_ids`",
    "4-0": "`include_ios_tokens`",
    "5-0": "`include_wp_wns_uris`",
    "6-0": "`include_amazon_reg_ids`",
    "7-0": "`include_chrome_reg_ids`",
    "8-0": "`include_chrome_web_reg_ids`",
    "0-1": "array_string",
    "4-1": "array_string",
    "5-1": "array_string",
    "6-1": "array_string",
    "7-1": "array_string",
    "8-1": "array_string",
    "9-0": "`include_android_reg_ids`",
    "9-1": "array_string",
    "h-2": "Description",
    "0-2": "Specific player_ids to send your notification to. _Does not require API Auth Key._\n\nDo not combine with other targeting parameters. Not compatible with any other targeting parameters. \n\nExample: `[\"1dd608f2-c6a1-11e3-851d-000c2940e62c\"]`\n\n*Limit of 2,000 entries per REST API call*",
    "4-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using iOS device tokens. \n\n**Warning:** Only works with *Production* tokens.\n\nAll non-alphanumeric characters must be removed from each token. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `ce777617da7f548fe7a9ab6febb56cf39fba6d38203...`\n\n*Limit of 2,000 entries per REST API call*",
    "5-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using Windows URIs. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `http://s.notify.live.net/u/1/bn1/HmQAAACPaLDr-...`\n\n*Limit of 2,000 entries per REST API call*",
    "6-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using Amazon ADM registration IDs. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `amzn1.adm-registration.v1.XpvSSUk0Rc3hTVVV...`\n\n*Limit of 2,000 entries per REST API call*",
    "7-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using Chrome App registration IDs. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_...`\n\n*Limit of 2,000 entries per REST API call*",
    "8-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using Chrome Web Push registration IDs. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_...`\n\n*Limit of 2,000 entries per REST API call*",
    "9-2": "**Not Recommended:** Please consider using `include_player_ids` or `include_external_user_ids` instead.\n\nTarget using Android device registration IDs. If a token does not correspond to an existing user, a new user will be created. \n\nExample: `APA91bEeiUeSukAAUdnw3O2RB45FWlSpgJ7Ji_...`\n\n*Limit of 2,000 entries per REST API call*",
    "2-2": "**Recommended for Sending Emails** - Target specific email addresses. \n\nIf an email does not correspond to an existing user, a new user will be created. \n\nExample: `nick@catfac.ts`\n\n*Limit of 2,000 entries per REST API call*",
    "2-1": "array_string",
    "2-0": "`include_email_tokens`",
    "1-0": "`include_external_user_ids`",
    "1-1": "array_string",
    "1-2": "Target specific devices by custom user IDs assigned via API. \n\nNot compatible with any other targeting parameters\n\nExample: `[“custom-id-assigned-by-api”]`\n**REQUIRED**: *REST API Key Authentication*\n\n*Limit of 2,000 entries per REST API call.* \n\n**Note:** If targeting push, email, or sms subscribers with same ids, use with [channel_for_external_user_ids](#platform-to-deliver-to) to indicate you are sending a push or email or sms.",
    "3-0": "`include_phone_numbers`",
    "3-1": "array_string",
    "3-2": "**Recommended for Sending SMS** - Target specific phone numbers. The phone number should be in the E.164 format. Phone number should be an existing subscriber on OneSignal. Refer our [docs](https://documentation.onesignal.com/docs/import-phone-numbers#import-phone-numbers-through-dashboard) to learn how to add phone numbers to OneSignal.\n\nExample phone number: `+1999999999`\n\n*Limit of 2,000 entries per REST API call*"
  },
  "cols": 3,
  "rows": 10
}
[/block]
## Common Parameters
The following are parameters in Create Notifications common to all methods of targeting users. 



### App
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-0": "`app_id`",
    "0-1": "string",
    "h-1": "Type",
    "0-2": "All",
    "h-2": "Platform",
    "h-3": "Description",
    "0-3": "**Required:** Your OneSignal Application ID, which can be found in [Keys & IDs](doc:accounts-and-keys).\n\nIt is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.",
    "0-4": "",
    "h-4": "Description"
  },
  "cols": 4,
  "rows": 1
}
[/block]
### Idempotency
[block:parameters]
{
  "data": {
    "0-0": "`external_id`",
    "0-1": "string (UUID)",
    "0-2": "All",
    "0-3": "Correlation and idempotency key. This is not the `external_user_id`.\n\n<p>A request received with this parameter will first look for another notification with the same `external_id`. If one exists, a notification will not be sent, and result of the previous operation will instead be returned. Therefore, if you plan on using this feature, it's important to use a good source of randomness to generate the UUID passed here. </p>\n\n<p> **This key is only idempotent for 30 days.** After 30 days, the notification could be removed from our system and a notification with the same `external_id` will be sent again. </p>\n\nSee [Idempotent Notification Requests](doc:idempotent-notification-requests) for more details",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description"
  },
  "cols": 4,
  "rows": 1
}
[/block]
### Content & Language

#### Notification Content
If you are sending push notifications, use the following parameters. [Read more: supported languages.](doc:language-localization#supported-languages)
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "1-0": "`contents`",
    "1-1": "object",
    "1-2": "All - Push",
    "1-3": "**Required** unless `content_available=true` or `template_id` is set.\n\nThe notification's content (excluding the title), a map of language codes to text for each language.\n\nEach hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. \n**This field supports [tag substitutions](doc:personalization).**\n\n**English must be included in the hash**.\n\nExample: `{\"en\": \"English Message\", \"es\": \"Spanish Message\"}`",
    "5-3": "Sending `true` wakes your app from background to run custom native code (Apple interprets this as `content-available=1`). *Note: Not applicable if the app is in the \"force-quit\" state (i.e app was swiped away).* Omit the `contents` field to prevent displaying a visible notification.",
    "5-2": "iOS",
    "5-1": "boolean",
    "5-0": "`content_available`",
    "6-0": "`mutable_content`",
    "6-1": "boolean",
    "6-2": "iOS 10+",
    "6-3": "**Always defaults to `true` and cannot be turned off.** Allows tracking of notification receives and changing of the notification content in your app before it is displayed. Triggers `didReceive(_:withContentHandler:)` on your [UNNotificationServiceExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension).",
    "4-0": "`template_id`",
    "4-1": "string",
    "4-2": "All",
    "4-3": "<p>Use a template you setup on our dashboard. The template_id is the UUID found in the URL when viewing a template on our dashboard.</p>\n<p>Example: `be4a8044-bbd6-11e4-a581-000c2940e62c`</p>",
    "2-0": "`headings`",
    "2-1": "object",
    "2-2": "All - Push",
    "2-3": "**Required for Huawei**\nWeb Push requires a heading but can be omitted from request since defaults to the Site Name set in OneSignal Settings.\n\nThe notification's title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language.\n\n**This field supports [tag substitutions](doc:personalization).**\n\nExample: `{\"en\": \"English Title\", \"es\": \"Spanish Title\"}`",
    "3-0": "`subtitle`",
    "3-1": "object",
    "3-2": "iOS 10+",
    "3-3": "<p>The notification's subtitle, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language.\n**This field supports [tag substitutions](doc:personalization).**</p>\n<p>Example: `{\"en\": \"English Subtitle\", \"es\": \"Spanish Subtitle\"}`</p>",
    "7-0": "`target_content_identifier`",
    "7-1": "string",
    "7-2": "iOS 13+",
    "7-3": "Use to target a specific experience in your [App Clip](https://documentation.onesignal.com/docs/app-clip-support), or to target your notification to a specific window in a multi-scene App.",
    "0-0": "`name`",
    "0-1": "string",
    "0-2": "All - Push, SMS, In-App, Email",
    "0-3": "We've introduced a name field so you can have internal names to assist with your campaign organization. \n\nThis does not get displayed on the notification or message itself.\n\nOptional for Push."
  },
  "cols": 4,
  "rows": 8
}
[/block]
#### Email Content
If you are sending an email, use the following parameters:
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`email_subject`",
    "2-0": "`email_from_name`",
    "3-0": "`email_from_address`",
    "0-1": "string",
    "2-1": "string",
    "3-1": "string (valid email address)",
    "0-2": "**Required:** The subject of the email.",
    "2-2": "The name the email is from. If not specified, will default to \"from name\" set in the OneSignal Dashboard Email Settings.",
    "3-2": "The email address the email is from. If not specified, will default to \"from email\" set in the OneSignal Dashboard Email Settings.",
    "1-0": "`email_body`",
    "1-1": "string (HTML supported)",
    "1-2": "<p>Required unless `template_id` is set.</p><p>The body of the email you wish to send. Typically, customers include their own HTML templates here. Must include `[unsubscribe_url]` in an `<a>` tag somewhere in the email.</p>\n\n<p>Note: any malformed HTML content will be sent to users. Please double-check your HTML is valid.</p>",
    "4-0": "`name`",
    "4-1": "string",
    "4-2": "Optional for Email.\n\nAn identifier for tracking message within the OneSignal dashboard or export analytics. \n\nNot shown to end user.",
    "5-0": "`disable_email_click_tracking`",
    "5-1": "boolean",
    "5-2": "Default is `false`. If set to `true` the URLs included in the email will not change to link tracking URLs and will stay the same as originally set. Best used for emails containing Universal Links."
  },
  "cols": 3,
  "rows": 6
}
[/block]
#### SMS Content
If you are sending an SMS, use the following parameters.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "1-0": "`sms_from`",
    "1-1": "string",
    "1-2": "Phone Number used to send SMS. Should be a registered Twilio phone number in E.164 format.",
    "3-0": "`sms_media_urls`",
    "3-1": "array_string",
    "3-2": "URLs for the media files to be attached to the SMS content. \n*Limit*: 10 media urls with a total max. size of 5MBs.",
    "2-0": "`contents`",
    "2-1": "object",
    "2-2": "Text content for the SMS",
    "0-0": "`name`",
    "0-1": "string",
    "0-2": "**Required** for SMS Messages.\n\nAn identifier for tracking message within the OneSignal dashboard or export analytics. \n\nNot shown to end user."
  },
  "cols": 3,
  "rows": 4
}
[/block]
### Attachments
**Push notifications only**

These are additional content attached to push notifications, primarily images.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "0-0": "`data`",
    "0-3": "A custom map of data that is passed back to your app. Same as using [Additional Data](doc:sending-notifications#advanced-settings) within the dashboard. Can use up to `2048` bytes of data.\n\nExample: `{\"abc\": 123, \"foo\": \"bar\", \"event_performed\": true, \"amount\": 12.1}`",
    "0-1": "object",
    "0-2": "All",
    "5-0": "`ios_attachments`",
    "5-1": "object",
    "5-2": "iOS 10+",
    "5-3": "Adds media attachments to notifications. Set as JSON object, key as a media id of your choice and the value as a valid local filename or URL. User must press and hold on the notification to view.\n\nDo not set `mutable_content` to download attachments. The OneSignal SDK does this automatically.\n\nExample: `{\"id1\": \"https://domain.com/image.jpg\"}`",
    "6-0": "`big_picture`",
    "6-1": "string",
    "6-2": "Android",
    "6-3": "Picture to display in the expanded view. Can be a drawable resource name or a URL.",
    "9-3": "Picture to display in the expanded view. Can be a drawable resource name or a URL.",
    "9-0": "`adm_big_picture`",
    "9-1": "string",
    "9-2": "Amazon",
    "10-0": "`chrome_big_picture`",
    "10-1": "string",
    "10-2": "ChromeApp",
    "10-3": "Large picture to display below the notification text. Must be a local URL.",
    "2-0": "`url`",
    "2-1": "string",
    "2-2": "All",
    "2-3": "The URL to open in the browser when a user clicks on the notification.\n\nExample: `https://onesignal.com`\n\nNote: iOS needs https or updated NSAppTransportSecurity in plist\n\n**This field supports [tag substitutions](doc:personalization).**\n\nOmit if including `web_url` or `app_url`",
    "3-0": "`web_url`",
    "3-1": "string",
    "3-2": "Push - All Browsers",
    "3-3": "Same as `url` but only sent to web push platforms.\nIncluding Chrome, Firefox, Safari, Opera, etc.",
    "4-0": "`app_url`",
    "4-1": "string",
    "4-2": "Push - Mobile Apps",
    "4-3": "Same as `url` but only sent to app platforms.\nIncluding iOS, Android, macOS, Windows, ChromeApps, etc.",
    "8-0": "`chrome_web_image`",
    "8-1": "string",
    "8-2": "Chrome 56+",
    "8-3": "Sets the web push notification's large image to be shown below the notification's title and text. Please see [Web Push Notification Icons](doc:web-push-notification-icons).\n\nWorks for Chrome for **Windows & Android only**. Chrome for macOS uses the same image set for the `chrome_web_icon`.",
    "1-0": "`huawei_msg_type`",
    "1-1": "string",
    "1-2": "Huawei",
    "1-3": "Use `\"data\"` or `\"message\"` depending on the type of notification you are sending. More details in [Data & Background Notifications](doc:data-notifications).",
    "7-0": "`huawei_big_picture`",
    "7-1": "string",
    "7-2": "Huawei",
    "7-3": "Picture to display in the expanded view. Can be a drawable resource name or a URL."
  },
  "cols": 4,
  "rows": 11
}
[/block]
### Action Buttons
**Push notifications only**

These add buttons to push notifications, allowing the user to take more than one action on a notification. [Learn more about Action Buttons](doc:action-buttons).
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "0-1": "array_object",
    "0-0": "`buttons`",
    "0-2": "iOS 8.0+, Android 4.1+, and derivatives like Amazon",
    "0-3": "<p>Buttons to add to the notification. Icon only works for Android.\nButtons show in reverse order of array position i.e. Last item in array shows as first button on device.\n</p>\n<p>Example: `[{\"id\": \"id2\", \"text\": \"second button\", \"icon\": \"ic_menu_share\"}, {\"id\": \"id1\", \"text\": \"first button\", \"icon\": \"ic_menu_send\"}]`</p>",
    "2-0": "`ios_category`",
    "2-3": "[Category APS](https://developer.apple.com/documentation/usernotifications/unnotificationcategory) payload, use with `registerUserNotificationSettings:categories` in your Objective-C / Swift code.</p>\n\n<p>Example: `calendar` category which contains actions like `accept` and `decline`</p>\n\n<p>iOS 10+ This will trigger your [UNNotificationContentExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension) whose ID matches this category.",
    "2-2": "iOS",
    "2-1": "string",
    "1-0": "`web_buttons`",
    "1-1": "array_object",
    "1-3": "Add action buttons to the notification. The `id` field is required.</p>\n\n<p>Example: `[{\"id\": \"like-button\", \"text\": \"Like\", \"icon\": \"http://i.imgur.com/N8SN8ZS.png\", \"url\": \"https://yoursite.com\"}, {\"id\": \"read-more-button\", \"text\": \"Read more\", \"icon\": \"http://i.imgur.com/MIxJp1L.png\", \"url\": \"https://yoursite.com\"}]`</p>",
    "1-2": "Chrome 48+",
    "3-0": "`icon_type`",
    "3-1": "string",
    "3-2": "iOS",
    "3-3": "<p>In iOS you can specify the type of icon to be used in an [Action button](\nhttps://documentation.onesignal.com/docs/action-buttons) as being either ['system', 'custom']\n</p>"
  },
  "cols": 4,
  "rows": 4
}
[/block]
### Appearance

**Push notifications only**

These parameters let you adjust icons, badges, and other appearance changes to your push notifications.

**Android & Huawei Notification Categories / Channels**
   - Allows customizing Importance, Sound, Vibration, LED Color, Badges, and Lockscreen Visibility.
   - Required to customize these options on Android 8 (Oreo) based devices.
       - OneSignal SDK handles fallback to Android 7 and older, no need to set field level values if `android_channel_id` is set.
   - See the [Category documentation](doc:android-notification-categories) on more details on creating and using them.

**Icons** - Different platforms handle icons differently.
 - Android - The OneSignal SDK shows a bell icon by default. See our [Android Notification Icons](doc:customize-notification-icons) guide to change this.
 - Huawei- Defaults to the App Icon. See our [Android Notification Icons](doc:customize-notification-icons) guide to change this.
 - iOS - The icon will always be your app icon.

**Badges** - Useful to indicate to the user the number of notifications outstanding.
   -  iOS - Can customize the number badge number on the app icon.
   - Android - Always reflects the number of notifications in the shade.
       - The OneSignal SDK automatically handles this behavior. 
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "7-0": "`large_icon`",
    "7-1": "string",
    "7-2": "Android",
    "7-3": "Can be a drawable resource name (exclude file extension) or a URL.\nSee: [How to create large icons](https://documentation.onesignal.com/docs/customize-notification-icons)",
    "27-0": "`ios_badgeType`",
    "27-1": "string",
    "27-2": "iOS",
    "27-3": "Describes whether to *set* or *increase/decrease* your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`.\n\n`None` leaves the count unaffected.\n\n`SetTo` directly sets the badge count to the number specified in `ios_badgeCount`.\n\n`Increase` adds the number specified in `ios_badgeCount` to the total. Use a negative number to decrease the badge count.",
    "28-3": "Used with `ios_badgeType`, describes the value to *set* or amount to *increase/decrease* your app's iOS badge count by.\n\nYou can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.",
    "28-0": "`ios_badgeCount`",
    "28-1": "integer",
    "28-2": "iOS",
    "11-0": "`chrome_web_icon`",
    "14-0": "`firefox_icon`",
    "15-0": "`chrome_icon`",
    "11-1": "string",
    "14-1": "string",
    "15-1": "string",
    "11-3": "Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices.",
    "11-2": "Chrome",
    "15-2": "ChromeApp",
    "14-3": "Sets the web push notification's icon for Firefox. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices.",
    "14-2": "Firefox",
    "15-3": "<p><span class=\"label-all label-notrec\">This flag is not used for web push</span> For web push, please see `chrome_web_icon` instead.</p>\n<p>The local URL to an icon to use. If blank, the app icon will be used.</p>",
    "5-0": "`small_icon`",
    "5-1": "string",
    "5-2": "Android",
    "5-3": "Icon shown in the status bar and on the top left of the notification. Set the icon name **without** the file extension.\nIf not set a bell icon will be used or `ic_stat_onesignal_default` if you have set this resource name.\nSee: [How to create small icons](https://documentation.onesignal.com/docs/customize-notification-icons)",
    "16-0": "`ios_sound`",
    "17-0": "`android_sound`",
    "17-1": "string",
    "16-1": "string",
    "19-1": "string",
    "20-1": "string",
    "21-1": "string",
    "19-0": "`adm_sound`",
    "20-0": "`wp_wns_sound`",
    "17-3": "**⚠Deprecated, this field doesn't work on Android 8 (Oreo) and newer devices!\nPlease use [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above instead to support ALL versions of Android.**\n\n<p>Sound file that is included in your app to play instead of the default device notification sound. Pass `nil` to disable sound for the notification.</p><p>NOTE: Leave off file extension for Android. </p>\n<p>Example: `\"notification\"`",
    "17-2": "Android",
    "16-2": "iOS",
    "19-2": "Amazon",
    "20-2": "Windows",
    "16-3": "<p>Sound file that is included in your app to play instead of the default device notification sound. Pass `nil` to disable vibration and sound for the notification.</p>\n<p>Example: `\"notification.wav\"`</p>",
    "19-3": "**⚠Deprecated, this field doesn't work on Android 8 (Oreo) and newer devices!\nPlease use [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above instead to support ALL versions of Android.**\n\n<p>Sound file that is included in your app to play instead of the default device notification sound. Pass `nil` to disable sound for the notification.</p><p>NOTE: Leave off file extension for Android.</p>\n<p>Example: `\"notification\"`</p>",
    "20-3": "<p>Sound file that is included in your app to play instead of the default device notification sound.</p><p>Example: `\"notification.wav\"`</p>",
    "21-0": "`android_led_color`",
    "23-0": "`android_accent_color`",
    "23-1": "string",
    "23-3": "<p>Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.</p><p>Example(Red): `\"FFFF0000\"`</p>",
    "23-2": "Android",
    "21-2": "Android",
    "21-3": "**⚠Deprecated, this field doesn't work on Android 8 (Oreo) and newer devices!\nPlease use [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above instead to support ALL versions of Android.**\n\n<p>Sets the devices LED notification light if the device has one. ARGB Hex format.</p><p>Example(Blue): `\"FF0000FF\"`</p>",
    "25-0": "`android_visibility`",
    "25-1": "int",
    "25-2": "Android 5.0+",
    "25-3": "**⚠Deprecated, this field doesn't work on Android 8 (Oreo) and newer devices!\nPlease use [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above instead to support ALL versions of Android.**\n\n`1` = Public (_default_) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.)\n\n`0` = Private (Hides message contents on lock screen if the user set \"Hide sensitive notification content\" in the system settings)\n\n`-1` = Secret (Notification does not show on the lock screen at all)",
    "29-0": "`collapse_id`",
    "29-1": "string",
    "29-2": "iOS 10+, Android",
    "29-3": "Only one notification with the same id will be shown on the device. Use the same id to update an existing notification instead of showing a new one. Limit of 64 characters.",
    "9-0": "`adm_small_icon`",
    "9-1": "string",
    "10-1": "string",
    "9-2": "Amazon",
    "10-2": "Amazon",
    "9-3": "If not set a bell icon will be used or `ic_stat_onesignal_default` if you have set this resource name.\nSee: [How to create small icons](doc:android-customizations#section-small-notification-icons)",
    "10-3": "If blank the `small_icon` is used. Can be a drawable resource name or a URL.\nSee: [How to create large icons](https://documentation.onesignal.com/docs/customize-notification-icons)",
    "10-0": "`adm_large_icon`",
    "12-0": "`chrome_web_image`",
    "12-1": "string",
    "12-2": "Chrome",
    "12-3": "Sets the web push notification's large image to be shown below the notification's title and text. Please see [Web Push Notification Icons](doc:web-push-notification-icons).\n\nWorks for Chrome for **Windows & Android only**. Chrome for macOS uses the same image set for the `chrome_web_icon`.",
    "0-0": "`android_channel_id`",
    "0-1": "UUID",
    "0-2": "Android",
    "4-0": "`android_background_layout`",
    "4-1": "object",
    "4-2": "Android",
    "4-3": "<p>Allowing setting a background image for the notification. This is a JSON object containing the following keys. See our [Background Image](doc:android-customizations#section-background-images) documentation for image sizes.</p>\n\n<p>`image` - Asset file, android resource name, or URL to remote image.</p>\n\n<p>`headings_color` - Title text color ARGB Hex format. Example(Blue): `\"FF0000FF\"`.</p>\n\n<p>`contents_color` - Body text color ARGB Hex format. Example(Red): `\"FFFF0000\"`</p>\n\n<p>Example: `{\"image\": \"https://domain.com/background_image.jpg\", \"headings_color\": \"FFFF0000\", \"contents_color\": \"FF00FF00\"}`",
    "0-3": "The Android Oreo Notification Category to send the notification under. See the [Category documentation](doc:android-notification-categories) on creating one and getting it's id.",
    "2-0": "`existing_android_channel_id`",
    "2-1": "string",
    "2-2": "Android",
    "2-3": "Use this if you have client side Android Oreo Channels you have already defined in your app with code.",
    "31-0": "`apns_alert`",
    "31-1": "object",
    "31-2": "iOS 10+",
    "31-3": "iOS can localize push notification messages on the client using special parameters such as `loc-key`. When using the Create Notification endpoint, you must include these parameters inside of a field called `apns_alert`. Please see [Apple's guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW1) on localizing push notifications to learn more.",
    "13-0": "`chrome_web_badge`",
    "13-1": "string",
    "13-2": "Chrome",
    "13-3": "Sets the web push notification icon for Android devices in the notification shade. Please see [Web Push Notification Badge](doc:web-push-notification-icons#section-badge).",
    "1-0": "`huawei_channel_id`",
    "1-1": "UUID",
    "1-2": "Huawei",
    "1-3": "The Android Oreo Notification Category to send the notification under. See the [Category documentation](doc:android-notification-categories) on creating one and getting it's id.",
    "3-0": "`huawei_existing_channel_id`",
    "3-1": "string",
    "3-2": "Huawei",
    "3-3": "Use this if you have client side Android Oreo Channels you have already defined in your app with code.",
    "6-0": "`huawei_small_icon`",
    "6-1": "string",
    "6-2": "Huawei",
    "6-3": "Icon shown in the status bar and on the top left of the notification.\nUse an Android resource path (E.g. `/drawable/small_icon`).\nDefaults to your app icon if not set.",
    "8-0": "`huawei_large_icon`",
    "8-1": "string",
    "8-2": "Huawei",
    "8-3": "Can be a drawable resource name or a URL.\nSee: [How to create large icons](https://documentation.onesignal.com/docs/customize-notification-icons)",
    "18-0": "`huawei_sound`",
    "18-3": "**⚠Deprecated, this field ONLY works on EMUI 5 (Android 7 based) and older devices.\nPlease also set [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above to support EMUI 8 (Android 8 based) devices.**\n\n<p>Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for and include the full path. </p>\n<p>Example: `\"/res/raw/notification\"`",
    "22-0": "`huawei_led_color`",
    "22-1": "string",
    "18-1": "string",
    "18-2": "Huawei",
    "22-2": "Huawei",
    "22-3": "**⚠Deprecated, this field ONLY works on EMUI 5 (Android 7 based) and older devices.\nPlease also set [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above to support EMUI 8 (Android 8 based) devices.**\n\n<p>Sets the devices LED notification light if the device has one. RGB Hex format.</p><p>Example(Blue): `\"0000FF\"`</p>",
    "24-0": "`huawei_accent_color`",
    "24-1": "string",
    "24-2": "Huawei",
    "24-3": "Accent Color used on Action Buttons and Group overflow count.\nUses RGB Hex value (E.g. #9900FF).\nDefaults to device’s theme color if not set.",
    "26-0": "`huawei_visibility`",
    "26-1": "int",
    "26-2": "Huawei",
    "26-3": "**⚠Deprecated, this field ONLY works on EMUI 5 (Android 7 based) and older devices.\nPlease also set [Notification Categories / Channels](https://documentation.onesignal.com/reference/create-notification#appearance) noted above to support EMUI 8 (Android 8 based) devices.**\n\n`1` = Public (_default_) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.)\n\n`0` = Private (Hides message contents on lock screen if the user set \"Hide sensitive notification content\" in the system settings).\n\n`-1` = Secret (Notification does not show on the lock screen at all).",
    "30-0": "`web_push_topic`",
    "30-1": "string",
    "30-2": "Push - All Browsers",
    "30-3": "Display multiple notifications at once with different topics."
  },
  "cols": 4,
  "rows": 32
}
[/block]
### Delivery
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "0-0": "`send_after`",
    "0-1": "string",
    "0-2": "All",
    "1-0": "`delayed_option`",
    "1-1": "string",
    "1-2": "All",
    "2-0": "`delivery_time_of_day`",
    "2-1": "string",
    "2-2": "All",
    "h-3": "Description",
    "0-3": "Schedule notification for future delivery. API defaults to UTC.\n\nExamples: *All examples are the exact same date & time.*\n\n`\"Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)\"`\n\n`\"September 24th 2015, 2:00:00 pm UTC-07:00\"`\n\n`\"2015-09-24 14:00:00 GMT-0700\"`\n\n`\"Sept 24 2015 14:00:00 GMT-0700\"`\n\n`\"Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)\"`\n\nNote: SMS currently only supports `send_after` parameter.",
    "1-3": "Possible values are:\n`timezone` (Deliver at a specific time-of-day in each users own timezone)\n\n`last-active` Same as [Intelligent Delivery](doc:sending-notifications#intelligent-delivery) . (Deliver at the same time of day as each user last used your app).\n\nIf `send_after` is used, this takes effect after the `send_after` time has elapsed.\n\nCannot be used if [Throttling](doc:throttling#throttling-limitations) enabled. Set `throttle_rate_per_minute` to `0` to disable throttling if enabled to use these features.",
    "2-3": "Use with `delayed_option=timezone`.\nExamples: \n\n`\"9:00AM\"`\n\n`\"21:45\"`\n\n`\"9:45:30\"`",
    "3-0": "`ttl`",
    "3-1": "integer",
    "3-2": "iOS, Android, Chrome, Firefox, Safari, ChromeWeb",
    "3-3": "Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days). \n\nMax value to set is `2419200` seconds (28 days).",
    "4-0": "`priority`",
    "4-1": "integer",
    "4-2": "Android, Chrome, ChromeWeb",
    "4-3": "Delivery priority through the push server (example GCM/FCM). Pass `10` for high priority or any other integer for normal priority. Defaults to normal priority for Android and high for iOS. For Android 6.0+ devices setting priority to high will wake the device out of doze mode.",
    "5-0": "`apns_push_type_override\n`",
    "5-2": "iOS",
    "5-1": "string",
    "5-3": "valid values: `voip`\nSet the value to `voip` for sending [VoIP Notifications](doc:voip-notifications)\n\nThis field maps to the APNS header `apns-push-type`.\n**Note:** `alert` and `background` are automatically set by OneSignal",
    "6-0": "`throttle_rate_per_minute` (optional)",
    "6-1": "postive integer",
    "6-2": "All",
    "6-3": "**Apps with throttling enabled**\n- does not work with timezone or intelligent delivery, throttling limits will take precedence. Set to `0` if you want to use timezone or intelligent delivery.\n- the parameter value will be used to override the default application throttling value set from the dashboard settings. \n- parameter value 0 indicates not to apply throttling to the notification.\n- if the parameter is not passed then the default app throttling value will be applied to the notification.\n\n**Apps with throttling disabled**\n- this parameter can be used to throttle delivery for the notification even though throttling is not enabled at the application level.\n\nRefer to [throttling](doc:throttling) for more details.",
    "7-0": "enable_frequency_cap",
    "7-1": "boolean",
    "7-2": "All - Push",
    "7-3": "When frequency capping is enabled for the app, sending true will apply the frequency capping to the notification. If the parameter is not included, the default behavior is to apply frequency capping if the setting is enabled for the app.\nSetting the parameter to false will override the frequency capping, meaning that the notification will be sent without considering frequency capping."
  },
  "cols": 4,
  "rows": 8
}
[/block]
### Grouping & Collapsing

**Push notifications only**

Grouping lets you combine multiple notifications into a single notification to improve the user experience. Collapsing lets you dismiss old notifications in favor of newer ones. 
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "0-0": "`android_group`",
    "0-1": "string",
    "0-2": "Android",
    "0-3": "Notifications with the same group will be stacked together using Android's [Notification Grouping](doc:android-customizations#section-notification-grouping) feature.",
    "1-3": "**Note: This only works for Android 6 and older. Android 7+ allows full expansion of all message.**\n<p>Summary message to display when 2+ notifications are stacked together. Default is \"# new messages\". Include `$[notif_count]` in your message and it will be replaced with the current number.</p>\n<p>**Languages** - The value of each key is the message that will be sent to users for that language. `\"en\"` (English) is required. The key of each hash is either a a 2 character language code or one of zh-Hans/zh-Hant for Simplified or Traditional Chinese. [Read more: supported languages.](doc:language-localization#section-supported-languages) </p>\n<p>Example: `{\"en\": \"You have $[notif_count] new messages\"}`</p>",
    "1-2": "Android",
    "1-1": "object",
    "1-0": "`android_group_message`",
    "2-3": "Notifications with the same group will be stacked together using Android's [Notification Grouping](doc:android-customizations#section-notification-grouping) feature.",
    "2-2": "Amazon",
    "2-1": "string",
    "2-0": "`adm_group`",
    "3-0": "`adm_group_message`",
    "3-1": "object",
    "3-2": "Amazon",
    "3-3": "<p>Summary message to display when 2+ notifications are stacked together. Default is \"# new messages\". Include $[notif_count] in your message and it will be replaced with the current number.  \"en\" (English) is required. The key of each hash is either a a 2 character language code or one of zh-Hans/zh-Hant for Simplified or Traditional Chinese. The value of each key is the message that will be sent to users for that language.</p>\n<p>Example: `{\"en\": \"You have $[notif_count] new messages\"}`</p>",
    "4-0": "`thread_id`",
    "4-1": "string",
    "4-2": "iOS 12+",
    "4-3": "This parameter is supported in iOS 12 and above. It allows you to group related notifications together.\n\nIf two notifications have the same `thread-id`, they will both be added to the same group.",
    "5-2": "iOS 12+",
    "6-2": "iOS 12+",
    "5-1": "string",
    "6-1": "number",
    "5-0": "`summary_arg`",
    "6-0": "`summary_arg_count`",
    "5-3": "When using `thread_id` to create grouped notifications in iOS 12+, you can also control the summary. For example, a grouped notification can say \"12 more notifications from John Doe\".\n\nThe `summary_arg` lets you set the name of the person/thing the notifications are coming from, and will show up as \"X more notifications from `summary_arg`\"",
    "6-3": "When using `thread_id`, you can also control the count of the number of notifications in the group. For example, if the group already has 12 notifications, and you send a new notification with `summary_arg_count` = `2`, the new total will be 14 and the summary will be \"14 more notifications from `summary_arg`\"",
    "7-0": "`ios_relevance_score`",
    "7-1": "float between `0-1`",
    "7-2": "iOS 15+",
    "7-3": "A [iOS: Relevance Score](doc:ios-relevance-score) is a score to be set per notification to indicate how it should be displayed when grouped.",
    "8-0": "`ios_interruption_level`",
    "8-1": "string",
    "8-3": "[iOS: Focus Modes and Interruption Levels](doc:ios-focus-modes-and-interruption-levels) indicate the priority and delivery timing of a notification, to ‘interrupt’ the user. Up until iOS 15, Apple primarily focused on Critical notifications. \n\nCan choose from options: `['active', 'passive', 'time_sensitive', 'critical']`\n\nDefault is `active`.",
    "8-2": "iOS 15+"
  },
  "cols": 4,
  "rows": 9
}
[/block]
### Platform to Deliver To
By default, OneSignal will send to every platform (each platform equals `true`). 

To only send to specific platforms, you may pass in `true` on one or more of these boolean parameters corresponding to the platform you wish to target. If you do so, all other platforms will be set to `false` and will not be delivered to.
[block:callout]
{
  "type": "warning",
  "body": "These parameters will be ignored if sending to devices directly with `include_player_ids` or `include_external_user_ids` \n\nFor example, sending push to `external_user_id` associated with Android, iOS and Web Platform:\n\n```\n{\n\"include_player_ids\": [\"player_id_1\", \"player_id_2\"],\n\"isIos\": true\n}\n```\nThis will ignore `isIos` and send the push message to all subscribed devices with these External User IDs.",
  "title": "Limitation Targeting `include_player_ids`"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Targeting `include_external_user_id` channels",
  "body": "External User IDs can be associated with Push, Email, or SMS records, you must set `channel_for_external_user_ids` to `\"push\"` or `\"email\"` or `\"sms\"` when sending to that channel.\n\nFor Example, sending email to `external_user_id` associated with a push, email and sms record:\n```\n{\n\"include_external_user_ids\": [\"external_user_id_on_push_email_sms\"],\n\"channel_for_external_user_ids\": \"email\"\n}\n```"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Platform",
    "h-3": "Description",
    "0-0": "`isIos`",
    "0-1": "boolean",
    "1-1": "boolean",
    "3-1": "boolean",
    "7-1": "boolean",
    "8-1": "boolean",
    "9-1": "boolean",
    "1-0": "`isAndroid`",
    "3-0": "`isAnyWeb`",
    "7-0": "`isWP_WNS`",
    "8-0": "`isAdm`",
    "9-0": "`isChrome`",
    "0-2": "iOS",
    "1-2": "Android",
    "3-2": "All Browsers",
    "9-2": "ChromeApp",
    "8-2": "Amazon",
    "7-2": "Windows",
    "0-3": "Indicates whether to send to all devices registered under your app's Apple iOS platform.",
    "1-3": "Indicates whether to send to all devices registered under your app's Google Android platform.",
    "3-3": "<p>Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari.</p>\n\n<p>You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.</p>",
    "7-3": "Indicates whether to send to all devices registered under your app's Windows platform.",
    "8-3": "Indicates whether to send to all devices registered under your app's Amazon Fire platform.",
    "9-3": "<p><span class=\"label-all label-notrec\">This flag is not used for web push</span> Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.</p>\n<p>Indicates whether to send to all devices registered under your app's Google Chrome Apps & Extension platform.</p>",
    "4-0": "`isChromeWeb`",
    "5-0": "`isFirefox` *",
    "4-1": "boolean",
    "5-1": "boolean",
    "6-1": "boolean",
    "4-2": "Chrome",
    "5-2": "Firefox",
    "6-2": "Safari",
    "6-0": "`isSafari`",
    "4-3": "Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.",
    "5-3": "Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.",
    "6-3": "**Does not support iOS Safari.** Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform. [Read more: iOS Safari](https://onesignal.com/blog/the-state-of-ios-web-push-in-2020/)",
    "10-0": "`channel_for_external_user_ids`",
    "10-1": "string",
    "10-2": "`\"push\"` or `\"email\"` or `\"sms\"`",
    "10-3": "<p>Indicates if the message type when targeting with [include_external_user_ids](#send-to-specific-devices) for cases where an email, sms, and/or push subscribers have the same external user id.</p>\n\n<p>Example: Use the string `\"push\"` to indicate you are sending a push notification or the string `\"email\"`for sending emails or `\"sms\"`for sending SMS.</p>",
    "2-0": "`isHuawei`",
    "2-1": "boolean",
    "2-2": "Huawei",
    "2-3": "Indicates whether to send to all devices registered under your app's Huawei Android platform."
  },
  "cols": 4,
  "rows": 11
}
[/block]



## Example Code - Create notification 

### Send to a specific segment or all subscribers - Create notification 
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"headings\\\": {\\\"en\\\": \\\"English Title\\\"},\n\\\"included_segments\\\": [\\\"Subscribed Users\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "shell"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"included_segments\": [\"Subscribed Users\"],\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}",
      "language": "json"
    },
    {
      "code": "<?PHP\nfunction sendMessage() {\n    $content      = array(\n        \"en\" => 'English Message'\n    );\n    $hashes_array = array();\n    array_push($hashes_array, array(\n        \"id\" => \"like-button\",\n        \"text\" => \"Like\",\n        \"icon\" => \"http://i.imgur.com/N8SN8ZS.png\",\n        \"url\" => \"https://yoursite.com\"\n    ));\n    array_push($hashes_array, array(\n        \"id\" => \"like-button-2\",\n        \"text\" => \"Like2\",\n        \"icon\" => \"http://i.imgur.com/N8SN8ZS.png\",\n        \"url\" => \"https://yoursite.com\"\n    ));\n    $fields = array(\n        'app_id' => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n        'included_segments' => array(\n            'Subscribed Users'\n        ),\n        'data' => array(\n            \"foo\" => \"bar\"\n        ),\n        'contents' => $content,\n        'web_buttons' => $hashes_array\n    );\n    \n    $fields = json_encode($fields);\n    print(\"\\nJSON sent:\\n\");\n    print($fields);\n    \n    $ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/notifications\");\n    curl_setopt($ch, CURLOPT_HTTPHEADER, array(\n        'Content-Type: application/json; charset=utf-8',\n        'Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj'\n    ));\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n    curl_setopt($ch, CURLOPT_HEADER, FALSE);\n    curl_setopt($ch, CURLOPT_POST, TRUE);\n    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n    \n    $response = curl_exec($ch);\n    curl_close($ch);\n    \n    return $response;\n}\n\n$response = sendMessage();\n$return[\"allresponses\"] = $response;\n$return = json_encode($return);\n\n$data = json_decode($response, true);\nprint_r($data);\n$id = $data['id'];\nprint_r($id);\n\nprint(\"\\n\\nJSON received:\\n\");\nprint($return);\nprint(\"\\n\");\n?>",
      "language": "csharp",
      "name": "PHP"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nbyte[] byteArray = Encoding.UTF8.GetBytes(\"{\"\n                                        + \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                                        + \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\"\n                                        + \"\\\"included_segments\\\": [\\\"Subscribed Users\\\"]}\");\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (.NET standard)"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nvar serializer = new JavaScriptSerializer();\nvar obj = new { app_id = \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n               contents = new { en = \"English Message\" },\n               included_segments = new string[] {\"Subscribed Users\"} };\nvar param = serializer.Serialize(obj);\nbyte[] byteArray = Encoding.UTF8.GetBytes(param);\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (ASP.NET)"
    },
    {
      "code": "params = {\"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n          \"contents\" => {\"en\" => \"English Message\"},\n          \"included_segments\" => [\"Subscribed Users\"]}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"included_segments\": [\"Subscribed Users\"],\n           \"contents\": {\"en\": \"English Message\"}}\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)",
      "language": "python",
      "name": null
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  contents: {\"en\": \"English Message\"},\n  included_segments: [\"Subscribed Users\"]\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    },
    {
      "code": "#!/usr/bin/perl -w\n \nuse strict;\nuse warnings;\nuse Net::Curl::Easy qw(/^CURLOPT_.*/);;\nuse JSON;\nuse Data::Dumper;\n \nsub SendNotification\n{\n    my ($url , $authorisation , $app_id , $contents) = @_;\n    my $curl = Net::Curl::Easy->new;\n    my $json = JSON->new();\n    my $response_body;\n \n    my $json_string = $json->encode({ app_id => $app_id ,\n                                      included_segments => [\"Subscribed Users\"] ,\n                                      data => { \"key1\" => \"Value 1\" } ,\n                                      ios_badgeType => \"Increase\" ,\n                                      ios_badgeCount => 1 ,\n                                      contents => { en => $contents}\n                                    });\n \n    $curl->setopt( CURLOPT_URL, $url);\n    $curl->setopt( CURLOPT_SSL_VERIFYHOST , 0);\n    $curl->setopt( CURLOPT_SSL_VERIFYPEER , 0);\n \n    $curl->setopt( CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8' ,\n                                        \"Authorization: Basic $authorisation\"]);\n    $curl->setopt( CURLOPT_POST , 1);\n    $curl->setopt( CURLOPT_POSTFIELDS , $json_string);\n \n    $curl->setopt( CURLOPT_WRITEDATA , \\$response_body);\n \n    $curl->perform;\n    print Dumper($response_body);\n}\n \nSendNotification(\"https://onesignal.com/api/v1/notifications\" ,\n                 \"<< PUT YOUR REST API KEY HERE>>\" ,\n                 \"<< PUT YOUR APP ID KEY HERE >>\" ,\n                 \"Hello World\");\n \nexit(0);",
      "language": "perl"
    },
    {
      "code": "send = function(params) {\n\nvar promise = new Parse.Promise();\n\nvar jsonBody = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  included_segments: [\"Subscribed Users\"],\n  contents: {en: \"English Message\"},\n  data: {foo: \"bar\"}\n};\n\nParse.Cloud.httpRequest({\n    method: \"POST\",\n    url: \"https://onesignal.com/api/v1/notifications\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\",\n      \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n    },\n    body: JSON.stringify(jsonBody)\n  }).then(function (httpResponse) {\n    promise.resolve(httpResponse)\n  },\n  function (httpResponse) {\n    promise.reject(httpResponse);\n});\n\nreturn promise;\n};\n\nexports.send = send;",
      "language": "javascript",
      "name": "Parse Cloud"
    },
    {
      "code": "function SendNewNotification() {\n\n  var jsonBody = {\n\n    app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\n    included_segments: [\"Subscribed Users\"],\n\n    contents: {en: \"English Message\"},\n\n  };\n\n  var promise = Spark.getHttp(\"https://onesignal.com/api/v1/notifications\").setHeaders({\n\n    \"Content-Type\": \"application/json;charset=utf-8\",\n\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n\n  }).postJson(jsonBody);\n  \n\n  return promise;\n\n}\n\nvar response = SendNewNotification().getResponseJson();\n\nSpark.setScriptData(\"response\", response)",
      "language": "javascript",
      "name": "GameSparks"
    },
    {
      "code": "try {\n   String jsonResponse;\n   \n   URL url = new URL(\"https://onesignal.com/api/v1/notifications\");\n   HttpURLConnection con = (HttpURLConnection)url.openConnection();\n   con.setUseCaches(false);\n   con.setDoOutput(true);\n   con.setDoInput(true);\n\n   con.setRequestProperty(\"Content-Type\", \"application/json; charset=UTF-8\");\n   con.setRequestProperty(\"Authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n   con.setRequestMethod(\"POST\");\n\n   String strJsonBody = \"{\"\n                      +   \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                      +   \"\\\"included_segments\\\": [\\\"Subscribed Users\\\"],\"\n                      +   \"\\\"data\\\": {\\\"foo\\\": \\\"bar\\\"},\"\n                      +   \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"}\"\n                      + \"}\";\n         \n   \n   System.out.println(\"strJsonBody:\\n\" + strJsonBody);\n\n   byte[] sendBytes = strJsonBody.getBytes(\"UTF-8\");\n   con.setFixedLengthStreamingMode(sendBytes.length);\n\n   OutputStream outputStream = con.getOutputStream();\n   outputStream.write(sendBytes);\n\n   int httpResponse = con.getResponseCode();\n   System.out.println(\"httpResponse: \" + httpResponse);\n\n   if (  httpResponse >= HttpURLConnection.HTTP_OK\n      && httpResponse < HttpURLConnection.HTTP_BAD_REQUEST) {\n      Scanner scanner = new Scanner(con.getInputStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   else {\n      Scanner scanner = new Scanner(con.getErrorStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   System.out.println(\"jsonResponse:\\n\" + jsonResponse);\n   \n} catch(Throwable t) {\n   t.printStackTrace();\n}\n",
      "language": "java"
    }
  ]
}
[/block]
### Send based on filters/tags - Create notification 
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"headings\\\": {\\\"en\\\": \\\"English Title\\\"},\n\\\"filters\\\": [{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"level\\\", \\\"relation\\\": \\\">\\\", \\\"value\\\": \\\"10\\\"},{\\\"operator\\\": \\\"OR\\\"},{\\\"field\\\": \\\"amount_spent\\\", \\\"relation\\\": \\\">\\\",\\\"value\\\": \\\"0\\\"}]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "shell"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"filters\": [\n  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n  ],\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}",
      "language": "json"
    },
    {
      "code": "<?PHP\n\tfunction sendMessage(){\n\t\t$content = array(\n\t\t\t\"en\" => 'English Message'\n\t\t\t);\n\t\t\n\t\t$fields = array(\n\t\t\t'app_id' => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\t\t\t'filters' => array(array(\"field\" => \"tag\", \"key\" => \"level\", \"relation\" => \"=\", \"value\" => \"10\"),array(\"operator\" => \"OR\"),array(\"field\" => \"amount_spent\", \"relation\" => \"=\", \"value\" => \"0\")),\n\t\t\t'data' => array(\"foo\" => \"bar\"),\n\t\t\t'contents' => $content\n\t\t);\n\t\t\n\t\t$fields = json_encode($fields);\n    \tprint(\"\\nJSON sent:\\n\");\n    \tprint($fields);\n\t\t\n\t\t$ch = curl_init();\n\t\tcurl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/notifications\");\n\t\tcurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',\n\t\t\t\t\t\t\t\t\t\t\t\t   'Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj'));\n\t\tcurl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_HEADER, FALSE);\n\t\tcurl_setopt($ch, CURLOPT_POST, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n\t\tcurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n\t\t$response = curl_exec($ch);\n\t\tcurl_close($ch);\n\t\t\n\t\treturn $response;\n\t}\n\t\n\t$response = sendMessage();\n\t$return[\"allresponses\"] = $response;\n\t$return = json_encode( $return);\n\t\n\tprint(\"\\n\\nJSON received:\\n\");\n\tprint($return);\n\tprint(\"\\n\");\n?>",
      "language": "csharp",
      "name": "PHP"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nbyte[] byteArray = Encoding.UTF8.GetBytes(\"{\"\n                                        + \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                                        + \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\"\n                                        + \"\\\"filters\\\": [{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"level\\\", \\\"relation\\\": \\\">\\\", \\\"value\\\": \\\"10\\\"},{\\\"operator\\\": \\\"OR\\\"},{\\\"field\\\": \\\"amount_spent\\\", \\\"relation\\\": \\\">\\\",\\\"value\\\": \\\"0\\\"}]}\");\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (.NET standard)"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nvar serializer = new JavaScriptSerializer();\nvar obj = new { app_id = \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n               contents = new { en = \"English Message\" },\n               filters = new object[] { new { field = \"tag\", key = \"level\", value = \"10\" }, new { @operator = \"OR\" }, new { field = \"amount_spent\", relation = \">\", value = \"0\" } } };\n\n                 \n\nvar param = serializer.Serialize(obj);\nbyte[] byteArray = Encoding.UTF8.GetBytes(param);\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (ASP.NET)"
    },
    {
      "code": "params = {\"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n          \"contents\" => {\"en\" => \"English Message\"},\n          \"filters\" => [\n\t\t\t\t\t  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n\t\t\t\t\t  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n\t\t\t\t\t  ]\n\t\t}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"filters\": [\n\t\t\t  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n\t\t\t  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n\t\t\t],\n           \"contents\": {\"en\": \"English Message\"}}\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)",
      "language": "python",
      "name": null
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  contents: {\"en\": \"English Message\"},\n  filters: [\n\t  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n\t  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n\t]\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    },
    {
      "code": "#!/usr/bin/perl -w\n \nuse strict;\nuse warnings;\nuse Net::Curl::Easy qw(/^CURLOPT_.*/);;\nuse JSON;\nuse Data::Dumper;\n \nsub SendNotification\n{\n    my ($url , $authorisation , $app_id , $contents) = @_;\n    my $curl = Net::Curl::Easy->new;\n    my $json = JSON->new();\n    my $response_body;\n \n    my $json_string = $json->encode({ app_id => $app_id ,\n                                      filters => [\n\t\t\t\t\t\t\t\t\t\t  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n\t\t\t\t\t\t\t\t\t\t  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n\t\t\t\t\t\t\t\t\t\t],\n                                      contents => { en => $contents}\n                                    });\n \n    $curl->setopt( CURLOPT_URL, $url);\n    $curl->setopt( CURLOPT_SSL_VERIFYHOST , 0);\n    $curl->setopt( CURLOPT_SSL_VERIFYPEER , 0);\n \n    $curl->setopt( CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8' ,\n                                        \"Authorization: Basic $authorisation\"]);\n    $curl->setopt( CURLOPT_POST , 1);\n    $curl->setopt( CURLOPT_POSTFIELDS , $json_string);\n \n    $curl->setopt( CURLOPT_WRITEDATA , \\$response_body);\n \n    $curl->perform;\n    print Dumper($response_body);\n}\n \nSendNotification(\"https://onesignal.com/api/v1/notifications\" ,\n                 \"<< PUT YOUR REST API KEY HERE>>\" ,\n                 \"<< PUT YOUR APP ID KEY HERE >>\" ,\n                 \"Hello World\");\n \nexit(0);",
      "language": "perl"
    },
    {
      "code": "send = function(params) {\n\nvar promise = new Parse.Promise();\n\nvar jsonBody = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  filters: [\n  \t{\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n  \t{\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n  ],\n  contents: {en: \"English Message\"},\n  data: {foo: \"bar\"}\n};\n\nParse.Cloud.httpRequest({\n    method: \"POST\",\n    url: \"https://onesignal.com/api/v1/notifications\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\",\n      \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n    },\n    body: JSON.stringify(jsonBody)\n  }).then(function (httpResponse) {\n    promise.resolve(httpResponse)\n  },\n  function (httpResponse) {\n    promise.reject(httpResponse);\n});\n\nreturn promise;\n};\n\nexports.send = send;",
      "language": "javascript",
      "name": "Parse Cloud"
    },
    {
      "code": "function SendNewNotification() {\n\n  var jsonBody = {\n\n    app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\n    filters: [\n\n  \t  {\"field\": \"tag\", \"key\": \"level\", \"relation\": \"=\", \"value\": \"10\"}, \n\n  \t  {\"operator\": \"OR\"}, {\"field\": \"amount_spent\", \"relation\": \">\", \"value\": \"0\"}\n\n    ],\n\n    contents: {en: \"English Message\"},\n\n  };\n\n  var promise = Spark.getHttp(\"https://onesignal.com/api/v1/notifications\").setHeaders({\n\n    \"Content-Type\": \"application/json;charset=utf-8\",\n\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n\n  }).postJson(jsonBody);\n  \n\n  return promise;\n\n}\n\nvar response = SendNewNotification().getResponseJson();\n\nSpark.setScriptData(\"response\", response)",
      "language": "javascript",
      "name": "GameSparks"
    },
    {
      "code": "try {\n   String jsonResponse;\n   \n   URL url = new URL(\"https://onesignal.com/api/v1/notifications\");\n   HttpURLConnection con = (HttpURLConnection)url.openConnection();\n   con.setUseCaches(false);\n   con.setDoOutput(true);\n   con.setDoInput(true);\n\n   con.setRequestProperty(\"Content-Type\", \"application/json; charset=UTF-8\");\n   con.setRequestProperty(\"Authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n   con.setRequestMethod(\"POST\");\n\n   String strJsonBody = \"{\"\n                      +   \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                      +   \"\\\"filters\\\": [{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"level\\\", \\\"relation\\\": \\\">\\\", \\\"value\\\": \\\"10\\\"},{\\\"operator\\\": \\\"OR\\\"},{\\\"field\\\": \\\"amount_spent\\\", \\\"relation\\\": \\\">\\\",\\\"value\\\": \\\"0\\\"}],\"\n                      +   \"\\\"data\\\": {\\\"foo\\\": \\\"bar\\\"},\"\n                      +   \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"}\"\n                      + \"}\";\n         \n   \n   System.out.println(\"strJsonBody:\\n\" + strJsonBody);\n\n   byte[] sendBytes = strJsonBody.getBytes(\"UTF-8\");\n   con.setFixedLengthStreamingMode(sendBytes.length);\n\n   OutputStream outputStream = con.getOutputStream();\n   outputStream.write(sendBytes);\n\n   int httpResponse = con.getResponseCode();\n   System.out.println(\"httpResponse: \" + httpResponse);\n\n   if (  httpResponse >= HttpURLConnection.HTTP_OK\n      && httpResponse < HttpURLConnection.HTTP_BAD_REQUEST) {\n      Scanner scanner = new Scanner(con.getInputStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   else {\n      Scanner scanner = new Scanner(con.getErrorStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   System.out.println(\"jsonResponse:\\n\" + jsonResponse);\n   \n} catch(Throwable t) {\n   t.printStackTrace();\n}",
      "language": "java"
    }
  ]
}
[/block]
### Send based on External User IDs - Create notification
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"headings\\\": {\\\"en\\\": \\\"English Title\\\"},\n\\\"channel_for_external_user_ids\\\": \\\"push\\\",\n\\\"include_external_user_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "shell"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_external_user_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n  \"channel_for_external_user_ids\": \"push\",\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}\n",
      "language": "json"
    },
    {
      "code": "<?PHP\n\tfunction sendMessage(){\n\t\t$content = array(\n\t\t\t\"en\" => 'English Message'\n\t\t\t);\n\t\t\n\t\t$fields = array(\n\t\t\t'app_id' => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\t\t\t'include_external_user_ids' => array(\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"),\n      'channel_for_external_user_ids' => 'push',\n\t\t\t'data' => array(\"foo\" => \"bar\"),\n\t\t\t'contents' => $content\n\t\t);\n\t\t\n\t\t$fields = json_encode($fields);\n    \tprint(\"\\nJSON sent:\\n\");\n    \tprint($fields);\n\t\t\n\t\t$ch = curl_init();\n\t\tcurl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/notifications\");\n\t\tcurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',\n\t\t\t\t\t\t\t\t\t\t\t\t   'Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj'));\n\t\tcurl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_HEADER, FALSE);\n\t\tcurl_setopt($ch, CURLOPT_POST, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n\t\tcurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n\t\t$response = curl_exec($ch);\n\t\tcurl_close($ch);\n\t\t\n\t\treturn $response;\n\t}\n\t\n\t$response = sendMessage();\n\t$return[\"allresponses\"] = $response;\n\t$return = json_encode( $return);\n\t\n\tprint(\"\\n\\nJSON received:\\n\");\n\tprint($return);\n\tprint(\"\\n\");\n?>\n",
      "language": "csharp",
      "name": "PHP"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nbyte[] byteArray = Encoding.UTF8.GetBytes(\"{\"\n                                        + \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                                        + \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\"\n                                        +  \"\\\"channel_for_external_user_ids\\\": \\\"push\\\",\"\n                                        + \"\\\"include_external_user_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"]}\");\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (.NET standard)"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nrequest.Headers.Add(\"authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n\nvar serializer = new JavaScriptSerializer();\nvar obj = new { app_id = \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n               contents = new { en = \"English Message\" },\n               channel_for_external_user_ids = \"push\",\n               include_external_user_ids = new string[] {\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"} };\n\n                 \n\nvar param = serializer.Serialize(obj);\nbyte[] byteArray = Encoding.UTF8.GetBytes(param);\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (ASP.NET)"
    },
    {
      "code": "params = {\"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n          \"contents\" => {\"en\" => \"English Message\"},\n          \"channel_for_external_user_ids\" => \"push\",\n          \"include_external_user_ids\" => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"]\n\t\t}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"include_external_user_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n           \"channel_for_external_user_ids\": \"push\",\n           \"contents\": {\"en\": \"English Message\"}}\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)\n",
      "language": "python",
      "name": null
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  };\n  \n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  contents: {\"en\": \"English Message\"},\n  channel_for_external_user_ids: \"push\",\n  include_external_user_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"]\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    },
    {
      "code": "#!/usr/bin/perl -w\n \nuse strict;\nuse warnings;\nuse Net::Curl::Easy qw(/^CURLOPT_.*/);;\nuse JSON;\nuse Data::Dumper;\n \nsub SendNotification\n{\n    my ($url , $authorisation , $app_id , $contents) = @_;\n    my $curl = Net::Curl::Easy->new;\n    my $json = JSON->new();\n    my $response_body;\n \n    my $json_string = $json->encode({ app_id => $app_id ,\n                                      include_external_user_ids => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n                                      channel_for_external_user_ids => \"push\",\n                                      contents => { en => $contents}\n                                    });\n \n    $curl->setopt( CURLOPT_URL, $url);\n    $curl->setopt( CURLOPT_SSL_VERIFYHOST , 0);\n    $curl->setopt( CURLOPT_SSL_VERIFYPEER , 0);\n \n    $curl->setopt( CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8' ,\n                                        \"Authorization: Basic $authorisation\"]);\n    $curl->setopt( CURLOPT_POST , 1);\n    $curl->setopt( CURLOPT_POSTFIELDS , $json_string);\n \n    $curl->setopt( CURLOPT_WRITEDATA , \\$response_body);\n \n    $curl->perform;\n    print Dumper($response_body);\n}\n \nSendNotification(\"https://onesignal.com/api/v1/notifications\" ,\n                 \"<< PUT YOUR APP ID KEY HERE >>\" ,\n                 \"Hello World\");\n \nexit(0);",
      "language": "perl"
    },
    {
      "code": "send = function(params) {\n\nvar promise = new Parse.Promise();\n\nvar jsonBody = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  include_external_user_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n  contents: {en: \"English Message\"},\n  channel_for_external_user_ids: \"push\",\n  data: {foo: \"bar\"}\n};\n\nParse.Cloud.httpRequest({\n    method: \"POST\",\n    url: \"https://onesignal.com/api/v1/notifications\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\",\n      \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n    },\n    body: JSON.stringify(jsonBody)\n  }).then(function (httpResponse) {\n    promise.resolve(httpResponse)\n  },\n  function (httpResponse) {\n    promise.reject(httpResponse);\n});\n\nreturn promise;\n};\n\nexports.send = send;\n\n",
      "language": "javascript",
      "name": "Parse Cloud"
    },
    {
      "code": "function SendNewNotification() {\n\n  var jsonBody = {\n\n    app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\n    include_external_user_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n\n    contents: {en: \"English Message\"},\n    channel_for_external_user_ids: \"push\",\n\n  };\n\n  var promise = Spark.getHttp(\"https://onesignal.com/api/v1/notifications\").setHeaders({\n\n    \"Content-Type\": \"application/json;charset=utf-8\",\n\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n\n  }).postJson(jsonBody);\n  \n\n  return promise;\n\n}\n\nvar response = SendNewNotification().getResponseJson();\n\nSpark.setScriptData(\"response\", response)\n",
      "language": "javascript",
      "name": "GameSparks"
    },
    {
      "code": "try {\n   String jsonResponse;\n   \n   URL url = new URL(\"https://onesignal.com/api/v1/notifications\");\n   HttpURLConnection con = (HttpURLConnection)url.openConnection();\n   con.setUseCaches(false);\n   con.setDoOutput(true);\n   con.setDoInput(true);\n\n   con.setRequestProperty(\"Content-Type\", \"application/json; charset=UTF-8\");\n   con.setRequestProperty(\"Authorization\", \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\");\n   con.setRequestMethod(\"POST\");\n\n   String strJsonBody = \"{\"\n                      +   \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                      +   \"\\\"include_external_user_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"],\"\n                      +   \"\\\"channel_for_external_user_ids\\\": \\\"push\\\",\"\n                      +   \"\\\"data\\\": {\\\"foo\\\": \\\"bar\\\"},\"\n                      +   \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"}\"\n                      + \"}\";\n         \n   \n   System.out.println(\"strJsonBody:\\n\" + strJsonBody);\n\n   byte[] sendBytes = strJsonBody.getBytes(\"UTF-8\");\n   con.setFixedLengthStreamingMode(sendBytes.length);\n\n   OutputStream outputStream = con.getOutputStream();\n   outputStream.write(sendBytes);\n\n   int httpResponse = con.getResponseCode();\n   System.out.println(\"httpResponse: \" + httpResponse);\n\n   if (  httpResponse >= HttpURLConnection.HTTP_OK\n      && httpResponse < HttpURLConnection.HTTP_BAD_REQUEST) {\n      Scanner scanner = new Scanner(con.getInputStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   else {\n      Scanner scanner = new Scanner(con.getErrorStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   System.out.println(\"jsonResponse:\\n\" + jsonResponse);\n   \n} catch(Throwable t) {\n   t.printStackTrace();\n}",
      "language": "java"
    }
  ]
}
[/block]
### Send based on OneSignal Player IDs - Create notification
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\n\\\"name\\\": {\\\"en\\\": \\\"My notification Name\\\"},     \n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"headings\\\": {\\\"en\\\": \\\"English Title\\\"},\n\\\"include_player_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "shell"
    },
    {
      "code": "{\n  \"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n  \"data\": {\"foo\": \"bar\"},\n  \"contents\": {\"en\": \"English Message\"}\n}\n",
      "language": "json"
    },
    {
      "code": "<?PHP\n\tfunction sendMessage(){\n\t\t$content = array(\n\t\t\t\"en\" => 'English Message'\n\t\t\t);\n\t\t\n\t\t$fields = array(\n\t\t\t'app_id' => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\t\t\t'include_player_ids' => array(\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"),\n\t\t\t'data' => array(\"foo\" => \"bar\"),\n\t\t\t'contents' => $content\n\t\t);\n\t\t\n\t\t$fields = json_encode($fields);\n    \tprint(\"\\nJSON sent:\\n\");\n    \tprint($fields);\n\t\t\n\t\t$ch = curl_init();\n\t\tcurl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/notifications\");\n\t\tcurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));\n\t\tcurl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_HEADER, FALSE);\n\t\tcurl_setopt($ch, CURLOPT_POST, TRUE);\n\t\tcurl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n\t\tcurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n\t\t$response = curl_exec($ch);\n\t\tcurl_close($ch);\n\t\t\n\t\treturn $response;\n\t}\n\t\n\t$response = sendMessage();\n\t$return[\"allresponses\"] = $response;\n\t$return = json_encode( $return);\n\t\n\tprint(\"\\n\\nJSON received:\\n\");\n\tprint($return);\n\tprint(\"\\n\");\n?>\n",
      "language": "csharp",
      "name": "PHP"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nbyte[] byteArray = Encoding.UTF8.GetBytes(\"{\"\n                                        + \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                                        + \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\"\n                                        + \"\\\"include_player_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"]}\");\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (.NET standard)"
    },
    {
      "code": "using System.IO;\nusing System.Net;\nusing System.Text;\n\nvar request = WebRequest.Create(\"https://onesignal.com/api/v1/notifications\") as HttpWebRequest;\n\nrequest.KeepAlive = true;\nrequest.Method = \"POST\";\nrequest.ContentType = \"application/json; charset=utf-8\";\n\nvar serializer = new JavaScriptSerializer();\nvar obj = new { app_id = \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n               contents = new { en = \"English Message\" },\n               include_player_ids = new string[] {\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"} };\n\n                 \n\nvar param = serializer.Serialize(obj);\nbyte[] byteArray = Encoding.UTF8.GetBytes(param);\n\nstring responseContent = null;\n\ntry {\n    using (var writer = request.GetRequestStream()) {\n        writer.Write(byteArray, 0, byteArray.Length);\n    }\n\n    using (var response = request.GetResponse() as HttpWebResponse) {\n        using (var reader = new StreamReader(response.GetResponseStream())) {\n            responseContent = reader.ReadToEnd();\n        }\n    }\n}\ncatch (WebException ex) {\n    System.Diagnostics.Debug.WriteLine(ex.Message);\n    System.Diagnostics.Debug.WriteLine(new StreamReader(ex.Response.GetResponseStream()).ReadToEnd());\n}\n\nSystem.Diagnostics.Debug.WriteLine(responseContent);",
      "language": "csharp",
      "name": "C# (ASP.NET)"
    },
    {
      "code": "params = {\"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n          \"contents\" => {\"en\" => \"English Message\"},\n          \"include_player_ids\" => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"]\n\t\t}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,'Content-Type'  => 'application/json;charset=utf-8')\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n           \"contents\": {\"en\": \"English Message\"}}\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)\n",
      "language": "python",
      "name": null
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  contents: {\"en\": \"English Message\"},\n  include_player_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"]\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    },
    {
      "code": "#!/usr/bin/perl -w\n \nuse strict;\nuse warnings;\nuse Net::Curl::Easy qw(/^CURLOPT_.*/);;\nuse JSON;\nuse Data::Dumper;\n \nsub SendNotification\n{\n    my ($url , $authorisation , $app_id , $contents) = @_;\n    my $curl = Net::Curl::Easy->new;\n    my $json = JSON->new();\n    my $response_body;\n \n    my $json_string = $json->encode({ app_id => $app_id ,\n                                      include_player_ids => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n                                      contents => { en => $contents}\n                                    });\n \n    $curl->setopt( CURLOPT_URL, $url);\n    $curl->setopt( CURLOPT_SSL_VERIFYHOST , 0);\n    $curl->setopt( CURLOPT_SSL_VERIFYPEER , 0);\n \n    $curl->setopt( CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8']);\n    $curl->setopt( CURLOPT_POST , 1);\n    $curl->setopt( CURLOPT_POSTFIELDS , $json_string);\n \n    $curl->setopt( CURLOPT_WRITEDATA , \\$response_body);\n \n    $curl->perform;\n    print Dumper($response_body);\n}\n \nSendNotification(\"https://onesignal.com/api/v1/notifications\" ,\n                 \"<< PUT YOUR APP ID KEY HERE >>\" ,\n                 \"Hello World\");\n \nexit(0);",
      "language": "perl"
    },
    {
      "code": "send = function(params) {\n\nvar promise = new Parse.Promise();\n\nvar jsonBody = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  include_player_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n  contents: {en: \"English Message\"},\n  data: {foo: \"bar\"}\n};\n\nParse.Cloud.httpRequest({\n    method: \"POST\",\n    url: \"https://onesignal.com/api/v1/notifications\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    },\n    body: JSON.stringify(jsonBody)\n  }).then(function (httpResponse) {\n    promise.resolve(httpResponse)\n  },\n  function (httpResponse) {\n    promise.reject(httpResponse);\n});\n\nreturn promise;\n};\n\nexports.send = send;\n\n",
      "language": "javascript",
      "name": "Parse Cloud"
    },
    {
      "code": "function SendNewNotification() {\n\n  var jsonBody = {\n\n    app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n\n    include_player_ids: [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\",\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\"],\n\n    contents: {en: \"English Message\"},\n\n  };\n\n  var promise = Spark.getHttp(\"https://onesignal.com/api/v1/notifications\").setHeaders({\n\n    \"Content-Type\": \"application/json;charset=utf-8\"\n\n  }).postJson(jsonBody);\n  \n\n  return promise;\n\n}\n\nvar response = SendNewNotification().getResponseJson();\n\nSpark.setScriptData(\"response\", response)\n",
      "language": "javascript",
      "name": "GameSparks"
    },
    {
      "code": "try {\n   String jsonResponse;\n   \n   URL url = new URL(\"https://onesignal.com/api/v1/notifications\");\n   HttpURLConnection con = (HttpURLConnection)url.openConnection();\n   con.setUseCaches(false);\n   con.setDoOutput(true);\n   con.setDoInput(true);\n\n   con.setRequestProperty(\"Content-Type\", \"application/json; charset=UTF-8\");\n   con.setRequestMethod(\"POST\");\n\n   String strJsonBody = \"{\"\n                      +   \"\\\"app_id\\\": \\\"5eb5a37e-b458-11e3-ac11-000c2940e62c\\\",\"\n                      +   \"\\\"include_player_ids\\\": [\\\"6392d91a-b206-4b7b-a620-cd68e32c3a76\\\",\\\"76ece62b-bcfe-468c-8a78-839aeaa8c5fa\\\",\\\"8e0f21fa-9a5a-4ae7-a9a6-ca1f24294b86\\\"],\"\n                      +   \"\\\"data\\\": {\\\"foo\\\": \\\"bar\\\"},\"\n                      +   \"\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"}\"\n                      + \"}\";\n         \n   \n   System.out.println(\"strJsonBody:\\n\" + strJsonBody);\n\n   byte[] sendBytes = strJsonBody.getBytes(\"UTF-8\");\n   con.setFixedLengthStreamingMode(sendBytes.length);\n\n   OutputStream outputStream = con.getOutputStream();\n   outputStream.write(sendBytes);\n\n   int httpResponse = con.getResponseCode();\n   System.out.println(\"httpResponse: \" + httpResponse);\n\n   if (  httpResponse >= HttpURLConnection.HTTP_OK\n      && httpResponse < HttpURLConnection.HTTP_BAD_REQUEST) {\n      Scanner scanner = new Scanner(con.getInputStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   else {\n      Scanner scanner = new Scanner(con.getErrorStream(), \"UTF-8\");\n      jsonResponse = scanner.useDelimiter(\"\\\\A\").hasNext() ? scanner.next() : \"\";\n      scanner.close();\n   }\n   System.out.println(\"jsonResponse:\\n\" + jsonResponse);\n   \n} catch(Throwable t) {\n   t.printStackTrace();\n}",
      "language": "java"
    },
    {
      "code": "<cfset stFields = {\n\"app_id\": \"YOUR_APP_ID\",\n\"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\",\"0969472e-3298-4d7a-82e2-8fa127141892\",\"c98fcb48-98e2-4302-8eab-b36eb891b10c\"],\n\"data\": {\"foo\": \"bar\"},\n\"contents\": {\"en\": \"English Message\"}\n}>\n\n\n<cfhttp url=\"https://onesignal.com/api/v1/notifications\" method=\"post\" result=\"result\">\n<cfhttpparam type=\"header\" name=\"Content-Type\" value=\"application/json; charset=utf-8\" />\n<cfhttpparam type=\"body\" value=\"#serializeJSON(stFields)#\" />\n</cfhttp>",
      "language": "c",
      "name": "Coldfusion"
    }
  ]
}
[/block]
### Send Email based on Email Addresses - Create notification
[block:code]
{
  "codes": [
    {
      "code": "params = {\n  \"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  \"email_subject\" => \"Welcome to Cat Facts!\",\n  \"email_body\" => \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\",\n  \"include_email_tokens\" => [\"nick@catfac.ts\", \"jon@email.com\"],\n}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n           \"email_subject\": \"Welcome to Cat Facts!\",\n           \"email_body\": \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\" }\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)",
      "language": "python"
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n  \"email_subject\": \"Welcome to Cat Facts!\",\n  \"email_body\": \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\"\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    }
  ]
}
[/block]

In every email you send, you must include an unsubscribe link. You can insert this by adding `[unsubscribe_url]` in a link within your emails.

### Send SMS using Phone Numbers - Create notification
[block:code]
{
  "codes": [
    {
      "code": "params = {\n  \"app_id\" => \"5eb5a37e-b458-11\",\n  \"name\": \"Identifier for SMS Message\",\n  \"sms_from\": \"+15555555555\",\n  \"contents\" => { en: \"Welcome to Cat Facts!\", es: \"Bienvenidos a Factos del Gato\" },\n  \"sms_media_urls\": [\"https://cat.com/cat.jpg\"],\n  \"include_phone_numbers\": [\"+1999999999\"]}\n}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request)\nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLT\"}\npayload = {\n            \"app_id\": \"5eb5a37e-b458-11\",\n            \"name\": \"Identifier for SMS Message\",\n            \"sms_from\": \"+15555555555\",\n            \"contents\": { \"en\": \"Welcome to Cat Facts!\", \"es\": \"Bienvenidos a Factos del Gato\" },\n            \"sms_media_urls\": [\"https://cat.com/cat.jpg\"],\n            \"include_phone_numbers\": [\"+19999999999\"]\n          }\nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\nprint(req.status_code, req.reason)",
      "language": "python"
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWj\"\n  };\n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  req.write(JSON.stringify(data));\n  req.end();\n};\nvar message = {\n  \"app_id\": \"5eb5a37e-b458-11\",\n  \"name\": \"Identifier for SMS Message\",\n  \"sms_from\": \"+15555555555\",\n  \"contents\" => { en: \"Welcome to Cat Facts!\", es: \"Bienvenidos a Factos del Gato\" },\n  \"sms_media_urls\": [\"https://cat.com/cat.jpg\"],\n  \"include_phone_numbers\": [\"+19999999999\"]\n};\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    }
  ]
}
[/block]

## Results - Create notification 

- If a message was successfully created, you will get a `200` response and an `id` for the notification.

- If the `200` response contains `"invalid_player_ids"` or `"invalid_external_user_ids"` this will mark devices that exist in the provided `app_id` but are no longer subscribed. 
- `invalid_phone_numbers` will list unsubscribed and invalid phone numbers within the provided `app_id`.

**No `id` or response will be returned and no message will be created if targeting User IDs that  do not exist under the provided `app_id`.**
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"id\": \"b98881cc-1e94-4366-bbd9-db8f3429292b\",\n    \"recipients\": 1,\n    \"external_id\": null\n}",
      "language": "json",
      "name": "200 OK"
    },
    {
      "code": "{\n    \"errors\": [\n        \"Message Notifications must have English language content\"\n    ]\n}",
      "language": "json",
      "name": "400 Bad Request"
    },
    {
      "code": "// Returned if using include_player_ids and some were valid and others were not.\n// Please process these on your server and remove them from your database if you are tracking them.\n{\n    \"id\": \"c0bf597f-08e9-4e0a-8cc5-0de94ffa6033\",\n    \"recipients\": 1,\n    \"external_id\": null,\n    \"errors\": {\n        \"invalid_player_ids\": [\n            \"b186912c-cf25-4688-8218-06cb13e09a4f\"\n        ]\n    }\n}",
      "language": "javascript",
      "name": "200 invalid_player_ids"
    },
    {
      "code": "{\n    \"id\": \"\",\n    \"recipients\": 0,\n    \"errors\": [\n        \"All included players are not subscribed\"\n    ]\n}",
      "language": "json",
      "name": "200 No Subscribed Players"
    },
    {
      "code": "// Returned if using include_external_user_ids and some were valid and others were not.\n// If multiple devices or the same device with multiple player ids gets the same external_user_id,\n// then this indicates how many were unsubscribed.\n// More details on why the same device might have multiple records here: https://documentation.onesignal.com/docs/player-id\n{\n    \"id\": \"57127ecc-85ff-4888-a522-7de9f0d5182e\",\n    \"recipients\": 1,\n    \"external_id\": null,\n    \"errors\": {\n        \"invalid_external_user_ids\": [\n            \"786956\"\n        ]\n    }\n}",
      "language": "javascript",
      "name": "200 invalid_external_user_ids"
    },
    {
      "code": "// Returned if using include_phone_numbers and some were valid and others were not valid or unsubscribed.\n// Please process these on your server and remove them from your database if you are tracking them.\n{\n    \"id\": \"c0bf597f-08e9-4e0a-8cc5-0de94ffa6033\",\n    \"recipients\": 1,\n    \"external_id\": null,\n    \"errors\": {\n        \"invalid_phone_numbers\": [\n            \"+15555555555\",\"+14444444444\"\n        ]\n    }\n}",
      "language": "json",
      "name": "200 invalid_phone_numbers"
    }
  ]
}
[/block]
[Go here for Postman examples](doc:using-postman)