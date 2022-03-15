---
title: "Clearing Cache and Resetting Push Permissions"
slug: "clearing-cache-and-resetting-push-permissions"
excerpt: "Reset browser push permissions and data"
hidden: false
createdAt: "2021-09-07T00:59:39.733Z"
updatedAt: "2021-09-07T00:59:39.733Z"
---
Even if your settings are configured correctly, if you had previously used incorrect settings, push notifications may not work due to invalid permission or background worker states. These steps will reset your site's notification permissions, clear your site's storage, and remove our background worker.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c0f121c-026c137-prompt-example.gif",
        "026c137-prompt-example.gif",
        552,
        338,
        "#8baba0"
      ]
    }
  ]
}
[/block]
#Reset Chrome on Desktop

1. Click the "lock icon" next to your URL in the Chrome browser.
2. Next to "Notifications" permission dropdown, select "Ask (default)" (if you do not see this skip to step 3).
3. Click Cookies to open the browser's "Cookies in use" page.
4. Find and select your site (if you do not see your site, skip to step 8).
5. Click Remove.
6. Click Done.
7. You should see a dropdown prompt to "Reload the page". Click the **Reload** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/44f5866-Screen_Shot_2020-02-15_at_1.48.17_PM.png",
        "Screen Shot 2020-02-15 at 1.48.17 PM.png",
        1588,
        1074,
        "#f0f0f2"
      ]
    }
  ]
}
[/block]
If you have immediate [Prompting](doc:permission-requests) setup, you should now see a prompt on your site. **Do not attempt to subscribe to your site yet.**
8. If you are using a label like `yourlabel.os.tc` you will need to follow the above steps again for this `os.tc` site.

**Optional:** Visit [chrome://serviceworker-internals/](chrome://serviceworker-internals/) in a new tab and press the 'Stop' and 'Unregister' buttons under any Scopes that contain `yoursite.domain` or `yourlabel.os.tc`. If they won't remove, make sure all tabs or windows pointing to either domain are closed. <img src="https://files.readme.io/66CdwknESjeKzX6E2Iim_chrome-reset-4.jpg"/>

[block:callout]
{
  "type": "success",
  "body": "Open a *new* tab to your site and try it out!",
  "title": "Done!"
}
[/block]
#Reset Chrome on Android

If you still have a notification *from your site* visible in your notification drawer: 

<ol><li><p>Click the gear icon and 'Site Settings'.</p>
<p><img src="https://files.readme.io/MDW3i3T4iktcqQ4APO2w_android-reset-1.jpg" style="max-width:500px;"></p></li><li><p>Click 'Clear & Reset'.</p>
<p><img src="https://files.readme.io/ze8bkPtQKuCY1Ge7fpoW_android-reset-2.jpg" style="max-width:500px"/></p></li></ol>

If you do not have a notification open, open Chrome on Android, tap the 3-dot menu, Settings, Site settings (under Advanced), Notifications, make sure it's set to *"Ask before sending (recommended)"*. Find your site on the list, click the entry, and click Clear and Reset.
[block:callout]
{
  "type": "success",
  "body": "Open a *new* tab to your site and try it out!",
  "title": "Done!"
}
[/block]
#Reset Firefox on Desktop

[block:callout]
{
  "type": "warning",
  "body": "If you have selected *My Site is Not Fully HTTPS* and have chosen a label for your site (e.g. `mylabel.os.tc`), you will need to follow these steps for your label's URL (e.g. `mylabel.os.tc`), not for your site's normal URL."
}
[/block]

1. Click the "i" or "lock" icon next to your site URL.
2. Next to *Receive Notifications* under **Permissions** select the "X" button next to *Allowed*
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/051cb63-Screen_Shot_2018-12-05_at_11.29.42_AM.png",
        "Screen Shot 2018-12-05 at 11.29.42 AM.png",
        690,
        369,
        "#a2a4a6"
      ]
    }
  ]
}
[/block]
3. On the same dialog, at the bottom select **Clear Cookies and Site Data...**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed69259-Screen_Shot_2018-12-05_at_11.30.14_AM.png",
        "Screen Shot 2018-12-05 at 11.30.14 AM.png",
        417,
        341,
        "#d6d2d2"
      ]
    }
  ]
}
[/block]
4. On the popup dialog that opens, click "OK"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fa754a-Screen_Shot_2018-12-05_at_11.30.22_AM.png",
        "Screen Shot 2018-12-05 at 11.30.22 AM.png",
        522,
        402,
        "#dadee0"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "HTTP or HTTPS sites with os.tc subdomain",
  "body": "Repeat the above process on the subdomain with os.tc"
}
[/block]
#Reset Firefox on Android

[Please follow this Firefox guide to clear all your browser data.](https://support.mozilla.org/en-US/kb/clear-your-browsing-history-and-other-personal-data#w_clear-specific-items-from-your-browser)

#Reset Safari on macOS

Apple does not support Web Push on iOS (iPhone and iPad) or Safari on Windows.

On the top menu bar, go to:
1. Safari > 2. Preferences > 3. Websites > 4. Notifications > 5. Select your site > 6. Click **Remove** to delete Notification Permissions f rom your site's entry.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a4137c0-Screen_Shot_2020-09-13_at_8.19.01_AM.png",
        "Screen Shot 2020-09-13 at 8.19.01 AM.png",
        1051,
        642,
        "#363841"
      ]
    }
  ]
}
[/block]
Then select 7. Privacy > 8. Manage Website Data...

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fef91d-Screen_Shot_2020-09-13_at_8.26.08_AM.png",
        "Screen Shot 2020-09-13 at 8.26.08 AM.png",
        886,
        373,
        "#36363a"
      ]
    }
  ]
}
[/block]
9. Find and select your site > 10. Click **Remove** or **Remove All** (Remove All clears all site data).
11. Click Done
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7a5f26-Screen_Shot_2020-09-13_at_8.27.42_AM.png",
        "Screen Shot 2020-09-13 at 8.27.42 AM.png",
        886,
        563,
        "#2c2d37"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Return to your site and refresh the page, you should now access it like a first time visitor.",
  "title": "Done!"
}
[/block]