---
title: "Troubleshooting Unity"
slug: "troubleshooting-unity"
excerpt: "Common setup and troubleshooting issues with Unity iOS, Android (and derivatives like Amazon)."
hidden: false
createdAt: "2016-09-24T00:12:34.516Z"
updatedAt: "2021-12-16T23:07:26.857Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on Unity Setup.\n\nFor Android and/or iOS Platform issues see:\n- [Android Troubleshooting](doc:troubleshooting-android) \n- [iOS Troubleshooting](doc:troubleshooting-ios) \n\nTry the [example project on our Github repository](https://github.com/OneSignalDevelopers/OneSignal-Unity-Sample).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help. For faster assistance, please provide:\n- What version of Unity are you using?\n- What version of the OneSignal Unity SDK are you using?\n- Do your build settings use \"Custom Main Gradle Template\" or not?\nCan you provide a copy of your:\n- `manifest.json` (located in the Packages/ folder)\n- `GchProjectSettings.xml` (located in the ProjectSettings/ folder)\n- `AndroidResolverDependencies.xml` (located in the ProjectSettings/ folder)"
}
[/block]

# Android - Library missing error
If you see a Google Play Services, Android Support, or AndroidX missing library error then the External Dependency Manager may have not have resolved dependencies.

**1.** Run `Assets` > `External Dependency Manager` > `Android Resolver` > `Force Resolve` from the menu bar.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a62167-Unity2020.2_external_depdencey_manager_force_resolve.png",
        "Unity2020.2_external_depdencey_manager_force_resolve.png",
        864,
        800,
        "#7c7d7e"
      ]
    }
  ]
}
[/block]
**2.** You should now a list of files similar to the screenshot below in your  `Assets/Plugins/Android` folder.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a2effa-Unity2020.2_assets_plugins_android_after_reslove.png",
        "Unity2020.2_assets_plugins_android_after_reslove.png",
        748,
        951,
        "#464646"
      ]
    }
  ]
}
[/block]
**3.** If these files do not appear check the Unity log for errors and follow the External Dependency Manager error instructions.
[block:callout]
{
  "type": "success",
  "body": "Done! Please check the other sections below if you still see an error. If the problem persists, send your console log, Unity version, and other plugins in your project to OneSignal. support."
}
[/block]
---
# iOS MESSAGE: "`Your App` would like to find and connect to devices on your local network."

Unity triggers this when it's in "Development" mode when doing a build. This will not show on "Production" unless you have another iOS Library that requires it. OneSignal does not require this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13252b1-UnityDevelopmentBuildError_iOS.png",
        "UnityDevelopmentBuildError_iOS.png",
        1359,
        920,
        "#c7c8c8"
      ]
    }
  ]
}
[/block]
----
# AndroidX Compatibility

Please follow these steps if you are seeing errors like this when building;
```java
Execution failed for task ':checkDebugDuplicateClasses'.
java.lang.RuntimeException: java.lang.RuntimeException: Duplicate class android.support.customtabs.ICustomTabsCallback found in modules classes.jar (:androidx.browser.browser-1.0.0:) and classes.jar (:com.android.support.customtabs-27.1.1:)
```
**1.** Go to `Assets` > `External Dependency Manager` > `Android Resolver` > `Settings` and check the following;
   - **Use Jetifier**
   - **Patch gradleTemplate.properties**
   - **Use project settings**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c7100c-Unity2020.2_external_depdencey_manager_android_settings.png",
        "Unity2020.2_external_depdencey_manager_android_settings.png",
        640,
        811,
        "#514d4b"
      ]
    }
  ]
}
[/block]
**2.** Scroll down and press "OK" to save these settings.

**3.** Go to `File` > `Build Settings...` then click on the "Player Settings..." button
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6965a9-Unity2020.2_build_settings.png",
        "Unity2020.2_build_settings.png",
        632,
        603,
        "#3f3f40"
      ]
    }
  ]
}
[/block]
**4.** From here go to `Publishing Settings` and check "Custom Gradle Properties Template". 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/69389ac-Unity2020.2_enable_custom_gradle_properties_template.png",
        "Unity2020.2_enable_custom_gradle_properties_template.png",
        850,
        787,
        "#464443"
      ]
    }
  ]
}
[/block]
----
# Record Unity Packaging APK Error The Option 'Android.Enabler8' Is Deprecated and Should Not Be Used Anymore. 

Solution: https://www.programmersought.com/article/50008714052/

----
# UnityPlayerActivity

Some users reported crashes when notification is received and clicked using Unity 2019.3.5f1 and extended UnityPlayerActivity. 

Adding this to your `AndroidManifest.xml` fixed the issue reported:

```xml
<meta-data android:name="unityplayer.UnityActivity" android:value="true" />
```

## UnauthorizedAccessException to AndroidManifest

If you see this error:
[block:code]
{
  "codes": [
    {
      "code": "UnauthorizedAccessException: Access to the path \"Assets/Plugins/Android/OneSignalConfig.plugin/AndroidManifestTemplate.xml\" or \"Assets/Plugins/Android/OneSignalConfig.plugin/AndroidManifest.xml\" is denied.\nSystem.IO.File.Copy (System.String sourceFileName, System.String destFileName, System.Boolean overwrite) (at <eae584ce26bc40229c1b1aa476bfa589>:0)\nOneSignalEditorScriptAndroid.createOneSignalAndroidManifest () (at Assets/OneSignal/Editor/OneSignalEditorScript_Android.cs:44)\nOneSignalEditorScriptInit..cctor () (at Assets/OneSignal/Editor/OneSignalEditorScriptInit.cs:9)\nRethrow as TypeInitializationException: The type initializer for 'OneSignalEditorScriptInit' threw an exception.\nSystem.Reflection.MonoCMethod.InternalInvoke (System.Object obj, System.Object[] parameters) (at <eae584ce26bc40229c1b1aa476bfa589>:0)",
      "language": "text"
    }
  ]
}
[/block]
"Assets/Plugins/Android/OneSignalConfig.plugin/AndroidManifestTemplate.xml" must be readable.

"Assets/Plugins/Android/OneSignalConfig.plugin/AndroidManifest.xml" does not need to be checked in, this will be regenerated at build time from Unity. You will just need to make sure the folder is writable.

----
#Error calling Init

When calling init method we get the following error message:

```
"InvalidOperationException: Android platform is not supported by OneSignal"
at OneSignal.Init () [0x00000] in <00000000000000000000000000000000>:0
```
Check your app's lifecycle methods and where you are invoking OneSignal's initialization process. This is likely a concurrency issue and OneSignal is being initialized too early.

----
#Unity Version Upgrade
After upgrading the Unity Version on your project, Click Window -> OneSignal and rerun all steps.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/59b7ad2-Screen_Shot_2021-12-16_at_2.54.51_PM.png",
        "Screen Shot 2021-12-16 at 2.54.51 PM.png",
        1054,
        1266,
        "#65676e"
      ]
    }
  ]
}
[/block]
Make sure that all other configuration settings from our setup guide are correct as well, since these can change with version upgrade.