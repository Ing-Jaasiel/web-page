const btn = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

// Si el usuario ya lo activó antes, ponerlo al cargar
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = "☀️ Light Mode";
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
    // Guardar la preferencia en el navegador
    localStorage.setItem('theme', theme);
});