const button = document.getElementById('no-option');
const buttonyes = document.getElementById('yes');

button.addEventListener('mouseover', () => {
    const newX = Math.random() * (window.innerWidth - button.offsetWidth);
    const newY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.position = 'absolute'
});

button.addEventListener('touchstart', () => {
    const newX = Math.random() * (window.innerWidth - button.offsetWidth);
    const newY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.position = 'absolute'
});

buttonyes.addEventListener('click', () => {
    // Redirecionar para a página 2
    window.location.href = 'pagina2.html'; // Altere 'pagina2.html' para o caminho da sua segunda página
});