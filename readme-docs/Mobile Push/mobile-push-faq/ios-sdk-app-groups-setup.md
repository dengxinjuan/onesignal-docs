---
title: "iOS SDK App Groups setup"
slug: "ios-sdk-app-groups-setup"
excerpt: "OneSignal iOS App Groups setup for Badges and Confirmed Deliveries"
hidden: false
createdAt: "2017-11-15T01:52:18.218Z"
updatedAt: "2021-09-28T20:56:18.401Z"
---
[block:callout]
{
  "type": "info",
  "body": "Setting up an App Group in Xcode is required to allow badge incrementing and [Confirmed Deliveries](doc:confirmed-deliveries).",
  "title": "Required for certain features"
}
[/block]
## 1. Add Notification Service Extension

If you have not already done so, follow our [Mobile SDK Setup Guides](doc:mobile-sdk-setup) for iOS to step up the Notification Service Extension.

## 2. Enable "App Groups" Capability

1. In your Main App Target
2. Go to "Signing & Capabilities" > "All" 
3. Click "+ Capability" if you do not have App Groups in your app yet.
4. Select App Groups
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/185ed53-Screen_Shot_2020-04-06_at_6.31.41_PM.png",
        "Screen Shot 2020-04-06 at 6.31.41 PM.png",
        2282,
        1088,
        "#ddd9dd"
      ]
    }
  ]
}
[/block]
5. Under App Groups click the "+" button
6. Set the "App Groups" container to be `group.YOUR_BUNDLE_IDENTIFIER.onesignal` where YOUR_BUNDLE_IDENTIFIER is the same as set in "Bundle Identifier"
7. Press OK
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6efdf3c-Screen_Shot_2020-04-06_at_6.33.27_PM.png",
        "Screen Shot 2020-04-06 at 6.33.27 PM.png",
        2294,
        1046,
        "#e5e2e6"
      ]
    }
  ]
}
[/block]
8. In the OneSignalNotificationServiceExtension Target
9. Go to "Signing & Capabilities" > "All" 
10. Click "+ Capability" if you do not have App Groups in your app yet.
11. Select App Groups
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5e386c2-Screen_Shot_2020-04-06_at_6.40.24_PM.png",
        "Screen Shot 2020-04-06 at 6.40.24 PM.png",
        2270,
        1114,
        "#ddd9dd"
      ]
    }
  ]
}
[/block]
12. Under App Groups click the "+" button
13. Set the "App Groups" container to be `group.YOUR_BUNDLE_IDENTIFIER.onesignal` where YOUR_BUNDLE_IDENTIFIER is the same as your **Main App Target** "Bundle Identifier". **Do Not Include** `OneSignalNotificationServiceExtension`.
14. Press OK
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b3b2c45-5b01fe1-Screen_Shot_2020-04-06_at_6.48.28_PM.png",
        "5b01fe1-Screen_Shot_2020-04-06_at_6.48.28_PM.png",
        2272,
        968,
        "#e4e1e5"
      ]
    }
  ]
}
[/block]
## 3. Setup OneSignal key in .plist
This step is only required if you **don't** want to use the default app group name (which is `group.{your_bundle_id}.onesignal`).

**1.** Open your `Info.plist` file and add a new `OneSignal_app_groups_key` as a `String` type.
**2.** Enter the group name you checked in the last step as it's value.
**3.** Make sure to do the same for the `Info.plist` under the `OneSignalNotificationServiceExtension` folder.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b928190-OneSignal_Xcode_app_groups_plist.png",
        "OneSignal_Xcode_app_groups_plist.png",
        1662,
        824,
        "#e2dcd9"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "That is all you should need to send iOS Push Notifications with [Badges](doc:badges).\n\nIf you are sending push and notice the badge count is not incrementing correctly then continue below."
}
[/block]
## iOS App Groups Troubleshooting

### Deployment Target

Make sure your `OneSignalNotificationServiceExtension` has a Deployment Target of 10 or higher. iOS 10 is when the Notification Service Extension was created for adding [Rich Media](doc:rich-media) to your iOS Push Notifications.

### Entitlements Match

Your Entitlements file may not match your Capabilities selected in Xcode. Check your .entitlements files:  Entitlements-Release.plist file and Entitlements-debug.plist file to make sure you have App Groups enabled for each. 

You can find entitlements file location from Xcode > Your Targets > Build Settings > then search Entitlements.

For example, if your .entitlements file or Entitlements-Release.plist and Entitlements-debug.plist do not contain App Groups, make sure to add them to both targets:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/89a1416-Screen_Shot_2020-04-06_at_7.01.04_PM.png",
        "Screen Shot 2020-04-06 at 7.01.04 PM.png",
        2274,
        274,
        "#dddde3"
      ]
    }
  ]
}
[/block]
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>aps-environment</key>
    <string>production</string>
    <key>com.apple.security.application-groups</key>
    <array>
      <string>group.YOUR_BUNDLE_IDENTIFIER.onesignal</string> <!--Fill your bundle id-->
    </array>
  </dict>
