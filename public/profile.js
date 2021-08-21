firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // let id = firebase.database().ref(`users`).push().key;
    // firebase.database().ref('user').once('value',(data)=>{
    //     let email = document.getElementById('email');
    // let fullName = document.getElementById('fullName');
    // fullName.innerHTML=data.val().firstname;
    // email.innerHTML=data.val().email;
    // console.log(data.val())
    // console.log(id)


    // })
    firebase.database().ref().once('value', (data) => {
      data.forEach((childdata) => {
        childdata.forEach((childKey) => {
          var newKeyData = childKey.val();
          let email=document.getElementById('email');
          let fullName=document.getElementById('fullName');
          let phone=document.getElementById('phone');
          let mobile=document.getElementById('mobile');
          let addressPro=document.getElementById('addressPro');
          



          fullName.innerHTML=newKeyData.firstName+" "+newKeyData.lastName;
          email.innerHTML=newKeyData.email;

          // console.log(newKeyData.firstName)
        })
      });

    });


  } else {
    window.location = "index.html"
  }
});

let logout = () => {
  firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem("uid");
      window.location = "login.html";

    })
}