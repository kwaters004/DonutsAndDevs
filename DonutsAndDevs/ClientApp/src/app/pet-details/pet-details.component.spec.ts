/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PetDetailsComponent } from './pet-details.component';

let component: PetDetailsComponent;
let fixture: ComponentFixture<PetDetailsComponent>;

describe('pet-details component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PetDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PetDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});