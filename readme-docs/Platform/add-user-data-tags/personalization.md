---
title: "Message Personalization"
slug: "personalization"
excerpt: "Concepts - Ways to personalize messages to individual users"
hidden: false
createdAt: "2016-12-29T04:27:45.730Z"
updatedAt: "2021-12-13T22:59:46.452Z"
---
Personalizing messages helps users connect more with your app and website. Common examples are putting the person's name or [abandoned cart item](doc:abandoned-cart) in the notification title, message or image.

There are generally 2 ways to go about this:
1. Using OneSignal's [Data Tags](doc:add-user-data-tags) for tag substitution. Refer to [this chart](#tag-variable-substitution) to see which fields support tag substitution.
2. Track the Player ID or External User ID through your CRM or database and target the device directly with custom messages. See our [Internal Database, DMP, & CRM](doc:internal-database-crm) for more on how to set this up.
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/O-3r4OTWqgw?start=257\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
# Tag Variable Substitution

Push Notifications, In-App Messages, Emails, and SMS all support liquid syntax inline placeholders based on [Data Tags](doc:add-user-data-tags) set on each user's device. The tag key will be substituted with each individual device's tag value. 
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Push",
    "h-2": "In-App",
    "h-3": "Email",
    "h-4": "SMS",
    "0-0": "Title/Subject",
    "0-1": "Yes",
    "0-2": "N/A",
    "0-3": "Yes",
    "0-4": "N/A",
    "1-0": "Subtitle",
    "1-1": "Yes",
    "1-2": "N/A",
    "1-3": "N/A",
    "1-4": "N/A",
    "2-0": "Content",
    "2-1": "Yes",
    "2-2": "Yes",
    "2-3": "Yes",
    "2-4": "Yes",
    "3-0": "Content Click URL",
    "3-1": "Yes",
    "3-2": "N/A",
    "3-3": "Yes",
    "3-4": "N/A",
    "4-0": "Image",
    "4-1": "Yes",
    "4-2": "Yes",
    "4-3": "No",
    "5-0": "Image Click URL",
    "5-1": "N/A",
    "5-2": "Yes",
    "5-3": "Yes",
    "5-4": "N/A",
    "6-0": "Button",
    "6-2": "Yes",
    "6-3": "Yes",
    "6-4": "N/A",
    "7-0": "Button Click URL",
    "7-2": "Yes",
    "7-3": "Yes",
    "7-4": "N/A",
    "7-1": "Yes (Web Only)",
    "6-1": "No",
    "4-4": "No"
  },
  "cols": 5,
  "rows": 8
}
[/block]
Let says for example you want to send a message with a user's name and current stage they are on in your game. Example:

***Hello Josh! We just improved our controls, come back and see if you can beat level 10!***

You can set 2 tags to all your users, for example: `first_name` and `current_level`.

Within the message, set the "tag key" within the liquid syntax inline with your message, for example: `{{ tag_key | default: 'default_value' }}`. Replacing `tag_key` with your own key, as well as the required default value. 

Example tags set across 3 users.

**User 1:** tags: `first_name` : `Josh`, `current_level`: `10`
**User 2:** tags: `first_name`: `George`, `current_level`: `9`
**User 3:** No Tags

Send a notification with the following contents:
`Hello {{ first_name | default: 'there'}}! We just improved our controls, come back and see if you can beat level {{ current_level | default: '1' }}!`

This will result in the following notifications going out to each user.
[block:parameters]
{
  "data": {
    "0-0": "User 1",
    "1-0": "User 2",
    "2-0": "User 3",
    "0-1": "Hello Josh! We just improved our controls, come back and see if you can beat level 10!",
    "1-1": "Hello George! We just improved our controls, come back and see if you can beat level 9!",
    "2-1": "Hello there! We just improved our controls, come back and see if you can beat level 1!",
    "h-0": "User",
    "h-1": "Details"
  },
  "cols": 2,
  "rows": 3
}
[/block]
Tag Substitution happens client side for In-App Messages but server side for Push, Email, and SMS.
[block:callout]
{
  "type": "warning",
  "title": "Character Limitations",
  "body": "Only use alphanumeric characters and an underscore (\"_\"). Spaces, Periods (or \"dots\"), etc in tag keys cannot be substituted/processed and will result in a blank."
}
[/block]
## Launch URL Substitution

