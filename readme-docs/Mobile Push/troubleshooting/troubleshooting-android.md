---
title: "Troubleshooting Android"
slug: "troubleshooting-android"
excerpt: "Common setup issues with Android and Amazon."
hidden: false
createdAt: "2016-09-20T05:36:25.449Z"
updatedAt: "2022-01-07T23:49:40.072Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on Android Setup.\n\nTry the [example project on Github](https://github.com/OneSignal/OneSignal-Android-SDK/tree/master/Examples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Troubleshooting Steps

Please follow all steps below. If you are still having issues, please reach out to support with a log generated following the steps below.

##Step 1. Double Check Setup Guide
Return to the setup guide you followed in [Mobile Push Quickstart](doc:mobile-sdk-setup) to make sure you followed all steps adding the OneSignal SDK to your app.

##Step 2. Initialize Within the Application Class

Native Android SDKs, make sure you added the OneSignal init code within the `onCreate` method in your `Application` class.

If you do not have an `Application` Class, [follow this guide](doc:create-application-class-android-studio).

##Step 3. Check below for common issues and if still not sure, send us a log.

After running through the rest of this Troubleshooting guide, use the OneSignal SDK [setLogLevel method](doc:sdk-reference#debugging) to Verbose to check the full logcat from the device when reproducing the behavior. 
[block:code]
{
  "codes": [
    {
      "code": "//The following options are available with increasingly more information:\n//NONE, FATAL, ERROR, WARN, INFO, DEBUG, VERBOSE\nOneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);",
      "language": "java"
    }
  ]
}
[/block]
If you need help interpreting the logs, please share them as a .txt file to help our support and engineering team assist you.

## How to get a crash or error log from an Android device
### With Android Studio
**1.** Select `Android Monitor` from the bottom of the window.
------If you don't see this select it from `View` > `Tool Windows` > `Android Monitor`
**2.** Select your device from the drop down.
**3.** Ensure no filters are set and the type is set to Verbose.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b328c01-Android_Studio_logcat.png",
        "Android_Studio_logcat.png",
        1459,
        279,
        "#e1e3e4"
      ]
    }
  ]
}
[/block]
**4.** Select all lines in the log by pressing Control + A and then copy them.
**5.** Paste them into a `.txt` file and send this to support. Include steps to reproduce the problem as well.


### With the terminal / command line.
**1.** `adb logcat -b all -d -v threadtime > onesignal_crash_logcat.txt`
**2.** Send the `onesignal_crash_logcat.txt` to support. Include steps to reproduce the problem as well.

If you don't have `adb` in your path you will need to fully path to `adb` in the Android SDK. It is under `<android-sdk>\platform-tools\adb`.
If you don't have the Android SDK installed you can just download the [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools.html#download) which contains the `adb` executable.

----

# ANR Troubleshooting

ANR errors occur when the main thread of your app is being blocked for over 5 seconds. You may see these occur along with:

```
Broadcast of Intent { act=com.google.android.c2dm.intent.RECEIVE flg=0x11000010 pkg=YOUR.PACKAGE.NAME cmp=your.package.name/com.onesignal.FCMBroadcastReceiver (has extras) }
```

This just shows how the app process started. This may appear to occur more often after adding OneSignal due to push notification received events starting your app process.

The best way to dig into these ANR issues is to check the full stacktrace of all threads.

Starting at the top of each stacktrace and working down, it will help guide you on which event occurred last to trigger the ANR.

If you see OneSignal in the actual stacktrace, please make sure you are testing on the latest version of our SDK. Once you verify that is still happening, send the full stack trace of all threads with the ANR to support@onesignal.com and we will help investigate. 

