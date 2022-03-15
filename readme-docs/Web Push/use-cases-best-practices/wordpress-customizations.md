---
title: "WordPress Customizations"
slug: "wordpress-customizations"
excerpt: "Customizing the OneSignal Wordpress plugin"
hidden: true
createdAt: "2021-11-08T21:52:00.056Z"
updatedAt: "2021-11-08T21:52:19.227Z"
---
The [OneSignal WordPress plugin](https://wordpress.org/plugins/onesignal-free-web-push-notifications/) is the most popular and highly rated WordPress Plugin for Push Notifications. [Checkout the Source Code on Github](https://github.com/OneSignal/OneSignal-WordPress-Plugin).

The plugin adds a OneSignal `<script>` tag to each of your site's pages and loads our Web Push SDK with the options you've configured. You may use any of the documented [Web Push SDK JavaScript APIs](doc:web-push-sdk) to customize the web push experience.

Our plugin hooks in to WordPress whenever a post is created or modified, and sends a notification based on the settings you've configured. This guides shows how to use PHP to control what our plugin hooks into, and to modify the notification that gets sent out. 

OneSignal does not send push based on posts published using the WordPress mobile app.
[block:callout]
{
  "type": "info",
  "title": "Setup OneSignal WordPress Plugin",
  "body": "If you have not added the OneSignal WordPress plugin yet, visit [WordPress Setup](doc:wordpress) to get started!"
}
[/block]

----

#Customizing Subscription Prompts

##Setup Delays, Categories, and Email-SMS Slidedown Prompts

Currently you will need to add some Javascript to the site to customize the prompts.

###Step 1. Disable the Plugin Prompts
Open OneSignal WordPress Plugin and scroll to "Prompt Settings & Subscription Bell".

Toggle **off** the Slide and Native Prompt in the OneSignal Plugin. You can keep the Bell enabled if you want.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ff12526-Screen_Shot_2021-09-01_at_11.03.54_AM.png",
        "Screen Shot 2021-09-01 at 11.03.54 AM.png",
        2676,
        1054,
        "#e0dbdc"
      ]
    }
  ]
}
[/block]
###Step 2. Switch to a manual initialization of OneSignal

Scroll to the bottom of the plugin settings and **toggle on** "Disable OneSignal initialization". 

Press **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ba0ca1-Screen_Shot_2021-08-09_at_8.32.28_PM.png",
        "Screen Shot 2021-08-09 at 8.32.28 PM.png",
        1798,
        606,
        "#d2d5d7"
      ]
    }
  ]
}
[/block]
###Step 3. Add custom JavaScript code to your site. 

If you don't have a way to add JavaScript to your site, try the the [Insert Headers and Footers by WPBeginner](https://wordpress.org/plugins/insert-headers-and-footers/) plugin or [Custom CSS & JS](https://wordpress.org/plugins/custom-css-js/) WordPress plugin.

###Step 4. Code Examples 

Below are examples of different code you can use to customize your prompts. For more details see the <a href="https://documentation.onesignal.com/docs/slide-prompt" target="_blank">Slide Prompt Guide</a> or <a href="doc:category-prompt" target="_blank">Category Prompt</a> for more details.

