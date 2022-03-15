---
title: "Web Push Troubleshooting"
slug: "troubleshooting-web-push"
excerpt: "Common setup issues with Web Push (Chrome, Firefox, Safari, etc.)"
hidden: false
createdAt: "2016-09-20T08:16:42.477Z"
updatedAt: "2021-09-07T01:04:29.774Z"
---
If you are subscribed (device within **Audience > All Users**) but cannot see notifications, use the <a href="https://documentation.onesignal.com/docs/notifications-not-shown-web-push" target="_blank">Notifications Not Shown Guide</a>.

If you are not subscribed, please make sure you followed each step of the [Web Push Quickstart](doc:web-push-quickstart) or [WordPress Setup](doc:wordpress) before continuing below.

OneSignal prints helpful error messages in your browser's **Developer Tools Console** when viewing your site with the OneSignal code active. Follow these steps to open the Chrome Developer Tools Console and check for errors on the site:

1. Open the browser's **Developer Tools Console** with is F12, or right-click the browser and press "Inspect", or go to "View > Developer > JavaScript Console".
2. Make sure you are on your website with the OneSignal code enabled.
3. Subscribe to your website if you have not done so already and check for the following errors:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a3b7b2-Screen_Shot_2021-05-17_at_8.02.29_PM.png",
        "Screen Shot 2021-05-17 at 8.02.29 PM.png",
        1696,
        690,
        "#606262"
      ]
    }
  ]
}
[/block]
# Error Messages

#### 403 or 404 Service Worker Installation Errors

There is a common error thrown when trying to connect with the OneSignal Service Worker files. More details on how to fix this see: [403 or 404 Service Worker Installation Errors](#403--404-service-worker-errors).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fda1192-Screen_Shot_2020-02-15_at_2.07.09_PM.png",
        "Screen Shot 2020-02-15 at 2.07.09 PM.png",
        2638,
        306,
        "#f0e2e3"
      ]
    }
  ]
}
[/block]
#### Web Push Config can only be used on "correct site origin"

Your current site origin does not match your settings in the OneSignal Dashboard. See [Incorrect Site Url Error](#incorrect-site-url).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9853e90-Screen_Shot_2020-02-01_at_10.25.47_PM.png",
        "Screen Shot 2020-02-01 at 10.25.47 PM.png",
        3360,
        158,
        "#f6e0df"
      ]
    }
  ]
}
[/block]
#### OneSignal is already defined

The OneSignal web SDK can only be initialized once. You added the OneSignal init code twice, usually if you have our WordPress plugin and added code directly. See [OneSignal Initialized Twice](https://documentation.onesignal.com/docs/troubleshooting-wordpress-web-push#onesignal-wordpress-plugin-setup).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/325e2dc-Screen_Shot_2020-02-15_at_2.20.01_PM.png",
        "Screen Shot 2020-02-15 at 2.20.01 PM.png",
        2632,
        514,
        "#f0e2dd"
      ]
    }
  ]
}
[/block]
#### Redirects are not allowed

The OneSignal Service Worker files are being redirected but should be in the root directory and accessible. See [CDN and Redirects](#cdn-issues-or-redirects).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ed3985-Screen_Shot_2020-02-19_at_7.12.05_PM.png",
        "Screen Shot 2020-02-19 at 7.12.05 PM.png",
        1643,
        74,
        "#f9e6e4"
      ]
    }
  ]
}
[/block]
#### Unsupported MIME type Error

The OneSignal Service worker files `OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js` must be transferred with the MIME content-type `application/javascript`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f4215e3-Screen_Shot_2020-02-18_at_5.00.49_PM.png",
        "Screen Shot 2020-02-18 at 5.00.49 PM.png",
        2594,
        136,
        "#f3e0df"
      ]
    }
  ]
}
[/block]
#### Cannot read property 'pushNotification' of undefined

This error only comes up when selecting the iPad or iPhone view in Chrome's dev tools which mocks the `navigator.userAgent` string to an iOS device, however it does not mock `window.safari` so this error occurs in that testing environment. 

On a real iOS device in either the Chrome or Safari browser this error does not occur. No javascript errors come up on a real iOS device.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/53c6b4e-Screen_Shot_2020-11-16_at_9.49.16_AM.png",
        "Screen Shot 2020-11-16 at 9.49.16 AM.png",
        645,
        144,
        "#f7e3e1"
      ]
    }
  ]
}
[/block]
----

# 403 & 404 Service Worker Errors

After you try subscribing to your site, if you see a **403 or 404** error in your Browser Console and/or in your onesignal.com Dashboard > Audience > All Users page, that means something is blocking the OneSignal Service Worker files from being publicly accessible.

