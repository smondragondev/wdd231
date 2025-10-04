const path = "scripts/places.json";

const cards = document.querySelector("#cards");

async function getPlacesData(){
    const response = await fetch(path);
    const data = await response.json();
    displayPlaces(data);
}

const displayPlaces = (places) => {
    places.forEach((place) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("address");
        const description = document.createElement("p");
        const image = document.createElement("img");
        const button = document.createElement("button");
        name.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        description.textContent = `${place.description}`;
        image.setAttribute("src",place.photo_url);
        image.setAttribute("alt",`The place ${place.name}.`);
        image.setAttribute("loading","lazy");
        image.setAttribute("width","300");
        image.setAttribute("height","200");
        button.textContent = "Learn More";
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(image);
        card.appendChild(button);
        cards.appendChild(card);
    });
}

getPlacesData();