import { Selector } from '@ngxs/store';
import { LoaderState, LoaderStateModel } from './loading.state';

export class LoaderSelectors {
    @Selector([LoaderState])
    static loader(state: LoaderStateModel): boolean {
        return state.loading;
    }
}
