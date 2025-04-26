let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let registerForm= document.querySelector("#registerform")

let users=[]
registerForm.addEventListener("submit", (event) =>{
    event.preventDefault(); // it hold the form submit register refresh(which is done by default)
    console.log("Form Submitted"); 
    // console.log(usernameInput.value);
    // console.log(emailInput.value);
    // console.log(passwordInput.value);
    let registeruser = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };
    console.log(registeruser);

    users.push(registeruser)

    // setting data to localstorage while converting into JSON
    localStorage.setItem("users",JSON.stringify(users))

    //clearing input fields
    usernameInput.value="";
    emailInput.value="";
    passwordInput.value="";

    // // navigation to login page
    // window.location.assign("login.html")

    
    
});
