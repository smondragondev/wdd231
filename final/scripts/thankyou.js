const myInfo = new URLSearchParams(window.location.search);
document.querySelector("#results").innerHTML = `
<p> Delivery request for ${myInfo.get('first-name')} ${myInfo.get('last-name')} </p>
<p> Your Phone: ${myInfo.get('mobile-phone-number')}</p>
<p> Place to deliver: ${myInfo.get('address')}</p>
<p> Order details: ${myInfo.get('order-detail')}</p>
<p> ${myInfo.get('timestamp')} </p>
`;