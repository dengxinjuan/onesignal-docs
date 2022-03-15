---
title: "In-App Message SDK Methods"
slug: "iam-sdk-methods"
excerpt: "OneSignal Mobile SDK Methods for In-App Messages"
hidden: false
createdAt: "2021-07-14T19:57:20.508Z"
updatedAt: "2021-09-02T22:39:17.775Z"
---
# In-App Triggers

Triggers are events that you fire to show In-App Messages within your app. They are created within the OneSignal Dashboard.

Every time you add or remove a trigger with the below methods, the OneSignal SDK will evaluate if an In-App Message should be shown based on the conditions set on it when it was created in the OneSignal Dashboard.

Triggers are reset each time your app is closed, so make sure to set them again when starting your app if you need any of them to be persistent.

## `addTrigger` Method

Add a trigger. May show an In-App Message if its trigger conditions were met.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`key`",
    "0-1": "String, NSString",
    "0-2": "Key for the trigger.",
    "1-0": "`value`",
    "1-1": "Object, id\n*(String or number recommended)*",
    "1-2": "Value for the trigger.\nObject passed in will be converted to a string.",
    "h-3": "",
    "0-3": "",
    "1-3": ""
  },
  "cols": 3,
  "rows": 2
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.addTrigger(\"level\", 5);",
      "language": "java"
    },
    {
      "code": "OneSignal.addTrigger(\"prompt_ios\", withValue: \"true\");",
      "language": "swift"
    },
    {
      "code": "[OneSignal addTrigger:@\"product\" withVaue:@\"aggieTee\"]",
      "language": "objectivec"
    },
    {
      "code": "// Add a single trigger\nOneSignal.AddTrigger(\"key\", \"value\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.addTrigger(\"level\", 5);",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addTrigger(\"level\", 5);\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.shared.addTrigger(\"level\", 5);\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.Current.AddTrigger(\"trigger_1\", \"one\");\n\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "--Currently IAM not available for Corona",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "//Currently IAM not available for Web, let us know your interested!",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]

## `addTriggers` Method

Add a map of triggers. May show an In-App Message if its trigger conditions were met.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "Map<String, Object>, NSDictionary<NSString *, id>",
    "0-0": "`triggers`",
    "0-2": "Allows you to set multiple trigger key/value pairs simultaneously.",
    "h-3": "",
    "0-3": ""
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "HashMap<String, Object> testTriggers = new HashMap<>();\ntestTriggers.put(\"test1\", \"value1\");\ntestTriggers.put(\"test2\", \"value2\");\n\nOneSignal.addTriggers(testTriggers);",
      "language": "java"
    },
    {
      "code": "OneSignal.addTriggers([\"checkoutStep\":\"3\", \"product\":\"aggieHat\"])",
      "language": "swift"
    },
    {
      "code": "NSDictionary *triggers = @{\n\t@\"checkoutStep\": @\"3\",\n\t@\"product\": @\"aggieHat\"\n};\n\n[OneSignal addTriggers:triggers]\nNSDictionary *triggers = @{\n\t@\"checkoutStep\": @\"3\",\n\t@\"product\": @\"aggieHat\"\n};\n\n[OneSignal addTriggers:triggers]",
      "language": "objectivec"
    },
    {
      "code": "Dictionary<string, object> triggers = new Dictionary<string, object>();\ntriggers.Add(\"trigger_2\", \"two\");\ntriggers.Add(\"trigger_3\", \"three\");\nOneSignal.Current.AddTriggers(triggers);",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.addTriggers({\"isLonghorn\":\"true\", \"clicked\":\"true\"});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.addTriggers({\"isAggie\":\"true\", \"clicked\":\"true\"});\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "Map<String, Object> triggers = new Map<String, Object>();\ntriggers[\"trigger_2\"] = \"two\";\ntriggers[\"trigger_3\"] = \"three\";\nOneSignal.shared.addTriggers(triggers);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "Dictionary<string, object> triggers = new Dictionary<string, object>();\ntriggers.Add(\"trigger_2\", \"two\");\ntriggers.Add(\"trigger_3\", \"three\");\nOneSignal.Current.AddTriggers(triggers);",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "--Currently IAM not available for Corona",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "//Currently IAM not available for Web, let us know your interested!",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]

## `removeTriggerForKey` Method

Removes a single trigger for the given key. May show an In-App Message if its trigger conditions were met.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`key`",
    "0-1": "String, NSString",
    "0-2": "Key for trigger to remove.",
    "h-3": "",
    "0-3": ""
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.removeTriggerForKey(\"level\");",
      "language": "java"
    },
    {
      "code": "OneSignal.removeTriggerForKey(\"product\");",
      "language": "swift"
    },
    {
      "code": "[OneSignal removeTriggerForKey:@\"product\"]",
      "language": "objectivec"
    },
    {
      "code": "// Delete a trigger\nOneSignal.RemoveTriggerForKey(\"key\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.removeTriggerForKey(\"isLonghorn\");\n",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.removeTriggerForKey(\"isAggie\");\n",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.shared.removeTriggerForKey(\"isAggie\");\n",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "OneSignal.Current.RemoveTriggerForKey(\"trigger_2\");\n",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "--Currently IAM not available for Corona",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "//Currently IAM not available for Web, let us know your interested!",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]
## `removeTriggersForKeys` Method

Removes a list of triggers based on a collection of keys. May show an In-App Message if its trigger conditions were met.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`keys`",
    "0-1": "Collection<String>",
    "0-2": "Removes a collection of triggers from their keys."
  },
  "cols": 3,
  "rows": 1
}
[/block]
## `getTriggerValueForKey` Method

Gets a trigger value for a provided trigger key.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`key`",
    "0-1": "String, NSString",
    "0-2": "Returns a single trigger value for the given key,\nif it exists, otherwise returns `null` or `nil` in iOS."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Return Type",
    "h-1": "Description",
    "h-2": "Description",
    "0-0": "Object (Android) \nid (iOS)\nString (Unity)",
    "0-1": "Value if added with `addTrigger`, or `null`/`nil` (iOS) if never set."
  },
  "cols": 2,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "Object triggerValue;\ntriggerValue = OneSignal.getTriggerValueForKey(\"level\");",
      "language": "java"
    },
    {
      "code": "OneSignal.getTriggerValueForKey(\"product\");",
      "language": "swift"
    },
    {
      "code": "[OneSignal getTriggerValueForKey:@\"product\"]",
      "language": "objectivec"
    },
    {
      "code": "// Get the current value to a trigger by key\nvar triggerValue = OneSignal.GetTriggerValueForKey(\"key\");",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.getTriggerValueForKey(\"isLonghorn\", function (value) {\n  console.log(\"isLonghorn:\", value)\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.getTriggerValueForKey(\"isAggie\", function (value) {\n  console.log(\"isAggie:\", value)\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "Object triggerValue = await OneSignal.shared.getTriggerValueForKey(\"myTrigger\");\nprint(\"myTrigger key trigger value: \" + triggerValue);",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "object value = OneSignal.Current.GetTriggerValueForKey(\"trigger_1\");\nDebug.WriteLine(\"trigger_1 value: \" + value);",
      "language": "csharp",
      "name": "Xamarin"
    },
    {
      "code": "--Currently IAM not available for Corona",
      "language": "lua",
      "name": "Corona"
    },
    {
      "code": "//Currently IAM not available for Web, let us know your interested!",
      "language": "javascript",
      "name": "Web-JavaScript"
    }
  ]
}
[/block]

# Prevent In-App From Showing Temporarily

## `pauseInAppMessages` Method

Allows you to temporarily pause all In-App Messages. You may want to do this while the user is engaged in an activity that you don't want a message to interrupt (such as watching a video).
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`pause`",
    "0-1": "Boolean",
    "0-2": "To pause, set `true`.\nTo resume, set `false`."
  },
  "cols": 3,
  "rows": 1
}
[/block]

#In-App Message Click Handler

## `setInAppMessageClickHandler` Method

Sets an In-App Message opened handler. The instance will be called when an In-App Message action is tapped on.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "0-2": "Instance to a class implementing this interference.",
    "h-2": "Description",
    "h-1": "Type",
    "0-0": "`handler`",
    "0-1": "`OSInAppMessageClickHandler` (Android)\n`OSInAppMessageClickBlock` (iOS)"
  },
  "cols": 3,
  "rows": 1
}
[/block]

