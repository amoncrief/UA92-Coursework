const displayMode = document.getElementById('displayMode');
const displayStylesheet = document.getElementById('displayStylesheet');
// Check user preference in localStorage
if (localStorage.getItem('theme') === 'dark') 
    {
        displayStylesheet.href = 'CSS/styleNight.css';
    }
displayMode.addEventListener('click', () => 
    {
        if (displayStylesheet.href.includes('CSS/styleDay.css')) 
            {
                displayStylesheet.href = 'CSS/styleNight.css';
                localStorage.setItem('theme', 'dark'); // Save preference
            } 
            else 
            {
                displayStylesheet.href = 'CSS/styleDay.css';
                localStorage.setItem('theme', 'light'); // Save preference
            }
        
    });


