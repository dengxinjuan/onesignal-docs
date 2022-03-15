---
title: "Third-Party Setup Support"
slug: "other-cms-setup"
excerpt: "A list of third-party plugins that integrate OneSignal web push into blog, forum, and CMS sites"
hidden: false
createdAt: "2018-03-06T23:29:53.827Z"
updatedAt: "2021-07-13T17:23:15.609Z"
---
## [Laravel Wrapper Setup](https://github.com/shailesh-ladumor/one-signal) by Shailesh Ladumor

----

## [Vue JS Tutorial](https://shamun.dev/posts/using-onesignal-in-a-vue-cli-3-application/) by Ido Shamun

Ido Shamun has written a how-to guide for [integrating OneSignal into a Vue CLI 3 app](https://shamun.dev/posts/using-onesignal-in-a-vue-cli-3-application/).

---

## [Cosmic JS Integrion](https://www.cosmicjs.com/extensions/onesignal) by Sumit Kharche

----

## [HopPushEE for Expression Engine](https://www.hopstudios.com/software/hop_pushee) by Hop Studios

Expression Engine support for OneSignal web push notifications is available via a commercial [extension developed by Hop Studios](https://www.hopstudios.com/software/hop_pushee).

---

## [vBulletin Mod](https://vbulletin.org/forum/showthread.php?t=326558) by iA1

vBulletin support for OneSignal web push notifications is available [via a downloadable mod](https://vbulletin.org/forum/showthread.php?t=326558) from developed by community member iA1.

---

## [Grav CMS Plugin](https://devlom.com/en/blog/grav-webpush-notifications-onesignal) by Devlom

Grav CMS support for OneSignal web push notifications is available via an extension developed by Devlom. [Their announcement blog post](https://devlom.com/en/blog/grav-webpush-notifications-onesignal) contains setup instructions and more information about the plugin.

----

## VTEX

VTEX has a tutorial on [how to setup custom service workers](https://help.vtex.com/tutorial/how-to-install-a-service-worker--2H057iW0mQGguKAciwAuMe?locale=en).

For our [Typical Setup](doc:web-push-typical-setup) or [Custom Code Setup](doc:web-push-custom-code-setup), there is a section where you download the OneSignal Service worker files. ([download the files here](https://github.com/OneSignal/OneSignal-Website-SDK/releases/download/https-integration-files/OneSignal-Web-SDK-HTTPS-Integration-Files.zip))

Rename one of the files to `service-worker.js` and upload the file to your VTEX portal using their guide.

Then in the OneSignal Dashboard under "Advanced Push Setting (optional)" set the "Service Worker" section like below, then press "Save".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/346cb40-Screen_Shot_2021-07-13_at_9.52.03_AM.png",
        "Screen Shot 2021-07-13 at 9.52.03 AM.png",
        1010,
        558,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]