---
title: "Outcomes"
slug: "outcomes"
excerpt: "Track events and actions within your app or site resulting from push notifications from OneSignal."
hidden: false
createdAt: "2019-09-28T00:29:16.914Z"
updatedAt: "2022-02-14T19:53:07.862Z"
---
OneSignal allows you to track various Outcomes (events or actions) resulting from push notifications. 

This includes tracking things you care about like event counts (e.g. how many users purchased a product), sums (useful for tracking revenue), or unique events (counted only once). 
[block:callout]
{
  "type": "info",
  "title": "Webinar Video",
  "body": "[Watch our latest Outcomes webinar here.](https://documentation.onesignal.com/docs/videos#onesignal-webinars-advanced-analytics-outcomes-with-onesignal-4222020)"
}
[/block]
#Outcome Types

There are 3 types of Outcomes: 
[block:parameters]
{
  "data": {
    "h-0": "Outcome",
    "0-0": "**Notification Clicks**",
    "0-1": "Tracks number of clicks/opens on a push notification.",
    "1-0": "**[Session Duration](#session-duration)**",
    "1-1": "**COUNT:** Number of sessions that resulted from a push notification. \n**SUM:** Cumulative session time of all sessions resulting from a push notification (in seconds).",
    "2-0": "**[Custom Outcome](#custom-outcomes)**",
    "2-1": "Any custom outcome such as purchase amount, action taken by the user, or any other outcome of interest.",
    "h-1": "Description",
    "h-2": "Details",
    "1-2": "A new session is created when a user clicks a notification resulting in the app opening.\n\nIf a notification is clicked but app is already open, then no new session is created.",
    "0-2": "A click is generated when the user presses the notification which triggers the app or site to open and removes the notification from the device. \n\nClicks always measured with [direct attribution](#attributions).",
    "2-2": "[Paid Plan Required](https://onesignal.com/pricing):\n\nThis is set with code.\n\n**Limit of 100 custom outcomes**"
  },
  "cols": 3,
  "rows": 3
}
[/block]

----

# Attributions

Outcomes can be attributed to a notification directly from a click or influenced by a notification received. This depends on if a **session** is created by the notification click which opens the app or website from being closed. If a notification is not clicked or received when the outcome is triggered it is an unattributed outcome.

