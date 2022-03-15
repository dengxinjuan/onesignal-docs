---
title: "How to add Triggers"
slug: "iam-triggers"
excerpt: "How to use Triggers to automatically send an In-App Message"
hidden: false
createdAt: "2021-08-10T20:30:11.450Z"
updatedAt: "2021-12-21T02:41:24.501Z"
---
The trigger is a custom option for when to show the message. You can trigger the IAM when the user opens the app or setup a custom triggers programmatically with [`addTrigger` method](doc:iam-sdk-methods). Custom triggers are `key: value` pair of string or integer data that you set programmatically in your app when an event occurs.

For example, if you want to send an IAM when a user reaches level 5. Each time the use grows a level, you would call for example `OneSignal.addTrigger("level", 1);` then when they reach level 2, you simply update the trigger `OneSignal.addTrigger("level", 2);` and so on. At `OneSignal.addTrigger("level", 5);` the IAM will show to the user by setting the trigger to `level is 5` in the dashboard.

Triggers can be combined with AND and OR operators to only show under very specific conditions.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/jB11uZ2ti_4\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
#Select Trigger Conditions

When creating an In-App Message, you can set a trigger action. This enables you to select a trigger which when its state is changed will send the In-App. 

Similarly, you can also specify additional behaviors such as the duration since the last In-App Message. This ensures your users are not overwhelmed by too many In-App Messages. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee4af8b-Trigger.png",
        "Trigger.png",
        1254,
        453,
        "#f8f9f9"
      ],
      "caption": "Image showing how you can set a trigger when creating an In-App Message"
    }
  ]
}
[/block]
Below are a series of triggers you can specify. 
[block:parameters]
{
  "data": {
    "0-0": "**On app open**",
    "0-1": "Show message upon next app open.\n\nUse this to make sure all users within the segment get the message when they open the app.",
    "1-0": "**In-App Trigger**",
    "1-1": "Show message when user performs certain action.\n\nMessage shows when calling the [`addTrigger` method](doc:iam-sdk-methods) for the corresponding key value pair.",
    "2-0": "**Session Duration**",
    "3-0": "**Duration Since Last In-App**",
    "0-2": "",
    "1-2": "",
    "h-0": "Trigger",
    "h-1": "Description",
    "2-1": "Show message after x seconds within the current app session.",
    "3-1": "Show message after x seconds since the most recent in-app message."
  },
  "cols": 2,
  "rows": 4
}
[/block]
#Setup Re-Trigger Options

Navigate to **Schedule > Advanced Settings**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b23ed7-Scheduling.png",
        "Scheduling.png",
        1253,
        847,
        "#fbfcfc"
      ],
      "caption": "Image showing the ability to schedule an In-App Message"
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
[block:callout]
{
  "type": "warning",
  "title": "Triggers Must Be Satisfied",
  "body": "If the Trigger is **On app open** or **Session Duration** then the user must open the app to see it again.\n\nIf trigger is **Duration since last in-app** then the message will show after this timeframe is satisfied.\n\nIf the trigger is a programmatic **In-app trigger**, then the method must be called again after the \"multiple times gap\" timeframe is satisfied."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/97cef94-Schedule2.png",
        "Schedule2.png",
        713,
        462,
        "#f2f5f7"
      ],
      "caption": "Image showing how to schedule multiple times"
    }
  ]
}
[/block]
# FAQ

## Are triggers tags?
The value of the trigger is not viewable within the OneSignal dashboard, but you can view the current trigger value programmatically with the `getTriggerValueForKey` method on the OneSignal SDK.