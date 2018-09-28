var jwtDecode = require("jwt-decode");
let login = document.querySelector("#login_form");

login.addEventListener("submit", e => {
  e.preventDefault();

  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  fetch("https://foods-fasty.herokuapp.com/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
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

      if (data["message"] === "Enter a valid password") {
        document.querySelector(".output").innerHTML =
          "Password should have a min of 8, max of 15 chars, atleast one lowercase, uppercase and number";
        document.querySelector(".output").style.color = "red";
      }

      if (data["message"] === "user not found") {
        document.querySelector(".output").innerHTML =
          "User not found, please create an account";
        document.querySelector(".output").style.color = "red";
      }

      if (data["message"] === `Incorrect password for ${username}`) {
        document.querySelector(
          ".output"
        ).innerHTML = `Incorrect password for ${username}, enter the correct password`;
        document.querySelector(".output").style.color = "red";
      }

      if (data["message"] === `You were successfully logged in ${username}`) {
        window.localStorage.setItem("token", data["token"]);
        document.querySelector(
          ".output"
        ).innerHTML = `You were successfully logged in ${username}`;
        document.querySelector(".output").style.color = "green";
        let role = jwtDecode(data["token"])["identity"]["is_admin"];
        if (role) {
          window.location.assign("admin-dashboard.html");
        } else {
          window.location.assign("customer-dashboard.html");
        }
      }
    });
});
