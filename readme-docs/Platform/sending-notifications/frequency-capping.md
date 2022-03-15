---
title: "Frequency Capping"
slug: "frequency-capping"
excerpt: "How to setup frequency capping with OneSignal and what is it?"
hidden: false
createdAt: "2019-11-06T20:39:38.097Z"
updatedAt: "2021-04-06T16:17:06.421Z"
---
Apps and websites using OneSignal want to reach their users but don’t want to overwhelm them. High volumes of marketing emails or push notifications can cause users to unsubscribe or have a bad experience with an app or website

Frequency capping allows users to specify the maximum number of messages per hour, day, or week which a device will receive from a given OneSignal App.

Frequency Capping is a [Paid Plan Feature](https://onesignal.com/pricing) available only on our Enterprise plan.

## Common Use Cases
Frequency Capping is most relevant for two primary use cases:
  * Large organizations with multiple marketing campaigns running at a given time, potentially by different people.
  * API-driven notifications triggered by a potentially frequent action (E.g. price changes in the stock market; news alerts that automatically fire)


## Setup
To limit the number of messages sent to your users, you can set Frequency Capping from the app level settings. Navigate to **Settings --> Messaging --> Frequency Capping**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9662a5d-set_freq_capping.png",
        "set freq capping.png",
        1870,
        1678,
        "#eeeff1"
      ]
    }
  ]
}
[/block]
Frequency cap can be specified as a number of times per HOUR, DAY, or WEEK. A day or a week is based on a rolling time window, that is, a day is the past 24 hours, a week is past 168 hrs.
[block:callout]
{
  "type": "info",
  "body": "Capping applies to all messages (Custom messages, Automated Messages, AB Tests, and messages sent via APIs) sent to the user."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Messages that could not be delivered due to frequency capping setting are dropped. These messages will not be queued for later delivery."
}
[/block]
### Override Frequency Capping
You can override the frequency capping for individual push and automated messages with the option under *Delivery Schedule* to “override frequency cap”.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33cca57-override_freq_capping.png",
        "override freq capping.png",
        1822,
        688,
        "#f7f7f9"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Messages that are sent with the ‘override frequency capping’ setting are still considered against the total capped count when sending other messages."
}
[/block]
## Reporting
Notification delivery reports (under *Scheduled* section) and exported csv for delivery reports now include frequency capped details. You will see the following status:
* Uncapped: Frequency capping is not enabled for the app.
* Capped: Frequency capping is enabled for the app.
* Overridden: Frequency capping is enabled for the app, but was overridden for the notification.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/07e8909-delivery.png",
        "delivery.png",
        991,
        357,
        "#dbe5e4"
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
        "https://files.readme.io/dae3629-scheduled_section.png",
        "scheduled section.png",
        1146,
        638,
        "#f9f7f7"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
## API Access
###[Create Notification](https://documentation.onesignal.com/reference/create-notification)
Frequency capping needs to be [enabled at an app-level from the dashboard](https://documentation.onesignal.com/docs/frequency-capping#setup) in order to use this param.
  * **Parameter**: enable_frequency_cap
  * **Type**: boolean
  * **Platform**: All, except Email and SMS. Frequency Capping is available for Push only.
  * **Description**: When frequency capping is enabled for the app, sending *true* will apply the frequency capping to the notification. If the param is not included, the default behavior is to apply frequency capping if the setting is enabled for the app.
Setting the param to *false* will override the frequency capping, meaning that the notification will be sent without considering frequency capping.

### [View Notification](https://documentation.onesignal.com/reference/view-notification)
**Returned Fields**
fcap_status:
* Uncapped: Frequency capping is not enabled for the app.
* Capped: Frequency capping is enabled for the app.
* Overridden: Frequency capping is enabled for the app, but was overridden for the notification.

**Platform delivery stats response field details**
If frequency capping is enabled on the app, *frequency_capped* will indicate the number of notifications that were not sent due to capping.