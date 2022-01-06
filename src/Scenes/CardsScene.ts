import * as PIXI from 'pixi.js';
import {Assets} from "../Configs/assets";
import {CardsDeck} from "../Views/CardsDeck";
import {DefaultScene} from "./DefaultScene";
import {Config} from "../Config";
import {getAsset, sleep} from "../utils";
import {Services} from "../Services/Services";
import {CardsDeckTrasnferAllAnimation} from "../Scripts/Animations/CardsDeckTrasnferScript";
import Dict = NodeJS.Dict;

export class CardsScene extends DefaultScene {

    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
        super(app, resources);

        const deck1 = new CardsDeck(getAsset(Assets.CARD, resources).texture, 45, 3);
        const deck2 = new CardsDeck(getAsset(Assets.CARD, resources).texture, 5, 3);

        deck1.x = app.screen.width * 0.3;
        deck1.y = app.screen.height * 0.5;

        deck2.x = app.screen.width * 0.6;
        deck2.y = app.screen.height * 0.5;

        this.addChild(deck1);
        this.addChild(deck2);

        const animation = new CardsDeckTrasnferAllAnimation(this, {
            fromDeck: deck1,
            toDeck: deck2,
            animationTime: Config.ANIMATION_DURATION,
            delay: Config.CARD_TRANSFER_DELAY,
        });

        Services.animationService.animate(animation).then(async () => {

            // wait until animation is over
            await sleep(Config.ANIMATION_DURATION);
            const cached = Services.renderCache.cache(deck2);
            cached.y += deck2.getLocalTopPoint().y + deck2.offset;
        });
    }
}
