import { gsap, ScrollTrigger } from "gsap/all";

export default function handler() {
    const upButton = document.getElementById('upButton');

    ScrollTrigger.create({
        trigger: '.works',
        start: 'top top',
        onEnter: () => {
            upButton.classList.add('header__up_active');
        },
        onLeaveBack: () => {
            upButton.classList.remove('header__up_active');
        }
    });

    ScrollTrigger.create({
        trigger: '.main',
        start: 'top -10%',
        onEnter: () => {
            header.classList.add('header_active');
        },
        onLeaveBack: () => {
            header.classList.remove('header_active');
        }
    });
}