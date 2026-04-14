const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");
const reviewForm = document.getElementById("reviewForm");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(groupId, errorId, message) {
  const group = document.getElementById(groupId);
  const errorText = document.getElementById(errorId);

  group.classList.add("error");
  group.classList.remove("success");
  errorText.textContent = message;
}

function setSuccess(groupId, errorId) {
  const group = document.getElementById(groupId);
  const errorText = document.getElementById(errorId);

  group.classList.remove("error");
  group.classList.add("success");
  errorText.textContent = "";
}

function showFormMessage(messageId, message, type) {
  const formMessage = document.getElementById(messageId);
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

function clearFormMessage(messageId) {
  const formMessage = document.getElementById(messageId);
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function clearState(fieldMap) {
  fieldMap.forEach(({ groupId, errorId }) => {
    document.getElementById(groupId).classList.remove("error", "success");
    document.getElementById(errorId).textContent = "";
  });
}

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;

  let isValid = true;
  clearFormMessage("registrationMessage");

  if (name === "") {
    setError("registerNameGroup", "registerNameError", "Please enter your full name.");
    isValid = false;
  } else {
    setSuccess("registerNameGroup", "registerNameError");
  }

  if (email === "") {
    setError("registerEmailGroup", "registerEmailError", "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setError("registerEmailGroup", "registerEmailError", "Enter a valid email address.");
    isValid = false;
  } else {
    setSuccess("registerEmailGroup", "registerEmailError");
  }

  if (password === "") {
    setError("registerPasswordGroup", "registerPasswordError", "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    setError("registerPasswordGroup", "registerPasswordError", "Password must be at least 8 characters long.");
    isValid = false;
  } else {
    setSuccess("registerPasswordGroup", "registerPasswordError");
  }

  if (confirmPassword === "") {
    setError("registerConfirmPasswordGroup", "registerConfirmPasswordError", "Please confirm your password.");
    isValid = false;
  } else if (password !== confirmPassword) {
    setError("registerConfirmPasswordGroup", "registerConfirmPasswordError", "Passwords do not match.");
    isValid = false;
  } else {
    setSuccess("registerConfirmPasswordGroup", "registerConfirmPasswordError");
  }

  if (isValid) {
    showFormMessage("registrationMessage", "Registration form validated successfully.", "success");
    registrationForm.reset();
    clearState([
      { groupId: "registerNameGroup", errorId: "registerNameError" },
      { groupId: "registerEmailGroup", errorId: "registerEmailError" },
      { groupId: "registerPasswordGroup", errorId: "registerPasswordError" },
      { groupId: "registerConfirmPasswordGroup", errorId: "registerConfirmPasswordError" }
    ]);
  } else {
    showFormMessage("registrationMessage", "Please correct the highlighted fields.", "error");
  }
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  let isValid = true;
  clearFormMessage("loginMessage");

  if (email === "") {
    setError("loginEmailGroup", "loginEmailError", "Please enter your email.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setError("loginEmailGroup", "loginEmailError", "Enter a valid email address.");
    isValid = false;
  } else {
    setSuccess("loginEmailGroup", "loginEmailError");
  }

  if (password === "") {
    setError("loginPasswordGroup", "loginPasswordError", "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    setError("loginPasswordGroup", "loginPasswordError", "Password must be at least 8 characters long.");
    isValid = false;
  } else {
    setSuccess("loginPasswordGroup", "loginPasswordError");
  }

  if (isValid) {
    showFormMessage("loginMessage", "Login form validated successfully.", "success");
    loginForm.reset();
    clearState([
      { groupId: "loginEmailGroup", errorId: "loginEmailError" },
      { groupId: "loginPasswordGroup", errorId: "loginPasswordError" }
    ]);
  } else {
    showFormMessage("loginMessage", "Please correct the highlighted fields.", "error");
  }
});

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const animeTitle = document.getElementById("animeTitle").value;
  const reviewerName = document.getElementById("reviewerName").value.trim();
  const rating = document.getElementById("rating").value;
  const reviewText = document.getElementById("reviewText").value.trim();

  let isValid = true;
  clearFormMessage("reviewMessage");

  if (animeTitle === "") {
    setError("animeTitleGroup", "animeTitleError", "Please select an anime title.");
    isValid = false;
  } else {
    setSuccess("animeTitleGroup", "animeTitleError");
  }

  if (reviewerName === "") {
    setError("reviewerNameGroup", "reviewerNameError", "Reviewer name is required.");
    isValid = false;
  } else {
    setSuccess("reviewerNameGroup", "reviewerNameError");
  }

  if (rating === "") {
    setError("ratingGroup", "ratingError", "Please choose a rating from 1 to 5.");
    isValid = false;
  } else if (Number(rating) < 1 || Number(rating) > 5) {
    setError("ratingGroup", "ratingError", "Rating must be between 1 and 5.");
    isValid = false;
  } else {
    setSuccess("ratingGroup", "ratingError");
  }

  if (reviewText === "") {
    setError("reviewTextGroup", "reviewTextError", "Review text cannot be empty.");
    isValid = false;
  } else {
    setSuccess("reviewTextGroup", "reviewTextError");
  }

  if (isValid) {
    showFormMessage("reviewMessage", "Review submitted successfully.", "success");
    reviewForm.reset();
    clearState([
      { groupId: "animeTitleGroup", errorId: "animeTitleError" },
      { groupId: "reviewerNameGroup", errorId: "reviewerNameError" },
      { groupId: "ratingGroup", errorId: "ratingError" },
      { groupId: "reviewTextGroup", errorId: "reviewTextError" }
    ]);
  } else {
    showFormMessage("reviewMessage", "Please correct the highlighted fields.", "error");
  }
});
