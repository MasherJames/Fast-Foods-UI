let name;
let description;
let price;
let date;
const renderSingleItem = () => {
  const id = window.location.hash.replace("#", "");
  console.log(id);
  if (id) {
    let token = window.localStorage.getItem("token");
    fetch(`https://foods-fasty.herokuapp.com/api/v1/fooditems/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        name = data["Food Items"].name;
        description = data["Food Items"].description;
        price = data["Food Items"].price;
        date = data["Food Items"].date;
      });
    document.querySelector(".sigle-food-name").innerHTML = name;
    document.querySelector(".sigle-food-desc").innerHTML = description;
    document.querySelector(".sigle-food-price").innerHTML = price;
    document.querySelector(".sigle-date").innerHTML = date;
  }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, renderSingleItem)
);

// window.addEventListener("hashchange", renderSingleItem());
// document
//   .querySelector(".fooditem-container")
//   .addEventListener("hashchange", e => {
//     e.preventDefault();
//     renderSingleItem();
//   });
