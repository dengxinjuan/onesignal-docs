---
title: "Time Operators"
slug: "time-operators"
excerpt: "Use time-based triggers to send push notifications to users based on the time"
hidden: false
createdAt: "2018-11-28T01:22:36.107Z"
updatedAt: "2021-09-25T20:41:47.634Z"
---
Time-sensitive messages are crucial for a proper user experience and a successful app/site. OneSignal's Time Operators allows you to easily track "time elapsed greater than or less than" any past, present or future event. Common examples:
- [Abandoned Cart Messages](doc:abandoned-cart) - user's add items to their shopping cart. It is crucial to send them a reminder message if they fail to checkout after a certain amount of time.
- Subscription Expiration Reminders - let users know ahead of time before their subscription ends and even create drip sequences if they lost track of time and forgot to re-register after subscription.
- Important Events - If you have events going on in the app that users registered for, remind them days, hours and/or minutes in advance!
- Milestones - Remind users about certain milestones they need to complete or send out 

Time Operators work by adding a unix timestamp in seconds as a <a href="doc:add-user-data-tags" target="_blank">Data Tag</a> value. The timestamp must be an integer value in seconds (10 digits), for example: `event : 1600968090` where `event` can be anything you want to track and is the tag "key" used to identify the event and `1600968090` is the past, present or future date of the event, expressed as an integer in [Unix Timestamp Seconds Format](https://www.unixtimestamp.com/).

Then through the User Tag [segment filter](doc:segmentation#filter-types) or [API Create notification `tags` filter](ref:create-notification#send-to-users-based-on-filters) you can target devices based on how long it has been since that date or time before that date will occur. Even setup [Automated Messages](doc:automated-messages) for easy drip campaigns.
[block:callout]
{
  "type": "warning",
  "title": "Paid Only Feature",
  "body": "\"Time Elapsed\" operators are only available on the paid plans.\n\nFree plan can still use the default Time Related [segment filters](doc:segmentation#filter-types):\n- **First Session:** tracks the first time the user interacts with the app (with OneSignal active) or subscribes to the site.\n- **Last Session:** is the last time the device was on the app or site (if OneSignal is active)."
}
[/block]

[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/W7cw6mVq0Qk\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
#"Time Elapsed" Operators

OneSignal supports the ability to create segments based on how much time has passed since a specific time stamp you specify with the **Time Elapsed Greater Than** and **Time Elapsed Less Than** operator.

This allows a much broader range of time-based actions than the first session and last session filters provided automatically as mentioned above.

Using a specific time stamp and the "Time Elapsed" operator can allow you to, for example, set a time that a user last took an action in your app, and then set up an automatic notification to send them a notification after a specified duration has passed. 

##Step 1. Set the Data Tag

[Data Tags](doc:add-user-data-tags) are `key : value` format. The `key` should be some event name or identifier while the `value` needs to be a unix timestamp in seconds.

Tags can be set with the OneSignal:
- API: [Edit tags with external user id](ref:edit-tags-with-external-user-id)  or [Edit device](ref:edit-device) 
- CSV Upload: [Importing User Attributes or Tags](doc:import-user-tags) 
- SDK: [Data Tag SDK Implementation](doc:data-tag-implementation), example:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  let timestamp = Math.floor(Date.now() / 1000);\n  OneSignal.sendTag(\"event_key\", timestamp).then(function(tagsSent) {\n    // Callback called when tags have finished sending\n    console.log(tagsSent);\n  });\n});",
      "language": "javascript"
    },
    {
      "code": "long timestamp = Calendar.getInstance().getTime() / 1000;\nOneSignal.sendTag(\"event_key\", timestamp);",
      "language": "java"
    }
  ]
}
[/block]
##Step 2. Create a segment

With the **User Tag** filter, set the tag `key` in *KEY* field, use the **Time Elapsed Greater Than** operator, and the desired **number of seconds** as the *VALUE*.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6444f41-Screen_Shot_2020-10-26_at_11.36.01_AM.png",
        "Screen Shot 2020-10-26 at 11.36.01 AM.png",
        803,
        440,
        "#eff0f2"
      ]
    }
  ]
}
[/block]
Another example, you could send a notification to users who had not confirmed their email address within a week of you sending them a verification email. 

