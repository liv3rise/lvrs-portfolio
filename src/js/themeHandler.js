import { moveGlasses } from "./animHandler";

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

    function switchTheme(lightTheme, emojiAnimDuration = 0) {
        if (lightTheme) {
            html.classList.remove("theme-light");
            localStorage.setItem('lightTheme', lightTheme);
            moveGlasses(-60, 0.2, 0.8, emojiAnimDuration);
        } else {
            html.classList.add("theme-light");
            localStorage.setItem('lightTheme', lightTheme);
            moveGlasses(0, 1, 1.1, emojiAnimDuration);
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
            switchTheme(isLight(), 0.6);
        });

        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            switchTheme(!e.matches);
        });
    });
}