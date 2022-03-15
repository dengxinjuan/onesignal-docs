---
title: "Web SDK Reference"
slug: "web-push-sdk"
excerpt: "OneSignal Web Push SDK Reference. Works with Chrome, Firefox, and Safari."
hidden: false
createdAt: "2016-09-19T23:24:48.209Z"
updatedAt: "2021-09-29T14:23:25.041Z"
---
[block:callout]
{
  "type": "info",
  "title": "Setup Guide",
  "body": "Most developers would be best served by going through our [Web Push Quickstart Setup](doc:web-push-quickstart) first, which is a more user-friendly starting point than the API."
}
[/block]
# Initialization

### Loading SDK Asynchronously

**Javascript flag Recommended**

OneSignal recommends loading `OneSignalSDK.js` with the `async` flag so your page load times don't increase. To use it, place the following code *before* calling any other OneSignal functions.
[block:code]
{
  "codes": [
    {
      "code": "<script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async></script>\n<script>window.OneSignal = window.OneSignal || [];</script>",
      "language": "html"
    }
  ]
}
[/block]
Our API functions can be called asynchronously using either:

1. `OneSignal.push(["functionName", param1, param2]);`
2. `OneSignal.push(function() { OneSignal.functionName(param1, param2); });`

Option 2 must be used for functions that return a value like `isPushNotificationsSupported`. Option 2 also lets you call as many OneSignal functions as you need inside the passed-in function block.


## `init`

Call this from each page of your site to initialize OneSignal.
[block:callout]
{
  "type": "warning",
  "title": "Initialization Notes",
  "body": "- Do not call this method twice. Doing so results in an error.\n- This call is required before any other function can be used."
}
[/block]
Init JSON `options` are as follows:
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`appId`",
    "1-0": "`subdomainName`",
    "2-0": "`requiresUserPrivacyConsent`",
    "0-1": "String",
    "1-1": "String",
    "2-1": "Boolean",
    "0-2": "**Required:** Your OneSignal app id found on the settings page at onesignal.com.",
    "1-2": "**Required on HTTP ONLY:** This must match the label you entered in Site Settings.",
    "2-2": "Allows you to delay the initialization of the SDK until the user provides privacy consent. The SDK will not be fully initialized until the [provideUserConsent](#provideuserconsent-method) function is called.",
    "4-0": "`welcomeNotification`",
    "4-1": "JSON",
    "4-2": "Customize or disable the welcome notification sent to new site visitors. [See below details](#init-welcomenotification-parameters).",
    "5-0": "`notifyButton`",
    "5-1": "JSON",
    "5-2": "Enable and customize the notifyButton. [See below details](#init-notifybutton-parameters).",
    "6-0": "`persistNotification`",
    "6-1": "Boolean",
    "6-2": "Chrome (non-mobile) - `true`: persists notification, `false`: disappears after some time. See our [Notification Persistence Section](https://documentation.onesignal.com/docs/web-push-options#notification-persistence) for more info.\n\nFirefox and Safari - notifications automatically dismiss after some time and this parameter does not control that.",
    "7-2": "See our [Webhooks page](doc:webhooks) for the nested options.",
    "7-1": "JSON",
    "7-0": "`webhooks`",
    "3-0": "`promptOptions`",
    "3-1": "JSON",
    "3-2": "Localize the HTTP popup prompt. [See below details](#init-promptoptions-parameters).",
    "9-0": "`autoRegister`",
    "9-1": "Boolean",
    "9-2": "**Not Recommended:** Shows Native Browser Prompt immediately. We do not recommend using because it creates a poor user experience. \n\n*Should be removed from code.*",
    "10-0": "`notificationClickHandlerMatch`",
    "10-1": "String",
    "10-2": "Default: If the launch URL of the notification matches exactly to a tab already open it will be focused.\n\n`\"origin\"`- If the launch URL of the notification matches any tab already open to your domain it will be focused. See [addListenerForNotificationOpened](web-push-sdk#addlistenerfornotificationopened) documentation for more details.",
    "11-0": "`notificationClickHandlerAction`",
    "11-1": "String",
    "11-2": "`\"navigate\"` Default: Automatically navigate to the launchURL on opening the notification. \n\n`\"focus\"` - Only apply if `notificationClickHandlerMatch` is set to `\"origin\"`. Only focuses an existing tab if the launch URL matches the domain instead of navigating. See [addListenerForNotificationOpened](web-push-sdk#addlistenerfornotificationopened) documentation for more details.",
    "12-0": "`path`",
    "12-1": "String",
    "12-2": "**Special Case on HTTPS ONLY:** Absolute path to OneSignal SDK web worker files. You only need to set this parameter if you do not want the files at the root of your site.",
    "8-0": "`autoResubscribe`",
    "8-1": "Boolean",
    "8-2": "**Recommended, HTTPS ONLY** - Automatically resubscribes users when they clear browser cache or migrating to OneSignal.\n\nThis is set in the OneSignal dashboard during setup but if set again during initialization, will override dashboard config."
  },
  "cols": 3,
  "rows": 13
}
[/block]

