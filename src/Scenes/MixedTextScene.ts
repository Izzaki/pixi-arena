import * as PIXI from 'pixi.js';
import {MixedText} from "../Views/MixedText";
import {shuffle} from "../utils";
import {DefaultScene} from "./DefaultScene";
import Dict = NodeJS.Dict;

export class MixedTextScene extends DefaultScene {
    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
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
                // .setFontSize(14 + Math.round(Math.random() * 20));
        };

        setInterval(randomText, 2000);
        randomText();
    }
}
