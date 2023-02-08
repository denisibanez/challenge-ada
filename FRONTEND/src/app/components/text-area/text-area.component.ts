import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text-area',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() item: any = {};
    @Input() small: boolean = false;
    @Input() control: any = 'name';

    @Output() blurEvent = new EventEmitter<any>();
    @Output() focusEvent = new EventEmitter<any>();
    @Input() formAtribute!: FormGroup;

    public input: any = '';

    constructor() {}

    ngOnInit(): void {}

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
}
