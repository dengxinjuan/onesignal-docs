---
title: "View notifications"
slug: "view-notifications"
excerpt: "View the details of multiple notifications"
hidden: false
createdAt: "2016-09-10T05:58:03.701Z"
updatedAt: "2022-02-11T16:23:51.066Z"
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
  "body": "OneSignal periodically deletes records of API notifications older than 30 days.\n\nIf you would like to export all notification data to CSV, you can do this through our dashboard using a Paid Plan.",
  "title": "API Notification Deletion"
}
[/block]
## Path Parameters
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
    "2-1": "Integer",
    "0-2": "<span class=\"label-all label-required\">Required</span> The app ID that you want to view notifications from",
    "1-2": "How many notifications to return. Max is 50. Default is 50",
    "2-2": "Page offset. Default is 0. Results are sorted by queued_at in descending order. queued_at is a representation of the time that the notification was queued at.",
    "3-0": "`kind`",
    "3-1": "Integer",
    "3-2": "Kind of notifications returned. Default (not set) is all notification types.\nDashboard only is 0.\nAPI only is 1.\nAutomated only is 3."
  },
  "cols": 3,
  "rows": 4
}
[/block]
## Example Code - View notifications
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     \"https://onesignal.com/api/v1/notifications?app_id=YOUR_APP_ID\"",
      "language": "curl"
    },
    {
      "code": "<?PHP\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \"https://onesignal.com/api/v1/notifications?app_id=3cb5beaa-e6ca-5932-aad9-fdabaa3b83ce&limit=50&offset=0\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \"\",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \"GET\",\n  CURLOPT_HTTPHEADER => array(\n    \"authorization: Basic ONESIGNAL_APP_REST_API_KEY_HERE\",\n  ),\n));\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\necho $response;\n?>",
      "language": "php"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic YOUR_ONESIGNAL_REST_API_KEY\"}\n\nreq = requests.get(\"https://onesignal.com/api/v1/notifications?app_id=YOUR_APP_ID&offset=0\", headers=header)\n \nprint(req.status_code, req.reason)",
      "language": "python"
    }
  ]
}
[/block]
## Result Format - View notifications
[block:callout]
{
  "type": "info",
  "title": "Data Definitions",
  "body": "Endpoint returns same fields as under the [View Notification endpoint](https://documentation.onesignal.com/reference/view-notification#returned-fields). More details in that section. \n\nCommon parameters:\n`\"successful\"` = Number of notifications delivered to the Google/Apple/Windows servers.\n`\"failed\"` = Number of devices reported as unsubscribed.\n`\"errored\"` = Number of devices with an error. See your \"Settings\" tab for details or contact Support.\n`\"converted\"` = Number of devices that have clicked/tapped the notification.\n`\"received\"` = Number of devices that confirmed receiving the notification aka [Confirmed Deliveries](doc:confirmed-deliveries)."
}
[/block]
Due to large amount of data returned, omitted lines indicated with `...` 
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"total_count\": 553,\n    \"offset\": 0,\n    \"limit\": 1,\n    \"notifications\": [\n        {\n            ...\n            \"app_id\": \"3beb3078-e0f1-4629-af17-fde833b9f716\",\n            ...\n            \"chrome_web_icon\": \"https://img.onesignal.com/t/73b9b966-f19e-4410-8b5d-51ebdef4652e.png\",\n            ...\n            \"ios_interruption_level\":\"active\",\n   \t\t\t\t\t\"ios_relevance_score\": 0.0,\n            \"name\": \"Campaign: New Shoe Releases\", \n            \"contents\": {\n                \"en\": \"Come by and check out our new Jordan's!!! (Shoes) 🎃🙊👻\"\n            },\n            \"converted\": 0,\n            \"data\": {\n                \"your_data_key\": \"your_data_value\"\n            },\n            ...,\n            \"errored\": 1,\n            \"excluded_segments\": [\n                \"3 Days Inactive\"\n            ],\n            \"failed\": 0,\n            ...\n            \"headings\": {\n                \"en\": \"Thomas' Greatest Site in the World!! 😜😁\"\n            },\n            \"id\": \"e664a747-324c-406a-bafb-ab51db71c960\",\n            ...\n            \"included_segments\": [\n                \"all\"\n            ],\n            ...\n            \"queued_at\": 1557946677,\n            \"remaining\": 0,\n            \"send_after\": 1557946620,\n            \"completed_at\": 1557946677,\n            \"successful\": 386,\n            ...\n            \"url\": \"https://mysite.com\",\n            ...\n            \"platform_delivery_stats\": {\n                \"edge_web_push\": {\n                    \"successful\": 2,\n                    \"failed\": 0,\n                    \"errored\": 0,\n                    \"converted\": 2,\n                    \"received\": 2\n\n                },\n                \"chrome_web_push\": {\n                    \"successful\": 26,\n                    \"failed\": 0,\n                    \"errored\": 0,\n                    \"converted\": 26,\n                    \"received\": 26\n                },\n                \"firefox_web_push\": {\n                    \"successful\": 1,\n                    \"failed\": 0,\n                    \"errored\": 0,\n                    \"converted\": 1,\n                    \"received\": 1\n                },\n                \"android\": {\n                    \"successful\": 198,\n                    \"errored\": 1,\n                    \"failed\": 0,\n                    \"converted\": 198,\n                    \"received\": 198\n                },\n                \"safari_web_push\": {\n                    \"successful\": 3,\n                    \"failed\": 0,\n                    \"errored\": 0,\n                    \"converted\": 3,\n                    \"received\": 3\n                },\n                \"ios\": {\n                    \"successful\": 2,\n                    \"errored\": 3,\n                    \"failed\": 0,\n                    \"converted\": 2,\n                    \"received\": 2\n                }\n            },\n            \"ios_attachments\": {\n                \"id\": \"https://img.onesignal.com/n/44843933-68d4-450c-af5c-5e5c1a9d946e.jpg\"\n            }\n        }\n    ]\n}",
      "language": "json",
      "name": "200 OK"
    }
  ]
}
[/block]