
window.onload = function () 
{
  document.getElementById('email').innerHTML = localStorage.getItem('email');
  document.getElementById('contact').innerHTML = localStorage.getItem('contact');
  document.getElementById('fname').innerHTML = localStorage.getItem('fname');
  document.getElementById('lname').innerHTML = localStorage.getItem('lname');

  document.getElementById('d_address').innerHTML = localStorage.getItem('d_address');
  document.getElementById('d_city').innerHTML = localStorage.getItem('d_city');
  document.getElementById('d_province').innerHTML = localStorage.getItem('d_province');
  document.getElementById('d_country').innerHTML = localStorage.getItem('d_country');
  document.getElementById('d_postal').innerHTML = localStorage.getItem('d_postal');
  document.getElementById('b_address').innerHTML = localStorage.getItem('b_address');
  document.getElementById('b_city').innerHTML = localStorage.getItem('b_city');
  document.getElementById('b_province').innerHTML = localStorage.getItem('b_province');
  document.getElementById('b_country').innerHTML = localStorage.getItem('b_country');
  document.getElementById('b_postal').innerHTML = localStorage.getItem('b_postal');

 };