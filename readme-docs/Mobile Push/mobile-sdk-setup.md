---
title: "Mobile Push Quickstart"
slug: "mobile-sdk-setup"
excerpt: "How to set up Mobile Push notifications on your Mobile App with OneSignal."
hidden: false
createdAt: "2016-09-01T04:25:52.954Z"
updatedAt: "2022-02-01T18:34:07.315Z"
---
If you haven't already, sign up for a free account on <a href="https://onesignal.com" target="_blank">onesignal.com</a>.

If this is not your first app with OneSignal, click **New App/Website**. Otherwise, you will see the next page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/54af1bc-f2869ef-f23ff71-create_an_app.jpeg",
        "f2869ef-f23ff71-create_an_app.jpeg",
        1066,
        548,
        "#d5d9de"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Name your app, then select **iOS, Android, or Huawei** from the platform list. Click **Next: Configure Your Platform**.

**Note:** If you want to set up more platforms, you will be able to do so later within the app's settings page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb2af90-new_app.png",
        "new app.png",
        1336,
        892,
        "#f6f7f8"
      ],
      "sizing": "80",
      "caption": "Image showing new app setup to select a platform"
    }
  ]
}
[/block]


# Step 1. Platform Setup

Follow the prompts based on the platforms you support.

##iOS

Upload your Apple `.p12` certificate. See <a href="https://documentation.onesignal.com/docs/generate-an-ios-push-certificate" target="_blank">Generate an iOS Push Certificate</a> if you do not have a `.p12` certificate already. Note: Apple requires a paid developer account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f006867-new_app-1.png",
        "new app-1.png",
        1348,
        589,
        "#f5f7f8"
      ],
      "caption": "Image showing the Apple iOS Configuration Inputs"
    }
  ]
}
[/block]
##Android 

Add your firebase project's Server Key and Sender ID. See <a href="https://documentation.onesignal.com/docs/generate-a-google-server-api-key" target="_blank">Generate a Firebase Server Key</a> if you do not have them yet.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f18010-new_app-2.png",
        "new app-2.png",
        1348,
        578,
        "#f4f6f8"
      ],
      "caption": "Image showing where to add in your Google Android Configuration"
    }
  ]
}
[/block]
#Step 2. Choose the Apps target SDK

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/32a5052-new_app-4.png",
        "new app-4.png",
        1348,
        984,
        "#f6f8f9"
      ],
      "caption": "Example shows Native Android, if using iOS, it would show Native iOS."
    }
  ]
}
[/block]
# Step 3. Install the SDK

