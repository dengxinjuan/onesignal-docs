---
title: "Mismatched Bundle ID"
slug: "mismatched-bundle-id"
excerpt: "Configuration Notice - <span class=\"label-all label-ios\">iOS</span>\n<div class=\"tag-all tag-troubleshooting\">Troubleshooting</div> <div class=\"tag-all tag-developers\">For Developers</div>"
hidden: false
createdAt: "2016-09-20T07:51:19.332Z"
updatedAt: "2019-10-30T18:20:16.536Z"
---
**Mismatched Bundle ID** is thrown when Apple returns a `DeviceTokenNotForTopic` error. This means your app's bundle ID in Xcode is different from your push certificate's bundle ID.

## Steps to Resolve
Please update your bundle ID in Xcode to match the bundle ID of the push certificate you uploaded, or upload a new `.p12` push certificate file that matches your Xcode bundle ID.