import { Component, Input, OnChanges, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    MAT_SNACK_BAR_DATA,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnChanges {
    @Input() show: boolean = false;
    @Input() message: string = 'Sua mensagem aqui';
    @Input() theme: string = 'success-theme';
    @Input() icon: string = 'check_circle';
    @Input() duration: number = 5000;
    @Input() horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    @Input() verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(public snackBar: MatSnackBar) {}

    ngOnChanges(): void {
        if (this.show)
            this.openSnackBar(
                this.message,
                this.duration,
                this.theme,
                this.icon,
                this.horizontalPosition,
                this.verticalPosition
            );
    }

    openSnackBar(
        message: string,
        duration: number,
        theme: string,
        icon: string,
        horizontalPosition: MatSnackBarHorizontalPosition,
        verticalPosition: MatSnackBarVerticalPosition
    ) {
        this.snackBar.openFromComponent(SnackbarSlotComponent, {
            duration,
            panelClass: theme,
            horizontalPosition,
            verticalPosition,
            data: {
                message,
                icon,
                preClose: () => {
                    this.snackBar.dismiss();
                },
            },
        });
    }
}
@Component({
    selector: 'app-snack-bar-component-slot',
    templateUrl: 'snack-bar-component-slot.html',
    template: '{{ data }}',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarSlotComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

    close() {
        this.data.preClose();
    }
}
