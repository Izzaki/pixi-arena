import * as PIXI from 'pixi.js';
import {DefaultScene} from "./DefaultScene";
import Dict = NodeJS.Dict;

export class MusicVisualiserScene extends DefaultScene {

    constructor(app: PIXI.Application, resources: Dict<PIXI.LoaderResource>) {
        super(app, resources);
    }
}
