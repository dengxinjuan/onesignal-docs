---
title: "Chrome Extension SDK Setup"
slug: "chrome-extension-sdk-setup"
excerpt: "Instructions for adding the OneSignal Chrome App SDK to your Chrome Extension"
hidden: false
createdAt: "2016-09-22T05:44:28.475Z"
updatedAt: "2020-05-21T04:45:42.430Z"
---
### Required For Setup

* [A OneSignal Account](https://onesignal.com) if you do not already have one
* Your OneSignal App ID, available in Settings > Keys & IDs in the OneSignal dashboard
* A Google Server API Key. See [Generating a Google Server API Key](doc:generate-a-google-server-api-key) for details

### 1. Import OneSignal

**1.1** Download the latest [OneSignal Chrome App SDK](https://github.com/one-signal/OneSignal-ChromeApp-SDK/releases).

**1.2** Copy `OneSignal.js` to your App/Extension project folder.

**1.3** Continue to **2A** if you have a Chrome App.
  Or continue to **2B** if you have a Chrome Extension.

### 2A. Add OneSignal to a Chrome App

**2A.1** Open your `manifest.json` and add `OneSignal.js` before you own background.js.
[block:code]
{
  "codes": [
    {
      "code": "\"app\": {\n    \"background\": {\n      \"scripts\": [\"OneSignal.js\", \"background.js\"]\n    }\n  },",
      "language": "json"
    }
  ]
}
[/block]
**Background HTML Page**

If your `manifest.json` contains a background `page` instead of `scripts`, then add `OneSignal.js` to your background HTML page before your own `background.js`.

**2A.2** In your `manifest.json` add the following 5 permissions to your permissions array.
[block:code]
{
  "codes": [
    {
      "code": "\"permissions\": [\"gcm\", \"storage\", \"notifications\", \"identity\", \"browser\"],",
      "language": "json"
    }
  ]
}
[/block]
**2A.3** Continue to step 3.

### 2B. Add OneSignal to a Chrome Extension

**2B.1** Open your `manifest.json` and add `OneSignal.js` before you own `background.js`.
*Create new blank `background.js` file if you don't have a background script already.*
[block:code]
{
  "codes": [
    {
      "code": "\"background\": {\n  \"persistent\": false,\n  \"scripts\": [\"OneSignal.js\", \"background.js\"]\n},",
      "language": "json"
    }
  ]
}
[/block]
**2B.2** In your `manifest.json`, add the following permissions to your permissions array:
[block:code]
{
  "codes": [
    {
      "code": "\"permissions\": [\"gcm\", \"storage\", \"notifications\", \"identity\"],",
      "language": "json"
    }
  ]
}
[/block]
**Permission Warnings**

Adding some of these permissions, if they were not already present, may require users to re-allow your extension after an update. The list of new permissions that may cause this is available [here](https://developer.chrome.com/extensions/permission_warnings).

Note that in Chrome 50, there is a bug that causes the "notifications" permission to cause this warning. You can find our more about this bug [here](https://bugs.chromium.org/p/chromium/issues/detail?id=603822&q=component%3APlatform%3EExtensions%20permission&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified).

### 3. Add Required Code

**3.1** Open your `background.js` file and add the following line outside of any function so it runs when your app/extension is loaded.

Replace `appId` with your OneSignal App Id, and `googleProjectNumber` with your own as well.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.init({appId: \"b2f7f966-d8cc-11e4-bed1-df8f05be55ba\",\n                googleProjectNumber: \"703322744261\"});",
      "language": "javascript"
    }
  ]
}
[/block]
**Done! **You should be all set to go with your Chrome App or Extension app.