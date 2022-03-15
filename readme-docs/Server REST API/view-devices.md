---
title: "View devices"
slug: "view-devices"
excerpt: "View the details of multiple devices in one of your OneSignal apps."
hidden: false
createdAt: "2016-09-10T04:08:26.584Z"
updatedAt: "2022-02-19T02:16:50.637Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](doc:accounts-and-keys)."
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Unavailable for Apps Over 80,000 Users",
  "body": "For performance reasons, this method is not available for larger apps. Larger apps should use the [CSV export](ref:csv-export) API endpoint, which is much more performant."
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
    "1-0": "`limit`",
    "1-1": "String",
    "2-0": "`offset`",
    "2-1": "String",
    "2-2": "Result offset. Default is 0. Results are sorted by first session time/date.",
    "1-2": "How many devices to return. Max is 300. Default is 300.",
    "0-2": "**Required**: The app ID that you want to view devices from."
  },
  "cols": 3,
  "rows": 3
}
[/block]
## Response Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`invalid_identifier`",
    "0-1": "boolean",
    "0-2": "If `true`, this is the equivalent of a user being *Unsubscribed*."
  },
  "cols": 3,
  "rows": 1
}
[/block]
## Example Code - View devices

[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --header \"Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\" \\\n     \"https://onesignal.com/api/v1/players?app_id={appId}&limit=300&offset=0\"",
      "language": "curl"
    },
    {
      "code": "<?php\n\n// NOTE: Only fetches the first 300 devices.\n//       Will need to add looping with offset to get all devices.\nfunction getDevices(){ \n  $app_id = \"YOUR_ONESIGNAL_APP_ID_HERE\";\n  $ch = curl_init(); \n  curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/players?app_id=\" . $app_id); \n  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', \n                                             'Authorization: Basic YOUR_ONESIGNAL_APP_AUTH_KEY_HERE')); \n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); \n  curl_setopt($ch, CURLOPT_HEADER, FALSE);\n  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n  $response = curl_exec($ch); \n  curl_close($ch); \n  return $response; \n}\n\n$response = getDevices(); \n$return[\"allresponses\"] = $response; \n$return = json_encode( $return); \nprint(\"\\n\\nJSON received:\\n\"); \nprint($return); \nprint(\"\\n\") \n?>",
      "language": "php"
    }
  ]
}
[/block]
## Result Format - View devices
[block:code]
{
  "codes": [
    {
      "code": "{\n \"total_count\":3,\n \"offset\":2,\n \"limit\":2,\n \"players\":\n [\n   {\n     \"id\":\"b186912c-cf25-4688-8218-06cb13e09a4f\",\n     \"identifier\":\"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566\",\n     \"session_count\":1,\n     \"language\":\"en\",\n     \"timezone\":-28800,\n     \"game_version\":\"1.0\",\n     \"device_os\":\"13.6.1\",\n     \"device_type\":0,\n     \"device_model\":\"iPhone12,1\",\n     \"ad_id\":null,\n     \"tags\":{\"a\":\"1\",\"foo\":\"bar\"},\n     \"last_active\":1598826147,\n     \"amount_spent\":0.0,\n     \"created_at\":1395096859,\n     \"invalid_identifier\":false,\n     \"badge_count\": 0,\n     \"sdk\":\"021502\",\n     \"test_type\": null,\n     \"ip\": \"2601:647:4b04:690:216a:4637:f37c:53ab\",\n     \"external_user_id\": null\n   },\n ]\n}",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]