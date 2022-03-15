---
title: "Mixpanel"
slug: "mixpanel"
excerpt: "Integrating OneSignal with Mixpanel"
hidden: false
createdAt: "2016-09-22T06:14:22.357Z"
updatedAt: "2022-02-11T16:20:46.533Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edeef59-mixpanel-lp-onesignal-integration.gif",
        "mixpanel-lp-onesignal-integration.gif",
        1100,
        723,
        "#f8f7f9"
      ]
    }
  ]
}
[/block]
Mixpanel and OneSignal have joined forces to provide:
[block:parameters]
{
  "data": {
    "h-0": "Feature",
    "h-1": "Details",
    "0-0": "**Personalized messaging**",
    "0-1": "Boost engagement with more contextualized messaging from OneSignal, triggered when users enter or exit Mixpanel cohorts",
    "1-0": "**Real-time insights**",
    "1-1": "Gain a holistic view of customers by combining Mixpanel in-product user actions and OneSignal message engagement metrics",
    "2-0": "**Data-driven campaigns**",
    "2-1": "Leverage product-level user insights for re-engaging campaigns through OneSignal"
  },
  "cols": 2,
  "rows": 3
}
[/block]
#Requirements
* [A Paid OneSignal Account](https://onesignal.com/pricing) is required for this integration.
* The OneSignal [Mobile SDK](doc:mobile-sdk-setup) and/or [Web SDK](doc:web-push-quickstart) from which you want to send data. [Email](doc:email-quickstart) or [SMS](doc:sms-quickstart) only integrations do not require the SDK.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d57f389-mixpanel-docs-how-to-setup-the-integration.png",
        "mixpanel-docs-how-to-setup-the-integration.png",
        2880,
        1392,
        "#edeaf2"
      ]
    }
  ]
}
[/block]
#Step 1. Turn on Integration

In OneSignal, navigate to **Dashboard > Settings > Analytics > Mixpanel** and click **Activate**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1cb2ee-Screen_Shot_2020-12-01_at_6.56.03_PM.png",
        "Screen Shot 2020-12-01 at 6.56.03 PM.png",
        2582,
        1398,
        "#e7e9eb"
      ]
    }
  ]
}
[/block]
#Step 2. Add Mixpanel Token in OneSignal Dashboard

You can find your Mixpanel Token under **Project Settings > Access Keys**. Copy-paste the **Project Token** into OneSignal. See <a href="https://help.mixpanel.com/hc/en-us/articles/115004502806-Find-Project-Token-" target="_blank">Mixpanel's "Find Project Token" guide</a> for further details.

**Recommended:** Select the checkbox to "Use external_user_id to sync events" if you want to send multi-channel messages (Push, Email, In-App Messages, and SMS).

If you are using Mixpanel EU servers, select **Send events exclusively to Mixpanel EU servers**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81744ed-Screen_Shot_2021-03-30_at_9.09.04_AM.png",
        "Screen Shot 2021-03-30 at 9.09.04 AM.png",
        856,
        910,
        "#eceef1"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
OneSignal messaging events will automatically show up in the activity feed of a user in Mixpanel.

#Step 3. Add OneSignal to Mixpanel Integrations

Within OneSignal, navigate to **Settings > Keys & IDs**. Copy the "App ID" and the "REST API key".

In your mixpanel.com dashboard > **Data Management > Integrations**. Select "OneSignal" and press **Connect**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/50dbe41-Screen_Shot_2021-03-30_at_9.55.34_AM.png",
        "Screen Shot 2021-03-30 at 9.55.34 AM.png",
        2758,
        1122,
        "#e5e6f4"
      ]
    }
  ]
}
[/block]
To connect to OneSignal, copy-paste the "App Id" and "REST API Key" from the OneSignal dashboard.

##USER ID PROPERTY

