//get previously added cart items
function getCartItems(){
    var _cartItems=sessionStorage.getItem("cartItems");
    if (sessionStorage.getItem("cartItems")==null) {
        sessionStorage.setItem("cartItems", JSON.stringify([]));
        return [];
    }
    return _cartItems;
}
function setCartItems(items){
    sessionStorage.setItem("cartItems", JSON.stringify(items));
}
//add item into cart
function addCartItem(item){
    let _cartItems=[];
    if (sessionStorage.getItem("cartItems")!=null ) {
        _cartItems=JSON.parse(sessionStorage.getItem("cartItems"));
    }
    _cartItems.push(item);
    sessionStorage.setItem("cartItems", JSON.stringify(_cartItems));
}
function resetStorage(){
    sessionStorage.setItem("cartItems", JSON.stringify([]));
    sessionStorage.setItem("deliveryMethod", JSON.stringify(""));
    //deliveryMethod
}