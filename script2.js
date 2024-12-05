  /* 
Name: Catherine Hohulin 
Date Created: 12/4/24
Date Last Edited: 12/4/24
Purpose: Homework 4
 */


// ensuring the date is giving the current date 
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// showcasing what number the slider is selecting 

let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

// first name validate JS code 
function validateFname() { 
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // checks if first name field is empty 
    if (fname == "") { 
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (fname != "") { 
        if (!fname.match(namePattern)) { // checks if first name matches pattern 
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
        }
    } else if (fname.length < 2) { 
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characteres.";
        return false;
    } else if (fname.length > 30) {  // checks if name is more than 30 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else { 
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

function validateMini() { 
    var mname = document.getElementById("mname").value.trim();
    var namePattern = /^[a-zA-Z']?$/; // Allow only one letter or an apostrophe
    
    // Check if middle initial field is empty
    if (mname === "") { 
        document.getElementById("mname-error").innerHTML = "Middle initial field cannot be empty.";
        return false;
    }
    
    // Check if the entered value matches the allowed pattern (one letter or apostrophe)
    if (!mname.match(namePattern)) { 
        document.getElementById("mname-error").innerHTML = "Middle initial must be a letter or an apostrophe.";
        return false;
    }
    
    // Ensure the middle initial is exactly 1 character (no more than 1 character)
    if (mname.length > 1) { 
        document.getElementById("mname-error").innerHTML = "Middle initial cannot be more than one character.";
        return false;
    }

    // If all checks pass, clear the error message
    document.getElementById("mname-error").innerHTML = "";
    return true;
}


// last name validate JS code 
function validatelname() { 
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    // checks if last name field is empty 
    if (lname == "") { 
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) { // checks if last name matches pattern 
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { 
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characteres.";
        return false;
    } else if (lname.length > 30) {  // checks if name is more than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else { 
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

function validatefname() {
    const fname = document.getElementById("fname").value;
    const namePattern = /^[a-zA-Z'-]+$/;

    if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Invalid name. Only letters, apostrophes, and hyphens are allowed.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

function validatedob() { 
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date() - 120);

    if (date > newDate()) { 
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future."
        dob.value = "";
        return false;
    } else if(date < new Date(maxDate)) { 
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago."
    } else { 
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validatessn() { 
    const ssn = document.getElementById("ssn").value;

    const ssnR =/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
    } else { 
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateaddress1() { 
    var ad1 = document.getElementById("address1").value.trim();  // Use trim() to remove leading/trailing spaces
    console.log(ad1);  // Debugging: log the value of address1
    console.log(ad1.length);  // Debugging: log the length of address1
    
    // Check if the address is too short (less than 2 characters)
    if (ad1.length < 2) { 
        document.getElementById("address1-error").innerHTML = "Please enter something in address line.";
        return false;
    } else { 
        // Clear the error message if validation is successful
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// city validate JS code 

function validateCity() { 
    city = document.getElementById("city").value.trim();

    if(!city) { 
        document.getElementById("city-error").innerHTML = "City cannot be left blank";
        return false;
    } else { 
        document.getElementById("city-error").innerHTML = "";
        return true;        
    }
}


function validatezipcode() { 
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.trim();  // Use .trim() to remove leading/trailing spaces

    // Remove any non-numeric characters, but allow dash for ZIP+4 format
    zip = zip.replace(/[^\d-]/g, "");

    // Check if the zip code is empty
    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = "Zip code cannot be left blank.";
        return false;
    }

    // Check if the zip code length is greater than 5 characters, and if so, trim it
    if (zip.length > 5 && zip.indexOf('-') === -1) { 
        zip = zip.slice(0, 5);  // Allow only the first 5 digits if it's not a ZIP+4 format
    } else if (zip.length > 10) {
        // If the length exceeds 10 (for ZIP+4), trim to 10 characters
        zip = zip.slice(0, 10);
    }

    // Set the zip value back to the input
    zipInput.value = zip;

    // Clear any previous error messages
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

function validateEmail() { 
    const email = document.getElementById("email").value.trim();  // Trim spaces
    const emailR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Improved regex for email validation

    // Check if the email is empty
    if (email === "") { 
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    } 
    // Validate email using regex pattern
    else if (!email.match(emailR)) { 
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false; 
    } 
    else { 
        // Clear the error message if validation passes
        document.getElementById("email-error").innerHTML = "";
        return true; 
    }
}

function validatephonenumber() { 
    const phoneInput = document.getElementById("phonenumber"); 
    // removes all non-number characters  
    const phone = phoneInput.value.replace(/\D/g, ""); 
    if (phone.length === 0) { 
        document.getElementById("phonenumber-error").innerHTML = "Phone number cannot be left blank";
        return false; 
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phonenumber-error").innerHTML = "";
    return true; 
}

// username valiation js code 

 function validateusername() { 
    username = document.getElementById("username").value; 

    //converts username in lowercase 
    document.getElementById("username").value = username;    

    if (username.length == 0) { 
        document.getElementById("username-error").innerHTML = "Username field cannot be empty.";
        return false;         
    }

// checks that username does not start with a number 

if (!isNaN(username.charAt(0))) { 
    document.getElementById("username-error").innerHTML = "Username cannot begin with a number";
    return false; 
}

    // checks that username consists of only letters, number, or underscores 
    
    let regex = /^[a-zA-Z0-9_]+$/;;
    if (!regex.test(username)) { 
        document.getElementById("username-error").innerHTML = "Username can only contain letters, numbers, or underscores.";
        return false; 
    } else if (username.length < 5){ 
        document.getElementById("username-error").innerHTML = "Username must be at least 5 characters";
    }
    
    else if (username.length > 30) { 
        document.getElementById("username-error").innerHTML = "Username cannot exceed 30 characters";
        return false; 
    } else { 
        // if all of the above checks pass then username is valid 
        document.getElementById("username-error").innerHTML = "";
        return true;       
    }
 } 

 // Password validation function
function validatepassword() {
    const pword = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    // Initialize the error messages array
    const errorMessage = [];

    // Check for at least one lowercase letter
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }
    // Check for at least one uppercase letter
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }
    // Check for at least one number
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number.");
    }
    // Check for at least one special character
    if (!pword.match(/[!\@#\#%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }
    // Check that password does not contain the username
    if (pword === username || pword.includes(username)) {
        errorMessage.push("Password cannot contain the username.");
    }

    // Display the error messages if there are any
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = "";  // Clear any previous messages
    if (errorMessage.length > 0) {
        errorContainer.innerHTML = errorMessage.map((message) => `<span>${message}</span><br/>`).join("");
    } else {
        errorContainer.innerHTML = "";  // Clear errors if everything is valid
    }
}

// Confirm password validation function (without pop-up)
function validateconfirmed_password() {
    const pword1 = document.getElementById("password").value;
    const pword2 = document.getElementById("confirmed_password").value;

    const confirmedPasswordError = document.getElementById("confirmed_password-error");

    // Check if the passwords match
    if (pword1 !== pword2) {
        // Display the error message below the Confirm Password field
        confirmedPasswordError.innerHTML = "Passwords do not match.";
        confirmedPasswordError.style.color = "red"; // Optional: add color for emphasis
        return false;
    } else {
        // Clear any previous error message if passwords match
        confirmedPasswordError.innerHTML = "";
        return true;
    }
}

 // re-display user input back to user (review button) 

 function reviewInput() { 
    var formcontent = document.getElementById('signup');
    var formoutput; 
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    for (i=0; i < formcontent.length; i++) { 
        if (formcontent.elements[i].value != "") { 
            datatype = formcontent.elements[i].type;
            switch (datatype) { 
                case "checkbox": 
                    if (formcontent.elements[i].checked) { 
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'outputdata'>&#x2713;"
                    }
                    break; 
                case "radio": 
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break; 
            case "button":
            case "submit":
            case "reset":
                break;
            default: 
                formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                formoutput = formoutput + "<td class= 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                console.log("default" + formoutput)
            }
        }
    }

    if (formoutput.length > 0) { 
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    } 
 }

 // remove user input 

 function removeReview() { 
    document.getElementById("showInput").innerHTML = "";
 }

// shows alert box when necessary JS code 

function showAlert(){
    var alertBox = document.getElementById("alert-box");
    var closeBtn = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeBtn.onclick = function () {
        alertBox.style.display = "none";
    };
}


// validate everything on form 

function validateEverything() { 
    let valid = true; 

    if (!validateFname()) { 
        valid = false;
    }
    if (!validateMini()) { 
        valid = false;
    }
    if (!validateLname()) { 
        valid = false;
    }
    if (!validateDob()) { 
        valid = false;
    }
    if (!validateSsn()) { 
        valid = false;
    }
    if (!validateAddress1()) { 
        valid = false;
    }
    if (!validateCity()) { 
        valid = false;
    }
    if (!validateZcode()) { 
        valid = false;
    }
    if (!validateEmail()) { 
        valid = false;
    }
       if (!validatePhone()) { 
        valid = false;
    }
    if (!validateUname()) { 
        valid = false;
    }
    if (!validatePassword()) { 
        valid = false;
    }
    if (!confirmPassword()) { 
        valid = false;
    }
    if (valid) { 
        document.getElementById("submit").disabled = false; 
    } else { 
        showAlert();
    }
}

// cookie for remembering info input on form// 
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "mname", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
    {id: "ssn", cookieName: "ssn"},
    {id: "address1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zipcode", cookieName: "zipCode"},
    {id: "email", cookieName: "email"},
    {id: "phonenumber", cookieName: "phone"},
    {id: "username", cookieName: "userName"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);
    if (!inputElement) return;

    // Prefill input fields with value from the cookie
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie with the input value when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getCookie("firstName");
if (firstName !== " ") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br/>";
    document.getElementById("welcome2").innerHTML =
    "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form </a>";
    
    document.getElementById("new-user").addEventListener = ("click", function () {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        })
        location.reload();
    })
}
