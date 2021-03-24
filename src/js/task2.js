// Calculate the total cost of items in the Shopping Cart
// Locally - apply a 20 percent discount to food type items.
// N.B that this uses the shoppingCart object from shoppingCart.js

function shoppingCartTotal() {
    var theBill = getCartTotal(shoppingCart).toFixed(2);
    var outStr = `Your bill for today, with food discount is: £${theBill}`;
    document.getElementById('js-output').innerHTML = outStr;
}

function getCartTotal(cart) {
    var totalPrice = 0;
    var itemPrice = 0;
    var foodDiscountPercent = 20;

    for (const item of cart) {
        itemPrice = item.quantity * item.price;
        if (item.type == 'food') {
            itemPrice *= (100 - foodDiscountPercent) / 100;
        }
        totalPrice += itemPrice;
    }
    return totalPrice;
}
