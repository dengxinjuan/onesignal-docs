---
title: "Troubleshooting iOS"
slug: "troubleshooting-ios"
excerpt: "Common setup issues with iOS"
hidden: false
createdAt: "2016-09-20T05:31:22.661Z"
updatedAt: "2021-12-09T22:55:26.524Z"
---
#Troubleshooting iOS Steps
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on iOS Setup.\n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-iOS-SDK/tree/master/Examples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

Please follow all steps below. If you are still having issues, please reach out to support with a log generated following the steps below.

##Step 1. Double Check Setup Guide
Return to the setup guide you followed in <a href="doc:mobile-sdk-setup" target="_blank">Mobile Push Quickstart</a> to make sure you followed all steps adding the OneSignal SDK to your app.

Keep an eye on the **Requirements** section of the setup guide that you are using the right version of Xcode. You must test on an actual iOS device. The Simulator does not support push.

**If using Cocoapods**: Make sure you have version `1.11.0` or newer of CocoaPods by running `pod --version` from the terminal.

##Step 2. Use the latest OneSignal SDK

Make sure you are running version `2.16.7` or newer of the OneSignal SDK. We recommend upgrading to the major release version of the OneSignal SDK. See details in <a href="doc:mobile-2020-api-migration-guide" target="_blank">Mobile SDKs API Migration Guides</a>.

Run `pod update OneSignal` from the terminal to update to the latest version of OneSignal SDK.

##Step 3. Check below for common issues and if still not sure, send us a log.

After running through the rest of this Troubleshooting guide, use the OneSignal SDK `setLogLevel method` to Verbose and send us the full logcat from the device when reproducing the behavior. 
[block:code]
{
  "codes": [
    {
      "code": "//The following options are available with increasingly more information: \n//.LL_NONE, .LL_FATAL, .LL_ERROR, .LL_WARN, .LL_INFO, .LL_DEBUG, .LL_VERBOSE.\nOneSignal.setLogLevel(.LL_VERBOSE, visualLevel: .LL_NONE)",
      "language": "swift"
    },
    {
      "code": "//The following options are available with increasingly more information: \n//ONE_S_LL_NONE, ONE_S_LL_FATAL, ONE_S_LL_ERROR, ONE_S_LL_WARN, ONE_S_LL_INFO, ONE_S_LL_DEBUG, ONE_S_LL_VERBOSE.\n[OneSignal setLogLevel:ONE_S_LL_VERBOSE visualLevel:ONE_S_LL_NONE];",
      "language": "objectivec"
    }
  ]
}
[/block]
If you need help interpreting the logs, please share them through Pastebin or a .txt file to help our support and engineering team assist you.

----

#APNS Delegate Never Fired

"APNS Delegate Never Fired" is a timeout message for when iOS doesn't fire a success or failure message if a connection is not made to Apple's APNS servers. This usually occurs in Development/Ad-hoc environments and is more rare in Production.

Please check the following:

##1. Toggle WiFi on iOS Device
Try toggling WiFi on the iOS device, try another device, or a different network. You may see this more often with development builds of your app since this will be connecting to Apple's Sandbox server instead of Production.

##2. Xcode Capabilities
Make sure you are using Xcode 10 or higher and you have the Push Notifications Capability in the Main App Target > "Signing & Capabilities" > Push Notifications. Some users reported enabling Background Fetch in Main App Target helped reduce the frequency as well. Check that this is enabled for both Debug and Release builds. You may need to check your entitlements if these are different.

##3. Other Push Dependencies
Other Dependencies, especially other Push Provider SDKs, can interfere with this. It is best to remove the other Push SDK from the app. We swizzle the AppDelegate methods and other 3rd party SDKs could be impacted.

You may or may not see in the logs: `WARNING: Already swizzled UIApplication.setDelegate. Make sure the OneSignal library wasn't loaded into the runtime twice!`

