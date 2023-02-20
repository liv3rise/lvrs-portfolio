import { tippyInstances } from "./tooltipHandler";

export default function handler() {
    const html = document.documentElement;

    const storedThemeValue = localStorage.getItem('lightTheme');

    if (storedThemeValue === 'true') {
        switchTheme(true);
    } else if (storedThemeValue === 'false') {
        switchTheme(false);
    } else {
        switchTheme(!osColorScheme());
    }

    function switchTheme(lightTheme) {
        if (lightTheme) {
            html.classList.remove("theme-light");
            localStorage.setItem('lightTheme', lightTheme);
            tippyInstances.forEach((instance) => instance.setProps({theme: 'dark'}))
        } else {
            html.classList.add("theme-light");
            localStorage.setItem('lightTheme', lightTheme);
            tippyInstances.forEach((instance) => instance.setProps({theme: 'light'}))
        }
    }

    function isLight() {
        return html.classList.contains("theme-light");
    }

    function osColorScheme() {
        return window.matchMedia("(prefers-color-scheme: light)").matches;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const themeSwitcher = document.getElementById("themeSwitcher");

        themeSwitcher.addEventListener("click", () => {
            switchTheme(isLight());
        });

        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            switchTheme(!e.matches);
        });
    });
}