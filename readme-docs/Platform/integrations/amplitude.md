---
title: "Amplitude"
slug: "amplitude"
excerpt: "How to integrate OneSignal with Amplitude to send events and receive cohorts"
hidden: false
createdAt: "2016-09-22T06:13:05.642Z"
updatedAt: "2022-03-10T17:51:16.760Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7f4b16-onesignal-amplitude-integration-2.png",
        "onesignal-amplitude-integration-2.png",
        1940,
        1180,
        "#f6f1f6"
      ],
      "caption": "Illustration showing Amplitude and OneSignal Integration Flow"
    }
  ]
}
[/block]
In this tutorial you’ll learn how to set up OneSignal with <a href="https://amplitude.com" target="_blank">Amplitude</a> to send events over and receive back intelligent behavioral cohorts. 

Amplitude provides actionable, 360-degree-insight into your entire digital product and customer experience delivered across every digital team. Now you can integrate with OneSignal to send intelligent and timely notifications based on your users’ actions and behaviors.

**1. Send data to Amplitude:** send all of your users’ responses to your messages. This includes data across Push, In-App Messages, Email, and SMS. 

**2. Receive Cohorts from Amplitude: **Within Amplitude you can create a whole set of cohorts based on your users' behavior and actions. Now you can sync this hourly, daily, or weekly with OneSignal.

This integration can be set up on an application basis, to ensure you have control over what application data is synced from and to Amplitude.

### Use Cases
1. **Action-driven Onboarding:** Prompt your user to complete signup, or other onboarding actions, through syncing a relevant cohort, to ensure they become a converted user

2. **Gamification: **Provide positive reinforcement when a user completes an action within your application, for example. submitting a post or article for the first time.

#Requirements

1. **Accounts:** If you don't already have them, sign up for an Amplitude and a OneSignal account. Amplitude's Quick Start Guide will walk you through how to set up your Amplitude organization and create your first project. To create a OneSignal account, visit www.onesignal.com.

2. **OneSignal Pricing Plan**: In order to use our Amplitude Integration, we ask you to please be on a Growth Plan or higher. If you need help with pricing, please check out <a href="https://onesignal.com/pricing" target="_blank">our Pricing Page</a> and [reach out to us with any questions.](mailto:support@onesignal.com) 

3. **Amplitude Pricing:** Find out more about [Amplitude Price Plans.](https://amplitude.com/pricing)

4. The OneSignal [Mobile SDK](doc:mobile-sdk-setup) and/or [Web SDK](doc:web-push-quickstart) from which you want to send data. [Email](doc:email-quickstart) or [SMS](doc:sms-quickstart) only integrations do not require the SDK.

--- 

#Step 1. Turn on Integration

In OneSignal, navigate to **Dashboard > Settings > Analytics > Amplitude** and click **Activate**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7f0074-Amplitude_Card.png",
        "Amplitude Card.png",
        678,
        346,
        "#f5f8fa"
      ],
      "caption": "Image. Showing Amplitude Integration card"
    }
  ]
}
[/block]
#Step 2. Add Amplitude Token in OneSignal Dashboard

You can find your Amplitude API Key Token under **Settings > Projects**. Copy-paste the **API Key** into OneSignal.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca85544-Sync_Type.png",
        "Sync Type.png",
        1376,
        818,
        "#e3e7ea"
      ],
      "caption": "Image showing Amplitude API Key"
    }
  ]
}
[/block]
If you are using Amplitude EU servers, select **Send events exclusively to Amplitude EU data center**.

Once done **Activate** your integration.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13abcae-Amplitude_Key.png",
        "Amplitude Key.png",
        700,
        607,
        "#f4f7f9"
      ],
      "caption": "Image. Showing modal to add Amplitude card to enter in API Key"
    }
  ]
}
[/block]
#Step 3. Add OneSignal to Amplitude Integrations

