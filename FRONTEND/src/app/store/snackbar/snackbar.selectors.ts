import { Selector } from '@ngxs/store';
import { SnackbarState, SnackbarStateModel } from './snackbar.state';

export class SnackbarSelectors {
    @Selector([SnackbarState])
    static snackbar(state: SnackbarStateModel): boolean {
        return state.snackbar;
    }
}
