import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-raised',
    templateUrl: './button-raised.component.html',
    styleUrls: ['./button-raised.component.scss'],
})
export class ButtonRaisedComponent implements OnInit {
    @Input() disabled: boolean = false;
    @Input() loader: boolean = false;
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
