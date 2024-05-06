function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if(currentValue === 100) {
            return
        }

        currentValue += Math.floor(Math.random() * 15) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".hero-section-1", 1.5, {
    delay: 4.5,
    y: -1000,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".hero-section-3", 1.5, {
    delay: 5.0,
    y: -1000,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".hero-section-2", 1.5, {
    delay: 5.5,
    x: -700,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".hero-section-4", 1.5, {
    delay: 5.5,
    x: -1000,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".overlay", 1.5, {
    delay: 5.5,
    zIndex: -10,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".counter", 1.5, {
    delay: 5.5,
    zIndex: -10,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".left", 1.5, {
    delay: 5.5,
    width: 100,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".center", 1.5, {
    delay: 5.7,
    width: 50,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".right", 1.5, {
    delay: 5.9,
    width: 25,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".hero-section-6", 1.5, {
    delay: 3.5,
    y: -250,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});