---
title: "Using Postman"
slug: "using-postman"
excerpt: "How to use Postman for server REST API testing"
hidden: false
createdAt: "2016-09-22T03:57:59.825Z"
updatedAt: "2022-03-09T17:59:23.663Z"
---
You can use [Postman](https://www.getpostman.com) to work with our [REST API](ref:create-notification). Follow the screenshots below to see how to use Postman for our [Create notification API endpoint](ref:create-notification).
[block:callout]
{
  "type": "info",
  "title": "Public OneSignal Postman Collection Is Now Available 🙌",
  "body": "If you want to test our OneSignal API, we have made a [OneSignal Postman collection](https://www.postman.com/onesignaldevs/workspace/onesignal-api/collection/16845437-2783b546-3051-4ef5-96b3-ab8403c94a1b?ctx=documentation) that will allow you to start testing our API now!\n\nTo learn more about the collection and the OneSignal API, visit the [OneSignal Postman docs](https://documenter.getpostman.com/view/16845437/TzscpSWK)"
}
[/block]
# Create notification

This example will explain how to target single or multiple OneSignal Apps.

For multiple apps, make sure to check out how to use [Postman's Collections](https://learning.getpostman.com/docs/postman/collections/creating_collections/) to send to all apps at once. Be careful when testing not to spam all users on all apps!

Select **New Collection** (name the collection) > Click **Add request** (name the request)
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/08d4a17-Screen_Shot_2020-09-28_at_10.03.46_AM.png",
        "Screen Shot 2020-09-28 at 10.03.46 AM.png",
        325,
        238,
        "#f1e9e7"
      ]
    }
  ]
}
[/block]
### 1. Select POST 
add: 
`https://onesignal.com/api/v1/notifications`

### 2. Create the Headers
Line 1 key: `Authorization`   value: `Basic ONESIGNAL_REST_API_KEY`
- Replace ONESIGNAL_REST_API_KEY with the value found in [Keys & IDs](doc:accounts-and-keys) 
- If targeting multiple Apps, set: `Basic {{REST_API_KEY}}` to device the Variable `REST_API_KEY`

Line 2 key: `Content-Type`   value: `application/json`
***You MUST use this value with postman for our API.***
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3436d6e-Screen_Shot_2020-09-28_at_10.08.31_AM.png",
        "Screen Shot 2020-09-28 at 10.08.31 AM.png",
        685,
        257,
        "#f3f3f6"
      ]
    }
  ]
}
[/block]
### 3. Add the Body
select `raw`
add your JSON

See the [Create notification](ref:create-notification) API docs for all parameters.

If targeting multiple Apps, set the {{appId}} and {{url}} variables along with any other variables you would like. Otherwise all apps will get the same data.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3414b92-Screen_Shot_2020-09-28_at_10.12.41_AM.png",
        "Screen Shot 2020-09-28 at 10.12.41 AM.png",
        1085,
        330,
        "#f6f5f7"
      ]
    }
  ]
}
[/block]
###4. Save and Send

Click the "Save" button to reuse this request multiple times.

You can now press the "Send" button to send to everyone in the "Subscribed Users" segment defined in the above example or replace with the [Segments](doc:segmentation) you want to include.

If targeting multiple Apps, create a `.csv` file with at least 3 columns: `REST_API_KEY`, `appId`, and `url` (as shown in the above example). Any other variable data will need to be added to the `.csv` file as well. You can find the App ID and Rest API Key within [Keys & IDs](doc:accounts-and-keys) or use the [View apps](ref:view-apps-apps) API endpoint.

Example:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6bc0988-Screen_Shot_2020-09-28_at_10.19.46_AM.png",
        "Screen Shot 2020-09-28 at 10.19.46 AM.png",
        771,
        139,
        "#ecedf1"
      ]
    }
  ]
}
[/block]
Once you have the CSV data of your variable values, in Postman, select the Collections Arrow and click **Run**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73ab3cf-Screen_Shot_2020-09-28_at_10.20.40_AM.png",
        "Screen Shot 2020-09-28 at 10.20.40 AM.png",
        697,
        269,
        "#f3efef"
      ]
    }
  ]
}
[/block]
Next to "Data" click **Select File**, upload the `.csv` file with all the variables. 

Next to "Delay" add `30000` ms.

**POINT OF SENDING** once you click **Run Create ...** it will start to send the push.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bab24eb-Screen_Shot_2020-09-28_at_10.24.41_AM.png",
        "Screen Shot 2020-09-28 at 10.24.41 AM.png",
        484,
        408,
        "#eef1f8"
      ]
    }
  ]
}
[/block]
----

