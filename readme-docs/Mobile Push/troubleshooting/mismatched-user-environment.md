---
title: "Mismatched User Environment"
slug: "mismatched-user-environment"
excerpt: "Configuration Notice - iOS Apps"
hidden: false
createdAt: "2016-09-20T07:48:37.394Z"
updatedAt: "2021-02-08T00:45:22.150Z"
---
**Mismatched User Environment** occurs when Apple returns a `BadDeviceToken` error for the affected devices ([Table 8-6 for more details](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html)). 

This means some devices are tied to a different environment (Sandbox, Development, Ad Hoc, or Production) from your sending environment and cannot receive push. If you uploaded a Sandbox certificate when testing locally, then released the app on Testflight or the App Store (Production Environment), those original test devices are not tied to the Production Environment and cannot "switch" environments. 

**OneSignal always defaults to the Production Certificate when uploaded.**

## Steps to Resolve
1. Devices on the Sandbox or Ad-hoc environment will need to uninstall the app and re-install it to be on the Production Environment. You will not be able to remove a Production Push Certificate from the OneSignal dashboard once it is set.

2. Clear the warning in Settings, select the Apple iOS configuration, then press save on the next screen. The next time you send to iOS, check if this warning appears again and save the listed player ids.

3. Please make sure you're using our latest SDK. Our SDK is frequently updated to meet Apple's changing push standards.

4. If you are directly importing users via our [Add a device](ref:add-a-device) or [Edit Device](ref:edit-device) REST API, please make sure the [`test_type` field](https://documentation.onesignal.com/reference#section-body-parameters-add-a-device) is set correctly according to our documentation.

5. If you have only uploaded a Sandbox push certificate, please upload a Production push certificate as well.

6. If you are using VoIP Notifications make sure you followed our [VoIP Notifications Documentation](doc:voip-notifications) and added the VoIP tokens to a separate OneSignal App with the [Add a device](ref:add-a-device) REST API call. You must have added a VoIP Token and not a Push Token. Also you must set the specific VoIP Push Certificates and not a dual or other certificate.

If you are still having issues with this, please provide OneSignal support:
1. Your OneSignal App Id
2. Details of any changes you made to the app since you found this error including any API calls you make to the [Add a device](ref:add-a-device) or [Edit device](ref:edit-device) endpoints.