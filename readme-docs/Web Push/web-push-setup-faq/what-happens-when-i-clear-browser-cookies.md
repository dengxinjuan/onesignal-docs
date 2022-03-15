---
title: "What happens when I clear browser cookies?"
slug: "what-happens-when-i-clear-browser-cookies"
hidden: false
createdAt: "2021-12-14T23:43:33.336Z"
updatedAt: "2021-12-14T23:43:33.336Z"
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f7fe1e-Screen_Shot_2021-12-14_at_3.33.28_PM.png",
        "Screen Shot 2021-12-14 at 3.33.28 PM.png",
        2296,
        1196,
        "#4d5350"
      ]
    }
  ]
}
[/block]
When someone clears their browser cache/cookies/history this prevents the browser from getting all push notifications from sites in which they are subscribed.

When this happens it wipes all data about the user, like the player id. This is stored in the IndexedDB of the browser.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/329b798-Screen_Shot_2021-12-14_at_3.37.21_PM.png",
        "Screen Shot 2021-12-14 at 3.37.21 PM.png",
        2426,
        874,
        "#393d3d"
      ]
    }
  ]
}
[/block]
Clearing browser data does not reset push permissions to the site. Upon the subscribed user returning to the site, the OneSignal SDK checks the permissions and if push notifications are allowed, it automatically resubscribes the device to push, which creates a new push record (player_id and push token).

##What happens to my Data Tags?

Due to the previous player_id being deleted from the browser, there is no reference to the tags set for this device. To regain the tags, you should setup the [External User Ids](doc:external-user-ids) so tags persist across the User and not the Device.

A couple other options:

1. You can disable [auto resubscribe](https://documentation.onesignal.com/docs/web-push-quickstart#step-2-site-setup). This will prompt the user with the category prompt again, but will not show the native prompt after.

2. You can setup the OneSignal SDK to trigger the category prompt again if they don't have any tags set. Some example details in our [Category Prompt guide](https://documentation.onesignal.com/docs/category-prompt#triggering-the-prompt).