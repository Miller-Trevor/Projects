// Cowboy hat: price_1N0q6BEnSZgQUDu6xtEmQlQz
// New Era: price_1N0q7fEnSZgQUDu6fGt07N9Q
// Spin top: price_1N0q8oEnSZgQUDu6sDZ0mFQ7
// Black Fedora: price_1N0q9cEnSZgQUDu61pBSnrCi
// sorting hat: price_1N0qAFEnSZgQUDu6j2UovfJW
// black beanie: price_1N0qApEnSZgQUDu60mDQd8C2
// bucket hat: price_1N0qBUEnSZgQUDu68CGgVTuA
// dont trip hat: price_1N0qC5EnSZgQUDu6oyVxNVDa
import product1 from "./pictures/1.png";
import product2 from "./pictures/2.png";
import product3 from "./pictures/3.png";
import product4 from "./pictures/4.png";
import product5 from "./pictures/5.png";
import product6 from "./pictures/6.png";
import product7 from "./pictures/7.png";
import product8 from "./pictures/8.webp";

const productsArray = [
    {
        id: "price_1N0q6BEnSZgQUDu6xtEmQlQ",
        title: "Standard Cowboy Hat",
        price: 49.99,
        image: product1
    },
    {
        id: "price_1N0q7fEnSZgQUDu6fGt07N9Q",
        title: "New Era Baseball Cap",
        price: 42.99,
        image: product2
    },
    {
        id: "price_1N0q8oEnSZgQUDu6sDZ0mFQ7",
        title: "Spin Top Baseball Cap",
        price: 19.99,
        image: product3
    },
    {
        id: "price_1N0q9cEnSZgQUDu61pBSnrCi",
        title: "Black Fedora",
        price: 31.99,
        image: product4
    },
    {
        id: "price_1N0qAFEnSZgQUDu6j2UovfJW",
        title: "Sorting Hat",
        price: 99.99, 
        image: product5
    },
    {
        id: "price_1N0qApEnSZgQUDu60mDQd8C2",
        title: "Black Beanie",
        price: 21.99, 
        image: product6
    },
    {
        id: "price_1N0qBUEnSZgQUDu68CGgVTuA",
        title: "Black Bucket Hat",
        price: 25.99, 
        image: product7
    },
    {
        id: "price_1N0qC5EnSZgQUDu6oyVxNVDa",
        title: "Don't Trip Hat",
        price: 39.99, 
        image: product8
    }
    

];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };