document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const banner = document.getElementById("cookie-form-banner");
    const btnAceptar = document.getElementById("btnAceptarCookies");
    const checkbox = document.getElementById("checkCookies");

    let formDataTemp = null;

  // Cuando presionan enviar
    form.addEventListener("submit", function (e) {

    // Si ya aceptó antes, deja enviar
    if (localStorage.getItem("cookiesAceptadas")) return;

    e.preventDefault();

    // Mostrar banner
    banner.classList.add("active");

    // Guardar referencia del form
    formDataTemp = form;
    });

  // Botón aceptar
    btnAceptar.addEventListener("click", function () {

    if (!checkbox.checked) {
        alert("Debes aceptar para continuar.");
        return;
    }

    localStorage.setItem("cookiesAceptadas", "true");
    banner.classList.remove("active");

    // Enviar formulario automáticamente
    if (formDataTemp) formDataTemp.submit();
    });

});