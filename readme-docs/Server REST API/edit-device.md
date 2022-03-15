---
title: "Edit device"
slug: "edit-device"
excerpt: "Update an existing device in one of your OneSignal apps"
hidden: false
createdAt: "2016-09-10T04:26:17.882Z"
updatedAt: "2022-01-11T23:07:57.629Z"
---
## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "0-1": "String",
    "0-2": "**Required** The device's OneSignal ID"
  },
  "cols": 3,
  "rows": 1
}
[/block]
## Body Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`app_id`",
    "0-2": "**Required** Your OneSignal App Id found in [Keys & IDs](doc:accounts-and-keys)",
    "0-1": "String",
    "1-0": "`identifier`",
    "1-2": "Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`",
    "3-2": "Language code. Typically lower case two letters, except for Chinese where it must be one of `zh-Hans` or `zh-Hant`. Example: `en`",
    "4-2": "Number of seconds away from UTC. Example: `-28800`",
    "5-2": "Version of your app. Example: `1.1`",
    "8-2": "The ad id for the device's platform:\nAndroid = `Advertising Id`\niOS = `identifierForVendor`\nWP8.0 = `DeviceUniqueId`\nWP8.1 = `AdvertisingId`",
    "7-2": "Device operating system version. Example: `7.0.4`",
    "6-2": "Device make and model. Example: `iPhone5,1`",
    "3-0": "`language`",
    "4-0": "`timezone`",
    "4-1": "Int",
    "3-1": "String",
    "1-1": "String",
    "5-0": "`game_version`",
    "5-1": "String",
    "6-0": "`device_model`",
    "6-1": "String",
    "7-1": "String",
    "7-0": "`device_os`",
    "8-0": "`ad_id`",
    "8-1": "String",
    "9-0": "`sdk`",
    "9-1": "String",
    "9-2": "Name and version of the sdk/plugin that's calling this API method (if any)",
    "10-0": "`session_count`",
    "11-0": "`tags`",
    "11-1": "Hash",
    "12-0": "`amount_spent`",
    "12-1": "String",
    "13-0": "`created_at`",
    "13-1": "Int",
    "14-0": "`playtime`",
    "14-1": "Int",
    "15-0": "`badge_count`",
    "15-1": "Int",
    "16-0": "`last_active`",
    "16-1": "Int",
    "18-0": "`test_type`",
    "18-1": "Int",
    "10-1": "Int",
    "10-2": "Number of times the user has played the game, defaults to 1",
    "11-2": "Custom tags for the player. Only support string and integer key value pairs. Does not support arrays or other nested objects. Setting a tag value to `null` or an empty string will remove the tag.  Example: `{\"foo\":\"bar\",\"this\":\"that\"}`\n\n**Limitations:** \n- 100 tags per call\n- Android SDK users: tags cannot be removed or changed via API if set through SDK `sendTag` methods.\n\n**Recommended to only tag devices with 1 kilobyte of data**\n\nPlease consider using your own Database to save more than 1 kilobyte of data. See: [Internal Database & CRM](doc:internal-database-crm)",
    "12-2": "Amount the user has spent in USD, up to two decimal places",
    "13-2": "Unixtime when the player joined the game",
    "14-2": "Seconds player was running your app.",
    "15-2": "Current iOS badge count displayed on the app icon\n\n**NOTE**: Not supported for apps created after June 2018, since badge count for apps created after this date are handled on the client.",
    "16-2": "**Set Automatically based on the date the request was made.** Unixtime when the player was last active",
    "18-2": "This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. \n`1` = Development\n`2` = Ad-Hoc\nOmit this field for App Store builds.",
    "19-0": "`long`",
    "19-1": "Double",
    "19-2": "Longitude of the device, used for geotagging to segment on.",
    "20-0": "`lat`",
    "20-1": "Double",
    "20-2": "Latitude of the device, used for geotagging to segment on.",
    "17-0": "`notification_types`",
    "17-1": "Int",
    "17-2": "`1` = subscribed\n`-2` = unsubscribed\n\niOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead.\n\nAndroid - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
    "21-0": "`country`",
    "21-1": "String",
    "21-2": "Country code in the ISO 3166-1 Alpha 2 format",
    "22-0": "`external_user_id`",
    "22-1": "String",
    "22-2": "A custom user ID",
    "2-0": "`identifier_auth_hash `",
    "2-2": "Only required if you have enabled [Identity Verification](doc:identity-verification) and `device_type` is `11` (Email) or `14` SMS (coming soon).",
    "2-1": "String",
    "23-0": "`external_user_id_auth_hash`",
    "23-1": "String",
    "23-2": "Only required if you have enabled [Identity Verification](doc:identity-verification)."
  },
  "cols": 3,
  "rows": 24
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Warning - Android SDK Data Synchronization",
  "body": "The OneSignal Android SDKs leverage cacheing on `external_user_id` and [Data Tags](doc:add-user-data-tags).\n\n`external_user_id` or `tags` added client-side through the Android SDK are cached. They can be changed server-side, but will not be changed back to the original client-side values if tried to set again through the SDK.\n\nFor example, if calling the SDK method `sendTag(\"key\", \"value1\")` then update the tag value to `\"value2\"` with this API endpoint. You will not be able to set the value back to `\"value1\"` through the SDK. You will need to set a new value client side or reset the value server side.\n\nRecommendations if using this Endpoint on Android Mobile Apps:\n1 - Do not use the same tag keys for SDK and API updates\n2 - If you want to use the same key for both SDK and API updates, call the SDK `getTags` method first to update the device's tags.\n\nThis is only applicable on the Android Mobile App SDKs."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Deleting Tags",
  "body": "To delete a tag, *include* its key and *set its value to blank*. Omitting a key/value will not delete it.\n\nFor example, if I wanted to delete two existing tags `rank` and `category` while simultaneously adding a new tag `class`, the `tags` JSON would look like the following:\n\n```\n\"tags\": {\n           \"rank\": \"\",\n           \"category\": \"\",\n           \"class\": \"my_new_value\"\n        }\n```"
}
[/block]

