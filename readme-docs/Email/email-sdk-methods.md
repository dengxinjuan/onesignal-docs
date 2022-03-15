---
title: "Email SDK Methods"
slug: "email-sdk-methods"
excerpt: "How to set up email messaging on your app or website"
hidden: false
createdAt: "2021-07-14T20:51:49.832Z"
updatedAt: "2022-03-12T01:07:05.317Z"
---
If you have not done so, we always recommend updating the OneSignal SDK to the latest version to get access to the latest features:

- [Web Push Quickstart](doc:web-push-quickstart) 
- [Mobile Push Quickstart](doc:mobile-sdk-setup) 
[block:callout]
{
  "type": "warning",
  "title": "Email vs Push Records",
  "body": "Email and Push subscribers will have separate OneSignal Player IDs (user records). This is to manage the case where a user opts-out of one you can still send messages to the other. Email records cannot get push notifications and push records cannot get emails."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Note on Network Latency",
  "body": "If there are networking issues, functions may take 30+ seconds to return. In the code examples below we provide callbacks to track when these return. \n\nMake sure to keep functions from blocking the user interface, otherwise your app may appear unresponsive to the user."
}
[/block]
# Setting the Users Email

## `setEmail` Method

Allows you to set the user's email address with the OneSignal SDK. We offer several overloaded versions of this method. 

