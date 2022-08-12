// Show list menu on toggle with addEventListener method
const toggleMenu = document.getElementById('toggleMenu');
const listMenu = document.getElementById('listMenu');

toggleMenu.addEventListener('click', () => {
    listMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
});

// Close list menu when list menu clicked
listMenu.addEventListener('click', () => {
    listMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
});