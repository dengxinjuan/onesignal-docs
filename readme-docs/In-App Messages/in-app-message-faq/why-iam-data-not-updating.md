---
title: "Why IAM Data Not Updating?"
slug: "why-iam-data-not-updating"
hidden: false
createdAt: "2021-12-14T18:26:57.056Z"
updatedAt: "2021-12-14T18:26:57.056Z"
---
#Design Updates
Changes made to the In-App Message within the OneSignal dashboard will reflect in the app once the app has been closed for 30 seconds. Make sure after you save any changes to the IAM, you have the app closed or put into the background for 30 seconds, then when you open it, you will see the changes upon the next time it is triggered.

Using the **Send to Test Device** button does not reflect any Tag Substitutions. You must trigger the IAM normally to see Tag Substitution Personalizations.

#Analytics, Clicks, Impressions Updates
Using the **Send to Test Device** button does not contribute to the IAM analytics. You must trigger the IAM without using this button to see stats updates.

If you are not using the **Send to Test Device**, then please plug the device into your dev tools and use our <a href="https://documentation.onesignal.com/docs/sdk-reference#debugging" target="_blank">SDK SetLogLevel method to Verbose</a>. Reproduce the issue and this will help log any errors and events so we can see what is happening.

Share the full logs from app start till the end of reproduction as a .txt file with our support team at support@onesignal.com