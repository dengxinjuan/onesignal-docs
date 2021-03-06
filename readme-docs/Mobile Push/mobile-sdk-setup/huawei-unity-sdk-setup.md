---
title: "Huawei Unity SDK Setup"
slug: "huawei-unity-sdk-setup"
hidden: false
createdAt: "2020-08-13T17:59:42.464Z"
updatedAt: "2021-07-29T01:18:48.264Z"
---
Follow these instructions if your app is distributed on the Huawei AppGallery.

#Step 1. Requirements
* [A OneSignal Account](https://onesignal.com).
* Your OneSignal App ID, available in Settings > [Keys & IDs](doc:accounts-and-keys).
* [Authorize OneSignal to Send Huawei Push](doc:authorize-onesignal-to-send-huawei-push) 
* A Huawei device with "Huawei App Gallery" installed.

#Step 2. Setup the OneSignal Unity SDK
Follow the [OneSignal Unity SDK setup guide](doc:unity-sdk-setup). Firebase / Google setup not required for app builds released to the Huawei AppGallery.

#Step 3. Huawei Setup
**3.1** [Huawei Platform Setup on OneSignal](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/preparedevenv-0000001050155838-V1)

**3.2** Huawei Configuration File (agconnect-services.json)
     * From the [AppGallery Connect Project List](https://developer.huawei.com/consumer/en/service/josp/agc/index.html#/myProject) select your app.
     * Click on the "agconnect-services.json" button to download this file.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4f866d-Huawei_AppGallery_Connect_ProjectSettings_Download_agconnect-services.json_file.png",
        "Huawei_AppGallery_Connect_ProjectSettings_Download_agconnect-services.json_file.png",
        1262,
        696,
        "#eef0f3"
      ]
    }
  ]
}
[/block]
* Place this inside Assets/Plugins/Android/OneSignalConfig
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdd2b5d-Screen_Shot_2020-08-13_at_15.15.03.png",
        "Screen Shot 2020-08-13 at 15.15.03.png",
        676,
        226,
        "#2a2b2a"
      ]
    }
  ]
}
[/block]
#Step 4. Generating a Signing Certificate Fingerprint

*You can skip this step if you already have added your SHA-256 certificate fingerprint to Huawei's dashboard for a different Huawei service.*

Follow [Generating a Signing Certificate Fingerprint](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/Preparations#h2-1575707383351)

#Step 5. Add Huawei Gradle Plugin and Dependencies

** Unity 2019.3 Or Newer**

**5a.1** Go to File -> Build Settings -> Player Settings -> Android -> Publishing Settings and click under 
Custom Main Gradle Template. This will create a mainTemplate.gradle. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/feb8b80-Screen_Shot_2020-08-17_at_12.13.36.png",
        "Screen Shot 2020-08-17 at 12.13.36.png",
        578,
        402,
        "#c3c4c4"
      ]
    }
  ]
}
[/block]
**5a.2** On mainTemplate.gradle remove the comment 
`// GENERATED BY UNITY. REMOVE THIS COMMENT TO PREVENT OVERWRITING WHEN EXPORTING AGAIN`
  * Under `dependencies` add `implementation 'com.huawei.hms:push:5.3.0.304'`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c5dc0e-Screen_Shot_2020-08-17_at_13.19.35.png",
        "Screen Shot 2020-08-17 at 13.19.35.png",
        930,
        144,
        "#2a2828"
      ]
    }
  ]
}
[/block]
**5a.3** Create a new file named Assets/Plugins/Android/settingsTemplate.gradle with the following contents.
[block:code]
{
  "codes": [
    {
      "code": "import java.nio.file.Files\n\n// This file contents should be placed at Assets/Plugins/Android/settingsTemplate.gradle\n// This works around Unity's 2019.3 bug where their root build.gradle is placing buildscript under allprojects\n// On it's own it doesn't create issues however doing so means including a buildscript block in any sub projects\n//   such as \"unityLibrary\" which is generated from the template Assets/Plugins/Android/mainTemplate.gradle does not work.\n// It results in a build error of \"Configuration with name 'compileClasspath' not found.\" on a lint task.\n// Normally adding \"lintOptions { abortOnError false }\" bypasses any lint task errors however\n//   either due to a bug with the Android Gradle plugin or an order of operations this does seem to be applying in this case.\n// Until Unity fixes their root build.gradle we will need to keep using this file to enable any additional Gradle plugins.\n\nstatic void enableJetifier(Project project) {\n    project.ext['android.useAndroidX'] = true\n    project.ext['android.enableJetifier'] = true\n}\n\nstatic void addBuildscript(Project project) {\n    project.buildscript {\n        repositories {\n            maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal\n            maven { url 'http://developer.huawei.com/repo/' }\n        }\n        dependencies {\n            // OneSignal-Gradle-Plugin\n            classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.7, 0.99.99]'\n            classpath 'com.huawei.agconnect:agcp:1.2.1.301'\n        }\n    }\n}\n\nstatic void applyPlugins(Project project) {\n    // Only apply OneSignal-Gradle-Plugin to the :app project. (Unity calls this :launcher)\n    if (project.name != 'launcher')\n        return\n\n    project.afterEvaluate {\n        it.apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'\n        it.apply plugin: 'com.huawei.agconnect'\n    }\n}\n\nstatic void copyHMSFile(Project project) {\n    // Only apply OneSignal-Gradle-Plugin to the :app project. (Unity calls this :launcher)\n    if (project.name != 'launcher')\n        return\n\n    def newFile = new File(\"${project.rootDir}/launcher/agconnect-services.json\")\n\n    if (newFile.exists())\n        return\n\n    def file = new File(\"${project.rootDir}/unityLibrary/OneSignalConfig/agconnect-services.json\")\n    Files.copy(file.toPath(), newFile.toPath())\n}\n\ngradle.rootProject {\n    it.afterEvaluate {\n        it.allprojects {\n            // Since Unity 2019.3 enabling Jetifier via mainTemplate.gradle is no longer working\n            // Enabling it for all gradle projects here.\n            enableJetifier(it)\n\n            addBuildscript(it)\n            applyPlugins(it)\n            copyHMSFile(it)\n        }\n    }\n}\n\n\n// Per Unity's docs /*/*INCLUDES/*/* should be at the bottom.\n// https://docs.unity3d.com/Manual/android-gradle-overview.html\n\n// However it seem to have left out this include line\ninclude ':launcher', ':unityLibrary'\n**INCLUDES**",
      "language": "groovy",
      "name": "Unity 2019.3+"
    }
  ]
}
[/block]
**Unity 2019.2 Or Older**

