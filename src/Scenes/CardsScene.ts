import * as PIXI from 'pixi.js';
import {Assets} from "../Assets";
import {CardsDeck} from "../Views/CardsDeck";

export class CardsScene extends PIXI.Container {
    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super();

        const cardsDeck = new CardsDeck(resources[Assets.card.url].texture, 144, 3);
        const destinationCardsDeck = new CardsDeck(resources[Assets.card.url].texture, 0, 3);
        cardsDeck.x = app.screen.width / 5;
        cardsDeck.y = app.screen.height / 2;
        destinationCardsDeck.x = app.screen.width / 2;
        destinationCardsDeck.y = app.screen.height / 2;
        this.addChild(cardsDeck);
        this.addChild(destinationCardsDeck);
        cardsDeck.transferTo(destinationCardsDeck);
    }
}
