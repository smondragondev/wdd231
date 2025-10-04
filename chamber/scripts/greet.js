// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

const main = document.querySelector("main");
const alertMessage = document.createElement("p");
alertMessage.classList.add("alertMessage");

// Last visit date
const lastVisitString = localStorage.getItem('lastVisitDate');
const today = Date.now();
if (lastVisitString){
    const lastVisitDate = Number(lastVisitString);
    const daysDiff = (today - lastVisitDate) / msToDays;    
    console.log(daysDiff);
    if (daysDiff < 1){
        alertMessage.textContent = "Back so soon! Awesome!";
    } else{
        const roundedDays = Math.round(daysDiff);
        const dayString = roundedDays > 1 ? 'days' : 'day';
        alertMessage.textContent =`You last visited ${roundedDays} ${dayString} ago.`}
} else{
    alertMessage.textContent ="Welcome! Let us know if you have any questions.";
}
main.appendChild(alertMessage);
localStorage.setItem('lastVisitDate',JSON.stringify(today));