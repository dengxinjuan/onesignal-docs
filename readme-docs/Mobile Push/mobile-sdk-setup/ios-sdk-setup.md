---
title: "iOS SDK Setup"
slug: "ios-sdk-setup"
excerpt: "Instructions for adding the OneSignal SDK to your iOS native app with Swift or Objective-C"
hidden: false
createdAt: "2016-09-20T05:24:01.246Z"
updatedAt: "2022-03-09T04:33:32.278Z"
---
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.
* An iOS 9+ or iPadOS device (iPhone, iPad, iPod Touch) to test on. The Xcode simulator doesn't support push notifications so you must test on a real device.
* A Mac with Xcode 12+.
* <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">An iOS Push Certificate</a>.
[block:callout]
{
  "type": "info",
  "title": "Installation via the OneSignal CLI",
  "body": "The [OneSignal CLI](https://github.com/OneSignal/cli) is now available in beta with a command to automate most steps of the iOS SDK setup process."
}
[/block]
#Step 2. Add a Notification Service Extension

The OneSignalNotificationServiceExtension allows your iOS application to receive rich notifications with images, buttons, and badges. It's also required for OneSignal's analytics features.

**2.1** In Xcode Select `File` > `New` > `Target...`
**2.2** Select `Notification Service Extension` then press `Next`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffb4fc9-Screen_Shot_2022-02-02_at_1.21.41_PM.png",
        "Screen Shot 2022-02-02 at 1.21.41 PM.png",
        1472,
        1050,
        "#282f37"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
**2.3** Enter the product name as `OneSignalNotificationServiceExtension` and press `Finish`.

Do not select `Activate` on the dialog that is shown after selecting `Finish`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f646133-Screen_Shot_2022-02-02_at_1.23.00_PM.png",
        "Screen Shot 2022-02-02 at 1.23.00 PM.png",
        1472,
        1050,
        "#2e3032"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
**2.4** Press Cancel on the Activate scheme prompt.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c59226d-d8186b6-300.png",
        "d8186b6-300.png",
        300,
        420,
        "#3f3e46"
      ],
      "sizing": "original"
    }
  ]
}
[/block]
By canceling, you are keeping Xcode debugging your app, instead of the extension you just created.

**If you activated by accident, you can switch back to debug your app within Xcode (next to the play button).
**
**2.5** In the **project navigator**, select the top-level project directory and select the `OneSignalNotificationServiceExtension` target in the **project and targets list**. 

Unless you have a specific reason not to, you should set the `Deployment Target` to be iOS 10 which is the version of iOS that Apple released Rich Media for push. iOS versions under 10 will not be able to get Rich Media.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dedfaac-1.png",
        "1.png",
        2536,
        1248,
        "#36373a"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
**2.6** In the project navigator, click the `OneSignalNotificationServiceExtension` folder and open the `NotificationService.m` or `NotificationService.swift` and replace the whole file's contents with the following code. *Ignore any build errors at this point. We will import OneSignal which will resolve any errors.* 
[block:code]
{
  "codes": [
    {
      "code": "import UserNotifications\n\nimport OneSignal\n\nclass NotificationService: UNNotificationServiceExtension {\n    \n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var receivedRequest: UNNotificationRequest!\n    var bestAttemptContent: UNMutableNotificationContent?\n    \n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        self.receivedRequest = request\n        self.contentHandler = contentHandler\n        self.bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        \n        if let bestAttemptContent = bestAttemptContent {\n            //If your SDK version is < 3.5.0 uncomment and use this code:\n            /*\n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n            */\n            \n            /* DEBUGGING: Uncomment the 2 lines below to check this extension is excuting\n                          Note, this extension only runs when mutable-content is set\n                          Setting an attachment or action buttons automatically adds this */\n            //OneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)\n            //bestAttemptContent.body = \"[Modified] \" + bestAttemptContent.body\n            \n            OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: bestAttemptContent, withContentHandler: self.contentHandler)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // Called just before the extension will be terminated by the system.\n        // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n        if let contentHandler = contentHandler, let bestAttemptContent =  bestAttemptContent {\n            OneSignal.serviceExtensionTimeWillExpireRequest(self.receivedRequest, with: self.bestAttemptContent)\n            contentHandler(bestAttemptContent)\n        }\n    }  \n}",
      "language": "swift"
    },
    {
      "code": "#import <OneSignal/OneSignal.h>\n\n#import \"NotificationService.h\"\n\n@interface NotificationService ()\n\n@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);\n@property (nonatomic, strong) UNNotificationRequest *receivedRequest;\n@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;\n\n@end\n\n@implementation NotificationService\n\n- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    //If your SDK version is < 3.5.0 uncomment and use this code:\n    /*\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent];\n    self.contentHandler(self.bestAttemptContent);\n    */\n    \n    /* DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n                  Note, this extension only runs when mutable-content is set\n                  Setting an attachment or action buttons automatically adds this */\n    // NSLog(@\"Running NotificationServiceExtension\");\n    // self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n    \n  \t// Uncomment this line to set the default log level of NSE to VERBOSE so we get all logs from NSE logic\n    //[OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];\n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest\n                       withMutableNotificationContent:self.bestAttemptContent\n                                   withContentHandler:self.contentHandler];\n}\n\n- (void)serviceExtensionTimeWillExpire {\n    // Called just before the extension will be terminated by the system.\n    // Use this as an opportunity to deliver your \"best attempt\" at modified content, otherwise the original push payload will be used.\n    \n    [OneSignal serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    self.contentHandler(self.bestAttemptContent);\n}\n\n@end",
      "language": "objectivec"
    }
  ]
}
[/block]
*Ignore any build errors at this point. We will import OneSignal which will resolve any errors.* 

