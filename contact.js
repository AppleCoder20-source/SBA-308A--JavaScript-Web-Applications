document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const message = document.getElementById("message");
    const submittedInfo = document.getElementById("submittedInfo");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const suggestions = document.getElementById("suggestions").value;

        // Validate inputs
        if (name === "" || email === "" || suggestions === "") {
            message.style.display = "block"; 
        } else {
            message.style.display = "none"; 
            submittedInfo.innerHTML = `
                <h3>Thank you for your feedback!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Suggestions:</strong> ${suggestions}</p>
            `;
            submittedInfo.style.display = "block"; 
            contactForm.style.display = "none";
        }
    });
});
