---
title: "Location-Triggered Notifications"
slug: "location-triggered-event"
excerpt: "Setting up notifications that trigger based on user location."
hidden: false
createdAt: "2016-09-02T02:08:25.789Z"
updatedAt: "2021-12-23T22:38:15.909Z"
---
Support for location triggered notifications can be achieved in the following ways.
[block:callout]
{
  "type": "info",
  "body": "We have also partnered with [Radar](https://radar.com/) and [Plot Projects](doc:plot-projects) if you want to integrate with their services.\n\nRadar is the leading geofencing and location tracking platform. You can use Radar's SDKs and APIs to build a wide range of location-based product and service experiences, including pickup and delivery tracking, location-triggered notifications, location verification, store locators, address autocomplete, and more. For more information about our integration, visit the [Radar Docs](https://radar.com/documentation/integrations/onesignal) or [contact the Radar team](https://radar.com/contact) to learn more.",
  "title": "Radar and Plot Projects Integration"
}
[/block]
# Target By Country

Country is automatically tracked based on the IP Address. Use the `country` Data Filter in [Segments](doc:segmentation) or [API Filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters).

----

# Target By Latitude and Longitude

If your Mobile App collects location data, OneSignal will automatically update the latitude and longitude for the device based on the location permission granted by user. 
- For iOS location settings, see the [Apple Developer Guide for Choosing the Location Authorization Level](https://developer.apple.com/documentation/corelocation/choosing_the_authorization_level_for_location_services). Apple requires a description be set in the project's `Info.plist` to display the authorization dialog. Set either the [NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription) for requesting authorization only while app is in focus or [NSLocationAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysusagedescription) for usage at all times.
- For Android location settings, see the [Android Developer Guide on Location Permissions](https://developer.android.com/training/location/permissions).

You can ask for location tracking permission through our [Location Opt-In Prompt](doc:location-opt-in-prompt) or use our `promptLocation` [SDK Method](doc:sdk-reference#location-data).

Once location is set, messages can be sent based on a radius around the location point using the `location` Data Filter in [Segments](doc:segmentation) or [API Filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3109479-Screen_Shot_2021-02-09_at_8.28.43_AM.png",
        "Screen Shot 2021-02-09 at 8.28.43 AM.png",
        1440,
        938,
        "#ebedf0"
      ]
    }
  ]
}
[/block]
Starting with android 8, [background updates are limited to "a few times every hour"](https://developer.android.com/about/versions/oreo/background-location-limits), in our tests, this appears to be 4 times per hour. 

On our end, we might change how often we update this information from time to time for optimization reasons but currently we check the user's location around every 5 minutes.

## Web Push Latitude and Longitude Tracking

OneSignal does not automatically collect location points on web push. You can setup your site to prompt users for Location Tracking and add [Data Tags](doc:add-user-data-tags) to set it within OneSignal. Here is a great [Medium Post about this](https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f).

If getting and setting the location points with OneSignal `sendTags` method, assign `"longitude"` and `"latitude"` tags. For example, you could set `"long"="37.160"` and `"lat"="-117.773"`.

Then you can send a message to users in a segment based on these tags.

For example, define a segment with tags `"long" > 37, "long" < 38, "lat" > -118, "lat" < -117` to create a square target region containing users with location tags in that range.

You can do this manually via the New Messages Page, automatically via the [Server REST API](ref:create-notification), or automatically via the Automated Messages Page.

----

# Target By City or Provided Location

**OneSignal does not provide a way to track city or area codes.** However, if your app/site collects this data, you can send it to OneSignal in the form of [Data Tags](doc:add-user-data-tags).

Generally your app/site can collect this data in the following ways:
- User inputs a city or location into a field on your site/app.
- Prompt User for Location Tracking on Web and use Google Maps Reverse Geocoding API. Here is a great [Medium Post about this](https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f).

We have also partnered with [Radar](https://radar.io/documentation/integrations/onesignal) and [Plot Projects](doc:plot-projects) if you want to integrate with their service.

----

#Target based on a Geofence Trigger

### iOS

1. Follow [this guide](https://www.raywenderlich.com/136165/core-location-geofencing-tutorial) to set up Geofencing on iOS

2. When a Geofence is triggered, use the OneSignal [postNotification](https://documentation.onesignal.com/docs/ios-native-sdk#section--postnotification-) method to send a notification to the device.

### Android

1. Follow [this guide](https://developer.android.com/training/location/geofencing.html) to set up Geofencing on Android.

2. When a Geofence is triggered, use the OneSignal [postNotification](https://documentation.onesignal.com/docs/android-native-sdk#section--postnotification-) method to send a notification to the device.