[block:code]
{
  "codes": [
    {
      "code": "// Delay Only Example\nsetTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window.addEventListener('load', function() {\n    window._oneSignalInitOptions.promptOptions = {\n      slidedown: {\n        prompts: [\n          {\n            type: \"push\",\n            autoPrompt: true,\n            text: {\n              /* actionMessage limited to 90 characters */\n              actionMessage: \"Your Custom Action Message\",\n              /* acceptButton limited to 15 characters */\n              acceptButton: \"Yes\",\n              /* cancelButton limited to 15 characters */\n              cancelButton: \"No\",\n            },\n            delay: {\n              /* seconds to wait for display */\n              timeDelay: 1,\n              /* # pageviews for prompt to display */\n              pageViews: 1,\n            }\n          }\n        ]\n      }\n    }\n    window.OneSignal = window.OneSignal || [];\n    window.OneSignal.push(function() {\n      window.OneSignal.init(window._oneSignalInitOptions);\n    });\n  });\n}, 3000);",
      "language": "javascript",
      "name": "Delay Only Example"
    },
    {
      "code": "setTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window.addEventListener('load', function() {\n    window._oneSignalInitOptions.promptOptions = {\n      slidedown: {\n        prompts: [\n          {\n            type: \"category\",\n            autoPrompt: true,\n            text: {\n              /* actionMessage limited to 90 characters */\n              actionMessage: \"Your Custom Action Message\",\n              /* acceptButton limited to 15 characters */\n              acceptButtonText: \"Yes\",\n              /* cancelButton limited to 15 characters */\n              cancelButtonText: \"No\",\n              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */\n              negativeUpdateButton:\"Cancel\",\n              positiveUpdateButton:\"Save Preferences\",\n              updateMessage: \"Update your push notification subscription preferences.\",\n            },\n            delay: {\n              /* seconds to wait for display */\n              timeDelay: 1,\n              /* # pageviews for prompt to display */\n              pageViews: 1,\n            },\n            categories: [\n              {\n                tag: \"politics\",\n                label: \"Politics\",\n              },\n              {\n                tag: \"usa_news\",\n                label: \"USA News\",\n              },\n              {\n                tag: \"world_news\",\n                label: \"World News\",\n              },\n              {\n                tag: \"culture\",\n                label: \"Culture\",\n              }\n            ]\n          }\n        ]\n      }\n    }\n    window.OneSignal = window.OneSignal || [];\n    window.OneSignal.push(function() {\n      window.OneSignal.init(window._oneSignalInitOptions);\n    });\n  });\n}, 3000);",
      "language": "javascript",
      "name": "Delay with Categories Example"
    },
    {
      "code": "setTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window.addEventListener('load', function() {\n    window._oneSignalInitOptions.promptOptions = {\n      slidedown: {\n        prompts: [\n          {\n            type: \"push\",\n            autoPrompt: true,\n            text: {\n              /* actionMessage limited to 90 characters */\n              actionMessage: \"Your Custom Action Message\",\n              /* acceptButton limited to 15 characters */\n              acceptButton: \"Custom Yes button\",\n              /* cancelButton limited to 15 characters */\n              cancelButton: \"Custom No button\",\n            },\n            delay: {\n              /* seconds to wait for display */\n              timeDelay: 1,\n              /* # pageviews for prompt to display */\n              pageViews: 1,\n            }\n          },\n\t\t\t{\n            type: \"email\",\n            autoPrompt: true,\n            text: {\n              /* actionMessage limited to 90 characters */\n              actionMessage: \"We'd like to send you emails for the latest Aggie news and updates.\",\n              /* acceptButton limited to 15 characters */\n              acceptButton: \"Sign up\",\n              /* cancelButton limited to 15 characters */\n              cancelButton: \"Cancel\",\n            },\n            delay: {\n              pageViews: 2,//# pageviews for prompt to display\n              timeDelay: 2,//seconds to wait for display\n            },\n          }\n        ]\n      }\n    }\n    window.OneSignal = window.OneSignal || [];\n    window.OneSignal.push(function() {\n      window.OneSignal.init(window._oneSignalInitOptions);\n    });\n  });\n}, 3000);",
      "language": "javascript",
      "name": "Delay with Push and Email Example"
    }
  ]
}
[/block]
####Debugging 

If your prompt is not showing up, then you can add the function without the event listener. The delay time will start before the page is fully loaded though, and you will need this function to be placed after the other OneSignal initialization code.
[block:code]
{
  "codes": [
    {
      "code": "// Delay Only Example without event listener\nsetTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window._oneSignalInitOptions.promptOptions = {\n    slidedown: {\n      prompts: [\n        {\n          type: \"push\",\n          autoPrompt: true,\n          text: {\n            /* actionMessage limited to 90 characters */\n            actionMessage: \"Your Custom Action Message\",\n            /* acceptButton limited to 15 characters */\n            acceptButton: \"Yes\",\n            /* cancelButton limited to 15 characters */\n            cancelButton: \"No\",\n          },\n          delay: {\n            /* seconds to wait for display */\n            timeDelay: 1,\n            /* # pageviews for prompt to display */\n            pageViews: 1,\n          }\n        }\n      ]\n    }\n  }\n  window.OneSignal = window.OneSignal || [];\n  window.OneSignal.push(function() {\n    window.OneSignal.init(window._oneSignalInitOptions);\n  });\n}, 3000);",
      "language": "javascript"
    }
  ]
}
[/block]
##How to restrict the OneSignal WordPress plugin to certain pages

