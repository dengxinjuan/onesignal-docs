---
title: "Swift Package Manager Setup"
slug: "swift-package-manager-setup"
hidden: true
createdAt: "2020-07-20T19:25:56.969Z"
updatedAt: "2022-02-02T21:37:56.423Z"
---
**1.** Open your project in Xcode and navigate to the project's settings > Package Dependencies and press the **+** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ff68c3-Screen_Shot_2021-10-13_at_4.09.13_PM.png",
        "Screen Shot 2021-10-13 at 4.09.13 PM.png",
        2506,
        964,
        "#32373b"
      ]
    }
  ]
}
[/block]
**2.** If using Xcode 12+, enter Package URL: `https://github.com/OneSignal/OneSignal-XCFramework`

If using Xcode 11, enter Package URL: `https://github.com/OneSignal/OneSignal-iOS-SDK`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a4ae47b-Screen_Shot_2021-10-13_at_4.13.25_PM.png",
        "Screen Shot 2021-10-13 at 4.13.25 PM.png",
        2506,
        1510,
        "#303539"
      ]
    }
  ]
}
[/block]
**3.** Set the Dependency Rule to: `Range of Versions` and `3.0.0` < `4.0.0`
Click **Add Package**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/71f2f76-Screen_Shot_2021-10-13_at_4.16.24_PM.png",
        "Screen Shot 2021-10-13 at 4.16.24 PM.png",
        2506,
        1510,
        "#303539"
      ]
    }
  ]
}
[/block]
**4.** On the next screen to choose your Package, select the OneSignal Package and **Add Package** to your main app Target.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/63053e2-Screen_Shot_2021-10-13_at_4.17.19_PM.png",
        "Screen Shot 2021-10-13 at 4.17.19 PM.png",
        2506,
        1510,
        "#212629"
      ]
    }
  ]
}
[/block]
**5.** Open your Main App Target and under "Frameworks, Libraries, and Embedded Content" ensure that the OneSignal SDK has been added.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb695e1-Screen_Shot_2021-10-13_at_4.21.18_PM.png",
        "Screen Shot 2021-10-13 at 4.21.18 PM.png",
        2784,
        1612,
        "#2f3439"
      ]
    }
  ]
}
[/block]
**6.** Next we will link the library to your App's Notification Service Extension (follow the setup guide if you have not created one yet). 

Select the `OneSignalNotificationServiceExtension` Target > Build Settings > `Runpath Search Paths`. 
The build setting should include the path `@executable_path/../../Frameworks`. Add this if you do not see it
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e05a1c-Screen_Shot_2022-02-02_at_1.37.37_PM.png",
        "Screen Shot 2022-02-02 at 1.37.37 PM.png",
        2270,
        904,
        "#33383c"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Done! Continue with the rest of your setup guide."
}
[/block]