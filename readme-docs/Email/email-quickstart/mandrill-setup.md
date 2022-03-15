---
title: "Mailchimp/Mandrill Setup"
slug: "mandrill-setup"
excerpt: "How to setup Mailchimp/Mandrill for use in OneSignal Email Messaging"
hidden: false
createdAt: "2018-03-08T20:33:47.811Z"
updatedAt: "2022-01-25T01:18:50.705Z"
---
OneSignal's Email Messaging requires the use of a third-party email service provider to handle email delivery. All you have to do is set up the integration between the provider and OneSignal, and you'll be ready to send emails through OneSignal.

#Step 1. Requirements
* <a href="https://www.mailchimp.com" target="_blank">Mailchimp Account</a>
* Mandrill is the transactional email service offered by Mailchimp. Enable the <a href="https://us1.admin.mailchimp.com/account/billing-plan/" target="_blank">Mailchimp Transactional Email Plan</a> (first 500 sends are free).
* <a href="https://onesignal.com" target="_blank">OneSignal Account</a>
* A domain you own and DNS provider.
[block:callout]
{
  "type": "info",
  "title": "Don't have a Domain, DNS Provider or Email Service Provider?",
  "body": "No problem! [Contact OneSignal's Sales Team](https://onesignal.com/contact) and ask about Email Onboarding."
}
[/block]
#Step 2. Configure your domain for email
Navigate to the Mandrill App <a href="https://mandrillapp.com/settings/sending-domains" target="_blank">Settings > Domains > Sending Domains</a> and add your domain if you have not done so already.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a4f614-esp-mandrill-domain.jpg",
        "esp-mandrill-domain.jpg",
        2500,
        1030,
        "#e2e1e3"
      ]
    }
  ]
}
[/block]
When your domain is added, click **View DKIM/SPF Setup Instructions**, which provides the appropriate DNS settings you will need to update your domain. You can also verify your domain by clicking **View details** and receiving an email to your domain.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/208fa77-esp-mandrill-domain-2.jpg",
        "esp-mandrill-domain-2.jpg",
        2500,
        830,
        "#dcddda"
      ]
    }
  ]
}
[/block]
Next, you will need to update your DNS records for your domain host. Follow <a href="https://mailchimp.com/developer/transactional/docs/authentication-delivery/#configure-your-dns" target="_blank">Mailchimp/Mandrill's instructions</a> to learn more.

Once you have set up your DNS records, it make take up to 48 hours to work. Mailchimp will email you when your domain is verified.

#Step 3. Create API Key
In Mandrill, click <a href="https://mandrillapp.com/settings" target="_blank">Settings</a> and **+ New API Key**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/34f8ee5-esp-mandrill-apikey.jpg",
        "esp-mandrill-apikey.jpg",
        2500,
        1210,
        "#e5e5e7"
      ]
    }
  ]
}
[/block]
**Optional**: Name your API key something like `OneSignal API Key`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/635e416-esp-mandrill-apikey-2.jpg",
        "esp-mandrill-apikey-2.jpg",
        2500,
        1210,
        "#e9e9ea"
      ]
    }
  ]
}
[/block]
You will see your key was created successfully. Next, highlight the API key and copy it to your clipboard. Also note your **SMTP Username** here.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c630834-esp-mandrill-apikey-3.jpg",
        "esp-mandrill-apikey-3.jpg",
        2500,
        1340,
        "#e4e4e3"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Your Mailchimp API Key is like a password. Keep it safe and **do not share it**.",
  "title": "CAUTION! API Keys need to be secret"
}
[/block]
##Which API Key Permissions do I need to enable?

Since our API does a lot of communication between both platforms, you will likely need these permissions at the least:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73b2f9f-5bc4cf3-Mandrill.png",
        "5bc4cf3-Mandrill.png",
        772,
        1185,
        "#f2f2f4"
      ]
    }
  ]
}
[/block]
#Step 4. Enable Email Messaging

In OneSignal, go to **Settings > Platforms > Email** 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/02aa869-Screen_Shot_2020-10-22_at_4.24.33_PM.png",
        "Screen Shot 2020-10-22 at 4.24.33 PM.png",
        1106,
        283,
        "#d0d3d6"
      ]
    }
  ]
}
[/block]
Select **Mailchimp** as the provider, and paste in the API key and SMTP Username.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/08cf69c-Screen_Shot_2021-10-22_at_3.39.15_PM.png",
        "Screen Shot 2021-10-22 at 3.39.15 PM.png",
        1556,
        640,
        "#f1f4f6"
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
        "https://files.readme.io/89cfe87-Screen_Shot_2021-10-22_at_3.41.40_PM.png",
        "Screen Shot 2021-10-22 at 3.41.40 PM.png",
        1556,
        666,
        "#f3f5f7"
      ]
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
        "https://files.readme.io/5ae4aef-Screen_Shot_2021-10-22_at_3.43.01_PM.png",
        "Screen Shot 2021-10-22 at 3.43.01 PM.png",
        1556,
        628,
        "#f3f5f6"
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
        "https://files.readme.io/9238d48-Screen_Shot_2021-10-22_at_3.46.49_PM.png",
        "Screen Shot 2021-10-22 at 3.46.49 PM.png",
        1556,
        776,
        "#f0f3f3"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "You can now start sending emails. Go to [Sending Email Messages](doc:sending-email)."
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