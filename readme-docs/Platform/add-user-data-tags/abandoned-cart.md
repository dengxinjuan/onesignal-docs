---
title: "Abandoned Cart"
slug: "abandoned-cart"
excerpt: "Reminding users about their shopping list."
hidden: false
createdAt: "2016-09-02T02:05:18.582Z"
updatedAt: "2021-12-27T23:50:06.645Z"
---
[block:callout]
{
  "type": "info",
  "body": "[MuteSix Increased Revenue by 182% with Abandoned Cart Notifications](https://onesignal.com/case-studies/mutesix-x-inspire-uplift-case-study).\n\n[Princeton Review 400% increase in conversions Case Study](https://onesignal.com/case-studies/princeton-review)\n\n[Evino Increases Revenue 12% Case Study](https://onesignal.com/case-studies/evino-case-study).",
  "title": "Case Studies - ecommerce"
}
[/block]
One of the most common uses for notifications is reminding customers about items left in their shopping carts. Used correctly, these notifications will often increase revenue as seen in numerous [Case Studies](https://onesignal.com/case-studies).

This guide will walk you through step-by-step with example code how add abandoned cart notifications to your site or app. Once setup, OneSignal will automatically send your customized message to users when they leave items in their cart.

# Step 1. Add Abandoned Cart Code

When a customer adds an item to the cart (usually by clicking "Add to cart" button), let's use [OneSignal Data Tags](doc:add-user-data-tags) to track 3 things: 1 - the event occurred (required), 2 - the name of the item added (optional), 3 - the image url of the item added (optional).

We recommend tagging customers the moment they add an item to the shopping cart and if multiple items are added, override these tags with the latest item because it will be easier for the customer to remember the most recent item added.

The below example covers if your store's "add to cart" button is on a page with a single button (like a product details page) or multiple buttons (multiple products to add to cart).
[block:code]
{
  "codes": [
    {
      "code": "<script>\nlet productName = \"Name of the Product\";//Replace with the name of item\nlet productImageURL = \"https://yoursiteurl.com/image-file.jpg\";//Replace with the url to the image\n//Use this example method when user adds item to cart\nfunction addTagsUponCartUpdate(productName, productImageURL) {\n  OneSignal.push(function () {\n    let timestamp = Math.floor(Date.now() / 1000);\n    OneSignal.sendTags({\n      cart_update: timestamp,\n      product_name: productName,\n      product_image: productImageURL,\n    }).then(function (tagsSent) {\n      // Callback called when tags have finished sending\n      console.log(tagsSent);\n    });\n  });\n}\n</script>",
      "language": "html",
      "name": "Basic Example"
    },
    {
      "code": "<script>\n//Example if page has a single \"Add to cart\" button like \"product description\" page\nwindow.addEventListener(\"load\", () => {\n  // replace \".add-to-cart-btn\" with the class name of your cart button element\n  const addToCartButton = document.querySelector(\".add-to-cart-btn\");\n  // replace \".product-title\" with the class name of the element containing your product name\n  let productName = document.querySelector(\".product-title\").innerHTML;\n  console.log(\"productName: \", productName);\n  // replace \".product-img\" with the class name of your product img element\n  let productImageURL = document.querySelector(\".product-img\").src;\n  console.log(\"productImageURL: \", productImageURL);\n  addToCartButton.addEventListener(\"click\", () => {\n    OneSignal.push(function () {\n      let timestamp = Math.floor(Date.now() / 1000);\n      OneSignal.sendTags({\n        cart_update: timestamp,\n        product_name: productName,\n        product_image: productImageURL,\n      }).then(function (tagsSent) {\n        // Callback called when tags have finished sending\n        console.log(tagsSent);\n      });\n    });\n  });\n});\n</script>",
      "language": "html",
      "name": "Web-Single Add To Cart Button"
    },
    {
      "code": "<script>\n//Example if page has multiple \"Add to cart\" buttons, see: https://onesignaldemo.github.io/\nwindow.addEventListener(\"load\", () => {\n  let buttonsDOM = [];\n  // replace \".add-to-cart-btn\" with the class name of your cart button element\n  const addToCartButtons = [\n    ...document.querySelectorAll(\".add-to-cart-btn\"),\n  ];\n  buttonsDOM = addToCartButtons;\n  addToCartButtons.forEach((addToCartButton) => {\n    // this example adds the product id witin each \"add-to-cart\" button\n    // this creates unique id attributes for each product to identify them\n    // this example assumes you use unique id attributes for the product title and image\n    let id = addToCartButton.dataset.id;\n    addToCartButton.addEventListener(\"click\", () => {\n      // replace `product-title-id-${id}` with the id of the element containing your product name\n      let productName = document.getElementById(`product-title-id-${id}`)\n        .innerHTML;\n      console.log(\"productName: \", productName);\n      // replace `product-img-id-${id}` with the id of the element containing your product image\n      let productImageURL = document.getElementById(`product-img-id-${id}`)\n        .src;\n      console.log(\"productImageURL: \", productImageURL);\n      OneSignal.push(function () {\n        let timestamp = Math.floor(Date.now() / 1000);\n        OneSignal.sendTags({\n          cart_update: timestamp,\n          product_name: productName,\n          product_image: productImageURL,\n        }).then(function (tagsSent) {\n          // Callback called when tags have finished sending\n          console.log(tagsSent);\n        });\n      });\n    });\n  });\n});\n</script>",
      "language": "html",
      "name": "Web-Multiple Add To Cart Buttons"
    }
  ]
}
[/block]
Next, let's make sure we **do not** send abandoned cart notifications if the user checks out or removes items from their cart. We need to check the cart and if item(s) are removed, update the tags to any item still in the cart and if a purchase is made, remove all tags.

Tags can be changed by setting them to a new value or deleted by setting them to an empty string. 
[block:code]
{
  "codes": [
    {
      "code": "<script>\n//Removes the cart tags, call when user purchases or removes items from cart\nfunction removeCartTags(){\n  OneSignal.push(function () {\n    OneSignal.sendTags({\n      cart_update: \"\",\n      product_name: \"\",\n      product_image: \"\",\n    }).then(function (tagsSent) {\n      // Callback called when tags have finished sending\n      console.log(tagsSent);\n    });\n  });\n}\n</script>",
      "language": "html",
      "name": "Basic Example"
    },
    {
      "code": "<script>\n//Example update/remove tags if cart changes, call this method within your \nfunction updateOSTagsOnCartChange() {\n  // this example checks how many items are in the cart element\n  // replace \".cart-content\" with the class name of your div holding all cart items\n  const cartContent = document.querySelector(\".cart-content\");\n  // if an item remains, update tags to the topmost item\n  if (cartContent.children.length > 0) {\n    // replace \".cart-product-title\" with the class name of the element containing your product name\n    let productName = document.querySelector(\".cart-product-title\")\n      .innerHTML;\n    console.log(\"cart productName: \", productName);\n    // replace \".cart-product-img\" with the class name of your product img element\n    let productImageURL = document.querySelector(\".cart-product-img\").src;\n    console.log(\"productImageURL: \", productImageURL);\n    OneSignal.push(function () {\n      let timestamp = Math.floor(Date.now() / 1000);\n      OneSignal.sendTags({\n        cart_update: timestamp,\n        product_name: productName,\n        product_image: productImageURL,\n      }).then(function (tagsSent) {\n        // Callback called when tags have finished sending\n        console.log(tagsSent);\n      });\n    });\n  } else {\n    OneSignal.sendTags({\n      cart_update: \"\",\n      product_name: \"\",\n      product_image: \"\",\n    }).then(function (tagsSent) {\n      // Callback called when tags have finished sending\n      console.log(tagsSent);\n    });\n  }\n}\n\n// replace \".clear-cart\" with the class name of your element that removes cart items \nconst clearCartBtn = document.querySelector(\".clear-cart\");\nif (typeof clearCartBtn != \"undefined\" && clearCartBtn != null) {\n  clearCartBtn.addEventListener(\"click\", () => {\n    updateOSTagsOnCartChange();\n  });\n}\n\n// replace \".submit-payment\" with the class name of your element that submits payment\nconst submitPaymentBtn = document.querySelector(\".submit-payment\");\nif (typeof submitPaymentBtn != \"undefined\" && submitPaymentBtn != null) {\n  submitPaymentBtn.addEventListener(\"click\", () => {\n    console.log(\"submit payment\");\n    OneSignal.sendTags({\n      cart_update: \"\",\n      product_name: \"\",\n      product_image: \"\",\n    }).then(function (tagsSent) {\n      // Callback called when tags have finished sending\n      console.log(tagsSent);\n    });\n  });\n}\n});\n</script>",
      "language": "html",
      "name": "Advanced Examples"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Abandoned Cart Code Finished",
  "body": "If the user leaves your site without checking out (abandoning their cart), you now have enough information to target them with a personalized abandoned cart notification."
}
[/block]

----

# Step 2. Setup Abandoned Cart Segment

Once the tagging setup is complete we'll need to target these users and send them notifications after some time has passed. In your OneSignal Dashboard, go to **Audience** > **Segments**.

OneSignal's [Segments](doc:segmentation) allow for grouping devices based on the data collected: 1 - if they have items in the cart and 2 - how long it has been since those items were left in the cart.

## Option 1. With Last Session Filter:

This segment will include users that have items in their cart and have left the site or mobile app over 1 hour ago. The user adds an item to the cart, then leaves the app or site, 1 hour later they will be in this segment.

1. Select the "User Tag" filter
2. Set `cart_update` to "exists"
3. Select "Add Filter" to create an "AND" relationship.
4. Select "Last Session" filter and set "greater than" `1`.
5. Select "Add Filter" again and set another "Last Session" filter to "less than" `24`. (the user will leave the segment after 24 hours).
6. Name the Segment **Abandoned Cart 1 Hour** (not required but helpful to remember).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/284be81-Screen_Shot_2021-12-27_at_3.46.48_PM.png",
        "Screen Shot 2021-12-27 at 3.46.48 PM.png",
        1330,
        1042,
        "#eef0f2"
      ]
    }
  ]
}
[/block]
## Option 2. With Time Operators:
**Paid Plan Required**

