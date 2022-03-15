---
title: "Web Push Examples"
slug: "web-push-custom-code-examples"
excerpt: "Commonly Asked Examples For Web Push"
hidden: true
createdAt: "2017-06-01T01:10:01.483Z"
updatedAt: "2021-07-23T00:56:12.428Z"
---
This guide shares commonly asked for code examples for theOneSignal Web Push SDK methods. Such as:
- [Adding A Prompt Delay](#section-add-delay-to-prompt)
- [Location Tracking](#section-add-location-tracking)
- [Delay Initialization Until Consent Provided For Data Privacy](#using-requiresuserprivacyconsent)

----
# Custom Code Initialization
How to initialize OneSignal with [Custom Code Setup](doc:web-push-custom-code-setup) 
[block:callout]
{
  "type": "warning",
  "title": "For Custom Code Setup only",
  "body": "Skip this section if using the Typical Setup or Site Builder (Wordpress) setup."
}
[/block]
#### *IMPORTANT* Setup Instructions
**1.** Do not host `OneSignalSDK.js` yourself, use our CDN URL instead.

**2** Add your `appid` which is found in <a class="dash-link" href="/docs/accounts-and-keys#section-keys-ids">Keys & IDs</a>. 

**3.** Make sure your URL is spelled correctly. Do not include `www` in the URL if your site does not use it. Also do include `www` in the URL if your site does use it.

## Custom Code HTTPS Initialization
For <span class="label-all label-yes">HTTPS</span> sites.

Calling [OneSignal.showNativePrompt();](doc:web-push-sdk#shownativeprompt) will show the native browser prompt right away.
[block:code]
{
  "codes": [
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        notifyButton: {\n          enable: true,\n        },\n      });\n      OneSignal.showNativePrompt();\n    });\n  </script>\n</head>",
      "language": "javascript"
    }
  ]
}
[/block]
## Custom Code HTTP Initialization
For <span class="label-all label-no">HTTP</span> sites, or HTTPS sites using For <span class="label-all label-no">HTTP</span>:
[block:code]
{
  "codes": [
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        subdomainName:\"YOUR_LABEL\"/* The label for your site that you added in Site Setup mylabel.os.tc */\n        notifyButton: {\n          enable: true,\n        },\n      });\n    });\n  </script>\n</head>",
      "language": "javascript"
    }
  ]
}
[/block]
## HTTP SETUP For HTTPS Site
**Used on HTTPS sites that require the HTTP setup**
`subdomainName` is the label you have chosen in [Site Setup](https://documentation.onesignal.com/docs/web-push-custom-code-setup#my-site-is-not-fully-https)
[block:code]
{
  "codes": [
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        subdomainName:\"YOUR_LABEL\"/* The label for your site that you added in Site Setup mylabel.os.tc */\n        notifyButton: {\n          enable: true,\n        },\n      });\n    });\n  </script>\n</head>",
      "language": "javascript"
    }
  ]
}
[/block]
----
# HTTPS Setup for resubscribing users
The below setups are mainly for silently importing users into OneSignal or handle automatically re-subscribing users when they have already subscribed to the site and deleted their browser cookies.

This can be done with [Typical Setup](doc:web-push-typical-setup) or [Custom Code Setup](doc:web-push-custom-code-setup).

----
# Using requiresUserPrivacyConsent
For [Typical Setup](doc:web-push-typical-setup) and [Custom Code Setup](doc:web-push-custom-code-setup) 

This will prevent our sdk from being initialized until your receive consent from your users. In which case you can then call the [provideUserConsent method](https://documentation.onesignal.com/docs/web-push-sdk#provideuserconsent) to initialize the SDK.
[block:code]
{
  "codes": [
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        requiresUserPrivacyConsent: true,\n        autoResubscribe: false,\n        notifyButton: {\n          enable: true,\n        },\n      });\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTPS requiresUserPrivacyConsent Example"
    },
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    var OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        requiresUserPrivacyConsent: true,\n        subdomainName:\"YOUR_LABEL\"/* The label for your site that you added in Site Setup mylabel.os.tc */\n        notifyButton: {\n          enable: true,\n        },\n      });\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTP requiresUserPrivacyConsent Example"
    }
  ]
}
[/block]
----
# Welcome Notifications

