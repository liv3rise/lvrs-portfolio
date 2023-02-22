import { gsap } from "gsap";

const glasses = document.getElementById('glasses');
const lensHighlights = [document.getElementById('right-lens-h'), document.getElementById('left-lens-h')];

export function moveGlasses(y, opacity, scale, duration) {
    gsap.to(glasses, {
        y,
        ease: 'bounce',
        duration,
    });

    gsap.to(lensHighlights, {
        opacity,
        duration: duration - 0.2,
        scale
    });
} 