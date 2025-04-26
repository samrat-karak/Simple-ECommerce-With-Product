// let usernameInput = document.querySelector("#username");
let loginUserEmail=document.querySelector("#email");
let loginUserPassword=document.querySelector("#password");
let loginform=document.querySelector("#loginform");

// fetching data from localstorage while converting from JSON to JS object
let registeredUser = JSON.parse(localStorage.getItem("users"));

loginform.addEventListener("submit",(event) => {
    event.preventDefault();

    console.log(loginUserEmail.value);
    console.log(loginUserPassword.value);
    console.log(registeredUser);
    
    //finding registered user (authentication)
    let auth=registeredUser.find((user)=>{
        console.log(user);
        return user.email == loginUserEmail.value && user.password == loginUserPassword.value;
    })
    console.log("auth user----->",auth);
    

    // authorization
    if(auth){
        window.location.assign("products.html")
    }
    else{
        window.location.assign("register.html")
    }

});