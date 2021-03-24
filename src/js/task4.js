// Return items from the cart if the price falls within a low -> high Range.
// The first function bases selection simply on the price.
// The second function allows selection to be based on price * quantity if
//   the quantity boolean is passed as true.
// N.B that this uses the shoppingCart object from shoppingCart.js

function getItems() {
    // Example One - getItemsInPriceRange() (doesn't use quantity)
    var lowPrice = 0.4;
    var highPrice = 3.5;
    var outStr = `<h3>Low: ${lowPrice}, High: ${highPrice}</h3>`
               + "<code>";
    var items = getItemsInPriceRange(shoppingCart, lowPrice, highPrice);

    for (const item of items) {
        outStr += JSON.stringify(item) + "<br>";
    }
    outStr += "</code>";
    document.getElementById('js-output1').innerHTML = outStr;
    
    // Example Two - getItemsInItemRange() with quantity set to false
    outStr = `<h3>Low: ${lowPrice}, High: ${highPrice}, Quantity: false</h3>`
               + "<code>";
    var items = getItemsInItemRange(shoppingCart, lowPrice, highPrice, false);

    for (const item of items) {
        outStr += JSON.stringify(item) + "<br>";
    }
    outStr += "</code>";
    document.getElementById('js-output2').innerHTML = outStr;
    
    // Example Three - getItemsInItemRange() with quantity set to true
    outStr = `<h3>Low: ${lowPrice}, High: ${highPrice}, Quantity: true</h3>`
               + "<code>";
    var items = getItemsInItemRange(shoppingCart, lowPrice, highPrice, true);

    for (const item of items) {
        outStr += JSON.stringify(item) + "<br>";
    }
    outStr += "</code>";
    document.getElementById('js-output3').innerHTML = outStr;

}

function getItemsInPriceRange(cart, lowPrice, highPrice) {
    var items = [];

    for (const item of cart) {
        if (item.price >= lowPrice && item.price <= highPrice) {
            items.push(item);
        }
    }
    return items;
}

function getItemsInItemRange(cart, lowPrice, highPrice, quantity) {
    var items = [];

    for (const item of cart) {
        if (quantity === true) 
            itemPrice = item.quantity * item.price;
        else
            itemPrice = item.price;

        if (itemPrice >= lowPrice && itemPrice <= highPrice) {
            items.push(item);
        }
    }
    return items;
}
