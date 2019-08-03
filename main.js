

const registrar = () => {
    let mail = document.getElementById("email-registro").value;
    let password = document.getElementById("password-registro").value;

    firebase.auth().createUserWithEmailAndPassword(mail, password)
    /*.then(verificar())*/
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}


const ingresar = () =>{
    let mail2 = document.getElementById("email-login").value;
    let password2 = document.getElementById("password-login").value;

    firebase.auth().signInWithEmailAndPassword(mail2, password2)
    .then(muro())
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

const observadorDeSesion = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe usuario activo");
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
          console.log("no exite usuario activo");
        }
      });
}

observadorDeSesion();

const cerrarSesion = () =>{
    firebase.auth().signOut()
    .then( () => {
        console.log("sesion cerrada");
    })
    .catch( (error)=>{
        var errorMessage = error.message;
        console.log(errorMessage);
    })
}