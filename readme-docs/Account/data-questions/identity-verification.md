---
title: "Identity Verification"
slug: "identity-verification"
excerpt: "Security feature to authenticate your external user ids and emails sent to OneSignal."
hidden: false
createdAt: "2018-03-07T22:19:52.323Z"
updatedAt: "2021-07-15T22:10:07.570Z"
---
OneSignal supports a higher security method known as *Identity Verification*. This helps prevent users from impersonating one another by generating a user-specific token on your server, if you have one.

Enabling Identity Verification applies to:
- Adding Email and SMS records into OneSignal AND associated tags.
- Setting `external_user_id` for any record across all channels (Push, Email, SMS)

It can be enabled in the Dashboard > Settings > Keys & IDs

Once enabled or disabled, this will take up to 10 minutes to process.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2828317-Screen_Shot_2020-12-03_at_2.10.53_PM.png",
        "Screen Shot 2020-12-03 at 2.10.53 PM.png",
        1181,
        633,
        "#e2e3e5"
      ]
    }
  ]
}
[/block]
We **highly recommend** enabling identity verification for apps and websites that use setting `external_user_ids` and/or [Email Messaging](doc:email-overview). For apps and websites that are 'backendless' and do not run their own servers, we suggest either creating a minimal server that just verifies users, saving the OneSignal User ID records to your database, or avoid sending sensitive information in user tags and notifications.

# Auth Hash Generation

Auth hashes are expected to be a HMAC on a SHA-256 of the [OneSignal REST API Key](doc:accounts-and-keys) and the `<protected_field_value>`.

## Example Auth Hash Generation Code
When identity verification is enabled, OneSignal will look for a SHA-256 hash of a user's email address or external user identifier from your server. See the following code examples for how to generate these hashes on your server:
[block:code]
{
  "codes": [
    {
      "code": "OpenSSL::HMAC.hexdigest('sha256', ONESIGNAL_API_KEY, identifier)\nOpenSSL::HMAC.hexdigest('sha256', ONESIGNAL_API_KEY, email_address)",
      "language": "ruby"
    },
    {
      "code": "<?php\necho hash_hmac('sha256', $email_address, $ONESIGNAL_REST_API_KEY);\necho hash_hmac('sha256', $identifier, $ONESIGNAL_REST_API_KEY);\n?>",
      "language": "php"
    },
    {
      "code": "const crypto = require('crypto');\nconst hmac = crypto.createHmac('sha256', ONESIGNAL_REST_API_KEY);\nhmac.update(email_address);\n// or hmac.update(identifier);\nconsole.log(hmac.digest('hex'));",
      "language": "javascript",
      "name": "Node.js"
    }
  ]
}
[/block]

# SDK `setEmail` Method

