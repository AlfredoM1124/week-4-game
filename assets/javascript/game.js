
	var wins = 0;
	var losses = 0;
	// randomly sets the goal for each round
	var goal = (Math.floor(Math.random()*2500)+467);
	console.log(goal);

	var pointsScored = 0;
    // The playable characters for this game
	var heroes = {
		Reindhart: 521,
		DVa: 417,
		McCree: 375,
		Mercy: 128,
	};

	// Supposed to reset all scores to 0 besides wins and loss
	function refreshGame() {
		$("#pointsScored").html(pointsScored);
		$("#endGoal").html(goal);
		console.log(goal);
	};

	// Displays the goal and points scored already
	$("#pointsScored").html(pointsScored);
	$("#endGoal").html(goal);

	// Individual buttons for each Hero
	$("#Reindhart").on("click", function(event){
		console.log("You clicked Reindhart...")
		pointsScored += heroes.Reindhart;
		$("#pointsScored").html(pointsScored);
	});
	$("#DVa").on("click", function(event){
		console.log("You clicked DVa...")
		pointsScored += heroes.DVa;
		$("#pointsScored").html(pointsScored);
	});
	$("#McCree").on("click", function(event){
		console.log("You clicked McCree...")
		pointsScored += heroes.McCree;
		$("#pointsScored").html(pointsScored);
	});
	$("#Mercy").on("click", function(event){
		console.log("You clicked Mercy...")
		pointsScored += heroes.Mercy;
		$("#pointsScored").html(pointsScored);
	});
	// Keeps track of wins and losses
	$(document).on("click", function(){
	if(pointsScored > goal){
		console.log("You lose");
		losses++;
		$("#losses").html(losses);
		refreshGame();
	}
	else if(pointsScored === goal){
		console.log("You win.");
		wins++;
		$("#wins").html(wins);
		refreshGame();
	}

});