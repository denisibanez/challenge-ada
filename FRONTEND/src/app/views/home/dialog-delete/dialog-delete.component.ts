import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Store
import { Select, Store } from '@ngxs/store';
import { SnackbarSelectors } from '../../../store/snackbar/snackbar.selectors';
import { Observable } from 'rxjs';
import { ChangeSnackbarState } from '../../../store/snackbar/snackbar.actions';
import { SelectedItemSelectors } from '../../../store/selectedItem/selectedItem.selectors';
import { Item } from '../models/item.model';

// Services
import { HomeHttpService } from '../../../services/httpRequest/home-http.service';

@Component({
    selector: 'app-dialog-delete',
    templateUrl: './dialog-delete.component.html',
    styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent implements OnInit {
    @Output() closeClick = new EventEmitter<any>();
    @Select(SnackbarSelectors.snackbar) snackbar$!: Observable<any>;
    @Select(SelectedItemSelectors.selectedItem) selectedITem$!: Observable<any>;
    public snackbar!: boolean;
    public selectedITem!: any;

    loader: boolean = false;

    constructor(
        private store: Store,
        private homeHttpService: HomeHttpService
    ) {}

    ngOnInit(): void {
        this.selectedITem$.subscribe((u) => {
            this.selectedITem = u;
        });
    }

    closeDialog() {
        this.closeClick.emit();
    }

    deleteCard() {
        this.loader = true;
        this.homeHttpService.deleteCard(this.selectedITem.id).subscribe({
            next: (response: any) => {
                console.log(response, 'http');
                this.loader = false;
                this.closeDialog();
            },
            error: (error) => {
                console.log(error);
                this.loader = false;
                this.store.dispatch(
                    new ChangeSnackbarState({
                        duration: 15000,
                        icon: 'error',
                        theme: 'error-theme',
                        message:
                            'Desculpe, a requisição falhou! Por favor, Tente novamente.',
                        horizontalPosition: 'bottom',
                        verticalPosition: 'center',
                        show: true,
                    })
                );
            },
        });
    }
}
