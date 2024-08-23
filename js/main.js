function functionEncriptar() {
    //alert('Funciona');
    contador = 0; // Contador siempre el cero
    contador ++; // Cuando se ejecute la funcion el contador suma uno

    let textoNoEncriptado = document.getElementById("message-input").value; // Agarra el texto del textarea
    console.log(textoNoEncriptado); // Lo muestra en la consola

    textoEncriptado = textoNoEncriptado // Remplaza las vocales con palabras aleatorias***
        .replace(/e/g, "enter") // /e/: Esto es una expresión regular que busca la letra “e”.
        .replace(/i/g,  "imes") //  g: Este es un modificador que significa “global”. Indica que la búsqueda debe realizarse en toda la cadena y no detenerse después de la primera coincidencia.
        .replace(/a/g,    "ai") // "enter": Es la cadena de texto que reemplazará cada ocurrencia de “e, i, a, o, u”.
        .replace(/o/g,  "ober")
        .replace(/u/g,  "ufat")
    document.getElementById("textoEncriptado").textContent = textoEncriptado; // Manda el texto de la variable a la etiqueta p del sidebar

    if (contador ++) { // Condicional si
        document.getElementById("h2-display").style.display = 'none'; // La propiedad style.display, elimina el elemento de destino del flujo normal de la página y permite que el resto de los elementos ocupen su espacio.
        document.getElementById("image-muñeco").style.display = 'none'; // Elimina el div de la imagen
    }

    //console.log(textoEncriptado);

}

// Lo mismo pero al revez
function functionDesencriptar() {
    contador = 0;
    contador ++;
    
    
}