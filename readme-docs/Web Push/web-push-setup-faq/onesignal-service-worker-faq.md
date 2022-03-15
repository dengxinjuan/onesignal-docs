---
title: "OneSignal Service Worker"
slug: "onesignal-service-worker-faq"
excerpt: "Common questions about the OneSignal Service Worker for Web Push"
hidden: false
createdAt: "2020-01-20T21:34:25.883Z"
updatedAt: "2021-07-21T22:57:10.342Z"
---
# What are Service Workers?

Web Push Notifications for most browsers (not Safari) require [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) files to be available on your domain in order to subscribe and receive web push notifications.

These files generally get downloaded upon accepting web notifications.

---

# How Do I Integrate OneSignal's Service Worker Files?
[block:callout]
{
  "type": "danger",
  "title": "Skip if using WordPress and Shopify Plugins",
  "body": "The OneSignal Service Worker files get added automatically through our plugins, and you should not add these files to your site manually."
}
[/block]
## 1. Download .js files

You can download the files from the OneSignal dashboard or [Download the OneSignal Service Worker Files here](https://github.com/OneSignal/OneSignal-Website-SDK/releases/download/https-integration-files/OneSignal-Web-SDK-HTTPS-Integration-Files.zip).

## 2. Upload .js files to your server

You can place these `.js` files in your site's root or in a subdirectory path you will never link users to.

If you place these files in a subdirectory path, they will not conflict with any other Service Workers you have now or may add in the future.

   - Example subdirectory path: `https://mysite.com/push/onesignal/`

These files should be put in a **permanent** location path that will never change! Once a ServiceWorker is registered with the browser, it is difficult to change.

## 3. How to upload files

If you are unsure how to upload files to your server, some common options:
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Details",
    "0-1": "- Use an FTP Server like FileZilla to upload the files to your root directory.\n- Here is a great [step-by-step guide](http://www.wikihow.com/Use-FTP).",
    "0-0": "FTP",
    "1-0": "Control Panel",
    "1-1": "- Use your hosting provider's control panel like cPanel to upload files.",
    "2-0": "Contact your hosting provider",
    "2-1": "- Most hosting providers will be more than happy to assist you in uploading files to your site.\n- Just send them the zip file above and ask them to unzip it in your site's root directory.",
    "3-0": "What if I can't upload .js files to my domain at all?",
    "3-1": "As long as you can add Javascript to your site, you can always select \"My site is not fully HTTPS\" in the OneSignal Dashboard > Settings > Browser configuration.\nWe will provide you a subdomain to subscribe users under without needing service workers."
  },
  "cols": 2,
  "rows": 4
}
[/block]
## 4. Service Worker Configuration

Almost done, you now need to tell OneSignal where to find these Service Workers.

If you placed them in your site's root, then you are done if they are accessible publicly at both:
- `https://yoursite.com/OneSignalSDKWorker.js`
- `https://yoursite.com/OneSignalSDKUpdaterWorker.js`
Return to your setup.

If you placed them in a subdirectory path, continue following the next section **Customizing Your Service Worker Integreation**.

# Customizing Your Service Worker Integration

**Follow these steps for your specific setup if you need to:**
- Place OneSignal service worker files into a subdirectory
- Rename the files
- Include multiple service workers on an origin

The OneSignal service worker files (`OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js`) must meet these requirements:

- The files must be publicly accessible.
- The files must be served with a `content-type` of `application/javascript; charset=utf-8`.
- The files must point to the same site origin (your site domain). Pointing to a [service worker on a different origin](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Registering_your_worker) is not allowed. 

