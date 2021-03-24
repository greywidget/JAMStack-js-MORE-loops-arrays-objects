// Calculate the total cost of items in the Shopping Cart
// Discount details are now passed to the getCartTotal() function
// N.B that this uses the shoppingCart object from shoppingCart.js

function shoppingCartTotal() {
    var discount = 20;
    var itemType = 'food';
    var theBill = getCartTotal(shoppingCart, discount, itemType).toFixed(2);
    var outStr = `Your bill for today, with ${discount} percent discount on ${itemType} is: £${theBill}`;
    document.getElementById('js-output1').innerHTML = outStr;

    discount = 50;
    itemType = 'alcohol';
    theBill = getCartTotal(shoppingCart, discount, itemType).toFixed(2);
    var outStr = `Your bill for today, with ${discount} percent discount on ${itemType} is: £${theBill}`;
    document.getElementById('js-output2').innerHTML = outStr;

    discount = 10;
    itemType = 'any';
    theBill = getCartTotal(shoppingCart, discount, itemType).toFixed(2);
    var outStr = `Your bill for today, with ${discount} percent discount on EVERYTHING is: £${theBill}`;
    document.getElementById('js-output3').innerHTML = outStr;
}

function getCartTotal(cart, discountPercent, itemType) {
    var totalPrice = 0;
    var itemPrice = 0;

    for (const item of cart) {
        itemPrice = item.quantity * item.price;
        if (item.type == itemType || itemType == "any") {
            itemPrice *= (100 - discountPercent) / 100;
        }
        totalPrice += itemPrice;
    }
    return totalPrice;
}