#Step 3. Import the OneSignal SDK into your Xcode project

**Option 1. Swift Package Manager**
The OneSignal SDK can be added as a Swift Package (works with Objective-C as well). See <a href="https://documentation.onesignal.com/docs/swift-package-manager-setup" target="_blank">Instructions on how to import the SDK directly from Xcode</a>.

**Option 2. Carthage**
If using Carthage, see [Carthage setup guide](doc:carthage-setup).

**Option 3. CocoaPods**

 **3.1** Make sure your current Xcode project is closed and in the project root, run `sudo gem install cocoapods`.

**3.2** Run `pod init` from the terminal in your project directory.

**3.3** Open the newly created `Podfile` with your favorite code editor.

**3.4** Add the OneSignal dependency under your project name target as well as 
`OneSignalNotificationServiceExtension` target like below.

[block:code]
{
  "codes": [
    {
      "code": "target 'your_project_name' do\n  #only copy below line\n  pod 'OneSignalXCFramework', '>= 3.0.0', '< 4.0'\nend\n\ntarget 'OneSignalNotificationServiceExtension' do\n  # Comment the next line if you don't want to use dynamic frameworks\n  use_frameworks!\n  pod 'OneSignalXCFramework', '>= 3.0.0', '< 4.0'\nend",
      "language": "ruby",
      "name": "Podfile"
    }
  ]
}
[/block]
**3.5** Run the following commands in your terminal in your project directory.

`pod repo update`
`pod install`

**3.6** Open the newly created `<project-name>.xcworkspace` file.

** *Make sure to always open the workspace from now on. You can also do this automatically by running `xed .` from the root of your project.* **

# Step 4. Add Required Capabilities

This step will make sure your project is able to receive remote notifications, 

**Only do this for the main application target.**
**Do not do this for the Notification Service Extension**.

**4.1** Select the root project > your main app target and "Signing & Capabilities"

**4.2** If you do not see Push Notifications enabled, click "+ Capability" and add "Push Notifications".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/542d156-Group_106.png",
        "Group 106.png",
        2624,
        1574,
        "#343538"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
**4.3** Click "+ Capability" and add "Background Modes". Then check "Remote notifications". 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3b03b2e-Group_105.png",
        "Group 105.png",
        2762,
        1716,
        "#2c2d30"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#Step 5. Add the OneSignal Initialization Code

##Method 1. Storyboard

If using the Storyboard, navigate to your AppDelegate file and add the OneSignal initialization code to `didFinishLaunchingWithOptions`. 

Make sure to import the OneSignal headers:
- Swift: `import OneSignal`
- Objective-C: `#import <OneSignal/OneSignal.h>`
[block:code]
{
  "codes": [
    {
      "code": "import UIKit\nimport OneSignal\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n  \nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: \n[UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n  // Remove this method to stop OneSignal Debugging\n  OneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)\n  \n  // OneSignal initialization\n  OneSignal.initWithLaunchOptions(launchOptions)\n  OneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\")\n  \n  // promptForPushNotifications will show the native iOS notification permission prompt.\n  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)\n  OneSignal.promptForPushNotifications(userResponse: { accepted in\n    print(\"User accepted notifications: \\(accepted)\")\n  })\n  \n  // Set your customer userId\n  // OneSignal.setExternalUserId(\"userId\")\n  \n  \n\n   return true\n}\n  \n// Remaining contents of your AppDelegate Class...\n}",
      "language": "swift",
      "name": "Swift (AppDelegate.swift)"
    },
    {
      "code": "#import <OneSignal/OneSignal.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  \n  // Remove this method to stop OneSignal Debugging  \n  [OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];\n  \n  // OneSignal initialization\n  [OneSignal initWithLaunchOptions:launchOptions];\n  [OneSignal setAppId:@\"YOUR_ONESIGNAL_APP_ID\"];\n\n  // promptForPushNotifications will show the native iOS notification permission prompt.\n  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)\n  [OneSignal promptForPushNotificationsWithUserResponse:^(BOOL accepted) {\n    NSLog(@\"User accepted notifications: %d\", accepted);\n  }];\n  \n  // Set your customer userId\n  // [OneSignal setExternalUserId:@\"userId\"];\n  \n  return YES;\n}",
      "language": "objectivec",
      "name": "Objective-C (AppDelegate.m)"
    }
  ]
}
[/block]
Replace `YOUR_ONESIGNAL_APP_ID` with your OneSignal App ID.