## SDK Parameter Reference for Service Workers
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Details",
    "0-0": "\"Path to service worker files\"",
    "0-1": "The directory of where the OneSignal service workers file will be available. If the ServiceWorker is available at:\n`https://yoursite.com/js/push/onesignal/serviceworkerfile.js`\nthen the path is:\n\n`/js/push/onesignal/`",
    "1-0": "\"Main service worker filename\"\n&\n\"Updater service worker filename\"",
    "1-1": "The .js filenames containing the OneSignal `importScripts` line. If you did not change the file names, this should be:\n\n`OneSignalSDKWorker.js` and\n`OneSignalSDKUpdaterWorker.js`\n\nIf your server forces files to have lowercase,\nyou can set both filenames to be `onesignalsdkworker.js` and `onesignalsdkupdaterworker.js`.",
    "2-0": "\"Service worker registration scope\"",
    "2-1": "The path on the domain the the service worker has control of.\n\nThis should be a path that you will:\n   - never link users to.\n   - host any pages from now or in the future.\n\nIn almost all cases you should set the to the same as your path, example:\n\n`/js/push/onesignal/`"
  },
  "cols": 2,
  "rows": 3
}
[/block]
## Typical Site Setup - Service Worker Customizations

In the OneSignal dashboard, go to your App's **Settings > All Browsers**

In the Advanced section, toggle the Service Workers switch.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ede0de9-Screen_Shot_2021-03-18_at_8.20.41_AM.png",
        "Screen Shot 2021-03-18 at 8.20.41 AM.png",
        2358,
        1102,
        "#f5f3f0"
      ]
    }
  ]
}
[/block]
## Custom Code Setup - Service Worker Customizations

To set up the service worker files in a subdirectory on [Custom Code Setup](doc:web-push-custom-code-setup), set up your `init` call similar to this:
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n   var OneSignal = window.OneSignal || [];\n    var initConfig = {\n        appId: \"YOUR_APP_ID\",\n        notifyButton: {\n            enable: true\n        },\n    };\n    OneSignal.push(function () {\n        OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };\n        OneSignal.SERVICE_WORKER_PATH = 'push/onesignal/OneSignalSDKWorker.js'\n        OneSignal.SERVICE_WORKER_UPDATER_PATH = 'push/onesignal/OneSignalSDKUpdaterWorker.js'\n        OneSignal.init(initConfig);\n    });\n</script>",
      "language": "html"
    }
  ]
}
[/block]
## WordPress Plugin Setup - Service Worker Customizations