**Recommended**: The User ID Property section refers to any Mixpanel property that you want to use and needs to sync to the OneSignal External User ID. This can be any property available.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a21a99-Screen_Shot_2021-12-13_at_7.57.44_PM.png",
        "Screen Shot 2021-12-13 at 7.57.44 PM.png",
        1066,
        790,
        "#cacacd"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Note on Distinct ID",
  "body": "If you match users to OneSignal based on the Mixpanel `$distinct_id` then it will only match with the top value. \n\nIn below example, only `E1947D0A-5B89-43C5-A945-E40981D267E2` will work. It cannot match `109768518080488203109` or `17c1ff6aa9d701-051265255b461f-1f3e6757-1fa400-17c1ff6aa9ec5a`."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab2df27-Screen_Shot_2021-12-13_at_8.01.33_PM.png",
        "Screen Shot 2021-12-13 at 8.01.33 PM.png",
        568,
        294,
        "#f6f6f6"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/097d729-Screen_Shot_2021-12-13_at_7.55.43_PM.png",
        "Screen Shot 2021-12-13 at 7.55.43 PM.png",
        852,
        744,
        "#d8d9ec"
      ]
    }
  ]
}
[/block]
Click **Continue** when finished.

#Step 4. Sync Mixpanel and OneSignal User Id

Syncing user data across OneSignal and Mixpanel requires setting the OneSignal External User Id property to a "User Id" property set in Mixpanel.

Unlike Mixpanel which stores email and phone number to a single User Record, OneSignal creates separate Channel Records for push, email and sms. Emails and phone numbers need to be added into OneSignal to receive messages on those channels.

##Option 1: External User Id (Recommended)
[block:callout]
{
  "type": "info",
  "title": "Highly Important",
  "body": "* **You must use this option for multi-channel messaging: Push, Email, In-App Messages, and SMS.**\n* Email Addresses and/or SMS Phone Numbers must be added to OneSignal to receive messages.\n* You must select **Use external_user_id to sync events (recommended)** in [step 2](#step-2-add-mixpanel-token-in-onesignal-dashboard)."
}
[/block]
OneSignal's [External User Id](doc:external-user-ids) is user-level identifier that can be associate across different OneSignal Channel Records (Push, Email, In-App Messages, and/or SMS). The below examples show how to set the Mixpanel Distinct Id as the OneSignal External User Id for the push, email, and sms phone number channel record when collected through our SDK.

The Push/In-App Message Channel Record is created when the user subscribes to push on your website or opens your mobile app with the OneSignal SDK.

