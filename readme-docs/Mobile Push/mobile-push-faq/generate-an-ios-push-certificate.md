---
title: "Generate an iOS Push Certificate"
slug: "generate-an-ios-push-certificate"
excerpt: "Step-by-step guide to create an iOS Push Certificate"
hidden: false
createdAt: "2016-09-20T05:17:14.865Z"
updatedAt: "2022-02-02T21:20:01.428Z"
---
An iOS Push Certificate is required for push notification delivery to all **iOS** mobile apps. Apple does **not** support Web Push on iPhone or iPads. For more details, please read our [iOS Web Push Blog Post](https://onesignal.com/blog/updated-ios-web-push-predictions/).

#Step 1. Requirements

* An iOS mobile app. (This is **not for websites / web push**)
* A <a href="https://developer.apple.com/" target="_blank">Paid Apple Developer Account</a> with <a href="https://appstoreconnect.apple.com/access/users" target="_blank">**Admin** Role</a>.
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* A Mac computer with Xcode 11+
* Your Xcode project should have the Push Notification capability added. Otherwise your project may not be shown in the Apple Developer Center.

#Step 2. Provisioning

If you are renewing a certificate or your app already has an existing App ID or Provisioning Profile, skip to [Step 3. Generate a Push Certificate](#step-3-generate-push-certificate).

If your App does not have an existing App ID or Provisioning Profile setup, then login to you <a href="https://developer.apple.com/" target="_blank">Paid Apple Developer Account</a> and navigate to **Identifiers** and select the **Blue +** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/02f55e2-2ce9fb0-Screen_Shot_2020-11-04_at_3.39.41_PM.png",
        "2ce9fb0-Screen_Shot_2020-11-04_at_3.39.41_PM.png",
        1249,
        447,
        "#f8f7f7"
      ]
    }
  ]
}
[/block]
Select **App IDs** and **Continue**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92abebc-9af1054-Screen_Shot_2020-11-04_at_3.41.23_PM.png",
        "9af1054-Screen_Shot_2020-11-04_at_3.41.23_PM.png",
        1250,
        283,
        "#f6f7f7"
      ]
    }
  ]
}
[/block]
Select **App** and **Continue**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f45bde9-eeb1591-Screen_Shot_2020-11-04_at_3.42.35_PM.png",
        "eeb1591-Screen_Shot_2020-11-04_at_3.42.35_PM.png",
        1237,
        293,
        "#fafbfc"
      ]
    }
  ]
}
[/block]
Provide a "Description" and your Explicit "Bundle ID". This must be the same as the "Bundle Identifier" you set for your project in Xcode.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3dd7adb-Screen_Shot_2022-02-02_at_12.37.14_PM.png",
        "Screen Shot 2022-02-02 at 12.37.14 PM.png",
        2448,
        756,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6dfcbe5-Screen_Shot_2022-02-02_at_12.37.49_PM.png",
        "Screen Shot 2022-02-02 at 12.37.49 PM.png",
        2264,
        598,
        "#32363b"
      ]
    }
  ]
}
[/block]
Press **Continue** and on the next page, select **Register**.

#Step 3. Generate Push Certificate

##Method 1: Use OneSignal's Automatic Provisioning Tool

This is recommended if you are renewing a certificate.
[block:callout]
{
  "type": "warning",
  "title": "Previous Certificate Revokation",
  "body": "Previous p12 Push Certificates for this bundle id will be revoked and cannot be used once you generate a new certificate with this method."
}
[/block]
**Admin account required**: Before you use the Automatic Provisioning tool, log into your Apple Developer account, go to the Membership section, and make sure your role for the team is **Admin**. If your role is not Admin, you will not be able to use this tool.

Follow the directions on <a href="https://onesignal.com/provisionator" target="_blank">OneSignal's Provisionator Tool</a>.

