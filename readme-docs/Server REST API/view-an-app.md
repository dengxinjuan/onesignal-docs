---
title: "View an app"
slug: "view-an-app"
excerpt: "View the details of a single OneSignal app"
hidden: false
createdAt: "2016-09-10T03:47:02.949Z"
updatedAt: "2021-03-19T19:47:10.947Z"
---
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
    "0-0": "`id`",
    "0-1": "String",
    "h-2": "Description",
    "0-2": "<span class=\"label-all label-required\">Required</span> An app id"
  },
  "cols": 3,
  "rows": 1
}
[/block]
Example Code - View an app
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --header \"Content-Type: application/json\" \\\n     --header \"Authorization: Basic USER_AUTH_KEY\" \\\n https://onesignal.com/api/v1/apps/YOUR_APP_ID",
      "language": "curl",
      "name": "cURL"
    },
    {
      "code": "\t\t$ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/apps/YOUR_APP_ID\");\n    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',\n                           'Authorization: Basic YOUR_USER_AUTH_KEY'));\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n    curl_setopt($ch, CURLOPT_HEADER, FALSE);\n    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n    $response = curl_exec($ch);\n\t\t$response = json_decode($response, true);\n    curl_close($ch);",
      "language": "php"
    }
  ]
}
[/block]
## Result Format - View an app
[block:code]
{
  "codes": [
    {
      "code": "{\n  id: \"92911750-242d-4260-9e00-9d9034f139ce\",\n  name: \"Your app 1\",\n  players: 150,\n  messageable_players: 143,\n  updated_at: \"2014-04-01T04:20:02.003Z\",\n  created_at: \"2014-04-01T04:20:02.003Z\",\n  gcm_key: \"a gcm push key\",\n  chrome_key: \"A Chrome Web Push GCM key\",\n  chrome_web_origin: \"Chrome Web Push Site URL\",\n  chrome_web_gcm_sender_id: \"Chrome Web Push GCM Sender ID\",\n  chrome_web_default_notification_icon: \"http://yoursite.com/chrome_notification_icon\",\n  chrome_web_sub_domain:\"your_site_name\",\n  apns_env: \"production\",\n  apns_certificates: \"Your apns certificate\",\n  safari_apns_certificate: \"Your Safari APNS certificate\",\n  safari_site_origin: \"The homename for your website for Safari Push, including http or https\",\n  safari_push_id: \"The certificate bundle ID for Safari Web Push\",\n  safari_icon_16_16: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/16x16.png\",\n  safari_icon_32_32: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/16x16@2.png\",\n  safari_icon_64_64: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/32x32@2x.png\",\n  safari_icon_128_128: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/128x128.png\",\n  safari_icon_256_256: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/128x128@2x.png\",\n  site_name: \"The URL to your website for Web Push\",  \n  basic_auth_key: \"NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n}",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]