Follow the link to "read the documentation" and please copy **Your App ID** as this will be the ID that allows your mobile application to connect to the app you have created in OneSignal. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3d1c04c-new_app-3.png",
        "new app-3.png",
        1348,
        653,
        "#f3f5f6"
      ],
      "caption": "Note: if you need to return to this page. It is under Settings > Select your Platform."
    }
  ]
}
[/block]
##All SDK Setup Docs
If you missed the setup guide, use the table below to select the SDK type you need to get started.
[block:parameters]
{
  "data": {
    "h-0": "SDK Setup",
    "h-1": "iOS",
    "h-2": "Android",
    "h-3": "Huawei",
    "h-4": "Amazon Fire",
    "h-5": "Windows Phone 8.1",
    "h-6": "Other",
    "0-0": "Native",
    "1-0": "<a href=\"doc:unity-sdk-setup\" target=\"_blank\">Unity</a>",
    "5-0": "<a href=\"doc:cordova-sdk-setup\" target=\"_blank\">Cordova</a>",
    "6-0": "<a href=\"doc:xamarin-sdk-setup\" target=\"_blank\">Xamarin</a>",
    "0-1": "<a href=\"doc:ios-sdk-setup\" target=\"_blank\">Yes</a>",
    "0-2": "<a href=\"doc:android-sdk-setup\" target=\"_blank\">Yes</a>",
    "0-3": "<a href=\"doc:huawei-sdk-setup\" target=\"_blank\">Yes</a>",
    "0-4": "[Yes](doc:amazon-sdk-setup)",
    "0-5": "<span class=\"label-all label-yes\">[Yes](doc:windows-phone-sdk-setup)</span>",
    "1-1": "Yes",
    "1-2": "Yes",
    "1-3": "<a href=\"doc:huawei-unity-sdk-setup\" target=\"_blank\">Yes</a>",
    "5-1": "Yes",
    "5-2": "Yes",
    "5-3": "<a href=\"doc:huawei-cordova-sdk-setup\" target=\"_blank\">Yes</a>",
    "6-1": "Yes",
    "6-2": "Yes",
    "6-3": "<a href=\"doc:huawei-xamarin-sdk-setup\" target=\"_blank\">Yes</a>",
    "5-5": "<span class=\"label-all label-yes\">Yes</span>",
    "6-5": "<span class=\"label-all label-yes\">Yes</span>",
    "1-5": "<span class=\"label-all label-yes\">Yes</span>",
    "1-4": "Yes",
    "5-4": "Yes",
    "6-4": "Yes",
    "2-0": "<a href=\"doc:react-native-sdk-setup\" target=\"_blank\">React Native & Expo</a>",
    "2-1": "Yes",
    "2-2": "Yes",
    "2-3": "<a href=\"doc:huawei-react-native-sdk-setup\" target=\"_blank\">Yes</a>",
    "2-4": "Yes",
    "3-0": "<a href=\"doc:flutter-sdk-setup\" target=\"_blank\">Flutter</a>",
    "3-1": "Yes",
    "3-2": "Yes",
    "3-3": "<a href=\"doc:huawei-flutter-sdk-setup\" target=\"_blank\">Yes</a>",
    "3-4": "Yes",
    "4-0": "<a href=\"doc:ionic-sdk-setup\" target=\"_blank\">Ionic & Capacitor</a>",
    "4-1": "Yes",
    "4-2": "Yes",
    "4-4": "Yes",
    "4-3": "<a href=\"doc:huawei-cordova-sdk-setup\" target=\"_blank\">Yes</a>"
  },
  "cols": 5,
  "rows": 7
}
[/block]
SDKs maintained by 3rd Parties or limited support.
[block:parameters]
{
  "data": {
    "h-0": "SDK Setup",
    "h-1": "iOS",
    "h-2": "Android",
    "0-0": "[Corona / Solar2D](doc:solar2d-sdk-setup)",
    "0-1": "Yes",
    "0-2": "Yes",
    "h-3": "Huawei",
    "0-3": "No",
    "h-4": "Amazon Fire",
    "0-4": "Yes"
  },
  "cols": 5,
  "rows": 1
}
[/block]
###Desktop Platform Support
[block:parameters]
{
  "data": {
    "0-0": "[MacOS Apps](doc:macos-app-sdk-setup)",
    "2-0": "[Chrome Apps / Extensions](doc:chrome-extension-sdk-setup)",
    "1-0": "[Windows UWP Apps](doc:windows-app-sdk-setup)",
    "h-0": "SDK Setup"
  },
  "cols": 1,
  "rows": 3
}
[/block]
#Step 4. Subscribe and Send Yourself a Notification

Run your app and you should be prompted to subscribe on iOS or subscribed already on Android to push notifications. See <a href="https://documentation.onesignal.com/docs/ios-push-opt-in-prompt" target="_blank">iOS Prompt Guide</a> for more details.

Check your OneSignal Dashboard **Audience > All Users** to see your Device Record and <a href="doc:users-and-devices" target="_blank">set yourself as a test user</a>.

Then head over to **Messages > New Push** to <a href="doc:sending-notifications" target="_blank">Send your first Push Notification</a>.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, see our [Mobile troubleshooting guide](https://documentation.onesignal.com/docs/troubleshooting).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Mobile Push Tutorials](doc:mobile-push-tutorials) for next steps."
}
[/block]