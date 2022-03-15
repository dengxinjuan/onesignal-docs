---
title: "Email FAQ"
slug: "email-faq"
excerpt: "Using Email with OneSignal FAQ"
hidden: false
createdAt: "2018-03-08T01:43:00.242Z"
updatedAt: "2021-12-29T21:53:08.191Z"
---
#Common Troubleshooting
- [Why are emails not being delivered?](https://documentation.onesignal.com/docs/emails-not-showing)
- [Why are email stats not being detected by OneSignal?](https://documentation.onesignal.com/docs/email-stats-not-detected)
- [How to lower email bounce rates?](https://documentation.onesignal.com/docs/how-to-lower-email-bounce-rate)

###Why are urls in the email not working?
This usually happens if your CNAME record is not setup correctly. However, your ESP may have other configurations that need to be setup. Mailgun has a good guide on this here: https://help.mailgun.com/hc/en-us/articles/360011566033-How-to-Enable-HTTPS-Tracking-Links

----
# Using Email

## Does OneSignal Email Messaging work with all email clients?
Generally yes - a lot of work has been put into ensuring maximum compatibility and visual similarity across major email clients including Gmail, Outlook, yahoo mail, and more.

## How does unsubscribing work?
See <a href="https://documentation.onesignal.com/docs/unsubscribe-links-email-subscriptions" target="_blank">Unsubscribe Links & Email Subscriptions</a> for more details.

##How can I resubscribe emails?

See <a href="https://documentation.onesignal.com/docs/unsubscribe-links-email-subscriptions" target="_blank">Unsubscribe Links & Email Subscriptions</a> for more details.

## Can I send emails to my push notification subscribers?
Yes, but **email addresses are not automatically collected when users subscribe to push notifications.** You must set the email address within OneSignal before you can send the user an email.

If your app or website collects email addresses, you can use the [`setEmail` method](doc:email-sdk-methods) to add an email address into OneSignal.

If your app or website does not collect email addresses, you will need to do so in order to send emails to your push subscribers. See [Importing Email Addresses](doc:import-email-addresses) for all options on getting emails into OneSignal.

## Can I target emails based on lists or campaigns?
Yes. If you have email lists with your current provider, you can export that list to CSV and [Import the list](doc:import-email-addresses) into OneSignal. 

This will allow you to add [Data Tags](doc:add-user-data-tags) and create [Segments](doc:segmentation).

## We use affiliate links in emails, what is the effect of that?

OneSignal's email delivery is sent through a 3rd party provider such as Mailgun, Mandrill, or Sendgrid. So we are bound by any limitations of those services. [Mailchimp has a very helpful article on this](https://mailchimp.com/help/about-affiliate-links-in-mailchimp).

## Why Email Buttons Are Not Clickable?

Make sure your button has a URL and is not inside your Spam folder when trying to click.
 
## What can I do if I am being marked as spam?

Generally, being marked as spam happens when your company is put on a deny list from the ISP, and therefore all emails are marked as spam. You will want to work with your ESP to figure out which deny list you are on and then work with the ISP to get removed.
Here are some helpful policies and procedures:
- [Sendgrid's denylist policy and procedures](https://sendgrid.com/docs/glossary/deny-list/)
- [Mailgun's Blacklisting policy and procedures](https://help.mailgun.com/hc/en-us/articles/115005365027-What-Is-a-Blacklist-)
- [Mandrill / Mailchimp rejection lists](https://mandrill.zendesk.com/hc/en-us/articles/360039299433)

----

# Email Service Providers
## Which email service providers are supported in OneSignal?
Currently, [Sendgrid](https://sendgrid.com), [Mailgun](https://mailgun.com), and [Mandrill by Mailchimp](https://mandrill.com) are supported by OneSignal.

## Does this mean I still have to pay another provider for email?
OneSignal does provide an email passthrough account with Mailgun. [Contact OneSignal's Sales Team](https://onesignal.com/contact) and ask about Email Onboarding.

If you plan to use Sendgrid, Mailchimp/Mandrill or manage your own Mailgun account, then you will need to pay these email service providers directly.

Since OneSignal provides both marketing and transactional email capabilities, you only need to pay these ESPs the much cheaper transactional email rates, rather than the higher rates typically charged for marketing automation tools.

## What are Webhooks? Why does OneSignal require them?
See <a href="https://documentation.onesignal.com/docs/email-stats-not-detected" target="_blank">Webhooks & Why Email Stats Not Detected?</a> for details.

##How do I set up OneSignal if I already have an active Webhook?
See <a href="https://documentation.onesignal.com/docs/email-stats-not-detected" target="_blank">Webhooks & Why Email Stats Not Detected?</a> for details.

## How do I change my domain's email settings?
To configure email, you will need to modify your domain's [DNS records](https://en.wikipedia.org/wiki/Domain_Name_System). Different email service providers have different requirements for which records need modifying, which likely include MX, CNAME, and TXT types.

You can modify your DNS records where you have your domain hosted. Links to guides on how to do this for some of the most popular hosts are below:
[block:parameters]
{
  "data": {
    "0-0": "GoDaddy",
    "0-1": "[MX](https://www.godaddy.com/help/add-an-mx-record-19234), [CNAME](https://www.godaddy.com/help/add-a-cname-record-19236), [TXT](https://www.godaddy.com/help/add-a-txt-record-19232)",
    "1-0": "Namecheap",
    "1-1": "[DNS Questions](https://www.namecheap.com/support/knowledgebase/subcategory.aspx/10/dns-questions)",
    "2-0": "Network Solutions",
    "2-1": "[MX](http://www.networksolutions.com/support/mx-records-mail-servers-2/), [CNAME](http://www.networksolutions.com/support/cname-records-host-aliases-2/), [TXT](http://www.networksolutions.com/support/how-to-manage-advanced-dns-records/)",
    "3-0": "Rackspace",
    "3-1": "[MX](https://support.rackspace.com/how-to/creating-dns-records-with-cloud-dns/#add-an-mx-record-for-your-domain), [CNAME](https://support.rackspace.com/how-to/creating-dns-records-with-cloud-dns/#add-a-cname-record-for-your-domain)",
    "4-0": "HostGator",
    "4-1": "[MX](http://support.hostgator.com/articles/hosting-guide/lets-get-started/dns-name-servers/how-do-i-change-my-sites-mx-record-to-point-mail-to-another-server-or-domain), [CNAME](http://support.hostgator.com/articles/hosting-guide/lets-get-started/dns-name-servers/how-to-change-dns-zones-mx-cname-and-a-records)",
    "5-0": "Google",
    "5-1": "[MX](https://support.google.com/a/answer/6248174?hl=en), [CNAME](https://support.google.com/a/answer/47283?hl=en)",
    "6-0": "Cloudflare",
    "6-1": "[Cloudflare support](https://support.cloudflare.com/hc/en-us)",
    "7-0": "DNS Made Easy",
    "7-1": "[MX](http://help.dnsmadeeasy.com/managed-dns/records/mx-record/), [CNAME](http://help.dnsmadeeasy.com/managed-dns/records/cname-record/), [TXT](http://help.dnsmadeeasy.com/managed-dns/records/txt-record/)",
    "8-0": "Dreamhost",
    "8-1": "[MX](https://help.dreamhost.com/hc/en-us/articles/215035328-How-do-I-change-my-MX-records-), [CNAME, SPF, TXT](https://help.dreamhost.com/hc/en-us/articles/215414867-How-do-I-add-custom-DNS-records-)",
    "9-0": "Dyn",
    "9-1": "[Setup DNS](https://help.dyn.com/setting-up-dns-for-your-new-website/)",
    "10-0": "Hover",
    "10-1": "[Edit DNS records](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-)",
    "11-0": "Amazon Route 53",
    "11-1": "[Working with Records](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrsets-working-with.html)",
    "h-0": "Domain Provider",
    "h-1": "Details"
  },
  "cols": 2,
  "rows": 12
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "DNS records may take up to 48 hours for changes to propagate across the internet."
}
[/block]