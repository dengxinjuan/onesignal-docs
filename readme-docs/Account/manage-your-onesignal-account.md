---
title: "Account Management"
slug: "manage-your-onesignal-account"
excerpt: "Adding, removing, deleting, renaming Apps and Organizations. Setting up Account Administrators."
hidden: false
createdAt: "2018-09-18T01:26:59.371Z"
updatedAt: "2021-06-10T16:55:40.880Z"
---
OneSignal account management has 2 levels of Access including different User Roles:

1. App Level Access only has Admin User Role. Any emails included at the App Level will have full access to all features for that App only.

2. Organization Level Access has 2 User Roles:
- Admin User Role has full access to all Apps under the Organization
- Viewer User Role has limited access to all Apps under the Organization.

Details on permissions available can be found below:
[block:parameters]
{
  "data": {
    "h-0": "Permission",
    "h-1": "App-Level Admin",
    "h-2": "Org-Level Admin",
    "h-3": "Org-Level Viewer",
    "0-0": "[Billing Information](#accessing-and-editing-billing-information)",
    "0-1": "No",
    "0-2": "Yes",
    "0-3": "No",
    "1-0": "[User Permissions](#add-remove-or-update-user-access)",
    "1-1": "No",
    "1-2": "Yes",
    "1-3": "No",
    "5-0": "[Delete Subscribers, Apps, and Account](#deleting-apps-subscribers-and-accounts)",
    "5-1": "Yes",
    "5-2": "Yes",
    "5-3": "No",
    "10-0": "Send Messages",
    "10-1": "Yes",
    "10-2": "Yes",
    "10-3": "No",
    "11-0": "[Create Segments](doc:segmentation)",
    "11-1": "Yes",
    "11-2": "Yes",
    "11-3": "No",
    "9-0": "[Access/Reset REST API Keys](doc:accounts-and-keys)",
    "9-1": "Yes",
    "9-2": "Yes",
    "9-3": "No",
    "12-0": "Access App User and Notification Data",
    "12-1": "Yes",
    "12-2": "Yes",
    "12-3": "Yes (Read-only)",
    "4-0": "[Add/Remove Apps within Organization](#add-or-remove-apps-within-an-organization)",
    "4-1": "No",
    "4-2": "Yes",
    "4-3": "No",
    "2-0": "[Add/Remove Account Accessing](#add-remove-or-update-user-access)",
    "2-1": "Yes (App-level only)",
    "2-2": "Yes",
    "2-3": "No",
    "6-0": "[Rename Apps and Organizations](#rename-apps-and-organizations)",
    "6-1": "Yes (App-level only)",
    "6-2": "Yes",
    "6-3": "No",
    "7-0": "[Reset OneSignal Password](#reset-onesignal-account-password)",
    "7-1": "Yes",
    "7-2": "Yes",
    "7-3": "Yes",
    "8-0": "[Reset OneSignal Email](#reset-onesignal-account-email)",
    "8-1": "Yes",
    "8-2": "Yes",
    "8-3": "Yes",
    "3-0": "[Two-Step Login Authentication](doc:two-step-authentication)",
    "3-1": "Yes",
    "3-2": "Yes",
    "3-3": "Yes"
  },
  "cols": 4,
  "rows": 13
}
[/block]
## Accessing and Editing Billing Information

**Enterprise Plans** please contact [ar@onesignal.com](mailto:ar@onesignal.com) with your full Company Name and billing email if available.

**Growth & Professional Plans** can view and edit billing information under Organizations > Your Paid Organization Name > Billing

- download previous invoices from this page
- [upgrade to a Pro Account](https://onesignal.com/contact)
- [downgrade to free account](#downgrading-paid-plans-to-free)
- update company name, company email contact and billing method


### Downgrading Paid Plans to Free

Select **Options** > **Downgrade to Free** > verify your Organization Name (check for spaces).

Starter Plans can downgrade to free anytime. See our [Billing FAQ](doc:billing-faq) for more details.

---

## Add, Remove, or Update User Access

**App-Level Administrators** can assign emails to have access under **Settings** > **Administrators** > **Add Another** button. You will need to add Org-Level Admin emails to the app level to add the App to an Organization.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0a94dae-Screen_Shot_2020-10-09_at_11.20.26_AM.png",
        "Screen Shot 2020-10-09 at 11.20.26 AM.png",
        841,
        312,
        "#d3d5da"
      ]
    }
  ]
}
[/block]
**Organization-Level Administrators** can assign emails to have Administrator or Viewer Permissions within **Organizations** > Your Organization > Roles > Add Person
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc069d3-Screen_Shot_2020-10-09_at_11.24.29_AM.png",
        "Screen Shot 2020-10-09 at 11.24.29 AM.png",
        841,
        312,
        "#d1cfd2"
      ]
    }
  ]
}
[/block]
Viewer Level User Permission are only available at the Organization Level on Paid Accounts. Free Accounts only get Admin Level Permissions.

Users can be removed from the App or Org.
User Roles can be updated for an Org using the Options button next to the email.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fb1cf5-Screen_Shot_2020-10-09_at_11.31.18_AM.png",
        "Screen Shot 2020-10-09 at 11.31.18 AM.png",
        809,
        305,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]
----