Within OneSignal, navigate to **Settings > Keys & IDs**. Copy the "App ID" and the "REST API key".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e368d98-onesignal-API_key.png",
        "onesignal-API key.png",
        2310,
        899,
        "#e2e4e6"
      ],
      "caption": "Image showing keys and ids within your Settings to copy the OneSignal API Key"
    }
  ]
}
[/block]
In Amplitude, navigate to **Data Destinations** and add OneSignal to your project. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/235a9fa-Screen_Shot_2021-12-20_at_3.15.32_PM.png",
        "Screen Shot 2021-12-20 at 3.15.32 PM.png",
        534,
        336,
        "#30354f"
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
        "https://files.readme.io/891ab72-Screen_Shot_2021-10-06_at_5.58.30_PM.png",
        "Screen Shot 2021-10-06 at 5.58.30 PM.png",
        734,
        768,
        "#e1e2e4"
      ]
    }
  ]
}
[/block]
To connect to OneSignal, name the connection (to recognize later) and copy-paste the "App Id" and "REST API Key" from the OneSignal dashboard.

**Important**: The User ID section refers to any Amplitude property that you want to use and needs to sync to the OneSignal External User ID. This can be any property available but we recommend using the "User Id" set to Amplitude within their `setUserId` property.

Click **Save** when finished.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a02aef-API_Key.png",
        "API Key.png",
        612,
        676,
        "#fafafb"
      ],
      "caption": "Image showing where to paste your OneSignal API Key in Amplitude"
    }
  ]
}
[/block]
#Step 4. Sync Amplitude & OneSignal User Id

Syncing user data across OneSignal and Amplitude requires setting the OneSignal External User Id property to the "User Id" property set in Amplitude during step 3.

OneSignal's [External User Id](doc:external-user-ids) is user-level identifier to associate across different OneSignal Channel Records (Push, Email, In-App Messages, and/or SMS). The below examples show how to set the OneSignal External User Id for the push, email, and sms phone number channel record when collected through our SDK.

The Push/In-App Message Channel Record is created when the user subscribes to push on your website or opens your mobile app with the OneSignal SDK.

