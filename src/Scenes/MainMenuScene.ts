import * as PIXI from 'pixi.js';
import {Config} from "../Config";
import {eventName} from "../utils";

export class MainMenuScene extends PIXI.Container {

    @eventName
    static CARDS_BUTTON_CLICKED: string;

    @eventName
    static MIXED_TEXT_BUTTON_CLICKED: string;

    @eventName
    static FIRE_BUTTON_CLICKED: string;

    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super();

        const centeringPoint = new PIXI.Point(0.5, 0.5);
        const name = new PIXI.Text('Robert Wieclawek', {fontSize: 24, fill: 0xFFFFFF});
        const cardsButton = new PIXI.Text('Cards', Config.DEFAULT_FONT_STYLE);
        const mixedTextButton = new PIXI.Text('Mixed Text', Config.DEFAULT_FONT_STYLE);
        const fireButton = new PIXI.Text('Awesome Fire', Config.DEFAULT_FONT_STYLE);

        name.anchor = centeringPoint;
        cardsButton.anchor = centeringPoint;
        mixedTextButton.anchor = centeringPoint;
        fireButton.anchor = centeringPoint;

        name.x = app.screen.width / 2;
        name.y = app.screen.height - 24;

        cardsButton.x = app.screen.width / 2;
        cardsButton.y = app.screen.height / 2 - 150;

        mixedTextButton.x = app.screen.width / 2;
        mixedTextButton.y = app.screen.height / 2;

        fireButton.x = app.screen.width / 2;
        fireButton.y = app.screen.height / 2 + 150;

        cardsButton.interactive = true;
        mixedTextButton.interactive = true;
        fireButton.interactive = true;

        cardsButton.on('pointerup', () => {
            this.emit(MainMenuScene.CARDS_BUTTON_CLICKED);
        });

        cardsButton.on('pointerup', () => {
            this.emit(MainMenuScene.MIXED_TEXT_BUTTON_CLICKED);
        });

        cardsButton.on('pointerup', () => {
            this.emit(MainMenuScene.FIRE_BUTTON_CLICKED);
        });

        this.addChild(name, cardsButton, mixedTextButton, fireButton);
    }
}
