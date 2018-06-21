var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

// When we click on start/reset box
document.getElementById("startReset").onclick = function() {
	// If we are playing
	if (playing == true) {
		location.reload(); // Reload page

	} else { // If we are not playing

		// Change mode to playing
		playing = true;

		// Set score to 0
		score = 0;
		document.getElementById("scoreValue").innerHTML = score;
		
		// Show countdown box
		show("timeRemaining");
			timeRemaining = 60;
		document.getElementById("timeRemainingValue").innerHTML = timeRemaining;

		// Hide GAME OVER! box
		hide("gameOver");
		
		// Change button to Reset
		document.getElementById("startReset").innerHTML = "Reset Game";

		// Start Countdown
		startCountdown();

		// Generate a new Q&A
		generateQA();
	}
}

// clicking on an answer box	
for(i=1; i<5; i++) {
	document.getElementById("box"+i).onclick = 
		function() {
			// check if we are playing
			if (playing == true) { // yes
				
				// correct answer
				if (this.innerHTML == correctAnswer) {
					
					// increase score by 1
					score ++;
					document.getElementById("scoreValue").innerHTML = score;
					
					// hide wrong box and show correct box
					hide("wrong");
					show("correct");
					setTimeout(function() {
						hide("correct");
					}, 1000);

					// generate new Q&A
					generateQA();

				}else{
				
				// wrong answer
					hide("correct");
					show("wrong");
					setTimeout(function() {
						hide("wrong");
					}, 1000);
				}
			}
		}
}


// When we click on answer box...
	// If we are playing
		// Correct?
			// YES
				// Increase score
				// Show correct box for 1 sec.
				// Generate new Q&A
			// NO
				// Show try again box for 1 sec.

// functions
// start counter
function startCountdown() {
	action = setInterval(function() {
		timeRemaining -= 1;
	document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
		if (timeRemaining == 0) { // game over
			stopCountdown();
			show("gameOver");
	document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your Score Is " + score + ".</p>";
			hide("timeRemaining");
			hide("correct");
			hide("wrong");
			playing = false;
	document.getElementById("startReset").innerHTML = "Start Game";
		}
	}, 1000);
}

// stop counter
function stopCountdown() {
	clearInterval(action);
}

// hide an element
function hide(Id) {
	document.getElementById(Id).style.display = "none";
}

// show an element
function show(Id) {
	document.getElementById(Id).style.display = "block";
}

// generate question and multiple answers
function generateQA() {
		var x = 1+ Math.round(9*Math.random());
		var y = 1+ Math.round(9*Math.random());
		correctAnswer = x*y;
	document.getElementById("question").innerHTML = x + "x" + y;
		var correctPosition = 1+ Math.round(3*Math.random());

	// fill one box with the correct answer
	document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

	// fill the other boxes with the wrong answers
	var answers = [correctAnswer];

	for(i=1; i<5; i++) {
		if (i != correctPosition) {
			var wrongAnswer;
			do{
				{	// a wrong answer
					wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
				}
			} while(answers.indexOf(wrongAnswer)>-1)

	document.getElementById("box"+i).innerHTML = wrongAnswer;
			answers.push(wrongAnswer);
		}
	}
}




















