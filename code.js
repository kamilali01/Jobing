
//takes job title and displays a message
function viewDetails(jobTitle) { 
    alert(`You are viewing the ${jobTitle} vacancy.`); 
    }
//theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
(prefersDarkScheme.matches ? 'dark' : 'light');
        
// Apply the saved theme
document.body.classList.toggle('dark-theme', currentTheme === 'dark');
        
//adds event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});