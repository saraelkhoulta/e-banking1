import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteAbonneComponent } from './carte-abonne.component';

describe('CarteAbonneComponent', () => {
  let component: CarteAbonneComponent;
  let fixture: ComponentFixture<CarteAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarteAbonneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
