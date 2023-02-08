export class ChangeSelectedItemState {
    static readonly type = '[SelectedItem state] Change SelectedItem State';
    constructor(public selectedItem: any) {}
}
