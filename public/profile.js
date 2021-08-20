firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    } else {
      window.location="index.html"
    }
  });

let logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        localStorage.removeItem("uid");
        window.location="login.html";

    })
}

let fullName=document.getElementById("fullName");

fullName.innerHTML=