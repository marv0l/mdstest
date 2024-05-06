const numbers = document.querySelectorAll(".counting");

function startCountingAnimation(target) {
    gsap.from(target, {
        textContent: 0,
        duration: 4,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: {
            each: 0.05,
            onUpdate: function() {
                target.innerHTML = numberWithCommas(Math.ceil(target.textContent));
            },
        }
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
            startCountingAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

numbers.forEach(number => {
    observer.observe(number);
});