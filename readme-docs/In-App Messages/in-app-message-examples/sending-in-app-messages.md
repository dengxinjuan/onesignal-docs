---
title: "Sending In-App Messages"
slug: "sending-in-app-messages"
excerpt: "OneSignal features - Sending In-App Messages with the OneSignal Messaging composer"
hidden: false
createdAt: "2019-05-07T01:21:12.589Z"
updatedAt: "2021-12-15T22:06:06.363Z"
---
Navigate to **Messages > In-App > New In-App** to create a new In-App Message. You can also use the Actions to view, edit, pause/resume, duplicate, and delete your In-App.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f00bf1f-Screen_Shot_2021-08-13_at_8.09.37_PM.png",
        "Screen Shot 2021-08-13 at 8.09.37 PM.png",
        1716,
        892,
        "#dde0e3"
      ]
    }
  ]
}
[/block]
Add a **Message Name** that describes the purpose of the message and will help easily find this later as you create more!

#Step 1. Audience

Select the audience eligible to receive your message. You can include and exclude segments of users if you've set up [Segments](doc:segmentation). 
[block:callout]
{
  "type": "warning",
  "title": "IMPORTANT: Segments Include Unsubscribed Devices",
  "body": "Segments for In-App Messages include both Subscribed & Unsubscribed mobile devices."
}
[/block]

[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/LtJiE4j-QTI\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
## Example: Rate My App
Let's use the default **App Store Rating Template** to ask all users with over 3 sessions to rate your app. First setup a [segment](doc:segmentation) using Session Count > 3. **Optional:** You can setup a second segment to exclude users that already rated the app. You can track users that were asked to rate already using [Data Tags](doc:add-user-data-tags) within the the In-App Message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a30db69-Screen_Shot_2020-04-14_at_7.48.43_PM.png",
        "Screen Shot 2020-04-14 at 7.48.43 PM.png",
        2370,
        902,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]

#Step 2. Design Your In-App Message

This is where you create setup how the message looks and functions when clicked. There is a lot that you can do! Follow these links for more details:

- <a href="doc:design-your-in-app-message" target="_blank">Design Your In-App Message</a>
- <a href="doc:iam-carousel" target="_blank">Setup an IAM Carousel</a>
- <a href="doc:iam-click-actions" target="_blank">IAM Click Actions</a>

##Send to Test Device 
You can test In-App Message Designs on your Test Devices by clicking "Send to Test Device" button at top right of the Messages step.

This will send a push notification that you click to open the app and view the In-App Message test. Some items to be aware of:
1. The Test Device must be subscribed to push. Push notifications get sent for testing only.
2. Tag Substitution does not work for Test In-App Messages.
[block:callout]
{
  "type": "warning",
  "body": "For Testing Purposes: Your device must be subscribed to get the Test In-App Message. The test will not work if your device is unsubscribed.\n\nRegular IAM will work on unsubscribed devices, but for Testing, you must be subscribed.\n\nYou will not see a push notification when setting the In-App Messages live.",
  "title": "Push Notifications for IAM is only for Testing"
}
[/block]
### Example: Rate My App Actions
Let's send the user to the app store when they click the Image or Rate Now button. Using the URL Click Action you can add your App's Store URL. See [Deep Link to Market](doc:links#deep-link-into-the-app-store) if you need more details on this. 

If you want to set for iOS and Android App stores separately, you can easily duplicate this IAMs and target 2 [Segments](doc:segmentation), one for Android and another for iOS using the "Device Type" data filter. Simply update this URL for the Android and iOS Segment targeted in each URL Action.

If the user clicks the button to dismiss, you can add a [Data Tag](doc:add-user-data-tags) to mark that the user selected "Remind Me Later" and we can re-target them again at a later time with this same message or send them a push!
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7697a69-Screen_Shot_2020-09-03_at_9.58.47_AM.png",
        "Screen Shot 2020-09-03 at 9.58.47 AM.png",
        941,
        766,
        "#d9d7f1"
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
        "https://files.readme.io/5608420-Screen_Shot_2020-05-18_at_11.05.37_AM.png",
        "Screen Shot 2020-05-18 at 11.05.37 AM.png",
        1063,
        63,
        "#f6f8f9"
      ]
    }
  ]
}
[/block]
#Step 3. Triggers

Triggers tell the OneSignal SDK when to show the IAM to the device if they are in the segment specified. Triggers can be set based on time or programmatically through the OneSignal SDK. See the <a href="doc:iam-triggers" target="_blank">IAM Triggers Guide</a> for more details.

#Step 4. Schedule
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/oucQB6ekJ0A\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n"
}
[/block]
**Start Showing** is when the message will begin to be presented to users. If the specific time set has not been reached, the message cannot be triggered.

**Stop Showing** is the time after which the message cannot be triggered any longer. You can also **Show forever** which means it will show until you Pause it or delete the App.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db659f7-Screen_Shot_2021-08-14_at_11.22.24_AM.png",
        "Screen Shot 2021-08-14 at 11.22.24 AM.png",
        1760,
        1390,
        "#f9fafb"
      ]
    }
  ]
}
[/block]
# Advanced Settings

By default In-App Messages must be dismissed by a user action:
- Clicking the x button in the corner 
- Clicking one of the elements with "Dismiss on click" selected
- Swiping the message away

##When should this message dismiss?

Select **Dismiss after a certain amount of time** to dismiss the IAM automatically after X amount of seconds.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6aee943-Screen_Shot_2021-08-14_at_11.18.31_AM.png",
        "Screen Shot 2021-08-14 at 11.18.31 AM.png",
        518,
        312,
        "#f3f5f6"
      ]
    }
  ]
}
[/block]
## How often do you want to show this message?

**Only once** is default. The IAM will only show 1 time on the current device.

**Every time trigger conditions are satisfied** will show this message each time the Trigger conditions are met.

**Multiple times** allows you to set the specific amount of times this message can be shown and how long to wait in between each display. 

For example, if you set: "`2` times with a gap of `1` **hours** in between" - The message will be allowed to trigger a total of `2` times. The first time when the triggers are met, then the 2nd time when the triggers are met and `1` hour has passed. 

If you set "`12` times with a gap of `30` **days** in between" - The message will show roughly once a month for a year.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a8c8f7-Screen_Shot_2020-05-08_at_6.09.07_PM.png",
        "Screen Shot 2020-05-08 at 6.09.07 PM.png",
        613,
        362,
        "#eff3f7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Make Message Live",
  "body": "When ready to make message live, it will start showing on devices that are:\n1. Within the Audience set in Step 1.\n2. Trigger conditions are met in Step 3.\n3. Timeframe scheduled in Step 4."
}
[/block]