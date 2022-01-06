import {MusicVisualiserScene} from "../Scenes/MusicVisualiserScene";
import {MixedTextScene} from "../Scenes/MixedTextScene";
import {AwesomeFireScene} from "../Scenes/AwesomeFireScene";
import {CardsScene} from "../Scenes/CardsScene";
import * as PIXI from "pixi.js";
import {IClass} from "../utils";

export interface ISceneConfig {
    name: string;
    sceneClass: IClass<PIXI.Container>;
}

export const scenes: Array<ISceneConfig> = [
    {
        name: 'Music Visualiser',
        sceneClass: MusicVisualiserScene,
    },
    {
        name: 'Cards',
        sceneClass: CardsScene,
    },
    {
        name: 'Mixed Text',
        sceneClass: MixedTextScene,
    },
    {
        name: 'Fire',
        sceneClass: AwesomeFireScene,
    }
];
