---
title: "Import Email Addresses"
slug: "import-email-addresses"
excerpt: "How to import email addresses from your server to use OneSignal Email Messaging"
hidden: false
createdAt: "2018-03-08T01:09:07.717Z"
updatedAt: "2021-08-08T01:00:19.083Z"
---
A benefit of using OneSignal for email is the ability to control both a user's Push and Email subscriptions together in one place. Email records will have a separate device record (Player ID) than push notification subscribers. This is to manage cases of the user opting-out of one channel, you can still message them on the other.

It is recommended to add emails through the OneSignal SDK `setEmail` method outlined in the [Email Quickstart](doc:email-quickstart).

If you have a list of email addresses to start sending right away, you can bulk import in the following ways.
[block:parameters]
{
  "data": {
    "h-0": "Import Option",
    "h-1": "Details",
    "0-0": "[Dashboard Upload](#import-emails-through-dashboard)",
    "0-1": "Upload a CSV list of emails and add/remove/update [Data Tags](doc:add-user-data-tags) for segmentation and personalization.\n\nAlso, [individually add emails](#manually-add-emails) if needed.",
    "1-0": "[API Import](#import-emails-via-api)",
    "1-1": "Programmatically add emails server side.",
    "2-0": "SDK `setEmail` method outlined in the [Email SDK Methods](doc:email-sdk-methods) guide.",
    "2-1": "Add emails using our client side SDK.",
    "3-0": "[Email & Phone Number Web Prompt](doc:email-phone-number-web-prompt)",
    "3-1": "A web prompt that allows user to include their own email address and phone number."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Duplicate Email Records",
  "body": "OneSignal will automatically remove duplicates email records and combine associated tags. If the email record is marked as unsubscribed, it will continue to be marked unsubscribed unless manually updated."
}
[/block]
# Import Emails through Dashboard

Within **Audience > All Users**, you can import a CSV list of email addresses or add email addresses directly. 

With emails, you can add [Data Tags](doc:add-user-data-tags) for segmentation and [Message Personalization](doc:personalization).

## CSV Upload
[block:callout]
{
  "type": "warning",
  "body": "- Must have `email` column\n- Limited to UTF-8 Encoding\n- Columns must be unique\n- 10 columns max\n- Commas only\n- No quotes",
  "title": "CSV Email Upload"
}
[/block]
Example CSV:

`email,group,status,firstname,awesome_level,other_tag_keys`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b3acfae-Screen_Shot_2020-10-21_at_2.53.34_PM.png",
        "Screen Shot 2020-10-21 at 2.53.34 PM.png",
        741,
        125,
        "#eeefef"
      ]
    }
  ]
}
[/block]
Select the blue button **Update/Import Users**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca0fd3f-Frame_1.png",
        "Frame 1.png",
        7475,
        3125,
        "#dbdfe3"
      ]
    }
  ]
}
[/block]
Next to "Import Emails", select **Upload CSV** 

The CSV can contain the following fields/columns:

  * email (compulsory field) - must be a string of characters, to form a valid email address. 
  * Tags - any additional columns will be added as user tags


If you need help ensuring your CSV is in the correct format, download our template using **CSV Template**. Make sure you have an `email` field in the CSV file. All other fields will be added as tags. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c49e980-Frame_2_1.png",
        "Frame 2 (1).png",
        7475,
        3125,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]
## Manually Add Emails

Click the dropdown next to **Update/Import Users > Manually Add Emails** to open a new modal where you can add an individual user's email and tag data.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41814bc-Frame_4.png",
        "Frame 4.png",
        7475,
        2565,
        "#d2d7dc"
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
        "https://files.readme.io/0693c38-Screen_Shot_2020-10-21_at_2.59.29_PM.png",
        "Screen Shot 2020-10-21 at 2.59.29 PM.png",
        1074,
        472,
        "#f0f1f1"
      ]
    }
  ]
}
[/block]
### Adding Tags
In addition to adding a user's email, you may also add/update [Data Tags](doc:data-tags) to the user record. The Manually Add Users modal supports adding up to 10 tags. 

If the email address you enter is not found in your OneSignal user list, a new user will be created. However, if the email address is found, the user will be updated with any tags that you add here. If a user already has a tag with a particular key (e.g. `levels_completed`), any value you add here will replace the value the user record previously had.


----

# Import Emails via API

Using the Server API [Add a device](ref:add-a-device) endpoint, you can import your Email Addresses into OneSignal.

This creates a new unique Email Record Player ID in OneSignal. To associate the OneSignal Player ID Records across Email, Push, and SMS together to the same User, set the `external_user_id` parameter to be your unique User ID from your databases. 

If you are storing the OneSignal Push Record Player IDs in your database, you can also link this to the Email Record Player ID using the `device_player_id` parameter.

See the following for example code:
[block:parameters]
{
  "data": {
    "0-0": "Ruby",
    "0-1": "[Example Code](https://gist.github.com/jkasten2/8972f9ef8e14b261c041b7eb6db1240d#ruby)",
    "h-0": "Language",
    "h-1": "Code",
    "1-0": "Node.js",
    "1-1": "[Example Code](https://repl.it/@OneSignal/email-import-users-js) (can test from repl.it)",
    "2-0": "PHP",
    "2-1": "[Example Code](https://repl.it/@OneSignal/email-import-users-php) (can test from repl.it)"
  },
  "cols": 2,
  "rows": 3
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Once you've imported your emails, go back to [Email Quickstart](doc:email-quickstart) to determine if you have any steps left.",
  "title": "Done!"
}
[/block]