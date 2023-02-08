import { TestBed } from '@angular/core/testing';
import { SelectedItemModule } from './selectedItem.module';

describe('SelectedItemModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SelectedItemModule],
        });
    });
    it('initializes', () => {
        const module = TestBed.inject(SelectedItemModule);
        expect(module).toBeTruthy();
    });
});
