export function tweenToPromise(tween: TWEEN.Tween): Promise<any> {
    return new Promise((resolve) => tween.onComplete(resolve));
}

export function delayToPromise(delay: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
