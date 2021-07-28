var URL = "http://localhost:2000"

function signup() {
    var name = document.querySelector('#name').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    const data = {
        name,
        email,
        password
    };

    fetch(URL + "/signup", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function signin() {
    var name = document.querySelector('#name').value
        //var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value

    const data = {
        name,
        password
    };

    fetch(URL + "/signin", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}