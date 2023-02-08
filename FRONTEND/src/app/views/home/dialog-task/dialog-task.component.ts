import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { HomeHttpService } from '../../../services/httpRequest/home-http.service';

// Store
import { Select, Store } from '@ngxs/store';
import { SnackbarSelectors } from '../../../store/snackbar/snackbar.selectors';
import { Observable } from 'rxjs';
import { ChangeSnackbarState } from '../../../store/snackbar/snackbar.actions';
import { SelectedItemSelectors } from '../../../store/selectedItem/selectedItem.selectors';
import { Item } from '../models/item.model';

@Component({
    selector: 'app-dialog-task',
    templateUrl: './dialog-task.component.html',
    styleUrls: ['./dialog-task.component.scss'],
})
export class DialogTaskComponent implements OnInit {
    @Output() closeClick = new EventEmitter<any>();
    @Select(SnackbarSelectors.snackbar) snackbar$!: Observable<any>;
    @Select(SelectedItemSelectors.selectedItem) selectedITem$!: Observable<any>;

    public snackbar!: boolean;
    public selectedITem!: Item;

    inputs = {
        title: {
            id: 0,
            label: 'Título',
            type: 'text',
            control: 'title',
            placeholder: 'Digite o título',
            disabled: false,
        },
        description: {
            id: 1,
            label: 'Descrição',
            type: 'text',
            control: 'description',
            placeholder: 'Digite a descrição',
            disabled: false,
        },
    };

    public formAtribute: FormGroup = new FormGroup({
        title: new FormControl(
            { value: null, disabled: this.inputs.title.disabled },
            [Validators.required]
        ),
        description: new FormControl(
            { value: null, disabled: this.inputs.description.disabled },
            [Validators.required]
        ),
    });

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

    createCard() {
        this.loader = true;
        const param = {
            titulo: this.formAtribute.controls['title'].value,
            conteudo: this.formAtribute.controls['description'].value,
            lista: 'TO_DO',
        };
        this.homeHttpService.postCard(param).subscribe({
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

    updateCard() {
        this.loader = true;
        const param = {
            titulo: this.formAtribute.controls['title'].value,
            conteudo: this.formAtribute.controls['description'].value,
            lista: this.selectedITem.lista,
            id: this.selectedITem.id,
        };
        this.homeHttpService.putCard(param).subscribe({
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

    controlAction() {
        if (this.selectedITem.id) {
            this.updateCard();
        } else {
            this.createCard();
        }
    }

    closeDialog() {
        this.formAtribute.reset();
        this.closeClick.emit();
    }
}
