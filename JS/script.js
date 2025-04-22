document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('d-none');
    });
});