##Method 2. SwiftUI
If using SwiftUI, update your main 'APP_NAME'App.swift file and use the code below. Make sure to replace 'YOURAPP_NAME' with your app name.
[block:code]
{
  "codes": [
    {
      "code": "import SwiftUI\nimport OneSignal\n\n@main\nstruct YOURAPP_NAME: App {\n    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate\n    \n    var body: some Scene {\n        WindowGroup {\n            ContentView()\n        }\n    }\n}\n\nclass AppDelegate: NSObject, UIApplicationDelegate {\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {\n       // Remove this method to stop OneSignal Debugging\n       OneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)\n        \n       OneSignal.initWithLaunchOptions(launchOptions)\n       OneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID\")\n        \n       OneSignal.promptForPushNotifications(userResponse: { accepted in \n         print(\"User accepted notification: \\(accepted)\")\n       })\n      \n      // Set your customer userId\n      // OneSignal.setExternalUserId(\"userId\")\n      \n       return true\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]


#Step 6. Add App Groups

App Groups allow your app to execute code when a notification is received, even if your app is not active. This is required for features including notification [Badges](doc:badges), and [Confirmed Deliveries](doc:confirmed-deliveries). 

Please follow the <a href="https://documentation.onesignal.com/docs/ios-sdk-app-groups-setup" target="_blank">iOS SDK App Groups setup guide</a> to add the OneSignal App Group in your app.

#Step 7. Run Your App and Send Yourself a Notification

Run your app on a physical iOS device to make sure it builds correctly. Note that the iOS Simulator does not support receiving remote push notifications. 

You should be prompted to subscribe to push notifications. Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, see our [iOS troubleshooting guide](doc:troubleshooting-ios).\n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-iOS-SDK/tree/master/Examples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Step 8. Set Custom User Properties
**Recommended**
After initialization, OneSignal will automatically collect <a href="doc:data-collected-by-the-onesignal-sdk" target="_blank">common user data</a> by default. Use the following methods to set your own custom userIds, emails, phone numbers, and other user-level properties.

##Set External User Id
**Required if using integrations.**
**Recommended for messaging across multiple channels (push, email, sms).** 

OneSignal creates channel-level device records under a unique Id called the `player_id`. A single user can have multiple `player_id` records based on how many devices, email addresses, and phone numbers they use to interact with your app.

If your app has its own login system to track users, call `setExternalUserId` at any time to link all channels to a single user. For more details, see <a href="doc:external-user-ids" target="_blank">External User Ids</a>. 
[block:code]
{
  "codes": [
    {
      "code": "let externalUserId = \"123456789\" // You will supply the external user id to the OneSignal SDK\nOneSignal.setExternalUserId(externalUserId)",
      "language": "swift"
    },
    {
      "code": "NSString* externalUserId = @\"123456789\"; // You will supply the external user id to the OneSignal SDK\n[OneSignal setExternalUserId:externalUserId];",
      "language": "objectivec"
    }
  ]
}
[/block]
##Set Email and Phone Number
**Recommended if using Email and SMS messaging.** 
Use the provided SDK methods to capture email and phone number when provided. Follow the channel quickstart guides for setup:
- <a href="doc:email-quickstart" target="_blank">Email Quickstart</a>
- <a href="doc:sms-quickstart" target="_blank">SMS Quickstart</a>
[block:code]
{
  "codes": [
    {
      "code": "// Pass in email provided by customer\nOneSignal.setEmail(\"example@domain.com\")\n\n// Pass in phone number provided by customer\nOneSignal.setSMSNumber(\"+11234567890\")",
      "language": "swift",
      "name": null
    },
    {
      "code": "// Pass in email provided by customer\n[OneSignal setEmail:@\"example@domain.com\"];\n\n// Pass in phone number provided by customer\n[OneSignal setSMSNumber:@\"+11234567890\"];",
      "language": "objectivec"
    }
  ]
}
[/block]
##Data Tags
**Optional** 
All other event and user properties can be set using <a href="doc:add-user-data-tags" target="_blank">Data Tags</a>. Setting this data is required for more complex segmentation and message personalization.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.sendTag(\"key\", value: \"value\")",
      "language": "swift"
    },
    {
      "code": "[OneSignal sendTag:@\"key\" value:@\"value\"];",
      "language": "objectivec"
    }
  ]
}
[/block]
#Step 9. Implement a Soft-Prompt In-App Message
**Optional**
Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/notifications/) recommend that apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

OneSignal provides an easy option for a "soft-prompt" using In-App Messages to meet this recommendation and have a better user experience. This also permits you to ask for permission again in the future, since the native permission prompt can no longer be shown in your app if the user clicks deny.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c5289b-efcbff2-iam-design.jpg",
        "efcbff2-iam-design.jpg",
        1200,
        861,
        "#f1f2f6"
      ]
    }
  ]
}
[/block]
See our [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) for details on implementing this.
[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]