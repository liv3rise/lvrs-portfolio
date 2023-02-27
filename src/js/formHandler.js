import { openMailbox, showFinalMessage } from "./animHandler";
import { isEmail, isLength } from 'validator';

const email = document.getElementById('formEmail');
const message = document.getElementById('formMessage');

export default function handler() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        const emailCorrect = isEmail(formData.get('email'));
        const messageCorrect = isLength(formData.get('message'), { min: 30 });

        if (!emailCorrect) {
            showInputError(email.parentElement);
        }

        if (!messageCorrect) {
            showInputError(message.parentElement);
        }

        if (emailCorrect && messageCorrect) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    openMailbox();
                    showFinalMessage();
                })
                .catch((error) => alert(error));
        }
    };

    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
}

[email, message].forEach((input) => {
    input.addEventListener('focus', (e) => {
        const target = e.target.parentElement;
        if (isError(target)) {
            removeInputError(target);
        }
    })
});

function isError(element) {
    return element.classList.contains('contact__show-error');
}

function showInputError(element) {
    element.classList.add('contact__show-error');
}

function removeInputError(element) {
    element.classList.remove('contact__show-error');
}