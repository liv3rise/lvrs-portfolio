import { gsap } from "gsap";

const html = document.documentElement;

export default function handler() {
    rollEmoji();
    slideMainContent();

    if (!html.classList.contains('theme-light')) {
        moveGlasses(-60, 0.2, 0.8, 0, 0.75);
    }

    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (html.classList.contains('theme-light')) {
                    moveGlasses(0, 1, 1.1, 0.6);
                } else {
                    moveGlasses(-60, 0.2, 0.8, 0.6, 0.75);
                }
            }
        }
    });

    observer.observe(html, { attributes: true });
}

export function rollEmoji() {
    gsap.to('#emojiWithGlasses', {
        duration: 3.5,
        ease: 'bounce',
        left: 0,
        rotate: '-360deg'
    })
}

export function slideMainContent() {
    gsap.to('#mainContent', {
        left: 0,
        opacity: 1,
        duration: 1
    })
}

export function moveGlasses(y, opacity, scale, duration, glassesScale = 1) {
    gsap.set('#glasses', {
        transformOrigin: '50% 50%'
    })

    gsap.to('#glasses', {
        y,
        ease: 'bounce',
        duration,
        scale: glassesScale,
    });

    gsap.to(['#right-lens-h', '#left-lens-h'], {
        opacity,
        duration: duration - 0.2,
        scale
    });
}

export function openMailbox() {
    gsap.set('#lid', {
        transformOrigin: 'center'
    });

    gsap.set(['#flag'], {
        transformOrigin: '25px 25px'
    })

    gsap.fromTo('#envelope', { x: 100 }, {
        x: 0,
        delay: 1.4,
        duration: 1
    })

    gsap.to('#flag', {
        rotate: -90,
        duration: 1,
        delay: 1.8
    })

    gsap.to('#lid', {
        scale: 0.1,
        opacity: 0,
        duration: 0.4,
    });
}

export function showFinalMessage() {
    gsap.to('#formContainer', {
        ease: 'slow',
        left: '-1000px',
        duration: 1,
    })

    gsap.to('#finalContainer', {
        ease: 'slow',
        right: 0,
        duration: 1
    })
}