By setting a data tag with the `intro_email_time` key and then using the "Time Elapsed Greater Than" and a value of `604800` (7 days X 24 hours X 60 minutes X 60 seconds). 

You could send this as a one-off message, or if you automatically wanted to send an email to even new users who fall into that bucket, could use [Automated Messages](doc:automated-messages) with this operator to automate on-boarding or engagement actions.
[block:callout]
{
  "type": "info",
  "title": "Abandoned Cart Example",
  "body": "If you have a checkout or payment system on your site, Time Operators are perfect for your use case. More details in our [Abandoned Cart](doc:abandoned-cart) guide."
}
[/block]
# Target Device X days before Specific Time

Another helpful feature for Time Operators is the ability to send a notification X time before a certain date. For example, sending a notification 2 days before a specific date provided by the user.

When the user provides the date, you can convert that date to a unix timestamp and tag the user.

Then create a segment based on how long before the end date using **time elapsed greater than** and a *negative time*. 2 days for example would be `- 172800` (60 seconds * 60 minutes * 24 hours * 2 days).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/935781a-Screen_Shot_2020-10-26_at_11.42.29_AM.png",
        "Screen Shot 2020-10-26 at 11.42.29 AM.png",
        803,
        440,
        "#eff0f2"
      ]
    }
  ]
}
[/block]
# Target Birthdays

You can setup Birthday Messages by capturing their next upcoming birthday as a unix timestamp and setup recurring [Automated Messages](doc:automated-messages) to go out every year.

Due to timezones and leap year, the date may not be 100% accurate, but will be very close.

When asking for the user's birthday, convert the month and day into a unix timestamp based on the current year. Subtract that date from the current date. If date has not passed, tag it to the user, if the date has passed, increase the year by 1 and tag the user with the future date.

This code shows how to do that:
[block:code]
{
  "codes": [
    {
      "code": "//Data you need to set:\nlet birthdayMonth = 0;//Format is MM 0 indexed, January = 0, December = 11\nlet birthdayDay = 29;//Format is DD\n\nlet currentDate = new Date();\nlet currentDateUnixTimestamp = Math.round(currentDate.getTime() / 1000);\nlet currentYear = currentDate.getFullYear();\nlet birthdayMonthDay = new Date(currentYear, birthdayMonth, birthdayDay); // Format YYYY, MM, DD \nlet birthdayUnixTimestamp = Math.round(birthdayMonthDay.getTime() /1000);\nlet currentBirthdayPassed = Math.sign(birthdayUnixTimestamp - currentDateUnixTimestamp);\n\nlet birthdayTimestamp = 0;\n\nif (currentBirthdayPassed === 1) {\n  console.log(\"birthday has not occurred yet!\")\n  birthdayTimestamp = birthdayUnixTimestamp\n\n} else if (currentBirthdayPassed === -1) {\n  console.log(\"we will celebrate next year\")\n  birthdayMonthDay = new Date(currentYear + 1, birthdayMonth, birthdayDay);\n    birthdayUnixTimestamp = Math.round(birthdayMonthDay.getTime() /1000);\n  birthdayTimestamp = birthdayUnixTimestamp;\n\n} else {\n  console.log(\"birthdate time not set properly\")\n}\nOneSignal.push(function() {\n  OneSignal.sendTag(\"birthday\", birthdayTimestamp).then(function(tagsSent) {\n    // Callback called when tags have finished sending\n    console.log(tagsSent);\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]

Create a `Birthday` [Segment](doc:segmentation) with the `birthday` tag and **time elapsed greater than** `0` seconds.

When the user's next birthday now passes, they will be added to this segment automatically.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8675ca3-Screen_Shot_2020-10-26_at_11.33.14_AM.png",
        "Screen Shot 2020-10-26 at 11.33.14 AM.png",
        803,
        440,
        "#eff1f3"
      ]
    }
  ]
}
[/block]
Create your Birthday Message [Template](doc:templates) which is the message you will send on their birthday. Since the date may not be 100% exact, you can say something like "It's around that time of year again!" for example.

Then within your Birthday [Automated Messages](doc:automated-messages) set the recurring option to be 52 weeks so it will be sent every year.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cfc76ec-Screen_Shot_2020-10-26_at_11.45.43_AM.png",
        "Screen Shot 2020-10-26 at 11.45.43 AM.png",
        1065,
        387,
        "#f7f8fb"
      ]
    }
  ]
}
[/block]