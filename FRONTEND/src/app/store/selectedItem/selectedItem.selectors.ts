import { Selector } from '@ngxs/store';
import {
    SelectedItemState,
    SelectedItemStateModel,
} from './selectedItem.state';

export class SelectedItemSelectors {
    @Selector([SelectedItemState])
    static selectedItem(state: SelectedItemStateModel): any {
        return state.selectedItem;
    }
}
