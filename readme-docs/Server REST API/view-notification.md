---
title: "View notification"
slug: "view-notification"
excerpt: "View the details of a single notification and outcomes associated with it"
hidden: false
createdAt: "2016-09-10T05:53:16.283Z"
updatedAt: "2021-10-05T20:18:47.732Z"
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
    "h-2": "Description",
    "0-2": "**Required:** Notification ID",
    "1-2": "**Required:** App ID",
    "0-0": "`id`",
    "0-1": "String",
    "1-0": "`app_id`",
    "1-1": "String"
  },
  "cols": 3,
  "rows": 2
}
[/block]
For notification-specific **outcomes data**:
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-2": "**Optional:**\nComma-separated list of names and the value (sum/count) for the returned outcome data. \n*Note: Clicks only support count aggregation.*\n\nFor out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user.\n\nExample:os______session_duration.count,os______click.count,CustomOutcomeName.sum\n\n*Note: If the outcome_names parameter is omitted, then no outcomes data will be returned and all the other outcomes-specific parameters listed below will be ignored.*",
    "0-0": "`outcome_names`",
    "0-1": "String",
    "1-0": "`outcome_names[]`\n(if outcome names have commas in them)",
    "1-2": "**Optional:**\nIf outcome names contain any commas, then please specify only one value at a time.\n\nExample: outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count\nwhere “Sales, Purchase” is the custom outcomes with a comma in the name.",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "String",
    "2-2": "**Optional:**\nTime range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data).\n\nDefault is *1h* if the parameter is omitted.\n\n*This parameter is ignored if outcome_names parameter is not specified.*",
    "3-2": "**Optional:**\nPlatform id. Refer [device's platform ids](https://documentation.onesignal.com/reference/add-a-device) for values.\n\nExample: \n`outcome_platforms=0` for iOS\n`outcome_platforms=7,8` for Safari and Firefox\n\nDefault is *data from all platforms *if the parameter is omitted.\n\n*This parameter is ignored if outcome_names parameter is not specified.*",
    "4-2": "**Optional:**\nAttribution type for the outcomes. The values can be direct or influenced\n\nExample: outcome_attribution=direct\n\nDefault is *total* (returns direct+influenced) if the parameter is omitted.\n\n*This parameter is ignored if outcome_names parameter is not specified.*",
    "2-0": "`outcome_time_range`",
    "3-0": "`outcome_platforms`",
    "4-0": "`outcome_attribution`"
  },
  "cols": 3,
  "rows": 5
}
[/block]
## Example Code - View notification
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n https://onesignal.com/api/v1/notifications/THE_NOTIFICATION_ID?app_id=YOUR_APP_ID",
      "language": "shell",
      "name": "Shell"
    },
    {
      "code": "<?PHP\n\t\t$ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, \"https://onesignal.com/api/v1/notifications/YOUR_NOTIFICATION_ID?app_id=YOUR_APP_ID\");\n    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',\n                           'Authorization: Basic AUTH_KEY'));\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);\n    curl_setopt($ch, CURLOPT_HEADER, FALSE);\n    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);\n\n    $response = curl_exec($ch);\n    curl_close($ch);\n\t\t$return[\"allresponses\"] = $response;\n  \t$return = json_encode( $return);\n  \n\t  print(\"\\n\\nJSON received:\\n\");\n\t  print($return);\n\t  print(\"\\n\");\n?>",
      "language": "php",
      "name": "PHP"
    }
  ]
}
[/block]
Example Code for outcomes data
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n    --header \"Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\" \\\n    \"https://onesignal.com/api/v1/notifications/THE_NOTIFICATION_ID?app_id=YOUR_APP_ID&outcome_names=os__click.count&outcome_platforms=0\"",
      "language": "shell"
    },
    {
      "code": "$ch = curl_init();\n\ncurl_setopt($ch, CURLOPT_URL, 'https://onesignal.com/api/v1/notifications/{notification_id}?app_id={appId}&outcome_names=os__click.count&outcome_platforms=0');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');\n\n\n$headers = array();\n$headers[] = 'Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj';\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $headers);\n\n$result = curl_exec($ch);\nif (curl_errno($ch)) {\n    echo 'Error:' . curl_error($ch);\n}\ncurl_close($ch);",
      "language": "php"
    }
  ]
}
[/block]
### Returned Fields
- `remaining` - Number of notifications that have not been sent out yet. This can mean either our system is still processing the notification or you have delayed options set.
- `successful` - Number of notifications delivered to the Google/Apple/Windows servers.
- `failed` - Number of notifications that could not be delivered due to those devices being unsubscribed.
- `errored` - Number of notifications that could not be delivered due to an error. You can find more information by viewing the notification in the dashboard.
- `converted` - Number of devices that have clicked/tapped the notification.
- `queued_at` - Unix timestamp indicating when the notification was created
- `send_after` - Unix timestamp indicating when notification delivery should begin.
- `completed_at` - Unix timestamp indicating when notification delivery completed. The delivery duration from start to finish can be calculated with `completed_at` - `send_after`.
- `platform_delivery_stats` - Hash of delivery statistics broken out by target device platform. See the section below for additional detail.
- `received` - Number of devices that confirmed receiving the notification aka [Confirmed Deliveries](doc:confirmed-deliveries).
- `throttle_rate_per_minute` - number of push notifications sent per minute. **Paid Feature Only**. If throttling is not enabled for the app or the notification, and for free accounts, *null* is returned. Refer to [Throttling](doc:throttling) for more details.


