import * as PIXI from 'pixi.js';
import * as Particles from 'pixi-particles';
import {DefaultScene} from "./DefaultScene";
import {Assets} from "../Configs/assets";
import Dict = NodeJS.Dict;
import {getAsset} from "../utils";

export class AwesomeFireScene extends DefaultScene {
    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
        super(app, resources);

        const particleContainer = new PIXI.Container();
        particleContainer.scale.copyFrom(new PIXI.Point(1, 1));
        particleContainer.x = app.screen.width / 2;
        particleContainer.y = app.screen.height / 2;
        this.addChild(particleContainer);

        const emitter = new Particles.Emitter(particleContainer, getAsset(Assets.FIRE, resources).url, getAsset(Assets.AWESOME_FIRE, resources).data);

        app.ticker.add(emitter.update.bind(emitter));
    }
}