This segment will include users that added an item to their cart over 1 hour ago.

The `cart_update` tag key has a unix timestamp value. We can segment users based on how much time has passed since that tag was added.

1. Select the "User Tag" filter. 
2. Set `cart_update` with "time elapsed greater than" and number of seconds.
Example: `3600` for 1 hour (60 seconds * 60 minutes).
3. Set another `cart_update` tag filter with "time elapsed less than" and a number in seconds.
Example: `86400` for 1 day.
4. Name the Segment **Abandoned Cart 1 Hour** (not required but helpful to remember)
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3cb4102-Screen_Shot_2021-12-27_at_3.48.39_PM.png",
        "Screen Shot 2021-12-27 at 3.48.39 PM.png",
        1330,
        1042,
        "#eff1f3"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Abandoned Cart Segment Finished",
  "body": "As users add/remove items from their cart and leave/return to the site, they will automatically move in and out of this segment. \n\nYou can always come back into this segment later if you want to change the time frame from 1 hour to a higher timeframe.\n\nSegments can be duplicated to create more and setup different time frames if you want to send different messages after longer timeframes as well."
}
[/block]

----

# Step 3. Create Abandoned Cart Message

This is where we can use some creativity! If your site/app has certain phrases, language, or emojis you like, then use it! All that is great for brand recognition, get users to click, and getting them to checkout.

