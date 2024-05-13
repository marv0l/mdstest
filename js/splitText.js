const copies = document.querySelectorAll(".copy");

function setupSplits() {
    $(document).ready(function () {
        $(".split-line").wrap('<div class="split-parent"></div>');
    });

    copies.forEach((copy) => {
        copy.split = new SplitText(copy, {
            type: "lines, words, chars",
            linesClass: "split-line",
        });

        copy.anim = gsap.from(copy.split.lines, {
            scrollTrigger: {
                trigger: copy,
                toggleAction: "restart pause resume",
                start: "top 90%",
            },
            duration: 1.5,
            ease: "power4.inOut",
            yPercent: 100,
            stagger: 0.1,
        });
    });
}

setupSplits();