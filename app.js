const firstName = document.getElementById('name1');
const lastName = document.getElementById('name2');
const email = document.getElementById('email');
const message = document.getElementById('message');
const send = document.getElementById('send');

send.addEventListener('click', e =>{
  if (firstName.value === ''){
    alert("Please fill out your first name.")
  }
});
