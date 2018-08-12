
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
var videoRef = Database.ref("videos");
var content = document.getElementById("content");


var numVideos, uRL, bio;

var stop = 0;


//FUNCIONES

//Crear los elementos html
function crearElementos(){
    if(stop==0){
        var divNuevo = document.createElement("div");
        var centerNuevo = document.createElement("center");
        var iframeNuevo = document.createElement("iframe");
        var h2Nuevo = document.createElement("h2");

        divNuevo.className = "videoWrap";
        iframeNuevo.src = uRL;
        iframeNuevo.setAttribute("allowfullscreen", "")
        h2Nuevo.innerText = bio;

        centerNuevo.appendChild(iframeNuevo);
        centerNuevo.appendChild(h2Nuevo);
        divNuevo.appendChild(centerNuevo);
        content.appendChild(divNuevo);
    }else{}
} 



//EVENTOS

//Contar cantidad de videos en la base de tatos
videoRef.on("value", function(snapshot){
    numVideos = snapshot.numChildren();
    //alert(numVideos);
    for(i=numVideos; i>0; i--){
        videoRef.child(i).child("url").on("value", function(urlsnap){
            uRL = urlsnap.val();
            
            videoRef.child(i).child("bio").on("value", function(biosnap){
                bio = biosnap.val();
                crearElementos();
                           
            });
            
        });
        
    }
    stop = 1;
});
