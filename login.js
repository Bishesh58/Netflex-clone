
let loginForm = document.getElementById("login__form");
let apiUrl = 'http://localhost:3000';



loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    let payload = {
        email: document.getElementById("email").value,
        passowrd: document.getElementById("password").value
    }


    fetch(apiUrl + "/login", {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((response)=>{
        if(response.ok){
            return response.json();
        } else{
            throw new Error ("something went wrong");
        }
    })
    .then((response) =>{
        console.log(response);
    })
})