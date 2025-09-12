const currentYearSpan = document.querySelector('#currentYear');
const lastModifiedParagraph = document.querySelector('#lastModified');

// Set the current year
const currentYear = new Date().getFullYear();
currentYearSpan.textContent=currentYear;

// Last modified
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;
