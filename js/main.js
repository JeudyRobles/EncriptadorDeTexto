document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.querySelector(".placeholderUsuario input");
    const btnEncriptar = document.querySelector(".encriptar");
    const btnDesencriptar = document.querySelector(".desencriptar");
    const btnCopiar = document.querySelector(".copiar");
    const textoEncriptado = document.querySelector(".textoEncriptado h2");
    const parrafoEncriptado = document.querySelector(".textoEncriptado p");
    const seccionTextoEncriptado = document.querySelector(".sectionTextoEncriptado");

    function encriptarTexto(texto) {
        const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
        return texto.replace(/[eioua]/g, letra => reglas[letra]);
    }

    function desencriptarTexto(texto) {
        const reglas = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
        return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => reglas[palabra]);
    }

    btnEncriptar.addEventListener("click", function() {
        const texto = inputTexto.value;
        if (texto && /^[a-z\s]*$/.test(texto)) {
            const textoEnc = encriptarTexto(texto);
            textoEncriptado.textContent = "Texto encriptado";
            parrafoEncriptado.textContent = textoEnc;
            btnCopiar.style.display = "block";
        } else {
            textoEncriptado.textContent = "Error";
            parrafoEncriptado.textContent = "Solo se permiten letras minúsculas y sin acentos.";
            btnCopiar.style.display = "none";
        }
    });

    btnDesencriptar.addEventListener("click", function() {
        const texto = inputTexto.value;
        if (texto && /^[a-z\s]*$/.test(texto)) {
            const textoDes = desencriptarTexto(texto);
            textoEncriptado.textContent = "Texto desencriptado";
            parrafoEncriptado.textContent = textoDes;
            btnCopiar.style.display = "block";
        } else {
            textoEncriptado.textContent = "Error";
            parrafoEncriptado.textContent = "Solo se permiten letras minúsculas y sin acentos.";
            btnCopiar.style.display = "none";
        }
    });

    btnCopiar.addEventListener("click", function() {
        navigator.clipboard.writeText(parrafoEncriptado.textContent)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    });
});
