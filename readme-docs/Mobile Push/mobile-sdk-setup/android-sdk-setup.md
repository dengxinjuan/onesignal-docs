---
title: "Android SDK Setup"
slug: "android-sdk-setup"
excerpt: "Instructions for adding the OneSignal Android Mobile App SDK to your Android or Amazon Kindle Fire Apps using Android Studio."
hidden: false
createdAt: "2016-09-02T00:25:52.997Z"
updatedAt: "2021-11-19T05:08:42.160Z"
---
#Step 1. Requirements
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* Your OneSignal App Id, available in <a href="https://documentation.onesignal.com/docs/accounts-and-keys" target="_blank">Settings > Keys & IDs</a>.
* <a href="https://developer.android.com/studio" target="_blank">Android Studio</a>
* An Android 4.0.3+ device or emulator with "Google Play Store (Services)" installed.
* <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">A Google/Firebase Server API Key</a>.
* Project using <a href="https://developer.android.com/jetpack/androidx/migrate" target="_blank">AndroidX</a>.

#Step 2. Add OneSignal Gradle Plugin and SDK

**2.1** Open your root `build.gradle (Project: name)` file, add the following.
   - Under `buildscript` > `repositories` add _**(before jcenter**)_
       - `mavenCentral()`
       - `gradlePluginPortal()`
   - Under `buildscript` > `dependencies` add
        - `classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.10, 0.99.99]'`
   - Under `allprojects`  > `repositories`  add _**(before jcenter)**_
        - `mavenCentral()`
[block:code]
{
  "codes": [
    {
      "code": "buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n        jcenter()\n    }\n    dependencies {\n        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.10, 0.99.99]'\n    }\n}\n\nallprojects {\n    repositories {\n        google()\n        mavenCentral()\n        jcenter()\n    }\n}",
      "language": "groovy",
      "name": "build.gradle"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/20fdf26-Root_build.gradle_highlights.png",
        "Root build.gradle highlights.png",
        1233,
        718,
        "#3a393c"
      ]
    }
  ]
}
[/block]
**2.2** Open your App `build.gradle (Module: app)` file, add the following **under** `buildscript {...}` and **above** `'com.android.application'`.
[block:code]
{
  "codes": [
    {
      "code": "plugins {\n    id 'com.onesignal.androidsdk.onesignal-gradle-plugin'\n    // Other plugins here if pre-existing\n}",
      "language": "groovy",
      "name": "app/build.gradle"
    }
  ]
}
[/block]
**2.3** Add the following to your `dependencies` section.
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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b736b81-Screen_Shot_2020-12-14_at_6.14.47_PM.png",
        "Screen Shot 2020-12-14 at 6.14.47 PM.png",
        1379,
        708,
        "#323233"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Sync Gradle",
  "body": "Make sure to press \"Sync Now\" on the banner that pops up after saving!"
}
[/block]

#Step 3. Add Required Code

**3.1** Add the following to the `onCreate` method in your `Application` class.

If you don't have an Application class follow our [Create Application Class Guide](doc:create-application-class-android-studio).

Note: The ONESIGNAL_APP_ID can be found in the dashboard Settings > [Keys & IDs](doc:accounts-and-keys) 
[block:code]
{
  "codes": [
    {
      "code": "import com.onesignal.OneSignal;\n\npublic class MainApplication extends Application {\n    private static final String ONESIGNAL_APP_ID = \"########-####-####-####-############\";\n  \n    @Override\n    public void onCreate() {\n        super.onCreate();\n        \n        // Enable verbose OneSignal logging to debug issues if needed.\n        OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);\n        \n        // OneSignal Initialization\n        OneSignal.initWithContext(this);\n        OneSignal.setAppId(ONESIGNAL_APP_ID);\n    }\n}",
      "language": "java"
    },
    {
      "code": "import com.onesignal.OneSignal\n\nconst val ONESIGNAL_APP_ID = \"########-####-####-####-############\"\n  \nclass MainApplication : Application() {\n   override fun onCreate() {\n      super.onCreate()\n        \n      // Logging set to help debug issues, remove before releasing your app.\n      OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE)\n      \n      // OneSignal Initialization\n      OneSignal.initWithContext(this)\n      OneSignal.setAppId(ONESIGNAL_APP_ID)\n   }\n}",
      "language": "java",
      "name": "Kotlin"
    }
  ]
}
[/block]

#Step 4. Customize the default notification icons ( strongly recommended )

By default, notifications will be shown with a small bell icon in the notification shade. Follow the [Customize Notification Icons](doc:customize-notification-icons) guide to create your own small and large notification icons for your app.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2b21f41-3c2fb44-android-notification-preview.png",
        "3c2fb44-android-notification-preview.png",
        744,
        307,
        "#faf9f8"
      ]
    }
  ]
}
[/block]
#Step 5. Run Your App and Send Yourself a Notification

Run your app on a physical device to make sure it builds correctly.

Your Android device should already be subscribed to push notifications. Check your OneSignal Dashboard **Audience > All Users** to see your [Device Record](doc:users). 

Then head over to **Messages > New Push** to [Send your first Push Notification](doc:sending-notifications) from OneSignal.
[block:callout]
{
  "type": "info",
  "body": "If running into issues, see our [Android troubleshooting guide](doc:troubleshooting-android).\n\nTry the [example project on Github](https://github.com/OneSignal/OneSignal-Android-SDK/tree/master/Examples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce",
  "title": "Troubleshooting"
}
[/block]

#Step 6. Set Custom User Properties
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
      "code": "String externalUserId = \"123456789\"; // You will supply the external user id to the OneSignal SDK\nOneSignal.setExternalUserId(externalUserId);",
      "language": "java"
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
      "code": "// Pass in email provided by customer\nOneSignal.setEmail(\"example@domain.com\");\n\n// Pass in phone number provided by customer\nOneSignal.setSMSNumber(\"+11234567890\");",
      "language": "java",
      "name": null
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
      "code": "OneSignal.sendTag(\"key\", \"value\");",
      "language": "java"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]