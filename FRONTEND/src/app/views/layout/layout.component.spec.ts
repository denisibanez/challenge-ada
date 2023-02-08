import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { LoaderState } from '../../../../src/app/store/loading/loading.state';
import { SnackbarState } from '../../../../src/app/store/snackbar/snackbar.state';
import { MaterialModule } from '../../../app/plugins/material.module';
import { RouterModule } from '@angular/router';
// Components
import { HeaderComponent } from '../../../../src/app/components/header/header.component';
import { FooterComponent } from '../../../../src/app/components/footer/footer.component';
import { LoaderComponent } from '../../../../src/app/components/loader/loader.component';
import { SnackbarModule } from '../../../../src/app/components/snackbar/snackbar.module';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    const stubs = ['router-outlet'];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LayoutComponent,
                HeaderComponent,
                FooterComponent,
                LoaderComponent,
            ],
            imports: [
                NgxsModule.forRoot([LoaderState, SnackbarState]),
                MaterialModule,
                SnackbarModule,
                RouterModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
