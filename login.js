
let loginForm = document.getElementById("login__form");
let registerdSucessful = document.getElementById("registered__Successful");
//let apiUrl = 'http://localhost:3000';
let apiUrl = 'https://netflix5858.netlify.app';
//https://netflix5858.netlify.app/login.html

const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const existingEmail = urlParams.get('existingEmail');

if(existingEmail){
    loginForm.email.value = existingEmail;
    registerdSucessful.innerHTML = "Registered Successful!!";
}


loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    let payload = {
        email: loginForm.email.value,
        password: loginForm.password.value
    }


    fetch(apiUrl + "/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    }) // returns a promise already
    .then((response)=>{
        localStorage.setItem('token', response.token)
        location.href = "/";
    })

})

