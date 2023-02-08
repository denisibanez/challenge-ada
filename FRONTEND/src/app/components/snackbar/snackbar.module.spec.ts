import { SnackbarModule } from './snackbar.module';
import { TestBed } from '@angular/core/testing';

describe('SnackbarModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SnackbarModule],
        });
    });

    it('initializes', () => {
        const module = TestBed.inject(SnackbarModule);
        expect(module).toBeTruthy();
    });
});
