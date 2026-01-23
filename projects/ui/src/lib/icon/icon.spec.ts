import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hasNoBasicA11yIssues } from '@shared/testing/hasNoBasicA11yIssues';
import { Icon360 } from '../icons';
import { UIIcon } from './icon';

describe('Icon', () => {
    let fixture: ComponentFixture<UIIcon>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIIcon],
            providers: [provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        fixture = TestBed.createComponent(UIIcon);

        fixture.componentRef.setInput('icon', Icon360);
        fixture.componentRef.setInput('width', '20');

        fixture.detectChanges();
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
