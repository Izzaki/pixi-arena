import * as PIXI from 'pixi.js';
import * as TWEEN from "@tweenjs/tween.js";
import {Assets} from "../Assets";
import {CardsDeck} from "../Views/CardsDeck";
import {DefaultScene} from "./DefaultScene";
import {Config} from "../Config";
import {delayToPromise} from "../utils";
import Dict = NodeJS.Dict;

export class CardsScene extends DefaultScene {

    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
        super(app, resources);

        const deck1 = new CardsDeck(resources[Assets.card.url].texture, 95, 3);
        const deck2 = new CardsDeck(resources[Assets.card.url].texture, 5, 3);

        deck1.x = app.screen.width * 0.3;
        deck1.y = app.screen.height * 0.5;

        deck2.x = app.screen.width * 0.6;
        deck2.y = app.screen.height * 0.5;

        this.addChild(deck1);
        this.addChild(deck2);

        this.transferAll(deck1, deck2);
    }

    /*
    * TODO: move to service.
    * */
    async transferAll(fromDeck: CardsDeck, toDeck: CardsDeck, animationTime: number = Config.ANIMATION_DURATION, delay: number = Config.CARD_TRANSFER_DELAY): Promise<any> {
        for (let i in fromDeck.children) {
            const card = fromDeck.removeChildAt(fromDeck.children.length - 1) as PIXI.Sprite;
            this.addChild(card);
            card.position.copyFrom(fromDeck.getGlobalTopPoint());

            const tween = new TWEEN.Tween(card.position)
            /*
            * globalTopPoint is a getter, so the tween has always updated data and animation is running fluently.
            * */
                .to(toDeck.globalTopPoint, animationTime)
                .onComplete(() => {
                    toDeck.addCard(card);
                })
                .start();

            await delayToPromise(delay);
        }
    }
}
