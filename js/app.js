
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*---Start a new game---*/
	$("a.new").click(function() {
		$("#count").text("0");
		$("#guessList").text("");
	});

	/*---Number of guesses---*/

	  var count = 0;
      var display = document.getElementById("count");

      $("#guessButton").click(function(){
        count++;
        display.innerHTML = count;
    });

});

