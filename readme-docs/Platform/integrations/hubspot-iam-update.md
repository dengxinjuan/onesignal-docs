---
title: "HubSpot - v2 Update"
slug: "hubspot-iam-update"
excerpt: "Integrating OneSignal with HubSpot"
hidden: true
createdAt: "2021-08-25T15:58:41.946Z"
updatedAt: "2021-10-06T18:59:09.418Z"
---
HubSpot and OneSignal have partnered to automate sending OneSignal push notifications, in-app messages, and OneSignal tags using Workflows. You can also view OneSignal activity on contacts' timelines and segment users based on OneSignal activity.


You need to use OneSignal independently for more advanced functionality like A/B testing, intelligent delivery, throttling, retargeting etc.

#Requirements
* You must be a HubSpot Super Admin or have <a href="https://knowledge.hubspot.com/settings/hubspot-user-permissions-guide#admin" target="_blank">App Market Permissions</a> in your HubSpot account.
* [Create A OneSignal Account](https://onesignal.com) if you do not already have one.
* The OneSignal [Mobile SDK](doc:mobile-sdk-setup) and/or [Web SDK](doc:web-push-quickstart) from which you want to send data.

#Step 1. Install OneSignal on HubSpot

In your HubSpot account, click the **Marketplace icon** in the main navigation bar, then select **App Marketplace**.

Search for and select the **OneSignal integration**, then click **Install app**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ce6bae-Screen_Shot_2021-09-28_at_3.33.34_PM.png",
        "Screen Shot 2021-09-28 at 3.33.34 PM.png",
        2048,
        1432,
        "#e4e7e9"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Navigate to your OneSignal Dashboard **Settings > Keys & IDs** to copy-paste the App ID and REST API Key into your app. See [Keys & IDs](doc:accounts-and-keys) for more details. You can add multiple OneSignal Apps if needed.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/277cccd-Screen_Shot_2021-04-02_at_6.25.35_PM.png",
        "Screen Shot 2021-04-02 at 6.25.35 PM.png",
        645,
        675,
        "#bddddd"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#Step 2. Map a OneSignal Property to HubSpot

There are two options for mapping users across HubSpot and OneSignal:

##Option 1. External User Id (Recommended)

*Required if you want to use both the **Send notification** and **Edit tags** Workflow actions in HubSpot.

Within HubSpot **Settings > Integrations > Connected Apps > OneSignal > Your preferences** select the HubSpot Contact property you wish to match to OneSignal. This should be available client-side and accessible to the OneSignal SDK.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/99c6856-Screen_Shot_2021-09-28_at_3.43.23_PM.png",
        "Screen Shot 2021-09-28 at 3.43.23 PM.png",
        2274,
        1706,
        "#eaedef"
      ]
    }
  ]
}
[/block]
Using the OneSignal SDK on your app or website, set the [External User Id](doc:external-user-ids) to match the selected HubSpot Contact Property. It is recommended to call this method whenever the user logs into your Website, Android, and/or iOS Apps.

##Option 2. OneSignal `setEmail` method

*Only available for **Send push notification** Workflow action in HubSpot.

Use the <a href="doc:email-sdk-methods" target="_blank">OneSignal SDK `setEmail` method</a> to pass in the current user's email address. It is recommended to call this method whenever the email is provided across your Website, Android, and/or iOS Apps.

#Step 3. Defining the HubSpot Workflow

Within HubSpot, navigate to **Automation > Workflows** and click **Create workflow**.

In the left panel, select **Contact-based** and **Next** in the top right.
Set your enrollment triggers, then click **+** to add an action.

In the right panel, under OneSignal, choose an option:

##Send OneSignal notification Workflow Action
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/751f554-Screen_Shot_2021-09-28_at_4.06.03_PM.png",
        "Screen Shot 2021-09-28 at 4.06.03 PM.png",
        2770,
        1814,
        "#e5eaec"
      ]
    }
  ]
}
[/block]
Select your OneSignal App and matching option. You will then have the option to send a push notification using a template or a custom configuration.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/28bd005-Screen_Shot_2021-09-28_at_4.11.35_PM.png",
        "Screen Shot 2021-09-28 at 4.11.35 PM.png",
        918,
        1154,
        "#ddebed"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Description",
    "0-0": "Use templates",
    "0-1": "You can create <a href=\"https://documentation.onesignal.com/docs/templates\" target=\"_blank\">Templates</a> in the OneSignal Dashboard for your common use cases. Templates created will be pulled into HubSpot.",
    "1-0": "Use custom configuration",
    "1-1": "You can also select “Create custom message” as an option and use various fields (Title, Subtitle, Message, Image URL, Launch URL) to create the push notification.\n\nThe benefit of this option is you can also use HubSpot contact data (e.g., `First Name`, `favorite color`) to personalize the notification fields. OneSignal will correctly format the message for different devices and messaging channels."
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
        "https://files.readme.io/e164f20-personalize.png",
        "personalize.png",
        508,
        512,
        "#e7eff1"
      ]
    }
  ]
}
[/block]
Click **Save** when finished.

