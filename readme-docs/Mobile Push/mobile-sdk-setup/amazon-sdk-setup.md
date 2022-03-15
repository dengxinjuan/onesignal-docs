---
title: "Amazon SDK Setup"
slug: "amazon-sdk-setup"
excerpt: "Instructions for adding the OneSignal SDK to your Amazon app"
hidden: false
createdAt: "2016-09-20T03:35:44.470Z"
updatedAt: "2021-07-29T01:09:08.198Z"
---
Follow these instructions if your app is distributed on the Amazon AppStore.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Android Studio](https://developer.android.com/studio)
* [A Google/Firebase Server API Key](doc:generate-a-google-server-api-key)

Android Studio is the most common way to build Amazon projects. Follow our [Android SDK Setup](doc:android-sdk-setup) and return to back to this guide once completed.

#Step 2. Update AndroidManifest.xml

**2.1.** Open your `AndroidManifest.xml` file and add `xmlns:amazon="http://schemas.amazon.com/apk/res/android"` in the manifest tag right after the `xmlns:android` property.
[block:code]
{
  "codes": [
    {
      "code": "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:amazon=\"http://schemas.amazon.com/apk/res/android\"\n    package=\"com.onesignal.example\"\n    android:versionCode=\"1\"\n    android:versionName=\"1.0\" >",
      "language": "xml"
    }
  ]
}
[/block]
**2.2.** Add the following permissions to `AndroidManifest.xml`:
[block:code]
{
  "codes": [
    {
      "code": "<uses-permission android:name=\"com.amazon.device.messaging.permission.RECEIVE\" />\n<permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" android:protectionLevel=\"signature\" />\n<uses-permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" />",
      "language": "xml"
    }
  ]
}
[/block]
**2.3.** In the `application tag`, add the following:
[block:code]
{
  "codes": [
    {
      "code": "<application ....>\n  <amazon:enable-feature android:name=\"com.amazon.device.messaging\"\n                         android:required=\"false\"/>\n  <service android:name=\"com.onesignal.ADMMessageHandler\"\n           android:exported=\"false\" />\n  <service android:name=\"com.onesignal.ADMMessageHandlerJob\"\n           android:permission=\"android.permission.BIND_JOB_SERVICE\"\n           android:exported=\"false\" />\n  <receiver android:name=\"com.onesignal.ADMMessageHandler$Receiver\"\n            android:permission=\"com.amazon.device.messaging.permission.SEND\" >\n    <intent-filter>\n      <action android:name=\"com.amazon.device.messaging.intent.REGISTRATION\" />\n      <action android:name=\"com.amazon.device.messaging.intent.RECEIVE\" />\n      <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n    </intent-filter>\n  </receiver>\n  \n</application>",
      "language": "xml"
    }
  ]
}
[/block]
**2.4.** Replace all 3 of instances `COM.YOUR.PACKAGE_NAME` with your package name in `AndroidManifest.xml`.

#Step 3. Amazon API Key File

** 3.1 ** Place your `api_key.txt` in a folder named `assets` in the root of your project.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/77ac1b6-AmazonAndroidStudio_api_key.png",
        "AmazonAndroidStudio_api_key.png",
        506,
        292,
        "#e4e4e0"
      ]
    }
  ]
}
[/block]
To create an `api_key.txt` for your app, follow our [Generate an Amazon API Key](doc:generate-an-amazon-api-key) guide.

**3.2** Make sure to use the same keystore when building your APK as you did in step 2.4 in the Amazon Configuration guide.

**3.3.** Ensure that you are not building a `debug` app when testing Amazon push notifications. It must be a `release` type.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8d01f9-AndroidStudioBuildVariant.png",
        "AndroidStudioBuildVariant.png",
        387,
        75,
        "#d4d8df"
      ]
    }
  ]
}
[/block]
----

# Setup SDK in Eclipse

Eclipse is a less common way to build Amazon projects.
[block:callout]
{
  "type": "warning",
  "title": "Android Setup",
  "body": "If your app is also on the Google Play Store or is available for non-Amazon Android devices on the Amazon Appstore, then make sure to also follow our [Android SDK Setup Guide](doc:android-sdk-setup) so that users in those markets are not left out."
}
[/block]
### 1. Import Libraries

**1.1** Download the latest [OneSignal Android SDK](https://github.com/one-signal/OneSignal-Android-SDK/releases).

**1.2.** Copy `<android-sdk>\extras\android\support\v4\android-support-v4.jar` into your project's `libs` folder. If you're missing it, run the Android SDK Manager and install it from the Extras section.

`SDK Path:` is shown on this window. Replace `<android-sdk>` with your path.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/yvMs4MpmRIqCsTBj8ZbA_AmazonNativeSetup1.png",
        "AmazonNativeSetup1.png",
        "600",
        "467",
        "#62ac6d",
        ""
      ]
    }
  ]
}
[/block]
**1.3.** Copy `OneSignalSDK.jar` from our SDK, and place it in your project's `libs` folder as well.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/Hl2PcrsT2SoiAHUJEX7s_Untitled-2.jpg",
        "Untitled-2.jpg",
        "217",
        "244",
        "#8a423c",
        ""
      ]
    }
  ]
}
[/block]
### 2. Add Required Code