Then [continue to Step 4. Upload your Push Certificate to OneSignal](#step-4-upload-your-push-certificate-to-onesignal).

----

##Method 2: Create A Certificate Request Manually

If you are renewing a certificate, skip to step [3.2.3 Select Push Notification Certificate](#323-select-push-notification-certificate).

### 3.2.1 Request a Certificate From a Certificate Authority

Open the Keychain Access App on your macOS system. It may be located in **Applications > Utilities > Keychain Access**.

Select **Keychain Access > Certificate Assistant > Request a Certificate From a Certificate Authority...**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4851eb5-generate-an-ios-push-certificate.png",
        "generate-an-ios-push-certificate.png",
        709,
        314,
        "#e27f8e"
      ]
    }
  ]
}
[/block]
Next, select the **Save to disk** option and enter your information in the required fields. 

This creates a certification request file that will be used later.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3d59f9-generate-an-ios-push-certificate_-_Certificate_Ass.png",
        "generate-an-ios-push-certificate - Certificate Ass.png",
        728,
        555,
        "#e4e1e2"
      ]
    }
  ]
}
[/block]
###3.2.2 Add Capabilities

In your Apple Developer Account under <a href="https://developer.apple.com/account/ios/identifier/bundle" target="_blank">Certificates, IDs & Profiles > Identifiers</a>, select **Identifiers**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc3d6ee-Screen_Shot_2019-06-11_at_6.57.04_PM.png",
        "Screen Shot 2019-06-11 at 6.57.04 PM.png",
        894,
        319,
        "#f6f4f4"
      ]
    }
  ]
}
[/block]
Find and select your Identifier to enable Push Notifications, but **do not** click Configure.

If you do not see your Identifier, follow [Step 2. Provisioning](#step-2-provisioning).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1c92d9-Screen_Shot_2022-02-02_at_1.04.31_PM.png",
        "Screen Shot 2022-02-02 at 1.04.31 PM.png",
        2008,
        142,
        "#faf9fa"
      ]
    }
  ]
}
[/block]
###3.2.3 Select Push Notification Certificate

Go to <a href="https://developer.apple.com/account/resources/certificates/add" target="_blank">Certificates</a> and create a new certificate by clicking the blue **+** (plus) button.

Under **Services**, select **Apple Push Notification service SSL (Sandbox & Production)** and click Continue.
 - The certificate will be applicable to both Sandbox and Production environments, so you do not need a separate key for each one.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c16de37-Screen_Shot_2019-06-11_at_7.10.51_PM.png",
        "Screen Shot 2019-06-11 at 7.10.51 PM.png",
        896,
        865,
        "#f3eeee"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
###3.2.4 Select your App

Choose your App ID with matching Bundle ID from the App ID pop-up menu, and click Continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cde1adb-Screen_Shot_2019-06-11_at_7.12.14_PM.png",
        "Screen Shot 2019-06-11 at 7.12.14 PM.png",
        897,
        366,
        "#f0f1f3"
      ]
    }
  ]
}
[/block]
###3.2.5 Upload your Certificate Signing Request

Click **Choose File..**, select the **CertSigningRequest** file you saved in [Step 3.2.1](#321-request-a-certificate-from-a-certificate-authority), click Open, and then click Continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/183e815-Screen_Shot_2019-06-11_at_7.17.41_PM.png",
        "Screen Shot 2019-06-11 at 7.17.41 PM.png",
        662,
        626,
        "#f3f0f1"
      ]
    }
  ]
}
[/block]
Click Download to save the certificate to your computer.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e744fb1-Screen_Shot_2019-06-11_at_7.19.52_PM.png",
        "Screen Shot 2019-06-11 at 7.19.52 PM.png",
        924,
        368,
        "#f5f3f4"
      ]
    }
  ]
}
[/block]
###3.2.6 Creating a Private Key

Open the `.cer` file you downloaded in the last step by double-clicking on it in Finder.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0e27ab2-cert-fs8.png",
        "cert-fs8.png",
        1708,
        968,
        "#efefee"
      ],
      "caption": ""
    }
  ]
}
[/block]
After a few seconds, the Keychain Access program should open. Select **Login > My Certificates**, then right-click on your Apple Push Services key in the list and select **Export "Apple Push Services...**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/231789c-Untitled_drawing.png",
        "Untitled drawing.png",
        960,
        720,
        "#9d9fa1"
      ]
    }
  ]
}
[/block]
Give the file a unique name using the `.p12` extension, and click Save. You will have an option to protect the file with a password. If you add a password, you need to enter this same password on OneSignal.