It is best to call this when the user provides their email. If `setEmail` called previously and the user changes their email, calling`setEmail` again will update that record with the new email address.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.setEmail(\"example@domain.com\")          \n    .then(function(emailId) {\n      // Callback called when email have finished sending\n      console.log(\"emailId: \", emailId);  \n    }); \n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "OneSignal.setEmail(\"example@domain.com\");",
      "language": "java",
      "name": "Java"
    },
    {
      "code": "OneSignal.setEmail(\"example@domain.com\");",
      "language": "swift",
      "name": "Swift"
    },
    {
      "code": "[OneSignal setEmail:@\"example@domain.com\"];",
      "language": "objectivec",
      "name": "Objective-C"
    },
    {
      "code": "OneSignal.SetEmail(\"example@domain.com\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.setEmail(\"example@domain.com\");",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.setEmail(\"example@domain.com\");",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setEmail(\"example@domain.com\");",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.Current.SetEmail(\"example@domain.com\");",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***email authentication token*** and send it to your app or website.
[block:callout]
{
  "type": "warning",
  "title": "External User Id Setup",
  "body": "**Recommendation**: call [`setExternalUserId`](doc:external-user-ids) again within the `setEmail` callback to link the records together."
}
[/block]
# Logout Email

## `logoutEmail` Method

If your app or website implements logout functionality, you can call `logoutEmail` to dissociate the email from the device:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.logoutEmail();\n});",
      "language": "javascript",
      "name": "Web (js)"
    },
    {
      "code": "OneSignal.logoutEmail();",
      "language": "java",
      "name": "Java"
    },
    {
      "code": "OneSignal.logoutEmail();",
      "language": "swift",
      "name": null
    },
    {
      "code": "[OneSignal logoutEmail]",
      "language": "objectivec",
      "name": null
    },
    {
      "code": "OneSignal.LogoutEmail (() => {\n    // Successfully logged out of email\n}, (error) => {\n    // Encountered error logging out of email\n});",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.logoutEmail(function(successResponse) {\n    //Successfully logged out of email\n}, function(error) {\n    //Failed to log out of email\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "await OneSignal.shared.logoutEmail();",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.logoutEmail(function(successResponse) {\n    //Successfully logged out of email\n}, function(error) {\n    //Failed to log out of email\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.Current.LogoutEmail();\n\n// Optionally, you can also use callbacks\nOneSignal.Current.LogoutEmail(() => {\n  //handle success\n}, (error) => {\n  //handle failure\n});\n",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

# Email Subscription Observer
Tracks changes to email subscriptions (for example, if the user sets their email, or logs out). In order to subscribe to email subscription changes, you can implement the following:

## `emailSubscriptionChanged` Event
** WebSDK only** 
[block:parameters]
{
  "data": {
    "h-0": "Event Object Property",
    "h-1": "Type",
    "0-0": "`email`",
    "0-1": "`string`"
  },
  "cols": 2,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.on(\"emailSubscriptionChanged\", event => {\n   const { email } = event;\n   console.log(\"email: \", email);\n});",
      "language": "javascript"
    }
  ]
}
[/block]
##`addEmailSubscriptionObserver` Method

**Mobile App only**
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.addEmailSubscriptionObserver(subscriptionObserver);\n\n//Now, whenever the email subscription changes, this method will be called:\n\nOSEmailSubscriptionObserver subscriptionObserver = new OSEmailSubscriptionObserver() {\n   @Override\n   public void onOSEmailSubscriptionChanged(OSEmailSubscriptionStateChanges stateChanges) {\n   }\n};",
      "language": "java",
      "name": "Java"
    },
    {
      "code": "OneSignal.add(self as OSEmailSubscriptionObserver)\n\n//Now, whenever the email subscription changes, this method will be called:\n\nfunc onOSEmailSubscriptionChanged(_ stateChanges: OSEmailSubscriptionStateChanges!) { \n    \n}",
      "language": "swift",
      "name": null
    },
    {
      "code": "[OneSignal addEmailSubscriptionObserver:self];\n\n//Now, whenever the email subscription changes, this method will be called:\n\n-(void)onOSEmailSubscriptionChanged:(OSEmailSubscriptionStateChanges *)stateChanges {\n    \n}",
      "language": "objectivec",
      "name": null
    },
    {
      "code": "void Start() {\n    OneSignal.emailSubscriptionObserver += OneSignal_emailSubscriptionObserver;\n}\n\n//Now, whenever the email subscription changes, this method will be called:\n\nprivate void OneSignal_emailSubscriptionObserver(OSEmailSubscriptionStateChanges stateChanges) {\n    string newEmailAddress = stateChanges.to.emailAddress;\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "// Requires React Native SDK 4.x\nOneSignal.addEmailSubscriptionObserver((event) => {\n    console.log(\"OneSignal: email subscription changed: \", event);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "//Requires Flutter SDK 3.x\nOneSignal.shared.setEmailSubscriptionObserver(\n        (OSEmailSubscriptionStateChanges changes) {\n      print(\"OneSignal: email subscription changed: ${changes.jsonRepresentation()}\");\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addEmailSubscriptionObserver(function(stateChanges) {\n    //Email subscription state changed\n    let newEmailAddress = stateChanges.to.emailAddress;\n    let newUserId = stateChanges.to.emailUserId;\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "//Currently not available\n",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]
## `getEmailId` Method

**Web only** - Returns a `Promise` that resolves to the stored OneSignal Player ID of the Email Record if one is set using the `setEmail` method. Otherwise the Promise resolves to `null`. If the user isn't already subscribed, this function will resolve to `null` immediately. 

Once created, the Email Record Player ID will not change. If the user unsubscribes from web push, for example by clearing their browser data, you should call `setEmail` with the same email as before to maintain the same Email Record Player ID and tie it to the new Push Player ID. 

Callback function sets the first parameter to the stored Email Record's OneSignal Player ID if one is set, otherwise the first parameter is set to null.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.getEmailId(function(emailId) {\n    console.log(\"OneSignal Email ID:\", emailId);\n    // (Output) OneSignal Email ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    \n  });\n});\n// Both examples are valid\nOneSignal.push(function() {\n  OneSignal.getEmailId().then(function(emailId) {\n    console.log(\"OneSignal Email ID:\", emailId);\n    // (Output) OneSignal Email ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316    \n  });\n});",
      "language": "javascript",
      "name": "Web (js)"
    }
  ]
}
[/block]