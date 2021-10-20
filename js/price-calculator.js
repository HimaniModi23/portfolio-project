const prices={
    small:7,
    medium:9,
    large:12,
    xLarge:14
}
// calculating the price of pizza 
function calculatePrice(item){
   var basePrice=getPriceForSize(item.size);
   var toppingPrice=item.toppings.length;
   return (basePrice+toppingPrice)*item.qty;
}
function getPriceForSize(size){
    var price=0;
    switch(size) {
        case "xlarge":
            price=prices.xLarge;
          break;
        case "large":
            price=prices.large;
          break;
        case "medium":
            price=prices.medium;
          break;
        case "small":
        default:
            price=prices.small;
      }
      return price;
}

function getSubTotal(){
    let cartItems=JSON.parse(getCartItems());
    var subTotal=0;
    cartItems.forEach(item => {
        subTotal += calculatePrice(item);
    });
    return subTotal;
}