### In-App Message Click Handler

Use to process an In-App Message the user just tapped on.
[block:parameters]
{
  "data": {
    "0-0": "`result`",
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-1": "`OSInAppMessageAction`",
    "0-2": "Details about the In-App Message action element (button or image) that was tapped on."
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setInAppMessageClickHandler(new OneSignal.OSInAppMessageClickHandler() {\n    @Override\n    public void inAppMessageClicked(OSInAppMessageAction result) {\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"getClickUrl: \" + result.getClickUrl());\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"getClickName: \" + result.getClickName());\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"getUrlTarget: \" + String.valueOf(result.getUrlTarget()));\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"getOutcomes: \" + String.valueOf(result.getOutcomes()));\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"getPrompts: \" + String.valueOf(result.getPrompts()));\n        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"doesCloseMessage: \" + String.valueOf(result.doesCloseMessage()));\n    }\n});",
      "language": "java"
    },
    {
      "code": "let inAppMessageClickBlock: OSInAppMessageClickBlock = { action in\n    if let clickName = action.clickName {\n        print(\"clickName string: \", clickName)\n    }\n    if let clickUrl = action.clickUrl {\n        print (\"clickUrl string: \", clickUrl)\n    }\n    if let firstClick = action.firstClick {\n        print(\"firstClick bool: \", firstClick)\n    }\n    if let closesMessage = action.closesMessage {\n        print(\"closesMessage bool: \", closesMessage)\n    }\n}\n\nOneSignal.setInAppMessageClickHandler(inAppMessageClickBlock)",
      "language": "swift"
    },
    {
      "code": "id inAppMessageClickBlock = ^(OSInAppMessageAction *action) {\n        NSString *message = [NSString stringWithFormat:@\"Click Action Occurred: clickName:%@ clickUrl:%@ firstClick:%i closesMessage:%i\",\n                             action.clickName,\n                             action.clickUrl,\n                             action.firstClick,\n                             action.closesMessage];\n        [OneSignal onesignal_Log:ONE_S_LL_DEBUG message:message];\n    };\n\n[OneSignal setInAppMessageClickHandler:inAppMessageClickBlock]",
      "language": "objectivec"
    },
    {
      "code": "public static void HandleInAppMessageClicked(OSInAppMessageAction action) {\n    String logInAppClickEvent = \"In-App Message opened with action.clickName \" + action.clickName;\n    print(logInAppClickEvent);\n    extraMessage = logInAppClickEvent;\n}",
      "language": "csharp",
      "name": "Unity (C#)"
    },
    {
      "code": "OneSignal.setInAppMessageClickHandler(event => {\n\tconsole.log(\"OneSignal IAM clicked:\", event);\n});",
      "language": "javascript",
      "name": "React Native"
    },
    {
      "code": "OneSignal.shared.setInAppMessageClickedHandler((OSInAppMessageAction action) {\n     print('OneSignal: IAM clicked action: ${action}');\n});",
      "language": "javascript",
      "name": "Flutter"
    },
    {
      "code": "// Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal\nwindow.plugins.OneSignal.setInAppMessageClickHandler(function(result){\n  \tlet firstClick = result.first_click;\n  \tlet closesMessage = result.closes_message;\n  \tlet clickUrl = result.click_url;\n  \tlet clickName = result.click_name;\n});",
      "language": "javascript",
      "name": "Cordova/Ionic"
    },
    {
      "code": "OneSignal.Current.StartInit(\"b0f7f966-d8ec-11e4-bed1-df8f05je55ba\").Settings(new Dictionary<string, bool>() {\n            { IOSSettings.kOSSettingsKeyAutoPrompt, false },\n            { IOSSettings.kOSSettingsKeyInAppLaunchURL, true } })\n           .HandleInAppMessageClicked((action) =>\n           {\n              // Example IAM click handling for IAM elements\n              Debug.WriteLine(\"HandledInAppMessageClicked: {0}\", action.clickName);\n           })\n           .EndInit();",
      "language": "csharp",
      "name": "Xamarin"
    }
  ]
}
[/block]

## `OSInAppMessageAction` Class

Details about the In-App Message action element (button or image) that was tapped on.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method/Property",
    "h-2": "Description",
    "0-0": "`String`\n`NSString`",
    "0-1": "`getClickName()`\n`clickName`\n`click_name`",
    "0-2": "An optional click name defined for the action element.\n`null` or `nil` (iOS) if not set",
    "1-0": "`String`\n`NSURL`",
    "1-1": "`getClickUrl()`\n`clickUrl`\n`click_url `",
    "1-2": "An optional URL that opens when the action takes place.\n`null` or `nil` (iOS) if not set.",
    "2-0": "`boolean`\n`BOOL`",
    "2-1": "`isFirstClick()`\n`firstClick`\n`first_click `",
    "2-2": "`true` if this is the first time the user has pressed\nany action on the In-App Message.",
    "3-0": "`boolean`\n`BOOL`",
    "3-1": "`doesCloseMessage()`\n`closesMessage`\n`closes_message `",
    "3-2": "`true` = the In-App Message will animate off the screen.\n \n`false` = the In-App Message will stay on screen until the user dismisses it.",
    "4-1": "`getOutcomes()`\n`outcomes`",
    "5-1": "`getPrompts()`\n`prompts`",
    "6-1": "`getTags()`\n`tags`",
    "7-1": "`getUrlTarget()`\n`urlTarget`\n`url_target `",
    "7-2": "Determines where the URL is opened, ie.\n\n*Mainly useful for debugging*",
    "6-2": "Tags for action.\n\n*Mainly useful for debugging*",
    "5-2": "Permission prompts.\n\n*Mainly useful for debugging*",
    "4-2": "Outcome for action.\n\n*Mainly useful for debugging*",
    "4-0": "`List<OSInAppMessageOutcome>`\n`NSArray<OSInAppMessageOutcome *>`",
    "5-0": "`List<OSInAppMessagePrompt>`\n`OSInAppMessagePrompt`",
    "6-0": "`OSInAppMessageTag`",
    "7-0": "`OSInAppMessageActionUrlType`"
  },
  "cols": 3,
  "rows": 8
}
[/block]
# In-App Message Lifecycle Handler

