/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FamousPersonDetailComponent } from './famous-person-detail.component';

let component: FamousPersonDetailComponent;
let fixture: ComponentFixture<FamousPersonDetailComponent>;

describe('famous-person-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FamousPersonDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FamousPersonDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});