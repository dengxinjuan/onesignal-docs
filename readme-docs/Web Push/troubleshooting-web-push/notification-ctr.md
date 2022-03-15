---
title: "Notification CTR"
slug: "notification-ctr"
excerpt: "Troubleshooting low notification click through rates"
hidden: false
createdAt: "2019-07-18T16:55:24.507Z"
updatedAt: "2021-09-07T16:09:20.007Z"
---
Click Through Rate (CTR) is measured by (clicks / delivered) * 100% and represents how many notifications were clicked based on how many were delivered to the FCM/APNS servers who then send it to your subscribers. It does not count:
- swiping away the notification
- clicking "Dismiss"
- clearing notifications

# Best Practices
CTR for push notifications varies widely among different platforms (Android, iOS, Web), vertical (news, games, travel, ecommerce, etc), type of notification (message from a friend, promotion, informative update), country, etc. Not unlike email, the variance is so wide as to make averaging a bit muddy.

To help with maximizing clicks on push, we regularly publish blog posts and best practices on how to utilize OneSignal to get the maximum engagement from users.

A common best practice to increase CTR and user engagement is to send subscribers messages based on topics they are interested in. If your site publishes a wide range of topics and you send more than 1 notifications a day, your users likely don't want to know about every push you send.

Websites can easily ask users what they would like notifications about using our [Category Slidedown Prompt](https://documentation.onesignal.com/docs/slide-prompt). This will allow you to group users by the different topics you offer so you can setup [Segments](doc:segmentation) and target users with the notifications they care about.

More actionable ideas:

- <a href="https://onesignal.com/blog/increase-open-rates-by-up-to-23-percent-with-intelligent-delivery" target="_blank">Increase Your Push Notification CTR with Intelligent Delivery</a>
- <a href="https://onesignal.com/blog/6-best-practices-for-push-notifications" target="_blank">6 Best Practices for Push Notifications</a>
- <a href="https://onesignal.com/blog/news-publishers-5-best-practices-for-sending-push-notifications" target="_blank">Best Practices for News Publications: Push Notification Frequency & Content</a>


# Troubleshooting Low CTR
There are a couple reasons that CTR could be dropping, review the below questions for common issues and solutions:

##When did you the drop start?
Its important to check what specific timeframes are you comparing. 
- What date did you start seeing a decrease in clicks?
- What dates in the past are you comparing with?

##What metrics are you specifically tracking?
Is your reporting tracking clicks or ctr?
- Clicks would be the actual click event where ctr could change based on how many devices are being sent to.
Are you tracking only specific types of messages?
- For example are you only tracking marketing messages or transactional messages or are you tracking all messages?

##How are you gathering analytics data?
- What reporting tools are you reviewing and how is the data generated?

##What changed?
Once you have a clear picture of the issue, you may notice that some internal changes may have occurred:

###Changed code on site
Did you or your dev team change the way OneSignal is setup in your app or site?
Was another push service added to the app/site?

####OneSignal not active on all pages of the site

If you removed OneSignal's code or Service Workers from your site, you will see a decrease in user stats and click rate. Make sure OneSignal is active and working on all pages of your site for best performance.

#### Another Service Worker 

Web Push Notifications require Service Workers to run on the browser so the user can receive push. Adding multiple Service Workers on a website (for example a service worker for PWA) can cause issues with push being received and CTR.

Please see our [Guide on adding multiple Service Workers to your site](https://documentation.onesignal.com/docs/onesignal-service-worker-faq)

If you have already fixed this or removed the other service worker, then users will need to return to the site for our service worker to be added again.

###Changed sending patterns
Have you or your team started sending more or less notifications since the drop?
Perhaps you started sending more API messages and less Marketing Messages.

Did you change any of the segments being targeted? For instance did you used to send notifications to all users, but around the date of the drop, you started sending to less users within the segments.

####Too Many Notifications
This can be different depending on the platform and type of notifications you are sending, but if you are blasting users with notifications every few hours with content they may not be interested in, that usually leads to low CTR.

#### Boring Notifications

Data shows adding flare to the notification gets more clicks. This can be emojis, images, icons, personalizations, localizations or just engaging words.

Some examples of this can be found in our blog and documentation:
- [Using Emojis](https://onesignal.com/blog/how-to-use-emojis-push-notifications/)
- [Notification Appearance](doc:appearance) 
- [Message Personalization](doc:personalization) 
- [Language & Localization](doc:language-localization)

## Free Plan Limitations

Free plans can only target 10,000 web push subscribers. If you have over this, you may be sending to older devices. You can [Delete Users](doc:delete-users) to target newer subscribers or upgrade to a paid plan.