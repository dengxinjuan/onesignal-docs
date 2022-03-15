---
title: "Throttling"
slug: "throttling"
excerpt: "Decrease rate at which messages sent to devices."
hidden: false
createdAt: "2020-12-07T19:01:34.043Z"
updatedAt: "2021-03-31T19:42:13.764Z"
---
Throttling allows you to control the send speed of notifications to help you manage your traffic. If you send notifications to a large audience but don't have the server capacity to handle a lot of concurrent visitors to your website or app, controlling notification sends makes it less likely you will experience a large surge in traffic.

When throttling is turned off, OneSignal will send notifications as fast as we can.

If you want to turn on throttling for your app, the throttling limit is applied automatically to all notifications send. You can turn on app-level throttling by going to **Settings** > **Messaging**. 

For ease of use, we allow setting throttling at a minute level. However, to improve the campaign performance, we convert the throttling limit at a per-second level. This results in contiguous processing of different batches and avoids the delay of a minute between the batches.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ef60e4-Screen_Shot_2021-01-04_at_2.49.47_PM.png",
        "Screen Shot 2021-01-04 at 2.49.47 PM.png",
        2196,
        1044,
        "#e5e7e9"
      ]
    }
  ]
}
[/block]
## Per-message Throttle Override

You can override your app-level throttle setting for any given notification on the notification creation form by ticking the 'Override throttling setting' tick box or the [API `throttle_rate_per_minute` parameter ](https://documentation.onesignal.com/reference/create-notification#delivery). 

If you want to not apply throttling to a given message, you can put a '0' in the messages per minute field:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5c66607-Screen_Shot_2020-12-22_at_9.48.00_AM.png",
        "Screen Shot 2020-12-22 at 9.48.00 AM.png",
        761,
        294,
        "#fbfcfc"
      ]
    }
  ]
}
[/block]
You might notice a difference in the throttling rate set vs implemented sometimes. This could be because of the rounding difference between the minute-level setting on the UI and conversion to the seconds-level throttling. For example, the throttling rate of 1019 messages per minute will be converted to 16 messages per second. This will result in 960 messages delivered per minute and a difference of 59 (1019 - 960) between the throttling rate set vs actual delivery. 

The throttling limit does not apply to automated messages, emails, or SMS. Automated messages are triggered when new audiences enter a segment and so tend to be dispersed over time. Email sends are already paced by email service providers (SendGrid, MailGun, Mandrill) for better deliverability. SMS throttling is limited by Twilio API concurrency limits at an app level. To avoid any issues/errors during delivery to Twilio, we throttle at one SMS per second. In the case of multiple SMS campaigns, delivery of the first campaign/message to Twilio will trigger the subsequent message processing.

Throttling is a  [Paid Plan Feature](https://onesignal.com/pricing) on the Growth plan and above.

## Throttling Limitations

Throttling will take precedence over timezone and intelligent delivery options.

If throttling is enabled and sending a notification with Timezone or Intelligent Delivery, then the timezone and intelligent delivery options will be ignored.

If you want to use Timezone or Intelligent Delivery Options, you must disable Throttling for that send. [API sent notifications](https://documentation.onesignal.com/reference/create-notification#delivery) set `throttle_rate_per_minute: 0`.