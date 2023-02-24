import { openMailbox, showFinalMessage } from "./animHandler";

export default function handler() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

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
    };

    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
}