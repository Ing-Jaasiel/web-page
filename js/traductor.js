function googleTranslateElementInit() {
    new google.translate.TranslateElement({
    pageLanguage: 'es',
    autoDisplay: false
    }, 'google_translate_element');
}

function cambiarIdioma(lang) {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
    }
}