
function checkIfLoggedIn(){
    const currentToken = localStorage.getItem('token');
    if(currentToken){
        if(location.href.includes("/login.html") || location.href.includes("/register.html")){
            location.href = "/";
        }
        
    } else{
        if(!location.href.includes("/login.html") && !location.href.includes("/register.html")){
            location.href = '/login.html'
        }
    }
}

checkIfLoggedIn();

function logout(){
    localStorage.removeItem('token');
    location.href = '/login.html'
}