## Init `promptOptions` parameters
Pass in these optional parameters within `promptOptions` when initializing to localize the prompts to your custom text and language. All entries are limited in length. Foreign characters accepted. Each parameter is optional, and its default is used when it is not included.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`actionMessage`",
    "0-2": "Text that says 'wants to show notifications' by default. Limited to 90 characters.",
    "0-1": "String",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "String",
    "5-1": "String",
    "6-1": "String",
    "7-1": "String",
    "8-1": "Boolean",
    "1-2": "Text that says 'This is an example notification'. Displays on non-mobile devices. Only one line is allowed.",
    "2-2": "Text that says 'Notifications will appear on your desktop'. Displays on non-mobile devices. Only one line is allowed.",
    "3-2": "Text that says 'This is an example notification'. Displays on mobile devices with limited screen width. Only one line is allowed.",
    "4-2": "Text that says 'Notifications will appear on your device'. Displays on mobile devices with limited screen width. Only one line is allowed.",
    "5-2": "Text that says '(you can unsubscribe anytime)'.",
    "6-2": "Customize the \"Continue\" text.\nLimited to 15 characters.",
    "7-2": "Customize the \"Cancel\" text.\nLimited to 15 characters.",
    "8-2": "Set to false to hide the OneSignal logo.",
    "1-0": "`exampleNotificationTitleDesktop`",
    "2-0": "`exampleNotificationMessageDesktop`",
    "3-0": "`exampleNotificationTitleMobile`",
    "4-0": "`exampleNotificationMessageMobile`",
    "5-0": "`exampleNotificationCaption`",
    "6-0": "`acceptButton` - [Slide Prompt](doc:slide-prompt)\n\n`acceptButtonText` - [HTTP PopUp Prompt](doc:http-popup-prompt)",
    "7-0": "`cancelButton` - [Slide Prompt](doc:slide-prompt) \n\n`cancelButtonText` - [HTTP PopUp Prompt](doc:http-popup-prompt)",
    "8-0": "`showCredit`"
  },
  "cols": 3,
  "rows": 9
}
[/block]
## Init `welcomeNotification` parameters
Pass in these optional parameters within `welcomeNotification` when initializing to customize or disable the welcome notification sent to new site visitors. Any person visiting your site for their first time, or an existing user who has completely cleared their cache is considered a new site visitor.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`disable`",
    "0-1": "Boolean",
    "1-0": "`title`",
    "1-1": "String",
    "2-0": "`message`",
    "2-1": "String",
    "0-2": "Disables sending a welcome notification to new site visitors. If you want to disable welcome notifications, this is the only option you need.",
    "1-2": "The welcome notification's title. You can localize this to your own language. If not set, or left blank, the site's title will be used. Set to one space ' ' to clear the title, although this is not recommended.",
    "2-2": "**Required:** The welcome notification's message. You can localize this to your own language. A message is required. If left blank or set to blank, the default of 'Thanks for subscribing!' will be used.",
    "3-0": "`url`",
    "3-1": "URL",
    "3-2": "An optional URL to open after the user clicks the welcome notification.\n\nBy default, clicking the welcome notification does not open any link. This is recommended because the user has just visited your site and subscribed."
  },
  "cols": 3,
  "rows": 4
}
[/block]
## Init `notifyButton` parameters
Pass in these optional parameters within `notifyButton` when initializing to enable and customize the Subscription Bell (formerly known as the notify button). All parameters below are optional. If not set, they will be replaced with their defaults.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`enable`",
    "0-1": "Boolean",
    "0-2": "Enable the Subscription Bell. The Subscription Bell is otherwise disabled by default.",
    "2-1": "String",
    "3-1": "String",
    "4-1": "JSON",
    "5-1": "Boolean",
    "6-1": "Boolean",
    "2-2": "One of 'small', 'medium', or 'large'. The Subscription Bell will initially appear at one of these sizes, and then shrink down to size 'small' after the user subscribes.",
    "3-2": "Either 'bottom-left' or 'bottom-right'. The Subscription Bell will be fixed at this location on your page.",
    "4-2": "Specify CSS-valid pixel offsets using bottom, left, and right.",
    "5-2": "If true, the Subscription Bell will display an icon that there is 1 unread message. When hovering over the Subscription Bell, the user will see custom text set by `message.prenotify`.",
    "6-2": "Set `false` to hide the 'Powered by OneSignal' text in the Subscription Bell dialog popup.",
    "7-0": "`text`",
    "7-1": "JSON",
    "7-2": "Customize the Subscription Bell text. See the example code below to know what to change.",
    "6-0": "`showCredit`",
    "5-0": "`prenotify`",
    "4-0": "`offset`",
    "3-0": "`position`",
    "2-0": "`size`",
    "1-0": "`displayPredicate`",
    "1-1": "Function",
    "1-2": "A function you define that returns `true` to show the Subscription Bell, or `false` to hide it. You can also return a `Promise` that resolves to `true` or `false` for awaiting asynchronous operations.\n\nTypically used the hide the Subscription Bell after the user is subscribed.\n\nThis function *is not* re-evaluated on every state change; this function is only evaluated once when the Subscription Bell begins to show.\n\nSee [Hiding the Subscription Bell](doc:web-push-custom-code-examples#hiding-the-subscription-bell) for an example."
  },
  "cols": 3,
  "rows": 8
}
[/block]
The following is a basic template of how you would call `init()`.
[block:code]
{
  "codes": [
    {
      "code": "// OneSignal is defined as an array here and uses push calls to support OneSignalSDK.js being loaded async.\nvar OneSignal = OneSignal || [];\n\nOneSignal.push([\"init\", {\n  appId: \"YOUR_APP_ID\",\n  // Your other init settings\n}]);\n\n//Another way to initialize OneSignal\nwindow.OneSignal = window.OneSignal || [];\n  \nOneSignal.push(function() {\n  OneSignal.init({\n    appId: \"YOUR_APP_ID\",\n    // Your other init settings\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
### Non-HTTPS `subdomainName` Parameter
[block:callout]
{
  "type": "info",
  "title": "Non-HTTPS Pages (Custom Setup)",
  "body": "Non-HTTPS pages require the subdomainName parameter within the label set within the OneSignal Web configuration."
}
[/block]
The following is a basic template of a custom setup using the subDomainName parameter.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push([\"init\", {\n  appId: \"YOUR_APP_ID\",\n  // Your other init settings\n  subdomainName: \"YOUR_SUBDOMAIN_NAME_HERE\"\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
### `setDefaultNotificationUrl` Method

Pass in the full URL of the default page you want to open when a notification is clicked. When creating a notification, any URL you specify will take precedence and override the default URL. However if no URL is specified, this default URL specified by this call will open instead. If no default URL is specified at all, the notification opens to the root of your site by default.

Safari - This function is not available. Instead, the default notification icon URL is the Site URL you set in your Safari settings.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`url`",
    "0-1": "String",
    "0-2": "page url to open from notifications"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  /* These examples are all valid */\n  OneSignal.setDefaultNotificationUrl(\"https://example.com\");\n  OneSignal.setDefaultNotificationUrl(\"https://example.com/subresource/resource\");\n  OneSignal.setDefaultNotificationUrl(\"http://subdomain.example.com:8080/a/b\");\n});",
      "language": "javascript"
    }
  ]
}
[/block]
### `setDefaultTitle` Method

Sets the default title to display on notifications. If a notification is created with a title, the specified title always overrides this default title.

A notification's title defaults to the title of the page the user last visited. If your page titles vary between pages, this inconsistency can be undesirable. Call this to standardize page titles across notifications, as long as a notification title isn't specified.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`title`",
    "0-1": "String",
    "0-2": "String to set as a default title on notifications"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.setDefaultTitle(\"My Title\");\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `provideUserConsent` Method

If your website is set to require the user's privacy consent or some action before they can subscribe to push, add [`requiresUserPrivacyConsent: true` property in the OneSignal init call](#init). This will stop our SDK from initializing until you call `provideUserConsent(true)`.

You can also revoke consent by setting `provideUserConsent(false)`. This will prevent further collection of user data. To delete the user's current data see [Delete User Data](doc:delete-users).
[block:code]
{
  "codes": [
    {
      "code": "function userTappedProvideConsentButton() {\n  // Will initialize the SDK and register for push notifications\n  OneSignal.push(function() {\n    OneSignal.provideUserConsent(true);\n  });\n}",
      "language": "javascript"
    }
  ]
}
[/block]
# Registering Push

## `showNativePrompt` Method

**HTTP Setup:** Opens a popup window to `mylabel.os.tc/subscribe` to prompt the user to subscribe to push notifications. Call this in response to a user action like a button or link that was just clicked, otherwise the browser's popup blocker will prevent the popup from opening.

**HTTPS Setup:** You may call this at any time to show the prompt for push notifications. If notification permissions have already been granted, nothing will happen.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.showNativePrompt();\n});",
      "language": "javascript",
      "name": "showNativePrompt"
    },
    {
      "code": "OneSignal.push(function() {\n  OneSignal.registerForPushNotifications();\n});",
      "language": "javascript",
      "name": "registerForPushNotifications"
    }
  ]
}
[/block]
### `registerForPushNotifications` Method