We offer two options (that can optionally be combined) to enable the OneSignal WordPress plugin to only appear on certain pages.

###Option 1. Initializing OneSignal Conditionally From Server-Side PHP

See [Customizing WordPress Plugin Behavior](#customizing-wordpress-plugin-behavior) and [`onesignal_initialize_sdk` filter](#onesignal_initialize_sdk-filter). Using this hook allows server-side PHP code to determine when to initialize OneSignal.

This is useful if you want to target pages based on properties that are only available on the server side.

### Option 2. Manually Initializing OneSignal From Client-Side JS

In **OneSignal Push WordPress plugin > Advanced Settings > Toggle on "Disable OneSignal initialization"**. Then click **Save**. When enabled, OneSignal will not be automatically initialized on any page, and you must add JavaScript code to each page to manually initialize OneSignal.

This creates a global JavaScript variable on the page - `window._oneSignalInitOptions` - that you can use to initialize OneSignal any time you choose. You can add conditional JavaScript rules to modify when you'd like to initialize OneSignal. The following JS snippet initializes OneSignal.
[block:code]
{
  "codes": [
    {
      "code": "setTimeout(function(){\n  console.log(\"about to initialize OneSignal\"); \n  window.OneSignal = window.OneSignal || [];\n  window.OneSignal.push(function() {\n    window.OneSignal.init(window._oneSignalInitOptions);\n  });\n}, 10000);",
      "language": "javascript"
    }
  ]
}
[/block]
For more details and code samples see [Customizing Subscription Prompts](#customizing-subscription-prompts).

##How do I translate the Prompt?

For single language, simply add the translation you desire into the prompt fields provided. See [WordPress Setup](doc:wordpress#step-6-add-prompts-to-your-wordpress-site) for details.

For multi-language, follow one of the options [How to restrict the OneSignal WordPress plugin to certain pages](#how-to-restrict-the-onesignal-wordpress-plugin-to-certain-pages). If you use the option to Manually Initialize OneSignal from Client-Side JS, you can use the "Slide Prompt Example" code and update the text inside "Your Custom Action Message", "Custom Yes button" and "Custom No button" based on the language for that page. 



----

#How do I categorize users and send notifications to specific categories of users?
OneSignal provides [Data Tagging functionality](doc:add-user-data-tags) to categorize users and send notifications to all subscribers that match one or more of those categories.

This requires JavaScript and PHP coding. If you're not familiar with how to add JavaScript code to your WordPress site, you can try the [Insert Headers and Footers by WPBeginner](https://wordpress.org/plugins/insert-headers-and-footers/) plugin.

###Step 1. Tag Users In OneSignal With Custom Code

Please read our [Data Tags Overview](doc:add-user-data-tags) to learn what it means to tag users in OneSignal. Then see [Data Tag SDK Implementation](doc:data-tag-implementation) for the JavaScript Code required for adding tags through our SDK.

If you want to setup a prompt to tag users instead, see below [Setup Delayed, Category, and Email-SMS Slidedown Prompts](#setup-delayed-category-and-email-sms-slidedown-prompts).

###Step 2. Intercept Notification Sending

Once users are categorized with tags, you can setup [Segments](doc:segmentation) within your OneSignal.com dashboard and the **User Tag** filter.

You can target your created segments by intercepting our WordPress plugin's notification sending code. See [Customizing WordPress Plugin Behavior](#customizing-wordpress-plugin-behavior) for more details. 

You will want to use the [`onesignal_send_notification` filter](#onesignal_send_notification-filter) within your custom code. 

You can use the code snippet below as a starting point (be sure to modify "PUT YOUR SEGMENT NAME HERE" with the segment name you specified in the OneSignal dashboard):
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_send_notification', 'onesignal_send_notification_filter', 10, 4);\n\nfunction onesignal_send_notification_filter($fields, $new_status, $old_status, $post)\n{\n   /* Change which segment the notification goes to */\n  $fields['included_segments'] = array('PUT YOUR SEGMENT NAME HERE');\n  \n  return $fields;\n}",
      "language": "php"
    }
  ]
}
[/block]
----

#Set the post's featured image for notification icon and image

**Your theme must support featured images.** Not all themes support featured images (you may want to contact the theme author if you are having trouble with this). One way to check if your theme supports featured images is by opening the theme editor (Appearance > Editor), finding the `functions.php` file, and search for `post-thumbnails`. You should see:

`add_theme_support( 'post-thumbnails' ); `

If you do not see this, your theme does not support featured images for posts. For more details on `post-thumbnails`, see [WordPress's Post Thumbnails documentation](https://codex.wordpress.org/Post_Thumbnails). 

To set the featured image as an icon and/or a large image, simply toggle on/off the desired settings in **OneSignal Push > Sent Notification Settings**.

Once you're done, be sure to click "Save" at the bottom.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fafaeea-Screen_Shot_2021-08-09_at_8.24.33_PM.png",
        "Screen Shot 2021-08-09 at 8.24.33 PM.png",
        1752,
        266,
        "#cfd3d6"
      ]
    }
  ]
}
[/block]
- - --

