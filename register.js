let registerForm = document.getElementById("register__form");
let registerdSucessful = document.getElementById("registered__Successful");
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
            showmessage()
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    }) 
   
})


function showmessage(){
    registerdSucessful.innerHTML = "Successfully Registered!!"
    inputReset();
}

function inputReset(){
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}
