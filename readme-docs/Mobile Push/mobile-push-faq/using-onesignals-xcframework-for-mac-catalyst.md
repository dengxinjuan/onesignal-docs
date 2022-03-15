---
title: "OneSignal's XCFramework SDK"
slug: "using-onesignals-xcframework-for-mac-catalyst"
hidden: false
createdAt: "2020-07-31T22:20:50.452Z"
updatedAt: "2021-08-06T15:52:52.603Z"
---
# OneSignal support for Mac Catalyst and Apple Silicon Macs using an XCFramework

OneSignal's XCFramework version of the iOS SDK can be used for Mac Catalyst Apps since XCFrameworks allow you to support multiple platforms that use the same architecture. In this case both the iOS Simulator and Mac use the x86_64 architecture. 

Cocoapods is currently the only dependency manager that can be used to get the XCFramework SDK. 

#Install OneSignal's XCFramework using Cocoapods
1. Make sure you have the latest version of cocoapods by running `sudo gem install cocoapods`.
2. Make sure your Xcode project is closed.
3. Run `pod init` from the terminal in your project directory.
4. Open the newly created `Podfile` with your favorite code editor, such as Sublime.
5. Add the OneSignalXCFramework dependency under your project name target as well as `OneSignalNotificationServiceExtension` target like below.
[block:code]
{
  "codes": [
    {
      "code": "target 'your_project_name' do\n  pod 'OneSignalXCFramework', '>= 3.0.0', '< 4.0'\nend\n\ntarget 'OneSignalNotificationServiceExtension' do\n  pod 'OneSignalXCFramework', '>= 3.0.0', '< 4.0'\nend",
      "language": "ruby",
      "name": "Podfile"
    }
  ]
}
[/block]
6. Run the following command in your terminal in your project directory.

`pod install --repo-update`

7. Open the newly created `<project-name>.xcworkspace` file.

** *Make sure to always open the workspace from now on. You can also do this automatically by running `xed .` from the root of your project.* **