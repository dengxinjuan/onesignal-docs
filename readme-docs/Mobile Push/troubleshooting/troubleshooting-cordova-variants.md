---
title: "Troubleshooting Cordova Variants"
slug: "troubleshooting-cordova-variants"
excerpt: "Common setup issues with Cordova and Cordova Variants like PhoneGap and Ionic"
hidden: false
createdAt: "2016-09-20T06:37:47.109Z"
updatedAt: "2021-08-25T17:21:35.430Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on Cordova & Ionic Setup.\n\nFor Android and/or iOS Platform issues see:\n- [Android Troubleshooting](doc:troubleshooting-android) \n- [iOS Troubleshooting](doc:troubleshooting-ios) \n\nTry the [example project on our Github repository](https://github.com/OneSignalDevelopers/OneSignal-Cordova-Example).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "PhoneGap Cloud Build Users",
  "body": "PhoneGap Cloud Build may not be supported further by Adobe. You will want to change to PhoneGap CLI (or switch to Cordova or Capacitor) to continue using the OneSignal SDK."
}
[/block]
Please follow all steps below. If you are still having issues, please reach out to support with a log generated following the steps below.

#Step 1. Double Check Setup Guide
Return to our [Cordova SDK Setup](doc:cordova-sdk-setup) or [Ionic SDK Setup](doc:ionic-sdk-setup) guides to make sure you followed all steps and added any updates.

Keep an eye on the **Requirements** section of the setup guide that you are using the right versions of Xcode, Cordova, Ionic, Capacitor and so on. You must test push on an actual iOS device. The Simulator does not support push.

#Step 2. Update OneSignal
Update to the latest version of the OneSignal SDK. See our [Github Changelog for Version Details](https://github.com/OneSignal/OneSignal-Cordova-SDK/releases)

Cordova Users, run:
`cordova plugin rm onesignal-cordova-plugin`
`cordova plugin add onesignal-cordova-plugin`

Ionic Users, run:
`ionic cordova plugin remove onesignal-cordova-plugin`
`ionic cordova plugin add onesignal-cordova-plugin`

Capacitor Users, run:
`npm uninstall onesignal-cordova-plugin`
`npm install onesignal-cordova-plugin`
`npx cap sync`

 
#Step 3. Run a clean build of your app.

Cordova and Ionic are known to have issues with plugins not fully getting added to your project in some cases. If you see an error in LogCat or Xcode like `call to unknown plugin: OneSignalPush` or having issues seeing users on our dashboard please follow these step to do a clean build of your project:
[block:code]
{
  "codes": [
    {
      "code": "ionic cordova plugins list\nionic cordova plugin rm onesignal-cordova-plugin\n\t+ Remove any other plugins one at a time from the list command.\nrm -rf platforms/android\nrm -rf platforms/ios\n\nionic cordova platform add android\nionic cordova platform add ios\nionic cordova plugin add onesignal-cordova-plugin\nionic cordova plugin add cordova-plugin-whitelist (# required for android)\n\t+ Add back any other plugins you had.",
      "language": "curl",
      "name": "Ionic"
    },
    {
      "code": "cordova plugins list\ncordova plugin rm onesignal-cordova-plugin\n\t+ Remove any other plugins one at a time from the list command.\nrm -rf platforms/android\nrm -rf platforms/ios\n\ncordova platform add android\ncordova platform add ios\ncordova plugin add onesignal-cordova-plugin\ncordova plugin add cordova-plugin-whitelist (# required for android)\n\t+ Add back any other plugins you had.",
      "language": "curl",
      "name": "Cordova"
    }
  ]
}
[/block]
#Step 4. Check below for common issues and if still not sure, send us a log.

After running through the rest of this Troubleshooting guide, use the OneSignal SDK [setLogLevel method](doc:sdk-reference#section-debug) to Verbose and send us the full logcat from the device when reproducing the behavior. 
[block:code]
{
  "codes": [
    {
      "code": "//The following options are available with increasingly more information: \n//0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG, 6 = VERBOSE\nwindow.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});",
      "language": "javascript"
    }
  ]
}
[/block]
If you need help interpreting the logs, please share them through [Pastebin](https://pastebin.com/) to help our support and engineering team assist you.

----

# Missing CoreGraphics & WebKit Libraries

```
Undefined symbol: OBJC_CLASS$_WKWebViewConfiguration
Undefined symbol: OBJC_CLASS$_WKWebView
Undefined symbol: _CGAffineTransformIdentity
Undefined symbol: _CGAffineTransformMakeScale
```
If you get the above errors, you are missing the **CoreGraphics** and **WebKit** libraries. These should have been added automatically. If they weren't you can fix the errors by adding those libraries under **Link Binary With Libraries**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aed4058-64882639-2ab1b700-d623-11e9-870f-5d0e756b4cc5.png",
        "64882639-2ab1b700-d623-11e9-870f-5d0e756b4cc5.png",
        662,
        279,
        "#2b2a28"
      ]
    }
  ]
}
[/block]

