import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-outlined',
    templateUrl: './button-outlined.component.html',
    styleUrls: ['./button-outlined.component.scss'],
})
export class ButtonOutlinedComponent implements OnInit {
    @Input() disabled: boolean = false;
    @Input() label: string = 'Texto do Botão';
    @Input() color: string = 'primary';
    @Input() large: boolean = false;
    @Input() icon: string = 'home';

    @Output() btnClick = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}

    onBtnClick(): void {
        this.btnClick.emit();
    }
}
