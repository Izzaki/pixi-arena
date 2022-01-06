export class Config {
    static ANIMATION_DURATION: number = 800 * 4;
    static CARD_TRANSFER_DELAY: number = 100;
    static get DEFAULT_FONT_STYLE() {
        return {fill: 0xFFFFFF, fontSize: 48, fontFamily: 'monospace'};
    };
}
