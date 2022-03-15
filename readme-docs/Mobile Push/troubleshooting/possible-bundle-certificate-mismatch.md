---
title: "Bundle / Certificate Mismatch"
slug: "possible-bundle-certificate-mismatch"
excerpt: "Configuration Notice - <span class=\"label-all label-ios\">iOS</span>\n<div class=\"tag-all tag-troubleshooting\">Troubleshooting</div> <div class=\"tag-all tag-developers\">For Developers</div>"
hidden: false
createdAt: "2016-09-20T07:54:32.014Z"
updatedAt: "2019-10-30T18:20:16.538Z"
---
**Possible Bundle / Certificate Mismatch** is thrown when the OneSignal iOS SDK detects your app's bundle ID is different from your push certificate's bundle ID. 

## Steps to Resolve
Please either correct your app's bundle ID, or generate and upload a new push certificate .p12 file with a matching bundle ID.

Take a look at the [Mismatched Bundle ID](doc:mismatched-bundle-id) answer for more information.