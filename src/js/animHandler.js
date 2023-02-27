import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const html = document.documentElement;

export default function handler() {
    rollEmoji();
    slideMainContent();
    showWorks();
    showContacts();

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
        scale: glassesScale
    });

    gsap.to(['#right-lens-h', '#left-lens-h'], {
        opacity,
        duration: duration - 0.2,
        scale
    });
}

function showWorks() {
    gsap.from('.works__item', {
        scrollTrigger: {
            trigger: '.works__items',
            start: '20% bottom'
        },
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'smooth'
    });
}

function showContacts() {
    gsap.from(['.contact__emoji', '.contact__text', '.contact__link', '.contact__form'], {
        scrollTrigger: {
            trigger: '.contact__emoji',
            start: '30% bottom',
        },
        opacity: 0,
        duration: 0.8,
        ease: 'smooth',
        scale: 0,
        stagger: 0.2,
    })
}

export function openMailbox() {
    gsap.set('#lid', {
        transformOrigin: 'center'
    });

    gsap.set(['#flag'], {
        transformOrigin: '25px 25px'
    });

    gsap.fromTo('#envelope', { x: 100 }, {
        x: 0,
        delay: 1.4,
        duration: 1
    });

    gsap.to('#flag', {
        rotate: -90,
        duration: 1,
        delay: 1.8
    });

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
    });

    gsap.to('#finalContainer', {
        ease: 'slow',
        right: 0,
        duration: 1
    });
}