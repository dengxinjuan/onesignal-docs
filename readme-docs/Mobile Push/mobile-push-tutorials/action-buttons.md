---
title: "Action Buttons"
slug: "action-buttons"
excerpt: "Additional actions users may take on notifications"
hidden: false
createdAt: "2016-09-02T02:19:24.057Z"
updatedAt: "2021-09-14T14:32:46.680Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c40c0d1-ios15-action-icons--1.jpeg",
        "ios15-action-icons--1.jpeg",
        1000,
        580,
        "#d5d5d5"
      ],
      "caption": "Image showing action buttons in iOS 15+"
    }
  ]
}
[/block]
Typically when receiving a notification, there is only a single action available - tapping on the notification. 

However, Action Buttons allow more than one action to be taken on a notification, allowing for greater interactivity within notifications.

# How to Add Action Buttons from the Dashboard

In [Sending Push Messages](doc:sending-notifications) under **Advanced Options**. Input your follow platform-specific instructions. Fill in with the parameters below, and click **Add Another** to add more buttons:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7af3ac-Actions.png",
        "Actions.png",
        662,
        561,
        "#f4f5f6"
      ],
      "caption": "Image. showing action buttons to be added for iOS and Android"
    }
  ]
}
[/block]
** Tips ** 
* **Unique Action ID's: ** You must add an Action Id and Text for this button to work. The Action ID should be different if you add multiple buttons.

[block:parameters]
{
  "data": {
    "0-0": "**Action ID**",
    "h-0": "Dashboard",
    "h-1": "API Parameter",
    "1-0": "**Text**",
    "2-0": "**Icon**",
    "2-1": "`icon`",
    "1-1": "`text`",
    "0-1": "`id`",
    "h-2": "Notes",
    "0-2": "A unique identifier for your button action.",
    "1-2": "The text the button should display.",
    "2-2": "**Android**, **Amazon** - add icon to button"
  },
  "cols": 3,
  "rows": 3
}
[/block]
**Chrome** - Under **Platform Settings**  > **Send to Google Chrome** Enable Action Buttons and fill in the parameters below. Click **Add Another** to add a second button:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b5db58-chrome-actions.png",
        "chrome-actions.png",
        683,
        383,
        "#f2f3f5"
      ],
      "caption": "Image shows Chrome action buttons in Advanced Settings"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Notes",
    "0-0": "`Action ID`",
    "1-0": "`Button Text`",
    "2-0": "`Icon URL`",
    "3-0": "`Launch URL`",
    "0-1": "A unique identifier for your button action. The ID of the clicked button is passed to you so you can identify which button was clicked. (e.g. 'accept-button')",
    "1-1": "The text the button should display. Passed to your app so you can identify which button was clicked. (e.g. 'Accept')",
    "2-1": "A valid publicly reachable URL to an icon. Keep this small because it's downloaded on every notification display. (e.g. `http://site.com/icon.png`)",
    "3-1": "The URL to open when the notification is clicked. Pass 'do_not_open' to prevent opening any URL. (e.g. 'do_not_open')"
  },
  "cols": 2,
  "rows": 4
}
[/block]
# How to Add Action Buttons from our API and SDK

##1. API

