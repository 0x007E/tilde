const savedTheme = localStorage.getItem('bs-theme');

function updateTheme() {
    // Initial setzen beim Laden, ggf. gespeichertes Thema laden
    if(savedTheme) {
        setTheme(savedTheme);
    } else {
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
}

// Setzt den Modus bei Seitenaufruf
updateTheme();

// Reagiert auf Änderungen des Systemmodes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

function setTheme(mode) {
    if(mode === 'dark') {
        document.getElementById('light').classList.remove('d-none');
        document.getElementById('dark').classList.add('d-none');
    } else {
        document.getElementById('dark').classList.remove('d-none');
        document.getElementById('light').classList.add('d-none');
    }

    document.documentElement.setAttribute('data-bs-theme', mode);
    localStorage.setItem('bs-theme', mode);
}

document.getElementById('light').addEventListener('click', () => setTheme('light'));
document.getElementById('dark').addEventListener('click', () => setTheme('dark'));

document.getElementById('powerd-date').textContent = new Date().getFullYear();


// Posts ein-/ausklappen Text
document.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function(toggleLink) {
    var targetSelector = toggleLink.getAttribute('href');
    var collapse = document.querySelector(targetSelector);

    if(collapse) {
    collapse.addEventListener('show.bs.collapse', function () {
        toggleLink.dataset.originalText = toggleLink.textContent;
        toggleLink.textContent = "Show less";
    });
    collapse.addEventListener('hide.bs.collapse', function () {
        toggleLink.textContent = toggleLink.dataset.originalText;
    });
    }
});
});