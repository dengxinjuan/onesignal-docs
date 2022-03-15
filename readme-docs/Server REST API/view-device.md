---
title: "View device"
slug: "view-device"
excerpt: "View the details of an existing device in one of your OneSignal apps."
hidden: false
createdAt: "2016-09-10T04:14:19.792Z"
updatedAt: "2022-01-31T23:30:31.417Z"
---
See our [Add a device](ref:add-a-device) documentation for descriptions of the fields.

## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "0-1": "String",
    "0-2": "OneSignal Player Id."
  },
  "cols": 3,
  "rows": 1
}
[/block]

## Query Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`app_id`",
    "0-1": "String",
    "0-2": "The App Id that contains the Player Id.",
    "1-0": "`email_auth_hash`",
    "1-1": "String",
    "1-2": "**Email device lookup**: Only required if you have enabled [Identity Verification](doc:identity-verification) and `device_type` is email (`11`)."
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Example Code - View device
[block:code]
{
  "codes": [
    {
      "code": "curl --include \nhttps://onesignal.com/api/v1/players/PLAYER_ID?app_id=APP_ID\n\ncurl --request GET \\\n  --url https://onesignal.com/api/v1/players/PLAYER_ID \\\n  --header 'content-type: application/json; charset=utf-8' \\\n  --data '{\"app_id\": \"APP_ID\"}'",
      "language": "curl"
    }
  ]
}
[/block]
## Result Format - View device
[block:code]
{
  "codes": [
    {
      "code": "{\n \"id\":\"b186912c-cf25-4688-8218-06cb13e09a4f\",\n \"identifier\":\"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566\",\n \"session_count\":1,\n \"language\":\"en\",\n \"timezone\":-28800,\n \"game_version\":\"1.0\",\n \"device_os\":\"13.6.1\",\n \"device_type\":0,\n \"device_model\":\"iPhone12,1\",\n \"ad_id\":null,\n \"tags\":{\"a\":\"1\",\"foo\":\"bar\"},\n \"last_active\":1598826147,\n \"amount_spent\":0.0,\n \"created_at\":1395096859,\n \"invalid_identifier\":false,\n \"badge_count\": 0,\n \"sdk\":\"021502\",\n \"test_type\": null,\n \"ip\": \"2601:647:4b04:690:216a:4637:f37c:53ab\",\n \"external_user_id\": null\n}",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]