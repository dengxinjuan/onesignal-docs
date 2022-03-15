---
title: "Images & Rich Media"
slug: "rich-media"
excerpt: "Adding additional media to notifications."
hidden: false
createdAt: "2016-09-02T02:21:21.893Z"
updatedAt: "2022-03-02T22:46:28.912Z"
---
#Images
Large Images for Mobile Push Notifications can be added on iOS and Android. For Web Push, see [Web Push Notifications Guide](https://documentation.onesignal.com/docs/push-notification-guide). 

Mobile Push large images will display in the "expanded view" of the notification, generally when you long-press or swipe to view. 

Images can be added to push using the Dashboard or [API Image Parameters](https://documentation.onesignal.com/reference#attachments).

##Recommended Image Details

The recommended image is a `jpg` filetype with 2:1 aspect ratio landscape, size `512x256px` or `1440x720px`.
[block:parameters]
{
  "data": {
    "0-0": "**Filetypes**",
    "1-0": "**Resolution**",
    "0-1": "**Recommended**: `jpg`\n\n`jpeg`, `png`, `gif`",
    "1-1": "**Recommended**: 2:1 aspect ratio landscape\n\nCommon sizes:\n`512x256px`\n`1440x720px`\n\n**Max Width:** 4096 pixels\n**Min Width:** 300 pixels",
    "0-2": "**Recommended**:`jpg`\n\n`jpeg`, `png`, `gif`*",
    "0-3": "",
    "1-2": "**Recommended**: 2:1 aspect ratio landscape\n\nCommon sizes:\n`512x256px`\n`1440x720px`\n\n**Max Width:** 2000 pixels\n**Min Width:** 300 pixels",
    "1-3": "",
    "2-0": "**OneSignal API Parameter**",
    "2-1": "[`ios_attachments`](https://documentation.onesignal.com/reference#attachments)",
    "2-2": "[`big_picture`](https://documentation.onesignal.com/reference#attachments)",
    "2-3": "",
    "h-1": "iOS",
    "h-2": "Android",
    "h-3": "",
    "h-0": ""
  },
  "cols": 3,
  "rows": 3
}
[/block]

- `gif` image animations not supported on Android mobile apps.
- Adding [Action Buttons](doc:action-buttons) may affect image sizes, please try testing on your devices to make sure the layout fits your needs.
- Android 4.1+ and iOS 10+ supports large images.
- For troubleshooting, see [Notification Images Not Showing](doc:notification-images-not-showing).

----

#Rich Notifications
**iOS 10+**

Apple introduced the concept of Rich Notifications in iOS 10, which allow deeper interaction with your app from the notification itself. These are great for short interactions that do not require the full app experience, and represent the growing importance of notifications to an app's user experience. 

Rich notifications side-step the process of tapping a notification, unlocking the phone, waiting for the app to load, and then interacting with the app, by creating opportunities for short interactions within the notification itself. 

OneSignal fully supports iOS 10 rich notifications. You can read more about Rich Notifications in our blog post on [iOS Customizations](https://onesignal.com/blog/sending-rich-notifications-in-ios10-with-onesignal/). 

At a technical level, there are two types of rich notifications: **content extensions** and **media attachments**. 

##Content Extensions
Content extensions allow developers to add custom views of their app within a notification. For instance, this notification lets the user view the relevant details of their calendar when responding to a meeting invite.

See [iOS Image Carousel Push Notifications](doc:ios-image-carousel-push-notifications) for example.

##Media Attachments
Media attachments allow developers to attach URLs to relevant content. This is great for live events, photo tagging, and game updates, as well as all sorts of other visual content. Pictures speak a thousand words, and video more so, and with media attachments its never been easier to transport users into another place at the touch of a button. In the following example, a travel app could prompt users with visuals of a wonderful destination:

###Support media formats
Media formats supported by iOS 10+.

Make sure the hosted image, video or audio is a direct link to the resource. If it does not end in a correct file extension (listed File Type's below), you can add for example `&file=type.mp4` (use your resource's correct .file_extension) to the end of the url so our SDK recognizes this as a media url.
[block:callout]
{
  "type": "warning",
  "title": "Media Uploads",
  "body": "OneSignal does not support uploading video media. You would need to host the video on your own servers and include the URL to the resource within the ios_attachments / Media properties."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Attachment",
    "0-0": "Audio",
    "1-0": "Audio",
    "2-0": "Audio",
    "0-1": "aif / aiff",
    "1-1": "wav",
    "h-1": "File Type",
    "h-2": "Max Size",
    "0-2": "5MB",
    "1-2": "5MB",
    "2-2": "5MB",
    "2-1": "MP3",
    "3-0": "Audio/Video",
    "3-1": "MP4",
    "3-2": "5MB",
    "4-0": "Image",
    "5-0": "Image",
    "6-0": "Image",
    "4-1": "JPEG",
    "4-2": "10MB",
    "5-2": "10MB",
    "6-2": "10MB",
    "5-1": "GIF",
    "6-1": "PNG",
    "7-0": "Video",
    "8-0": "Video",
    "9-0": "Video",
    "10-0": "Video",
    "7-1": "MPEG",
    "8-1": "MPEG2",
    "9-1": "MPEG4",
    "10-1": "AVI",
    "7-2": "50MB",
    "8-2": "50MB",
    "9-2": "50MB",
    "10-2": "50MB"
  },
  "cols": 3,
  "rows": 11
}
[/block]
#Mobile Push Image Troubleshooting

See [Notification Images Not Showing](doc:notification-images-not-showing) Troubleshooting guide.