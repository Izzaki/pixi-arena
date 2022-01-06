export interface IAnimation {
    animate(...args: Array<any>): any;
}

export class AnimationService {

    async animate<T extends IAnimation>(animation: T): Promise<any> {
        return animation.animate();
    }
}
