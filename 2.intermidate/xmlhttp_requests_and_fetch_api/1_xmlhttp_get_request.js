document.addEventListener('DOMContentLoaded', function () {
    // ^ on load: =====================================================
    // prepare html template & append it
    const mainDivId = '1_xmlhttp_get_request.js';
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
    const factBtn = document.querySelector('#' + factBtnId);
    factBtn.addEventListener('click', e => showFact(e));


    // ^ functions: =====================================================
    const showFact = (event) => {
        getFact()
            .then((json) => {
                const resultDiv = document.querySelector(`#${factDivId}`);
                resultDiv.innerHTML = json.fact;
            })
            .catch((error) =>{
                console.log(error);
                const resultDiv = document.querySelector(`#${factDivId}`);
                resultDiv.innerHTML = error.message;
            });

    }

    // ^ GET request 
    // ! DO NOT USE ASYNC when already returning a PROMISE! 
    // ! unless you want: new Promise(new Promise) side-effect!
    const getFact = () => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://catfact.ninja/fact');
            xhr.onload = () => {
                // ^ this will be executed when the data loads            
                // ^ at the end of the current event loop
                const json = JSON.parse(xhr.responseText);
                resolve(json);
            };
            xhr.onerror = () => reject({message:`${xhr.statusText}: error occurred.`});
            xhr.send();
        });
    };
});