###`Outcomes Data` response field details
- `id` - name of the outcome
- `value` - returned value of the aggregation type
- `aggregation` - aggregation type (sum or count) requested for the outcome

###  `platform_delivery_stats` response field details

Keys present in this hash correspond to the platforms targeted by the notification. For instance, if the push was sent to iOS and Android devices, the hash will have keys `ios` and `android`. The full mapping is enumerated below.

- iOS - `ios`
- Android - `android`
- Amazon Fire - `amazon_fire`
- Windows Phone 8.0 - `windows_phone_legacy`
- Chrome Browser Extensions - `chrome_extension`
- Chrome Web Push - `chrome_web_push`
- Windows Desktop and Phone - `windows`
- Safari Browser Push - `safari_web_push`
- Firefox Web Push - `firefox_web_push`
- macOS Desktop Push - `mac_os`
- Alexa Messages - `amazon_alexa`
- Email - `email`
- SMS - `sms`. SMS platform delivery stats will feature a delivery report from OneSignal and also from the SMS provider (for example, Twilio).
- MS Edge Web Push - `edge_web_push`

Each value in this object is a per-platform object containing:

1.  `success`: the number of notifications successfully handed off to the upstream provider
2. `failed`: the number of notifications rejected by the upstream provider for reasons such as being unsubscribed
3. `errored`: the number of messages rejected by the upstream provider for things like configuration errors, server errors, and etc.
4. `converted`: the number of messages that have been clicked on, to form a conversion. 
5. `received`: the number of messages received by the users device.

The following example is for a notification sent to both iOS and Android, and the `platform_delivery_stats` object contains objects `ios` and `android`.

The data in this field can be considered final once delivery is completed -- that is, when the `completed_at` field has a valid timestamp. During delivery, these values are subject to change.

