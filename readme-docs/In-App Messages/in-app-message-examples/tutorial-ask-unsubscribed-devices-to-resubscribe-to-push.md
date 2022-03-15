---
title: "Example: Ask Unsubscribed Devices to Resubscribe to Push"
slug: "tutorial-ask-unsubscribed-devices-to-resubscribe-to-push"
hidden: false
createdAt: "2021-12-23T19:04:25.077Z"
updatedAt: "2021-12-23T19:08:21.497Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a706d5b-Screen_Shot_2020-09-22_at_9.27.05_AM.png",
        "Screen Shot 2020-09-22 at 9.27.05 AM.png",
        1047,
        869,
        "#e5eee9"
      ]
    }
  ]
}
[/block]

This example will explain how to ask unsubscribed users to resubscribe to push. If you want to ask iOS devices to subscribe for the first time (recommended) see [iOS Push Opt-In Prompt](doc:ios-push-opt-in-prompt) guide.

#Step 1. Select the Audience 

For both Android and iOS, you would need to duplicate this template and create 2 segments:
Segment 1: Device Type is Android
Segment 2: Device Type is iOS


#Step 2 Unsubscribed Device Trigger
Using the OneSignal SDK `getDeviceState()` method, you can check if the current user is subscribed or not. Then with the `addTrigger` method, you can then trigger the in-app message once the user is detected to be unsubscribed.
[block:code]
{
  "codes": [
    {
      "code": "//OneSignal Android SDK 4.0.0+\nOSDeviceState device = OneSignal.getDeviceState();\nboolean subscribed = device.isSubscribed();\nif (!subscribed) {\n  OneSignal.addTrigger(\"unsubscribed\", \"true\");\n}\n\n//OneSignal Android SDK 3.15.6-\nOSPermissionSubscriptionState status = OneSignal.getPermissionSubscriptionState();\n\nif (!status.getSubscriptionStatus().getSubscribed()) {\n  OneSignal.addTrigger(\"unsubscribed\", \"true\");\n}",
      "language": "java"
    },
    {
      "code": "//OneSignal iOS SDK 3.0.0+\nif let deviceState = OneSignal.getDeviceState() {\n    let subscribed = deviceState.isSubscribed\n    if subscribed == false {\n      OneSignal.addTrigger(\"unsubscribed\", withValue: \"true\")\n    }\n}\n\n//OneSignal iOS SDK 2.16.2-\nlet status: OSPermissionSubscriptionState = OneSignal.getPermissionSubscriptionState()\nlet isSubscribed = status.subscriptionStatus.subscribed\nprint(\"isSubscribed = \\(isSubscribed)\")\nif isSubscribed == false {\n    OneSignal.addTrigger(\"unsubscribed\", withValue: \"true\")\n}",
      "language": "swift"
    }
  ]
}
[/block]
Set the trigger to be the `unsubscribed` is `true`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f2a7eac-Screen_Shot_2020-09-22_at_9.51.14_AM.png",
        "Screen Shot 2020-09-22 at 9.51.14 AM.png",
        1044,
        268,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]

#Step 3 Create the message with custom action
OneSignal provides a default **Push Permission Prompt** template which you can customize or create your own.

**iOS Click Action** for your iOS segment, there is a button Click Action: **Push Permission Prompt (iOS)**. This will show the native iOS prompt if not shown before or it will present an alert to take the user to the App Settings to enable push.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c19bd9d-Screen_Shot_2020-09-22_at_9.56.11_AM.png",
        "Screen Shot 2020-09-22 at 9.56.11 AM.png",
        506,
        465,
        "#f1f2f1"
      ]
    }
  ]
}
[/block]
**Android Click Action** for your Android segment, you can add a **Custom Action ID**. This will be available within the [`InAppMessageClickHandler` method](https://documentation.onesignal.com/docs/iam-sdk-methods#in-app-message-click-handler) when the user clicks the button.

The action button example here is `prompt_user`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a215003-Screen_Shot_2020-09-22_at_9.59.24_AM.png",
        "Screen Shot 2020-09-22 at 9.59.24 AM.png",
        505,
        377,
        "#f2f4f5"
      ]
    }
  ]
}
[/block]
Based on the handler name, you can then send the user to the App Settings to resubscribe. 
This is handled automatically with the iOS Push Permission Prompt Action, but code available if you want to handle it programmatically.
[block:code]
{
  "codes": [
    {
      "code": "class ExampleInAppMessageClickHandler implements OneSignal.InAppMessageClickHandler {\n  // Example of an action id you could setup on the dashboard when creating the In App Message\n  private static final String ACTION_ID_MY_CUSTOM_ID = \"prompt_user\";\n\n  @Override\n  public void inAppMessageClicked(OSInAppMessageAction result) {\n     if (ACTION_ID_MY_CUSTOM_ID.equals(result.clickName)) {\n        Log.i(\"OneSignalExample\", \"Custom Action took place! Starting YourActivity!\");\n        //example from https://stackoverflow.com/questions/32366649/any-way-to-link-to-the-android-notification-settings-for-my-app\n        intent.setAction(\"android.settings.APP_NOTIFICATION_SETTINGS\");\n\n        //for Android 5-7\n        intent.putExtra(\"app_package\", getPackageName());\n        intent.putExtra(\"app_uid\", getApplicationInfo().uid);\n\n        // for Android 8 and above\n        intent.putExtra(\"android.provider.extra.APP_PACKAGE\", getPackageName());\n\n        startActivity(intent);\n     }\n  }\n}",
      "language": "java"
    },
    {
      "code": "let handler: OSHandleInAppMessageActionClickBlock = { action in\n    var message: String? = nil\n    if let clickName = action?.clickName, let clickUrl = action?.clickUrl, let firstClick = action?.firstClick, let closesMessage = action?.closesMessage {\n        message = String(format: \"Click Action Occurred: clickName:%@ clickUrl:%@ firstClick:%i closesMessage:%i\", clickName, clickUrl as CVarArg, firstClick, closesMessage)\n        print(message ?? \"no message\")\n    }\n    // NOT REQUIRED IF USING iOS Push Permission Prompt Action\n    if clickName === \"prompt_user\" {\n      OneSignal.presentAppSettings()\n    }\n}\n\nOneSignal.setInAppMessageClickHandler(handler)",
      "language": "swift"
    }
  ]
}
[/block]
Schedule the message to start showing immediately and confirm.