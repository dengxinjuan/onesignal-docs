---
title: "Local Testing & Advanced Options"
slug: "web-push-options"
excerpt: "Localhost setup, web push click behavior, and other advanced options"
hidden: false
createdAt: "2017-11-29T04:05:58.864Z"
updatedAt: "2021-10-29T21:35:42.620Z"
---
The Advanced section is only for customers who have particular configurations or desire very specific notification behavior. 

#Webhooks
See [Webhooks](doc:webhooks).

#Service Workers
**HTTPS only** - by default, OneSignal will use a root Scope for it's ServiceWorker. It is **highly recommend you customize your integration to use a non-root scope** by following [OneSignal Service Worker Setup](doc:onesignal-service-worker-faq).

#Local Testing

You can test OneSignal on your local environment. Web push apps can only be used on a single site origin specified in this settings. If you have an existing OneSignal App pointing to another site origin like `https://your-site.com`, you cannot simultaneously use this App on localhost. You should instead create a separate OneSignal App for local testing.

In your OneSignal App's **Settings > All Browsers > Site Setup > SITE URL** you can set your localhost URL to exactly what you see in the browser when visiting the local environment. Common examples are:
- `http://localhost` or `http://localhost:3000` or `http://127.0.0.1` or `http://127.0.0.1:5000`

If your localhost is using HTTP, then select **Treat HTTP localhost as HTTPS for testing** if your site will be using HTTPS. Google Chrome treats `http://localhost` and `http://127.0.0.1` as secure origins, allowing HTTPS integrations even on HTTP. This is why you cannot test other non-standard origins on HTTPS localhost. Please note that these HTTP origins are the only exceptions, and HTTP production sites **will not** have a working HTTPS integration. 

**Note:** If your local testing environment uses HTTPS, add `allowLocalhostAsSecureOrigin: true,` to your OneSignal `init` options.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/083d0f3-Screen_Shot_2021-04-28_at_3.44.51_PM.png",
        "Screen Shot 2021-04-28 at 3.44.51 PM.png",
        1768,
        786,
        "#f6f7f7"
      ]
    }
  ]
}
[/block]
####HTTPS Localhost Example Code

Additionally, if you're testing localhost on HTTPS with a self-signed certificate, you may have to ask Chrome to ignore invalid certificates for testing with: ` --allow-insecure-localhost`. Firefox and Safari provide built-in mechanisms to add exceptions for security certificates.
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  window.OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_OS_APP_ID\",\n      allowLocalhostAsSecureOrigin: true,\n    });\n  });\n</script>",
      "language": "html"
    }
  ]
}
[/block]

----

#Click Behavior
**Chrome**, **Firefox**. Not supported on Safari.

OneSignal supports several different possible browser behaviors when users click on your notifications. If you would like to learn more about the Launch URL and options like not doing anything when the user clicks the notification, see [Deep-links and URLs](doc:links#no-linking).

If users **do not have your site open on any browser tabs**, and click on a notification that takes them to your site, the browser will open a new tab and navigate to the notification's URL.

If users **have your site open on one or more browser tabs**, and click on a notification that takes them to your site, there are several possible ways the browser can behave that you can configure:

* **Exact Navigate** (default) - If the notification's exact URL (e.g. `example.com/product`) matches a tab that the browser already has open, the browser will navigate to the notification's URL in that tab. 
* **Origin Navigate** - If the notification's origin (e.g. `example.com`) matches a tab that the browser already has open, the browser will navigate to the notification's URL in that tab. 
* **Exact Focus** - If the notification's exact URL (e.g. `example.com/product`) matches a tab that the browser already has open, the browser will focus on that tab, but *not* refresh the page.
* **Origin Focus** - If the notification's origin (e.g. `example.com`) matches a tab that the browser already has open, the browser will focus on that tab, but *not* refresh the page. 

**HTTP sites** - due to limitations on HTTP sites, browsers behave slightly differently than the above in these cases:
- If multiple stale tabs are open to your site, a clicked notification sharing an identical URL to an existing tab may not focus the tab and may instead open a new tab.
- When using Origin, if multiple stale tabs are open to your site, a different tab than the matching tab may be focused.

----

#Notification Persistence

Default behavior of notifications is they show to users for roughly 5 seconds before they are moved to the Notification History where they are kept for 1 week before removed by the operating system.

You can persist notifications for longer on the screen for Chrome and Edge browser subscribers. This means the notification will stay on the screen until the user interacts with it.

Notification Persistence does affect how notifications appear to users. More details in our [Notification Appearance Guide.](doc:appearance) 

##Triggering Notification Persistence on Chrome
[block:callout]
{
  "type": "warning",
  "title": "Limited Support Across Platforms",
  "body": "Not all browsers and operating systems support this feature. If you turn it on, it will work for the users that are eligible."
}
[/block]
If changing this setting, current subscribers will need to return to the site with the updated option to see the change.

**Typical Setup** - Use the "Persistence" toggle to turn on/off.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/572d90d-Screen_Shot_2018-10-15_at_2.24.32_PM.png",
        "Screen Shot 2018-10-15 at 2.24.32 PM.png",
        679,
        73,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]
WordPress Plugin - Under "Sent Notification Settings" > "Hide notifications after a few seconds"

Custom Code - With our [Web Push SDK](doc:web-push-sdk#section--init-), use the `persistNotification` property.

Use `persistNotification: true,` in the OneSignal init code to persist notifications on screen for Browsers and Operating Systems that support this feature.

Firefox, Safari - Setting has no effect

Because persistent notifications stay around, users may find it annoying that every notification you send sticks around. Therefore, we recommend keeping this disabled site-wide unless your site delivers high importance notifications (such as a task management app). Users can always mouse over the notification which will keep it on screen to read it's full contains.