If you have already followed our Android Native Guide, you can skip to step 3.

**2.1.** Import OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "import com.onesignal.OneSignal;\nimport com.onesignal.OneSignal.NotificationOpenedHandler;",
      "language": "java"
    }
  ]
}
[/block]
**2.2.** Add the following to the `onCreate` method on your main activity.
[block:code]
{
  "codes": [
    {
      "code": "// Pass in your app's Context, optional Google Project Number, your OneSignal App ID, and NotificationOpenedHandler\nOneSignal.init(this, \"\", \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", new ExampleNotificationOpenedHandler());",
      "language": "java"
    }
  ]
}
[/block]
Update `5eb5a37e-b458-11e3-ac11-000c2940e62c` with your OneSignal AppID.

Replace the the 2nd parameter with your Google Project number if your app is also on the Google Play Store.

**2.3.** Add the following private class in your activity (or in its own class file).
[block:code]
{
  "codes": [
    {
      "code": "// This fires when a notification is opened by tapping on it.\nprivate class ExampleNotificationOpenedHandler implements NotificationOpenedHandler {\n  @Override\n  public void notificationOpened(OSNotificationOpenResult openedResult) {\n    OSNotificationAction.ActionType actionType = openedResult.action.type;\n    JSONObject data = openedResult.notification.payload.additionalData;\n\n    String customKey = data.optString(\"customkey\", null);\n    if (actionType == OSNotificationAction.ActionType.ActionTaken)\n      Log.i(\"OneSignalExample\", \"Button pressed with id: \" + openedResult.action.actionID);\n\n    // The following can be used to open an Activity of your choice.\n    /*\n      Intent intent = new Intent(getApplication(), YourActivity.class);\n\t\t\tintent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_NEW_TASK);\n\t\t\tstartActivity(intent);\n      */\n    // Follow the instructions in the link below to prevent the launcher Activity from starting.\n    // https://documentation.onesignal.com/docs/android-notification-customizations#changing-the-open-action-of-a-notification\n}",
      "language": "java"
    }
  ]
}
[/block]
### 3. Update `AndroidManifest.xml`

**3.1.** Open your `AndroidManifest.xml` file and add `xmlns:amazon="http://schemas.amazon.com/apk/res/android"` in the manifest tag right after the `xmlns:android` property.
[block:code]
{
  "codes": [
    {
      "code": "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:amazon=\"http://schemas.amazon.com/apk/res/android\"\n    package=\"com.onesignal.example\"\n    android:versionCode=\"1\"\n    android:versionName=\"1.0\" >",
      "language": "xml"
    }
  ]
}
[/block]
**3.2.** Add the following permissions to `AndroidManifest.xml`:
[block:code]
{
  "codes": [
    {
      "code": "<uses-permission android:name=\"android.permission.INTERNET\" />\n<uses-permission android:name=\"com.amazon.device.messaging.permission.RECEIVE\" />\n<permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" android:protectionLevel=\"signature\" />\n<uses-permission android:name=\"COM.YOUR.PACKAGE_NAME.permission.RECEIVE_ADM_MESSAGE\" />\n<uses-permission android:name=\"android.permission.WAKE_LOCK\" />\n<uses-permission android:name=\"android.permission.VIBRATE\" />\n<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />\n<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />\n\n<!-- START: ShortcutBadger -->\n<!-- Samsung -->\n<uses-permission android:name=\"com.sec.android.provider.badge.permission.READ\"/>\n<uses-permission android:name=\"com.sec.android.provider.badge.permission.WRITE\"/>\n\n<!-- HTC -->\n<uses-permission android:name=\"com.htc.launcher.permission.READ_SETTINGS\"/>\n<uses-permission android:name=\"com.htc.launcher.permission.UPDATE_SHORTCUT\"/>\n\n<!-- Sony -->\n<uses-permission android:name=\"com.sonyericsson.home.permission.BROADCAST_BADGE\"/>\n<uses-permission android:name=\"com.sonymobile.home.permission.PROVIDER_INSERT_BADGE\"/>\n\n<!-- Apex -->\n<uses-permission android:name=\"com.anddoes.launcher.permission.UPDATE_COUNT\"/>\n\n<!-- Solid -->\n<uses-permission android:name=\"com.majeur.launcher.permission.UPDATE_BADGE\"/>\n\n<!-- Huawei -->\n<uses-permission android:name=\"com.huawei.android.launcher.permission.CHANGE_BADGE\" />\n<uses-permission android:name=\"com.huawei.android.launcher.permission.READ_SETTINGS\" />\n<uses-permission android:name=\"com.huawei.android.launcher.permission.WRITE_SETTINGS\" />\n\n<!-- ZUK -->\n<uses-permission android:name=\"android.permission.READ_APP_BADGE\"/>\n\n<!-- OPPO -->\n<uses-permission android:name=\"com.oppo.launcher.permission.READ_SETTINGS\"/>\n<uses-permission android:name=\"com.oppo.launcher.permission.WRITE_SETTINGS\"/>\n\n<!-- EvMe -->\n<uses-permission android:name=\"me.everything.badger.permission.BADGE_COUNT_READ\"/>\n<uses-permission android:name=\"me.everything.badger.permission.BADGE_COUNT_WRITE\"/>\n\n<!-- End: ShortcutBadger -->",
      "language": "xml"
    }
  ]
}
[/block]
**3.3.** In the `application` tag, add the following:
[block:code]
{
  "codes": [
    {
      "code": "<application ....>\n  <amazon:enable-feature android:name=\"com.amazon.device.messaging\" android:required=\"false\"/>\n  <activity android:name=\"com.onesignal.NotificationOpenedActivity\" android:theme=\"@android:style/Theme.NoDisplay\"/>\n  <service android:name=\"com.onesignal.ADMMessageHandler\" android:exported=\"false\" />\n  <receiver android:name=\"com.onesignal.ADMMessageHandler$Receiver\"\n            android:permission=\"com.amazon.device.messaging.permission.SEND\" >\n    <intent-filter>\n      <action android:name=\"com.amazon.device.messaging.intent.REGISTRATION\" />\n      <action android:name=\"com.amazon.device.messaging.intent.RECEIVE\" />\n      <category android:name=\"COM.YOUR.PACKAGE_NAME\" />\n    </intent-filter>\n  </receiver>\n  <receiver android:name=\"com.onesignal.NotificationOpenedReceiver\" />\n  <service android:name=\"com.onesignal.GcmIntentService\" />\n  <service android:name=\"com.onesignal.SyncService\" android:stopWithTask=\"false\" />\n  <activity android:name=\"com.onesignal.PermissionsActivity\" android:theme=\"@android:style/Theme.Translucent.NoTitleBar\" />\n  \n  <service android:name=\"com.onesignal.NotificationRestoreService\" />\n  <receiver android:name=\"com.onesignal.BootUpReceiver\">\n    <intent-filter>\n      <action android:name=\"android.intent.action.BOOT_COMPLETED\" />\n      <action android:name=\"android.intent.action.QUICKBOOT_POWERON\" />\n    </intent-filter>\n  </receiver>\n  <receiver android:name=\"com.onesignal.UpgradeReceiver\" >\n    <intent-filter>\n      <action android:name=\"android.intent.action.MY_PACKAGE_REPLACED\" />\n    </intent-filter>\n  </receiver>\n</application>",
      "language": "xml"
    }
  ]
}
[/block]
**3.4.** Replace all 3 of instances `COM.YOUR.PACKAGE_NAME` with your package name in `AndroidManifest.xml`.

