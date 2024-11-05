document.getElementById('join-btn').addEventListener('click', function() {
    alert('Thank you for showing interest! We Hope you join as as soon as possible.');
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); //refresh kar dega page ko

    // Form value ke input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // check that all field are field or not
    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
    } else if (!validateEmail(email)) {
        document.getElementById("error-message").textContent = "Please enter a valid email.";
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
    } else {
        // form is submited or there any error in filling the form
        document.getElementById("error-message").style.display = "none";
        document.getElementById("success-message").style.display = "block";
        
        // Reset form fields
        document.getElementById("contact-form").reset();
    }
});

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}       