## Add or Remove Apps within an Organization

Add Apps to an Organization inside Orgs > Your Organization > Add Apps

You must have Org-Level and App-Level Access to add an App to the Organization. Contact your App Admins and ask them to follow this guide: [Adding Administrators To Your App](#add-remove-or-update-user-access).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a32da7c-Screen_Shot_2020-01-25_at_11.00.48_PM.png",
        "Screen Shot 2020-01-25 at 11.00.48 PM.png",
        1898,
        714,
        "#ced0d4"
      ]
    }
  ]
}
[/block]
Remove Apps from an Organization inside Organizations > Your Organization > Options > Remove App From Organization
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b92e2e7-Screen_Shot_2020-01-25_at_11.04.48_PM.png",
        "Screen Shot 2020-01-25 at 11.04.48 PM.png",
        1880,
        896,
        "#d4d6da"
      ]
    }
  ]
}
[/block]
----

## Deleting Apps, Subscribers and Accounts
[block:callout]
{
  "type": "danger",
  "title": "Deletion is Permanent!",
  "body": "Once you delete data from OneSignal, it cannot be undone."
}
[/block]
#### Delete Apps

You can delete Apps that have under 5,000 Total Users and are not associated with an Organization. To delete an app with 5,000+ Total Users, please contact OneSignal Support.

To delete and App with less than 5,000 Total Users and associated with an Organization, first [Remove the App From the Organization](#add-or-remove-apps-within-an-organization).

Then in the **Apps**, select "Options"  > "Remove".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/85245d7-Screen_Shot_2020-10-08_at_9.36.42_PM.png",
        "Screen Shot 2020-10-08 at 9.36.42 PM.png",
        1220,
        524,
        "#d9dbdf"
      ]
    }
  ]
}
[/block]
#### Delete Users

To delete users, see our [Delete Users Guide](doc:delete-users).

#### Delete Account

Deleting your account from OneSignal will only delete your specific email from our database. It will not delete Apps or downgrade your Paid Plan. Before deletion, make sure to do the following:

- [Downgrade to free if on a paid account](#accessing-and-editing-billing-information) - deleting your account does not downgrade you to free automatically.
- [Delete Apps](#deleting-apps-subscribers-and-accounts) - make sure to delete the data if no one else on your team is using it and you don't want the data stored in OneSignal.

In the top-right of your OneSignal Dashboard, select the icon > Account & API Keys.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4383ffe-Screen_Shot_2020-01-25_at_11.58.54_PM.png",
        "Screen Shot 2020-01-25 at 11.58.54 PM.png",
        450,
        326,
        "#afa5a9"
      ]
    }
  ]
}
[/block]
Scroll to the bottom and select "Delete your account". If you have a paid plan, make sure to [Downgrade your account first](#accessing-and-editing-billing-information).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5c1c31b-Screen_Shot_2020-10-08_at_9.27.47_PM.png",
        "Screen Shot 2020-10-08 at 9.27.47 PM.png",
        1195,
        233,
        "#f9f6f6"
      ]
    }
  ]
}
[/block]
----

## Rename Apps and Organizations

Under **Apps**, next to the app, select Options > Rename.

Under **Organizations**, next to the Organization, select Options > Rename.

----

## Reset OneSignal Account Password

In the top-right of your OneSignal Dashboard, select the icon > Account & API Keys.

Enter a new password, confirm the password and select Submit.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5dbfc98-Screen_Shot_2020-10-08_at_9.32.13_PM.png",
        "Screen Shot 2020-10-08 at 9.32.13 PM.png",
        1210,
        612,
        "#e1dedf"
      ]
    }
  ]
}
[/block]

## Reset OneSignal Account Email

In the top-right of your OneSignal Dashboard, select the icon > Account & API Keys.

Enter a new email and press Submit. You will get an email to your current email to confirm the change. Check your spam folder if you do not get this email.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0377cae-Screen_Shot_2020-10-08_at_9.32.13_PM_copy.png",
        "Screen Shot 2020-10-08 at 9.32.13 PM copy.png",
        1210,
        612,
        "#e1dee0"
      ]
    }
  ]
}
[/block]
----

## FAQ

### I am on the paid plan. Why am I still seeing limitation notices?

If you're already on a paid plan and are receiving account limitation notices, chances are your app/website isn't a part of your paid plan organization. 

To remedy this, please follow the instructions to [Add an App to your Organization](#adding-apps-to-an-organization)

If you need assistance, please email ar@onesignal.com with your Full Company Name and a list of [OneSignal App IDs](doc:accounts-and-keys) you would like added to your Organization and we will process this for you.

### I run an agency, what are my options?

OneSignal is setup to have an Organization (the Parent) that controls payments and OneSignal Apps (children) that control the data from the site and/or mobile apps.

Since our pricing is based on total subscribers per app added to an Organization, you have 2 options:

1. you can setup your account with us under your Organization to hold all your client's OneSignal apps and you handle payment. 
2. you or your clients can setup their own apps and organizations to pay us directly (if they need a paid account).

In either case, you can separate which apps need to be "free" and which ones need to be "paid" by simply adding the "paid" ones under the Organization.

If you need further clarification, please [reach out to our sales team](https://onesignal.com/contact) and tell us about your needs!