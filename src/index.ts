import {App} from "./App";
import {fullScreen} from "./utils";

window.addEventListener('load', () => {
    // fullScreen();
    const app = new App({
        width: window.innerWidth,
        height: window.innerHeight
    });
    app.load();
    document.body.appendChild(app.view);
});
