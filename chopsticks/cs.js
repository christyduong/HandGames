var botLeftFingers = 1;
var botRightFingers = 1;
var botTotalFingers = botLeftFingers + botRightFingers;
var userLeftFingers = 1;
var userRightFingers = 1;
var userTotalFingers = userLeftFingers + userRightFingers;
var attacked = '';
var attacker = '';

fingers();

if

$('#confirmButton').click(function() {
	attacked = $('input[name="attacked"]:checked').val();
	attacker = $('input[name="attacker"]:checked').val();
	damageTaken();
	botTurn();	
	fingers();
});

function fingers() {
	$('#botLeft').text('Left hand has ' + botLeftFingers + ' finger(s) up');
	$('#botRight').text('Right hand has ' + botRightFingers + ' finger(s) up.');
	$('#userLeft').
	ntext('Left hand has ' + userLeftFingers + ' finger(s) up.');
	$('#userRight').text('Right hand has ' + userRightFingers + ' finger(s) up.');
}

function damageTaken() {
	if (attacked == 'botLeft' && attacker == 'userRight') {
		botLeftFingers = userRightFingers + botLeftFingers;
	} else if (attacked == 'botLeft' && attacker == 'userLeft') {
		botLeftFingers = userLeftFingers + botLeftFingers;
	} else if (attacked == 'botRight' && attacker == 'userRight') {
		botRightFingers = userRightFingers + botRightFingers;
	} else if (attacked == 'botRight' && attacker == 'userLeft') {
		botRightFingers = userLeftFingers + botRightFingers;
	}
	fingers();
}

function botTurn() {
	if ((botLeftFingers + userLeftFingers) == 5){
		userLeftFingers = 0;
	} else if ((botLeftFingers + userRightFingers) == 5) {
		userRightFingers = 0;
	} else if ((botRightFingers + userLeftFingers) == 5) {
		userLeftFingers = 0;
	} else if ((botRightFingers + userRightFingers) == 5) {
		userRightFingers = 0;
	} else {
		randomAttack();
	}
	fingers();
}

function randomAttack() {
	var rand = Math.random();
	if(rand >= 0.00 && rand < 0.25) {
		userRightFingers = userRightFingers + botRightFingers;
	} else if(rand >= 0.25 && rand < 0.50) {
		userRightFingers = userRightFingers + botLeftFingers;
	} else if(rand >= 0.50 && rand < 0.75) {
		userLeftFingers = userLeftFingers + botRightFingers;
	} else if(rand >= 0.75 && rand < 1.00) {
		userLeftFingers = userLeftFingers +botLeftFingers;
	}
	fingers();
}