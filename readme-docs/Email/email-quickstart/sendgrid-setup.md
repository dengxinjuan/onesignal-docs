---
title: "SendGrid Setup"
slug: "sendgrid-setup"
excerpt: "How to setup Sendgrid for use in OneSignal Email Messaging"
hidden: false
createdAt: "2018-03-08T01:45:03.624Z"
updatedAt: "2021-12-09T21:27:23.152Z"
---
OneSignal's Email Messaging requires the use of a third-party email service provider to handle email delivery. All you have to do is set up the integration between the provider and OneSignal, and you'll be ready to send emails through OneSignal.

#Step 1. Requirements
* <a href="https://www.sendgrid.com" target="_blank">SendGrid Account</a>
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
[block:callout]
{
  "type": "info",
  "title": "Don't have a Domain, DNS Provider or Email Service Provider?",
  "body": "No problem! [Contact OneSignal's Sales Team](https://onesignal.com/contact) and ask about Email Onboarding."
}
[/block]
#Step 2. SendGrid Sender Authentication
It is recommended to use SendGrid's "Domain Authentication" so that SendGrid sends emails via your domain rather than `via sendgrid.net`, and the links your users click as coming from your domain.

**Recommended**: <a href="https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication" target="_blank">How to set up domain authentication</a>.

SendGrid also provides <a href="https://docs.sendgrid.com/ui/sending-email/sender-verification" target="_blank">Single Sender Verification</a> if you do not have a domain.

##Install DNS Records

If you selected **Domain Authentication** make sure your DNS Records are verified.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ceb5db-Screen_Shot_2021-10-20_at_1.18.12_PM.png",
        "Screen Shot 2021-10-20 at 1.18.12 PM.png",
        1402,
        872,
        "#f4f5f5"
      ]
    }
  ]
}
[/block]
The SPF, DKIM and MX records should be configured automatically through SendGrid's setup wizard.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41879e3-esp-sendgrid-domain-3.jpg",
        "esp-sendgrid-domain-3.jpg",
        2500,
        1600,
        "#f7f6f7"
      ]
    }
  ]
}
[/block]
#Step 3. Create API Key
In the SendGrid dashboard, go to <a href="https://app.sendgrid.com/settings/api_keys" target="_blank">Settings -> API Keys</a> and click 'Create API Key'.
 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f794466-esp-sendgrid-apikey.jpg",
        "esp-sendgrid-apikey.jpg",
        2500,
        1270,
        "#f9f9fb"
      ]
    }
  ]
}
[/block]
Name your API key something like `OneSignal API Key` and be sure to set permissions to **Full Access**. Click 'Create & View' when you are ready.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/afe1836-esp-sendgrid-apikey-2.jpg",
        "esp-sendgrid-apikey-2.jpg",
        2500,
        1350,
        "#e2e3e4"
      ]
    }
  ]
}
[/block]
Next, click on the API key to copy it to your clipboard. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b8a9822-esp-sendgrid-apikey-3.jpg",
        "esp-sendgrid-apikey-3.jpg",
        2500,
        990,
        "#faf9fa"
      ]
    }
  ]
}
[/block]
## What are the minimum API restrictions I can allow?

The minimum access you need to allow is as follows:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d82f50-Screen_Shot_2021-12-09_at_1.25.57_PM.png",
        "Screen Shot 2021-12-09 at 1.25.57 PM.png",
        986,
        1722,
        "#f8fafb"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Your <a href=\"https://docs.sendgrid.com/ui/account-and-settings/api-keys\" target=\"_blank\">SendGrid API Key</a> is like a password. Keep it safe and **do not share it**.",
  "title": "Keep your API key secret"
}
[/block]
#Step 4. Enable Email Messaging

In OneSignal, navigate to **Settings > Platforms** and click Email to configure your email settings. 

Select **SendGrid** as the provider.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a6f2f68-sendgrid.png",
        "sendgrid.png",
        1549,
        649,
        "#e1e4e7"
      ],
      "caption": "Image selecting SendGrid from email settings"
    }
  ]
}
[/block]
Paste your SendGrid API key into the provided field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4f26d68-sendgrid-1.png",
        "sendgrid-1.png",
        1549,
        581,
        "#e0e3e5"
      ],
      "caption": "Image showing where to enter your API Key"
    }
  ]
}
[/block]
###Delivery Defaults
Add the default **name** and **email address** you want your emails to come from (these can be changed later). 

Press Done when finished.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73db9bd-Screen_Shot_2021-10-20_at_3.32.12_PM.png",
        "Screen Shot 2021-10-20 at 3.32.12 PM.png",
        1641,
        670,
        "#dbdee0"
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
        "https://files.readme.io/2760d2b-Screen_Shot_2021-10-20_at_3.33.45_PM.png",
        "Screen Shot 2021-10-20 at 3.33.45 PM.png",
        1682,
        832,
        "#dde2e3"
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

----

#FAQ
##How do I set up OneSignal if I already have an active Webhook in SendGrid?
To simplify setup and be able to access email delivery statistics, OneSignal will automatically configure Webhooks with SendGrid. Unfortunately, SendGrid only supports a single webhook for a given account. OneSignal requires webhooks for email analytics, which may conflict with webhooks previously set up (e.g. for an analytics integration). 

If you need the webhook you have currently set up, you can forward the request to `https://onesignal.com/email/hooks/sendgrid`. Setup a timeout of 30 seconds for best results.

If you do not need the webhook you previously set up, you must change it. In SendGrid, go to **Settings > Mail Settings** and click 'Event Webhook'. The HTTP Post URL should be `https://onesignal.com/email/hooks/sendgrid` and have the minimum settings shown:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/989f714-Screen_Shot_2021-10-20_at_2.05.47_PM.png",
        "Screen Shot 2021-10-20 at 2.05.47 PM.png",
        2526,
        1522,
        "#c1c3c4"
      ]
    }
  ]
}
[/block]