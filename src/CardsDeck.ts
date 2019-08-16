import * as PIXI from "pixi.js";
import * as TWEEN from "@tweenjs/tween.js";
import {Config} from "./Config";
import {delayToPromise} from "./utils";

export class CardsDeck extends PIXI.Container {

    public offset: number;

    constructor(private _texture: PIXI.Texture, private _cardsQuantity: number, offset: number = 4) {
        super();
        this.offset = Math.abs(offset);
        this.constructCards();
    }

    private constructCards() {
        for (let i = 0; i < this._cardsQuantity; i++) {
            const card = new PIXI.Sprite(this._texture);
            card.y = -i * this.offset;
            card.scale.set(0.5);
            this.addChild(card);
        }
    }

    async transferTo(destinationCardsDeck: CardsDeck): Promise<any> {
        const cardsLength = this.children.length - 1;
        const destinationsCardsLength = destinationCardsDeck.children.length;

        for (let i in this.children) {
            const index = Number(i);
            const card = this.children[cardsLength - index];

            const tween = new TWEEN.Tween(card)
                .to({
                    x: destinationCardsDeck.x,
                    y: (-destinationsCardsLength - index) * destinationCardsDeck.offset
                }, Config.ANIMATION_DURATION)
                .start();

            destinationCardsDeck.children.push(this.children.pop());

            await delayToPromise(Config.CARD_TRANSFER_DELAY);
        }

        return Promise.resolve();
    }
}
