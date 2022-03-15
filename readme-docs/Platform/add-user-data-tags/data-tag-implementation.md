---
title: "Data Tag SDK Implementation"
slug: "data-tag-implementation"
excerpt: "Available options to add Data Tags to devices with OneSignal."
hidden: false
createdAt: "2021-01-22T19:32:55.308Z"
updatedAt: "2021-12-15T01:11:26.454Z"
---
OneSignal tags are custom `key : value` pairs of string data for setting custom user or event properties. This guide details how to add tags through the SDK, but tags can also be added through:
- **Server-side APIs**: [Edit device](ref:edit-device) & [Edit tags with external user id](ref:edit-tags-with-external-user-id). 
- **List Upload**: [Importing User Attributes or Tags](doc:import-user-tags). 

Tags should be added as `string` data, but any numbers/integers/decimals will be detected automatically on our backend and available for use.
[block:callout]
{
  "type": "warning",
  "title": "Not for User IDs",
  "body": "Do not use tags for setting \"user Ids\" or sending messages to individual users. Instead use the <a href=\"https://documentation.onesignal.com/docs/external-user-ids\" target=\"_blank\">External User Id</a> property.\n\nOneSignal is not meant to be a database. If you wish to store complex user attributes, we recommend using a dedicated [Database, DMP, or CRM](doc:internal-database-crm)."
}
[/block]
#SDK Tagging Methods

Tag a user based on an event of your choosing so later you can create [Segments](doc:segmentation) or [Message Personalization](doc:personalization). Recommend using `sendTags` over `sendTag` if you need to set more than one tag on a user at a time.

iOS SDK implements callbacks to verify tags were successfully added. Android saves tags to device cache and will retry updating the tag automatically upon a stable network connection being established. 

## `sendTag` Method

