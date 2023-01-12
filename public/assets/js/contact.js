// Firebase contact form handling
const firebaseConfig = {
    apiKey: "AIzaSyDy7Dv5-dqBEgbtxrktVUDR8oh2f-cKov0",
    authDomain: "bloc-contact.firebaseapp.com",
    projectId: "bloc-contact",
    storageBucket: "bloc-contact.appspot.com",
    messagingSenderId: "985095537250",
    appId: "1:985095537250:web:2e09a83393f0b6e4b0873b",
    measurementId: "G-0VMZV0PD7C"
};



// // Forms.

// 		// Hack: Activate non-input submits.
// 			$('form').on('click', '.submit', function(event) {

// 				// Stop propagation, default.
// 					event.stopPropagation();
// 					event.preventDefault();

// 				// Submit form.
// 					// $(this).parents('form').submit();
// 					submitForm(event);

// 			});
		
// 		// document.getElementById('bloc-contact').addEventListener('submit', submitForm);
// 		function submitForm(event) {
// 			event.preventDefault();

// 			// Get form values
// 			const name = getInputVal('name');
// 			const email = getInputVal('email');
// 			const message = getInputVal('message');

// 			console.log(name);
// 			console.log(email);
// 			console.log(message);

// 		}

// 		function getInputVal(id) {
// 			return document.getElementById(id).value;
// 		}