const form = document.getElementById('inputForm');
const heroEmail = document.getElementById('heroEmail');
const errorMessage = document.getElementById('errorMsg');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // Your custom validation logic here
    const email = heroEmail.value;
    if (!isValidEmail(email)) {
         // Display the error message
        errorMessage.classList.remove('d-none');
        heroEmail.style.borderColor = "hsl(4, 100%, 67%)";
        heroEmail.style.color = "hsl(4, 100%, 67%)";
    }
});

const form2 = document.getElementById('inputForm2');
const inputEmail = document.getElementById('inputEmail2');
const errorMessage2 = document.getElementById('errorMsg2');

form2.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // Your custom validation logic here
    const email = inputEmail.value;
    if (!isValidEmail(email)) {
         // Display the error message
         errorMessage2.classList.remove('d-none');
         inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
         inputEmail.style.color = "hsl(4, 100%, 67%)";
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}