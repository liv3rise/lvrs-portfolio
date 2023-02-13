export default function handler() {
    const upButton = document.getElementById('upButton');

    document.addEventListener('scroll', (e) => {
        console.log(window.scrollY);
        if (window.scrollY >= 5 ) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active');
        }

        if (window.scrollY >= 1000) {
            upButton.classList.add('header__up_active')
        } else {
            upButton.classList.remove('header__up_active')
        }
    })
}