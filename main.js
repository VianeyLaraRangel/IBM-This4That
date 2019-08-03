
const registrerName = document.getElementById('registrerName');
const registrerMail = document.getElementById('registrerMail');
const registrerPassword = document.getElementById('registrerPassword');
const buttonRegistrer = document.getElementById('registrerSend');
const loginrMail = document.getElementById('loginrMail');
const loginPassword = document.getElementById('loginPassword');
const buttonLogin = document.getElementById('loginSend');
const screenRegistrer =document.getElementById('registrerUser');
const screenLogin = document.getElementById('registrerUser');
const buttonLogout = document.getElementById('logoutButton');



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

buttonRegistrer.addEventListener('click', registrar);




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
            alert("¡Tu registro ha sido exitoso!");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
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
