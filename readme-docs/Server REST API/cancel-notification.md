---
title: "Cancel notification"
slug: "cancel-notification"
excerpt: "Stop a scheduled or currently outgoing notification"
hidden: false
createdAt: "2016-09-10T06:03:26.191Z"
updatedAt: "2022-01-31T22:02:07.498Z"
---
Used to stop a scheduled or currently outgoing notification.
[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in <a class=\"dash-link dash-settings\" href=\"/docs/accounts-and-keys#section-keys-ids\">Keys & IDs</a>.\n\n*unless the notification was created using `include_player_ids` and targeting only one user.*"
}
[/block]
## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "0-1": "String",
    "0-2": "<span class=\"label-all label-required\">Required</span> Notification id",
    "1-0": "`app_id`",
    "1-1": "String",
    "1-2": "<span class=\"label-all label-required\">Required</span> App id"
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Example Code - Cancel notification
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n\t\t --request DELETE \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n https://onesignal.com/api/v1/notifications/YOUR_NOTIFICATION_ID?app_id=YOUR_APP_ID",
      "language": "curl"
    }
  ]
}
[/block]
## Result Format - Cancel notification
[block:code]
{
  "codes": [
    {
      "code": "{'success': true}",
      "language": "json",
      "name": "200 OK"
    }
  ]
}
[/block]