//variables
$(document).ready(function(){

var addersArray = [];
var rand = 0;
var target = Math.floor((Math.random()*100)+20);
$("#target").text("Target: " + target);
var score = 0;
$("#score").text("Score: " + score);

var wins = 0;
var losses = 0;
$("#wl").text("W: " + wins + " "+ "L: " + losses);
var topaz;
var ruby;
var emerald;
var saphire;

//functions
function restartGame(){
    score = 0
    changeAdders();
    changeValue();

};
function changeAdders(){

    for (var i = 0; i < 4; i++ ){
        var rand = Math.floor((Math.random()*12)+1);
        addersArray.push(rand);
        console.log(addersArray);
    }
};
function changeValue(){
    topaz = addersArray[0];
    ruby = addersArray[1];
    emerald = addersArray[2];
    saphire = addersArray[3];
   console.log(topaz,ruby,emerald,saphire);
};
function checkScore(){
    if (score = target){
        wins++;
        $("#wl").text("W: " + wins + " "+ "L: " + losses);
    
    }
    if (score > target){
        losses++
        $("#wl").text("W: " + wins + " "+ "L: " + losses);
        restartGame();
    }
}


//inital load
changeAdders();
changeValue();


// Buttons
$("#topaz").on("click", function() {
    score = score + topaz;
    $("#score").text("Score: " + score);
    checkScore();
    console.log(score);
});

$("#emerald").on("click", function() {
    score = score + emerald;
    $("#score").text("Score: " + score);
});

$("#ruby").on("click", function() {
    score = score + ruby;
    $("#score").text("Score: " + score);
});

$("#saphire").on("click", function() {
    score = score + saphire;
    $("#score").text("Score: " + score);
});
$(".reset-button").on("click", function() {

});

// Keyboard move controls
// $(document).keyup(function(e) {
// switch (e.which) {

//         // Move Buttons (Keyboard Down)
//         case 40:
//         captainPlanet.animate({ top: "+=200px" }, "normal");
//         break;

//         // Move Buttons (Keyboard Right)
//         case 39:
//         captainPlanet.animate({ left: "+=200px" }, "normal");
//         break;

//         // Move Buttons (Keyboard Up)
//         case 38:
//         captainPlanet.animate({ top: "-=200px" }, "normal");
//         break;

//         // Move Buttons (Keyboard Left)
//         case 37:
//         captainPlanet.animate({ left: "-=200px" }, "normal");
//         break;

//         default:
//         break;
//     }
// });
});