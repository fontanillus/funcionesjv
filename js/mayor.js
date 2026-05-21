const encontrarMayor = () => {
    const uno = parseFloat(document.getElementById('uno').value);
    const dos = parseFloat(document.getElementById('dos').value);
    const resultado = document.getElementById('resultado');
    resultado.classList.remove('hidden');

    resultado.classList.remove('text-[#a04500]', 'text-red-700');

    if (!Number.isInteger(uno) || !Number.isInteger(dos)) {
        const mensaje = 'Error: por favor, ingresa números enteros.';
        resultado.textContent = mensaje;
        resultado.classList.add('text-red-700');
        console.log(mensaje);
        return;
    }

    resultado.classList.add('text-[#a04500]');

    let mensaje = '';
    if (uno > dos) {
        mensaje = `Resultado: el número mayor es ${uno}.`;
    } else if (dos > uno) {
        mensaje = `Resultado: el número mayor es ${dos}.`;
    } else {
        mensaje = 'Resultado: ambos números son iguales.';
    }

    resultado.textContent = mensaje;
    console.log(`Números introducidos: ${uno}, ${dos}`);
    console.log(mensaje);
};

const reiniciar = () => {
    document.getElementById('uno').value = '';
    document.getElementById('dos').value = '';
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';
    resultado.classList.add('hidden');
    resultado.classList.remove('text-red-700');
    resultado.classList.add('text-[#a04500]');
};