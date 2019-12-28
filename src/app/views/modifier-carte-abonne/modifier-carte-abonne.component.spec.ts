import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCarteAbonneComponent } from './modifier-carte-abonne.component';

describe('ModifierCarteAbonneComponent', () => {
  let component: ModifierCarteAbonneComponent;
  let fixture: ComponentFixture<ModifierCarteAbonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierCarteAbonneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCarteAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