</plist>
```

Make sure these files are setup the same for the Main App Target and OneSignalNotificationServiceExtension Target.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f18de3-Screen_Shot_2020-04-06_at_7.01.23_PM.png",
        "Screen Shot 2020-04-06 at 7.01.23 PM.png",
        2278,
        300,
        "#dfdfe4"
      ]
    }
  ]
}
[/block]
More details see [this github issue](https://github.com/OneSignal/OneSignal-Cordova-SDK/issues/455#issuecomment-537787963).


### Check your Provisioning Profiles are setup

You may need to setup 2 Provisioning Profiles: for your main app target and for the OneSignal Notification Service Extension target.

See Step 5 of [Generate an iOS Push Certificate](https://documentation.onesignal.com/docs/generate-an-ios-push-certificate#section-step-5-provisioning-profiles).

Make sure the App Groups in both Provisioning Profiles (your main app target and Notification Service Extension Target) match in Apple Developer Account. You may need to download these files and import into Xcode.

For example, in your Xamarin iOS project, click on the main app target project and go to Options to see if the new provisioning profile appeared. Do the same for the NSE project and the provisioning profile of the NSE should appear. Both, in the Custom Entitlements should be filled with “Entitlements.plist”. 

For publishing the app to the App Store, some needed to create two provisioning profiles (associated with the Distribution certificates); one for the main app and the other one for the NSE project.

### Logging within the NSE

Badge Counts are saved within the UserDefaults for your App Group. To verify data is being saved correctly, follow these instructions:

#### 1. Add Example User Defaults

In your AppDelegate or first ViewController add the following code replacing the App Group Name (`"group.YOUR_BUNDLE_ID.onesignal"`) with your own:
[block:code]
{
  "codes": [
    {
      "code": "func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n  \n        if let userDefaults = UserDefaults(suiteName: \"group.YOUR_BUNDLE_ID.onesignal\") {\n            userDefaults.set(\"test 1\" as AnyObject, forKey: \"key1\")\n            userDefaults.set(\"test 2\" as AnyObject, forKey: \"key2\")\n            userDefaults.synchronize()\n        }\n        if let userDefaults = UserDefaults(suiteName: \"group.YOUR_BUNDLE_ID.onesignal\") {\n            let value1 = userDefaults.string(forKey: \"key1\")\n            let value2 = userDefaults.string(forKey: \"key2\")\n            print(\"value1 = \", value1?.description ?? \"No value\")\n            print(\"value2 = \", value2?.description ?? \"No value\")\n        }",
      "language": "swift"
    },
    {
      "code": "- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\t\n  NSUserDefaults * shared = [[NSUserDefaults alloc] initWithSuiteName:@\"group.YOUR_BUNDLE_ID.onesignal\"];\n\t[shared setObject:@\"test 1\" forKey:@\"key1\"];\n  [shared setObject:@\"test 2\" forKey:@\"key2\"];\n\t[shared synchronize]; \n",
      "language": "objectivec"
    }
  ]
}
[/block]
#### 2. Log the Example User Defaults within the NotificationServiceExtension

In your `NotificationService` file for the NSE, add the following within the `bestAttemptContent` `if-let` statement:
[block:code]
{
  "codes": [
    {
      "code": "if let bestAttemptContent = bestAttemptContent {\n    OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n    if let userDefaults = UserDefaults(suiteName: \"group.YOUR_BUNDLE_ID.onesignal\") {\n        let value1 = userDefaults.string(forKey: \"key1\")\n        let value2 = userDefaults.string(forKey: \"key2\")\n        print(\"NSE value1 = \", value1?.description ?? \"No value\")\n        print(\"NSE value2 = \", value2?.description ?? \"No value\")\n        bestAttemptContent.title = value1 ?? \"value1 Not Set\"\n        bestAttemptContent.body = value2 ?? \"value2 Not Set\"\n    }\n    contentHandler(bestAttemptContent)\n}",
      "language": "swift"
    },
    {
      "code": "[OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                   withMutableNotificationContent:self.bestAttemptContent];\n\nNSUserDefaults *shared = [[NSUserDefaults alloc] initWithSuiteName:@\"group.YOUR_BUNDLE_ID.onesignal\"];\nid value1 = [shared valueForKey:@\"key1\"];\nid value2 = [shared valueForKey:@\"key2\"];\n\nself.bestAttemptContent.title = value1\nself.bestAttemptContent.body = value2\n\nself.contentHandler(self.bestAttemptContent);",
      "language": "objectivec"
    }
  ]
}
[/block]
#### 3. Run the App on Device and send Push

You can now select the `OneSignalNotificationServiceExtension` Schema and then run the app.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/54b95e4-Screen_Shot_2021-01-13_at_9.18.09_AM.png",
        "Screen Shot 2021-01-13 at 9.18.09 AM.png",
        2320,
        140,
        "#3d3f43"
      ]
    }
  ]
}
[/block]
If you don't change the Schema that is ok, you should see the push data change as well.

Send your device a push notification. 

If you changed the Scheme, view the log Debug Area, you should see:

```
NSE value1 =  test 1
NSE value2 =  test 2
```

And the Push Notification should show `test 1` for the title and `test 2` for the message body.

If you do not see these values set, the App Group in step 1 is not valid and needs to be setup again.