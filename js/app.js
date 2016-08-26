//global variable for guessCounter and newGame
var count = 0;

//guess counter declaration
function guessCounter() {
  var display = document.getElementById("count");
  count++;
  display.innerHTML = count;
}

//new game declaration
function newGame(){
    count=0;
    $("#count").text("0");
    $("#guessList").text("");
}

//guess list declaration
function guessMade() {
  event.preventDefault();
  $("<li>" + $('#userGuess').val() + "</li>").appendTo("#guessList");
  $('#userGuess').val('');
}

$(document).ready(function(){
	
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
    guessCounter(); //update guess counter
    guessMade(); //display the number just guessed
    //guessFeedback(); //provide hot or cold hint
  });
  

});

