function run_fetch_get() {
    const getFact = () => {
        return new Promise((resolve, reject) => {
            fetch('https://catfact.ninja/fact')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(data);
                })
        });
    }

    const showFact = () => {
        getFact().then(data => {
            console.log(data.fact);
        }).catch(error => {
            console.log(error);
        });
    }

    showFact();
}

function run_fetch_post() {
    const data = {
        name: 'Salar',
        age: 26
    };
    const postData = () => {
        return new Promise((resolve, reject) => {
            fetch('https://httpbin.org/post', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json()) // response has json() method
                .then(response => JSON.parse(response.data)) // json obj has no json() method
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    const showData = () => {
        postData().then(data => {
            console.log(data.name);
        }).catch(error => {
            console.log(error);
        });
    }

    showData();
}