The Email and SMS Channel Record needs to be sent to OneSignal using the [`setEmail` SDK Method](doc:email-sdk-methods) and [`setSMSNumber` SDK Method](doc:sms-sdk-methods) shown below.
[block:code]
{
  "codes": [
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nvar userId = \"12345\";\nOneSignal.push(function() {\n  OneSignal.setExternalUserId(userId);\n});\n\n//Set email to OneSignal and External User Id as Mixpanel Distinct Id\nOneSignal.push(function() {\n  OneSignal.setEmail(\"example@domain.com\")          \n    .then(function() {\n      OneSignal.setExternalUserId(userId);\n   }); \n});\n\n//Set phone number to OneSignal and External User Id as Mixpanel Distinct Id\nOneSignal.push(function() {\n  OneSignal.setSMSNumber(\"+11234567890\")\n    .then(function() {\n      OneSignal.setExternalUserId(userId);\n   });\n});\n\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nmixpanel.people.set({\n  $onesignal_user_id: userId\n});\n*/",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nString userId = \"123456789\";\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\nOneSignal.setExternalUserId(userId, new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n    @Override\n    public void onSuccess(JSONObject results) {\n        try {\n            if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n                boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for push status: \" + isPushSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n\n        try {\n            if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n                boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for email status: \" + isEmailSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n        try {\n            if (results.has(\"sms\") && results.getJSONObject(\"sms\").has(\"success\")) {\n                boolean isSmsSuccess = results.getJSONObject(\"sms\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for sms status: \" + isSmsSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void onFailure(OneSignal.ExternalIdError error) {\n        // The results will contain channel failure statuses\n        // Use this to detect if external_user_id was not set and retry when a better network connection is made\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with error: \" + error.toString());\n    }\n});\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nmixpanel.getPeople().set(\"$onesignal_user_id\", userId);\n*/",
      "language": "java"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nlet userId = \"12345\"\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\")\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\")\n\n// Setting External User Id with Callback Available in SDK Version 3.x.x\nOneSignal.setExternalUserId(userId, withSuccess: { results in\n    // The results will contain push and email success statuses\n    print(\"External user id update complete with results: \", results!.description)\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if let pushResults = results![\"push\"] {\n        print(\"Set external user id push status: \", pushResults)\n    }\n    if let emailResults = results![\"email\"] {\n        print(\"Set external user id email status: \", emailResults)\n    }\n    if let smsResults = results![\"sms\"] {\n        print(\"Set external user id sms status: \", smsResults)\n    }\n}, withFailure: {error in\n    print(\"Set external user id done with error: \" + error.debugDescription)\n})\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nmixpanel.people.set(properties: [\"$onesignal_user_id\":userId])\n*/",
      "language": "swift"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nNSString* userId = @\"12345\";\n\n//Set email to OneSignal\n[OneSignal setEmail:@\"example@domain.com\"];\n\n//Set phone number to OneSignal\n[OneSignal setSMSNumber:@\"+11234567890\"];\n  \n// Setting External User Id with Callback Available in SDK Version 3.0.0+\n[OneSignal setExternalUserId:userId, withSuccess:^(NSDictionary *results) {\n  // The results will contain push and email success statuses\n  NSLog(@\"External user id update complete with results: %@\", results.description);\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results[\"push\"] && results[\"push\"][\"success\"])\n    NSLog(@\"Set external user id push status: %@\", results[\"push\"][\"success\"]);\n  // Verify the email is set or check that the results have an email success status\n  if (results[\"email\"] && results[\"email\"][\"success\"])\n    NSLog(@\"Set external user id email status: %@\", results[\"email\"][\"success\"]);\n  // Verify the number is set or check that the results have an sms success status\n  if (results[\"sms\"] && results[\"sms\"][\"success\"])\n    NSLog(@\"Set external user id sms status: %@\", results[\"sms\"][\"success\"]);\n}];\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\n- (void)identify:(NSString *)userId\n[mixpanel.people set:@{@\"$onesignal_user_id\": userId}];\n*/",
      "language": "objectivec"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nconst userId = \"12345\";\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\nOneSignal.setExternalUserId(userId, (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n  \n    // Verify the sms phone number is set or check that the results have an sms success status\n  if (results.sms && results.sms.success) {\n    console.log('Results of setting external user id sms status:');\n    console.log(results.sms.success);\n  }\n});\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nmixpanel.getPeople().set(\"$onesignal_user_id\", userId);\n*/",
      "language": "javascript",
      "name": "React Native (js)"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nlet userId = \"12345\";\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\n// Setting External User Id with Callback Available in SDK Version 3.9.3+\nOneSignal.shared.setExternalUserId(userId).then((results) {\n  log(results.toString());\n}).catchError((error) {\n  log(error.toString());\n});\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nmixpanel.getPeople().set(\"$onesignal_user_id\", userId);\n*/",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "//Set the OneSignal External User Id same as the Mixpanel USER ID property\n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\nstring userId = \"12345\";\n\n//Set email to OneSignal\nOneSignal.SetEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.SetSMSNumber(\"+11234567890\");\n\n// Setting External User Id with Callback Available in SDK Version 2.13.2+\nOneSignal.Current.SetExternalUserId(userId, OneSignalSetExternalUserId);\n\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the number is set or check that the results have an sms success status\n  if (results.ContainsKey(\"sms\"))\n  {\n    Dictionary<string, object> smsStatusDict = results[\"sms\"] as Dictionary<string, object>;\n    if (smsStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for sms with results: \" + smsStatusDict[\"success\"] as string);\n    }\n  }\n}\n\n//Uncomment code if you did not set the USER ID PROPERTY in Mixpanel Integrations page with OneSignal \n//See Step 3 for more details: https://documentation.onesignal.com/docs/mixpanel#step-3-add-onesignal-to-mixpanel-integrations\n/*\nMixpanel.People.Set(\"$onesignal_user_id\", userId);\n*/",
      "language": "csharp",
      "name": "Unity (C#)"
    }
  ]
}
[/block]

##Option 2: Player Id

**Only available for push and in-app messages. Not available for omni-channel: Email & SMS.**

If you did not select **Use external_user_id to sync events (recommended)**, then use the OneSignal Player Id as the OneSignal User Id Mixpanel property. However, you will not get access to Email capabilities.

