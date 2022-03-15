---
title: "Invalid Push Certificate"
slug: "invalid-push-certificate"
excerpt: "Configuration Notice for iOS Troubleshooting"
hidden: false
createdAt: "2016-09-20T07:44:06.314Z"
updatedAt: "2021-04-16T16:22:31.863Z"
---
**Invalid Push Certificate** is thrown when Apple returns a `BadCertificate` error. This means your certificate was rejected by Apple and may be expired, revoked, or invalid.

## Steps to Resolve

Generate a new push certificate and upload to your OneSignal Dashboard.

We provide a [provisionator tool](https://onesignal.com/provisionator) to quickly generate a new certificate

Or [Generate an iOS Push Certificate](doc:generate-an-ios-push-certificate) directly through your Apple Developer Account.

Once you generate the new certificate, upload it within onesignal.com > Settings  > Apple iOS