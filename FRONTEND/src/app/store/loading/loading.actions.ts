export class ChangeLoaderState {
    static readonly type = '[Loader state] Change Loader State';
    constructor(public loading: boolean) {}
}
