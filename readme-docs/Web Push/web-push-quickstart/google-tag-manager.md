---
title: "Google Tag Manager"
slug: "google-tag-manager"
excerpt: "Adding OneSignal to your Website with Google Tag Manager"
hidden: false
createdAt: "2018-07-24T22:26:05.582Z"
updatedAt: "2021-09-01T17:04:12.149Z"
---
Google Tag Manager (GTM) is a free tool made by Google that allows you to integrate tags (snippets of code) into your site.

You can use GTM to add the OneSignal Web Push SDK directly into your site and even setup analytics.

This guide will show you how to setup OneSignal with GTM and add Subscription tracking.

#Step 1. Setup your OneSignal App

If you are adding the OneSignal Initialization (setup) code to your site i.e. not using our WordPress Plugin or Shopify App, then follow the <a href="doc:web-push-quickstart" target="_blank">Web Push Quickstart</a> and come back when you get to the step "Add Code to Site".

If you are using the OneSignal WordPress plugin or Shopify App, follow the [WordPress Setup](doc:wordpress) or [Shopify App Setup](doc:shopify). You can use GTM to add our [Web SDK Methods](doc:web-push-sdk) to your site as needed.

#Step 2. Add the OneSignal Code to GTM

When you get to the step **Add Code to Site** click **Copy Code**.

**If using the Wordpress Plugin or Shopify App, you will not have to copy this code. The plugins do this for you.**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f58615-Screen_Shot_2021-09-01_at_9.38.00_AM.png",
        "Screen Shot 2021-09-01 at 9.38.00 AM.png",
        1750,
        806,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
#Step 3. Setup your Google Tag Manager Account

Login to your Google Tag Manager Account and setup a new tag called **OneSignal Init**.

The Tag Configuration/Tag Type should be **Custom HTML**.

Paste the code you copied from the OneSignal dashboard into the HTML field. 

Under "Advanced Settings > Tag firing options" select **Once per page**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ed2ab7-Screen_Shot_2021-09-01_at_9.45.08_AM.png",
        "Screen Shot 2021-09-01 at 9.45.08 AM.png",
        2934,
        1792,
        "#e2e3e3"
      ]
    }
  ]
}
[/block]
The "Triggering" box select **Initialization - All Pages**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eed42aa-Screen_Shot_2021-09-01_at_9.47.26_AM.png",
        "Screen Shot 2021-09-01 at 9.47.26 AM.png",
        1488,
        390,
        "#f6f7f7"
      ]
    }
  ]
}
[/block]
Click **Save** at the top right to save your tag.

Back on your Workspace tab, you can **Publish** or **Submit** your tag.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/906ef19-Screen_Shot_2021-09-01_at_9.49.11_AM.png",
        "Screen Shot 2021-09-01 at 9.49.11 AM.png",
        2968,
        680,
        "#eceef0"
      ]
    }
  ]
}
[/block]
#Step 4. Subscribe and Send Yourself a Notification

Visit your website and you should be prompted to subscribe to push notifications based on the prompt settings you setup. See <a href="doc:permission-requests" target="_blank">Web Prompts Guide</a> for more details.

Check your OneSignal Dashboard **Audience > All Users** to see your Device Record and <a href="doc:users-and-devices" target="_blank">set yourself as a test user</a>.

Then head over to **Messages > New Push** to <a href="doc:sending-notifications" target="_blank">Send your first Push Notification</a>.
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, checkout the [Web Push Troubleshooting Guide](doc:troubleshooting-web-push) for common fixes.\n\nIf stuck, feel free to contact [support@onesignal.com](mailto:support@onesignal.com) for assistance."
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Visit [Web Push Tutorials](doc:use-cases-best-practices) for next steps or continue below for other GTM options.",
  "title": "You're Done!"
}
[/block]
----

# OneSignal Event Tracking with GA & GTM

If you have added GTM and OneSignal to your site, have successfully subscribed and have successfully sent yourself a notification, then you can go one step further and add analytics to your GTM.

This guide will use the [Web SDK Reference](doc:web-push-sdk) methods for tracking subscriptions.

## Subscription Tracking

