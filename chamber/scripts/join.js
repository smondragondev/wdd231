// Non profit
const npButton = document.querySelector(".card.non-profit");
const npDialog = document.querySelector("#np-dialog");
const npCloseButton = document.querySelector("#np-dialog button");
// Bronze
const bronzeButton = document.querySelector(".card.bronze");
const bronzeDialog = document.querySelector("#bronze-dialog");
const bronzeCloseButton = document.querySelector("#bronze-dialog button");
// Silver
const silverButton = document.querySelector(".card.silver");
const silverDialog = document.querySelector("#silver-dialog");
const silverCloseButton = document.querySelector("#silver-dialog button");
// Gold
const goldButton = document.querySelector(".card.gold");
const goldDialog = document.querySelector("#gold-dialog");
const goldCloseButton = document.querySelector("#gold-dialog button");


const timestampInput = document.querySelector("#timestamp");
const now = new Date();
const formattedDateTime = now.toLocaleString();
timestampInput.value = formattedDateTime;

function addEventsToHandleDialogs(openButton,dialog,closeButton) {
    openButton.addEventListener('click', () => {
        dialog.showModal();
    })
    
    closeButton.addEventListener('click', () => {
        dialog.close();
    });
}





addEventsToHandleDialogs(npButton,npDialog,npCloseButton);
addEventsToHandleDialogs(bronzeButton,bronzeDialog,bronzeCloseButton);
addEventsToHandleDialogs(silverButton,silverDialog,silverCloseButton);
addEventsToHandleDialogs(goldButton,goldDialog,goldCloseButton);