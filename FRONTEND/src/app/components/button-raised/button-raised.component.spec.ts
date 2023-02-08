import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRaisedComponent } from './button-raised.component';
import { MaterialModule } from '../../../app/plugins/material.module';

describe('ButtonRaisedComponent', () => {
    let component: ButtonRaisedComponent;
    let fixture: ComponentFixture<ButtonRaisedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonRaisedComponent],
            imports: [MaterialModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonRaisedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
