let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(emailValidate(emailText) !== true) {
		console.log ('The email address must contain @');
		return false;
	}
	console.log('Thank you for your message');

	console.log('email', emailText, 'message', messageText);
}

submitButton.addEventListener('click', clickListener);

function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	}
	else {
		return false;
	}
}
