---
title: "Authorize OneSignal to Send Huawei Push"
slug: "authorize-onesignal-to-send-huawei-push"
hidden: false
createdAt: "2020-05-08T17:02:29.469Z"
updatedAt: "2020-06-05T19:00:03.326Z"
---
### Requirements

- A [Huawei Developer Account](https://developer.huawei.com/consumer/en/console)
- An Android mobile app
   - App also created on [Huawei's AppGallery Connect](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-create_app)
- A [OneSignal Account](https://onesignal.com/), if you do not already have one.

# Step 1: Enable PushKit
**1.1** [Enable Huawei PushKit on your app from Huawei's AppGallery Connect]( https://developer.huawei.com/consumer/en/doc/distribution/app/agc-enable_service#h1-1574823053380)

---

# Step 2: Getting Your Huawei PushKit Values
**2.1** From  [Huawei's AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) select your app from "My Apps".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f36e4ff-Huawei_AppGallery_Connect_LandingPage_With_Myapps_highlight.png",
        "Huawei_AppGallery_Connect_LandingPage_With_Myapps_highlight.png",
        1269,
        805,
        "#bcd6f4"
      ]
    }
  ]
}
[/block]
**2.2** After selecting your app go to Distribute > App information.
Save the **"Package name"**, **"APP ID"**, and **"App Secret"** from this page for the next step.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5fc2dd3-Huawei_AppGallery_Connect_Required_Fields_For_PushKit.png",
        "Huawei_AppGallery_Connect_Required_Fields_For_PushKit.png",
        1276,
        568,
        "#f6f3f5"
      ]
    }
  ]
}
[/block]

---

# Step 3: Configure Your OneSignal App's Huawei Platform Settings
**3.1** In the [OneSignal dashboard](https://app.onesignal.com/) select your app from the All Apps page, then go to Settings. Under Native App Platforms, click Huawei Android.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/76b316d-Huawei_OneSignal_Dashboard_Select_Huawei_Android.png",
        "Huawei_OneSignal_Dashboard_Select_Huawei_Android.png",
        1263,
        761,
        "#e5e5e7"
      ]
    }
  ]
}
[/block]
**3.2** Paste your  **"Package name"**, **"APP ID"**, and **"App Secret"** into the fields and click Next.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68765aa-Huawei_OneSignal_Dashboard_Entering_Server_Key_Values.png",
        "Huawei_OneSignal_Dashboard_Entering_Server_Key_Values.png",
        1273,
        582,
        "#dfe3e6"
      ]
    }
  ]
}
[/block]

---

**Done!** You now have the required Huawei keys entered to send push notifications from your app. 🥳

If you have not already done so, proceed to install the [OneSignal SDK](doc:mobile-sdk-setup) in your app.