The Email and SMS Channel Record needs to be sent to OneSignal using the [`setEmail` SDK Method](doc:email-sdk-methods) and [`setSMSNumber` SDK Method](doc:sms-sdk-methods) shown below.
[block:code]
{
  "codes": [
    {
      "code": "//Get the User Id\nvar userId = \"12345\";\n//Set Amplitude User Id\namplitude.getInstance().setUserId(userId);\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.push(function() {\n  OneSignal.setExternalUserId(userId);\n});\n\n//Example creating Email record in OneSignal\nOneSignal.push(function() {\n  OneSignal.setEmail(\"example@domain.com\")          \n    .then(function() {\n      OneSignal.setExternalUserId(userId);\n   }); \n});\n\n//Example creating SMS record in OneSignal\nOneSignal.push(function() {\n  OneSignal.setSMSNumber(\"+11234567890\")\n    .then(function() {\n      OneSignal.setExternalUserId(userId);\n   });\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "//Set Amplitude User Id\nclient.setUserId(\"USER_ID\");\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.setExternalUserId(\"USER_ID\", new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n    @Override\n    public void onSuccess(JSONObject results) {\n        try {\n            if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n                boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for push status: \" + isPushSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n\n        try {\n            if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n                boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for email status: \" + isEmailSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n        try {\n            if (results.has(\"sms\") && results.getJSONObject(\"sms\").has(\"success\")) {\n                boolean isSmsSuccess = results.getJSONObject(\"sms\").getBoolean(\"success\");\n                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for sms status: \" + isSmsSuccess);\n            }\n        } catch (JSONException e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void onFailure(OneSignal.ExternalIdError error) {\n        // The results will contain channel failure statuses\n        // Use this to detect if external_user_id was not set and retry when a better network connection is made\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with error: \" + error.toString());\n    }\n});",
      "language": "java"
    },
    {
      "code": "//Set Amplitude User Id\nAmplitude.instance().setUserId(\"USER_ID\")\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\")\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\")\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.setExternalUserId(\"USER_ID\", withSuccess: { results in\n    // The results will contain push and email success statuses\n    print(\"External user id update complete with results: \", results!.description)\n    // Push can be expected in almost every situation with a success status, but\n    // as a pre-caution its good to verify it exists\n    if let pushResults = results![\"push\"] {\n        print(\"Set external user id push status: \", pushResults)\n    }\n    if let emailResults = results![\"email\"] {\n        print(\"Set external user id email status: \", emailResults)\n    }\n    if let smsResults = results![\"sms\"] {\n        print(\"Set external user id sms status: \", smsResults)\n    }\n}, withFailure: {error in\n    print(\"Set external user id done with error: \" + error.debugDescription)\n})",
      "language": "swift"
    },
    {
      "code": "//Set Amplitude User Id\n[[Amplitude] instance] setUserId:@\"USER_ID\"];\n\n//Set email to OneSignal\n[OneSignal setEmail:@\"example@domain.com\"];\n\n//Set phone number to OneSignal\n[OneSignal setSMSNumber:@\"+11234567890\"];\n  \n//Set the OneSignal External User Id same as Amplitude User Id\n[OneSignal setExternalUserId:@\"USER_ID\", withSuccess:^(NSDictionary *results) {\n  // The results will contain push and email success statuses\n  NSLog(@\"External user id update complete with results: %@\", results.description);\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results[\"push\"] && results[\"push\"][\"success\"])\n    NSLog(@\"Set external user id push status: %@\", results[\"push\"][\"success\"]);\n  // Verify the email is set or check that the results have an email success status\n  if (results[\"email\"] && results[\"email\"][\"success\"])\n    NSLog(@\"Set external user id email status: %@\", results[\"email\"][\"success\"]);\n  // Verify the number is set or check that the results have an sms success status\n  if (results[\"sms\"] && results[\"sms\"][\"success\"])\n    NSLog(@\"Set external user id sms status: %@\", results[\"sms\"][\"success\"]);\n}];",
      "language": "objectivec"
    },
    {
      "code": "//Set Amplitude User Id\nAmplitude.getInstance().setUserId(\"USER_ID\");\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.setExternalUserId(\"USER_ID\", (results) => {\n  // The results will contain push and email success statuses\n  console.log('Results of setting external user id');\n  console.log(results);\n  \n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.push && results.push.success) {\n    console.log('Results of setting external user id push status:');\n    console.log(results.push.success);\n  }\n  \n  // Verify the email is set or check that the results have an email success status\n  if (results.email && results.email.success) {\n    console.log('Results of setting external user id email status:');\n    console.log(results.email.success);\n  }\n  \n    // Verify the sms phone number is set or check that the results have an sms success status\n  if (results.sms && results.sms.success) {\n    console.log('Results of setting external user id sms status:');\n    console.log(results.sms.success);\n  }\n});",
      "language": "javascript",
      "name": "React Native (js)"
    },
    {
      "code": "//Set Amplitude User Id\nAmplitude.instance().setUserId(\"USER_ID\");\n\n//Set email to OneSignal\nOneSignal.setEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.setSMSNumber(\"+11234567890\");\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.shared.setExternalUserId(\"USER_ID\").then((results) {\n  log(results.toString());\n}).catchError((error) {\n  log(error.toString());\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "//Set Amplitude User Id\nAmplitude.Instance.setUserId(\"USER_ID\");\n\n//Set email to OneSignal\nOneSignal.SetEmail(\"example@domain.com\");\n\n//Set phone number to OneSignal\nOneSignal.SetSMSNumber(\"+11234567890\");\n\n//Set the OneSignal External User Id same as Amplitude User Id\nOneSignal.Current.SetExternalUserId(\"USER_ID\", OneSignalSetExternalUserId);\n\nprivate static void OneSignalSetExternalUserId(Dictionary<string, object> results)\n{\n  // The results will contain push and email success statuses\n  Debug.WriteLine(\"External user id updated with results: \" + Json.Serialize(results));\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if (results.ContainsKey(\"push\"))\n  {\n    Dictionary<string, object> pushStatusDict = results[\"push\"] as Dictionary<string, object>;\n    if (pushStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for push with results: \" + pushStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the email is set or check that the results have an email success status\n  if (results.ContainsKey(\"email\"))\n  {\n    Dictionary<string, object> emailStatusDict = results[\"email\"] as Dictionary<string, object>;\n    if (emailStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for email with results: \" + emailStatusDict[\"success\"] as string);\n    }\n  }\n  // Verify the number is set or check that the results have an sms success status\n  if (results.ContainsKey(\"sms\"))\n  {\n    Dictionary<string, object> smsStatusDict = results[\"sms\"] as Dictionary<string, object>;\n    if (smsStatusDict.ContainsKey(\"success\"))\n    {\n      Debug.WriteLine(\"External user id updated for sms with results: \" + smsStatusDict[\"success\"] as string);\n    }\n  }\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    }
  ]
}
[/block]
##Moving Current Amplitude Subscriptions to OneSignal

You may [Import Email Addresses](doc:import-email-addresses) and [Import Phone Numbers](doc:import-phone-numbers) into OneSignal to immediately message your userbase. Using the CSV imports or API allows you to set the `external_user_id` property which must match the selected User Id property in Amplitude.


#Step 5. Syncing your Cohorts

1. To export users from Amplitude to OneSignal, first create the cohort of users you wish to export. You can read more about [cohorts in Amplitude here](https://help.amplitude.com/hc/en-us/articles/231881448-Behavioral-cohorts-identify-users-with-similar-behaviors). 
2. Once you have created the cohort, click Sync to export these users to OneSignal. You can then go into your OneSignal dashboard to use these cohorts within your segments. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c76b898-Sync_Type.png",
        "Sync Type.png",
        1189,
        900,
        "#f8f7fb"
      ],
      "caption": "Image showing where to view your Active Integrations to Sync with OneSignal"
    }
  ]
}
[/block]
3. Note that you can select how frequently you’d like to sync your cohorts with OneSignal. These can be done as a One-Time Sync, or on a Scheduled basis.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b64d109-cohort_sync_1.png",
        "cohort sync (1).png",
        1102,
        838,
        "#f8f8f8"
      ],
      "caption": "Image showing how you can set a sync for your cohorts with OneSignal"
    }
  ]
}
[/block]
---

