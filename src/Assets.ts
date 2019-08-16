export class Assets {
    static card: IAsset = {
        name: 'card',
        url: 'assets/card.png'
    }
}

export interface IAsset {
    name: string;
    url: string;
}
