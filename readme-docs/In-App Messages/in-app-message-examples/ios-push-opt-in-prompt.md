---
title: "iOS Push Opt-In Prompt"
slug: "ios-push-opt-in-prompt"
excerpt: "Prompt iOS mobile app users to subscribe to push the right way."
hidden: false
createdAt: "2020-04-15T17:02:49.208Z"
updatedAt: "2021-11-15T23:30:29.918Z"
---
Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/notifications/) for collecting notification permissions recommends apps "Create an alert, modal view, or other interface that describes the types of information they want to send and gives people a clear way to opt in or out."

iOS only allows their native prompt to be shown one time. It cannot be re-shown if dismissed or if previously allowed. If this was shown in the past, the user must be sent to the app settings to enable notifications.

Using OneSignal's In-App Messages you can easily create and customize a "soft-prompt" to ask users to grant push permission multiple times.

Before getting setup, check that you do not show the native prompt:
- if present, remove [`promptForPushNotificationsWithUserResponse` method](#programmatically-triggering-the-native-ios-permission-prompt).
- if present, remove any other reference to iOS native API `requestAuthorizationWithOptions`.
- OneSignal SDK 2.x.x set `kOSSettingsKeyAutoPrompt` to `false`. OneSignal SDK 3.x.x does not have this option.

Also, make sure you have the latest version of the OneSignal SDK in your app.

#Setup The In-App Message

In **Messages > In-App** edit the default **Push Permission Prompt** template or create your own with the **New In-App** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1736992-Screen_Shot_2021-03-24_at_6.17.08_PM.png",
        "Screen Shot 2021-03-24 at 6.17.08 PM.png",
        2132,
        912,
        "#e0e2e5"
      ]
    }
  ]
}
[/block]
Keep the Audience set to "all users". [Paid Plans](https://onesignal.com/pricing) allow targeting segments. You can select **Show to Particular Segment(s)** if you want to only prompt under certain conditions using [Segments](doc:segmentation).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/458b966-Screen_Shot_2021-03-24_at_6.19.16_PM.png",
        "Screen Shot 2021-03-24 at 6.19.16 PM.png",
        2132,
        702,
        "#dcdfe1"
      ]
    }
  ]
}
[/block]

# Setup your message

In-App Messages can be customized to your app's theme and how you like to communicate. Use any wording to ask your users to subscribe and gauge their interest. For more details see [Design Your In-App Message](doc:design-your-in-app-message).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5d75409-Screen_Shot_2021-08-14_at_11.46.52_AM.png",
        "Screen Shot 2021-08-14 at 11.46.52 AM.png",
        1760,
        1390,
        "#e4eee9"
      ]
    }
  ]
}
[/block]
# Add the Buttons

If not using the default template, create a button and select **Add Click Action** and **Push Permission Prompt (iOS)**. When the user clicks this button, OneSignal will automatically trigger the native iOS Push Permission Prompt.

Adding a button with this action will prevent this In-App Message from being shown to users who have already granted push permission.

If the user has previously clicked "Don't Allow" on the iOS native Push Permission Prompt, the button will direct the user to the Application Settings in iOS where they can manually enable notifications.

See the <a href="doc:iam-click-actions" target="_blank">IAM Click Actions</a> guide for more details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac5051d-Screen_Shot_2021-08-14_at_11.48.49_AM.png",
        "Screen Shot 2021-08-14 at 11.48.49 AM.png",
        828,
        922,
        "#eef1f2"
      ]
    }
  ]
}
[/block]
#Triggers

To show the prompt without code, select the **On app open** or set the **Session Duration** trigger to a time of your choosing.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d1d0b7a-Screen_Shot_2021-08-14_at_11.56.25_AM.png",
        "Screen Shot 2021-08-14 at 11.56.25 AM.png",
        1752,
        474,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
You can also set programmatic triggers when the user clicks a button or visits a certain page of your app for example. Under the **Triggers** section select **In-App Trigger** and set `prompt_ios` is `true`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ea0a53-Screen_Shot_2021-08-14_at_11.54.29_AM.png",
        "Screen Shot 2021-08-14 at 11.54.29 AM.png",
        1742,
        464,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