Also, using the `product_name` and `product_image` tags, we can include this data within the message for [Message Personalization](doc:personalization).

For example, we can say: "Hey Cool Cat 😸 ! Your new Yellow Cat Water Dish is waiting for you!".
And include the picture of the item in the message.

In the OneSignal Dashboard, go to **Messages** > **Templates** and select "New Push Template".

[Templates](doc:templates) are a way to create reusable message and monitor how many times they have been sent and clicked.

1. Name the Template: **Abandoned Cart 1 Hour** or whatever you named the Segment.
2. Add your Title, example: Hey Cool Cat 😸 !
3. Add your Message, example: Your new {{product_name | default: "item"}} is waiting for you!
- here `{{product_name | default: "item"}}` will be replaced by whatever value is set for that tag. If no tag is set than "item" will be used.
4. Set the Image to be: `{{product_image}}`
- here `{{product_image}}` will be replaced with the URL of the image to the product. **If tag value is not a direct link to the image, then it will not show.** 
5. Set the Launch URL to be the URL of your checkout page
- here if the checkout page is unique per user, we would need to either link to the cart page (if not unique) or use more tag substitution. For example, if your checkout page is: `https://yoursite.com/username/checkout` we need to tag the user with a `user_name` tag so their username can be replaced if we use: `https://yoursite.com/{{user_name}}/checkout`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0666e9-Screen_Shot_2020-10-07_at_9.25.51_PM.png",
        "Screen Shot 2020-10-07 at 9.25.51 PM.png",
        976,
        1316,
        "#f0f1f2"
      ]
    }
  ]
}
[/block]
**Important:** you can use any language in these fields (does not have to be English) and if you want to add more than 1 language, just select "Add Languages" to put your own translation for the message.

