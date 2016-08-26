//global variables
var count = 0;
var randomNumber = 1;


function gameNumber(){
  randomNumber= Math.floor((Math.random() * 100) + 1);
  console.log(randomNumber);
}

function newGame(){
    count=0;
    $("#count").text("0");
    $("#guessList").text("");
    $("#userGuess").val('');
    $("#feedback").text("Make your Guess!").css("background", "#cc324b");
    gameNumber();
}

function guessCounter() {
  var display = document.getElementById("count");
  count++;
  display.innerHTML = count;
}

function guessList() {
  var getValue = $('#userGuess').val();
  var guess = +getValue;

  event.preventDefault();
  if (isNaN(guess)) {
    alert("Please enter a number");
    } 
  else {
    $("<li>" + $('#userGuess').val() + "</li>").appendTo("#guessList");
    guessCounter();
  }
}

function guessFeedback() {
  var getValue = $('#userGuess').val();
  var guess = +getValue;

  /*if (randomNumber===guess) {
    $("#feedback").text("Correct!").css("background", "green");
  }*/
  if (guess === randomNumber) {
  $("#feedback").text("Correct!").css("background", "green");
}
  else if (guess <= (randomNumber+1) && guess >= (randomNumber-1)) {
    $("#feedback").text("On Fire!").css("background", "red");
}
  else if (guess <= (randomNumber+5) && guess >= (randomNumber-5)) {
    $("#feedback").text("Hot").css("background", "orange");
}
else if (guess <= (randomNumber+10) && guess >= (randomNumber-10)) {
  $("#feedback").text("Warm").css("background", "yellow");
}
else if (guess <= (randomNumber+20) && guess >= (randomNumber-20)) {
  $("#feedback").text("Cold").css("background", "blue");
}
  else {
    $("#feedback").text("Ice Cold").css("background", "Aqua");
  };
}



$(document).ready(function(){
  //generate random number
  gameNumber();

	//show modal instructions
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  //hide modal instructions
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });

	//start a new game
	$("a.new").click(function() {
    newGame();
	});

	//on click of Guess button
  $("#guessButton").click(function() {
    guessList();
    guessFeedback();
    $('#userGuess').val('');

});
});

