
//VARIABLES
var Database = firebase.database();

var btnuser = document.getElementById("btnuser");
var etuser = document.getElementById("etuser");
var texto = document.getElementById("user");
 




//FUNCIONES

//Escribir en firebase database
/*function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}*/


//Leer on() or once()
/*var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});*/


//Agregar usuario
var agregarUsuario = function(){
    var usuario = etuser.value;
    
    Database.ref("usuarios").child(usuario).set(usuario);
    
    Database.ref("info").child(usuario).set({
        email: "usuario@jaja.com",
        password: "54847989"
    });
    
    //Leer y mostrar------------------------------------------
    var dbRef = Database.ref().child("usuarios").child(usuario);
    dbRef.on("value", function(snapshot){
        texto.innerText = snapshot.val();
    });
     //-------------------------------------------------------
}



//EVENTOS

btnuser.addEventListener("click", agregarUsuario);