## Example Code - Edit device
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request PUT \\\n     --header \"Content-Type: application/json\" \\\n     --data-binary \"{\\\"app_id\\\" : \\\"APP_ID\\\", \\\n\\\"language\\\":\\\"es\\\",\\\n\\\"timezone\\\":-28800,\\\n\\\"game_version\\\":\\\"1.0\\\",\\\n\\\"device_os\\\":\\\"7.0.4\\\",\\\n\\\"device_type\\\":0,\\\n\\\"device_model\\\":\\\"iPhone\\\",\\\n\\\"tags\\\":{\\\"a\\\":\\\"1\\\",\\\"foo\\\":\\\"\\\"}}\" \\\n     https://onesignal.com/api/v1/players/PLAYER_ID",
      "language": "shell"
    },
    {
      "code": "<?PHP\n$playerID = '8dee0e23-410d-4a9a-b8ce-bfe4c5257ccc';\n$fields = array( \n'app_id' => '02b297e7-abb5-4e7e-9c2a-9ce7e2c82ff5', \n'tags' => array('OneSignal_Example_Tag' => 'YES')\n); \n$fields = json_encode($fields); \n\n$ch = curl_init(); \ncurl_setopt($ch, CURLOPT_URL, 'https://onesignal.com/api/v1/players/'.$playerID); \ncurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); \ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true); \ncurl_setopt($ch, CURLOPT_HEADER, false); \ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"PUT\");\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $fields); \ncurl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); \n$response = curl_exec($ch); \ncurl_close($ch); \n\n$resultData = json_decode($response, true);\necho $resultData;\n?>",
      "language": "php"
    },
    {
      "code": "var updateDevice = function(data,player_id) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/players/\" + player_id ,\n    method: \"PUT\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar user = { \n  app_id: \"YOUR_ONESIGNAL_APP_ID\",\n  external_user_id: \"user_id\",\n  tags: {\"tag_key\": \"tag_value\", \"key2\": \"value2\"},\n  //email example\n  identifier: \"email_address@email.com\"\n};\n\nupdateDevice(user,player_id);",
      "language": "javascript",
      "name": "NoseJS"
    }
  ]
}
[/block]
## Result Format - Edit device

The "success" result means OneSignal received your request. It does not mean the tags have been set. You may need to wait around 30 seconds for the data to be available.
[block:code]
{
  "codes": [
    {
      "code": "{\"success\": true }",
      "language": "javascript",
      "name": "200 OK"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Data Latency",
  "body": "A successful response means our database has received the request. This may take additional time for the data to be available on the user. \n\nIf using [Message Personalization](doc:personalization), please allow 60+ seconds before sending your messages."
}
[/block]

[block:html]
{
  "html": "<div style=\"padding-top: 250px\"></div>"
}
[/block]