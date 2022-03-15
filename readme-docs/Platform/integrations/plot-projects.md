---
title: "Plot Projects"
slug: "plot-projects"
excerpt: "OneSignal integration with Plot Projects for targeting notifications by location. Works with iOS and Android apps."
hidden: true
createdAt: "2017-10-31T23:27:18.348Z"
updatedAt: "2020-06-24T20:52:20.600Z"
---
OneSignal supports creating segments and targeting messages based on locations users visit, via an integration with [Plot Projects](https://www.plotprojects.com/) and [Radar](https://radar.io/documentation/integrations/onesignal).

For example, you may wish to send a push notification to users that have visited ‘LAX’ or ‘a Walmart in the last 7 days’:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/50d498b-segments-index.jpg",
        "segments-index.jpg",
        2500,
        1400,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
You can create segments that have many options, including:

* Trigger on geofences, polygons and/or beacons.
* Trigger on enter, exit or dwell.
* Define opening hours per location.
* Define start and end dates of the campaign.

These segments can be defined in the Plot Projects Geo Data Campaigns dashboard, once you've integrated Plot Projects.

## How to set up Location Targeting
Setting up Plot Projects will let you create Geo Data Campaigns in the Plot Projects dashboard that will track visits of your users to any geographic location.

### 1. Add Plot Projects to your app
First, add Plot Projects to your app by following their integration guide for [iOS](https://www.plotprojects.com/ios-integration-guide/) or [Android](https://www.plotprojects.com/android-integration-guide/). 

Plot Projects has also created code examples on Github for [iOS](https://github.com/Plotprojects/onesignalpoc-ios) and [Android](https://github.com/Plotprojects/onesignalpoc-android).

### 2. Forward Plot Projects geotrigger events to OneSignal
After integrating Plot Projects, you can forward geotrigger events from Plot Projects to OneSignal.

#### iOS Setup
To receive geotrigger events from Plot Projects on your <span class="label-all label-ios">iOS</span> app, add the `plotHandleGeotriggers` method to your `AppDelegate.m` file. In that method you will also call the OneSignal API in order to send the event:
[block:code]
{
  "codes": [
    {
      "code": "- (void)plotHandleGeotriggers:(PlotHandleGeotriggers*) geotriggerHandler {\n        for (PlotGeotrigger* geotrigger in geotriggerHandler.geotriggers) {\n            NSString* data = [geotrigger.userInfo objectForKey:PlotGeotriggerDataKey];\n            NSString *now = [NSString stringWithFormat:@\"%.f\",[[NSDate date] timeIntervalSince1970]];\n            [OneSignal sendTag:data value:now];\n            NSLog(@\"Sending tag pair:(%@,%@)\",data,now);\n        }\n        [geotriggerHandler markGeotriggersHandled:geotriggerHandler.geotriggers];\n}",
      "language": "objectivec"
    }
  ]
}
[/block]
The `plotHandleGeotriggers` method, presented above, sends a tag to OneSignal using the data field set in the dashboard as key and the current timestamp as value.

#### Android Setup
To receive geotrigger events from Plot Projects on your <span class="label-all label-android">Android</span> app, create a class that extends `GeotriggerHandlerReceiver`. In that class you call the OneSignal api in order to send the event.
[block:code]
{
  "codes": [
    {
      "code": "\npublic class SendTagGeotriggerHandlerReceiver extends GeotriggerHandlerReceiver {\n\n   static final String LOG_TAG = \"Send tag Handler\";\n\n   @Override\n   public List<Geotrigger> handleGeotriggers(List<Geotrigger> geotriggers) {\n\n       for (Geotrigger geotrigger : geotriggers) {\n           String data = geotrigger.getData();\n           String now = String.valueOf(System.currentTimeMillis()/1000);\n           OneSignal.sendTag(data,now);\n           Log.d(LOG_TAG, \"Sent tag \" + \"(\" + data + \", \" + now + \")\");\n       }\n       return geotriggers;\n   }\n}\n",
      "language": "java"
    }
  ]
}
[/block]
The `SendTagGeotriggerHandler`, presented above, sends a tag to OneSignal using the data field set in the dashboard as key and the current timestamp as value.

To let Android find the service, add it to `AndroidManifest.xml`
[block:code]
{
  "codes": [
    {
      "code": "<service android:name=\".SendTagHandlerReceiver\" android:exported=\"false\" />",
      "language": "xml"
    }
  ]
}
[/block]
If you are having any dependency conflicts [read about how to fix them here](troubleshooting-android#section-onesignal-dependencies).



### 3. Set up a Geo Data Campaign in the Plot Projects dashboard
Next, you can create the locations you want to track within Plot Projects. This can be a single location:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7bcf4a4-Screen_Shot_2017-10-31_at_5.38.49_PM.png",
        "Screen Shot 2017-10-31 at 5.38.49 PM.png",
        1146,
        374,
        "#425040"
      ]
    }
  ]
}
[/block]
Or a large set of locations:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9326132-Screen_Shot_2017-10-31_at_5.39.08_PM.png",
        "Screen Shot 2017-10-31 at 5.39.08 PM.png",
        1200,
        680,
        "#d9e3e7"
      ]
    }
  ]
}
[/block]
Once your locations are set up, you can create a Plot Projects Geo Data Campaign defining the Segment the user should be added to after visiting the location.

When creating the campaign, set the field ‘Listening campaign Data’ with the tag key value in json format (eg  `{"key": "visited_walmart"}` or `{"key": "visited_LAX"}` ):
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b48baea-Screen_Shot_2017-10-31_at_5.40.01_PM.png",
        "Screen Shot 2017-10-31 at 5.40.01 PM.png",
        1194,
        580,
        "#f1f0ea"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "body": "Users will now be added automatically to the corresponding segments in your OneSignal dashboard. You can now send messages to these segments to target users.",
  "title": "All Done!"
}
[/block]