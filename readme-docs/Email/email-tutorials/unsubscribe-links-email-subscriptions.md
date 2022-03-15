---
title: "Unsubscribe Links & Email Subscriptions"
slug: "unsubscribe-links-email-subscriptions"
excerpt: "Add unsubscribe links to your emails and understand email subscriptions."
hidden: false
createdAt: "2021-12-29T21:47:55.834Z"
updatedAt: "2022-01-03T16:47:18.242Z"
---
Currently every email sent through OneSignal must include an unsubscribe link to allow users to opt-out of future mailings. If you need to send emails without Unsubscribe Links, reach our Support Team so we can file a feature request!

#Unsubscribe Links in Emails

Customizing the unsubscribe link can be done using HTML or the Drag & Drop Editor. Each email must contain this literal syntax `[unsubscribe_url]` which is added in the following ways:

## HTML
If you are creating an email directly with our HTML editor, we automatically provide an unsubscribe link. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8b10e10-default_code.png",
        "default code.png",
        1309,
        562,
        "#455561"
      ],
      "caption": "Image showing editor with default HTML and Unsubscribe Link"
    }
  ]
}
[/block]
If you are using the API (`email_body` [property](https://documentation.onesignal.com/reference/create-notification#email-content)), HTML Editor or HTML Block, you can put `[unsubscribe_url]` in the `href=` portion of an `<a>` tag like this: 

`<a href="[unsubscribe_url]">Unsubscribe</a>`

##Drag & Drop Editor

Within a Content Block, you can add this special unsubscribe link `[unsubscribe_url]` in a text area by selecting **Special Links** > **Unsubscribe**. This will drop an unsubscribe link into the text area. You may also highlight text before adding this link.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7446a10-messages-new-email-composer-unsubscribe.jpg",
        "messages-new-email-composer-unsubscribe.jpg",
        2500,
        1200,
        "#b6b4b5"
      ],
      "caption": "Image shows unsubscribe link selection"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Must contain `[unsubscribe_url]`",
  "body": "Emails that do not contain `[unsubscribe_url]` will have one added automatically at delivery at the bottom of the email which cannot be styled or overwritten."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "While your emails must contain `[unsubscribe_url]`, you can style it to be \"harder to find\" and include your own unsubscribe url that is easier to find.\n\n**Make sure unsubscribe links are easily visible to users**, with a high contrast color to distinguish them from the background and a large enough font that users will be able to read it (we recommend at least 12px). Note that if users cannot easily see unsubscribe links, they may mark your emails as spam which will affect future deliverability across all your emails.",
  "title": "Create your own Unsubscribe URL"
}
[/block]
#Custom Unsubscribe URL Destinations

The unsubscribe link destination for the required link `[unsubscribe_url]` cannot be customized at this time. The exact unsubscribe destination will vary depending on the email service provider you've selected. Some, like [Mandrill](https://mandrill.com), will redirect users to a OneSignal page that tells users have successfully unsubscribed, while others will handle the user flow of unsubscribing themselves.

If you are wanting to point the user to a custom unsubscribe page, you will need to include both links.

#How can I resubscribe emails?

If a user unsubscribes from email, they will get resubscribed if you manually click "Resubscribe to email" in the All Users tab for their record. If you use the `setEmail` SDK method or API Add/Edit Device calls, you will also need to remove that email from your ESP Suppression list.