# View Notifications

### 1. Select GET 
add: 
`https://onesignal.com/api/v1/notifications?app_id=YOUR_APP_ID&limit=:limit&offset=:offset&kind=:kind`

### 2. Set Params
Under the **VALUE** Column put the following data you want to collect.
[block:parameters]
{
  "data": {
    "0-0": "`app_id`",
    "h-0": "Key",
    "h-1": "Value",
    "0-1": "Your [OneSignal App Id](https://documentation.onesignal.com/docs/accounts-and-keys#section-keys-ids) to get the notifications from",
    "1-0": "`limit`",
    "1-1": "How many notifications you want.\nDefault: `50`\nMax: `50`\nMinimum: `1`",
    "2-0": "`offset`",
    "2-1": "Page offset ie How many notifications to skip over. If you got 50 notifications in the last call. You can `offset` by `50` to get the next 50 notifications.",
    "3-0": "`kind`",
    "3-1": "The kind of notifications you want.\nDefault: `blank` - all kinds of notifications\n`0` - [Dashboard Sent Notifications](doc:sending-notifications)\n`1` - [REST API Sent Notifications](doc:api-reference) \n`3` - [Automated Messages](doc:automated-messages)."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ea1b109-Screen_Shot_2020-03-01_at_9.13.38_AM.png",
        "Screen Shot 2020-03-01 at 9.13.38 AM.png",
        2216,
        810,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]
###3.  Set Headers
For the **KEY** set `Authorization` and **VALUE** set `Basic YOUR_REST_API_KEY` where `YOUR_REST API_KEY` can be found in [Keys & IDs](doc:accounts-and-keys).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c958a76-Screen_Shot_2020-03-01_at_9.14.35_AM.png",
        "Screen Shot 2020-03-01 at 9.14.35 AM.png",
        2192,
        474,
        "#f2f3f5"
      ]
    }
  ]
}
[/block]
###4. Press Send
You will get the results similar to here: https://documentation.onesignal.com/reference#section-result-format-view-notifications

----

# View Apps

OneSignal has an API for viewing [all your apps](https://documentation.onesignal.com/reference#view-apps-apps) or only [specific apps](https://documentation.onesignal.com/reference#view-an-app) you want.

In this quick example, we will look at viewing all app data.

###1. Setup GET Url

In the Postman interface, select the GET call and add the url: `https://onesignal.com/api/v1/apps`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce9f5bf-Screen_Shot_2019-04-30_at_3.26.25_PM.png",
        "Screen Shot 2019-04-30 at 3.26.25 PM.png",
        1820,
        320,
        "#eef1f4"
      ]
    }
  ]
}
[/block]
###2. Add User Auth Key

This call Requires your OneSignal **User Auth Key**, (not REST API Key) which is available in [Keys & IDs](doc:accounts-and-keys#section-user-auth-key).

In Postman under **Headers** use the **Authorization** key and for value use: `Basic YOUR_USER_AUTH_KEY` Make sure to put your User Auth key.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f06e930-Screen_Shot_2019-04-30_at_3.29.37_PM.png",
        "Screen Shot 2019-04-30 at 3.29.37 PM.png",
        1092,
        286,
        "#f8f8f7"
      ]
    }
  ]
}
[/block]
###3. Send and Save

Once you do that, you can click **Send** on Postman to get all your app data.

Common important data would be:

[block:parameters]
{
  "data": {
    "1-0": "\"players\"",
    "1-1": "Total Users",
    "0-0": "\"id\"",
    "0-1": "OneSignal App Id",
    "2-0": "\"messageable_players\"",
    "2-1": "Subscribers"
  },
  "cols": 2,
  "rows": 3
}
[/block]
Don't forget to press **Save** to keep this call for later.

# CSV User Export

###1. Download Postman (if you have not done so already).

You can download postman here: https://www.getpostman.com/

###2. Create Collection

Open Postman and Select Collections > + New Collection
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/211cc31-Screen_Shot_2020-01-22_at_11.31.36_AM.png",
        "Screen Shot 2020-01-22 at 11.31.36 AM.png",
        2596,
        1978,
        "#eceaea"
      ]
    }
  ]
}
[/block]
Name the collection "CSV User Export" and click "Create"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e2206f-Screen_Shot_2020-01-22_at_11.32.35_AM.png",
        "Screen Shot 2020-01-22 at 11.32.35 AM.png",
        2596,
        1978,
        "#bcbbbb"
      ]
    }
  ]
}
[/block]
### 3. Create the Request

