---
title: "REST API Requirements and FAQ"
slug: "rest-api-requirements-and-faq"
hidden: false
createdAt: "2021-09-21T00:23:00.497Z"
updatedAt: "2021-10-06T03:24:34.022Z"
---
#Requirements

* **HTTPS**. All traffic to the REST API uses HTTPS on standard port 443.

Firewalls and proxies must allow outbound HTTPS traffic on port 443 to connect to our REST API. 

* **IP Addresses**: OneSignal's infrastructure dynamically assigns IP addresses for the REST API from a large range of [Cloudflare IP addresses](https://www.cloudflare.com/ips/), and those IP addresses can change without advance notice.

We recommend whitelisting HTTPS traffic to any public IP address or allow `api.onesignal.com`. Be sure your DNS cache respects OneSignal's TTL of 60 seconds to avoid making requests to stale IP addresses.

* TLS 1.2 connection or higher

##For receiving notifications

###FCM (Google Android and Chrome Push Notifications)

﻿If your organization has a firewall that restricts the traffic to or from the Internet, you need to configure it to allow connectivity with FCM in order for your Firebase Cloud Messaging client apps to receive messages. The ports to open are: 5228, 5229, and 5230. FCM typically only uses 5228, but it sometimes uses 5229 and 5230. FCM doesn't provide specific IPs, so you should allow your firewall to accept outgoing connections to all IP addresses contained in the IP blocks listed in Google's ASN of 15169. From the "Firewall" note: https://firebase.google.com/docs/cloud-messaging/concept-options

----

# FAQ

## What are the API Rate Limits?

See [Rate Limits & Disabled Apps](doc:rate-limits).


## What is the response timeout for API endpoints?

Responses are usually generated within a couple seconds. However, in extreme cases, they can take longer.

OneSignal will wait 30 seconds for a response before automatically canceling the request. To verify no duplicate requests go through, you can add an [Idempotent Key](doc:idempotent-notification-requests) with the `external_id` parameter. 


##Tag Filter Target and Exclude By Topics

####1. Figure out Tag categories
More details in our [Add Data Tags](doc:add-user-data-tags), for example:
```
"breaking": 1
"sports": 1
"finance": 1
"politics": 1
```

The tag "key" will be the topic and the value can be whatever you like. In the example: "1" can indicate how many times the [user visited the topic](doc:auto-segment-users-by-page-visit) or you can use [Time Operators](doc:time-operators) to know how long since they last viewed the topic. Another common setup is to [Tag based on Subscription page](doc:auto-segment-users-by-subscription-page).

###2. Target by filters

For news that crosses both "politics" and "breaking" you can use [API filters](https://documentation.onesignal.com/reference/create-notification#send-to-users-based-on-filters) to target these users without overlap.

For example:
```
filters: [
  {"field": "tag", "key": "politics", "relation": "exists"},
  {"operator": "OR"},
  {"field": "tag", "key": "breaking", "relation": "exists"}
]
```

In this example, all users with either the "politics" or "breaking" tags will get the message. Our system will automatically make sure no users with both tags will get it twice as long as they are targeted in the same API call.

###3. Exclude Segments

If you later want to send this same article to "finance" users, you can make sure none of them get duplicates if you use the example:

```
filters: [
  {"field": "tag", "key": "politics", "relation": "not_exists"},
  {"field": "tag", "key": "breaking", "relation": "not_exists"},
  {"field": "tag", "key": "finance", "relation": "exists"}
]
```

This will make sure that only users with the "finance" tag will get the message.