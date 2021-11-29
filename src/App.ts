import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import Stats from 'stats.js';

import {Assets} from "./Assets";
import {AwesomeFireScene} from "./Scenes/AwesomeFireScene";
import {CardsScene} from "./Scenes/CardsScene";
import {DefaultScene} from "./Scenes/DefaultScene";
import {MainMenuScene} from "./Scenes/MainMenuScene";
import {MixedTextScene} from "./Scenes/MixedTextScene";
import Dict = NodeJS.Dict;

export class App extends PIXI.Application {

    private _mainMenuScene: MainMenuScene;

    load(): void {
        this._turnOnDebugFps();
        this._loadScenes();
    }

    private _loadScenes(): void {
        this.ticker.add(() => TWEEN.update(this.ticker.lastTime), TWEEN);
        this.loader.add([
            Assets.card.url,
            Assets.helmet.url,
            Assets.key.url,
            Assets.skeleton.url,
            Assets.fire.url,
            Assets.awesomeFire.url,
        ]).load((loader, resources: Dict<PIXI.LoaderResource>) => {
            const mainMenuScene = new MainMenuScene(this, resources);
            this._mainMenuScene = mainMenuScene;
            mainMenuScene.on(MainMenuScene.CARDS_BUTTON_CLICKED, () => this._setScene(new CardsScene(this, resources)));
            mainMenuScene.on(MainMenuScene.MIXED_TEXT_BUTTON_CLICKED, () => this._setScene(new MixedTextScene(this, resources)));
            mainMenuScene.on(MainMenuScene.FIRE_BUTTON_CLICKED, () => this._setScene(new AwesomeFireScene(this, resources)));
            this._setScene(mainMenuScene);
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
