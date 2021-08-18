let register=()=>{
    let firstName=document.getElementById('firstName');
    let lastName=document.getElementById('lastName');
    let userName=document.getElementById('userName');
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    console.log(firstName.value,lastName.value,email.value,userName.value,password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    console.log(firstName.value,lastName.value,email.value,userName.value,password.value)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    
  });

}