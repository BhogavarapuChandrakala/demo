function button_submit(){
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageElement = document.getElementById("message");
    messageElement.textContent = "Registration successful!";
} 
