---
title: "SDK Reference"
slug: "sdk-reference"
excerpt: "Comprehensive reference of OneSignal's SDK methods"
hidden: false
createdAt: "2019-10-23T19:41:28.207Z"
updatedAt: "2022-02-02T20:56:46.565Z"
---
Some methods below require the OneSignal SDK Versions: 
- Android 4.0.0+
- iOS 3.0.0+
- React Native 4.0.0+
- Flutter 3.0.0+
- Cordova/Ionic 3.0.0+

See [Mobile SDKs API Migration Guides](doc:mobile-2020-api-migration-guide) to upgrade the OneSignal SDK or the [old SDK Reference](https://documentation.onesignal.com/v7.0/docs/sdk-reference).

# Debugging

## `setLogLevel` Method

Enable logging to help debug if you run into an issue setting up OneSignal. This selector is static, so you can call it before OneSignal init. For websites see [Debugging with Browser Tools](https://documentation.onesignal.com/docs/troubleshooting-web-push#debugging-using-browser-developer-tools).
[block:parameters]
{
  "data": {
    "h-0": "Parameters",
    "0-0": "`logLevel`",
    "1-0": "`visualLevel`",
    "1-1": "LOG_LEVEL",
    "0-1": "LOG_LEVEL",
    "0-2": "Sets the logging level to print to the Android LogCat log or Xcode log.",
    "1-2": "Sets the logging level to show as alert dialogs.",
    "h-1": "Type",
    "h-2": "Description"
  },
  "cols": 3,
  "rows": 2
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "//The following options are available with increasingly more information:\n//NONE, FATAL, ERROR, WARN, INFO, DEBUG, VERBOSE\nOneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);",
      "language": "java"
    },
    {
      "code": "//The following options are available with increasingly more information: \n//.LL_NONE, .LL_FATAL, .LL_ERROR, .LL_WARN, .LL_INFO, .LL_DEBUG, .LL_VERBOSE.\nOneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)",
      "language": "swift"
    },
    {
      "code": "////The following options are available with increasingly more information: \n//ONE_S_LL_NONE, ONE_S_LL_FATAL, ONE_S_LL_ERROR, ONE_S_LL_WARN, ONE_S_LL_INFO, ONE_S_LL_DEBUG, ONE_S_LL_VERBOSE.\n[OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];",
      "language": "objectivec"
    },
    {
      "code": "//The following options are available with increasingly more information:\n//NONE, FATAL, ERROR, WARN, INFO, DEBUG, VERBOSE\nOneSignal.SetLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "//The following options are available with increasingly more information: \n//0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE\nOneSignal.setLogLevel(6, 0);\n",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "//The following options are available with increasingly more information: \n//0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE\n// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//The following options are available with increasingly more information:\n//none, fatal, error, warn, info, debug, verbose\nOneSignal.shared.setLogLevel(OSLogLevel.verbose, OSLogLevel.none);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "//The following options are available with increasingly more information:\n//NONE, FATAL, ERROR, WARN, INFO, DEBUG, VERBOSE\n// Needs: using Com.OneSignal.Abstractions;\nOneSignal.Current.SetLogLevel(LOG_LEVEL.VERBOSE, LOG_LEVEL.NONE);\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "-- The following options are available with increasingly more information:\n--0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE\nOneSignal.SetLogLevel(6, 0)",
      "language": "lua",
      "name": "Corona"
    }
  ]
}
[/block]
----

# iOS Push Prompting

