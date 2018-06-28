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
    score = 0;
    $("#score").text("Score: " + score);
    addersArray = [];
    changeAdders();
    changeValue();

};
function changeAdders(){

    for (var i = 0; i < 4; i++ ){
        var rand = Math.floor((Math.random()*12)+1);
        addersArray.push(rand);
    }
    console.log(addersArray);
};
function changeValue(){
    topaz = addersArray[0];
    ruby = addersArray[1];
    emerald = addersArray[2];
    saphire = addersArray[3];
   console.log(topaz,ruby,emerald,saphire);
};
function checkScore(){
    if (score === target){
        wins++;
        $("#wl").text("W: " + wins + " "+ "L: " + losses);
        target = Math.floor((Math.random()*100)+20);
        $("#target").text("Target: " + target);
        restartGame();
    
    }
    if (score > target){
        losses++;
        $("#wl").text("W: " + wins + " "+ "L: " + losses);
        score = 0;
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
    checkScore();
});

$("#ruby").on("click", function() {
    score = score + ruby;
    $("#score").text("Score: " + score);
    checkScore();
});

$("#saphire").on("click", function() {
    score = score + saphire;
    $("#score").text("Score: " + score);
    checkScore();
});
$(".reset-button").on("click", function() {
    restartGame();
});

});
