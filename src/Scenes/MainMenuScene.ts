import * as PIXI from 'pixi.js';
import {Config} from "../Config";
import {eventName} from "../utils";
import {TextButton} from "../Views/TextButton";
import Dict = NodeJS.Dict;

export class MainMenuScene extends PIXI.Container {

    @eventName
    static LEVEL_SELECT_BUTTON: string;

    constructor(protected app: PIXI.Application, protected resources: Dict<PIXI.LoaderResource>) {
        super();
    }

    initialize(scenes): void {
        scenes.forEach((config, index, {length}) => {
            const button = new TextButton(config.name, Config.DEFAULT_FONT_STYLE, () => this.emit(MainMenuScene.LEVEL_SELECT_BUTTON, config.sceneClass));
            button.anchor = new PIXI.ObservablePoint(() => null, null, 0.5, 0.5);
            button.x = this.app.screen.width / 2;
            button.y = this.app.screen.height / 2 - (length / 2 - index - 0.5) * 150;
            this.addChild(button);
        });
    }
}
