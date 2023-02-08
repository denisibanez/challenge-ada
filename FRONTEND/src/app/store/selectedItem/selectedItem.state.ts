import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ChangeSelectedItemState } from './selectedItem.actions';

export interface SelectedItemStateModel {
    selectedItem: any;
}

@State<SelectedItemStateModel>({
    name: 'selectedItem',
    defaults: {
        selectedItem: [],
    },
})
@Injectable()
export class SelectedItemState {
    @Action(ChangeSelectedItemState)
    async changeSelectedItemState(
        ctx: StateContext<SelectedItemStateModel>,
        action: ChangeSelectedItemState
    ) {
        const { selectedItem } = await action;

        ctx.setState({
            selectedItem: selectedItem,
        });
    }
}
