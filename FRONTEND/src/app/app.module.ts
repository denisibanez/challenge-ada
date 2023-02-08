// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './views/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { HomeService } from '../../src/app/services/axios';

import { HttpClientModule } from '@angular/common/http';

// Services http request
import { httpInterceptorProviders } from './services/httpRequest/interceptor';

// Router
import { AppRoutingModule } from './router/app-routing.module';

// Libs
import { MaterialModule } from './plugins/material.module';
import { IMaskModule } from 'angular-imask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

// Store
import { StateModule } from './store/store.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { ButtonRaisedComponent } from './components/button-raised/button-raised.component';
import { ButtonOutlinedComponent } from './components/button-outlined/button-outlined.component';
import { InputComponent } from './components/input/input.component';
import { DialogModule } from './components/dialog/dialog.module';
import { TextAreaComponent } from './components/text-area/text-area.component';

// Views
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { DialogTaskComponent } from './views/home/dialog-task/dialog-task.component';
import { DialogDeleteComponent } from './views/home/dialog-delete/dialog-delete.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        StateModule,
        CommonModule,
        SnackbarModule,
        DialogModule,
        IMaskModule,
        CurrencyMaskModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        ButtonRaisedComponent,
        ButtonOutlinedComponent,
        InputComponent,
        TextAreaComponent,
        DialogTaskComponent,
        DialogDeleteComponent,
        LoginComponent,
    ],
    providers: [HomeService, HttpClientModule, httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
