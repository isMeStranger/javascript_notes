document.addEventListener('DOMContentLoaded', function () {
	run();

	
function run() {
	// ^ functions: =====================================================

	// ^ POST request 
	// ! DO NOT USE ASYNC when already returning a PROMISE! 
	// ! unless you want: new Promise(new Promise) side-effect!
	// Retrieves a random cat fact using an AJAX request
	const postRequest = () => {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('post', 'https://httpbin.org/post');
			// Set the content type of the request body to JSON
			xhr.setRequestHeader('Content-Type', 'application/json'); 
			xhr.onload = () => {
				const json = JSON.parse(xhr.responseText);
				resolve(json);
			};
			xhr.onerror = () => reject({ message: `${xhr.statusText}: error occurred.` });
			xhr.send(JSON.stringify({ name: 'Salar', age: 26 }));
		});
	}

	// Handles errors that occur during the AJAX request
	const handleError = (error) => {
		console.log(error);
		const resultDiv = document.querySelector(`#${factDivId}`);
		resultDiv.innerHTML = error.message;
	}

	// Displays a random cat fact when the button is clicked
	const showPostResponse = (event) => {
		postRequest()
			.then((responseObj) => {				
				const json = responseObj.json;
				const resultDiv = document.querySelector(`#${factDivId}`);
				resultDiv.innerHTML = `Hi, ${json.name}. <br>You are ${json.age}`;
			})
			.catch(handleError);
	}

	// ^ on load: =====================================================
	// Prepare HTML template & append it
	const mainDivId = 'xmlhttp_post_request';
	const factDivId = 'fact-post';
	const factBtnId = 'fact-btn-post';
	const html = `
	  <div id="${mainDivId}">
		<div id="${factDivId}"></div>
		<button id="${factBtnId}">Show Fact</button>
	  </div>
	`;
	document.body.insertAdjacentHTML('beforeend', html);

	// setup event listeners
	const factBtn = document.querySelector(`#${factBtnId}`);
	factBtn.addEventListener('click', showPostResponse);
}

});
