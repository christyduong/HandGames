var userPick = '';
var compPick = '';

$('.user-choice').click(function() {
	$('#outcome').text('');
	userPick = $(this).val();
	var userFull = ('You picked ' + userPick + '!');
	$('#outcome').append( userFull + '<br>' );

	comp();
	whoWon();
});

function comp() {	
	randPick = Math.random();
	if (randPick > 0 && randPick < 0.333) {
		compPick = 'Rock';
	} else if (randPick >= 0.333 && randPick < 0.666) {
		compPick = 'Paper';
	} else if (randPick >= 0.666 && randPick < 1) {
		compPick = 'Scissor';
	}
	var compOutput = ('Bot threw out ' + compPick + '!');
	$('#outcome').append( compOutput + '<br>');
}

function whoWon() {
	if(userPick == 'Rock' && compPick == 'Scissor') {
		$('#outcome').append('You Win!<br>');
	} else if (userPick == 'Paper' && compPick == 'Rock') {
		$('#outcome').append('You Win!<br>');
	} else if (userPick == 'Scissor' && compPick == 'Paper') {
		$('#outcome').append('You Win!<br>');
	} else if (userPick == compPick) {
		$('#outcome').append('Tie!<br>');
	} else {
		$('#outcome').append('You Lose!<br>');
	}

}