These files must be spelled with the upper case letters and not redirects. You should be able to visit these pages without any errors.

If you followed the Typical Setup or Custom Code Setup (HTTPS sites that do not use the OneSignal Plugin) should be able to view them at:

- `https://yoursite.com/OneSignalSDKWorker.js`
- `https://yoursite.com/OneSignalSDKUpdaterWorker.js`

If you use OneSignal WordPress Plugin should be able to view them at:

- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js.php`
- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js.php`

Please make sure you added these files correctly by following our <a href="doc:onesignal-service-worker-faq" target="_blank">Service Worker Setup</a>.

If still having issues, common reasons for these being being inaccessible:

## CDN Issues or Redirects

Make sure `OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js` are being served from the same top-level domain of your site. It cannot be served by a CDN or a redirect or a domain other than the domain the visitor is currently on. See the <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank">Same Origin Policy Guide</a> for more details on this browser restriction.

WordPress Plugin Users see [common CDN and Cacheing Plugins](https://documentation.onesignal.com/docs/troubleshooting-wordpress-web-push#wordpress-cdn--cache-plugin-support) to fix this.

Non-WordPress users see our [OneSignal Service Worker FAQ](doc:onesignal-service-worker-faq) if you cannot add the files to the root directory.

## PWA or Multiple Service Workers

If you are integrating OneSignal into a site with an existing service worker (like a PWA), you may have to merge service workers in order for OneSignal to work correctly. See [OneSignal Service Worker FAQ](doc:onesignal-service-worker-faq) for more details.

#### How do I check if my OneSignal service-worker is configured correctly?
In your browser's development tools, go to the Service Workers section (under "Application" tab in Chrome) and look for "OneSignalSDKWorker.js" as the source for the service-worker for your domain. [Detailed Steps to Reproduce](#debugging-not-receiving-chrome-notifications).

If you do not see the OneSignal service worker there, you have not configured OneSignal correctly. 

If you only see a different service-worker on your site, it may be causing a conflict with OneSignal's service-worker. Try [merging the service-workers](https://documentation.onesignal.com/docs/onesignal-service-worker-faq) to resolve the issue.

----

# Incorrect Site URL

Make sure your site url is correct.

- **www** and **non-www** are different. Set site url in OneSignal based on the version you want to use.
- **HTTP** and **HTTPS** are also very different. More details in [Web Push HTTP vs. HTTPS](doc:web-push-http-vs-https)
- **Ignore Subdirectories** having a subdirectory like `/blog` does not affect this and can be ignored for setup purposes.

HTTP sites must add a **Label** that is 4 letters or more.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae5d7a7-c8d0ff9-Screen_Shot_2020-02-01_at_2.29.30_PM.png",
        "c8d0ff9-Screen_Shot_2020-02-01_at_2.29.30_PM.png",
        1608,
        762,
        "#e9e9e9"
      ]
    }
  ]
}
[/block]
**WordPress** users with **HTTP** sites, make sure your **Label** matches the plugin **OneSignal Label**. Do not add `os.tc` to the OneSignal Label field. Press "Save" at the bottom of the plugin if you updated this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6698e1-8ff51c0-Screen_Shot_2020-02-01_at_2.30.57_PM.png",
        "8ff51c0-Screen_Shot_2020-02-01_at_2.30.57_PM.png",
        866,
        600,
        "#faf7f7"
      ]
    }
  ]
}
[/block]
----

# Wrong Browser, Viewing Mode, or Browser Version

1. Make sure you are testing with the latest version of Chrome or Firefox. 
2. **Do not use incognito mode, private browser mode or guest browser mode or Firefox's ESR versions. Subscription to push does not work in these modes.**
3. Apple currently still does not support Web Push Notifications on iOS mobile devices like iPhones and iPads. Currently iPhones and iPads can only get notifications from mobile apps, not from websites.
4. Supported browsers can be viewed in the [Web Push Overview](doc:web-push-overview).

----
# My site isn't working on my mobile phone