Through the [Mixpanel API](https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpanelpeopleset), set this OneSignal User ID Property `$onesignal_user_id` to the `people` property.

[block:code]
{
  "codes": [
    {
      "code": "//Set the OneSignal Push Player ID to Mixpanel record\nOneSignal.push(function() {\n  // Check if the current site visitor is subscribed (no player id is created until the user subscribes to push\n  OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n    if (isEnabled) {\n      console.log(\"Push notifications are enabled!\");\n      OneSignal.getUserId(function (userId) {\n        console.log(\"OneSignal User ID:\", userId);\n        mixpanel.people.set({\n          $onesignal_user_id: userId\n        });\n      });\n    } else {\n      console.log(\"Push notifications are not enabled yet.\");   \n    }\n  });\n});",
      "language": "javascript",
      "name": "Web - JavaScript"
    },
    {
      "code": "//Set the OneSignal Push Player ID to Mixpanel record\nOSDeviceState device = OneSignal.getDeviceState();\nString userId = device.getUserId();//String: the OS Player Id or null if device has not registered with OS Servers\nmixpanel.getPeople().set(\"$onesignal_user_id\", userId);",
      "language": "java"
    },
    {
      "code": "//Set the OneSignal Push Player ID to Mixpanel record\nlet deviceState = OneSignal.getDeviceState()\nif let userId = deviceState?.userId {\n    mixpanel.people.set(properties: [\"$onesignal_user_id\":userId])\n}",
      "language": "swift"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Migrating from Player Id to External User Id",
  "body": "1. In OneSignal, select **Use external_user_id to sync events (recommended)** in [step 2](#step-2-add-mixpanel-token-in-onesignal-dashboard), then the Mixpanel OneSignal User Id property needs to equal the OneSignal External User Id property.\n\n2. Send Mixpanel the External User Id set within OneSignal. See [example code](#method-1-external-user-id-recommended)."
}
[/block]

#Step 5. Moving Current Mixpanel Subscriptions to OneSignal
**Optional**

You may [Import Email Addresses](doc:import-email-addresses) and [Import Phone Numbers](doc:import-phone-numbers) into OneSignal to immediately message your userbase. Using the CSV imports or API allows you to set the `external_user_id` property which must match the OneSignal User Id property in Mixpanel.
[block:callout]
{
  "type": "warning",
  "title": "Mixpanel User Data Sync",
  "body": "Mixpanel cohorts and analytics will not sync with OneSignal until the Mixpanel property called **OneSignal User Id** matches the OneSignal **External User Id** for the specific channel record you are messaging."
}
[/block]
After following the above Option 1 or 2, your user data will be synced with OneSignal as follows:
[block:parameters]
{
  "data": {
    "0-0": "**Push Subscribers**\n(Option 1 & 2)",
    "h-0": "User Type",
    "h-1": "Details",
    "0-1": "Automatically and silently (not prompted again) moved into OneSignal upon updating the mobile app and/or returning to the website.",
    "1-0": "**Email Subscribers**\n(Option 1 only)",
    "1-1": "After `setEmail` method is called and the OneSignal External User Id for the email record matches the Mixpanel OneSignal User Id property.",
    "2-0": "**SMS Subscribers**\n(Option 1 only)",
    "2-1": "After `setSMSNumber` method is called and the OneSignal External User Id for the sms record matches the Mixpanel OneSignal User Id property."
  },
  "cols": 2,
  "rows": 3
}
[/block]

#Step 6. Export Mixpanel Cohorts to OneSignal

As you start sending Mixpanel the `$onesignal_user_id` you will see a new User Property in Mixpanel called **OneSignal User Id**. You can use *is set* to filter all devices currently associated with the OneSignal Device Record.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d5d874-Screen_Shot_2020-12-02_at_5.26.10_PM.png",
        "Screen Shot 2020-12-02 at 5.26.10 PM.png",
        1146,
        355,
        "#f8f8f9"
      ]
    }
  ]
}
[/block]
In Mixpanel **Users > Cohorts** select the 3-dot option next to the cohort you want to send push.