Welcome notifications are a great on-boarding experience for users who have just signed up to your site, because they give users immediate feedback on what the experience of receiving web push notifications from your site will be like.

If welcome notifications are enabled, as soon as a user subscribes to push notifications on your site, they will receive a notification thanking them for joining.

## Typical Setup Welcome Notification
See [Step 4. Welcome Notification](https://documentation.onesignal.com/docs/web-push-typical-setup#step-4-welcome-notification).

Make sure to press save twice. Once on the setup prompt and again on the Typical setup config page at the bottom.

## Wordpress Welcome Notification
This is done under the "Welcome Notification Settings"
[block:html]
{
  "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9IYvSj38iec\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>"
}
[/block]
## Custom Code Welcome Notification

Use the `welcomeNotification` parameter in your [init()](doc:web-push-sdk#section--init-) options. The `url` parameter is, by default, set to a special value that, on Chrome and Firefox, disables the notification from opening a separate webpage. By default, Safari must open a webpage and it will default to your site's URL. You may optionally set `url` so the notification opens a separate URL (on Chrome, Safari, and Firefox).

**Showing a Welcome Notification**
[block:code]
{
  "codes": [
    {
      "code": "// Other init Options\nwelcomeNotification: {\n  \"title\": \"My Custom Title\",\n  \"message\": \"Thanks for subscribing!\",\n  // \"url\": \"\" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */\n}",
      "language": "javascript"
    },
    {
      "code": "<head>\n  <link rel=\"manifest\" href=\"/manifest.json\" />\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    var OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        autoResubscribe: true,\n        notifyButton: {\n          enable: true,\n        },\n        welcomeNotification: {\n          \"title\": \"My Custom Title\",\n          \"message\": \"Thanks for subscribing!\",\n          // \"url\": \"\" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */\n        }\n      });\n      OneSignal.showNativePrompt();\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTPS Code Example"
    },
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    var OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        subdomainName:\"YOUR_LABEL\"/* The label for your site that you added in Site Setup mylabel.os.tc */\n        notifyButton: {\n          enable: true,\n        },\n        welcomeNotification: {\n          \"title\": \"My Custom Title\",\n          \"message\": \"Thanks for subscribing!\",\n          // \"url\": \"\" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */\n        }\n      });\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTP Code Example"
    }
  ]
}
[/block]
**Disabling Welcome Notifications**
[block:code]
{
  "codes": [
    {
      "code": "// Other init options\nwelcomeNotification: {\n    disable: true\n}",
      "language": "javascript"
    },
    {
      "code": "<head>\n  <link rel=\"manifest\" href=\"/manifest.json\" />\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    var OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        autoResubscribe: true,\n        notifyButton: {\n          enable: true,\n        },\n        welcomeNotification: {\n          disable: true\n        }\n      });\n      OneSignal.showNativePrompt();\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTPS Code Example"
    },
    {
      "code": "<head>\n  <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n  <script>\n    var OneSignal = window.OneSignal || [];\n    OneSignal.push(function() {\n      OneSignal.init({\n        appId: \"YOUR_APP_ID\",\n        subdomainName:\"YOUR_LABEL\"/* The label for your site that you added in Site Setup mylabel.os.tc */\n        notifyButton: {\n          enable: true,\n        },\n        welcomeNotification: {\n          disable: true\n        }\n      });\n    });\n  </script>\n</head>",
      "language": "javascript",
      "name": "HTTP Code Example"
    }
  ]
}
[/block]
- - --
## Custom Link Prompt
<span class="label-all label-developers">Custom Code</span>

<img src="https://i.imgur.com/nOBMmPI.png"/>


#### Trigger Custom Link Prompt
Instead of using our pre-built templates, you may also choose to create your own Prompt with a link. 

<span class="label-all label-yes">HTTPS</span> - this link prompts a browser Permission Request when clicked. 

<span class="label-all label-no">HTTP</span> - this link opens the HTTP Pop-Up Prompt.

We highly recommend only showing this custom Prompt and link if the user is unsubscribed. Below is an example of code that does this:
[block:code]
{
  "codes": [
    {
      "code": "<body>\n    <a href=\"#\" id=\"my-notification-button\" style=\"display: none;\">Subscribe to Notifications</a>\n    <script>\n    function onManageWebPushSubscriptionButtonClicked(event) {\n        getSubscriptionState().then(function(state) {\n            if (state.isPushEnabled) {\n                /* Subscribed, opt them out */\n                OneSignal.setSubscription(false);\n            } else {\n                if (state.isOptedOut) {\n                    /* Opted out, opt them back in */\n                    OneSignal.setSubscription(true);\n                } else {\n                    /* Unsubscribed, subscribe them */\n                    OneSignal.registerForPushNotifications();\n                }\n            }\n        });\n        event.preventDefault();\n    }\n\n    function updateMangeWebPushSubscriptionButton(buttonSelector) {\n        var hideWhenSubscribed = false;\n        var subscribeText = \"Subscribe to Notifications\";\n        var unsubscribeText = \"Unsubscribe from Notifications\";\n\n        getSubscriptionState().then(function(state) {\n            var buttonText = !state.isPushEnabled || state.isOptedOut ? subscribeText : unsubscribeText;\n\n            var element = document.querySelector(buttonSelector);\n            if (element === null) {\n                return;\n            }\n\n            element.removeEventListener('click', onManageWebPushSubscriptionButtonClicked);\n            element.addEventListener('click', onManageWebPushSubscriptionButtonClicked);\n            element.textContent = buttonText;\n\n            if (state.hideWhenSubscribed && state.isPushEnabled) {\n                element.style.display = \"none\";\n            } else {\n                element.style.display = \"\";\n            }\n        });\n    }\n\n    function getSubscriptionState() {\n        return Promise.all([\n          OneSignal.isPushNotificationsEnabled(),\n          OneSignal.isOptedOut()\n        ]).then(function(result) {\n            var isPushEnabled = result[0];\n            var isOptedOut = result[1];\n\n            return {\n                isPushEnabled: isPushEnabled,\n                isOptedOut: isOptedOut\n            };\n        });\n    }\n\n    var OneSignal = OneSignal || [];\n    var buttonSelector = \"#my-notification-button\";\n\n    /* This example assumes you've already initialized OneSignal */\n    OneSignal.push(function() {\n        // If we're on an unsupported browser, do nothing\n        if (!OneSignal.isPushNotificationsSupported()) {\n            return;\n        }\n        updateMangeWebPushSubscriptionButton(buttonSelector);\n        OneSignal.on(\"subscriptionChange\", function(isSubscribed) {\n            /* If the user's subscription state changes during the page's session, update the button text */\n            updateMangeWebPushSubscriptionButton(buttonSelector);\n        });\n    });\n    </script>\n</body>",
      "language": "html",
      "name": "HTML"
    }
  ]
}
[/block]
----
# Prompt Behavior

## Add Delay to Prompt 

**Wordpress Users** please see [how do I delay prompting on Wordpress docs](https://documentation.onesignal.com/docs/web-push-wordpress-faq#how-do-i-delay-prompting-users)

### Delay Prompting for X amount of seconds or X page views
<span class="label-all label-developers">Typical Setup & Custom Code Setup</span>

The following code example will delay the slidedown prompt by 20 seconds on the 3rd visit. If you want to trigger the native prompt instead of the slidedown, simply replace `slidedown` with `native`.
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  /* Why use .push? See: http://stackoverflow.com/a/38466780/555547 */\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_APP_ID\",\n      promptOptions: {\n      \tslidedown: {\n          enabled: true,\n          autoPrompt: true,\n          timeDelay: 20,\n          pageViews: 3\n        }\n      }\n    });\n</script>",
      "language": "javascript",
      "name": "HTTPS Full Code Example"
    },
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n<script>\n  var OneSignal = window.OneSignal || [];\n  OneSignal.push(function() {\n    OneSignal.init({\n      appId: \"YOUR_APP_ID\",\n      subdomainName: \"your_label\", /* The label for your site that you added in Site Setup mylabel.os.tc */\n      promptOptions: {\n      \tslidedown: {\n          enabled: true,\n          autoPrompt: true,\n          timeDelay: 20,\n          pageViews: 3\n        }\n      }\n    });\n</script>",
      "language": "javascript",
      "name": "HTTP Full Code Example"
    }
  ]
}
[/block]

- - --
# Add Location Tracking

### HTTPS SETUP Location Tracking
**Location Tracking Only Available on HTTPS**
[block:code]
{
  "codes": [
    {
      "code": "<body>\n    <p><button onclick=\"geoFindMe()\">Show my location</button></p>\n    <div id=\"out\"></div>\n    <script>\n    \tvar output = document.getElementById(\"out\");\n        function geoFindMe() {\n            if (!navigator.geolocation) {\n                output.innerHTML = \"<p>Geolocation is not supported by your browser</p>\";\n                return;\n            }\n            output.innerHTML = \"<p>Locating…</p>\";\n            navigator.geolocation.getCurrentPosition(success, error);\n        }\n\n        function success(position) {\n            var latitude = position.coords.latitude;\n            var longitude = position.coords.longitude;\n            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';\n\n            OneSignal.push(function() {\n                OneSignal.sendTags({\n                    latitude: latitude,\n                    long: longitude\n                });\n            });\n\n            var img = new Image();\n            img.src = \"https://maps.googleapis.com/maps/api/staticmap?center=\" + latitude + \",\" + longitude + \"&zoom=13&size=300x300&sensor=false\";\n\n            output.appendChild(img);\n        }\n\n        function error() {\n            output.innerHTML = \"Unable to retrieve your location\";\n        }\n    </script>\n</body>",
      "language": "javascript"
    }
  ]
}
[/block]
----
# OneSignal Files

### Hosting Files from Subfolders

<span class="label-all label-developers">Custom Code</span> - If the files are served with the HTTP header `"Service-Worker-Allowed: /"`, please add this code **before** initializing the SDK
[block:code]
{
  "codes": [
    {
      "code": "var OneSignal = OneSignal || [];\nOneSignal.push(function() {\n  // Be sure to call this code *before* you initialize the web SDK\n  \n  // This registers the workers at the root scope, which is allowed by the HTTP header \"Service-Worker-Allowed: /\"\n  OneSignal.SERVICE_WORKER_PARAM = { scope: '/' };\n});",
      "language": "javascript"
    }
  ]
}
[/block]
<span class="label-all label-developers">Custom Code</span> - If the files are served from a subfolder, please add this code **during** the initialization options so our SDK knows where to find the workers:
[block:code]
{
  "codes": [
    {
      "code": "// Do NOT call init() twice\nOneSignal.push([\"init\", {\n  // Your other init options here\n  path: '/subfolder/', /* A trailing slash is required */\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
- - -----
# Notification Behavior

## Notification Persistence
<span class="label-all label-firefox">Firefox</span>, <span class="label-all label-safari">Safari</span> - notifications are automatically dismissed after a short amount of time. 

<span class="label-all label-chrome">Chrome</span> (non-mobile) - notifications last indefinitely (displayed until the user interacts with it by dismissing it or clicking it). Add [the `persistNotification` parameter](doc:web-push-sdk#init)  to your OneSignal init call to control whether a notification is displayed indefinitely or dismissed after 20 seconds.

`persistNotification` defaults to true if unset. Set it to false to automatically dismiss the notification after 20 seconds (<span class="label-all label-chrome">Chrome</span> non-mobile only).
[block:code]
{
  "codes": [
    {
      "code": "// Do NOT call init() twice\nOneSignal.push([\"init\", {\n  // Your other init options here\n  persistNotification: false // Automatically dismiss the notification after ~20 seconds in non-mobile Chrome\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]