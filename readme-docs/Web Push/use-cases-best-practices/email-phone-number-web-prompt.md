---
title: "Email & Phone Number Web Prompt"
slug: "email-phone-number-web-prompt"
hidden: false
createdAt: "2021-05-05T00:10:35.646Z"
updatedAt: "2021-12-16T22:09:43.550Z"
---
The new phone number and email web prompts can be configured via the dashboard for Typical Site setups and via initialization options for Custom Code setups. You can prompt for phone numbers, email, or both. You choose the wording, labels, and even the confirmation message. OneSignal will collect and synchronize these data on our systems.

# Typical Site Configuration
You can configure the prompt(s) in the **Web Configuration** page for your site **Settings**. Look for the "Add Prompt" button in the **Permission Prompt Setup section.** Click on "Email/Phone Prompt."
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3197a1-Screen_Shot_2021-10-04_at_2.33.16_PM.png",
        "Screen Shot 2021-10-04 at 2.33.16 PM.png",
        1140,
        198,
        "#f4f6f8"
      ]
    }
  ]
}
[/block]
Next, configure which channels you would like to capture and customize the action text, labels, and auto prompt delays.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/05fddc4-Screen_Shot_2021-05-04_at_7.22.36_PM.png",
        "Screen Shot 2021-05-04 at 7.22.36 PM.png",
        427,
        500,
        "#f0f3f5"
      ]
    }
  ]
}
[/block]

Leaving the configuration fields blank will result in the default values being used.

# Custom Code Setup
You can activate the Email & Phone Slidedown via custom code by passing in one of the following prompt option types for the `type` parameter:
   - `"sms"`
   - `"email"`
   - `"smsAndEmail"`
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.init({\n  // Your other init options here\n  promptOptions: {\n      slidedown: {\n        prompts: [\n          {\n            type: \"email\",\n            autoPrompt: false,\n            text: {\n              \"smsLabel\": \"Insert Phone Number\",\n              \"acceptButton\": \"Submit\",\n              \"cancelButton\": \"No Thanks\",\n              \"actionMessage\": \"Receive the latest news, updates and offers as they happen.\",\n              \"updateMessage\": \"Update your push notification subscription preferences.\",\n              \"confirmMessage\": \"Thank You!\",\n              \"negativeUpdateButton\": \"Cancel\",\n              \"positiveUpdateButton\": \"Save Preferences\",\n              \"emailLabel\": \"Email Address\"\n            },\n            delay: {\n              pageViews: 1,\n              timeDelay: 20\n            },\n          }\n        ]\n      }\n  }\n  // Continue other init options here\n}",
      "language": "javascript"
    }
  ]
}
[/block]
**Note:** if no other parameters are passed into the slidedown options object, the default values will be used.

## Triggering the Slidedowns
[block:parameters]
{
  "data": {
    "h-0": "Function",
    "h-1": "Description",
    "0-0": "`showEmailSlidedown`",
    "1-0": "`showSmsSlidedown`",
    "2-0": "`showSmsAndEmailSlidedown`",
    "0-1": "Prompt for email.",
    "1-1": "Prompt for SMS.",
    "2-1": "Prompt for both email and SMS."
  },
  "cols": 2,
  "rows": 3
}
[/block]
# Validation
We want apps to be able to easily collect accurate contact information. That's why OneSignal provides automatic validation for the two input field types. The slidedown will only accept valid emails and phone numbers (even as it pertains to country code and format).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8d30c4-Screen_Shot_2021-05-04_at_7.33.43_PM.png",
        "Screen Shot 2021-05-04 at 7.33.43 PM.png",
        578,
        435,
        "#f5f1f3"
      ]
    }
  ]
}
[/block]
# Synchronization
After a visitor submits their information, OneSignal will automatically collect the information and synchronize the data across channels. For example, if the application has an existing push subscription for a specific user and the user submits a phone number, OneSignal will synchronize the two records. If an email address is also submitted, the three channels will be linked. However, a push record is not needed to capture emails and phone numbers.

Sending tags in the WebSDK (via Category Slidedown or otherwise) will synchronize all "subscribed" and connected channels (email, SMS, push) with the tags. Adding an external identifier will do the same -- that is, adding an external identifier to one channel will add the identifier to any other existing channels.

#Back off logic
Email/ Phone Number Slide Prompts are governed by a single back off logic. If you have multiple such prompts then after the first email/phone prompt is accepted/declined, subsequent prompts will appear after 3 days, 7 days for the second re-prompt, or 30 days for the third attempt. So, we recommend you to collect email and phone numbers in the same prompt if you want to capture both these user details.
This behavior ensures a great experience for your website visitors and avoids overwhelming them with multiple prompts.

Examples:
I have 2 email only prompts, first for 1 page view 3 seconds, second for 3 page views 3 seconds. User submits their email address on first prompt. Does the second email prompt ever appear? Assuming no but want to confirm.
no it wouldn't appear since the user is already "subscribed" to email
 
I have a phone/email prompt for 1 page view 3 seconds, and then a phone prompt 2 page views 3 seconds. User enters their email in first prompt but not phone number. Does the phone prompt appear and when?
the phone prompt will appear after 3 days
I have 8 different email prompts, all 1 page view 3 seconds. User dismisses them each time they appear. How often do they appear?
only the first configured prompt will appear following the backoff logic i.e. 3 days, 7 days, 30 days

# FAQ

## Is this feature free?
This feature is available across all tiers, including free accounts.