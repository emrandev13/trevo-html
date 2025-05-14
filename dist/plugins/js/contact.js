document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value; // Fixed ID
    let email = document.getElementById("email").value;
    let service = document.getElementById("services").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name && email && service && message) { // Fixed validation condition
        responseMessage.innerText = "Message Sent Successfully!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "green";
        this.reset(); // Reset the form
    } else {
        responseMessage.innerText = "Please fill in all fields!";
        responseMessage.style.display = "block";
        responseMessage.style.color = "red";
    }
});
