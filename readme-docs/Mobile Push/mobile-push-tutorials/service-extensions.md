---
title: "Service Extensions"
slug: "service-extensions"
excerpt: "Using the iOS and Android Notification Service Extension in your mobile apps."
hidden: false
createdAt: "2019-06-07T22:23:12.452Z"
updatedAt: "2022-03-07T21:57:57.765Z"
---
[block:parameters]
{
  "data": {
    "h-0": "Quick Reference",
    "h-1": "Details",
    "0-0": "[iOS Notification Service Extension](#ios-notification-service-extension)",
    "0-1": "Follow the [SDK Setup Guide](doc:mobile-sdk-setup) used in your app to get started if not done so already.\n\n- See [Getting a Payload from a notification](#getting-a-payload-from-a-notification) within the NSE. You must display content within the push for iOS to handle the payload within the NSE while the App is not in-focus.",
    "2-0": "[Android Notification Service Extension](#android-notification-service-extension)",
    "2-1": "Setup the optional `NotificationServiceExtension` class in your app to receive data in the background with or without displaying a notification.\nOverride specific notification settings depending on client-side app logic such as custom accent color, vibration pattern, or other any other NotificationCompat options available. \n\nSee [Android's documentation on the NotificationCompat options](https://developer.android.com/reference/androidx/core/app/NotificationCompat).",
    "1-0": "[Troubleshooting iOS Notification Service Extension](#troubleshooting-the-ios-notification-service-extension)",
    "1-1": "If you run into issues with the iOS NSE not working, like not getting images or badges not handled correctly."
  },
  "cols": 2,
  "rows": 3
}
[/block]

# Android Notification Service Extension

Add the below Notification Extension Code if you want to do one of the following:
- Receive data in the background with or without displaying a notification.
- Override specific notification settings depending on client side app logic such as custom accent color, vibration pattern, or other any other `NotificationCompat` options available. See [Android's documentation on the NotificationCompat options.](https://developer.android.com/reference/androidx/core/app/NotificationCompat)
[block:callout]
{
  "type": "warning",
  "title": "Requires writing Native Android code & Upgraded SDK",
  "body": "Must be using OneSignal SDK Versions:\n- Android 4.0.0+\n- React Native 4.0.0+\n- Flutter 3.0.0+\n- Cordova/Ionic 3.0.0+\n\nSee [Mobile SDKs API Migration Guides](doc:mobile-2020-api-migration-guide) to upgrade the OneSignal SDK.\n\nFor Unity, Xamarin, Huawei or if you did not update to the latest SDK versions listed above, follow [this Service Extension Guide](https://documentation.onesignal.com/v7.0/docs/service-extensions#android-notification-service-extension)."
}
[/block]

## Step 1. Create a class for the Service Extension

Create a class that extends `OSRemoteNotificationReceivedHandler` and implement the `remoteNotificationReceived` method.

The method `remoteNotificationReceived` parameters are `context` of type `Context` and `notificationReceivedEvent` of type `OSNotificationReceivedEvent`.
[block:code]
{
  "codes": [
    {
      "code": "package your.package.name\n  \nimport android.content.Context;\nimport android.util.Log;\nimport org.json.JSONObject;\n\nimport com.onesignal.OSNotification;\nimport com.onesignal.OSMutableNotification;\nimport com.onesignal.OSNotificationReceivedEvent;\nimport com.onesignal.OneSignal.OSRemoteNotificationReceivedHandler;\n\n@SuppressWarnings(\"unused\")\npublic class NotificationServiceExtension implements OSRemoteNotificationReceivedHandler {\n\n    @Override\n    public void remoteNotificationReceived(Context context, OSNotificationReceivedEvent notificationReceivedEvent) {\n        OSNotification notification = notificationReceivedEvent.getNotification();\n\n        // Example of modifying the notification's accent color\n        OSMutableNotification mutableNotification = notification.mutableCopy();\n        mutableNotification.setExtender(builder -> {\n            // Sets the accent color to Green on Android 5+ devices.\n            // Accent color controls icon and action buttons on Android 5+. Accent color does not change app title on Android 10+\n            builder.setColor(new BigInteger(\"FF00FF00\", 16).intValue());\n            // Sets the notification Title to Red\n            Spannable spannableTitle = new SpannableString(notification.getTitle());\n            spannableTitle.setSpan(new ForegroundColorSpan(Color.RED),0,notification.getTitle().length(),0);\n            builder.setContentTitle(spannableTitle);\n            // Sets the notification Body to Blue\n            Spannable spannableBody = new SpannableString(notification.getBody());\n            spannableBody.setSpan(new ForegroundColorSpan(Color.BLUE),0,notification.getBody().length(),0);\n            builder.setContentText(spannableBody);\n            //Force remove push from Notification Center after 30 seconds\n            builder.setTimeoutAfter(30000);\n            return builder;\n        });\n        JSONObject data = notification.getAdditionalData();\n        Log.i(\"OneSignalExample\", \"Received Notification Data: \" + data);\n\n        // If complete isn't call within a time period of 25 seconds, OneSignal internal logic will show the original notification\n        // To omit displaying a notification, pass `null` to complete()\n        notificationReceivedEvent.complete(mutableNotification);\n    }\n}",
      "language": "java",
      "name": null
    }
  ]
}
[/block]
## Step 2.  Add the following to your `AndroidManifest.xml`.

Add OneSignal class name and your class value as `meta-data` within the `AndroidManifest.xml` file under the application tag. Ignore any "unused" warnings.
[block:code]
{
  "codes": [
    {
      "code": "<application ...> \n  <!-- name doesn't change, value = your class fully name spaced-->\n  <meta-data android:name=\"com.onesignal.NotificationServiceExtension\"\n     android:value=\"com.onesignal.example.NotificationServiceExtension\" />\n</application>",
      "language": "xml",
      "name": null
    }
  ]
}
[/block]
### Getting a payload from a notification  

**Major Release SDKs** (4.x.x) see the [OSNotification class](https://documentation.onesignal.com/docs/40-api-android-native#osnotification-class)

Additionally, the `payload` object has the following two parameters:

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Type",
    "h-2": "Details",
    "0-0": "`restoring`",
    "0-1": "boolean",
    "0-2": "True if the notification was restored after an app update, device reboot, and app opened after being force killed. If you have customized any alerting / priority settings check the restoring flag before applying them. You may want to omit displaying if your notification is no longer relevant to the user.",
    "1-0": "`isAppInFocus`",
    "1-1": "boolean",
    "1-2": "True if the app is open and in focus when the notification arrives."
  },
  "cols": 3,
  "rows": 2
}
[/block]


