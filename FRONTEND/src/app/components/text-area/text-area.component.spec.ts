import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../plugins/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextAreaComponent } from './text-area.component';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

describe('TextAreaComponent', () => {
    let component: TextAreaComponent;
    let fixture: ComponentFixture<TextAreaComponent>;
    let formAtribute: FormGroup;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TextAreaComponent],
            imports: [
                MaterialModule,
                CommonModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [{ provide: FormBuilder, useValue: formBuilder }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TextAreaComponent);
        component = fixture.componentInstance;
        component.formAtribute = formBuilder.group({
            firstName: new FormControl(),
            name: new FormControl(),
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
