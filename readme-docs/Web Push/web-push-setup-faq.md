---
title: "Web Push FAQ"
slug: "web-push-setup-faq"
excerpt: "Common questions about OneSignal's Web Push Notifications"
hidden: false
createdAt: "2017-12-01T05:01:36.696Z"
updatedAt: "2021-12-21T19:53:50.756Z"
---
# What Platforms Support Web Push Notifications?

All major browsers support Web Push. Android devices may also receive Web Push notifications in addition to notifications from apps as long as they can connect to the push gateway servers. Below is a list of platforms and browsers that offer support for web push notifications.

## Browser Support by Operating System

**Incognito Mode, Private Browsing Mode, and Guest Browser Mode do not support Web Push.**
[block:parameters]
{
  "data": {
    "h-0": "Browser",
    "h-1": "Windows PC",
    "h-2": "macOS",
    "h-3": "Android",
    "0-0": "[Chrome](https://en.wikipedia.org/wiki/Google_Chrome)",
    "1-0": "[Firefox](https://en.wikipedia.org/wiki/Firefox)",
    "2-0": "[Safari](https://en.wikipedia.org/wiki/Safari_(web_browser))",
    "3-0": "[Microsoft Edge](https://en.wikipedia.org/wiki/Microsoft_Edge)<sup>1</sup>",
    "4-0": "[Opera](https://en.wikipedia.org/wiki/Opera_(web_browser))<sup>1</sup>",
    "5-0": "[Samsung Internet Browser](https://en.wikipedia.org/wiki/Samsung_Internet_for_Android)<sup>1</sup>",
    "7-0": "[UC Browser](https://en.wikipedia.org/wiki/UC_Browser)<sup>1</sup>",
    "8-0": "[Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) <sup>2</sup>",
    "8-1": "No",
    "0-1": "**Yes**",
    "0-2": "**Yes**",
    "0-3": "**Yes**",
    "1-1": "**Yes**",
    "1-2": "**Yes**",
    "1-3": "**Yes**",
    "h-4": "iOS (iPhone, iPad)",
    "0-4": "No",
    "1-4": "No",
    "2-4": "No",
    "3-4": "No",
    "4-4": "No",
    "5-4": "No",
    "7-4": "No",
    "8-4": "No",
    "8-2": "No",
    "8-3": "No",
    "6-0": "[Yandex](https://en.wikipedia.org/wiki/Yandex_Browser)<sup>1</sup>",
    "2-2": "**Yes**",
    "2-3": "No",
    "2-1": "No",
    "5-1": "No",
    "5-2": "No",
    "7-2": "No",
    "6-4": "No",
    "3-3": "**Yes**",
    "3-2": "**Yes**",
    "4-3": "**Yes**",
    "5-3": "**Yes**",
    "4-2": "**Yes**",
    "3-1": "**Yes**",
    "4-1": "**Yes**",
    "6-1": "**Yes**",
    "7-1": "**Yes**",
    "6-2": "**Yes**",
    "6-3": "**Yes**",
    "7-3": "**Yes**",
    "9-0": "[DuckDuckGo](https://en.wikipedia.org/wiki/DuckDuckGo)",
    "9-1": "No",
    "9-2": "No",
    "9-3": "No",
    "9-4": "No"
  },
  "cols": 5,
  "rows": 10
}
[/block]
**Note <sup>1</sup>**: Microsoft Edge (2019 Update), Opera, Samsung Browser, Yandex, and UC Browser are all Chromium-based browsers and will be marked as Chrome in OneSignal.
**Note <sup>2</sup>**: Internet Explorer is no longer receiving feature updates. Microsoft has switched browser development to the Edge platform.

## Support by Browser Version
[block:parameters]
{
  "data": {
    "0-0": "Google Chrome",
    "h-0": "Browser",
    "h-1": "Min Version",
    "0-1": "**Chrome 50+**. \n\n*Chrome v42 is when web push notifications started being supported, but it uses an older payload that is no longer supported by OneSignal. More information on this [here](https://developers.google.com/web/updates/2016/03/web-push-encryption).*",
    "1-0": "Mozilla Firefox",
    "1-1": "**Firefox v47+**\n\n[Firefox ESR](https://www.mozilla.org/en-US/firefox/enterprise/) versions do not support web push notifications.\n\n*Firefox v44+ is when web push notifications started being supported, but it uses an older payload that is no longer supported by OneSignal. More information on this [here](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/).* If you are testing support in this browser, [visit this webpage](https://jsfiddle.net/hpj0q3ax/11/) and let us know if you see any `Supported: false` or `Errors`.",
    "2-0": "Apple Safari",
    "2-1": "**Safari 10+** on macOS\n\nApple does not support Web Push notifications on iOS at this time."
  },
  "cols": 2,
  "rows": 3
}
[/block]
---

