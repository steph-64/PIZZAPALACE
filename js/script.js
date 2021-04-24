
function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}

function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}

function mushroomsandgarlic() {
    var addMushroomandgarlicchecked= 0;
    var addMushroomandgarlic= document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(Mushroomsandgarlic);
}

function sausagesandkale() {
    var sausageandkale = 0;
    var addsausageandkale = document.getElementById("toppingone");
    if (addsausageandkale.checked === true) {
        sausagesandkale = 140;
    }
    return parseInt(sausage);
}

function cheeseandgarlic() {
    var cheeseandgarlic= 0;
    var addocheeseandgarlic = document.getElementById("toppingone");
    if (addcheesendgarlicchecked === true) {
        cheeseandgarlic = 130;
    }
    return parseInt(onion);
}

function () {
    var hamandpineapple= 0;
    var addhamandpineapple = document.getElementById("toppingone");
    if (addhamandpineapple.checked === true) {
        hamandpineapple = 120;
    }
    return parseInt(tikkaSauce);
}

function tomatoesandspinach() {
    var tomatoesandspinach = 0;
    var addtomatoesandspinach = document.getElementById("toppingone");
    if (tomatoesandspinach.checked === true) {
        tomatoesandspinach= 110;
    }
    return parseInt(cheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

    console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice + ".")

}



// Delivery form inputs and alerts



$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
        // $(this).get(0).reset();
        //  event.preventDefault();
    });

});