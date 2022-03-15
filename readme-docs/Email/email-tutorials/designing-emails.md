---
title: "Designing Emails with Drag and Drop"
slug: "designing-emails"
excerpt: "How to Design Emails with our Drag and Drop Editor"
hidden: false
createdAt: "2021-10-29T18:25:58.680Z"
updatedAt: "2022-03-02T19:18:52.121Z"
---
OneSignal's Email Drag and Drop Builder lets you visually design and build your emails just as they'll be seen in your users' inbox. It consists of three different parts:
* **Settings** - settings that apply to the entire message
* **Rows** - rows of content in the message, which can be added, removed, copied, & moved
* **Content** - individual content blocks: images, text, buttons, etc., which also can be added, removed, copied, and moved

#Settings

Control the general settings for the message. This is very useful to build a coherent message very quickly.

Options are inherited by Row and Content blocks. For example, the font family set will be used everywhere in your message, except where you use a custom setting.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7448f5-Screen_Shot_2022-02-07_at_2.52.24_PM.png",
        "Screen Shot 2022-02-07 at 2.52.24 PM.png",
        1744,
        1552,
        "#eeeced"
      ],
      "caption": "Image shows settings for the builder"
    }
  ]
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Option",
    "h-1": "Description",
    "0-0": "Content area width",
    "0-1": "How wide the email should be in pixels. Defaults to `600px`.",
    "1-0": "Content area alignment",
    "1-1": "Arrange row content left or center.",
    "2-0": "Background color",
    "2-1": "The color of the row behind the content area.",
    "3-0": "Content area background color",
    "3-1": "The color of the row's content area.",
    "4-0": "Default font",
    "4-1": "The default font used.",
    "5-0": "Link color",
    "5-1": "Any links attached to content will turn this color.",
    "6-0": "Language",
    "6-1": "Set the HTML lang attribute so that the subscriber’s email client, browser, or screen reader can display its contents properly.\n\nDefaults to English."
  },
  "cols": 2,
  "rows": 7
}
[/block]
# Customize Rows
Drag and drop rows into the email body to setup the structure of your message. Rows define the horizontal composition of the message. Each row can contain a number of columns in which you add content.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c645f35-Screen_Shot_2021-12-16_at_9.55.35_AM.png",
        "Screen Shot 2021-12-16 at 9.55.35 AM.png",
        1790,
        1346,
        "#c6daec"
      ],
      "caption": "Image shows the ability to use multiple rows"
    }
  ]
}
[/block]
Every row and each column within has its own property settings that override the default settings. This gives you the kind of flexibility that before was only achieved with hand-coded email.


## Row Properties

Select the row to pull up its properties.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a077eb5-Screen_Shot_2022-03-02_at_11.07.01_AM.png",
        "Screen Shot 2022-03-02 at 11.07.01 AM.png",
        1736,
        1250,
        "#e5eff8"
      ]
    }
  ]
}
[/block]
You can change all aspects of the selected row and each column within including background colors and images, desktop vs mobile visibility, column sizes, padding and boarders.

For example, to set a background image in which you can overlay clickable text or buttons. Toggle on the "Row background image" property and upload your image like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c8f0aa-Screen_Shot_2022-03-02_at_11.12.10_AM.png",
        "Screen Shot 2022-03-02 at 11.12.10 AM.png",
        1736,
        396,
        "#d6e5f2"
      ]
    }
  ]
}
[/block]
To then expand the row, use the "Padding" property like shown below. You can also update padding of the content elements within the row if you need more space. If the row itself has no clickable content, an Image Block would be recommended instead of the row background image property.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/007d7b2-Screen_Shot_2022-03-02_at_11.14.02_AM.png",
        "Screen Shot 2022-03-02 at 11.14.02 AM.png",
        1736,
        396,
        "#cedce6"
      ]
    }
  ]
}
[/block]
## Customize Columns
Under **Customize Columns**, you can adjust the sizes and select the options specific to the column.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1c47e78-Screen_Shot_2021-12-16_at_9.58.46_AM.png",
        "Screen Shot 2021-12-16 at 9.58.46 AM.png",
        1790,
        1268,
        "#c3deee"
      ],
      "caption": "Image shows the ability to use multiple columns"
    }
  ]
}
[/block]
# Content
The Content section includes a series of tiles that represent the different kinds of content you can use in your message.

To use them, just drag one inside a column, it will auto-adjust to the column width.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/724468a-Screen_Shot_2021-12-16_at_10.03.43_AM.png",
        "Screen Shot 2021-12-16 at 10.03.43 AM.png",
        1790,
        1268,
        "#f7f8f9"
      ],
      "caption": "Image shows the drag and drop blocks to form conten"
    }
  ]
}
[/block]
Every content block has it owns settings, such as granular control on padding. Select the content block and the right-side panel automatically switches to a property panel for the selected content element.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/44a798b-Screen_Shot_2021-12-16_at_10.07.27_AM.png",
        "Screen Shot 2021-12-16 at 10.07.27 AM.png",
        1790,
        1268,
        "#f5f6f8"
      ],
      "caption": "Image shoes a drag and drop blocks settings"
    }
  ]
}
[/block]
## Image File Manager
All images uploaded will be available for everyone on your team that can access the email editor. Be aware that when adding images to your email with the image block, the editor will show you **myfiles **and **shared**. 

