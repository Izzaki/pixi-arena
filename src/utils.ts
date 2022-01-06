import * as TWEEN from '@tweenjs/tween.js';
import * as PIXI from "pixi.js";
import {assets, Assets} from "./Configs/assets";
import Dict = NodeJS.Dict;

export function getAsset(assetName: Assets, resources: Dict<PIXI.LoaderResource>) {
    return resources[assets.get(Assets.CARD).url];
}

export function tweenToPromise(tween: TWEEN.Tween<any>): Promise<any> {
    return new Promise((resolve) => tween.onComplete(resolve));
}

export function sleep(delay: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export function shuffle<T = any>(array: Array<T>): Array<T> {
    return array
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}

export function fullScreen(): void {
    const body: any = document.body;
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { /* Firefox */
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { /* IE/Edge */
        body.msRequestFullscreen();
    }
}

export function eventName(target: any, key: string): void {
    target[key] = `generated_event_name_${target.name}.${key}`;
}

export interface IClass<T> {
    new(...args: Array<any>): T;
}