Common Dependency Issues:
- <a href="https://github.com/react-native-push-notification" target="_blank">React Native Push Notifications</a> appears to add methods within the native AppDelegate.m file. Search the project in Xcode for `RNCPushNotificationIOS` and comment out that code.

- mParticle needs to have it to work with swizzling instead of delegate proxy.

##4. Cocoapods
If using Cocoapods, run `$ sudo gem install cocoapods` again to get updated, then `pod update` to update your pods. Make sure to remove any pods that you do not use anymore (especially other push SDKs).

In your Podfile, check if you added `abstract_target`. This can cause issues, more detail: https://github.com/OneSignal/OneSignal-iOS-SDK/issues/180 

##5. Logs
After the above steps. If you are still having issues it is best to plug the device into your IDE and use our <a href="doc:sdk-reference#debugging" target="_blank">SetLogLevel method to Verbose</a>. Then uninstall and re-build the app on the device. This will help log any issues to your IDE console.



---

#Clicks Not Counting

Make sure your app is initializing OneSignal from `didFinishLaunchingWithOptions`  and from the main thread. Otherwise it can miss the click event if the app is cold started from a click.

If you have any other SDKs or libraries handing push notifications, then it is possible it is an issue with swizzling the iOS click handler and conflicting with OneSignal.

# URL Not working

```
ERROR: The resource could not be loaded because the App Transport Security policy requires the use of a secure connection.
```

Make sure your URL is HTTPS. HTTP urls will not work unless you set `NSAppTransportSecurity `to `NSAllowsArbitraryLoads` in your Xcode .plist.

[block:callout]
{
  "type": "danger",
  "body": "Please do not leave NSAllowsArbitraryLoads enabled when releasing your app to the App Store, as this can create a security vulnerability in your app. For more information, please read [Apple's Security Overview](https://www.apple.com/business/docs/resources/iOS_Security_Overview.pdf)",
  "title": "About App Transport Security"
}
[/block]
# Notification is shown but media attachments are not displayed
1. Open your attachment URL in a web browser. Make sure it is a direct link to the image, it can't be part of an HTML page. Also redirects are not supported.

2. Make sure your URL is HTTPS. HTTP urls will not work unless you set `NSAppTransportSecurity` to `NSAllowsArbitraryLoads` in your Xcode `.plist`.

3. Make sure your url ends with the correct file extension. If the URL doesn't contain a file extension you can add it as a parameter by adding `?filetype=file.jpg` for example to the end of your URL.

4. Please double check you have correctly added the NotificationServiceExtension noted in step 1 of the [iOS Setup guide](doc:ios-sdk-setup).

5. If you correctly added the OneSignal Notification Service Extension and rich push notifications (images, buttons) still don't appear, make sure that the **Deployment Target** in the Extension service matches the deployment target of your application.

### Notification is shown but action buttons are not displaying

Please double check you have correctly added the NotificationServiceExtension noted in step 1 of the [iOS Setup guide](doc:ios-sdk-setup).

# Debug the Notification Service Extension

1. Double check that you followed all setup instructions first, please see the SDK docs your are using for more on this.

2. The 2 debugging lines in the .m source we provide are 2 ways to confirm the notification service extension is running.

`self.bestAttemptContent.body = [@"[Modified] "`
`stringByAppendingString:self.bestAttemptContent.body];`

This line will add "[Modified] " to the beginning of all your notification bodies. You should see this on all notifications on your device.

`NSLog(@"Running NotificationServiceExtension");`

This will add an entry to the device log when the extension is run. You can view this in Xcode under Window > "Devices and Simulators". Select your device on the left and open the log up arrow at the bottom.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4aa608f-image.png",
        "image.png",
        1600,
        1834,
        "#242b34"
      ]
    }
  ]
}
[/block]
We recommend clearing the log before sending a notification to test as it can grow quickly. Copy the log and search for the debug entry "Running NotificationServiceExtension". 

