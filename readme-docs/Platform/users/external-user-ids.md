---
title: "External User Ids"
slug: "external-user-ids"
excerpt: "Add your custom User Ids within OneSignal."
hidden: false
createdAt: "2021-07-14T00:16:16.233Z"
updatedAt: "2022-03-13T23:00:25.702Z"
---
OneSignal's `external_user_id` is a string data type property you can set to associate your own User Ids to each of their corresponding OneSignal device records.
[block:callout]
{
  "type": "info",
  "title": "Benefits of External User Id",
  "body": "The benefits of External User Id include the ability to:\n1. Target devices with push and email through our [Create Notification REST API Call](ref:create-notification) using the `include_external_user_ids` targeting parameter. Also see [Sending Transactional Messages](doc:transactional-messages).\n2. Use the CSV [List Upload](doc:import-user-tags) feature to tag and segment users based on the `external_user_id`'s set in our system.\n3. Update tags with our [API Edit Tags with External User Id](https://documentation.onesignal.com/reference/edit-tags-with-external-user-id) endpoint.\n4. Leverage our integrations with [HubSpot](doc:hubspot), [Mixpanel](https://documentation.onesignal.com/docs/mixpanel), [Amplitude](https://documentation.onesignal.com/docs/amplitude), and [Segment.com](https://documentation.onesignal.com/docs/segment-onesignal-integration) which leverage External User Id to sync cohorts / user properties"
}
[/block]


OneSignal creates and stores device & channel level data under a unique OneSignal Id called the `player_id`. A single user can have multiple `player_id` records based on how many devices, email addresses, and phone numbers they use to interact with your app/site.

For example, a user: 
1. downloads your app on Android, gets a unique Android Push `player_id` record.
2. subscribes to your website, a new `player_id` is created for the web push record.
3. downloads your app on iOS, gets a unique iOS Push `player_id` record.
4. provides you their Email Address, which creates an Email channel record `player_id`.
5. provides their Phone Number, which creates an SMS channel record `player_id`.

This is 5 `player_id` records in OneSignal for the 1 User.

You can send OneSignal your unique User Id called the `external_user_id` to associate multiple `player_id` records.

# Linking an External User Id to the OneSignal Player Id

The External User Id can be set with the following options:
1. Client-side SDK (recommended) `setExternalUserId` method.
2. Server-side API [Edit device](ref:edit-device) endpoint.
3. Dashboard CSV [User Attributes Importer](doc:import-user-tags).

#`setExternalUserId` Method

