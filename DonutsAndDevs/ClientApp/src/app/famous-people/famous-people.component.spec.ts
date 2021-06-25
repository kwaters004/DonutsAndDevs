/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FamousPeopleComponent } from './famous-people.component';

let component: FamousPeopleComponent;
let fixture: ComponentFixture<FamousPeopleComponent>;

describe('famous-people component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FamousPeopleComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FamousPeopleComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});