---
title: "Why Emails Not Showing?"
slug: "emails-not-showing"
excerpt: "Troubleshooting why emails sent from OneSignal are not delivered to your inbox."
hidden: false
createdAt: "2021-11-02T23:56:04.941Z"
updatedAt: "2021-12-08T21:06:05.429Z"
---
If email is configured correctly within your OneSignal dashboard, then email requests should be going from OneSignal to your Email Service Provider whom then delivers the emails to your users. 

Each ESP provides activity logs which help detect any errors that might occur along the way. Please see the below steps to access your logs. If stuck, <span class="docs-icon docs-icon-chat"></span><a href="" class="contact-support">contact support directly</a> or email support@onesignal.com with the following details:
- Your OneSignal App Id
- A .txt file or screenshot of the logs with the error code like in the screenshots provided below

#Mailgun

In your MailGun Account under Sending > Logs, search the dates you sent the email.  Click the email and check the `delivery-status` > `description` and error `code` for more details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed77ff8-Screen_Shot_2021-11-02_at_4.52.09_PM.png",
        "Screen Shot 2021-11-02 at 4.52.09 PM.png",
        3774,
        1854,
        "#a5aeb6"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
### Status Message: unable to connect to MX servers:

This means Mailgun tried to contact the mail server for that email address, but the MX server did not respond. You may be on a lower tier plan with Mailgun and need to upgrade or have a configuration error for the MX record, check your DNS settings to make sure it is setup correctly.

#SendGrid

In your SendGrid Account under Activity, search the dates you sent the email. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03b506c-a44e541-Screen_Shot_2020-01-13_at_3.08.06_PM.png",
        "a44e541-Screen_Shot_2020-01-13_at_3.08.06_PM.png",
        1661,
        756,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
Click the error email. If you see the issue with SendGrid, see the [SendGrid Troubleshooting](https://sendgrid.com/blog/5-questions-to-ask-when-troubleshooting-email-delivery-problems/) for details.

If you see the error with OneSignal, click the date to expand the error. In the section "Full response from the onesignal.com server:" this will hint at the area that is broken.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a58d98-8f0c765-Screen_Shot_2020-01-13_at_3.09.21_PM.png",
        "8f0c765-Screen_Shot_2020-01-13_at_3.09.21_PM.png",
        695,
        1020,
        "#f9fafb"
      ]
    }
  ]
}
[/block]