const verificarPalabra = () => {
    let palabra = document.getElementById("palabra").value.toLowerCase();
    let resultado = document.getElementById('resultadoPalabra');
    resultado.classList.remove('hidden');

    if (!palabra.trim()) {
        const mensajeError = 'Error: por favor, introduce una palabra.';
        resultado.innerText = mensajeError;
        resultado.classList.remove('text-green-600', 'text-red-600', 'text-[#a04500]');
        resultado.classList.add('text-red-600');
        console.log(mensajeError);
        return;
    }

    let letraInicial = palabra.charAt(0);

    let esBonita = (palabra.length === 9 && letraInicial === 'h') || (palabra.length === 5 && letraInicial === 'p');
    let mensaje = esBonita
        ? "Resultado: la palabra es bonita."
        : "Resultado: la palabra no es bonita.";

    resultado.innerText = mensaje;
    resultado.classList.remove('text-green-600', 'text-red-600', 'text-[#a04500]');
    resultado.classList.add(esBonita ? 'text-green-600' : 'text-red-600');

    console.log(`Palabra introducida: ${palabra}`);
    console.log(mensaje);
};

const reiniciarPalabra = () => {
    document.getElementById('palabra').value = '';
    const resultado = document.getElementById('resultadoPalabra');
    resultado.textContent = '';
    resultado.classList.remove('text-green-600', 'text-red-600');
    resultado.classList.add('text-[#a04500]');
    resultado.classList.add('hidden');
    console.log('Formulario de palabra reiniciado.');
};