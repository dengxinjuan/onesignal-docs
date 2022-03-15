---
title: "Database, DMP, & CRM Integration"
slug: "internal-database-crm"
excerpt: "How to link your database user data with OneSignal"
hidden: false
createdAt: "2017-06-19T22:12:56.919Z"
updatedAt: "2022-01-27T22:42:59.424Z"
---
This guide details how to sync your user data from an external Database, CRM or Data Management Platform (DMP) with OneSignal.

OneSignal creates and stores device-level data under a unique OneSignal Id called the **`player_id`**. A single user can have multiple `player_id` records based on how many devices they use to interact with your app/site. 

For example, a user: 
1. downloads your app on Android, gets a unique Android Push `player_id` record.
2. subscribes to your website, a new `player_id` is created for the web push record.
3. downloads your app on iOS, a 3rd `player_id` for the iOS Push Record is now created.
4. provides their email. This creates a 4th email `player_id` record.
5. provides their phone number, creating a 5th sms `player_id` record.

You have 5 records in OneSignal for the 1 User.

You can send OneSignal your unique User Id called the **`external_user_id`** and associate that with multiple `player_id` records. Conversely, you can get each `player_id` through the OneSignal SDK and send it to your Database. This guide explains both options:

# Linking Your External User ID to OneSignal Player ID

Use the OneSignal SDK [`setExternalUserId` method](doc:external-user-ids) when the user logs into the app/site and after the email or phone number is provided. This can be combined with [Identity Verification](doc:identity-verification).
[block:code]
{
  "codes": [
    {
      "code": "let externalUserId = \"your User ID fetched from backend server\";\n\nOneSignal.push(function() {\n  OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n    if (isEnabled)\n      console.log(\"Push notifications are enabled!\");\n      OneSignal.setExternalUserId(externalUserId);\n    else\n      console.log(\"Push notifications are not enabled yet.\");    \n  });\n});",
      "language": "javascript"
    },
    {
      "code": "String externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 4.0.0+\nOneSignal.setExternalUserId(externalUserId, new OneSignal.OSExternalUserIdUpdateCompletionHandler() {\n   @Override\n   public void onSuccess(JSONObject results) {\n      // The results will contain push and email success statuses\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with results: \" + results.toString());\n      try {\n         if (results.has(\"push\") && results.getJSONObject(\"push\").has(\"success\")) {\n            boolean isPushSuccess = results.getJSONObject(\"push\").getBoolean(\"success\");\n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id for push status: \" + isPushSuccess);\n         }\n      } catch (JSONException e) {\n         e.printStackTrace();\n      }\n      try {\n         if (results.has(\"email\") && results.getJSONObject(\"email\").has(\"success\")) {\n            boolean isEmailSuccess = results.getJSONObject(\"email\").getBoolean(\"success\");\n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Sets external user id for email status: \" + isEmailSuccess);\n         }\n      } catch (JSONException e) {\n         e.printStackTrace();\n      }\n   }\n   @Override\n   public void onFailure(OneSignal.ExternalIdError error) {\n      // The results will contain push and email failure statuses\n      // Use this to detect if external_user_id was not set and retry when a better network connection is made\n      OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"Set external user id done with error: \" + error.toString());\n   }\n});",
      "language": "java"
    },
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\n\n// Setting External User Id with Callback Available in SDK Version 3.x.x+\nOneSignal.setExternalUserId(externalUserId, withSuccess: { results in\n  // The results will contain push and email success statuses\n  print(\"External user id update complete with results: \", results!.description)\n  // Push can be expected in almost every situation with a success status, but\n  // as a pre-caution its good to verify it exists\n  if let pushResults = results![\"push\"] {\n    print(\"Set external user id push status: \", pushResults)\n  }\n  if let emailResults = results![\"email\"] {\n      print(\"Set external user id email status: \", emailResults)\n  }\n})",
      "language": "swift"
    }
  ]
}
[/block]

