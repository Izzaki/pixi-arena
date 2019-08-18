export class Assets {
    static card: IAsset = {
        name: 'card',
        url: 'assets/card.png'
    };

    static helmet: IAsset = {
        name: 'helmet',
        url: 'assets/helmet.png'
    };

    static skeleton: IAsset = {
        name: 'skeleton',
        url: 'assets/skeleton.png'
    };

    static key: IAsset = {
        name: 'key',
        url: 'assets/key.png'
    };

    static awesomeFire: IAsset = {
        name: 'awesome-fire',
        url: 'assets/awesome-fire.json'
    };

    static fire: IAsset = {
        name: 'fire',
        url: 'assets/fire.png'
    };
}

export interface IAsset {
    name: string;
    url: string;
}
