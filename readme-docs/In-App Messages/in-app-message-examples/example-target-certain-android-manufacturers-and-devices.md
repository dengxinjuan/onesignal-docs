---
title: "Example: Target Certain Android Manufacturers and Devices"
slug: "example-target-certain-android-manufacturers-and-devices"
hidden: false
createdAt: "2021-12-23T19:09:40.442Z"
updatedAt: "2021-12-23T19:14:31.656Z"
---
Certain Android devices have a known issue where they do not get push notifications when the app is swiped away. More details on this [here](https://documentation.onesignal.com/docs/notifications-show-successful-but-are-not-being-shown#the-app-is-force-stopped). This issue affects all push providers, but fortunately OneSignal provides a way to reach out to users of these devices to help educate them on how to enable push for your app if they swipe it away.

Using the Native Android SDK, you can easily check the `deviceModel` and `deviceManufacturer`. Then, based on this data, trigger the IAM to ask those users to enable the proper settings on the device for your app.

Some example code looks like this:
[block:code]
{
  "codes": [
    {
      "code": "//Gets the device model\nString deviceModel = android.os.Build.MODEL;\n//Gets the device manufacturer\nString deviceManufacturer = android.os.Build.MANUFACTURER;\nHashSet<String> manufWithIssues = new HashSet<>(Arrays.asList(\"samsung\",\"huawei\",\"xiaomi\",\"oppo\",\"vivo\",\"lenovo\",\"sony\",\"asus\"));\nif (manufWithIssues.contains(deviceManufacturer.toLowerCase()){\n  //Based on the device manufacturer you can trigger the IAM to show\n  OneSignal.addTrigger(\"device_manuf\", \"issue_manuf\");  //\"issue_manuf\" == deviceManufacturer\n}\n",
      "language": "java"
    }
  ]
}
[/block]
In this example, if the current device's manufacturer matches a manufacturer in the HashSet with known issues, it will be passed to the OneSignal [addTrigger](https://documentation.onesignal.com/docs/iam-sdk-methods) method which you can use to trigger the IAM setup in your OneSignal Dashboard.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f18b86e-iam-target-devices-add-trigger.png",
        "iam-target-devices-add-trigger.png",
        1279,
        356,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
An example message might say:


Your device may not be getting our notifications! 😱

Please check your device settings have our important alerts turned on:


Settings ➝ Device Management ➝ Battery ➝ Unmonitored apps ➝ Add this app 👍


Settings ➝ Apps ➝ this app ➝ App Settings ➝ Notifications ➝ Set as Priority 👍
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/79a09e7-iam-target-certain-android-devices.png",
        "iam-target-certain-android-devices.png",
        1922,
        1661,
        "#f7f6f6"
      ]
    }
  ]
}
[/block]