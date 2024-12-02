// Function to toggle the theme
function toggleTheme() {
    const html = document.querySelector('html');
    const checkbox = document.querySelector('#checkbox');

    if (checkbox.checked) {
        html.setAttribute('theme', 'dark');
    } else {
        html.setAttribute('theme', 'light');
    }
}

// Function to initialize the theme based on user preference
function initializeTheme() {
    const theme = localStorage.getItem('theme');
    const checkbox = document.querySelector('#checkbox');
    const html = document.querySelector('html');

    if (theme === 'dark') {
        checkbox.checked = true;
        html.setAttribute('theme', 'dark');
    } else {
        checkbox.checked = false;
        html.setAttribute('theme', 'light');
    }
}

// Event listener for the theme switcher
const checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', () => {
    toggleTheme();
    const theme = checkbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Initialize the theme on page load
initializeTheme();


function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const textToCopy = codeElement.innerText || codeElement.textContent;
    const parentElement = codeElement.parentElement;

    navigator.clipboard.writeText(textToCopy).then(() => {
        parentElement.classList.add('copied');

        setTimeout(() => {
            parentElement.classList.remove('copied');
        }, 1000);
    }).catch(err => {
        console.error('Ошибка при копировании:', err);
    });
}
