---
title: "Android Create Custom Notifications"
slug: "android-create-custom-notifications"
hidden: true
createdAt: "2021-02-20T19:43:38.053Z"
updatedAt: "2021-06-04T21:21:46.162Z"
---
## Create Custom Layouts

#### Unity Layout 

Open your project in Unity and navigate to `Assets/Plugins/Android/OneSignalConfig.plugin/res/` 

Create a folder called `layout`


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/67f2d2a-Screen_Shot_2021-03-16_at_5.49.09_PM.png",
        "Screen Shot 2021-03-16 at 5.49.09 PM.png",
        2128,
        1268,
        "#404040"
      ]
    }
  ]
}
[/block]
Add two `.xml` files: `notification_small.xml` and `notification_large.xml` using the code samples below. [Jump to code samples](#custom-layout-code-samples).

#### Native and Non-Unity SDKs 

Open your project in Android Studio and navigate to `app/res/layout` and create New > Layout Resource File
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/978f58b-Screen_Shot_2021-02-20_at_11.28.59_AM.png",
        "Screen Shot 2021-02-20 at 11.28.59 AM.png",
        1594,
        694,
        "#42464c"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Name the file `notification_small` and click **OK**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f4672f8-Screen_Shot_2021-02-20_at_11.31.47_AM.png",
        "Screen Shot 2021-02-20 at 11.31.47 AM.png",
        1674,
        998,
        "#3f4144"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Repeat this process for another file called `notification_large`.

Add the following code based on the file name.

#### Custom Layout Code Samples

You can create 2 default images named `small_image` and `large_image` if you want and put them in `app/Java/res/drawable`. Otherwise remove `android:src` from the code below.
[block:code]
{
  "codes": [
    {
      "code": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:orientation=\"vertical\" android:layout_width=\"match_parent\"\n    android:layout_height=\"64dp\"\n    android:gravity=\"center\">\n\n    <ImageView\n        android:id=\"@+id/image_view_notification_small\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\"\n        android:scaleType=\"centerCrop\"\n        android:src=\"@drawable/small_image\"/>\n\n</LinearLayout>",
      "language": "xml",
      "name": "notification_small"
    },
    {
      "code": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:orientation=\"vertical\" android:layout_width=\"match_parent\"\n    android:layout_height=\"256dp\"\n    android:gravity=\"center\">\n    \n    <ImageView\n        android:id=\"@+id/image_view_notification_large\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\"\n        android:scaleType=\"centerCrop\"\n        android:src=\"@drawable/large_image\"/>\n\n</LinearLayout>",
      "language": "xml",
      "name": "notification_large"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b8aa4d-Screen_Shot_2021-02-20_at_11.45.52_AM.png",
        "Screen Shot 2021-02-20 at 11.45.52 AM.png",
        3316,
        2070,
        "#3b3f41"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
## Setup Notification Service Extension

Create a file called `NotificationServiceExtension.java` 

#### Unity NotificationServiceExtension

Create a new folder called `OneSignalNotificationServiceExtension` within your `Assets` folder.

Add `NotificationServiceExtension.java` file so it is available like this: `Assets/OneSignalNotificationServiceExtension/NotificationServiceExtension`

Make sure only **Android** is selected in the Inspector for this file.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81940ea-Screen_Shot_2021-03-16_at_6.07.21_PM.png",
        "Screen Shot 2021-03-16 at 6.07.21 PM.png",
        3594,
        1524,
        "#3f3e3e"
      ]
    }
  ]
}
[/block]
Then add the below **Android SDK 3.x.x Java** code to the `NotificationServiceExtension.java` file.

#### Native and Non-Unity SDKs NotificationServiceExtension 

Add this file to `app/Java/YOUR_APP`

