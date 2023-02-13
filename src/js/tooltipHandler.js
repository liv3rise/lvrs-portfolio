const tooltipAttribute = 'data-tooltip';
const elements = document.querySelectorAll(`[${tooltipAttribute}]`);
const tooltips = new Map();

// TODO make tooltips responsive for phones or hide them

// TODO fix positioning of tooltips on small screens so that they do not go beyond the viewport

// TODO make copying text to clipboard work on all devices

export default function handler() {
    elements.forEach((el) => {
        tooltips.set(el, el.dataset.tooltip);

        if ('tooltipBottom' in el.dataset) {
            el.classList.add('tooltip_bottom');
        }
        
        el.addEventListener('mouseenter', (e) => {
            e.target.classList.add('tooltip');
        })

        el.addEventListener('mouseleave', (e) => {
            e.target.classList.remove('tooltip');
            resetTooltip(e.target);
        })

        console.log(el.dataset);
        if ('copy' in el.dataset) {
            el.addEventListener('click', (e) => {
                e.preventDefault();

                const target = e.currentTarget;

                navigator.clipboard.writeText(target.dataset.copy);
                target.setAttribute(tooltipAttribute, `${target.dataset.copy} copied to your clipboard`);
            })
        }
    })
}

function resetTooltip(element) {
    element.setAttribute(tooltipAttribute, tooltips.get(element));
}