See [showNativePrompt](#shownativeprompt).

## `permissionPromptDisplay` Event

Event occurs when the browser's native permission request has just been shown.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('permissionPromptDisplay', function () {\n    console.log(\"The prompt displayed\");\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `showSlidedownPrompt` Method

Shows the OneSignal Slide Prompt for HTTP and HTTPS sites. This slides down from the top (or up from the bottom on mobile). Please see [Slide Prompt](doc:permission-requests#slide-prompt) for more details.

*Note: This does not replace the Native Browser Prompt required for subscription.*
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.showSlidedownPrompt();\n});",
      "language": "javascript",
      "name": "showSlidedownPrompt"
    },
    {
      "code": "OneSignal.push(function() {\n  OneSignal.showHttpPrompt();\n});",
      "language": "javascript",
      "name": "showHttpPrompt"
    }
  ]
}
[/block]
**Prompting behavior if declined**
If declined, future calls will be ignored for 3 days with [additional backoff on another decline](doc:permission-requests#after-dismissing-a-web-push-prompt-when-is-the-prompt-shown-again).
*Note: If you need to override this back off behavior to prompt the user again you can do so by passing `{force: true}`. To provide a good user experience however ONLY do this from an action taken on your site to avoid unexpected prompts.*

## `showCategorySlidedown` Method

Shows the OneSignal Category Slidedown for HTTP and HTTPS sites. This slides down from the top (or up from the bottom on mobile). Please see [Category Slidedown](doc:permission-requests#category-slidedown) for more details.

*Note: This does not replace the Native Browser Prompt required for subscription.*

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.showCategorySlidedown();\n});",
      "language": "javascript",
      "name": "showCategorySlidedown"
    }
  ]
}
[/block]
**Prompting behavior if declined**
(see [showSlidedownPrompt](doc:web-push-sdk#showslidedownprompt))

## `getNotificationPermission` Event

Returns a Promise that resolves to the browser's current notification permission as 'default', 'granted', or 'denied'.

You can use this to detect whether the user has allowed notifications, blocked notifications, or has not chosen either setting.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`callback`",
    "0-1": "function",
    "0-2": "A callback function that will be called when the browser's current notification permission has been obtained, with one of 'default', 'granted', or 'denied'."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push([\"getNotificationPermission\", function(permission) {\n    console.log(\"Site Notification Permission:\", permission);\n    // (Output) Site Notification Permission: default\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]
## `isPushNotificationsSupported` Method

Returns true if the current browser environment viewing the page supports push notifications.

Almost all of the API calls on this page internally call this method first before continuing; this check is therefore optional but you may call it if you wish to display a custom message to the user.

This method is synchronous and returns immediately.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  /* These examples are all valid */\n  var isPushSupported = OneSignal.isPushNotificationsSupported();\n  if (isPushSupported) {\n    // Push notifications are supported\n  } else {\n    // Push notifications are not supported\n  }\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `isPushNotificationsEnabled` Method

**HTTPS Only** Returns a `Promise` that resolves to `true` if the user has already accepted push notifications and successfully registered with Google's FCM server and OneSignal's server (i.e. the user is able to receive notifications).

If you used `OneSignal.setSubscription()` or unsubscribed using the [Bell Prompt](doc:bell-prompt) or [Custom Link prompt](doc:custom-link-prompt) after the user successfully subscribes through the browser, `isPushNotificationsEnabled` will show whatever value you set for `setSubscription`.

If you're deleting your user entry on our online dashboard for testing, the SDK will not sync with our dashboard and so this method will still return `true` (because you are still subscribed to the site's notifications). Follow [Clearing your cache and resetting push permissions](doc:troubleshooting-web-push#clearing-your-cache-and-resetting-push-permissions) to reset the browser data.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`isPushNotificationsEnabledCallBack`",
    "0-1": "Function",
    "0-2": "Callback to be fired when the check completes. The first parameter of the callback is a boolean value indicating whether the user can receive notifications."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n    if (isEnabled)\n      console.log(\"Push notifications are enabled!\");\n    else\n      console.log(\"Push notifications are not enabled yet.\");    \n  });\n});\n\n// Another option\n\nOneSignal.push(function() {\n  OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {\n    if (isEnabled)\n      console.log(\"Push notifications are enabled!\");\n    else\n      console.log(\"Push notifications are not enabled yet.\");      \n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `subscriptionChange` Event

Event occurs when the user's subscription state changes between unsubscribed and subscribed.

Chrome and Firefox - the user's subscription is `true` when:
- Your site is granted notification permissions
- Your site visitor's web storage database containing OneSignal-related data is intact
- You have not manually opted out the user from receiving notifications
    - The Subscription Bell 'Subscribe' and 'Unsubscribe' button opts users in and out without affecting their other subscription parameters
    - `OneSignal.setSubscription()` is used to opt the user in and out
- Your site visitor has an installed background web worker used to display notifications

Safari - only the first three are required for a valid subscription.

Use this event to find out when the user has successfully subscribed. The parameter will be set to true to represent a new subscribed state.

A user is no longer subscribed if:
- The user changes notification permissions
    - The icon next to the URL in the address bar can be clicked to modify site permissions
    - Chrome and Firefox notifications come with a button on the notification to block site notifications
- The user clears their browser data (clearing cookies will not effect subscription)
- Another background web worker overwrites our web worker

This event *is not related* to `OneSignal.setSubscription()`, which is used to temporarily opt-out the user from receiving notifications by setting a flag on our system so that notifications are not delivered to the user. 

To detect changes when using the `OneSignal.setSubscription()` flag, you would use the `OneSignal.isPushNotificationsEnabled()` method but this will not get called until the page is refreshed.

### Callback Event Parameters
[block:parameters]
{
  "data": {
    "0-0": "`subscribed`",
    "0-1": "Boolean",
    "0-2": "Set to `true` if the user is currently subscribed; otherwise set to `false`.",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  // Occurs when the user's subscription changes to a new value.\n  OneSignal.on('subscriptionChange', function (isSubscribed) {\n    console.log(\"The user's subscription state is now:\", isSubscribed);\n  });\n  \n  // This event can be listened to via the `on()` or `once()` listener.\n});",
      "language": "javascript"
    }
  ]
}
[/block]
# Analytics

## `notificationPermissionChange` Event

<img src="https://files.readme.io/494fb59-Browser_Push_Permission_Request.png" style="max-width: 400px"/>

Event occurs when the user clicks Allow or Block or dismisses the browser's native permission request. 

### Callback Event Parameters
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "event",
    "0-1": "Hash",
    "0-2": "A JavaScript object with a `to` property. \n\nIf `to` is `\"granted\"`, the user has allowed notifications. If `to` is `\"denied\"`, the user has blocked notifications. If `to` is `\"default\"`, the user has clicked the 'X' button to dismiss the prompt."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('notificationPermissionChange', function(permissionChange) {\n    var currentPermission = permissionChange.to;\n    console.log('New permission state:', currentPermission);\n  });\n  \n  // This event can be listened to via the on() or once() listener\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## Slide Prompt Events

`popoverShown` - Slide Prompt has just animated into view and is being shown to the user.

`popoverAllowClick` - The "Continue" button on the Slide Prompt was clicked.

`popoverCancelClick` - The "No Thanks" button on the Slide Prompt was clicked.

`popoverClosed` - The Slide Prompt was just closed.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('popoverShown', function() {\n    console.log('Slide Prompt Shown');\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `customPromptClick` Event

Event occurs when the user clicks "No Thanks" or "Continue" on our HTTP Pop-Up Prompt (not the browser's permission request).

Our web SDK shows different permission messages and requests, and this event is best used *only with* the [HTTP Pop-Up Prompt](doc:permission-requests#http-pop-up-prompt).

### Callback Event Parameters
[block:parameters]
{
  "data": {
    "0-0": "event",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "Hash",
    "0-2": "A JavaScript object with a `result` property.\n\n- If `result` is `denied`, the user clicked *No Thanks* on the HTTP Pop-Up Prompt. Popup window closes after this.\n\n- If `result` is `granted`, the user clicked *Continue* on the HTTP Pop-Up Prompt."
  },
  "cols": 3,
  "rows": 1
}
[/block]
Note: If you are using the [Slide Prompt](doc:permission-requests#slide-prompt), you will always see this event fire with `granted`, since our SDK will automatically click *Continue* on the popup window for the user. You should therefore ignore this event if you are using the Slide Prompt.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('customPromptClick', function(promptClickResult) {\n    var promptClickResult = permissionChange.result;\n    console.log('HTTP Pop-Up Prompt click result:', promptClickResult);\n  });\n  // This event can be listened to via the on() or once() listener\n});",
      "language": "javascript"
    }
  ]
}
[/block]
#User IDs

## `getUserId` Method

Returns a `Promise` that resolves to the stored OneSignal Player ID of the Push Record if one is set, otherwise the Promise resolves to `null`. If the user isn't already subscribed, this function will resolve to `null` immediately. 

If you're getting the Player ID after the user subscribes, call this within the `subscriptionChange` event, and check that `subscriptionChange` is `true`.

If you're getting the Player ID on page load, check that the user is subscribed to notifications (e.g. `isPushNotificationsEnabled()`).

For custom implementations involving our REST API, associate this OneSignal Player ID with your data.

Once created, the Player ID will not change. If the user unsubscribes from web push, for example by clearing their browser data, and resubscribes, a new Player ID will be created and a new entry will be stored on your app's users list. The old entry will be unsubscribed and not be automatically deleted.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`callback`",
    "0-1": "function",
    "0-2": "A callback function which sets the first parameter to the stored Push Record's OneSignal Player ID if one is set, otherwise the first parameter is set to null."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  /* These examples are all valid */\n  OneSignal.getUserId(function(userId) {\n    console.log(\"OneSignal User ID:\", userId);\n    // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    \n  });\n});\n\n//Another example:\n\nOneSignal.push(function() {               \n  OneSignal.getUserId().then(function(userId) {\n    console.log(\"OneSignal User ID:\", userId);\n    // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    \n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]

##External User Ids

OneSignal creates and stores device & channel level data under a unique OneSignal Id called the **`player_id`**. A single user can have multiple `player_id` records based on how many devices, email addresses, and phone numbers they use to interact with your app/site.

You can combine `player_id` records in OneSignal under a unique User Id called the **`external_user_id`**.

See the [External User Ids](doc:external-user-ids) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***identifier authentication token*** and send it to your site. 

----

#Tags

Data Tags are custom `key : value` pairs of string or number data you set on users based on events or user data of your choosing. See [Data Tags Overview](doc:add-user-data-tags) for more details on what tags are used for.

See [Data Tag Implementation](doc:data-tag-implementation) for SDK Method details.

----

#Push Notifications

## Create Notification
To send notifications to users, we recommend using the [Create notification](ref:create-notification) REST API docs, or Messages Dashboard because the Web Push API is run client-side, it does not have the ability to programmatically send to multiple users at once, or users that are not currently on your website.

## `sendSelfNotification` Method

[block:callout]
{
  "type": "warning",
  "body": "This does not send to all users. Please see our [Create notification](ref:create-notification) REST API for sending notifications. This function is primarily for your own internal testing.",
  "title": "Sends to individual users only"
}
[/block]
Sends a push notification to the current user on the webpage. This is a simplified utility function to send a test message to yourself or a quick message to the user. It does not support any targeting options.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`title`",
    "0-1": "String",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "Hash",
    "5-1": "Array of Hash",
    "5-0": "`buttons`",
    "4-0": "`data`",
    "3-0": "`icon`",
    "2-0": "`url`",
    "1-0": "`message`",
    "0-2": "The notification's title. Currently defaults to \"OneSignal Test Message\" if not set. Use a \" \" single space to get around this. Multiple languages are not supported; write the text in the language the current user should receive it in.",
    "1-2": "The notification's body content. Required. Multiple languages are not supported; write the text in the language the current user should receive it in.",
    "2-2": "The URL to launch when the notification is clicked.[ Use a special URL to prevent any URL from launching](doc:action-buttons#how-can-i-prevent-the-action-button-from-opening-any-url). Defaults to this special URL if none is set.",
    "3-2": "The URL to use for the notification icon.",
    "4-2": "Additional data to pass for the notification.",
    "5-2": "See [Action Buttons](doc:action-buttons)."
  },
  "cols": 3,
  "rows": 6
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.sendSelfNotification(\n  /* Title (defaults if unset) */\n  \"OneSignal Web Push Notification\",\n  /* Message (defaults if unset) */\n  \"Action buttons increase the ways your users can interact with your notification.\", \n   /* URL (defaults if unset) */\n  'https://example.com/?_osp=do_not_open',\n  /* Icon */\n  'https://onesignal.com/images/notification_logo.png',\n  {\n    /* Additional data hash */\n    notificationType: 'news-feature'\n  }, \n  [{ /* Buttons */\n    /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */\n    id: 'like-button',\n    /* The text the button should display. Supports emojis. */\n    text: 'Like',\n    /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */\n    icon: 'http://i.imgur.com/N8SN8ZS.png',\n    /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */\n    url: 'https://example.com/?_osp=do_not_open'\n  },\n  {\n    id: 'read-more-button',\n    text: 'Read more',\n    icon: 'http://i.imgur.com/MIxJp1L.png',\n    url: 'https://example.com/?_osp=do_not_open'\n  }]\n);",
      "language": "javascript"
    }
  ]
}
[/block]

## `setSubscription` Method
[block:callout]
{
  "type": "warning",
  "title": "This will not subscribe users that have not opted in to notifications already",
  "body": "Only available if user opted-in to notifications through native prompt. Meant for a profile settings option and not to subscribe users automatically."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Do not use with Subscription Button",
  "body": "This function is not for use with sites that implement the Subscription Bell, as this function may override user preferences."
}
[/block]
This function is for sites that wish to have more granular control of which users receive notifications, such as when implementing notification preference pages.

This function lets a site mute or unmute notifications for the current user. This event is not related to actually prompting the user to subscribe. The user must already be subscribed for this function to have any effect.

Set to `false` to temporarily "mute" notifications from going to the user. If you previously set this to false, you can set it to `true` to "un-mute" notifications so that the user receives them again.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`unmute`",
    "0-1": "Boolean",
    "0-2": "`true` un-mutes any subscribed user \n`false` mutes any subscribed user"
  },
  "cols": 3,
  "rows": 1
}
[/block]
Returns a promise that resolves after temporarily opting the user out of receiving notifications by setting a flag on our system so that notifications are not delivered to the user.
[block:code]
{
  "codes": [
    {
      "code": "// Either option works:\nOneSignal.setSubscription(false);\n\n//or\n\nOneSignal.push([\"setSubscription\", false]);",
      "language": "javascript"
    }
  ]
}
[/block]
# Receiving Notifications

## `notificationDisplay` Event

**Note**: Not supported on Safari and requires HTTPS website.

Event occurs after a notification is visibly displayed on the user's screen.

This event is fired on your page. If multiple browser tabs are open to your site, this event will be fired on *all* pages on which OneSignal is active.

### Callback Event Parameters
`event` is a JavaScript object hash containing:
[block:parameters]
{
  "data": {
    "0-0": "`id`",
    "1-0": "`heading`",
    "2-0": "`content`",
    "4-0": "`url`",
    "5-0": "`icon`",
    "5-1": "String",
    "4-1": "String",
    "1-1": "String",
    "2-1": "String",
    "0-1": "UUID",
    "0-2": "The OneSignal notification ID of the notification that was just displayed.",
    "1-2": "The notification's title.",
    "2-2": "The notification's body message, not including the title.",
    "4-2": "The URL that will be opened if the user clicks on the notification.",
    "5-2": "The URL to the icon used for the notification. This is fetched every time the notification is displayed.",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "3-0": "`data`",
    "3-1": "Hash",
    "3-2": "Custom additional data you send along with the notification. If you did not send any data, this field will not exist and be `undefined`."
  },
  "cols": 3,
  "rows": 6
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "The `notificationDisplay` event is only emitted on sites using HTTPS and not available for Safari. Depending on the notification, more fields (e.g. action buttons) can be included in the callback parameter.",
  "title": "Notification Display Event Limitations"
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('notificationDisplay', function(event) {\n    console.warn('OneSignal notification displayed:', event);\n  });\n  \n  //This event can be listened to via the `on()` or `once()` listener\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `notificationDismiss` Event

**Note**: Not supported on Safari and requires HTTPS website.

This event occurs when:
  - A user purposely dismisses the notification without clicking the notification body or action buttons
  - On Chrome on Android, a user dismisses all web push notifications (this event will be fired for each web push notification we show)
  - A notification expires on its own and disappears

**Note:** This event *does not occur* if a user clicks on the notification body or one of the action buttons. That is considered a notification click (please see the `addListenerForNotificationOpened` method).

This event is fired on your page. If multiple browser tabs are open to your site, this event will be fired on *all* pages on which OneSignal is active.

### Callback Event Parameters
`event` is a JavaScript object hash containing:
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`id`",
    "1-0": "`heading`",
    "2-0": "`content`",
    "4-0": "`url`",
    "5-0": "`icon`",
    "5-2": "The URL to the icon used for the notification. This is fetched every time the notification is displayed.",
    "5-1": "String",
    "4-1": "String",
    "2-1": "String",
    "1-1": "String",
    "0-1": "UUID",
    "0-2": "The OneSignal notification ID of the notification that was just displayed.",
    "1-2": "The notification's title.",
    "2-2": "The notification's body message, not including the title.",
    "4-2": "The URL that will be opened if the user clicks on the notification.",
    "3-0": "`data`",
    "3-1": "Hash",
    "3-2": "Custom additional data you send along with the notification. If you did not send any data, this field will not exist and be `undefined`."
  },
  "cols": 3,
  "rows": 6
}
[/block]
Note: Depending on the notification, more fields (e.g. action buttons) can be included in the callback parameter.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.on('notificationDismiss', function(event) {\n    console.warn('OneSignal notification dismissed:', event);\n  });\n  \n  //This event can be listened to via the `on()` or `once()` listener\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `addListenerForNotificationOpened` Event

**Note**: Not supported on Safari.

**Note: This event occurs once only**. If you would this to occur *continuously* every time a notification is clicked, please call this method again after your callback fires.

Use this function to:
  - Listen for future clicked notifications
  - Check for notifications clicked in the last 5 minutes

Your callback will execute when the notification's body/title or action buttons are clicked.

The spec below describes:
- **The default behavior**
  **Events only fire if your URL matches the notification's opening URL _exactly_; the event will be available on the newly opened tab (and only that opened tab) to the notification's opening URL.** See the special flags `notificationClickHandlerMatch: origin` and `notificationClickHandlerAction: focus` for different use cases. 
- A special init flag `notificationClickHandlerMatch: 'origin'`
  If you have an existing tab of your site open, and the clicked notification is also to your site, the existing tab will be used.
- A special init flag `notificationClickHandlerAction: 'focus'`
  Instead of navigating the target tab to the notification's URL, the tab will be focused. You can perform navigation manually or choose not to navigate.

These two optional flags must be placed in the root of your OneSignal initialization options. They will be stored (or removed if missing) on each page load as OneSignal parses the available init options.

**HTTPS Sites**
  - **Default Behavior (no special flags)**
    -  If no existing site tabs are open, a new tab is opened. You may call `addListenerForNotificationOpened()` to get the details of the notification you just clicked.
    - If one or more tabs to your site is open:
      - And the clicked notification shares the same URL as one of your site's tab, the existing tab is focused. Call `addListenerForNotificationOpened()` to get the clicked notification's details, or if you installed a callback listener your callback will be invoked.
      - And the clicked notification's URL is different, a new tab is opened. You may call `addListenerForNotificationOpened()` to get the details of the notification you just clicked.

  - Using init option `notificationClickHandlerMatch: 'origin'`
    - If no existing site tabs are open, the behavior is the same as the default (see above).
    - If one or more tabs to your site is open:
      - And the clicked notification shares the same URL as one of your site's tab, the behavior is the same as the default (see above).
      - And the clicked notification's URL is different, the most recently opened tab of your site is focused and navigated to the notification's URL. Call `addListenerForNotificationOpened()` on the newly navigated tab to get the clicked notification's details.

  - Using init option `notificationClickHandlerAction: 'focus'`
    - If no existing site tabs are open, the behavior is the same as the default (see above).
    - Any other case: The most recently opened tab of your site is focused only (not navigated away). Call `addListenerForNotificationOpened()` to get the clicked notification's details, or if you installed a callback listener your callback will be invoked.

Does not work when using `sendSelfNotification()` testing method.

**HTTP Integrations**

Mostly identical to HTTPS sites above, with the following exceptions:

Due to limitations on HTTP sites:
- If multiple stale tabs are open to your site, a clicked notification sharing an identical URL to an existing tab may not focus the tab and may instead open a new tab.
- When using `notificationClickHandlerMatch: 'origin'`, if multiple stale tabs are open to your site, a different tab than the matching tab may be focused.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "String",
    "1-1": "String",
    "2-1": "String",
    "3-1": "String",
    "4-1": "String",
    "5-1": "Hash",
    "6-1": "String",
    "0-0": "`id`",
    "1-0": "`heading`",
    "2-0": "`content`",
    "3-0": "`icon`",
    "4-0": "`url`",
    "5-0": "`data`",
    "6-0": "`action`",
    "6-2": "Describes whether the notification body was clicked or one of the action buttons (if present) was clicked. An empty string means the notification body was clicked, otherwise the string is set to the action button ID.",
    "5-2": "Custom additional data you send along with the notification. If you did not send any data, this field will not exist and be `undefined`.",
    "4-2": "The URL that this notification opened.",
    "3-2": "Icon set on the notification.",
    "2-2": "The message text the user seen in the notification.",
    "1-2": "Title set on the notification.",
    "0-2": "The OneSignal notification ID of the notification that was just clicked."
  },
  "cols": 3,
  "rows": 7
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push([\"addListenerForNotificationOpened\", function(data) {\n\tconsole.log(\"Received NotificationOpened:\");\n\tconsole.log(data);\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "/* Do NOT call init twice */\nOneSignal.push([\"init\", {\n  /* Your other init settings ... */\n  notificationClickHandlerMatch: 'exact', /* See above documentation: 'origin' relaxes tab matching requirements, 'exact' is default */\n  notificationClickHandlerAction: 'navigate', /* See above documentation: 'focus' does not navigate the targeted tab, 'navigate' is default */\n  /* ... */\n}]);",
      "language": "javascript"
    }
  ]
}
[/block]



----

# Email

OneSignal's Mobile and Web SDKs provide methods for collecting emails, logging out emails, and tracking email subscription changes.

See the [Email SDK Methods](doc:email-sdk-methods) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***Email authentication token*** and send it to your app.

----

# SMS

OneSignal's Mobile and Web SDKs provide methods for collecting phone numbers, logging out phone numbers, and tracking sms subscription changes.

See the [SMS SDK Methods](doc:sms-sdk-methods) guide for more details.

If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***SMS authentication token*** and send it to your app.