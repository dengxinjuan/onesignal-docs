---
title: "Data Tags"
slug: "add-user-data-tags"
excerpt: "How to add custom data attributes to your OneSignal Users."
hidden: false
createdAt: "2016-09-22T04:25:40.763Z"
updatedAt: "2021-12-13T23:15:18.003Z"
---
Data tags are custom `key : value` pairs of string data used to add custom properties or event data to user records within OneSignal. Tags are useful for:

- Targeting devices using <a href="doc:segmentation" target="_blank">Segments</a> or the `tag` <a href="ref:create-notification#send-to-users-based-on-filters" target="_blank">API Filter</a>.
- Personalizing messages with <a href="doc:personalization" target="_blank">Tag Substitution</a>.
[block:callout]
{
  "type": "warning",
  "title": "Not for User IDs",
  "body": "Do not use tags for setting \"user Ids\" or sending messages to individual users. Instead use the <a href=\"https://documentation.onesignal.com/docs/external-user-ids\" target=\"_blank\">External User Id</a> property.\n\nOneSignal is not meant to be a database. If you wish to store complex user attributes, we recommend using a dedicated [Database, DMP, or CRM](doc:internal-database-crm)."
}
[/block]
Depending on your OneSignal account type, you may be limited on the amount of tags you can set per device record. See our <a href="https://onesignal.com/pricing" target="_blank">pricing page</a> for details on tag limits.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/O-3r4OTWqgw\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
---

#Implementation

Once you've integrated OneSignal in your app or website, you can implement tags in the following ways:
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Details",
    "0-1": "**Recommended:** Quickly add, remove, or update tags in almost real time when users perform actions or events on your site or mobile app.",
    "0-0": "<a href=\"https://documentation.onesignal.com/docs/data-tag-implementation\" target=\"_blank\">SDK Methods</a> \n- `sendTag`\n- `sendTags`",
    "1-0": "<a href=\"ref:edit-device\" target=\"_blank\">API Edit device</a>\n\n<a href=\"ref:edit-tags-with-external-user-id\" target=\"_blank\">API Edit tags with external user id</a>",
    "1-1": "Server REST API endpoint for directly updating the `tags` parameter on single devices with `player_id` or `external_user_id`.",
    "2-0": "<a href=\"doc:import-user-tags\" target=\"_blank\">CSV List Upload</a>",
    "2-1": "Upload a CSV of user data through the OneSignal Dashboard with the `player_id` or `external_user_id`.",
    "4-0": "<a href=\"doc:sending-in-app-messages\" target=\"_blank\">In-App Messages</a>",
    "4-1": "Tags can be added with click actions when clicking button or image blocks.",
    "3-0": "<a href=\"doc:category-prompt\" target=\"_blank\">Web Category Prompt</a>",
    "3-1": "Tags can be added/removed through a drop down prompt from your website.",
    "6-0": "<a href=\"https://documentation.onesignal.com/docs/integrations\" target=\"_blank\">Integrations</a>",
    "6-1": "- <a href=\"https://documentation.onesignal.com/docs/hubspot\" target=\"_blank\">Hubspot</a> has a \"Edit Tags\" workflow option.\n- <a href=\"https://documentation.onesignal.com/docs/segment-onesignal-integration\" target=\"_blank\">Segment Integration</a> syncs tags.\n- Mixpanel syncs `first_name` and `last_name` properties as tags.",
    "5-0": "<a href=\"https://onesignal.com/journeys\" target=\"_blank\">Journeys</a>",
    "5-1": "**COMING SOON** - Tag users automatically within a Journey workflow."
  },
  "cols": 2,
  "rows": 7
}
[/block]
Tag limits apply based on your [Account Type](https://onesignal.com/pricing). It's recommended to tag devices with simple and short `key : value` data used for messaging purposes.

----

#Recommended Tags to Send

The OneSignal SDK collects <a href="doc:data-collected-by-the-onesignal-sdk" target="_blank">some data automatically</a>. You do not need to tag data such as device type, country, push subscription status, or language. It is recommended to consider what data is required for targeting your users.

**Numbers are Powerful** - Both text and numbers are supported as tag values. Text data can be filtered with exact matches ("is" or "is not") while numeric values also support "less than" and "greater than" operations, which can be useful for more fine-grained user targeting. 

Also, you can use Unix Timestamps in Seconds for <a href="doc:time-operators" target="_blank">Time Operators</a> which measure how long it has been since a user performed an action.

- Keep tags as short as possible. The fewer characters the better. For example, use `1` for `true`.
- Instead of using `true` or `false`, count things! Set the value to be an integer like `1` or `1000` that you can increment the more a user does the action. Examples: [Increment By Page Topic Visits](doc:auto-segment-users-by-page-visit) or [Increment By Notification Topic](doc:segment-based-on-notification-clicks).
- Use tags that are valuable for event triggered messages, like [Abandoned Cart](doc:abandoned-cart) notifications.
- Only use alphanumeric characters and an underscore ("_"). Spaces, Periods (or "dots"), etc in tag keys cannot be substituted/processed and will result in a blank. 

##Activity

Event driven data based on user actions. "keys" should identify the action while "values" should be `integers` representing "how many times the action was performed" or `Unix Timestamps` for "when/how long it has been since the action was taken".

Example: `OneSignal.sendTag("times_event_performed", "3");` or `OneSignal.sendTag("when_event_performed", "1605847987");`
[block:parameters]
{
  "data": {
    "5-0": "`tutorial_status`",
    "h-0": "Key",
    "h-1": "Definition",
    "5-1": "if you have a tutorial to onboard users into your app, this is how far the user has gone. Example: `0` or `not_started`, `1` or `step1`, `5` or `step5`, `completed`",
    "3-0": "`social_share` or `referrals`",
    "h-2": "",
    "3-1": "When a user clicks a social share button or refers a friend, tag them with how many times they did it. Later reward the user or ask for an App Rating. Example: `0`, `1`",
    "3-2": "",
    "5-2": "",
    "2-0": "`amount_spent`",
    "2-1": "Track how much money the user spent. Recommended to use integers `100`, `35`. Don't use `$` or currency.",
    "0-0": "`cart_update` or `last_reload`",
    "0-1": "Most recent date the user added an item to their shopping cart or expressed interest in a purchase (usually through clicking a button). \n\nRecommended tag value as a Unix Timestamp in seconds to use [Time Operators](doc:time-operators).\n\nSee our [Abandoned Cart](doc:abandoned-cart) guide.",
    "1-0": "`last_order` or `last_paid`",
    "1-1": "Most recent date the user finished a purchase or order. Set value as a Unix Timestamp in seconds to use [Time Operators](doc:time-operators).",
    "4-0": "`last_notification_click`",
    "4-1": "Most recent date the user clicked a notification. Value set as a Unix Timestamp in Seconds. See our [Auto-Segment By Notification Data](doc:segment-based-on-notification-clicks)."
  },
  "cols": 2,
  "rows": 6
}
[/block]
##Game-Specific

Customers with games apps often target messages to users based on their activity in the game. We recommend storing these as numeric values where possible, in order to use `greater than` and `less than` operators.
[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Definition",
    "0-0": "`points`",
    "1-0": "`level`",
    "2-0": "`highscore`",
    "0-1": "The amount of points / experience points a user has",
    "1-1": "The current level the user is on",
    "2-1": "The top score the user has achieved"
  },
  "cols": 2,
  "rows": 3
}
[/block]

