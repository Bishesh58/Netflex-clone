
let loginForm = document.getElementById("login__form");
let apiUrl = 



loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
   
    fetch(apiUrl + "/login", {
        method: "POST",
    })
})