Note that **shared** is **Read Only** . If you want to add and use files, please use **myfiles**. You can create additional folders within **myfiles** for further file management.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d4afc45-Screen_Shot_2021-12-13_at_2.11.35_PM.png",
        "Screen Shot 2021-12-13 at 2.11.35 PM.png",
        1533,
        582,
        "#f5f6f7"
      ],
      "caption": "Image shows our asset file manager for your email"
    }
  ]
}
[/block]

## Unsubscribe Link
Currently, every email sent from OneSignal requires an unsubscribe link to let users opt-out of future mailings. This unsubscribe link must be set using this literal syntax `[unsubscribe_url]` within the `href=` of your HTML or using the **Special links** within the Drag & Drop Template Builder.

See <a href="https://documentation.onesignal.com/docs/unsubscribe-links-email-subscriptions" target="_blank">Unsubscribe Links & Email Subscriptions</a> for more details.
[block:callout]
{
  "type": "warning",
  "title": "Must contain `[unsubscribe_url]`",
  "body": "Emails that do not contain `[unsubscribe_url]` will have one added automatically at delivery at the bottom of the email which cannot be styled or overwritten."
}
[/block]
##HTML Blocks
HTML Content Blocks are designed to add custom HTML within your email template. 
[block:callout]
{
  "type": "info",
  "title": "Adding CSS styling to your HTML elements",
  "body": "Please keep in mind that when adding CSS to the elements within your HTML block, some web based email clients may strip the class or ID when receiving emails. Best practices for styling, are to use **inline CSS** for your elements."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "<div style=\"background: red;\">This now has custom styling!</div>",
      "language": "html"
    }
  ]
}
[/block]
## Email Preheader / Preview Summary
Preheader text or "email summary" is the text that shows up next to or below the subject line in the inbox. Read more about recommended lengths of Pre-headers in [Email Best Practices](doc:email-best-practices) 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/42cb6bc-Screen_Shot_2021-10-29_at_12.00.47_PM.png",
        "Screen Shot 2021-10-29 at 12.00.47 PM.png",
        1744,
        76,
        "#f5f6f6"
      ],
      "caption": "Image shows how a preheader looks as a row within Gmail."
    }
  ]
}
[/block]
To set this up, drag an HTML block to the first row of your email. In the HTML editor add a default as follows:
[block:code]
{
  "codes": [
    {
      "code": "<span class=\"preheader\" style=\"display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;\">\nHidden preheader text shows up in most inboxes &amp; is a great way to give more context on the email!\n</span>\n",
      "language": "html"
    }
  ]
}
[/block]
Replace the text between the `span` elements with your email summary.

## Message Personalization
OneSignal supports tag substitution to customize your email messages.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5aca1d2-Screen_Shot_2021-10-29_at_11.21.00_AM.png",
        "Screen Shot 2021-10-29 at 11.21.00 AM.png",
        1026,
        352,
        "#eff2f5"
      ],
      "caption": "Image shows the use of tag substitution"
    }
  ]
}
[/block]
Using liquid templating language, e.g. `{{ first_name | default: "there" }}`, you may incorporate data stored on device records into your messages. For example, set a `default` value if a user does not have a tag already.

To learn more about tag substitution, see <a href="doc:personalization" target="_blank">Message Personalization</a>.

##Emojis
Similar to push notifications, each email platform renders emoji slightly differently, so plan accordingly:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fab6291-messages-new-email-composer-emoji.jpg",
        "messages-new-email-composer-emoji.jpg",
        2000,
        460,
        "#e4d9d1"
      ],
      "caption": "Image shows how emojis render on different email clients"
    }
  ]
}
[/block]

# Save Your Work
OneSignal Email Messaging supports Templates, letting you save designs you like for future use. When you've designed a layout you like, just click **Templates > Save Template** in the top of the create message box, and you'll be able to name your template. 

At any time you may also click **Select Template** to load existing email templates.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/489c8ea-Screen_Shot_2021-12-16_at_10.20.22_AM.png",
        "Screen Shot 2021-12-16 at 10.20.22 AM.png",
        1818,
        554,
        "#f6f8f9"
      ],
      "caption": "Image shows how to save as a template"
    }
  ]
}
[/block]
## Build Upon a Base Template
Many times, you will have a "default" template to build upon as new content comes out. Templates are stored in **Messages > Templates** and can be duplicated to build upon your base.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2dbe53c-Screen_Shot_2021-12-16_at_10.24.58_AM.png",
        "Screen Shot 2021-12-16 at 10.24.58 AM.png",
        1754,
        1008,
        "#dcdee1"
      ],
      "caption": "Image shows how to duplicate an email template"
    }
  ]
}
[/block]