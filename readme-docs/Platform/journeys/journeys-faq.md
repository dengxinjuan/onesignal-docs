---
title: "Journeys FAQ"
slug: "journeys-faq"
excerpt: "Common Q & As to help you on your journey."
hidden: false
createdAt: "2022-02-16T02:37:57.259Z"
updatedAt: "2022-02-17T00:45:35.065Z"
---
#Why can’t I see Journeys in my app?
Journeys are currently available for Professional and Enterprise plans only. Support for other plans is coming soon. Please upgrade your plan if you would like to access Journeys today or [talk to Sales](https://onesignal.com/contact).

#Does Journeys support email and SMS?
Support for email and SMS is coming soon.

#Does Journeys support in-app messaging?
Support for in-app messaging is coming soon. Today you can utilize tags to set a tag for your users in a Journey, then use this tag to set an in-app message that targets users that have that tag set. 

#Why are users not entering my Journey?
There are several reasons why a user may not appear to be entering a Journey:
* Your subscribers must have an External User ID set today. Only users identified with External User ID can enter a Journey. [More on why here](https://documentation.onesignal.com/docs/journeys#requirements).
* If you have an exit rule that immediately exits all users that are entering.

#Why do my template stats look off?
The stats you see for each message step in a Journey are more that template. If you are using the message template elsewhere, for example an automated message, then the stats may not be accurate. Make sure you create a new template for each message in a Journey.

#Why are stats not matching?
There are several reasons why sent doesn’t match the number of users that have completed that step:
* Capped  — if you have frequency capping turned on then we will not send messages to users that have hit the cap.
* Users may have Email or SMS subscriptions only. 
* Users may have unsubscribed.