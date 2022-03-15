---
title: "Notification Images Not Showing"
slug: "notification-images-not-showing"
excerpt: "Notifications images not appearing."
hidden: false
createdAt: "2018-06-08T16:59:16.095Z"
updatedAt: "2021-09-29T15:12:57.864Z"
---
When sending notifications with images (large images and icons), each device that receives the push has about 30 seconds to download that image. If the device has unstable network connections or the server hosting the image cannot handle that bandwidth, the image will be dropped.

Below are common solutions to check if you do not see your notification images:

#Image Size
Try decreasing the Image File size by lowering the quality and/or the image size to [the recommended settings](doc:push-notification-guide#images).

#Image URL

Image URLs need a direct link to the image, no redirects allowed. Redirects and URLs without the proper http or https protocol provided and image extension will not work.
In most cases, a direct link will have a file extension like `.png` or `.jpg`

Example: 
- this will not work: `https://pixabay.com/en/architecture-travel-sky-building-3095716/`

- But if you right click the image and open in a new tab, this will work: 
`https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg`

#Image Host

The server hosting the image may have went down or could not handle the amount of downloads. Around 30 seconds is how long the device has to download all notification resources, including images. If it takes longer, it will not show on that device.

Try hosting the resource on a dedicated server or use the OneSignal import option to have us host it for you.

##OneSignal Hosted Images

When you host an image with OneSignal, depending on where you place it, the image will be saved temporarily or for the lifetime of the app.

1. Images added as icons or pictures to notifications directly will be saved to OneSignal for 7 days before being discarded.

For example, an `/n/`in the URL will last for 7 days: `https://img.onesignal.com/n/579eb854-bcc8-4c98-a9cb-472be5f76dc3.png`

If you duplicate a notification, you will need to re-upload the image or use a new image as this url may not be valid.

2. Image uploaded to [Templates](doc:templates) or set as the default icon, then this image will stay for the life of the account.

If you are planning to change and/or re-use icon images, you should use a [Templates](doc:templates) or add the image with each notification.


#Web Push Images

**Only Chrome supports large images in push notifications on Windows, Android and macOS running Big Sur**. 

Firefox, Safari and Edge do not support big images.

On mobile web push, when you get the notification in the android device shade, you will need to [slide down on the notification to see the image](doc:web-push-notification-icons#sliding-image-on-android-too-many-notifications-in-tray).

If your mobile browser app has many unread push notifications and/or many tabs open, this can cause notifications to now show.

#iOS Push Images

Not seeing [Rich Media](doc:rich-media) on iOS notifications generally happens when the Notification Service Extension for your app is not setup. Please double check the setup docs you used for the iOS Notification Service Extension that it was implemented correctly.

1. Test another device, if the image shows, then the Notification Service Extension is setup correctly. Details on [Troubleshooting the iOS Notification Service Extension](https://documentation.onesignal.com/docs/service-extensions#troubleshooting-the-ios-notification-service-extension)

2. Open your attachment URL in a web browser. Make sure it is a direct link to the image/video, it cannot be part of an HTML page. Also ***redirects are not supported***.

3. If it takes more than 30 seconds to download the attachment, iOS will cancel the extension service and the notification will be displayed without media. Check to make sure the size of your attachment is appropriate. You can see a [list of supported media (and max file sizes) here](https://documentation.onesignal.com/docs/rich-media#support-media-formats).

4. Make sure your URL is HTTPS. HTTP urls will not work unless you set `NSAppTransportSecurity` to `NSAllowsArbitraryLoads` in your Xcode .plist.
[block:callout]
{
  "type": "danger",
  "body": "Please do not leave `NSAllowsArbitraryLoads` enabled when releasing your app to the App Store, as this can create a security vulnerability in your app. For more information, please read Apple's [Security Overview](https://www.apple.com/business/resources/docs/iOS_Security_Overview.pdf)",
  "title": "About App Transport Security"
}
[/block]
5. There was a networking issue with the device or server where the media is hosted. Try hosting the image on OneSignal or another hosting provider.

6. Check your OneSignalNotificationServiceExtension's `Deployment Target`, and set it to iOS 10.

#Android Push Images

When you get the notification in the android device shade, you will need to [slide down on the notification you should see it](doc:web-push-notification-icons#section-sliding-image-on-android-too-many-notifications-in-tray)