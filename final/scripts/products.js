import { getProducts } from "./files.mjs";

const CATEGORIES = ["Juice", "Snack", "Combo", "Drink", "Special"];
const CATEGORY_SELECTED_KEY = "categorySelected" 
const productsContainer = document.querySelector("#products");
const filterContainer = document.querySelector("#filters");

const displayCategories = (categories) => {
    categories.forEach(
        (category) => {
            const listElement = document.createElement("li");
            const filterButton = document.createElement("button");
            filterButton.textContent = category;
            filterButton.setAttribute("id",`id-${category.toLowerCase()}`);
            filterButton.addEventListener("click", async ()=>{
                const filteredProducts = await filterProducts(category.toLowerCase());
                displayProducts(filteredProducts);              
                handleSelectedStyle(filterButton);  
                saveSelectedCategory(category.toLowerCase());
            });
            listElement.appendChild(filterButton);
            filterContainer.appendChild(listElement);
        }
    );
}

const displayProducts = (products) => {
    productsContainer.innerHTML = "";
    products.forEach(
        (product) => {
            const card = document.createElement("div");
            const name = document.createElement("h3");
            const description = document.createElement("p");
            const price = document.createElement("p");
            const productImage = document.createElement("img");
            card.setAttribute("class", "card");
            name.textContent = product.name;
            description.textContent = product.description;
            price.textContent = `S/. ${product.price.toFixed(2)}`;
            price.setAttribute("class", "price");
            productImage.setAttribute("src", product.imageUrl);
            productImage.setAttribute("alt", `Image of ${product.name}`);
            productImage.setAttribute("loading", "lazy");
            productImage.setAttribute("width", "300");
            productImage.setAttribute("height", "300");
            card.appendChild(productImage);
            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(price);
            productsContainer.appendChild(card);
        });
}


const filterProducts = async (category) => {
    const products = await getProducts();
    if (category === "all") {
        return products;
    }
    const filteredJuices = products.filter((product) => product.category === category);
    return filteredJuices
}

const handleSelectedStyle = async (selectedButton) => {
    if (selectedButton.classList.contains("selected")){        
        displayProducts(await filterProducts("all"));
        saveSelectedCategory("all");   
    } else{
        const selectedOptions = document.querySelectorAll(".selected");
        selectedOptions.forEach( (option) => {
            option.classList.remove("selected");
        });
    }
    selectedButton.classList.toggle("selected");
}

const saveSelectedCategory = (category) => {
    localStorage.setItem(CATEGORY_SELECTED_KEY, category);
}

const initialSetup = async () => {
    let selectedCategory = localStorage.getItem(CATEGORY_SELECTED_KEY);
    if (!selectedCategory) selectedCategory = "all";
    displayCategories(CATEGORIES);
    const selectedFilter = document.querySelector(`#id-${selectedCategory}`);
    if (selectedFilter) await handleSelectedStyle(selectedFilter);
    displayProducts(await filterProducts(selectedCategory));
}


initialSetup();