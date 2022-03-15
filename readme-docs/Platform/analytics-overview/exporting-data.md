---
title: "Exporting Data"
slug: "exporting-data"
excerpt: "Exporting User, Notification and Outcome Data from OneSignal."
hidden: false
createdAt: "2016-09-02T02:29:14.341Z"
updatedAt: "2021-05-17T22:00:41.537Z"
---
OneSignal supports exporting User, Notification and Outcome data. See [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk) for more details.

To export the data from the Dashboard or API, jump to section:
[block:parameters]
{
  "data": {
    "h-1": "Notification Data",
    "h-2": "Outcome Data",
    "0-0": "[Dashboard User Exports](#exporting-user-data-from-dashboard)",
    "1-0": "[API User Exports](#exporting-user-data-from-the-api)",
    "1-2": "[API View Outcomes](ref:view-outcomes)",
    "h-0": "User Data",
    "1-1": "[API Notification Exports](#exporting-notification-data-from-api)",
    "0-1": "[Dashboard Notification Exports](#exporting-notification-data-from-dashboard)",
    "0-2": "[Dashboard Outcome Exports](#exporting-outcome-data-from-dashboard)"
  },
  "cols": 3,
  "rows": 2
}
[/block]

----

## User Data Exports

### Exporting User Data from Dashboard
[block:callout]
{
  "type": "warning",
  "title": "Limited data from Dashboard Export",
  "body": "Only the **Displayed Columns** selected will be exported in the CSV."
}
[/block]
In the **Audience** > **All Users** tab, you can export a CSV of all user data or [segments](doc:segmentation).

1. Select the segment you want to export or N/A for all users (subscribed + unsubscribed).
2. Make sure the data you want is visible. You can select the data you want exported.
3. Select the **Actions** button and **Export Users**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/254d1e9-Screen_Shot_2020-03-11_at_6.03.07_PM.png",
        "Screen Shot 2020-03-11 at 6.03.07 PM.png",
        2804,
        1356,
        "#dfe0e3"
      ]
    }
  ]
}
[/block]
An email will be automatically sent to the email currently logged in with.
[block:callout]
{
  "type": "warning",
  "title": "Excel/Microsoft Encoding Warning",
  "body": "Recommended to Import the CSV file into Excel instead of opening the file in Excel directly."
}
[/block]
###Exporting User Data From the API

To export specific users i.e all users with the x tag or "last active over 3 months ago". You must first create a [Segment](doc:segmentation) with the desired parameters, then export the segment from the dashboard or API. *Segments only contain subscribed users.* If you want unsubscribed devices, you will need to export all users and filter manually.
[block:parameters]
{
  "data": {
    "0-0": "**[User Data CSV export](ref:csv-export)**",
    "0-1": "Provides a link to a CSV file for download of all users.\nCan filter by [Segments](doc:segmentation)",
    "0-2": "Best way to get all user data from OneSignal including `ad_id`, `web_auth`, and `web_p256` keys.",
    "1-0": "**[View devices](ref:view-devices)**",
    "1-1": "Provides paginated view of up to 50 device records per request. (Unavailable for Apps with over 80,000 users)",
    "1-2": "Provides similar but more limited data to [User Data CSV export](ref:csv-export.",
    "2-0": "**[View device](ref:view-device)**",
    "2-1": "Get specific User Data by [Player ID](doc:users#player-id)",
    "2-2": "Similar to [View devices](ref:view-devices) data.",
    "h-0": "API Endpoint",
    "h-1": "Details",
    "h-2": "Data"
  },
  "cols": 3,
  "rows": 3
}
[/block]

----

## Notification Data Exports

### Exporting Notification Data from Dashboard

**[OneSignal Paid Plan Required](doc:paid-plan-benefits)**
[block:callout]
{
  "type": "warning",
  "body": "Notifications sent via our API and Automated Messages are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it.",
  "title": "Notification Data Limit"
}
[/block]
You can export the full text, delivery statistics, and send times, of all messages you've sent from the dashboard by going to the Delivery Tab and then clicking 'Export.' 

Click "Advanced" to get more filtering options:
1. **Source**: Use to get All Messages, Dashboard Only, API Only, Automated Only, or Test Messages.
2. **Device Type**: Filters notifications sent to specific operating system (Web, Android Mobile, iOS Mobile, Email).
3. **Text Search**: Currently only available for Notifications sent from Dashboard (must select Source: Dashboard Messages).
4. Start and End Date: Sort by specific dates.
5. Export will send a CSV of the current data to your logged in email.

You'll receive an email (typically within a few minutes) to download the export, up to 1,000,000 rows. If you want to export more than 1,000,000 notifications, just apply a date range or filters to get the export size below 1,000,000 rows. The file will be zipped.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/97a1ae4-Screen_Shot_2020-03-11_at_6.10.45_PM.png",
        "Screen Shot 2020-03-11 at 6.10.45 PM.png",
        2802,
        1436,
        "#e1e3e4"
      ]
    }
  ]
}
[/block]
Note that the data in a CSV export may up to 30 minutes delayed as delivery statistics propagate.

#### Dashboard Exported Message Data
[block:parameters]
{
  "data": {
    "0-0": "id",
    "0-1": "Notification ID",
    "1-0": "completed_at",
    "1-1": "When the Notification finished sending",
    "2-0": "total_queued",
    "2-1": "How many are left to be sent",
    "3-0": "successful",
    "3-1": "How many were delivered to Google and Apple's servers.",
    "4-0": "failed",
    "4-1": "How many were counted as unsubscribed.",
    "5-0": "errored",
    "5-1": "How many error users were reported, check your OneSignal dashboard settings for more details.",
    "6-0": "remaining",
    "6-1": "How many are left to be sent",
    "8-0": "converted",
    "8-1": "How many were clicked",
    "9-0": "contents",
    "9-1": "Notification Message",
    "10-0": "headings",
    "10-1": "Notification Title",
    "11-0": "queued_at",
    "11-1": "When the Notification was created",
    "12-0": "send_after",
    "12-1": "When the Notification was set to start sending to subscribers.",
    "13-0": "url",
    "13-1": "The Launch URL set.",
    "h-0": "Parameter",
    "h-1": "Details",
    "7-0": "received",
    "7-1": "How many devices received the message. See [Confirmed Deliveries](doc:confirmed-deliveries).",
    "14-0": "data",
    "15-0": "contents_en, headings_en, etc",
    "16-0": "delayed_option",
    "17-0": "delivery_time_of_day",
    "18-0": "global_image",
    "19-0": "included_segments, excluded_segments, filters",
    "20-0": "isIos, isAndroid, isHuawei, isSMS, isWeb",
    "21-0": "throttle_rate_per_minute",
    "22-0": "sms_media_urls",
    "23-0": "frequency_capped, frequency_capped_status",
    "14-1": "Any custom data set in the notification.",
    "15-1": "Contents and headings based on language translations provided.",
    "16-1": "If timezone or intelligent delivery was used.",
    "17-1": "If timezone was used, the timezone to deliver.",
    "18-1": "Global Image URL used.",
    "19-1": "Segments included or excluded if provided. Otherwise, filters used.",
    "20-1": "Platforms enabled (t) or disabled (f).",
    "21-1": "Throttle rate set.",
    "22-1": "SMS Mida URLs",
    "23-1": "Number capped and if capping was enabled."
  },
  "cols": 2,
  "rows": 24
}
[/block]

### Exporting Notification Data from API
[block:callout]
{
  "type": "warning",
  "body": "Notifications sent via our API and Automated Messages are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it.",
  "title": "Notification Data Limitations"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "API Endpoint",
    "h-1": "Details",
    "h-2": "Data",
    "0-0": "**[View notifications](ref:view-notifications)**",
    "0-1": "Provides paginated view of up to 50 notifications per request. \n\nCan be filtered by notification type. ie API, Dashboard or Automated notifications.",
    "0-2": "Contains notification payload, targeting parameters and delivery stats.\n\nDoes not contain a list of devices that were sent or clicked the push unless you used `include_player_ids` or `include_external_user_ids`.",
    "1-0": "**[View notification](ref:view-notification)**",
    "1-1": "Provides a single notification's data.",
    "1-2": "Similar to [View notifications](ref:view-notifications) data.",
    "2-0": "**[Notification History](ref:notification-history)**",
    "2-1": "[OneSignal Paid Plan Required](doc:paid-plan-benefits)\nProvides list of Player IDs that were `\"sent\"` or `\"clicked\"` a notification.",
    "2-2": "Retrieving `\"sent\"` player_ids is only available for notifications that had over 1000 recipients.\n\nIf the notification targeted a segment or used filters that were under 1000 recipients, the `player_ids` that were targeted will be unavailable\n\nIf the notification targeted player ids (like automated messages) or external user ids, you can access the `sent` data in the View Notification(s) endpoints.\n\n`\"clicked\"` data is available for all notifications."
  },
  "cols": 3,
  "rows": 3
}
[/block]

#### API Exported Message Data
[block:parameters]
{
  "data": {
    "0-0": "id",
    "0-1": "Notification ID",
    "1-0": "completed_at",
    "1-1": "When the Notification finished sending",
    "2-0": "total_queued",
    "2-1": "How many are left to be sent",
    "3-0": "successful",
    "3-1": "How many were delivered to Google and Apple's servers.",
    "4-0": "failed",
    "4-1": "How many were counted as unsubscribed.",
    "5-0": "errored",
    "5-1": "How many error users were reported, check your OneSignal dashboard settings for more details.",
    "6-0": "remaining",
    "6-1": "How many are left to be sent",
    "7-0": "converted",
    "7-1": "How many were clicked",
    "8-0": "contents",
    "8-1": "Notification Message",
    "9-0": "headings",
    "9-1": "Notification Title",
    "10-0": "queued_at",
    "10-1": "When the Notification was created",
    "11-0": "send_after",
    "11-1": "When the Notification was set to start sending to subscribers.",
    "12-0": "received",
    "12-1": "See [Confirmed Deliveries](doc:confirmed-deliveries).",
    "h-0": "Parameter",
    "h-1": "Details"
  },
  "cols": 2,
  "rows": 13
}
[/block]



----

## Exporting Outcome Data from Dashboard

[block:callout]
{
  "type": "warning",
  "body": "Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it.",
  "title": "Outcome Data Limitations"
}
[/block]

Each [Message Report](doc:notification-delivery#message-report) contains all Outcome Statistics related to that notification as well as information such as delivery numbers, click-through rate, and influenced opens.

You can also view a cumulative graph of all outcomes over the past 30 days in [Delivery > Outcomes.](doc:notification-delivery#outcomes)

Use the Search (1) to add the Outcomes you are interested in or select "Show All" (2) to view all Outcomes. You can also click Export (3) and we will email you the currently shown or all Outcomes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/91d4d83-Screen_Shot_2020-08-10_at_1.25.47_PM.png",
        "Screen Shot 2020-08-10 at 1.25.47 PM.png",
        800,
        757,
        "#eaecef"
      ]
    }
  ]
}
[/block]
## Exporting Outcome Data from API

[block:callout]
{
  "type": "warning",
  "body": "Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it.",
  "title": "Outcome Data Limitations"
}
[/block]

See the [View Outcomes](ref:view-outcomes) endpoint for more details.