Select the collection and click "Add request"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0d0acb4-Screen_Shot_2020-01-22_at_11.33.26_AM.png",
        "Screen Shot 2020-01-22 at 11.33.26 AM.png",
        740,
        248,
        "#eeeded"
      ]
    }
  ]
}
[/block]
Name the Request "CSV User Export" and "Save to CSV User Export"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/90e0ded-Screen_Shot_2020-01-22_at_11.34.55_AM.png",
        "Screen Shot 2020-01-22 at 11.34.55 AM.png",
        1056,
        1320,
        "#dfdcdb"
      ]
    }
  ]
}
[/block]
Select the Request in the Collection
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/647134f-Screen_Shot_2020-01-22_at_11.35.50_AM.png",
        "Screen Shot 2020-01-22 at 11.35.50 AM.png",
        2508,
        1890,
        "#eceaea"
      ]
    }
  ]
}
[/block]
Now that this is created, you can re-use it as much as you like.

### 4. Setup the Request

1 - Select POST
2 - Past this url `https://onesignal.com/api/v1/players/csv_export?app_id=`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/971850a-Screen_Shot_2020-01-22_at_11.39.11_AM.png",
        "Screen Shot 2020-01-22 at 11.39.11 AM.png",
        1676,
        700,
        "#f5f5f6"
      ]
    }
  ]
}
[/block]
3 - Select Headers
4 - Add `Authorization` and `Content-Type` keys
5 - Next to Authorization set `Basic YOUR_REST_API_KEY` replace with your actual [REST API Key](https://documentation.onesignal.com/docs/accounts-and-keys)
6 - Next to "Content-Type" add `application/json`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c2c4eec-Screen_Shot_2020-01-22_at_11.44.06_AM.png",
        "Screen Shot 2020-01-22 at 11.44.06 AM.png",
        1684,
        490,
        "#f9f8f8"
      ]
    }
  ]
}
[/block]
**Optional** Add Extra Data - use this if you need the p256, web_auth, country, location and/or ip address.

7 - Select Body
8 - Select raw
9 - add this json
```
{"extra_fields": ["country","location","notification_types","ip", "external_user_id", "web_auth", "web_p256"]}
```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/85a6dda-Screen_Shot_2020-01-22_at_11.46.57_AM.png",
        "Screen Shot 2020-01-22 at 11.46.57 AM.png",
        1686,
        522,
        "#eeeff4"
      ]
    }
  ]
}
[/block]
### 5. Send the request and open the file

Click "Send" and copy-paste the provided URL into a browser.

The URL you need to put in the browser will look like this:
`https://onesignal.s3.amazonaws.com/csv_exports/3beb3078-e0f1-4629-af17-fde833b9f716/users_59891cdc338b8b5eb128438512a60b83_2020-01-22.csv.gz`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4d5343f-Screen_Shot_2020-01-22_at_11.48.52_AM.png",
        "Screen Shot 2020-01-22 at 11.48.52 AM.png",
        1688,
        1014,
        "#f2eff2"
      ]
    }
  ]
}
[/block]
When you add this URL To the browser, you might see this page:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/325cbf9-Screen_Shot_2020-01-22_at_11.53.18_AM.png",
        "Screen Shot 2020-01-22 at 11.53.18 AM.png",
        1270,
        228,
        "#f4f3f4"
      ]
    }
  ]
}
[/block]
This means the data is loading, please wait 10 to 20 minutes (depending on how big the app is) and refresh the page, eventually this will download the list.

----

# Notification History