Tag a user based on an app event of your choosing so later you can later create segments to target these users. We recommend using `sendTags` over `sendTag` if you need to add or update more than one tag on a user at a time.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "String, NSString*",
    "1-1": "String, NSString*",
    "0-0": "`key`",
    "1-0": "`value`",
    "0-2": "Key of your choosing to create or update",
    "1-2": "Value to set on the key. _NOTE:_ Passing in a blank String deletes the key, you can also call `deleteTag` or `deleteTags`.",
    "2-0": "`onSuccess(Optional)`",
    "3-0": "`onFailure(Optional)`",
    "2-1": "OneSignalResultSuccessBlock",
    "3-1": "OneSignalFailureBlock",
    "2-2": "**iOS** Called if there were no errors sending the tag.",
    "3-2": "**iOS** Called if there was an error.\n\n**Android** Will retry automatically upon a stable network connection.",
    "4-0": "`callback` (Web)",
    "4-1": "Function",
    "4-2": "Call back to be fired when the tags have been sent to our server and a response has been returned. The first parameter of the callback is an object of the tags you sent (key-value pairs)."
  },
  "cols": 3,
  "rows": 5
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "//Returns a Promise resolving with the object key-pairs of the tags you sent, \n//or rejected with an error.\n\n//Example with callback\nOneSignal.push(function() {\n  OneSignal.sendTag(\"key\", \"value\", function(tagsSent) {\n    // Callback called when tags have finished sending\n  });\n});\n\n// Another callback example\nOneSignal.push(function() {            \n  OneSignal.sendTag(\"key\", \"value\").then(function(tagsSent) {\n    // Callback called when tags have finished sending\n  }); \n});\n\n//Example without callback\nOneSignal.push(function() {\n  /* These examples are all valid */\n  OneSignal.sendTag(\"key\", \"value\"); \n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "OneSignal.sendTag(\"key\", \"value\");\n",
      "language": "java"
    },
    {
      "code": "OneSignal.sendTag(\"key\", value: \"value\")",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[OneSignal sendTag:@\"key\" value:@\"value\"];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.SendTag(\"key\", \"value\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.sendTag(\"key\", \"value\");",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "window.plugins.OneSignal.sendTag(\"key\", \"value\");",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//Example without callback\nOneSignal.shared.sendTag(\"test\", \"value\");\n\n//Example with callback\nOneSignal.shared.sendTag(\"key\", \"value\").then((response) {\n  print(\"Successfully sent tags with response: $response\");\n}).catchError((error) {\n  print(\"Encountered an error sending tags: $error\");\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.Current.SendTag(\"key\", \"value\");",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.SendTag(\"CoronaTag1\", \"value1\")",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]
## `sendTags` Method

Tag a user based on an app event of your choosing, so that later you can create segments to target these users.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "JSONObject, NSDictionary*",
    "0-0": "`keyValues`",
    "0-2": "Key value pairs of your choosing to create or update. _NOTE:_ Passing in a blank `NSString*` as a value deletes the key, you can also call `deleteTag` or `deleteTags`.",
    "1-0": "`onSuccess(Optional)`",
    "2-0": "`onFailure(Optional)`",
    "1-1": "OneSignalResultSuccessBlock",
    "2-1": "OneSignalFailureBlock",
    "2-2": "**iOS** Called if there was an error.\n\n**Android** Will retry automatically upon a stable network connection.",
    "1-2": "**iOS** Called if there were no errors sending the tag.",
    "3-0": "`callback` (Web)",
    "3-1": "Function",
    "3-2": "Call back to be fired when the tags have been sent to our server and a response has been returned. The first parameter of the callback is an object of the tags you sent (key-value pairs)."
  },
  "cols": 3,
  "rows": 4
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "//Returns a Promise resolving with the object key-pairs of the tags you sent, \n//or rejected with an error.\n\n//Example with callback\nOneSignal.push(function() {\n  OneSignal.sendTags({\n    key: 'value',\n    key2: 'value2',\n  }, function(tagsSent) {\n    // Callback called when tags have finished sending    \n  });\n});\n\n//Another example with callback\nOneSignal.push(function() {\n  OneSignal.sendTags({\n    key: 'value',\n    key2: 'value2',\n  }).then(function(tagsSent) {\n    // Callback called when tags have finished sending    \n  });\n});\n\n//Example without callback\nOneSignal.push(function() {\n  OneSignal.sendTags({key: 'value'});\n});\n\n//Another example without callback\nOneSignal.push(function() {\n  OneSignal.sendTags({\n    key: 'value',\n    key2: 'value2',\n  });\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "JSONObject tags = new JSONObject();\ntags.put(\"key1\", \"value1\");\ntags.put(\"key2\", \"value2\");\nOneSignal.sendTags(tags);",
      "language": "java"
    },
    {
      "code": "OneSignal.sendTags([\"key1\": \"value1\", \"key2\": \"value2\"])",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[OneSignal sendTags:@{@\"key1\" : @\"value1\", @\"key2\" : @\"value2\"}];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.SendTags(new Dictionary<string, string>() { {\"UnityTestKey2\", \"value2\"}, {\"UnityTestKey3\", \"value3\"} });",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.sendTags({key: \"value\", key2: \"value2\"});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "window.plugins.OneSignal.sendTags({key: \"value\", key2: \"value2\"});\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//Example without callback\nOneSignal.shared.sendTags({\"test_key_1\" : \"test_value_1\", \"test_key_2\" : \"test_value_2\"});\n\n//Example with callback\nOneSignal.shared.sendTags({\"test_key_1\" : \"test_value_1\", \"test_key_2\" : \"test_value_2\"})\n.then((response) {\n  print(\"Successfully sent tags with response: $response\");\n}).catchError((error) {\n  print(\"Encountered an error sending tags: $error\");\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.Current.SendTags(new Dictionary<string, string>() { {\"TestKey2\", \"value2\"}, {\"TestKey3\", \"value3\"} });\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.SendTags({[\"CoronaTag2\"] = \"value2\",[\"CoronaTag3\"] = \"value3\"})",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]

## `getTags` Method

Retrieve a list of tags as that have been set on the user from the OneSignal server.
Android will provide a cached copy if there is no network connection.
[block:code]
{
  "codes": [
    {
      "code": "//Returns a Promise resolving with the object key-pairs of the tags you sent\n//or rejected with an error.\n\n//All examples are valid.\n\nOneSignal.push(function() {\n  OneSignal.getTags(function(tags) {\n    // All the tags stored on the current webpage visitor\n  });\n});\n\n\nOneSignal.push(function() {\n  OneSignal.getTags().then(function(tags) {\n    // All the tags stored on the current webpage visitor\n  });\n});\n\nOneSignal.push([\"getTags\", function(tags) {\n\tconsole.log(\"OneSignal getTags:\");\n  console.log(tags);\n}]);",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "//The tagsAvailable callback does not return on the Main(UI) Thread, so be aware when modifying UI in this method.\nOneSignal.getTags(new OSGetTagsHandler() {\n\t@Override\n\tpublic void tagsAvailable(JSONObject tags) {\n    //tags can be null\n    if (tags !== null) {\n      Log.d(\"debug\", tags.toString());\n    }\n  }\n});",
      "language": "java"
    },
    {
      "code": "OneSignal.getTags({ tags in\n\tprint(\"tags - \\(tags!)\")\n}, onFailure: { error in\n\tprint(\"Error getting tags - \\(error?.localizedDescription)\")\n})",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[oneSignal getTags:^(NSDictionary* tags) {\n\tNSLog(@\"%@\", tags);\n}];",
      "language": "objectivec"
    },
    {
      "code": "void SomeMethod() {\n\t\tOneSignal.GetTags(TagsReceived);\n\t}\n\n\tprivate void TagsReceived(Dictionary<string, object> tags) {\n\t\tforeach (var tag in tags)\n\t\t\tprint(tag.Key + \":\" + tag.Value);\n\t}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.getTags((receivedTags) => {\n    console.log(receivedTags);\n})",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "window.plugins.OneSignal.getTags(function(tags) {\n  console.log('Tags Received: ' + JSON.stringify(tags));\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "Map<String, dynamic> tags = await OneSignal.shared.getTags();\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "void SomeMethod() {\n\t\tOneSignal.GetTags(TagsReceived);\n\t}\n\n\tprivate void TagsReceived(Dictionary<string, object> tags) {\n\t\tforeach (var tag in tags)\n\t\t\tprint(tag.Key + \":\" + tag.Value);\n\t}\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "function printAllTags(tags)\n   for key,value in pairs(tags) do\n      print( key, value )\n   end\nend\n\nOneSignal.GetTags(printAllTags)",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "1-1": "OneSignalResultSuccessBlock",
    "1-0": "`successBlock`",
    "1-2": "Called when tags are received from OneSignal's server.",
    "2-2": "Called if there was an error.",
    "2-0": "`onFailure(Optional)`",
    "2-1": "OneSignalFailureBlock",
    "0-0": "`tags`",
    "0-1": "JSON Object of `String` data",
    "0-2": "Contains key-value pairs retrieved from the OneSignal server.",
    "3-0": "`tagsReceivedCallBack` (Web)",
    "3-1": "Function (Web)",
    "3-2": "Callback to be fired when the list of tags has been retrieved. The first parameter of the callback is an object containing key-value pairs of the tags."
  },
  "cols": 3,
  "rows": 4
}
[/block]

## `deleteTag` Method

Deletes a single tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`key`",
    "0-1": "String, NSString*",
    "0-2": "Key to remove",
    "1-0": "`onSuccess(Optional)`",
    "1-1": "OneSignalResultSuccessBlock",
    "1-2": "**iOS** Called if there were no errors",
    "2-0": "`onFailure(Optional)`",
    "2-1": "OneSignalFailureBlock",
    "2-2": "**iOS** Called if there was an error\n\n**Android** Will retry automatically upon a stable network connection."
  },
  "cols": 3,
  "rows": 3
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "//Returns a Promise resolving with the object key-pair of the tag you deleted, \n//or rejected with an error.\nOneSignal.push(function() {\n  OneSignal.deleteTag(\"tagKey\");\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "OneSignal.deleteTag(\"key\");",
      "language": "java"
    },
    {
      "code": "OneSignal.deleteTag(\"key\")",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[OneSignal deleteTag:@\"key\"];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.DeleteTag(\"key\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.deleteTag(\"key\");",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "window.plugins.OneSignal.deleteTag(\"key\");\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "await OneSignal.shared.deleteTag(\"test\");\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.DeleteTag(\"key\");\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.DeleteTag(\"CoronaTag1\")",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]
## `deleteTags` Method

Deletes one or more tags that were previously set on a user with `sendTag` or `sendTags`.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`keys`",
    "0-1": "Array, Collection<String>, NSArray*",
    "0-2": "Keys to remove.",
    "1-0": "`onSuccess(Optional)`",
    "1-1": "OneSignalResultSuccessBlock",
    "1-2": "**iOS** Called if there were no errors",
    "2-0": "`onFailure(Optional)`",
    "2-1": "OneSignalFailureBlock",
    "2-2": "**iOS** Called if there was an error\n\n**Android** Will retry automatically upon a stable network connection.",
    "3-0": "`callback` (Web)",
    "3-1": "Function",
    "3-2": "Callback to be fired when the list of tags has been removed. The first parameter of the callback is an array of the tags that were deleted."
  },
  "cols": 3,
  "rows": 4
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "//Returns a Promise resolving with the object key-pair of the tag you deleted, \n//or rejected with an error.\n\n//All examples are valid.\n\nOneSignal.push(function() {\n  OneSignal.deleteTags([\"key1\", \"key2\"], function(tagsDeleted) {\n    // Callback called when tags have been deleted    \n  });\n});\n\nOneSignal.push(function() {\n  OneSignal.deleteTags([\"key1\", \"key2\"]).then(function(tagsDeleted) {\n  });\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "Collection<String> tempList = new ArrayList<String>();\ntempList.add(key);\nOneSignal.deleteTags(tempList);",
      "language": "java"
    },
    {
      "code": "OneSignal.deleteTags([\"key1\", \"key2\"])",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[OneSignal deleteTags:@[@\"key1\", @\"key2\"]];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.DeleteTags(new List<string>() {\"UnityTestKey2\", \"UnityTestKey3\" })",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.deleteTags([\"key1\", \"key2\"]);\n",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "window.plugins.OneSignal.deleteTags([\"key1\", \"key2\"]);\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "await OneSignal.shared.deleteTags([\"test_key_1\", \"test_key_2\"]);\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.Current.DeleteTags(new List<string>() {\"TestKey2\", \"TestKey3\" })\n\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.DeleteTags({\"key1\", \"key2\"})\n",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]

----

#Tagging Examples

##Tag Based on Browser or Operating System

OneSignal currently tracks `device type`, which you can use to create [Segments](doc:segmentation) to target Android and iOS mobile app subscribers and Web Push subscribers independently. 

If you want to segment by mobile web vs. desktop web subscribers, you can use this example code on the site to tag automatically once detected:
[block:code]
{
  "codes": [
    {
      "code": "// Example from Stackoverflow https://stackoverflow.com/questions/1005153/auto-detect-mobile-browser-via-user-agent\nOneSignal.push(function() {\n  if (navigator.appVersion.indexOf(\"Mobile\") > -1) {\n    OneSignal.sendTag(\"device_type\",\"mobile\");\n  } else {\n    OneSignal.sendTag(\"device_type\",\"desktop\");\n  }\n});",
      "language": "javascript"
    }
  ]
}
[/block]
For segmenting around all different types of Operating Systems and Browsers, you can use this more in-depth tagging options:
[block:code]
{
  "codes": [
    {
      "code": "// Example from Stackoverflow: https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript\nvar os = \"Unknown OS\";\nif (navigator.userAgent.indexOf(\"Win\") != -1) os = \"Windows\";\nif (navigator.userAgent.indexOf(\"Mac\") != -1) os = \"Macintosh\";\nif (navigator.userAgent.indexOf(\"Linux\") != -1) os = \"Linux\";\nif (navigator.userAgent.indexOf(\"Android\") != -1) os = \"Android\";\nif (navigator.userAgent.indexOf(\"like Mac\") != -1) os = \"iOS\";\nconsole.log('Your os: ' + os);\n\nvar browserType = \"Unknown Browser Type\";\nif (navigator.userAgent.indexOf(\"Safari\") != -1) browserType = \"Safari\";\nif (navigator.userAgent.indexOf(\"Chrome\") != -1) browserType = \"Chrome\";\nif (navigator.userAgent.indexOf(\"OPR\") != -1) browserType = \"Opera\";\nif (navigator.userAgent.indexOf(\"Firefox\") != -1) browserType = \"Firefox\";\nconsole.log('Your Browser: ' + browserType);\n\nOneSignal.push(function() {\n  OneSignal.sendTags({\n    os: os,\n    browserType: browserType,\n  }).then(function(tagsSent) {\n    // Callback called when tags have finished sending \n    console.log(\"tagsSent: \", tagsSent);\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
##Get and Delete All Tags

Example of fetching all tags and deleting them.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.getTags({tagsReceived in\n    print(\"tagsReceived: \", tagsReceived.debugDescription)\n    var tagsArray = [String]()\n    if let tagsHashableDictionary = tagsReceived {\n      tagsHashableDictionary.forEach({\n        if let asString = $0.key as? String {\n          tagsArray += [asString]\n        }\n      })\n    }\n    print(\"tagsArray: \", tagsArray)\n    OneSignal.deleteTags(tagsArray, onSuccess: { tagsDeleted in\n        print(\"tags deleted success: \", tagsDeleted.debugDescription)\n    }, onFailure: { error in\n        print(\"deleting tags error: \", error.debugDescription)\n    })\n})",
      "language": "swift"
    }
  ]
}
[/block]

#Additional Guides

See our [Use Cases & Best Practices](doc:use-cases-best-practices) guide for more tag examples like:

- [Auto-Segment By Subscription Page](doc:auto-segment-users-by-subscription-page) - tag users based on the page they subscribed on.
- [Auto-Segment By Page Visit](doc:auto-segment-users-by-page-visit) - tag users based on how many times they visit certain topics of your app or site.
- [Auto-Segment By Notification Topic](doc:segment-based-on-notification-clicks) - tag users based on types of notifications they click.
- [Abandoned Cart](doc:abandoned-cart) - remind users x amount of time after they added an item to the cart.

----

#Troubleshooting

See our <a href="https://documentation.onesignal.com/docs/tag-troubleshooting" target="_blank">Tag Troubleshooting</a> for details.