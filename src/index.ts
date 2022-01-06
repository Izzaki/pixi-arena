import {App} from "./App";

window.addEventListener('load', () => {
    const app = new App({
        width: window.innerWidth,
        height: window.innerHeight,
        // resizeTo: window,
    });
    document.body.appendChild(app.view);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
});
