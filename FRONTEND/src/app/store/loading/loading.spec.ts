import { TestBed } from '@angular/core/testing';
import { LoadingModule } from './loading.module';

describe('LoadingModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoadingModule],
        });
    });
    it('initializes', () => {
        const module = TestBed.inject(LoadingModule);
        expect(module).toBeTruthy();
    });
});