Requires iOS SDK version 3.7.0+
Requires Android SDK version 4.6.0+

The In-App Message Lifecycle Handler gives insight into the display lifecycle of In-App Messages. The Lifecycle Handler has four lifecycle methods that you can override in order to run code at particular times in this process. 

## `setInAppMessageLifecycleHandler` Method

Sets an In-App Message lifecycle handler.
[block:parameters]
{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "`handler` (Android)\n`delegate` (iOS)",
    "0-1": "`OSInAppMessageLifecycleHandler`",
    "0-2": "Instance of a class implementing this abstract class/protocol."
  },
  "cols": 3,
  "rows": 1
}
[/block]
The `OSInAppMessageLifecycleHandler` Class/Protocol includes the following optional methods.
[block:parameters]
{
  "data": {
    "0-0": "`onWillDisplayInAppMessage(OSInAppMessage message)`",
    "1-0": "`onDidDisplayInAppMessage(OSInAppMessage message)`",
    "2-0": "`onWillDismissInAppMessage(OSInAppMessage message)`",
    "3-0": "`onDidDismissInAppMessage(OSInAppMessage message)`",
    "0-1": "This method will be called after the In-App Message content has been loaded, but before it has been displayed. \nIf the content load fails, this method will not be called.",
    "1-1": "This method will be called after the In-App Message is displayed on screen.",
    "2-1": "This method will be called when an an event to dismiss the In-App Message is fired.\nThis method is also called for auto-dismissed In-App Messages.",
    "3-1": "This method will be called when the In-App Message is completely dismissed from the screen.",
    "h-0": "Method",
    "h-1": "Details"
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "OneSignal.setInAppMessageLifecycleHandler(\n    new OSInAppMessageLifecycleHandler() {\n\n        // Add one or more of the following optional lifecycle methods\n\n        @Override\n        public void onWillDisplayInAppMessage(OSInAppMessage message) {\n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"OSInAppMessageLifecycleHandler: onWillDisplay Message: \" + message.getMessageId());\n        }\n\n        @Override\n        public void onDidDisplayInAppMessage(OSInAppMessage message) {\n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"OSInAppMessageLifecycleHandler: onDidDisplay Message: \" + message.getMessageId();\n        }\n\n        @Override   \n        public void onWillDismissInAppMessage(OSInAppMessage message) { \n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"OSInAppMessageLifecycleHandler: onWillDismiss Message: \" + message.getMessageId());\n        }\n    \n        @Override\n        public void onDidDismissInAppMessage(OSInAppMessage message) {\n            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.VERBOSE, \"OSInAppMessageLifecycleHandler: onDidDismiss Message: \" + message.getMessageId());\n        }    \n});",
      "language": "java"
    },
    {
      "code": "// AppDelegate.h\n// Add OSInAppMessageLifecycleHandler as an implemented protocol of the class that will handle the In-App Message lifecycle events.\n@interface AppDelegate : UIResponder <UIApplicationDelegate, OSInAppMessageLifecycleHandler>\n@end\n\n// AppDelegate.m\n@implementation AppDelegate\n  \n- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // Add your implementing class as the handler.  \n    [OneSignal setInAppMessageLifecycleHandler:self];\n}\n\n// Add one or more of the following optional lifecycle methods\n\n- (void)onWillDisplayInAppMessage:(OSInAppMessage *)message {\n    NSLog(@\"OSInAppMessageLifecycleHandler: onWillDisplay Message: %@\", message.messageId);\n}\n\n- (void)onDidDisplayInAppMessage:(OSInAppMessage *)message {\n    NSLog(@\"OSInAppMessageLifecycleHandler: onDidDisplay Message: %@\", message.messageId);\n}\n\n- (void)onWillDismissInAppMessage:(OSInAppMessage *)message {\n    NSLog(@\"OSInAppMessageLifecycleHandler: onWillDismiss Message: %@\", message.messageId);\n}\n\n- (void)onDidDismissInAppMessage:(OSInAppMessage *)message {\n    NSLog(@\"OSInAppMessageLifecycleHandler: onDidDismiss Message: %@\", message.messageId);\n}",
      "language": "objectivec"
    },
    {
      "code": "// AppDelegate.swift\n// Add OSInAppMessageLifecycleHandler as an implemented protocol of the class that will handle the In-App Message lifecycle events.\nclass AppDelegate: UIResponder, UIApplicationDelegate, OSInAppMessageLifecycleHandler {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n        // Add your implementing class as the handler  \n        OneSignal.setInAppMessageLifecycleHandler(self)\n    }\n\n    // Add one or more of the following optional lifecycle methods\n\n    func onWillDisplay(_ message: OSInAppMessage!) {\n        print(\"OSInAppMessageLifecycleHandler: onDidDisplay Message: \\(message.messageId)\")\n    }\n}",
      "language": "swift"
    }
  ]
}
[/block]
## `OSInAppMessage` Class

Identifiable details of an In-App Message.
[block:parameters]
{
  "data": {
    "h-0": "Type",
    "h-1": "Method/Property",
    "h-2": "Description",
    "0-0": "`String`\n`NSString`",
    "0-1": "`getMessageId()`\n`messageId`",
    "0-2": "The generated ID of the In-App Message."
  },
  "cols": 3,
  "rows": 1
}
[/block]