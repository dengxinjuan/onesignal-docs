---
title: "Generate an Amazon API Key"
slug: "generate-an-amazon-api-key"
excerpt: "Step-by-step guide"
hidden: false
createdAt: "2016-09-20T06:09:31.522Z"
updatedAt: "2021-07-20T00:20:46.415Z"
---
An Amazon API Key is required for all **Amazon** apps.

# Requirements:

- An Amazon app.
- An [Amazon Developer account](https://developer.amazon.com/login.html) account.
- A [OneSignal Account](https://onesignal.com/), if you do not already have one.

# Step 1. Create A Security Profile

Log in to your [Amazon Developer account](https://developer.amazon.com/login.html) and select your app.
 
Click on the **Device Messaging** tab and click **Create a New Security Profile**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92REq7thRFiW728xOiNS_AmazonSecurityProfile1.png",
        "AmazonSecurityProfile1.png",
        "976",
        "573",
        "#a94042",
        ""
      ]
    }
  ]
}
[/block]
Give your Security Profile the required name and description, then click Save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aIDGySBrR7iFANxPak1L_AmazonSecurityProfile2.png",
        "AmazonSecurityProfile2.png",
        "927",
        "394",
        "",
        ""
      ]
    }
  ]
}
[/block]
You should get a series of success messages. Next, click **View Security Profile** to continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/D4frRRzJQue8WZufNbDr_AmazonSecurityProfile3.png",
        "AmazonSecurityProfile3.png",
        "865",
        "366",
        "",
        ""
      ]
    }
  ]
}
[/block]
You will then see a settings page that lists your **Client ID** and **Client Secret**. Leave this page open, as you will need this information in Step 2.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/06k5hfGR5OtUjHqSvzHp_AmazonSecurityProfile4.png",
        "AmazonSecurityProfile4.png",
        "912",
        "341",
        "",
        ""
      ]
    }
  ]
}
[/block]
# Step 2. Configure Your OneSignal App's Amazon Platform Settings

In the OneSignal dashboard, select your app from the All Apps page, then go to Settings. Under Native App Platforms, click Amazon Fire.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0228067-settings-platforms-amazon.jpg",
        "settings-platforms-amazon.jpg",
        2480,
        1180,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
Paste your Client ID and Client Secret into the fields and click Save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5e8d7e-settings-platforms-amazon-configure.jpg",
        "settings-platforms-amazon-configure.jpg",
        2480,
        1132,
        "#7a7b7d"
      ]
    }
  ]
}
[/block]
# Step 3. Creating An Amazon API Key

The following steps are required to test push notifications before publishing your app to the Amazon App Store.

Go back to the Amazon Security Profile page for your app, and select the **Android/Kindle Settings** tab.

Enter any name you like for the **API Key Name**.

Enter your Android package name. **NOTE**: the package name is case sensitive.

Enter the MD5 signature of your Android Keystore you used to sign the APK file with. See [Amazon's instructions](https://developer.amazon.com/public/apis/engage/login-with-amazon/docs/android_app_signatures.html) to get this value.

We recommend not using the default debugging keystore, but if you do, make sure you redo this again with your Production keystore, or let Amazon sign your app for you.

When you're done, click **Generate New Key**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/QmpjKGuXTnqb9BSTNyPA_AmazonSecurityProfile6.png",
        "AmazonSecurityProfile6.png",
        "906",
        "399",
        "",
        ""
      ]
    }
  ]
}
[/block]
Copy the **Key** shown in the results and save it into a new file named `api_key.txt`. 

When your app is built, this file needs to be located in `/assets/` in the root of your APK. 

More details on the placement of this file can be found in our [Amazon SDK Setup](doc:amazon-sdk-setup) documentation.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/vFkWzWcASaSyBzMlF6ps_AmazonSecurityProfile7.png",
        "AmazonSecurityProfile7.png",
        "910",
        "612",
        "#c32d29",
        ""
      ]
    }
  ]
}
[/block]
---

**Done!** You now have a key to send push notifications from your app. 🥳

Next, install the OneSignal SDK in your app. If you need help, we have a few SDK-specific guides:

- [Amazon SDK Setup](doc:amazon-sdk-setup)