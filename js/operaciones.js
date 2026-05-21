
const calcularOperacion = () => {
    const numeroUnoTexto = document.getElementById('numeroUno').value.trim();
    const numeroDosTexto = document.getElementById('numeroDos').value.trim();
    const operador = document.getElementById('operador').value;
    const resultado = document.getElementById('resultadoOperacion');

    // Oculta el resultado antes de mostrar uno nuevo
    resultado.classList.add('hidden');
    resultado.classList.remove('text-[#5a3ec8]', 'text-red-700');

    if (numeroUnoTexto === '' || numeroDosTexto === '') {
        resultado.textContent = 'Error: completa ambos números.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    const numeroUno = Number(numeroUnoTexto);
    const numeroDos = Number(numeroDosTexto);

    if (Number.isNaN(numeroUno) || Number.isNaN(numeroDos)) {
        resultado.textContent = 'Error: los valores introducidos no son válidos.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    if ((operador === '/' || operador === '%') && numeroDos === 0) {
        resultado.textContent = 'Error: no se puede dividir ni calcular módulo entre 0.';
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        return;
    }

    let calculo;
    switch (operador) {
        case '+':
            calculo = numeroUno + numeroDos;
            break;
        case '-':
            calculo = numeroUno - numeroDos;
            break;
        case '*':
            calculo = numeroUno * numeroDos;
            break;
        case '/':
            calculo = numeroUno / numeroDos;
            break;
        case '%':
            calculo = numeroUno % numeroDos;
            break;
        default:
            resultado.textContent = 'Error: operación no reconocida.';
            resultado.classList.add('text-red-700');
            resultado.classList.remove('hidden');
            return;
    }

    resultado.textContent = `Resultado: ${numeroUno} ${operador} ${numeroDos} = ${calculo}`;
    resultado.classList.add('text-[#5a3ec8]');
    resultado.classList.remove('hidden');
};


const reiniciarOperacion = () => {
    document.getElementById('numeroUno').value = '';
    document.getElementById('numeroDos').value = '';
    document.getElementById('operador').value = '+';
    const resultado = document.getElementById('resultadoOperacion');
    resultado.textContent = '';
    resultado.classList.add('hidden');
    resultado.classList.remove('text-red-700', 'text-[#5a3ec8]');
};
