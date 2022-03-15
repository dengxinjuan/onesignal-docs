---
title: "Complex Web Push Integrations"
slug: "web-push-complex-integrations"
excerpt: "Examples of complex integrations of OneSignal Web Push Notifications"
hidden: false
createdAt: "2017-12-14T20:24:17.445Z"
updatedAt: "2020-02-26T22:21:51.204Z"
---
Some customers have unusual site configurations that require more complex, custom code integrations with OneSignal. Below are quick guides to some of these complex scenarios.

## How do I manage web push subscriptions across origins?

**Scenario:** You want to send web push notifications when you are managing multiple origins (domains or subdomains) that serve different content.

### Marketing Funnel Example

Some sites may present a different experience to visitors (showing a marketing page at `www.example.com`) versus logged in users (showing a dashboard at `app.example.com`).

These sites typically view the marketing page as the top of the funnel, and wish to get users to convert / sign up to be on the dashboard.

### Similar Marketing Pages Example

Some sites may present a roughly similar experience to visitors across more than one origin (`toys.example.com` and `gear.example.com` both show similar content but are on separate subdomains).

### Solution

Due to the way the Web Push Standard is defined, **push subscriptions cannot be shared across origins, nor can one origin directly determine the user's subscription status of another origin.**

This means if you set up your web push integration across multiple origins, the following situations will arise:

1. **Multiple apps to manage** - the only way to set up multiple origins is to set up a unique OneSignal app for each origin. This adds overhead for your team when configuring your integration and each time you send notifications.

2. **Multiple user bases to manage** - different users will wind up subscribed to push notifications from different origins depending on what page they subscribed from.

