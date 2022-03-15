---
title: "URLs, Links and Deep Links"
slug: "links"
excerpt: "Concepts - Linking to internal and external URIs"
hidden: false
createdAt: "2016-09-22T06:21:23.186Z"
updatedAt: "2022-03-02T02:14:31.640Z"
---
This guide explains how to open to a specific page of your app or website using push notifications. For options using Email or SMS, please go to [Email Links and Click Tracking](https://documentation.onesignal.com/docs/email-links-and-click-tracking) or [Sending SMS Messages](https://documentation.onesignal.com/docs/sending-sms-messages#urls).


#Launch URL

The Launch URL or `url` [API parameter](https://documentation.onesignal.com/reference/create-notification#attachments) can be an `http/https` URL that opens a webpage or a custom URI that your app is setup to detect and handle programmatically usually through:
- <a href="https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app" target="_blank">iOS URL Schemes</a>
- <a href="https://developer.android.com/training/app-links/deep-linking" target="_blank">Android Intent Filters</a>

If you have a Website and Mobile App, you can set **Different URL for web/app** with the `web_url` and `app_url` parameters on the dashboard or API.

##Default Processing of Launch URL
Sending a Launch URL with `http://` or `https://` links will have the following behavior. Note that Apple requires HTTPS URLs for iOS unless you update the <a href="https://developer.apple.com/documentation/security/preventing_insecure_network_connections?language=objc" target="_blank">App Transparency Security Settings</a>.
[block:parameters]
{
  "data": {
    "h-0": "Platform",
    "h-1": "Default Behavior",
    "0-0": "Android",
    "0-1": "Will prompt to open default browser.",
    "1-0": "iOS<sup>1</sup>",
    "1-1": "Will open in-app browser.",
    "2-0": "Web",
    "2-1": "Will link the user to the URL upon push click.\nMore details in [Advanced Notification Options](https://documentation.onesignal.com/docs/web-push-options#click-behavior)"
  },
  "cols": 2,
  "rows": 3
}
[/block]
**Note <sup>1</sup>**: **Native iOS SDK version 3.x.x** has `setLaunchURLsInApp()`method. Set this to `false` if you want launch URLs to open in the default browser set in device settings.

##Suppressing Launch URLs

This section discusses how to prevent the Launch URL from opening a browser. If you want to keep this functionality, then see below [Deep Linking with Additional Data](#deep-linking-with-additional-data) instead.

**Native Android SDK version 4.2.0+**, in `AndroidManifest.xml` add `com.onesignal.suppressLaunchURLs`. 
Setting the value to `true` **will not** launch the url in a browser. Allows you to handle programmatically.
Setting the value to `false` **will** launch the url in a browser.
[block:code]
{
  "codes": [
    {
      "code": "<meta-data android:name=\"com.onesignal.suppressLaunchURLs\" android:value=\"true\"/>\n",
      "language": "xml",
      "name": "AndroidManifest.xml"
    }
  ]
}
[/block]
**Native iOS SDK version 3.2.1+**, in `Info.plist` add `OneSignal_suppress_launch_urls`.
Setting the value to `true` **will not** launch the url in a browser. Allows you to handle programmatically.
Setting the value to `false` **will** launch the url in a browser.
[block:code]
{
  "codes": [
    {
      "code": "<key>OneSignal_suppress_launch_urls</key>\n<true/>",
      "language": "xml",
      "name": "Info.plist"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd1a396-Screen_Shot_2021-02-17_at_12.47.39_PM.png",
        "Screen Shot 2021-02-17 at 12.47.39 PM.png",
        1108,
        324,
        "#3b424a"
      ]
    }
  ]
}
[/block]
----
#Deep Linking

Linking to specific pages of your app through push works best with a custom URI that your app is setup to detect and handle programmatically usually through <a href="https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app" target="_blank">iOS URL Schemes</a> and <a href="https://developer.android.com/training/app-links/deep-linking" target="_blank">Android Intent Filters</a>. It is not recommended to use iOS Universal Links or Android App Links.

It is recommended to create a custom scheme specific for your app like `your-app-name://the-identifier-for-the-page-to-go-to`.

##Deep Linking With Additional Data

Using Additional Data or the API `data` parameter, you can pass some data into the notification and handle it programmatically within the SDK [Notification Opened Handler](https://documentation.onesignal.com/docs/sdk-notification-event-handlers#notification-opened-event) and the `additionalData` property.

##Link into the app store

You can enter the store link as the launch URL. Examples:

**Android** - `https://developer.android.com/distribute/marketing-tools/linking-to-google-play.html`
**iOS**  - grab the link to the app store page, but replace "https://" with "itms-apps:"

##Dynamic URLs

Variables can be set within the Launch URL through Data Tags. See [Message Personalization - Launch URL Substitution](doc:personalization#launch-url-substitution) for details.

##No Linking

Currently on mobile apps, anytime the user clicks the push it will open the app.

**Web Push:** If you do not want to link to any page or url, you can add `?_osp=do_not_open` to the end of a URL like this `https://yoursite.com/page?_osp=do_not_open` as the launch url, this will prevent the push from going to any url upon click and will just dismiss the push.

----

#UTM Parameters

[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/34wxfYrAgRg\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
UTM parameters are query parameters added to URLs to measure the effectiveness of a marketing campaign. OneSignal allows you to automatically set source, medium, and campaign parameters for your push notification's sent from the OneSignal Dashboard using the Launch URL / App URL and Action Button URLs.
[block:callout]
{
  "type": "warning",
  "title": "UTM Parameter Limitations",
  "body": "UTM Parameters set within the dashboard are not supported in the following options:\n- Emails\n- Automated Messages\n- API requests\n- Using \"Send Test Message\" button\n- Additional Data\n\nYou will need to add UTMs directly within the Template or API request directly.\n\nIf you are using the OneSignal WordPress Plugin, you can add UTM parameters within the Plugin Settings towards the bottom within the UTM Tracking Settings."
}
[/block]
Enable UTM parameters in **Settings > Messaging > Turn on automated UTM tagging**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9618ee8-utm_settings.png",
        "utm settings.png",
        2568,
        1004,
        "#dfe2e5"
      ],
      "sizing": "full",
      "border": true
    }
  ]
}
[/block]
You can edit these values to suit your requirements. UTM Parameters set within the dashboard are as follows: 

- Source = `onesignal`
- Medium = `push`
- Campaign = `{{ sendDate }}-{{ title }}`

**sendDate:** Sent At date from the Delivery → Sent Messages statistics
**title:** First 15 chars (a-z, A-Z, 0-9, underscore, hyphen) of the message title

**Note**: Message variables `sendDate` and `title` are for the campaign parameter only.

Example URL with UTM parameters appended from the settings: 
`https: //test. com?utm_source=onesignal&utm_medium=push&utm_campaign=2020-06-03-sale-today`

#FAQ

##How are UTM parameters appended to my URLs?
With UTM Tagging enabled in app settings, you should enter the launch URLs *without* the UTM parameters as these will be appended automatically. 

If you add other UTMs with this feature enabled, then the UTMs you set manually will override the UTM Parameters set within the dashboard.

##Can I use non-English characters in the UTM parameters?
Yes! We don’t validate the accuracy of a URL. If there are characters other than a-z, A-Z, 0-9, underscores, or hyphen entered in a URL or UTM parameters, then please make sure the URL works before sending the notification.

##How to use UTM parameters?
Google Analytics, for example, uses links with UTM parameters to provide insights into your campaigns and users. These are a few common ways to use Google Analytics to understand your traffic, user behavior, and conversion data:

* **Understand Your Campaigns**: Replicate the successful campaigns and improve the underperforming ones.
On Google Analytics, navigate to Acquisition > Campaigns > All Campaigns

  * Compare metrics across different campaigns, such as users, sessions, bounce rates, and goal conversions. If you’ve used the same UTM campaign tag for different sources or mediums, you can click into that campaign and compare the performance across these different channels (source/medium).

* **Understand Your Audiences**: Identify the successful user segments and improve your target audience for future campaigns.
On Google Analytics, navigate to Audience > Demographics | Interests | Geo | Mobile

  * Add Campaign as a secondary dimension to Audience reports. Compare campaign performance across demographic segments (Age, Gender, Location, Devices) or interests (Affinity Categories, In-Market Segments). 

* **Understand Your Channels**: Optimize your marketing channels.
On Google Analytics, navigate to Acquisition > All Traffic > Source/Medium

  * Compare the performance of push as a channel with your other channels, such as email or paid ad campaigns.

For more advanced analysis, filter your data by date ranges and audience segments. Add a secondary dimension for deeper insight. Set up goals, events, and custom data to track conversions.