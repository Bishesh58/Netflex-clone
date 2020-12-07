let registerForm = document.getElementById("register__form");
let apiUrl = 'http://localhost:3000';


registerForm.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    let payload = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    fetch(apiUrl + "/register", {
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