The OneSignal SDK `setExternalUserId` method should be called when the user logs into the app/site and within the callback of the `setEmail` and `setSMSNumber` methods to link the records together.
[block:code]
{
  "codes": [
    {
      "code": "let externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\n\nOneSignal.push(function() {\n  OneSignal.setExternalUserId(externalUserId);\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "String externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 4.0.0+\nOneSignal.setExternalUserId(externalUserId, new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n    @Override\n    public void onSuccess(JSONObject results) {\n        try {\n            if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n                boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for push status: \" + isPushSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n\n        try {\n            if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n                boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for email status: \" + isEmailSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n        try {\n            if (results.has(\"sms\") && results.getJSONObject(\"sms\").has(\"success\")) {\n                boolean isSmsSuccess = results.getJSONObject(\"sms\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for sms status: \" + isSmsSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void onFailure(OneSignal.ExternalIdError error) {\n        // The results will contain channel failure statuses\n        // Use this to detect if external_user_id was not set and retry when a better network connection is made\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with error: \" + error.toString());\n    }\n});",
      "language": "java"
    },
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.0.0+\nOneSignal.setExternalUserId(externalUserId, withSuccess: { results in\n    // The results will contain push and email success statuses\n    print(\"External user id update complete with results: \", results!.description)\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if let pushResults = results![\"push\"] {\n        print(\"Set external user id push status: \", pushResults)\n    }\n    if let emailResults = results![\"email\"] {\n        print(\"Set external user id email status: \", emailResults)\n    }\n    if let smsResults = results![\"sms\"] {\n        print(\"Set external user id sms status: \", smsResults)\n    }\n}, withFailure: {error in\n    print(\"Set external user id done with error: \" + error.debugDescription)\n})",
      "language": "swift"
    },
    {
      "code": "NSString* externalUserId = @\"123456789\"; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.0.0+\n[OneSignal setExternalUserId:externalUserId withSuccess:^(NSDictionary *results) {\n    // The results will contain push and email success statuses\n    NSLog(@\"External user id update complete with results: %@\", results.description);\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if (results[@\"push\"] && results[@\"push\"][@\"success\"])\n      NSLog(@\"Set external user id push status: %@\", results[@\"push\"][@\"success\"]);\n    // Verify the email is set or check that the results have an email success status\n    if (results[@\"email\"] && results[@\"email\"][@\"success\"])\n      NSLog(@\"Set external user id email status: %@\", results[@\"email\"][@\"success\"]);\n    // Verify the number is set or check that the results have an sms success status\n    if (results[@\"sms\"] && results[@\"sms\"][@\"success\"])\n      NSLog(@\"Set external user id sms status: %@\", results[@\"sms\"][@\"success\"]);\n} withFailure:^(NSError *error) {\n      NSLog(@\"External user id update failed with error: %@\", error);\n}];",
      "language": "objectivec"
    },
    {
      "code": "string externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 2.13.2+\nOneSignal.Current.SetExternalUserId(externalId, OneSignalSetExternalUserId);\n\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the number is set or check that the results have an sms success status\n  if (results.ContainsKey(\"sms\"))\n  {\n    Dictionary<string, object> smsStatusDict = results[\"sms\"] as Dictionary<string, object>;\n    if (smsStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for sms with results: \" + smsStatusDict[\"success\"] as string);\n    }\n  }\n}",
      "language": "csharp",
      "name": "Unity-C#"
    },
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.9.3+\nOneSignal.setExternalUserId(externalUserId, (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n\n  // Verify the number is set or check that the results have an sms success status\n  if (results.sms && results.sms.success) {\n    console.log('Results of setting external user id sms status:');\n    console.log(results.sms.success);\n  }\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.9.3+\nOneSignal.shared.setExternalUserId(externalUserId).then((results) {\n  log(results.toString());\n}).catchError((error) {\n  log(error.toString());\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 2.11.2+\nwindow.plugins.OneSignal.setExternalUserId(externalUserId, (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n\n  // Verify the number is set or check that the results have an sms success status\n  if (results.sms && results.sms.success) {\n    console.log('Results of setting external user id sms status:');\n    console.log(results.sms.success);\n  }\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "string externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.8.0+\nOneSignal.Current.SetExternalUserId(externalId);\n\n//Callback available in SDK Version 3.8.0+\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n}",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***identifier authentication token*** and send it to your site. 
[block:callout]
{
  "type": "warning",
  "title": "Warning - Android SDK Data Synchronization",
  "body": "The OneSignal Android SDKs leverage cacheing on `external_user_id` and [Data Tags](doc:add-user-data-tags).\n\nIf setting `external_user_id` through the [Edit device](ref:edit-device) API Endpoint, then use the same endpoint to remove the `external_user_id` upon the user logging out of the app.\n\nThe `removeExternalUserId` method will not work unless the `external_user_id` is set first with the `setExternalUserId` method on Android.\n\nThis is only applicable on the OneSignal Android Mobile App SDKs."
}
[/block]
# Disassociating the External User Id

External User Ids can be disassociated from the current device's `player_id` record using the OneSignal SDK `removeExternalUserId` method.

# `removeExternalUserId` Method

 It is recommended to call this method when the user logs out of your app. 
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.removeExternalUserId();\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "// Removing External User Id with Callback Available in SDK Version 3.13.0+\nOneSignal.removeExternalUserId(new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n  @Override\n    public void onComplete(JSONObject results) {\n    // The results will contain push and email success statuses\n    OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Remove external user id done with results: \" + results.toString());\n    \n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n      boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Remove external user id for push status: \" + isPushSuccess);\n    }\n    \n    // Verify the email is set or check that the results have an email success status\n    if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n      boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Remove external user id for email status: \" + isEmailSuccess);\n    }\n  }\n});",
      "language": "java"
    },
    {
      "code": "// Removing External User Id with Callback Available in SDK Version 2.13.1+\nOneSignal.removeExternalUserId({ results in\n    // The results will contain push and email success statuses\n    print(\"External user id update complete with results: \", results!.description)\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if let pushResults = results![\"push\"] {\n        print(\"Remove external user id push status: \", pushResults)\n    }\n    // Verify the email is set or check that the results have an email success status\n    if let emailResults = results![\"email\"] {\n        print(\"Remove external user id email status: \", emailResults)\n    }\n})",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "// Removing External User Id with Callback Available in SDK Version 2.13.0+\n[OneSignal removeExternalUserId:^(NSDictionary *results) {\n  // The results will contain push and email success statuses\n  NSLog(@\"External user id update complete with results: %@\", results.description);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results[\"push\"] && results[\"push\"][\"success\"])\n    NSLog(@\"Remove external user id push status: %@\", results[\"push\"][\"success\"]);\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results[\"email\"] && results[\"email\"][\"success\"])\n    NSLog(@\"Remove external user id email status: %@\", results[\"email\"][\"success\"]);\n}];",
      "language": "objectivec",
      "name": "Objective-C"
    },
    {
      "code": "// Removing External User Id with Callback Available in SDK Version 2.13.2+\nOneSignal.Current.RemoveExternalUserId(OneSignalSetExternalUserId);\n\n//See setExternalUserId method for callback Available in SDK Version 2.13.2+",
      "language": "csharp",
      "name": "Unity-C#"
    },
    {
      "code": "// Remove External User Id with Callback Available in SDK Version 3.7.0+\nOneSignal.removeExternalUserId((results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of removing external user id');\n  console.log(results);\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of removing external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of removoing external user id email status:');\n    console.log(results.email.success);\n  }\n});\n\n//Available in SDK Version 3.6.5-\n//OneSignal.removeExternalUserId()",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "//usually called after the user logs out of your app\nOneSignal.shared.removeExternalUserId()",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Remove External User Id with Callback Available in SDK Version 2.9.0+\nwindow.plugins.OneSignal.removeExternalUserId((results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of removing external user id');\n  console.log(results);\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of removing external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of removoing external user id email status:');\n    console.log(results.email.success);\n  }\n});\n\n//Available in SDK Version 2.8.4-\n//window.plugins.OneSignal.removeExternalUserId();",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "// Removing External User Id with Callback Available in SDK Version 3.8.0+\nOneSignal.Current.RemoveExternalUserId(OneSignalSetExternalUserId);\n\n//See setExternalUserId method for callback Available in SDK Version 3.8.0+",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

----

#Retrieving External User Id

## `getExternalUserId` Method

**Web only** - Gets the value stored locally on the user's browser.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.getExternalUserId().then(function(externalUserId){\n    console.log(\"externalUserId: \", externalUserId);\n  });\n});",
      "language": "javascript",
      "name": "Web (js)"
    }
  ]
}
[/block]