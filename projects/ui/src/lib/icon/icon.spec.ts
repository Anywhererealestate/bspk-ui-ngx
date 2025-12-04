import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { UIIcon } from './icon';
import { hasNoBasicA11yIssues } from '../../testutils/hasNoBasicA11yIssues';

describe('Icon', () => {
    let fixture: ComponentFixture<UIIcon>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UIIcon],
            providers: [provideHttpClient(), provideHttpClientTesting()],
        }).compileComponents();

        fixture = TestBed.createComponent(UIIcon);

        fixture.componentRef.setInput('name', 'Check');
        fixture.componentRef.setInput('width', '20');

        fixture.detectChanges();
    });

    it('should render', async () => {
        const http = TestBed.inject(HttpTestingController);
        http.expectOne('/icons/Check.svg').flush('<svg></svg>');
    });

    it('should have no basic a11y issues', async () => await hasNoBasicA11yIssues(fixture));
});
