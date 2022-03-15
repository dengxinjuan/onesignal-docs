---
title: "Add a device"
slug: "add-a-device"
excerpt: "Register a new device to one of your OneSignal apps"
hidden: false
createdAt: "2016-09-10T04:23:28.089Z"
updatedAt: "2022-01-11T23:05:59.733Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Limitations with importing Push Tokens",
  "body": "If importing Push Tokens, this API endpoint is designed to be used from our open source Mobile and Web Push SDKs. If you use this method instead of our SDKs, many OneSignal features such as conversion tracking, timezone tracking, language detection, and rich-push won't work out of the box. It will also make it harder to identify possible setup issues."
}
[/block]
This method is used to register a new device with OneSignal.

If a device is already registered with the specified identifier, then this will update the existing device record instead of creating a new one.

The returned ID is for the OneSignal Device Channel Record. If you set `device_type = 11` the returned ID is for the Email Channel associated with the device. `device_type = 14` is the SMS Channel. All other `device_type` correspond to the Push Channel. It is recommended to include an `external_user_id` to associate all Device Channel Records with your own User ID.

[block:callout]
{
  "type": "warning",
  "title": "iOS",
  "body": "Must set `test_type` to `1` when building your iOS app as development. Omit this field in your production app builds."
}
[/block]
## Body Parameters - Add a device
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`app_id`",
    "0-2": "**Required** Your OneSignal App Id found in [Keys & IDs](doc:accounts-and-keys).",
    "0-1": "String",
    "1-0": "`device_type`",
    "1-1": "Int",
    "1-2": "**Required** The device's platform:\n\n`0` = iOS\n`1` = Android\n`2` = Amazon\n`3` = WindowsPhone (MPNS)\n`4` = Chrome Apps / Extensions\n`5` = Chrome Web Push\n`6` = Windows (WNS)\n`7` = Safari \n`8` = Firefox \n`9` = MacOS\n`10` = Alexa\n`11` = Email\n`13` = For [Huawei App Gallery Builds SDK Setup](doc:huawei-sdk-setup). Not for Huawei Devices using FCM\n`14` = SMS",
    "2-0": "`identifier`",
    "2-2": "**Recommended:** For Push Notifications, this is the Push Token Identifier from Google or Apple. For Apple Push identifiers, you must strip all non alphanumeric characters.\n**Examples:**\niOS: `7abcd558f29d0b1f048083e2834ad8ea4b3d87d8ad9c088b33c132706ff445f0`\n\nAndroid:\n`APA91bHbYHk7aq-Uam_2pyJ2qbZvqllyyh2wjfPRaw5gLEX2SUlQBRvOc6sck1sa7H7nGeLNlDco8lXj83HWWwzV...`\n\n**Email Addresses:** set the full email address `email@email.com` and make sure to set `device_type` to `11`.\n\n**Phone Numbers:** set the [E.164 format](https://www.twilio.com/docs/glossary/what-e164) and make sure to set `device_type` to `14`.",
    "5-2": "**Recommended** Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: en",
    "6-2": "**Recommended** Number of seconds away from UTC. Example: -28800",
    "7-2": "**Recommended** Version of your app. Example: 1.1",
    "10-2": "The ad id for the device's platform:\nAndroid = Advertising Id\n\niOS = identifierForVendor\n\nWP8.1 = AdvertisingId",
    "9-2": "**Recommended** Device operating system version. Example: 7.0.4",
    "8-2": "**Recommended** Device make and model. Example: iPhone5,1",
    "5-0": "`language`",
    "6-0": "`timezone`",
    "6-1": "Int",
    "5-1": "String",
    "2-1": "String",
    "7-0": "`game_version`",
    "7-1": "String",
    "8-0": "`device_model`",
    "8-1": "String",
    "9-1": "String",
    "9-0": "`device_os`",
    "10-0": "`ad_id`",
    "10-1": "String",
    "11-0": "`sdk`",
    "11-1": "String",
    "11-2": "**Recommended** Name and version of the plugin that's calling this API method (if any)",
    "12-0": "`session_count`",
    "13-0": "`tags`",
    "13-1": "Hash",
    "14-0": "`amount_spent`",
    "14-1": "String",
    "15-0": "`created_at`",
    "15-1": "Int",
    "16-0": "`playtime`",
    "16-1": "Int",
    "17-0": "`last_active`",
    "17-1": "Int",
    "12-1": "Int",
    "12-2": "Number of times the user has played the game, defaults to 1",
    "13-2": "Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: {\"foo\":\"bar\",\"this\":\"that\"}",
    "14-2": "Amount the user has spent in USD, up to two decimal places",
    "15-2": "**Set Automatically based on the date the request was made.** Unix timestamp in seconds indicating date and time when the device downloaded the app or subscribed to the website.",
    "16-2": "Seconds player was running your app.",
    "17-2": "**Set Automatically based on the date the request was made.** Unix timestamp in seconds indicating date and time when the device last used the app or website.",
    "20-0": "`lat`",
    "19-0": "`long`",
    "19-2": "Longitude of the device, used for geotagging to segment on.",
    "20-2": "Latitude of the device, used for geotagging to segment on.",
    "19-1": "Double",
    "20-1": "Double",
    "18-0": "`notification_types`",
    "18-1": "Int",
    "18-2": "`1` = subscribed\n`-2` = unsubscribed\n\niOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead.\n\nAndroid - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
    "21-0": "`country`",
    "21-1": "String",
    "21-2": "Country code in the ISO 3166-1 Alpha 2 format",
    "22-0": "`external_user_id`",
    "22-1": "String",
    "22-2": "A custom user ID",
    "4-0": "`test_type`",
    "4-1": "Int",
    "4-2": "This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app.\n`1` = Development\n`2` = Ad-Hoc\nOmit this field for App Store builds.",
    "23-0": "`external_user_id_auth_hash`",
    "23-1": "String",
    "23-2": "Only required if you have enabled [Identity Verification](doc:identity-verification).",
    "3-0": "`identifier_auth_hash `",
    "3-1": "String",
    "3-2": "Only required if you have enabled [Identity Verification](doc:identity-verification) and `device_type` is `11` (Email) or `14` SMS (coming soon)."
  },
  "cols": 3,
  "rows": 24
}
[/block]
## Example Code - Add a device
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json\" \\\n     --data-binary \"{\\\"app_id\\\" : \\\"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\\\",\n\\\"identifier\\\":\\\"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566\\\",\n\\\"language\\\":\\\"en\\\",\n\\\"timezone\\\":-28800,\n\\\"game_version\\\":\\\"1.0\\\",\n\\\"device_os\\\":\\\"7.0.4\\\",\n\\\"device_type\\\":0,\n\\\"device_model\\\":\\\"iPhone 8,2\\\",\n\\\"tags\\\":{\\\"a\\\":\\\"1\\\",\\\"foo\\\":\\\"bar\\\"}}\" \\\n     https://onesignal.com/api/v1/players",
      "language": "shell"
    },
    {
      "code": "<?PHP\n$fields = array( \n'app_id' => \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\", \n'identifier' => \"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566\", \n'language' => \"en\", \n'timezone' => \"-28800\", \n'game_version' => \"1.0\", \n'device_os' => \"9.1.3\", \n'device_type' => \"0\", \n'device_model' => \"iPhone 8,2\", \n'tags' => array(\"foo\" => \"bar\") \n); \n\n$fields = json_encode($fields); \nprint(\"\\nJSON sent:\\n\"); \nprint($fields); \n\n$ch = curl_init(); \ncurl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/players\"); \ncurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); \ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); \ncurl_setopt($ch, CURLOPT_HEADER, FALSE); \ncurl_setopt($ch, CURLOPT_POST, TRUE); \ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields); \ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); \n\n$response = curl_exec($ch); \ncurl_close($ch); \n\n$return[\"allresponses\"] = $response; \n$return = json_encode( $return); \n\nprint(\"\\n\\nJSON received:\\n\"); \nprint($return); \nprint(\"\\n\");\n\n?>",
      "language": "php"
    },
    {
      "code": "var sendDevice = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/players\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar user = { \n  app_id: \"YOUR_ONESIGNAL_APP_ID\",\n  external_user_id: \"user_id\",\n  tags: {\"tag_key\": \"tag_value\", \"key2\": \"value2\"},\n  //email example\n  device_type: 11,\n  identifier: \"email_address@email.com\"\n};\n\nsendDevice(user);",
      "language": "javascript",
      "name": "NodeJS"
    }
  ]
}
[/block]
## Result Format - Add a device
[block:code]
{
  "codes": [
    {
      "code": "{\"success\": true, \"id\": \"ffffb794-ba37-11e3-8077-031d62f86ebf\" }",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]