Add the following code based on the version of the OneSignal SDK you are using:
[block:code]
{
  "codes": [
    {
      "code": "package your.package.name\n\nimport android.content.Context;\nimport android.graphics.Bitmap;\nimport android.graphics.BitmapFactory;\nimport android.util.Log;\n\nimport android.widget.RemoteViews;\n\nimport org.json.JSONObject;\n\nimport com.onesignal.OSNotification;\nimport com.onesignal.OSMutableNotification;\nimport com.onesignal.OSNotificationReceivedEvent;\nimport com.onesignal.OneSignal.OSRemoteNotificationReceivedHandler;\n\nimport java.net.URL;\n\n\n@SuppressWarnings(\"unused\")\npublic class NotificationServiceExtension implements OSRemoteNotificationReceivedHandler {\n\n    @Override\n    public void remoteNotificationReceived(Context context, OSNotificationReceivedEvent notificationReceivedEvent) {\n\n        // https://developer.android.com/training/notify-user/custom-notification\n        // Get the layouts to use in the custom notification\n        RemoteViews notificationSmallLayoutView = new RemoteViews(context.getPackageName(), R.layout.notification_small);\n        RemoteViews notificationLargeLayoutView = new RemoteViews(context.getPackageName(), R.layout.notification_large);\n\n        OSNotification notification = notificationReceivedEvent.getNotification();\n        OSMutableNotification mutableNotification = notification.mutableCopy();\n\n        JSONObject data = notification.getAdditionalData();\n        String notification_small_image_url;\n        String notification_large_image_url;\n\n        if (data != null) {\n            Log.i(\"OneSignalExample\", \"Received Notification Data: \" + data);\n            notification_small_image_url = data.optString(\"notification_small_image_url\", null);\n            notification_large_image_url = data.optString(\"notification_large_image_url\", null);\n            if (notification_small_image_url != null && notification_large_image_url != null) {\n                Log.i(\"OneSignalExample\", \"Received Notification Data notification_small_image_url: \" + notification_small_image_url);\n\n                notificationSmallLayoutView.setImageViewBitmap(R.id.image_view_notification_small, getBitmapFromURL(notification_small_image_url));\n                notificationLargeLayoutView.setImageViewBitmap(R.id.image_view_notification_large, getBitmapFromURL(notification_large_image_url));\n                mutableNotification.setExtender(builder -> builder.setCustomContentView(notificationSmallLayoutView)\n                        .setCustomBigContentView(notificationLargeLayoutView)\n                        //.setStyle(new NotificationCompat.DecoratedCustomViewStyle())//recommended for full background and app title\n                );\n            }\n         }\n        // If complete isn't call within a time period of 25 seconds, OneSignal internal logic will show the original notification\n        // To omit displaying a notification, pass `null` to complete()\n        notificationReceivedEvent.complete(mutableNotification);\n    }\n\n    private static Bitmap getBitmapFromURL(String location) {\n        try {\n            return BitmapFactory.decodeStream(new URL(location).openConnection().getInputStream());\n        } catch (Throwable t) {\n            Log.i(\"OneSignalExample\", \"COULD NOT DOWNLOAD IMAGE\");\n        }\n\n        return null;\n    }\n\n}",
      "language": "java",
      "name": "Android SDK 4.0.0+ Java"
    },
    {
      "code": "package com.onesignal.onesignalsdk;\n\nimport android.graphics.Bitmap;\nimport android.graphics.BitmapFactory;\n\nimport android.support.v4.app.NotificationCompat;\nimport com.onesignal.BuildConfig;\nimport com.onesignal.OSNotificationDisplayedResult;\nimport com.onesignal.OSNotificationPayload;\nimport com.onesignal.NotificationExtenderService;\nimport com.onesignal.OSNotificationReceivedResult;\nimport java.net.URL;\nimport android.util.Log;\nimport android.widget.RemoteViews;\nimport android.content.Context;\nimport android.content.Intent;\n\n//import androidx.core.app.NotificationCompat;\n\nimport org.json.JSONObject;\n\npublic class NotificationServiceExtension extends NotificationExtenderService {\n    @Override\n    protected boolean onNotificationProcessing(final OSNotificationReceivedResult receivedResult) {\n\n        Log.d(\"OneSignalExtension\", \"onNotificationProcessing invoked\");\n\n        // https://developer.android.com/training/notify-user/custom-notification\n        // Get the layouts to use in the custom notification\n        final RemoteViews notificationSmallLayoutView = new RemoteViews(getPackageName(), R.layout.notification_small);\n        final RemoteViews notificationLargeLayoutView = new RemoteViews(getPackageName(), R.layout.notification_large);\n\n        final JSONObject data = receivedResult.payload.additionalData;\n\n        OverrideSettings overrideSettings = new OverrideSettings();\n        overrideSettings.extender = new NotificationCompat.Extender() {\n            @Override\n            public NotificationCompat.Builder extend(NotificationCompat.Builder builder) {\n                Log.d(\"OneSignalExtension\", \"Notification received with payload: \" + receivedResult.payload);\n                String notification_small_image_url;\n                String notification_large_image_url;\n                if (data != null){\n                    notification_small_image_url = data.optString(\"notification_small_image_url\", null);\n                    notification_large_image_url = data.optString(\"notification_large_image_url\", null);\n                    if (notification_small_image_url != null && notification_large_image_url != null) {\n                        Log.d(\"OneSignalExtension\", \"notification_small_image_url: \" + notification_small_image_url);\n                        Log.d(\"OneSignalExtension\", \"notification_large_image_url: \" + notification_large_image_url);\n                        notificationSmallLayoutView.setImageViewBitmap(R.id.image_view_notification_small, getBitmapFromURL(notification_small_image_url));\n                        notificationLargeLayoutView.setImageViewBitmap(R.id.image_view_notification_large, getBitmapFromURL(notification_large_image_url));\n                        builder.setCustomContentView(notificationSmallLayoutView);\n                        builder.setCustomBigContentView(notificationLargeLayoutView);\n                        //.setStyle(new NotificationCompat.DecoratedCustomViewStyle())//recommended for full background and app title\n                                \n                    }\n                }\n                return builder;\n            }\n        };\n        OSNotificationDisplayedResult displayedResult = displayNotification(overrideSettings);\n        Log.d(\"OneSignalExtension\", \"Notification displayed with id: \" + displayedResult.androidNotificationId);\n        // Return true to stop the notification from displaying.\n        return false;\n    }\n\n    private static Bitmap getBitmapFromURL(String location) {\n        try {\n            return BitmapFactory.decodeStream(new URL(location).openConnection().getInputStream());\n        } catch (Throwable t) {\n            Log.i(\"OneSignalExample\", \"COULD NOT DOWNLOAD IMAGE\");\n        }\n        return null;\n    }\n}",
      "language": "java",
      "name": "Android SDK 3.x.x Java"
    }
  ]
}
[/block]
#### Unity AndroidManifest.xml Setup

