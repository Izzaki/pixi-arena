import * as PIXI from 'pixi.js';
import {Config} from "../Config";
import {eventName} from "../utils";
import { TextButton } from "../Views/TextButton";
import Dict = NodeJS.Dict;

export class MainMenuScene extends PIXI.Container {

    @eventName
    static CARDS_BUTTON_CLICKED: string;

    @eventName
    static MIXED_TEXT_BUTTON_CLICKED: string;

    @eventName
    static FIRE_BUTTON_CLICKED: string;

    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
        super();

        const centeringPoint = new PIXI.ObservablePoint(() => null, null, 0.5, 0.5);
        const cardsButton = new TextButton('Cards', Config.DEFAULT_FONT_STYLE, () => this.emit(MainMenuScene.CARDS_BUTTON_CLICKED));
        const mixedTextButton = new TextButton('Mixed Text', Config.DEFAULT_FONT_STYLE, () => this.emit(MainMenuScene.MIXED_TEXT_BUTTON_CLICKED));
        const fireButton = new TextButton('Awesome Fire', Config.DEFAULT_FONT_STYLE, () => this.emit(MainMenuScene.FIRE_BUTTON_CLICKED));

        cardsButton.anchor = centeringPoint;
        mixedTextButton.anchor = centeringPoint;
        fireButton.anchor = centeringPoint;

        cardsButton.x = app.screen.width / 2;
        cardsButton.y = app.screen.height / 2 - 150;

        mixedTextButton.x = app.screen.width / 2;
        mixedTextButton.y = app.screen.height / 2;

        fireButton.x = app.screen.width / 2;
        fireButton.y = app.screen.height / 2 + 150;

        this.addChild(cardsButton, mixedTextButton, fireButton);
    }
}
