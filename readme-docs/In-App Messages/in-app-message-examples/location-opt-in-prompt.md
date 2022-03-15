---
title: "Location Opt-In Prompt"
slug: "location-opt-in-prompt"
excerpt: "Prompt Android and iOS mobile app users to allow location tracking."
hidden: false
createdAt: "2020-04-23T23:57:51.507Z"
updatedAt: "2021-08-25T15:40:01.968Z"
---
Using OneSignal's [In-App Messages](doc:sending-in-app-messages) you can easily create and customize a "soft-prompt" to ask users to grant location tracking.

#Requirements:
See [Android Location Tracking](https://developer.android.com/training/location) and [iOS Location Tracking](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html) guidelines for frameworks to add to your app.
Location tracking permissions must be set in your `AndroidManifest.xml` and/or `info.plist`.
[block:code]
{
  "codes": [
    {
      "code": "// Make sure you add one of the following permissions\n<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>\n<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\"/>",
      "language": "xml",
      "name": "AndroidManifest.xml"
    },
    {
      "code": "//These are examples of how you may setup the app. See Apple's Guide on this: https://developer.apple.com/documentation/corelocation/requesting_authorization_for_location_services\n// Example plist image: https://i.imgur.com/OZDQpyQ.png\n\n<key>NSLocationUsageDescription</key>\n  <string>Your message goes here</string>\n<key>NSLocationWhenInUseUsageDescription</key>\n    <string>Your message goes here</string>  \n<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>\n  <string>Your message goes here</string>\n<key>NSLocationAlwaysUsageDescription</key>\n    <string>Your message goes here</string>\n<key>UIBackgroundModes</key>\n    <array>\n        <string>location</string>\n        <string>remote-notification</string>\n    </array>",
      "language": "xml",
      "name": "info.plist"
    }
  ]
}
[/block]
#New In-App Message

Head to **Messages > In-App > New In-App**

If location tracking is required for all users of the app, you can select "Show to all users", otherwise you can show to a particular [Segment](doc:segmentation) or your choice. We will show how/when to trigger this prompt below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdd002f-Screen_Shot_2020-04-24_at_9.41.01_AM.png",
        "Screen Shot 2020-04-24 at 9.41.01 AM.png",
        1147,
        408,
        "#dee1e3"
      ]
    }
  ]
}
[/block]
# Setup your message

When prompting for location tracking, it is best to inform your user's why this is recommended. People don't usually share their location without a good reason. Explain with concise detail on what specific functionality this provides and why they should allow location tracking.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d79589d-iam-setup.png",
        "iam-setup.png",
        1922,
        1650,
        "#f3f5f8"
      ]
    }
  ]
}
[/block]
## Add the Click Action

Create a button for the user to click if they wish to allow location tracking. In the button settings, select **Add Click Action** and **Location Permission Prompt**. When the user clicks this button, OneSignal will automatically trigger the native Location Permission Prompt (required for location tracking).

If location is already being tracked, adding this Click Action will prevent the entire IAM from showing.

The native Location Permission Prompt is required by Android and iOS for location tracking. Showing the native prompt and being denied limits the amount of times you can show it. By adding this pre-prompt it allows you to prompt the user as many times as required for opt-in.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ee94da-iam-setup-add-buttons.png",
        "iam-setup-add-buttons.png",
        561,
        767,
        "#f3f5f7"
      ]
    }
  ]
}
[/block]

# Trigger the In-App Message

You can trigger this message any time you like. However, if the device has already allowed location tracking permissions, the entire IAM will not show to the user until location tracking has been disabled.


## Trigger After Time In-App
For example, if you want to trigger this after being in the app for 30 seconds, set the trigger like so:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/740b977-Screen_Shot_2020-04-15_at_3.38.46_PM.png",
        "Screen Shot 2020-04-15 at 3.38.46 PM.png",
        1067,
        301,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
## Programmatic Triggers

Under the **Triggers** section select **In-App Trigger** and set `location_prompt` is `true` for example.

You will add this "key": "value" trigger programmatically in the app with `addTrigger` method soon.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b2b2535-Screen_Shot_2020-04-24_at_9.55.22_AM.png",
        "Screen Shot 2020-04-24 at 9.55.22 AM.png",
        1063,
        277,
        "#f8f8f9"
      ]
    }
  ]
}
[/block]
## Trigger The Prompt

You can trigger this prompt anytime by simply use the `addTrigger` [method](doc:iam-sdk-methods).

Make sure the trigger "key" and "value" match what you added to the IAM Trigger. In this example, we used `location_prompt` for the key and `true` for the value.

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.addTrigger(\"location_prompt\", \"true\");",
      "language": "java"
    },
    {
      "code": "OneSignal.addTrigger(\"location_prompt\", withValue: \"true\")",
      "language": "swift"
    },
    {
      "code": "[OneSignal addTrigger:@\"location_prompt\" withVaue:@\"true\"]\n\n",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.AddTrigger(\"location_prompt\", \"true\");",
      "language": "csharp",
      "name": "Unity-C#"
    },
    {
      "code": "OneSignal.addTrigger(\"location_prompt\", \"true\");\n",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.addTrigger(\"location_prompt\", \"true\");",
      "language": "javascript",
      "name": "Cordova"
    },
    {
      "code": "OneSignal.addTrigger(\"location_prompt\", \"true\");",
      "language": "javascript",
      "name": "Flutter"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "Next see our guide on [Location-Triggered Notifications](doc:location-triggered-event)."
}
[/block]