**5b.1** Go to File -> Build Settings -> Player Settings -> Android -> Publishing Settings and click under 
Custom Gradle Template. This will create a mainTemplate.gradle. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/977ae43-Screen_Shot_2020-08-17_at_13.05.04.png",
        "Screen Shot 2020-08-17 at 13.05.04.png",
        580,
        206,
        "#d5d5d5"
      ]
    }
  ]
}
[/block]
**5b.2** On mainTemplate.gradle remove the comment 
`// GENERATED BY UNITY. REMOVE THIS COMMENT TO PREVENT OVERWRITING WHEN EXPORTING AGAIN`
  * Under `buildscript  { repositories }` add `maven { url 'http://developer.huawei.com/repo/' }`
  * Under `buildscript  { dependencies }` add `classpath 'com.huawei.agconnect:agcp:1.2.1.301'`
  * Under `allprojects  { repositories }` add `maven { url 'http://developer.huawei.com/repo/' }`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/06edc1d-Screen_Shot_2020-08-17_at_13.18.25.png",
        "Screen Shot 2020-08-17 at 13.18.25.png",
        914,
        874,
        "#252424"
      ]
    }
  ]
}
[/block]
* After adding these dependencies, add below `allprojects {}` the following
[block:code]
{
  "codes": [
    {
      "code": "allprojects {\n  ...\n}\n\ntask copyReport(type: Copy) {\n    from file(\"$projectDir/OneSignalConfig/agconnect-services.json\")\n    into file(\"$projectDir\")\n}\n\nallprojects {\n    afterEvaluate {\n        for (def task in it.tasks)\n            if (task != rootProject.tasks.copyReport)\n                task.dependsOn rootProject.tasks.copyReport\n    }\n}",
      "language": "groovy",
      "name": "Unity 2019.2"
    }
  ]
}
[/block]
  * Under `dependencies` add `implementation 'com.huawei.hms:push:4.0.3.301'`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/be361e2-Screen_Shot_2020-08-17_at_13.19.35.png",
        "Screen Shot 2020-08-17 at 13.19.35.png",
        930,
        144,
        "#2a2828"
      ]
    }
  ]
}
[/block]
* At the bottom of the file add `apply plugin: 'com.huawei.agconnect'`

#Step 6. Run and test your app

Run your app on a real Huawei device to make sure your device is subscribed to notifications as a Huawei device and can receive notifications sent from the OneSignal dashboard.

#Step 7. Configure Huawei Location Service (Optional)
**7.1** On mainTemplate.gradle under `dependencies` add `implementation 'com.huawei.hms:location:<HUAWEI HMS VERSION #>`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/508f81e-Screen_Shot_2020-08-17_at_12.25.07.png",
        "Screen Shot 2020-08-17 at 12.25.07.png",
        914,
        182,
        "#2c2929"
      ]
    }
  ]
}
[/block]
**7.2** Make sure to also add the location permission to your AndroidManifest.xml if you don't have this already

[block:code]
{
  "codes": [
    {
      "code": "<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>\n<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\"/>",
      "language": "xml",
      "name": "AndroidManifest.xml"
    }
  ]
}
[/block]
#### [Huawei Error Codes](https://developer.huawei.com/consumer/en/doc/development/HMS-References/hms-error-code)
* HMS error code reference to help debug logs and successfully integrate HMS Core SDK with the OneSignal SDK.