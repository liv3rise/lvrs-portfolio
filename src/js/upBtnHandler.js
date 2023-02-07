export default function handler() {
    const upButton = document.getElementById('upButton');

    document.addEventListener('scroll', (e) => {
        if (window.scrollY >= 1000) {
            upButton.classList.add('header__up_active')
        } else {
            upButton.classList.remove('header__up_active')
        }
    })
}