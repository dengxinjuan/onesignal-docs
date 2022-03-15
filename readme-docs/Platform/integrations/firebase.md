---
title: "Firebase"
slug: "firebase"
excerpt: "Integrate OneSignal with Firebase"
hidden: true
createdAt: "2020-08-30T18:24:26.167Z"
updatedAt: "2020-11-19T16:41:03.103Z"
---
If you are currently using Firebase or any type of database, CRM, DMP or CDP, you will want to be able to communicate user data and send messages as data changes. 
[block:callout]
{
  "type": "info",
  "title": "Extension From Main Docs",
  "body": "This is an extension of the concepts within our overview on [Internal Database, DMP, & CRM](doc:internal-database-crm) integrations."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Notification Analytics Guide",
  "body": "For sharing notification data between OneSignal see our [Google Analytics for Firebase](doc:google-analytics-for-firebase) integration guide."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Interactions with Firebase Messaging SDK",
  "body": "OneSignal uses FCM Data messages. If you implemented the Firebase Messaging SDK and send push from OneSignal, it will trigger the FCM `onMessageReceived` public method."
}
[/block]
In this guide we are going to look at integrating OneSignal with Firebase. We will go over:
1. Storing the Firebase User ID into OneSignal (External User ID)
2. Storing the OneSignal User ID (Player ID) into Firebase
3. Leveraging Firebase Cloud Functions to trigger push notifications using OneSignal’s API

If interested in following along with a Demo, we have an iOS Example Demo in Swift you can download and try [here](https://github.com/jfishman1/Momenta). You will need to add your own `GoogleService-Info.plist` and a Firebase Blaze Plan for making API calls with Cloud Functions.

## Firebase Setup

When a user signs up for an account with your app or website, you likely use Authentication to identify and create a record for them in your database with a User ID.

### Firebase Create User Example

With [Firebase Authentication](https://firebase.google.com/docs/auth) we can use the `createUser` method to create the user record and return the Firebase User ID upon successful completion.
[block:code]
{
  "codes": [
    {
      "code": "func createUserWithEmail(email: String, password: String, completion: @escaping (String) -> (), err: @escaping (Error)->()) {\n    Auth.auth().createUser(withEmail: email, password: password, completion: { (authResult, error) in\n        if error != nil {\n            err(error!)\n            return\n        }\n        let firebaseUserId = authResult!.user.uid\n        completion(firebaseUserId)\n    })\n}",
      "language": "swift"
    }
  ]
}
[/block]
### Firebase Sign In User Example

If the user is already registered with the app and is logging in. We can use the `signIn` method to authenticate the user and return the Firebase User ID.
[block:callout]
{
  "type": "warning",
  "title": "IMPORTANT: User Id vs Device Id",
  "body": "Currently OneSignal stores device records, not user records. Your Firebase User ID will be a 1-many-relationship with the OneSignal Player ID record as users sign-in with multiple devices."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "func loginWithEmail(email: String, password: String, completion: @escaping (String) -> (), err: @escaping (Error) -> ()) {\n    Auth.auth().signIn(withEmail: email, password: password, completion: { (authResult, error) in\n        let firebaseUserId: String!\n        if error != nil {\n            err(error!)\n            return\n        }\n        if authResult != nil {\n            firebaseUserId = authResult!.user.uid\n            completion(firebaseUserId)\n        }\n    })\n}",
      "language": "swift"
    }
  ]
}
[/block]
### Firebase Get Current User Example

