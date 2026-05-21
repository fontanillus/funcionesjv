
const convertirNumero = () => {
	const equivalencias = [
		'cero',
		'uno',
		'dos',
		'tres',
		'cuatro',
		'cinco',
		'seis',
		'siete',
		'ocho',
		'nueve',
		'diez'
	];

	const numeroIngresado = document.getElementById('numero').value.trim();
	const resultado = document.getElementById('resultadoNumero');
	const numero = Number(numeroIngresado);

	// Oculta el resultado antes de mostrar uno nuevo
	resultado.classList.add('hidden');
	resultado.classList.remove('text-[#5a3ec8]', 'text-red-700');

	if (numeroIngresado === '' || !Number.isInteger(numero) || numero < 0 || numero > 10) {
		resultado.textContent = 'Error: introduce un número entero del 0 al 10.';
		resultado.classList.add('text-red-700');
		resultado.classList.remove('hidden');
		return;
	}

	resultado.textContent = `El número ${numero} se escribe: ${equivalencias[numero]}.`;
	resultado.classList.add('text-[#5a3ec8]');
	resultado.classList.remove('hidden');
};


const reiniciarConversion = () => {
	document.getElementById('numero').value = '';
	const resultado = document.getElementById('resultadoNumero');
	resultado.textContent = '';
	resultado.classList.add('hidden');
	resultado.classList.remove('text-red-700', 'text-[#5a3ec8]');
};
