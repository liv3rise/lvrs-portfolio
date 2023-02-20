import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/light.css';

const tooltipAttribute = 'data-tooltip';
const elements = document.querySelectorAll(`[${tooltipAttribute}]`);
export const tippyInstances = []

// TODO make copying text to clipboard work on all devices
// https://stackoverflow.com/questions/69438702/why-does-navigator-clipboard-writetext-not-copy-text-to-clipboard-if-it-is-pro
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
// https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
// https://stackoverflow.com/questions/1932899/positioning-a-tooltip

export default function handler() {
    elements.forEach((el) => {
        const tippyInstance = tippy(el, {
            content: el.getAttribute(tooltipAttribute)
        })
        tippyInstances.push(tippyInstance);
    })
}