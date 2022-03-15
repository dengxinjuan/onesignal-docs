---
title: "Mailgun Setup"
slug: "mailgun-setup"
excerpt: "How to setup Mailgun for use in OneSignal Email Messaging"
hidden: false
createdAt: "2018-03-08T22:56:07.532Z"
updatedAt: "2021-11-19T06:07:37.210Z"
---
OneSignal's Email Messaging requires the use of a third-party email service provider to handle email delivery. All you have to do is set up the integration between the provider and OneSignal, and you'll be ready to send emails through OneSignal.

#Step 1. Requirements
* <a href="https://www.mailgun.com" target="_blank">Mailgun Account</a>
* Mailgun US API. Currently Mailgun's EU API is not supported.
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* A domain you own and DNS provider.
[block:callout]
{
  "type": "info",
  "title": "Don't have a Domain, DNS Provider or Email Service Provider?",
  "body": "No problem! [Contact OneSignal's Sales Team](https://onesignal.com/contact) and ask about Email Onboarding."
}
[/block]
#Step 2. Configure your Domain for Email
In Mailgun, navigate to <a href="https://app.mailgun.com/app/sending/domains" target="_blank">Sending > Domains</a> click **Add New Domain**.

Add your domain and follow the setup.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/217ae95-Screen_Shot_2021-11-18_at_5.30.48_PM.png",
        "Screen Shot 2021-11-18 at 5.30.48 PM.png",
        1926,
        1168,
        "#c6cbcf"
      ]
    }
  ]
}
[/block]
You will be given two TXT (SPF and DKIM), two MX, and a CNAME record. Update these records in your DNS provider. It may take up to 48 hours (usually less) to propagate. Mailgun will email you once complete.
[block:callout]
{
  "type": "warning",
  "title": "Confirm all DNS records are verified.",
  "body": "Check in **Mailgun > Sending > Domain settings > Your Domain > DNS records**. Green checkboxes will show next to each record correctly identified.\n\nFor example, if the CNAME is missing, you will not get email click, open and unsubscribe tracking."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9c56965-Screen_Shot_2021-11-18_at_5.29.18_PM.png",
        "Screen Shot 2021-11-18 at 5.29.18 PM.png",
        1832,
        1170,
        "#c3c8cd"
      ]
    }
  ]
}
[/block]
#Step 3. Enable Email Messaging
After all your DNS records are verified, go to OneSignal and navigate to **Settings > Platforms > Email**. 
Select Mailgun and Continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/35b511e-mailgun.png",
        "mailgun.png",
        1549,
        649,
        "#e1e5e7"
      ],
      "caption": "Image showing initial Email Configuration"
    }
  ]
}
[/block]
In another tab, navigate to **Mailgun > Sending > Domain settings > Your Domain > SMTP credentials**.

Copy your `Domain` and `SMTP Login` into OneSignal. 

Click the **Reset password** button and **Copy** the provided value into OneSignal's `Default Password` field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29220ce-Screen_Shot_2021-11-18_at_5.35.38_PM.png",
        "Screen Shot 2021-11-18 at 5.35.38 PM.png",
        2984,
        1232,
        "#d9dce0"
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
        "https://files.readme.io/e4d28ba-Screen_Shot_2021-11-18_at_5.43.02_PM.png",
        "Screen Shot 2021-11-18 at 5.43.02 PM.png",
        1420,
        1024,
        "#f6f7f9"
      ]
    }
  ]
}
[/block]
In Mailgun under <a href="https://app.mailgun.com/app/account/security/api_keys" target="_blank">Settings > API Keys</a> copy the **Private API key** and paste into the OneSignal **API Key** Field and Continue.

Make sure you **do not** block the OneSignal Server API keys under "IP Whitelist". It's recommended to keep this section blank. However, if you use it add `147.75.1.2/30` and `147.76.1.2/30` to make sure it is not blocked.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/637a815-Screen_Shot_2020-05-09_at_8.25.10_AM.png",
        "Screen Shot 2020-05-09 at 8.25.10 AM.png",
        1329,
        805,
        "#d6dadd"
      ]
    }
  ]
}
[/block]
#Step 4. Configure Delivery Defaults
In OneSignal, add the default **name** and **email address** you want your emails to come from (these can be changed later). 

Press Done when finished.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2fb9d89-Screen_Shot_2021-11-18_at_5.49.04_PM.png",
        "Screen Shot 2021-11-18 at 5.49.04 PM.png",
        1420,
        676,
        "#f7f8f9"
      ]
    }
  ]
}
[/block]
#Step 5. Add Subscribers
If you have a list of emails ready, select **Upload CSV** to <a href="doc:import-email-addresses" target="_blank">Import Email Addresses</a>. You can always do this again later.

If you have a website and want to prompt users to provide their email. Select **Add Web Prompt** to use OneSignal's <a href="doc:email-phone-number-web-prompt" target="_blank">Email Web Prompt</a>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eff0619-Screen_Shot_2021-11-18_at_5.52.52_PM.png",
        "Screen Shot 2021-11-18 at 5.52.52 PM.png",
        1420,
        848,
        "#f0f4f4"
      ]
    }
  ]
}
[/block]
#Step 6. Send Yourself a Test Email

In **OneSignal > Messages > Email**, select **New Email**.

Add a `Subject` and click **Send Test Email**. Input your email and press **Send Test Message**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46aaab5-Screen_Shot_2021-11-18_at_6.00.46_PM.png",
        "Screen Shot 2021-11-18 at 6.00.46 PM.png",
        1806,
        598,
        "#fcfcfc"
      ]
    }
  ]
}
[/block]
An email should arrive to your inbox shortly!
[block:callout]
{
  "type": "info",
  "title": "Troubleshooting",
  "body": "If running into issues, see our [Email FAQ](https://documentation.onesignal.com/docs/email-faq).\n\nIf stuck, <span class=\"docs-icon docs-icon-chat\"></span><a href=\"\" class=\"contact-support\">contact support directly</a> or email support@onesignal.com for help.\n\nFor faster assistance, please provide:\n- Your OneSignal App Id\n- Details, logs, and/or screenshots of the issue.\n- Steps to reproduce"
}
[/block]
#Step 7. Set Custom User Properties
OneSignal creates channel-level device records under a unique Id called the player_id. A single user can have multiple player_id records based on how many devices, email addresses, and phone numbers they use to interact with your app.

If your app has its own login system to track users, call `setExternalUserId` at any time to link all channels to a single user. For more details, see <a href="https://documentation.onesignal.com/docs/external-user-ids" target="_blank">External User Ids</a>.

All other event and user properties can be set using <a href="https://documentation.onesignal.com/docs/add-user-data-tags" target="_blank">Data Tags</a>. Setting this data is required for more complex segmentation and message personalization.

#Step 8. Collect New Emails
Emails can be added into OneSignal using the following options outlined in our <a href="https://documentation.onesignal.com/docs/import-email-addresses" target="_blank">Import Email Addresses</a> guide.
[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Description",
    "0-0": "Dashboard Upload",
    "1-0": "Server API",
    "2-0": "SDK `setEmail` method",
    "3-0": "Email Web Prompt",
    "0-1": "Upload a `csv` of emails and user data or manually add emails.",
    "1-1": "Programmatically add emails server side.",
    "2-1": "Add emails using our client side SDK. **Recommended if using our SDKs for push or in-app messaging**.",
    "3-1": "A web prompt that allows user to include their own email address and phone number."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Setup Complete!",
  "body": "Visit [Email Tutorials](https://documentation.onesignal.com/docs/email-tutorials) for next steps."
}
[/block]