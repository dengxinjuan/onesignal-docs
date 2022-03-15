---
title: "Blueshift"
slug: "blueshift"
excerpt: "OneSignal integration with Blueshift for Web Push."
hidden: true
createdAt: "2019-05-27T05:18:28.816Z"
updatedAt: "2022-03-01T18:29:48.267Z"
---
OneSignal has partnered with [Blueshift](https://blueshift.com/?s=onesignal) to help make Customer Engagement even easier!
[block:html]
{
  "html": "<div align=\"center\">\n<iframe width=\"711\" height=\"400\" src=\"https://www.youtube.com/embed/7AqYMdlZTJY\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>"
}
[/block]
Web push notifications can be orchestrated in campaign journeys and can leverage predictive content recommendations as well as other personalizations. Web push engagement data such as impressions and clicks can be captured via callback urls in Blueshift journeys.

In order to use this capability, you would need to have a website setup following the OneSignal [Web Push Quickstart](doc:web-push-quickstart) and use the relevant credentials with your Cloud App template within Blueshift. Follow the steps below to setup your OneSignal web push template with Cloud App.

##Add the OneSignal and Blueshift code to your website
[block:code]
{
  "codes": [
    {
      "code": "<head>\n  <!--Blueshift code -->\n  <script type=\"text/javascript\">\n    window._blueshiftid='<<BLUESHIFT EVENT API KEY>>';window.blueshift=window.blueshift||[];if(blueshift.constructor===Array){blueshift.load=function(){var d=function(a){return function(){blueshift.push([a].concat(Array.prototype.slice.call(arguments,0)))}},e=[\"config\",\"identify\",\"track\",\"click\",\"pageload\",\"capture\",\"retarget\",\"live\"];for(var f=0;f<e.length;f++)blueshift[e[f]]=d(e[f])};}\n    blueshift.load();\n    blueshift.pageload();\n    if(blueshift.constructor===Array){(function(){var b=document.createElement(\"script\");b.type=\"text/javascript\",b.async=!0,b.src=(\"https:\"===document.location.protocol?\"https:\":\"http:\")+\"//cdn.getblueshift.com/blueshift.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);})()}\n    </script>\n    \n    <!-- OneSignal Init code -->\n    <script src=\"https://cdn.onesignal.com/sdks/OneSignalSDK.js\" async=\"\"></script>\n    <script>\n      var OneSignal = window.OneSignal || [];\n      OneSignal.push(function() {\n        OneSignal.init({\n          appId: \"<<OneSignal APP ID>>\", // Replace with your OneSignal app id\n        });\n      });\n  </script>\n</head>\n\n<body>\n  Web Push notification test with Blueshift + OneSignal\n  <script>\n    OneSignal.push(function() {\n       OneSignal.getUserId(function(userId) {\n        console.log(\"OneSignal User ID:\", userId);\n        blueshift.identify({\n          email: \"<<User Email>>\",\n          onesignal_webpush_id: userId\n      });\n      });\n    });\n  </script>\n</body>",
      "language": "html"
    }
  ]
}
[/block]
This would fire an “identify” event with “onesignal_webpush_id” set to the OneSignal user identifier that would be needed for sending out the Web Push message via OneSignal.

##Create the Blueshift CloudApp Template

1 - Select the OneSignal web push template from the Cloud App template creation screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/306b5f7-1.png",
        "1.png",
        2876,
        1364,
        "#e6eff3"
      ]
    }
  ]
}
[/block]
2 - Configure the template including the name, tags and other relevant information
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0e46b91-2.png",
        "2.png",
        2876,
        1526,
        "#b9bec1"
      ]
    }
  ]
}
[/block]
3 - Edit the template JSON body to customize the urls, personalizations and rendering, example:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/97d5737-3.png",
        "3.png",
        2880,
        1540,
        "#f2f3f3"
      ]
    }
  ]
}
[/block]
Here is sample JSON template you may use with OneSignal. This templates includes a push notification text, two callout buttons and tracking callback urls that you can use to save engagement data back to Blueshift.

```
{
  "app_id": "<< YOUR ONE SIGNAL APP ID >>", 
  "contents": {
    "en": "Here are your recommendations: {{products[0].title}}"
  },
  "chrome_web_image": "{{products[0].image}}",
  "include_player_ids": ["{{user.extended_attributes.onesignal_webpush_id}}"],
  "web_buttons": [
    {"id": "buy-button", "text": "Explore", "icon": "https://i.imgur.com/N8SN8ZS.png", "url": "{{products[0].web_link}}"},
    {"id": "read-more-button", "text": "Checkout", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "{{products[0].web_link}}"}
  ],
  "data": {
    "impression": "{{tracking.impression_url}}",
    "click": "{{tracking.click_url}}"
  }
}
```

##Verify Integration
1 - Load your website that integrates with OneSignal’s SDK and requests for the notification permission. You would need to click on the notification icon and grant permissions.

2 - On the user profile in Blueshift, you should see a onesignal_webpush_id, example
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/438adbb-5.png",
        "5.png",
        817,
        706,
        "#e3eef3"
      ]
    }
  ]
}
[/block]
3 - Issue a Test Push via Cloud App
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0482ac3-6.png",
        "6.png",
        626,
        504,
        "#f1f6f5"
      ]
    }
  ]
}
[/block]
4 - You should see a personalized web push delivered via OneSignal
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94ca5d4-7.png",
        "7.png",
        698,
        166,
        "#aaabaa"
      ]
    }
  ]
}
[/block]
## Collect Engagement data back from OneSignal

OneSignal can issue [Web Push Webhooks](doc:webhooks) to your server on message engagement such as impressions or clicks. You can collect these webhook callbacks and send these back to Blueshift as events for segmentation. 

In order to use this, you would setup web hook callback urls to your server/app, and once your receive the callback, use the relevant url in the "data" section to call Blueshift for the engagement tracking.

## Check out a sample implementation
You can checkout a sample implementation at blueshiftreads.com for Web Push messages delivered via OneSignal. Click on the “bell” icon on the lower right after signing up and browsing a few pages.