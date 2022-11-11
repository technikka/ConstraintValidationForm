const form = document.querySelector("form");
const formError = document.querySelector("input[type=submit] + span.error");
form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !country.validity.valid ||
    !zipCode.validity.valid ||
    !password.validity.valid ||
    !confirmPw.validity.valid
  ) {
    event.preventDefault();
    formError.textContent =
      "Please ensure all required fields (*) are filled in and all errors resolved";
  }
});

const email = document.querySelector("input[name=email]");
const emailError = document.querySelector("input[name=email] + span.error");
email.addEventListener("blur", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    displayEmailError();
  }
});

const country = document.querySelector('input[name="country"]');
const countryError = document.querySelector(
  'input[name="country"] + span.error'
);
country.addEventListener("blur", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    displayCountryError();
  }
});

const zipCode = document.querySelector('input[name="zip-code"]');
const zipCodeError = document.querySelector(
  'input[name="zip-code"] + span.error'
);
zipCode.addEventListener("blur", (event) => {
  console.log(zipCode.validity);
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
  } else {
    displayZipCodeError();
  }
});

const password = document.querySelector('input[name="password"]');
const passwordError = document.querySelector(
  'input[name="password"] + span.error'
);
password.addEventListener("blur", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
  } else {
    displayPasswordError();
  }
});

const confirmPw = document.querySelector('input[name="confirm"]');
const confirmPwError = document.querySelector(
  'input[name="confirm"] + span.error'
);
confirmPw.addEventListener("blur", (event) => {
  if (confirmPw.value === password.value) {
    confirmPwError.textContent = "";
  } else {
    displayConfirmPwError();
  }
});

function displayEmailError() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter an email address";
  }
}

function displayCountryError() {
  if (country.validity.tooShort) {
    countryError.textContent = "Please enter a valid country";
  }
}

function displayZipCodeError() {
  if (zipCode.validity.patternMismatch) {
    zipCodeError.textContent = "Please enter a valid zip code in either 12345 or 12345-6789";
  }
}

function displayPasswordError() {
  if (password.validity.patternMismatch) {
    if (!/\d/.test(password.value)) {
      passwordError.textContent = "Password must contain at least one number";
    } else if (!/[a-z]/.test(password.value)) {
      passwordError.textContent =
        "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(password.value)) {
      passwordError.textContent =
        "Password must contain at least one uppercase letter";
    } else {
      passwordError.textContent = "Password must be least 8 character";
    }
  }
}

function displayConfirmPwError() {
  confirmPwError.textContent = "Your passwords do not match";
}