If a user has the app or site open and clicks the notification, a **session** is not created and the Outcome will be **influenced**. Similarly, if up to 10 notifications are sent and never clicked, but the user performs the Outcome within the specified [Attribution Window (default 24 hours)](#influenced-opens), then up to all 10 notifications will track the outcome as **influenced**.

**Clicks (count)** will always be directly attributed to a notification and do not rely on a **session**.
[block:parameters]
{
  "data": {
    "h-0": "Attribution",
    "0-0": "**DIRECT**",
    "1-0": "**INFLUENCED**",
    "3-0": "**TOTAL**",
    "0-1": "The Outcome happened during a session that was created due to a clicked push.",
    "1-1": "The Outcome was registered within the [Attribution Window (default 24 hours)](#influenced-opens) of the push but didn’t occur during a session directly initiated from a push.\n\n**Note:** Only the 10 most recently sent notifications (per device) get influenced attribution",
    "3-1": "Sum of Direct + Influenced Outcomes when viewing the [Message Reports](doc:notification-delivery).\n\nSum of Direct + Influenced + Unattributed when viewing the Delivery > Outcomes table.",
    "h-1": "Description",
    "2-0": "**UNATTRIBUTED**",
    "2-1": "The Outcome was registered outside of a message click and the [Attribution Window](#influenced-opens). It therefore is not associated with any specific message."
  },
  "cols": 2,
  "rows": 4
}
[/block]
## Direct Opens

The push notification was clicked, opened the app or website from a new session (app or website not open in the past 30 seconds) and the user performed the action which triggered the Outcome.

### Influenced Opens

Inside Settings > Analytics 

Outcomes performed when a user receives a push within the Attribution Window but does not click the push. Instead they open the app or website directly.

**Attribution Window** - the amount of time **influenced** Outcomes can be attributed to a notification. You can set 15 minutes, 1 hour and 24 hours which is default.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3497f8a-image.png",
        "image.png",
        1842,
        586,
        "#dddfe0"
      ]
    }
  ]
}
[/block]
If you keep the Attribution Window to the default 24 hour maximum, any [Outcome Types](#outcome-types) except Clicks will show in the Outcomes table for up to 10 most recent notifications.

For example:
- Attribution Window set to 24 hours and you send 15 notifications that day.
- UserA does not click any notifications but opens the app.
Then the last 10 most recent notifications will have updated Session Duration count and sum.
If you also specified a Custom Outcome, like the user buys a product, then the last 10 notifications will also show that Custom Outcome in the Outcomes Table.


# Count Vs Sum
For **Session Duration** and **Custom Outcomes**, there are two metrics available: **count** and **sum**
[block:parameters]
{
  "data": {
    "0-0": "**COUNT**",
    "0-1": "The frequency of the Outcome (how many times it occurred)",
    "1-0": "**SUM**",
    "1-1": "The sum of all Outcome values (only available for Outcomes that register values)",
    "h-0": "Metric",
    "h-1": "Description"
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/699b01c-Screen_Shot_2019-10-01_at_1.59.38_PM.png",
        "Screen Shot 2019-10-01 at 1.59.38 PM.png",
        365,
        134,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]

----

#Outcome Values

One of Outcomes' most powerful features is the ability to store **numeric** values in the [Sum Row](#count-vs-sum) with the firing of each Outcome. 

**Note**: Outcomes with values always round to the nearest whole number.

For example, you may want to track how much revenue can be attributed to a push campaign. In this example, you can register a monetary value with a [Custom Outcome](#custom-outcomes) such as a purchase. Simply pass an outcome name with the number you wish to associate it with. You can then see these data in the [Message Report](#message-report) page for any given push notification. 
[block:code]
{
  "codes": [
    {
      "code": "// \"Purchase\" button pressed in the app\n   ...\n   OneSignal.sendOutcomeWithValue(\"Purchase\", 18.76);",
      "language": "java"
    },
    {
      "code": "// \"Purchase\" button pressed in the app\n   ...\n   [OneSignal sendOutcomeWithValue:@\"Purchase\" value:18.76]",
      "language": "objectivec"
    },
    {
      "code": "//Purchase Button pressed on site\nOneSignal.sendOutcome(\"Purchase\", 20.20);",
      "language": "javascript"
    },
    {
      "code": "let value = \"20.20\"//you supply the value\nOneSignal.sendOutcome(withValue: \"Purchase\", value: NSNumber(value:value), onSuccess: {outcomeSent in\n  print(\"outcome sent: \\(outcomeSent!.name) with random value: \\(value)\" )\n})",
      "language": "swift"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4405b23-Screen_Shot_2019-10-02_at_12.02.27_PM.png",
        "Screen Shot 2019-10-02 at 12.02.27 PM.png",
        497,
        148,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]

----

#Session Duration

Sessions are created when the user opens the app or website from previously being closed.

A **direct** session is registered when the user opens the app or site from a push.
An **influenced** session is registered when the user opens the app within the [Attribution Window](#influenced-opens) (default 24 hours). 

Sessions become apparent in [Message Reports](doc:notification-delivery) after the session is finished (user leaves app or site).

If you send up to 10 notifications and the user visits the app or website within the Attribution Window, then all 10 notifications will be counted towards Influenced Session Duration count and sum.
[block:callout]
{
  "type": "info",
  "body": "App or Website closed refers to when a user has fully quit your app or website. If the App or Website is in the background, and the user brings it to the foreground, a new session will not apply.",
  "title": "App or Website Closed"
}
[/block]
---
# Implementing Outcomes

### Default Outcomes
Update to the latest version of the SDK. Free users automatically get **clicks** right out of the box. Paid plan users will get **clicks** and **sessions**.

## Custom Outcomes
Add a line of code where you want an Outcome to fire (e.g. on "add to cart" button or "upgrade subscription" button).

There are three methods for custom Outcome types:
[block:parameters]
{
  "data": {
    "h-0": "Method",
    "h-1": "Description",
    "0-0": "`sendOutcome`",
    "0-1": "Increases the \"Count\" by 1 and will be counted each time sent.",
    "2-0": "`sendUniqueOutcome`",
    "2-1": "Increases \"Count\" by 1 only once. This can only be attributed to a single notification. If the method is called outside of an attribution window, it will be unattributed until a new session occurs.",
    "1-0": "`sendOutcomeWithValue`\nWeb: `sendOutcome`",
    "1-1": "Increases the \"Count\" by 1 and the \"Sum\" by the value. Will be counted each time sent."
  },
  "cols": 2,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Example Outcomes Code",
  "body": "See [below Outcomes Examples](#examples) for more on implementation."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Failures for Outcomes are cached on the device and re-attempted on the next OneSignal init.",
  "title": "Missed Outcomes"
}
[/block]
---

# Reports

Each [Message Report](doc:notification-delivery#message-report) contains all Outcome Statistics related to that notification as well as information such as delivery numbers, click-through rate, and influenced opens. 

You can also view a cumulative graph of all outcomes over the past 30 days in [Delivery > Outcomes](https://documentation.onesignal.com/docs/notification-delivery#outcomes).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eaa9eb4-Screen_Shot_2019-10-01_at_3.05.22_PM.png",
        "Screen Shot 2019-10-01 at 3.05.22 PM.png",
        1205,
        274,
        "#f1f5f7"
      ]
    }
  ]
}
[/block]
Outcomes can be viewed as a **graph**...

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04ed54e-Screen_Shot_2019-10-01_at_3.05.51_PM.png",
        "Screen Shot 2019-10-01 at 3.05.51 PM.png",
        1180,
        662,
        "#fcfcfd"
      ]
    }
  ]
}
[/block]
or as a **table**:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e3d4853-Screen_Shot_2019-10-01_at_1.13.34_PM.png",
        "Screen Shot 2019-10-01 at 1.13.34 PM.png",
        503,
        147,
        "#f1f2f2"
      ]
    }
  ]
}
[/block]
---
# Examples
## E-Commerce Site
Online stores can use OneSignal push notifications to drive users back to abandoned carts, flash sales, promotions, and more. With **Outcomes**, store owners can now easily correlate push notifications to user actions such as an add-to-cart, purchase, or coupon redeemed. For purchases, outcomes go even further than simple counts and can track purchase amounts. This allows site owners to easily view the sum total of revenue generated from individual pushes.  
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.sendOutcomeWithValue(\"Purchase\", 18.76);",
      "language": "java"
    },
    {
      "code": "[OneSignal sendOutcomeWithValue:@\"Purchase\" value:18.76]",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.sendOutcome(\"Purchase\", 18.76);",
      "language": "javascript"
    }
  ]
}
[/block]
## Dating app
Online dating apps may want to re-engage users by using a push to notify them of a match, a new like, or simply to get them swiping. By using **Outcomes**, a dating app developer can see whether a push notification led to a user event such as initiating a chat with a match or a 34-second swipe session. These data can then be used to refine notification and targeting strategies.

