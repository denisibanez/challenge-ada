import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlinedComponent } from './button-outlined.component';
import { MaterialModule } from '../../../app/plugins/material.module';

describe('ButtonOutlinedComponent', () => {
    let component: ButtonOutlinedComponent;
    let fixture: ComponentFixture<ButtonOutlinedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonOutlinedComponent],
            imports: [MaterialModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonOutlinedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
