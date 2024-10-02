const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const age = document.getElementById('age')

//Show error
const  showError = (input, message)=>{
 const formControl = input.parentElement;
 formControl.className = 'form-control error';
 const small = formControl.querySelector('small');
 small.innerText = message;
}

//Show succes
const showSuccess = (input) =>{
  const formControl = input.parentElement;
  formControl.className = 'form-control success'; 
}

//validar email
const emailCheck = (email) =>{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLocaleLowerCase());
}


//Event listeners
form.addEventListener('submit', e=>{

  //bloquea el envio del formulario
  e.preventDefault();
 
  //Username validation
  if (username.value === ''){
    showError(username, 'Username is required');
  }else{
    showSuccess(username)
  }

//Email validation
if (email.value === '' ){
  showError(email,"email is required")
}else if(emailCheck(email.value)){
  showSuccess(email);
}else{
  showError(email,"Enter a valid email")
}


//Password validation
if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()_\-+=\{\}\[\]|\\:;"'<>,.?/]).{8,}$/.test(password.value ) || password.length < 8 ){
  showError(password,"Enter a valid password")
}else{
  showSuccess(password)
}

//Confirm Password validation

if(password2 !== password){
  showError(password2, 'Password not matching')
}

//age validation
if(age.value >= 0 || age.value < 1000){
  showSuccess(age)
}else{
  showError(age , 'enter a number between 0 and 999')
}


  console.log(username.value);
});