1. In the WordPress Admin go to OneSignal Push Plugin Settings > Advanced Settings and turn on "Disable OneSignal Initialization".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e75a7b8-Screen_Shot_2021-07-06_at_4.00.38_PM.png",
        "Screen Shot 2021-07-06 at 4.00.38 PM.png",
        1846,
        794,
        "#d3d6d7"
      ]
    }
  ]
}
[/block]
2. Add this code to your site to set the scope. If you need help adding code to your site, try [Insert Headers and Footers by WPBeginner Plugin](https://wordpress.org/plugins/insert-headers-and-footers/).

Make sure you have version 2.2.1+ of the OneSignal WordPress Plugin to use this:
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  window.addEventListener('load', function() {\n    window.OneSignal = window.OneSignal || [];\n    window.OneSignal.push(function() {\n      OneSignal.SERVICE_WORKER_UPDATER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js\";\n      OneSignal.SERVICE_WORKER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js\";\n      OneSignal.SERVICE_WORKER_PARAM = { scope: \"/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/\" };\n      delete window._oneSignalInitOptions.path\n      window.OneSignal.init(window._oneSignalInitOptions);\n    });\n  });\n</script>",
      "language": "html"
    }
  ]
}
[/block]
----
# Service Worker Migration Guide
[block:callout]
{
  "type": "info",
  "body": "Follow this guide if you already have a large amount of web push subscribers and you want to change OneSignal's ServiceWorker settings.",
  "title": "Recommended but Not Required"
}
[/block]
OneSignal’s ServiceWorker defaults to a root scope which may create the following issues for your site:

- Conflict with a PWA
- Conflict with an AMP setup
- Conflict with your caching ServiceWorker, or any other ServiceWorker feature that requires root scope
- Your site has security requirements that do not allow third-party ServiceWorker code to run on a scope that controls a pages your users will visit.

If one or more apply to you then please follow the this guide.

## Picking a OneSignal ServiceWorker Scope
It is recommended you pick a Service Worker scope path you will never link a user to, but is still clear what it does. Example: `/push/onesignal/`. This way your PWA, AMP, or any other caching ServiceWorker can control the page a user views to work correctly.

It is ok to put multiple service workers in the same location path, but MUST have unique scope path.

## Option 1. Safely change the OneSignal ServiceWorker Scope
[block:callout]
{
  "type": "info",
  "title": "This section only covers changing the Service Worker Scope!",
  "body": "It is recommend to only change the scope if possible, changing the filename or location path of the Service Worker itself has additional considerations. Pay close attention to both the details of which scenario applies to you as well as each step to ensure you don’t lose subscribers or run into notification display issues"
}
[/block]
### Setup Type 1. Default OneSignal Setup - Scope root “/”  AND default OneSignalSDKWorker.js Contents

Confirm the contents of your `OneSignalSDKWorker.js` file is as follows.
(Without any other non-OneSignal code you may need in it)
[block:code]
{
  "codes": [
    {
      "code": "importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');",
      "language": "javascript",
      "name": "OneSignalSDKWorker.js"
    }
  ]
}
[/block]
In this case you can change the OneSignal scope to anything you choose to make room for another Service Worker to be placed at the root scope. See above [Customizing Your Service Worker Integration](#customizing-your-service-worker-integration).

[block:callout]
{
  "type": "warning",
  "body": "If your `OneSignalSDKWorker.js` is not hosted on root of your domain today, example you do NOT have it hosted like this: `https://mysite.com/OneSignalSDKWorker.js` then you MUST keep hosting it with the `Service-Worker-Allowed` header for an extended period of time. (1 year or more is recommended)\n   - If possible we recommend adding a comment in your backend code or your internal documentation to ensure it doesn’t get accidentally removed.",
  "title": "Keep Service-Worker-Allowed Header"
}
[/block]
### Setup Type 2. Uncommon - Scope root “/”  AND OneSignalSDKWorker.js (or your configured filename) contains OneSignal + other code or importScripts
[block:callout]
{
  "type": "warning",
  "body": "This is less common but you may have already done this by following this OneSignal guide [“Integrating Multiple Service Workers”](#integrating-multiple-service-workers). If this setup still meets all your requirements highly recommend keeping your setup as is due to the complex and two phase roll out required break up the merged ServiceWorker file that handles push events.",
  "title": "Combined ServiceWorker file"
}
[/block]
*This section applies if you have OneSignal AND either some other custom code or `importScript` like the following in in your current Service Worker.*
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal ServiceWorker \nimportScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');\n// And some other site specific code in the same file example.\nimportScripts('https://site.com/my-other-service-worker.js');",
      "language": "javascript"
    }
  ]
}
[/block]
1. Add a code comment to your existing ServiceWorker file above this line  `importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');` to keep it for a extended period of time. (a year or more is recommend, depends on how long you want to keep sending pushes to users who never re-visit your site).
    - Example: `// KEEP Until YYYY-MM-DD: Required for pushes to work correctly for users who have not re-visited to migrate to the new OneSignal specific ServiceWorker.`
2. Create a new `OneSignalSDKWorker.js` under a different directory, such as `/push/onesignal/` with the following single line of code

    - `importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');`

3. Follow the guide on “Customizing Your Service Worker Integration” to change your scope and filename and path.
4. At this point new and returning users will automatically be subscribed to the new OneSignal ServiceWorker.
5. Wait the amount of time (a year or so) as noted in step 1.
6. Follow the OneSignal - “Delete Users” guide to delete users older than the timeline you picked.
7. Lastly finally remove the `importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');` line with the comment from your original root ServiceWorker.


## Option 2. Safely changing the OneSignal ServiceWorker Filename or location

[block:callout]
{
  "type": "danger",
  "body": "It is highly recommend you only change the Scope if it meets all your requirements due to the complex and two phase roll out required move a ServiceWorker file that handles push events.",
  "title": "Not recommend"
}
[/block]
### Setup Type 1. Default OneSignal Setup - Scope root “/”  AND default OneSignalSDKWorker.js Contents

