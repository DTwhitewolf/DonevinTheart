let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    // For mobile menu: toggle display of navbar
    if (navbar.classList.contains("active")) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
}

// Ensure menu is hidden on load for mobile
window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1285) {
        navbar.style.display = "none";
    }
});



//send the email
function sendEmail(event) {
    if(event) event.preventDefault();
    let parms = {
        fname : document.getElementById("fname").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };
    emailjs.send("service_hzh3mz9", "template_w6ymoty", parms)
        .then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
    return false;
}

// Attach sendEmail to the form's submit event
window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".contact form");
    if(form) {
        form.onsubmit = sendEmail;
    }
});