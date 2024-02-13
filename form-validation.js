document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const validationErrors = [];

    if (name === "") {
      validationErrors.push("Name field is required.");
    }

    if (email === "") {
      validationErrors.push("Email field is required.");
    } else if (!isValidEmail(email)) {
      validationErrors.push("Please enter a valid email address.");
    }

    if (message === "") {
      validationErrors.push("Message field is required.");
    }

    if (validationErrors.length > 0) {
      alert(validationErrors.join("\n"));
    } else {
      this.submit();
    }
  });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
