---
title: "Designing Emails with HTML"
slug: "designing-emails-with-html"
excerpt: "How to Design Emails with our HTML Editor"
hidden: false
createdAt: "2021-12-17T15:30:32.438Z"
updatedAt: "2022-01-03T20:27:56.520Z"
---
Our HTML editor allows you to create highly stylized and branded emails, allowing you to control every aspect of your email design for both mobile and desktop

To form great HTML emails, we recommend the following:

* Ensure yourself, or a team member are experienced with using HTML and can produce great responsive HTML emails that work across device types
* Host your images somewhere that is publicly accessible, such as your website, AWS or similar. 

In order to begin creating your HTML email, select the HTML Editor. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0930212-message.png",
        "message.png",
        1300,
        477,
        "#fbfbfb"
      ],
      "caption": "Image showing ability to select editing experience for email"
    }
  ]
}
[/block]
By selecting HTML Editor you’ll now see a split screen view where you can write code on one side, with the email preview showing on the corresponding side of the page. 

Enter your code on the left hand side of the screen and click to Send Test Emails to ensure your email renders correctly on mobile and browser. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/611e0c4-message.png",
        "message.png",
        1300,
        1238,
        "#a0acb5"
      ],
      "caption": "Image showing HTML editor beside the preview"
    }
  ]
}
[/block]
## Functionality with the HTML Editor

### 1. Click Support
We automatically track when someone clicks through from a CTA within your HTML email. 

### 2. Automatic Unsubscribe Link
We automatically add an unsubscribe link into your the initial HTML default template for you to customize. Unsubscribe links are required on all emails at this time.

See <a href="https://documentation.onesignal.com/docs/unsubscribe-links-email-subscriptions" target="_blank">Unsubscribe Links & Email Subscriptions</a> for more details. 

### 3. Import your Own Templates

If you already have HTML Email templates from elsewhere, you can copy and paste them into our editor to get started. 

## Best Practices of HTML Emails

### 1. Use Inline CSS

Email clients are unpredictable. Even today many clients strip styles that are not inlined, so it is important to inline your CSS before sending. Don't risk your transactional emails or marketing campaigns falling apart. We recommend you use this [Responsive Email CSS Inliner](https://htmlemail.io/inline/) to help.

### 2. Add Alt Tags to Images

To ensure your email is accessible, add alt tags to all images. An alt tag ensures that there is some text visible if an email client is unable to render the image. This can occur on older email clients, the user has disabled images from rendering or when there is a lack of internet access. 
[block:parameters]
{
  "data": {
    "h-0": "Email Client",
    "h-1": "Can they block images?",
    "h-2": "Displays Alt Text",
    "h-3": "Styles Alt Text",
    "0-0": "AOL",
    "1-0": "GMail",
    "2-0": "Yahoo",
    "3-0": "Outlook",
    "0-1": "Yes",
    "1-1": "Yes",
    "2-1": "Yes",
    "0-2": "Yes",
    "1-2": "Yes",
    "2-2": "Yes",
    "3-2": "Yes",
    "0-3": "Yes",
    "1-3": "Yes",
    "2-3": "Yes",
    "3-3": "Yes",
    "3-1": "Sometimes"
  },
  "cols": 4,
  "rows": 4
}
[/block]
Source: [Litmus Email Client Support](https://litmus.com/community/learning/12-alt-text-in-html-email) 

### 3. Name and Format your HTML
It's important to ensure you correctly name HTML elements and format your HTML. This ensures the email is accessible for screen readers often used by a person who has a visual impairment or cognitive disability. 

You should also correctly name and format colors in HTML. 

###  4. Add a Pre-header (Preview Text) for Email
Preheader text or "email summary" is the text that shows up next to or below the subject line in the inbox. Read more about recommended lengths of Pre-headers in [Email Best Practices](doc:email-best-practices).

To set this up, drag add a span to your HTML email that includes a short snippet:
[block:code]
{
  "codes": [
    {
      "code": "<span class=\"preheader\" style=\"display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;\">\nHidden preheader text shows up in most inboxes &amp; is a great way to give more context on the email!\n</span>",
      "language": "html"
    }
  ]
}
[/block]
Replace the text between the span elements with your email summary.


### 5. Ensure there are No Broken Links
It's critical in HTML emails there are no broken links. These can reduce success of deliverability and lead some of your emails to be flagged as spam. 

--- 

## FAQ

### How can I use my existing email templates?

If you have an existing email template, feel free to copy and paste into our HTML editor. Don;t forget to add your [Unsubscribe Link](https://documentation.onesignal.com/docs/unsubscribe-links-email-subscriptions)

### I don't have any existing email templates. How can I get started with HTML for custom emails?

If you don't have any existing templates, you can use sites such as [Really Good Emails](https://reallygoodemails.com)* or similar to find responsive email templates.

Similarly it maybe useful for you to read up and learn the [basics of HTML](https://www.codecademy.com/learn/learn-html)*

\* OneSignal does not have any affiliation with Really Good Emails, nor Code Academy. There are alternative providers with similar services.