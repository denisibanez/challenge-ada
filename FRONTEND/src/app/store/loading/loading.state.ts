import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ChangeLoaderState } from './loading.actions';

export interface LoaderStateModel {
    loading: boolean;
}

@State<LoaderStateModel>({
    name: 'loading',
    defaults: {
        loading: false,
    },
})
@Injectable()
export class LoaderState {
    @Action(ChangeLoaderState)
    async changeLoaderState(
        ctx: StateContext<LoaderStateModel>,
        action: ChangeLoaderState
    ) {
        const { loading } = await action;

        ctx.setState({
            loading: loading,
        });
    }
}