Once the `external_user_id` is set, you can:
1. Target devices with push and email through our [Create Notification REST API Call](ref:create-notification) using the `include_external_user_ids` targeting parameter. Also see [Sending Transactional Messages](doc:transactional-messages).
2. Use the CSV [List Upload](doc:import-user-tags) feature to tag and segment users based on the `external_user_id`'s set in our system.
3. Update tags with our [API Edit Tags with External User ID](https://documentation.onesignal.com/reference/edit-tags-with-external-user-id) endpoint.

## Disassociating the External User ID

Each OneSignal SDK has the [`removeExternalUserId` method](doc:external-user-ids) to disassociate the `external_user_id` from the current `player_id` record. 

[block:callout]
{
  "type": "warning",
  "title": "Warning - Android SDK Data Synchronization",
  "body": "The OneSignal Android SDKs leverage cacheing on `external_user_id` and [Data Tags](doc:add-user-data-tags).\n\nIf setting `external_user_id` through the [Edit device](ref:edit-device) API Endpoint, then use the same endpoint to remove the `external_user_id` upon the user logging out of the app.\n\nThe `removeExternalUserId` method will not work unless the `external_user_id` is set first with the `setExternalUserId` method on Android.\n\nThis is only applicable on the OneSignal Android Mobile App SDKs."
}
[/block]
----

# Adding the OneSignal Player ID to your Database

To store the device's OneSignal Player ID to your Database, use the OneSignal SDK [User Data methods](doc:sdk-reference#user-status) which returns the Player ID and other available data on the device.

A mobile app push `player_id` is generated and available shortly after a user opens the app with the OneSignal SDK initialized. Please allow 30 to 60 seconds for the `player_id` to be available.

For Web Push, a `player_id` is generated when the user subscribes. You can detect if the user is subscribed using the [`isPushNotificationsEnabled` method](doc:web-push-sdk#ispushnotificationsenabled) and set the External User ID when pulled from your server.

Then make a POST to your server with the data.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n    if (isEnabled)\n      console.log(\"Push notifications are enabled!\");\n      OneSignal.getUserId( function(userId) {\n        // Make a POST call to your server with the user ID\n        // Mixpanel Example\n        // mixpanel.people.set({ $onesignal_user_id: userId });\n      });\n    else\n      console.log(\"Push notifications are not enabled yet.\");    \n  });\n});",
      "language": "javascript"
    },
    {
      "code": "// Android SDK Example addSubscriptionObserver\npublic class MainActivity extends Activity implements OSSubscriptionObserver {\n  protected void onCreate(Bundle savedInstanceState) {\n    OneSignal.addSubscriptionObserver(this);\n  }\n  \n  public void onOSSubscriptionChanged(OSSubscriptionStateChanges stateChanges) {\n    if (!stateChanges.getFrom().getSubscribed() &&\n        stateChanges.getTo().getSubscribed()) {\n         // The user is subscribed\n         // Either the user subscribed for the first time\n         // Or the user was subscribed -> unsubscribed -> subscribed\n         stateChanges.getTo().getUserId();\n         // Make a POST call to your server with the user ID\n      }\n  }\n}",
      "language": "java"
    },
    {
      "code": "// iOS SDK Example addSubscriptionObserver\n// AppDelegate.h\n// Add OSSubscriptionObserver after UIApplicationDelegate\n@interface AppDelegate : UIResponder <UIApplicationDelegate, OSSubscriptionObserver>\n@end\n\n// AppDelegate.m\n@implementation AppDelegate\n  \n- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  // Add your AppDelegate as an obsserver\n  [OneSignal addSubscriptionObserver:self];\n}\n\n// Add this new method\n- (void)onOSSubscriptionChanged:(OSSubscriptionStateChanges*)stateChanges {\n  \n    if (!stateChanges.from.subscribed && stateChanges.to.subscribed) {\n         // The user is subscribed\n         // Either the user subscribed for the first time\n         // Or the user was subscribed -> unsubscribed -> subscribed\n         stateChanges.to.userId\n        // Make a POST call to your server with the user ID\n    }\n}",
      "language": "objectivec"
    },
    {
      "code": "// iOS SDK Example addSubscriptionObserver\n// AppDelegate.swift\n// Add OSSubscriptionObserver after UIApplicationDelegate\nclass AppDelegate: UIResponder, UIApplicationDelegate, OSSubscriptionObserver {\n\n   func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n      // Add your AppDelegate as an obsserver\n      OneSignal.add(self as OSSubscriptionObserver)\n   }\n\n   // Add this new method\n   func onOSSubscriptionChanged(_ stateChanges: OSSubscriptionStateChanges!) {\n      if !stateChanges.from.subscribed && stateChanges.to.subscribed {\n         // The user is subscribed\n         // Either the user subscribed for the first time\n         // Or the user was subscribed -> unsubscribed -> subscribed\n         stateChanges.to.userId\n        // Make a POST call to your server with the user ID\n      }\n   }",
      "language": "swift"
    }
  ]
}
[/block]

Once the Player ID is saved, you can:
1. Target devices with push and email through our [Create Notification REST API Call](ref:create-notification) using the `include_player_ids` targeting parameter. See [Sending Transactional Messages](doc:transactional-messages).
2. Use the [List Upload](doc:import-user-tags) feature to tag and segment users based on the `player_id` set in our system.
3. Use the [API Edit Device Call](https://documentation.onesignal.com/reference#edit-device) to update `tags` or `external_user_id`'s on devices.

If you haven't already done so, please see our [Data Integration blog post](https://onesignal.com/blog/data-integration-and-tagging-using-onesignal/) for more details.

----

# Linking Data Between OneSignal and a Database

Other common data you want to link between your Database and OneSignal are:
- Email Addresses - see [Import Email Addresses](doc:import-email-addresses).
- Phone Numbers - see [Import Phone Numbers](doc:import-phone-numbers).
- Other Custom Data - see [Data Tags](doc:add-user-data-tags) for details on this data.

Most custom data can be stored to OneSignal in the form of [Data Tags](doc:add-user-data-tags) which are `key:value` pairs of string or integer data. We do not recommend storing array or dictionary data types as tags.

Any data tags sent to OneSignal should be for the purpose of sending notifications, either through creating [Segments](doc:segmentation) or using [API Filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters).

Tags can also be used within notifications for [Message Personalization](doc:personalization), i.e adding custom information into the push like the "username" or "last product added to cart".