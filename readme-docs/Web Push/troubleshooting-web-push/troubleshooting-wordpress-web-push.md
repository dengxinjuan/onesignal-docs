---
title: "Troubleshooting WordPress"
slug: "troubleshooting-wordpress-web-push"
excerpt: "Common setup issues with WordPress OneSignal Web Push Setup (Chrome, Firefox, Safari)"
hidden: false
createdAt: "2019-03-22T23:12:51.337Z"
updatedAt: "2021-07-09T19:53:22.621Z"
---
If you are not using the OneSignal WordPress plugin see our [Troubleshooting Web Push Guide](doc:troubleshooting-web-push). Otherwise, if you followed our [WordPress Setup Video](doc:wordpress) chances are you are almost done with setup! 

## Common setup issues

### OneSignal Dashboard Setup

Login to onesignal.com, click Your App > [Settings](doc:settings) > All Browsers configuration for the following issues.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e89d023-Screen_Shot_2020-02-01_at_2.15.15_PM.png",
        "Screen Shot 2020-02-01 at 2.15.15 PM.png",
        1081,
        600,
        "#d9dcde"
      ]
    }
  ]
}
[/block]
####1. Incorrect Configuration
Make sure you selected "WordPress". The other setup options will not work with the plugin.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1b411f3-Screen_Shot_2020-02-01_at_2.11.49_PM.png",
        "Screen Shot 2020-02-01 at 2.11.49 PM.png",
        1081,
        600,
        "#d3d4d4"
      ]
    }
  ]
}
[/block]
####2. Check your Site URL

Make sure your site url is correct.

- **www** and **non-www** are different. Set version based on your site url in WordPress General Settings.
- **HTTP** and **HTTPS** are also very different. More details in [Web Push HTTP vs. HTTPS](doc:web-push-http-vs-https)
- **Ignore Subdirectories** having a subdirectory like `/blog` does not affect this and can be ignored for setup purposes.

HTTP sites must add a **Label** that is 4 letters or more.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c8d0ff9-Screen_Shot_2020-02-01_at_2.29.30_PM.png",
        "Screen Shot 2020-02-01 at 2.29.30 PM.png",
        1608,
        762,
        "#e9e9e9"
      ]
    }
  ]
}
[/block]
For **HTTP** sites, make sure your **Label** matches the plugin **OneSignal Label**. Do not add `os.tc` to the OneSignal Label field. Press "Save" at the bottom of the plugin if you updated this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8ff51c0-Screen_Shot_2020-02-01_at_2.30.57_PM.png",
        "Screen Shot 2020-02-01 at 2.30.57 PM.png",
        866,
        600,
        "#faf7f7"
      ]
    }
  ]
}
[/block]

----

### OneSignal WordPress Plugin Setup

#### 1. Do Not Use the OneSignal Init code
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9e09746-Screen_Shot_2020-02-01_at_11.21.09_PM.png",
        "Screen Shot 2020-02-01 at 11.21.09 PM.png",
        3196,
        158,
        "#f7dfdc"
      ]
    }
  ]
}
[/block]
The OneSignal WordPress plugin automatically adds the code to your site needed for OneSignal to work. You should not add any initialization code to your WordPress site. 

If you added the following code to your site, simply remove it. Here is what it looks like:
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_ONESIGNAL_APP_ID\",\n    });\n  });\n</script>",
      "language": "html"
    }
  ]
}
[/block]
Then, make sure you selected the [WordPress Configuration in your onesignal.com dashboard](#onesignal-dashboard-setup).

#### 2. Incorrect App Id

In the onesignal.com dashboard > Your App > [Settings](doc:settings) > [Keys & IDs](doc:accounts-and-keys) 
Make sure your **OneSignal App ID** and **REST API Key** match inside the OneSignal WordPress plugin. Press Save at the bottom of the plugin if you change this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0fada1-Screen_Shot_2020-02-01_at_2.48.01_PM.png",
        "Screen Shot 2020-02-01 at 2.48.01 PM.png",
        1182,
        1672,
        "#eceaeb"
      ]
    }
  ]
}
[/block]
#### 3. WordPress Plugin Disabled

