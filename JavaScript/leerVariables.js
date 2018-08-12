var cadVariables = location.search.substring(1,location.search.length);
var arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  var infoUser = arrVariables[i].split("=");
  /*if (isNaN(parseFloat(arrVariableActual[1])))
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
  else
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");*/
}
if(infoUser[1]==undefined || infoUser[1]=="undefined"){
    document.write("<center><h1 style='color:blue;'>¡Error 314! No ha iniciado sesión</h1></center>");

    window.stop();
   }else{
   
   }


