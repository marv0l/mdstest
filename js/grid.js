const checkbox = document.getElementById('check');
const gridBars = document.querySelectorAll('.grid-bars .grid-bar');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Fade in the grid-bars
        gsap.to(gridBars, { duration: 0.4, opacity: 1 });
    } else {
        // Fade out the grid-bars
        gsap.to(gridBars, { duration: 0.4, opacity: 0 });
    }
});