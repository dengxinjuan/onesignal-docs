---
title: "Keys & IDs"
slug: "accounts-and-keys"
excerpt: "Details on your OneSignal App Id, REST API Key, User Auth Key management and manually disabling your app."
hidden: false
createdAt: "2016-09-02T02:23:13.100Z"
updatedAt: "2021-08-17T01:20:30.815Z"
---
**Settings > Keys & Ids**

This section contains details on the selected OneSignal App:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/856b6de-Screen_Shot_2021-08-16_at_6.04.12_PM.png",
        "Screen Shot 2021-08-16 at 6.04.12 PM.png",
        1810,
        1318,
        "#ebeced"
      ]
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "0-0": "[OneSignal App Id](#app-id)",
    "h-1": "Details",
    "h-0": "Key",
    "0-1": "Public Key used for initialization and app identification.",
    "1-0": "[Rest API key](#rest-api-key)",
    "1-1": "Private key used for most API calls like sending push notifications and updating users.\n\nUse **Generate New API Key** button for [resetting your Rest API key](#resetting-your-rest-api-key).",
    "3-0": "[Identity Verification](doc:identity-verification)",
    "3-1": "Set this app to require an `authorization hash` for verifying email and external_user_id updates.",
    "0-2": "",
    "h-2": "Details",
    "1-2": "",
    "3-2": "",
    "2-0": "[User Auth Key](#user-auth-key)",
    "2-1": "Another type of REST API key used for viewing Apps and related updates."
  },
  "cols": 2,
  "rows": 4
}
[/block]
# App Id

Your OneSignal App ID or just App ID, is the main identifier we use to differentiate your app from all other OneSignal apps. You will use this in all your SDK initialization codes and API calls. The App ID should not be treated as private.

# REST API Key
[block:callout]
{
  "type": "danger",
  "title": "Do not share this key",
  "body": "Treat your REST API Key as though it is a password - do not add it to your app code or public repositories (e.g. github) and do not share it with anyone."
}
[/block]
Your App Auth Key, which is your REST API key for app-specific operations (getting users of an app, modifying users, getting notifications, sending notifications) listed in the **Keys & IDs** section, add an HTTP header with the key `Authorization` and the value `Basic REST_API_KEY`, where you should replace `REST_API_KEY` with your actual APP REST API key.

## Resetting your REST API Key

Visit **Settings > Keys & IDs** and click **Generate New API Key** to destroy the current REST API key and generate a new one.

# Disabling Your App

You may disable your app to prevent new and scheduled notifications from being delivered. 

You will still receive new subscribers if you disable the app. You must remove or comment out the OneSignal code to stop new subscriptions.

Apps you manually disable can be instantly re-enabled at any time.

----

# User Auth Key

Your User Auth Key which can be found at the top right within **Account & API Keys** manages operations outside of an app (e.g. creating an app). Click on the account dropdown on the top right of your dashboard and scroll down to the User Auth Key section. It is past the section that displays each of your app's auth keys.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc97fc6-Screen_Shot_2019-12-30_at_12.29.47_PM.png",
        "Screen Shot 2019-12-30 at 12.29.47 PM.png",
        1078,
        330,
        "#aca9ae"
      ]
    }
  ]
}
[/block]
## Generate New User Auth Key

If you reset your User Auth Key, you will receive an email letting you know this occurred.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/87b746d-Screen_Shot_2021-08-16_at_6.18.37_PM.png",
        "Screen Shot 2021-08-16 at 6.18.37 PM.png",
        1764,
        710,
        "#f8f5f5"
      ]
    }
  ]
}
[/block]