---
title: "Notification History"
slug: "notification-history"
excerpt: "View the devices sent a message - OneSignal Professional Paid Plan Required"
hidden: false
createdAt: "2019-06-08T02:16:47.506Z"
updatedAt: "2022-02-22T20:09:09.700Z"
---
This method will return all devices that were sent the given `notification_id` of an Email or Push Notification if used within 7 days of the date sent. After 7 days of the sending date, the message history data will be unavailable.

After a successful response is received, the destination url may be polled until the file becomes available. **Most exports are done in ~1-3 minutes, so setting a poll interval of 10 seconds should be adequate.**

For use cases that are not meant to be consumed by a script, an email will be sent to the supplied email address. 
[block:callout]
{
  "type": "warning",
  "title": "Requirements",
  "body": "1. A <a href=\"https://onesignal.com/pricing\" target=\"_blank\">OneSignal Professional or Enterprise Plan</a>.\n2. Turn on Send History via OneSignal API in Settings -> Analytics. Cannot get data before this was turned on.\n3. Must be called within 7 days after sending the message.\n4. Messages targeting under 1000 recipients will not have `\"sent\"` events recorded, but will show `\"clicked\"` events.\n5. Requires your OneSignal App's `REST API Key`, available in [Keys & IDs](doc:accounts-and-keys)."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "403 Error Responses",
  "body": "You can test if it is complete by making a GET request to the `csv_file_url` value. **This file may take time to generate depending on how many device records are being pulled.** If the file is not ready, a 403 error will be returned. In which case, you set setup a retry to pull again after some time has passed. Otherwise the file itself will be returned."
}
[/block]

## Example Code - Notification History
[block:code]
{
  "codes": [
    {
      "code": "curl -X POST \\\n  https://app.onesignal.com/api/v1/notifications/{notification_id}/history \\\n  -H 'Authorization: Basic YOUR_REST_API_KEY' \\\n  -H 'Cache-Control: no-cache' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"events\": \"clicked\",\n    \"app_id\": \"YOUR_ONESIGNAL_APP_ID\",\n    \"email\": \"your_email@email.com\"\n}'",
      "language": "curl"
    },
    {
      "code": "{\n    \"events\": \"sent\",\n    \"app_id\": \"OneSignal_App_Id\",\n    \"email\": \"Email_to_send_data\"\n}",
      "language": "json"
    }
  ]
}
[/block]
## Result Format - Notification History
[block:code]
{
  "codes": [
    {
      "code": "{\n\t\"success\": true,\n\t\"destination_url\": \"https://onesignal-aws-link.csv\"\n}",
      "language": "json",
      "name": "200 OK"
    },
    {
      "code": "{\n\t\"errors\": [\n    \t    \"param `email` must be a valid email\"\n\t],\n\t\"success\": false\n}",
      "language": "json",
      "name": "400 Bad Request"
    }
  ]
}
[/block]
## Sample File
[block:code]
{
  "codes": [
    {
      "code": "player_id,timestamp\n2c4fac95-7dfb-4113-9347-aba3a92ff557,1628189160\n68f5cf73-b20a-4de9-b6ee-79a863b8e7d8,1628187816",
      "language": "text"
    }
  ]
}
[/block]