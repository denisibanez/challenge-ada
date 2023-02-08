import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgxsModule } from '@ngxs/store';

// State
import { LoaderState } from './loading/loading.state';
import { LoadingModule } from './loading/loading.module';
import { SnackbarState } from './snackbar/snackbar.state';
import { SnackbarStateModule } from './snackbar/snackbar.module';

import { SelectedItemState } from './selectedItem/selectedItem.state';
import { SelectedItemModule } from './selectedItem/selectedItem.module';

@NgModule({
    exports: [LoadingModule, SnackbarStateModule, SelectedItemModule],
    imports: [
        NgxsModule.forRoot([LoaderState, SnackbarState, SelectedItemState], {
            developmentMode: !environment.production,
        }),
    ],
})
export class StateModule {}
