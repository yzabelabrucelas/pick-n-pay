
document.getElementById("submit").addEventListener("click", callme);
function callme(event) 
{
event.preventDefault();
let email = document.getElementById('email');
localStorage.setItem('email', email.value);

let contact = document.getElementById('contact');
localStorage.setItem('contact', contact.value);

let fname = document.getElementById('fname');
localStorage.setItem('fname', fname.value);

let lname = document.getElementById('lname');
localStorage.setItem('lname', lname.value);

let d_address = document.getElementById('d_address');
localStorage.setItem('d_address', d_address.value);

let d_city = document.getElementById('d_city');
localStorage.setItem('d_city', d_city.value);

let d_province = document.getElementById('d_province');
localStorage.setItem('d_province', d_province.value);

let d_country = document.getElementById('d_country');
localStorage.setItem('d_country', d_country.value);

let d_postal = document.getElementById('d_postal');
localStorage.setItem('d_postal', d_postal.value);

let b_address = document.getElementById('b_address');
localStorage.setItem('b_address', b_address.value);

let b_city = document.getElementById('b_city');
localStorage.setItem('b_city', b_city.value);

let b_province = document.getElementById('b_province');
localStorage.setItem('b_province', b_province.value);

let b_country = document.getElementById('b_country');
localStorage.setItem('b_country', b_country.value);

let b_postal = document.getElementById('b_postal');
localStorage.setItem('b_postal', b_postal.value);

window.location.href = "checkout2.html";
};