## Result Format - View notification
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"adm_big_picture\": \"\",\n    \"adm_group\": \"\",\n    \"adm_group_message\": {\n        \"en\": \"\"\n    },\n    \"adm_large_icon\": \"\",\n    \"adm_small_icon\": \"\",\n    \"adm_sound\": \"\",\n    \"spoken_text\": {},\n    \"alexa_ssml\": null,\n    \"alexa_display_title\": null,\n    \"amazon_background_data\": false,\n    \"android_accent_color\": \"FF9900FF\",\n    \"android_group\": \"group key\",\n    \"android_group_message\": {\n        \"en\": \"group message for Android 6.0 and older\"\n    },\n    \"android_led_color\": null,\n    \"android_sound\": null,\n    \"android_visibility\": 1,\n    \"app_id\": \"3beb3078-e0f1-4629-af17-fde833b9f716\",\n    \"big_picture\": \"https://img.onesignal.com/n/37326fcc-2baa-45da-891c-ca9454a64957.png\",\n    \"buttons\": null,\n    \"canceled\": false,\n    \"chrome_big_picture\": \"\",\n    \"chrome_icon\": \"\",\n    \"chrome_web_icon\": \"https://picture-resource.com/icon-image.png\",\n    \"chrome_web_image\": \"https://picture-resource.com/image.png\",\n    \"chrome_web_badge\": \"https://picture-resource.com/badge.png\",\n    \"content_available\": false,\n    \"name\": \"Campaign: New Shoe Releases\", \n    \"contents\": {\n        \"en\": \"English Message\"\n    },\n    \"converted\": 1,\n    \"data\": {\n        \"additional\": \"data\",\n        \"campaign\": \"25\"\n    },\n    \"delayed_option\": \"immediate\",\n    \"delivery_time_of_day\": \"2:32PM\",\n    \"errored\": 4,\n    \"excluded_segments\": [],\n    \"failed\": 0,\n    \"firefox_icon\": \"https://picture-resource.com/firefox_icon.png\",\n    \"global_image\": \"https://link-to-your-image.com/image-resource-file.png\",\n    \"headings\": {\n        \"en\": \"English Message Title 😊\"\n    },\n    \"id\": \"fd1723c6-bfaf-4f53-b4f4-0408ff43e18a\",\n    \"include_player_ids\": null,\n    \"include_external_user_ids\": null,\n    \"included_segments\": [\n        \"Subscribed Users\"\n    ],\n    \"thread_id\": null,\n    \"ios_badgeCount\": 1,\n    \"ios_badgeType\": \"Increase\",\n    \"ios_category\": \"\",\n    \"ios_interruption_level\": \"active\",\n   \t\"ios_relevance_score\": 0.0,\n    \"ios_sound\": \"explosion.wav\",\n    \"apns_alert\": {},\n    \"isAdm\": false,\n    \"isAndroid\": true,\n    \"isChrome\": false,\n    \"isChromeWeb\": true,\n    \"isAlexa\": false,\n    \"isFirefox\": true,\n    \"isIos\": true,\n    \"isSafari\": true,\n    \"isWP\": false,\n    \"isWP_WNS\": false,\n    \"isEdge\": true,\n    \"large_icon\": \"https://img.onesignal.com/n/b5cadcf0-1297-4489-b865-545b421d8c5d.png\",\n    \"priority\": 5,\n    \"queued_at\": 1580510246,\n    \"remaining\": 0,\n    \"send_after\": 1580510246,\n    \"completed_at\": 1580510247,\n    \"small_icon\": \"small_icon\",\n    \"successful\": 232,\n    \"received\": 5,\n    \"tags\": null,\n    \"filters\": null,\n    \"template_id\": null,\n    \"ttl\": 777,\n    \"url\": \"https://onesignal.com/blog\",\n    \"web_url\": null,\n    \"app_url\": null,\n    \"web_buttons\": null,\n    \"web_push_topic\": null,\n    \"wp_sound\": \"\",\n    \"wp_wns_sound\": \"\",\n    \"platform_delivery_stats\": {\n        \"android\": {\n            \"successful\": 198,\n            \"errored\": 1,\n            \"failed\": 0,\n            \"converted\": 198,\n            \"received\": 198\n        },\n        \"ios\": {\n            \"successful\": 2,\n            \"errored\": 3,\n            \"failed\": 0,\n            \"converted\": 2,\n            \"received\": 2\n        }\n    },\n    \"ios_attachments\": {\n        \"id\": \"https://img.onesignal.com/n/23f60ba6-8f2e-4ce1-bdf5-86e6286c2e39.png\"\n    },\n    \"throttle_rate_per_minute\": null\n}",
      "language": "json",
      "name": "200 OK"
    }
  ]
}
[/block]
### With Outcomes data
200 OK: (*Other keys in the object omitted from this example*)
[block:code]
{
  "codes": [
    {
      "code": "{\n \"outcomes\": [\n   {\n     \"id\": \"os__session_duration\",\n     \"value\": 300,\n     \"aggregation\": \"sum\"\n   },\n   {\n     \"id\": \"os__click\",\n     \"value\": 2,\n     \"aggregation\": \"count\"\n   },\n   {\n     \"id\": \"Sales\",\n     \"value\": 108,\n     \"aggregation\": \"sum\"\n   }\n ]\n}",
      "language": "json"
    }
  ]
}
[/block]
## Applicable Devices for Clicked and Received

Our platform specific clicked and received data is a new feature, as of July 2021. This means we are still working on improving it and gathering feedback. As a result we cannot include all devicess. 

Our `received` data will not be shown for: 
  * Web Push (Safari)
  * Windows (Phone & Desktop)
  * Apple macOS
  * Chrome Extensions.

Our click tracking doesn't work for:
  * Apple macOS & Windows (Phone & Desktop) - OneSignal doesn't support SDKs for these platforms.