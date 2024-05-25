'use strict';

const apiKey = "sZk11QMVoZ5_IveisrK8c5ECdDZFknoKZ310OqIlKTo";

const searchForm = document.querySelector(".search-form");
const searchFor = document.querySelector("#search-for");
const searchResults = document.querySelector(".search-results");
const showMoreBtn = document.querySelector("#show-moreBtn");
const description = document.querySelector("#description");

let query = "";
let page = 1;

// this is the code using async function
async function getImages() {

    query = searchFor.value;
    if (!query) {
        alert("Search Field Cannot be Empty.");
    } else {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12&client_id=${apiKey}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            description.textContent = `Showing available images for "${query}"`;
            description.style.display = 'block';

            const results = data.results;

            if (results.length !== 0) {
                // Accumulate the markup for each image result
                const imageCardMarkup = results.map((result) => {
                    return `
                    <div class="imgs">
                        <img src="${result.urls.small}" alt="img">
                        <a href="#" class="download-icon" onclick="downloadImage('${result.urls.raw}', '${result.id}.jpg')">
                            <i class="fa-solid fa-arrow-down"></i>
                        </a>
                    </div>`;
                }).join("");

                // Set the accumulated markup to the searchResults container
                searchResults.innerHTML += imageCardMarkup;
                showMoreBtn.style.display = 'block';
            } else {
                description.textContent = `OOPS!! No images available for "${query}". Try searching something different.`;
                showMoreBtn.style.display = 'none';
            }
        } else {
            console.error("Error fetching data:", response.status, response.statusText);
            // Handle the error appropriately, e.g., display an error message to the user.
        }
    }
}

// Function to trigger the download
function downloadImage(imageUrl, filename) {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
}

// Run the function after someone submits something in the search box...
searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the page from reloading.
    searchResults.innerHTML = ""; // Clear previous images
    page = 1;
    getImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    getImages();
});




// nav js contents

let navLinks = document.querySelector('.nav-links');
let formContainer = document.querySelector(".forms");

document.getElementById('menuIcon').addEventListener('click', function () {
    navLinks.classList.toggle("showitem");
});

document.getElementById('signIn').addEventListener('click', function (e) {
    e.preventDefault();
    formContainer.classList.toggle("showForm");
    document.querySelector("main").classList.toggle("reduceOpacity");

});




//register form contents



const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("re-password");

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener('click', function () {
    formContainer.classList.toggle("showForm")
});



// Function to check the error occurred in the input...
const setError = (input, message) => {
    const formControl = input.parentElement;
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-exclamation-circle");
    formControl.appendChild(icon);
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

// Function to display the success message...
const successMsg = (input) => {
    const formControl = input.parentElement;
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-check-circle");
    formControl.appendChild(icon);
    formControl.className = "form-control success";
}

// in-depth checking of email
const isEmail = (emailVal) => {
    const emailRegex = /^[a-zA-Z0-9]{3,20}@[a-z]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailVal);
}


const validateForm = (inputField) => {
    const inputFieldVal = inputField.value.trim();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../index.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            switch (inputField) {
                //checking username
                case userName:
                    if (inputFieldVal === "") {
                        setError(inputField, "username cannot be blank");
                    } else if (inputFieldVal.length < 3) {
                        setError(inputField, "username must have at least 3 characters")
                    } else {
                        successMsg(inputField);
                    }
                    break;
                //checking email
                case email:
                    if (inputFieldVal === "") {
                        setError(inputField, "email cannot be blank");
                    } else if (!isEmail(inputFieldVal)) {
                        setError(inputField, "Not a valid email.")
                    } else {
                        successMsg(inputField);
                    }
                    break;

                // checking phone number
                case phoneNumber:
                    if (inputFieldVal === "") {
                        setError(inputField, "phone number cannot be blank");
                    } else if (inputFieldVal.length !== 10) {
                        setError(inputField, "Phone number must have 10 digits.")
                    } else {
                        successMsg(inputField);
                    }
                    break;
                //checking password
                case password:
                    if (inputFieldVal === "") {
                        setError(inputField, "password cannot be blank");
                    } else if (inputFieldVal.length < 6) {
                        setError(inputField, "Password must have at least 6 chars")
                    } else {
                        successMsg(inputField);
                    }
                    break;
                //matching two passwords
                case confirmPassword:
                    if (inputFieldVal === "") {
                        setError(inputField, "field cannot be empty");
                    } else if (inputFieldVal !== password.value.trim()) {
                        setError(inputField, "Passwords don't match")
                    } else {
                        successMsg(inputField);
                    }
                    break;
                default:
                    setError(inputField, "Try again");
                    break;
            }
        }
    }
    xhr.send();
}

const formValidated = () => {
    if (
        validateForm(userName) &&
        validateForm(email) &&
        validateForm(phoneNumber) &&
        validateForm(password) &&
        validateForm(confirmPassword)

    ) {
        submitBtn.disabled = false;
        console.log() // Corrected the code to disable the button
    } else {
        submitBtn.disabled = true; // Corrected the code to enable the button
    }
}

// Event listeners for input fields
userName.addEventListener('input', () => {
    validateForm(userName);
    formValidated(); // Call formValidated on input change
});

email.addEventListener('input', () => {
    validateForm(email);
    formValidated(); // Call formValidated on input change
});

phoneNumber.addEventListener('input', () => {
    validateForm(phoneNumber);
    formValidated(); // Call formValidated on input change
});

password.addEventListener('input', () => {
    validateForm(password);
    formValidated(); // Call formValidated on input change
});

confirmPassword.addEventListener('input', () => {
    validateForm(confirmPassword);
    formValidated(); // Call formValidated on input change
});

