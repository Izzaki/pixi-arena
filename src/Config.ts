export class Config {
    static ANIMATION_DURATION: number = 2000;
    static CARD_TRANSFER_DELAY: number = 1000;
    static get DEFAULT_FONT_STYLE() {
        return {fill: 0xFFFFFF, fontSize: 42, fontFamily: 'monospace'};
    };
}
