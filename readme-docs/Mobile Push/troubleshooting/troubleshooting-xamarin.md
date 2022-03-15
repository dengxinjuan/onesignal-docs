---
title: "Troubleshooting Xamarin"
slug: "troubleshooting-xamarin"
hidden: false
createdAt: "2017-04-13T02:23:25.767Z"
updatedAt: "2021-08-25T17:23:55.256Z"
---
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting Steps",
  "body": "Check this page first for common issues based on Xamarin Setup.\n\nFor Android and/or iOS Platform issues see:\n- [Android Troubleshooting](doc:troubleshooting-android) \n- [iOS Troubleshooting](doc:troubleshooting-ios) \n\nTry the [example project on our Github repository](https://github.com/OneSignal/OneSignal-Xamarin-SDK/tree/main/Samples).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

# Android Troubleshooting

## Java 65K Dex limit errors when building

This error occurs due to the number of Java libraries included in your project.

**1.** Make sure you don't have any extra libraries you don't need under `References` or `Packages`.
**2.1.** If this doesn't fix the build issue it recommended to Enable Proguard.
**2.2.** Right click on your Android solution and select `Options`.
**2.3.** Select `"Android Build"`.
**2.4.** Check `"Enable ProGuard"` and press OK.
**2.5.** Build you Android app again.
**3.1.** If ProGuard doesn't resolve the dex limit error then you will need to enable `Multi-Dex`.
**3.2.** This is just under the ProGuard setting.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b95308f-proguard_multidexing.png",
        "proguard_multidexing.png",
        1556,
        986,
        "#494d4f"
      ]
    }
  ]
}
[/block]