At the bottom of the OneSignal WordPress Plugin, make sure you did not disable the plugin. If you see this disabled, no users can subscribe. Press Save at the bottom of the plugin if you change this.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e860d67-Screen_Shot_2020-02-01_at_2.44.04_PM.png",
        "Screen Shot 2020-02-01 at 2.44.04 PM.png",
        1258,
        576,
        "#f5f2f2"
      ]
    }
  ]
}
[/block]
#### 4. Wrong Browser, Viewing Mode, or Browser Version

Make sure you are testing with the latest version of Chrome or Firefox. Minimum browser versions can be viewed [here](doc:web-push-setup-faq#platform-support).

Do not use private browser mode, incognito mode, guest browser mode or Firefox's ESR versions. Notifications do not work in these cases.

----

## Debugging Your Plugin Setup

OneSignal prints helpful error messages on your browser's **Developer Tools Console** when viewing your site with the OneSignal code active. To open the Developer Tools Console:
1. Go to your website with the OneSignal Plugin Active
2. Right click on the page and select **Inspect**
3. Select the **Console** tab

Usually we print the direct cause of the error on the console and a link to the solution.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1906296-Screen_Shot_2020-02-01_at_3.15.53_PM.png",
        "Screen Shot 2020-02-01 at 3.15.53 PM.png",
        1310,
        862,
        "#b5afac"
      ]
    }
  ]
}
[/block]
### 403 & 404 Service Worker Errors

After you try subscribing to your site, if you see a **403 or 404** error like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/990e505-Screen_Shot_2020-02-01_at_9.31.44_PM.png",
        "Screen Shot 2020-02-01 at 9.31.44 PM.png",
        3364,
        200,
        "#f8e4e3"
      ]
    }
  ]
}
[/block]
In you see **403 or 404 Service Worker Errors**, that means something is blocking the following files from being publicly accessible:

- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js.php`

- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js.php`

- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js`

- `https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js`

### Cannot convert undefined or null to object

In the Code the OneSignal plugin adds to your site, you should see this:

`oneSignal_options['path'] = "https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";`

If this url (example `yoursite.com` ) does not match your site, then in the wp-config.php file add:

`define("ONESIGNAL_PLUGIN_URL", "https://yoursite.com/wp-content/plugins/onesignal-free-web-push-notifications/");`

Where `yoursite.com` is your actual site url.

#### Common Wordpress issues and fixes:

1. You selected the Typical Setup in the OneSignal Dashboard. Please make sure you selected the WordPress Setup in the onesignal.com dashboard. **This is the most common mistake as shown above for [Incorrect WordPress OneSignal Configuration](#onesignal-dashboard-setup)**

2. If you are using a CDN or Cache Plugin see [WordPress CDN & Cache Plugin Support](#word-press-cdn-cache-plugin-support) below.

3. If you are using a Security plugin, see these [common security plugin issues](#security-plugin-issues).

4. Check that your .htaccess file sitting in the wp-content folder is [not blocking php files](#example-htaccess).

5. Make sure not to be minifying CSS

6. Contact your hosting provider and ask them to whitelist these files. Here's a support ticket you can use:

```
Hi!
My site runs the OneSignal web push notifications plugin and we are having some issues with serving certain files. 
The OneSignal plugin team would like to request an exception on URLs including the string "onesignal-free-web-push-notifications".
Could you please add the above string to the exception list?
Thanks!
```

----
## WordPress CDN & Cache Plugin Support
Using caching plugins with CDN support can cause files required to be served from your domain to be served from the CDN instead. Here's how to use the appropriate settings:


### Autoptimize

In Excluded scripts section, exclude the OneSignal Script:

`wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/(.*)`

### WP Rocket

In the WP Rocket CDN settings, under "Exclude Files From CDN" add the following line:

```
(.*)/onesignal-free-web-push-notifications/sdk_files/(.*)
```

Then press save.

### LightSpeed Cache

In the LightSpeed CDN settings, under "Exclude Path" add the following line:

```
(.*)/onesignal-free-web-push-notifications/sdk_files/(.*)
```

Then press save.

### WP Super Cache

1. Log in to your WordPress admin panel and visit **Settings > WP Super Cache**.

2. Click the **CDN** tab.

3. Make sure the **Exclude if substring** tab has *at least* the following contents: `.php, onesignal-free-web-push-notifications`. You can have more than this, but you must have at least these two entries.

4. Click the **Contents** tab.

5. Click the **Delete Cache** button.

6. The required files should now be served from your domain. Refresh your site page.

### WP Engine

In your WP Engine plugin > General Settings > HTML Post-Processing

add the below URLs replacing "YOURSITEHERE" with your website:
[block:code]
{
  "codes": [
    {
      "code": "#https?://(www\\.)?(YOURSITEHERE\\.com|mywpenginehandleHere.wpengine.com|wpengineCDNpathHere.wpengine.netdna-(ssl|cdn).com)/wp-(content|includes)# => https://wpengineCDNpathHere-wpengine.netdna-ssl.com/wp-$4\n#https://wpengineCDNpathHere-wpengine.netdna-ssl.com/plugins/onesignal-free-web-push-notifications/# => https://mywebsiteHere.com/wp-content/plugins/onesignal-free-web-push-notifications/\n#https://wpengineCDNpathHere-wpengine.netdna-ssl.com/wp-content/plugins/onesignal-free-web-push-notifications/# => https://mywebsiteHere.com/wp-content/plugins/onesignal-free-web-push-notifications/",
      "language": "text"
    }
  ]
}
[/block]
### W3 Total Cache

1. Log in to your WordPress admin panel and click **Performance** on the left sidebar.

2. Click the **CDN** tab.

3. Find the textbox for "Rejected files".

4. Add an entry for `{plugins_dir}/onesignal-free-web-push-notifications/sdk_files/*`

4. Click Save all settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/64ad121-Screen_Shot_2020-03-02_at_7.36.18_PM.png",
        "Screen Shot 2020-03-02 at 7.36.18 PM.png",
        1071,
        494,
        "#dbd9da"
      ]
    }
  ]
}
[/block]
### BunnyCDN

Add `OneSignal` to the excluded phrases in the BunnyCDN plugin under the advanced settings. 

Once that's saved, purge the HTML cache if you're using any HTML caching plugin such as WP Total Cache.

### CDN Enabler

1. Log in to your WordPress admin panel and click **Settings** -> **CDN Enabler** on the left sidebar.

2. Find the "Exclusions" textbox.

4. Add "onesignal-free-web-push-notifications". 

    Your textbox might look like ".php,onesignal-free-web-push-notifications".

5. Click *Save Changes*.

### PressCDN

In the PressCDN settings under **Exclude Directories** add: `/wp-content/plugins/onesignal-free-web-push-notifications/`

### Breeze

In Breeze > Settings > CDN > Exclude Content add `/onesignal-free-web-push-notifications/sdk_files/`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0ea4ad-Screen_Shot_2020-06-30_at_7.59.26_PM.png",
        "Screen Shot 2020-06-30 at 7.59.26 PM.png",
        1219,
        552,
        "#d9dadb"
      ]
    }
  ]
}
[/block]
### Hummingbird Pro

In **Hummingbird Pro > Asset Optimization** find "remote_sdk" with "OneSignalSDK.js#asyncload"

Select that file and remove from Optimization.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a888a91-PastedGraphic-4_3.png",
        "PastedGraphic-4 (3).png",
        476,
        90,
        "#f8f9f6"
      ]
    }
  ]
}
[/block]
Then reset any cache plugins and return to the site.

----
## Security Plugin Issues

### Sucuri
Sucuri provides an option in its settings to whitelist files. Please see [Sucuri's Whitelist File or Folder](https://kb.sucuri.net/firewall/Whitelist+and+Blacklist/whitelist-file-folder) guide.

###  iThemes Security plugin
Uncheck "Disable PHP in Plugins" option under "System Tweaks" or "System Modifications"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f78a21b-php-in-plugins.jpg",
        "php-in-plugins.jpg",
        818,
        188,
        "#f6edea"
      ]
    }
  ]
}
[/block]
### Defender Security plugin
Make sure you do not "Prevent PHP execution" in your settings.

Defender Plugin > Security Tweaks > Do not "Prevent PHP execution.

## Example .htaccess
[block:code]
{
  "codes": [
    {
      "code": "<Files *.php>\nOrder allow,deny\nDeny from all\n</Files>\n<Files OneSignalSDKWorker.js.php>\nAllow from all\nForceType 'application/javascript; charset=UTF-8'\n</Files>\n<Files OneSignalSDKWorker.js>\nAllow from all\nForceType 'application/javascript; charset=UTF-8'\n</Files>\n<Files OneSignalSDKUpdaterWorker.js.php>\nAllow from all\nForceType 'application/javascript; charset=UTF-8'\n</Files>\n<Files OneSignalSDKUpdaterWorker.js>\nAllow from all\nForceType 'application/javascript; charset=UTF-8'\n</Files>\nAllow from all\nForceType 'application/json; charset=UTF-8'\n</Files>",
      "language": "html"
    }
  ]
}
[/block]

----

## Server slows down or website becomes unreachable upon a notification being sent

### Don't host your own notification icons
If you are hosting your own images and are using them in your notifications, the your server could be overloaded for requests for that image. This doesn't require users to click the notification as the image must be queried in order to actually display it in the notification. 

### SDK Worker Files
If you are not hosting your own images but continue to see significant slow-downs when notifications are sent, chances are the problem is that browsers are fetching four specific files from your server:
- `OneSignalSDKUpdaterWorker.js.php`
- `OneSignalSDKWorker.js.php`
- `OneSignalSDKUpdaterWorker.js`
- `OneSignalSDKWorker.js`

These files should be publicly accessible. See our [OneSignal Service Worker FAQ](doc:onesignal-service-worker-faq) for more info.

These service worker files are required for showing push notifications. Browsers will try to refresh them by fetching the files from your server if it has been more than 24 hours since the last refresh. Depending on how many subscribers you have, this can be taxing on your server. 

There are several solutions to this issue:

#### Solution 1: Set up a CDN
You can set up a free [Cloudflare](https://www.cloudflare.com/) account which can cache these files as well as other pages on your site to greatly lower the load on your server.

#### Solution 2 - Per-User Optimization
Notifications can be sent over a 24 hour period based on the last time they visited your site or based on a specific time in their timezone. This will help spread when your site will be loaded over time.
***This does not apply to notifications sent through the default send on post option. Only to notifications sent through OneSignal's dashboard, REST API, or if [custom PHP is added with a filter hook](https://documentation.onesignal.com/docs/web-push-wordpress-faq#wordpress-users-only) to add this delay option.***
![image](https://user-images.githubusercontent.com/645861/44371673-fb1e9280-a494-11e8-8e97-0473cf480d00.png)


#### Solution 3 - Update Service Worker Files Path
These 2 service worker files go into PHP instead of served as a static file from your host. This plugin uses PHP since a HTTP header needs to be added if the service worker files can't be put on the root of your site which plugins don't have access too. The OneSignal WordPress plugin does not have an option to configure this in the UI however if you can upload some files to the root of your site and can add some javascript to your WordPress template you can use static files.

1. Upload the 2 OneSignal Service Worker files ([download the files here](https://github.com/OneSignal/OneSignal-Website-SDK/releases/download/https-integration-files/OneSignal-Web-SDK-HTTPS-Integration-Files.zip)) to the root directory of your WordPress site. They should be accessible like this:
 - https://yoursite.com/OneSignalSDKWorker.js
 - https://yoursite.com/OneSignalSDKUpdaterWorker.js

2. In the WordPress Admin go to OneSignal Push > Advanced Settings  and turn on "Disable OneSignal Initialization".
![image](https://user-images.githubusercontent.com/645861/41134900-a464bb90-6a83-11e8-95b5-692ab6655dda.png)

3. Add the following custom code to your WordPress template 
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  window.OneSignal = window.OneSignal || [];\n  window.OneSignal.push(function() {\n    OneSignal.SERVICE_WORKER_UPDATER_PATH = \"OneSignalSDKUpdaterWorker.js\";\n    OneSignal.SERVICE_WORKER_PATH = \"OneSignalSDKWorker.js\";\n    OneSignal.SERVICE_WORKER_PARAM = { scope: '/push/onesignal/' };\n    delete window._oneSignalInitOptions.path\n    window.OneSignal.init(window._oneSignalInitOptions);\n  });\n</script>",
      "language": "html",
      "name": "If Uploading Service Workers"
    },
    {
      "code": "<script>\n  window.OneSignal = window.OneSignal || [];\n  window.OneSignal.push(function() {\n    OneSignal.SERVICE_WORKER_UPDATER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js\";\n    OneSignal.SERVICE_WORKER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js\";\n    OneSignal.SERVICE_WORKER_PARAM = { scope: \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/\" };\n    delete window._oneSignalInitOptions.path\n    window.OneSignal.init(window._oneSignalInitOptions);\n  });\n</script>",
      "language": "html",
      "name": "If Not Uploading Service Workers"
    }
  ]
}
[/block]
This should lower CPU and memory usage as users return back to your site however this will be a slow process. Depending on how static files are hosted on your site however, this might still not be enough. This is why we recommend using a CDN such a CloudFlare as you can configure this to completely cache these file for you.

#### Solution 4 - os.tc Subdomain For New Sites
**(Not Recommended)**
If your setting up a new site you can our HTTP option instead of HTTPS as these service worker files will be hosted by os.tc for you. However, note that the HTTP has limitations on prompting options and shows a popup window to subscribe. Also, all notifications and the notification permission will show `yoursite.os.tc` instead of just `yoursite`.

---

## Notifications Not Being Sent

### No Recipients Error

If you are **JNews** Theme, go to JNews > Install Plugins > Desktop Push Notifications > Deactivate JNews - Push Notifications. More details [here](https://support.jegtheme.com/forums/topic/push-in-jnews/#post-58278).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c894ee8-Screen_Shot_2020-03-10_at_6.44.05_PM.png",
        "Screen Shot 2020-03-10 at 6.44.05 PM.png",
        2490,
        1438,
        "#ceced3"
      ]
    }
  ]
}
[/block]
###Debugging with Gutenberg
**Turn on `debug()`**:
1. Open the Dev Tools Console. To open the console, right click on the page, click `Inspect`, and click the Console tab.
2. While in the editor page, type `OneSignal.debug()` into the console. Hit ENTER. You should see `undefined` returned on the line below.
3. Publish your post/article. You should see some debug data display in the console. If you click on the `response_body`, you should see three values: 1) `id`, 2) `recipients`, and 3) `external_id`. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/26d732a-Screen_Shot_2019-07-23_at_6.46.04_PM.png",
        "Screen Shot 2019-07-23 at 6.46.04 PM.png",
        2228,
        544,
        "#edf7f7"
      ]
    }
  ]
}
[/block]
## Update Service Worker Scope
1. In the WordPress Admin go to OneSignal Push > Advanced Settings  and turn on "Disable OneSignal Initialization".
![image](https://user-images.githubusercontent.com/645861/41134900-a464bb90-6a83-11e8-95b5-692ab6655dda.png)

2. Add this code to your site to set the scope
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  window.OneSignal = window.OneSignal || [];\n  window.OneSignal.push(function() {\n    OneSignal.SERVICE_WORKER_UPDATER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js\";\n    OneSignal.SERVICE_WORKER_PATH = \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js\";\n    OneSignal.SERVICE_WORKER_PARAM = { scope: \"wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/\" };\n    delete window._oneSignalInitOptions.path\n    window.OneSignal.init(window._oneSignalInitOptions);\n  });\n</script>",
      "language": "html"
    }
  ]
}
[/block]