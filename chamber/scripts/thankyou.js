const myInfo = new URLSearchParams(window.location.search);
document.querySelector("#results").innerHTML = `
<p> Join request for ${myInfo.get('first-name')} ${myInfo.get('last-name')} </p>
<p> Your Email: ${myInfo.get('email-address')}</p>
<p> Your Phone: ${myInfo.get('mobile-phone-number')}</p>
<p> Your business: ${myInfo.get('organization')}</p>
<p> ${myInfo.get('timestamp')} </p>
`;