import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// services
import { AuthHttpService } from '../../services/httpRequest/auth-http.service';

// Store
import { Store } from '@ngxs/store';
import { ChangeLoaderState } from '../../store/loading/loading.actions';
import { Select } from '@ngxs/store';
import { LoaderSelectors } from '../../store/loading/loading.selectors';
import { Observable } from 'rxjs';
import { ChangeSnackbarState } from '../../store/snackbar/snackbar.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthHttpService],
})
export class LoginComponent implements OnInit {
    @Select(LoaderSelectors.loader) load$!: Observable<boolean>;

    public chargeLoader = false;

    constructor(
        private store: Store,
        private authService: AuthHttpService,
        private router: Router
    ) {}

    public formAtribute: FormGroup = new FormGroup({
        login: new FormControl(null, [Validators.required]),
        senha: new FormControl(null, [Validators.required]),
    });

    public inputs = [
        {
            id: 0,
            label: 'Usuário',
            type: 'text',
            haveIcon: false,
            formControl: 'login',
            value: null,
        },
        {
            id: 1,
            label: 'Senha',
            type: 'password',
            haveIcon: true,
            icon: 'eye',
            checkedIcon: 'eye-off',
            formControl: 'senha',
            value: null,
        },
    ];

    ngOnInit(): void {
        this.load$.subscribe((u) => {
            this.chargeLoader = u;
        });
    }

    async login(): Promise<void> {
        const payload = {
            login: this.formAtribute.controls['login'].value,
            senha: this.formAtribute.controls['senha'].value,
        };
        this.store.dispatch(new ChangeLoaderState(true));
        await this.authService.authService(payload).subscribe({
            next: (response: any) => {
                this.store.dispatch(new ChangeLoaderState(false));
                console.log(response);
                localStorage.setItem('TOKEN_CHALLENGE', response);
                this.router.navigate(['']);
            },
            error: (error) => {
                this.store.dispatch(new ChangeLoaderState(false));
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

    childEventClicked(event: any): void {}

    onBlurEvent($event: any): void {
        // console.log($event)
    }

    onFocusEvent($event: any): void {
        // console.log($event)
    }
}