##Account-Related Data

Adding account-related tags are a great way to target messages to groups of users based on properties of their account such as cohort, or to [link user data to your internal database / CRM](doc:internal-database-crm).

Do not use tags for setting "user Ids" or sending messages to individual users. Instead use the <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User Id</a> property.
[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Definition",
    "0-0": "`user_type`",
    "0-1": "Type or tier of account users have (for example, `free`, `premium`, `VIP`, `admin`)",
    "h-2": "Usage",
    "0-2": "",
    "2-0": "`user_privileges`",
    "2-1": "Track user privileges in addition to type (for example, `administrator`, `early access`, `normal`, `guest`)",
    "2-2": "",
    "1-0": "`has_downgraded`",
    "1-1": "If the user was a paid or higher tier user that downgraded, tag them with `true` or `1` or a value as Unix Timestamp in seconds to track how long ago they downgraded."
  },
  "cols": 2,
  "rows": 3
}
[/block]
For instance, when tracking upgrade or downgrade events (after a purchase or cancelation), you can update these tags for targeting free vs premium users with different messages.
[block:code]
{
  "codes": [
    {
      "code": "//Upgrade event or user login and \"paid user\" detetected\nOneSignal.sendTag(\"user_type\", \"premium\");\n\n//Upon a downgrade event, we can mark the user to send promotions or surveys to ask why they downgraded\nOneSignal.sendTag(\"user_type\", \"free_downgraded\");",
      "language": "javascript"
    }
  ]
}
[/block]
These events are perfect for matching with [Time Operators](doc:time-operators) to track when the upgrade or downgrade event occurred. If you provide subscription plans, you can setup "reminder messages" to let the customer know their plan is about to expire.


##User Names & Preferences

Using a user’s name to personalize notifications is a great way to boost engagement. Just create a key for their name and then use [Variable Substitution](doc:personalization) when crafting your messages. 

Do not use tags for setting "user Ids" or sending messages to individual users. Instead use the <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User Id</a> property.
[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Definition",
    "0-0": "`first_name`",
    "0-1": "User’s first name",
    "h-2": "Usage",
    "0-2": "Targeting by type (e.g. Free, Premium, VIP, Admin)",
    "1-0": "`last_name`",
    "1-1": "User’s last name",
    "1-2": "Some customers like to track user privileges in addition to type (E.g. Administrator, EarlyAccess, Normal, Guest)",
    "2-0": "`user_name`",
    "2-1": "Name that users give themselves; often not a real name (example: PokeCatcher22)",
    "2-2": "Track activity and test messages by cohort"
  },
  "cols": 2,
  "rows": 3
}
[/block]
###Location & Demographics

