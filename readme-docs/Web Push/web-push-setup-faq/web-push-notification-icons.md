---
title: "Web Push: Icons & Images"
slug: "web-push-notification-icons"
excerpt: "Customizing Web Push notifications with your app icons, colors, and style."
hidden: false
createdAt: "2017-02-18T01:25:41.687Z"
updatedAt: "2022-02-25T20:31:10.939Z"
---
Web push notifications support icons and images on the following browsers:
[block:parameters]
{
  "data": {
    "h-0": "Browser",
    "h-1": "Icons",
    "h-2": "Images",
    "0-0": "Chrome",
    "0-1": "Yes on PC, macOS, and Android.\n`chrome_web_icon`",
    "0-2": "Yes\n`chrome_web_image` supported on PC and Android.\n\nmacOS expands the `chrome_web_icon` as the big image.",
    "1-0": "Firefox",
    "1-1": "Yes on PC, macOS and Android.\n`firefox_icon`",
    "1-2": "Firefox does not support big images.",
    "2-0": "Safari",
    "2-1": "Yes, on macOS only.\niOS (iPhones and iPads) do not support web push yet.\n\nUses the default icon. Cannot be customized.",
    "2-2": "Safari does not support big images.",
    "3-0": "Edge",
    "3-1": "Yes on PC, macOS and Android.\n\nUses the default icon. Cannot be customized.",
    "3-2": "Edge does not support big images."
  },
  "cols": 3,
  "rows": 4
}
[/block]
# Setting the Icon, Image, and Badge

You can add the default web icon in the [Web Push Setup](doc:web-push-quickstart) configuration.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5c2d465-Screen_Shot_2019-05-08_at_10.33.16_AM.png",
        "Screen Shot 2019-05-08 at 10.33.16 AM.png",
        2348,
        913,
        "#e1dddd"
      ]
    }
  ]
}
[/block]
When [Sending Push Messages](doc:sending-notifications), you can set the icon, image, and badge here:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7f6012-Screen_Shot_2019-05-08_at_10.31.40_AM.png",
        "Screen Shot 2019-05-08 at 10.31.40 AM.png",
        1163,
        346,
        "#edeff1"
      ]
    }
  ]
}
[/block]
Sending from API, use `chrome_web_icon`, `chrome_web_image`, and `chrome_web_badge` [parameters](https://documentation.onesignal.com/reference#appearance)

- ---
# Icon

The icon displays to the side of the notification's title and message. Only Chrome and Firefox support custom icon images. Safari only allows the default icon set in your OneSignal Dashboard.

In this example, it is the OneSignal logo:


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49a442e-Chrome_windows_push_icon_copy.png",
        "Chrome_windows_push_icon copy.png",
        585,
        190,
        "#423734"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/53be403-Screen_Shot_2019-04-22_at_1.18.20_PM.png",
        "Screen Shot 2019-04-22 at 1.18.20 PM.png",
        764,
        202,
        "#d7cdcc"
      ]
    }
  ]
}
[/block]
## Icon Requirements

[block:parameters]
{
  "data": {
    "0-0": "**Color**",
    "1-0": "**Resolution**",
    "2-0": "**Filetype**",
    "2-1": "<p>`jpg`, `png`, `gif`, `webp`, `ico`, `cur`, `bmp` </p>\n<p>Not supported: `svg` or animated gifs (will show first gif frame only)</p>",
    "1-1": "**Recommended:** `256x256` or larger",
    "0-1": "`RGB` colors",
    "h-1": "Details",
    "h-0": "Option"
  },
  "cols": 2,
  "rows": 3
}
[/block]

----
# Image

Only Chrome supports displaying a large image below the notification's title and message. Chrome on macOS requires the Big Sur update or higher to support images.
[block:parameters]
{
  "data": {
    "h-1": "Chrome",
    "h-2": "Chrome on Windows",
    "1-0": "**Filetype**",
    "1-1": "<p>`jpg`, `png`, `gif`, `webp`, `ico`, `cur`, `bmp` </p>\n<p>Not supported: `svg` or animated gifs (will show first gif frame only)</p>",
    "1-2": "<p>`jpg`, `png`, `gif`, `webp`, `ico`, `cur`, `bmp` </p>\n<p>Not supported: `svg` or animated gifs (will show first gif frame only)</p>",
    "0-0": "**Resolution**",
    "0-1": "**Recommendations:** 2:1 aspect ratio landscape\n\n**Max Width:** 2000 pixels\n**Min Width:** 300 pixels\n\nCommon sizes:\n`512x256px`\n`1440x720px`",
    "0-2": "**Recommendations:** 2:1 aspect ratio landscape\n\n**Max Width:** 2000 pixels\n**Min Width:** 300 pixels\n\nCommon sizes:\n`512x256px`\n`1440x720px`",
    "2-0": "**OneSignal API Parameter**",
    "2-1": "[`chrome_web_image`](https://documentation.onesignal.com/reference#attachments)"
  },
  "cols": 2,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Image Issues?",
  "body": "For troubleshooting, see [Notification Images Not Showing](doc:notification-images-not-showing)."
}
[/block]
## Sliding Image on Android (too many notifications in tray)

When there are too many notifications in the tray, your image may not be shown at first. The notification has to be "scrolled down" to see the image:

<img src="https://i.imgur.com/FTTfx6r.gif" width="65%">

- ---
# Badge
**Chrome on Android**

For Chrome 53+ on Android 6.0+, the badge replaces the Chrome browser icon that appears on the notification tray and above the title. In this example, a custom badge for the app replaces the Chrome browser icon:

<img src="https://i.imgur.com/QlvgQzH.png" style="max-width: 80%;">

<img src="https://i.imgur.com/M221yn0.png" style="max-width: 80%;">

## Badge Requirements

[block:parameters]
{
  "data": {
    "0-0": "**Color**",
    "1-0": "**Resolution**",
    "2-0": "**Filetype**",
    "2-1": "<p>`png`, `gif`, `webp`, `ico`, `cur`, `bmp` </p>\n<p>Not supported: `svg` or animated gifs (will show first gif frame only)</p>\n<p>Must use an HTTPS URL</p>",
    "1-1": "`72x72` or larger",
    "0-1": "<p>`Alpha` channel only</p>\n<p>Not supported: RGB channels. Badges use alpha channels because they must appear on both light and dark backgrounds.</p>"
  },
  "cols": 2,
  "rows": 3
}
[/block]

[Here's an example badge icon](https://i.imgur.com/9QFB20F.png) of our OneSignal logo that uses only the alpha channel.