import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import {Assets} from "./Assets";
import {CardsDeck} from "./CardsDeck";
import Stats = require('stats.js');

export class App extends PIXI.Application {
    load(): void {
        const stats = new Stats();
        stats.showPanel( 0 );
        document.body.appendChild( stats.dom );

        this.ticker.add(() => TWEEN.update());
        this.ticker.add(() => stats.update());
        this.loader.add(Assets.card.name, Assets.card.url).load((loader, resources) => {

            const cardsDeck = new CardsDeck(resources.card.texture, 144, 3);
            const destinationCardsDeck = new CardsDeck(resources.card.texture, 0, 3);
            cardsDeck.x = 150;
            cardsDeck.y = 450;
            destinationCardsDeck.x = 350;
            destinationCardsDeck.y = 100;
            this.stage.addChild(cardsDeck);
            this.stage.addChild(destinationCardsDeck);

            cardsDeck.transferTo(destinationCardsDeck);
        });
    }
}