Confirm the contents of your `OneSignalSDKWorker.js` file is as follows.
_(Without any other non-OneSignal code you need in it)_
[block:code]
{
  "codes": [
    {
      "code": "importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');",
      "language": "javascript"
    }
  ]
}
[/block]

1. In your existing `OneSignalSDKWorker.js`  file add a code comment to keep the line for an extended period of time (a year or more is recommend, depends on how long you want to keep sending pushes to users who never re-visit your site).
    - Example: `// KEEP Until YYYY-MM-DD: Required for pushes to work correctly for users who have not re-visited to migrate to the new OneSignal ServiceWorker file located at UPDATE YOUR URL HERE: https://mysite.com/push/onesignal.OneSignalSDKWorker.js.`
2. Create a new `OneSignalSDKWorker.js` under a different directory, such as `/push/onesignal/` with the following single line of code.

    - `importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');`

3.  Follow the guide on “Customizing Your Service Worker Integration” to change your scope and filename and / or path.
4. At this point new and returning users will automatically be subscribed to the new OneSignal ServiceWorker.
5. Wait the amount of time (about a year) as noted in step 1.
6. Follow the OneSignal - “Delete Users” guide to delete users older than the timeline you picked.
7. Lastly finally remove the old ServiceWorker file.

### Setup Type 2. Uncommon - Scope root “/”  AND OneSignalSDKWorker.js (or your configured filename) contains OneSignal + other code or importScripts
See [“Option 1 - Safely change the OneSignal ServiceWorker Scope”](#option-1---safely-change-the-onesignal-serviceworker-scope) above as the steps are the same for this kind of integration.

##  Migrating OneSignal ServiceWorker scope - FAQ
#### Why must I keep hosting the original ServiceWorker file URL if I change the name or location path?
This is required for those users who have not re-visited your site for the new filename to be picked up. The original ServiceWorker file will be fetched by the browser each time you send a push (if past cache expire time, max cache is 24 hours).
You will see a spike in 404 errors returned from your hosting provider when sending a push if the original ServiceWorker file isn’t available. This may result more requests to your server. This also means those users won’t be getting the new OneSignal features and fixes.

----

### Integrating Multiple Service Workers (Deprecated)

[block:callout]
{
  "type": "danger",
  "title": "Deprecated (as of 3/17/2021)",
  "body": "OneSignal's ServiceWorker no longer requires page control. This means you should instead follow the [Customizing Your Service Worker Integration](#customizing-your-service-worker-integration) to change the Scope instead. Or [Migrating OneSignal ServiceWorker](#migrating-onesignal-serviceworker-scope) if you already have 100 or more web push subscribers."
}
[/block]
**Note:** This only applies if your site has another service worker. If you are developing a Polymer site, or a Progressive Web App, you most likely have another service worker.

Our service worker files (`OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js`) overwrite other service workers that are registered with the topmost (site root) service worker scope. 

The solution is to merge all other service worker scripts into the OneSignal service worker scripts using `importScripts()`, and to register the merged service worker instead of the original worker.

Both `OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js` contain the following code:

```
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
```

It is recommended to modify both `OneSignalSDKWorker.js` and `OneSignalSDKUpdaterWorker.js` to import your other service worker scripts, like:

```
importScripts('https://site.com/my-other-service-worker.js');
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
```

We recommend the above approach instead of importing our service worker into another file because our Web SDK replaces other workers that are registered on the root scope.

Additionally, please be sure to modify your site's code to register `OneSignalSDKWorker.js` instead of your own worker. You can do this with code like:

```
navigator.serviceWorker.register('/OneSignalSDKWorker.js');
```

If you customized the path, scope, or filenames of the OneSignal service workers (or added the `importScripts` code from our service workers into the your current service workers), see [Customizing Service Worker Integration](#section-customizing-service-worker-integration).

## Integrating with Super PWA Plugin for Wordpress

The most common PWA plugin for Wordpress is **[Super PWA](https://superpwa.com/)**.

Please see [Super PWA's guide](https://superpwa.com/doc/setup-onesignal-with-superpwa) if you're seeing an "Action required to integrate…" banner in your Wordpress admin after installing and setting up OneSignal's Wordpress Plugin.