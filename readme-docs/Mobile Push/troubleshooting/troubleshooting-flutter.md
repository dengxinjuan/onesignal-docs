---
title: "Troubleshooting Flutter"
slug: "troubleshooting-flutter"
excerpt: "Common setup issues with Flutter"
hidden: false
createdAt: "2019-01-19T01:12:13.919Z"
updatedAt: "2021-08-25T17:29:14.705Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on Flutter Setup.\n\nFor Android and/or iOS Platform issues see:\n- [Android Troubleshooting](doc:troubleshooting-android) \n- [iOS Troubleshooting](doc:troubleshooting-ios) \n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-Flutter-SDK/tree/main/example).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

#Problems with OneSignal library at build time
If you are experiencing any type of issue related to the OneSignal library when building iOS, e.g:
```
ld: warning: directory not found for option '-L/example/build/ios/Debug-iphonesimulator/onesignal'
    ld: library not found for -lonesignal
    clang: error: linker command failed with exit code 1 (use -v to see invocation)

Could not build the application for the simulator.
Error launching application on iPhone 6.
```

Try following the following commands:
```
pod deintegrate
pod install
```

# Distribution Error: Found an unexpected Mach-O header code
Both of the following solutions have [been reported](https://github.com/OneSignal/OneSignal-Flutter-SDK/issues/166) to work:

## Solution 1
1 . Go to Runner and then to **Build Settings** and set **Always Embed Swift Standard Libraries** to `YES`
2 . Then go to `OneSignalNotificationServiceExtension` and then to **Build Settings** and set **Always Embed Swift Standard Libraries** to `NO`

## Solution 2
1. Set `config.build_settings['ENABLE_BITCODE'] = 'YES'` in your **Podfile**.
2. Set all `ENABLE_BITCODE = 'YES'` in the **Runner project**
3. Set the importance of `ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES = 'NO'` in  the **Runner app**.

----

#iOS Release Build "Missing Push Capability"

First check the [Flutter SDK Setup](doc:flutter-sdk-setup) that you added Push Capability in Xcode.

If you are still having this issue, check Xcode for `CODE_SIGNING_ALLOWED` which might be set incorrectly not allowing signing of your app.