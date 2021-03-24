// Calculate the total cost of items in the Shopping Cart
// N.B that this uses the shoppingCart object from shoppingCart.js

function shoppingCartTotal() {
    var theBill = getCartTotal(shoppingCart).toFixed(2);
    var outStr = `Your bill for today is: £${theBill}`;
    document.getElementById('js-output').innerHTML = outStr;
}

function getCartTotal(cart) {
    var totalPrice = 0;
    var itemPrice = 0;

    for (const item of cart) {
        itemPrice = item.quantity * item.price;
        totalPrice += itemPrice;
    }
    return totalPrice;
}
