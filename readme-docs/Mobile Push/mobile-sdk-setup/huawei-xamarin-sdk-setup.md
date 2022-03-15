---
title: "Huawei Xamarin SDK Setup"
slug: "huawei-xamarin-sdk-setup"
hidden: false
createdAt: "2020-07-09T14:49:54.627Z"
updatedAt: "2022-02-02T18:04:37.418Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery. 

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal Xamarin SDK
Follow the [OneSignal Xamarin SDK setup guide](doc:xamarin-sdk-setup). Firebase / Google setup not required for app builds released to the Huawei AppGallery. You will need to move the initialization code later in the guide.

#Step 3. Huawei Setup
**3.1** Preparing the Development Environment
See Huawei's [Preparing the Development Environment](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/preparedevenv-0000001050136492-V1).

#Step 4. Using HMS Core SDK in Android App
**5.1** [Integrate HMS Core SDK](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/integrating-sdk-0000001050138445-V1) and move OneSignal initialization to the OnCreate method.
* Example package structure for `agconnect-services.json`, `MainActivity.cs`, and `HmsLazyInputStream.cs`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1609b0c-Screen_Shot_2020-07-09_at_11.10.04_AM.png",
        "Screen Shot 2020-07-09 at 11.10.04 AM.png",
        314,
        162,
        "#5e5257"
      ],
      "caption": ""
    }
  ]
}
[/block]
* `MainActivity.cs` code snippet for setting HMS configuration using `HmsLazyInputStream.cs`
[block:code]
{
  "codes": [
    {
      "code": "using Android.Content;\nusing Android.OS;\nusing Com.Huawei.Agconnect.Config;\nusing Com.OneSignal.Sample.Shared;\nusing System;\n\nnamespace Com.OneSignal.Sample.Droid\n{\n    [Activity(Label = \"Com.OneSignal.Sample.Droid\", MainLauncher = true, Icon = \"@mipmap/icon\")]\n    public class MainActivity : Activity\n    {\n    \n        protected override void AttachBaseContext(Context context)\n        {\n            base.AttachBaseContext(context);\n         \n            // Read the agconnect-services.json so that the config is set for Huawei to register for a pushToken\n            AGConnectServicesConfig config = AGConnectServicesConfig.FromContext(context);\n            // Refer to Huawei docs or below on how to create your HmsLazyInputStream class\n            config.OverlayWith(new HmsLazyInputStream(context));\n        }\n\n        protected override void OnCreate(Bundle savedInstanceState)\n        {\n            base.OnCreate(savedInstanceState);\n            SetContentView(Resource.Layout.Main);\n\n            // Init OneSignal through a Shared class, easier to init for both Android and iOS applications\n            SharedPush.Initialize();\n        }\n    }\n}",
      "language": "csharp",
      "name": "MainActivity.cs"
    }
  ]
}
[/block]
* `HmsLazyInputStream.cs` code snippet for parsing `agconnect-services.json`
[block:code]
{
  "codes": [
    {
      "code": "using Android.Content;\nusing Com.Huawei.Agconnect.Config;\nusing System;\nusing System.IO;\n\nnamespace Com.OneSignal.Sample.Droid\n{\n    public class HmsLazyInputStream : LazyInputStream\n    {\n        public HmsLazyInputStream(Context context) : base(context)\n        {\n        }\n\n        public override Stream Get(Context context)\n        {\n            try\n            {\n               // Trying to read agconnect-services.json file\n               return context.Assets.Open(\"agconnect-services.json\");\n            }\n            catch (Exception e)\n            {\n               // Failed to read agconnect-services.json file\n               return null;\n            }\n        }\n    }\n}",
      "language": "csharp",
      "name": "HmsLazyInputStream.cs"
    }
  ]
}
[/block]
## Notes/Resources

#### [Huawei Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-error-code)
* HMS error code reference to help debug logs and successfully integrate HMS Core SDK with the OneSignal SDK.

####  Keystore Signature
* **[Keystore Signing Certificate for Visual Studio](https://docs.microsoft.com/en-us/xamarin/android/deploy-test/signing/keystore-signature?tabs=macos)**
* **[Huawei Signing Certificate Usage](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/predevprocedure-0000001050138441-V1)**
  * You may need to create a debug or release keystore signature (choose the correct app build path, `debug` or `release`) so that a `6003` error is avoided when registering for Huawei `pushToken` with the OneSignal SDK.