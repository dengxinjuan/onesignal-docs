---
title: "Update an app"
slug: "update-an-app"
excerpt: "Updates the name or configuration settings of an existing OneSignal app"
hidden: false
createdAt: "2016-09-10T04:06:52.308Z"
updatedAt: "2021-03-19T00:16:29.926Z"
---
This method can be used to update the name or configuration settings of one of your existing apps.

[block:callout]
{
  "type": "info",
  "title": "Same as POST /apps",
  "body": "The supported parameters are the same as the [parameters for creating an application](ref:create-an-app)."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Updating Some Platforms Requires All Attributes To Be Set",
  "body": "Updating some platforms like Safari web push requires all parameters to be set (even if they are unchanged) in order for the update to be processed.\n\n- To update only your app name, you can pass in only a new app name parameter.\n- To update Android, be sure to pass in `gcm_key`.\n- To update Chrome Apps & Extensions, be sure to pass in `chrome_key`.\n- To update Chrome web push, be sure to pass in `chrome_web_origin`.\n- To update Safari web push, you must pass in all of these parameters: `safari_apns_p12`, `safari_apns_p12_password`, `site_name`, and `safari_site_origin`. Most users use our auto-generated Safari web ID. If you use our auto-generated Safari web ID, please set `safari_apns_p12` to `\"\"` and `safari_apns_p12_password` to `\"\"`.\n- To update iOS, you must pass in `apns_env` and `apns_p12`."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Requires User Authentication Key",
  "body": "Requires your OneSignal **User Auth Key**, available in [Account & API Keys](https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key)."
}
[/block]
Example Code - Update an app
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request PUT \\\n     --header \"Content-Type: application/json\" \\\n     --header \"Authorization: Basic YOUR_USER_AUTH_KEY\" \\\n     --data-binary \"{\\\"name\\\" : \\\"Your app 1\\\",\n\\\"apns_env\\\": \\\"production\\\",\n\\\"apns_p12\\\": \\\"asdsadcvawe223cwef...\\\",\n\\\"apns_p12_password\\\": \\\"FooBar\\\",\n\\\"organization_id\\\": \\\"your_organization_id\\\",\n\\\"gcm_key\\\": \\\"a gcm push key\\\"}\" \\\n     https://onesignal.com/api/v1/apps/YOUR_APP_ID",
      "language": "shell"
    },
    {
      "code": "<?PHP\n    function createApp(){\n        \n        $fields = array(\n            'name' => \"NEW_APP_NAME\"\n        );\n        \n        $fields = json_encode($fields);\n        print(\"\\nJSON sent:\\n\");\n        print($fields);\n        \n        $ch = curl_init();\n        curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/apps/YOUR_APP_ID\");\n        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',\n                                                   'Authorization: Basic YOUR_USER_AUTH_KEY'));\n        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n        curl_setopt($ch, CURLOPT_HEADER, FALSE);\n        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"PUT\");\n        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n        $response = curl_exec($ch);\n        curl_close($ch);\n        \n        return $response;\n    }\n    \n    $response = createApp();\n    $return[\"allresponses\"] = $response;\n    $return = json_encode( $return);\n    \n    print(\"\\n\\nJSON received:\\n\");\n    print($return);\n    print(\"\\n\");\n?>",
      "language": "php"
    }
  ]
}
[/block]
## Result Format - Update an app
[block:code]
{
  "codes": [
    {
      "code": "{\n  id: \"e4e87830-b954-11e3-811d-f3b376925f15\",\n  name: \"Your app 1\",\n  players: 0,\n  messageable_players: 0,\n  updated_at: \"2014-04-01T04:20:02.003Z\",\n  created_at: \"2014-04-01T04:20:02.003Z\",\n  gcm_key: \"a gcm push key\",\n  chrome_key: \"A Chrome Web Push GCM key\",\n  chrome_web_origin: \"Chrome Web Push Site URL\",\n  chrome_web_default_notification_icon: \"http://yoursite.com/chrome_notification_icon\",\n  chrome_web_sub_domain:\"your_site_name\",\n  apns_env: \"production\",\n  apns_certificates: \"Your apns certificate\",\n  safari_apns_certificate: \"Your Safari APNS certificate\",\n  safari_site_origin: \"The homename for your website for Safari Push, including http or https\",\n  safari_push_id: \"The certificate bundle ID for Safari Web Push\",\n  safari_icon_16_16: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16.png\",\n  safari_icon_32_32: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16@2.png\",\n  safari_icon_64_64: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/32x32@2x.png\",\n  safari_icon_128_128: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128.png\",\n  safari_icon_256_256: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128@2x.png\",\n  site_name: \"The URL to your website for Web Push\",  \n  basic_auth_key: \"NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n}  ",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]