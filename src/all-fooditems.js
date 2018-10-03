const renderFoodItem = foodItem => {
  const markup = `
    <div class="fooditem-container">
          <a href="#${foodItem["id"]}" class="fooditem-container__link">
              <span class="food-name">${foodItem["name"]}</span>
              <span class="date">${foodItem["date"]}</span>
              <div class="food-desc-img">
                  <img src="../img/gg.jpg" alt="food-photo" class="food-image">
                  <p class="food-desc">${foodItem["description"]}</p>
              </div>
              <h5 class="food-price">ksh. ${foodItem["price"]}</h5>
          </a>
    </div>
  `;
  document
    .querySelector(".admin-items")
    .insertAdjacentHTML("beforeend", markup);
};

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
      data["Food Items"].forEach(renderFoodItem);
    });
};
