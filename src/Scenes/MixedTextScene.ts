import * as PIXI from 'pixi.js';
import {MixedText} from "../Views/MixedText";
import {shuffle} from "../utils";

export class MixedTextScene extends PIXI.Container {
    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super();

        const mixedText = new MixedText();
        mixedText.x =  app.screen.width / 5;
        mixedText.y = app.screen.height / 2;
        this.addChild(mixedText);

        setInterval(() => {
            const sentence = 'The :skeleton: guards :key: to the :helmet: quest';
            const shuffledSentence = shuffle(sentence.split(' ')).join(' ');

            mixedText
                .setText(shuffledSentence)
                .setFontSize(14 + Math.round(Math.random() * 20));
        }, 2000);
    }
}