----

# Plugin Install Failure

The following error will happen if CocoaPods is not installed when adding the OneSignal plugin.
```
Installing "onesignal-cordova-plugin" for iOS
        Failed to install 'onesignal-cordova-plugin': Error: pod: Command failed with exit code 31
            at ChildProcess.whenDone (/Users/vagrant/git/platforms/ios/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
            at emitTwo (events.js:106:13)
            at ChildProcess.emit (events.js:194:7)
            at maybeClose (internal/child_process.js:899:16)
            at Socket.<anonymous> (internal/child_process.js:342:11)
            at emitOne (events.js:96:13)
            at Socket.emit (events.js:191:7)
            at Pipe._handle.close [as _onclose] (net.js:511:12)
        Failed to restore plugin "onesignal-cordova-plugin" from config.xml. You might need to try adding it again. Error: Error: pod: Command failed with exit code 31
```

You will need to install CocoaPods with the following commands from the terminal.

[block:code]
{
  "codes": [
    {
      "code": "sudo gem install cocoapods\npod repo update\n\ncordova plugin rm onesignal-cordova-plugin\ncordova plugin add onesignal-cordova-plugin --save",
      "language": "shell"
    }
  ]
}
[/block]
----

# Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 15 declared in library [com.onesignal:OneSignal:3.6.2]

```
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':processDebugManifest'.
> Manifest merger failed : uses-sdk:minSdkVersion 14 cannot be smaller than version 15 declared in library [com.onesignal:OneSignal:3.6.2] /home/user/cordova_project/platforms/android/build/intermediates/exploded-aar/com.onesignal/OneSignal/3.6.2/AndroidManifest.xml
  	Suggestion: use tools:overrideLibrary="com.onesignal" to force usage
```
Open your `config.xml` and add `<preference name="android-minSdkVersion" value="15" />` under your `<platform name="android">` section.
```
<platform name="android">
    <preference name="android-minSdkVersion" value="15" />
</platform>
```

---

# Compatibility With Other Android Plugins

If you get a compile error when building for Android about the "Android Support Library" or "Google Play services" (gms) please double check that you them both installed.

## Facebook
Use `cordova-plugin-facebook4` or higher.

## Google Maps
`plugin.google.maps` - Make sure you are using version 1.2.8 of Google Map plugin or newer which is compatible with `onesignal-cordova-plugin`.

## Google Analytics
`cordova-plugin-google-analytics` - If you're using version 0.7.1 you can update to 0.8.1 to fix the build compatibility issue. If you need to stay on version 0.7.1 you can remove `onesignal-cordova-plugin` and add `onesignal-cordova-plugin-pgb-compat` instead.

`com.adobe.plugins.GAPlugin` - This plugin hasn't been updated since 2014 and conflicts with many plugins. You will need to switch a more compatible plugin such as `cordova-plugin-google-analytics`.

If you are using any other push notification plugins please remove them as having multiple push plugins can create issues like duplicate notifications and subscribing issues. A known issue is `pushbots-cordova-plugin` is not compatible with OneSignal and will need to be removed.

If you had to make any plugin changes above you may need to follow our [Clean Build](#section-clean-build) instructions above to get the project compiling if you're still seeing errors.