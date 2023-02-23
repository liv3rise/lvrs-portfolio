import { gsap } from "gsap";

export function moveGlasses(y, opacity, scale, duration) {
    gsap.to('#glasses', {
        y,
        ease: 'bounce',
        duration,
    });

    gsap.to(['right-lens-h', 'left-lens-h'], {
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
        delay: 0.5,
        duration: 1
    })

    gsap.to('#flag', {
        rotate: -90,
        duration: 1,
        delay: 1.3
    })

    gsap.to('#lid', {
        scale: 0.1,
        opacity: 0,
        duration: 0.3,
    });
}