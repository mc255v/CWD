var begin = ['Hey there ', 'Hmm.... ', 'Well, I guess ', 'I was told ', 'Yo, '];
var middle = ['I am never gonna see a merman, ever. ', 'Spam Master, ', 'I need more time. ', 
  	'the new stuff that just happened. ', 'extra crispy chicken is where it\'s at. '];
var end = ['You haven\'t seen my phone, have you?', 'I think all is fair.', 'I like hamburgers too.', 
  'I thought everyone loves cartoons.','Someone else\'s loss is my chocolatey goodness.'];

$(document).ready(function() {
	$("#send").on('click', () => {
		postMessage();
		setTimeout(function() {
        		var message = generateMessage();
        		reply(message);
        	}, ((getRandom() + 1) * 1000));        	
	});
});

function postMessage() {
	var textarea = $('#textarea').val();
	if (textarea !== ''){
		var text = '<div class="row mt-1"><div class="speech-bubble col-6"><p>' + textarea + '</p></div></div>'
		$('#results').append(text);
	}
	$('#textarea').val('');
}

function reply(message) {
	var text = '<div class="row mt-1"><div class="bot-speech-bubble col-6"><p>' + message + '</p></div></div>'
	$('#results').append(text);
}
	        
function generateMessage(){
    var message = begin[getRandom()] + middle[getRandom()] + end[getRandom()];
    return message;
}

function getRandom(){
	return Math.floor(Math.random() * 5);
}



