---
title: "Apple App Privacy Requirements"
slug: "apple-app-privacy-requirements"
hidden: false
createdAt: "2020-12-02T21:57:31.239Z"
updatedAt: "2021-08-17T16:58:50.291Z"
---
Starting December 8, 2020, Apple will [require a privacy disclosure for all new apps and app updates](https://developer.apple.com/app-store/app-privacy-details/). You will need to respond to the app privacy questions in the App Privacy tab in [App Store Connect](https://appstoreconnect.apple.com/). Instructions from Apple can be found [here](https://help.apple.com/app-store-connect/#/dev1b4647c5b). As OneSignal is a third-party to your app, you’ll need to ensure you are properly disclosing to your users the ways you are using OneSignal in regards to their data. 

By default, OneSignal only collects certain In-App Purchase data (Consumable) and Usage Data (clicks and session duration) for iOS apps. If you set up and collect additional data through Data Tags or Outcomes will need to disclose those additional data types.

Please review the following Data Types when filling out your privacy details.

## Data Types

✅ = Required when using OneSignal
💡 = May be required when using OneSignal
❌ = Not required when using OneSignal
[block:parameters]
{
  "data": {
    "h-0": "Data Type",
    "h-1": "Required?",
    "0-0": "Contact Info",
    "0-1": "💡 If you use Data Tags or Outcomes to collect identifiable contact information including name, email address, phone number, physical address, or other contact info",
    "1-0": "Health & Fitness",
    "1-1": "💡 If you use Data Tags or Outcomes to collect health or fitness data from users",
    "2-0": "Financial Info",
    "2-1": "💡 If you use Data Tags or Outcomes to collect financial information from users",
    "3-0": "Location",
    "3-1": "💡 OneSignal collects the GPS coordinates of the device if your app asks for and receives permission from users",
    "4-0": "Sensitive Info",
    "4-1": "💡 If you use Data Tags or Outcomes to collect sensitive information including racial or ethnic data, political opinions, or biometric data from users",
    "5-0": "Contacts",
    "5-1": "💡 If you use Data Tags to collect address books or contact lists from users",
    "6-0": "User Content",
    "6-1": "💡 If you use Data Tags or Outcomes to collect user-generated content",
    "7-0": "Browsing History",
    "7-1": "❌ OneSignal does not collect browsing history from users",
    "8-0": "Search History",
    "8-1": "❌  OneSignal does not collect search history from users",
    "9-0": "Identifiers",
    "9-1": "✅ User ID. OneSignal creates an user-level ID called Player ID for Analytics and App functionality. The Player ID is not linked to the user's identity.\n💡If you configure External User IDs to link identifiers to OneSignal Player IDs, your answers may be different depending on how you generate the External User ID.\n❌Device ID. OneSignal does not collect the device's advertising identifier as of iOS SDK version 2.16.0+.",
    "10-0": "Purchases",
    "11-0": "Usage Data",
    "12-0": "Diagnostics",
    "12-1": "❌ OneSignal does not collect device diagnostic information",
    "11-1": "✅ OneSignal collects user First Session, Last Session, Session Count, Total Usage Duration, and Notification Clicks",
    "10-1": "✅ OneSignal collects Consumable in-app purchase data while our SDK is active"
  },
  "cols": 2,
  "rows": 13
}
[/block]
*IDFA and IDFV are no longer captured by the OneSignal iOS SDK as of version 2.16.0 and 3.x.x. If you’re using an older version of the SDK prior to 2.16.0, you will need to disclose this as collected data.

## Required Data Types

### Type: Purchases

If your app has in-app purchases, you must disclose that your app collects ‘Purchases’ information in your data collection response.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33ec09e-Purchase.png",
        "Purchase.png",
        550,
        107,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
#### 1. Purchase History

For OneSignal, at a bare minimum, you must select ‘Analytics’. This information is used in OneSignal’s dashboard features including Segments and Outcomes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5452615-Purchase_usage.png",
        "Purchase usage.png",
        600,
        722,
        "#f6f7f7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Additional Selections",
  "body": "If you are using OneSignal for any of the other options listed or have set up additional data collection through OneSignal, you will need to select those options as well."
}
[/block]
#### 2. Purchase History Linked to Identity

Apple will now ask if you are linking purchase history data to a user’s identity. If you are using OneSignal’s anonymous app player IDs and do not have a way to identify individual users, you can select ‘No’.

If you are using an app user ID that can be tied to a user’s email address or other contact information via your own server or other third parties, you should select ‘Yes’.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2bada53-Purchase_linked_to_identy.png",
        "Purchase linked to identy.png",
        600,
        215,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
#### 3. Purchase History for Tracking

Finally, to indicate if purchase history data will be used for tracking purposes, you will need to read Apple’s examples and determine if your app meets their definitions of tracking.

OneSignal, as a third-party, does not inherently use purchase history to track users across different apps for advertising. If you are using integrations or other SDKs that do this, you may need to disclose that here.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39a7ff8-Purchase_for_tracking.png",
        "Purchase for tracking.png",
        598,
        360,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]
Once your information is saved, you should see the below summary in your account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1fca027-Purchase_overview.png",
        "Purchase overview.png",
        607,
        192,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
### Type: Usage Data - Product Interaction

You must disclose that your app collects ‘Product Interaction’ data under the ‘Usage Data’ section in your data collection response.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c9fae50-Product_interaction.png",
        "Product interaction.png",
        598,
        282,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
#### 1. Product Interaction

For OneSignal, at a bare minimum, you must select ‘Analytics’. This information is used in OneSignal’s dashboard features including Segments and Outcomes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dfadded-Product_interaction_usage.png",
        "Product interaction usage.png",
        599,
        723,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Additional Selections",
  "body": "If you are using OneSignal for any of the other options listed or have set up additional data collection through OneSignal, you will need to select those options as well."
}
[/block]
#### 2. Product Interaction Linked to Identity

Apple will now ask if you are linking product interaction data to a user’s identity. If you are using OneSignal’s anonymous app player IDs and do not have a way to identify individual users, you can select ‘No’.

If you are using an app user ID that can be tied to a user’s email address or other contact information via your own server or other third parties, you should select ‘Yes’.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d3e5b3-Product_interaction_linked_to_identity.png",
        "Product interaction linked to identity.png",
        600,
        210,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]
#### 3. Product Interaction for Tracking

Finally, to indicate if product interaction data will be used for tracking purposes, you will need to read Apple’s examples and determine if your app meets their definitions of tracking.

OneSignal, as a third-party, does not inherently use product interaction data to track users across different apps for advertising. If you are using integrations or other SDKs that do this, you may need to disclose that here.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75a7a60-Product_interaction_for_tracking.png",
        "Product interaction for tracking.png",
        598,
        380,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]
Once your information is saved, you should see the below summary in your account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/914ddcf-Product_interaction_overview.png",
        "Product interaction overview.png",
        609,
        225,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
### Review

After making your privacy selections, Apple will show a product page preview of your app's privacy details. If you have chosen Purchases and Usage Data as described above, your privacy details should look like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/da5b3ea-Overview.png",
        "Overview.png",
        598,
        187,
        "#eeeeee"
      ]
    }
  ]
}
[/block]
If the way you set up and collect data changes in the future, you should return to App Store Connect to edit your responses.