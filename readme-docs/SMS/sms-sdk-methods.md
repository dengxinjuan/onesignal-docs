---
title: "SMS SDK Methods"
slug: "sms-sdk-methods"
excerpt: "Collect SMS Numbers through your app or website."
hidden: false
createdAt: "2021-07-14T21:08:51.146Z"
updatedAt: "2022-02-01T23:14:50.587Z"
---
If you have not done so, we always recommend updating the OneSignal SDK to the latest version to get access to the latest features:
- [Web Push Quickstart](doc:web-push-quickstart) 
- [Mobile Push Quickstart](doc:mobile-sdk-setup) 

[block:callout]
{
  "type": "warning",
  "body": "SMS and Push subscribers will have separate OneSignal Player IDs (user records). This is to manage the case where a user opts-out of one you can still send messages to the other.",
  "title": "SMS vs Push Records"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "If there are networking issues, functions may take 30+ seconds to return. In the code examples below we provide callbacks to track when these return. \n\nMake sure to keep functions from blocking the user interface, otherwise your app may appear unresponsive to the user.",
  "title": "Note on Network Latency"
}
[/block]
# Setting the User's SMS Number

## `setSMSNumber` Method

The `setSMSNumber` method allows you to set the user's SMS number with the OneSignal SDK. [We offer several overloaded versions of this method.](doc:sdk-reference#sms) 
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.setSMSNumber(\"+11234567890\");\n});",
      "language": "javascript",
      "name": "Web-JavaScript"
    },
    {
      "code": "OneSignal.setSMSNumber(\"+11234567890\");",
      "language": "java"
    },
    {
      "code": "OneSignal.setSMSNumber(\"+11234567890\")",
      "language": "kotlin",
      "name": null
    },
    {
      "code": "OneSignal.setSMSNumber(\"+11234567890\")",
      "language": "swift"
    },
    {
      "code": "[OneSignal setSMSNumber:@\"+11234567890\"];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.setSMSNumber(\"+11234567890\");",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setSMSNumber(smsNumber: \"+11234567890\")",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setSMSNumber(\"+11234567890\");",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]
If you have a backend server, we strongly recommend using [Identity Verification](doc:identity-verification) with your users. Your backend can generate an ***SMS authentication token*** and send it to your app or website.

# Logout Number

## `logoutSMSNumber` Method

If your app or website implements logout functionality, you can call `logoutSMSNumber` to dissociate the SMS from the device:
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.logoutSMS();\n});",
      "language": "javascript",
      "name": "Web-JavaScript"
    },
    {
      "code": "OneSignal.logoutSMSNumber();",
      "language": "java"
    },
    {
      "code": "OneSignal.logoutSMSNumber()",
      "language": "swift"
    },
    {
      "code": "[OneSignal logoutSMSNumber];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.logoutSMSNumber();",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.logoutSMSNumber()",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.logoutSMSNumber();",
      "language": "javascript",
      "name": "Cordova/Ionic"
    }
  ]
}
[/block]

# SMS Subscription Observer
The [sms subscription observer](doc:sdk-reference#sms) tracks changes to SMS subscriptions (ie. the user sets their SMS number or logs out). In order to subscribe to SMS subscription changes you can implement the following:

## `smsSubscriptionChanged` Event

** WebSDK only **
[block:parameters]
{
  "data": {
    "h-0": "Event Object Property",
    "h-1": "Type",
    "0-0": "`sms`",
    "0-1": "`string` e.g: \"+12149874829\""
  },
  "cols": 2,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.on(\"smsSubscriptionChanged\", event => {\n   const { sms } = event;\n   console.log(\"sms: \", sms);\n});",
      "language": "javascript"
    }
  ]
}
[/block]
## `addSMSSubscriptionObserver` Method

**Mobile App only** 
[block:code]
{
  "codes": [
    {
      "code": "  OneSignal.addSMSSubscriptionObserver(stateChanges -> {\n  \t// Work with state changes          \n  });",
      "language": "java"
    },
    {
      "code": "[OneSignal addSMSSubscriptionObserver:self];",
      "language": "objectivec"
    },
    {
      "code": "OneSignal.add(self as OSSMSSubscriptionObserver)",
      "language": "swift"
    },
    {
      "code": "OneSignal.addSMSSubscriptionObserver((event) => {\n  console.log(\"OneSignal: sms subscription changed: \", event);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setSMSSubscriptionObserver((OSSMSSubscriptionStateChanges changes) {\n});",
      "language": "javascript",
      "name": "Flutter"
    }
  ]
}
[/block]
Now, whenever the sms subscription changes, this method will be called:
[block:code]
{
  "codes": [
    {
      "code": "OSSMSSubscriptionObserver subscriptionObserver = new OSSMSSubscriptionObserver() {\n   @Override\n   public void  public void onSMSSubscriptionChanged(OSSMSSubscriptionStateChanges stateChanges) {\n   }\n};",
      "language": "java"
    },
    {
      "code": "-(void)onOSSMSSubscriptionChanged:(OSSMSSubscriptionStateChanges *)stateChanges {\n    \n}",
      "language": "objectivec"
    },
    {
      "code": "func onOSSMSSubscriptionChanged(_ stateChanges: OSSMSSubscriptionStateChanges!) { \n    \n}",
      "language": "swift"
    }
  ]
}
[/block]
## `getSMSId` Method

**Web only** - Get the OneSignal Player ID associated with the SMS Phone Number Record.
[block:code]
{
  "codes": [
    {
      "code": "OneSignal.push(function() {\n  OneSignal.getSMSId();\n});",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]