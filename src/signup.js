let signUp = document.querySelector(".auth_form");

signUp.addEventListener("submit", e => {
  e.preventDefault();

  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  fetch("https://foods-fasty.herokuapp.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data["message"] === "Invalid username") {
        document.querySelector(".output").innerHTML =
          "Username should have a min of 6, max of 20 and be alphanumeric";
        document.querySelector(".output").style.color = "red";
      }
      if (data["message"] === "Invalid email, enter a valid email") {
        document.querySelector(".output").innerHTML = "Enter a valid email";
        document.querySelector(".output").style.color = "red";
      }
      if (data["message"] === "Enter a valid password") {
        document.querySelector(".output").innerHTML =
          "Password should have a min of 8, max of 15 chars, atleast one lowercase, uppercase and number";
        document.querySelector(".output").style.color = "red";
      }
      if (data["message"] === `User with username ${username} already exists`) {
        document.querySelector(
          ".output"
        ).innerHTML = `User with username ${username} already exists`;
        document.querySelector(".output").style.color = "red";
      }
      if (data["message"] === `User with email ${email} already exists`) {
        document.querySelector(
          ".output"
        ).innerHTML = `User with email ${email} already exists`;
        document.querySelector(".output").style.color = "red";
      }
      if (
        data["message"] ===
        `Account for ${username} has been created successfully`
      ) {
        document.querySelector(
          ".output"
        ).innerHTML = `Account for ${username} has been created successfully`;
        document.querySelector(".output").style.color = "green";
        window.location.assign("login.html");
      }
    });
});
