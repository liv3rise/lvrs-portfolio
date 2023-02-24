import { gsap } from "gsap";

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