---
title: "Create Application Class - Android Studio"
slug: "create-application-class-android-studio"
hidden: true
createdAt: "2018-03-23T21:45:16.541Z"
updatedAt: "2021-03-19T00:12:27.740Z"
---
**1.** Open your main `AndroidManifest.xml`
**2.** Add `android:name=".ApplicationClass"` to your `<application>` tag
[block:code]
{
  "codes": [
    {
      "code": "<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    package=\"com.example.test_login_activity\">\n   <application\n        android:icon=\"@mipmap/ic_launcher\"\n        android:label=\"@string/app_name\"\n        android:name=\".ApplicationClass\">\n        ...\n    </application>\n</manifest>",
      "language": "xml"
    }
  ]
}
[/block]
**3.** Hover over `android:name=".ApplicationClass"` or press Alt + Enter or Option + Enter and select `Create class 'ApplicationClass'`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d0679d-AndroidStudio_create_app_class_from_androidmanifest.png",
        "AndroidStudio_create_app_class_from_androidmanifest.png",
        788,
        396,
        "#47494b"
      ]
    }
  ]
}
[/block]
*This will automatically create the class for you. You can do so manually if you choose.*

**4.** Now add the `onCreate` method to your new `Application` class.
[block:code]
{
  "codes": [
    {
      "code": "import android.app.Application;\n\npublic class ApplicationClass extends Application {\n   @Override\n   public void onCreate() {\n      super.onCreate();\n      // TODO: Add OneSignal initialization here\n   }\n}",
      "language": "java"
    },
    {
      "code": "import android.app.Application\n\nclass ApplicationClass : Application() {\n   override fun onCreate() {\n      super.onCreate()\n      // TODO: Add OneSignal initialization here\n   }\n}",
      "language": "java",
      "name": "Kotlin"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Continue where you left off [\"Step 3. Add Required Code\"](doc:android-sdk-setup#step-3-add-required-code)!",
  "title": "Next Steps"
}
[/block]