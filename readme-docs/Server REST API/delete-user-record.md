---
title: "Delete Player Record"
slug: "delete-user-record"
excerpt: "Delete a user record"
hidden: false
createdAt: "2021-06-22T21:57:21.912Z"
updatedAt: "2022-01-26T18:59:18.968Z"
---
Used to delete a single, specific Player ID record from a specific OneSignal app.
[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](doc:accounts-and-keys)."
}
[/block]
## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`ONESIGNAL_PLAYER_ID`",
    "0-1": "String",
    "0-2": "**Required:** OneSignal Player ID.",
    "1-0": "`ONESIGNAL_APP_ID`",
    "1-1": "String",
    "1-2": "**Required:** App id"
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Example Code - Delete Player Record
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request DELETE \\\n     --header \"Authorization: Basic YOUR_ONESIGNAL_API_KEY\" \\\nhttps://onesignal.com/api/v1/players/ONESIGNAL_PLAYER_ID?app_id=YOUR_APP_ID",
      "language": "curl"
    }
  ]
}
[/block]
## Result Format - Delete Player Record
[block:code]
{
  "codes": [
    {
      "code": "{'success': \"true\"}",
      "language": "json",
      "name": "200 OK"
    }
  ]
}
[/block]