#Step 6. How to use an Amplitude Cohort within your Segment

1. Navigating to Segments
Open Audience > Segments select New Segment. If you’d like to know more about Segments, [Read More here](https://documentation.onesignal.com/docs/segmentation)

2: Selecting your Amplitude Cohort
Select Amplitude within the list of Rules for the Segment. Choose from the dropdown which cohort you’d like to use within this Segment. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/14c204f-Segment_Picker.png",
        "Segment Picker.png",
        1027,
        1556,
        "#f3f4f6"
      ],
      "caption": "Image showing the ability to create a segment"
    }
  ]
}
[/block]
Now select **Save Segment**  or alternatively continue on to filter the segment.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f07c1f-Segment_Picker_1.png",
        "Segment Picker (1).png",
        1027,
        713,
        "#f8f9fa"
      ],
      "caption": "Image showing how to create a segment from an Amplitude Cohort"
    }
  ]
}
[/block]
--- 
#FAQ

## What Events are sent?

Below we have a table showing you what events are sent per channel.
[block:parameters]
{
  "data": {
    "h-0": "OneSignal Event",
    "h-1": "Amplitude Event",
    "0-0": "Push Notification Clicked Which Opens the App/Website",
    "0-1": "Push Clicked",
    "1-0": "Push Notification Sent from OneSignal",
    "h-2": "Amplitude Message Event Property",
    "0-2": "**Message Name** = The name of the message.\n\n**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "1-2": "**Message Name** = The name of the message.\n\n**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "1-1": "Push Pending Delivery",
    "2-0": "Push Notification Received on Device ([Confirmed Deliveries](doc:confirmed-deliveries))",
    "2-1": "Push Confirmed Delivery",
    "2-2": "**Message Name** = The name of the message.\n\n**Message** = Push Notification Title/Headings\n\n**Message Contents** = Push Notification Message/Contents\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `push`",
    "3-0": "In-App Message Clicked",
    "3-1": "In-App Message Clicked",
    "3-2": "Message Name set within OneSignal Dashboard - does not track what was clicked. Use the [Click Action ID](doc:sending-in-app-messages#add-click-action) to send event to Amplitude.\n\n**message_type** = `in-app`",
    "4-0": "In-App Message Impression (shown to user)",
    "4-1": "IAM Displayed",
    "4-2": "Message Name set within OneSignal Dashboard\n\n**message_type** = `in-app`",
    "5-0": "Email sent from OneSignal",
    "5-1": "Email Pending Delivery",
    "5-2": "**Message Name** = The name of the message.\n\n**Message** = Subject of the email sent from OneSignal\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`",
    "8-0": "SMS sent from OneSignal",
    "8-1": "SMS Pending Delivery",
    "8-2": "**Message Name** = The name of the message.\n\n**Message** = Contents of the SMS sent from OneSignal\n\n**Message Contents** = Contents of the SMS sent from OneSignal\n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `sms`",
    "6-0": "Email opened/viewed from OneSignal",
    "6-1": "Email Opened",
    "6-2": "**Message Name** = The name of the message.\n\n**Message** = Subject of the email sent from OneSignal \n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`",
    "7-0": "Email Link Clicked",
    "7-1": "Email Clicked",
    "7-2": "**Message Name** = The name of the message.\n\n**Message** = Subject of the email sent from OneSignal \n\n**delivery_id** = OneSignal Notification Id.\n\n**message_type** = `email`"
  },
  "cols": 3,
  "rows": 9
}
[/block]

