import tippy from 'tippy.js';
import 'tippy.js/animations/scale-extreme.css';

import ClipboardJS from 'clipboard';

const tooltipAttribute = 'data-tooltip';
const elements = document.querySelectorAll(`[${tooltipAttribute}]`);
const copyTextAttribute = 'data-copy';

export default function handler() {
    elements.forEach((el) => {
        const tippyInstance = tippy(el, {
            content: el.getAttribute(tooltipAttribute),
            animation: 'scale-extreme',
            theme: 'custom',
            arrow: false
        });

        if (el.hasAttribute(copyTextAttribute)) {
            tippyInstance.setProps({
                onTrigger(instance, tippyEvent) {
                    tippyEvent.target.addEventListener('click', (clickEvent) => {
                        clickEvent.preventDefault();
                    });

                    const copyText = el.getAttribute(copyTextAttribute);
                    const clipboard = new ClipboardJS(tippyEvent.target, {
                        text: () => { return copyText; }
                    });

                    clipboard.on('success', () => {
                        instance.setContent(`${copyText} has been copied to your clipboard`)
                        instance.show();
                    });
                }
            });
        }
    })
}