import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from './../../plugins/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;
    let formAtribute: FormGroup;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputComponent],
            imports: [
                MaterialModule,
                IMaskModule,
                CommonModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                CurrencyMaskModule,
            ],
            providers: [{ provide: FormBuilder, useValue: formBuilder }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
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

    /* it(' Method is called', () => {
    const param: any = {
      item: [],
      data: '',
    }
    const emit = jest.spyOn(component.focusEvent , 'emit');
    component.onFocus(param)
    expect(emit).toHaveBeenCalledWith(param);
  });

  it('onBlur Method is called', () => {
    const param: any = {
      item: [],
      data: '',
    }
    const emit = jest.spyOn(component.blurEvent , 'emit');
    component.onBlur(param)
    expect(emit).toHaveBeenCalledWith(param);
  });

  it('clickIcon Method is called', () => {
    const param: any = {
      item: [],
      data: '',
    }
    const emit = jest.spyOn(component.eventClicked , 'emit');
    component.clickIcon(param)
    expect(emit).toHaveBeenCalledWith(param);
  });*/
});
