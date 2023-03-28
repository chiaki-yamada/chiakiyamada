const send = document.getElementById('send');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

send.addEventListener('click', (e) => {
  e.preventDefault();
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});
mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});



const firstName = document.getElementById('name1');
const lastName = document.getElementById('name2');
const email = document.getElementById('emailaddress');
const message = document.getElementById('messageform');
send.addEventListener('click', e =>{
  if (firstName.value === ""){
    alert("Please fill out your first name.")
  }else if (lastName.value === ''){
    alert("Please fill out your last name.")
  }else if (email.value ===''){
    alert("Please fill out your email address.")
  }else if(message.value === ''){
    alert("Please fill out message.")
  }
});










