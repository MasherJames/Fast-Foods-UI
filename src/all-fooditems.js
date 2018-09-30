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
      console.log(data["Food Items"]);
      let output = "";
      data["Food Items"].forEach(request => {
        output += `
           <div class="fooditem-container">
                    <span class="food-name">${request["name"]}</span>
                    <span class="date">${request["date"]}</span>
                    <div class="food-desc-img">
                        <img src="../img/food2.jpg" alt="food-photo" class="food-image">
                        <p class="food-desc">${request["description"]}</p>
                    </div>
                    <h5 class="food-price">ksh. ${request["price"]}</h5>
                </div>
        `;
      });
      document.querySelector(".admin-items").innerHTML = output;
    });
};
