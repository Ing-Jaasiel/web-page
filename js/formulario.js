const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(event) {
event.preventDefault();

const data = new FormData(form);

await fetch(form.action, {
method: form.method,
body: data,
headers: {
'Accept': 'application/json'
}
});

window.location.href = "https://redesinfinitas.com/gracias.html";
});