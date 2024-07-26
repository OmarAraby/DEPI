"use strict";

let data = []; // init an empty array to hold fetched data
const url = "https://fakestoreapi.com/products"; // our api ==> fake store api

const productsDiv = document.getElementById("products");

// Fetch data from our api
fetch(url)
    .then((res) => res.json())
    .then((json) => {
        data = json; // store fetched data in data array
        console.log(data);
        // so we want to iterate over all products in fetched data
        data.forEach((e) => {
            //  create our element for displaying product details
            const productItemDiv = document.createElement("div");
            const productDescDiv = document.createElement("div");
            const productActionDiv = document.createElement("div");
            const productImg = document.createElement("img");
            const productTitle = document.createElement("h2");
            const productPrice = document.createElement("h4");
            const productDesc = document.createElement("p");
            const productButton = document.createElement("button");
            const favorite = document.createElement("i");

            // Set our product details to thier elements
            productImg.src = e.image;
            productTitle.innerText = e.title;
            productPrice.innerText = `$${e.price}`;
            productDesc.innerText = e.description;
            productButton.innerText = "Add To Cart";

            // add classes to the created elements
            productItemDiv.classList.add("product-item");
            productDescDiv.classList.add("product-item-desc");
            productActionDiv.classList.add("product-item-actions");
            productTitle.classList.add("title");
            productPrice.classList.add("price");
            productButton.classList.add("add-to-cart");
            favorite.classList.add("fa-sharp", "fa-solid", "fa-heart");

            // append the created elements of product info to div
            productDescDiv.appendChild(productTitle);
            productDescDiv.appendChild(productPrice);
            productDescDiv.appendChild(productDesc);

            productActionDiv.appendChild(productButton);
            productActionDiv.appendChild(favorite);

            // append the created elements of product info, action to div
            productItemDiv.appendChild(productImg);
            productItemDiv.appendChild(productDescDiv);
            productItemDiv.appendChild(productActionDiv);

            // Append the product div to the main div(product) element
            productsDiv.appendChild(productItemDiv);

            // Add an event listener to the button for adding the product to the cart
            productButton.addEventListener("click", () => {
                // check if there is an existing cart in our local storage
                if (localStorage.getItem("cart")) {
                    // parsing the current cart items
                    const myCart = localStorage.getItem("cart");
                    const cartArr = JSON.parse(myCart);
                    // add new product
                    cartArr.push(e);
                    // update our cart in local storage
                    localStorage.setItem("cart", JSON.stringify(cartArr));
                } else {
                    //If there is no cart exists --> create new array with selected product
                    let arr = [];
                    arr.push(e);
                    localStorage.setItem("cart", JSON.stringify(arr));
                }
            });
        });
    });

//  so now we want to display our selected products from cart
//  so we will check cart in our  local storage

if (localStorage.getItem("cart")) {
    //  first we will get the cart
    // then we will parse it for display
    const getCart = localStorage.getItem("cart");
    const parsecart = JSON.parse(getCart);
    // reference to html that i will display cart
    const myList = document.getElementById("productsList");
    //  iterate over products
    parsecart.forEach((e) => {
        const productCart = document.createElement("li");
        const productImgCart = document.createElement("img");
        const productDetails = document.createElement("div");
        const productTitleCart = document.createElement("h2");
        const priceCart = document.createElement("p");

        productCart.classList.add("product-list-item");
        productDetails.classList.add("product-details");
        productImgCart.classList.add("product-image");
        productTitleCart.classList.add("product-title");
        priceCart.classList.add("product-price");

        productImgCart.src = e.image;
        productTitleCart.innerText = e.title;
        priceCart.innerText = `$${e.price}`;

        productDetails.appendChild(productTitleCart);
        productDetails.appendChild(priceCart);

        productCart.appendChild(productImgCart);
        productCart.appendChild(productDetails);

        myList.appendChild(productCart);
    });
}
