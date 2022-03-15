---
title: "Step-by-Step Android Native 3.x to 4.x Upgrade Guide"
slug: "step-by-step-android-native-3x-to-400-upgrade-guide"
hidden: true
createdAt: "2020-09-24T00:25:12.410Z"
updatedAt: "2021-02-26T00:02:51.869Z"
---
# Step 1 - Requirements
This guide assumes you already have set up the [OneSignal-Android-SDK 3.x.x](https://documentation.onesignal.com/docs/android-sdk-setup-300) and are migrating your app to the 4.x Major version.
[block:callout]
{
  "type": "danger",
  "title": "**New** - AndroidX Required",
  "body": "Most Android projects have already updated to AndroidX from the \"Android Support Library\" since it is now the default for new projects. This is a requirement to use the new OneSignal-Android-SDK 4.0.0 and newer.\nIf you haven't please follow [Google's Migrating to AndroidX Guide](https://developer.android.com/jetpack/androidx/migrate) before getting started."
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "In your `app/build.gradle` set your `compileOptions` `*Compatibility` properties to `VERSION_1_8` as required by AndroidX.\n\n```gradle\nandroid {\n   // Must also use 16 or greater for a min Android SDK level\n   minSdkVersion 16\n\n   compileOptions {\n       sourceCompatibility JavaVersion.VERSION_1_8\n       targetCompatibility JavaVersion.VERSION_1_8\n   }\n}\n```",
  "title": "**New** - Requires Java 1.8"
}
[/block]
# Step 2 - Update app/build.gradle

2.1 In your `app/build.gradle`, under the `dependencies` section replace `com.onesignal:OneSignal:[3.0.0, 4.99.99]` with `com.onesignal:OneSignal:[4.0.0, 4.99.99]`.
[block:code]
{
  "codes": [
    {
      "code": "dependencies {\n    implementation 'com.onesignal:OneSignal:[4.0.0, 4.99.99]'\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
2.2 Remove `onesignal_app_id` and `onesignal_google_project_number` from your `manifestPlaceholders` section.
   - **Save your `onesignal_app_id` value, you will need it for the next step.**
[block:code]
{
  "codes": [
    {
      "code": "    // If these are the only two entries you may remove this whole section\n\t\tmanifestPlaceholders = [\n          onesignal_app_id: 'YOUR_ONESIGNAL_APP_ID',\n          onesignal_google_project_number: 'REMOTE'\n      ]",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
2.3 For location-based notification support, add the following line to the `app/build.gradle`, in order for permissions to work correctly.
[block:code]
{
  "codes": [
    {
      "code": "dependencies {\n    implementation 'com.google.android.gms:play-services-location:[17.0.0, 17.99.99]'\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
# Step 3 - Update initialization code
3.1 Open your [`Application` class](doc:create-application-class-android-studio) and find you `onCreate` method.
3.2 Replace the following
[block:code]
{
  "codes": [
    {
      "code": " // OneSignal Initialization\n OneSignal.startInit(this)\n     .inFocusDisplaying(OneSignal.OSInFocusDisplayOption.Notification)\n     .unsubscribeWhenNotificationsAreDisabled(true)\n     .init();",
      "language": "java"
    }
  ]
}
[/block]
3.3 To the match the new initialization
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\nOneSignal.initWithContext(this);\nOneSignal.setAppId(\"YOUR_ONESIGNAL_APP_ID_HERE\");",
      "language": "java"
    }
  ]
}
[/block]
3.4 Review your existing `.inFocusDisplaying` usage.
  - This was most likely set to `OneSignal.OSInFocusDisplayOption.Notification` which means no changes are needed since this is the default in 4.x. 
 - If you didn't have `inFocusDisplaying` at all in your code or this was `None` the replacement for this is adding a [`NotificationWillShowInForegroundHandler`](doc:android-native-sdk#setnotificationwillshowinforegroundhandler).

3.5 Review your `unsubscribeWhenNotificationsAreDisabled` usage.
  - This was most likely `true` which means you can safely remove `unsubscribeWhenNotificationsAreDisabled(true)`, as this is the default.
  - If this was `false`, you must now call `OneSignal.unsubscribeWhenNotificationsAreDisabled(false)`

3.6 Review your `NotificationExtenderService` service usage.
  - If you weren't using a `NotificationExtenderService` then you don't need to change anything
  - If you did implement `NotificationExtenderService` then you will need to remove the service implementation, also remember to remove it from your `AndroidManifest.xml`. Finally, to continue with the same functionally implement [`OSRemoteNotificationReceivedHandler`](doc:android-native-sdk#notificationserviceextension) instead.

# Step 4 - Review Full List
:white-check-mark: You've successfully set up the new SDK!
Please review the full [4.0 API Reference - Android Native](https://documentation.onesignal.com/docs/40-api-android-native) for a full list of new features and other advanced features you may need to migrate as well.