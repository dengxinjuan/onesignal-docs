---
title: "AMP Web Push Setup"
slug: "amp-web-push-setup"
excerpt: "For Web Push notifications on <span class=\"label-all label-android\">Android</span> AMP pages."
hidden: false
createdAt: "2017-07-25T01:36:44.447Z"
updatedAt: "2021-05-11T15:38:28.761Z"
---
## What is AMP?
AMP, which stands for Accelerated Mobile Pages, is an [open source project](https://www.ampproject.org/) created by Google which aims to make webpages and articles load very quickly on mobile devices. Most users will encounter these pages during a Google search, where a lightning bolt icon indicates the pages are AMP accelerated. 
[block:html]
{
  "html": "<center><img src=\"https://i.imgur.com/2wqzCbq.png\" style=\"max-width: 80%; max-height: 480px;\"></center>"
}
[/block]
Recently, Google approved an extension for AMP pages authored by OneSignal that allows AMP pages to incorporate web push notifications. This is especially valuable for news publishers and bloggers, who previously have had to decide between supporting the speed of AMP pages or the audience-engagement of  push notifications. 

AMP Web Push is only supported on <span class="label-all label-android">Android</span> devices. **It is not supported on <span class="label-all label-ios">iOS</span> devices**. While iOS devices do support AMP pages, [web push is not supported on iOS](https://onesignal.com/blog/updated-ios-web-push-predictions/).

## How to Set Up Web Push on AMP Pages (non-Wordpress)
For Wordpress setup, [see below](/docs/amp-web-push-setup#section-how-to-set-up-amp-web-push-for-wordpress-sites)

### 1. Add AMP to your site
Follow [Google's AMP Setup Tutorial](https://www.ampproject.org/docs/tutorials/create) if you haven't added AMP to your site yet.

### 2. Add the AMP Web Push script
For all AMP pages on your site that you'd like to enable web push notifications, add the following script within your AMP page's `<head>` section:
[block:code]
{
  "codes": [
    {
      "code": "<script async custom-element=\"amp-web-push\" src=\"https://cdn.ampproject.org/v0/amp-web-push-0.1.js\"></script>",
      "language": "html"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "AMP Pages Only",
  "body": "Do not add this code to non-AMP pages, as it will not do anything."
}
[/block]
### 3. Configure the AMP Web Push extension

#### For HTTPS Sites
Download these files and add them to the root of your site, right click these files and "Save Link as...":
* [amp-helper-frame.html](https://cdn.onesignal.com/sdks/amp-distribute/amp-helper-frame.html)
* [amp-permission-dialog.html](https://cdn.onesignal.com/sdks/amp-distribute/amp-permission-dialog.html)

Then add this code in your AMP site's `<body>`.

- Replace `YOURDOMAIN.COM` with the domain/subdomain users subscribe to
- Replace `YOUR-APP-ID` with your app ID
[block:callout]
{
  "type": "warning",
  "title": "Replace YOURDOMAIN.COM with the domain users subscribe to",
  "body": "Most HTTPS supporting web push will simply replace `YOURDOMAIN.COM` with their site's domain (e.g. `their-site.com`). \n\nHowever, if you have a custom setup where users are subscribed to push.your-domain.com, you will need to replace `YOURDOMAIN.COM` with `push.your-domain.com`.\n\nYou should replace `YOURDOMAIN.COM` with the subdomain + domain that contains the OneSignalSDKWorker.js script."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "  <amp-web-push\n    id=\"amp-web-push\"\n    layout=\"nodisplay\"\n    helper-iframe-url=\"https://YOURDOMAIN.COM/amp-helper-frame.html?appId=YOUR-APP-ID\"\n    permission-dialog-url=\"https://YOURDOMAIN.COM/amp-permission-dialog.html?appId=YOUR-APP-ID\"\n    service-worker-url=\"https://YOURDOMAIN.COM/OneSignalSDKWorker.js?appId=YOUR-APP-ID\"\n  ></amp-web-push>",
      "language": "html"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Do not add this code to non-AMP pages, as it will not do anything.",
  "title": "AMP Pages Only"
}
[/block]
#### For HTTP Sites
If you have selected *My site is not fully HTTPS* during setup, you will need to add this code in your AMP site's `<body>`.

- Replace `LABEL` with your chosen label. Keep the `.os.tc` (e.g. `yourlabel.os.tc`) part.
- Replace `YOUR-APP-ID` with your app ID
[block:code]
{
  "codes": [
    {
      "code": "  <amp-web-push\n    id=\"amp-web-push\"\n    layout=\"nodisplay\"\n    helper-iframe-url=\"https://LABEL.os.tc/amp/helper_frame?appId=YOUR-APP-ID\"\n    permission-dialog-url=\"https://LABEL.os.tc/amp/permission_dialog?appId=YOUR-APP-ID\"\n    service-worker-url=\"https://LABEL.os.tc/OneSignalSDKWorker.js?appId=YOUR-APP-ID\"\n  ></amp-web-push>",
      "language": "html"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Do not add this code to non-AMP pages, as it will not do anything.",
  "title": "AMP Pages Only"
}
[/block]
### 4. Set up your widget
Once you have OneSignal, AMP,  and AMP Web Push implemented on your site, you will need to add your AMP Web Push widget. This widget will let users subscribe and unsubscribe to push notifications from your AMP Web Push page.

The following is an example AMP Web Push widget:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ba3510-States.png",
        "States.png",
        945,
        889,
        "#4a4d4f"
      ]
    }
  ]
}
[/block]
We recommend putting your AMP Web Push widget **below the main content** of your page (as in this example) for three important reasons:

1. AMP widgets take up a fixed amount of vertical space, which cannot be hidden even if a user has subscribed. In other words, putting a widget at the top means every user (subscribed or not) coming to your AMP page has to scroll more to see the content they came for.

2. It's best practice to get users to understand the value of your site before asking them to sign up for push notifications. Placing a button at the bottom of the page is a natural stopping point for the user that you can use to convert them to subscribers.

3. The default AMP Web Push widget changes from a subscribe button to an unsubscribe button once a user subscribes. Thus, the unsubscribe button would be presented above the page contents and may be accidentally tapped.

To add an AMP Web Push widget that looks like the above, first add the following styles in your `<head>`:
[block:code]
{
  "codes": [
    {
      "code": "  <style amp-custom>\n    amp-web-push-widget button.subscribe {\n      display: inline-flex;\n      align-items: center;\n      border-radius: 2px;\n      border: 0;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 10px 15px;\n      cursor: pointer;\n      outline: none;\n      font-size: 15px;\n      font-weight: 400;\n      background: #4A90E2;\n      color: white;\n      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n\n    amp-web-push-widget button.subscribe .subscribe-icon {\n      margin-right: 10px;\n    }\n\n    amp-web-push-widget button.subscribe:active {\n      transform: scale(0.99);\n    }\n\n    amp-web-push-widget button.unsubscribe {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      height: 45px;\n      border: 0;\n      margin: 0;\n      cursor: pointer;\n      outline: none;\n      font-size: 15px;\n      font-weight: 400;\n      background: transparent;\n      color: #B1B1B1;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    }\n</style>",
      "language": "html"
    }
  ]
}
[/block]
Then, add the AMP Web Push widget code at the bottom of your AMP pages content (we recommend adding this before the comments section, if you have one):
[block:code]
{
  "codes": [
    {
      "code": "<!-- A subscription widget -->\n<amp-web-push-widget visibility=\"unsubscribed\" layout=\"fixed\" width=\"245\" height=\"45\">\n  <button class=\"subscribe\" on=\"tap:amp-web-push.subscribe\">\n    <amp-img\n             class=\"subscribe-icon\"\n             width=\"24\"\n             height=\"24\"\n             layout=\"fixed\"\n             src=\"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3Vic2NyaWJlLWljb24iIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS44NCAxOS44ODdIMS4yMnMtLjk0Ny0uMDk0LS45NDctLjk5NWMwLS45LjgwNi0uOTQ4LjgwNi0uOTQ4czMuMTctMS41MTcgMy4xNy0yLjYwOGMwLTEuMDktLjUyLTEuODUtLjUyLTYuMzA1czIuODUtNy44NyA2LjI2LTcuODdjMCAwIC40NzMtMS4xMzQgMS44NS0xLjEzNCAxLjMyNSAwIDEuOCAxLjEzNyAxLjggMS4xMzcgMy40MTMgMCA2LjI2IDMuNDE4IDYuMjYgNy44NyAwIDQuNDYtLjQ3NyA1LjIyLS40NzcgNi4zMSAwIDEuMDkgMy4xNzYgMi42MDcgMy4xNzYgMi42MDdzLjgxLjA0Ni44MS45NDdjMCAuODUzLS45OTYuOTk1LS45OTYuOTk1SDExLjg0ek04IDIwLjk3N2g3LjExcy0uNDkgMi45ODctMy41MyAyLjk4N1M4IDIwLjk3OCA4IDIwLjk3OHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=\">\n    </amp-img>\n    Subscribe to updates\n  </button>\n</amp-web-push-widget>\n           \n\n<!-- An unsubscription widget -->\n<amp-web-push-widget visibility=\"subscribed\" layout=\"fixed\" width=\"230\" height=\"45\">\n   <button class=\"unsubscribe\" on=\"tap:amp-web-push.unsubscribe\">Unsubscribe from updates</button>\n</amp-web-push-widget>",
      "language": "html"
    }
  ]
}
[/block]

You may want to modify the exact call to action of this button. Some examples include:

* Subscribe to updates from (your site)
* Stay informed on (your site) updates
* We need your permission to enable notifications
* Get notifications on the latest (content you offer, e.g. 'space news')
[block:callout]
{
  "type": "warning",
  "title": "Widget Action",
  "body": "Whether you choose to use a link (`<a>`) or button (`<button>`) inside `<amp-web-push-widget>`, remember to add the `on=\"tap:amp-web-push.subscribe\"` property. For example:\n\n```html\n<amp-web-push-widget ...>\n  <button .... on=\"tap:amp-web-push.subscribe\">\n```\n\nWithout the `on=...` property, the button won't do anything when clicked!"
}
[/block]
### 5. Hide standard OneSignal JavaScript code on AMP pages

You probably already set up OneSignal on your site and added code to your page to load our SDK and initialize OneSignal.

This code must be removed when viewing an AMP page. The OneSignal SDK script reference and the initialization code must only be present on non-AMP pages.

AMP caches like Google will not recognize your AMP page as valid if you leave the OneSignal script reference and initialization code on your AMP page.
[block:callout]
{
  "type": "success",
  "body": "Once you've added your AMP Web Push widget, you should be all set!"
}
[/block]
## How to Set up AMP Web Push for Wordpress sites

### 1. Set up OneSignal on your Wordpress site
First follow our [Wordpress setup guide](doc:wordpress) to setup your OneSignal account and Wordpress site.

### 2. Set up AMP on your Wordpress site
The [AMP for WP](https://wordpress.org/plugins/accelerated-mobile-pages/) plugin allows you to add AMP to your Wordpress site, and supports Wordpress AMP Web Push. Follow the setup process for this plugin to get started.

Note: the [WP AMP Themes](https://wordpress.org/plugins/wp-amp-themes/) plugin supports AMP but does not yet support AMP Web Push. 

### 3. Enable AMP Web Push
Follow the [AMP for WP OneSignal Integration documentation](https://ampforwp.com/tutorials/article/one-signal-in-amp/) to enable AMP Web Push on Wordpress. 
[block:callout]
{
  "type": "success",
  "body": "You're all set! You should be able to send AMP Web Push notifications on your Wordpress site."
}
[/block]
## Testing HTTP AMP Pages
If you selected *My site is not fully HTTPS* during Web Push setup, you will not be able to test AMP Web Push in the normal way. However, Google provides an [AMP Testing Tool](https://search.google.com/test/amp) you can use to preview your page.

### Using Google's AMP Testing Tool

1. Visit Google's [AMP Testing Tool](https://search.google.com/test/amp).

2. Submit your URL to test.

3. If your page is a valid AMP page, the page will say "Valid AMP page" in green. You then have the option to submit your page to Google's search results and preview your page's search result. Click Preview Search Result.

4. After clicking Preview Search Result, a phone preview appears with your page in Google's search results. Click your search result link.

5. Your AMP page inside the preview is real and AMP web push should be usable within this frame, because Google is serving your AMP page over its HTTPS domain, similar to other users will be using your AMP page after publishing.

Google's AMP testing tool does not work for `http://localhost` sites. For local AMP pages, you can [run a basic HTTPS server](https://gist.github.com/dergachev/7028596) to view your AMP page.

## Troubleshooting

### Cloudflare
If you use Cloudflare with "Rocket Loader" turned on, you may need to disable or prevent this setting from removing the AMP buttons.