You can add tag substitution into the Launch URL (and associated [web URL and app URL](doc:links#launch-url)) of the push. You should not include the `http://` or `https://` protocol in the tag. Also not recommended to include the site origin. It is recommended to only tag the path of the URL the user should go to. 

For example, let's say you want to send the user to an abandoned cart page: `https://myshop.com/cart/jonf867` where `jonf867` is my "cart id" 

You would tag the user with `OneSignal.sendTag("cart_id", "jonf867");`

Then set the Launch URL to be: `https://myshop.com/cart/{{cart_id}}` the `cart_id` tag key will be replaced with the tag value when clicked by the user.

Another example we share is to [Auto-Segment By Subscription Page](doc:auto-segment-users-by-subscription-page) where you tag the user with the `sub_page : pathname` which is the path of the subscription page which the user subscribed.

For instance, if I subscribed on `https://yoursite.com/finance/tesla-soars-today`, my device will be tagged with `sub_page : /finance/tesla-soars-today` 
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function(){\n  OneSignal.sendTag(\"sub_page\", location.pathname);\n});",
      "language": "javascript"
    }
  ]
}
[/block]
However, if the URL also contains query parameters that you want to include. For example: `https://yoursite.com/en_us/apps/personas/booking?date=01&city=SFO&price=300`

Then you can use the `location.pathname + location.search` browser variables to capture the entire URL.

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function(){\n  OneSignal.sendTag(\"sub_page\", location.pathname + location.search);\n});",
      "language": "javascript"
    }
  ]
}
[/block]
You can reference this in the Launch URL by adding: `https://yoursite.com{{sub_page}}` because the tag already contains "/". If the tag does not contain "/" make sure you add it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/79d17ce-Screen_Shot_2020-04-03_at_12.06.11_PM.png",
        "Screen Shot 2020-04-03 at 12.06.11 PM.png",
        419,
        115,
        "#f0f2f5"
      ]
    }
  ]
}
[/block]
You can always test your implementation by setting yourself as a test user. See [Find Devices & Set Test Users](doc:users-and-devices) more details.


## Image Substitution

A common example for [Abandoned Cart](doc:abandoned-cart) is to add the last item set to the cart's image in the push. You can simply tag the user with a key like "cart_image" and the value is the full URL to the image.

Then in the Dashboard Image field or [API Image parameters](https://documentation.onesignal.com/reference/create-notification#attachments), you can set the tag key surrounded by curly brackets `{{cart_image}}` and/or add a default image 
`{{cart_image | default: 'https://cdn.pixabay.com/photo/2016/03/27/19/33/sunset-1283872_960_720.jpg'}}`

In addition to the main notification image, you can also use tag substitution for images and icons for different platforms under [platform settings](doc:sending-notifications#platform-settings).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0058499-Screen_Shot_2020-07-07_at_6.04.31_PM.png",
        "Screen Shot 2020-07-07 at 6.04.31 PM.png",
        475,
        561,
        "#f0f2f4"
      ]
    }
  ]
}
[/block]
----

#Target Directly by User Id

You can detect the User Id and target the device directly with custom push message. You can use the OneSignal [Player ID](doc:player-id) or your own [External User Ids](doc:external-user-ids).

For integrating your CRM or Database see the [Internal Database, DMP, & CRM Guide](doc:internal-database-crm).

Also more details on this in our [Transactional Messages Guide](doc:transactional-messages).

----

# Advanced Substitution

The push and email fields that support tag substitution use Liquid syntax which can come in handy for certain situations. Be careful not to get too complex with this code as it could create delays or issues with sending. Anything beyond simple if-else statements or addition/subtraction options are not recommended.
[block:code]
{
  "codes": [
    {
      "code": "{% assign balance = balance %}{% if balance == 0 %}Your balance is 0. {% endif %}{% if balance != 0 %}Your balance from 1000 is {{1000 | minus: balance}}{% endif %}",
      "language": "liquid"
    },
    {
      "code": "{% assign first_name = first_name %}{% if first_name contains \"guest\" %} Hi Amazing Person! {% else %} {{first_name | default: \"Amazing Person\"}}!{% endif %}",
      "language": "liquid"
    }
  ]
}
[/block]