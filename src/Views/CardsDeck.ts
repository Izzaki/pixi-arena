import * as PIXI from "pixi.js";

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
            card.scale.set(0.5);
            this.addCard(card);
        }
    }

    addCard(card: PIXI.Sprite): void {
        card.position.copyFrom(this.getLocalTopPoint());
        this.addChild(card);
    }

    getLocalTopPoint(): PIXI.Point {
        return new PIXI.Point(
            0,
            -this.children.length * this.offset,
        );
    }

    getGlobalTopPoint(): PIXI.Point {
        const point = new PIXI.Point()
            .copyFrom(this.getLocalTopPoint());

        point.x += this.x;
        point.y += this.y;

        return point;
    }
}
