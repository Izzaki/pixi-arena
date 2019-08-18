import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles';
(PIXI.Texture.fromImage as any) = PIXI.Texture.from; // pixi-particles has been not updated for PIXIv5 :/
import {DefaultScene} from "./DefaultScene";
import {Assets} from "../Assets";

export class AwesomeFireScene extends DefaultScene {
    constructor(app: PIXI.Application, resources: PIXI.LoaderResource) {
        super(app, resources);

        const particleContainer = new PIXI.Container();
        particleContainer.scale = new PIXI.Point(1, 1);
        particleContainer.x = app.screen.width / 2;
        particleContainer.y = app.screen.height / 2;
        this.addChild(particleContainer);

        const emitter = new particles.Emitter(particleContainer, Assets.fire.url, resources[Assets.awesomeFire.url].data);

        app.ticker.add(emitter.update.bind(emitter));
    }
}
