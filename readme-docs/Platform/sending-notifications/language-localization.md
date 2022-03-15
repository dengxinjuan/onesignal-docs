---
title: "Language & Localization"
slug: "language-localization"
excerpt: "Supported Languages in OneSignal Push Notifications"
hidden: false
createdAt: "2016-09-08T18:57:08.962Z"
updatedAt: "2022-02-15T00:53:06.771Z"
---
The OneSignal SDK will automatically detect the language set on the device or browser settings and it also has a `setLanguage` <a href="https://documentation.onesignal.com/docs/sdk-reference#setlanguage-method" target="_blank">method</a> so you can set the language as desired. You can use this data to create [Segments](doc:segmentation) or localize Push Notification Messages.
[block:callout]
{
  "type": "warning",
  "title": "Limited to Push Notifications",
  "body": "Message Localization is limited to push notifications only at this time. To target emails and in-app messages by language, you must create [Segments](doc:segmentation) for the language to target each one individually."
}
[/block]
# Creating Notifications in Multiple Languages

The OneSignal dashboard and API makes "English" the default language, but **use any language you need in this field**. Think of "English" as **Default**. For example if you enter a Spanish message into the "Any/English" field, then all users will get the notification in Spanish.

To send a message in multiple languages, select **Add Languages**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1abca9d-Screen_Shot_2021-06-23_at_9.25.07_AM.png",
        "Screen Shot 2021-06-23 at 9.25.07 AM.png",
        1746,
        1268,
        "#ebebec"
      ]
    }
  ]
}
[/block]
OneSignal will show how many subscribers have each language. 

Select the languages you want to use in the push. Any languages you do not select will get the "Any/English" message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b7610b7-Screen_Shot_2021-06-23_at_9.26.47_AM.png",
        "Screen Shot 2021-06-23 at 9.26.47 AM.png",
        1298,
        888,
        "#eaecee"
      ]
    }
  ]
}
[/block]
You must provide the translation for each message you want to include.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/647d8b2-Screen_Shot_2021-06-23_at_9.27.31_AM.png",
        "Screen Shot 2021-06-23 at 9.27.31 AM.png",
        1756,
        1274,
        "#ebeced"
      ]
    }
  ]
}
[/block]
# FAQ
## How can I change the default language to not use English?
"Any/English" (or "en" with the API) is the Default language. To send a notification without English, you can put your desired language in the English field and all devices will get the language you set.

For example, if you want all notifications to have a Spanish language, just put the Spanish message in the English field or "en" on the API. All users will get the Spanish message.

## Does OneSignal support RTL?
Support for RTL is handled by the Operating System level so it should be supported depending on the language and the user's phone settings.

##What happens if I include a language in API "contents" but not in "headings"?

The API "headings" and "contents" properties both allow multiple language codes to be set. If a device is set to a language that is not present in the "contents" property, then "Any/English" will be used.

If the language code set in "contents" is not present in "headings", then the "title" aka "heading" will not display. For example, if the device language is `"de"` and you send the notification with `"contents"` = `"en"` and `"ru"` then the device will get the `"contents"` and `"headings"` in `"en"` which is "Any/English"

If the device is in `"de"` and you send the notification with `"contents"` = `"en"`, `"ru"` and `"de"` but `"headings"` = `"en"` then the `"headings"` for that notification will not show to any device in `"de"` and `"ru"`.

If the device is in `"de"` and you send the notification with `"contents"` AND `"headings"` = `"en"`, `"ru"` then the `"headings"` will show in the notification.

## How do I use a different language than the device settings?
If you do not see the language you want to support on our list or you allow users to set their own language, then you will need to differentiate the users and target separately.

One option is to [tag users with the language](doc:add-user-data-tags), then create [segments](doc:segmentation) by each tag. Then send notifications separately by adding the language to the "en" or English field.

If you track this data in your CRM or Database, you can target via our API as well. See [Internal Database, DMP, & CRM](doc:internal-database-crm).

## What languages are supported?
The following are languages supported by OneSignal:
[block:parameters]
{
  "data": {
    "0-1": "en",
    "0-0": "English",
    "1-1": "ar",
    "1-0": "Arabic",
    "4-1": "ca",
    "4-0": "Catalan",
    "5-1": "zh-Hans",
    "5-0": "Chinese (Simplified)",
    "6-1": "zh-Hant",
    "6-0": "Chinese (Traditional)",
    "7-1": "hr",
    "7-0": "Croatian",
    "8-1": "cs",
    "8-0": "Czech",
    "9-1": "da",
    "9-0": "Danish",
    "10-1": "nl",
    "10-0": "Dutch",
    "11-1": "et",
    "11-0": "Estonian",
    "12-1": "fi",
    "12-0": "Finnish",
    "13-1": "fr",
    "13-0": "French",
    "14-1": "ka",
    "14-0": "Georgian",
    "15-1": "bg",
    "15-0": "Bulgarian",
    "16-1": "de",
    "16-0": "German",
    "17-1": "el",
    "17-0": "Greek",
    "18-1": "hi",
    "18-0": "Hindi",
    "19-1": "he",
    "19-0": "Hebrew",
    "20-1": "hu",
    "20-0": "Hungarian",
    "21-1": "id",
    "21-0": "Indonesian",
    "22-1": "it",
    "22-0": "Italian",
    "23-1": "ja",
    "23-0": "Japanese",
    "24-1": "ko",
    "24-0": "Korean",
    "25-1": "lv",
    "25-0": "Latvian",
    "26-1": "lt",
    "26-0": "Lithuanian",
    "27-1": "ms",
    "27-0": "Malay",
    "28-1": "nb",
    "28-0": "Norwegian",
    "30-1": "pl",
    "30-0": "Polish",
    "31-1": "pt",
    "31-0": "Portuguese",
    "33-1": "ro",
    "33-0": "Romanian",
    "34-1": "ru",
    "34-0": "Russian",
    "35-1": "sr",
    "35-0": "Serbian",
    "36-1": "sk",
    "36-0": "Slovak",
    "37-1": "es",
    "37-0": "Spanish",
    "38-1": "sv",
    "38-0": "Swedish",
    "39-1": "th",
    "39-0": "Thai",
    "40-1": "tr",
    "40-0": "Turkish",
    "41-1": "uk",
    "41-0": "Ukrainian",
    "42-1": "vi",
    "42-0": "Vietnamese",
    "29-1": "fa",
    "29-0": "Persian",
    "h-0": "Language",
    "h-1": "Language Code",
    "2-0": "Azerbaijani",
    "2-1": "az",
    "32-0": "Punjabi",
    "32-1": "pa",
    "3-0": "Bosnian",
    "3-1": "bs"
  },
  "cols": 2,
  "rows": 43
}
[/block]