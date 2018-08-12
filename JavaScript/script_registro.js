//VARIABLES

var Database = firebase.database();

var btnregistro = document.getElementById("btnregistro"),
    etuser = document.getElementById("etuser"),
    etpass = document.getElementById("etpass"),
    etpass2 = document.getElementById("etpass2");

var user, pass, pass2;
var registrado = 0;

//FUNCIONES

function registrarse(parametro){
    if (parametro==1){
        Database.ref("nicknames").child(user).set(user);

        Database.ref("usuarios").child(user).set({
            password: pass
        });
        window.location = "index.html";
    }else{
        
    }
}


var validar = function(){
    
    user = etuser.value;
    pass = etpass.value;
    pass2 = etpass2.value;
    
    if(user=="" || pass=="" || pass2==""){
        alert("Llene todos los campos")
       }else if(pass==pass2){
                alert("Ha sido registrado")
                registrado = 1;
                registrarse(registrado);
            }else {
                alert("Las contraseñas no coinciden")
            }
    
}


//EVENTOS
btnregistro.addEventListener("click", validar);