**Mobile** - See REST API [Create Notification: Action Buttons](https://documentation.onesignal.com/reference/create-notification#action-buttons). The button id is added to the `additionalData` variable in the notification opened callback. 

**Chrome** -  Use the `web_buttons` parameter and pass an array of hashes (up to the two) describing the button with `id`, `text`, `icon`, and `url`. See description of the parameters above.

##2. SDK

**Mobile** - See the [SDK Reference](doc:sdk-reference#postnotification-method) for whichever SDK you are using to build your app. The button id is added to the `additionalData` variable in the notification opened callback. 

**Chrome** - If OneSignal is active on your webpage, you can send the current webpage visitor a test notification using the following code:
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"included_segments\\\": [\\\"Subscribed Users\\\"],\n\\\"buttons\\\": [{\\\"id\\\": \\\"id1\\\", \\\"text\\\": \\\"button1\\\", \\\"icon\\\": \\\"ic_menu_share\\\"}, {\\\"id\\\": \\\"id2\\\", \\\"text\\\": \\\"button2\\\", \\\"icon\\\": \\\"ic_menu_send\\\"}]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl",
      "name": "cURL Mobile Action Buttons"
    },
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"English Message\\\"},\n\\\"included_segments\\\": [\\\"Subscribed Users\\\"],\n\\\"web_buttons\\\": [{\\\"id\\\": \\\"id1\\\", \\\"text\\\": \\\"button1\\\", \\\"icon\\\": \\\"ic_menu_share\\\",\\\"url\\\": \\\"https://yoursite.com\\\"}, {\\\"id\\\": \\\"id2\\\", \\\"text\\\": \\\"button2\\\", \\\"icon\\\": \\\"ic_menu_send\\\",\\\"url\\\": \\\"https://yoursite.com\\\"}]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl",
      "name": "cURL Web Action Buttons"
    },
    {
      "code": "OneSignal.sendSelfNotification(\n  /* Title (defaults if unset) */\n  \"OneSignal Web Push Notification\",\n  /* Message (defaults if unset) */\n  \"Action buttons increase the ways your users can interact with your notification.\", \n   /* URL (defaults if unset) */\n  'https://example.com/?_osp=do_not_open',\n  /* Icon */\n  'https://onesignal.com/images/notification_logo.png',\n  {\n    /* Additional data hash */\n    notificationType: 'news-feature'\n  }, \n  [{ /* Buttons */\n    /* Choose any unique identifier for your button. The ID of the clicked button \t\t\t is passed to you so you can identify which button is clicked */\n    id: 'like-button',\n    /* The text the button should display. Supports emojis. */\n    text: 'Like',\n    /* A valid publicly reachable URL to an icon. Keep this small because it's \t\t\t\t downloaded on each notification display. */\n    icon: 'http://i.imgur.com/N8SN8ZS.png',\n    /* The URL to open when this action button is clicked. See the sections below \t\t\t for special URLs that prevent opening any window. */\n    url: 'https://example.com/?_osp=do_not_open'\n  },\n  {\n    id: 'read-more-button',\n    text: 'Read more',\n    icon: 'http://i.imgur.com/MIxJp1L.png',\n    url: 'https://example.com/?_osp=do_not_open'\n  }]\n);",
      "language": "text",
      "name": "Javascript for SDK"
    }
  ]
}
[/block]
# Action Button Icons (Optional)

**Not supported on Android 7+** according to the Android team's [blog post on Android N (AKA 7) it is not longer supported.](https://android-developers.googleblog.com/2016/06/notifications-in-android-n.html)

By default icons will not display on Action Buttons. On Android 7 - 6, you can add icons 32x32dp (24x24dp optical square) in size, this means the following pixel sizes:
```
mdpi = 24x24 pixels in a 32x32 area
hdpi = 36x36 pixels in a 48x48 area
xhdpi = 48x48 pixels in a 64x64 area
xxhdpi = 72x72 pixels in a 96x96 area
```
Action Button icons will appear next to the button text, such as the icons next to 'Share' and 'View' in this example:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3552f8f-ActionButton-Android.png",
        "ActionButton-Android.png",
        373,
        263,
        "#1b1a1c"
      ]
    }
  ]
}
[/block]
# How to Handle the Action Button Click Event