If the user is already registered and we want to verify they are a current user, before allowing access to the app, we can use the `currentUser` method to pass the Firebase User ID upon successful verification of the user.
[block:code]
{
  "codes": [
    {
      "code": "func getCurrentUserId(completion:@escaping (String?) -> ()) {\n    if let user = Auth.auth().currentUser {\n        let firebaseUserId = user.uid\n        completion(firebaseUserId)\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]

###Firebase Update User Example

When user data changes, you likely have a method to update the user record within Firebase with this new information. 

This example uses [Firebase Realtime Database](https://firebase.google.com/docs/database) but can easily work with [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore) as well.

Here is our simple method for updating a User in the Realtime Database with their Firebase ID.
[block:code]
{
  "codes": [
    {
      "code": "func updateUserInDatabaseWithUID(firebaseUserId: String, values: [String: AnyObject], completion: @escaping() ->()) {\n    let ref = Database.database().reference()\n    let usersReference = ref.child(\"users\").child(firebaseUserId)\n    usersReference.updateChildValues(values, withCompletionBlock: { (err, ref) in\n        if err != nil {\n            return\n        }\n        completion()\n    })\n}",
      "language": "swift"
    }
  ]
}
[/block]
Once you have the Firebase ID, you can [store the Firebase ID into OneSignal as the `external_user_id`](#store-the-firebase-user-id-into-onesignal) and/or you can [store the OneSignal ID into Firebase](#store-the-onesignal-player-id-in-firebase). We recommend doing both:

##OneSignal Setup

### OneSignal Set External User ID Example

OneSignal provides the concept of an `external_user_id` which is your single database User ID that can be associated with multiple OneSignal Device Records (Player IDs).

The [`setExternalUserId` method](https://documentation.onesignal.com/docs/sdk-reference#setexternaluserid-method) will take the Firebase User ID and set it to each OneSignal Player ID when the user creates an account, logs in or is verified as the current user.

[block:code]
{
  "codes": [
    {
      "code": "func setFirebaseUserIdToOneSignal(firebaseUserId: String) {\n    OneSignal.setExternalUserId(firebaseUserId, withCompletion: { results in\n      // The results will contain push and email success statuses\n      print(\"External user id update complete with results: \", results!.description)\n      // Push can be expected in almost every situation with a success status, but\n      // as a pre-caution its good to verify it exists\n      if let pushResults = results![\"push\"] {\n        print(\"Set external user id push status: \", pushResults)\n      }\n      if let emailResults = results![\"email\"] {\n          print(\"Set external user id email status: \", emailResults)\n      }\n    })\n}",
      "language": "swift"
    }
  ]
}
[/block]
### OneSignal Get Player ID Example

Using the [OneSignal User Status Methods](https://documentation.onesignal.com/docs/sdk-reference#user-status) `getPermissionSubscriptionState` we can detect the Player ID of the device and update our Firebase User Record.
[block:code]
{
  "codes": [
    {
      "code": "func getOneSignalPlayerId(completion: @escaping(String?) ->()) {\n    let status: OSPermissionSubscriptionState = OneSignal.getPermissionSubscriptionState()\n    if let osPlayerId = status.subscriptionStatus.userId {\n        completion(osPlayerId)\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]
##Firebase-OneSignal Setup

Combining the above example methods, we now have a working integration between OneSignal and Firebase which will pass the User IDs between both systems upon account creation, sign-in and current user verification.

### Firebase-OneSignal Create User Example
[block:code]
{
  "codes": [
    {
      "code": "createUserWithEmail(email: email, password: password, completion: { firebaseUserId in\n  getOneSignalPlayerId({ osPlayerId in\n    print(\"got OS Player ID: \", osPlayerId)\n    let values: [String: AnyObject] = [\"osPlayerId\": osPlayerId as AnyObject]\n    updateUserInDatabaseWithUID(firebaseUserId: firebaseUserId, values: values, completion: {\n      print(\"osPlayerId \\(osPlayerId) added to Firebase User Id \\(firebaseUserId)\")\n      self.setFirebaseUserIdToOneSignal(firebaseUserId)\n    })\n}, err: { error in\n  print(\"error = \\(error)\")\n})",
      "language": "swift"
    }
  ]
}
[/block]
### Firebase-OneSignal Sign In User Example
[block:code]
{
  "codes": [
    {
      "code": "loginWithEmail(email: email, password: password, completion: { firebaseUserId in\n  getOneSignalPlayerId({ osPlayerId in\n    print(\"got OS Player ID: \", osPlayerId)\n    let values: [String: AnyObject] = [\"osPlayerId\": osPlayerId as AnyObject]\n    updateUserInDatabaseWithUID(firebaseUserId: firebaseUserId, values: values, completion: {\n      print(\"osPlayerId \\(osPlayerId) added to Firebase User Id \\(firebaseUserId)\")\n      self.setFirebaseUserIdToOneSignal(firebaseUserId)\n    })\n}, err: { error in\n  print(\"error = \\(error)\")\n})",
      "language": "swift"
    }
  ]
}
[/block]

### Firebase-OneSignal Get Current User Example
[block:code]
{
  "codes": [
    {
      "code": "getCurrentUserId(completion: { firebaseUserId in\n  getOneSignalPlayerId({ osPlayerId in\n    print(\"got OS Player ID: \", osPlayerId)\n    let values: [String: AnyObject] = [\"osPlayerId\": osPlayerId as AnyObject]\n    updateUserInDatabaseWithUID(firebaseUserId: firebaseUserId, values: values, completion: {\n      print(\"osPlayerId \\(osPlayerId) added to Firebase User Id \\(firebaseUserId)\")\n      self.setFirebaseUserIdToOneSignal(firebaseUserId)\n    })\n})",
      "language": "swift"
    }
  ]
}
[/block]
## Sending Push Notification Using Firebase Cloud Functions

Leveraging [Firebase Cloud Functions](https://firebase.google.com/docs/functions) we can setup our app/site to send push when updates occur in our database. We will also use [Firebase Storage](https://firebase.google.com/docs/storage) to add images to push notifications. 

Since we now have the Firebase User ID set in OneSignal, we can target users directly with the [`include_external_user_ids` or `include_player_ids` parameter](https://documentation.onesignal.com/reference/create-notification#send-to-specific-devices) or we can target groups of users via [`included_segments`](https://documentation.onesignal.com/reference/create-notification#send-to-segments) or [`filters`](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters).

In this example, we will send push to devices using `filters` based on [Data Tags](doc:add-user-data-tags). The idea is our app has many different "categories" that users can get notifications about. When users select these categories, we tag and target them with push when new posts about those categories are published from other users.

First we setup our Cloud Functions with Cloud Storage.
[block:code]
{
  "codes": [
    {
      "code": "const admin = require(\"firebase-admin\");\nconst functions = require(\"firebase-functions\");\nconst serviceAccount = require(\"./your-service-account.json\");\nconst gcs = require(\"@google-cloud/storage\");\n\nadmin.initializeApp({\n  credential: admin.credential.cert(serviceAccount),\n  storageBucket: \"momentapro.appspot.com\",\n});\n\nconst getImageUrl = (data) => {\n  const bucket = admin.storage().bucket(\"momentapro.appspot.com\");\n  const filePath = `post_images/${data.postImageUrl}.jpg`;\n  const file = bucket.file(filePath);\n  const config = {\n    action: \"read\",\n    expires: \"08-23-2030\",\n    content_type: \"image/jpeg\",\n  };\n  return file.getSignedUrl(config);\n};\n\nexports.sendNotificationFromOS = functions.https.onCall(\n  async (data, context) => {\n    const signedUrl = await getImageUrl(data);\n    const imageUrl = signedUrl[0];\n    const sendNotification = (data) => {\n      var headers = {\n        \"Content-Type\": \"application/json; charset=utf-8\",\n        Authorization: \"Basic YOUR_ONESIGNAL_REST_API_KEY\",\n      };\n\n      var options = {\n        host: \"onesignal.com\",\n        port: 443,\n        path: \"/api/v1/notifications\",\n        method: \"POST\",\n        headers: headers,\n      };\n\n      var https = require(\"https\");\n      var req = https.request(options, (res) => {\n        console.log(\"statusCode:\", res.statusCode);\n        console.log(\"headers:\", res.headers);\n        res.on(\"data\", (data) => {\n          console.log(\"Response:\");\n          console.log(JSON.parse(data));\n        });\n      });\n\n      req.on(\"error\", (e) => {\n        console.log(\"ERROR:\");\n        console.log(e);\n      });\n\n      req.write(JSON.stringify(data));\n      req.end();\n    };\n\n    var message = {\n      app_id: \"YOUR_ONESIGNAL_APP_ID\",\n      contents: { en: data.contents },\n      data: {\n        category: data.category,\n        creatorId: data.creatorId,\n        postId: data.postId,\n        postImageUrl: data.postImageUrl,\n        imageUrl: imageUrl,\n      },\n      filters: [{ field: \"tag\", key: data.category, relation: \"exists\" }],\n      ios_attachments: { id1: imageUrl },\n      big_picture: imageUrl,\n      ios_badgeType: \"Increase\",\n      ios_badgeCount: 1,\n    };\n    return sendNotification(message);\n  }\n);",
      "language": "javascript"
    }
  ]
}
[/block]
Within our app, when the user publishes a post, we setup a function to pass in the data we want to include in the push notification:
1. The "contents" or message of the push. This will be post description.
2. The "category" which is what we will use for targeting all users interested in this category.
3. The "postId" which we will use to deep link into the post when clicking the push.
4. The "creatorId" which is the Firebase User ID of the person that created the post.
5. The "postImageUrl" which we use to fetch the `filepath` for the image in Cloud Storage.
[block:code]
{
  "codes": [
    {
      "code": "func sendOneSignalNotificationThroughFirebaseFunctions(values: [String: AnyObject]) {\n    let data = [\"contents\": values[\"postDescription\"],\n                \"category\": values[\"category\"],\n                \"postId\": values[\"postId\"],\n                \"creatorId\": values[\"creatorId\"],\n                \"postImageUrl\": values[\"postImageUrl\"]\n    ]\n    self.functions.httpsCallable(\"sendNotificationFromOS\").call(data) { (result, error) in\n      // [START function_error]\n      if let error = error as NSError? {\n        if error.domain == FunctionsErrorDomain {\n          let code = FunctionsErrorCode(rawValue: error.code)\n            print(\"Functions error code: \", code.debugDescription)\n          let message = error.localizedDescription\n            print(\"Functions error message: \", message.debugDescription)\n          let details = error.userInfo[FunctionsErrorDetailsKey]\n            print(\"Functions error details: \", details.debugDescription)\n        }\n        // [START_EXCLUDE]\n        print(error.localizedDescription)\n        return\n        // [END_EXCLUDE]\n      }\n      // [END function_error]\n      if let operationResult = (result?.data as? [String: Any])?[\"operationResult\"] as? Int {\n        print(\"operationResult: \\(operationResult)\")\n      }\n    }\n    // [END function_add_numbers]\n}",
      "language": "swift"
    }
  ]
}
[/block]
Upon receiving the push, we can use the [OneSignal Notification Opened Handler](https://documentation.onesignal.com/docs/sdk-reference#notification-opened-handler) to get the postId, feed it into our `PostDataModel` and deep link to the post. Example deep link below if your app contains a `UITabBarController` and `UINavigationController`
[block:code]
{
  "codes": [
    {
      "code": "//inside the AppDelegate.swift didFinishLaunchingWithOptions function\nlet notificationOpenedBlock: OSHandleNotificationActionBlock = { result in\n    // This block gets called when the user reacts to a notification received\n    if let additionalData = result!.notification.payload!.additionalData {\n        print(\"additionalData: \", additionalData)        \n        if let postId = additionalData[\"postId\"] as? String {\n            let storyboard = UIStoryboard(name: \"Main\", bundle: nil)\n            if  let postDetailVC = storyboard.instantiateViewController(withIdentifier: \"PostDetailViewController\") as? PostDetailViewController,\n                let tabBarController = self.window?.rootViewController as? UITabBarController,\n                let navController = tabBarController.selectedViewController as? UINavigationController {\n                    let dataModel = PostDataModel()\n                    dataModel.postId = postId\n                    postDetailVC.dataModel = dataModel\n                    navController.popViewController(animated: false)\n                    navController.pushViewController(postDetailVC, animated: true)\n            }\n        }\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]
Feel free to test out the iOS Example Demo in Swift you can download and try [here](https://github.com/jfishman1/Momenta).

[block:callout]
{
  "type": "info",
  "title": "Notification Analytics Guide",
  "body": "For sharing notification data between OneSignal see our [Google Analytics for Firebase](doc:google-analytics-for-firebase) integration guide."
}
[/block]