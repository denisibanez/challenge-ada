import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ChangeSnackbarState } from './snackbar.actions';

export interface SnackbarStateModel {
    snackbar: any;
}

@State<SnackbarStateModel>({
    name: 'snackbar',
    defaults: {
        snackbar: null,
    },
})
@Injectable()
export class SnackbarState {
    @Action(ChangeSnackbarState)
    async changeSnackbarState(
        ctx: StateContext<SnackbarStateModel>,
        action: ChangeSnackbarState
    ) {
        const { snackbar } = await action;

        ctx.setState({
            snackbar: snackbar,
        });
    }
}
