// Set the total score needed for victory in the game
var targetNumber = 1500;
$("#number-to-guess").html(targetNumber);
// Create the characters and give them stats 
var game = {
	Reindhart: {attack: 50, healthPoints: 500},
	DVa: {attack: 100, healthPoints: 300},
	McCree: {attack: 200, healthPoints: 100},
	Mercy: {attack: 25, healthPoints: 400},

	HeroSelect: false,
	defenderSelect: false,

	assignStats: function(stats, Heroes) {		

		Heroes.attr("atk", stats.attack);
		Heroes.attr("base", stats.attack);
		Heroes.attr("hp", stats.healthPoints);

		console.log("Attack: " + Heroes.attr("atk") + " Health: " + Heroes.attr("hp"));
		Heroes.append("<p>Attack: " + Heroes.attr("atk") + " Health: " + Heroes.attr("hp") + "</p>");
	}
}

var Rein = $("#Reindhart");
var DVa = $("#DVa");
var McCree = $("#McCree");
var Mercy = $("#Mercy");
var combo = 1;

game.assignStats(game.Reindhart, Rein);
game.assignStats(game.DVa, DVa);
game.assignStats(game.McCree, McCree);
game.assignStats(game.Mercy, Mercy);

$(document).on("click", "#Characters>div", function() {

	if (game.HeroSelect == false) {
		var selectChar = $(".character").not(this).remove();

		selectChar.appendTo("#Villains");

		game.HeroSelect = true;
	}

});



//When the attack button is hit
$(document).on("click", "#attack", function() {
	//If a defender is selected, the character is allowed to attack
	if(game.defenderSelect){		
	//The character attacks the defender. the defender takes damage equal to the character's attack

		var Characters = $("#Characters>div");
		var defender = $("#defenders>div");	
		
		defender.attr("hp", defender.attr("hp") - Characters.attr("atk"));

	//The Characters's attack is boosted after a successful attack
		Characters.attr("atk", parseInt(Characters.attr("atk")) + parseInt(Characters.attr("base")));

		game.updateStats("#Characters>div>p", Characters);

	//The defender's stats are updated
		game.updateStats("#defenders>div>p", defender);

	//If the defender has no hp, they are removed from the game
		if (defender.attr("hp") <= 0) {
			defender.remove();
			game.defenderSelect = false;
		}
		else {
	//The defender counterattacks, dealing damage to the player equal to the defender's counter stat
		Characters.attr("hp", Characters.attr("hp"));
		game.updateStats("#Characters>div>p", Characters);
		}
		// $("#Characters>div>p").text("Attack: " + Heroes.attr("atk") + " Health: " + monster.attr("hp"));
	}

});

// $("#Engage")on("click", function() {

// });
