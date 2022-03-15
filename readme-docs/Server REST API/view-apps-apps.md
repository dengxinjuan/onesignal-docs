---
title: "View apps"
slug: "view-apps-apps"
excerpt: "View the details of all of your current OneSignal apps"
hidden: false
createdAt: "2016-09-01T02:33:02.689Z"
updatedAt: "2021-03-19T00:16:00.075Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Requires User Authentication Key",
  "body": "Requires your OneSignal **User Auth Key**, available in [Account & API Keys](https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key)."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "1000 App Limit",
  "body": "If you plan to have more than 1000 Apps within OneSignal, you will need to create a separate email record for each set of 1000."
}
[/block]
Example Code - View apps 
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --header \"Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\" \\\n https://onesignal.com/api/v1/apps",
      "language": "shell"
    }
  ]
}
[/block]
## Result Format - View apps
[block:code]
{
  "codes": [
    {
      "code": "[\n  {\n    id: \"92911750-242d-4260-9e00-9d9034f139ce\",\n    name: \"Your app 1\",\n    players: 150,\n    messageable_players: 143,\n    updated_at: \"2014-04-01T04:20:02.003Z\",\n    created_at: \"2014-04-01T04:20:02.003Z\",\n    gcm_key: \"a gcm push key\",\n    chrome_key: \"A Chrome Web Push GCM key\",\n    chrome_web_origin: \"Chrome Web Push Site URL\",\n    chrome_web_gcm_sender_id: \"Chrome Web Push GCM Sender ID\",\n    chrome_web_default_notification_icon: \"http://yoursite.com/chrome_notification_icon\",\n    chrome_web_sub_domain:\"your_site_name\",\n    apns_env: \"sandbox\",\n    apns_certificates: \"Your apns certificate\",\n    safari_apns_certificate: \"Your Safari APNS certificate\",\n    safari_site_origin: \"The homename for your website for Safari Push, including http or https\",\n    safari_push_id: \"The certificate bundle ID for Safari Web Push\",\n    safari_icon_16_16: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/16x16.png\",\n    safari_icon_32_32: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/16x16@2.png\",\n    safari_icon_64_64: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/32x32@2x.png\",\n    safari_icon_128_128: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/128x128.png\",\n    safari_icon_256_256: \"http://onesignal.com/safari_packages/92911750-242d-4260-9e00-9d9034f139ce/128x128@2x.png\",\n    site_name: \"The URL to your website for Web Push\",  \n    basic_auth_key: \"NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  },\n  {\n    id: \"e4e87830-b954-11e3-811d-f3b376925f15\",\n    name: \"Your app 2\",\n    players: 100,\n    messageable_players: 80,\n    updated_at: \"2014-04-01T04:20:02.003Z\",\n    created_at: \"2014-04-01T04:20:02.003Z\",\n    gcm_key: \"a gcm push key\",\n    chrome_key: \"A Chrome Web Push GCM key\",\n    chrome_web_origin: \"Chrome Web Push Site URL\",\n    chrome_web_gcm_sender_id: \"Chrome Web Push GCM Sender ID\",\n    chrome_web_default_notification_icon: \"http://yoursite.com/chrome_notification_icon\",\n    chrome_web_sub_domain:\"your_site_name\",\n    apns_env: \"sandbox\",\n    apns_certificates: \"Your apns certificate\",\n    safari_apns_certificate: \"Your Safari APNS certificate\",\n    safari_site_origin: \"The homename for your website for Safari Push, including http or https\",\n    safari_push_id: \"The certificate bundle ID for Safari Web Push\",\n    safari_icon_16_16: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16.png\",\n    safari_icon_32_32: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16@2.png\",\n    safari_icon_64_64: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/32x32@2x.png\",\n    safari_icon_128_128: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128.png\",\n    safari_icon_256_256: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128@2x.png\",\n    site_name: \"The URL to your website for Web Push\",  \n    basic_auth_key: \"NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  }\n]",
      "language": "json",
      "name": "200 OK"
    },
    {
      "code": "{}",
      "language": "json",
      "name": "400 Bad Request"
    }
  ]
}
[/block]