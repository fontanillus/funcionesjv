const mostrarPlatos = () => {
    const select = document.getElementById("menu");
    const platoSeleccionado = select.value;
    const platoTexto = select.options[select.selectedIndex]?.text ?? '';
    const imagen = document.getElementById("fotoPlato");
    if (platoSeleccionado) {
        imagen.src = platoSeleccionado;
        imagen.classList.remove("hidden");
        imagen.classList.add("block");
        console.log(`Vista previa seleccionada: ${platoTexto}`);
    } else {
        imagen.classList.remove("block");
        imagen.classList.add("hidden");
    }
};
