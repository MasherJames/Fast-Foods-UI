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
      console.log(data);
    });
});
