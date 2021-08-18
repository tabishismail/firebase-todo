let register = () => {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let userName = document.getElementById('userName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm

    if (emailRegx.test(email.value)) {
        if (passwordRegx.test(password.value)) {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                .then((res) => {
                    console.log(firstName.value, lastName.value, email.value, userName.value, password.value);
                })
                .catch((error) => {
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
};