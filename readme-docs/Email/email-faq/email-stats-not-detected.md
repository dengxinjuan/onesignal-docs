---
title: "Webhooks & Why Email Stats Not Detected?"
slug: "email-stats-not-detected"
excerpt: "Webhook setup and troubleshooting why email analytics not showing in OneSignal."
hidden: false
createdAt: "2021-11-19T03:00:41.202Z"
updatedAt: "2021-12-29T21:02:29.779Z"
---
Email analytics like clicks, opens and unsubscribes require 3 items to be setup properly:
[block:parameters]
{
  "data": {
    "h-1": "Details",
    "h-0": "Requirement",
    "1-0": "Link Tracking Enabled",
    "1-1": "Link Tracking defaults to always on unless specifically disabled. See <a href=\"doc:email-links-and-click-tracking\" target=\"_blank\">Email Links and Click Tracking</a> to verify that is enabled.",
    "2-0": "Valid CNAME record",
    "2-1": "This is part of the setup process and is not required for sending emails, but is required for click, open and unsubscribe tracking.\n\nCheck your ESP and DNS provider that the CNAME is verified.",
    "0-0": "Webhook configuration",
    "0-1": "This is usually the issue with email stats not being detected. See troubleshooting steps based on your ESP:\n- [SendGrid](#sendgrid-webhook-troubleshooting)\n- [Mailgun](#mailgun-webhook-troubleshooting)\n- [Mandrill](#mandrill-webhook-troubleshooting)"
  },
  "cols": 2,
  "rows": 3
}
[/block]
#Webhook Configuration

Webhooks are often used for things like analytics integrations as they allow access to email delivery statistics, and are sent from your email service provider to OneSignal. To simplify setup, OneSignal will automatically configure Webhooks when possible with your email provider. If you already a Webhook setup and you don't need it, you should first disable it in your email service provider before continuing. 

##SendGrid Webhook Troubleshooting

Within SendGrid Settings > Mail Settings. Make sure Event Settings > Event Webhook is Enabled.

This should be pointing to `https://onesignal.com/email/hooks/sendgrid` and have the minimum settings shown:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0b56e50-d1d45db-Screen_Shot_2021-10-20_at_2.05.47_PM.png",
        "d1d45db-Screen_Shot_2021-10-20_at_2.05.47_PM.png",
        2526,
        1522,
        "#c1c3c4"
      ]
    }
  ]
}
[/block]
Also make sure you have granted Full Access to the API key or at least enabled Full Access to the Tracking events shown in the [SendGrid Setup](https://documentation.onesignal.com/docs/sendgrid-setup#step-3-create-api-key). 

##Mailgun Webhook Troubleshooting

Within Mailgun Sending > Webhooks > Your Domain > Webhooks or Legacy Webhooks.

This should be pointing to `https://onesignal.com/email/hooks/mailgun`

##Mandrill Webhook Troubleshooting

Within <a href="https://mandrillapp.com/settings/webhooks" target="_blank">Mandrill > Settings > Webhooks</a> make sure you have a hooked into OneSignal's endpoint `https://onesignal.com/email/hooks/mandrill` with the following settings:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d2e4281-1753ea6-Screen_Shot_2021-10-22_at_3.50.22_PM.png",
        "1753ea6-Screen_Shot_2021-10-22_at_3.50.22_PM.png",
        3818,
        1052,
        "#e7e6e0"
      ]
    }
  ]
}
[/block]
#FAQ
##How do I set up OneSignal if I already have an active Webhook?
You can continue to use your custom webhook but should then forward the request to OneSignal's Webhook URLs. Setup a timeout of 30 seconds for best results.

OneSignal Webhook URLs:

* **Mailgun:** `https://onesignal.com/email/hooks/mailgun`
* **Sendgrid:** `https://onesignal.com/email/hooks/sendgrid`
* **Mailchimp/Mandrill:** `https://onesignal.com/email/hooks/mandrill`

If you need assistance setting up multiple webhooks then the <a href="https://zapier.com/apps/webhook/integrations" target="_blank">Webhooks by Zapier Integrations</a> is a good solution. Use Zapier's **Catch Hook** trigger to as the POST URL for the webhook in your ESP. Then setup as many **POST** webhook actions needed to hit all your webhook URLs including OneSignal's listed above.