**iOS** - Apple currently still does not support Web Push Notifications on iOS mobile devices like iPhones and iPads. For more information, please [read our Blog Post](https://onesignal.com/blog/updated-ios-web-push-predictions/).

**Android** - Web push works automatically on android mobile devices using a supported browser. 

1 - First [make sure your site works on Desktop](doc:troubleshooting-web-push) before testing on mobile.

2 - You may be subscribed on android web already, but our dashboard does not differentiate mobile web subscribers from desktop web subscribers.

An android web subscriber shows as `Linux armv8l` in the Device column of the "All Users" page.

3 - Check if Notifications are enabled on Chrome in your Android Settings > Application Manager > Chrome. Make sure "Show notifications" is checked like this: https://i.imgur.com/LY810Mj.png on Firefox it will be the same: https://i.imgur.com/a3lB88b.png

4 - Clear your Chrome Cache. If your browser cache is full on mobile, this may not allow further prompting or subscription. See <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">Clearing your cache and resetting push permissions</a> based on your browser to test your site again.

5 - Some users reported that uninstalling Chrome and re-installing it on the mobile device fixed an issue where subscription on the prompt would not work.

----
## Safari Troubleshooting

1 - Apple currently still does not support Web Push Notifications on iOS mobile devices like iPhones and iPads. For more information, please [read our Blog Post](https://onesignal.com/blog/updated-ios-web-push-predictions/).

2 - The icon you uploaded on the OneSignal Dashboard > App Settings > Safari Configuration MUST to be exactly `256X256`.

3 - The Site URL set in the Safari Config must be exactly what you see when visiting the site. For example, if you see `https://www.yoursite.com` in the browser, then you must add this to the setup field. www and non-www sites are different origins.

4 - Safari 12.1 created a new rule that [users must perform some action on the site before they can get prompted](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes)

You must use the [Slide Prompt](doc:slide-prompt) on Safari. This is why the slide prompt always shows before native if you use our [Typical Setup](doc:web-push-quickstart).

If you want to use only the native browser prompt, you will need to setup your own trigger to detect a user action. Then call `OneSignal.showNativePrompt();` when you want to show the native prompt. Otherwise, please use the `OneSignal.showSlidedownPrompt();` if you are having issues.

5 - Finally, try <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">Clearing your cache and resetting push permissions</a> to see your site as a first time user and try to subscribe again.

## Safari Icons Or Site Name Not Changing

Due to Safari's custom web push implementation, your site name and icon image are treated as static resources downloaded and stored locally on the user's computer. New site names and new images are not updated or downloaded.

Unfortunately anyone subscribed with these older resources will need to <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">clear your cache and resetting push permissions</a> and return to the site to resubscribe.

----

#Clearing your cache and resetting push permissions

See <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">Clearing your cache and resetting push permissions</a> for more details.

----

## Debugging using Browser Developer Tools

The browser's developer tools can be used to interact with the web SDK on your webpage and enable logging or easily send test notifications to yourself.

### 1. Access the Browser Developer Tools Console
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/M6r7mvTPT7W1USDDy5Wz_console.png",
        "console.png",
        "1510",
        "598",
        "#dd6861",
        ""
      ],
      "border": true
    }
  ]
}
[/block]
#### Desktop Debugging

**Chrome** - Right click on the page, click *Inspect*, and click the *Console* tab of the popup window that opens up.

**Firefox** - Right click on the page, click *Inspect element*, and click the *Console* tab of the popup window that opens up.

**Safari** - Go to **Safari -> Preferences -> Advanced** and make sure *Show Develop menu in menu bar* is checked. Then, on your webpage, right click, click *Inspect element*, and click the *Console* tab of the popup window that opens up.

#### Android Debugging

**Chrome on Android** -  [Enable USB Debugging](https://developer.chrome.com/docs/devtools/remote-debugging/), connect your device into your computer and access the Dev Tools with `chrome://inspect#devices` in your Desktop Chrome browser. 

**Firefox on Android** - [Enable USB Debugging(https://developer.mozilla.org/en-US/docs/Tools/about:debugging), connect your device into your computer and access the Dev Tools with `about:debugging` in your Desktop Firefox browser.

### 2. Enable web SDK logging

You should be able to run commands in the developer tools Console now.

Execute the following code:

`OneSignal.log.setLevel('trace');`

You should see `undefined` as the result.

If you see:

`Uncaught ReferenceError: OneSignal is not defined(…)` or `ReferenceError: OneSignal is not defined`, then OneSignal is not active on your webpage, or you need to switch to the `top` frame context (see above screenshot at the beginning of this section).

Now that our web SDK's debug logging is enabled, please close the tab and open a new tab to the same page (refreshing the page is not enough to trigger some of our SDK events). You should see a lot of output in the Console.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/PTU11ly5R0quyNQDYeb8_consoleLog1.png",
        "consoleLog1.png",
        "2880",
        "1214",
        "#3e4191",
        ""
      ]
    }
  ]
}
[/block]
You can always disable this additional logging by entering this code:

`OneSignal.log.setLevel('warn');`

### 3. Check if you are subscribed

Run in the Console:

```
function isPushNotificationsEnabledVerbose() {
    console.log('isPushNotificationsEnabledVerbose()');
    Promise.all([
            OneSignal.isPushNotificationsEnabled(),
            OneSignal.getUserId(),
            OneSignal.getRegistrationId(),
            OneSignal.getNotificationPermission(),
            OneSignal.isOptedOut(),
            OneSignal.context.serviceWorkerManager.getActiveState()
        ])
        .then(([isSubscribed, userId, registrationId, notificationPermission, optedOut, serviceWorkerActive]) => {
            console.log('Is Completely Subscribed:', isSubscribed);
            console.log('');
            console.log('What is our OneSignal user ID?', userId);
            console.log('What is our push subscription token?', registrationId);
            console.log('What is the notification permission status?', notificationPermission);
            console.log('Are you manually opted out?', optedOut);
            console.log("Is a service worker registered and active? (should be false on Safari, otherwise should be 'Worker A (Main)')?", serviceWorkerActive);
            console.log('What is the current URL of this page?', location.href);
            console.log("What environment does OneSignal think it's in?", OneSignal.sdkEnvironment.getWindowEnv());
        })
        .catch(e => {
            console.error("Issue determining whether push is enabled:", e);
        });
}
isPushNotificationsEnabledVerbose();
```

Depending on whether you are subscribed, you should see:

```
Is Completely Subscribed: true

What is our OneSignal user ID? b7b14773-e053-44b6-8eee-1a8fe58c53ba
What is our push subscription token? fwJQA8TYCTk:APA91bFbQyYR9kVvgmxHGV7fKr7sktzh4v2fEXad2KRlqq_zupfUexqbPscpcQ4Iru3IAOQ9sIrrt1TtlUySK1Jy2Vg7lzwpGHCRLBqa-er2cuQ6T79AG9l4MWKrwTfehWcBTDj_BdGD
What is the notification permission status? granted
Are you manually opted out? false
Is a service worker registered and active? true
What is the current URL of this page? https://example.com
What environment does OneSignal think it's in? host
```

### 4. Send yourself a test notification

*Only if you are subscribed* (see above section), you can send yourself a test notification. This notification *will only go to you* and your other users will not receive this notification. In the console, run:

`OneSignal.sendSelfNotification()`

You should see something similar to `Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}`, and you should receive a web push notification shortly after. Make sure you aren't using Private Browsing Mode / Incognito mode on Chrome or Chrome's full screen mode as this can hide and disable notifications.

## Debugging not receiving Chrome notifications

**Note:** Please complete these steps in order.

1.  Please follow steps 1 - 4 in the above section [Debugging using Browser Developer Tools](#debugging-using-browser-developer-tools) to try receiving a test notification.

    - For step #3, are you subscribed? If not, stop here, <a href="https://documentation.onesignal.com/docs/clearing-cache-and-resetting-push-permissions" target="_blank">completely clear your site data following these specific instructions</a>, and then re-subscribe to your site in order to receive notifications. Run step #3 again after to verify you're actually subscribed. When following the clear site data instructions, please do remember to close all tabs to your site or restart your browser, since Chrome prevents the site's storage from being accessed until all existing tabs to your site are closed.
    
    - For step #4, do you receive a test notification? If you do, you're done!

2. If you're subscribed but you did not receive a test notification, please visit your OneSignal dashboard Delivery Page to view if the test notifications you've sent yourself shows at the top.

3. If you're subscribed, did not receive a test notification, but you see the message has been delivered (colored green), please open Chrome to `chrome://gcm-internals`. 

Click the "Start Recording" button on the top left. Making sure you see "Connection State: CONNECTED". 

Leave this open and send yourself a push (follow step #4 above to send yourself a test notification).

You should see something in the "Receive Message Log" if you got it. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/673521f-image.png",
        "image.png",
        1104,
        1166,
        "#f2eedf"
      ]
    }
  ]
}
[/block]

- If you don't see a "Data msg received", then your Chrome browser is not receiving the notification at all. Please let us know on support about this.

- If you see "Data msg received" but you still didn't receive a notification, proceed to step #4.

4. Visit `chrome://serviceworker-internals`

Search for `Scope: https://your-site.com`. If you selected *My Site is Not Fully HTTPS* and chose a label for your site, search for `Scope: https://mylabel.os.tc` where `mylabel` is the label you chose for your site.

Click *Inspect*, or *Start -> Inspect*, like below. A Chrome Developer Tools popup will appear.

<p><img src="https://i.imgur.com/krYNyip.png"></p>

5. On the Chrome Developer Tools popup to our service worker, click the *Console* tab, and run `OneSignalWorker.log.setLevel('trace');`. It should return `undefined`. Any messages from our service worker should now appear in this pop

6. Switch away from the worker's Dev Tools popup, and back to your main page's Developer Tools console (where you followed step 2). Please send yourself another test notification. You should a lot of output here with an error since you did not see the notification. Please on support about this error. You can right click on the Console -> Save as ... and copy the file contents to our chat support.