Similar to our [Google Analytics Subscription Tracking Guide](doc:google-analytics#section-tracking-subscriptions) you can use the [OneSignal notificationPermissionChange event](doc:web-push-sdk#section--notificationpermissionchange-) to detect when a user subscribes, blocks, or dismisses the native browser prompt on your site.

### 1. Setup the OneSignal Notification Permission Change Event

Select the OneSignal Init Tag you created above

If you have not created a OneSignal init tag, you can create a new Tag in Google Tag Manger

**1.1** Add the `dataLayer` and  [OneSignal notificationPermissionChange event](doc:web-push-sdk#section--notificationpermissionchange-) 

Adding a `dataLayer` is recommended in [Google's Tag Manager Support docs](https://support.google.com/tagmanager/answer/7679219?hl=en)

Here is some example code:
[block:code]
{
  "codes": [
    {
      "code": "<script>\n  window.dataLayer = window.dataLayer || [];\n  OneSignal.push(function() {\n    // Occurs when the user's subscription changes to a new value.\n    OneSignal.on('notificationPermissionChange', function(permissionChange) {\n      var currentPermission = permissionChange.to;\n      console.log('New permission state:', currentPermission);\n      window.dataLayer.push({\n        'event': 'permissionChangeEvent',\n        'currentPermission': currentPermission\n      });\n   });\n});\n</script>",
      "language": "html"
    }
  ]
}
[/block]
**1.2** In "Advanced Settings", make sure "Tag firing options" is "Once per page" and "Triggering" is set to "All Pages"

See above [step 3](docs/google-tag-manager#section-3-create-your-onesignal-init-tag) for more details on "Advanced Settings" (step 3.3) and "Triggering" (step 3.4).

Your Tag should look similar to this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d71cb3-Screen_Shot_2018-07-25_at_5.25.34_PM.png",
        "Screen Shot 2018-07-25 at 5.25.34 PM.png",
        1231,
        1283,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
**1.3** Click "Save" at the top right

#### 2. Create the Permission Change Event Trigger

In your Tag Manager Workspace, select Triggers > New

**2.1** Name the trigger "permissionChangeEvent" and select "Custom Event"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/946d5de-Screen_Shot_2018-07-25_at_5.30.36_PM.png",
        "Screen Shot 2018-07-25 at 5.30.36 PM.png",
        1480,
        1028,
        "#e4e2e2"
      ]
    }
  ]
}
[/block]
**2.2** Add the "Event name" as `permissionChangeEvent` and "This trigger fires on" "All Custom Events"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/483a9a6-Screen_Shot_2018-07-25_at_5.34.35_PM.png",
        "Screen Shot 2018-07-25 at 5.34.35 PM.png",
        1223,
        372,
        "#f5f5f6"
      ]
    }
  ]
}
[/block]
**2.2** Save the trigger

### 3. (Optional) Setup a User-Defined Variable

This is for tracking the permission status in GA

**3.1** In Workspace, select Variables. Under "User-Defined Variables", select "New"

**3.2** Name the Variable `currentPermission` and for "Variable Configuration" select "Data Layer Variable"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d613804-Screen_Shot_2018-07-25_at_5.49.05_PM.png",
        "Screen Shot 2018-07-25 at 5.49.05 PM.png",
        1461,
        533,
        "#e4e3e4"
      ]
    }
  ]
}
[/block]
**3.3** Make the "Data Layer Variable Name" `currentPermission`

### 4. Setup the OneSignal Permission Change Tracking Tag

Back in Workspace, select Tags > New

Name this tag, `OS Permission Change Tracking`

**4.1** Select "Google Analytics - Universal Analytics"
[block:parameters]
{
  "data": {
    "0-0": "**Track Type**",
    "0-1": "Event",
    "1-0": "**Category**",
    "1-1": "OneSignal",
    "2-0": "**Action**",
    "2-1": "Prompt_Permission_Change",
    "3-0": "**Value**",
    "3-1": "{{currentPermission}}",
    "4-0": "**Non-Interaction Hit**",
    "4-1": "False",
    "5-0": "**Google Analytics Settings**",
    "5-1": "{{your_UA_Tracking_Numner}}",
    "6-0": "**Tag firing options**",
    "6-1": "Unlimited"
  },
  "cols": 2,
  "rows": 7
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a745542-Screen_Shot_2018-07-25_at_5.42.01_PM.png",
        "Screen Shot 2018-07-25 at 5.42.01 PM.png",
        1216,
        1182,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
**4.2** For Triggering, select your `permissionChangeEvent` and "Save"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/753312a-Screen_Shot_2018-07-25_at_5.45.23_PM.png",
        "Screen Shot 2018-07-25 at 5.45.23 PM.png",
        929,
        237,
        "#f7f7f6"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "All Done!",
  "body": "Return to your site. [Clear your browser data](doc:troubleshooting-web-push#section-clearing-your-cache-and-resetting-push-permissions) to test your site as a first time user. Subscribe to your site and view the event in Google Analytics."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Troubleshooting",
  "body": "If experiencing any issues, try debugging with the Tag Manager's [Preview and debug containers](https://support.google.com/tagmanager/answer/6107056?hl=en)"
}
[/block]
#FAQ

## Why does OneSignal appear to be loaded synchronously?

GTM automatically adds all tags asynchronously and strips out async calls along with labels in HTML tags  That is why when you try adding "async" as shown in our setup code, it only appears as 
`<script type="text/javascript" id="" src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"></script>` 

The file that we load in this call here is very small and is designed to first check if the browser supports push, then if it does, our SDK adds 
`<script src="https://cdn.onesignal.com/sdks/OneSignalPageSDKES6.js?v=150712" async=""></script>` which is asynchronous and contains the bulk of our SDK.