#Customizing WordPress Plugin Behavior

## Automatically check or uncheck the Send Notification checkbox by default

To send automatically (not check the box each time), go to the **OneSignal Push** Plugin Settings > Automatic Notification Settings > check **Automatically send a push notification when I create a post from the WordPress editor** > Press **Save** at the bottom.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4af55ad-Screen_Shot_2021-08-09_at_6.18.37_PM.png",
        "Screen Shot 2021-08-09 at 6.18.37 PM.png",
        1966,
        368,
        "#d5d7d9"
      ]
    }
  ]
}
[/block]
This setting will make the checkbox unchecked or checked by default on all posts.

If your 3rd party plugin uses a custom post type, you can leverage our [`onesignal_meta_box_send_notification_checkbox_state`  filter](#onesignal_meta_box_send_notification_checkbox_state-filter) to keep this permanently activated.

##### Issue: There were "no recipients"

Perhaps you are attempting to send multiple notifications for the same post in a short period of time. The initial push notification will go through, but subsequent pushes for the same post will be rate-limited to a one-minute interval.

##### Issue: My push notification is not scheduling

Scheduling from the WordPress scheduler may or may not work depending on if your WordPress theme is blocking our plugin from sending the notification when the post gets published.

If the scheduler does not work, your options would be:

1. Schedule the notification for the same time as the post from the OneSignal Dashboard or API. See [Sending Push Messages](doc:sending-notifications) and [Product Demo Video](doc:product-overview) 
2. Add custom code to the plugin to schedule it. In this example, you will find how the send notification code looks in the [onesignal_send_notification filter](#onesignal_send_notification-filter. The code sample below demonstrates how to change the delivery time on the notification:

See our [API Delivery Parameters](https://documentation.onesignal.com/reference#delivery) for more information.

3. You can use the [Zapier](doc:zapier) OneSignal integration to send an automated notification based on a specific trigger.

## For Posts Created From 3rd Party Plugins

### "Post" Post Types

Make sure that **Automatically send a push notification when I publish a post from 3rd party plugins** is checked, as shown here:

<img src="http://i.imgur.com/gxAslQH.png">

### Custom Post Types

If your 3rd party plugin is using custom post types, a notification *will not* be sent out by default. You must add the custom post type to this text box (comma-separated) to allow our plugin to automatically send notifications. This is to prevent accidental spam if a plugin sends many notifications of a custom type.

<img src="http://i.imgur.com/TQ2LsBu.png">

A list of WooCommerce Custom Post types can be found here: https://docs.woocommerce.com/document/installed-taxonomies-post-types/

##### Finding The Custom Post Type

When creating the Custom Post Type in the WordPress post editor, you will usually see the custom `post_type` name within the URL in your browser's address bar. 

For example, `https://yoursite.com/wp-admin/post-new.php?post_type=this_is_the_custom_post_type_name`.

In the above example, the custom post type name within the URL is `this_is_the_custom_post_type_name`.

You can add that into the "Additional Custom Post Types for Automatic Notifications..." field in the OneSignal WordPress Plugin by separating it from other types by a comma, like this: `article,this_is_the_custom_post_type_name`

#### My Custom Post Type is Not Working

Certain post types may lack the necessary meta data our plugin uses to send the push notification.

Using our [`onesignal_include_post` Filter](#onesignal_include_post-filter) you can add your `post_type`. OneSignal's WordPress plugin is [open source on Github](https://github.com/OneSignal/OneSignal-WordPress-Plugin).

### Send Push When a Page is Published

See our example code under [`onesignal_include_post` Filter](#onesignal_include_post-filter). More details on [WordPress Post Types](https://wordpress.org/support/article/post-types/).

#### For RSS Feed Updates

[Zapier](https://www.zapier.com) is a 3rd party service that allows you to perform actions when a  trigger occurs, such as publishing a new post. OneSignal has a Zapier integration for RSS feed updates. You can [see the OneSignal Zapier integration here](https://zapier.com/zapbook/onesignal) for more details.

---

# Sending Web And Mobile Notifications Together With WordPress

If you have both a website and mobile app platforms configured in your OneSignal dashboard, and you have subscribers on both platforms, you can configure the OneSignal WordPress plugin to send both web and mobile notifications to your subscribers.

The instructions below demonstrate how to configure a link to open a web browser when the web push notification is clicked, and how to open your mobile app when the mobile notification is tapped. 
Custom code is required to accomplish these steps.

#### Method 1. Show the URL with an in-app browser

Turn on this switch in your OneSignal WordPress plugin: 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d64470-c33ad19-cr3uBcL.png",
        "c33ad19-cr3uBcL.png",
        580,
        64,
        "#f1f2f4"
      ]
    }
  ]
}
[/block]
That will send the notifications to your mobile apps upon publishing a post. Done!

#### Method 2. Deep Linking

Turn OFF the **Send notifications additional to iOS & Android platforms** switch. (This option does not allow customizing the mobile notifications, so we have to disable this option first.)

Add the `onesignal_send_notification` filter code (examples below) into a PHP file that will always be called on all of your pages. We recommend using [WordPress' must-use plugins feature](https://www.sitepoint.com/wordpress-mu-plugins/), which allows you to add your code to a specific file and directory that is protected from being overwritten by updates to our plugin or WordPress.

##### WordPress Code Placement

1. Look in your `wp-content` directory for the `mu-plugins` directory. If it doesn't exist, create it
2. Create a file in the `mu-plugins` directory called "onesignal-mobile-support.php"
3. Add the code snippet that matches your use case to the file and save it

##### Sending Notifications To Mobile Devices Only (No Browsers)
[block:code]
{
  "codes": [
    {
      "code": "<?php\nfunction onesignal_send_notification_filter($fields, $new_status, $old_status, $post)\n{\n    $fields['isAndroid'] = true;\n    $fields['isIos'] = true;\n    $fields['isAnyWeb'] = false;\n    $fields['isChrome'] = false;\n    $fields['data'] = array(\n        \"myappurl\" => $fields['url']\n    );\n    /* Unset the URL to prevent opening the browser when the notification is clicked */\n    unset($fields['url']);\n    return $fields;\n}",
      "language": "php"
    }
  ]
}
[/block]
##### Sending Notifications To Both Web Browsers And Mobile Devices
[block:code]
{
  "codes": [
    {
      "code": "<?php\n    add_filter('onesignal_send_notification', 'onesignal_send_notification_filter', 10, 4);\n    function onesignal_send_notification_filter($fields, $new_status, $old_status, $post) {\n        /* Goal: We don't want to modify the original $fields array, because we want the original web push notification to go out unmodified. However, we want to send an additional notification to Android and iOS devices with an additionalData property.\n         *     */\n        $fields_dup = $fields;\n        $fields_dup['isAndroid'] = true;\n        $fields_dup['isIos'] = true;\n        $fields_dup['isAnyWeb'] = true;\n        // $fields_dup['android_channel_id'] = \"<CHANNEL ID UUID HERE>\";\n        $fields_dup['data'] = array(\"customkey\" => $fields['url']);\n        /* Important to set web_url to support opening through both mobile and browser*/\n        $fields_dup['web_url'] = $fields_dup['url'];\n        /* Important to unset the URL to prevent opening the browser when the notification is clicked for mobile app users */\n        unset($fields_dup['url']);\n        $onesignal_post_url = \"https://onesignal.com/api/v1/notifications\";\n        /* Hopefully OneSignal::get_onesignal_settings(); can be called outside of the plugin */\n        $onesignal_wp_settings = OneSignal::get_onesignal_settings();\n        $onesignal_auth_key = $onesignal_wp_settings['app_rest_api_key'];\n        $request = array(\"headers\" => array(\"content-type\" => \"application/json;charset=utf-8\", \"Authorization\" => \"Basic \" . $onesignal_auth_key), \"body\" => json_encode($fields_dup), \"timeout\" => 60);\n        $response = wp_remote_post($onesignal_post_url, $request);\n        if (is_wp_error($response) || !is_array($response) || !isset($response['body'])) {\n            $status = $response->get_error_code();\n            $error_message = $response->get_error_message();\n            error_log(\"There was a \" . $status . \" error returned from OneSignal when sending to mobile users: \" . $error_message);\n            return;\n        }\n        return $fields;\n    }",
      "language": "php"
    }
  ]
}
[/block]
Within your Mobile App's [OneSignal Notification Click Handler](https://documentation.onesignal.com/docs/sdk-reference#onesignal-notification-events) add code to detect the `result.notification.payload.additionalData` which should be set to `customkey` parameter like shown in our [Deep Linking Guide](https://documentation.onesignal.com/docs/links#deep-linking-with-additional-data).

----

#Action and Filter Hooks

Our WordPress plugin comes with some built-in [action and filter hooks](https://www.tipsandtricks-hq.com/wordpress-action-hooks-and-filter-hooks-an-introduction-4163) that allow you to write custom PHP code to extend our plugin's functionality.
[block:parameters]
{
  "data": {
    "h-0": "Hook or Filter Name",
    "h-1": "Usage",
    "h-2": "Description",
    "0-2": "Override any notification parameter, add extra parameters, remove extra parameters, and even send multiple notifications using the same call.",
    "0-0": "[onesignal_send_notification](#onesignal_send_notification-filter) filter",
    "0-1": "Customizing push notification data",
    "1-0": "[onesignal_initialize_sdk](#onesignal_initialize_sdk-filter) filter",
    "1-1": "Filter OneSignal's initialization",
    "1-2": "Customize which pages should initialize OneSignal.",
    "2-0": "[onesignal_meta_box_send_notification_checkbox_state](#onesignal_meta_box_send_notification_checkbox_state-filter) filter",
    "2-1": "Automatically check or uncheck the Send Push Notification post meta checkbox",
    "2-2": "Make it easier to automatically send notifications for certain kind of posts.",
    "3-0": "[onesignal_include_post & onesignal_exclude_post](#onesignal_include_post-filter) filter",
    "3-1": "Customizing sending posts by post type",
    "3-2": "Enable or disable sending notifications for certain post types."
  },
  "cols": 3,
  "rows": 4
}
[/block]
## Where should custom PHP code be placed?

**IMPORTANT:** For all the following example usage calls, you'll have to copy and paste the PHP code into a file that will always be called. 

We recommend using [WordPress' must-use plugins feature](https://www.sitepoint.com/wordpress-mu-plugins/), which allows you to add your code to a specific file and directory that is protected from being overwritten by updates to our plugin or WordPress.

The goal is to add the below code to this file so that it will get called when our plugin takes the specified action. 

Here's a PHP code example to modify the title and body using a file called `wp-content/mu-plugins/onesignal-filters.php`:

```php
<?php
add_filter('onesignal_send_notification', 'onesignal_send_notification_filter', 10, 4);

function onesignal_send_notification_filter($fields, $new_status, $old_status, $post)
{
  $fields['headings'] = array("en" => "English notification title");
  $fields['contents'] = array("en" => "English notification message body");

  return $fields;
}
```

## onesignal_initialize_sdk Filter

Return `true` to allow our WordPress plugin to automatically initialize our web SDK on the target page, which (if you've configured to do so) will create our subscription widgets (like the red subscription bell or slide prompt).

Return `false` to prevent our WordPress plugin from automatically initializing our web SDK on the target page.

You can customize when you would like the SDK to be initialized by returning `true` for some pages and `false` for other pages.

On pages in which you are returning `false`, our plugin will not automatically initialize our web SDK, and you must initialize OneSignal manually on those pages using client-side JavaScript code on the page. 

All the configuration options you've set on our WordPress plugin are still outputted to the page, in a variable called `window._oneSignalInitOptions`. You must then manually initialize OneSignal by calling  `OneSignal.init(window._oneSignalInitOptions);` in the client-side JavaScript code of the page. You may [modify `window._oneSignalInitOptions` according to our Web SDK `init()` documentation](doc:web-push-sdk#init).

On pages in which you are returning `true`, the target pages will be automatically initialized, unless you have the option **Use my own SDK initialization script** enabled in the OneSignal WordPress Settings page (this setting should be located near the bottom of the page).

Enabling **Use my own SDK initialization script** in our plugin's options is equivalent to returning `false` for all pages; our plugin will no longer automatically initialize the web SDK on any pages, and you must then manually initialize OneSignal using JavaScript on all pages where you want to use it. 
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_initialize_sdk', 'onesignal_initialize_sdk_filter', 10, 1);\nfunction onesignal_initialize_sdk_filter($onesignal_settings) {\n    /* Returning true allow the SDK to initialize normally on the current page */\n    /* Returning false prevents the SDK from initializing automatically on the current page */\n    return true;\n}",
      "language": "php",
      "name": "onesignal_initialize_sdk Filter Example"
    }
  ]
}
[/block]
## onesignal_meta_box_send_notification_checkbox_state Filter

Overrides the state of the ["Send notification on post publish"](http://i.imgur.com/xJ4BuSb.png) post meta box checkbox.
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_meta_box_send_notification_checkbox_state', 'filter', 10, 2);\n/* Available keys for $onesignal_wp_settings: https://github.com/OneSignal/OneSignal-WordPress-Plugin/blob/master/onesignal-settings.php#L5 */\nfunction filter($post, $onesignal_wp_settings) {\n  /* Always leave the checkbox \"Send notification on <post type> <action> (e.g. post publish)\" unchecked */\n  return false;\n}   ",
      "language": "php",
      "name": "onesignal_meta_box_send_notification_checkbox_state Filter Example"
    }
  ]
}
[/block]
## onesignal_send_notification Filter

Called after all notification creation parameters have been determined, and right before the notification is actually sent.

You may modify any of the parameters to:

- Change the notification's title, message, and URL
- Send the notification to additional platforms (like Android and iOS)
- Prevent the notification from being sent to certain platforms
- Schedule the notification to be sent in the future
- Add [call-to-action buttons](https://documentation.onesignal.com/docs/action-buttons) 
- Cancel the notification from being sent

Please see our [Create notification documentation](ref:create-notification) for the full parameter list and descriptions of what's accepted in the `$fields` hash.
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_send_notification', 'onesignal_send_notification_filter', 10, 4);\n\nfunction onesignal_send_notification_filter($fields, $new_status, $old_status, $post)\n{\n   /* Change the notification's title, message, and URL */\n  $fields['headings'] = array(\"en\" => \"English notification title\");\n  $fields['contents'] = array(\"en\" => \"English notification message body\");\n  $fields['url'] = 'https://example.com';\n  \n  /* Send to additional platforms (e.g. Android and iOS) */\n  $fields['isAndroid'] = true;\n  $fields['isIos'] = true;\n  \n  /* Prevent the notification from being sent to certain platforms */\n  $fields['isFirefox'] = false;\n  \n  /* Schedule the notification to be sent in the future */\n  $fields['send_after'] = \"Sept 24 2018 14:00:00 GMT-0700\";\n  \n  /* Schedule the notification to be delivered at the specific hour of the destination timezone */\n  $fields['delayed_option'] = 'timezone';\n  $fields['delivery_time_of_day'] = '9:00AM';\n  \n  /* Add web push action buttons (different action buttons are used for Android and iOS) */\n  $fields['web_buttons'] = array(\n    \"id\" => \"like-button\",\n    \"text\" => \"Like\",\n    \"icon\" => \"http://i.imgur.com/N8SN8ZS.png\",\n    \"url\" => \"https://example.com\"\n  );\n  \n  /* Cancel the notification from being sent */\n  $fields['do_send_notification'] = false;\n  \n  return $fields;\n}",
      "language": "php",
      "name": "onesignal_send_notification Filter Example"
    }
  ]
}
[/block]
## onesignal_include_post Filter

