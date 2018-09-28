let addFood = document.querySelector(".food_form");

addFood.addEventListener("submit", e => {
  e.preventDefault();

  let name = document.querySelector("#food-name").value;
  let description = document.querySelector("#description").value;
  let price = document.querySelector("#price").value;
  let token = window.localStorage.getItem("token");

  fetch("https://foods-fasty.herokuapp.com/api/v1/fooditems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      description: description,
      price: price
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data["message"] === "Enter a valid food name") {
        document.querySelector(".output").innerHTML = "Enter a valid food name";
        document.querySelector(".output").style.color = "red";
      }
      if (data["message"] === "Enter valid food description") {
        document.querySelector(".output").innerHTML =
          "Enter valid food description";
        document.querySelector(".output").style.color = "red";
      }

      if (data["message"] === "Food item created successfully") {
        document.querySelector(".output").innerHTML =
          "Food item created successfully";
        document.querySelector(".output").style.color = "green";
      }
    });
});
