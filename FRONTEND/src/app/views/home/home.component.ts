import { Component, OnInit } from '@angular/core';
import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
    CdkDropList,
} from '@angular/cdk/drag-drop';

// Services
import { HomeHttpService } from '../../services/httpRequest/home-http.service';

// Store
import { Select, Store } from '@ngxs/store';
import { LoaderSelectors } from '../../store/loading/loading.selectors';
import { SnackbarSelectors } from '../../store/snackbar/snackbar.selectors';
import { Observable } from 'rxjs';
import { ChangeLoaderState } from '../../store/loading/loading.actions';
import { ChangeSnackbarState } from '../../store/snackbar/snackbar.actions';

//models

import { Board } from './models/board.model';
import { Column } from './models/column.model';
import { Item } from './models/item.model';
import { ChangeSelectedItemState } from '../../store/selectedItem/selectedItem.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [HomeHttpService],
})
export class HomeComponent implements OnInit {
    @Select(LoaderSelectors.loader) load$!: Observable<boolean>;
    @Select(SnackbarSelectors.snackbar) snackbar$!: Observable<any>;

    public chargeLoader!: boolean;
    public snackbar!: boolean;

    public board: Board = new Board('Desafio Board', [
        new Column('To do', '01', 'list_alt', []),
        new Column('Doing', '02', 'refresh', []),
        new Column('Done', '03', 'task_alt', []),
    ]);

    constructor(
        private store: Store,
        private homeHttpService: HomeHttpService
    ) {}

    ngOnInit(): void {
        this.load$.subscribe((u) => {
            this.chargeLoader = u;
        });

        this.getList();
        console.log(this.board);
    }

    getList() {
        this.store.dispatch(new ChangeLoaderState(true));
        this.store.dispatch(new ChangeSelectedItemState({}));

        this.homeHttpService.getCards().subscribe({
            next: (response: any) => {
                this.store.dispatch(new ChangeLoaderState(false));

                const TO_DO = response.filter((item: any) =>
                    item.lista.includes('TO_DO')
                );
                const DOING = response.filter((item: any) =>
                    item.lista.includes('DOING')
                );
                const DONE = response.filter((item: any) =>
                    item.lista.includes('DONE')
                );

                this.board.columns.map((item: any) => {
                    if (item.name === 'To do') {
                        item.tasks = TO_DO;
                    }
                    if (item.name === 'Doing') {
                        item.tasks = DOING;
                    }
                    if (item.name === 'Done') {
                        item.tasks = DONE;
                    }
                });
            },
            error: (error) => {
                console.log(error);
                this.store.dispatch(new ChangeLoaderState(false));
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

    public drop(event: CdkDragDrop<Item[]>): void {
        const expr = event.container.id;
        let controlerList = '';

        switch (expr) {
            case '01':
                controlerList = 'TO_DO';
                break;
            case '02':
                controlerList = 'DOING';
                break;
            case '03':
                controlerList = 'DONE';
                break;
            default:
                break;
        }

        const { titulo, conteudo, id } =
            event.previousContainer.data[event.previousIndex];
        const param = {
            titulo,
            conteudo,
            lista: controlerList,
            id,
        };

        this.updateCard(param, event);
    }

    updateCard(param: Item, event: CdkDragDrop<Item[]>) {
        this.homeHttpService.putCard(param).subscribe({
            next: (response: any) => {
                console.log(response, 'http');
                if (event.previousContainer === event.container) {
                    moveItemInArray(
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex
                    );
                } else {
                    transferArrayItem(
                        event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex
                    );
                }
                this.getList();
            },
            error: (error) => {
                console.log(error);
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

    openDialog($event: string) {
        window.location.hash = $event;
    }

    selectedItem($event: Item) {
        this.store.dispatch(new ChangeSelectedItemState($event));
    }
}