Select **Export to... > OneSignal**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b42484-Screen_Shot_2020-10-29_at_1.40.32_PM.png",
        "Screen Shot 2020-10-29 at 1.40.32 PM.png",
        1449,
        582,
        "#e3e5f6"
      ]
    }
  ]
}
[/block]
Under "Export Type" you have 2 options:
1. "One-time export" will send OneSignal the current user data. Best if sending one message only to the current users.
2. "Dynamic Sync" is where Mixpanel will send OneSignal the updated cohort data around every 15 minutes. Best if sending recurring messages to updated user list.

Select the option and press **Begin Sync**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/52331a3-Screen_Shot_2021-03-26_at_5.19.03_PM.png",
        "Screen Shot 2021-03-26 at 5.19.03 PM.png",
        1076,
        930,
        "#eaeaed"
      ]
    }
  ]
}
[/block]
3. The exported Mixpanel Cohorts will show in the onesignal.com dashboard **Audience > Segments** as a new segment and will become available as a segment filter for further customization.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e66dbd8-Screen_Shot_2020-10-29_at_1.54.39_PM.png",
        "Screen Shot 2020-10-29 at 1.54.39 PM.png",
        1034,
        61,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/026d935-Copy_of_OneSignal_Partner_Deck_1.png",
        "Copy of OneSignal Partner Deck (1).png",
        2300,
        1194,
        "#f4f5f6"
      ]
    }
  ]
}
[/block]
OneSignal will also automatically sync the `$first_name` and `$last_name` user info from Mixpanel user records to our [Data Tags](doc:add-user-data-tags) if they are present. This is helpful for [Message Personalization](doc:personalization).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bf8b73b-Screen_Shot_2020-10-29_at_2.13.35_PM.png",
        "Screen Shot 2020-10-29 at 2.13.35 PM.png",
        1506,
        346,
        "#d7d9dc"
      ]
    }
  ]
}
[/block]
#Step 7. Send Messages

See our guides on sending messages based on the channels you use. You can also setup [Automated Messages](doc:automated-messages).
- [Sending Push Messages](doc:sending-notifications)
- [Sending In-App Messages](doc:sending-in-app-messages) 
- [Sending Email Messages](doc:sending-email) 
- [Sending SMS Messages](doc:sending-sms-messages) 

#Step 8. Tracking Message Data in Mixpanel

In Mixpanel User Activity Feed, OneSignal Message Events will appear in activity feed like:
- Message Sent
- App Opened from Push (clicked event)

Those have properties
`time` - the time the event happened
`delivery_id` - OneSignal notification ID
`Message` - Push Notification Title/Headings or Email Subject
`Message Contents` - Push Notification Message/Contents
`$source` - this is always `onesignal`
`message_type` - push/in-app/email/sms
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/994982f-Screen_Shot_2020-10-29_at_2.23.01_PM.png",
        "Screen Shot 2020-10-29 at 2.23.01 PM.png",
        1506,
        761,
        "#e9eaf8"
      ]
    }
  ]
}
[/block]
# Cohort Events

You can use the following events in Mixpanel. All will have a `$source` as `onesignal`.
[block:parameters]
{
  "data": {
    "h-0": "OneSignal Event",
    "h-1": "Mixpanel Event",
    "0-0": "Push Notification Clicked Which Opens the App/Website",
    "0-1": "App Opened from Push",
    "1-0": "Push Notification Sent from OneSignal",
    "h-2": "Mixpanel Message Event Property",
    "0-2": "**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "1-2": "**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "1-1": "Message Sent",
    "2-0": "Push Notification Received on Device ([Confirmed Deliveries](doc:confirmed-deliveries))",
    "2-1": "Message Received",
    "2-2": "**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "3-0": "In-App Message Clicked",
    "3-1": "Message Opened",
    "3-2": "Message Name set within OneSignal Dashboard - does not track what was clicked. Use the [Click Action ID](doc:sending-in-app-messages#add-click-action) to send event to Mixpanel.\n\n**message_type** = `in-app`",
    "4-0": "In-App Message Impression (shown to user)",
    "4-1": "Message Sent",
    "4-2": "Message Name set within OneSignal Dashboard\n\n**message_type** = `in-app`",
    "5-0": "Email sent from OneSignal",
    "5-1": "Message Sent",
    "5-2": "**Message** = Subject of the email sent from OneSignal\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`",
    "8-0": "SMS sent from OneSignal",
    "8-1": "Message Sent",
    "8-2": "**Message** = Contents of the SMS sent from OneSignal\n\n**Message Contents** = Contents of the SMS sent from OneSignal\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `sms`",
    "6-0": "Email opened/viewed from OneSignal",
    "6-1": "Message Opened",
    "6-2": "**Message** = Subject of the email sent from OneSignal \n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`",
    "7-0": "Email Link Clicked",
    "7-1": "App Opened from Push",
    "7-2": "**Message** = Subject of the email sent from OneSignal \n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`"
  },
  "cols": 3,
  "rows": 9
}
[/block]

