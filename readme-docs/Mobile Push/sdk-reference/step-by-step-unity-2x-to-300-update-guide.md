---
title: "Step-by-Step Unity 2.x to 3.0.0 Upgrade Guide"
slug: "step-by-step-unity-2x-to-300-update-guide"
hidden: true
createdAt: "2021-12-03T20:27:48.287Z"
updatedAt: "2021-12-03T23:25:40.363Z"
---
# Step 1 - Requirements

This guide assumes you have setup the OneSignal-Unity-SDK version 2.14.0 or newer and upgrading to the 3.0.0 major version.

- If you are coming from a version before 2.14.0 [please upgrade to 2.14.X](https://github.com/OneSignal/OneSignal-Unity-SDK/blob/2.14.5/README.md#installation) first.

# Step 2 - Update package
1. In Unity open Window > Package Manager
2. Select “Packages:” in the top left and click on “In Project”
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/efd68f3-UnityImage1.png",
        "UnityImage1.png",
        207,
        173,
        "#a4acb2"
      ]
    }
  ]
}
[/block]
3. Select OneSignal Unity SDK and press the Upgrade to 3.x.x *(make sure to update both Android and iOS packages)*
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/99adf65-UnityImage2.png",
        "UnityImage2.png",
        804,
        349,
        "#3d3f40"
      ]
    }
  ]
}
[/block]
# Step 3 - Namespaces

You will notice that previous uses of OneSignal no longer can be found. In any file you are using the OneSignal Unity SDK please add to the top of the file:


    using OneSignalSDK;
# Step 4 - Update Initialization Code
1. Locate your OneSignal init code and replace the following
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.StartInit(\"YOUR_ONESIGNAL_APP_ID\")\n  .Settings(new Dictionary<string, bool>() {\n    { IOSSettings.kOSSettingsKeyAutoPrompt, false },\n    { IOSSettings.kOSSettingsKeyInAppLaunchURL, false } })\n  .InFocusDisplaying(OSInFocusDisplayOption.Notification)\n  .EndInit();",
      "language": "csharp"
    }
  ]
}
[/block]
2. With the new initialization code
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
3. Alternatively there is now a prefab available for a codeless init. You can find it by using the Asset search bar to look for `OneSignalController.prefab`. Once added to a scene it will initialize the SDK on `Start` using the app id provided in the Inspector.
4. For any init settings you had previously, note that:
    - `IOSSettings.kOSSettingsKeyAutoPrompt` - has been removed and no longer needed, instead prompt the user by calling `promptForPushNotificationsWithUserResponse()`.
    - `InFocusDisplaying` - is replaced by adding `NotificationWillShow` (see below).
    - `OneSignal.kOSSettingsInAppLaunchURL` -  is deprecated. There is currently no replacement for it.
# Step 5 - OneSignal.Default instance

The accessor to `OneSignal` has been changed to `OneSignal.Default`.

- Find and replace on `OneSignal.` with `OneSignal.Default.`
# Step 6 - Update Common Delegates
| **2.0+**                                                                                             | **3.0+**                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OneSignalStartInit().HandleNotificationOpened`<br>delegate paramter- `OSNotificationOpenedResult()` | `OneSignal.Default.NotificationOpened`<br>delegate parameter - `NotificationOpenedResult`                                                                                                                                   |
| `OneSignalStartInit().HandleNotificationReceived()`<br>delegate parameter - `OSNotification`         | `OneSignal.Default.NotificationWillShow`<br>delegate parameter - `Notification`<br><br>Fires only when your app is in the foreground. Allows you to read the notification and decide if you want to display or suppress it. |

# Step 7 - Other APIs

Other less common OneSignal APIs have been changed, Unity will report them as errors and can view the public API to find a replacement via your IDE’s hinting. Alternatively you can directly view the [`OneSignal.cs`](https://github.com/OneSignal/OneSignal-Unity-SDK/blob/3.0.0-beta.2/com.onesignal.unity.core/Runtime/OneSignal.cs) class or checkout the comprehensive samples in  [`OneSignalExampleBehaviour.cs`](https://github.com/OneSignal/OneSignal-Unity-SDK/blob/3.0.0-beta.2/OneSignalExample/Assets/OneSignal/Example/OneSignalExampleBehaviour.cs). We will be providing a full API change log soon.