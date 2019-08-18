import * as PIXI from 'pixi.js';
import {MixedText} from "../Views/MixedText";
import {eventName, shuffle} from "../utils";
import {Config} from "../Config";
import {TextButton} from "../Views/TextButton";

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

export class MixedTextScene extends DefaultScene {
    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super(app, resources);

        const mixedText = new MixedText();
        mixedText.x =  app.screen.width / 5;
        mixedText.y = app.screen.height / 2;
        this.addChild(mixedText);

        const randomText = () => {
            const sentence = 'The :skeleton: guards :key: to the :helmet: quest';
            const shuffledSentence = shuffle(sentence.split(' ')).join(' ');

            mixedText
                .setText(shuffledSentence)
                .setFontSize(14 + Math.round(Math.random() * 20));
        };

        setInterval(randomText, 2000);
        randomText();
    }
}
