---
title: "Create Segments"
slug: "create-segments"
excerpt: "Create segments visible and usable in the dashboard and API"
hidden: false
createdAt: "2019-08-07T01:14:14.168Z"
updatedAt: "2021-05-14T18:34:13.514Z"
---
[Requires Growth Plan or higher](https://onesignal.com/pricing)

The Create Segment method is used when you want your server to programmatically create a segment instead of using the OneSignal Dashboard UI. Just like creating [Segments](doc:segmentation) from the dashboard you can pass in `filters` with multiple `"AND"` or `"OR"` `operator`'s. 
[block:callout]
{
  "type": "warning",
  "title": "Does Not Update Segments",
  "body": "This endpoint will only create segments, it does not edit or update currently created Segments. You will need to use the [Delete Segments](ref:delete-segments) endpoint and re-create it with this endpoint to edit."
}
[/block]
## Example Code - Create Segments
[block:code]
{
  "codes": [
    {
      "code": "curl --include --request POST  \\\n--header \"Content-Type: application/json; charset=utf-8\"  \\\n--header \"Authorization: Basic YOUR_REST_API_KEY\"  \\\n--data-binary \"{\\\"name\\\": \\\"SEGMENT_NAME\\\", \\\"filters\\\": [{\\\"field\\\": \\\"session_count\\\", \\\"relation\\\": \\\">\\\", \\\"value\\\": \\\"1\\\"},{\\\"operator\\\": \\\"OR\\\"},{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"TAG_KEY\\\", \\\"relation\\\": \\\"exists\\\"},{\\\"operator\\\": \\\"OR\\\"},{\\\"field\\\": \\\"last_session\\\", \\\"relation\\\": \\\"<\\\", \\\"value\\\": \\\"1\\\"}]}\" \\\nhttps://onesignal.com/api/v1/apps/YOUR_APP_ID/segments\n\n// single line example\ncurl --include --request POST  --header \"Content-Type: application/json; charset=utf-8\"  --header \"Authorization: Basic YOUR_REST_API_KEY\"  --data-binary \"{\\\"name\\\": \\\"SEGMENT_NAME\\\", \\\"filters\\\": [{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"TAG_KEY\\\", \\\"relation\\\": \\\"=\\\", \\\"value\\\": \\\"true\\\"},{\\\"operator\\\": \\\"AND\\\"},{\\\"field\\\": \\\"tag\\\", \\\"key\\\": \\\"TAG_KEY2\\\", \\\"relation\\\": \\\"exists\\\"}]}\"  https://onesignal.com/api/v1/apps/YOUR_APP_ID/segments",
      "language": "curl"
    },
    {
      "code": "{\n  \"name\": \"Segment 2\",\n  \"filters\": [\n    {\"field\": \"session_count\", \"relation\": \">\", \"value\": \"1\"},\n    {\"operator\": \"AND\"},\n    {\"field\": \"tag\", \"relation\": \"!=\", \"key\": \"tag_key\", \"value\": \"1\"},\n    {\"operator\": \"OR\"},\n    {\"field\": \"last_session\", \"relation\": \"<\", \"hours_ago\": \"30\"}\n  ]\n}\n\n//Another Example\n\n{\n  \"name\": \"iOS, Android, Web\", \n  \"filters\": [\n    {\"field\": \"device_type\", \"relation\": \"=\", \"value\": \"iOS\"},\n    {\"operator\": \"OR\"},\n    {\"field\": \"device_type\", \"relation\": \"=\", \"value\": \"Android\"},\n    {\"operator\": \"OR\"},\n    {\"field\": \"device_type\", \"relation\": \"=\", \"value\": \"Web Push (Browser)\"}\n  ]\n}",
      "language": "json"
    }
  ]
}
[/block]
## Result Format - Create Segments
[block:code]
{
  "codes": [
    {
      "code": "// Always true, \"id\" is uuid of created segment\n{\"success\": true, \"id\": \"7ed2887d-bd24-4a81-8220-4b256a08ab19\"}",
      "language": "json",
      "name": "201 Created"
    },
    {
      "code": "{\"success\": false, \"errors\": [\"Segment with the given id already exists.\"]}",
      "language": "json",
      "name": "409 Conflict"
    },
    {
      "code": "//Always false, error will explain why request failed\n{\"success\": false, \"errors\": [\"name is required\"]}",
      "language": "json",
      "name": "400 Bad Request"
    }
  ]
}
[/block]