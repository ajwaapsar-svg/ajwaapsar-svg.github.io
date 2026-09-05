const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}