3. **Users may get prompted multiple times** - users that have already subscribed to one origin may get prompted to subscribe again if they navigate to another origin (they've subscribed to push on `www.example.com`, then logged in, then get asked to subscribe to push on `app.example.com`).

4. **Users may get duplicate notifications** - users that subscribe to notifications on multiple origins may receive duplicate notifications if you send the same notification to users on more than one origin.

Typically, customers don't mind #1 and #2, as long as the user experience (#3 and #4) can be worked out. In order to mitigate the user experience issues, you will have to do some additional work. How you handle these situations will depend on what kind of site you have.
[block:callout]
{
  "type": "info",
  "body": "Note: Instead of dealing with these limitations, you may want to consider consolidating your site's presence on a single origin, e.g. `example.com`. The way new web technologies and standards (like service workers and progressive web apps) work is increasingly making this the recommended approach.",
  "title": ""
}
[/block]
---

## How can I override the status of a subscription?

To differentiate messaging and prevent users from receiving notifications from multiple origins, you can set one of the origins to override the subscription status of the other. 

For example, you can prevent users from getting marketing-oriented notifications (from `www.example.com`) if they've already converted to a logged-in user deeper in the funnel (from `app.example.com`). 

Just follow these steps to implement this pattern:

1. User visits home page `www.example.com`. The user may or may not be already subscribed to `app.example.com`.

2. User is prompted to subscribe to web push on `www.example.com` and subscribes.

3. User signs in at `my.example.com`. If the user is not currently subscribed to `app.example.com`, prompt them to subscribe.

4. When user is subscribed to `app.example.com`, open an iframe to `www.example.com`. Call `OneSignal.isPushNotificationsEnabled()` in the iframe, which will return true for this user. Call `OneSignal.setSubscription(false)` in the iframe to unsubscribe the user from `www.example.com`, since they are already subscribed to `app.example.com`.

Once this is set up, you should have two sets of users: 

- users that are subscribed to `www.example.com`, and
- users that are subscribed to `app.example.com` (and that formerly may have subscribed to `www.example.com`, but no longer are). 

With this method, you can send marketing messages to users subscribed to `www.example.com`, and more personalized messages to users that have signed up for your service via `app.example.com`.

---

## How can I prevent subscribed users from getting a second prompt?

To prevent users who subscribe to web push notifications on one origin from getting prompted on another, you can use a cookie to prevent users getting re-prompted on other origins. 

This is helpful if you have multiple origins where users can subscribe, and you don't care which origin they subscribe to because you plan on sending the same notifications.

1. User visits `toys.example.com` and is not subscribed on any of your origins.

2. User is prompted to subscribe to web push on `toys.example.com` and subscribes. You then cookie the user as being subscribed.

3. User visits `gear.example.com`. 

4. You then check for the cookie from Step 2. If no cookie exists, you then prompt the user to subscribe. If the cookie exists, do not prompt user.

[block:callout]
{
  "type": "warning",
  "body": "Some sites support visitors going to their `www` and non-`www` origins, (`www.example.com` and `example.com`). **We do not recommend the above solution for these sites**. \n\nInstead, we recommend redirecting traffic from one to the other (users that visit `example.com` are redirected to `www.example.com`), and setting up web push *only* on the origin you redirect to.",
  "title": "Sites with both www and non-www links"
}
[/block]
---

## Example Complex Integration

Let's say you have 2 sites: 

- `https://mainsite.com` where you want users to subscribe, and 
- another site at `https://subdomain.site.com` that you would like to get subscriptions only if the user is not already subscribed to the main site. 

Also, you want to unsubscribe users from `https://subdomain.site.com` if the user subscribes to `https://mainsite.com` in the future.

You will need 2 separate OneSignal `app_ids` – 1 for each origin.

On `https://mainsite.com` create a separate page, for example called "iframe", so it is accessible at `https://mainsite.com/iframe`. Add this code below to `https://mainsite.com/iframe`:
[block:code]
{
  "codes": [
    {
      "code": "// Make sure OneSignal Init code is on this page\nfunction bindEvent(element, eventName, eventHandler) {\n  element.addEventListener(eventName, eventHandler, false);\n}\n// Accessed within iframe on subdomain.site\n// Sends a message to mainsite\nvar sendMessage = function (msg) {\n  console.log(`2 Mainsite is Sending Message to subdomain.site ${msg}`)\n  // postMessage: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage\n  window.parent.postMessage(msg, 'https://subdomain.site.com');\n};\nbindEvent(window, 'load', function (e) {\n  OneSignal.push(function() {\n    OneSignal.isPushNotificationsEnabled(function(isEnabled) {\n      console.log(`1 subdomain.site iframe checking subscription from mainsite, it is ${isEnabled}`)\n      sendMessage(isEnabled)\n    });\n  });\n});",
      "language": "javascript"
    }
  ]
}
[/block]
On `https://subdomain.site.com`, we will check if the user is subscribed to `https://mainsite.com`:

1. If the user is not subscribed to the main site, we can either prompt them to `https://subdomain.site.com` or we can open a window to `https://mainsite.com` to subscribe the user.

2. If the user is subscribed to `https://mainsite.com`, we can unsubscribe the user from `https://subdomain.site.com` automatically.

Code for `https://subdomain.site.com`:
[block:code]
{
  "codes": [
    {
      "code": "function bindEvent(element, eventName, eventHandler) {\n  element.addEventListener(eventName, eventHandler, false);\n}\nvar iframeSource = 'https://mainsite.com/iframe';\nvar iframe = document.createElement('iframe');\niframe.setAttribute('src', iframeSource);\niframe.style.display = 'none';\ndocument.body.appendChild(iframe);\n\nbindEvent(window, 'message', function (e) {\n\tconsole.log(`received message: ${e.data} from ${iframeSource}`);\n  if (event.origin !== \"https://mainsite.com\") {\n    // ignore messages from anywhere except where we expect\n    return\n  }\n\tif (e.data === false){\n\t\tconsole.log(\"user not subscribed to mainsite, let's prompt\")\n\t\t//Option 1 - Prompt the user for this page\n\t\tOneSignal.showNativePrompt();\n\t\t//Option 2 - Open a window or tab to main site\n\t\t//window.open(\"https://mainsite.com\", \"_blank\", \"width=400,height=400\")\n\t} else {\n\t\tconsole.log(\"user is subscribed to mainsite, lets unsubscribe from subdomain.site\");\n    OneSignal.setSubscription(false);\n\t}\n});",
      "language": "javascript"
    }
  ]
}
[/block]