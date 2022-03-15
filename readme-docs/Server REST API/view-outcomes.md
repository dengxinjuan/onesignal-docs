---
title: "View Outcomes"
slug: "view-outcomes"
excerpt: "View the details of all the outcomes associated with your app"
hidden: false
createdAt: "2020-06-01T22:26:25.395Z"
updatedAt: "2020-08-28T03:04:21.358Z"
---
[block:callout]
{
  "type": "warning",
  "title": "Requires Authentication Key",
  "body": "Requires your OneSignal App's **REST API Key**, available in [Keys & IDs](doc:accounts-and-keys)."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Outcome Data Limitations",
  "body": "Outcomes are only accessible for around 30 days before deleted from our servers. You will need to export this data every month if you want to keep it."
}
[/block]
## Path Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-2": "<span class=\"label-all label-required\">Required</span> \nComma-separated list of names and the value (sum/count) for the returned outcome data. \n*Note: Clicks only support count aggregation.*\n\nFor out-of-the-box OneSignal outcomes such as click and session duration, please use the “os” prefix with two underscores. For other outcomes, please use the name specified by the user.\n\nExample:os______session_duration.count,os______click.count,CustomOutcomeName.sum",
    "0-0": "`outcome_names`",
    "0-1": "String",
    "1-0": "`outcome_names[]`\n(if outcome names have commas in them)",
    "1-2": "<span class=\"label-all label-required\">Optional</span> \nIf outcome names contain any commas, then please specify only one value at a time.\n\nExample: outcome_names[]=os__click.count&outcome_names[]=Sales, Purchase.count\nwhere “Sales, Purchase” is the custom outcomes with a comma in the name.",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "String",
    "2-2": "<span class=\"label-all label-required\">Optional</span> \nTime range for the returned data. The values can be 1h (for the last 1 hour data), 1d (for the last 1 day data), or 1mo (for the last 1 month data).\n\nDefault is *1h* if the parameter is omitted.",
    "3-2": "<span class=\"label-all label-required\">Optional</span> \nPlatform id. Refer [device's platform ids](https://documentation.onesignal.com/reference/add-a-device) for values.\n\nExample: \noutcome_platform=0 for iOS\noutcome_platform=7,8 for Safari and Firefox\n\nDefault is *data from all platforms *if the parameter is omitted.",
    "4-2": "<span class=\"label-all label-required\">Optional</span> \nAttribution type for the outcomes. The values can be direct or influenced or unattributed.\n\nExample: outcome_attribution=direct\n\nDefault is *total* (returns direct+influenced+unattributed) if the parameter is omitted.",
    "2-0": "`outcome_time_range`",
    "3-0": "`outcome_platforms`",
    "4-0": "`outcome_attribution`"
  },
  "cols": 3,
  "rows": 5
}
[/block]
## Example Code - View Outcomes
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n    --header \"Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\" \\\n    \"https://onesignal.com/api/v1/apps/{app_id}/outcomes?outcome_names=os__click.count&outcome_platforms=0\"",
      "language": "shell",
      "name": "Shell"
    },
    {
      "code": "$ch = curl_init();\n\ncurl_setopt($ch, CURLOPT_URL, 'https://onesignal.com/api/v1/apps/{appId}/outcomes?outcome_names=os__click.count&outcome_platforms=0');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');\n\n\n$headers = array();\n$headers[] = 'Authorization: Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj';\ncurl_setopt($ch, CURLOPT_HTTPHEADER, $headers);\n\n$result = curl_exec($ch);\nif (curl_errno($ch)) {\n    echo 'Error:' . curl_error($ch);\n}\ncurl_close($ch);",
      "language": "php",
      "name": "PHP"
    }
  ]
}
[/block]

## Returned Fields
- `id` - name of the outcome
- `value` - returned value of the aggregation type
- `aggregation` - aggregation type (sum or count) requested for the outcome



## Result Format - View notification
[block:code]
{
  "codes": [
    {
      "code": "{\n \"outcomes\": [\n   {\n     \"id\": \"os__session_duration\",\n     \"value\": 100,\n     \"aggregation\": \"sum\"\n   },\n   {\n     \"id\": \"os__click\",\n     \"value\": 4,\n     \"aggregation\": \"count\"\n   },\n   {\n     \"id\": \"Sales\",\n     \"value\": 348,\n     \"aggregation\": \"sum\"\n   }\n ]\n}",
      "language": "json",
      "name": "200 OK"
    }
  ]
}
[/block]