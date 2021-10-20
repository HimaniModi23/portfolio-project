$(document).ready(function(){
    console.log(getCartItems());
    $("#pizza-form").on("submit",function(e){
        //remove old error messages
        $("#error").empty()
        var form=$("#pizza-form")
        const data = getFormData(form);
        var errorFlag=false;

        var qty=parseInt(data.qty);
        //validation
        if(typeof(data.size) == 'undefined'){
            errorFlag=true;
            displayError("Please select size!");
        }
        if(qty<1){
            errorFlag=true;
            $("#qty").focus();
            displayError("Quantity should be more than 1!");
        }
        if(data.toppings.length==0){
            errorFlag=true;
            displayError("Please select your toppings!");
        }
        //if there is no error add item to the cart
        if(errorFlag===false){
            addCartItem(data);
        }
        else{
            e.preventDefault();
        }
    })
});

function displayError(message){
    $("#error").append(
        `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    )
}

//get form data object
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    var toppings=[];
    $.map(unindexed_array, function(n, i){
        if(n['name']==="toppings"){
            toppings.push(n['value'])
        }
        else{
            indexed_array[n['name']] = n['value'];
        }
       
    });
    indexed_array['toppings']=toppings;
    return indexed_array;
}