Called every time a post's status changes as part of WordPress's [transition_post_status](https://codex.wordpress.org/Post_Status_Transitions#transition_post_status_Hook).

Returning `true` will always send a notification for the specified post. Returning `false` does nothing; it simply passes control back to our main plugin logic. 

It's important to note that returning `false` does not exclude the post -- that is done in the `onesignal_exclude_post` filter.
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_include_post', 'onesignal_include_post_filter', 10, 3);\nfunction onesignal_include_post_filter($new_status, $old_status, $post) {\n  return false;\n}",
      "language": "php",
      "name": "onesignal_include_post Filter Example"
    }
  ]
}
[/block]
Using the `onesignal_include_post` filter to send notifications when a page/post is published:
[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_include_post', 'onesignal_include_post_filter', 10, 3);\nfunction onesignal_include_post_filter($new_status, $old_status, $post) {\n\tif ($post->post_type == \"page\" && $new_status == \"publish\") {\n\t\treturn true;\n\t}\n}",
      "language": "php",
      "name": "Send notification on publish example"
    }
  ]
}
[/block]
## onesignal_exclude_post Filter

Called every time a post's status changes as part of WordPress's [transition_post_status](https://codex.wordpress.org/Post_Status_Transitions#transition_post_status_Hook).

Returning `true` will never send a notification for the specified post. 

Returning `false` does nothing; it simply passes control back to our main plugin logic. 

It's important to note returning `false` does not include the post -- that is done in the `onesignal_include_post` filter.

[block:code]
{
  "codes": [
    {
      "code": "<?php\nadd_filter('onesignal_exclude_post', 'onesignal_exclude_post_filter', 10, 3);\nfunction onesignal_exclude_post_filter($new_status, $old_status, $post) {\n  return false;\n}",
      "language": "php",
      "name": "onesignal_exclude_post Filter Example"
    }
  ]
}
[/block]
### Using Include & Exclude Filters Together

You can use the `onesignal_include_post` and `onesignal_exclude_post` filter together, or individually. The order of operations is *INCLUDE => EXCLUDE*. 

The `onesignal_include_post` filter is run first to determine whether a post is included. 

If a post is not included, the `onesignal_exclude_post` filter is run next to determine whether this post is excluded. If the post is not excluded, our normal plugin logic runs.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/357ebc7-Untitled_Diagram.jpg",
        "Untitled Diagram.jpg",
        429,
        389,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]

