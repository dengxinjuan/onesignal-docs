---
title: "Email Quickstart"
slug: "email-quickstart"
excerpt: "How to set up email messaging with OneSignal."
hidden: false
createdAt: "2018-03-07T23:57:58.186Z"
updatedAt: "2022-02-05T20:25:09.532Z"
---
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/K1f7Hj-cOwU?start=12\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
This guide will walk you through all the steps to have full email integration with OneSignal.

#Step 1. Setup Email Service Provider Support
**Required unless setup for you by OneSignal.**

Sending emails through OneSignal requires an account with an eligible email service provider listed below. If you do not have an account with any of these Email Providers [Contact OneSignal's Sales Team](https://onesignal.com/contact) and ask about Email Onboarding.
[block:parameters]
{
  "data": {
    "0-0": "<a href=\"doc:sendgrid-setup\" target=\"_blank\">SendGrid Setup</a>",
    "1-0": "<a href=\"doc:mailgun-setup\" target=\"_blank\">Mailgun Setup</a>",
    "2-0": "<a href=\"doc:mandrill-setup\" target=\"_blank\">Mailchimp/Mandrill Setup</a>",
    "0-1": "Supported",
    "1-1": "Supported",
    "2-1": "Supported",
    "h-0": "Email Providers",
    "h-1": "Details",
    "3-0": "Amazon SES",
    "3-1": "Not Supported"
  },
  "cols": 2,
  "rows": 4
}
[/block]

#Step 2. Add SDK Code 

**Optional** but recommended if using the OneSignal SDK. Methods provided for creating new email records as they are provided to you. See <a href="doc:email-sdk-methods" target="_blank">Email SDK Methods</a> to for a full list and example code.

#Step 3. Email Web Prompt

**Optional** but recommended if you have a website and want to prompt users to provide their email. Use the <a href="doc:email-phone-number-web-prompt" target="_blank">Email & Phone Number Web Prompt</a> to start gathering emails through a web prompt.

#Step 4. Import Emails

**Optional** but recommended if you already have a list of email addresses and wish to immediately start sending emails, you can import them into OneSignal. 

You can import emails through our Dashboard or server API. Details and code examples are available in <a href="doc:import-email-addresses" target="_blank">Import Email Addresses guide</a>.

#Step 5. External User Ids
**Required if using integrations.**
**Recommended**
Each email record in OneSignal gets a unique player_id (OneSignal's Device Id). The email player_id will be different from the push record player_id.

To map the unique email and push player_ids together under a single User Id, use the OneSignal `setExternalUserId` SDK method. See <a href="doc:external-user-ids" target="_blank">External User Ids</a>. It is recommended to call this method after the email is set.

#Step 6. Send Tags
**Optional**
Use <a href="doc:add-user-data-tags" target="_blank">Data Tags</a> for custom user and event properties. These allow for message personalization and segmentation.

Common tags used for message personalization:
[block:parameters]
{
  "data": {
    "0-0": "`real_name`",
    "1-0": "`first_name`",
    "2-0": "`last_name`",
    "3-0": "`user_name`",
    "4-0": "`salutation`",
    "0-1": "user’s full real name",
    "1-1": "user’s first name",
    "2-1": "user’s last name",
    "3-1": "name that users give themselves; often not a real name (e.g. PokeCatcher22)",
    "4-1": "if you wish to refer to users by a salutation (Ms, Dr, Hon, etc)",
    "h-0": "Tag Key",
    "h-1": "Tag Value"
  },
  "cols": 2,
  "rows": 5
}
[/block]
#Step 7. Send Emails

You can send singular messages to test functionality and for ad hoc campaigns through our <a href="doc:sending-email" target="_blank">Dashboard</a>
Or through <a href="ref:create-notification#email-content" target="_blank">API Email Creation</a>

** Set up <a href="doc:automated-messages" target="_blank">Automated Messages</a> for automatic and recurring emails. **
[block:callout]
{
  "type": "success",
  "body": "You are a OneSignal Email Pro!",
  "title": "Done!"
}
[/block]