#Step 4. Upload Your Push Certificate to OneSignal

In the OneSignal dashboard, select your app, then go to Settings. 

Under Native App Platforms, click **Apple iOS**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/544873a-Screen_Shot_2020-11-04_at_11.25.00_AM.png",
        "Screen Shot 2020-11-04 at 11.25.00 AM.png",
        1112,
        530,
        "#e0dcdd"
      ]
    }
  ]
}
[/block]
Select the `.p12` file you exported (along with a password, if you added one) and click Save.

**Note:** If you used the OneSignal Provisionator tool to create a `.p12` file, a password was generated for you, and is located next to the Download button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/90be181-Screen_Shot_2020-11-04_at_11.25.51_AM.png",
        "Screen Shot 2020-11-04 at 11.25.51 AM.png",
        816,
        531,
        "#e3e3e5"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "You should be finished generating your iOS Push Certificate and uploading it to OneSignal."
}
[/block]
#Provisioning Profiles
Usually Required for Cordova/Ionic, and GoNative.

Skip if selected "Automatically manage signing" in Xcode.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5d3d07c-Screen_Shot_2020-11-04_at_3.29.20_PM.png",
        "Screen Shot 2020-11-04 at 3.29.20 PM.png",
        1005,
        294,
        "#2a292b"
      ]
    }
  ]
}
[/block]
If you did not select "Automatically manage signing", then follow these steps.

## Create Your Profile

In your Apple Developer Account > Certificates, Identifiers & Profiles > go to **Profiles**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b3e19b7-3d98603-Screen_Shot_2020-04-02_at_9.02.30_PM.png",
        "3d98603-Screen_Shot_2020-04-02_at_9.02.30_PM.png",
        1240,
        400,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
Next find any that are for your app and remove them if they do not have App Groups and Push Notifications in Enabled Capabilities:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c9f2c7-Screen_Shot_2020-04-02_at_9.06.15_PM.png",
        "Screen Shot 2020-04-02 at 9.06.15 PM.png",
        1193,
        426,
        "#fbf7f7"
      ]
    }
  ]
}
[/block]
Create a Profile by pressing the "+" button
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5235d4e-Screen_Shot_2020-04-02_at_9.07.28_PM.png",
        "Screen Shot 2020-04-02 at 9.07.28 PM.png",
        1287,
        323,
        "#fbf9f9"
      ]
    }
  ]
}
[/block]
Select the type of profile you need to create and press **Continue**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fef3c8c-Screen_Shot_2020-11-06_at_10.49.46_AM.png",
        "Screen Shot 2020-11-06 at 10.49.46 AM.png",
        1300,
        862,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
Search for your App ID, if you do not see your App ID, check the [Create Your Identifier](#create-your-identifier) step above.

Then press **Continue**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f75d04-Screen_Shot_2020-11-06_at_11.18.56_AM.png",
        "Screen Shot 2020-11-06 at 11.18.56 AM.png",
        1274,
        405,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]
Select the Development or Distribution Certificate to associate with the Profile. Then click **Continue**. .
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/05c6e02-Screen_Shot_2020-11-06_at_11.24.39_AM.png",
        "Screen Shot 2020-11-06 at 11.24.39 AM.png",
        1274,
        435,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
Name your Provisioning Profile 
[block:callout]
{
  "type": "warning",
  "body": "When recreating new profiles make sure to enter a unique name in the \"Provisioning Profile Name:\" field.\n\nExample, if creating an Ad-Hoc Provisioning Profile to test push notifications with a Production Push Certificate .p12 file. Use the format `AppName_AdHoc` so you know the app and type it is.",
  "title": "Best Practices"
}
[/block]
Select **Generate**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/603a2ff-Screen_Shot_2020-11-06_at_11.26.25_AM.png",
        "Screen Shot 2020-11-06 at 11.26.25 AM.png",
        1234,
        550,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
On the last page **Download** your profile.

Re-sync your Developer Account in Xcode by going to Xcode > Preferences... then click on the "View Details..." button. Lastly, click the refresh button on the bottom left of the popup. See Apple's documentation for more detailed instructions.

Make sure you pick your new provisioning profile from Build Settings>Code Signing>Provisioning Profile in Xcode.