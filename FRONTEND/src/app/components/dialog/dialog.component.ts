import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
    @Input() title: string = 'Esse é o título do modal';
    @Input() width: string = '520px';
    @Input() height: string = '';
    @Input() id: string = 'open-modal';

    @Output() closeClick = new EventEmitter<any>();

    ngOnInit(): void {}

    close(): void {
        this.closeClick.emit();
    }
}
