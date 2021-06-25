/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DonutDetailComponent } from './donut-detail.component';

let component: DonutDetailComponent;
let fixture: ComponentFixture<DonutDetailComponent>;

describe('donut-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DonutDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DonutDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});