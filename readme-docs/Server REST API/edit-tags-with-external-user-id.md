---
title: "Edit tags with external user id"
slug: "edit-tags-with-external-user-id"
excerpt: "Update an existing device's tags in one of your OneSignal apps using the External User ID."
hidden: false
createdAt: "2020-06-02T18:14:31.525Z"
updatedAt: "2022-02-25T22:55:35.901Z"
---
## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`app_id`",
    "0-1": "String",
    "0-2": "**Required:** The OneSignal App ID the user record is found under.",
    "1-0": "`*external_user_id*`",
    "1-1": "String",
    "1-2": "**Required:** The External User ID mapped to the device record in OneSignal. Must be actively set on the device to be updated. [More details](doc:internal-database-crm)."
  },
  "cols": 3,
  "rows": 2
}
[/block]
## Body Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`tags`",
    "0-1": "Hash",
    "0-2": "Custom tags for the device record. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{\"foo\":\"bar\",\"this\":\"that\"}`\n\n**Limitations:** \n- 100 tags per call\n- Android SDK users: tags cannot be removed or changed via API if set through SDK `sendTag` methods.\n\n**Recommended to only tag devices with 1 kilobyte of data**\n\nPlease consider using your own Database to save more than 1 kilobyte of data. See: [Internal Database & CRM](doc:internal-database-crm)"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Warning - Android SDK Data Synchronization",
  "body": "The OneSignal Android SDKs leverage cacheing on [Data Tags](https://documentation.onesignal.com/docs/add-user-data-tags).\n\nTags added through the Android SDK tagging methods may not update if using the API to change or update the same tag.\n\nFor example, if you use SDK method `sendTag(\"key\", \"value1\")` then update the tag value to `\"value2\"` with this API endpoint. You will not be able to set the value back to `\"value1\"` through the SDK since \"value1\" is cached on the device. You will need to change it to something different through the SDK to be reset.\n\nRecommendations if using this Endpoint on Android Mobile Apps:\n1 - Do not use the same tag keys for SDK and API updates\n2 - If you want to use the same key for both SDK and API updates, call the SDK `getTags` method first to update the device's tags.\n\nThis is only applicable on the Android Mobile App SDKs."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Deleting Tags",
  "body": "To delete a tag, include its key and set its value to an empty string \"\". Omitting a key/value will not delete it.\n\nFor example, if I wanted to delete two existing tags `rank` and `category` while simultaneously adding a new tag `class`, the `tags` JSON would look like the following:\n\n```\n\"tags\": {\n           \"rank\": \"\",\n           \"category\": \"\",\n           \"class\": \"my_new_value\"\n        }\n```"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Character Encoding",
  "body": "If your `external_user_id` contains character`/` you will need to replace this with `%2F` in the request. For example: `/OR0ScxA+=` needs to be sent as `%2FOR0ScxA+=`."
}
[/block]

## Example Code - Edit device tags
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request PUT \\\n     --header \"Content-Type: application/json\" \\\n     --data-binary \"{\n\\\"tags\\\":{\\\"a\\\":\\\"1\\\",\\\"foo\\\":\\\"\\\"}\n}\" \\\nhttps://onesignal.com/api/v1/apps/:app_id/users/:external_user_id",
      "language": "shell"
    }
  ]
}
[/block]
## Result Format - Edit device tags
[block:code]
{
  "codes": [
    {
      "code": "{\"success\": true }",
      "language": "javascript",
      "name": "200 OK"
    },
    {
      "code": "//if more than 100 tags sent per CALL\n\"errors\": [\n    \"Please limit your tag updates to 100 per request\"\n]\n//if tag limit is reached\n\"errors\": [\n    \"No apps are allowed to have more than NNN tags on a given player\"\n]\n//Integrations send an error message back as response to the HTTP call, this is not visible to end-user unless they open up their integration partner’s console.\n\"errors\": [\n    \"App is limited to a maximum of NNN tags on a given player\"\n]\n",
      "language": "javascript",
      "name": "400 & 40X"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Data Latency",
  "body": "A successful response means our database has received the request. This may take additional time for the tags to be available on the user. \n\nIf using [Message Personalization](doc:personalization), please allow 60+ seconds before sending your messages."
}
[/block]

[block:html]
{
  "html": "<div style=\"padding-top: 250px\"></div>"
}
[/block]