---
title: "CSV export"
slug: "csv-export"
excerpt: "Generate a compressed CSV export of all of your current user data"
hidden: false
createdAt: "2016-09-10T05:50:12.611Z"
updatedAt: "2021-09-07T22:14:58.138Z"
---
This method can be used to generate a compressed CSV export of all of your current user data. It is a much faster alternative than retrieving this data using the `/players` API endpoint.

The file will be compressed using GZip.

**The file may take several minutes to generate depending on the number of users in your app.** 

The URL generated will be available for 3 days and includes random v4 uuid as part of the resource name to be unguessable.
[block:callout]
{
  "type": "warning",
  "title": "403 Error Responses",
  "body": "You can test if it is complete by making a GET request to the `csv_file_url` value. **This file may take time to generate depending on how many device records are being pulled.** If the file is not ready, a 403 error will be returned. In which case, you set setup a retry to pull again after some time has passed. Otherwise the file itself will be returned."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](doc:accounts-and-keys).",
  "title": "Requires Authentication Key"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Only one concurrent export is allowed per OneSignal account. Please ensure you have successfully downloaded the `.csv.gz` file before exporting another app.",
  "title": "Concurrent Exports"
}
[/block]
## Query Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-2": "**Required:** The app ID that you want to export devices from",
    "0-0": "`app_id`",
    "0-1": "String"
  },
  "cols": 3,
  "rows": 1
}
[/block]
## Body Parameters - CSV export
[block:parameters]
{
  "data": {
    "0-0": "`extra_fields`",
    "0-1": "Array of Strings",
    "0-2": "Additional fields that you wish to include. Currently supports `location`, `country`, `rooted`, `notification_types`, `ip`, `external_user_id`, `web_auth`, and `web_p256`.",
    "1-0": "`last_active_since`",
    "1-1": "Unixtime in Seconds",
    "1-2": "Export all devices with a last_active timestamp greater than this time.",
    "2-0": "`segment_name`",
    "2-1": "String",
    "2-2": "Export all devices belong to the segment",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description"
  },
  "cols": 3,
  "rows": 3
}
[/block]
## Example Code - CSV export
[block:code]
{
  "codes": [
    {
      "code": "curl -X POST -H \"Authorization: Basic YOUR_REST_API_KEY\" -H \"Content-Type: application/json\" -d '{\n    \"extra_fields\": [\"country\",\"notification_types\",\"external_user_id\", \"location\", \"rooted\", \"ip\", \"country\", \"web_auth\", \"web_p256\"],\n\t\"last_active_since\": \"1469392779\",\n\t\"segment_name\": \"Subscribed Users\"\n}' \"https://onesignal.com/api/v1/players/csv_export?app_id=YOUR_APP_ID\"",
      "language": "curl"
    },
    {
      "code": "<?php\n  function oneSignalApi() {\n    $curl = curl_init();\n\n    curl_setopt_array($curl, array(\n      CURLOPT_URL => \"https://onesignal.com/api/v1/players/csv_export?app_id=YOUR_APP_ID\",\n      CURLOPT_RETURNTRANSFER => true,\n      CURLOPT_ENCODING => \"\",\n      CURLOPT_MAXREDIRS => 10,\n      CURLOPT_TIMEOUT => 0,\n      CURLOPT_FOLLOWLOCATION => true,\n      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n      CURLOPT_CUSTOMREQUEST => \"POST\",\n      CURLOPT_HTTPHEADER => array(\n        \"Authorization: Basic YOUR_REST_API_KEY\",\n        \"Content-Type: application/json\"\n      ),\n    ));\n\n    $response = curl_exec($curl);\n    curl_close($curl);\n    echo $response;\n  }\noneSignalApi() ;\n?>",
      "language": "php"
    }
  ]
}
[/block]
## Result Format - CSV export
[block:code]
{
  "codes": [
    {
      "code": "{ \"csv_file_url\": \"https://onesignal.com/csv_exports/b2f7f966-d8cc-11e4-bed1-df8f05be55ba/users_184948440ec0e334728e87228011ff41_2015-11-10.csv.gz\" }",
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

[block:parameters]
{
  "data": {
    "h-0": "Default Columns",
    "0-0": "id",
    "0-1": "OneSignal Player Id",
    "h-1": "Details",
    "1-0": "identifier",
    "1-1": "Push Token",
    "2-0": "session_count",
    "2-1": "Number of times they visited the app or site",
    "3-0": "language",
    "3-1": "Device language code",
    "4-0": "timezone",
    "4-1": "Number of seconds away from UTC. Example: `-28800`",
    "5-0": "game_version",
    "5-1": "Version of your mobile app gathered from Android Studio `versionCode` in your App/build.gradle and iOS uses `kCFBundleVersionKey` in Xcode.",
    "6-0": "device_os",
    "6-1": "Device Operating System Version. Example:\n`80` = Chrome 80, `9` = Android 9",
    "7-0": "device_type",
    "7-1": "Device Operating System Type. See [`device_type` for Integer Value codes](https://documentation.onesignal.com/reference#section-body-parameters-add-a-device). Example:\n`0` = iOS mobile app, `1` = Android mobile app, `5` = Chrome Web Push",
    "8-0": "device_model",
    "8-1": "Device Hardware String Code.\nExample:\nMobile Web Subscribers will have `Linux armv`\n[iOS Hardware Strings](https://iosref.com/hardware-strings/)",
    "9-0": "ad_id",
    "10-0": "tags",
    "10-1": "Current OneSignal [Data Tags](doc:add-user-data-tags) on the device.",
    "11-0": "last_active",
    "12-0": "playtime",
    "13-0": "amount_spent",
    "14-0": "created_at",
    "15-0": "invalid_identifier",
    "15-1": "`t` = unsubscribed\n`f` = subscibed",
    "16-0": "badge_count",
    "16-1": "Current number of badges on the device",
    "9-1": "Based on the Google Advertising Id for Android, identifierForVendor for iOS. `OptedOut` means user turned off Advertising tracking on the device.",
    "11-1": "Date and time the user last opened the mobile app or visited the site.",
    "12-1": "Total amount of time in seconds the user had the mobile app open.",
    "13-1": "Mobile only - amount spent in USD on In-App Purchases. [More details](https://documentation.onesignal.com/docs/segmentation#section-what-kind-of-in-app-purchases-are-tracked-and-how-can-i-import-historical-in-app-purchases).",
    "14-1": "Date and time the device record was created in OneSignal. **Mobile** - first time they opened the app with OneSignal SDK. **Web** - first time the user subscribed to the site."
  },
  "cols": 2,
  "rows": 17
}
[/block]
### Extra Fields - CSV export
[block:parameters]
{
  "data": {
    "h-0": "extra_fields",
    "0-0": "external_user_id",
    "h-1": "Details",
    "0-1": "Your User Id set on the device.",
    "2-0": "location",
    "2-1": "Location points (Latitude and Longitude) set on the device.",
    "3-0": "country",
    "4-0": "rooted",
    "3-1": "Country code",
    "4-1": "Android device rooted or not",
    "5-0": "ip",
    "5-1": "IP Address of the device if being tracked. See [Handling Personal Data](doc:handling-personal-data).",
    "6-0": "web_auth",
    "6-1": "Web Only authorization key.",
    "7-0": "web_p256",
    "7-1": "Web Only p256 key.",
    "1-0": "notification_types",
    "1-1": "Check this value if `invalid_identifier` is `t` (true) to know why the device is unsubscribed.\n\n`1` = subscribed\n`-2` = unsubscribed, via SDK method or REST API\n`null` = default, if  `invalid_identifier` is `t` (true) and `identifier` is `null` then device was never subscribed\n`0` = permission not granted. \n`-3` = missing_android_support_library\n`-4` = missing_google_play_services_library\n`-5` = outdated_android_support_library\n`-6` = invalid_google_project_number\n`-7` = outdated_google_play_services_app\n`-8` = google_play_services_library_error\n`-9` = GSM_SERVICE_NOT_AVAILABLE\n`-10`= Web push blocked notifications, cleared all data and workers, Android, iOS, and WP uninstalled app\n`-11` = google_play_services_library_error # Google Play services returned an IOException error, check logcat\n`-12` = google_play_services_library_error # Google Play services returned unknown error, check logcat\n`-13` = iOS missing_push_capability\n`-14` = iOS apns_delegate_never_fired\n`-15` = ios_simulator_unsupported\n`-16` = iOS unknown_apns_error_response\n`-17` = iOS other_apns_3000_error\n`-18` = iOS never_prompted\n`-19` = iOS prompted_but_never_answered\n`-20` = temp_web_record\n`-21` = Web, pushsubscriptionchange permission revoked\n`-22` = Email, unsubscribed via dashboard, manually_unsubscribed\n`-23` = Web service_worker_403\n`-24` = Web service_worker_404\n\nThe secondary use of this field is for iOS devices (device_type = 0).\nFor numbers greater than zero for iOS devices this indicates the notification options enabled for your app as bitflags.\n\nbit 0 - badges\nbit 1 - sounds\nbit 2 - alert\nbit 3 - lockscreen\nExample: `31` = all the iOS notification settings are on. badges, sounds, banner, etc\n\nSee the [OneSignal-iOS-SDK Source](https://github.com/OneSignal/OneSignal-iOS-SDK/blob/master/iOS_SDK/OneSignalSDK/Source/OneSignalNotificationSettingsIOS10.m#L78-L81) for more details on these iOS bitflags."
  },
  "cols": 2,
  "rows": 8
}
[/block]