Demographic data can be used to create segments and target specific groups of users.
[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Definition",
    "0-0": "`region`",
    "0-1": "User’s city or nearby metro region (optional: [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)) <sup>1</sup>",
    "h-2": "Usage",
    "0-2": "Targeting by type (e.g. Free, Premium, VIP, Admin)",
    "1-0": "`postcode`",
    "1-1": "The postal code of the user (varies by country)<sup>1</sup>",
    "1-2": "Some customers like to track user privileges in addition to type (E.g. Administrator, EarlyAccess, Normal, Guest)",
    "2-0": "`location`",
    "2-1": "Alternative to `region` and `postcode` for storing a custom location<sup>1</sup>",
    "2-2": "Track activity and test messages by cohort",
    "4-0": "`birth_year`",
    "5-0": "`age_range`",
    "4-1": "User's year of birth (example: `1998`)<sup>2</sup>",
    "5-1": "Age range of a user (example: `18-35`)<sup>2</sup>",
    "3-1": "User's date of birth (strongly recommended to be a Unix timestamp)",
    "3-0": "`birthdate`"
  },
  "cols": 2,
  "rows": 6
}
[/block]
<sup>1</sup> OneSignal collects the user's country.
<sup>2</sup> OneSignal should not be initialized if the user is under the age of 13.
 

----

#Data Formatting Best Practices

Do not use tags for setting "user Ids" or sending messages to individual users. Instead use the <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User Id</a> property.

**Tags are not meant to be arrays or lists.** You should use simple `key : value` pairs of string data for optimized performance. Integers, Floats, Doubles, decimals sent as strings can be used as numbers for [Segments](doc:segmentation).

* Key names are case sensitive, and will not accept `NULL`.
* Data values can contain up to 300 characters.
* Data values should be sent as JSON strings.

**Avoid sending multiple, related booleans** - We frequently see customers sending multiple boolean tags related to the same user attribute, where a better design would be to send a single tag. A single tag makes it easier to build segments, and keeps records cleaner. 

For instance:
[block:parameters]
{
  "data": {
    "h-0": "",
    "h-1": "Recommended",
    "0-0": "user1",
    "0-1": "`{user_type : \"VIP\"}`",
    "h-2": "Not Recommended",
    "0-2": "`{isVIP : \"TRUE\", isPremium : \"FALSE\", isBasic : \"FALSE\"}`",
    "1-0": "user2",
    "2-0": "user3",
    "1-1": "`{user_type : \"Premium\"}`",
    "2-1": "`{user_type : \"Basic\"}`",
    "1-2": "`{isVIP : \"FALSE\", isPremium : \"TRUE\", isBasic : \"FALSE\"}`",
    "2-2": "`{isVIP : \"FALSE\", isPremium : \"FALSE\", isBasic : \"TRUE\"}`"
  },
  "cols": 3,
  "rows": 3
}
[/block]
An easy rule of thumb is: don't use booleans in any situation where a user may only have one possible value (for example, VIP or Premium or Basic, but never two or three at the same time).

While this is not possible for all types of data customers wish to store, it's easier to work with a smaller number of keys in the dashboard.

**Use lowercase keys** - Unless you have a good reason otherwise, we recommend using all lowercase tag keys to ease confusion for whomever may be using tags in the OneSignal Dashboard.

**Avoid extended characters** - We do not recommend sending extended characters, like `~!@#$%^&*'{}|\'"`, as these may not be interpreted correctly in your code. Spaces, Periods (or "dots"), etc in tag keys cannot be substituted/processed and will result in a blank. Only use alphanumeric characters and an underscore ("_").


#FAQ

##How can I find and confirm tags are applied?

If you've setup tags correctly, you'll see the user with the tagged value in the OneSignal Dashboard on the All Users page:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e798a0c-Screen_Shot_2020-11-19_at_9.02.05_PM.png",
        "Screen Shot 2020-11-19 at 9.02.05 PM.png",
        1382,
        718,
        "#e4e5e6"
      ]
    }
  ]
}
[/block]
##Can I tag users through the Server API?

You can add, update, and remove tag data with the [Edit Device API](ref:edit-device) call and OneSignal `player_id` or [Edit tags with external user id](ref:edit-tags-with-external-user-id) and `external_user_id`. 

**Android Cache Warning:** data synchronization issues may occur if you try updating the same tag set with SDK and API.

The OneSignal Android SDK caches tag data to automatically retry sending if device is offline or fails to send data to OneSignal.

If you set a tag with the SDK (`tag: 1`) and then change it with the API (`tag: 2`), the Android SDK "thinks" the tag is still set to the original value (`tag: 1`) and will not attempt to update it back if the method is called again using the original value.

In this case, you can set the tag through the SDK to be a different tag value (`tag: 3`) and then it will update, or you can separate tags set by the API and SDK to make sure that they do not overlap.