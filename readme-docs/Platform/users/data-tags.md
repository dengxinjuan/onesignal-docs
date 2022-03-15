---
title: "Using Data Tags"
slug: "data-tags"
excerpt: "OneSignal features - Data Tags"
hidden: true
createdAt: "2016-09-02T02:19:12.853Z"
updatedAt: "2022-01-16T17:36:41.094Z"
---
[block:callout]
{
  "type": "info",
  "body": "If you haven't yet integrated tags into your OneSignal implementation, [start here](doc:add-user-data-tags).",
  "title": "REQUIRES DATA INTEGRATION"
}
[/block]
**Tags** are one of OneSignal’s most powerful features, allowing customers to store arbitrary data attributes on each user. Tags are available on all OneSignal accounts, and are a very popular feature among our customers. 

## Why Use Tags
Tags unlock three important features of OneSignal:

### 1. Improve user targeting by filtering in Segments
The most frequent use of tags by customers is filtering users by certain attributes. Popular types of tags include app activity, user account information, and demographics. 

For instance, customers often check whether users have completed app onboarding, which allows them to send targeted messages to users that may have dropped off before understanding the app’s value proposition. Customers will also frequently store whether a user has a certain type of account or account privileges, such as if they’re a VIP, Premium User, etc. These attributes let customers send highly targeted messages to their most valuable users.

### 2. Personalize messages to users with Variable Substitution
Tags can be used to personalize messages with variable substitution. For example, customers that want to send a welcome message may prefer to use the user’s name, rather than a more generic message. This is made possible by sending OneSignal the user’s name as a tag.

To learn more about variable substitution, take a look at [OneSignal Tag & Variable Substitution Documentation](https://documentation.onesignal.com/docs/tag-variable-substitution) and [read our blog post](https://onesignal.com/blog/onesignal-enters-2017-with-smart-scheduling-variable-substitution-and-more/).

### 3. Build helpful linkages to internal CRM systems
Many customers use internal CRMs or other systems to link their user records with OneSignal user records. This allows customers to get a deeper sense of who their customers are and perform offline analytics. These linkages are made by tagging a OneSignal user with the internal user ID. To learn more, read more about integrating with your [Internal Database & CRM](doc:internal-database-crm).


## How to Use Tags
Tags are visible from <a class="dash-link dash-users" href="/docs/users-and-devices">All Users</a>, and may be used to filter users within <a class="dash-link dash-users" href="/docs/segmentation">Segments</a>.

Tags may only be added to users via the SDK or API. They cannot be added via the dashboard.


### 1. Create a Segment using Tags filter
<a class="dash-link" href="/docs/dashboard">Dashboard</a> > <a class="dash-link dash-users" href="/docs/users-and-devices">Users</a> > <a href="/docs/segmentation" class="dash-link dash-users">Segments</a>

To target specific users with tags, you must first [Create or Edit a Segment](doc:segmentation#section-creating-segments-using-filters). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2796350-1.png",
        "1.png",
        3616,
        3540,
        "#e3e4e7"
      ]
    }
  ]
}
[/block]

1. Add the **User Tag** filter

2. Type in the tag `key` you wish to match

3. Select the appropriate operator (`greater than`, `less than`, `equal to`)

4. Enter in the tag `value` you wish to match

5. Name your segment (e.g. VIP Users)

Note that the operators `greater than` and `less than` only work on values that are numeric. Any users with non-numeric values for your chosen key will be ignored when using these operators.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/290c099-2.png",
        "2.png",
        3664,
        1560,
        "#e7e6e7"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "You wish to create a segment of users that have opened the app at least once. You have three users, with the following tags:\n\n`user1 - {opened_app: yes}`\n`user2 - {opened_app: 2}`\n`user3 - {opened_app: 0}`\n\nIf you add the filter `opened_app greater than 0`, the following will be part of your segment:\n`user1` - excluded (because the value is not set to a number)\n`user2` - **included**\n`user3` - excluded (the value is not greater than 0)",
  "title": "Example of Numeric Operators"
}
[/block]
### 2. Send Message to Segment
<a class="dash-link" href="/docs/dashboard">Dashboard</a> > <a class="dash-link dash-messages" href="/docs/sending-notifications">Messages</a> > <a href="/docs/sending-notifications" class="dash-link dash-messages">New Message</a>
Now that you've created your segment matching at least one user, you can send a notification targeting this segment using this option:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca0b2d1-3.png",
        "3.png",
        4436,
        1260,
        "#fbfafb"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4329318-4.png",
        "4.png",
        2336,
        1932,
        "#e3e4e7"
      ]
    }
  ]
}
[/block]
Your segment is now added. To remove the segment, just click the **X** button:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9266dec-5.png",
        "5.png",
        3036,
        1264,
        "#f8f9fb"
      ]
    }
  ]
}
[/block]
If you get an error saying "The selected segments does not have any users", go back to your Segments page and check the filter conditions. Remember they are *AND*ed together and not *OR*ed together. Make sure the segment includes at least one user.

You can add segments to exclude as well. Click **Exclude Segment** and add a segment to be excluded:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0363bad-6.png",
        "6.png",
        3036,
        1280,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]
If you exclude a segment all the users in the excluded segment that match users in the targeted segment will NOT get notifications.
[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "You've successfully sent a targeted message to your users with data tags."
}
[/block]