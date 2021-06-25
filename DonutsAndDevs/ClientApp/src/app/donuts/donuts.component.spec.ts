/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DonutsComponent } from './donuts.component';

let component: DonutsComponent;
let fixture: ComponentFixture<DonutsComponent>;

describe('donuts component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DonutsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DonutsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});