## Example Cohorts

#### Did not click a push or in-app message
With this type of Cohort you can track devices that may not have received your push or in-app message to send them an email or sms text.

Checking the users that `did` get a `Message Sent` `greater than 1` time in the `Last Day`, where Message Type equals to push.
AND
Users that `Did Not` have the `App Opened from Push` (works on web as well) in the `Last day`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/777588e-Screen_Shot_2020-12-02_at_5.43.51_PM.png",
        "Screen Shot 2020-12-02 at 5.43.51 PM.png",
        1338,
        757,
        "#f9f8fb"
      ]
    }
  ]
}
[/block]
#### Were Shown a Specific Message in the Past Day

Using `Message Sent` `at least 1 time`, in the `Last 7 days` where `Message Type` equals `in-app` and `Message` equals `[name of the message]`

In this cast the `[name of the message]` is pulled from:
- Push Notification Title
- In-App Message Name
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ec3f97-Screen_Shot_2020-12-02_at_9.17.57_PM.png",
        "Screen Shot 2020-12-02 at 9.17.57 PM.png",
        2682,
        1700,
        "#f8f8f9"
      ]
    }
  ]
}
[/block]
#FAQ

##How can we pass Subscription events?
Subscription events are not currently being sent automatically. This can be done with the OneSignal SDK Subscription Observer Methods. See <a href="https://documentation.onesignal.com/docs/analytics-overview#subscription-tracking" target="_blank">Subscription Tracking</a> for more details.

## Do unsubscribed devices within my Mixpanel Cohort sync to OneSignal?

Devices not subscribed to push notification or emails will not show in the OneSignal segment's device count. However, [sending In-App Messages](doc:sending-in-app-messages) will reach the unsubscribed devices.

## Can I change the cohort name and have that reflected in OneSignal?

Changing the name of a synced Mixpanel Cohort will not show in OneSignal.

Upon syncing cohorts into OneSignal Segments, 2 things happen:
1. a OneSignal Segment is created with that cohort name
2. a Segment Data Filter is created for that cohort

The OneSignal Segment name can be changed, but the Segment Data Filter will always reflect the original name of the Mixpanel Cohort.

If you want to reflect this change, you will need to create a new Cohort in Mixpanel and sync it to OneSignal with the new name.

## Can I setup an Email-only integration?
Yes, OneSignal provides ways to setup email with another ESP for you so you can use OneSignal directly for sending emails.

If you have an account with Mailgun, Mandrill or Sendgrid already, great! You can follow the above steps, except on Step 4, follow the below requirements.

####Requirements:
- You will need to create the email record in OneSignal. Use the [CSV Email Import](doc:import-email-addresses) or [Add a device](ref:add-a-device) API.
- You will need to sync a Mixpanel User Property to be the same as the OneSignal External User Id property.

##Why do my cohort user counts not match the OneSignal segment counts?
There are a couple reasons for this:
* OneSignal tracks devices while Mixpanel tracks users. A single Mixpanel User may have 1+ devices within OneSignal.
* OneSignal's segments only show devices that are subscribed. Unsubscribed devices are not counted or shown in segments.
* The channel record must already exist within OneSignal and each record needs the `external_user_id` Property to match the corresponding property in Mixpanel. Either the "User Id" specified in the Integrations page or the `$onesignal_user_id` property.

##Why does my delivery data not match between Mixpanel and OneSignal?
There may be a couple reasons for this:
* The Mixpanel User Id property specified and OneSignal's External User Id property needs to be set for message data of that device to be tracked.
* Mixpanel measures Users, OneSignal measures Devices. If a user has multiple devices, the sent, clicked and confirmed events will be higher in OneSignal.