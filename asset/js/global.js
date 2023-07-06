const h = document.getElementById('hamburger')
const m = document.getElementById('mobile-menu')

h.addEventListener('click', () => {
    m.classList.toggle('hidden')
})
