$(document).ready(function() {
    $("#Aboutus").submit(function(event) {
        
        function flavor() {
          var pizzaFlavour = document.getElementById("flavor").value;
          return parseInt(pizzaFlavour);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("number").value;
          return parseInt(pizzaNumber);
        }
})
});