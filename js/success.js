$(document).ready(function(){
    let cartItems=JSON.parse(getCartItems());
    if(cartItems.length==0){
        $("#no-cart-items").show();
        $("#cart-content").hide();
    }
    loadCart();
    var _deliveryMethod=JSON.parse(sessionStorage.getItem("deliveryMethod"));
    console.log(_deliveryMethod)
    $("#deliveryMethod").append(_deliveryMethod);
    //from storage.js
    resetStorage();
    function loadCart(){
        cartItems.forEach(item => {
            var price=calculatePrice(item);
            $("#cart-item-tbl").append(getcartItemHTML(item,price));
        });
        var subTotal=getSubTotal();
        var tax= subTotal * 0.13;
        $("#sub-total").empty();

        $("#sub-total").append("$ "+ subTotal);
        $("#tax").append("$ "+ tax);
        $("#total").append("$ "+ (subTotal+tax));
    }
    function getcartItemHTML(item, price){
        var toppingString=getToppingString(item.toppings);
        return `
        <tr>
            <td class="" style="width: 10%;">${item.size}</td>
            <td class="text-center" style="width: 10%;">${item.qty}</td>
            <td class="text-center" style="width: 20%;">${item.sauce}</td>
            <td class="text-center" style="width: 30%;">${toppingString}</td>
            <td class="text-center" style="width: 10%;">$ ${price}</td>
        </tr>
        `
    }
    function getToppingString(toppings){
        var toppingString="";

        toppings.forEach(topping=>{
            toppingString += topping +", "
        });
        return toppingString;
    }
   
})
$(document).ready(function(){
  
})