### 4. Amazon API Key File

** 4.1 ** Place your `api_key.txt` in a folder named `assets` in the root of your project.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9aFoAX6AQxealRdIPR2B_AmazonNativeSetup3.png",
        "AmazonNativeSetup3.png",
        "498",
        "261",
        "",
        ""
      ]
    }
  ]
}
[/block]
To create an `api_key.txt` for your app, follow our [Generate an Amazon API Key](doc:generate-an-amazon-api-key) guide.

**4.2** Make sure to use the same keystore when building your APK as you did in step 2.4 in the Amazon Configuration guide.

**Proguard**

If you have Proguard enabled on your project, you must add the following line to your Proguard config file. The default filename is `proguard-project.txt`.

```
-dontwarn com.onesignal.**

-keep class com.google.android.gms.common.api.GoogleApiClient {
    void connect();
    void disconnect();
}

-keep public interface android.app.OnActivityPausedListener {*;}
-keep class com.onesignal.ActivityLifecycleListenerCompat** {*;}

-keep class com.onesignal.OSSubscriptionState {
    void changed(com.onesignal.OSPermissionState);
}

-keep class com.onesignal.OSPermissionChangedInternalObserver {
    void changed(com.onesignal.OSPermissionState);
}

-keep class com.onesignal.OSSubscriptionChangedInternalObserver {
    void changed(com.onesignal.OSSubscriptionState);
}

-keep class ** implements com.onesignal.OSPermissionObserver {
    void onOSPermissionChanged(com.onesignal.OSPermissionStateChanges);
}

-keep class ** implements com.onesignal.OSSubscriptionObserver {
    void onOSSubscriptionChanged(com.onesignal.OSSubscriptionStateChanges);
}

-keep class com.onesignal.shortcutbadger.impl.AdwHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.ApexHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.AsusHomeLauncher { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.DefaultBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.EverythingMeHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.HuaweiHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.LGHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.NewHtcHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.NovaHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.OPPOHomeBader { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.SamsungHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.SonyHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.VivoHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.XiaomiHomeBadger { <init>(...); }
-keep class com.onesignal.shortcutbadger.impl.ZukHomeBadger { <init>(...); }

-dontwarn com.amazon.**
-keep public class com.onesignal.ADMMessageHandler {*;}
```

----

## Troubleshooting

If you run into any issues, please see our [Android troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting-android), or our general [Troubleshooting](doc:troubleshooting) section.

---

## Testing

Normal Android devices do not support Amazon's ADM messaging, so you must test on an Amazon device. (First Generation Kindle Fire does not support push).