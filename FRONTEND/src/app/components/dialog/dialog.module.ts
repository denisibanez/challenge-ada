import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MaterialModule } from '../../plugins/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [DialogComponent],
    imports: [MaterialModule, CommonModule, BrowserAnimationsModule],
    exports: [DialogComponent],
})
export class DialogModule {}
