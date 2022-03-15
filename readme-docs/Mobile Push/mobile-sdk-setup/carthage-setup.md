---
title: "Carthage Setup"
slug: "carthage-setup"
excerpt: "iOS Setup With Carthage"
hidden: true
createdAt: "2017-03-13T19:24:19.740Z"
updatedAt: "2021-04-02T01:09:16.740Z"
---
You can also use [Carthage](https://github.com/Carthage/Carthage#installing-carthage) for setting up and upgrading the OneSignal SDK.

**1** Make sure your current Xcode project is closed.
**2** Open Project Directory in Terminal. Run `echo 'github "OneSignal/OneSignal-iOS-SDK"' >> Cartfile`
**3** Run `carthage update --no-use-binaries --use-xcframeworks`. If you are using Xcode 11 or lower run `carthage update --no-use-binaries` instead. All references to "OneSignal.xcframework" will be "OneSignal.framework" instead. 
**4** Open your Xcode project.
**5** Go to your application targets’ “General” settings tab, “Embedded Binaries” section. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/231b8be-Screen_Shot_2017-03-10_at_7.51.46_PM.png",
        "Screen Shot 2017-03-10 at 7.51.46 PM.png",
        1512,
        1070,
        "#efefee"
      ]
    }
  ]
}
[/block]
**6** Drag and drop `OneSignal.xcframework` from the `<YOUR PROJECT'S DIRECTORY>/Carthage/Build/iOS` folder on disk. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2a34f27-Screen_Shot_2017-03-10_at_6.55.12_PM.png",
        "Screen Shot 2017-03-10 at 6.55.12 PM.png",
        1296,
        548,
        "#e9eae9"
      ]
    }
  ]
}
[/block]
**7** Create folder references and click Finish.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0ce6f7-Screen_Shot_2017-03-10_at_7.35.38_PM.png",
        "Screen Shot 2017-03-10 at 7.35.38 PM.png",
        731,
        428,
        "#ebf2ea"
      ]
    }
  ]
}
[/block]
**8** Go to your OneSignalNotificationServiceExtension targets’ “General” settings tab, “Linked Frameworks and Libraries” section.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1e111e8-Screen_Shot_2017-03-10_at_8.26.43_PM.png",
        "Screen Shot 2017-03-10 at 8.26.43 PM.png",
        1769,
        1383,
        "#f1f1f0"
      ]
    }
  ]
}
[/block]
**9** Drag and drop the same `OneSignal.xcframework` from the `<YOUR PROJECT'S DIRECTORY>/Carthage/Build/iOS` folder on disk.

**ONLY CONTINUE if you are using Xcode 11 or LOWER **

**10** On your application targets’ “Build Phases” settings tab, click the “+” icon, choose “New Run Script Phase”.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/45cad0e-Screen_Shot_2017-03-10_at_7.57.30_PM.png",
        "Screen Shot 2017-03-10 at 7.57.30 PM.png",
        1512,
        1070,
        "#f0efef"
      ]
    }
  ]
}
[/block]
**11** Create a Run Script in which you specify your shell (ex: `bin/sh`), add the following contents to the script area below the shell:
`/usr/local/bin/carthage copy-frameworks`

**12** Add the path to the `OneSignal`  framework under “Input Files”:

`$(SRCROOT)/Carthage/Build/iOS/OneSignal.framework`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd3359f-Screen_Shot_2017-03-10_at_8.00.47_PM.png",
        "Screen Shot 2017-03-10 at 8.00.47 PM.png",
        1512,
        1070,
        "#efefee"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "",
  "body": "Done! Continue onto [step 4 of our iOS SDK setup guide](https://documentation.onesignal.com/docs/ios-sdk-setup#step-4---add-required-capabilities)."
}
[/block]