---
title: "Microsoft App Center Analytics"
slug: "microsoft-app-center"
excerpt: "Integrating OneSignal into your Microsoft App Center Analytics"
hidden: true
createdAt: "2019-06-13T23:33:45.969Z"
updatedAt: "2021-03-11T18:50:55.894Z"
---
OneSignal and Microsoft have partnered up to provide an easy way to integrate push notifications and analytics into your mobile apps.

Leveraging OneSignal's `NotificationReceived`, `NotificationOpened`, and `PermissionObserver` methods, you can add [Microsoft Analytics Custom Events](https://docs.microsoft.com/en-us/appcenter/sdk/analytics/android) to track and update Notification and Subscription events as they occur.

Before Custom Events can be tracked in Microsoft, please [Enable App Center Analytics at runtime](https://docs.microsoft.com/en-us/appcenter/sdk/analytics/android#enable-or-disable-app-center-analytics-at-runtime)

## Sending Custom events

Microsoft Analytics allows you to track up to twenty properties with your Custom Events to understand the interaction between your user and the notifications they click. This is valuable for tracking additional `data` sent within the notification (like a campaign_id), the OneSignal `notification_id`, any action buttons clicked, and/or any data within the [OSNotification Object](doc:android-native-sdk#section--osnotification-).

### Tracking Mobile Notification Received and Clicked Events

#### Notification Received Event Examples

**Received:** Send an event to your analytics system from the SDKs NotificationReceived event handler when a notification is received. Keep in mind, this event only gets called if the app is open and in the foreground or background. It will not get called if the app has been swiped away.
[block:code]
{
  "codes": [
    {
      "code": "class ExampleNotificationReceivedHandler implements OneSignal.NotificationReceivedHandler {\n  @Override\n  public void notificationReceived(OSNotification notification) {\n    \n    Map<String, String> properties = new HashMap<>();\n    \n    String notification_id = notification.payload.notificationID\n    properties.put(\"notification_id\", notification_id);\n    \n    JSONObject data = notification.payload.additionalData;\n    String campaign_id;\n\t\t//Send extra data like a campaign_id\n    if (data != null) {\n      campaign_id = data.optString(\"campaign_id\", null);\n      if (campaign_id != null)\n        properties.put(\"campaign_id\", campaign_id);\n      }\n    }\n    Analytics.trackEvent(\"Notification Received\", properties);\n  }\n}\n\n",
      "language": "java"
    },
    {
      "code": "let notificationReceivedBlock: OSHandleNotificationReceivedBlock = { notification in\n  print(\"Received Notification: \\(notification!.payload.notificationID)\")\n  MSAnalytics.trackEvent(\"Notification Received\", withProperties: [\"Notification_Id\" : notification!.payload.notificationID])\n}",
      "language": "swift"
    },
    {
      "code": "^(OSNotification *notification) {\n\tNSLog(@\"Received Notification - %@ - %@\", notification.payload.notificationID, notification.payload.title);\n  MSAnalytics.trackEvent(\"Notification Received\", withProperties: [\"Notification_Id\" : notification.payload.notificationID])\n}",
      "language": "objectivec"
    }
  ]
}
[/block]
#### Notification Clicked Event Examples

**Clicked/Opened:** Send another event to your analytics system from the NotificationOpened or Action event handler when a notification is clicked.
[block:code]
{
  "codes": [
    {
      "code": "class ExampleNotificationOpenedHandler implements OneSignal.NotificationOpenedHandler {\n  @Override\n  public void notificationOpened(OSNotificationOpenResult result) {\n\n    Map<String, String> properties = new HashMap<>();\n    \n    String notification_id = result.notification.payload.notificationID\n    properties.put(\"notification_id\", notification_id);\n\n    JSONObject data = result.notification.payload.additionalData;\n    String campaign_id;\n    \n    //Send extra data like a campaign_id\n    if (data != null) {\n      campaign_id = data.optString(\"campaign_id\", null);\n      if (campaign_id != null)\n        properties.put(\"campaign_id\", campaign_id);\n      }\n    }\n    Analytics.trackEvent(\"Notification Clicked\", properties);\n  }\n}",
      "language": "java"
    },
    {
      "code": "let notificationOpenedBlock: OSHandleNotificationActionBlock = { result in\n  let payload: OSNotificationPayload = result!.notification.payload\n\n  if payload.additionalData != nil {\n     let additionalData = payload.additionalData\n     if additionalData?[\"campaign_id\"] != nil {\n        MSAnalytics.trackEvent(\"Notification Clicked\", withProperties: [\"Notification_Id\" : payload.notificationID, \"campaign_id\" : additionalData![\"campaign_id\"]])\n     } else {\n       MSAnalytics.trackEvent(\"Notification Clicked\", withProperties: [\"Notification_Id\" : payload.notificationID])\n     }\n  }\n}",
      "language": "swift"
    },
    {
      "code": "^(OSNotificationOpenedResult *result) {\n   OSNotificationPayload* payload = result.notification.payload;\n   MSAnalytics.trackEvent(\"Notification Clicked\", withProperties: [\"Notification_Id\" : payload.notificationID])\n}",
      "language": "objectivec"
    }
  ]
}
[/block]
More Examples of Event Handlers for other SDKs in our [Mobile SDK Reference](doc:mobile-sdk-reference).

----

## Tracking Mobile Subscription Events

Send a subscription event to your analytics system from the SDKs `PermissionObserver` event handler when a user subscribes.
[block:code]
{
  "codes": [
    {
      "code": "public class MainActivity extends Activity implements OSPermissionObserver {\n  protected void onCreate(Bundle savedInstanceState) {\n    OneSignal.addPermissionObserver(this);\n  }\n  \n  public void onOSPermissionChanged(OSPermissionStateChanges stateChanges) {\n    if (stateChanges.getFrom().getEnabled() &&\n        !stateChanges.getTo().getEnabled()) {\n          Analytics.trackEvent(\"Unsubscribed from push\");\n      } else {\n          Analytics.trackEvent(\"Subscribed from push\");\n    }   \n  }\n}\n\n//Make sure to hold a reference to your observable at the class level, otherwise it my not fire.",
      "language": "java"
    },
    {
      "code": "func onOSPermissionChanged(_ stateChanges: OSPermissionStateChanges!) {\n  if stateChanges.from.status == OSNotificationPermission.notDetermined {\n     if stateChanges.to.status == OSNotificationPermission.authorized {\n        MSAnalytics.trackEvent(\"User Subscribed\")\n     } else if stateChanges.to.status == OSNotificationPermission.denied {\n        MSAnalytics.trackEvent(\"User Unsubscribed\")\n     }\n  }\n  // prints out all properties\n  print(\"PermissionStateChanges: \\n\\(stateChanges)\")\n}\n\n// Output:\n/*\nThanks for accepting notifications!\nPermissionStateChanges:\nOptional(<OSSubscriptionStateChanges:\nfrom: <OSPermissionState: hasPrompted: 0, status: NotDetermined>,\nto:   <OSPermissionState: hasPrompted: 1, status: Authorized>\n>\n*/",
      "language": "swift"
    },
    {
      "code": "@interface AppDelegate : UIResponder <UIApplicationDelegate, OSPermissionObserver>\n@end\n\n@implementation AppDelegate\n  \n- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  // Add your AppDelegate as an obsserver\n  [OneSignal addPermissionObserver:self];\n}\n\n- (void)onOSPermissionChanged:(OSPermissionStateChanges*)stateChanges {\n  \n    // Example of detecting anwsering the permission prompt\n    if (stateChanges.from.status == OSNotificationPermissionNotDetermined) {\n      if (stateChanges.to.status == OSNotificationPermissionAuthorized)\n         MSAnalytics.trackEvent(\"User Subscribed\")\n      else if (stateChanges.to.status == OSNotificationPermissionDenied)\n         MSAnalytics.trackEvent(\"User Unsubscribed\")\n    }\n}",
      "language": "objectivec"
    }
  ]
}
[/block]
More Examples of Event Handlers for other SDKs in our [Mobile SDK Reference](doc:mobile-sdk-reference).

----

Azure pipelines NotificationServiceExtension setup

Seems like this is a common issue with this: https://developercommunity.visualstudio.com/t/build-ios-app-with-app-extensions/383129

The comment by Shakaib Arif seems to be the most promising: https://developercommunity.visualstudio.com/t/build-ios-app-with-app-extensions/383129#T-N512054-N1325335