We don't recommend trying to attach to the extension process with the debugger in Xcode through the Debug menu. Doing so can create issues with it launch so we recommend restarting your device if you have tried doing so.

Lastly the Notification Service Extension will only run if you have set our Action Buttons, a Media Attachment, or have set mutable content on the notification so make sure your test notification have one of these set.

----

# No such module 'OneSignal'
**Swift Package Manager** When seeing this error with our XCFramework through Swift Package Manager, make sure you've updated to the latest Xcode version. This was a general issue [solved in Xcode 13.2](https://developer.apple.com/documentation/xcode-release-notes/xcode-13_2-release-notes).

**CocoaPods:** Pods written in Swift should be imported with the `use_frameworks!`, and CocoaPods will complain if you don't do this and try to import the pods in Swift code.

**Manual Import:** One way to solve your issue is to go into your build settings and defining the **Framework Search Paths** to a folder which contains the frameworks in question. If the OneSignal framework is placed in your project directory, simply set the framework search path to $(SRCROOT) and set it to recursive.

**SwiftLint issue:** (SwiftLint is a tool used to check if your code meets certain guidelines). If Swiftlint was running before the OneSignal framework is embedded it will cause this error to show up and then be resolved once everything is linked. 

----

# How to get a crash log from an iOS device

**NOTE:** For your crash to show in the following steps the crash must happen when your device is not connected to your Mac. Connect it after you reproduce the crash.

1. In Xcode go to `Window` > `Devices & Simulators`.
2. Select your device on the left and press the "Open Console" button.
3. Select "All Messages" (top left)
4. Reproduce issue with the connected device.
5. Press `Command + A` to select all, then `Command + C` to copy log
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5efe21-Xcode_get_device_crash_log.png",
        "Xcode_get_device_crash_log.png",
        1292,
        600,
        "#36495e"
      ]
    }
  ]
}
[/block]
6. Send it to OneSignal support along with details on reproducing the crash.

----


# Previous Push Notifications Disappear
The OneSignal SDK will automatically clear previously received push notifications when the app is opened under two conditions:

* The badge number is > 0
* The application was opened from a push notification

This behavior is caused by our system to clear the badge number. Most app developers want this behavior, however some do not. In order to prevent this from occurring, you can add `OneSignal_disable_badge_clearing` = `true` in your application's `Info.plist`.  

----

# App Groups Error
```
Couldn't read values in CFPrefsPlistSource<0x281514780> (Domain: group.com.onesignal.example.onesignal, 
User: kCFPreferencesAnyUser, ByHost: Yes, Container: (null), 
Contents Need Refresh: Yes): Using kCFPreferencesAnyUser with a container is only allowed for
System Containers, detaching from cfprefsd
```
This error is normal and results from a bug in iOS. It should appear if you have App Groups added correctly. For more info, read this [comment](https://forums.developer.apple.com/thread/51348#186721) by an Apple employee.

---

# Can we setup multiple Notification Service Extensions for Multiple Targets in single Xcode Project?

Example, we are using multiple targets within the same Xcode Project. 2 separate apps to be uploaded to app store. Getting error "Embedded binary's bundle identifier is not prefixed with the parent app's bundle identifier" and cannot enable separate app groups for separate targets.

Unfortunately you need a separate NSE for each application. There might be a workaround with writing a custom build script that dynamically sets the bundle_id of the NSE based on the containing Apps bundle Id but this is outside the scope of OneSignal.
[block:callout]
{
  "type": "info",
  "title": "Still having problems? We're happy to help!",
  "body": "We answer most support queries in under 4 hours during the week, and under 24 hours on weekends. Simply email us at [support@onesignal.com](mailto:support@onesignal.com)\n\nInclude as much as you can of the following to help us find your issue quicker: \n\n- Version of our SDK \n- Device OS version\n- Xcode crash lock or stack trace of the app starting and the problem point\n- Any other libraries or plugins in your app\n- Details on reproducing your problem."
}
[/block]