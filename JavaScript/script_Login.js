
//VARIABLES

var Database = firebase.database();

var btnlogin = document.getElementById("btnlogin"),
    etuser = document.getElementById("etuser"),
    etpass = document.getElementById("etpass");

var user, pass, dbUser, dbPass;

var prueba;

//FUNCIONES
var acceder = function(){
    
    user = etuser.value;
    pass = etpass.value;
    
    var dbRef = Database.ref().child("nicknames").child(user);
    dbRef.on("value", function(snapshot){
        dbUser = snapshot.val();
        
        if(dbUser==null){
            alert("Informacion no valida");
           }else{
               var dbRefPass = Database.ref().child("usuarios").child(dbUser).child("password");
               dbRefPass.on("value", function(data){
                   dbPass = data.val();
                   if(dbPass==pass){
                       var destino = "home.html?"+"user="+user;
                        window.location=encodeURI(destino);
                      }else{
                          alert("Informacion no valida");
                      }
               });
           } 
        
    });
    
    
    
}


//EVENTOS
btnlogin.addEventListener("click", acceder);