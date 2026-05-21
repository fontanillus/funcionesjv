
const jugar = () => {
    const seleccionTexto = document.getElementById("seleccion").value.trim();
    const input = parseInt(seleccionTexto, 10);
    const resultado = document.getElementById("resultado");

    resultado.classList.add('hidden');
    resultado.classList.remove('text-[#7b6eea]', 'text-red-700');

    if (seleccionTexto === '' || Number.isNaN(input) || input < 1 || input > 3) {
        resultado.innerHTML = "«Entiendo que no quieres jugar. Adiós»";
        resultado.classList.add('text-red-700');
        resultado.classList.remove('hidden');
        console.log(`Entrada fuera de rango (${input}). El usuario no quiere jugar.`);
        return;
    }

    const computer = Math.floor(Math.random() * 3) + 1;

    let mensaje = "";
    if (input === computer) {
        mensaje = `Yo ${nombreEleccion(computer).toLowerCase()} y tú ${nombreEleccion(input).toLowerCase()}. ¡Empate!`;
    } else if (
        (input === 1 && computer === 3) ||
        (input === 2 && computer === 1) ||
        (input === 3 && computer === 2)
    ) {
        mensaje = `Yo ${nombreEleccion(computer).toLowerCase()} y tú ${nombreEleccion(input).toLowerCase()}. ¡Has ganado!`;
    } else {
        mensaje = `Yo ${nombreEleccion(computer).toLowerCase()} y tú ${nombreEleccion(input).toLowerCase()}. ¡He ganado!`;
    }

    resultado.innerHTML = `Resultado: ${mensaje}`;
    resultado.classList.add('text-[#7b6eea]');
    resultado.classList.remove('hidden');
    console.log(`Jugador: ${nombreEleccion(input)} | Ordenador: ${nombreEleccion(computer)}`);
    console.log(mensaje);
};

const nombreEleccion = (numero) => {
    switch (numero) {
        case 1: return "Piedra";
        case 2: return "Papel";
        case 3: return "Tijera";
        default: return "";
    }
};


const reiniciarJuego = () => {
    document.getElementById('seleccion').value = '';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.classList.add('hidden');
    resultado.classList.remove('text-red-700', 'text-[#7b6eea]');
    document.querySelectorAll('.opcion-juego').forEach((item) => {
        item.classList.remove('activa', 'border-[#a04500]', 'shadow-[0_0_0_3px_rgba(160,69,0,0.2)]', 'ring-4', 'ring-[#a04500]/40');
        item.classList.add('border-[#d8d8d8]');
    });
    console.log('Juego reiniciado.');
};