---

# Why am I seeing "Couldn't load wp.data"?

- **WordPress 5 + Gutenberg**: `wp.data` is necessary for displaying notices (information banners on push notifications and delivery). If it isn't loading in the editor and you are using Gutenberg, there may be a problem with your setup. Please reach out to OneSignal's Support Team if you're seeing this warning.
- **WordPress 4.0**: `wp.data` is not necessary for notices in WordPress 4+ using the regular editor. You can ignore this warning.

# Setup WordPress and Non-WordPress site

Select our [Custom Code Setup](doc:web-push-custom-code-setup) in the OneSignal dashboard. This will be used for both the WordPress and non-wordpress parts of your site.

The WordPress plugin already adds the [OneSignal Service Worker](doc:onesignal-service-worker-faq) files needed but for non-wordpress pages, you still need to add the OneSignal init code.

Use the following code on your site, make sure to replace with your OneSignal app id used in the WordPress plugin:
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n   var OneSignal = window.OneSignal || [];\n    var initConfig = {\n        appId: \"REPLACE_WITH_YOUR_APP_ID_IN_WORDPRESS_PLUGIN\",\n        notifyButton: {\n            enable: true\n        },\n    };\n    OneSignal.push(function () {\n        OneSignal.SERVICE_WORKER_PARAM = { scope: '/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/' };\n        OneSignal.SERVICE_WORKER_PATH = 'wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKWorker.js'\n        OneSignal.SERVICE_WORKER_UPDATER_PATH = 'wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/OneSignalSDKUpdaterWorker.js'\n        OneSignal.init(initConfig);\n    });\n</script>",
      "language": "javascript"
    }
  ]
}
[/block]