##Edit OneSignal device's tags Workflow Action

OneSignal uses <a href="doc:add-user-data-tags" target="_blank">Data Tags</a> for adding custom properties onto users. Tags can be used to add HubSpot Contact Properties into OneSignal for <a href="doc:personalization" target="_blank">Message Personalization</a> and/or <a href="doc:segmentation" target="_blank">Segmentation</a> and sending In-App Messages.

Select your OneSignal App and enter a JSON string with the format `{ "key" : "value" }` and press **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0026af0-Screen_Shot_2021-10-06_at_11.38.02_AM.png",
        "Screen Shot 2021-10-06 at 11.38.02 AM.png",
        912,
        896,
        "#dae8e9"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Within the OneSignal Dashboard **Audience**, select **New Segment**. Give it a name based on the tags selected and select the **User Tag** filter.

Input the `"key"` and `"value"` set in HubSpot and click **Create Segment**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d54026-Screen_Shot_2021-09-28_at_4.30.55_PM.png",
        "Screen Shot 2021-09-28 at 4.30.55 PM.png",
        1334,
        786,
        "#eef0f2"
      ]
    }
  ]
}
[/block]
Navigate to **Messages > In-App** and select **New In-App**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0b72d27-Screen_Shot_2021-10-06_at_11.40.22_AM.png",
        "Screen Shot 2021-10-06 at 11.40.22 AM.png",
        1788,
        330,
        "#b7bec4"
      ]
    }
  ]
}
[/block]
Name your new IAM so you can identify it in the dashboard.

Under "1. Audience" select **Show to Particular Segment(s)** and select your newly created segment.

As users go through the HubSpot workflow, they will get tagged which will put them immediately into this segment. **Note**: getting a tag does not trigger the IAM. More details below in Trigger Options.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68a9cf6-Screen_Shot_2021-10-06_at_11.41.43_AM.png",
        "Screen Shot 2021-10-06 at 11.41.43 AM.png",
        1788,
        1032,
        "#e6e8ea"
      ]
    }
  ]
}
[/block]
For "2. Message" follow the <a href="https://documentation.onesignal.com/docs/sending-in-app-messages" target="_blank">Sending In-App Messages Guide</a> for details on creating your In-App Message.

###Trigger Options

In-App Messages need to be triggered to show on the device. Triggers can be time-based or programmatic. **Note**: a tag is not a trigger. If the tag is added while the device is currently using the app, the IAM will not display. The In-App Message will show the next time the user returns to your app in a new session. New sessions are counted upon the app being out-of-focus for 30 seconds.

Under "3. Triggers" you can set the IAM to display based on the following triggers:
- On App Open
- Session Duration > or < a set number of seconds
- Duration since another IAM was shown
- Programmatically with the OneSignal SDK

Triggers can be combined with "AND" operators and separated into multiple options with "OR" operators.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7853be2-Screen_Shot_2021-10-06_at_11.58.09_AM.png",
        "Screen Shot 2021-10-06 at 11.58.09 AM.png",
        1750,
        476,
        "#f8f9f9"
      ],
      "caption": ""
    }
  ]
}
[/block]
See <a href="https://documentation.onesignal.com/docs/iam-triggers" target="_blank">How to trigger an IAM</a> guide for more details.

#Step 4. Workflow History

Navigate to your HubSpot Workflows and within the desired Workflow select the **History** tab.
Here you will be able to see which contacts were sent notifications and updated tags.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1147e94-Screen_Shot_2021-09-29_at_7.37.39_PM.png",
        "Screen Shot 2021-09-29 at 7.37.39 PM.png",
        3754,
        2256,
        "#dadbdd"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
#FAQ
##What data is shared between HubSpot and OneSignal?
[block:parameters]
{
  "data": {
    "h-0": "HubSpot",
    "h-1": "Direction",
    "h-2": "OneSignal App",
    "h-3": "Description",
    "0-0": "Contacts",
    "1-0": "Events",
    "2-0": "Workflows",
    "0-1": "➡️",
    "1-1": "⬅️",
    "2-1": "⬅️",
    "0-2": "Users",
    "1-2": "Message",
    "2-2": "Notification Templates",
    "0-3": "HubSpot Contact email addresses are used to match OneSignal Users / Devices",
    "1-3": "OneSignal notifications are logged on Contact Activity Timeline and available for List segmentation in HubSpot",
    "2-3": "OneSignal Notification Templates are available for selection in HubSpot Workflows"
  },
  "cols": 4,
  "rows": 3
}
[/block]

### Additional Details
Please check [HubSpot](https://knowledge.hubspot.com/integrations/use-hubspots-integration-with-onesignal) for more information.