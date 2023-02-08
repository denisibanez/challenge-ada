import { NgModule } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarSlotComponent } from './snackbar.component';
import { MaterialModule } from '../../plugins/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [SnackbarComponent, SnackbarSlotComponent],
    imports: [MaterialModule, CommonModule, BrowserAnimationsModule],
    exports: [SnackbarComponent],
    entryComponents: [SnackbarSlotComponent],
})
export class SnackbarModule {}
