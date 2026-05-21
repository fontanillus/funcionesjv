const calcularNivel = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const anysTexto = document.getElementById("anys").value.trim();
    const resultado = document.getElementById("resultado");
    resultado.classList.remove('hidden');

    resultado.classList.remove('text-red-700');
    resultado.classList.add('text-[#a04500]');

    if (nombre === '') {
        const mensajeError = 'Error: por favor, introduce tu nombre.';
        resultado.textContent = mensajeError;
        resultado.classList.remove('text-[#a04500]');
        resultado.classList.add('text-red-700');
        console.log(mensajeError);
        return;
    };

    const anys = Number(anysTexto);
    if (anysTexto === '' || Number.isNaN(anys) || anys < 0 || !Number.isInteger(anys)) {
        const mensajeError = 'Error: introduce un número de años válido (entero mayor o igual que 0).';
        resultado.textContent = mensajeError;
        resultado.classList.remove('text-[#a04500]');
        resultado.classList.add('text-red-700');
        console.log(mensajeError);
        return;
    }

    let nivel = "";

    if (anys < 2) {
        nivel = "Nivel Principiante";
    } else if (anys >= 2 && anys <= 4) {
        nivel = "Nivel Intermedio";
    } else if (anys > 4 && anys <= 7) {
        nivel = "Nivel Avanzado";
    } else if (anys > 7 && anys <= 10) {
        nivel = "Nivel Experto";
    } else if (anys > 10) {
        nivel = "Nivel Gurú";
    } else {
        nivel = "Datos no válidos";
    }

    const mensaje = `Resultado: ${nombre} tiene ${anys} año/s de experiencia y su nivel es ${nivel}.`;
    resultado.innerHTML = `Resultado: ${nombre} tiene ${anys} año/s de experiencia y su nivel es <strong>${nivel}</strong>.`;
    console.log(`Empleado: ${nombre}`);
    console.log(mensaje);
}

const reiniciarNivel = () => {
    document.getElementById('nombre').value = '';
    document.getElementById('anys').value = '';
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';
    resultado.classList.remove('text-red-700');
    resultado.classList.add('text-[#a04500]');
    resultado.classList.add('hidden');
    console.log('Formulario de nivel reiniciado.');
}