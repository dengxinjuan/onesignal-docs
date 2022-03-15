---
title: "How to improve email deliverability and lower bounce rate?"
slug: "how-to-lower-email-bounce-rate"
hidden: false
createdAt: "2021-11-03T01:05:25.508Z"
updatedAt: "2021-12-07T01:36:20.095Z"
---
A "bounce" generally occurs when sending emails to addresses that: do not exist, have full inboxes, server outages, block domains with poor sender reputation (too many spam complaints), specific content in your message is flagged, and/or a restrictive DMARC record for your sending domain. It is recommended to keep your "Bounce Rate" under 0.05% as this becomes a problem if it gets too high can lead to a disabled domain. 

Common options for reducing bounce rate:

#Email Authentication
**Recommended**
Email authentication usually involves sending a verification email to the address provided by your user and having the user click a link to verify the email is valid. This prevents the user from providing an incorrect email or email they do not use/own. Once validated, it is then best to pass to OneSignal.

#Email Consent Flow
**Recommended**
For best deliverability, you should only send emails to recipients that have knowingly signed up to receive emails. When a person uses a valid email to sign in to the app, they don't necessarily acknowledge that they want emails from you. If you use a prompt asking the customer what kind of emails they want, you can then set tags on the user marking what kind to send.

#Email Validation & Suppressions
If you already have a list of emails and want to validate them, Mailgun and SendGrid provide Email Validation tools that you can use to check a list before uploading to OneSignal. See:
- <a href="https://documentation.mailgun.com/en/latest/api-email-validation.html" target="_blank">Mailgun Email Validation API</a>
- <a href="https://sendgrid.com/solutions/email-api/email-address-validation-api/" target="_blank">SendGrid Email Validation API</a>

Once you have a validated list, you can import emails following the [Import Email Addresses](doc:import-email-addresses) guide.

If you already sent emails to a list, then your ESP likely has a Suppression List. Usually any emails you target through OneSignal that are on the Suppression List in your ESP will not be sent and will get marked as unsubscribed in OneSignal.