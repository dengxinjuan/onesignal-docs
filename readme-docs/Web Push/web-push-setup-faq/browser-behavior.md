---
title: "Browser Behavior Questions"
slug: "browser-behavior"
excerpt: "Understanding how browsers handle web push notifications"
hidden: false
createdAt: "2019-05-28T19:57:19.436Z"
updatedAt: "2020-06-30T17:39:07.138Z"
---
## What happens when users clear their browser cache and cookies?

Browsers have implemented the Web Push Standard in a way that when users clear their browser cookies and cache, they get unsubscribed from notifications. This is because subscribed user data is stored in the browser's IndexedDB storage. Removing that data makes the browser "forget" that subscriber.

However, clearing this data does not remove the **permissions** that have already been granted by the user to receive notifications in that browser.

If you are using an HTTPS site and *did not* select "My site is not fully https" in your OneSignal dashboard settings, then you can automatically re-subscribe users that return to your site after they clear their browser cache and cookies  by making sure **Auto Resubscribe** is turned on in the configuration. If you are using a Custom Code setup, also make sure that `autoRegister` is not in the `init` call. 

However, users will not be auto-resubscribed if they change their Browser's Notification Permissions to "Ask" or "Block":
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82c7a5b-Screen_Shot_2019-11-21_at_2.42.50_PM.png",
        "Screen Shot 2019-11-21 at 2.42.50 PM.png",
        321,
        340,
        "#f2f2f3"
      ]
    }
  ]
}
[/block]
Users will also not be auto-resubscribed if they clear notifications from the Browser's Notification Settings:

- Chrome: chrome://settings/content/notifications
- Firefox: about:preferences#privacy > Permissions > Notifications
- Safari: Preferences > Websites > Notifications > Remove

When users get resubscribed, they will get a new OneSignal Player ID record. You can find your Player ID in the Console using `await OneSignal.getUserId();`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a872bdf-Screen_Shot_2020-06-17_at_9.35.33_AM.png",
        "Screen Shot 2020-06-17 at 9.35.33 AM.png",
        472,
        121,
        "#f1f0f0"
      ]
    }
  ]
}
[/block]
See other ways users can [Unsubscribe from Notifications](doc:unsubscribe-from-notifications).

---

## How do I test that "auto-resubscribe" is working?

On your site, subscribe to receive notifications.

You can open up your browser's developer console and type:

`await OneSignal.getUserId();` - This will log your OneSignal Player ID.

You can also send yourself a notification from the console using:

`OneSignal.sendSelfNotification();` - This will send a notification to yourself.

If you are successfully subscribed and did not get the notification, see [Notifications Not Shown](doc:notifications-show-successful-but-are-not-being-shown).

If you are not successfully subscribed, see [Troubleshooting Web Push](doc:troubleshooting-web-push).

In the browser settings, you can clear your browser history, or: 

1. Select the Lock button on your site next to the URL
2. Select Cookies
3. Select your site
4. Click "Remove"
5. Click "Done"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0dbc681-Screen_Shot_2019-06-06_at_1.01.34_PM.png",
        "Screen Shot 2019-06-06 at 1.01.34 PM.png",
        954,
        677,
        "#f7f6f6"
      ]
    }
  ]
}
[/block]
Refresh the page. You will not be prompted to resubscribe.

Open the browser console and input:

`await OneSignal.getUserUserId();` - This will be create a new OneSignal Player ID for you.

`OneSignal.sendSelfNotification();` - This will send a notification to yourself.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3488646-Screen_Shot_2019-06-06_at_1.07.16_PM.png",
        "Screen Shot 2019-06-06 at 1.07.16 PM.png",
        1276,
        1092,
        "#eae9eb"
      ]
    }
  ]
}
[/block]
You have successfully resubscribed to your site after clearing your browser cache.

----

## Can users receive notifications even when the browser is closed?

Browsers behave differently across platforms. Please refer to the table below for support for receiving notifications even when the browser is closed.
[block:parameters]
{
  "data": {
    "h-1": "Android",
    "h-2": "Windows",
    "h-3": "macOS",
    "0-0": "Chrome / Chromium",
    "0-1": "Yes",
    "0-2": "Yes",
    "1-0": "Firefox",
    "1-1": "Yes",
    "1-2": "Yes",
    "1-3": "No",
    "0-3": "No",
    "2-0": "Safari",
    "2-1": "N/A",
    "2-2": "N/A",
    "2-3": "Yes",
    "3-0": "Opera",
    "3-1": "Yes",
    "3-2": "Yes",
    "3-3": "No",
    "4-0": "Edge",
    "4-1": "Yes",
    "4-3": "No",
    "4-2": "Yes",
    "h-0": "Browser Name"
  },
  "cols": 4,
  "rows": 5
}
[/block]
**Chrome** - Chrome runs as a background process by default even when all the windows are closed. As long as the background process is running, notifications will still be received. If the Chrome background process is not running, notifications will not be received.

**Firefox** - On Mac OS X, the process still exists even if windows are closed, and a notification can be received if all windows are closed (as long as there is still a dot in the dock showing Firefox is still running). On Windows, the process exits after all windows are closed so notifications cannot be received unless a Firefox window is still open.

**Safari** - Safari does not have to be running to receive notifications, as they are sent directly to the operating system. The user still has to sign up for Safari web notifications, but after that they will be received even when Safari is completely closed.

Users have up to 3 days to retrieve the last known missing notification before messages expire permanently. 

For example, suppose a user was supposed to receive a Firefox web push notification, but Firefox was closed. If the user opens Firefox within 3 days, the user will receive only the last known web push notification that didn't expire. If the user opens Firefox after 3 days, the web push notification sent more than 3 days ago will not be received.