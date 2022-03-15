---
title: "Example: Trigger IAM after closing an IAM"
slug: "example-trigger-iam-after-closing-an-iam"
hidden: false
createdAt: "2022-01-14T00:37:11.015Z"
updatedAt: "2022-01-14T00:37:11.015Z"
---
Sometimes you may want to chain together IAMs based on specific buttons clicked in a previous IAM.

Using the Custom Action ID [Click Action](doc:iam-click-actions) you can specify an identifier for that click action. It is also recommended to set it to **Dismiss on click** within the **Advanced Options** of that block and  `addTrigger` method to show the IAM.

In this example, we call the action Name `trigger-banner`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/77efa80-Screen_Shot_2022-01-13_at_4.30.13_PM.png",
        "Screen Shot 2022-01-13 at 4.30.13 PM.png",
        868,
        638,
        "#f1f3f5"
      ]
    }
  ]
}
[/block]
The action name will be detected upon click within the <a href="https://documentation.onesignal.com/docs/iam-sdk-methods#in-app-message-click-handler" target="_blank">In App Message Click Handler</a>. Combine this with the `addTrigger` method to pass in the identifier and trigger another In-App Message.

For example:
[block:code]
{
  "codes": [
    {
      "code": "let inAppMessageClickBlock: OSInAppMessageClickBlock = { action in\n    if let clickName = action.clickName {\n        print(\"clickName string: \", clickName)\n        if clickName == \"trigger-banner\" {\n          OneSignal.addTrigger(clickName, \"1\")\n        }\n    }\n}\n\nOneSignal.setInAppMessageClickHandler(inAppMessageClickBlock)",
      "language": "text"
    }
  ]
}
[/block]
In the In-App Message you want to chain after it, set the **In-App Trigger** to be the click name.

For example, set the click name `trigger-banner` to **exists**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8081d04-Screen_Shot_2022-01-13_at_4.36.34_PM.png",
        "Screen Shot 2022-01-13 at 4.36.34 PM.png",
        1794,
        500,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]