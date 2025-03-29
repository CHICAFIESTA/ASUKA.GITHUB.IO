document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const rgbTubeFill = document.getElementById('rgb-tube-fill');

    // Cuando el botón de búsqueda sea presionado
    searchButton.addEventListener('click', () => {
        if (searchInput.value !== '') {
            alert('Buscando: ' + searchInput.value); // Aquí se puede agregar lógica para buscar algo
        }
    });

    // Animación de tubo RGB
    searchInput.addEventListener('focus', () => {
        rgbTubeFill.style.width = '100%';
        rgbTubeFill.style.transition = 'width 0.5s ease';
    });

    searchInput.addEventListener('blur', () => {
        rgbTubeFill.style.width = '0';
    });
});