import { getSettingsFromLocalStorage } from './utils.js';
const wordArray = [
    "etiqueta", "atributo", "selector", "clase", "id", "estilo", "flexbox",
    "grid", "color", "fuente", "alineación", "estructura", "div", "span",
    "margen", "padding", "borde", "display", "block", "inline", "hover",
    "mediaquery", "formulario", "input", "submit", "checkbox", "radiobutton",
    "tabla", "fila", "columna", "enlace", "imagen", "background", "link",
    "nav", "header", "footer", "aside", "section", "article", "footer",
    "media", "iframe", "video", "audio", "evento", "click", "tecla", "focus",
    "blur", "scroll", "animación", "transform", "transición", "hover", "active",
    "nth-child", "psuedo-clase", "responsive", "viewport", "api", "json", 
    "fetch", "async", "await", "función", "método", "variable", "constante",
    "booleano", "número", "cadena", "objeto", "arreglo", "array", "for",
    "while", "condición", "if", "else", "switch", "case", "dom", "nodo",
    "elemento", "queryselector", "addeventlistener", "removeeventlistener",
    "localstorage", "sessionstorage", "cookie", "promesa", "resolución",
    "rechazo", "settimeout", "setinterval", "cleartimeout", "clearinterval",
    "clase", "herencia"
];

export const getWordsArrayBySettingsOrPlatform = () => {

    const gameSettings = getSettingsFromLocalStorage();
    //check if its windows or mac os
    if (navigator.userAgent.includes('Win') && gameSettings?.['enable-accents']) {
        return wordArray;
    }
    return removeAccentsFromWordsArray();
}

const removeAccentsFromWordsArray = () => {
    return wordArray.filter(word => !hasAccent(word));
}

const hasAccent = (word) => {
    const specialChars = /[áéíóúÁÉÍÓÚ]/;
    return specialChars.test(word);
}
