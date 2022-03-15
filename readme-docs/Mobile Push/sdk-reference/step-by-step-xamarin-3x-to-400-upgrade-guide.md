---
title: "Step-by-Step Xamarin 3.x to 4.0.0 Upgrade Guide"
slug: "step-by-step-xamarin-3x-to-400-upgrade-guide"
hidden: true
createdAt: "2021-12-03T21:41:55.271Z"
updatedAt: "2022-03-08T00:31:13.660Z"
---
# Step 1 - Requirements

This guide assumes that the app has a setup for Xamarin SDK version 3.x.x and the attempt is to migrate to 4.0.0 major version

[block:callout]
{
  "type": "danger",
  "title": "Warning",
  "body": "Building for iOS using Xamarin.iOS 15.4 or below may cause release build issues. Either upgrade to Xamarin.iOS 15.4+ or change the iOS project's Linker Behavior to 'Don't Link'"
}
[/block]
# Step 2 - Update to Version 4
**Major release version**
1. In the `Solution` window, drop down the app project, and find the `Dependencies` folder.
2. Drop down the `Dependencies` folder to find the `Nuget` folder and the `Com.OneSignal` package under the folder drop down.
3. Right-click the `Com.OneSignal` package and select `Update`
4. Follow the steps above for each project in the solution having `Com.OneSignal` under its NuGet dependencies. These may include - iOS app project, Android app project or the shared app project.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/77c4e79-XamarinImage1.png",
        "XamarinImage1.png",
        720,
        428,
        "#4a5267"
      ]
    }
  ]
}
[/block]
**Prerelease version or alternate major release version**
1. In the `Solution` window, drop down the app project, and find the `Dependencies` folder.
2. Right-click the `Dependencies` folder and select `Manage NuGet packages`
3. In the NuGet package window, make sure the `Package Source` on the bottom bar of the window is set to `nuget.org` .
4. Check the `Include prereleases` options to look for beta releases
5. Search for `Com.OneSignal` under the `Browse` tab and select the `Com.OneSignal` package. Here the version can be selected to 4.0.0-beta1/4.0.0 and then select `Add package`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b99218a-XamarinImage2.png",
        "XamarinImage2.png",
        1792,
        1128,
        "#3d3e42"
      ]
    }
  ]
}
[/block]
# Step 3 - Namespaces

The `Com.OneSignal.Abstractions` has been moved to `Com.OneSignal.Core`. All other OneSignal namespaces are the same.

# Step 4 - Update Initialization Code
1. Open your main app file
2. Remove the following OneSignal initialization code
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.Current.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n  .Settings(new Dictionary<string, bool>() {\n    { IOSSettings.kOSSettingsKeyAutoPrompt, false },\n    { IOSSettings.kOSSettingsKeyInAppLaunchURL, false } })\n  .InFocusDisplaying(OSInFocusDisplayOption.Notification)\n  .EndInit();",
      "language": "csharp"
    }
  ]
}
[/block]
3. Add the new initialization code
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal Initialization\nOneSignal.Default.Initialize(\"YOUR_ONESIGNAL_APP_ID\");",
      "language": "csharp"
    }
  ]
}
[/block]
4. For any init settings you had previously, note that:
    - `IOSSettings.kOSSettingsKeyAutoPrompt` - has been removed and no longer needed, instead prompt the user by calling `promptForPushNotificationsWithUserResponse()`.
    - `InFocusDisplaying` - is replaced by adding `NotificationWillShow` (see below).
    - `OneSignal.kOSSettingsInAppLaunchURL` -  is deprecated. There is currently no replacement for it.
# Step 5 - OneSignal.Default instance

The accessor to `OneSignal.Current` has been changed to `OneSignal.Default`.

- Find and replace on `OneSignal.Current` with `OneSignal.Default.`
# Step 6 - Update Event Listeners

The new and updated Event Listeners can be implemented as demonstrated below


1. Notification events and listeners
[block:code]
{
  "codes": [
    {
      "code": "void Start() {\n\t...\n\tOneSignal.Default.NotificationOpened   += _notificationOpened;\n\tOneSignal.Default.NotificationWillShow += _notificationReceived;\n}\n\nprivate void _notificationOpened(NotificationOpenedResult result) {\n\t//Response to Notification Opened Result\n}\n\nprivate Notification _notificationReceived(Notification notification) {\n\t//Response to Notification Received Event\n\treturn notification; // show the notification\n}",
      "language": "csharp"
    }
  ]
}
[/block]
2. In App Messages events and Listeners
[block:code]
{
  "codes": [
    {
      "code": "void Start() {\n  ...\n  OneSignal.Default.InAppMessageWillDisplay += _iamWillDisplay;\n  OneSignal.Default.InAppMessageDidDisplay += _iamDidDisplay;\n  OneSignal.Default.InAppMessageWillDismiss += _iamWillDismiss;\n  OneSignal.Default.InAppMessageDidDismiss += _iamDidDismiss;\n  OneSignal.Default.InAppMessageTriggeredAction += _iamTriggeredAction;\n}\n\nprivate void _iamWillDisplay(InAppMessage inAppMessage) {\n  //Response to IAM Will Display Event\n}\n\nprivate void _iamDidDisplay(InAppMessage inAppMessage) {\n  //Response to IAM Did Display Event\n}\n\nprivate void _iamWillDismiss(InAppMessage inAppMessage) {\n  //Response to IAM Will Dismiss Event\n}\n\nprivate void _iamDidDismiss(InAppMessage inAppMessage) {\n  //Response to IAM Did Dismiss Event\n}\n\nprivate void _iamTriggeredAction(InAppMessageAction inAppMessageAction) {\n  //Response to IAM Triggered Action\n}",
      "language": "csharp"
    }
  ]
}
[/block]
3. State Change Listeners
[block:code]
{
  "codes": [
    {
      "code": "void Start() {\n  ...\n  OneSignal.Default.PermissionStateChanged        += _permissionStateChanged;\n  OneSignal.Default.PushSubscriptionStateChanged  += _pushStateChanged;\n  OneSignal.Default.EmailSubscriptionStateChanged += _emailStateChanged;\n  OneSignal.Default.SMSSubscriptionStateChanged   += _smsStateChanged;\n}\n\nprivate void _permissionStateChanged(PermissionState current, PermissionState previous) {\n  //Response to Permission State Change\n}\n\nprivate void _pushStateChanged(PushSubscriptionState current, PushSubscriptionState previous) {\n  //Response to Push State Change\n}\n\nprivate void _emailStateChanged(EmailSubscriptionState current, EmailSubscriptionState previous) {\n  //Response to Email State Change\n}\n\nprivate void _smsStateChanged(SMSSubscriptionState current, SMSSubscriptionState previous) {\n  //Response to SMS State Change\n}",
      "language": "csharp"
    }
  ]
}
[/block]