//global variable
var count = 0;

function gameNumber(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);
  return randomNumber;
}

function newGame(){
    count=0;
    $("#count").text("0");
    $("#guessList").text("");
    gameNumber();
}

function guessCounter() {
  var display = document.getElementById("count");
  count++;
  display.innerHTML = count;
}

function guessMade() {
  var getValue = $('#userGuess').val();
  var newValue = +getValue;
  //event.preventDefault();
  $("#feedback").text("Make your Guess!");
  if (isNaN(newValue)) {
    $("#feedback").text("Please enter a number");
    $('#userGuess').val('');
    }
  else {
    $("<li>" + $('#userGuess').val() + "</li>").appendTo("#guessList");
    $('#userGuess').val('');
    guessCounter();
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
    guessMade(); //display the number just guessed
    //guessFeedback(); //provide hot or cold hint
  }); 
});

