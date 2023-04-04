document.addEventListener('DOMContentLoaded', function () {
	run();

	function test_run() {
		const testMainDivExists = () => {
			return testHTMLElementExists('#xmlhttp_get_request');
		}
		const testMainDivEqualsHTML = () => {
			const mainDivId = 'xmlhttp_get_request';
			const factDivId = 'fact';
			const factBtnId = 'fact-btn';
			const html = `
			  <div id="${mainDivId}">
				<div id="${factDivId}"></div>
				<button id="${factBtnId}">Show Fact</button>
			  </div>
			`;
			return testHTMLElementEqualsHTML('#xmlhttp_get_request', html);
		}
	
		const tests = [
			testMainDivExists,
			testMainDivEqualsHTML,
		];
	
		return run_tests(tests);
	}
	function run() {
		// ^ functions: =====================================================
	
		// ^ GET request 
		// ! DO NOT USE ASYNC when already returning a PROMISE! 
		// ! unless you want: new Promise(new Promise) side-effect!
		// Retrieves a random cat fact using an AJAX request
		const getFact = () => {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://catfact.ninja/fact');
				xhr.onload = () => {
					const json = JSON.parse(xhr.responseText);
					resolve(json);
				};
				xhr.onerror = () => reject({ message: `${xhr.statusText}: error occurred.` });
				xhr.send();
			});
		}
	
		// Displays a random cat fact when the button is clicked
		const showFact = (event) => {
			getFact()
				.then((json) => {
					const resultDiv = document.querySelector(`#${factDivId}`);
					resultDiv.innerHTML = json.fact;
				})
				.catch(handleError);
		}
	
		// Handles errors that occur during the AJAX request
		const handleError = (error) => {
			console.log(error);
			const resultDiv = document.querySelector(`#${factDivId}`);
			resultDiv.innerHTML = error.message;
		}
	
		// ^ on load: =====================================================
		// Prepare HTML template & append it
		const mainDivId = 'xmlhttp_get_request';
		const factDivId = 'fact';
		const factBtnId = 'fact-btn';
		const html = `
		  <div id="${mainDivId}">
			<div id="${factDivId}"></div>
			<button id="${factBtnId}">Show Fact</button>
		  </div>
		`;
		document.body.insertAdjacentHTML('beforeend', html);
	
		// setup event listeners
		const factBtn = document.querySelector(`#${factBtnId}`);
		factBtn.addEventListener('click', showFact);
	}
	
});