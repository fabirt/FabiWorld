
//VARIABLES

var home = document.getElementById("home"),
    dibujos = document.getElementById("dibujos"),
    videos = document.getElementById("videos"),
    anime = document.getElementById("anime"),
    youtube = document.getElementById("youtube");

home.href = "home.html?user="+infoUser[1];
dibujos.href = "dibujos.html?user="+infoUser[1];
videos.href = "videos.html?user="+infoUser[1];
anime.href = "anime.html?user="+infoUser[1];
youtube.href = "youtube.html?user="+infoUser[1];




var Database = firebase.database();
var ytRef = Database.ref("youtubers");

var miLista = document.getElementById("miLista"),
    add = document.getElementById("add"),
    agregar = document.getElementById("agregar");

add.style.display = "none"

var etnombre = document.getElementById("nombre"),
    etdireccion = document.getElementById("direccion"),
    btnenviar = document.getElementById("enviar"),
    info = document.getElementById("info");
info.style.display = "none";

var nombreNuevo, direccionNuevo;

var numYT, link, nombre;

var stop = 0;


//FUNCIONES

//Crear los elementos html
function crearElementos(){
    if(stop==0){
        var liNuevo = document.createElement("li");
        var aNuevo = document.createElement("a");
        

        liNuevo.className = "lista";
        aNuevo.className = "link";
        aNuevo.href = link;
        aNuevo.innerText = nombre;
        aNuevo.target = "_blank";

        liNuevo.appendChild(aNuevo);
        miLista.appendChild(liNuevo);
    }else{}
} 

function reset(){
    etnombre.value="";
    etdireccion.value="";
    info.style.display="none";
}
function addYoutuber(name, ytlink){
    ytRef.child(numYT+1).set({
        link: ytlink,
        nombre: name
    });
    location.reload();
}

//Mostrar o esconder
var hide_show = function(){
    if (add.style.display == "none") {
        add.style.display = "block";
        agregar.setAttribute("value","Esconder");
    } else {
        add.style.display = "none";
        agregar.setAttribute("value","Agregar youtuber");
        info.style.display = "none";
    }
}

//Verificar campos
var verificar = function(){
    nombreNuevo = etnombre.value;
    direccionNuevo = etdireccion.value;
    if(nombreNuevo=="" || direccionNuevo==""){
        info.style.display = "inline";    
       }else{
        addYoutuber(nombreNuevo,direccionNuevo);
       }
}


//EVENTOS

//Contar cantidad de videos en la base de tatos
ytRef.on("value", function(snapshot){
    numYT = snapshot.numChildren();
    
    for(i=1; i<=numYT; i++){
        ytRef.child(i).child("link").on("value", function(linksnap){
            link = linksnap.val();
            
            ytRef.child(i).child("nombre").on("value", function(namesnap){
                nombre = namesnap.val();
                crearElementos();
                           
            });
            
        });
        
    }
    stop = 1;
});


//Mostar y esconder formulario
agregar.addEventListener("click",hide_show);

//Enviar informacion
btnenviar.addEventListener("click",verificar);