----

# iOS Notification Service Extension

Setup instructions can be found in each individual SDK [setup guide](https://documentation.onesignal.com/docs/mobile-sdk-setup). 

Apple's docs on the [UNNotificationServiceExtension](https://developer.apple.com/reference/usernotifications/unnotificationserviceextension).

The following features requires the Notification Service Extension:
- [Confirmed Deliveries](doc:confirmed-deliveries) 
- [Badges](https://documentation.onesignal.com/docs/badges#setting-and-clearing-badge-numbers)
- [Media Attachments](https://documentation.onesignal.com/docs/rich-media#rich-notifications) (images, video, & audio clip)
- [Action Buttons](https://documentation.onesignal.com/docs/action-buttons)
- [Influenced Opens with Firebase Analytics](https://documentation.onesignal.com/docs/google-analytics-for-firebase)

## Getting a payload from an iOS notification

In this example, we are setting **Additional Data** through the OneSignal dashboard to `{"custom_message":"Hullabaloo, Caneck, Caneck"}`
[block:code]
{
  "codes": [
    {
      "code": "NSDictionary* dict = request.content.userInfo;\nNSString* custom = [dict objectForKey:@\"custom\"];\nNSString* aps = [dict objectForKey:@\"aps\"];\n\nNSLog(@\"Running NotificationServiceExtension: custom = %@\", custom);\nNSLog(@\"Running NotificationServiceExtension: aps = %@\", aps);\n",
      "language": "objectivec",
      "name": "Objective-C"
    },
    {
      "code": "let userInfo = request.content.userInfo\n\nprint(\"Running NotificationServiceExtension: userInfo = \\(userInfo.description)\")",
      "language": "swift"
    }
  ]
}
[/block]
**Example console output:**
The additional data can then be extracted from the `custom` object using the `a` parameter...
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/634aac2-Screen_Shot_2019-06-26_at_6.45.53_PM.png",
        "Screen Shot 2019-06-26 at 6.45.53 PM.png",
        1712,
        232,
        "#fafafa"
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
        "https://files.readme.io/af7302a-Screen_Shot_2019-06-26_at_6.45.42_PM.png",
        "Screen Shot 2019-06-26 at 6.45.42 PM.png",
        1726,
        306,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
----

## Troubleshooting the iOS Notification Service Extension

If you are having issues with Confirmed Deliveries or Images not showing on iOS mobile apps follow this guide.

**1** Open the `NotificationService.m` or `NotificationService.swift` and replace the whole file contents with the below code. (The code is the same as our original setup code, just adding some additional logging.
[block:code]
{
  "codes": [
    {
      "code": "#import <OneSignal/OneSignal.h>\n\n#import \"NotificationService.h\"\n\n@interface NotificationService ()\n\n@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);\n@property (nonatomic, strong) UNNotificationRequest *receivedRequest;\n@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;\n\n@end\n\n@implementation NotificationService\n\n- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    //If your SDK version is < 3.5.0 uncomment and use this code:\n    /*\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent];\n    self.contentHandler(self.bestAttemptContent);\n    */\n  \n    NSUserDefaults *userDefault = [[NSUserDefaults alloc] initWithSuiteName:@\"group.YOUR_BUNDLE_ID.onesignal\"];\n    NSLog(@\"NSE player_id: %@\", [userDefault  stringForKey:@\"GT_PLAYER_ID\"]);\n    NSLog(@\"NSE app_id: %@\", [userDefault  stringForKey:@\"GT_APP_ID\"]);\n    \n    /* DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n                  Note, this extension only runs when mutable-content is set\n                  Setting an attachment or action buttons automatically adds this */\n    NSLog(@\"Running NotificationServiceExtension\");\n    self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n    \n    [OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];\n   \n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent\n                                   withContentHandler:self.contentHandler];\n}\n\n- (void)serviceExtensionTimeWillExpire {\n    // Called just before the extension will be terminated by the system.\n    // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n    \n    [OneSignal serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n@end\n",
      "language": "objectivec"
    },
    {
      "code": "import UserNotifications\nimport OneSignal\nimport os.log\n\nclass NotificationService: UNNotificationServiceExtension {\n    \n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var receivedRequest: UNNotificationRequest!\n    var bestAttemptContent: UNMutableNotificationContent?\n    \n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.receivedRequest = request;\n        self.contentHandler = contentHandler\n        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        \n        let userInfo = request.content.userInfo\n        let custom = userInfo[\"custom\"]\n        print(\"Running NotificationServiceExtension: userInfo = \\(userInfo.description)\")\n        print(\"Running NotificationServiceExtension: custom = \\(custom.debugDescription)\")\n      //debug log types need to be enabled in Console > Action > Include Debug Messages\n        os_log(\"%{public}@\", log: OSLog(subsystem: \"com.your.bundleid\", category: \"OneSignalNotificationServiceExtension\"), type: OSLogType.debug, userInfo.debugDescription)\n        \n\n        \n        if let bestAttemptContent = bestAttemptContent {\n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            OneSignal.serviceExtensionTimeWillExpireRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n        }\n    }\n    \n}\n",
      "language": "swift"
    }
  ]
}
[/block]
**2** Set your Active Scheme to the `OneSignalNotificationServiceExtension`. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33cb827-Screen_Shot_2021-06-01_at_1.18.22_PM.png",
        "Screen Shot 2021-06-01 at 1.18.22 PM.png",
        2358,
        1150,
        "#393b40"
      ]
    }
  ]
}
[/block]
**3** Build and run the project in Xcode on your device. Then select Window > Devices and Simulators
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0f50e5-Screen_Shot_2019-12-19_at_9.28.01_AM.png",
        "Screen Shot 2019-12-19 at 9.28.01 AM.png",
        1217,
        401,
        "#6f7376"
      ]
    }
  ]
}
[/block]
**4** Select Open Console
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d70ffc4-Screen_Shot_2019-12-19_at_9.28.14_AM.png",
        "Screen Shot 2019-12-19 at 9.28.14 AM.png",
        818,
        568,
        "#d4d5d6"
      ]
    }
  ]
}
[/block]
**5** In the Console

- Select Action > Include Debug Messages
- Search for `OneSignalNotificationServiceExtension` as the CATEGORY
- Send this device a notification with a message (`contents`)

You should see a message logged with the app running and not running.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5de69d1-Screen_Shot_2020-09-18_at_9.30.22_PM.png",
        "Screen Shot 2020-09-18 at 9.30.22 PM.png",
        1143,
        335,
        "#31384b"
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
        "https://files.readme.io/0721273-Screen_Shot_2019-12-19_at_9.29.08_AM.png",
        "Screen Shot 2019-12-19 at 9.29.08 AM.png",
        1134,
        1231,
        "#eeeeee"
      ]
    }
  ]
}
[/block]
#FAQ
##How can I setup Service Extensions to get data in React Native?

You will need to use React Native Native Modules in this case. See our guide on [RN Native Module Setup](doc:rn-android-native-module-setup-for-notification-service-extension).