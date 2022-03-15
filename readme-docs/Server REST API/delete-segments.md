---
title: "Delete Segments"
slug: "delete-segments"
excerpt: "Delete segments (not user devices) - <span class=\"label-all\"><span class=\"label-all label-required\">Required: </span> [OneSignal Paid Plan](doc:paid-plan-benefits) </span>"
hidden: false
createdAt: "2019-08-07T02:36:28.516Z"
updatedAt: "2020-04-23T01:11:34.799Z"
---
You can delete a segment under your app by calling this API. You must provide an API key in the Authorization header that has admin access on the app.

The `segment_id` can be found in the URL of the segment when viewing it in the dashboard.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6635f69-Screen_Shot_2020-04-22_at_9.57.10_AM.png",
        "Screen Shot 2020-04-22 at 9.57.10 AM.png",
        1431,
        297,
        "#cecdd0"
      ]
    }
  ]
}
[/block]
## Example Code - Delete Segments
[block:code]
{
  "codes": [
    {
      "code": "$ curl -XDELETE \\\n       -H'Authorization: Basic YOUR_REST_API_KEY' \\\n       -H'Content-Type: application/json' \\\n       https://onesignal.com/api/v1/apps/YOUR_APP_ID/segments/YOUR_SEGMENT_ID",
      "language": "curl"
    }
  ]
}
[/block]
## Result Format - Delete Segments
[block:code]
{
  "codes": [
    {
      "code": "{\n    \"success\": true\n}",
      "language": "json",
      "name": "200 OK"
    },
    {
      "code": "{\n    \"success\": false\n}",
      "language": "json",
      "name": "404 Not Found"
    },
    {
      "code": "{\n    \"errors\": [\n        \"app_id not found. You may be missing a Content-Type: application/json header.\"\n    ]\n}",
      "language": "json",
      "name": "400 Bad Request"
    }
  ]
}
[/block]