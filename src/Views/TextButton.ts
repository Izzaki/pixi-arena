import * as PIXI from "pixi.js";
import {PIXIEvents} from "../Events/PIXIEvents";

export class TextButton extends PIXI.Text {
    constructor(text: string, style: object, onClick?: Function) {
        super(text, style);
        this.interactive = true;
        this.cursor = 'pointer';

        if (onClick) {
            this.on(PIXIEvents.POINTER_UP, (event) => onClick(event));
        }
    }
}
