---
title: "Email Best Practices"
slug: "email-best-practices"
excerpt: "Learn more about Emails Best Practices and How you can ensure Deliverability"
hidden: false
createdAt: "2021-12-17T15:18:51.967Z"
updatedAt: "2022-01-03T19:42:27.171Z"
---
### 1. Avoid shortened URLs

Shortened URLs in an email can often be flagged up as spam. So avoid shortening your URLs.


### 2. Add a Physical Address in your Footer

Within the footer of your email, add a physical address. This ensures you are compliant with the [CAN-SPAM Act of 2003](https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business)


### 3. Email Client Maximum Size

Email clients tend to limit the size of an inbound email. If your email goes over a certain size, it is highly likely it will rejected and your deliverability rates will be lower than expected. 
[block:parameters]
{
  "data": {
    "h-0": "Email Client",
    "0-0": "AOL",
    "0-1": "25 MB",
    "1-1": "20 MB",
    "2-1": "25 MB",
    "3-1": "50 MB",
    "4-1": "20 MB (10 MB for Exchange accounts), with up to 150 MB in Office 365",
    "5-1": "25 MB",
    "6-1": "No",
    "8-1": "20 MB",
    "7-1": "25 MB",
    "1-0": "Apple Mail (iCloud)",
    "2-0": "Gmail",
    "3-0": "GMX",
    "4-0": "Outlook/Office 365",
    "h-1": "Sending and inbound size limits",
    "5-0": "ProtonMail",
    "6-0": "Thunderbird",
    "7-0": "Yahoo",
    "8-0": "Zoho Mail"
  },
  "cols": 2,
  "rows": 9
}
[/block]
Source: [Mailtrap - Recommended Email Size](https://mailtrap.io/blog/email-size/)


### 4. Email Providers Maximum Size

Email providers additional limit the size of emails that can be sent as an outbound email.   If your email goes over a certain size, it will not be sent by the provider being used. 
[block:parameters]
{
  "data": {
    "h-0": "Email Sending Provider",
    "h-1": "Sending size limit",
    "0-0": "Mailgun",
    "0-1": "25 MB",
    "1-1": "25 MB",
    "2-1": "30 MB",
    "2-0": "Sendgrid",
    "1-0": "Mailchimp (previously known as Mandrill)"
  },
  "cols": 2,
  "rows": 3
}
[/block]
Source: [Mailtrap - Email Providers Recommended Email Size](https://mailtrap.io/blog/email-size/)


### 5. Limit Image Sizes

We recommend each image is kept to a 10 MB as a maximum size. This prevents your email from being blocked from the users email client. 


### 6. Use a Pre-header (Email Preview Text)

Preheader text or "email summary" is the text that shows up next to or below the subject line in the inbox. This increases open rates as it allows your user to be enticed to open the email. Learn about how to add this in our [Designing Emails with Drag and Drop](doc:designing-emails) and [Designing Emails with HTML](doc:designing-emails-with-html).
[block:parameters]
{
  "data": {
    "h-0": "Email Client",
    "h-1": "Limit",
    "h-2": "Client Type",
    "0-2": "Mobile Email Client",
    "1-2": "Mobile Email Client",
    "2-2": "Mobile Email Client",
    "3-2": "Mobile Email Client",
    "4-2": "Mobile Email Client",
    "5-2": "Desktop Email Client",
    "6-2": "Desktop Email Client",
    "7-2": "Desktop Email Client",
    "8-2": "Desktop Email Client",
    "9-2": "Webmail Client",
    "0-0": "iOS Outlook",
    "1-0": "Android Native",
    "2-0": "Android Gmail",
    "3-0": "iOS Native",
    "4-0": "iOS Gmail",
    "5-0": "Apple Mail",
    "6-0": "Outlook ‘13",
    "7-0": "Outlook for Mac ‘15",
    "8-0": "Outlook ‘16",
    "9-0": "AOL Mail",
    "10-0": "Gmail",
    "11-0": "Outlook.com",
    "12-0": "Office 365",
    "13-0": "Mail.ru",
    "0-1": "74",
    "1-1": "43",
    "2-1": "24",
    "3-1": "82",
    "4-1": "30",
    "5-1": "33",
    "6-1": "38",
    "7-1": "53",
    "8-1": "50",
    "9-1": "81",
    "10-1": "119",
    "11-1": "49",
    "12-1": "40",
    "13-1": "64",
    "10-2": "Webmail Client",
    "11-2": "Webmail Client",
    "12-2": "Webmail Client",
    "13-2": "Webmail Client"
  },
  "cols": 3,
  "rows": 14
}
[/block]
Source: [Email on Acid](https://www.emailonacid.com/blog/article/email-marketing/preview-vs-preheader-text-how-long-should-preheader-text-be/)


### 7. Avoid Image Only Emails and Add Alt-text to images

Over [3.2 million Americans](https://www.nih.gov/news-events/news-releases/visual-impairment-blindness-cases-us-expected-double-2050) have a visual impairment or blindness in the US, in 2015. This means emails should not only contain images, as screen readers cannot discern the content of an image, and instead rely on alt-text. 

Add alt-text to any image used to ensure accessibility. 

### 8. Use Contrasting Colors

Choose background colors and foreground colors with contrast to ensure your text is legible for those with visual impairments. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d30b23c-color-contrast.png",
        "color-contrast.png",
        1264,
        913,
        "#dfddde"
      ],
      "caption": "Image showing examples of color contrast, as  shown in [Email On Acid Article](https://www.emailonacid.com/blog/article/email-development/email-accessibilty-in-2017/)"
    }
  ]
}
[/block]