Your backend can generate an ***email authentication token*** and send it to your app to include in the `setEmail` method.
[block:code]
{
  "codes": [
    {
      "code": "var emailAddress = \"example@domain.com\";\nvar emailAuthHash = \"\"; // Email auth hash generated from your server\nOneSignal.push(function() {\n  OneSignal.setEmail(emailAddress, {\n   emailAuthHash: emailAuthHash\n  });\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "String email = \"example@domain.com\";\nString emailAuthHash = \"...\"; // Email auth hash generated from your server\nOneSignal.setEmail(email, emailAuthHash, new OneSignal.EmailUpdateHandler() {\n  @Override\n  public void onSuccess() {\n    // Email successfully synced with OneSignal\n  }\n\n  @Override\n  public void onFailure(OneSignal.EmailUpdateError error) {\n    // Error syncing email, check error.getType() and error.getMessage() for details\n  }\n});",
      "language": "java"
    },
    {
      "code": "let emailAuthHash = //generated on your backend server\nlet email = \"example@domain.com\";\nOneSignal.setEmail(email, withEmailAuthHashToken: emailAuthHash, withSuccess: {\n    //The email has successfully been set.\n}) { (error) in\n    //Encountered an error while setting the email.\n};",
      "language": "swift"
    },
    {
      "code": "NSString *hashToken = //hash token from your server\nNSString *emailAddress = @\"example@domain.com\";\n[OneSignal setEmail:emailAddress withEmailAuthHashToken:hashToken onSuccess: ^() {\n    //The email has successfully been set.\n} onFailure: ^(NSError *error) {\n    //Encountered an error while setting the email.\n}];",
      "language": "objectivec"
    },
    {
      "code": "string emailAuthToken = \"\"; //from your backend server\n\nOneSignal.SetEmail(\"example@domain.com\", emailAuthToken, () => {\n    //Successfully set email\n}, (error) => {\n    //Encountered error setting email\n});",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "var email = \"test@test.com\";//email you pull from app\nvar sha_token = null;//pull from your server or keep as null\n\nOneSignal.setEmail(email, sha_token, (error) => {\n    //handle error if it occurred\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "let emailAuthToken = \"\"; //from your backend server\n\nwindow.plugins.OneSignal.setEmail(\"example@domain.com\", emailAuthToken, function() {\n    //Successfully set email\n\n}, function(error) {\n    //encountered an error setting email\n    \n});",
      "language": "javascript",
      "name": "Cordova"
    },
    {
      "code": "String tokenFromServer = \"\";\n\nOneSignal.shared.setEmail(email: \"test@example.com\", emailAuthHashToken: tokenFromServer).then((result) {\n\t//request succeeded\n}).catchError((error) {\n\t//encountered an error\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "string email = \"example@domain.com\";\nstring emailAuthCode = ; //generated on your backend server\nOneSignal.SetEmail(email, emailAuthCode);\n\n// Optionally, you can also use callbacks\nOneSignal.Current.SetEmail(email, emailAuthCode, () => {\n\t//handle success\n}, (error) => {\n\t//handle failure\n});",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

# SDK `setSMSNumber` Method

Your backend can generate an ***SMS authentication token*** and send it to your app to include in the `setSMSNumber` method.
[block:code]
{
  "codes": [
    {
      "code": "String smsNumber = \"+123456789\";\nString smsAuthHash = \"...\"; // SMS auth hash generated from your server\nOneSignal.setSMSNumber(smsNumber, smsAuthHash, new OneSignal.OSSMSUpdateHandler() {\n  @Override\n  public void onSuccess(JSONObject result) {\n    // SMS successfully synced with OneSignal\n  }\n\n  @Override\n  public void onFailure(OneSignal.OSSMSUpdateError error) {\n  \t// Error syncing SMS, check error.getType() and error.getMessage() for details\n  }\n});",
      "language": "java"
    },
    {
      "code": "let smsHashToken = \"...\" //generated on your backend server\nlet smsNumber = \"+123456789\"\nOneSignal.setSMSNumber(smsNumber, withSMSAuthHashToken: smsHashToken, withSuccess: {\n    //The SMS number has successfully been set.\n}) { (error) in\n    //Encountered an error while setting the SMS number.\n}",
      "language": "swift"
    },
    {
      "code": "NSString *smsHashToken = @\"...\"; //generated on your backend server\nNSString *smsNumber = @\"+123456789\";\n[OneSignal setSMSNumber:smsNumber withSMSAuthHashToken:smsHashToken withSuccess:^(NSDictionary *results) {\n  // SMS successfully synced with OneSignal\n} withFailure:^(NSError *error) {\n  // Error syncing SMS, check error.getType() and error.getMessage() for details\n}];",
      "language": "objectivec"
    }
  ]
}
[/block]

# SDK `setExternalUserId` Method

Your backend can generate an ***email authentication token*** and send it to your app to include in the `setExternalUserId` method.
[block:code]
{
  "codes": [
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\nlet externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n\nOneSignal.push(function() {\n  OneSignal.setExternalUserId(externalUserId, externalUserIdAuthHash);\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "String externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\nString externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 3.15.6+\nOneSignal.setExternalUserId(externalUserId, externalUserIdAuthHash, new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n  @Override\n  public void onComplete(JSONObject results) {\n    // The results will contain push and email success statuses\n    OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with results: \" + results.toString());\n\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n      boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for push status: \" + isPushSuccess);\n    }\n    \n    // Verify the email is set or check that the results have an email success status\n    if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n      boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Sets external user id for email status: \" + isEmailSuccess);\n    }\n  }\n});",
      "language": "java"
    },
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\nlet externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 2.16.0+\nOneSignal.setExternalUserId(externalUserId, externalUserIdAuthHash, withCompletion: { results in\n  // The results will contain push and email success statuses\n  print(\"External user id update complete with results: \", results!.description)\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if let pushResults = results![\"push\"] {\n    print(\"Set external user id push status: \", pushResults)\n  }\n  if let emailResults = results![\"email\"] {\n      print(\"Set external user id email status: \", emailResults)\n  }\n})",
      "language": "swift"
    },
    {
      "code": "NSString* externalUserId = @\"123456789\"; // You will supply the external user id to the OneSignal SDK\nNSString* externalUserIdAuthHash = @\"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 2.16.0+\n[OneSignal setExternalUserId:externalUserId, externalUserIdAuthHash  withCompletion:^(NSDictionary *results) {\n  // The results will contain push and email success statuses\n  NSLog(@\"External user id update complete with results: %@\", results.description);\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results[\"push\"] && results[\"push\"][\"success\"])\n    NSLog(@\"Set external user id push status: %@\", results[\"push\"][\"success\"]);\n  // Verify the email is set or check that the results have an email success status\n  if (results[\"email\"] && results[\"email\"][\"success\"])\n    NSLog(@\"Set external user id email status: %@\", results[\"email\"][\"success\"]);\n}];",
      "language": "objectivec"
    },
    {
      "code": "// Setting External User Id with Callback\nstring externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\nString externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 2.13.2+\nOneSignal.Current.SetExternalUserId(externalUserId, externalUserIdAuthHash, OneSignalSetExternalUserId);\n\n// Removing External User Id with Callback Available in SDK Version 2.12.0+\n//OneSignal.Current.RemoveExternalUserId(OneSignalSetExternalUSerId);\n\n//Callback available in SDK Version 2.12.0+\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\nlet externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 3.9.3+\nOneSignal.setExternalUserId(externalUserId, externalUserIdAuthHash, (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK\nlet externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 2.11.2+\nOneSignal.setExternalUserId(externalUserId, externalUserIdAuthHash, (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n});",
      "language": "javascript",
      "name": "Cordova"
    },
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\nlet externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 2.6.2+\nOneSignal.shared.setExternalUserId(externalUserId, externalUserIdAuthHash);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Setting External User Id with Callback\nstring externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\nString externalUserIdAuthHash = \"...\"; // Identifier auth hash generated from your server\n\n// Setting External User Id with Callback Available in SDK Version 3.8.0+\nOneSignal.Current.SetExternalUserId(externalUserId, externalUserIdAuthHash, OneSignalSetExternalUserId);\n\n// Removing External User Id with Callback Available in SDK Version 3.8.0+\n//OneSignal.Current.RemoveExternalUserId(OneSignalSetExternalUSerId);\n\n//Callback available in SDK Version 3.10.3+\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n}",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

# Updating Devices with REST API

If you **enabled** Identity Verification and call the [Add a device](ref:add-a-device) or [Edit device](ref:edit-device) endpoint (`api/v1/players`), the request must contain the `external_user_id_auth_hash` or `identifier_auth_hash` parameters.

If you are adding or updating the `external_user_id` on a a non-email device (`device_type` != `11`), you must use the `external_user_id_auth_hash` parameter.

If you are adding or updating the email (`identifier` parameter && `device_type` = `11`), then any field being updated will need the `identifier_auth_hash` (or `email_auth_hash` for backwards compatibility) value.


# Removing External User ID

To remove an `external_user_id` from a device record with Identity Verification enabled, you can set it to an empty string with the auth hash based on the existing `external_user_id` value before removal.