The full log would most likely be in the low 1,000s of lines long. The log we are looking for looks something like [this](https://github.com/OneSignal/OneSignal-Android-SDK/issues/1002#issuecomment-631260820).


----

# Why are notifications disappearing without clicking them?

Check if you are calling our SDK Method: `OneSignal.clearOneSignalNotifications();` or using the native Android method `NotificationManagerCompat.from(context).cancelAll()` [discussed here](https://developer.android.com/reference/androidx/core/app/NotificationManagerCompat#cancelAll()).

# Why do I see previous notifications again?

The OneSignal Android Native SDK will reshow notifications that did not get interacted with. The user must click or dismiss the notification to not show it again.

## Failed to resolve: com.onesignal:OneSignal:[3.10.2, 3.99.99]
This means that Android Studio or Gradle could not download our plugin. Please check the following.
**1.** Open your browser to http://search.maven.org/ to make sure it loads on your system.
**2.** Make sure you're using Android Studio version 1.4.0 or newer.
**3.** Go to `File` > `Settings`.
**4.** Search for Offline work and uncheck this option.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/Aqg62wLSu2cFmkFOEeVg_AndroidStuidoOfflineWork.png",
        "AndroidStuidoOfflineWork.png",
        "696",
        "432",
        "#4d6ead",
        ""
      ]
    }
  ]
}
[/block]
**5.** Add the following to your `.gradle` file.
[block:code]
{
  "codes": [
    {
      "code": "repositories {\n    mavenCentral()\n}",
      "language": "c",
      "name": "gradle"
    }
  ]
}
[/block]
**6.** Try restarting Android Studio and then going to `Tools` > `Android` > `Sync Project With Gradle Files`.

----

## Error:Execution failed for task ':app:processDebugGoogleServices'.

If you are receiving the following Android Studio error when building your project
```
Error:Execution failed for task ':app:processDebugGoogleServices'.
> Please fix the version conflict either by updating the version of the google-services plugin (information about the latest version is available at https://bintray.com/android/android-tools/com.google.gms.google-services/) or updating the version of com.google.android.gms to 9.0.0.
```

Remove the following line from your `.gradle` file.
```
apply plugin: 'com.google.gms.google-services'
```

--- 

## Error:(22, 0) Could not find method plugins() for arguments [...] on object of type com.android.build.gradle.AppExtension

This error means you added `plugins { ... }` to the wrong spot in your `app/build.gradle`. You must have the following 3 lines at the very top of your file. Double check you don't have duplicated lines as well.
[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        maven { url 'https://plugins.gradle.org/m2/'}\n    }\n    dependencies {\n        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.10.0, 0.99.99]'\n    }\n}\napply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
---

## E/dalvikvm: Could not find class
Could not find class errors are expected in the logcat for Android devices before 5.0. It is just letting you know it could not find these classes as your app loads into memory. It does not cause any issues in your app as the calls are guarded with runtime checks so they won't create any issues.

---

## Error: Failed to resolve: com.android.support:customtabs:[26.0.0,26.2.0) OR com.android.support:support-v4:[26.0.0,26.2.0)
```
Failed to resolve: com.android.support:customtabs:[26.0.0,26.1.0)
Could not resolve all dependencies for configuration ':appName:'.
   > Could not find any version that matches com.android.support:customtabs:[26.0.0,26.2.0).
     Versions that do not match:
         26.0.0-alpha1
         25.3.1
         + 19 more
     Required by:
         project :appName > com.onesignal:OneSignal:3.6.0
```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/83b5fdb-Android_Studio_add_google_maven_repo.png",
        "Android_Studio_add_google_maven_repo.png",
        1177,
        520,
        "#e1e1dc"
      ]
    }
  ]
}
[/block]
Please use one of the Options below to resolve the issue;
#### Option A
Add the new [Google Maven repo](https://developer.android.com/topic/libraries/support-library/setup.html) to your `build.gradle`
[block:code]
{
  "codes": [
    {
      "code": "repositories {\n    maven { url 'https://maven.google.com' }\n}",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]
Also update `compileSdkVersion` to `26` in your `app/build.gradle`.

#### Option B
If you are not ready to update your project to the new support library yet and are still using `targetSdkVersion 25` or lower you can follow Option A or C in the section's instructions.

----

## Error: All gms/firesbase libraries must use the exact same version specification
```
All gms/firebase libraries must use the exact same version (mixing versions can lead to runtime crashes).
Found versions 11.0.4, 10.2.1.
Examples include com.google.android.gms:play-services-base:11.0.4 and com.google.android.gms:play-services-gcm:10.2.1.
```


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3b843b1-AndroidStudio_gms_version_mismatching.png",
        "AndroidStudio_gms_version_mismatching.png",
        495,
        135,
        "#f4f6cc"
      ]
    }
  ]
}
[/block]
OneSignal automatically adds the following dependencies;
* `com.google.android.gms` - Version 11.2.+
* `com.android.support` - Version 26.1.+

