const bodyEl = document.querySelector("body");
const formEl = document.querySelector(".form");
const pageOne = document.querySelector(".page-1");
const pageTwo = document.querySelector(".page-2");
const pageThree = document.querySelector(".page-3");
const pageFour = document.querySelector(".page-4");
const resultPage = document.querySelector(".result");

pageTwo.style.display = "none";
pageThree.style.display = "none";
pageFour.style.display = "none";
resultPage.style.display = "none";
resultPage.innerHTML = "";

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const date_of_birth = document.querySelector("#dob");
let gender_value = null;
let interests_value = [];

function displayResultPage() {
  bodyEl.style.background = "#E8BD0D";
  formEl.style.display = "none";
  resultPage.style.display = "block";
  const content = `<h1>Your Response is Submitted!</h1>
      <p>Here are the details:</p>
      <p>Name: <span class="weight">${nameInput.value}</span></p>
      <p>Email: <span class="weight">${emailInput.value}</span></p>
      <p>Phone: <span class="weight">${phone.value}</span></p>
      <p>Date of Birth: <span class="weight">${date_of_birth.value}</span></p>
      <p>Gender: <span class="weight">${gender_value}</span></p>
      <p>Interests: <span class="weight">${interests_value}</span></p>`;

  resultPage.innerHTML = content;
}

function displayPageOne() {
  const nextButton = document.querySelector("#btn-next-pg-1");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nextButton.addEventListener("click", () => {
    if (nameInput.value === "") {
      nameError.textContent = "Please enter your name.";
    } else {
      nameError.textContent = "";
    }

    if (emailInput.value === "") {
      emailError.textContent = "Please enter your email.";
    } else if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }

    if (
      nameInput.value !== "" &&
      emailInput.value !== "" &&
      emailPattern.test(emailInput.value)
    ) {
      pageOne.style.display = "none";
      pageTwo.style.display = "block";
      pageThree.style.display = "none";
      pageFour.style.display = "none";
      password.focus();
    }
  });
}

function displayPageTwo() {
  const nextButton = document.querySelector("#btn-next-pg-2");
  const previousButton = document.querySelector("#btn-prev-pg-2");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm_password");
  const passwordError = document.querySelector("#pwdError");
  const confirmPwdError = document.querySelector("#confirmPwdError");

  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  previousButton.addEventListener("click", () => {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
  });

  nextButton.addEventListener("click", () => {
    if (password.value === "") {
      passwordError.textContent = "Please enter the password.";
    } else if (!passwordPattern.test(password.value)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.";
    } else {
      passwordError.textContent = "";
    }

    if (confirmPassword.value !== password.value) {
      confirmPwdError.textContent = "Passwords do not match.";
    } else {
      confirmPwdError.textContent = "";
    }

    if (
      password.value !== "" &&
      confirmPassword.value !== "" &&
      passwordPattern.test(password.value) &&
      confirmPassword.value === password.value
    ) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "block";
      pageFour.style.display = "none";
    }
  });
}

function displayPageThree() {
  const nextButton = document.querySelector("#btn-next-pg-3");
  const previousButton = document.querySelector("#btn-prev-pg-3");
  const phone = document.querySelector("#phone");
  const address = document.querySelector("#address");
  const phoneError = document.querySelector("#phoneError");
  const addressError = document.querySelector("#addressError");

  const phonePattern = /^\d{10}$/;

  previousButton.addEventListener("click", () => {
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
  });

  nextButton.addEventListener("click", () => {
    if (phone.value === "") {
      phoneError.textContent = "Please enter a phone number.";
    } else if (!phonePattern.test(phone.value)) {
      phoneError.textContent = "Please enter a valid 10-digit phone number.";
    } else {
      phoneError.textContent = "";
    }

    if (address.value === "") {
      addressError.textContent = "Please enter an address.";
    } else {
      addressError.textContent = "";
    }

    if (
      phone.value !== "" &&
      address.value !== "" &&
      phonePattern.test(phone.value)
    ) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "none";
      pageFour.style.display = "block";
    }
  });
}

function displayPageFour() {
  const previousButton = document.querySelector("#btn-prev-pg-4");
  const submitButton = document.querySelector(".btn-submit");
  const dateOfBirthInput = document.querySelector("#dob");
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const interestsInputs = document.querySelectorAll('input[name="interests"]');
  const dobError = document.querySelector("#dobError");
  const genderError = document.querySelector("#genderError");
  const interestError = document.querySelector("#interestError");

  previousButton.addEventListener("click", () => {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "block";
    pageFour.style.display = "none";
  });

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Date of Birth
    if (dateOfBirthInput.value === "") {
      dobError.textContent = "Please enter your date of birth.";
    } else {
      const selectedDate = new Date(dateOfBirthInput.value);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        dobError.textContent = "Date of birth cannot be in the future.";
      } else {
        dobError.textContent = "";
      }
    }

    // Gender
    let isGenderSelected = false;
    genderInputs.forEach((input) => {
      if (input.checked) {
        isGenderSelected = true;
        gender_value = input.value;
      }
    });

    if (!isGenderSelected) {
      genderError.textContent = "Please select your gender.";
    } else {
      genderError.textContent = "";
    }

    // Interests
    let isInterestSelected = false;
    interestsInputs.forEach((input) => {
      if (input.checked) {
        isInterestSelected = true;
        interests_value.push(input.value);
      }
    });

    if (!isInterestSelected) {
      interestError.textContent = "Please select your interests.";
    } else {
      interestError.textContent = "";
    }

    if (
      dateOfBirthInput.value !== "" &&
      !dobError.textContent &&
      isGenderSelected &&
      isInterestSelected
    ) {
      displayResultPage();
    }
  });
}

displayPageOne();
displayPageTwo();
displayPageThree();
displayPageFour();
