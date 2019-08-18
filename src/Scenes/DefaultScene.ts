import * as PIXI from "pixi.js";
import {eventName} from "../utils";
import {TextButton} from "../Views/TextButton";
import {Config} from "../Config";

export class DefaultScene extends PIXI.Container {

    @eventName
    static GO_TO_MENU_BUTTON_CLICKED: string;

    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super();

        const goToMenuButton = new TextButton('Go to menu', Config.DEFAULT_FONT_STYLE, () => this.emit(DefaultScene.GO_TO_MENU_BUTTON_CLICKED));
        goToMenuButton.anchor = new PIXI.Point(0.5, 0.5);
        goToMenuButton.x = app.screen.width / 2;
        goToMenuButton.y = app.screen.height - 100;
        this.addChild(goToMenuButton);
    }
}
