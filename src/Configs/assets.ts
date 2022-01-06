export enum Assets {
    CARD,
    HELMET,
    SKELETON,
    KEY,
    AWESOME_FIRE,
    FIRE,
}

export const assets: Map<Assets, IAsset> = new Map([
    [Assets.CARD, {
        name: 'card',
        url: 'assets/card.png'
    }],

    [Assets.HELMET, {
        name: 'helmet',
        url: 'assets/helmet.png'
    }],

    [Assets.SKELETON, {
        name: 'skeleton',
        url: 'assets/skeleton.png'
    }],

    [Assets.KEY, {
        name: 'key',
        url: 'assets/key.png'
    }],

    [Assets.AWESOME_FIRE, {
        name: 'awesome-fire',
        url: 'assets/awesome-fire.json'
    }],

    [Assets.FIRE, {
        name: 'fire',
        url: 'assets/fire.png'
    }]
]);

export interface IAsset {
    name: string;
    url: string;
}
