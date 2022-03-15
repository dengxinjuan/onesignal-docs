---
title: "iOS: Focus Modes and Interruption Levels"
slug: "ios-focus-modes-and-interruption-levels"
hidden: false
createdAt: "2021-08-10T16:38:05.119Z"
updatedAt: "2022-02-19T00:09:39.696Z"
---
Focus modes are great for reducing interruptions throughout the day. This provides more flexibility for iOS users to customize how they want to be notified and when. In iOS versions earlier than 15, users could choose to silence all calls and notifications by enabling Do Not Disturb mode. Starting in iOS 15, users are able to hone their notification preferences to fit different contexts by setting Work, Sleep, and Personal notification modes.

At times, applications will need to alert users of events that require immediate attention, such as weather emergencies or account security issues. To support these use cases, Apple introduced four interruption level options for notifications, including notifications that are time-sensitive or critical.

Interruption levels indicate the priority and delivery timing of a notification, to ‘interrupt’ the user. Up until iOS 15, Apple primarily focused on Critical notifications. Now they have expanded this to include the following four levels:

1.  **Active (default):** This matches the behavior of notifications currently. This includes sound, vibrations and causes the screen to light up upon delivery. These notifications do not break through Focus modes.
2. ** Time Sensitive:** This is similar to active notifications, with a yellow time-sensitive banner. Can breakthrough scheduled delivery and focus mode. They can break through scheduled delivery and focus modes but should be used only when a notification requires immediate attention. 
3. **Passive**: Do not require immediate attention; no sound or vibration happens. These do not break through Focus modes. 
4. **Critical:** These are delivered immediately, however require Apple’s permission. This is frequently used for severe weather, national security, and covid based announcements. Once permission is obtained you can follow the below [Critical Alerts](#critical-alerts) section to setup.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f2c2a0-image_6.png",
        "image 6.png",
        1523,
        794,
        "#e0b5a8"
      ],
      "caption": "Example. Image showing notifications that are time-sensitive."
    }
  ]
}
[/block]
# How to choose an interruption level in our Dashboard?

#### 1. Setup the OneSignal iOS SDK with the Notification Service Extension
You will need to implement the Notification Service Extension as outlined in our [Mobile Push Quickstart](doc:mobile-sdk-setup) for the SDK you use.

#### 2. Ensure you are set up to use the dashboard to send push notifications. Additionally, if you’re not familiar with sending a push message read [How to Send a Push](doc:sending-notifications)

#### 3. Navigate to Create a Push Message. When selecting your platforms, you’ll see there is a section to toggle on the Send to Apple iOS.

Here there is a section called Notification Interruption Level. Select your level. By default, it will be selected on Active. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bca900d-Apple_iOS_Settings_Block.png",
        "Apple iOS Settings Block.png",
        1986,
        2643,
        "#f4f5f6"
      ],
      "caption": "Image. Showing Send to Apple iOS Settings where you can set interruption level"
    }
  ]
}
[/block]

----

#Critical Alerts

This requires you to obtain special permission from Apple before being able to send Critical Alerts. Once you obtain this permission, you can follow the below guide to send Critical Alerts.
[block:callout]
{
  "type": "info",
  "title": "Supported iOS Versions",
  "body": "Notification Interruption Levels were introduced in iOS 15, but Critical Alerts were introduced in iOS 12. If you want to support Critical Alerts in iOS 12-14, it will require some additional code work shown below."
}
[/block]
**For iOS 15+ devices**, you can set the **Notification Interruption Level** in the dashboard or use the API `ios_interruption_level` set to `critical`.

**For iOS 12-14 devices**, you will need to handle this through the Notification Service Extension. Setup below updated thanks to [this answer by MillerMedia on stackoverflow](https://stackoverflow.com/questions/60330080/critical-alert-support-on-onesignal-not-working/60608346#60608346):

####1. Setup the OneSignal iOS SDK with the Notification Service Extension

You will need to implement the Notification Service Extension as outlined in our [Mobile Push Quickstart](doc:mobile-sdk-setup) for the SDK you use.

####2. Update OneSignal App Payload Structure for iOS

Using our [Update an app](ref:update-an-app) API, set `additional_data_is_root_payload` to `"true"` 

Example update call:
- requires your [User Auth Key](doc:accounts-and-keys#user-auth-key) and [App ID](doc:accounts-and-keys)

```
curl --include \
     --request PUT \
     --header "Content-Type: application/json" \
     --header "Authorization: Basic YOUR_USER_AUTH_KEY" \
     --data-binary "{
\"additional_data_is_root_payload\": true}" \
     https://onesignal.com/api/v1/apps/YOUR_APP_ID
```

####3. Add the Critical alerts "sound" parameter 

Critical Alerts requires the "sound" parameter to be passed as a dictionary to the API calls. In your requests, set `mutable_content` to `true` and use our `data` parameter to add your "CRITICAL" flag, like `data: {"CRITICAL": "YES"}` 

In the notification category extension, you can look for this:
[block:code]
{
  "codes": [
    {
      "code": "- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler;\n    self.bestAttemptContent = [request.content mutableCopy];\n    \n    [OneSignal didReceiveNotificationExtensionRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];\n    \n    // DEBUGGING: Uncomment the 2 lines below and comment out the one above to ensure this extension is excuting\n    //            Note, this extension only runs when mutable-content is set\n    //            Setting an attachment or action buttons automatically adds this\n    // NSLog(@\"Running NotificationServiceExtension\");\n    // self.bestAttemptContent.body = [@\"[Modified] \" stringByAppendingString:self.bestAttemptContent.body];\n  if ([request.content.userInfo[@\"CRITICAL\"] isEqualToString: @\"YES\"]) {\n    [self.bestAttemptContent setSound:[UNNotificationSound\n     criticalSoundNamed:@\"Alarm.wav\" withAudioVolume:1.0]];\n  }\n  self.contentHandler(self.bestAttemptContent);\n}",
      "language": "objectivec",
      "name": "NotificationService.m"
    },
    {
      "code": "override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n    self.receivedRequest = request;\n    self.contentHandler = contentHandler\n    bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n\n    if let bestAttemptContent = bestAttemptContent {\n        OneSignal.didReceiveNotificationExtensionRequest(self.receivedRequest, with: self.bestAttemptContent)\n      if ((request.content.userInfo[\"CRITICAL\"] as? String) == \"YES\"){\n        bestAttemptContent.sound = UNNotificationSound.defaultCriticalSound(withAudioVolume: 1.0)\n      }\n      contentHandler(bestAttemptContent)\n    }\n}",
      "language": "swift",
      "name": "NotificationService.swift"
    }
  ]
}
[/block]