To fix this issue, all dependencies must be matching versions.

#### Option A
Add the [OneSignal-Gradle-Plugin](https://github.com/OneSignal/OneSignal-Gradle-Plugin)  to your project.

#### Option B
Upgrade -  Find all `com.google.android.gms` compile lines and update them to match.
[block:code]
{
  "codes": [
    {
      "code": "// Update 9.0.0 to 11.2.+ so it is using the same gms version as OneSignal\ncompile 'com.google.android.gms:play-services-maps:9.0.0'",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]

#### Option C
Downgrade - Force OneSignal's dependencies to a lower version.
[block:code]
{
  "codes": [
    {
      "code": "// Replace gmsVersion and/or androidSupportVersion with the versions you need to downgrade to.\n\ndef gmsVersion = '11.2.+'\ncompile(\"com.google.android.gms:play-services-gcm:${gmsVersion}\") {\n    force = true\n}\ncompile(\"com.google.android.gms:play-services-location:${gmsVersion}\") {\n    force = true\n}\n\n// Must use 26.0.0 or newer if you have targetSdkVersion 26\ndef androidSupportVersion = '26.1.+'\ncompile(\"com.android.support:support-v4:${androidSupportVersion}\")  {\n    force = true\n}\ncompile(\"com.android.support:customtabs:${androidSupportVersion}\")  {\n    force = true\n}",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]

----

## Error: java.lang.NoSuchMethodError: com.google.android.gms.common.internal.zzaa.zzb
If you see that some obfuscated Firebase or Google GMS methods are missing, it is most probably a dependency versioning conflict.

You can use the `gradle dependencies` and `gradle dependencyInsight` directives to troubleshoot which libraries are causing classes/methods to go missing. Refer to the official Gradle documentation for more information:

https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html#sec:dependency_insight

For example:
[block:code]
{
  "codes": [
    {
      "code": "./gradlew app:dependencyInsight --configuration compile",
      "language": "shell"
    }
  ]
}
[/block]
----

## Error:Execution failed for task ':app:processDebugManifest'
If you see the following error make sure you have completed [step 1.2](android-sdk-setup#section-1-gradle-setup) correctly.
```
Execution failed for task ':app:processDebugManifest'
Manifest merger failed with multiple errors, see logs
```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5c7ab7-AndroidStudioMissingManifestEntries.png",
        "AndroidStudioMissingManifestEntries.png",
        698,
        224,
        "#376ac2"
      ]
    }
  ]
}
[/block]
----

## Error:(3,0) startup failed: only buildscript {} and other plugins {} script blocks are allowed before plugins {} blocks, no other statements are allowed

Make sure you added the code from [step 1.1 of the Android Setup](https://documentation.onesignal.com/docs/android-sdk-setup#section-1-gradle-setup) to the very top of the build.gradle file. This should be the first line of code in the file.

----

## No Users showing on the OneSignal dashboard
Please follow our [No users on dashboard](doc:no-users-on-dashboard-after-installing-sdk) guide first.

Make sure you have your Application in your `AndroidManifest.xml` and add logging around OneSignal to make sure it is being called.
Make sure you have `android:name=".ApplicationClass"`.
[block:code]
{
  "codes": [
    {
      "code": "<application\nandroid:allowBackup=\"true\"\nandroid:icon=\"@mipmap/ic_launcher\"\nandroid:label=\"@string/app_name\"\nandroid:theme=\"@style/AppTheme\nandroid:name=\".ApplicationClass\">",
      "language": "xml"
    }
  ]
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "public class ApplicationClass extends Application {\n\n   @Override\n   public void onCreate() {\n      super.onCreate();\n\t\t\t\n     \tLog.d(\"OneSignalTag\", \"Before OneSignal init\");\n     \n      OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);\n      OneSignal.startInit(this).init();\n\n      Log.d(\"OneSignalTag\", \"After OneSignal init\");\n   }\n}",
      "language": "java"
    }
  ]
}
[/block]
---

## ERROR: AppId format is invalid
1. Make sure you have `onesignal_app_id` in your `build.gradle` and your id is correct.
[block:code]
{
  "codes": [
    {
      "code": "android {\n   defaultConfig {\n      manifestPlaceholders = [onesignal_app_id: \"PUT YOUR ONESIGNAL APP ID HERE\",\n                              // Project number pulled from dashboard, local value is ignored.\n                              onesignal_google_project_number: \"REMOTE\"]\n    }\n }",
      "language": "groovy",
      "name": "Gradle"
    }
  ]
}
[/block]
2. Make sure you are not replacing the `<application>` tag in your `AndroidManifest.xml` with `tools:node="replace"`

[block:code]
{
  "codes": [
    {
      "code": "<application\nandroid:icon=\"@mipmap/ic_launcher\"\ntools:node=\"replace\" <!-- Remove this line!!! -->\nandroid:name=\".ApplicationClass\">",
      "language": "xml"
    }
  ]
}
[/block]
If you must replace some attributes please use `tools:replace` instead `tools:node`.
Example: `tools:replace="icon, label"` 


---

## OneSignal Dependencies
OneSignal automatically includes the following dependencies;
* `com.google.android.gms - Version 11.2.+`
* `com.android.support - Version 26.1.+`

Since these are commonly used by other SDKs you may run into issues due to conflicting versions. Add the [OneSignal-Gradle-Plugin](https://github.com/OneSignal/OneSignal-Gradle-Plugin) to your project which will automatically resolve any conflicts.

**1.** Open your `app/build.gradle` (Module: app) file, add the following to the top.
[block:code]
{
  "codes": [
    {
      "code": "plugins {\n    id 'com.onesignal.androidsdk.onesignal-gradle-plugin' version '0.8.1'\n}\napply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'",
      "language": "groovy"
    }
  ]
}
[/block]
----
## WARNING: The onesignal-gradle-plugin MUST be before com.android.application!
In Android Studio open build.gradle (Module: app), make sure you have the following plugins and the order is the same as shown below:
[block:code]
{
  "codes": [
    {
      "code": "apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'\napply plugin: 'com.android.application'",
      "language": "groovy"
    }
  ]
}
[/block]
----
## ... a resolved Google Play services library dependency depends on another at an exact version (e.g. "[10.2.1, 16.0.99]", but isn't being resolved to that version. Behavior exhibited by the library will be unknown
In Android Studio open build.gradle (Module: app), make sure to add the following to the top of the file: 
[block:code]
{
  "codes": [
    {
      "code": "apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'\napply plugin: 'com.google.gms.google-services'",
      "language": "groovy"
    }
  ]
}
[/block]
----

## (Missing Google Play Services Library) status on the Dashboard
In Android Studio open `build.gradle` (Module: app) and make sure you are using the latest OneSignal SDK under dependencies.

[block:code]
{
  "codes": [
    {
      "code": "dependencies {\n    compile 'com.onesignal:OneSignal:[3.6.0, 3.99.99]'\n}",
      "language": "csharp",
      "name": "Gradle"
    }
  ]
}
[/block]

----

## Android Studio -  No resource found that matches the given name: attr 'android:keyboardNavigationCluster'
Make sure you have `compileSdkVersion` to `26` in your `app/build.gradle`. This is required when you update to 26 of the Android Support Library.


## Eclipse - ERROR - "conversion to dalvik format failed with error 1"
If you're getting a `conversion to dalvik format failed with error 1` error with `Dx bad class file magic (cafebabe) or version (0033.0000)` messages before this then you may have the wrong Java version set on your system. See the follow post to fix this as well as the other answers.
http://stackoverflow.com/a/9041471/1244574

----

### Questions about "com.onesignal.NotificationOpenedReceiver" & “com.onesignal.UpgradeReceiver"

com.onesignal.NotificationOpenedReceiver  is defined exactly like this in the AndroidManifest.xml

<receiver android:name="com.onesignal.NotificationOpenedReceiver" />

Since there are no intent filters it's default is NOT exported outside of the app.

See the Android documentation for this default behavior.
https://developer.android.com/guide/topics/manifest/receiver-element#exported

"com.onesignal.UpgradeReceiver"

This is broadcast receiver is filter to  android.intent.action.MY_PACKAGE_REPLACED  which only the Android OS should be able to fire. Also the Intent is not read, this is only used trigger an SDK task to put back  any notifications to the shade after the app is updated as Android does not do this automatically.