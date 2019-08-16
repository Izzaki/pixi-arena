import {App} from "./App";

window.addEventListener('load', () => {
    const app = new App();
    app.load();
    document.body.appendChild(app.view);
});
