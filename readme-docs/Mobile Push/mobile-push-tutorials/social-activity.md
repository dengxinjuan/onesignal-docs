---
title: "Social Activity"
slug: "social-activity"
excerpt: "Sending notifications based on \"Likes\", \"Follows\", \"Invites\" or \"Comments\""
hidden: false
createdAt: "2016-09-02T02:05:59.237Z"
updatedAt: "2020-05-07T16:10:36.168Z"
---
For social sites or apps that send notifications to involved users when some type of social activity occurs.

**Examples:**
User Followed You:    “John234 just followed you!”
User following Posted:    “John234 just posted ‘How I became a pro gamer’ on AwesomeApp”
User Messaged You:  “Melissa Grant says ’HI DUDE! Where are ya!’”
Request for Response to Invite:    “Let Julia know if you can make it to Board Games Night”
User-User Thread Reply:    “Melissa Grant says ’lol really?’”
VOIP Call:  “Call from: Mom”
User Replied to Thread You’re In:   “Melissa Grant replied ‘What do you guys think? Pizza?’”
User @Mentioned You:   “Josh mentioned you in a tweet ‘Notifications rule! cc:@george’”
User Liked/Retweeted your content:   “Gerry Cardinal liked your tweet ’KD is going to the dubs!’”
User Tagged You:  “Long Vo tagged you in a photo”
User Replied to Your Content:  “@george but don’t you think that’s wrong because reasons?”
User Shared Content With You:    “Mom shared the album ‘Hawaii’ with you”
User Invited You to Something:   “George invited you to the SAO guild ‘Laughing Coffins’”

## Requirements

 - CRM or Database

## Setup

### Step 1. Map Your Users

The best practice for detecting social activity and targeting your users is to save your unique User IDs to OneSignal using our `setExternalUserId` [method on each of our SDKs](https://documentation.onesignal.com/docs/sdk-reference#setexternaluserid-method). Another option is to save each OneSignal Player ID in your CRM or database. Please see our [CRM Integration docs](https://documentation.onesignal.com/docs/internal-database-crm) for more on how to do either option.

### Step 2. Detect The Activity or Event

When the user performs the social action you need to capture the event, the User ID that performed the action and the User ID that received the action. Generally this will be saved to a database of events.

OneSignal does provide the option to [Add Data Tags](doc:add-user-data-tags) to devices, but this is limited and should be used sparingly to collect either "total likes", "total follows", etc. You can also use tags for [Message Personalization](https://documentation.onesignal.com/docs/personalization) which will show the current user's name that receives the push. For example, you can send a message "Hi Jon, you have 10 followers." by tagging each user with their "name" and incrementing their followers count.

### Step 3. Send The Message

Now that you have the User IDs and actions, you can send a notification with the API by targeting your unique User IDs with the `include_external_user_ids` parameter or target the OneSignal Player ID with the `include_player_ids` targeting parameter.

Please see [API Examples](https://documentation.onesignal.com/reference#send-to-specific-devices) for more info on using our API calls.

OneSignal also provides the [`postNotification` method](https://documentation.onesignal.com/docs/sdk-reference#postnotification-method) which you can use to trigger a notification immediately from within the app or website. Make sure to only target player_ids in this case with the `include_player_ids` parameter so you do not accidentally expose the OneSignal REST API Key for your app. 


### Examples

####User A gets "Liked" by User B.

When User B performs the "Like", your CRM or Database detects this and you have User A's OneSignal Player ID or your unique User ID.

You can use the API to send a notification to User.
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"You got a new Like!\\\"},\n\\\"include_player_ids\\\": [\\\"USER_A_PLAYER_ID\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl",
      "name": "include_player_ids"
    },
    {
      "code": "curl --include \\\n     --request POST \\\n     --header \"Content-Type: application/json; charset=utf-8\" \\\n     --header \"Authorization: Basic YOUR_REST_API_KEY\" \\\n     --data-binary \"{\\\"app_id\\\": \\\"YOUR_APP_ID\\\",\n\\\"contents\\\": {\\\"en\\\": \\\"You got a new Like!\\\"},\n\\\"include_external_user_ids\\\": [\\\"YOUR_USER_ID\\\"]}\" \\\n     https://onesignal.com/api/v1/notifications",
      "language": "curl",
      "name": "include_external_user_ids"
    }
  ]
}
[/block]
#### Comments or Group Involvement

User A has created a post that User B, C and D has commented on.

You would associate User A's `external_user_id` or `player_id` to that post as the "author" or "creator".

When User B makes a comment, you can now save User B's ID as a "commenter" to the post and trigger a push to User A. You can save the comment as the message "contents" and have the title as "New Activity" or "New Comment: Post Title".

When User C, D or A also comments or replies, you can then save the new User IDs to the "commenters" array and target all IDs when new updates are made.


----
### Extra add-ons

#### Personalize the messages

**Requires the OneSignal Player ID to tag devices with API** 
Otherwise, you will need to tag devices with the SDK.

You can then add personalizations to the notification using [Message Personalization](doc:personalization) )

When User A gets the new social Activity, you can tag User A with User B's name.
This is achieved with the [Edit Device API PUT call](https://documentation.onesignal.com/reference#edit-device)
[block:code]
{
  "codes": [
    {
      "code": "curl --include \\\n     --request PUT \\\n     --header \"Content-Type: application/json\" \\\n     --data-binary \"{\\\"app_id\\\" : \\\"YOUR_APP_ID\\\",\n\\\"tags\\\":{\\\"liked_by\\\":\\\"User B\\\"}}\" \\\n     https://onesignal.com/api/v1/players/USER_A_PLAYER_ID",
      "language": "shell"
    }
  ]
}
[/block]
#### Activity Feed
You can track notification data within your app by [creating an Activity Feed](doc:create-an-activity-feed)