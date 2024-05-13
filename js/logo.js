const logoContainer = document.querySelector('.logo-5');
const paths = document.querySelectorAll('.cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13');
const letterMs = document.querySelectorAll('.cls-6');

function startAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let minLength = Infinity;
            paths.forEach((path) => {
                const length = path.getTotalLength();
                if (length < minLength) {
                    minLength = length;
                }
            });

            const dashLength = minLength;

            paths.forEach((path) => {
                const length = path.getTotalLength();
                path.style.strokeDasharray = `${length} ${length}`;
                path.style.strokeDashoffset = length;
            });

            letterMs.forEach((letterM) => {
                letterM.style.opacity = 0;
            });

            const pathsTl = gsap.timeline();
            pathsTl.to(paths, {
                strokeDashoffset: 0,
                strokeDasharray: `${dashLength} ${dashLength}`,
                duration: 2,
                delay: 0.5,
                ease: "power4.inOut"
            });

            const letterMsTl = gsap.timeline();
            letterMsTl.to(letterMs, {
                opacity: 1,
                duration: 2,
                delay: 2,
                ease: "power4.inOut"
            });

            observer.unobserve(logoContainer);
        }
    });
}

const observer2 = new IntersectionObserver(startAnimation);
observer2.observe(logoContainer);