iOS Apps have a native [Alert Prompt](https://developer.apple.com/documentation/usernotifications/asking_permission_to_use_notifications) that must be displayed and the user must authorize permission for your app to send them push notifications. iOS also supports [Provisional Push Notifications](doc:ios-customizations#provisional-push-notifications).

You can display this Alert using the OneSignal SDK in 2 ways:

- **Recommended:** use OneSignal's In-App Message Soft-Prompt before displaying the Native Alert. Details: [iOS Push Opt-In Prompt Guide](doc:ios-push-opt-in-prompt).
- [Programmatically Trigger the Native Alert Prompt](doc:ios-push-opt-in-prompt#programmatically-triggering-the-native-ios-permission-prompt) with the OneSignal SDK `promptForPushNotifications` method. 

----

# External User Ids

OneSignal creates and stores device & channel level data under a unique OneSignal Id called the **`player_id`**. A single user can have multiple `player_id` records based on how many devices, email addresses, and phone numbers they use to interact with your app/site.

You can combine `player_id` records in OneSignal under a unique User Id called the **`external_user_id`**.

See the [External User Ids](doc:external-user-ids) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***identifier authentication token*** and send it to your site. 

----

#Tags

Data Tags are custom `key : value` pairs of string or number data you set on users based on events or user data of your choosing. See [Data Tags Overview](doc:add-user-data-tags) for more details on what tags are used for.

See [Data Tag Implementation](doc:data-tag-implementation) for SDK Method details.

----

# User Data

Methods to get the OneSignal Player ID, subscription status, prompt status and push token.

Use `addPermissionObserver` or `addSubscriptionObserver` to react to changes. For example, update your server when the user becomes subscribed or unsubscribed, and to get the OneSignal Player Id.

If you need to store the OneSignal Player Id within your backend, you can make a REST API call directly from the observer's callback. The OneSignal observer fires only when there is a change (including not firing even if the app has been restarted). This helps ensure you are not making unnecessary network calls to your backend on each app restart if nothing changed.

## `getDeviceState` Method

Returns an `OSDeviceState` object with the current immediate device state info. If called too early will be `null` or no available. - Use to load your UI to the correct state. Such as showing a toggle button to enable notifications.
[block:code]
{
  "codes": [
    {
      "code": "OSDeviceState device = OneSignal.getDeviceState();\n\nString userId = device.getUserId();//push player_id\nString emailUserId = device.getEmailUserId();//email player_id\nString smsUserId = device.getSMSUserId();//sms player_id\n\nString emailAddress = device.getEmailAddress();\nString smsNumber = device.getSMSNumber();\nString getPushToken = device.getPushToken();\n\nboolean areNotificationsEnabled = device.areNotificationsEnabled();\nboolean isSubscribed = device.isSubscribed();//Push Subscription Status\nboolean isPushDisabled = device.isPushDisabled();//Is push disabled with disablePush method\n\nboolean isEmailSubscribed = device.isEmailSubscribed();\nboolean isSMSSubscribed = device.isSMSSubscribed();",
      "language": "java"
    },
    {
      "code": "if let deviceState = OneSignal.getDeviceState() {\n    let emailAddress = deviceState.emailAddress\n    print(\"Email Address tied to this device with setEmail: \", emailAddress ?? \"called too early or not set yet\" )\n    let emailUserId = deviceState.emailUserId\n    print(\"OneSignal Email player ID: \", emailUserId ?? \"called too early or not set yet\")\n    let hasNotificationPermission = deviceState.hasNotificationPermission\n    print(\"Has device allowed push permission at some point: \", hasNotificationPermission)\n    let isEmailSubscribed = deviceState.isEmailSubscribed\n    print(\"is the email address tied to this record subscribed to receive email: \", isEmailSubscribed)\n    let isPushDisabled = deviceState.isPushDisabled\n    print(\"Push notifications are disabled with disablePush method: \", isPushDisabled)\n    let isSMSSubscribed = deviceState.isSMSSubscribed\n    print(\"is the phone number tied to this record subscribed to receive sms: \", isSMSSubscribed)\n    let isSubscribed = deviceState.isSubscribed\n    print(\"Device is subscribed to push notifications: \", isSubscribed)\n    let notificationPermissionStatus = deviceState.notificationPermissionStatus.rawValue\n    print(\"Device's notification permission status: \", notificationPermissionStatus)\n    let pushToken = deviceState.pushToken\n    print(\"Device's push token: \", pushToken ?? \"called too early or not set yet\" )\n    let smsNumber = deviceState.smsNumber\n    print(\"Phone Number tied to this device with setSMSNumber: \", smsNumber ?? \"called too early or not set yet\" )\n    let smsUserId = deviceState.smsUserId\n    print(\"OneSignal SMS player ID: \", smsUserId ?? \"called too early or not set yet\")\n    let userId = deviceState.userId\n    print(\"OneSignal Push Player ID: \", userId ?? \"called too early, not set yet\")\n}",
      "language": "swift"
    },
    {
      "code": "OSDeviceState *deviceState = [OneSignal getDeviceState];\nNSString *userId = deviceState.userId; //push player_id\nNSString *pushToken = deviceState.pushToken;\nBOOL subscribed = deviceState.isSubscribed;",
      "language": "objectivec"
    },
    {
      "code": "//See GetPermissionSubscriptionState method: \n//https://documentation.onesignal.com/v7.0/docs/unity-sdk#getpermissionsubscriptionstate\nvar status = OneSignal.GetPermissionSubscriptionState();\nstatus.permissionStatus.hasPrompted;\nstatus.permissionStatus.status;\n\nstatus.subscriptionStatus.subscribed;\nstatus.subscriptionStatus.userSubscriptionSetting;\nstatus.subscriptionStatus.userId;\nstatus.subscriptionStatus.pushToken;",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "const deviceState = await OneSignal.getDeviceState();",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.getDeviceState().then((deviceState) {\n     print(\"OneSignal: device state: ${deviceState.jsonRepresentation()}\");\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.getDeviceState(function(stateChanges) {\n  console.log('OneSignal getDeviceState: ' + JSON.stringify(stateChanges));\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
### `OSDeviceState`
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method/Property",
    "h-2": "Description",
    "7-0": "`Bool`",
    "7-1": "`isSubscribed()`\n`isSubscribed`",
    "7-2": "Get whether the device is subscribed to receive OneSignal push notifications.",
    "8-0": "`Bool`",
    "8-1": "`isPushDisabled()`\n`isPushDisabled`",
    "8-2": "Returns the value of what was sent to `OneSignal.disablePush(bool)`.\nFalse by default.",
    "9-0": "`Bool`",
    "9-1": "`isEmailSubscribed()`\n`isEmailSubscribed`",
    "9-2": "If the email address passed into `setEmail` for the device is subscribed to email.",
    "10-0": "`Bool`",
    "10-1": "`isSMSSubscribed()`\n`isSMSSubscribed`",
    "10-2": "If the phone number passed into `setSMSNumber` for the device is subscribed to SMS.",
    "11-0": "`Integer`",
    "11-1": "`notificationPermissionStatus`",
    "11-2": "Current notification permission status of the device.\n\n0 - \"NotDetermined\" - The user hasn't yet made a choice about whether the app is allowed to schedule notifications.\n\n1 - \"Denied\" - The app isn't authorized to schedule or receive notifications.\n\n2 - \"Authorized\" - The app is authorized to schedule or receive notifications.\n\n3 - \"Provisional\" - The application is provisionally authorized to post noninterruptive user notifications. See [iOS Customizations](https://documentation.onesignal.com/docs/ios-customizations)\n\n4 - \"Ephemeral\" - For [App Clips](https://documentation.onesignal.com/docs/app-clip-support). The app is authorized to schedule or receive notifications for a limited amount of time.",
    "3-0": "`String`\n`NSString`",
    "3-1": "`getEmailAddress()`\n`emailAddress`",
    "3-2": "Get the email address tied to the device.\nOnly available if `OneSignal.setEmail()` was called.",
    "6-0": "`Bool`",
    "6-1": "`areNotificationsEnabled()` (Android)\n`hasNotificationPermission` (iOS)",
    "6-2": "Get whether notifications are enabled on the device at the app level.\n\nAndroid: this is the same value as [`areNotificationsEnabled()`](https://developer.android.com/reference/androidx/core/app/NotificationManagerCompat) method.",
    "5-0": "`String`\n`NSString`",
    "5-1": "`getPushToken()`\n`pushToken`",
    "5-2": "Get device's push token identifier.",
    "0-0": "`String`\n`NSString`",
    "0-1": "`getUserId()`\n`userId`",
    "0-2": "Get the OneSignal Push Player Id.",
    "1-0": "`String`\n`NSString`",
    "1-1": "`getEmailUserId()`\n`emailUserId`",
    "1-2": "Get the OneSignal Email Player Id.\nOnly available if `OneSignal.setEmail()` was called.",
    "2-0": "`String`\n`NSString`",
    "2-1": "`getSMSUserId()`\n`smsUserId`",
    "2-2": "Get the OneSignal SMS Player Id.\nOnly available if `OneSignal.getSMSNumber()` was called.",
    "4-0": "`String`\n`NSString`",
    "4-1": "`getSMSNumber()`\n`smsNumber`",
    "4-2": "Get the SMS Phone Number tied to the device.\nOnly available if `OneSignal.setSMSNumber()` was called."
  },
  "cols": 3,
  "rows": 12
}
[/block]

## `addPermissionObserver` Method

The `onOSPermissionChanged` method will be fired on the passed-in object when a notification permission setting changes.

This includes the following events:

* Notification permission prompt shown (iOS)
* The user accepting or declining the permission prompt (iOS)
* Enabling or disabling notifications for your app in the App Settings and after returning to your app

Instance is given to your `onOSPermissionChanged` method, which provides what the value was (**"from"**) and what the value is now (**"to"**).

Any object implementing the `OSPermissionObserver` and/or the `OSSubscriptionObserver` protocols can be added as an observer. You can call `removePermissionObserver` to remove any existing listeners.

OneSignal uses a weak reference to the observer to prevent leaks.
[block:code]
{
  "codes": [
    {
      "code": "public class MainActivity extends Activity implements OSPermissionObserver {\n  protected void onCreate(Bundle savedInstanceState) {\n    OneSignal.addPermissionObserver(this);\n  }\n  \n  public void onOSPermissionChanged(OSPermissionStateChanges stateChanges) {\n    if (stateChanges.getFrom().getEnabled() &&\n        !stateChanges.getTo().getEnabled()) {\n         new AlertDialog.Builder(this)\n             .setMessage(\"Notifications Disabled!\")\n             .show();\n      }\n   \n      Log.i(\"Debug\", \"onOSPermissionChanged: \" + stateChanges);\n  }\n}\n\n// Example Logcat entry - User disabling notifications then returning to your app.\n// onOSPermissionChanged{\"from\":{\"enabled\":true},\"to\":{\"enabled\":false}}",
      "language": "java"
    },
    {
      "code": "// AppDelegate.swift\n// Add OSPermissionObserver after UIApplicationDelegate\nclass AppDelegate: UIResponder, UIApplicationDelegate, OSPermissionObserver {\n\n   func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n      // Add your AppDelegate as an obsserver\n      OneSignal.add(self as OSPermissionObserver)\n   }\n\n   // Add this new method\n   func onOSPermissionChanged(_ stateChanges: OSPermissionStateChanges!) {\n      // Example of detecting answering the permission prompt\n      if stateChanges.from.status == OSNotificationPermission.notDetermined {\n         if stateChanges.to.status == OSNotificationPermission.authorized {\n            print(\"Thanks for accepting notifications!\")\n         } else if stateChanges.to.status == OSNotificationPermission.denied {\n            print(\"Notifications not accepted. You can turn them on later under your iOS settings.\")\n         }\n      }\n      // prints out all properties\n      print(\"PermissionStateChanges: \\n\\(stateChanges)\")\n   }\n\n   // Output:\n   /*\n   Thanks for accepting notifications!\n   PermissionStateChanges:\n   Optional(<OSSubscriptionStateChanges:\n   from: <OSPermissionState: hasPrompted: 0, status: NotDetermined>,\n   to:   <OSPermissionState: hasPrompted: 1, status: Authorized>\n   >\n   */\n}",
      "language": "swift"
    },
    {
      "code": "// AppDelegate.h\n// Add OSPermissionObserver after UIApplicationDelegate\n@interface AppDelegate : UIResponder <UIApplicationDelegate, OSPermissionObserver>\n@end\n\n// AppDelegate.m\n@implementation AppDelegate\n  \n- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  // Add your AppDelegate as an obsserver\n  [OneSignal addPermissionObserver:self];\n}\n\n// Add this new method\n- (void)onOSPermissionChanged:(OSPermissionStateChanges*)stateChanges {\n  \n    // Example of detecting anwsering the permission prompt\n    if (stateChanges.from.status == OSNotificationPermissionNotDetermined) {\n      if (stateChanges.to.status == OSNotificationPermissionAuthorized)\n         NSLog(@\"Thanks for accepting notifications!\");\n      else if (stateChanges.to.status == OSNotificationPermissionDenied)\n         NSLog(@\"Notifications not accepted. You can turn them on later under your iOS settings.\");\n    }\n    \n   // prints out all properties \n   NSLog(@\"PermissionStateChanges:\\n%@\", stateChanges);\n}\n\n// Output:\n/*\nThanks for accepting notifications!\nPermissionStateChanges:\n<OSSubscriptionStateChanges:\nfrom: <OSPermissionState: hasPrompted: 1, status: NotDetermined>,\nto:   <OSPermissionState: hasPrompted: 1, status: Authorized>\n>\n*/\n\n@end",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.permissionObserver += OneSignal_permissionObserver;\n\nprivate void OneSignal_permissionObserver(OSPermissionStateChanges stateChanges) {\n       // Example of detecting anwsering the permission prompt\n    if (stateChanges.from.status == OSNotificationPermission.NotDetermined) {\n      if (stateChanges.to.status == OSNotificationPermission.Authorized)\n         Debug.Log(\"Thanks for accepting notifications!\");\n      else if (stateChanges.to.status == OSNotificationPermission.Denied)\n         Debug.Log(\"Notifications not accepted. You can turn them on later under your device settings.\");\n    }\n   \n    Debug.Log(\"stateChanges.to.status: \" + stateChanges.to.status);\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.addPermissionObserver(event => {\n    console.log(\"OneSignal: permission changed:\", event);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setPermissionObserver((OSPermissionStateChanges changes) {\n\t// will be called whenever the permission changes\n  \n  if (changes.to.status == OSNotificationPermission.authorized) {\n    //tells you that the user has fully authorized push permissions\n  }\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addPermissionObserver(function(state) {\n  console.log(\"Notification permission state changed: \" + state.hasPrompted);\n  console.log(\"Notification permission status: \" + state.status);\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//Currently not available, use the idsAvailableCallback and check if a pushtoken is provided to make sure the user is subscribed",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
## `addSubscriptionObserver` Method

- **Web Push** see [`subscriptionChange` Event](doc:web-push-sdk#subscriptionchange-event).
- **Email**: see [`addEmailSubscriptionObserver` Method](doc:email-sdk-methods#email-subscription-observer).
- **SMS**: see [`addSMSSubscriptionObserver` Method](doc:sms-sdk-methods#sms-subscription-observer).

The `onOSSubscriptionChanged` method will be fired on the passed-in object when a notification subscription property changes.

This includes the following events:
* Getting a push token from Google or Apple
* Getting a player/user id from OneSignal
* `OneSignal.disablePush` is called
* User disables or enables notifications

The instance is given to your `onOSSubscriptionChanged` method which provides what the value was (**"from"**) and what the value is now (**"to"**).

Any object implementing the `OSPermissionObserver` and/or the `OSSubscriptionObserver` protocols can be added as an observer. You can call `removePermissionObserver` to remove any existing listeners.

OneSignal uses a weak reference to the observer to prevent leaks.
[block:code]
{
  "codes": [
    {
      "code": "public class MainActivity extends Activity implements OSSubscriptionObserver {\n  protected void onCreate(Bundle savedInstanceState) {\n    OneSignal.addSubscriptionObserver(this);\n  }\n  \n  public void onOSSubscriptionChanged(OSSubscriptionStateChanges stateChanges) {\n    if (!stateChanges.getFrom().getSubscribed() &&\n        stateChanges.getTo().getSubscribed()) {\n         new AlertDialog.Builder(this)\n             .setMessage(\"You've successfully subscribed to push notifications!\")\n             .show();\n        // get player ID\n        stateChanges.getTo().getUserId();\n      }\n   \n      Log.i(\"Debug\", \"onOSSubscriptionChanged: \" + stateChanges);\n  }\n}\n\n/*\nExample Logcat entry - User disabling notifications then returning to your app.\nonOSSubscriptionChanged:\n{\"from\":{\"pushToken\":\"APA91bG9cmZ262s5gJhr8jvbg1q7aiviEC6lcOCgAQliEzHKO3eOdX5cm7IQqMSWfy8Od7Ol3jSjFfvCfeO2UYUpanJCURJ8RdhgEuV8grYxOCwPNJr5GoqcWTQOaL9u-qE2PQcFlv4K\",\"userSubscriptionSetting\":true,\"subscribed\":false},\n \"to\":  {\"userId\":\"22712a53-9b5c-4eab-a828-f18f81167fef\",\"pushToken\":\"APA91bG9cmZ262s5gJhr8jvbg1q7aiviEC6lcOCgAQliEzHKO3eOdX5cm7IQqMSWfy8Od7Ol3jSjFfvCfeO2UYUpanJCURJ8RdhgEuV8grYxOCwPNJr5GoqcWTQOaL9u-qE2PQcFlv4K\",\"userSubscriptionSetting\":true,\"subscribed\":true}}",
      "language": "java"
    },
    {
      "code": "// AppDelegate.swift\n// Add OSSubscriptionObserver after UIApplicationDelegate\nclass AppDelegate: UIResponder, UIApplicationDelegate, OSSubscriptionObserver {\n\n   func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n      // Add your AppDelegate as an obsserver\n      OneSignal.add(self as OSSubscriptionObserver)\n   }\n\n   // Add this new method\n   func onOSSubscriptionChanged(_ stateChanges: OSSubscriptionStateChanges!) {\n      if !stateChanges.from.subscribed && stateChanges.to.subscribed {\n         print(\"Subscribed for OneSignal push notifications!\")\n         // get player ID\n         stateChanges.to.userId\n      }\n      print(\"SubscriptionStateChange: \\n\\(stateChanges)\")\n   }\n\n   // Output:\n   /*\n   Subscribed for OneSignal push notifications!\n   PermissionStateChanges:\n   Optional(<OSSubscriptionStateChanges:\n   from: <OSSubscriptionState: userId: (null), pushToken: 0000000000000000000000000000000000000000000000000000000000000000 userSubscriptionSetting: 1, subscribed: 0>,\n   to:   <OSSubscriptionState: userId: 11111111-222-333-444-555555555555, pushToken: 0000000000000000000000000000000000000000000000000000000000000000, userSubscriptionSetting: 1, subscribed: 1>\n   >\n   */\n}",
      "language": "swift"
    },
    {
      "code": "// AppDelegate.h\n// Add OSSubscriptionObserver after UIApplicationDelegate\n@interface AppDelegate : UIResponder <UIApplicationDelegate, OSSubscriptionObserver>\n@end\n\n// AppDelegate.m\n@implementation AppDelegate\n  \n- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  // Add your AppDelegate as an obsserver\n  [OneSignal addSubscriptionObserver:self];\n}\n\n// Add this new method\n- (void)onOSSubscriptionChanged:(OSSubscriptionStateChanges*)stateChanges {\n  \n    // Example of detecting subscribing to OneSignal\n    if (!stateChanges.from.subscribed && stateChanges.to.subscribed) {\n      NSLog(@\"Subscribed for OneSignal push notifications!\");\n      // get player ID\n      stateChanges.to.userId;\n    }\n    \n   // prints out all properties\n   NSLog(@\"SubscriptionStateChanges:\\n%@\", stateChanges);\n}\n\n// Output:\n/*\nSubscribed for OneSignal push notifications!\nPermissionStateChanges:\n<OSSubscriptionStateChanges:\nfrom: <OSSubscriptionState: userId: (null), pushToken: 0000000000000000000000000000000000000000000000000000000000000000 userSubscriptionSetting: 1, subscribed: 0>,\nto:   <OSSubscriptionState: userId: 11111111-222-333-444-555555555555, pushToken: 0000000000000000000000000000000000000000000000000000000000000000, userSubscriptionSetting: 1, subscribed: 1>\n>\n*/\n\n@end",
      "language": "objectivec"
    },
    {
      "code": "//More details: https://documentation.onesignal.com/docs/unity-sdk#section-subscription-observer\nOneSignal.subscriptionObserver += OneSignal_subscriptionObserver;\n\nprivate void OneSignal_subscriptionObserver(OSSubscriptionStateChanges stateChanges) {\n      Debug.Log(\"stateChanges: \" + stateChanges);\n      Debug.Log(\"stateChanges.to.userId: \" + stateChanges.to.userId);\n      Debug.Log(\"stateChanges.to.subscribed: \" + stateChanges.to.subscribed);\n   }",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.addSubscriptionObserver(event => {\n  console.log(\"OneSignal: subscription changed event:\", event);\n  console.log(\"OneSignal: subscription changed from userId:\", event.from.userId);\n  console.log(\"OneSignal: subscription changed to userId:\", event.to.userId);\n  console.log(\"OneSignal: subscription changed from pushToken:\", event.from.pushToken);\n  console.log(\"OneSignal: subscription changed to pushToken:\", event.to.pushToken);\n  console.log(\"OneSignal: subscription changed from isPushDisabled:\", event.from.isPushDisabled);\n  console.log(\"OneSignal: subscription changed to isPushDisabled:\", event.to.isPushDisabled);\n  console.log(\"OneSignal: subscription changed from isSubscribed:\", event.from.isSubscribed);\n  console.log(\"OneSignal: subscription changed to isSubscribed:\", event.to.isSubscribed);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "//More details: https://documentation.onesignal.com/docs/flutter-sdk#section--setsubscriptionobserver-\nOneSignal.shared.setSubscriptionObserver((OSSubscriptionStateChanges changes) {\n  //will be called whenever the OS subscription changes\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addSubscriptionObserver(function (state) {\n  if (!state.from.subscribed && state.to.subscribed) {\n    console.log(\"Subscribed for OneSignal push notifications!\")\n    // get player ID\n    state.to.userId\n  }\n  console.log(\"Push Subscription state changed: \" + JSON.stringify(state));\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//Currently not available, use the idsAvailableCallback and check if a pushtoken is provided to make sure the user is subscribed: https://documentation.onesignal.com/docs/xamarin-sdk#section--idsavailablecallback-\n",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
##`setLanguage` Method

Language is detected and set automatically through the OneSignal SDK based on the device settings. This method allows you to change that language by passing in the 2-character, lowercase language code. See [Supported Languages](doc:language-localization#what-languages-are-supported).
[block:code]
{
  "codes": [
    {
      "code": "//Requires SDK 3.16.0+\nOneSignal.setLanguage(\"es\");",
      "language": "java"
    },
    {
      "code": "//Requires SDK 3.6.0+\nOneSignal.setLanguage(\"es\")",
      "language": "swift"
    },
    {
      "code": "//Requires SDK 3.6.0+\n[OneSignal setLanguage:@\"es\"];",
      "language": "objectivec"
    },
    {
      "code": "//Coming soon",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "//Requires SDK 3.2.0+\nOneSignal.setLanguage(\"es\");",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "//Requires SDK 4.2.0+\nOneSignal.setLanguage(\"es\");",
      "language": "javascript",
      "name": "React Native (js)"
    }
  ]
}
[/block]
----

#Privacy

## `setRequiresUserPrivacyConsent` Method

For GDPR users, your application should call this method before initialization of the SDK. 

If you pass in `true`, your application will need to call `provideConsent(true)` before the OneSignal SDK gets fully initialized. Until this happens, you can continue to call methods (such as `sendTags()`), but nothing will happen.

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setRequiresUserPrivacyConsent(true);",
      "language": "java"
    },
    {
      "code": "//to require the user's consent before the SDK initializes\nOneSignal.setRequiresUserPrivacyConsent(true);",
      "language": "swift"
    },
    {
      "code": "//to require the user's consent before the SDK initializes\n[OneSignal setRequiresUserPrivacyConsent:true];",
      "language": "objectivec"
    },
    {
      "code": "void YourAppInitMethod() {\n  // SetRequiresUserPrivacyConsent will prevent\n  //   initialization until UserDidProvideConsent(true) is called\n  OneSignal.StartInit(\"YOUR_APP_ID\")\n    .SetRequiresUserPrivacyConsent(true)\n    .EndInit();\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "// Will delay initialization of the SDK until the user provides consent\nOneSignal.setRequiresUserPrivacyConsent(true);",
      "language": "javascript",
      "name": "Reactive Native"
    },
    {
      "code": "await OneSignal.shared.setRequiresUserPrivacyConsent(true);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "//will delay initialization of the SDK until the user provides consent\n// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setRequiresUserPrivacyConsent(true);",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//will delay initialization of the SDK\n//make sure to call before init()\nOneSignal.SetRequiresUserPrivacyConsent(true);\n",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
## Consent Granted

If your application is set to require the user's privacy consent, you can provide this consent using this method. Until you call `provideUserConsent(true)`, the SDK will not fully initialize, and will not send any data to OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "public void onUserTappedProvidePrivacyConsent(View v) {\n  //will initialize the OneSignal SDK and enable push notifications\n  OneSignal.provideUserConsent(true);\n}",
      "language": "java"
    },
    {
      "code": "@IBAction func userTappedProvideConsentButton(_ sender : UIButton) {\n  //this will complete the initialization of the SDK\n\tOneSignal.consentGranted(true); \n}",
      "language": "swift"
    },
    {
      "code": "- (IBAction)setEmailButtonPressed:(UIButton *)sender {\n  //this will complete the initialization of the SDK\n  [OneSignal consentGranted:true];\n}",
      "language": "objectivec"
    },
    {
      "code": "void UserAcceptedConsent() {\n   // Only needs to be called once,\n   //   OneSignal will remember the last answer \n   OneSignal.UserDidProvideConsent(true);\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "function userTappedProvideConsentButton() {\n  // Will initialize the SDK and register for push notifications\n  OneSignal.provideUserConsent(true);\n}",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// the SDK will now initialize\nawait OneSignal.shared.consentGranted(true);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.userProvidedPrivacyConsent((providedConsent) => {\n  //if providedConsent == true, it means the SDK has been initialized and can be used\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "PrivacyConsentButton.TouchUpInside += delegate\n{\n  //the SDK will now be initialized\n\tOneSignal.UserDidProvidePrivacyConsent(true);\n};",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

----

# Location Data

## `setLocationShared` Method

Disable or enable location collection (defaults to enabled if your app has location permission).

**Note:** This method must be called **before** OneSignal `initWithLaunchOptions` on iOS.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setLocationShared(false);",
      "language": "java"
    },
    {
      "code": "OneSignal.setLocationShared(false)",
      "language": "swift"
    },
    {
      "code": "[OneSignal setLocationShared:false];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.SetLocationShared(false);",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.setLocationShared(false);",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setLocationShared(false)",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "await OneSignal.shared.setLocationShared(false);\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.SetLocationShared(false);",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "//Our Web SDK does not track location, you can setup the browser to track this and tag the user with the latitutde and longitude",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]
## `isLocationShared` Method

Return a boolean that indicates location shared state (defaults to true if your app has location permission).
[block:code]
{
  "codes": [
    {
      "code": "boolean locationShared = OneSignal.isLocationShared();",
      "language": "java"
    },
    {
      "code": "let locationShared = OneSignal.isLocationShared()",
      "language": "swift"
    },
    {
      "code": "BOOL locationShared = [OneSignal isLocationShared];",
      "language": "objectivec"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.isLocationShared(function(shared) {\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
## `promptLocation` Method

**Recommended:** use OneSignal's In-App Message Soft-Prompt before displaying the Native Alert. Details: [Location Opt-In Prompt](doc:location-opt-in-prompt).

Prompts the user for location permissions to allow geotagging from the OneSignal dashboard. This lets you send notifications based on the device's location. See [Location-Triggered Notifications](doc:location-triggered-event) for more details.

Make sure you add location permissions in your `AndroidManifest.xml` and/or `info.plist`.
[block:code]
{
  "codes": [
    {
      "code": "// Make sure you add one of the following permissions\n<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>\n<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\"/>\n<uses-permission android:name=\"android.permission.ACCESS_BACKGROUND_LOCATION\" />",
      "language": "xml",
      "name": "AndroidManifest.xml"
    },
    {
      "code": "//These are examples of how you may setup the app. See Apple's Guide on this: https://developer.apple.com/documentation/corelocation/requesting_authorization_for_location_services\n// Example plist image: https://i.imgur.com/OZDQpyQ.png\n\n<key>NSLocationUsageDescription</key>\n  <string>Your message goes here</string>\n<key>NSLocationWhenInUseUsageDescription</key>\n\t<string>Your message goes here</string>  \n<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>\n  <string>Your message goes here</string>\n<key>NSLocationAlwaysUsageDescription</key>\n\t<string>Your message goes here</string>\n<key>UIBackgroundModes</key>\n\t<array>\n\t\t<string>location</string>\n\t\t<string>remote-notification</string>\n\t</array>\n\n",
      "language": "text",
      "name": "info.plist"
    }
  ]
}
[/block]
On Android, you need to add the location dependency
[block:code]
{
  "codes": [
    {
      "code": "dependencies {\n  ...\n  implementation 'com.google.android.gms:play-services-location:YOUR_PLAY_SERVICES_VERSION'\n}",
      "language": "go",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
Finally, don't forget to call the prompt location method
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.promptLocation();",
      "language": "java"
    },
    {
      "code": "OneSignal.promptLocation()",
      "language": "swift"
    },
    {
      "code": "[OneSignal promptLocation];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.PromptLocation();",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "// Calling promptLocation\nOneSignal.promptLocation();",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "await OneSignal.shared.promptLocationPermission();",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.promptLocation();",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.Current.PromptLocation();",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
----

# Push Notifications

## Notification Events & Payload

OneSignal Provides methods for handling notifications received and clicked/opened events. Details and discussion on implementation and Notification Payload in [SDK Notification Event Handlers](doc:sdk-notification-event-handlers).

To send notifications to users, we recommend using the [Create notification](ref:create-notification) REST API docs, or Messages Dashboard.

## `postNotification` Method

Recommended for scheduling notifications in the future to the current user.
[block:callout]
{
  "type": "warning",
  "title": "User Targeting Warning",
  "body": "You can only use `include_player_ids` as a targeting parameter from your app. Other target options such as `tags` and `included_segments` require your OneSignal App REST API key which can only be used from your server.\n\nSee the [Create notification](ref:create-notification) REST API POST call for a list of all possible options."
}
[/block]

[block:parameters]
{
  "data": {
    "0-1": "JSONObject, NSDictionary*, JSONString, Callback",
    "0-0": "`parameters`",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-2": "Contains notification options, see our [Create notification](ref:create-notification) POST call for all options."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "try {\n  OneSignal.postNotification(new JSONObject(\"{'contents': {'en':'Test Message'}, 'include_player_ids': ['\" + \"userId\" + \"']}\"),\n     new OneSignal.PostNotificationResponseHandler() {\n       @Override\n       public void onSuccess(JSONObject response) {\n         Log.i(\"OneSignalExample\", \"postNotification Success: \" + response.toString());\n       }\n\n       @Override\n       public void onFailure(JSONObject response) {\n         Log.e(\"OneSignalExample\", \"postNotification Failure: \" + response.toString());\n       }\n     });\n} catch (JSONException e) {\n  e.printStackTrace();\n}",
      "language": "java"
    },
    {
      "code": "OneSignal.postNotification([\"contents\": [\"en\": \"Test Message\"], \"include_player_ids\": [\"3009e210-3166-11e5-bc1b-db44eb02b120\"]])",
      "language": "swift"
    },
    {
      "code": "[OneSignal postNotification:@{\n   @\"contents\" : @{@\"en\": @\"Test Message\"},\n   @\"include_player_ids\": @[@\"3009e210-3166-11e5-bc1b-db44eb02b120\"]\n}];",
      "language": "objectivec"
    },
    {
      "code": "using OneSignalPush.MiniJSON;\n\nprivate static string oneSignalDebugMessage;\n\nvoid someMethod() {\n// Just an example userId, use your own or get it the devices by using the GetPermissionSubscriptionState method\nstring userId = \"b2f7f966-d8cc-11e4-bed1-df8f05be55ba\";\n\nvar notification = new Dictionary<string, object>();\nnotification[\"contents\"] = new Dictionary<string, string>() { {\"en\", \"Test Message\"} };\n\nnotification[\"include_player_ids\"] = new List<string>() { userId };\n// Example of scheduling a notification in the future.\nnotification[\"send_after\"] = System.DateTime.Now.ToUniversalTime().AddSeconds(30).ToString(\"U\");\n\nOneSignal.PostNotification(notification, (responseSuccess) => {\n  oneSignalDebugMessage = \"Notification posted successful! Delayed by about 30 secounds to give you time to press the home button to see a notification vs an in-app alert.\\n\" + Json.Serialize(responseSuccess);\n}, (responseFailure) => {\n  oneSignalDebugMessage = \"Notification failed to post:\\n\" + Json.Serialize(responseFailure);\n});\n\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "const { userId } = await OneSignal.getDeviceState();\n\nconst notificationObj = {\n  contents: {en: \"Message Body\"},\n  include_player_ids: [userId]\n};\n\nconst jsonString = JSON.stringify(notificationObj);\n\nOneSignal.postNotification(jsonString, (success) => {\n  console.log(\"Success:\", success);\n}, (error) => {\n  console.log(\"Error:\", error );\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.getIds(function(ids) {\n  var notificationObj = { contents: {en: \"message body\"},\n                          include_player_ids: [ids.userId]};\n  window.plugins.OneSignal.postNotification(notificationObj,\n    function(successResponse) {\n      console.log(\"Notification Post Success:\", successResponse);\n    },\n    function (failedResponse) {\n      console.log(\"Notification Post Failed: \", failedResponse);\n      alert(\"Notification Post Failed:\\n\" + JSON.stringify(failedResponse));\n    }\n  );\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "var status = await OneSignal.shared.getPermissionSubscriptionState();\n\nvar playerId = status.subscriptionStatus.userId;\n\nawait OneSignal.shared.postNotification(OSCreateNotification(\n  playerIds: [playerId],\n  content: \"this is a test from OneSignal's Flutter SDK\",\n  heading: \"Test Notification\",\n  send_after: DateTime.now().add(Duration(minutes: 30)).toUtc().toIso8601String();,\n  buttons: [\n    OSActionButton(text: \"test1\", id: \"id1\"),\n    OSActionButton(text: \"test2\", id: \"id2\")\n  ]\n));",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "using OneSignalPush.MiniJSON;\n\nprivate static string oneSignalDebugMessage;\n\nvoid someMethod() {\n// Just an example userId, use your own or get it the devices by calling OneSignal.GetIdsAvailable\nstring userId = \"b2f7f966-d8cc-11e4-bed1-df8f05be55ba\";\n\nvar notification = new Dictionary<string, object>();\nnotification[\"contents\"] = new Dictionary<string, string>() { {\"en\", \"Test Message\"} };\n\nnotification[\"include_player_ids\"] = new List<string>() { userId };\n// Example of scheduling a notification in the future.\nnotification[\"send_after\"] = System.DateTime.Now.ToUniversalTime().AddSeconds(30).ToString(\"U\");\n\nOneSignal.Current.PostNotification(notification, (responseSuccess) => {\n  oneSignalDebugMessage = \"Notification posted successful! Delayed by about 30 secounds to give you time to press the home button to see a notification vs an in-app alert.\\n\" + Json.Serialize(responseSuccess);\n}, (responseFailure) => {\n  oneSignalDebugMessage = \"Notification failed to post:\\n\" + Json.Serialize(responseFailure);\n});\n\n}",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "function IdsAvailable(userID, pushToken)\n    if (pushToken) then\n        local notification = {\n            [\"contents\"] = {[\"en\"] = \"test\"}\n        }\n        notification[\"include_player_ids\"] = {userID}\n        \n        OneSignal.PostNotification(notification,\n            function(jsonData)\n                native.showAlert( \"DEBUG\", \"POST OK!!!\", { \"OK\" } )\n                local json = require \"json\"\n                print(json.encode(jsonData))\n            end,\n            function(jsonData)\n                native.showAlert( \"DEBUG\", \"POST NOT OK!!!\", { \"OK\" } )\n                local json = require \"json\"\n                print(json.encode(jsonData))\n            end\n        )\n    end\nend\n\nOneSignal.IdsAvailableCallback(IdsAvailable)",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "OneSignal.sendSelfNotification(\n  /* Title (defaults if unset) */\n  \"OneSignal Web Push Notification\",\n  /* Message (defaults if unset) */\n  \"Action buttons increase the ways your users can interact with your notification.\", \n   /* URL (defaults if unset) */\n  'https://example.com/?_osp=do_not_open',\n  /* Icon */\n  'https://onesignal.com/images/notification_logo.png',\n  {\n    /* Additional data hash */\n    notificationType: 'news-feature'\n  }, \n  [{ /* Buttons */\n    /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */\n    id: 'like-button',\n    /* The text the button should display. Supports emojis. */\n    text: 'Like',\n    /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */\n    icon: 'http://i.imgur.com/N8SN8ZS.png',\n    /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */\n    url: 'https://example.com/?_osp=do_not_open'\n  },\n  {\n    id: 'read-more-button',\n    text: 'Read more',\n    icon: 'http://i.imgur.com/MIxJp1L.png',\n    url: 'https://example.com/?_osp=do_not_open'\n  }]\n);",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]

## `clearOneSignalNotifications` Method

Android only. iOS provides a standard way to clear notifications by [clearing badge count](doc:badges). There is no specific OneSignal API call for clearing notifications.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.clearOneSignalNotifications();\n",
      "language": "java"
    },
    {
      "code": "OneSignal.ClearOneSignalNotifications();\n",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.clearOneSignalNotifications();",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "//Currently not available",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nOneSignal.clearOneSignalNotifications();\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.Current.ClearOneSignalNotifications();",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.ClearAllNotifications()\n",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "//Not available",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]
## `disablePush` Method

The user must first subscribe through the native prompt or app settings. It does not officially subscribe or unsubscribe them from the app settings, it unsubscribes them from receiving push from OneSignal.
You can only call this method with true to opt out users from receiving notifications through OneSignal. You can pass false later to opt users back into notifications.
[block:code]
{
  "codes": [
    {
      "code": "// Android SDK version 4.x.x\nOneSignal.disablePush(true);\n\n//Android SDK version 3.x.x\nOneSignal.setSubscription(false);",
      "language": "java"
    },
    {
      "code": "// iOS SDK 3.x.x use\nOneSignal.disablePush(true)\n\n// iOS SDK 2.x.x use\nOneSignal.setSubscription(false)",
      "language": "swift"
    },
    {
      "code": "// iOS SDK 3.x.x use\n[OneSignal disablePush:true];\n\n// iOS SDK 2.x.x use\n[OneSignal setSubscription:false];",
      "language": "objectivec"
    },
    {
      "code": "//Coming soon, please use setSubscription for now. More details:\n//https://documentation.onesignal.com/v7.0/docs/unity-sdk#setsubscription\nOneSignal.SetSubscription(false);",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "// RN SDK 4.x.x use\nOneSignal.disablePush(true);\n\n// RN SDK 3.x.x use\nOneSignal.setSubscription(false);",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.disablePush(false);",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "// Flutter SDK 3.x.x use\nawait OneSignal.shared.disablePush(true);\n\n// Flutter SDK 2.x.x use\nawait OneSignal.shared.setSubscription(false);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.SetSubscription(false);",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "OneSignal.SetSubscription(false)",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "OneSignal.setSubscription(false);",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]
## `EnableVibrate` & `EnableSound` Methods

These methods were designed for Android but stopped working in Android 8+ due to a breaking change. To customize going forward, use [Android Notification Categories (Channels)](doc:android-notification-categories).

## `unsubscribeWhenNotificationsAreDisabled` Method
**Only available on Android Native SDK**. If notifications are disabled for your app, unsubscribe the user from OneSignal.

Use case: if notifications are disabled for your app and you still want background notifications to work, pass in false.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.unsubscribeWhenNotificationsAreDisabled(false);",
      "language": "java"
    }
  ]
}
[/block]
## `setLaunchURLsInApp` Method (iOS)
This method can be used to set if launch URLs should be opened in safari or within the application. Set to `true` to launch all notifications with a URL in the app instead of the default web browser. Make sure to call `setLaunchURLsInApp` before the `setAppId` call.
[block:parameters]
{
  "data": {
    "0-0": "`Bool`",
    "0-1": "Boolean indicates if launch URLs should be opened in safari or within the application.",
    "h-0": "Parameter Type",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 1
}
[/block]
----

# In-App Messages

In-App Messages do not require any code to get started, but if you would like to setup custom triggers to display the In-App Message under certain conditions and track IAM lifecycle events, we have SDK methods for you!

See our   [In-App Message SDK Methods](doc:iam-sdk-methods) for details.

----

# Email

OneSignal's Mobile and Web SDKs provide methods for collecting emails, logging out emails, and tracking email subscription changes.

See the [Email SDK Methods](doc:email-sdk-methods) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***Email authentication token*** and send it to your app.

----

# SMS

OneSignal's Mobile and Web SDKs provide methods for collecting phone numbers, logging out phone numbers, and tracking sms subscription.

See the [SMS SDK Methods](doc:sms-sdk-methods) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***SMS authentication token*** and send it to your app.