# How do I change my domain?

Browsers have setup web push in a way that ties subscribers to a specific [origin (domain/site URL)](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

**For security purposes and browser's [same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), browsers do not allow subscribers to be moved to other origins.** This is not a OneSignal limitation, any provider that claims you can move subscribers from one site origin to another you should verify it is your site origin they are subscribing users under.

Sites with different origins include:

- Changing from HTTP to HTTPS 
- www.mysite.com and non-www version
- domain1.com and domain2.com 

If you changed your site origin, the best solution is to set up a new OneSignal app and have your users subscribe to the new site origin under this new OneSignal app. 

**You will not able to import subscribers from one origin to another origin.**

You can continue sending push notifications to your subscribers on the old origin (old OneSignal app), but your users will need to re-subscribe to the new origin to get push from the new domain. 

The recommended steps for migration are as follows:

1. Setup a new OneSignal App ID for the new site domain.
2. Continue to send push from the old OneSignal App with old site domain. In the "Launch URL" of the notifications, use the new site domain.
3. After 2 weeks to 2 months (depending on how many notifications you send per day and how many subscribers you get on the new origin) you can then stop sending from the old OneSignal app and only use the new OneSignal app.
 - For example if you send 1+ notifications per day, then 2 weeks should be enough time to have your users subscribe to the new domain.
 - If you send 2+ notifications per week, then 2 months should be enough time.
 - **If you send the same message from the old OneSignal App and new OneSignal app, any subscribers under both will get duplicate messages.** This is why the timeframes are recommended.
4. You can send a couple "We've moved, click here to visit our new site to subscribe again and stay updated" messages. This will help alert people that they may not get push from your site if they don't return to subscribe. Best to send this at the beginning of the move and last message sent from the app.

Unfortunately all websites and user-bases are different. Be prepared to lose subscribers in the short term.

----

# Can I setup multiple websites or subdomains with a single OneSignal App?

Browsers have implemented web push in a way that works best with only one main [origin (domain/site url)](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). Separate origins of a site cannot be merged to one app.

For example, browsers will not allow `https://mysite.com` and `https://www.mysite.com` to both collect the same subscribers.

Due to this browser limitation, it is not possible to unify multiple origins into a single OneSignal App. This can cause issues with duplicate notifications, and a poor user experience.

Generally, your options are:

1. Only subscribe users on one origin. If you have subdomains or landing pages or any other sites using multiple origins, you can redirect users to the "main" origin to subscribe, then redirect them back to the other origin to continue browsing.

2. Create separate OneSignal Apps for separate origins. Notifications will arrive independently of each other. This means users who subscribe to multiple sites will receive duplicate notifications if you send the same notifications on all sites.

More details in our guide for setting up [Complex Web Push Integrations](doc:web-push-complex-integrations).

----

# What should I do if I upgraded my site to HTTPS?

Browsers require 2 things for web push notifications to work:

1. An HTTPS site
2. Service worker files added to the server

If you had an HTTP site, and upgraded to HTTPS (or, you are now able to add service workers to your site), browser's will treat the HTTPS site as a new origin.

Please see [How do I change my Domain](#how-do-i-change-my-domain) for details.

---

# Can I transfer subscribers from one site to another?

If you changed your site's origin, your users will need to subscribe to that new site origin. See [How do I change my Domain](#how-do-i-change-my-domain) for more details.

---

# What if my site supports multiple languages?

If your site supports multiple languages through a subdirectory like: `https://mysite/com/en_us/` or `https://mysite.com/other-language/` then you have the same origin (`https://mysite.com`) and you can setup multiple languages on prompts following our [Prompting FAQ to translate prompts](doc:permission-requests#how-can-i-translate-the-onesignal-prompts) and send push in different languages following [Language & Localization](doc:language-localization).

If your site supports multiple languages through a subdomain like: `https://en.mysite.com`, then this would be separate origins and would require multiple OneSignal Apps. Each origin will need it's own OneSignal App Id.

----

# Can I have multiple OneSignal Apps for the same site?

You can have multiple OneSignal App IDs on a single origin, but it is **not recommended**. 

Each OneSignal App creates unique [VAPID keys](https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol) for the Site Origin attached to that App ID. VAPID keys facilitate the subscription process to the subscriber's browser and your site origin. 

If you add multiple App IDs to the same site origin, OneSignal will auto-resubscribe the user to the last visited App ID. So you will see subscribers bounce back and forth between App IDs if they are able to visit pages with different App IDs.

For example, if you subscribed to `https://yoursite.com/home` using "App_ID_1", then visit `https://yoursite.com/shop` using "App_ID_2", OneSignal will unsubscribe you from "App_ID_1" and then auto-subscribe them to "App_ID_2".

You will see many unsubscribed devices on each app, as users bounce between them.

The recommended approach is to [Add Data Tags](doc:add-user-data-tags) to devices in order to differentiate them based on URLs.

----

# What if my site is in a subfolder?

Web push is configured at the origin level. 

If your site is hosted in a subfolder, like `https://example.com/blog` (where `blog` is the subfolder), your web push domain will be `https://example.com`. Continue the setup process with your main site origin. If you must add the service workers to the subfolder see [Customizing Your Service Worker Integration](doc:onesignal-service-worker-faq#customizing-your-service-worker-integration).

## Can OneSignal SDK files be served from a subfolder of my site?

Yes, please see [OneSignal Service Worker guide](doc:onesignal-service-worker-faq) for more details.

---

# Why does my site require a label?

The Web Push Standard adopted by all major web browsers requires notifications to come from an HTTPS address with technologies that support web push (specifically, the ability to upload files to the root directory). 

OneSignal has developed a workaround since not all sites fully support these technologies - even if the websites themselves support HTTPS.

Our workaround (called the OneSignal HTTP SDK) creates a site that we host for the sole purpose of delivering your notifications. This site (`os.tc`) creates a unique subdomain based on your label (like `yoursite.os.tc`) that is displayed to users when they receive your notifications.

For example: 

<img src="https://files.readme.io/36100cb-subdomain.png" width="300"/>

The label you select must be unique - if somebody else is already using it, you must choose another.

---

## Why do you require a label for my website builder?

Several website builders must the OneSignal HTTP SDK that requires a label, because these technologies do not allow files to be uploaded to the root directory. These site builders include:

* Blogger
* Shopify
* Squarespace
* Weebly
* Some Wordpress implementations
* Some Drupal implementations
* Some Joomla implementations
* Some Magento implementations

---

## Why can't I change my site's label?

OneSignal allows you to experiment with different labels when you have fewer than 100 web subscribers to give you some extra flexibility while you're still deciding how to use push notifications. 

After your app has 100+ web subscribers, this setting is disabled, and you must start over with a new OneSignal app to use a different label. 

We do this because changing your label can cause subscribers to receive duplicate notifications. 

----

# Can I host the OneSignal SDK files myself?

**We highly recommend against this.** Browsers are constantly changing and updating how users and websites can use web push notifications. 

OneSignal makes sure these changes are implemented as soon as possible to make sure your site is working correctly. You should use the OneSignal CDN URL supplied in the Web Push Settings instead of hosting the files yourself, unless our documentation specifically tells you to do so.

---

# Can I customize the OneSignal init code?

You can customize the OneSignal `init` code **only** if you've selected [Custom Code Setup](doc:web-push-custom-code-setup) when setting up your OneSignal app.

If you select [Typical Setup](doc:web-push-typical-setup) or Website Builder when setting up your OneSignal app, any `init` code you add to your site's pages will be ignored by the OneSignal SDK.

---

## How do I test my site on a local environment?

See [Web Push Advanced Options](doc:web-push-options#local-testing). 


# Can OneSignal integrate with another Service Worker on my site or a Progressive Web App?

Yes! Please see [Integrating Multiple Service Workers](onesignal-service-worker-faq#integrating-multiple-service-workers).

---

# Why use .push in the SDK?

You may have noticed the need to wrap your OneSignal calls with `OneSignal.push(function() { ... })`

```
OneSignal.push(function() {
  /* ... */
});
```

The OneSignal SDK is loaded asynchronously on your page. For example:

`<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async"></script>`

You can read more about the async attribute [here](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript) and [here](https://developers.google.com/speed/docs/insights/BlockingJS).

Basically, a script without an `async` attribute stops the loading of the rest of the page while it is fetched and executed, but `async` scripts allow the rest of the page to load, while it is eventually fetched and executed. 

This presents a problem for page scripts that depend on the `OneSignal` variable existing.

Most of the OneSignal code examples begin with:

`var OneSignal = window.OneSignal || [];`

This creates a OneSignal variable, and if OneSignal is already loaded, it's then assigned to the loaded instance. Otherwise, the OneSignal variable equals an empty array - `[]`.

All arrays have a [`.push() function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), so at this point, the OneSignal variable is simply an array of functions we're pushing on to it.

When the SDK finally loads, the SDK [processes all the functions pushed so far and redefines .push()](https://github.com/OneSignal/OneSignal-Website-SDK/blob/03cd16cacb79ff6d37156878d4f59ebf31ad8044/src/OneSignal.js#L2050).

Original Stack Overflow discussion: http://stackoverflow.com/a/38466780/555547