---
title: "How to add Click Actions"
slug: "iam-click-actions"
excerpt: "How to Create Click Actions for an In-App Message for example using a URL, tagging users and sending outcomes"
hidden: false
createdAt: "2021-08-10T20:48:08.650Z"
updatedAt: "2022-02-14T19:54:50.659Z"
---
Click Actions can be added to all blocks enabling your users to click onto the element. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8733d55-image_1.png",
        "image 1.png",
        2558,
        1128,
        "#f4f5f7"
      ],
      "caption": "Image. Shows the flow of using Click Actions to form Location and Push prompts for iOS"
    }
  ]
}
[/block]
Click actions can include the following abilities:
[block:parameters]
{
  "data": {
    "h-0": "Action",
    "h-1": "Description",
    "0-0": "URL",
    "0-1": "Leaves the app and opens the default browser to the URL you specify.",
    "1-0": "Push Permission Prompt (iOS)",
    "1-1": "Shows the native iOS Push Permission Prompt.\nDoes nothing on Android. \n- If iOS device is currently subscribed, prevents the IAM from showing.\n- If iOS device is currently unsubscribed and has been prompted previously, it will show a native alert asking the user to enable push in the app settings.",
    "2-0": "Location Permission Prompt",
    "3-0": "Sent Outcome",
    "4-0": "Tag User",
    "5-0": "Custom Action ID",
    "4-1": "Can add <a href=\"https://documentation.onesignal.com/docs/add-user-data-tags\" target=\"_blank\">data tags</a> to a user to express interest and later segment into another group based on user response to send more targeted messaging.",
    "3-1": "Help you understand how successful your In-App Messages by tracking the action. Outcomes sent through In-App messages will show as \"Unattributed\" in Delivery > Outcomes and will set a tag on the device in format `outcome name : true`.\n\nRead more about <a href=\"https://documentation.onesignal.com/docs/outcomes\" target=\"_blank\">Outcomes</a>.",
    "2-1": "Shows the native operating system prompt to ask permission for location tracking. See <a href=\"https://documentation.onesignal.com/docs/location-opt-in-prompt\n\" target=\"_blank\">Location Opt-In Prompt</a> for details on setup.",
    "5-1": "Pass a custom value into the <a href=\"https://documentation.onesignal.com/docs/iam-sdk-methods#in-app-message-click-handler\" target=\"_blank\">OneSignal SDK `inAppMessageClickHandler` method</a>.\n\nUsed for custom action handling like:\n- [Deep Linking within the app](#how-to-deep-link-within-the-app).\n- Click detection to perform custom event like send data to your own server or analytics vendor."
  },
  "cols": 2,
  "rows": 6
}
[/block]
## How to collect custom click actions

When an Image or Button block is clicked, you can use the **Custom Action ID** and set a value to identify that block was clicked. This Action ID can then be detected through the <a href="https://documentation.onesignal.com/docs/iam-sdk-methods#setinappmessageclickhandler-method" target="_blank">OneSignal SDK `inAppMessageClickHandler` method </a> and that data can be sent to your server/date base/analytics vendor.

Example: Create a Poll

If you want to survey your users with a multiple choice questionnaire and then display their choices within the app. You can setup the Action ID per button to be a unique identifier for that option. Whenever that option is clicked, it will be detected in the `inAppMessageClickHandler`. From there, you can make an API request to your server to store that data and access it within the app later to display to your users.

---- 

## How to deep link within the app

If you want to deep link into another page of the app, using the Click Action you can specify an "Action Name". This action name is available within the In-App Message Click Handler method inside the OSInAppMessageAction object called clickName.

When you detect this clickName you can then deep link to the page in your app.

Example: If you normally detect on a push notification the data "deepLink": "page3" using the Notification Opened Handler, then in the In-App Message Click Handler method you would specify page3 for the clickName.

You can have different clickName's for the image, button and background. If you don't sent a clickName, then it will be "null" and you can ignore it.

---

## How to Create a Rating Action

Let's send the user to the app store when they click the Image or Rate Now button. Using the URL Click Action you can add your App's Store URL. 

To Deep Link to the App Store, use the following guides: 

Android - https://developer.android.com/distribute/marketing-tools/linking-to-google-play.html
iOS - https://developer.apple.com/library/archive/qa/qa1633/_index.html

If you want to set for iOS and Android App stores separately, you can easily duplicate this IAM and target 2 Segments, one for Android and another for iOS using the "Device Type" data filter. Simply update this URL for the Android and iOS Segment targeted in each URL Action.

If the user clicks the button to dismiss, you can add a Data Tag to mark that the user selected "Remind Me Later" and we can re-target them again at a later time with this same message or send them a push!



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a3d3b3-rating.png",
        "rating.png",
        1046,
        966,
        "#e3e1f4"
      ],
      "caption": "Image showing In-App Message requesting Ratings"
    }
  ]
}
[/block]