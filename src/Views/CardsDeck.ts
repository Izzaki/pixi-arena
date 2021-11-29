import * as PIXI from "pixi.js";

export class CardsDeck extends PIXI.Container {

    public offset: number;

    /*
    * For internal usage only. Updated only when getters have been executed.
    * */
    private _localTopPoint: PIXI.Point = new PIXI.Point();
    private _globalTopPoint: PIXI.Point = new PIXI.Point();

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
        return new PIXI.Point().copyFrom(this.localTopPoint);
    }

    getGlobalTopPoint(): PIXI.Point {
        return new PIXI.Point().copyFrom(this.globalTopPoint);
    }

    /*
    * Warning:
    * It can have a performance overhead due to use this.children.length
    * */
    get localTopPoint(): PIXI.Point {
        const point = this._localTopPoint;
        point.set(
            0,
            -this.children.length * this.offset,
        );
        return point;
    }

    get globalTopPoint(): PIXI.Point {
        const point = this._globalTopPoint;
        point.copyFrom(this.getLocalTopPoint());
        point.x += this.x;
        point.y += this.y;
        return point;
    }
}
