import * as PIXI from 'pixi.js';
import {Assets} from "../Assets";
import {Config} from "../Config";

const mixedTextImages = new Map([
    [':helmet:', Assets.helmet.url],
    [':key:', Assets.key.url],
    [':skeleton:', Assets.skeleton.url]
]);

export class MixedText extends PIXI.Container {

    protected _mixed: Array<PIXI.Text | PIXI.Sprite> = [];
    protected _texts: Array<PIXI.Text> = [];
    protected _sprites: Array<PIXI.Sprite> = [];

    constructor(text: string = '') {
        super();

        this.setText(text);
    }

    setText(text: string): this {
        this._clear();
        const allImagesKeys = Array.from(mixedTextImages.keys());
        const imagesRegex = new RegExp('(' + allImagesKeys.join('|') + ')', 'g');
        const mixed = text.split(imagesRegex);
        this._constructMixedContent(mixed);
        this._updateSize();
        return this;
    }

    setFontSize(size: number): this {
        this._texts.forEach(text => text.style.fontSize = size);
        this._sprites.forEach(sprite => {
            sprite.width = size;
            sprite.height = size
        });
        this._updateSize();
        return this;
    }

    protected _updateSize(): void {
        let previousTextBounds: PIXI.Rectangle;
        this._mixed.forEach((something, index) => {
            if (previousTextBounds) {
                something.x = previousTextBounds.x + previousTextBounds.width;
            }

            previousTextBounds = new PIXI.Rectangle(
                something.x,
                something.y,
                something.width,
                something.height
            );
        });
    }

    protected _clear(): void {
        this.removeChildren();
        this._mixed = [];
        this._texts = [];
        this._sprites = [];
    }

    protected _constructMixedContent(mixed: Array<string>): void {
        mixed.forEach((something: string) => {
            let somethingObject: PIXI.Text | PIXI.Sprite;
            if (mixedTextImages.has(something)) {
                somethingObject = PIXI.Sprite.from(mixedTextImages.get(something));
                this._sprites.push(somethingObject);
            } else {
                somethingObject = new PIXI.Text(something, Config.DEFAULT_FONT_STYLE);
                this._texts.push(somethingObject as PIXI.Text);
            }
            this._mixed.push(somethingObject);
            this.addChild(somethingObject);
        });
    }
}
