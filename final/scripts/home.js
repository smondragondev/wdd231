import { getCustomers,getProducts } from "./files.mjs";


const juicesContainer = document.querySelector("#our-juices");
const displayJuices= (juices) => {
    juices.forEach(
        (juice) => {
            const card = document.createElement("div");
            const name = document.createElement("h3");
            const description = document.createElement("p");
            const price = document.createElement("p");
            const productImage = document.createElement("img");
            card.setAttribute("class","card");
            name.textContent = juice.name;
            description.textContent = juice.description;
            price.textContent = `S/. ${juice.price.toFixed(2)}`;
            price.setAttribute("class","price");
            productImage.setAttribute("src", juice.imageUrl);
            productImage.setAttribute("alt", `Image of ${juice.name}`);
            productImage.setAttribute("loading","lazy");
            productImage.setAttribute("width", "250");
            productImage.setAttribute("height", "250");
            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(price);
            card.appendChild(productImage);
            juicesContainer.appendChild(card);
        });
}


const filterJuices = (juices) => {
    const filteredJuices = juices.filter( (juice) => juice.category === 'juice');
    let randomlyJuices = [];
    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * filteredJuices.length);
        const selectedMember = filteredJuices[randomIndex];
        randomlyJuices.push(selectedMember);
        filteredJuices.splice(randomIndex,1);        
    }
    return randomlyJuices;

}

const feedbackContainer = document.querySelector("#customer-feedbacks");
const displayCustomerFeedback = (customerFeedbacks) => {
    customerFeedbacks.forEach(
        (customerFeedback) => {
            const card = document.createElement("div");
            const name = document.createElement("h3");
            const feedback = document.createElement("p");
            const favoriteProduct = document.createElement("p");
            const profile = document.createElement("img");
            card.setAttribute("class","card");
            name.textContent = customerFeedback.name;
            feedback.textContent = customerFeedback.feedback;
            favoriteProduct.innerHTML = `<strong>Favorite:</strong> ${customerFeedback.favoriteProduct}`;
            profile.setAttribute("src", customerFeedback.imageUrl);
            profile.setAttribute("alt", `The feedback of ${customerFeedback.name}`);
            profile.setAttribute("loading","lazy");
            profile.setAttribute("width", "250");
            profile.setAttribute("height", "250");
            card.appendChild(profile);
            card.appendChild(name);
            card.appendChild(feedback);
            card.appendChild(favoriteProduct);
            feedbackContainer.appendChild(card);
        });
}

displayJuices(filterJuices(await getProducts()));
displayCustomerFeedback(await getCustomers());