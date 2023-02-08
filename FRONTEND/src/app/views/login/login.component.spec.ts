import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { MaterialModule } from '../../plugins/material.module';

import { RouterTestingModule } from '@angular/router/testing';

import { NgxsModule } from '@ngxs/store';

import { SnackbarState } from '../../store/snackbar/snackbar.state';
import { LoaderState } from '../../store/loading/loading.state';
import { ChangeSnackbarState } from '../../store/snackbar/snackbar.actions';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let formAtribute: FormGroup;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                NgxsModule.forRoot([SnackbarState, LoaderState]),
                RouterTestingModule,
                MaterialModule,
                CommonModule,
                BrowserAnimationsModule,
                MaterialModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [{ provide: FormBuilder, useValue: formBuilder }],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