Within your `Assets/Plugins/Android/AndroidManifest.xml` file.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3359f6a-Screen_Shot_2021-03-17_at_11.07.51_AM.png",
        "Screen Shot 2021-03-17 at 11.07.51 AM.png",
        1261,
        581,
        "#343435"
      ]
    }
  ]
}
[/block]
If you don't have this file, check you **Build Settings > Android > Player Settings > Publish Settings > Custom Android Manifest** is checked.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bba7c19-image.png",
        "image.png",
        2155,
        1051,
        "#3f3e3e"
      ]
    }
  ]
}
[/block]
Add the below `<service>` code within the `<application>` ... `</application>` tags
[block:code]
{
  "codes": [
    {
      "code": "<service\n    android:name=\"com.onesignal.onesignalsdk.NotificationServiceExtension\"\n    android:permission=\"android.permission.BIND_JOB_SERVICE\"\n    android:exported=\"false\">\n    <intent-filter>\n    <action android:name=\"com.onesignal.NotificationServiceExtension\" />\n    </intent-filter>\n</service>",
      "language": "xml"
    },
    {
      "code": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<manifest\n    xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    package=\"com.unity3d.player\"\n    xmlns:tools=\"http://schemas.android.com/tools\">\n    <application>\n        <activity android:name=\"com.unity3d.player.UnityPlayerActivity\"\n                  android:theme=\"@style/UnityThemeSelector\">\n            <intent-filter>\n                <action android:name=\"android.intent.action.MAIN\" />\n                <category android:name=\"android.intent.category.LAUNCHER\" />\n            </intent-filter>\n            <meta-data android:name=\"unityplayer.UnityActivity\" android:value=\"true\" />\n        </activity>\n<service\n    android:name=\"com.onesignal.onesignalsdk.NotificationServiceExtension\"\n    android:permission=\"android.permission.BIND_JOB_SERVICE\"\n    android:exported=\"false\">\n    <intent-filter>\n    <action android:name=\"com.onesignal.NotificationExtender\" />\n    </intent-filter>\n</service>\n    </application>\n</manifest>",
      "language": "xml",
      "name": "Full Example AndroidManifest.xml"
    }
  ]
}
[/block]
## Send the Notification

Within the OneSignal Dashboard, use the "Additional Data" fields to add:

`notification_small_image_url` and `notification_large_image_url` as keys with the image url as value.

For example:

`notification_small_image_url`   :  `https://cdn.pixabay.com/photo/2019/05/29/16/00/retro-4237850_960_720.jpg`


`notification_large_image_url`   :  `https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106252_960_720.jpg`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f484cf-Screen_Shot_2021-02-20_at_3.09.24_PM.png",
        "Screen Shot 2021-02-20 at 3.09.24 PM.png",
        854,
        430,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]