**1** In OneSignal Dashboard, navigate to **Settings > Analytics** and check that "Send History via OneSignal API" is enabled. Only data for notifications sent after this is set to Active will be available.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3e2b9a9-Screen_Shot_2022-03-09_at_8.26.49_AM.png",
        "Screen Shot 2022-03-09 at 8.26.49 AM.png",
        1812,
        780,
        "#dbdbdd"
      ]
    }
  ]
}
[/block]
**2** Open [Postman](https://www.getpostman.com) and click the **+** button inside the "Collections" page. You can name this collection `Notification History` or whatever you like.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/06faf8f-Screen_Shot_2022-03-09_at_8.25.38_AM.png",
        "Screen Shot 2022-03-09 at 8.25.38 AM.png",
        3024,
        2038,
        "#eeeeee"
      ]
    }
  ]
}
[/block]
**3** Select the 3-dot Options button and **Add request**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13f5384-Screen_Shot_2022-03-09_at_8.31.13_AM.png",
        "Screen Shot 2022-03-09 at 8.31.13 AM.png",
        3024,
        2038,
        "#efeeee"
      ]
    }
  ]
}
[/block]
**4** Setup the request Params:
**4.1** Name the request `Sent Data` or whatever you like.
**4.2** Change the request to **POST**.
**4.3** Past this URL into the field: `https://onesignal.com/api/v1/notifications/:notification_id/history`
**4.4** Press **Save**
**4.5** Under "Path Variables" you should see `notification_id` already populated. This is where you put the OneSignal notification_id under "Value".
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e9aaad-Screen_Shot_2022-03-09_at_8.38.10_AM.png",
        "Screen Shot 2022-03-09 at 8.38.10 AM.png",
        3024,
        2038,
        "#edebeb"
      ]
    }
  ]
}
[/block]
**5** Setup the Headers
**5.1** Under "Key" input `Authorization` you should see this auto-populate with suggestions.
**5.2** Under "Value" type `Basic ` and paste your OneSignal REST API Key found in the Settings > Keys and Ids of your OneSignal Dashboard. Make sure there is a space between Basic and your REST API key.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d3b3a27-Screen_Shot_2022-03-09_at_9.17.28_AM.png",
        "Screen Shot 2022-03-09 at 9.17.28 AM.png",
        1968,
        632,
        "#f6f2f3"
      ]
    }
  ]
}
[/block]
**6** Setup the Body
**6.1** Click **form-data**.
**6.2** Add the following 3 Keys: `app_id`, `email`, `events`
**6.3** Add the following Values for each key: 
- Your OneSignal App Id found in Settings > Keys and Ids
- Your email or an email to send the list to
- `sent` event. 
**6.4** Press Save
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0819b08-Screen_Shot_2022-03-09_at_8.58.25_AM.png",
        "Screen Shot 2022-03-09 at 8.58.25 AM.png",
        3024,
        2038,
        "#edebec"
      ]
    }
  ]
}
[/block]
**7** Send the request and open the file

The last input you need is the `notification_id`. You can get this within the Dashboard by viewing the Message Report for the notification and getting the UUID in the URL. For example, go to Messages or Delivery tab and click a notification, you will see the Message Report and the URL will look like this:
`https://app.onesignal.com/apps/5e605fcd-de88-4b0a-a5eb-5c18b84d52f3/notifications/06c38df3-e2f2-4e71-8075-2a30a2188e0f#outcomes=os__click__count,os__session_duration__count`

In this case `06c38df3-e2f2-4e71-8075-2a30a2188e0` is the notification_id.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5d06bfa-Screen_Shot_2022-03-09_at_9.21.03_AM.png",
        "Screen Shot 2022-03-09 at 9.21.03 AM.png",
        2710,
        452,
        "#83898f"
      ]
    }
  ]
}
[/block]
**7.1** Go to the Params tab
**7.2** Paste the `notification_id` UUID into the VALUE column.
**7.3** Press Send
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d1aca5e-Screen_Shot_2022-03-09_at_9.22.37_AM.png",
        "Screen Shot 2022-03-09 at 9.22.37 AM.png",
        3024,
        2038,
        "#ececec"
      ]
    }
  ]
}
[/block]
 **8** Getting the results.

You should see a `success: true` response with a `destination_url`. This should also be emailed to you.

Copy the URL only and paste it into a browser.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ceba8c-Screen_Shot_2022-03-09_at_9.25.34_AM.png",
        "Screen Shot 2022-03-09 at 9.25.34 AM.png",
        1960,
        534,
        "#f3f6fb"
      ]
    }
  ]
}
[/block]
**Depending on how large the audience, you may see an error page, just wait and try again after several minutes.**

You will have a list of all `player_id` records sent this notification.

You can right click the list and "Save As" a CSV. You will want to add a column header `player_id` if you plan to use this list for [Importing User Attributes or Tags](doc:import-user-tags).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7776ff-Screen_Shot_2022-03-09_at_9.27.41_AM.png",
        "Screen Shot 2022-03-09 at 9.27.41 AM.png",
        1894,
        732,
        "#bebfc1"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Notification History Done!",
  "body": "If you want to duplicate the request in Postman and save the 2nd request for `clicked` events, just update the request name and set `clicked` event in the Body. More details on this request in [Notification History](https://documentation.onesignal.com/reference/notification-history)."
}
[/block]