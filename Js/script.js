let flavourPrice, crustPrice,toppingPrice,sizePrice ;

function sizePrice() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function newflavour(){
  if (document.getElementById("flavour").value == meat-pizza){
    flavourprice = 1500;
  }
  else if(document.getElementById("flavour").value == cheese-pizza) {
    flavourprice=1500;
  }
  else if  (document.getElementById("flavour").value == cheese-pizza){
    flavourprice=1500;
  }
  else if (document.getElementById("flavour").value == hawaii-pizza){
    flavourprice=1000;
  }
  
  else (document.getElementById("flavour").value == peperoni-pizza)
    flavourprice=1600;
    return parseInt(flavorPrice)
  };
  
  function newCrust (){
  if (document.getElementById("crust").value == crispy ){
    crustPrice=200;
  }
  else if  (document.getElementById("crust").value == stuffed ){
    crustPrice=400;
  }
 else  (document.getElementById("crust").value == gluton )
    crustPrice=300;
    return parseInt(crustPrice)
  };
function newTopping (){
  if   (document.getElementById("topping").value == sausage ){
    toppingPrice=150;
  }
  else if (document.getElementById("topping").value == beef ){
    toppingPrice=350;
  }
  else if (document.getElementById("topping").value == bacon ){
    toppingPrice=300;
  }
  else  (document.getElementById("topping").value == ham )
  toppingPrice=200;
  return parseInt(toppingPrice)
};
function totalPrice(e) {
  event.preventDefault();
  var totPrice = ( sizePrice() + newflavour() + newCrust() + newTopping());
  
      console.log(totalPrice);
  alert( "your order pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
