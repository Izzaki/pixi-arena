import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import Stats from 'stats.js';
import {assets, Assets} from "./Configs/assets";
import {DefaultScene} from "./Scenes/DefaultScene";
import {MainMenuScene} from "./Scenes/MainMenuScene";
import {Services} from "./Services/Services";
import {RenderCache} from "./Services/RenderCache";
import Dict = NodeJS.Dict;
import {scenes} from "./Configs/scenes";
import {AnimationService} from "./Services/AnimationService/AnimationService";

export class App extends PIXI.Application {

    private _mainMenuScene: MainMenuScene;

    constructor(options?: PIXI.IApplicationOptions) {
        super(options);

        this.ticker.add(() => TWEEN.update(this.ticker.lastTime), TWEEN);

        this._loadScenes();
        this._turnOnDebugFps();
        this._initializeServices();
    }

    private _initializeServices(): void {
        Services.renderCache = new RenderCache(this.renderer);
        Services.animationService = new AnimationService();
    }

    private _loadScenes(): void {
        this.loader.add(Array.from(assets.values()).map(asset => asset.url)).load((loader, resources: Dict<PIXI.LoaderResource>) => {
            const mainMenuScene = new MainMenuScene(this, resources);
            this._mainMenuScene = mainMenuScene;
            mainMenuScene.initialize(scenes);
            this._setScene(mainMenuScene);

            mainMenuScene.on(MainMenuScene.LEVEL_SELECT_BUTTON, (sceneClass) => this._setScene(new sceneClass(this, resources)));

            // TODO: create configurable general loader.
            const cardTexture = resources[assets.get(Assets.CARD).url].texture;
            cardTexture.orig.width /= 2;
            cardTexture.orig.height /= 2;
        });
    }

    private _setScene(scene: PIXI.Container): void {
        this.stage.removeChildren();
        this.stage.addChild(scene);

        scene.once(DefaultScene.GO_TO_MENU_BUTTON_CLICKED, () => {
            this._setScene(this._mainMenuScene);
        });
    }

    private _turnOnDebugFps(): void {
        const stats = new Stats();
        stats.showPanel(0);
        stats.dom.className += ' fps-meter-container';
        document.body.appendChild(stats.dom);
        this.ticker.add(stats.update.bind(stats));
    }
}
