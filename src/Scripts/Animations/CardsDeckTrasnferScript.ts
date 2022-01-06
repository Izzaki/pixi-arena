import * as TWEEN from "@tweenjs/tween.js";
import {CardsDeck} from "../../Views/CardsDeck";
import * as PIXI from "pixi.js";
import {sleep} from "../../utils";
import {IAnimation} from "../../Services/AnimationService/AnimationService";

interface ICardsDeckTransferAllScriptConfig {
    fromDeck: CardsDeck;
    toDeck: CardsDeck;
    animationTime: number;
    delay: number;
}

export class CardsDeckTrasnferAllAnimation implements IAnimation {

    constructor(public scene, public config: ICardsDeckTransferAllScriptConfig) {
    }

    async animate(): Promise<any> {
        const {
            fromDeck,
            toDeck,
            animationTime,
            delay,
        } = this.config;

        const toDeckChildrenLength = toDeck.children.length;

        for (let i in fromDeck.children) {
            const card = fromDeck.removeChildAt(fromDeck.children.length - 1) as PIXI.Sprite;
            this.scene.addChild(card);
            card.position.copyFrom(fromDeck.getGlobalTopPoint());

            const height: number = toDeckChildrenLength + Number(i);

            const tween = new TWEEN.Tween(card.position)
                .to({
                    x: toDeck.getBounds().x,
                    y: toDeck.y - height * toDeck.offset
                }, animationTime)
                .onComplete(() => {
                    toDeck.addCard(card);
                })
                .start();

            await sleep(delay);
        }
    }
}
