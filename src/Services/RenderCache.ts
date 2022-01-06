import * as PIXI from "pixi.js";

export class RenderCache {

    protected cacheMap: Map<PIXI.DisplayObject, PIXI.Sprite> = new Map();

    constructor(protected renderer: PIXI.AbstractRenderer) {
    }

    cache(object: PIXI.DisplayObject): PIXI.Sprite {
        const sprite = new PIXI.Sprite(this.renderer.generateTexture(object));
        sprite.position.copyFrom(object);
        object.parent.addChild(sprite);
        object.visible = false;

        this.cacheMap.set(object, sprite);
        return sprite;
    }

    uncache(object: PIXI.DisplayObject): void {
        object.visible = true;
        this.cacheMap.get(object)?.destroy();
        this.cacheMap.delete(object);
    }
}
