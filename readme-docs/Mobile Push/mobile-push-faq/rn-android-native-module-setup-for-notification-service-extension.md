---
title: "RN Native Module Setup"
slug: "rn-android-native-module-setup-for-notification-service-extension"
hidden: false
createdAt: "2021-02-12T22:43:17.760Z"
updatedAt: "2021-03-16T20:18:18.687Z"
---
This guide shows how to pass data from the Android Notification Service Extension Native Java class to React Native.

This follows upon concepts listed in the React Native Docs: 

- Native Android Modules: https://reactnative.dev/docs/native-modules-android
- Native iOS Modules: https://reactnative.dev/docs/native-modules-ios

Jump to:
- [Android Notification Service Extension Module](#android-notification-service-extension-module)
- [iOS Notification Service Extension Module](#ios-notification-service-extension-module)

# Android Notification Service Extension Module

Let's create a native module, `NotificationServiceExtensionModule`, that will allow you to pass Notification Data received in the Android’s Notification APIs to JavaScript while the app is running but not in focus. 
[block:callout]
{
  "type": "info",
  "title": "Requirements",
  "body": "You must have setup the [Android Notification Service Extension](https://documentation.onesignal.com/docs/service-extensions#android-notification-extender-service) before continuing with this integration."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Will not work if app is not running in the background or foreground.",
  "body": "If the app is swiped away, the React Native Module will not be initialized so the notification data within the NotificationServiceExtension cannot bridge into React Native."
}
[/block]
## Create a Notification Service Extension Module

Create the `NotificationServiceExtensionModule.java` Java file inside `android/app/src/main/java/com/your-app-name/` folder. This Java file will contain your native module Java class.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/37cdc5e-Screen_Shot_2021-02-12_at_2.31.05_PM.png",
        "Screen Shot 2021-02-12 at 2.31.05 PM.png",
        3560,
        2244,
        "#333536"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Add the following code:
[block:code]
{
  "codes": [
    {
      "code": "package com.your-app-name; // replace com.your-app-name with your app’s name\n\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\nimport java.util.Map;\nimport java.util.HashMap;\nimport android.util.Log;\n\npublic class NotificationServiceExtensionModule extends ReactContextBaseJavaModule {\n    NotificationServiceExtensionModule(ReactApplicationContext context) {\n        super(context);\n    }\n\n    @Override\n    public String getName() {\n        return \"NotificationServiceExtensionModule\";\n    }\n\n    @ReactMethod\n    public void createNotificationServiceExtensionEvent(String name) {\n        Log.d(\"NotificationServiceExtensionModule\", \"Create event called with name: \" + name);\n    }\n    \n}",
      "language": "java"
    }
  ]
}
[/block]
## Register the Module (Android Specific)

Add your Native Module to `ReactPackage` by creating a new Java Class named `MyAppPackage.java` that implements `ReactPackage` inside the `android/app/src/main/java/com/your-app-name/` folder:

Then add the following content:
[block:code]
{
  "codes": [
    {
      "code": "package com.your-app-name; // replace your-app-name with your app’s name\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class MyAppPackage implements ReactPackage {\n\n    @Override\n    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n        return Collections.emptyList();\n    }\n\n    @Override\n    public List<NativeModule> createNativeModules(\n            ReactApplicationContext reactContext) {\n        List<NativeModule> modules = new ArrayList<>();\n\n        modules.add(new NotificationServiceExtensionModule(reactContext));\n\n        return modules;\n    }\n\n}",
      "language": "java"
    }
  ]
}
[/block]
To register the `NotificationServiceExtensionModule` package, you must add `MyAppPackage` to the list of packages returned in ReactNativeHost's `getPackages()` method. Open up your `MainApplication.java` file, which can be found in the following path: `android/app/src/main/java/com/your-app-name/MainApplication.java`

Locate ReactNativeHost’s `getPackages()` method and add your package to the packages list `getPackages()` returns:
[block:code]
{
  "codes": [
    {
      "code": "@Override\n  protected List<ReactPackage> getPackages() {\n    @SuppressWarnings(\"UnnecessaryLocalVariable\")\n    List<ReactPackage> packages = new PackageList(this).getPackages();\n    // below MyAppPackage is added to the list of packages returned\n    packages.add(new MyAppPackage());\n    return packages;\n  }",
      "language": "java"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0e44ef8-Screen_Shot_2021-02-12_at_2.53.33_PM.png",
        "Screen Shot 2021-02-12 at 2.53.33 PM.png",
        3648,
        2332,
        "#363738"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
## Sending Events to Javascript

The below instructions pick up from the React Native Docs: https://reactnative.dev/docs/native-modules-android#sending-events-to-javascript

Update the `NotificationServiceExtensionModule.java` to include the event emitter
[block:code]
{
  "codes": [
    {
      "code": "package com.your-app-name; // replace your-app-name with your app’s name\n\nimport androidx.annotation.Nullable;\nimport com.facebook.react.bridge.NativeModule;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\nimport java.util.Map;\nimport java.util.HashMap;\nimport android.util.Log;\n\nimport com.facebook.react.modules.core.DeviceEventManagerModule;\nimport com.facebook.react.bridge.WritableMap;\nimport com.facebook.react.bridge.Arguments;\n\n\npublic class NotificationServiceExtensionModule extends ReactContextBaseJavaModule {\n    public static NotificationServiceExtensionModule instance;\n\n    NotificationServiceExtensionModule(ReactApplicationContext context) {\n        super(context);\n        instance = this;\n    }\n\n    @Override\n    public String getName() {\n        return \"NotificationServiceExtensionModule\";\n    }\n\n    @ReactMethod\n    public void createNotificationServiceExtensionEvent(String name) {\n        Log.d(\"NotificationServiceExtensionModule\", \"Create event called with name: \" + name);\n    }\n\n    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {\n        reactContext\n                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)\n                .emit(eventName, params);\n    }\n\n    public void emitNotificationEvent() {\n        Log.i(\"OneSignalExample\", \"Emit Notification Event\");\n        WritableMap params = Arguments.createMap();\n        params.putString(\"eventProperty\", \"someValue\");\n        sendEvent(getReactApplicationContext(), \"NotificationEvent\", params);\n    }\n}",
      "language": "java"
    }
  ]
}
[/block]
Update the `NotificationServiceExtension.java` file to add:
[block:code]
{
  "codes": [
    {
      "code": "package com.your-app-name; // replace your-app-name with your app’s name\n\nimport android.content.Context;\nimport android.util.Log;\nimport org.json.JSONObject;\n\nimport com.onesignal.OSNotification;\nimport com.onesignal.OSMutableNotification;\nimport com.onesignal.OSNotificationReceivedEvent;\nimport com.onesignal.OneSignal.OSRemoteNotificationReceivedHandler;\n\nimport com.your-app-name.NotificationServiceExtensionModule;\n\n\n@SuppressWarnings(\"unused\")\npublic class NotificationServiceExtension implements OSRemoteNotificationReceivedHandler {\n\n    @Override\n    public void remoteNotificationReceived(Context context, OSNotificationReceivedEvent notificationReceivedEvent) {\n        OSNotification notification = notificationReceivedEvent.getNotification();\n\n        // Example of modifying the notification's accent color\n        OSMutableNotification mutableNotification = notification.mutableCopy();\n        mutableNotification.setExtender(builder -> builder.setColor(context.getResources().getColor(R.color.colorPrimary)));\n\n        JSONObject data = notification.getAdditionalData();\n        Log.i(\"OneSignalExample\", \"Received Notification Data: \" + data);\n\n        if (NotificationServiceExtensionModule.instance != null ) {\n            NotificationServiceExtensionModule.instance.emitNotificationEvent();\n        }\n\n        // If complete isn't call within a time period of 25 seconds, OneSignal internal logic will show the original notification\n        // To omit displaying a notification, pass `null` to complete()\n        notificationReceivedEvent.complete(mutableNotification);\n    }\n}",
      "language": "java"
    }
  ]
}
[/block]
In your Javascript `App.js` file include:
[block:code]
{
  "codes": [
    {
      "code": "// Used to access data from NotificationServiceExtension\nimport { NativeEventEmitter, NativeModules } from 'react-native';\n\n  // sending events to Javascript: https://reactnative.dev/docs/native-modules-android#sending-events-to-javascript \n  const eventEmitter = new\n  NativeEventEmitter(NativeModules.NotificationServiceExtensionModule);\n  this.eventListener = eventEmitter.addListener('NotificationEvent', (event) => {\n    console.log(\"NotificationEvent Received In JS: \", event.eventProperty)// \"someValue\"\n  });",
      "language": "javascript"
    }
  ]
}
[/block]
----

# iOS Notification Service Extension Module

Let's create a native module, `NotificationServiceExtensionModule`, that will allow you to pass Notification Data received in the iOS's Notification APIs to JavaScript while the app is running but not in focus. 
[block:callout]
{
  "type": "info",
  "title": "Requirements",
  "body": "You must have setup the iOS Notification Service Extension as directed in the [React Native & Expo SDK Setup](doc:react-native-sdk-setup)  guide you followed when adding OneSiganl before continuing with this integration."
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Will not work if app is not running in the background or foreground.",
  "body": "If the app is swiped away, the React Native Module will not be initialized so the notification data within the NotificationServiceExtension cannot bridge into React Native."
}
[/block]
## Create a Notification Service Extension Module

In Xcode, open your app's `xcworkspace` file. Right click the main project folder and create a new Objective-C h file called `NotificationServiceExtensionModule`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43e202e-Screen_Shot_2021-03-10_at_5.22.51_PM.png",
        "Screen Shot 2021-03-10 at 5.22.51 PM.png",
        1484,
        1058,
        "#313438"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/830a644-Screen_Shot_2021-03-10_at_5.23.28_PM.png",
        "Screen Shot 2021-03-10 at 5.23.28 PM.png",
        1484,
        1058,
        "#242729"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
The `NotificationServiceExtensionModule.h` file should contain this code.
[block:code]
{
  "codes": [
    {
      "code": "#import <foundation/Foundation.h>\n\n// NotificationServiceExtensionModule.h\n#import <React/RCTBridgeModule.h>\n#import <React/RCTEventEmitter.h>\n\n@interface NotificationServiceExtensionModule : RCTEventEmitter <RCTBridgeModule>\n\n+ (NotificationServiceExtensionModule*) sharedInstance;\n- (void)emitNotificationEvent:(NSDictionary *)userInfo;\n\n\n@end",
      "language": "objectivec"
    }
  ]
}
[/block]
Within the same root project folder. Create an Objective-C `.m` file called `NotificationServiceExtensionModule`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc73c98-Screen_Shot_2021-03-10_at_5.24.55_PM.png",
        "Screen Shot 2021-03-10 at 5.24.55 PM.png",
        1484,
        1058,
        "#313438"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2991d26-Screen_Shot_2021-03-10_at_5.25.03_PM.png",
        "Screen Shot 2021-03-10 at 5.25.03 PM.png",
        1484,
        1058,
        "#2b2d2e"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a19c603-Screen_Shot_2021-03-10_at_5.25.11_PM.png",
        "Screen Shot 2021-03-10 at 5.25.11 PM.png",
        1484,
        1058,
        "#2a2d31"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
The `NotificationServiceExtensionModule.m` file should look like this:
[block:code]
{
  "codes": [
    {
      "code": "#import <Foundation/Foundation.h>\n\n// NotificationServiceExtensionModule.m\n#import \"NotificationServiceExtensionModule.h\"\n\n@implementation NotificationServiceExtensionModule\n\nstatic NotificationServiceExtensionModule* _instance = nil;\n\n\n+(NotificationServiceExtensionModule*) sharedInstance {\n//    @synchronized( _instance ) {\n//        if( !_instance ) {\n//            _instance = [[NotificationServiceExtensionModule alloc] init];\n//        }\n//    }\n    \n    return _instance;\n}\n\n// To export a module named NotificationServiceExtensionModule\nRCT_EXPORT_MODULE();\n\n- (NSArray<NSString *> *)supportedEvents\n{\n  NSLog(@\"Supported EVENTS__________________________\");\n  _instance = self;\n  return @[@\"NotificationEvent\"];\n}\n\n- (void)emitNotificationEvent:(NSDictionary *)userInfo\n{\n  NSString *eventName = userInfo[@\"aps\"];\n  [self sendEventWithName:@\"NotificationEvent\" body:@{@\"aps\": eventName}];\n}\n\n@end\n",
      "language": "objectivec"
    }
  ]
}
[/block]
## Sending Events to Javascript

Update AppDelegate to use NotificationServiceExtensionModule to send event to JavaScript

Your `AppDelegate.h` file should look something like this:
[block:code]
{
  "codes": [
    {
      "code": "#import <Foundation/Foundation.h>\n#import <EXUpdates/EXUpdatesAppController.h>\n#import <React/RCTBridgeDelegate.h>\n#import <UIKit/UIKit.h>\n\n#import <UserNotifications/UserNotifications.h>\n\n\n#import <UMCore/UMAppDelegateWrapper.h>\n\n@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, EXUpdatesAppControllerDelegate>\n\n\n@end\n",
      "language": "objectivec"
    }
  ]
}
[/block]
Your `AppDelegate.m` file should implement the `didReceiveRemoteNotification` method like this:
[block:code]
{
  "codes": [
    {
      "code": "#import \"NotificationServiceExtensionModule.h\"\n  \n //Other AppDelegate code ...at bottom before @end place\n\n- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\nfetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\n{\n  //access NotificationServiceExtensionModule emitNotificationEvent method\n  [NotificationServiceExtensionModule.sharedInstance emitNotificationEvent:userInfo ];\n  completionHandler(UIBackgroundFetchResultNoData);\n}\n",
      "language": "objectivec"
    }
  ]
}
[/block]
In your Javascript `App.js` file include (same as the Android setup):
[block:code]
{
  "codes": [
    {
      "code": "// Used to access data from NotificationServiceExtension\nimport { NativeEventEmitter, NativeModules } from 'react-native';\n\n   // sending events to Javascript: https://reactnative.dev/docs/native-modules-android#sending-events-to-javascript \n    const eventEmitter = new NativeEventEmitter(NativeModules.NotificationServiceExtensionModule);\n    this.eventListener = eventEmitter.addListener('NotificationEvent', (event) => {\n      console.log(\"NotificationEvent Received In JS: \", event.eventProperty) // \"someValue\"\n    });",
      "language": "javascript"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Done!",
  "body": "Make sure to send push with `content_available` to wake the app when it is in the background."
}
[/block]
----