---
title: "Delete Users"
slug: "delete-users"
excerpt: "How to bulk delete users"
hidden: false
createdAt: "2019-07-25T19:56:58.079Z"
updatedAt: "2021-05-03T17:59:59.069Z"
---
This guide will go over how to delete user records in bulk from OneSignal. If you want to delete segments without the user records see [Deleting Segments](https://documentation.onesignal.com/docs/segmentation#section-deleting-segments).

If you would like to delete users from our API, see the [API Delete Device Call](#section-api-deletion-requirements). Currently you can only delete individual user records from the API.
[block:callout]
{
  "type": "warning",
  "title": "Deleting users cannot be reversed!",
  "body": "Once you delete users, there is no way to get them back. Deleted users can only get push again once they:\n- **Web:** Clear browser cookies, then return to your site\n- **Mobile:** Open the app again. We recommend being up to date on the latest version of OneSignal's SDK in the app."
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "WARNING: DO NOT DELETE ALL USERS",
  "body": "Be very careful when following these steps, make sure you do not delete all users."
}
[/block]
## Delete Bulk Users From the OneSignal Dashboard

### Create Your Segment

See [Segments](doc:segmentation) for details on creating segments. We recommend using the "Last Session" filter with **greater than** 4320 hours (6 months). Make sure to select **greater than** and NOT "less than".

Before deletion, we also recommend sending 2 notifications to this segment to try winning those users back.

When ready, select the 3-dot Options button > View Users
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a5eb560-Screen_Shot_2020-10-17_at_10.02.00_AM.png",
        "Screen Shot 2020-10-17 at 10.02.00 AM.png",
        1026,
        290,
        "#f3f4f6"
      ]
    }
  ]
}
[/block]
In **Audience > All Users** 

1. Check that the correct Segment is selected.
2. Select the arrow next to 'Update/Import Users' to reveal the dropdown
3. Select **Delete Users In Segment**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82626c7-Frame_3_1.png",
        "Frame 3 (1).png",
        1523,
        739,
        "#dce0e3"
      ]
    }
  ]
}
[/block]
A confirmation screen will appear showing how many users will be deleted and require you to input the name of the segment to confirm deletion.
[block:callout]
{
  "type": "danger",
  "title": "WARNING: POINT OF NO RETURN!",
  "body": "Once you press **Delete Users** this cannot be undone. Your users will be deleted."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e69205d-Screen_Shot_2020-10-17_at_10.09.34_AM.png",
        "Screen Shot 2020-10-17 at 10.09.34 AM.png",
        529,
        381,
        "#dedee0"
      ]
    }
  ]
}
[/block]
After clicking **Delete Users** a confirmation screen will appear and you will be sent an email confirming the deletion.

You cannot delete more than 1 segment at a time per app.

----

## API Deletion Requirements

Example API DELETE User Endpoint
[block:callout]
{
  "type": "danger",
  "title": "Deletion of devices cannot be undone",
  "body": "Once you delete a device, you cannot get the device record back unless the device:\n- Clears browser cookies, then return to your site\n- Uninstall the app and re-install the app."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request DELETE \\\n     --header \"Authorization: Basic YOUR_ONESIGNAL_API_KEY\" \\\nhttps://onesignal.com/api/v1/players/ONESIGNAL_PLAYER_ID?app_id=YOUR_APP_ID",
      "language": "curl"
    }
  ]
}
[/block]
#### Delete Users With Postman
Requirements:
1 - Postman: download postman here (free) https://www.getpostman.com/
2 - The OneSignal Player Ids to be deleted. Can be a CSV file of devices.

#### Step 1 - Setup Postman Collection

Open Postman app. Select "New Collection" and name it "Delete OneSignal Users"
Click "Add requests" and also name this "Delete OneSignal Users".
Save
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a7a85b7-Screen_Shot_2019-07-25_at_1.20.41_PM.png",
        "Screen Shot 2019-07-25 at 1.20.41 PM.png",
        1024,
        814,
        "#b4b2b2"
      ]
    }
  ]
}
[/block]

####Step 2 Setup Postman Request

In the request under "Params"
1. Select **DELETE**
2. Add the URL `https://onesignal.com/api/v1/players/:player_id?app_id=YOUR_APP_ID`
3. Replace "YOUR_APP_ID" with the actual OneSignal App Id for your 
4. Set the value for "player_id" to be `{{player_id}}`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2efd899-Screen_Shot_2019-07-25_at_1.30.38_PM.png",
        "Screen Shot 2019-07-25 at 1.30.38 PM.png",
        1018,
        621,
        "#f9f6f7"
      ]
    }
  ]
}
[/block]
5. Select "Headers"
6. Select `Authorization`
7. Type `Basic YOUR_REST_API_KEY` but change `YOUR_REST_API_KEY` to your actual REST API key that matches the app id from step 3.
8. Save the request
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d8b501-Screen_Shot_2019-07-25_at_1.37.24_PM.png",
        "Screen Shot 2019-07-25 at 1.37.24 PM.png",
        721,
        334,
        "#f4f3f4"
      ]
    }
  ]
}
[/block]
####Step 3 Add your player_id

You can individually delete devices by replacing the `{{player_id}}` with the actual player_id of the device you want deleted. Then click the "Send" button to delete it.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e9ccaa2-Screen_Shot_2020-03-29_at_11.21.20_AM.png",
        "Screen Shot 2020-03-29 at 11.21.20 AM.png",
        2166,
        1106,
        "#f6f3f3"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "If you did the individual deletion, you are all done! You can continue adding player ids to delete.",
  "title": "Finished individual deletion"
}
[/block]
If you want to delete large amounts of player ids at once continue here:

You can run a list of player_id's unto postman to delete. Make sure your CSV file has 1 column with `player_id` as the column header. It must looks like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/140f29c-Screen_Shot_2020-03-29_at_12.49.24_PM.png",
        "Screen Shot 2020-03-29 at 12.49.24 PM.png",
        421,
        180,
        "#e5e5e5"
      ]
    }
  ]
}
[/block]
####Step 4 Run the Request

Next to the Collection, select the arrow and choose "Run"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7817795-Screen_Shot_2019-07-25_at_1.41.57_PM.png",
        "Screen Shot 2019-07-25 at 1.41.57 PM.png",
        674,
        589,
        "#f9f7f7"
      ]
    }
  ]
}
[/block]
This will open a new window. Next to:
Delay use 500 ms 
Data click "Select File" and Open the .csv file of your segment.
Check Keep variable values
Uncheck "Save cookies after collection run"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/808b274-Screen_Shot_2020-03-29_at_12.51.57_PM.png",
        "Screen Shot 2020-03-29 at 12.51.57 PM.png",
        1284,
        802,
        "#eeeff1"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "DELETION PROCESS",
  "body": "Below is the final step. Once you select the next button the deletion process will occur."
}
[/block]
Selecting the blue "Run Delete OneSignal Users" button will start the deletion process for all users in that csv.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3da0de-Screen_Shot_2019-07-25_at_2.00.30_PM.png",
        "Screen Shot 2019-07-25 at 2.00.30 PM.png",
        1392,
        912,
        "#eaeaeb"
      ]
    }
  ]
}
[/block]
####Step 5 Review

That is it, you have now deleted those records from OneSignal.

You can watch the process and as long as you see "200 OK"s then you are all set.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fe76c9c-Screen_Shot_2019-07-25_at_2.02.06_PM.png",
        "Screen Shot 2019-07-25 at 2.02.06 PM.png",
        1392,
        912,
        "#e7e6e6"
      ]
    }
  ]
}
[/block]