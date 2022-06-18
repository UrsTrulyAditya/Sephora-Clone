let ProductData = JSON.parse(localStorage.getItem("cart-page")) || [];
console.log(ProductData);

display(ProductData);


function display(ProductData) {
  ProductData.forEach(function (elem) {
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.Image);

    let des = document.createElement("h3");
    des.innerText = elem.des;

    let name = document.createElement("h4");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = elem.price;
    box.append(image, des, name, price);
    document.querySelector(".bthree").append(box);
  });
}
