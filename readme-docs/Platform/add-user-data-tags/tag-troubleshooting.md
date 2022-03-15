---
title: "Tag Troubleshooting"
slug: "tag-troubleshooting"
excerpt: "Why are OneSignal tags not being set?"
hidden: false
createdAt: "2021-12-15T01:08:46.023Z"
updatedAt: "2021-12-15T01:12:14.431Z"
---
To check if data tags are set, you can visit the **Audience > All Users** page and see the Tags column or [Exporting User Data](doc:exporting-data). If you see tags set, but not new tags, then you may have too many and might need to <a href="https://onesignal.com/pricing" target="_blank">upgrade your account</a>.

#Why are data tags not showing on my device?
There are a few reasons why tags may not be set listed below. In all cases, our SDKs provide a
<a href="https://documentation.onesignal.com/docs/data-tag-implementation#gettags-method" target="_blank">`getTags` Method</a> to check the current tags set on the device and reset them if needed.

###Offline or Unstable Network Connection
The most common reason for tags not showing on a device is due to unstable or no network connection where the request to update the tags does not make it to OneSignal. 

**Android Mobile SDKs** will cache data tags and will retry adding the tag upon detecting a stable internet connection.

**iOS Mobile SDKs** provides a callback for you to handle this case.

**Web SDK**, the user must be subscribed before the tag is added to the device record. Once the user registers, the tags will automatically be sent to our server as long as the page session is the same (the user has not navigated to another page).

###End of Page Session
**Web SDK** - If the person leaves the page before the tags are set, they will not get the tags.

###Clearing Browser Cache
When web subscribers clear their browser data/cookies/cache it destroys the push records for al sites that user is subscribed under. OneSignal provides a feature to automatically resubscribe the user upon returning to the site with our SDK, but this will not add the tags back unless some additional steps are taken. See <a href="https://documentation.onesignal.com/docs/what-happens-when-i-clear-browser-cookies" target="_blank">What happens when I clear browser cookies?</a> for more details.
[block:callout]
{
  "type": "info",
  "title": "Further Troubleshooting",
  "body": "If you are having issues, plug the device into your IDE and use our <a href=\"https://documentation.onesignal.com/docs/sdk-reference#setloglevel-method\" target=\"_blank\">`setLogLevel` SDK method set to Verbose</a>. Then attempt to reproduce the issue you are seeing. This will help log any issues to your IDE console to debug."
}
[/block]