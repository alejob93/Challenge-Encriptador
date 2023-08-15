function   encriptar (){
    var frase = document.getElementById("inputTexto").value.toLowerCase();

    var textoencriptado = frase.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoencriptado;
    document.getElementById("BotonCopiar").style.display = "show";
    document.getElementById("BotonCopiar").style.display = "inherit";
}
function desencriptar (){
        var frase = document.getElementById("inputTexto").value.toLowerCase();
    
        var textoencriptado = frase.replace(/enter/img, "e");
        var textoencriptado = textoencriptado.replace(/ober/img, "o");
        var textoencriptado = textoencriptado.replace(/imes/img, "i");
        var textoencriptado = textoencriptado.replace(/ai/img, "a");
        var textoencriptado = textoencriptado.replace(/ufat/img, "u");
    
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = textoencriptado;
        document.getElementById("BotonCopiar").style.display = "show";
        document.getElementById("BotonCopiar").style.display = "inherit"; 

}
function copiar (){

    var content = document.querySelector("#texto2");
    content.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}
