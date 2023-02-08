import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    @Input() id: number = 0;
    @Input() label: any = '';
    @Input() type: any = 'text';
    @Input() mask: any = '00/00/0000';
    @Input() formAtribute!: FormGroup;
    @Input() control: any = 'name';
    @Input() icon: any = null;
    @Input() placeholder: any = '';
    @Input() textAlign: string = 'left';
    @Input() hint: any = null;
    @Input() item: any = {};
    @Input() maxlength: any = 9999;
    @Input() iconTooltip: any = '';
    @Input() infoTooltip: any = '';
    @Input() currencyOptions: any = {
        prefix: 'R$ ',
        thousands: '.',
        decimal: ',',
    };
    @Output() eventClicked = new EventEmitter<any>();
    @Output() blurEvent = new EventEmitter<any>();
    @Output() focusEvent = new EventEmitter<any>();
    public input: any = '';

    constructor() {}

    ngOnInit(): void {
        // console.log(this.formAtribute)
    }

    onFocus(item: any): void {
        this.focusEvent.emit({
            item,
            data: this.input,
        });
    }

    onBlur(item: any): void {
        this.blurEvent.emit({
            item,
            data: this.input,
        });
    }

    clickIcon(item: any): void {
        this.eventClicked.emit({
            item,
            data: this.input,
        });
    }
}
