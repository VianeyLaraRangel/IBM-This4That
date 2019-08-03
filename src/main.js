
const registrerName = document.getElementById('registrerName');
const registrerMail = document.getElementById('registrerMail');
const registrerPassword = document.getElementById('registrerPassword');
const buttonRegistrer = document.getElementById('registrerSend');
const loginrMail = document.getElementById('loginrMail');
const loginPassword = document.getElementById('loginPassword');
const buttonLogin = document.getElementById('loginSend');
const screenRegistrer =document.getElementById('registrerUser');
const screenLogin = document.getElementById('loginUser');
const buttonLogout = document.getElementById('logoutButton');
//Vianey pantalla de bienvenida
const welcomeRegister = document.getElementById('welcome-register-button');

const dataBank = document.getElementById('enter-databank');

const loginMove = document.getElementById('login-button');


welcomeRegister.addEventListener('click', () => {
    buttonsPresentation.style.display = "none";
    textPresentation.style.display = "none";
    loginUser.style.display = "none";
    registerSection.style.display = "block";
    loginButton.style.display = "block";
});

dataBank.addEventListener('click', () => {
    Swal.fire({
        title: '<img src="/img/registroTarjeta.png" alt="imagenTarjeta" class="img-fluid registrer-Send" alt="Responsive image">',
        confirmButtonText:
          '¡Entendido!',
      })
});


const registrar = () => {
    let email = document.getElementById("registrerMail").value;
    let password = document.getElementById("registrerPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

buttonRegistrer.addEventListener('click', (registrar)=> {
    window.location="/IBM-This4That/src/feed.html";
});




const ingresar = () =>{
    let loginrMail = document.getElementById("loginrMail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(loginrMail, loginPassword)
    .then(getSecondSection())
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

const getSecondSection = () =>{
    screenRegistrer.style.display = "none";
    screenLogin.style.display = "none";
    screen2.style.display = "block";
}

buttonLogin.addEventListener('click', ingresar);

const observadorDeSesion = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            Swal.fire(
                '¡Bienvenido!',
                '¡Registro completado!',
                'success'
              )
          // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // ...
        } if (true) {
            registerSection.style.display = "none";
        } else {
          // User is signed out.
          // ...
        }
      });
}
observadorDeSesion();

const  getLogout= () =>{
    firebase.auth().signOut()
    .then( () => {
        console.log("sesion cerrada");
    })
    .catch( (error)=>{
        var errorMessage = error.message;
        console.log(errorMessage);
    })
}
buttonLogout.addEventListener("click",getLogout);


