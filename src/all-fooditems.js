window.onload = function adminItems() {
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
      let contentContainer = document.querySelector(".admin-items");
      data["Food Items"].forEach(foodItem => {
        const markup = `
            <div class="fooditem-container">
                      <span class="food-name">${foodItem["name"]}</span>
                      <span class="fooditem_id">${foodItem["id"]}</span>
                      <span class="date">${
                        foodItem["date"].split(" ")[0]
                      }</span>
                      <div class="food-desc-img">
                          <img src="../img/gg.jpg" alt="food-photo" class="food-image">
                          <p class="food-desc">${foodItem["description"]}</p>
                      </div>
                      <h5 class="food-price">ksh. ${foodItem["price"]}</h5>
            </div>
            `;
        contentContainer.insertAdjacentHTML("beforeend", markup);
        document
          .querySelector(".fooditem_id")
          .setAttribute("onclick", viewItem(this));
      });
    });
};

const viewItem = event => {
  let token = window.localStorage.getItem("token");
  let itemId = event.toElement;
  console.log(itemId);
  fetch(`https://foods-fasty.herokuapp.com/api/v1/fooditems/${itemId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
};