##How can we pass Subscription events?
Subscription events are not currently being sent automatically. This can be done with the OneSignal SDK Subscription Observer Methods. See <a href="https://documentation.onesignal.com/docs/analytics-overview#subscription-tracking" target="_blank">Subscription Tracking</a> for more details.

## What ID should we use?

In order to sync your data effectively between OneSignal and Amplitude, we use [External ID](https://documentation.onesignal.com/docs/external-user-ids). This allows you to recognize your user from Amplitude to OneSignal. 

Additionally, [External ID](https://documentation.onesignal.com/docs/external-user-ids) can be used across other integrations to ensure you have a connected data ecosystem. 

## Why do we set up the integration on an Application level as opposed to Organization Level?

We set up the Amplitude on an Application level, as this allows you some control over what is synced and the amount of data synced both to and from Amplitude.

##Why do my cohort user counts not match the OneSignal segment counts?
There are a couple reasons for this:
* OneSignal tracks devices while Amplitude tracks users. A single Amplitude User may have 1+ devices within OneSignal.
* OneSignal's segments only show devices that are subscribed. Unsubscribed devices are not counted or shown in segments.
* The channel record must already exist within OneSignal and each record needs the `external_user_id` Property to match the corresponding property in Amplitude.

##Why does my delivery data not match between Amplitude and OneSignal?
There may be a couple reasons for this:
* The Amplitude User Id property specified and OneSignal's External User Id property needs to be set for message data of that device to be tracked.
* Amplitude measures Users, OneSignal measures Devices. If a user has multiple devices, the sent, clicked and confirmed events will be higher in OneSignal.