When an action button is clicked, the OneSignal SDK fires a notification click event aka the [Notification Opened Handler](doc:sdk-reference#notification-opened-handler). If you want to handle the notification outside of our SDK or without opening the app see below: [Handing Action Buttons without Opening the App]()

Inside these click events, you can check for the OSNotificationAction `actionID` which you set when creating the Action Buttons.

If the `actionID` is available, you can then perform some action within this event handler like [Mobile deep-links and URLs](doc:links) or another custom process.
[block:code]
{
  "codes": [
    {
      "code": "class ExampleNotificationOpenedHandler implements OneSignal.NotificationOpenedHandler {\n  @Override\n  public void notificationOpened(OSNotificationOpenResult result) {\n    OSNotificationAction.ActionType actionType = result.action.type;\n    JSONObject data = result.notification.payload.additionalData;\n    String customKey;\n\n    if (data != null) {\n      customKey = data.optString(\"customkey\", null);\n      if (customKey != null)\n        Log.i(\"OneSignalExample\", \"customkey set with value: \" + customKey);\n    }\n\n    if (actionType == OSNotificationAction.ActionType.ActionTaken)\n      Log.i(\"OneSignalExample\", \"Button pressed with id: \" + result.action.actionID);\n\n    // The following can be used to open an Activity of your choice.\n    // Replace - getApplicationContext() - with any Android Context.\n    // Intent intent = new Intent(getApplicationContext(), YourActivity.class);\n    // intent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_NEW_TASK);\n    // startActivity(intent);\n\n     // Add the following to your AndroidManifest.xml to prevent the launching of your main Activity\n     //   if you are calling startActivity above.\n     /* \n        <application ...>\n          <meta-data android:name=\"com.onesignal.NotificationOpened.DEFAULT\" android:value=\"DISABLE\" />\n        </application>\n     */\n  }\n}",
      "language": "java"
    },
    {
      "code": "let notificationOpenedBlock: OSHandleNotificationActionBlock = { result in\n  if let actionID = result?.action.actionID {\n    print(\"actionID =\", actionID)\n  }\n}",
      "language": "swift"
    },
    {
      "code": "^(OSNotificationOpenedResult *result) {\n  if (result.action.actionID) {\n      NSLog(@\"Action ID: \", result.action.actionID)\n  }\n}",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.push([\"addListenerForNotificationOpened\", function(event) {\n  console.log(\"OneSignal notification clicked:\", event);\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
## Handing Action Buttons without Opening the App

**Android:** within the `AndroidManifest.xml` follow [this guide to disable the default behavior of always opening the app](doc:android-customizations#changing-the-open-action-of-a-notification). This will allow you to override the normal open events.

**iOS:** you can add an [`ios_category` within the notification](ref:create-notification#action-buttons). This will allow you to add custom actions through the [UNNotificationCategory Object](https://developer.apple.com/documentation/usernotifications/unnotificationcategory). See Apple's [Declaring Your Actionable Notification Types](https://developer.apple.com/documentation/usernotifications/declaring_your_actionable_notification_types) for more details.

----
##  FAQ

 # What Platforms are Supported?
[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Support Notes",
    "h-2": "Support Notes",
    "0-0": "iOS",
    "2-0": "Chrome",
    "3-0": "Firefox, Safari",
    "2-1": "- Supports 2 buttons (Chrome 48+)\n- Chrome 50+: action button icon supported",
    "3-1": "- Buttons not supported",
    "1-0": "Android, Amazon",
    "1-1": "- Supports up to 3 buttons.\n- Icons not supported on Android 7+",
    "0-1": "- Supports up to 4 buttons with [Rich Notifications](doc:rich-media#section-rich-notifications)\n- Icons not supported",
    "2-2": ""
  },
  "cols": 2,
  "rows": 4
}
[/block]
## Why are my Action Buttons not working?
When you get a notification with action buttons on mobile: you need to pull down on it to see the buttons or swipe left and click View. On web, you will need to click the "Settings" button to see the drop down.

Make sure if you added the action button, you added all required fields such as `Action Id` and `Text`

## How can I use the action button click event?

When an action button is clicked, or when the notification body is clicked:

- A notification click event is fired [according to these specifications](doc:web-push-sdk#addlistenerfornotificationopened)
- If the notification body was clicked, the notification URL is opened. If an action button was clicked, the action button URL is opened.
- Finally, the notification click webhook is fired [Webhooks](doc:webhooks) 

You can take advantage of these three events to perform whatever you need. For example, using webhooks, you can perform a custom action (e.g. upvoting a story, analytics) when an action button is clicked.


## How can I prevent the action button from opening any URL?
**Web Push Only**

You can use the following special URL for both the notification launch URL and action button URL.

- Any URL containing the magic string `_osp=do_not_open` *will not open any URL*

This is supported on Chrome and Firefox, but not supported for the Safari web browser. If you target Safari, please provide a URL so that Safari users have somewhere to go. For example, you could use `https://yoursite.com/page?_osp=do_not_open`.


## How can I use the action button to do some work on my page without opening extra windows?
**Web Push Only**

Our goal in this example is to open a new tab to our site (if our site isn't already open) when the action button is clicked, and do some work on the page.

Please first [read this section of our API reference](doc:web-push-sdk#addlistenerfornotificationopened) to understand when our notification click handler fires. It only ever fires on one tab, and the notification launch URL or action button launch URL must at least be the same *origin* as your site's in order for the notification click handler to trigger.

We'll first modify our JavaScript initialization options so that the notification click handler is called as long as our notification launch URL or action button launch URL shares our site's origin. For `https://site.com`, this means our notification click handler will be called as long as our notification launch URL or action button launch URL begins with `https://site.com...`.
[block:code]
{
  "codes": [
    {
      "code": "/* Do NOT call init twice */\nOneSignal.push([\"init\", {\n  /* Your other init settings ... */\n  notificationClickHandlerMatch: 'origin', /* See API reference: https://documentation.onesignal.com/docs/web-push-sdk#section--notificationopenedcallback- *.\n  /* Your other init settings ... */\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
Now we'll add a listener to capture the notification click event, that does some pretend work:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push([\"addListenerForNotificationOpened\", function(event) {\n  console.log(\"OneSignal notification clicked:\", event);\n  /*\n  {\n      \"id\": \"96a0dd96-5b63-47e2-9e67-58ca9a315325\",\n      \"heading\": \"OneSignal Web Push Notification\",\n      \"content\": \"Action buttons increase the ways your users can interact with your notification.\",\n      \"data\": {\n          \"notificationType\": \"news-feature\"\n      },\n      \"url\": \"https://example.com\",\n      \"icon\": \"https://onesignal.com/images/notification_logo.png\",\n      \"buttons\": [\n          {\n              \"action\": \"like-button\",\n              \"title\": \"Like\",\n              \"icon\": \"http://i.imgur.com/N8SN8ZS.png\",\n              \"url\": \"https://example.com\"\n          },\n          {\n              \"action\": \"read-more-button\",\n              \"title\": \"Read more\",\n              \"icon\": \"http://i.imgur.com/MIxJp1L.png\",\n              \"url\": \"https://example.com\"\n          }\n      ],\n      \"action\": \"like-button\"\n  }\n  */\n  \n  // We might send a lot of different notifications; the notification we just sent came with additional data that describes the kind of notification that was sent. We sent \"notificationType\" with our additional data field (notificationType is not built in).\n  var isNewsFeatureNotification = event.data && event.data.notificationType === 'news-feature';\n  if (isNewsFeatureNotification) {\n    // What action button did they click?\n    if (event.action === \"\") {\n      // An empty string means the notification body was clicked (no action button was clicked)\n      // Keep in mind action buttons are only supported on Chrome 48+ so some users will only be able to click the notification body\n    } else if (event.action === 'like-button') {\n      // The \"Like\" action button was clicked\n      alert(\"Glad you liked it! We'll show you similar stories in the future\");\n    } else if (event.action === 'read-more-button') {\n      // The \"Read more\" action button was clicked\n      alert('Showing you the full news article...');\n    }\n  }\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
Now when sending a notification (see above for how to send a notification with action buttons), we can use a notification launch URL and action button launch URLs that begin with our site's origin to trigger our notification click event.

If the site is already open, no new tab will be opened. Otherwise, a new tab will be opened and the new tab will receive the notification click event.

## How can I customize the appearance of my mobile app action buttons?

This will require writing native Java code and manipulating the push notification layout using the [Notification Service Extension](https://documentation.onesignal.com/docs/service-extensions#android-notification-service-extension). 

To change the action button text color, add something like this within the NSE:
[block:code]
{
  "codes": [
    {
      "code": "// Example from Stackoverflow https://stackoverflow.com/questions/41073294/how-to-change-notification-action-text-color-in-android-n/56873390#56873390\nNotification notification = new NotificationCompat.Builder(context, channelId)\n        ...\n        .addAction(new NotificationCompat.Action.Builder(\n                            R.drawable.ic_fire,\n                            HtmlCompat.fromHtml(\"<font color=\\\"\" + ContextCompat.getColor(context, R.color.custom_color) + \"\\\">\" + context.getString(R.string.fire) + \"</font>\", HtmlCompat.FROM_HTML_MODE_LEGACY),\n                            actionPendingIntent))\n                    .build())\n        .build();",
      "language": "java"
    }
  ]
}
[/block]
If possible you will want to modify the action button instead of using `addAction`. Otherwise, you won't be able to define the button text from OneSignal or track the click.

## Why is there a close action button?

By default web push notifications on Windows 10 include the Close button.

However, if you add your own action button, then this close button is removed. So, in either case the notification will remain on-screen till the user interacts with it. 

This is designed by Google to give the users the chance to interact with the notification.