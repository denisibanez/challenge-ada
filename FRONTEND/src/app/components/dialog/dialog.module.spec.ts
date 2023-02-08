import { TestBed } from '@angular/core/testing';
import { DialogModule } from './dialog.module';

describe('SnackbarModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DialogModule],
        });
    });

    it('initializes', () => {
        const module = TestBed.inject(DialogModule);
        expect(module).toBeTruthy();
    });
});
