---
title: "Importing User Attributes or Tags"
slug: "import-user-tags"
excerpt: "Upload a list of Data Tags to Users."
hidden: false
createdAt: "2016-09-02T02:18:51.331Z"
updatedAt: "2022-03-07T17:51:19.990Z"
---
This feature allows you to add, remove, and update data tags from device records and create segments using a CSV. This feature does not import or transfer devices into OneSignal or across OneSignal apps.
[block:callout]
{
  "type": "info",
  "title": "Migrating or Importing Devices to OneSignal?",
  "body": "See our [Onboarding With OneSignal](doc:onboarding-with-onesignal) guide for more details on importing device records.\n\nOneSignal doesn't provide an option to transfer users from one app to another. Please reach out to our Support Team with more details on your use case."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Importing Email Addresses or Phone Numbers?",
  "body": "See [Import Email Addresses](doc:import-email-addresses) guide or [Import Phone Numbers](doc:import-phone-numbers) guide."
}
[/block]
# Using the Dashboard CSV Uploader

Navigate to **Audience** and select **Update/Import Users**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43fc7c3-Screen_Shot_2021-08-17_at_11.33.36_AM.png",
        "Screen Shot 2021-08-17 at 11.33.36 AM.png",
        1730,
        712,
        "#d9dde0"
      ],
      "caption": "shows the 'Update/Import Users' button to select from"
    }
  ]
}
[/block]
Select **Upload CSV** under **Update users with external_user_id or player_id**. If you need an example CSV Template, there is one provided for download.
[block:callout]
{
  "type": "info",
  "title": "Requirements",
  "body": "The CSV **must** contain a column with `player_id` or `external_user_id` for device matching. If the `external_user_id` was not added to OneSignal before this upload, you can include the `external_user_id` column with the `player_id` column to add that property.\n\n- Limited to UTF-8 Encoding\n- Columns must be unique\n- Comma Separated Values only\n- No quotes"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4d585d8-Screen_Shot_2021-08-17_at_11.35.03_AM.png",
        "Screen Shot 2021-08-17 at 11.35.03 AM.png",
        1730,
        1046,
        "#e4e6e7"
      ]
    }
  ]
}
[/block]
After uploading the CSV, you get a preview of the import with associated columns of data.

### Which columns would you like to import as tags?
You can check and uncheck specific columns detected from the CSV. If you uncheck a column it will be ignored completely from the upload.

## Automatically Creating Segments

Toggling on **Automatically create a segment for this import** will set another tag on every device and create a segment for all devices within the import based on the Segment Name you select.

##Deleting Tags

Checking **Delete identifier and tag values if columns are empty** will delete all tags if the CSV row for that column contains an empty value. In the example, you will see the "tag_to_delete" column contains empty values and has the option checked. Upon upload, the records with this empty data will have the tag deleted if the tag already exists on those records.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/584f5e8-Screen_Shot_2021-08-17_at_11.54.55_AM.png",
        "Screen Shot 2021-08-17 at 11.54.55 AM.png",
        1730,
        1734,
        "#e6e9ea"
      ]
    }
  ]
}
[/block]
Once finished, select **Confirm and Update**. You will receive an email stating your CSV Import has finished.

# FAQ

##What if I don't have the external_user_id set?

OneSignal intentionally does not automatically collect Personally Identifiable Information for data privacy reasons. If you have not enriched OneSignal with the `external_user_id` property or [Data Tags](doc:add-user-data-tags), it can be difficult to map the device record in OneSignal with your database user record. Based on [Data Collected by the OneSignal SDK](doc:data-collected-by-the-onesignal-sdk) like IP Address and Device (along with any data tags you may have set), you could try [Exporting User Data](doc:exporting-data) from OneSignal and match any data within your database to map users to a CSV and upload using the `player_id` and adding the `external_user_id` and other tag columns.

For proper device matching, we highly recommend adding the `external_user_id` through our client-side SDK. See [External User Ids](doc:external-user-ids) for more details.

## What are the restrictions for this feature?

This is a [Paid OneSignal Account](https://onesignal.com/pricing). This is not available for Free tiered customers. 
[block:parameters]
{
  "data": {
    "h-0": "Requirements",
    "h-1": "Details",
    "0-0": "CSV file with a `player_id` and/or `external_user_id` column",
    "0-1": "If using `external_user_id` it must be set within OneSignal before uploading.",
    "1-0": "CSV restrictions",
    "1-1": "- Must have `player_id` and/or `external_user_id` column and spelled correctly\n- Must be comma separated values (`,`)\n- **Cannot** use semi-colons `;` or JSON\n- Must remove quotes (`\"`, `'`)"
  },
  "cols": 2,
  "rows": 2
}
[/block]

##  What Format should my CSV be in?

- The first row must have `player_id` and/or `external_user_id` as columns. Please ensure you spell these correctly.
- Do not use quotes around any parameters. Please remove all quote marks.
- Parameters must be separated by commas. Semi-colons do not work.

**Example Format:**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c57444-Screen_Shot_2019-08-20_at_1.42.14_PM.png",
        "Screen Shot 2019-08-20 at 1.42.14 PM.png",
        847,
        171,
        "#e7e7e7"
      ]
    }
  ]
}
[/block]