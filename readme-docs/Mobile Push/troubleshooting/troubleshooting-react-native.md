---
title: "Troubleshooting React-Native"
slug: "troubleshooting-react-native"
excerpt: "The following issues has been marked as repeating, therefore we decided to devote them a separate section."
hidden: false
createdAt: "2018-04-06T22:25:21.804Z"
updatedAt: "2021-08-25T17:21:08.097Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on React Native Setup.\n\nFor Android and/or iOS Platform issues see:\n- [Android Troubleshooting](doc:troubleshooting-android) \n- [iOS Troubleshooting](doc:troubleshooting-ios) \n\nTry the [example project on our Github repository](https://github.com/OneSignal/react-native-onesignal/tree/main/examples/RNOneSignalTS).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

# Check Link Step Worked Correctly
We need to check to make sure that `react-native-link` worked correctly (done automatically by RN 0.60+). Inside of `MainApplication.java`, make sure that you are now returning the RNOneSignal package like this. Other dependencies, such as `react-native-navigation`, will often override the default `ReactApplication` class, so it is important to make sure you are returning the OneSignal package if you've made changes to this class.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d642f4a-ab162a1-Screen_Shot_2019-05-08_at_5.36.15_PM.png",
        "ab162a1-Screen_Shot_2019-05-08_at_5.36.15_PM.png",
        930,
        323,
        "#f4faf6"
      ]
    }
  ]
}
[/block]
# Could not determine the dependencies of task ':app:installDebug'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/user/react-native-onesignal/examples/RNOneSignal/android/local.properties'.

Open the <Root Project> > android directory and add a file called `local.properties`

Within `local.properties` place your android sdk path, should be similar to this but replace with your directory path:

`sdk.dir = /Users/jononesignal/Library/Android/sdk`

---
# XCode: ld: framework not found OneSignal
### Re-install your Pods
Run `pod deintegrate && pod install` in your `ios` directory. Make sure this command installs the [latest native version of the OneSignal iOS SDK](https://github.com/OneSignal/OneSignal-iOS-SDK/releases).

If you're having trouble re-installing your pods, try deleting your `Podfile.lock` file and re-run.

### Modify your Header Search Paths
- Go to your Project Settings and select the `OneSignalNotificationServiceExtension` target.
- Go to Build Settings and search for Header Search Paths.
- Add `$(SRCROOT)/../node_modules/react-native-onesignal/ios` and set it as `recursive`

### Modify your Framework Search Paths
See this [thread](https://github.com/OneSignal/react-native-onesignal/issues/981#issuecomment-739325320).

---
# Event Handlers/Observers Not Firing

If you are having trouble getting events such as `opened` to fire correctly, there can be several causes. 

### Unmounted Components
The most common cause of event listeners not firing is if you use a component as an event listener that later gets unmounted. For example, if you have a sub-component in your app like a Profile Page, and you add that profile component as an event listener, everything will work when the profile page is mounted. However, when the user navigates to a different page in your app, the Profile page will get unmounted and your event listeners will be removed.

To troubleshoot this: use `console.log` statements for both `addEventListener` and `removeEventListener`, and make sure the *last* log statement was from code that was **adding** an event listener.

### Background Execution
Please note that iOS and Android can be aggressive about preventing background app execution. This means that, in many cases, the `received` event will not fire when your app is in the background. Please consider using an Extension/Extender service in your app, but this will require writing native Objective-C/Java.

### Bad Navigation/UI 
Many developers put UI code in their `opened` or `received` event listeners, and when it doesn't work, immediately blame OneSignal's SDK for not firing the event listener, even though it generally turns out to be an issue with the UI related code. Please double check to make sure the event gets called using `console.log` or breakpoints.

---
# Use of unresolved identifier 'RCTOneSignalExtensionService’

If you added the Notification Service Extension using Swift this sometimes complicates things a bit. Unless you want to customize how the extension service works (almost no one ever needs to do this), it is recommend to delete your extension service target completely, and re-create it with Objective-C, as [outlined in our setup guide](doc:react-native-sdk-setup#section-add-notification-service-extension).

---
# Android - Multiple dex files define:
```gradle
> com.android.build.api.transform.TransformException: com.android.ide.common.process.ProcessException: java.util.concurrent.ExecutionException: com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzr;
```

Please make sure you have correctly followed the [Adding the Gradle Plugin](doc:react-native-sdk-setup#section-adding-the-gradle-plugin) guide.

---
# iOS - symbol(s) not found for architecture x86_64 and/or OneSignal/OneSignal.h file not found
Please double check the [iOS Installation](#ios-installation) section as missing a step or entering an incorrect path will create these errors.

---
# Make react-native-onesignal work with ExpoKit after ejecting from Expo-CRNA

If you have detached from Expo or CRNA, you might need to fix versions of the Google Play Services that this library is using to make it work nicely with ExpoKit (as of SDK23). Please make follow the [Adding the Gradle Plugin](doc:react-native-sdk-setup#section-adding-the-gradle-plugin) guide which will make sure the correct versions are used.

---
# Make react-native-onesignal work with Redux

Please see the [`examples/RNOneSignal/redux-index.js` file](https://github.com/OneSignal/react-native-onesignal/blob/3.1.0/examples/RNOneSignal/redux-index.js) for example code and comments. Note that it will not compile, but instead serves as a template for how to handle Redux integration in general, and specifically including the edge case for intercepting the `onOpened` event when a User taps a push notification and prompts the app to open from a previously unopened state.

---
# Android - Multiple Libraries Android Errors
If you see this type of error:

```
Error: more than one library with package name 'com.google.android.gms.license'

or

java.lang.AbstractMethodError: abstract method "void com.google.firebase.iid.zzb.zzd(android.content.Intent)"
```
This error means there was a mixture of different Firebase modules included in your app. If you add our [OneSignal Gradle Plugin](doc:react-native-sdk-setup#section-adding-the-gradle-plugin) this will fix the version issue in your project and should resolve that runtime error.

If you already have this in your build.gradle, make sure it the section noted in the docs is at line 1 of the file. Also make sure this is added to your app/build.gradle instead of the android/build.gradle or the root one.

Here is a quick reference to add the OneSignal Gradle plugin your app's `build.gradle` file:

```
buildscript {
    repositories {
        maven { url 'https://plugins.gradle.org/m2/'}
    }
    dependencies {
        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.11.2, 0.99.99]'
    }
}
apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'
```

---
# Unsupported Modules Detected 
```
Compilation is not supported for following modules: react-native-onesignal, react-native-svg. Unfortunately you can't have non-Gradle Java modules and Android-Gradle modules in one project.
```
Follow these steps:
```
1. close the project
2. close Android Studio IDE
3. delete the .idea directory
4. delete all .iml files
5. open Android Studio IDE and import the project
```

# `setNotificationWillShowInForegroundHandler` not working as intended
For the above to work as intended, make sure to **not** call your own `userNotificationCenter` `completionHandler` from the App Delegate. Other libraries may require this. However, this will lead to a conflict with the OneSignal SDK.