---
title: "Mismatched Web ID"
slug: "mismatched-web-id"
excerpt: "Configuration Notice - <span class=\"label-all label-safari\">Safari</span>\n<div class=\"tag-all tag-troubleshooting\">Troubleshooting</div> <div class=\"tag-all tag-developers\">For Developers</div>"
hidden: true
createdAt: "2016-09-20T07:52:08.885Z"
updatedAt: "2019-11-22T22:35:31.811Z"
---
**Mismatched Web ID** is thrown when Apple returns a `DeviceTokenNotForTopic` error. This means some user IDs are tied to a different web ID than your .p12 push certificate's web ID.

Some of your previously subscribed users may have subscribed with a different web ID (a different Safari web ID may have been uploaded at that time). The current Safari web ID does not match the web IDs of some subscribed players.

## Steps to Resolve
If only a few users are tied to the wrong bundle ID, you can delete these few users. Otherwise, please upload the correct Safari push certificate.