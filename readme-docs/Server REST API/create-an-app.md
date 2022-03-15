---
title: "Create an app"
slug: "create-an-app"
excerpt: "Creates a new OneSignal app"
hidden: false
createdAt: "2016-09-10T03:53:56.221Z"
updatedAt: "2021-05-10T22:43:14.886Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Requires User Authentication Key",
  "body": "Requires your OneSignal **User Auth Key**, available in [Account & API Keys](https://documentation.onesignal.com/docs/accounts-and-keys#user-auth-key)."
}
[/block]
## Body Parameters - Create an app
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-2": "**Required:** The name of your new app, as displayed on your apps list on the dashboard. This can be renamed later.",
    "0-0": "`name`",
    "0-1": "String",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "String",
    "11-1": "String",
    "12-1": "String",
    "1-0": "`apns_env`",
    "2-0": "`apns_p12`",
    "3-0": "`apns_p12_password`",
    "4-0": "`gcm_key`",
    "11-0": "`safari_apns_p12`",
    "12-0": "`safari_apns_p12_password`",
    "1-2": "**iOS:** Either `sandbox` or `production`",
    "2-2": "**iOS:** Your apple push notification p12 certificate file, converted to a string and Base64 encoded.",
    "3-2": "**iOS Required if adding p12 certificate** - Password for the apns_p12 file",
    "4-2": "**Android:** Your FCM Google Push Server Auth Key",
    "11-2": "**Safari:** Your apple push notification p12 certificate file for Safari Push Notifications, converted to a string and Base64 encoded.",
    "12-2": "**Safari:** Password for `safari_apns_p12` file",
    "13-0": "`safari_icon_256_256`",
    "13-1": "String",
    "13-2": "**Safari:** A url for a 256x256 png notification icon. This is the only Safari icon URL you need to provide.",
    "14-0": "`chrome_key`",
    "14-2": "**Not for web push**\nYour Google Push Messaging Auth Key if you use Chrome Apps / Extensions.",
    "14-1": "String",
    "6-2": "**Chrome (All Browsers except Safari) (Recommended):** The URL to your website. This field is required if you wish to enable web push and specify other web push parameters.",
    "6-0": "`chrome_web_origin`",
    "7-2": "**Chrome (All Browsers except Safari):** Your default notification icon. Should be `256x256` pixels, min `80x80`.",
    "7-0": "`chrome_web_default_notification_icon`",
    "8-0": "`chrome_web_sub_domain`",
    "8-2": "**Chrome (All Browsers except Safari):** A subdomain of your choice in order to support Web Push on non-HTTPS websites. This field must be set in order for the `chrome_web_gcm_sender_id` property to be processed.",
    "8-1": "String",
    "7-1": "String",
    "6-1": "String",
    "5-0": "`android_gcm_sender_id`",
    "5-1": "String",
    "5-2": "**Android:** Your FCM Google Project number. Also know as Sender ID.",
    "15-0": "`additional_data_is_root_payload`",
    "15-1": "Boolean",
    "15-2": "**iOS:** Notification `data` (additional data) values will be added to the root of the apns payload when sent to the device.\n*Ignore if you're not using any other plugins or not using OneSignal SDK methods to read the payload.*",
    "16-0": "`organization_id`",
    "16-1": "String",
    "16-2": "The Id of the Organization you would like to add this app to.",
    "9-0": "`site_name`",
    "9-1": "String",
    "9-2": "**All Browsers (Recommended):** The Site Name. Requires both `chrome_web_origin` and `safari_site_origin` to be set to add or update it.",
    "10-0": "`safari_site_origin`",
    "10-1": "String",
    "10-2": "**Safari (Recommended):** The hostname to your website including `http(s)://`"
  },
  "cols": 3,
  "rows": 17
}
[/block]
## Example Code - Create an app
This method is used to create new apps in your OneSignal account. It allows you to specify your APNS and GCM auth tokens as well.
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json\" \\\n     --header \"Authorization: Basic USER_AUTH_KEY\" \\\n     --data-binary \"{\\\"name\\\" : \\\"Your app 1\\\",\n\\\"apns_env\\\": \\\"production\\\",\n\\\"apns_p12\\\": \\\"asdsadcvawe223cwef...\\\",\n\\\"apns_p12_password\\\": \\\"FooBar\\\",\n\\\"organization_id\\\": \\\"your_organization_id\\\",\n\\\"gcm_key\\\": \\\"a gcm push key\\\"}\" \\\n     https://onesignal.com/api/v1/apps",
      "language": "shell"
    },
    {
      "code": "<?PHP\n    function createApp(){\n        \n        $fields = array(\n            'name' => \"YOUR_APP_NAME\"\n        );\n        \n        $fields = json_encode($fields);\n        print(\"\\nJSON sent:\\n\");\n        print($fields);\n        \n        $ch = curl_init();\n        curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/apps\");\n        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',\n                                                   'Authorization: Basic NDBlY2Q2MTMtYjUyOS00YTBhLTlmYjAtMjk2NGE5YzViMWM5'));\n        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n        curl_setopt($ch, CURLOPT_HEADER, FALSE);\n        curl_setopt($ch, CURLOPT_POST, TRUE);\n        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);\n        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n        $response = curl_exec($ch);\n        curl_close($ch);\n        \n        return $response;\n    }\n    \n    $response = createApp();\n    $return[\"allresponses\"] = $response;\n    $return = json_encode( $return);\n    \n    print(\"\\n\\nJSON received:\\n\");\n    print($return);\n    print(\"\\n\");\n?>",
      "language": "php"
    }
  ]
}
[/block]
## Result Format - Create an app
[block:code]
{
  "codes": [
    {
      "code": "{\n  id: \"e4e87830-b954-11e3-811d-f3b376925f15\",\n  name: \"Your app 1\",\n  players: 0,\n  messageable_players: 0,\n  updated_at: \"2014-04-01T04:20:02.003Z\",\n  created_at: \"2014-04-01T04:20:02.003Z\",\n  gcm_key: \"a gcm push key\",\n  chrome_web_origin: \"Chrome Web Push Site URL\",\n  chrome_web_default_notification_icon: \"http://yoursite.com/chrome_notification_icon\",\n  chrome_web_sub_domain:\"your_site_name\",\n  apns_env: \"production\",\n  apns_certificates: \"Your apns certificate\",\n  safari_apns_certificate: \"Your Safari APNS certificate\",\n  safari_site_origin: \"The homename for your website for Safari Push, including http or https\",\n  safari_push_id: \"The certificate bundle ID for Safari Web Push\",\n  safari_icon_16_16: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16.png\",\n  safari_icon_32_32: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/16x16@2.png\",\n  safari_icon_64_64: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/32x32@2x.png\",\n  safari_icon_128_128: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128.png\",\n  safari_icon_256_256: \"http://onesignal.com/safari_packages/e4e87830-b954-11e3-811d-f3b376925f15/128x128@2x.png\",\n  site_name: \"The URL to your website for Web Push\",  \n  basic_auth_key: \"NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n} ",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]