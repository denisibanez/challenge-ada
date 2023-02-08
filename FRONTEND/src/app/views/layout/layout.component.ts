import { Component, OnInit } from '@angular/core';

// Store
import { Select } from '@ngxs/store';
import { LoaderSelectors } from '../../store/loading/loading.selectors';
import { SnackbarSelectors } from '../..//store/snackbar/snackbar.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    @Select(LoaderSelectors.loader) load$!: Observable<boolean>;
    @Select(SnackbarSelectors.snackbar) snackbar$!: Observable<any>;

    public chargeLoader!: boolean;
    public snackbar!: any;

    constructor() {}

    ngOnInit(): void {
        this.load$.subscribe((u) => {
            this.chargeLoader = u;
        });

        this.snackbar$.subscribe((u) => {
            this.snackbar = u;
        });
    }
}
