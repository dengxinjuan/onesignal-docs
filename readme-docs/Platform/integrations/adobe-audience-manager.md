---
title: "Adobe Audience Manager"
slug: "adobe-audience-manager"
excerpt: "*Currently in Beta*"
hidden: false
createdAt: "2020-06-25T02:26:03.761Z"
updatedAt: "2022-02-03T19:41:55.574Z"
---
This integration combines Adobe Audience Manager's audiences with OneSignal’s market-leading customer engagement solutions, enabling you to build actionable messaging campaigns that drive user engagement, optimize conversions, and increase revenue.

# OneSignal and Adobe Audience Manager provide the following capabilities:

- Syncing segments from Adobe Audience Manager to OneSignal to send targeted messaging using OneSignal’s segmentation and multi-channel engagement approach

#Requirements
* [A Paid OneSignal Account](https://onesignal.com/pricing) is required for this integration.
* By default, users will be matched via the Adobe `MID` (aka `ECID`). You will need to ensure that you set the external user id of your OneSignal records to the Adobe `MID` (aka `ECID`). If you'd like to use an alternative identifier for user matching, please reach out to OneSignal support for more information.

#Connection Parameters
You will need the following information to setup this destination:
- A Client ID. This is found in the OneSignal Dashboard under Settings > Analytics > Adobe > View Client ID.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73abd3d-client-id-smaller.png",
        "client-id-smaller.png",
        1280,
        1015,
        "#dadfe3"
      ],
      "sizing": "80",
      "border": false
    }
  ]
}
[/block]
#Next Step: Contact your Adobe representative

Contact your Adobe representative (Adobe consultant or CustomerCare) who will review the integration request and will work with you to activate the OneSignal Destination. You'll need to provide the following information to the Adobe representative:
- the Client ID

Once the Adobe representative has set up the OneSignal Destination, the segments should start flowing to OneSignal.

#Recommended: Configure Segment Friendly Names

By default, each segment synced between OneSignal and Adobe Audience Manager will be identified with a numeric Adobe Audience Manager Segment ID. If you'd like to instead use a "friendly" name to identify the Segment within the OneSignal Dashboard, please follow these steps:

1) Log in to Adobe Audience Manager
2) Follow the path to Audience Data > Segments
3) Select all the segments you wish to add to the OneSignal destination
4) Click “Add To Destination”
5) Select the Destination
6) Click Add To Selected Destination
7) Enter the friendly name for each Segment in the “Destination Value” fields
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03546e9-image001.png",
        "image001.png",
        1070,
        348,
        "#eeeff0"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
8) Click Save
9) The Segment "friendly" name has now been mapped to the Segment and the destination