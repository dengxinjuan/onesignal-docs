---
title: "iOS: Image Carousel Push Notifications"
slug: "ios-image-carousel-push-notifications"
excerpt: "How to implement an image carousel in OneSignal iOS push notifications using Swift."
hidden: false
createdAt: "2020-12-01T05:21:38.545Z"
updatedAt: "2022-03-04T19:26:00.310Z"
---
iOS provides a [UNNotificationContentExtension](https://developer.apple.com/documentation/usernotificationsui/unnotificationcontentextension?language=objc) protocol as the entry point for a notification content app extension. This can be used to display a custom interface for your app’s notifications. This example guide explains how to use this for creating a carousel within an iOS notification.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8ba64c7-RPReplay_Final1606950566.gif",
        "RPReplay_Final1606950566.gif",
        303,
        550,
        "#727b86"
      ],
      "caption": "Image showing a carousel in a push notification"
    }
  ]
}
[/block]
##Step 1. Add a Notification Content Extension

In Xcode, select File > New > Target...
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/00355f9-Screen_Shot_2020-11-30_at_9.32.26_PM.png",
        "Screen Shot 2020-11-30 at 9.32.26 PM.png",
        600,
        315,
        "#3a3745"
      ]
    }
  ]
}
[/block]
Select the Notification Content Extension
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/efd0fde-Screen_Shot_2020-11-30_at_3.10.58_PM.png",
        "Screen Shot 2020-11-30 at 3.10.58 PM.png",
        600,
        431,
        "#29262c"
      ]
    }
  ]
}
[/block]
Name it `OSNotificationContentExtension`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0a0fa6a-Screen_Shot_2020-11-30_at_6.44.46_PM.png",
        "Screen Shot 2020-11-30 at 6.44.46 PM.png",
        600,
        429,
        "#2f2f31"
      ]
    }
  ]
}
[/block]
Select **Activate** to debug the new scheme.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15861ff-Screen_Shot_2020-11-30_at_6.45.41_PM.png",
        "Screen Shot 2020-11-30 at 6.45.41 PM.png",
        265,
        379,
        "#393a45"
      ]
    }
  ]
}
[/block]
## Step 2. Add Code to your App

[Download the OSNotificationContentExtension](https://github.com/jfishman1/OSNotificationContentExtension) from Github and replace the `OSNotificationContentExtension` in your Xcode Project with the same file from Github.

You should see the following files added:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0de83b8-Screen_Shot_2020-11-30_at_8.58.01_PM.png",
        "Screen Shot 2020-11-30 at 8.58.01 PM.png",
        261,
        125,
        "#44425a"
      ]
    }
  ]
}
[/block]
## Step 3. Set Your Notification Category

This example [Declares The Actionable Notification Type](https://developer.apple.com/documentation/usernotifications/declaring_your_actionable_notification_types) within the AppDelegate.swift `didFinishLaunchingWithOptions`.
[block:code]
{
  "codes": [
    {
      "code": "func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    \n    //START Authorize OS Notification Carousel Category\n    if #available(iOS 10.0, *) {\n        let options: UNAuthorizationOptions = [.alert]\n        UNUserNotificationCenter.current().requestAuthorization(options: options) { (authorized, error) in\n            if authorized {\n                let categoryIdentifier = \"OSNotificationCarousel\"\n                let carouselNext = UNNotificationAction(identifier: \"OSNotificationCarousel.next\", title: \"👉\", options: [])\n                let carouselPrevious = UNNotificationAction(identifier: \"OSNotificationCarousel.previous\", title: \"👈\", options: [])\n                let carouselCategory = UNNotificationCategory(identifier: categoryIdentifier, actions: [carouselNext, carouselPrevious], intentIdentifiers: [], options: [])\n                UNUserNotificationCenter.current().setNotificationCategories([carouselCategory])\n            }\n        }\n    }\n    //END Authorize OS Notification Carousel Category\n    \n    return true\n}",
      "language": "swift"
    }
  ]
}
[/block]

## Step 4. Send Your Push Notification

When [Sending Push Messages](doc:sending-notifications) you can set the iOS Category and custom Data.

#### iOS Category

Use `OSNotificationCarousel` as the iOS Category:

- **API:** Set with the `ios_category` [API Parameter](https://documentation.onesignal.com/reference/create-notification#action-buttons).

- **Dashboard:** Set under "Platform Settings" > **Send to Apple iOS** > "Category"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4e38a11-Screen_Shot_2020-11-30_at_9.04.06_PM.png",
        "Screen Shot 2020-11-30 at 9.04.06 PM.png",
        625,
        640,
        "#f5f6f8"
      ]
    }
  ]
}
[/block]
#### Custom Data

OneSignal doesn't have an option to upload multiple images per notification.

Instead you must list the Image URLs separated by a comma `,` 

- **API:** Use the `data` [API Parameter](https://documentation.onesignal.com/reference/create-notification#attachments) like this:
[block:code]
{
  "codes": [
    {
      "code": "data: {\n  \"images\" : \"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg,https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg,https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png,https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_960_720.jpg,https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg\"\n}",
      "language": "json"
    }
  ]
}
[/block]

- **Dashboard:** Set under "Advanced Settings" > "Additional Data" 

For the "Key" set `images` and the "Value" set the list of comma separated URLs without quotes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d07200a-Screen_Shot_2020-11-30_at_9.19.59_PM.png",
        "Screen Shot 2020-11-30 at 9.19.59 PM.png",
        635,
        307,
        "#c9cacb"
      ]
    }
  ]
}
[/block]
Example, copy paste:
[block:code]
{
  "codes": [
    {
      "code": "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg,https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg,https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_960_720.png,https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_960_720.jpg,https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
      "language": "text"
    }
  ]
}
[/block]
### Send the Push

Once you receive the push, you will need to long press or swipe left and click "View" to expand the notification depending on the iOS version.

### Further Reading

- [Apple's Docs to Declare Your Actionable Notification Types](https://developer.apple.com/documentation/usernotifications/declaring_your_actionable_notification_types)
- [Helpful Medium Post by Ahmet Keskin](https://medium.com/nsistanbul/carousel-notification-in-ios-5a1e8239d786)