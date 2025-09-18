const path = "scripts/members.json";
const businessSection = document.getElementById("business-section");

async function getMembersData(){
    const response = await fetch(path);
    const data = await response.json();
    const filteredMembers = getRandomlyMembers(data);
    displayMember(filteredMembers);
}

function getRandomlyMembers(data){
    // Silver = 2 , Gold = 3
    const filteredMembers = data.filter( (member) => [2, 3].includes(member.membershipLevel));
    let randomlyMembers = [];
    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        const selectedMember = filteredMembers[randomIndex];
        randomlyMembers.push(selectedMember);
        filteredMembers.splice(randomIndex,1);        
    }
    return randomlyMembers;
}

const displayMember = (members) => {
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        const businessName = document.createElement("h2");
        const tagLine = document.createElement("p");
        businessName.textContent = member.name;
        tagLine.textContent = member.companyLine;
        cardHeader.appendChild(businessName);
        cardHeader.appendChild(tagLine);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        const businessImage = document.createElement("img");
        businessImage.setAttribute("src", member.image);
        businessImage.setAttribute("loading", "lazy");
        businessImage.setAttribute("width", "120");
        businessImage.setAttribute("alt", `Profile of ${member.name}`);
        const ul = document.createElement("ul");
        const emailLi = document.createElement("li");
        emailLi.innerHTML = `<span>EMAIL:</span> ${member.email}`;
        const phoneLi = document.createElement("li");
        phoneLi.innerHTML = `<span>PHONE:</span> ${member.phone}`;
        const urlLi = document.createElement("li");
        urlLi.innerHTML = `<span>URL:</span> ${member.website}`;
        ul.appendChild(emailLi);        
        ul.appendChild(phoneLi);
        ul.appendChild(urlLi);
        cardContent.appendChild(businessImage);
        cardContent.appendChild(ul);

        // Appending child to the card element
        card.appendChild(cardHeader);
        card.appendChild(cardContent);

        // Business section
        businessSection.appendChild(card);
    });
}


getMembersData();