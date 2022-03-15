---
title: "Setup Transactional Emails"
slug: "setup-transactional-emails"
hidden: false
createdAt: "2018-03-13T21:53:13.073Z"
updatedAt: "2021-10-19T22:38:20.042Z"
---
A great path to start using OneSignal Email Messaging is to begin delivering transactional emails (such as welcome emails, password resets, etc) through OneSignal. This offers a few key benefits:

1. You can easily **track delivery, click, and open statistics** on your transactional emails from the OneSignal Dashboard, alongside your push notifications and marketing emails.

2. If you don't yet use an email service provider for these emails, you gain the benefit of **increased deliverability and reliability** of an email service provider without the headache of adding another dependency and API in your app.

3. You can create great-looking, cross-platform email templates within the OneSignal Dashboard and use them to send personalized transactional emails.

#Migrate your existing transactional emails
You can easily migrate your existing transactional email templates for delivery in OneSignal by sending them through the [OneSignal API](doc:api-reference). Most backends (e.g. rails, node) use some form of basic emailer service that you can swap out for delivery through the OneSignal API. Below is sample API code you can use to send an existing HTML transactional email:
[block:code]
{
  "codes": [
    {
      "code": "params = {\n  \"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\", \n  \"email_subject\" => \"Welcome to Cat Facts!\",\n  \"email_body\" => \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\",\n  \"include_player_ids\" => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "import requests\nimport json\n\nheader = {\"Content-Type\": \"application/json; charset=utf-8\",\n          \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"}\n\npayload = {\"app_id\": \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n           \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n           \"email_subject\": \"Welcome to Cat Facts!\",\n           \"email_body\": \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\" }\n \nreq = requests.post(\"https://onesignal.com/api/v1/notifications\", headers=header, data=json.dumps(payload))\n \nprint(req.status_code, req.reason)",
      "language": "python",
      "name": null
    },
    {
      "code": "var sendNotification = function(data) {\n  var headers = {\n    \"Content-Type\": \"application/json; charset=utf-8\",\n    \"Authorization\": \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\"\n  };\n  \n  var options = {\n    host: \"onesignal.com\",\n    port: 443,\n    path: \"/api/v1/notifications\",\n    method: \"POST\",\n    headers: headers\n  };\n  \n  var https = require('https');\n  var req = https.request(options, function(res) {  \n    res.on('data', function(data) {\n      console.log(\"Response:\");\n      console.log(JSON.parse(data));\n    });\n  });\n  \n  req.on('error', function(e) {\n    console.log(\"ERROR:\");\n    console.log(e);\n  });\n  \n  req.write(JSON.stringify(data));\n  req.end();\n};\n\nvar message = { \n  app_id: \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n  \"email_subject\": \"Welcome to Cat Facts!\",\n  \"email_body\": \"<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>\"\n};\n\nsendNotification(message);",
      "language": "javascript",
      "name": "NodeJS"
    }
  ]
}
[/block]
In every email you send, you must include an unsubscribe link. You can insert this by adding `[unsubscribe_url]` in a link within your emails.


----

#Create new transactional email templates

OneSignal supports the ability to create email templates in the OneSignal Dashboard that you can use to send personalized transactional emails. This will give you greater visibility into and control over your transactional emails for several reasons:

1. Templates can be easily modified directly from the OneSignal Dashboard, so you won't have to edit code each time you want to make a change. 

2. OneSignal's template editor takes care of cross-platform compatibility automatically, so you won't have to worry about how your emails look on different email clients.

3. Just like push templates, you can get aggregate statistics on email templates, so you won't have to instrument your emails or dive into yet another analytics package to see how each transactional email is performing.

[block:code]
{
  "codes": [
    {
      "code": "params = {\n  \"app_id\" => \"5eb5a37e-b458-11e3-ac11-000c2940e62c\",\n  \"template_id\" => \"e59b3a5e-ccc4-44ff-b39e-aa4c668fe6c1\",\n  \"include_player_ids\" => [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n  \"email_subject\" => \"Your Email Subject\"\n}\nuri = URI.parse('https://onesignal.com/api/v1/notifications')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Post.new(uri.path,\n                              'Content-Type'  => 'application/json;charset=utf-8',\n                              'Authorization' => \"Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj\")\nrequest.body = params.as_json.to_json\nresponse = http.request(request) \nputs response.body",
      "language": "ruby",
      "name": "Ruby (Rails)"
    },
    {
      "code": "{\n  \"app_id\": \"YOUR_ONESIGNAL_APP_ID\",\n  \"include_player_ids\": [\"6392d91a-b206-4b7b-a620-cd68e32c3a76\"],\n  \"email_subject\": \"Your Email Subject\",\n  \"template_id\": \"e59b3a5e-ccc4-44ff-b39e-aa4c668fe6c1\"\n}",
      "language": "json"
    }
  ]
}
[/block]