In your app's code, use the OneSignal `addTrigger` [SDK method](doc:iam-sdk-methods) to show the prompt. For example:
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal iOS SDK 3.x.x+\nif let deviceState = OneSignal.getDeviceState() {\n  let subscribed = deviceState.isSubscribed\n  if subscribed == false {\n    OneSignal.addTrigger(\"prompt_ios\", withValue: \"true\")\n  }\n }",
      "language": "swift"
    },
    {
      "code": "// OneSignal iOS SDK 3.x.x+\nOSDeviceState *deviceState = [OneSignal getDeviceState];\nBOOL subscribed = deviceState.isSubscribed;\nif (subscribed == false) {\n    [OneSignal addTrigger:@\"prompt_ios\" withValue:@\"true\"];\n}",
      "language": "objectivec"
    },
    {
      "code": "// OneSignal React Native SDK 4.x.x+\nconst deviceState = OneSignal.getDeviceState();\nif (deviceState.isSubscribed == false) {\n  OneSignal.addTrigger(\"prompt_ios\", \"true\");\n}",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "var status = OneSignal.GetPermissionSubscriptionState();\nif status.permissionStatus.hasPrompted == false {\n  OneSignal.AddTrigger(\"prompt_ios\", \"true\");\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addTrigger(\"prompt_ios\", \"true\");",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.shared.addTrigger(\"prompt_ios\", \"true\");",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "private void IdsAvailable(string userID, string pushToken) {\n  print(\"UserID:\"  + userID);\n  print(\"pushToken:\" + pushToken);\n  if pushToken == null {\n    OneSignal.AddTrigger(\"prompt_ios\", \"true\");\n  }\n}",
      "language": "csharp",
      "name": "Xamarin (C#)"
    }
  ]
}
[/block]
#Schedule and Re-Trigger
Finally, you can schedule the message to start showing after a certain date.

##How often do you want to show this message?

If you are testing or using programmatic triggers, we recommend selecting the **Every time trigger conditions are satisfied** to show it whenever the triggers are met.

If you are using the **On app open** or **Session Duration**, try the **Multiple times** with `9999` and a gap of `1` week in between. The first number is how many times you want the message to show and the 2nd number is the timeframe in which to wait before showing the message again. 

In this case, if the user is already subscribed, they will not see the message again until they are unsubscribed.

This can always be changed later based on how often you want to prompt for push.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/491c14d-Screen_Shot_2021-08-14_at_12.12.33_PM.png",
        "Screen Shot 2021-08-14 at 12.12.33 PM.png",
        1742,
        1066,
        "#f9fafb"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "Select Update or Make Message Live.\n\nAny unsubscribed iOS devices will now be prompted."
}
[/block]

----

# Programmatically Triggering the Native iOS Permission Prompt

**Not Recommended:** use the below OneSignal method to trigger the Native iOS Permission Prompt in lieu of presentAppSettings. It is recommended to use the above or your own soft-prompt first before triggering this method.
[block:code]
{
  "codes": [
    {
      "code": "// Call when you want to prompt the user to accept push notifications.\n//Major Release iOS 3.x.x\nOneSignal.promptForPushNotifications(userResponse: { accepted in\n   print(\"User accepted notifications: \", accepted)\n   //set to true to fallback to app settings\n}, fallbackToSettings: true)\n\n// iOS SDK 2.x.x\n// Only call once and only if you set kOSSettingsKeyAutoPrompt in AppDelegate to false.\nOneSignal.promptForPushNotifications(userResponse: { accepted in\n   print(\"User accepted notifications: \\(accepted)\")\n})",
      "language": "swift"
    },
    {
      "code": "[OneSignal promptForPushNotificationsWithUserResponse:^(BOOL accepted) {\n  NSLog(@\"Accepted Notifications?: %d\", accepted);\n}];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.PromptForPushNotificationsWithUserResponse(OneSignal_promptForPushNotificationsResponse);\n\nprivate void OneSignal_promptForPushNotificationsResponse(bool accepted) {\n  Debug.Log(\"OneSignal_promptForPushNotificationsResponse: \" + accepted);\n}",
      "language": "csharp",
      "name": "Unity C#"
    },
    {
      "code": "// Calling registerForPushNotifications\nOneSignal.promptForPushNotificationsWithUserResponse(myCallback);\n\nfunction myCallback(permission){\n    // do something with permission value\n}",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "await OneSignal.shared.promptUserForPushNotificationPermission(fallbackToSettings: true);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {\n  console.log(\"User accepted notifications: \" + accepted);\n});",
      "language": "javascript",
      "name": "Cordova"
    },
    {
      "code": "OneSignal.Current.RegisterForPushNotifications();",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]