In the following example, we want to track whether a user started swiping dating profiles after a push. Since we wouldn't want to count every swipe as a conversion, we use `sendUniqueOutcome`

This "Swipe" outcome will only be attributed once to the push that triggered it. Examples:
- If the user clicked the push and performed the action which called this method, it will be a direct attribution. 
- If user received the push but did not click it and performed the action within in the attribution window, it will be an influenced attribution. Even if they later click the same push and performed the action again, it will still only be influenced.
- If user performs method outside of an attribution window, it will be unattributed once per session.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.sendUniqueOutcome(\"Swipe\");",
      "language": "java"
    },
    {
      "code": "[OneSignal sendUniqueOutcome:@\"Swipe\"]",
      "language": "objectivec"
    },
    {
      "code": "//OUTCOME WITH UNIQUE VALUES COMING SOON TO WEB\nOneSignal.sendOutcome(\"my_outcome_event\");",
      "language": "javascript"
    }
  ]
}
[/block]
## Pushes Clicked By Language

Within the [Notification Opened/Clicked Event](doc:sdk-reference#notification-opened-handler) of our SDK, you can setup Outcomes to increment how many devices clicked a push by their set language. This will require some native code to detect the language of the device, but you can then pass that language into the Outcome like so:
[block:code]
{
  "codes": [
    {
      "code": "public void notificationOpened(OSNotificationOpenResult result) {\n  String languageCode = Locale.getDefault().getLanguage();\n  System.out.println(\"languageCode \" + languageCode);\n  OneSignal.sendOutcome(languageCode);\n}",
      "language": "java"
    },
    {
      "code": "let notificationOpenedBlock: OSHandleNotificationActionBlock = { result in\n  // This block gets called when the user reacts to a notification received\n  if let languageCode = Locale.current.languageCode {\n      print (\"languageCode: \" + languageCode);\n      OneSignal.sendOutcome(languageCode);\n}\n}",
      "language": "swift"
    },
    {
      "code": "var language = navigator.language\nOneSignal.sendOutcome(language);",
      "language": "javascript"
    }
  ]
}
[/block]
## Pushes Clicked By Operating System and Browser

Within the [Notification Opened/Clicked Event](doc:sdk-reference#notification-opened-handler) of our SDK, you can setup Outcomes to increment which platform's specifically were clicked. This is generic for iOS and Android as you can set `OneSignal.sendOutcome("iOS")` or `OneSignal.sendOutcome("Android")` in your mobile app's click handler, but if you want to track web push platforms as well, you can use this for example:
[block:code]
{
  "codes": [
    {
      "code": "// Example taken from Stackoverflow: https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript\nvar os = \"Unknown OS\";\nif (navigator.userAgent.indexOf(\"Win\") != -1) os = \"Windows\";\nif (navigator.userAgent.indexOf(\"Mac\") != -1) os = \"Macintosh\";\nif (navigator.userAgent.indexOf(\"Linux\") != -1) os = \"Linux\";\nif (navigator.userAgent.indexOf(\"Android\") != -1) os = \"Android\";\nif (navigator.userAgent.indexOf(\"like Mac\") != -1) os = \"iOS\";\nconsole.log('Your os: ' + os);\n\nvar browserType = \"Unknown Browser Type\";\nif (navigator.userAgent.indexOf(\"Safari\") != -1) browserType = \"Safari\";\nif (navigator.userAgent.indexOf(\"Chrome\") != -1) browserType = \"Chrome\";\nif (navigator.userAgent.indexOf(\"OPR\") != -1) browserType = \"Opera\";\nif (navigator.userAgent.indexOf(\"Firefox\") != -1) browserType = \"Firefox\";\nconsole.log('Your Browser: ' + browserType);\n\nOneSignal.push([\"addListenerForNotificationOpened\", function(data) {\n  OneSignal.sendOutcome(os);\n  OneSignal.sendOutcome(browserType);\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
---

# FAQ

### What platforms are supported?

Make sure you have the minimum SDK version **or higher** installed. We recommend using the latest version of the OneSignal SDK.
[block:parameters]
{
  "data": {
    "0-0": "[Android Native SDK](doc:android-native-sdk)",
    "0-1": "[3.12.0](https://github.com/OneSignal/OneSignal-Android-SDK/releases)",
    "1-0": "[iOS Native SDK](doc:ios-native-sdk)",
    "2-0": "[React Native SDK](doc:react-native-sdk)",
    "3-0": "[Unity SDK](doc:unity-sdk)",
    "1-1": "[2.12.2](https://github.com/OneSignal/OneSignal-iOS-SDK/releases)",
    "2-1": "[3.6.0](https://github.com/geektimecoil/react-native-onesignal/releases)",
    "3-1": "[2.11.0](https://github.com/OneSignal/OneSignal-Unity-SDK/releases)",
    "4-0": "[Cordova/Ionic/PhoneGap SDK](doc:cordova-sdk)",
    "4-1": "[2.8.0](https://github.com/OneSignal/OneSignal-Cordova-SDK/releases)",
    "5-0": "[Xamarin SDK](doc:xamarin-sdk)",
    "5-1": "[3.7.0](https://github.com/OneSignal/OneSignal-Xamarin-SDK/releases)",
    "7-0": "[Web Push SDK](doc:web-push-sdk)",
    "7-1": "[150801](https://github.com/OneSignal/OneSignal-Website-SDK/releases)",
    "6-0": "[Flutter SDK](doc:flutter-sdk)",
    "6-1": "[2.3.1](https://github.com/OneSignal/OneSignal-Flutter-SDK/releases)",
    "h-0": "SDK",
    "h-1": "Minimum SDK Version",
    "h-2": "Details",
    "0-2": "Supported",
    "1-2": "Supported",
    "2-2": "Supported",
    "3-2": "Supported",
    "4-2": "Supported",
    "5-2": "Supported",
    "6-2": "Supported",
    "7-2": "Supported"
  },
  "cols": 3,
  "rows": 8
}
[/block]
### What happens if a device is offline?
Data for fired outcomes are queued to be sent to OneSignal once the device is online again.

### How long is outcome data stored?
   - Notifications sent from the dashboard keep their Outcome data forever.
   - Notifications sent via the API have a 30-day retention of outcomes before being purged.

### Can I export outcomes?
You can export a set of outcomes or all outcomes as a CSV. We also provide API access to outcomes for an [individual notification](https://documentation.onesignal.com/reference/view-notification) or for [all the notifications](https://documentation.onesignal.com/reference/view-outcomes).

### Can I store strings as values in Custom Outcomes?
This is not supported 

### If a user backgrounds the app after clicking a notification and then comes back to it, firing an Outcome, is it counted direct or influenced?
As long as the user returns to the app within 30 seconds after backgrounding it, the session will still be considered the original session and will get direct attribution.

### Do outcomes work with SMS or email?
Currently outcomes work with push notifications and In-App Messages.

Outcomes sent through In-App messages will show as "Unattributed" and will set a tag on the device in format:
`outcome name : true`.

### When does the new Attribution Window take affect?
If you change the attribution window from 24 hours to 1 hour for example, then the 1 hour window will take affect on a per-device basis once each device opens the app from a brand new session. This new session is created after 30 seconds of being outside the app.

### Why is Safari not logging outcomes?

Outcomes for web requires the use of service workers to track outcome events. Since Safari does not implement Service Workers in the same way as Chromium based browsers, it will not track outcomes as Direct or Influenced, but will be tracked as Unattributed.

### Why do sessions not match with other analytics?

OneSignal only counts a session after the user has left the app for over 30 seconds. If you close the app or website and return to it within 30 seconds, it will not be a new session.

For instance, Apple's analytics tracks the session as the number of times the app has been used for at least two seconds. If the app is in the background and is later used again, that counts as another session.