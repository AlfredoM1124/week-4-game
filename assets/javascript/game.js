var game = {
	Reindhart: {attack: 50, healthPoints: 500},
	DVa: {attack: 100, healthPoints: 300},
	McCree: {attack: 200, healthPoints: 100},
	Mercy: {attack: 25, healthPoints: 400},

	HeroSelect: false,
	defenderSelect: false,

	assignStats: function(stats, monster) {		

		console.log(game.Reindhart);

		monster.attr("atk", stats.attack);
		monster.attr("base", stats.attack);
		monster.attr("hp", stats.healthPoints);

		console.log("Attack: " + monster.attr("atk") + " Health: " + monster.attr("hp"));
		monster.append("<p>Attack: " + monster.attr("atk") + " Health: " + monster.attr("hp") + "</p>");
	},

	updateStats: function(stats, monster) {
		$(stats).text("Attack: " + monster.attr("atk") + " Health: " + monster.attr("hp"));
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

		selectChar.appendTo("#enemies");

		game.HeroSelect = true;
	}

});

$(document).on("click", "#enemies>div", function() {	

	if (game.defenderSelect == false){

		var selectEnemy = $(this).remove();

		selectEnemy.appendTo("#defenders");

		game.defenderSelect = true;
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
		Characters.attr("hp", Characters.attr("hp") - Characters.attr("cAtk"));
		game.updateStats("#Characters>div>p", Characters);
		}
		// $("#Characters>div>p").text("Attack: " + monster.attr("atk") + " Counter: " + monster.attr("cAtk") + " Health: " + monster.attr("hp"));
	}

});

// $("#Engage")on("click", function() {

// });
