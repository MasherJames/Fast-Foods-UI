window.onload = () => {
  let token = window.localStorage.getItem("token");

  fetch("https://foods-fasty.herokuapp.com/api/v1/fooditems", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      let output = "";
      data["Food Items"].forEach(item => {
        let itemContainer = document.querySelector(".fooditem-container");
        itemContainer.addEventListener("click", () => {
          e.preventDefault();
        });
        output += `
           <div class="fooditem-container">
                    <span class="food-name">${item["name"]}</span>
                    <span class="date">${item["date"]}</span>
                    <div class="food-desc-img">
                        <img src="../img/food2.jpg" alt="food-photo" class="food-image">
                        <p class="food-desc">${item["description"]}</p>
                    </div>
                    <h5 class="food-price">ksh. ${item["price"]}</h5>
                </div>
        `;
      });
      document.querySelector(".admin-items").innerHTML = output;
    });
};

const viewFood = () => {
  fetch(`https://foods-fasty.herokuapp.com/api/v1/fooditems/${request["id"]}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("food_id", data["id"]);
      window.location.assign("fooditem.html");
    });
};
