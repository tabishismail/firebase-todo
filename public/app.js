firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location="profile.html"
    } else {
    }
  });

let signup = () => {
    window.location = "signup.html"
}
let login = () => {
    window.location = "index.html"
}

let register = () => {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let userName = document.getElementById('userName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let empty = /.*\S.*/;
    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm
    let id = firebase.database().ref(`users`).push().key;
    let loader = document.getElementById('loader');
    let loaderText = document.getElementById("loaderText");
    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        id:id
    }
    if (empty.test(firstName.value)) {
        if (empty.test(lastName.value)) {
            if (empty.test(userName.value)) {
                if (emailRegx.test(email.value)) {
                    if (passwordRegx.test(password.value)) {
                        loader.style.display = "block"
                        loaderText.style.display = "none"
                        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                            .then((userCredential) => {
                                var user = userCredential.user;
                                firebase.database().ref(`users/${id}`).set(data)
                                    .then(() => {
                                        loader.style.display = "none"
                                        loaderText.style.display = "block"
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Success',
                                            text: 'Registeration complete successfully'
                                        })
                                        setTimeout(() => {
                                            location.href = "index.html"
                                        }, 3000)

                                    })
                            })
                            .catch((error) => {
                                loader.style.display = "none"
                                loaderText.style.display = "block"
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: `${error.message}`
                                });
                            });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Enter Correct Password!'
                        })
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Enter Correct Email Address!'
                    })
                };
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Enter User Name!'
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter Last Name!'
            })

        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter First Name!'
        })

    }

};

let signIn = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let loader = document.getElementById('loader');
    let loaderText = document.getElementById("loaderText");
    if (emailRegx.test(email.value)) {
        loader.style.display = "block"
        loaderText.style.display = "none"
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((res) => {
                localStorage.setItem("uid",res.user.uid)
                loader.style.display = "none"
                loaderText.style.display = "block"
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Log in Successfull',
                    showConfirmButton: false
                })
                setTimeout(() => {
                    location.href = "profile.html"
                }, 2000)

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
                loader.style.display = "none"
                loaderText.style.display = "block"
            });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Email Address!',
            showConfirmButton: false
        })
    }
}