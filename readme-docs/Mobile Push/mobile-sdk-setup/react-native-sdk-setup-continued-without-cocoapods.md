---
title: "React Native SDK Setup (continued) -- without Cocoapods"
slug: "react-native-sdk-setup-continued-without-cocoapods"
hidden: true
createdAt: "2019-08-01T20:24:46.427Z"
updatedAt: "2019-09-30T20:09:14.229Z"
---
* Go to your Project Settings and select the `OneSignalNotificationServiceExtension` target.
* Go to `Build Settings` and search for `Header Search Paths`.
* Add `$(SRCROOT)/../node_modules/react-native-onesignal/ios` and set it as `recursive`


 ![image](https://raw.githubusercontent.com/nightsd01/react-native-onesignal/master/images/build-settings-search-paths.png)


 * With the `OneSignalNotificationServiceExtension` target still selected, select the `Build Phases` tab in Project Settings
 * In `Link Binary with Libraries`, add the following frameworks:
    - `UIKit.framework`
    - `CoreGraphics.framework`
    - `WebKit.framework`
    - `SystemConfiguration.framework`
    - `libRCTOneSignal.a` (**non-cocoapods only**... Note: if you can't find this file, see the [manual linking step](https://documentation.onesignal.com/docs/react-native-sdk-setup#section-1-2-link-onesignal) of the installation process)


 ![image](https://user-images.githubusercontent.com/32029269/65214754-96cd6880-dac4-11e9-9fb1-b6d4a5f02f49.png)

 * Open `NotificationService.m` or `NotificationService.swift` and replace the whole file contents with the code below:

[block:code]
{
  "codes": [
    {
      "code": "#import <RCTOneSignalExtensionService.h>\n\n#import \"NotificationService.h\"\n\n@interface NotificationService ()\n\n@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);\n@property (nonatomic, strong) UNNotificationRequest *receivedRequest;\n@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;\n\n@end\n\n@implementation NotificationService\n\n- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    [RCTOneSignalExtensionService didReceiveNotificationRequest:self.receivedRequest withContent:self.bestAttemptContent];\n    \n    // DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n    //            Note, this extension only runs when mutable-content is set\n    //            Setting an attachment or action buttons automatically adds this\n    // NSLog(@\"Running NotificationServiceExtension\");\n    // self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n- (void)serviceExtensionTimeWillExpire {\n    // Called just before the extension will be terminated by the system.\n    // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n    \n    [RCTOneSignalExtensionService serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n@end",
      "language": "objectivec"
    },
    {
      "code": "import UserNotifications\n\nclass NotificationService: UNNotificationServiceExtension {\n\n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var bestAttemptContent: UNMutableNotificationContent?\n    var receivedRequest : UNNotificationRequest!;\n\n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.contentHandler = contentHandler\n        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        self.receivedRequest = request;\n        \n        RCTOneSignalExtensionService.didReceive(self.receivedRequest, with: self.bestAttemptContent);\n        \n        if let bestAttemptContent = bestAttemptContent {\n            contentHandler(bestAttemptContent)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n        RCTOneSignalExtensionService.serviceExtensionTimeWillExpireRequest(self.receivedRequest, with: self.bestAttemptContent);\n        \n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            contentHandler(bestAttemptContent)\n        }\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]