---
title: "Example: Create a Tutorial"
slug: "example-create-a-tutorial"
hidden: false
createdAt: "2021-12-23T19:08:04.278Z"
updatedAt: "2021-12-23T19:17:08.511Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94a1501-iam-create-a-tutorial.png",
        "iam-create-a-tutorial.png",
        1922,
        1661,
        "#e8eff6"
      ]
    }
  ]
}
[/block]
Let's introduce new users to our app or share a new feature update!

#### Step 1. Select the Tutorial Audience

For new users, we can setup a segment of First Session less than 1 hour so we can target new users as soon as they open the app. If you have a sign up flow, you can use triggers to start the demo after the user signs in.

If this is a new feature, we can setup a segment for users with session count greater than 2 and Last Session less than 1 hour ago. This way we don't show the sequence for new users that might not be ready for the new feature.

#### Step 2. Walkthrough Trigger

If there is a sign up flow for your app that we don't want to block, we can setup the in-app trigger to fire as soon as registration is complete.

Another option is to setup the trigger to go off after 3 minutes (180 seconds).

If you are introducing a new feature to users that are already registered, you can also have this sequence trigger "On app open".

#### Step 3. Create the Walkthrough

Depending on how many screens the walkthrough contains, name the message based on the sequence to find it easier (Tutorial 1, Tutorial 2, etc...). 

If available, gif's are highly recommended to animate your tutorial. You can add gif's or images to the image field or use the entire message with the background field.

It is up to you to add a button or not. Generally you would not need to add a button here since clicking the image or background will also set an Action to tigger the next message. 

Set the Click Action Name to be representative of the next tutorial to show and dismiss the message on click.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1350ca4-iam-create-a-tutorial-click-action.png",
        "iam-create-a-tutorial-click-action.png",
        561,
        430,
        "#f4f6f7"
      ]
    }
  ]
}
[/block]
Add the click action to the `InAppMessageClickHandler` along with the tigger to the next message.
[block:code]
{
  "codes": [
    {
      "code": "class ExampleInAppMessageClickHandler implements OneSignal.InAppMessageClickHandler {\n  // Example of an action id you could setup on the dashboard when creating the In App Message\n  private static final String ACTION_ID_MY_CUSTOM_ID = \"show_tutorial_2\";\n\n  @Override\n  public void inAppMessageClicked(OSInAppMessageAction result) {\n     if (ACTION_ID_MY_CUSTOM_ID.equals(result.clickName)) {\n        Log.i(\"OneSignalExample\", \"Custom Action took place! Starting YourActivity!\");\n        //setup the trigger to the next tutorial window\n        OneSignal.addTrigger(ACTION_ID_MY_CUSTOM_ID, 1);\n     }\n  }\n}",
      "language": "java"
    }
  ]
}
[/block]
#### Step 4. Tutorial Finish and Repeat

Once you schedule and confirm the message, you will repeat the process for the rest of the tutorial messages using the same audience segments.

**Make sure to change the trigger to be the name of the Action ID set in the previous message.**
In this example, the second tutorial message will have a trigger `show_tutorial_2` is `1`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/558850e-iam-create-a-tutorial-add-trigger.png",
        "iam-create-a-tutorial-add-trigger.png",
        1279,
        347,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
The second tutorial message will also have an Body Action Name of `show_tutorial_3` and so on.

Once you get to the last tutorial page, you can simply dismiss the final message upon body click.