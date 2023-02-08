import { TestBed } from '@angular/core/testing';
import { SnackbarStateModule } from './snackbar.module';

describe('SnackbarModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SnackbarStateModule],
        });
    });

    it('initializes', () => {
        const module = TestBed.inject(SnackbarStateModule);
        expect(module).toBeTruthy();
    });
});
