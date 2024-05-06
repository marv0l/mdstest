// Get the logo container section
const logoContainer = document.querySelector('.logo-5');

// Get all the path elements within the SVG
const paths = document.querySelectorAll('.cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13');
// Get all the text elements containing the letter "M" (excluding those with class cls-2)
const letterMs = document.querySelectorAll('.cls-6');

// Function to start the animation when the section is in view
function startAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find the shortest path
            let minLength = Infinity;
            paths.forEach((path) => {
                const length = path.getTotalLength();
                if (length < minLength) {
                    minLength = length;
                }
            });

            // Calculate dash length for consistent sections
            const dashLength = minLength;

            // Set up initial styles for all paths to hide them completely
            paths.forEach((path) => {
                const length = path.getTotalLength();
                path.style.strokeDasharray = `${length} ${length}`; // Set a large dash length and gap length
                path.style.strokeDashoffset = length; // Hide the path initially
            });

            // Set up initial styles for all letter "M" (with class cls-6) to hide them completely
            letterMs.forEach((letterM) => {
                letterM.style.opacity = 0; // Hide the letter "M" initially
            });

            // Create a GSAP timeline for paths
            const pathsTl = gsap.timeline();
            pathsTl.to(paths, {
                strokeDashoffset: 0,
                strokeDasharray: `${dashLength} ${dashLength}`,
                duration: 2, // Adjust the duration for paths animation
                delay: 0.5,
                ease: "power4.inOut" // Easing function
            });

            // Create a GSAP timeline for letter "M" (with class cls-6)
            const letterMsTl = gsap.timeline();
            letterMsTl.to(letterMs, {
                opacity: 1,
                duration: 2, // Adjust the duration for letter "M" animation
                delay: 2,
                ease: "power4.inOut" // Easing function
            });

            // Unobserve the section once animation starts to prevent multiple triggers
            observer.unobserve(logoContainer);
        }
    });
}

// Create an Intersection Observer to observe the logo container section
const observer2 = new IntersectionObserver(startAnimation);
observer2.observe(logoContainer);