Emojis can be copy-pasted into the field. [Here is a great site for emojis.](https://getemoji.com/)

6. Under the preview, click "Send To Test Device" to test out how it looks! See [Find Devices & Set Test Users](doc:users-and-devices) if you are not a test user yet.

7. When done press "Save" at the bottom.
[block:callout]
{
  "type": "success",
  "title": "Abandoned Cart Message Finished",
  "body": "Now that our reusable template is setup, we can return to the **Messages** > **Templates** page to keep an eye on how many times this has been sent and opened."
}
[/block]

----

# Step 4. Setup Abandoned Cart Automated Messages

Within the OneSignal Dashboard visit **Messages** > **Automated** > **New Automated Push** to setup this Abandoned Cart Automated Message campaign.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b56cb44-Screen_Shot_2020-10-07_at_9.42.33_PM.png",
        "Screen Shot 2020-10-07 at 9.42.33 PM.png",
        1084,
        551,
        "#dfe2e5"
      ]
    }
  ]
}
[/block]
1. Name the Automated Message: **Abandoned Cart 1 Hour** (should be the same name as the Segment and Template to keep things simple).
2. Select "Send to Particular Segment(s)" > Click "X" on the Subscribed Users Segment > Click "Add Segment" and select "+" next to the **Abandoned Cart 1 Hour** segment.
3. Select the Message Template: **Abandoned Cart 1 Hour**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b811c7b-Screen_Shot_2020-10-07_at_10.01.13_PM.png",
        "Screen Shot 2020-10-07 at 10.01.13 PM.png",
        1075,
        887,
        "#ecedef"
      ]
    }
  ]
}
[/block]
4. Set the Delivery Schedule to be "Immediately"
- here you can use "Intelligent Delivery" or "Timezone" option, but the message may take up to 24 hours. Details in [Sending Push Messages](doc:sending-notifications#intelligent-delivery).
5. Select "If the user returns to the app"
- here the message will be sent again after the user returns to the site or app and if they are still in the segment.
- **Optional:** if you select "After a certain amount of time" you can set 24 hours to resend the push if the user is still in the segment after 24 hours.
6. Click "Make Active"
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/14daa1b-Screen_Shot_2020-10-07_at_10.09.01_PM.png",
        "Screen Shot 2020-10-07 at 10.09.01 PM.png",
        1054,
        336,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Abandoned Cart Code Finished! 🥳",
  "body": "You have successfully finished Abandoned Cart setup! Visit your site or app, make sure to subscribe, then add an item to your cart and leave the site.\n\nIf you have a paid OneSignal account, you should receive the abandoned cart push after about an hour.\n\nIf you are on a free OneSignal account, Automated Messages may take several hours to send."
}
[/block]

----

#Step 5. Optional Setup Abandoned Cart Performance Tracking

Once abandoned cart message are set up, you can track how well it performs by going to [Templates](doc:templates) and looking at the open and click rates.

If you have a Paid OneSignal Account, you can also use [Outcomes](doc:outcomes) to track actual revenue brought in.

When the customer finishes payment, upon selection of the "Submit Payment" button call the following method.
[block:code]
{
  "codes": [
    {
      "code": "//Example to get the price and total items in cart\n// replace \".checkout-price-total\" with the class name the element containing the cart's total price\nconst checkoutPriceTotal = document.querySelector(\".checkout-price-total\").innerText;\n// optional replace \".checkout-items-total\" with the class name the element containing the total items in cart to be purchased\nconst checkoutItemsTotal = document.querySelector(\".checkout-items-total\").innerText;\n//Call this method in the click event for the final button to submit payment\nfunction updateOSOnCartPurchase(checkoutPriceTotal, checkoutItemsTotal) {\n  let purchasePriceTotal = parseFloat(checkoutPriceTotal);\n  let purchasedItemCount = parseInt(checkoutItemsTotal);\n  OneSignal.push(function () {\n    OneSignal.sendOutcome(\"Purchase\", purchasePriceTotal);\n    OneSignal.sendOutcome(\"Purchased Item Count\", purchasedItemCount);\n  });\n}\n//example of adding this method to the \"submit-payment\" button\nconst submitPurchaseButton = document.querySelector(\".submit-payment\");\nif (submitPurchaseButton) {\n  submitPurchaseButton.addEventListener(\"click\", () => {\n    updateOSOnCartPurchase(checkoutPriceTotal, checkoutItemsTotal);\n  });\n}",
      "language": "javascript"
    }
  ]
}
[/block]
- `OneSignal.sendOutcome("Purchase", purchasePriceTotal);` - will send OneSignal the total purchase amount and accumulate that revenue for all purchases made by all customers that clicked a push or received a push within a specific timeframe (influenced) and made the purchase.

- `OneSignal.sendOutcome("Purchased Item Count", purchasedItemCount);` - will send OneSignal the total amount of items purchased associated with the customer that directly clicked the push to make a purchase or made the purchase "influenced" by a push.
[block:callout]
{
  "type": "success",
  "title": "🔥 Full Abandoned Cart Implementation Achieved! 👏 🎊",
  "body": "You are now an OneSignal expert! You achieved an in-depth implementation of OneSignal's offering and are ready to do more! Continue adding more best practices outlined in our [Use Cases & Best Practices](doc:use-cases-best-practices) or follow the links below to go into more depth on these individual features."
}
[/block]