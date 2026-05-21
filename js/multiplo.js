
const comprobarMultiplo = () => {
    const dividendoTexto = document.getElementById('dividendo').value.trim();
    const divisorTexto = document.getElementById('divisor').value.trim();
    const resultado = document.getElementById('resultadoMultiplo');

    resultado.classList.add('hidden');
    resultado.classList.remove('text-[#7b6eea]', 'text-red-700');

    if (dividendoTexto === '' || divisorTexto === '') {
        resultado.textContent = 'Error: completa ambos campos.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    const dividendo = Number(dividendoTexto);
    const divisor = Number(divisorTexto);

    if (!Number.isInteger(dividendo) || !Number.isInteger(divisor)) {
        resultado.textContent = 'Error: debes introducir números enteros.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    if (divisor < 2 || divisor > 7) {
        resultado.textContent = 'Error: el divisor debe estar comprendido entre 2 y 7.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    const esMultiplo = dividendo % divisor === 0;
    resultado.textContent = esMultiplo
        ? `Resultado: sí, ${dividendo} es múltiplo de ${divisor}.`
        : `Resultado: no, ${dividendo} no es múltiplo de ${divisor}.`;
    resultado.classList.add('text-[#7b6eea]');
    resultado.classList.remove('hidden');
};


const reiniciarMultiplo = () => {
    document.getElementById('dividendo').value = '';
    document.getElementById('divisor').value = '';
    const resultado = document.getElementById('resultadoMultiplo');
    resultado.textContent = '';
    resultado.classList.add('hidden');
    resultado.classList.remove('text-red-700', 'text-[#7b6eea]');
};
