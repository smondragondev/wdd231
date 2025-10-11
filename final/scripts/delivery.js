// Cash
const cashButton = document.querySelector(".card.cash");
const cashDialog = document.querySelector("#cash-dialog");
const cashCloseButton = document.querySelector("#cash-dialog button");
// Yape/Plin
const yapePlinButton = document.querySelector(".card.yape-plin");
const yapePlinDialog = document.querySelector("#yape-plin-dialog");
const yapePlinCloseButton = document.querySelector("#yape-plin-dialog button");
// Credit card
const creditCardButton = document.querySelector(".card.credit-card");
const creditCardDialog = document.querySelector("#credit-card-dialog");
const creditCardCloseButton = document.querySelector("#credit-card-dialog button");
// Debit Card
const debitCardButton = document.querySelector(".card.debit-card");
const debitCardDialog = document.querySelector("#debit-card-dialog");
const debitCardCloseButton = document.querySelector("#debit-card-dialog button");


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

addEventsToHandleDialogs(cashButton,cashDialog,cashCloseButton);
addEventsToHandleDialogs(yapePlinButton,yapePlinDialog,yapePlinCloseButton);
addEventsToHandleDialogs(creditCardButton,creditCardDialog,creditCardCloseButton);
addEventsToHandleDialogs(debitCardButton,debitCardDialog,debitCardCloseButton);