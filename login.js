
let loginForm = document.getElementById("login__form");
let apiUrl = 'http://localhost:3000';

const queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const existingEmail = urlParams.get('existingEmail');
// const registered = urlParams.get('registered')
if(existingEmail){
    loginForm.email.value = existingEmail
}
// if(registered){
//     document.querySelector('.registered-alert').style.display = "block";
// }


loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    let payload = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
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