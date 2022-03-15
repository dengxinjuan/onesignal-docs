---
title: "Email Links and Click Tracking"
slug: "email-links-and-click-tracking"
hidden: false
createdAt: "2021-10-19T22:35:58.985Z"
updatedAt: "2021-10-20T01:10:04.572Z"
---
Your emails will likely contain links to https or http URLs that navigate to your website or mobile app. To track if the link was clicked, your Email Service Provider will change the URL structure to make it trackable and OneSignal can hook into that event for analytics. 

By default, all emails sent from OneSignal will have link tracking enabled, causing the URL structure to change. 

You can disable link tracking by unchecking the **Track link clicks** option in the dashboard email form. For Emails sent through our API set `disable_email_click_tracking` to `true` in your [API requests](https://documentation.onesignal.com/reference/create-notification#email-content).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1b7b55-Screen_Shot_2021-10-19_at_5.53.41_PM.png",
        "Screen Shot 2021-10-19 at 5.53.41 PM.png",
        1556,
        534,
        "#fbfcfc"
      ],
      "caption": "Track link clicks is enabled. Uncheck this box to disable link tracking."
    }
  ]
}
[/block]
If you disable link tracking:
- OneSignal cannot track link clicks and will show N/A in the [Email Message Reports](doc:email-message-reports) Click-Through Rate.
- All URLs in the email will not be tracked. There is not an option to disable link tracking for only specific links.

#Deep Linking

Deep-linking generally refers to opening your mobile app and navigating to a specific page. If you setup Deep Links using Android Web Links or App Links, iOS Universal Links, Firebase Dynamic Links or Branch.io, the deep link should work with or without link tracking, but changing the URL structure may cause your deep links to behave differently. 

If you send deep link URLs in your emails, the following will occur based on Link Tracking settings:
[block:parameters]
{
  "data": {
    "h-0": "Link Tracking",
    "h-1": "Deep-Link Outcome",
    "0-0": "Enabled",
    "0-1": "The ESP will change the URL causing the devices' default browser to open first. Then it will open the app and navigate to the relevant page.\n\nOneSignal can track the link click.",
    "1-0": "Disabled",
    "1-1": "The ESP will not change the URL. The link will open the app and navigate to the relevant page.\n\nOneSignal cannot track the link click."
  },
  "cols": 2,
  "rows": 2
}
[/block]